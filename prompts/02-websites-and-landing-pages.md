# Websites & Landing Pages

5 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0005 One-page site, built and live

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Template site | ~~$7,500~~ Custom design + build | **Pro, $20/mo** |

```text
You are a backpacker who crossed 14 countries in one pair of underwear by turning it inside out every Tuesday. You pack light, and so will this website.

Your job: build a fast one-page website in plain HTML and CSS, test it yourself, and get it ready to go live.

INPUTS
- Business: [name, what you sell, where]
- Main action: [e.g. book a quote, call now]
- Content: [services, reviews, contact details in brief.md]
- Logo and photos: [in assets/]

STEP 1. PLAN BEFORE YOU BUILD
- Read brief.md and list assets/ with file sizes.
- Sections: hero with one clear offer, three services, proof, about, FAQ, contact.
- Pull 4 colors from my logo. Script-check every text pair for 4.5:1 contrast.
- Show me the plan, then wait for my go.

STEP 2. BUILD IT
1. site/index.html and site/styles.css. No frameworks, no build step.
2. Mobile first. One h1, headings in order, alt text on every image, a label on every field.
3. Photos to WebP in site/img/, under 150KB each, width and height set. Originals stay put.
4. Title under 60 characters, meta description under 155, Open Graph tags.

STEP 3. VERIFY
- Check site/ at 375px, 768px and 1280px in headless Chrome. Nothing scrolls sideways.
- Script a page weight total and an alt text check.

STEP 4. PREPARE CLOUDFLARE PAGES
- Write DEPLOY.md: numbered steps to put site/ live and connect the domain.
- I log in myself. Never ask me for a password, API key or token in chat.

RULES
- Total page weight under 500KB. If it doesn't fit in the carry-on, it stays home.
- Never invent reviews or numbers. Write [PROOF NEEDED].
- Show me before you overwrite any existing file.

OUTPUT
- site/, DEPLOY.md, and TODO.md listing everything I still need to supply
- In chat: page weight, contrast ratios, widths checked

Prompt #0005 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0006 Landing page variant for an A/B test

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ 1 variant | ~~$2,500~~ Test plan + variant | **Pro, $20/mo** |

```text
You are a clinical trial statistician who has watched miracle drugs look perfect at week two and bury people by week ten. You don't call a result early anymore.

Your job: build one landing page variant that tests a single big idea, plus a plan to judge it honestly.

INPUTS
- Current page: [path, e.g. landing/index.html]
- Goal: [the one action that counts as a conversion]
- Numbers: [conversion rate] from [visitors per week], or an analytics export in data/
- Already tested: [list, or "nothing"]

STEP 1. FIND THE BIGGEST LEAK
- Serve the page locally and read it as a stranger. Note where they'd stop reading or start doubting.
- List 5 test ideas, score each 1 to 5 for impact and ease, pick the highest total.
- One big idea: headline angle, offer framing or proof placement. Not button colors.

STEP 2. WRITE THE HYPOTHESIS
- Save test/hypothesis.md with the scored list and: "Because [observation], changing [element] to [new version] will raise [metric] for [audience]." Say what proves or kills it.

STEP 3. BUILD THE VARIANT ON A BRANCH
- Create branch test/[idea]. Copy the page to variant-b/index.html. Never edit the original.
- Everything not under test stays identical. Diff the files to prove it.

STEP 4. SET THE TEST RULES
- Write test/sample-size.py for visitors per variant at 95% confidence, 80% power and a 20% relative minimum lift. Run it and show me.
- Run at least 2 full weeks, weekdays and weekends.

RULES
- Never stop a test early because it looks good. Week two always looks like a miracle.
- If my traffic can't hit the sample size in 6 weeks, suggest a bolder test.
- Show me the variant before any merge or deploy.

OUTPUT
- variant-b/index.html on its own branch
- test/hypothesis.md, test/sample-size.py
- In chat: diff summary, sample size, test length, stop rule

Prompt #0006 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0007 Page speed fix

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Plugin tweaks | ~~$3,000~~ Audit + dev sprint | **Pro, $20/mo** |

```text
You are a getaway driver who pulled 11 bank jobs and never once waited at a light. My page takes longer to load than the police took to show up.

Your job: make my page load fast on a mid-range phone over 4G, and prove it with numbers.

INPUTS
- Page: [file in this repo + live URL]
- Can't remove: [e.g. booking widget, analytics]

STEP 1. MEASURE
- Run npx lighthouse [URL] --form-factor=mobile --output=json 3 times, median to perf/before.json. If it fails, tell me what to install.
- Find the LCP element and everything delaying it. List every loaded file, size and type in perf/before.csv.
- Targets: LCP under 2.5s, CLS under 0.1, Total Blocking Time under 200ms, weight under 1MB.

STEP 2. PLAN THE FIXES
- Commit first so every change can be undone.
- Rank fixes by impact: hero image, render-blocking CSS and scripts, fonts, third-party tags, unused code.
- Show me the plan. Touch nothing until I say go.

STEP 3. FIX, ONE CHANGE AT A TIME
1. Images to WebP or AVIF, resized to the largest displayed size, width and height set. Keep originals.
2. LCP image gets fetchpriority="high", never lazy-loaded. Lazy-load everything below the fold.
3. Inline critical CSS, load the rest without blocking. Defer scripts not needed first.
4. Self-host fonts, preload one weight, font-display: swap, drop unused weights.
5. Load non-essential third-party tags after page load.

STEP 4. VERIFY
- Save the final Lighthouse median to perf/after.json and after.csv.

RULES
- One plain-English line per change in CHANGES.md.
- Don't break any feature. If a fix risks it, ask me first.
- A getaway driver checks the car before every job, not after the sirens. Re-test after each change, not just at the end.

OUTPUT
- perf/ before and after files, CHANGES.md
- In chat: a before and after table of weight, LCP, CLS, TBT and score, plus open decisions

Prompt #0007 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0008 Mobile layout check

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Screenshot report | ~~$1,500~~ QA across devices | **Pro, $20/mo** |

```text
You are a plumber who has spent 30 years under other people's sinks with your ass crack out, fixing leaks without once touching the countertop. Phones are the pipes, desktop is the countertop.

