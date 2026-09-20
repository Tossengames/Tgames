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
   4. Upload your images to the "assets" folder on GitHub with the naming
      pattern used below (e.g. playstorep1i1.png, playstorep1i2.png ...).
   5. List those filenames in the "images" array, in the order you want them
      to appear. Each project supports up to 7 images — just list as many
      as you actually have, in order.

   IMPORTANT — FILE NAMES ARE CASE SENSITIVE ON GITHUB PAGES
   -------------------------
   "Playstorep1i1.PNG" is NOT the same file as "playstorep1i1.png" as far as
   GitHub Pages is concerned. If images aren't showing, this is almost always
   why. Keep everything lowercase, matching exactly what's written below.

   IMAGE FILE NAMING
   -------------------------
   assets/playstorep1i1.png   -> Play Store project 1, image 1
   assets/itchp1i1.png        -> Itch/prototype project 1, image 1
   assets/protop1i1.png       -> Unreleased prototype project 1, image 1
   assets/otherp1i1.png       -> Other project 1, image 1
   All images live flat inside one "assets" folder, no subfolders.
   .png, .jpg, .jpeg and .gif all work — just make sure the extension you
   write here matches the real file extension exactly.

   VIDEO LINKS
   -------------------------
   Paste full YouTube links (any format: watch/youtu.be/m.youtube/shorts all
   work now). Leave the array empty [] if there's no video yet. Order in the
   list = order shown on the page, first one shows first.

   PLAYABLE / EXTERNAL LINKS
   -------------------------
   "playLink" -> itch.io page or any page where the project can be played.
   Leave as "" if not available.
   ========================================================================== */


/* ---------- SITE-WIDE INFO ---------- */

const siteInfo = {
  name: "Tossen",
  title: "Unity Developer / C# Programmer",
  tagline: "C# programmer building games solo — third person and FPS titles in 3D, plus 2D games for mobile, PC and browser.",
  email: "tossenpro@gmail.com",

  /* CV placeholders - edit these whenever ready */
  cvPdfLink: "",           // e.g. "https://www.dropbox.com/.../resume.pdf" — leave "" to hide the download button

  cvText: `TOSSEN
Unity Developer / C# Programmer
tossenpro@gmail.com | linkedin.com/in/tossen-pro-ab03871a9 | facebook.com/tossen.pro.3

PROFILE
Solo Unity developer with about a decade of experience building games completely on my own, from first line of code to publishing. Shipped several titles on Google Play and released a handful of prototypes on itch.io, covering programming, gameplay systems, optimization, art, sound, and monetization. Currently developing a third person stealth action game set in feudal Japan alongside other prototypes.

SKILLS
Code: C#, Unity (2D/3D), gameplay systems, enemy AI, player controllers, UI, physics, save systems, JSON data handling
Art & Animation: 2D sprites/VFX, 3D modeling, rigging, animation, animator state machines
Monetization: Unity Ads, AdMob integration
Web: HTML, JavaScript (browser game development)
Platforms: Android, PC, Web

PUBLISHED GAMES — GOOGLE PLAY

Color Math 3 — Unity/C# | 2016
First published game, and the one I learned Unity and C# on while building it. A match and slice puzzle game where the player cuts through same colored objects, 3 up to 5 at once for higher scores. Implemented Unity Ads and AdMob, and spent a lot of time getting it to run smoothly on weak phones, since that's what I had at the time — a habit of optimizing for the lowest end device that stuck with me since. No AI tools existed yet, so I worked through nearly every common Unity error by hand.

English Learning App — Unity/C# | 2018
App that teaches English sentence structure. Gives the player a sentence in their own language plus a scrambled set of English words, and they put the words in the right order. Built the JSON based data handling in C#, including file reading and save state management.

Color Matching — Unity/C# | 2022
Open ended color mixing sandbox. Player gets a target color and a canvas with the base colors, with full freedom to mix and experiment until they match it.

Soccer Match 3 — Unity/C#
Match-3 game in the style of Candy Crush with a soccer theme. Player picks a team and works toward winning the cup.

ITCH.IO PROTOTYPES / BROWSER GAMES

Ninja Maker — Unity/C#, browser
Third person stealth action game where players can build their own stages, levels, and stories, then share them with the community — a level editor approach to a stealth ninja game. On hold pending funding.

Midnight Racer — Unity/C# | 2022
Arcade style car combat and racing game for PC, inspired by Twisted Metal. Currently versus and racing modes against AI, with local and online multiplayer planned.

This Is Sparta — Unity/C# | 2022
Physics based combat game. Player controls a Spartan warrior kicking enemies through a stage full of hazards and weapons to maximize damage.

Words Ring / Words Fall — HTML/JS, browser | 2024
Two word formation puzzle games: one where players rotate a ring of letters like an old rotary phone dial, another where letters fall and players tap to form words before they land.

UNRELEASED PROTOTYPES

Seigi no Ha (Blade of Justice) — working title | Unity/C# | 2016–2018, unfinished
Third person stealth action game set in 16th century feudal Japan, inspired by the Tenchu series. Two playable characters, a male and female shinobi, with a GTA V style character switch mechanic. Built a custom focus targeting system inspired by Red Dead Redemption 2's Dead Eye, and a Hitman-style disguise system for blending in to gather information. On hold twice due to lack of funding; still hoping to finish it.

2D Ninja Platformer — HTML/JS, browser
2D stealth platformer built for the browser, with manually handled collision and movement and cross-device input support.

OTHER PROJECTS
Orbit — site teaching complete beginners the basics of C# for Unity development.
Game Graveyard — platform for developers to showcase unfinished or cancelled games, where visitors vote on which ones they'd like to see revived or supported.

EXPERIENCE
Independent Game Developer — 2016 – Present
Solo full cycle development across every published title and prototype: programming, art, audio, VFX, optimization, and publishing.

AVAILABILITY
Open to remote roles and freelance work.`
};


