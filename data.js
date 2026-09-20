/* ==========================================================================
   TOSSEN PORTFOLIO — DATA FILE
   ==========================================================================
   This is the ONLY file you need to edit to add, remove, or change projects,
   social links, or CV info. The site (index.html) reads everything from here.

   HOW TO ADD A NEW PROJECT
   -------------------------
   1. Copy an existing project object below (the { ... } block) and paste it
      into the same category array.
   2. Give it a unique "id" (no spaces, e.g. "itchp6").
   3. Fill in the fields. Leave a field as "" (empty) or [] (empty list) if
      you don't have it yet — the site will just skip showing it.
   4. Upload your images to the "assets" folder with the naming pattern used
      below (e.g. playstorep1i1.png, playstorep1i2.png ...).
   5. Every project below already lists 6 image slots (i1 through i6). You
      do NOT need to remove the ones you haven't uploaded yet — the site
      automatically checks each filename and only shows the ones that
      actually exist in your assets folder. Upload a file with a name that
      matches one already listed here, and it will appear on its own, no
      other changes needed.

   IMPORTANT — FILE NAMES ARE CASE SENSITIVE ON GITHUB PAGES
   -------------------------
   "Playstorep1i1.PNG" is NOT the same file as "playstorep1i1.png" as far as
   GitHub Pages is concerned. If images aren't showing, this is almost always
   why. Keep everything lowercase, matching exactly what's written below.

   IMAGE FILE NAMING
   -------------------------
   assets/playstorep1i1.png ... assets/playstorep1i6.png  -> Play Store project 1, images 1-6
   assets/itchp1i1.png ... assets/itchp1i6.png             -> Itch/prototype project 1, images 1-6
   assets/protop1i1.png ... assets/protop1i6.png           -> Unreleased prototype project 1, images 1-6
   assets/otherp1i1.png ... assets/otherp1i6.png           -> Other project 1, images 1-6
   All images live flat inside one "assets" folder, no subfolders.
   .png, .jpg, .jpeg and .gif all work — just make sure the extension you
   write here matches the real file extension exactly (e.g. if you actually
   have a .jpg, change the listed filename's extension to .jpg).

   VIDEO LINKS
   -------------------------
   Paste full YouTube links (any format: watch/youtu.be/m.youtube/shorts all
   work). Leave the array empty [] if there's no video yet.

   PLAYABLE / EXTERNAL LINKS
   -------------------------
   "playLink" -> itch.io page or any page where the project can be played.
   Leave as "" if not available.
   ========================================================================== */


/* ---------- SITE-WIDE INFO ---------- */

const siteInfo = {
  name: "Tossen",
  title: "Unity Developer / C# Programmer",
  email: "tossenpro@gmail.com",

  /* Short bio shown under the hero name/role on the homepage. */
  heroBio: `Solo Unity developer with about a decade of experience building games from the first line of code to publishing. I have shipped several titles on Google Play and released prototypes on itch.io, handling everything myself: programming, gameplay systems, art, animation, sound, and optimization.

I build for the lowest end device first. That habit started in 2016 when the only phone I had to test on was a weak one, and it never left.`,

  /* CV link — set to your public Google Drive PDF link. Once this is filled
     in, the Download CV button appears everywhere: homepage, About page,
     footer, and the persistent top bar on every page. */
  cvPdfLink: "https://drive.google.com/file/d/1KX1E5Q4T5kSoDjAc7w9bO5dn9d4xqcgR/view?usp=sharing",
};


/* ---------- SOCIAL LINKS ---------- */
/* Delete a line, or comment it out with // in front, to hide it.
   Add a new one the same way: { name: "...", url: "..." }
   These show as buttons in the persistent top bar on every page, and also
   listed on the Contact page. */

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/tossen.pro.3" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tossen-pro-ab03871a9" },
  // { name: "YouTube", url: "" },  // not active yet, uncomment and add link when ready
];


/* ==========================================================================
   PROJECTS
   ========================================================================== */