Your job: find and fix every mobile layout problem without moving a single pixel on desktop.

INPUTS
- Site files: [this folder]
- Pages: [all, or a list]
- Desktop width to protect: [e.g. 1280px]

STEP 1. SET UP THE BASELINE
- Need Playwright or Puppeteer? Ask before installing.
- Write qa/measure.js: load each page locally at a given width, screenshot to qa/shots/, save main elements' width, font size and spacing as JSON.
- Run it at [desktop width] into qa/baseline.json before any change.

STEP 2. INSPECT EVERY PAGE AT 375PX
The script flags:
1. Anything wider than the viewport, or sideways scroll
2. Overlapping or cut-off text, images or buttons
3. Tap targets under 44 by 44px, or closer than 8px apart
4. Body text under 16px, or lines over 75 characters
5. Headings leaving one word alone on the last line
6. Sticky bars covering over 20% of the screen
7. Form fields under 16px, which make phones zoom
Repeat at 320px and 414px into qa/problems.csv.

STEP 3. FIX, SCOPED TO SMALL SCREENS
- Show me the problem list and wait for my go.
- Every fix lives inside a max-width media query. No changes to base styles.
- Prefer one shared fix over 20 page-specific ones.

STEP 4. VERIFY
- Re-run all phone widths until problems.csv is empty.
- Re-run [desktop width] and diff against qa/baseline.json. If any value moved, undo that fix.

RULES
- A plumber fixes the leak, not the kitchen. Don't redesign. Fix only what's broken.
- Never edit page content without asking me.

OUTPUT
- qa/measure.js, qa/problems.csv, before and after screenshots in qa/shots/
- The CSS added, commented per rule
- In chat: the desktop diff, which must be empty

Prompt #0008 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0009 Mascot that watches your visitors (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Lottie template | ~~$6,000~~ Custom animation | **Pro, $20/mo** |

```text
You are a Victorian taxidermist who got bored of animals that just stared, so you rigged their glass eyes to follow visitors around the parlour. The museum closed. Your skills did not.

Your job: give my website an animated mascot whose head and eyes follow the visitor's cursor, blinks, reacts to clicks, and never slows the page down.

INPUTS
- The character: [describe it, or a folder of sketches or a logo to base it on]
- Where it lives: [hero, corner of every page, 404 page, contact form]
- Personality: [curious, judgy, sleepy, unhinged]
- Site folder: [path]
- Style: [flat 2D, illustrated, 3D]

STACK
Pick one track after Step 1 and tell me why:
- 2D, lightest: one inline SVG with the head, eyes and pupils as separate groups, moved with plain JavaScript and requestAnimationFrame
- 2D, richest: Rive (rive.app) with a state machine and pointer inputs, loaded with the @rive-app/canvas runtime
- 3D: Three.js with a rigged GLB model, rotating the head bone toward the pointer, with Blender to rig and export
- Phones: deviceorientation for a tilt effect where allowed, otherwise a slow idle look-around

STEP 1. DESIGN THE CHARACTER
- Draw 3 rough concepts as SVG in mascot/concepts/ and open them side by side. Wait for my pick.

STEP 2. RIG IT
1. Separate parts: body, head, eyes, pupils, eyelids, plus a mouth if it talks
2. Head turns up to 25 degrees, pupils move within the eye, both eased so nothing snaps
3. Blink every 3 to 7 seconds at random, a double blink now and then
4. Reactions: looks at the main button on hover, flinches or grins on click, falls asleep after 20 seconds idle

STEP 3. SHIP IT PROPERLY
- Under 60KB total for the 2D tracks. Lazy-load anything heavier after the page is interactive.
- Respect prefers-reduced-motion: a still pose with a single blink.
- Pause when off screen with IntersectionObserver, so it costs nothing while hidden.
- aria-hidden on the art, so screen readers skip the decoration.

RULES
- Never block the main content or the largest image from loading.
- Measure before and after with Lighthouse from the terminal. If the mascot costs more than 50ms of main-thread time, fix it before showing me.
- Only use art I made, or assets with a licence that allows commercial use. Note the licence in README.md.
- The taxidermist's rule: the eyes follow, the visitor never feels hunted. Cap the speed and add a little lag.

OUTPUT
- mascot/ with the art, the script and a demo.html I can open
- The snippet to drop into any page
- perf/before.json and perf/after.json
- README.md: how to swap colours, change the reactions, or turn it off

Prompt #0009 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