/* ---------- SOCIAL LINKS ---------- */
/* Delete a line, or comment it out with // in front, to hide it.
   Add a new one the same way: { name: "...", url: "..." } */

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/tossen.pro.3" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/tossen-pro-ab03871a9" },
  // { name: "YouTube", url: "" },  // not active yet, uncomment and add link when ready
];


/* ---------- ABOUT PAGE TEXT ---------- */

const aboutText = `Solo Unity developer with about a decade of experience building games completely on my own, from first line of code to publishing. I've shipped several titles on Google Play and released a handful of prototypes on itch.io, covering everything from programming and gameplay systems to optimization, art, sound, and monetization.

Right now I'm working on a third person stealth action game set in feudal Japan whenever I get the time and resources to push it forward.

I handle every part of development myself: code, 2D and 3D art, animation, sound, and getting the thing actually published. That means a lot of self-taught problem solving along the way, from debugging Unity errors with no AI tools around back in 2016, to figuring out rigging and animation state machines from scratch, to squeezing performance out of weak phones because that's what I had to test on.`;


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
      short: "A match and slice puzzle game — my first ever published title.",
      description: `This was my first published game, and honestly the game I learned Unity and C# on while I was making it. It's a match and slice puzzle game: you cut through objects of the same color, three up to five at once for a bigger score.

I implemented Unity Ads and AdMob myself, and spent a lot of time just getting it to run smoothly on weak phones, since that's what I had to test on at the time. That habit of optimizing for the lowest end device stuck with me ever since.

There was no AI to help back then, so I worked through pretty much every common Unity error the hard way, over days sometimes. By the time it was published I'd learned a huge amount, not just about programming but about 2D art, VFX, SFX and music too, since I was doing all of it solo. Then I learned the other lesson every indie dev learns eventually: building the game is maybe 30% of the work. Getting people to actually find it and download it is the hard part.`,
      images: ["playstorep1i1.png", "playstorep1i2.png"],
      videos: ["https://youtu.be/_cSJ45uymVw"],
      playLink: "",
      note: "No longer live on the Play Store."
    },
    {
      id: "playstorep2",
      title: "English Learning App",
      year: "2018",
      engine: "Unity / C#",
      short: "An app that teaches English sentence structure through word puzzles.",
      description: `A learning app that teaches how to form English sentences. It gives the player a sentence in their own language along with a scrambled set of English words, and the player has to arrange the words correctly to match it.

This project is where I really got comfortable with JSON and string handling in C#, reading data in, managing it, and saving progress.`,
      images: ["playstorep2i1.png"],
      videos: [],
      playLink: "",
      note: "No longer live on the Play Store."
    },
    {
      id: "playstorep3",
      title: "Color Matching",
      year: "2022",
      engine: "Unity / C#",
      short: "A free-form color mixing sandbox.",
      description: `A color mixing game built around a canvas and a set of base colors. You're given a target color and full freedom to mix and experiment however you like until you match it.`,
      images: ["playstorep3i1.png"],
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
      description: `A match-3 game with the same core gameplay as something like Candy Crush, but themed around soccer, using balls instead of candy. You pick your team and work toward winning the cup.`,
      images: ["playstorep4i1.png"],
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
      engine: "Unity / C# — browser",
      short: "A stealth game where players build and share their own levels.",
      description: `A third person stealth action game, browser based, built around one idea: letting players create their own stages, levels and stories, then share them with everyone else. Basically a level editor for a stealth ninja game, so new content keeps coming from the community instead of just from me.

It's on hold right now until I can secure some funding to keep pushing it further.`,
      images: ["itchp1i1.png"],
      videos: [],
      playLink: "https://tossengames.itch.io/ninja-maker",
      note: ""
    },
    {
      id: "itchp2",
      title: "Midnight Racer",
      year: "2022",
      engine: "Unity / C#",
      short: "An arcade car combat and racing game for PC.",
      description: `An arcade style car racing and fighting game for PC, inspired by the Twisted Metal series. The original idea had a story mode where you play through missions to save a city from an alien invasion, with local multiplayer and online play planned on top.

That full vision isn't finished, so right now the playable prototype covers the versus and racing modes against AI. Lack of funding is what stopped it from going further, same story as a few of my other projects.`,
      images: ["itchp2i1.png", "itchp2i2.gif", "itchp2i3.gif"],
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
      description: `A simple physics game where you play a Spartan warrior kicking enemies through a stage full of hurdles and dangerous weapons, trying to rack up as much damage as possible before their body stops moving.`,
      images: ["itchp3i1.png"],
      videos: ["https://youtu.be/uE2AS5c19kA?si=6PsjTctSnWWX-j6q"],
      playLink: "https://tossen.itch.io/this-is-sparta",
      note: ""
    },
    {
      id: "itchp4",
      title: "Words Ring",
      year: "2024",
      engine: "Browser",
      short: "Rotate a ring of letters to form words and score points.",
      description: `A word game where you rotate a ring of letters, like an old rotary phone dial, to spell out words and score points.`,
      images: ["itchp4i1.png"],
      videos: [],
      playLink: "https://tossengames.itch.io/wordrings",
      note: ""
    },
    {
      id: "itchp5",
      title: "Words Fall",
      year: "2024",
      engine: "Browser",
      short: "Tap falling letters to form words before they land.",
      description: `A word game where letters fall down the screen and you tap them in the right order to form words before they land.`,
      images: ["itchp5i1.png"],
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
      description: `A third person stealth action adventure set in 16th century feudal Japan, inspired by the Tenchu series. I also pulled in mechanics from a few other games I like: from GTA V I took the character switching idea, so you play with two characters, a male and a female ninja, and can switch between them to pull off different maneuvers. From Red Dead Redemption 2 I took inspiration from Dead Eye and built my own version I call Moon Eye. From Hitman I borrowed the idea of switching outfits to blend in while gathering information.

I had a lot more planned for this game, but between lack of support and funding I had to let it go. It started back in 2016, I picked it up again around 2018, then had to shelve it again. I'd love to bring it back and actually finish it if I could get the help and funding it needs.

Working solo on something this size also meant running into the bigger challenges of 3D game development directly: modeling and rigging the two playable characters, building out animations and getting Unity's Animator state machines to blend between them properly, on top of writing enemy AI that could actually detect and react to a stealth player, and tuning the character controller itself to feel responsive.`,
      images: ["protop1i1.png", "protop1i2.png"],
      videos: [
        "https://m.youtube.com/watch?v=-HQApi7jA_Y",
        "https://youtu.be/woPbyepv4LM",
        "https://m.youtube.com/watch?v=kxJ6qdd7wTM",
        "https://m.youtube.com/watch?v=4s-ZDIWRiCw"
      ],
      playLink: "",
      note: "Unfinished — not publicly available to play."
    },
    {
      id: "protop2",
      title: "2D Ninja Platformer",
      year: "",
      engine: "HTML / JavaScript — browser",
      short: "A 2D stealth platformer prototype built for the browser.",
      description: `A 2D stealth platformer built with HTML for the browser. Building a game this way comes with its own set of problems compared to working in Unity: there's no built-in physics engine to lean on, so collision and movement have to be handled manually, input needs to work properly across keyboard and touch, and everything has to stay lightweight so it loads fast in a browser.`,
      images: ["protop2i1.png"],
      videos: [],
      playLink: "",
      note: "Prototype — not publicly available to play."
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
      images: ["otherp1i1.png"],
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
      description: `A site for developers to show off the dead or unfinished games they've worked on. Visitors can vote on which ones they'd like to see brought back, and help support them.`,
      images: ["otherp2i1.png"],
      videos: [],
      playLink: "",
      note: ""
    },
  ],

};