const projects = {

  /* ---------------- PUBLISHED — GOOGLE PLAY ---------------- */
  published: [
    {
      id: "playstorep1",
      title: "Color Math 3",
      year: "2016",
      engine: "Unity / C#",
      short: "A match and slice puzzle game, and my first ever published title.",
      description: `My first published game, and the one I learned Unity and C# on while building it. It's a match and slice puzzle game: you cut through objects of the same color, three up to five at once for a bigger score.

No AI tools existed yet, so I worked through nearly every common Unity error by hand. I implemented Unity Ads and AdMob myself, and spent a lot of time getting it to run smoothly on weak phones, since that's what I had to test on at the time. That habit of optimizing for the lowest end device stuck with me since.`,
      images: ["playstorep1i1.png", "playstorep1i2.png", "playstorep1i3.png", "playstorep1i4.png", "playstorep1i5.png", "playstorep1i6.png"],
      videos: ["https://youtu.be/_cSJ45uymVw"],
      playLink: "",
      note: "No longer live on the Play Store."
    },
    {
      id: "playstorep3",
      title: "Color Matching",
      year: "2022",
      engine: "Unity / C#",
      short: "A free-form color mixing sandbox.",
      description: `A color mixing game built around a canvas and a set of base colors. You're given a target color and full freedom to mix and experiment however you like until you match it.

The whole game hinges on mixing colors, but digital color doesn't work like paint. Mix blue and yellow on screen and you get gray, not green. That broke the entire concept early on. I built a custom mixing model with hand-tuned lookup tables for the color combinations that refused to cooperate. Level design and the color system had to be built together, since every target color had to actually be reachable through my mixing rules or the level would be unsolvable. I learned more about color math than I ever expected to.`,
      images: ["playstorep3i1.png", "playstorep3i2.png", "playstorep3i3.png", "playstorep3i4.png", "playstorep3i5.png", "playstorep3i6.png"],
      videos: ["https://m.youtube.com/shorts/Mth6Jm3-Mlw"],
      playLink: "",
      note: "No longer live on the Play Store."
    },
    {
      id: "playstorep4",
      title: "Soccer Match 3",
      year: "",
      engine: "Unity / C#",
      short: "A soccer-themed match-3 game.",
      description: `A match-3 game in the style of Candy Crush, themed around soccer, using balls instead of candy. You pick your team and work toward winning the cup.

Two big problems shaped this one. First, the match-3 mechanic wasn't a straight clone of my other match game, since chaining, cascades, and the soccer-specific objectives all needed their own logic. Second, I hand-designed 100 levels, each with its own goal, which was the single most time-consuming part of the whole project. I separated the board logic from the level objective system so goals could be swapped without touching the core match code, and built the UI to handle both landscape and portrait, since the board and HUD needed to reflow depending on orientation. Shipped on Google Play running on both orientations.`,
      images: ["playstorep4i1.png", "playstorep4i2.png", "playstorep4i3.png", "playstorep4i4.png", "playstorep4i5.png", "playstorep4i6.png"],
      videos: [],
      playLink: "",
      note: "No longer live on the Play Store."
    },
  ],

  /* ---------------- ITCH.IO / BROWSER PROTOTYPES ---------------- */
  itch: [
    {
      id: "itchp1",
      title: "Ninja Maker",
      year: "",
      engine: "Unity / C#, browser",
      short: "A stealth game where players build and share their own levels.",
      description: `A third person stealth action game, browser based, built around one idea: letting players create their own stages, levels, and stories, then share them with the community. Basically a stealth ninja game with a level editor built in.

For a prototype I had zero budget but still needed saving and sharing to work. I used local saves for player data, and hooked up Google Sheets and Docs as a free backend, so when the game needs to load shared content, it calls the spreadsheet. It's a deliberate prototype-stage hack, with a real paid backend planned later, but it works and costs nothing right now.

The editor itself had to be solid enough that player-built geometry wouldn't break the stealth systems, which was the real challenge. Enemy pathing and cover had to work correctly on levels I never designed myself.`,
      images: ["itchp1i1.png", "itchp1i2.png", "itchp1i3.png", "itchp1i4.png", "itchp1i5.png", "itchp1i6.png"],
      videos: [],
      playLink: "https://tossengames.itch.io/ninja-maker",
      note: "On hold pending funding."
    },
    {
      id: "itchp2",
      title: "Midnight Racer",
      year: "2022",
      engine: "Unity / C#",
      short: "An arcade car combat and racing game for PC.",
      description: `An arcade style car racing and combat game for PC, inspired by Twisted Metal. This was my first vehicle game, so a lot of it was figured out as I went.

The first big decision was realistic versus arcade driving. I went arcade, since realistic handling wasn't fun at this scale, and arcade let me tune for feel instead of simulation. I iterated on the car controller until it moved the way I wanted.

I built the weapon system with aiming and shooting, enemy AI that actually races around the city instead of following a rail, the minimap, the city itself, the vehicles, the game modes, and both keyboard/mouse and controller input. VS mode took the most work: players grab a weapon box that gives a random weapon out of three, each with different strength, then drive around hunting each other, and the AI is aggressive on purpose. Car engine SFX fought me the whole way and only came together properly near the end. The honest weak point is VFX, which never quite reached where I wanted, so it stayed at prototype level. There's also an unfinished mobile version.`,
      images: ["itchp2i1.png", "itchp2i2.gif", "itchp2i3.gif", "itchp2i4.png", "itchp2i5.png", "itchp2i6.png"],
      videos: [],
      playLink: "https://millj.itch.io/midnightracer",
      note: ""
    },
    {
      id: "itchp3",
      title: "This Is Sparta",
      year: "2022",
      engine: "Unity / C#",
      short: "A physics-based combat game starring a Spartan warrior.",
      description: `A physics-based combat game where you control a Spartan warrior kicking enemies through a stage full of hazards and weapons to maximize damage.

I modeled, rigged, and animated the 3D characters solo for this one, which was new territory for me. Playtesters then asked for dismemberment, bodies coming apart when hit, but the single-mesh characters couldn't do that. So I built a second version of each character split into separate body parts, activating or deactivating pieces as they get severed. It's a visual trick rather than real-time mesh cutting, which was far cheaper to run. Physics and ragdolls are expensive, so I had to keep the random behavior tightly optimized. VFX and SFX landed at an acceptable level for a prototype, not fully finished.`,
      images: ["itchp3i1.png", "itchp3i2.png", "itchp3i3.png", "itchp3i4.png", "itchp3i5.png", "itchp3i6.png"],
      videos: ["https://youtu.be/uE2AS5c19kA?si=6PsjTctSnWWX-j6q"],
      playLink: "https://tossen.itch.io/this-is-sparta",
      note: ""
    },
    {
      id: "itchp4",
      title: "Words Ring",
      year: "2024",
      engine: "HTML / JavaScript, browser",
      short: "Rotate a ring of letters to form words and score points.",
      description: `A word game where you rotate a ring of letters, like an old rotary phone dial, to spell out words and score points.

Built in raw JavaScript with no engine. The main problem was getting it to fit the screen correctly across both mobile and PC, since what works on a phone breaks on desktop and vice versa. I built my own responsive scaling system so the canvas adapts per device.`,
      images: ["itchp4i1.png", "itchp4i2.png", "itchp4i3.png", "itchp4i4.png", "itchp4i5.png", "itchp4i6.png"],
      videos: [],
      playLink: "https://tossengames.itch.io/wordrings",
      note: ""
    },
    {
      id: "itchp5",
      title: "Words Fall",
      year: "2024",
      engine: "HTML / JavaScript, browser",
      short: "Tap falling letters to form words before they land.",
      description: `A word game where letters fall down the screen and you tap them in the right order to form words before they land.

Built alongside Words Ring, in raw JavaScript with no engine. Same core challenge here: getting it to scale and play correctly across phone and desktop, which meant building a responsive canvas system rather than relying on fixed dimensions.`,
      images: ["itchp5i1.png", "itchp5i2.png", "itchp5i3.png", "itchp5i4.png", "itchp5i5.png", "itchp5i6.png"],
      videos: [],
      playLink: "",
      note: ""
    },
  ],

  /* ---------------- UNRELEASED PROTOTYPES ---------------- */
  prototypes: [
    {
      id: "protop1",
      title: "Seigi no Ha (Blade of Justice)",
      year: "2016 – 2018",
      engine: "Unity / C#",
      short: "An unfinished third person stealth action game set in feudal Japan.",
      description: `A Tenchu-inspired stealth game set in 16th century feudal Japan. Two playable shinobi, one male and one female, with a GTA V style switch system so you can swap between them mid-mission.

This project kept growing. I wanted an open world, which meant a lot of 3D objects everywhere, and that brought performance problems I'd never dealt with before. Unity's own culling wasn't enough, since the world was too heavy, and nature assets were the worst offenders, with trees and foliage eating memory alive. So I built my own system that keeps characters active in logic but disables their rendering completely when they're out of view and far from the player. It took a while to get right, but together with LODs on most models, it actually ran.

I built two climbing systems, one Assassin's Creed style, and a second, freer one that lets the ninja climb almost any wall, which I liked more. I also built a cover system that sticks to any wall or surface. For combat, I made a focus targeting system inspired by Red Dead Redemption 2's Dead Eye, and a Hitman-style disguise system for blending in and gathering information. The disguise system was tricky, since enemies had to react differently depending on whether they'd seen you before the disguise went on, which meant tracking per-enemy state across the whole level. Enemy AI had to be tuned to feel smart but not too smart, so the player still gets to sneak around and feel clever.

There's also a full tools system for crafting and buying items before missions, plus a weather system and a day/night cycle.

On hold, twice now, both times because of funding. It's the project I most want to finish, and the one that taught me the most, open world optimization especially. Still hoping to get back to it.`,
      images: ["protop1i1.png", "protop1i2.png", "protop1i3.png", "protop1i4.png", "protop1i5.png", "protop1i6.png"],
      videos: [
        "https://m.youtube.com/watch?v=-HQApi7jA_Y",
        "https://youtu.be/woPbyepv4LM",
        "https://m.youtube.com/watch?v=kxJ6qdd7wTM",
        "https://m.youtube.com/watch?v=4s-ZDIWRiCw"
      ],
      playLink: "",
      note: "Unfinished, not publicly available to play."
    },
    {
      id: "protop2",
      title: "2D Ninja Platformer",
      year: "",
      engine: "HTML / JavaScript, browser",
      short: "A 2D stealth platformer prototype built for the browser.",
      description: `A 2D stealth platformer built for the browser, part of the same ninja game world as Ninja Maker.

I wrote collision and movement manually instead of pulling in an engine, and had to support both touch and keyboard input. Getting the game to fit and play correctly on both phone and desktop was the recurring headache on this one, same as with the word games.`,
      images: ["protop2i1.png", "protop2i2.png", "protop2i3.png", "protop2i4.png", "protop2i5.png", "protop2i6.png"],
      videos: [],
      playLink: "",
      note: "Prototype, not publicly available to play."
    },
  ],

  /* ---------------- OTHER PROJECTS (sites/platforms) ---------------- */
  other: [
    {
      id: "otherp1",
      title: "Orbit",
      year: "",
      engine: "Web platform",
      short: "A site teaching complete beginners the basics of C# for Unity.",
      description: `A platform built to teach absolute beginners the basics of C# for Unity development, starting from zero.`,
      images: ["otherp1i1.png", "otherp1i2.png", "otherp1i3.png", "otherp1i4.png", "otherp1i5.png", "otherp1i6.png"],
      videos: [],
      playLink: "",
      note: ""
    },
    {
      id: "otherp2",
      title: "Game Graveyard",
      year: "",
      engine: "Web platform",
      short: "A place for developers to showcase unfinished games and get support to revive them.",
      description: `A platform for developers to show off dead or unfinished games they've worked on. Visitors can vote on which ones they'd like to see brought back and help support them.

This needed real user accounts, so sign up, login, profiles, and each user saving their own games. I used Firebase for authentication and user data instead of building auth from scratch.`,
      images: ["otherp2i1.png", "otherp2i2.png", "otherp2i3.png", "otherp2i4.png", "otherp2i5.png", "otherp2i6.png"],
      videos: [],
      playLink: "",
      note: ""
    },
  ],

};
