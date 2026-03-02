#!/usr/bin/env python3
"""
record_site.py - Records a scrolling video of a website and takes screenshots.
"""

import sys
import os
import time
import subprocess
import signal

# --- Configuration ---
OUTPUT_DIR = "output"
VIDEO_RAW = os.path.join(OUTPUT_DIR, "recording_raw.mp4")
VIDEO_FINAL = os.path.join(OUTPUT_DIR, "recording.mp4")
SCREENSHOT_DIR = os.path.join(OUTPUT_DIR, "screenshots")
RESOLUTION = (1920, 1080)
VIDEO_DURATION = 30
SCREENSHOT_INTERVAL = 5
DISPLAY = ":99"


def setup_output_dirs():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(SCREENSHOT_DIR, exist_ok=True)


def start_xvfb():
    print(f"[*] Starting Xvfb on display {DISPLAY} at {RESOLUTION[0]}x{RESOLUTION[1]}...")
    proc = subprocess.Popen([
        "Xvfb", DISPLAY,
        "-screen", "0", f"{RESOLUTION[0]}x{RESOLUTION[1]}x24",
        "-ac"
    ])
    time.sleep(1)
    return proc


def start_ffmpeg():
    print("[*] Starting ffmpeg screen capture...")
    cmd = [
        "ffmpeg",
        "-y",
        "-f", "x11grab",
        "-r", "30",
        "-s", f"{RESOLUTION[0]}x{RESOLUTION[1]}",
        "-i", DISPLAY,
        "-c:v", "libx264",
        "-preset", "ultrafast",
        "-pix_fmt", "yuv420p",
        VIDEO_RAW
    ]
    proc = subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1)
    return proc


def compress_video():
    print("[*] Compressing video...")
    cmd = [
        "ffmpeg",
        "-y",
        "-i", VIDEO_RAW,
        "-c:v", "libx264",
        "-crf", "28",
        "-preset", "slow",
        "-vf", f"scale={RESOLUTION[0]}:{RESOLUTION[1]}",
        "-pix_fmt", "yuv420p",
        VIDEO_FINAL
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.remove(VIDEO_RAW)
    size_mb = os.path.getsize(VIDEO_FINAL) / (1024 * 1024)
    print(f"[OK] Final video saved: {VIDEO_FINAL} ({size_mb:.2f} MB)")


def record_site(url):
    setup_output_dirs()
    xvfb_proc = start_xvfb()
    ffmpeg_proc = start_ffmpeg()

    env = os.environ.copy()
    env["DISPLAY"] = DISPLAY

    try:
        from playwright.sync_api import sync_playwright

        with sync_playwright() as p:
            print(f"[*] Opening browser and navigating to: {url}")
            browser = p.chromium.launch(
                headless=False,
                args=[
                    f"--window-size={RESOLUTION[0]},{RESOLUTION[1]}",
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                    "--kiosk",              # fullscreen, no toolbar, no address bar
                ],
                env=env
            )
            context = browser.new_context(
                viewport={"width": RESOLUTION[0], "height": RESOLUTION[1]}
            )
            page = context.new_page()
            page.goto(url, wait_until="networkidle", timeout=30000)
            time.sleep(2)

            total_height = page.evaluate("document.body.scrollHeight")
            print(f"[*] Page height: {total_height}px | Viewport: {RESOLUTION[1]}px")

            # Smooth continuous scroll via JS requestAnimationFrame
            page.evaluate(f"""
                () => {{
                    const totalHeight = document.body.scrollHeight - window.innerHeight;
                    const duration = {VIDEO_DURATION * 1000};
                    const startTime = performance.now();

                    function step(now) {{
                        const elapsed = now - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        window.scrollTo(0, totalHeight * progress);
                        if (progress < 1) requestAnimationFrame(step);
                    }}

                    requestAnimationFrame(step);
                }}
            """)

            # Take screenshots at intervals while JS scrolls
            screenshot_count = 0
            next_screenshot_time = 0
            start_time = time.time()

            print(f"[*] Smooth scrolling over {VIDEO_DURATION}s, screenshot every {SCREENSHOT_INTERVAL}s...")

            while True:
                elapsed = time.time() - start_time

                if elapsed >= next_screenshot_time:
                    screenshot_path = os.path.join(
                        SCREENSHOT_DIR,
                        f"screenshot_{screenshot_count:03d}_{int(elapsed):02d}s.png"
                    )
                    page.screenshot(path=screenshot_path, full_page=False)
                    print(f"  [+] Screenshot {screenshot_count} @ {elapsed:.1f}s -> {screenshot_path}")
                    screenshot_count += 1
                    next_screenshot_time += SCREENSHOT_INTERVAL

                if elapsed >= VIDEO_DURATION:
                    break

                time.sleep(0.1)

            # Final screenshot at bottom
            final_path = os.path.join(SCREENSHOT_DIR, f"screenshot_{screenshot_count:03d}_final.png")
            page.screenshot(path=final_path, full_page=False)
            print(f"  [+] Final screenshot -> {final_path}")
            print(f"[OK] Done. Total screenshots: {screenshot_count + 1}")

            browser.close()

    finally:
        print("[*] Stopping ffmpeg...")
        ffmpeg_proc.send_signal(signal.SIGINT)
        ffmpeg_proc.wait()
        print("[*] Stopping Xvfb...")
        xvfb_proc.terminate()
        xvfb_proc.wait()

    compress_video()


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python record_site.py <url>")
        sys.exit(1)

    record_site(sys.argv[1])
