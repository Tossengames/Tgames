#!/usr/bin/env python3
"""
record_site.py - Records a scrolling video of a website and takes screenshots at intervals.
Usage: python record_site.py <url>
"""

import sys
import os
import time
import subprocess
import signal
from playwright.sync_api import sync_playwright

# --- Configuration ---
URL = sys.argv[1] if len(sys.argv) > 1 else "https://example.com"
OUTPUT_DIR = "output"
VIDEO_RAW = os.path.join(OUTPUT_DIR, "recording_raw.mp4")
VIDEO_FINAL = os.path.join(OUTPUT_DIR, "recording.mp4")
SCREENSHOT_DIR = os.path.join(OUTPUT_DIR, "screenshots")
RESOLUTION = (1920, 1080)
VIDEO_DURATION = 30          # seconds
SCREENSHOT_INTERVAL = 5      # seconds between screenshots
SCROLL_STEPS = 60            # number of scroll steps over the duration
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
        "-crf", "28",           # quality: lower = better, 28 is a good balance
        "-preset", "slow",
        "-vf", "scale=1920:1080",
        "-pix_fmt", "yuv420p",
        VIDEO_FINAL
    ]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    os.remove(VIDEO_RAW)
    size_mb = os.path.getsize(VIDEO_FINAL) / (1024 * 1024)
    print(f"[*] Final video saved: {VIDEO_FINAL} ({size_mb:.2f} MB)")


def record_site():
    setup_output_dirs()
    xvfb_proc = start_xvfb()
    ffmpeg_proc = start_ffmpeg()

    env = os.environ.copy()
    env["DISPLAY"] = DISPLAY

    try:
        with sync_playwright() as p:
            print(f"[*] Opening browser and navigating to: {URL}")
            browser = p.chromium.launch(
                headless=False,
                args=[
                    f"--window-size={RESOLUTION[0]},{RESOLUTION[1]}",
                    "--start-maximized",
                    "--no-sandbox",
                    "--disable-dev-shm-usage",
                ],
                env=env
            )
            context = browser.new_context(
                viewport={"width": RESOLUTION[0], "height": RESOLUTION[1]}
            )
            page = context.new_page()
            page.goto(URL, wait_until="networkidle", timeout=30000)
            time.sleep(2)  # let page settle

            # Get total page height
            total_height = page.evaluate("document.body.scrollHeight")
            viewport_height = RESOLUTION[1]
            print(f"[*] Page height: {total_height}px | Viewport: {viewport_height}px")

            step_delay = VIDEO_DURATION / SCROLL_STEPS
            scroll_per_step = total_height / SCROLL_STEPS

            screenshot_count = 0
            next_screenshot_time = 0
            start_time = time.time()

            print(f"[*] Scrolling over {VIDEO_DURATION}s, screenshot every {SCREENSHOT_INTERVAL}s...")

            for step in range(SCROLL_STEPS):
                elapsed = time.time() - start_time

                # Take screenshot at interval
                if elapsed >= next_screenshot_time:
                    screenshot_path = os.path.join(
                        SCREENSHOT_DIR, f"screenshot_{screenshot_count:03d}_{int(elapsed):02d}s.png"
                    )
                    page.screenshot(path=screenshot_path, full_page=False)
                    print(f"  [+] Screenshot {screenshot_count} @ {elapsed:.1f}s -> {screenshot_path}")
                    screenshot_count += 1
                    next_screenshot_time += SCREENSHOT_INTERVAL

                # Scroll
                target_scroll = int(scroll_per_step * (step + 1))
                page.evaluate(f"window.scrollTo({{top: {target_scroll}, behavior: 'smooth'}})")
                time.sleep(step_delay)

            # Final screenshot at bottom
            page.evaluate("window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})")
            time.sleep(0.5)
            final_screenshot = os.path.join(SCREENSHOT_DIR, f"screenshot_{screenshot_count:03d}_final.png")
            page.screenshot(path=final_screenshot, full_page=False)
            print(f"  [+] Final screenshot -> {final_screenshot}")

            browser.close()
            print(f"[*] Done scrolling. Total screenshots: {screenshot_count + 1}")

    finally:
        print("[*] Stopping ffmpeg...")
        ffmpeg_proc.send_signal(signal.SIGINT)
        ffmpeg_proc.wait()

        print("[*] Stopping Xvfb...")
        xvfb_proc.terminate()
        xvfb_proc.wait()

    compress_video()


if __name__ == "__main__":
    record_site()
