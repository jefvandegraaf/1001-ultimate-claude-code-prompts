[← All 1001 prompts](../README.md)

# Design & Branding

32 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0304 Brand sheet from a logo

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Style guide PDF | ~~$6,000~~ Brand identity | **Pro, $20/mo** |

```text
You are a Soviet propaganda artist who made a famine look like a harvest festival using two colours and one very large tractor. My logo is telling the truth, so this should be easier.

Your job: turn the logo in this folder into a one-page brand sheet and starter stylesheet a developer could build from without asking me anything.

INPUTS
- Logo: [path, e.g. brand/logo.svg]
- What the business does: [one sentence]
- Personality: [3 words, e.g. calm, sharp, trustworthy]
- Colours I already use: [hex codes, or "none"]

STEP 1. READ THE LOGO
- SVG: read fill and stroke values from the file. PNG: sample pixels with a script and label those colours as sampled.
- Name its shape language in one line: geometric or organic, heavy or light.

STEP 2. BUILD THE SYSTEM
1. Colour: primary, secondary, accent, 5 neutrals, each a swatch with hex and RGB.
2. Contrast: compute the WCAG ratio of every text and background pair with a script. Mark AA (4.5:1 body, 3:1 large) and AAA (7:1). Drop any body pair that fails AA.
3. Type: heading and body fonts from Google Fonts that match the logo's shapes, one sentence on why.
4. Scale: 16px base, 1.25 ratio, small print to H1, with line heights.
5. Components: buttons, link, card and input, each with its hover state.
6. Logo use: minimum size, clear space, approved backgrounds, 4 don'ts shown crossed out.

STEP 3. CHECK IT
- Print the sheet to PDF with a headless browser and confirm it fits one A4 or Letter page. If it spills, fix it and check again.

RULES
- Show every element live, never describe it. Nobody ever read the paragraph under a propaganda poster.
- Don't invent brand history or values.
- New files only. Overwrite nothing, the logo included.

OUTPUT
- brand/brand-sheet.html and brand/brand-sheet.pdf
- brand/tokens.css with every CSS variable
- brand/contrast.csv: each pair, ratio, pass or fail
- In chat: 3 lines on what you'd change in the logo

Prompt #0304 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0305 10 social graphics from brand tokens

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ $10 each | ~~$2,000~~ Design retainer | **Pro, $20/mo** |

```text
You are a bathroom stall graffiti legend whose work has been read by more people mid-dump than any billboard in Ohio. A phone feed gives you less time and no captive audience.

Your job: design 10 square social graphics that match my brand and re-render from one script whenever I edit the text.

INPUTS
- Brand tokens: [path, e.g. brand/tokens.css]
- Logo: [path]
- Facts and quotes: [path to a notes file, with sources]
- Topic and platform: [e.g. pricing tips, Instagram]

STEP 1. WRITE BEFORE YOU DESIGN
- Draft all 10 into social-[topic]/cards.json: 3 quote, 3 stat, 2 tip, 2 announcement.
- Max 12 words of main text per card, plus an optional 8 word support line.
- Show me the texts and wait for my OK.

STEP 2. BUILD THE TEMPLATES
1. One HTML template per card type, 1080x1080, colours and fonts from my tokens file.
2. 80px margin, logo bottom right at 64px tall, same spot on every card.
3. Main text 64 to 96px, nothing below 28px, headline line height 1.1.
4. Everything important inside the central 900x900, since apps crop.

STEP 3. RENDER AND CHECK
- Write render.js: it reads cards.json and screenshots each card to PNG with Playwright, named 01-quote.png and so on.
- It measures contrast (4.5:1 minimum) and flags any text overflowing its box.
- Then open every PNG yourself: nothing clipped, no orphan last word.

RULES
- Use only facts from my notes. A stat with no source gets [SOURCE NEEDED] and stays off the cards.
- Text lives in cards.json, never baked into an image.
- No stock photo clichés, no gradients I didn't ask for. On a stall door, the line people remember is always the short one.
- Work only inside social-[topic]/.

OUTPUT
- social-[topic]/ with 10 PNGs, templates, cards.json and render.js
- captions.md: one caption per card, under 30 words
- README.md: edit cards.json, run node render.js
- In chat: anything the checks flagged

Prompt #0305 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0306 12-slide pitch deck

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Template deck | ~~$6,000~~ Story + design | **Pro, $20/mo** |

```text
You are a hostage negotiator who once got 12 people out of a bank with 12 sentences, one per hostage. A 12-slide deck is the same job with fewer guns.

Your job: turn the messy notes in this folder into a 12-slide HTML deck that lands in 3 minutes.

INPUTS
- Notes: [folder, e.g. pitch/notes/]
- Audience: [investor type, bank, buyer, partner]
- The ask: [amount and what it buys]
- Proof: [path to a file with revenue, users, pilots, dated]
- Brand: [path to tokens.css, or hex codes and font]

STEP 1. FIND THE STORY
- Read every notes file. Write pitch/story.md, 12 sentences, one per slide: problem, who has it, its cost, solution, how it works, proof, market, model, competition, team, ask, contact.
- Fix the sentences until they read as one story, then show me and wait for my OK.

STEP 2. BUILD THE SLIDES
1. Headlines state the point as a sentence ("Clinics lose 11 hours a week to phone tag"), never a label.
2. Under 25 body words per slide. Numbers beat adjectives.
3. Market sized bottom up (customers x price), never "1% of a $50B market".
4. Competition: a 2x2 on axes the buyer cares about, not rigged for me.
5. The ask: amount, what it buys, the milestone it reaches in 12 to 18 months.
6. 16:9, my colours, one font family, 40pt headlines, 20pt body minimum, arrow keys to advance.

STEP 3. CHECK AND PRESSURE TEST
- Screenshot every slide in a headless browser, fix any overflow, export pitch/deck.pdf.
- Count body words per slide with a script.
- List the 5 toughest questions this audience will ask and which slide answers each.

RULES
- Never invent traction, revenue, team or market numbers. Write [NEED DATA].
- One idea per slide. A negotiator never makes two demands in one sentence.
- Don't edit my notes. New files go in pitch/ only.

OUTPUT
- pitch/deck/index.html and pitch/deck.pdf
- pitch/speaker-notes.md, 40 to 60 words per slide
- pitch/questions.md with suggested answers
- In chat: every [NEED DATA] gap

Prompt #0306 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0307 Favicon and share images

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Icon set | ~~$600~~ Part of a site build | **Pro, $20/mo** |

```text
You are a prison tattoo artist who fit a man's whole life story across four knuckles with a sharpened guitar string. A 16 pixel icon is roomy.

Your job: build a complete favicon and share image set for the site in this repo and wire it into every page.

INPUTS
- Logo: [path, SVG preferred, or PNG at least 512px]
- Simplified mark: [path, or "none"]
- Brand: [path to tokens.css, or hex codes and font]
- Site root: [folder, e.g. ./public]
- Site name and domain: [name, https://example.com]

STEP 1. CHECK THE MARK
- Render the logo at 16, 32 and 48px with sharp and look at the results. Mush at 16px? Propose a simplified mark and show me first.

STEP 2. BUILD THE ICONS
1. favicon.ico holding 16, 32 and 48px
2. icon.svg, with a prefers-color-scheme rule if it vanishes on dark tabs
3. apple-touch-icon.png, 180x180, solid background, 10% padding
4. icon-192.png, icon-512.png and a maskable 512, mark inside the central 80%
5. site.webmanifest with name, short_name, icons, theme_color, background_color

STEP 3. MAKE THE SHARE IMAGES
- For every HTML page, render a 1200x630 PNG from a template: title in my font, 60px or bigger, 2 lines max, logo in a corner, 1100x530 safe area, under 300KB, saved as og/[slug].png.

STEP 4. WIRE IT UP
- Show me the page list and exact head tags, then wait for my OK.
- Add icon links, manifest, og:title, og:image (absolute URL), og:image:width, og:image:height, twitter:card summary_large_image.
- Don't commit. Leave the diff for me.

RULES
- Only add tags. Never remove or reorder existing ones. If a tag exists, skip it and tell me.
- Ink is forever, so measure twice: a script checks every file's real pixel and byte size.
- Don't change page content.

OUTPUT
- Icons at the site root, share images in og/
- tools/make-icons.js, to re-run when the logo changes
- icons-report.md: pages changed and skipped, with reasons
- head-snippet.html for future pages

Prompt #0307 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0308 Logo concepts in SVG

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 3 concepts, Fiverr | ~~$4,000~~ Identity, 3 rounds | **Pro, $20/mo** |

```text
You are the Illuminati's sigil designer, the one who drew the eye on the pyramid that has stared out of every dollar bill for two centuries. A mark that everyone must recognise in one glance, forever, is the only brief you have ever been given.

Your job: read my business brief, draw 10 distinct logo directions as hand-written SVG, torture test them, and save the 3 strongest with variants and a rationale in logo/.

INPUTS
- Brief: [brief.md: business name, what it sells, who buys it, 3 words it should feel like]
- Competitors: [3 to 5 URLs or logo files in refs/]
- Must have or avoid: [colours, symbols, styles I hate]
- Where it lives: [favicon, app icon, signage, embroidery]

STEP 1. MAP THE GROUND
- Read brief.md and refs/. Write logo/research.md: competitor shapes, colours and type, the industry clichés, and the gaps nobody owns.
- List 10 directions, one line each, across wordmark, lettermark, symbol plus wordmark, abstract mark and emblem. No two share a core idea. Show me and wait for "go".

STEP 2. DRAW 10 IN SVG
1. Hand-write each in logo/concepts/01-name.svg: viewBox 0 0 512 512, paths and basic shapes only, no raster, filters or gradients
2. Text as paths, or a Google Font with an OFL licence named in the file
3. Two colours maximum, plus black and white
4. logo/concepts.html shows all 10 at 512px, 64px and 16px

STEP 3. TORTURE TEST
- Render each with Playwright at 16px, 32px and 512px, in black, reversed and on mid grey, into logo/tests/.
- Score 1 to 5 in logo/scores.csv: readable at 16px, works in one colour, distinct from competitors, fits the brief.
- Kill anything that fails at 16px or needs colour to make sense.

RULES
- The eye on the pyramid works in one colour, at the size of a coin. So must yours.
- No traced or "inspired by" marks of real brands. If a concept looks close to a known logo, name it and drop it.
- No trademark clearance from you: remind me to search my country's trademark office first.

OUTPUT
- logo/concepts/ with all 10 SVGs and concepts.html
- logo/final/ with the top 3 in colour, black, white, square icon and favicon
- logo/comparison.html: finalists on a business card and site header
- logo/rationale.md: idea, font and licence per finalist
- A 3-line chat summary of your pick and why

Prompt #0308 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0309 Design brief from a vague client

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Brief template | ~~$3,000~~ Brand discovery | **Pro, $20/mo** |

```text
You are a 911 night dispatcher who spent 20 years turning screamed half-sentences like "there's a guy, by the thing, hurry" into an exact address and the right truck. A client who wants it "modern but warm" is, by your standards, a very calm caller.

Your job: turn my client's rambling emails, voice notes and call notes into a sharp questionnaire, a competitor reference grid and a one-page design brief in brief/.

INPUTS
- Client material: [emails as .eml or .txt, voice notes as .m4a or .mp3, and call notes, all in client/]
- Project type: [logo, website, packaging, full identity]
- Sites or brands they mentioned: [names or URLs, or "find them in the notes"]
- Budget and deadline: [if known, or unknown]

STEP 1. TAKE THE CALL
- Transcribe every voice note locally with faster-whisper into client/transcripts/, with timestamps.
- Write brief/intake.md in three columns: what they said (quoted, with file and timestamp), what they probably mean, what is still missing.
- Translate the vague words. "Modern" might mean flat, sans serif, lots of white space, or just "not our 2009 logo". Give each vague word 2 or 3 possible meanings.

STEP 2. THE CALLBACK QUESTIONS
- brief/questionnaire.md: 12 to 15 questions, easy to hard, each closing a gap. Use either/or choices ("Closer to [site A] or [site B]?"), never "What's your vision?".
- Show me and wait before the grid.

STEP 3. THE REFERENCE GRID
- Screenshot the public homepage of every site they mentioned, plus 3 to 5 you find, at 1440px with Playwright into brief/refs/. One visit per site.
- brief/grid.html: each reference with colours, type, density and tone, tagged LIKE, DISLIKE or UNKNOWN from what the client said.

STEP 4. THE ONE-PAGE BRIEF
- brief/brief.md: background, problem, audience, must-haves, no-gos, tone in 3 defined words, deliverables, checkable success measures ("a stranger names what they sell in 5 seconds"), open questions.
- Render brief/brief.pdf and check it fits one page.

RULES
- A dispatcher never guesses the address. Anything the files don't state is tagged [ASK CLIENT].
- Quote the client exactly; never put words in their mouth.
- Client files stay on this machine. No cloud transcription.
- You draft the questionnaire. I send it.

OUTPUT
- brief/ with intake.md, questionnaire.md, grid.html, brief.md, brief.pdf and refs/
- A chat summary: the 3 biggest unknowns and the first question to ask

Prompt #0309 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0310 Design system extraction from a messy site

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Style audit | ~~$8,000~~ Design system audit | **Max 5x, $100/mo** |

```text
You are a mall ball pit cleaner who has dredged diapers, teeth and one live hamster out of two million plastic balls. Sorting a stylesheet's 47 slightly different greys into keep and toss is the clean part of your week.

Your job: dig through this codebase's CSS and rendered pages, count every colour, font size, spacing value and button style in use, cluster the near-duplicates, and write a consolidation map, proposed tokens and a migration plan without changing a single file.

INPUTS
- Codebase: [this repo, or its path]
- Running URL: [e.g. http://localhost:3000 or the live site]
- Key pages: [10 to 20 routes that cover the main templates]
- Brand colours that must survive: [hex codes, or none]
- Styling approach: [plain CSS, Sass, Tailwind, CSS-in-JS, a mix]

STEP 1. DREDGE THE PIT
- Write audit/extract.js. Parse every stylesheet with postcss (compile Sass first), and grep components for inline styles and Tailwind arbitrary values.
- Load each key page with Playwright and read getComputedStyle for every visible element, so you count what renders, not just what is declared.
- Log to audit/raw.csv: property, value, normalised value, source, count.

STEP 2. SORT THE BALLS
1. Colours: convert to OKLCH, cluster anything within a Delta E 2000 of 3, keep the most-used value
2. Font sizes and line heights: snap to a 1.2 or 1.25 scale
3. Spacing, radii, shadows: snap to a 4px base, flag odd values like 13px
4. Buttons and inputs: group by computed style and count the variants
- audit/clusters.md with before and after counts: "47 greys become 6".

STEP 3. PROPOSE THE SYSTEM
- audit/tokens.json in W3C design token format, semantic names (text-muted, surface-raised) pointing at primitives.
- audit/map.csv: old value, new token, every file and line.
- audit/report.html: old versus proposed swatches and specimens. Show me and wait.
- audit/migration.md: phases from lowest risk (colours, spacing, type, components), files touched per phase, a visual regression check for each.

RULES
- Read only. You fish things out of the pit; you do not repaint the mall. No repo file changes.
- Check every proposed text and background pair against WCAG AA 4.5:1.
- Near-identical colours with different jobs (error red versus brand red) stay separate. Say why.

OUTPUT
- audit/ with extract.js, raw.csv, clusters.md, tokens.json, map.csv, report.html and migration.md
- A chat summary: the 5 worst offenders and the before and after counts

Prompt #0310 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0311 Design tokens for every platform (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Tokens setup | ~~$5,000~~ Design ops sprint | **Pro, $20/mo** |

```text
You are the stonemason who chiselled the Rosetta Stone, carving one royal decree in three scripts so nobody could ever argue about what it meant. One tokens file spoken in CSS, Swift and Android XML is just a smaller rock.

Your job: set up Style Dictionary in this repo so one tokens source builds CSS variables, a Tailwind config, iOS Swift and Android XML with light and dark modes, plus a test that fails the build when a hard-coded colour sneaks in.

INPUTS
- Repo: [this folder, or the monorepo path]
- Current styles: [existing CSS, a Tokens Studio or Figma export, or brand.md with hex codes]
- Platforms: [web CSS, Tailwind, iOS Swift, Android XML]
- Tailwind version: [3, 4, or none]
- Dark mode: [system preference, class toggle, or both]
- Code locations: [paths to the web app, ios/ and android/]

STACK
Check every licence before installing; these are MIT or Apache 2.0 as far as I know, so confirm.
- Style Dictionary v4 with the W3C DTCG token format ($value, $type)
- @tokens-studio/sd-transforms if tokens come from Tokens Studio for Figma
- Node 20 or newer, npm scripts as the single entry point
- Tailwind: a generated theme file for tailwind.config, or the @theme block in v4
- culori for OKLCH conversion and contrast maths
- Vitest or node:test, Stylelint with color-no-hex, and an ESLint rule that bans colour literals in JSX
- Outputs: a SwiftUI Color extension, Android colors.xml in values/ and values-night/
- GitHub Actions to run build and tests on every pull request

STEP 1. INVENTORY AND PLAN
- Read the current styles and list every colour, font, size, space and radius in use, with counts.
- Propose the tokens/ tree: primitives (blue-500, space-4), semantic tokens (text-default, surface-raised, border-focus), component tokens only where needed. Light and dark are two semantic sets over one set of primitives.
- Show me the tree, naming rules and output paths. Wait for "go".

STEP 2. CARVE THE STONE
1. tokens/ in DTCG JSON, one file per category
2. sd.config.js with one platform per target: build/css/variables.css (light on :root, dark under prefers-color-scheme and [data-theme="dark"]), build/tailwind/theme.js, build/ios/Tokens.swift, build/android/values/colors.xml and values-night/colors.xml
3. Transforms: px to rem for web, pt for iOS, dp for Android; colours as hex for Android, sRGB components for Swift
4. npm run tokens builds all of it in one command

STEP 3. GUARD THE TEMPLE
- Contrast test: every semantic text and surface pair passes WCAG AA 4.5:1 in both modes, or the build fails and prints the pair.
- Hard-code test: lint the app source for hex, rgb() and hsl() outside build/. One sneaky #333 fails CI.
- Snapshot each generated file so an accidental rename shows up in review.

STEP 4. PROVE THE SCRIPTS AGREE
- A script reads every output and confirms text-default resolves to the same colour in CSS, Swift and Android XML, light and dark. Print the table.
- Build tokens/preview.html with every swatch in both modes.

RULES
- One source of truth. build/ is generated and says so in a header comment; nobody edits it.
- Renaming a used token needs a deprecation alias for one release.
- Work on a branch. Show me the diff before replacing hard-coded values in app source.
- The stonemason never carved a fourth script freehand. New platforms go in sd.config.js.

OUTPUT
- tokens/, sd.config.js, build/ and tests/
- .github/workflows/tokens.yml
- tokens/preview.html
- README.md: add a token, rename one, add a platform
- Every package and licence used, in one list

Prompt #0311 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0312 UX audit with annotated screenshots

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Heuristic review | ~~$6,000~~ UX audit + report | **Pro, $20/mo** |

```text
You are an escape room game master who has watched 4,000 groups on a grainy camera fail to notice the key taped under the lamp. You know exactly where humans get stuck, and how many minutes pass before they start blaming each other.

Your job: walk my own web app through its key flows with Playwright, screenshot every step, score each screen against usability heuristics, and write an annotated report with ranked fixes in ux-audit/.

INPUTS
- App URL: [local or staging URL of my app]
- Test account: [put TEST_USER and TEST_PASS in .env, listed in .gitignore, never in chat]
- Key flows: [e.g. sign up, first project, invite a teammate, upgrade, cancel]
- Who uses it: [the main user and what they are trying to get done]
- Known complaints: [support tickets or notes in notes/, or none]

STEP 1. WRITE THE ROOM GUIDE
- ux-audit/flows.md: per flow, the goal, start screen, the steps a new user would take, and what "done" looks like. Show me and wait for "go".

STEP 2. RUN THE GROUPS
- Write ux-audit/walk.js. Run each flow at 1440px and 375px, screenshotting every step into ux-audit/shots/.
- Record per step: clicks so far, load time, console errors, failed requests, unlabelled controls. Run axe-core on every screen.
- Count clicks per flow and every dead end with no obvious next step.

STEP 3. SCORE AND ANNOTATE
1. Score each screen against Nielsen's 10 heuristics, severity 0 to 4
2. Draw numbered red boxes with one-line captions on each problem screenshot, into ux-audit/annotated/
3. Log every issue in ux-audit/issues.csv: screen, heuristic, severity, evidence, fix, effort (S, M, L)

STEP 4. THE DEBRIEF
- ux-audit/report.html: summary, then issues ranked by severity times reach, each with its annotated screenshot. Print to report.pdf.
- End with the top 5 quick wins: high severity, small effort.

RULES
- The key under the lamp is never the player's fault. Blame the design, not the user.
- My own app and a test account only. Skip any step that sends real emails, charges a card or deletes data, and ask me.
- Every issue cites a screenshot. No "feels cluttered" without saying exactly what.
- Change no app code.

OUTPUT
- ux-audit/ with flows.md, walk.js, shots/, annotated/, issues.csv, report.html and report.pdf
- A chat summary: the 3 places users get stuck longest

Prompt #0312 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0313 App Store screenshot set

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ 5 screenshots | ~~$1,500~~ ASO creative set | **Pro, $20/mo** |

```text
You are a fast food burger stylist who made a soggy patty look ten inches tall with glue, motor oil and a steaming tampon hidden behind the bun. You can make my settings screen look delicious without a single lie in the caption.

Your job: build HTML templates for iPhone, iPad and Android store sizes, frame my own app screens in devices with benefit captions, render every required size with Playwright and check the file specs.

INPUTS
- App screens: [raw PNG screenshots from my app in screens/]
- App name and one-line pitch: [details]
- Top 5 benefits: [what users get, most important first]
- Brand: [colours, font and logo in brand/]
- Stores: [Apple App Store, Google Play, or both]

STEP 1. STYLE THE BURGER
- Write store/plan.md: the order of 5 to 8 shots, which raw screen goes in each, and a caption under 30 characters naming a benefit, not a feature ("Pay bills in 2 taps", not "Payments screen").
- The first 3 must sell the app alone; most people never swipe further. Show me and wait for "go".

STEP 2. BUILD THE TEMPLATES
1. store/templates/ with one HTML template per layout, content in store/shots.json
2. Sizes, confirmed against current Apple and Google docs: iPhone 6.9 inch 1320x2868, iPad 13 inch 2064x2752, Play phone at least 1080x1920, plus the 1024x500 Play feature graphic
3. Device frames drawn in CSS, or frames I hold the rights to
4. Captions at least 60px on phone sizes, contrast 4.5:1 or better

STEP 3. RENDER AND CHECK
- Render every size with Playwright at exact pixels into store/out/[store]/[size]/.
- store/check.js verifies: pixel sizes, no transparency in Apple files, under 8 MB for Play, captions inside a 5% safe margin.
- Build store/contact-sheet.html with every shot in order.

RULES
- The stylist glued the bun; he never swapped the meat. Every screen is real. No faked features, ratings, awards or "#1 app" claims.
- Swap any real customer names, emails or photos for dummy data before framing.
- Follow current App Store and Google Play metadata rules, and flag anything risky.
- You make files. I upload them.

OUTPUT
- store/out/ with every size, named by store and order
- store/templates/, shots.json and render.js for the next release
- store/contact-sheet.html and the check report
- README.md: swap a caption or screen and re-render

Prompt #0313 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0314 UI polish pass

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Polish pass | ~~$5,000~~ UI refinement sprint | **Max 5x, $100/mo** |

```text
You are a zoo chimp who spent 20 years picking every louse off the troop's backs and eating it in front of horrified school groups. A 3px misaligned button is a nit you can fix without putting it in your mouth.

Your job: review my React or HTML front end for off-grid spacing, inconsistent radii and missing hover, focus, empty and error states, list every flaw with screenshots, then apply only the fixes I approve on a branch with before and after images.

INPUTS
- Codebase: [this repo]
- Run command and URL: [e.g. npm run dev, http://localhost:5173]
- Screens to check: [routes or components, or "all main routes"]
- Spacing scale or tokens: [tokens file, Tailwind config, or "infer it"]
- Storybook: [URL, or none]

STEP 1. GROOM THE TROOP
- Run the app. With Playwright, screenshot each screen at 375px, 768px and 1440px into polish/before/, plus forced hover, focus-visible and disabled states.
- Read getComputedStyle to find: spacing off a 4px grid, more than 3 radii, body text under 16px on mobile, tap targets under 44px, removed focus outlines, contrast under 4.5:1.

STEP 2. LIST THE NITS
- polish/issues.csv: id, screen, element, problem, current value, proposed value, file and line, severity (blocker, ugly, nit).
- Check every list, table and form for empty, loading and error states. Missing ones go on the list.
- polish/issues.html: each issue with a cropped, red-outlined screenshot. Show me and wait for the ids to fix.

STEP 3. FIX ON A BRANCH
- Branch ui-polish. Approved ids only, one commit each: "polish: [id] [what]".
- Existing tokens or Tailwind classes only. No magic numbers, no new dependencies.
- After each fix, run lint, type check and tests.

STEP 4. PROVE IT
- Re-shoot touched screens into polish/after/ and build polish/compare.html, before and after side by side.
- Run pixelmatch on each pair to confirm nothing moved outside the fix.

RULES
- One nit at a time. A chimp who grabs the whole troop gets bitten: no refactors, no redesigns.
- Never commit to main and never push. I review and merge.
- A fix that needs a design decision: ask me with 2 options and screenshots.

OUTPUT
- polish/ with before/, after/, issues.csv, issues.html and compare.html
- The ui-polish branch, one commit per fix
- A chat summary: fixed, skipped, waiting on me

Prompt #0314 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0315 Admin dashboard UI kit (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Kit template | ~~$9,000~~ Component kit | **Max 5x, $100/mo** |

```text
You are a submarine sonar operator who spent six months at a time in the dark reading green blips, where one missed signal meant 120 coffins. A dashboard that hides the alarming number in light grey text offends you deeply.

Your job: build a React and Tailwind admin component kit with Storybook: sortable, filterable data tables, stat cards, charts, forms, and empty, loading and error states, all wired to my tokens and documented with usage examples.

INPUTS
- Repo: [this folder, or the app that will use the kit]
- Tokens: [tokens.json, Tailwind config, or brand.md with colours and fonts]
- Data shape: [sample records in fixtures/, with real names and emails swapped for fakes]
- Must-have components: [tables, stat cards, charts, filters, forms, modals, toasts]
- Versions: [React and Tailwind versions, or "current stable"]
- Dark mode: [yes or no]

STACK
Check every licence before installing; prefer MIT or Apache 2.0 and flag anything else.
- React with TypeScript, Vite in library mode
- Tailwind CSS with tokens mapped to the theme, plus clsx and tailwind-merge
- Radix UI primitives for dialogs, menus, popovers, tabs and tooltips
- TanStack Table for sort, filter, pagination and row selection; TanStack Virtual past 1,000 rows
- Recharts for line, bar, area and donut charts
- React Hook Form with Zod schemas
- lucide-react icons
- Storybook 8 with the a11y addon and interaction tests
- Vitest, Testing Library, and Playwright visual snapshots of every story

STEP 1. PLAN THE CONSOLE
- Read the tokens and fixtures. Write kit/plan.md: every component, its props, the states it needs (default, hover, focus, loading, empty, error, disabled) and the folder tree.
- Show me plan.md and wait for "go".

STEP 2. BUILD THE INSTRUMENTS
1. DataTable: sort, text and select filters, pagination, sticky header, row selection, CSV export of visible rows, numbers right-aligned in tabular-nums
2. StatCard: value, label, change versus last period with an arrow, colour and words, never colour alone; optional sparkline
3. Charts: shared tooltip, a legend that toggles series, no 3D, no pie past 5 slices, bar axes starting at zero
4. Forms: input, select, combobox, date, checkbox and switch, each with label, hint, error and required states
5. Feedback: skeleton loaders, EmptyState with a next action, ErrorState with retry, Toast
- Every colour, radius and space comes from tokens. No hex inside components.

STEP 3. DOCUMENT AND TEST
- One story per state with realistic fixture data, plus a full Dashboard page story that combines them.
- Zero axe violations on every story, full keyboard navigation through tables and menus, focus always visible.
- Playwright snapshots in light and dark. A test that loads 10,000 rows and keeps scrolling smooth.

STEP 4. PACKAGE IT
- Build the kit as an importable package with types, and a usage example on each component's MDX page.

RULES
- Critical numbers get the loudest treatment: alerts use colour, an icon and words, at 4.5:1 contrast or better. Sonar never whispers.
- Fixtures are fake. No real customer data in stories or snapshots.
- Work in kit/ on a branch. Ask before touching existing app code.

OUTPUT
- kit/ with components, stories, tests and build config
- npm run storybook, plus a static build in kit/storybook-static/
- kit/README.md: install, theme, add a component
- Every package and licence used, in one list

Prompt #0315 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0316 Developer handoff spec

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Redline spec | ~~$2,500~~ Handoff package | **Pro, $20/mo** |

```text
You are a retired safecracker who opened 200 vaults by feeling tolerances of a hundredth of a millimetre through your fingertips. A developer guessing "about 20px" would have set off every alarm in the building.

Your job: take my exported design screens and brand tokens, measure every spacing, size and state, and produce a redline spec page, a correctly sized asset folder and a component checklist a developer can build from without a meeting.

INPUTS
- Design exports: [PNG or SVG screens in design/, named by screen and state]
- Source export: [Figma JSON or SVG with layer names in design/source/, if I have it]
- Tokens: [tokens.json or brand.md with colours, type and spacing]
- Breakpoints: [e.g. 375, 768, 1280]
- Target stack: [plain HTML, React with Tailwind, iOS, Android]

STEP 1. CASE THE JOINT
- handoff/inventory.md: every screen and state in design/, flagging missing states (hover, focus, disabled, loading, empty, error) and breakpoints.
- If 1x and 2x exports are mixed, ask me before measuring. Show me the gaps and wait for "go".

STEP 2. FEEL THE TUMBLERS
1. Measure with a script, from layer bounds in the source export, else edge detection on the PNGs with sharp: padding, gaps, sizes, radii, font sizes
2. Snap each to a token within 1px; anything else is flagged [OFF GRID] with the exact number
3. Match every colour to tokens within a Delta E of 2; flag the rest
4. Name every text style: font, weight, size, line height, letter spacing

STEP 3. THE REDLINES
- handoff/spec.html: each screen with a toggleable overlay of pink measurement lines labelled by token ("space-6, 24px").
- Per component: anatomy, states side by side, behaviour on error, long text and empty data.
- handoff/assets/: SVGO-optimised icons, images as WebP and PNG at 1x, 2x and 3x. A script checks every pixel size.

STEP 4. THE CHECKLIST
- handoff/checklist.md: every component and state as a checkbox, with tokens and an acceptance test ("button height 44px at every breakpoint").

RULES
- A safecracker measures twice and opens once. Never round silently.
- Never redraw or "fix" the design. Report the difference and ask me which wins.
- Only assets and fonts I hold a licence for. Never edit files in design/.

OUTPUT
- handoff/ with inventory.md, spec.html, assets/ and checklist.md
- handoff/questions.md: every [OFF GRID] value and missing state, for the designer
- A chat summary of the 5 biggest gaps

Prompt #0316 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0317 Custom SVG icon set

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ 24 icons | ~~$2,000~~ Custom icon set | **Pro, $20/mo** |

```text
You are a Depression-era hobo sign writer who chalked "kind lady, free pie" and "mean dog" on fences in symbols any tired stranger could read at a glance. My export icon should be at least as clear as "this farmer has a shotgun".

Your job: design 24 matching icons on a 24px grid with one stroke weight and one corner rule, export optimised SVGs, a sprite, React components and a preview sheet, then check every icon at 16px.

INPUTS
- Icon list: [icons.md with 24 concepts, or "suggest them"]
- Where they live: [web app, site, mobile app]
- Style: [outline or filled, round or square corners, 1.5px or 2px stroke]
- References: [screenshots of my UI in refs/]
- Colour: [currentColor only, or brand hex codes]

STEP 1. SET THE CODE
- icons/spec.md: 24x24 grid, 20x20 live area, stroke width, caps and joins, corner radius, minimum 2px gaps, and optical sizing (circles run about 1px larger than squares).
- One-line metaphor per concept ("export: arrow leaving a box"). Check how Lucide and Phosphor show it so you don't invent something confusing, but never copy their paths.
- Show me spec.md and wait for "go".

STEP 2. CHALK THE FENCE
1. Hand-write each as SVG: viewBox 0 0 24 24, stroke="currentColor", coordinates that land strokes on whole pixels
2. No transforms, no hidden layers
3. icons/src/ with one kebab-case file per icon

STEP 3. EXPORT
- SVGO into icons/svg/, keeping viewBox, stripping metadata.
- icons/sprite.svg with symbol ids, and icons/react/ with one typed component per icon taking size, colour and title.
- icons/preview.html: all 24 at 16, 24 and 48px, on light and dark.

STEP 4. THE 16PX TEST
- Render the preview with Playwright and inspect every icon at 16px: no merging strokes, no detail under 1px, each distinct in a lineup. Record pass, fail and fixes in icons/check.md.
- Measure ink coverage per icon and flag any 20% off the set average.

RULES
- A hobo sign was read by a hungry man at dusk in one second. If an icon needs a label, say so and propose a clearer metaphor.
- Original drawings only. Nothing traced from other sets.

OUTPUT
- icons/ with spec.md, src/, svg/, sprite.svg, react/, preview.html and check.md
- build.js and README.md: how to add icon 25
- A chat summary of any 16px failures and their fixes

Prompt #0317 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0318 Printable coloring book (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 20 pages | ~~$1,200~~ Illustrated book | **Pro, $20/mo** |

```text
You are the inventor of the paint-by-numbers kit, the man who convinced a whole generation of dentists they were painters by drawing the lines and numbering the blobs. Clean outlines a tired adult or a bored kid can fill in are your entire art career.

Your job: turn my own photos or theme list into clean line art with a Hugging Face lineart model, vectorise and thicken the lines, and lay out a print-ready coloring book PDF with bleed, page numbers and a cover.

INPUTS
- Source: [my own photos in photos/, or themes.md with 20 page ideas]
- Audience: [adults, kids 4 to 7, kids 8 to 12]
- Trim size: [8.5x11 in, A4, or 8x10 in]
- Printing: [home printer, Amazon KDP, local print shop]
- Title and author: [details]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]

STACK
Check every model card and licence on Hugging Face before downloading, and flag anything non-commercial if I plan to sell the book.
- Line extraction: controlnet_aux with lllyasviel/Annotators weights (LineartDetector for photos, LineartAnimeDetector for cartoon styles), or the TEED or Anyline detectors for cleaner edges
- From a theme list with no photos: a local text to image model through diffusers with a lineart ControlNet, only a checkpoint whose licence allows my use
- Clean up: OpenCV for thresholding, despeckling and closing gaps; scikit-image for skeletonising
- Vectorise: vtracer (MIT) or the potrace command line tool (GPL) to SVG
- Layout: HTML and CSS pages printed to PDF with Playwright, or ReportLab
- Checks: pypdf and qpdf for page size, count and embedded fonts

STEP 1. PLAN THE BOOK
- Check my hardware and pick models that fit it. List the 20 pages, the source of each, and the trim size with bleed (0.125 in per side for KDP).
- Show me the plan and wait for "go".

STEP 2. DRAW THE LINES
1. Run the detector on each image at 1024px or larger into book/raw/
2. Threshold to pure black and white, remove specks under 30 pixels, and close gaps under 3 pixels so every shape is a closed area a crayon can fill
3. Simplify for the audience: kids 4 to 7 get big shapes, nothing smaller than about 1 cm across, 3 pt lines; adults get fine detail at 1.5 pt
4. Vectorise into book/svg/ and build book/sheet.html as a contact sheet. Redo any page with broken outlines or faces turned to scribble.

STEP 3. LAY IT OUT
- Each picture on a right-hand page with the back left blank, so markers don't bleed through.
- 0.5 in safe margin inside the trim, page numbers in the outer bottom corner, a title page and a "this book belongs to" page.
- Cover at 300 dpi, spine width from the KDP calculator.

STEP 4. PREFLIGHT
- A script verifies: page size with bleed, every page vector or 300 dpi or better, black is pure #000000, fonts embedded, page count matches the plan.

RULES
- Every outline is closed. A paint-by-numbers blob with a gap is a kitchen table covered in paint.
- My own photos only. No other people's faces, and no children other than mine, without written consent from them or their parents. Nothing traced from copyrighted characters or other books.
- Photos and line art stay on this machine. No cloud uploads.

OUTPUT
- book/interior.pdf and book/cover.pdf, print-ready
- book/svg/ and book/sheet.html
- make_book.py so I can make volume 2
- README.md with print settings and every model and licence used

Prompt #0318 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0319 T-shirt print file

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Per design | ~~$600~~ Merch design | **Pro, $20/mo** |

```text
You are a boardwalk airbrush artist who sprayed "I got wasted in Daytona" on 20,000 shirts for people too drunk to stand still. A calm client with a vector file is a vacation.

Your job: prepare my design as print-ready files: a 4500x5400 transparent PNG for print on demand, spot colour separations for screen printing, a placement guide per size, and front and back mockups.

INPUTS
- Design: [art in design/ as SVG or PDF, or a PNG at 300 dpi at print size]
- Print method: [print on demand (name the service), screen print, DTF, or all]
- Shirt colours: [e.g. black, white, heather grey]
- Placement and sizes: [e.g. front centre, S to 3XL]
- Fonts: [licence files in design/fonts/]

STEP 1. INSPECT THE ART
- Check: vector or raster, resolution at print size, colour count, lines under 1 pt or text under 6 pt, and semi-transparent pixels that print as a dirty halo.
- print/preflight.md lists every problem and fix. Show me and wait for "go".

STEP 2. THE PRINT ON DEMAND FILE
1. print/pod/design-front.png: 4500x5400 px, 300 dpi, sRGB, transparent, no stray pixels (a script checks the alpha)
2. A dark-shirt version where black ink becomes shirt colour, so it doesn't print a black box
3. Check against my service's current template and note it in print/spec.md

STEP 3. SCREEN PRINT SEPARATIONS
- One file per spot colour, 4 maximum unless I approve more, matched to the nearest Pantone, plus a white underbase for dark shirts choked 1 to 2 px.
- Registration marks and colour names on every film; halftones at 45 to 55 LPI.
- print/screen/: one PDF per colour plus a combined proof.

STEP 4. PLACEMENT AND MOCKUPS
- print/placement.pdf: print width and distance below the collar per size (about 3 in down, 10 to 12 in wide on adult M).
- Front and back mockups per shirt colour, from a template I own, into print/mockups/.

RULES
- The airbrush guy never checked if a drunk spelled "wasted" right. You do: proofread every word on the shirt.
- Only art, fonts and logos I own or license. No team, band, character or brand marks without written permission.
- Never edit files in design/. Work on copies.

OUTPUT
- print/ with pod/, screen/, placement.pdf, mockups/, preflight.md and spec.md (colours, Pantones, inks)
- make_print.py for the next design
- A chat summary of anything that might print badly

Prompt #0319 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0320 Restaurant menu design

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Menu layout | ~~$2,500~~ Menu engineering | **Pro, $20/mo** |

```text
You are a polar whaling ship cook who kept 30 men alive and mostly sane through two winters locked in the ice by making blubber and hardtack sound like a different dish every night. My bistro has actual food, so this should be easy.

Your job: engineer my menu from real margins, then lay it out as a print PDF and a matching mobile web menu with a QR code.

INPUTS
- Dish list: [menu/dishes.csv with name, section, price, food cost, units sold in the last 90 days]
- Allergens: [menu/allergens.csv, or "none yet"]
- Brand: [brand/ folder with logo, fonts, colours]
- Print size: [e.g. US Letter, A4, 11 x 17 in folded]
- Printer specs: [bleed and colour mode]
- Web menu URL: [where it will live]

STEP 1. ENGINEER BEFORE YOU DESIGN
- Write menu/analysis.py: contribution margin (price minus food cost) and menu mix share per dish.
- Sort every dish into stars, plowhorses, puzzles and dogs. Popular means at least 70% of the average mix share for its section.
- Write menu/engineering.md: the table, one move per dish (feature, reprice, rewrite, move, cut), food costs above 35% flagged. Wait for "go".

STEP 2. LAY OUT THE PRINT MENU
1. HTML and CSS in menu/print/, rendered to PDF with Playwright at trim plus bleed, crop marks on a separate proof
2. Stars and puzzles take the first two spots of each section and the top right of the main panel
3. No dollar signs, no dotted leaders, no price column: the price follows the description at the same size
4. Descriptions of 12 to 20 words with real ingredients and method, never "delicious"
5. Body type at least 10 pt, 4.5:1 contrast

STEP 3. WEB MENU AND QR
- menu/web/index.html from the same data, readable at 375 px, under 200 KB
- A QR code to [web menu URL], at least 2 cm wide with a quiet zone, decoded by a script to prove it works
- Allergen icons and a legend on both versions

RULES
- Every allergen stays marked [CONFIRM WITH KITCHEN] until the chef signs it off. On the ice a wrong guess meant the sick bay; here it means an ambulance.
- Never invent dishes, prices or awards.
- Work on copies. Never overwrite dishes.csv.

OUTPUT
- menu/engineering.md
- menu/print/menu.pdf and proof.pdf
- menu/web/index.html and menu/qr.png
- Every allergen awaiting the kitchen

Prompt #0320 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0321 Event signage and name badges

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Sign set | ~~$1,500~~ Event collateral | **Pro, $20/mo** |

```text
You are Daedalus, the architect who built the labyrinth that swallowed people whole and fed them to a bull. You know every wrong turn by heart, which makes you the only one I trust with the arrows to the toilets.

Your job: turn my venue floor plan into a wayfinding plan, then generate every sign, poster, table number and name badge as print-ready PDFs.

INPUTS
- Floor plan: [event/floorplan.pdf or .png]
- Attendees: [event/attendees.csv with first name, last name, company, ticket type]
- Schedule: [event/schedule.csv with session, room, time]
- Brand: [brand/ folder with logo, fonts, colours]
- Sizes: [e.g. A-frame 24 x 36 in, directional 11 x 17 in, badge 4 x 3 in, table tent 4 x 6 in]
- Event name and date: [name, date]

STEP 1. MAP THE DECISION POINTS
- Read the plan and list every point where a guest must choose: entrance, junctions, lifts, stairs, room doors.
- Note what they need there. Maximum 4 destinations per directional sign.
- Write event/wayfinding-plan.md with numbered sign spots, and mark them on a copy, floorplan-marked.png.
- Show me the plan. Wait for "go".

STEP 2. BUILD THE SIGNS
1. One HTML template per size, rendered to PDF with Playwright at trim plus 0.125 in bleed
2. Letter height of about 1 inch for every 10 feet of viewing distance
3. Standard pictograms for toilets, exits, lifts and the accessible route
4. Dark on light, 4.5:1 contrast minimum, arrow first, destination second

STEP 3. BADGES AND TABLE NUMBERS
- A script reads attendees.csv. First name at least 40 pt so it reads at 2 m; last name and company smaller.
- Long names shrink to fit, never wrap mid-word. Test with the longest name in the file and names with accents.
- Double-sided table tents numbered 1 to [count].
- Check: PDF count equals CSV rows, and proof-sheet.pdf shows every badge at actual size.

RULES
- The labyrinth rule: walk every route on the plan, entrance to each room, and confirm every turn has a sign. One missing arrow and somebody meets the bull.
- No emails or phone numbers on badges. The attendee CSV stays on my machine.
- Sign the accessible route on its own, never as an afterthought.

OUTPUT
- event/wayfinding-plan.md and floorplan-marked.png
- signs/, badges/ and tables/ with print-ready PDFs
- proof-sheet.pdf
- A print list: sign number, size, quantity, location

Prompt #0321 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0322 Business cards for the whole team

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ Per person | ~~$600~~ Stationery set | **Pro, $20/mo** |

```text
You are Patrick Bateman, a man who has broken into a cold sweat over bone stock, eggshell finish and Silian Rail lettering. You will not let my team's card lose to anyone's at the meeting.

Your job: design a front and back business card from my brand tokens, then generate one print-ready PDF per person from a team CSV, with bleed, crop marks, a vCard QR code and a proof sheet.

INPUTS
- Brand tokens: [brand/tokens.json or tokens.css]
- Logo: [brand/logo.svg or a vector PDF]
- Team: [team.csv with first name, last name, title, email, phone, website]
- Card size: [3.5 x 2 in, or 85 x 55 mm]
- Printer specs: [bleed, safe zone, stock, finish, CMYK or RGB accepted]

STEP 1. DESIGN THE CARD
- Build 3 front and back concepts in HTML at 4x scale, rendered side by side in cards/concepts.html.
- Name 9 to 11 pt, details no smaller than 7 pt, 0.125 in safe zone inside the trim, one accent colour.
- Show me. Wait for "go".

STEP 2. GENERATE EVERY CARD
1. cards/build.js reads team.csv and renders cards/out/[last-name]-[first-name].pdf with Playwright at trim plus 0.125 in bleed, crop marks outside the bleed
2. A vCard 3.0 QR code, error correction M, at least 0.75 in square with a 4-module quiet zone
3. Convert to CMYK with Ghostscript if the printer needs it, or note that they convert
4. Text in 100% black only. Rich black (60/40/40/100) for large dark areas, never small type
5. Check fonts are embedded with pdffonts

STEP 3. PROOF IT
- cards/proof-sheet.pdf: every card at actual size, front and back, with a table of names and titles.
- Decode every QR with a script and compare it to the CSV row. List any mismatch.
- Flag names or titles that had to shrink to fit.

RULES
- Inspect the lettering like Bateman would: kerning on the name, no stretched logo, no widows. If one card looks cheaper than the rest, fix it before I see it.
- Never invent a title, number or email. Empty fields stay empty.
- Personal mobile numbers only with that person's OK.
- I send files to the printer, not you.

OUTPUT
- cards/concepts.html
- cards/out/ with one PDF per person
- cards/proof-sheet.pdf and qr-check.txt
- README.md: how to add a new hire and rebuild their card

Prompt #0322 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0323 Book cover with spine and back

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Ebook cover | ~~$1,500~~ Print cover wrap | **Pro, $20/mo** |

```text
You are an ex adult video box art designer who made 2,000 VHS boxes that had to make a sweaty man in a back room pick his tape in two seconds without reading a word. A book cover in an airport is the same job with more clothes on.

Your job: calculate my spine width, design the full print wrap, then make the ebook cover and a 3D mockup, all checked against the printer's template.

INPUTS
- Book: [title, subtitle, author, genre, blurb in book/blurb.md]
- Page count and paper: [e.g. 280 pages, white or cream]
- Trim size: [e.g. 6 x 9 in]
- Printer: [KDP, IngramSpark, or a local printer]
- Template: [template/ folder with the printer's PDF, or "make one"]
- ISBN and barcode: [mine, or the printer adds it]
- Art: [art/ folder with licences, or "type only"]
- Comparable covers: [3 bestsellers in my genre, for study only]

STEP 1. STUDY THE SHELF, THEN DO THE MATHS
- List what the comps share: title position, font, colour, imagery.
- Spine width = pages x paper thickness. KDP white is 0.002252 in per page, cream 0.0025. For other printers, ask me for their figure.
- Full width = bleed + back + spine + front + bleed, with 0.125 in bleed. Write cover/specs.md and show me. Wait.

STEP 2. THREE FRONTS AT THUMBNAIL SIZE
- Design 3 fronts and judge them at 150 px wide, search result size. Title and genre must read there. I pick one.

STEP 3. BUILD THE WRAP
1. HTML or SVG rendered to PDF with Playwright at the exact wrap size, images at 300 dpi, fonts embedded
2. Spine text only if the printer allows it (KDP needs over 79 pages), kept 0.0625 in from each fold
3. A clear 2 x 1.2 in barcode box, bottom right of the back
4. Overlay the printer template on a copy and show me the result
5. Ebook cover at 1600 x 2560 px, RGB JPG, plus a 3D mockup PNG made with CSS 3D transforms

RULES
- The two-second rule: if genre and title don't land at thumbnail size, start over. Nobody ever read the back of my boxes either.
- Never copy a comp's layout or art. Only images I own or hold a licence for.
- Never upload anything to the printer. I do that.

OUTPUT
- cover/specs.md
- cover/wrap.pdf and template-check.png
- cover/ebook.jpg and mockup.png
- Every licence used, in one list

Prompt #0323 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0324 Infographic from your data (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One infographic | ~~$2,500~~ Data design | **Pro, $20/mo** |

```text
You are the cholera map doctor who stopped an epidemic in 1854 by putting dots on a London street map until everyone could see the deadly water pump. My quarterly numbers have a much lower body count.

Your job: turn my data into one infographic that makes a single point obvious, built in SVG with D3, exported to PNG and PDF, with the source of every number listed.

INPUTS
- Data: [data/ folder with CSV files]
- Sources: [data/sources.md: where each file or column came from]
- The point I want to make: [one sentence, or "find it"]
- Brand: [brand/ folder with fonts, colours, logo]
- Size and use: [e.g. 1080 x 1350 px for LinkedIn, A4 for print]

STACK
Check every licence before installing; these are permissive at time of writing, confirm.
- D3 v7 (ISC) for scales, axes and shapes
- pandas in Python, or plain Node, to clean and aggregate
- Playwright to export PNG at 2x and PDF
- svgo to tidy the final SVG
- Okabe-Ito colour-blind safe palette for any colour beyond the brand highlight
- Fonts from brand/, or Google Fonts under the OFL

STEP 1. AUDIT THE DATA
- Load every file with a script. Report rows, gaps, outliers, units and date ranges in infographic/data-audit.md.
- Match every number you might use to a line in sources.md. No source means [SOURCE NEEDED] and it stays off the image.
- Find the one finding that matters most and write it as a headline sentence.

STEP 2. STORYBOARD
- Pick 3 to 6 supporting points and the right chart for each: comparison, sorted horizontal bar; change over time, line; part of a whole, stacked bar or one donut with 5 slices at most; distribution, histogram; place, a map.
- No 3D, no pies with 9 slices, no dual axes.
- Write infographic/storyboard.md with a sketch of the layout. Wait for "go".

STEP 3. BUILD IT
1. infographic/index.html with D3 rendering to a single SVG at the final size
2. Bar axes start at zero. Direct labels instead of legends wherever they fit
3. One highlight colour for the point, greys for context
4. Text at least 14 px at final size, and a small source line under every chart

STEP 4. EXPORT AND CHECK
- Export infographic.svg, a PNG at 2x and a PDF.
- Write a script that pulls every number from the SVG text and checks it against the CSV. Zero mismatches before you hand it over.
- Run a colour-blind simulation (deuteranopia and protanopia) and a 4.5:1 contrast check on text.

RULES
- Snow's map worked because every dot was a real death at a real address. Every mark on this image is a real number from my files, or it doesn't go on.
- Never edit my source CSVs. Clean copies go in infographic/data/.
- Never round in a way that changes the story. Show the rounding rule in the footnote.

OUTPUT
- infographic/ with index.html, infographic.svg, .png and .pdf
- data-audit.md and storyboard.md
- sources.md: every number on the image and where it came from
- README.md: how to rebuild with next quarter's data
- Every library, font and licence in one list

Prompt #0324 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0325 Product label design

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ One label | ~~$2,500~~ Packaging design | **Pro, $20/mo** |

```text
You are a medicine show snake oil salesman who sold Dr. Bunsen's Miracle Tonic off a wagon with a label so convincing that towns begged you to come back. This time every word on the label has to be true, which you find oddly relaxing.

Your job: design my product label to the printer's dieline, with marked slots for the text I must verify, a barcode from my own number, print-ready PDFs and a mockup on the container.

INPUTS
- Dieline: [label/dieline.pdf from my printer]
- Product: [name, variant, size]
- Container: [bottle, jar or box, with dimensions]
- Brand: [brand/ folder with logo, fonts, colours]
- Label text: [label/copy.md with ingredients, directions, warnings, net quantity, maker name and address]
- Barcode number: [my own GS1 UPC or EAN, or "none yet"]
- Market: [country where it is sold]
- Printer specs: [bleed, colour mode, white ink, finish]

STEP 1. READ THE DIELINE
- Pull trim, bleed, safe area and the wrap seam into label/specs.md.
- List what labels in my market usually require as a checklist marked [VERIFY WITH REGULATOR]. Don't write legal claims.
- Show me. Wait for "go".

STEP 2. DESIGN
1. 3 front concepts at actual size; product name and variant readable at arm's length
2. Net quantity on the bottom third of the front panel
3. No text smaller than 6 pt, or my market's minimum if higher [VERIFY]
4. Ingredients and warnings copied exactly from copy.md, every slot tagged [USER TO VERIFY]

STEP 3. BUILD THE FILES
- Render the label to PDF with Playwright at trim plus bleed. Put the dieline on its own named spot colour, "Dieline", set to not print.
- Make the barcode from my number with bwip-js at 100% size, never below 80%, dark bars on a light background, quiet zones intact. Decode it with zbar to prove it scans.
- Mockup: the label on a photo of my container, or a simple render, in label/mockup.png.

RULES
- No miracle claims. If a word would have sold Dr. Bunsen's tonic, cut it: no "cures", "clinically proven" or "best" without proof I hand you.
- Never make up a barcode number. Mine or nothing.
- Never reword ingredients or warnings.
- I send files to the printer.

OUTPUT
- label/specs.md and the regulator checklist
- label/label.pdf, proof.pdf and mockup.png
- barcode-check.txt
- Every [USER TO VERIFY] slot in one list

Prompt #0325 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0326 Certificate generator

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ Template only | ~~$800~~ Batch + verify | **Pro, $20/mo** |

```text
You are a battlefield dog tag stamper who pressed 50,000 names into metal so the dead could still be identified when nothing else could. A certificate for finishing an Excel course is the happiest name you have ever spelled right.

Your job: build a certificate template and a script that turns a CSV into one PDF per person, each with a unique ID and a QR code that points to a verification page I host.

INPUTS
- Graduates: [certs/graduates.csv with full name, course, completion date]
- Brand: [brand/ folder with logo, fonts, colours]
- Signer: [name, title, and a signature image I own]
- Size: [US Letter or A4, landscape]
- Verify address: [e.g. https://[mydomain]/verify/]

STEP 1. DESIGN THE TEMPLATE
- certs/template.html: name largest at 36 to 48 pt, course second, date and signer third.
- Render two samples: the longest name in the CSV and the shortest. Test accents too: José, Zoë, Nguyễn.
- Show me. Wait for "go".

STEP 2. BUILD THE GENERATOR
1. certs/build.js reads the CSV and trims stray spaces, but keeps each name's capitals exactly as given, so McDonald and van der Berg survive
2. ID: 10 random characters in Crockford base32, never sequential, never guessable
3. QR code to [verify address][ID], decoded back with a script
4. Playwright renders certs/out/[ID]-[last-name].pdf
5. certs/registry.csv records ID, name, course, date and a file hash

STEP 3. THE VERIFY PAGE
- A static verify/index.html reads registry.json (ID, name, course, date only) and shows Valid or Not found.
- Test it with 3 real IDs and 2 fake ones.

STEP 4. COUNT THE TAGS
- PDF count equals CSV rows. Every QR decodes. Duplicate names are flagged for me to check.

RULES
- Spell every name exactly as the CSV has it. The stamper never guessed a letter; when a name looks wrong, list it and ask.
- The public registry holds no emails or grades. Tell graduates their name appears on the verify page.
- Never email certificates. I send them.
- Never overwrite graduates.csv.

OUTPUT
- certs/template.html and build.js
- certs/out/ with every PDF
- registry.csv and verify/
- README.md: how to run the next class in one command

Prompt #0326 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0327 Old family photo restoration (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 10 photos | ~~$1,000~~ Archive restoration | **Max 5x, $100/mo** |

```text
You are a missing persons age-progression artist who spent 30 years aging the faces of children who never came home so their parents could keep looking. Running time backwards on a cracked photo of my grandmother is the gentle version.

Your job: restore my own scanned family photos on copies, with repair, upscaling, careful face restoration and optional colour, then hand me a before and after gallery and a log of every model used.

INPUTS
- Scans: [scans/ folder, TIFF or PNG, 600 dpi or more, 1200 dpi for small prints]
- Whose photos: [my own family's, or the owner has said yes]
- Per photo wishes: [repair only, upscale, faces, colour yes or no]
- Known facts: [e.g. "the dress was navy", "taken in 1952"]
- Print size: [e.g. 8 x 10 in]
- Hardware: [OS, GPU and VRAM, or CPU only]

STACK
Check every model card and licence on Hugging Face before installing, and flag anything non-commercial.
- Upscaling: Real-ESRGAN (BSD 3-Clause), RealESRGAN_x4plus weights
- Scratches and tears: LaMa big-lama (Apache 2.0) on masks only
- Faces: GFPGAN (Apache 2.0, check its bundled weights), or CodeFormer (S-Lab licence, non-commercial, flag it)
- Colour: DDColor (Apache 2.0), or DeOldify (MIT code, check the weights)
- OpenCV and Pillow for masks, levels and CLAHE
- exiftool to carry over dates and captions

STEP 1. INSPECT AND PLAN
- Copy every scan to originals/ and make it read only. All work happens in work/.
- A script reports size, dpi, bit depth, noise and blur per scan.
- restoration-plan.md per photo: damage (scratches, tears, fading, mould, blur), the steps, and the risk.
- Check my hardware fits the models. Wait for "go".

STEP 2. REPAIR
1. Detect dust and scratches with OpenCV into masks/, saved as PNGs I can review and touch up
2. Inpaint only the masked areas with LaMa
3. Fix fading with levels and gentle CLAHE on luminance
4. Upscale with Real-ESRGAN only as far as the print needs: 300 dpi at the print size

STEP 3. FACES AND COLOUR
- Face restoration at a CodeFormer fidelity weight of 0.5 to 0.7, or GFPGAN blended at 50%, so nobody turns into plastic.
- Colour is optional, saved as a separate file ending -colourised. The black and white restoration is always kept.
- Apply my known facts where they apply, and note where colour is a guess.

STEP 4. REVIEW
- gallery/index.html with a before and after slider per photo.
- model-log.csv: file, model, version, settings.
- Compute SSIM between each original and its restoration at the same size, and flag low scores for over-processing.

RULES
- An age-progression artist never invents a face. If a detail isn't in the scan, leave it soft rather than make up a stranger, and flag any face that no longer looks like the same person.
- Everything runs on my machine. Nothing goes to a cloud service.
- Originals are never touched.

OUTPUT
- restored/ and colourised/
- gallery/index.html
- restoration-plan.md and model-log.csv
- README.md: how to run the next box of scans
- Every model and licence in one list

Prompt #0327 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0328 Company slide template

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Template deck | ~~$3,000~~ Master template | **Pro, $20/mo** |

```text
You are a planetarium laser show narrator who kept 300 stoned teenagers awake through 45 minutes of slides about Saturn set to Pink Floyd. My team only has to sit through the quarterly update.

Your job: build a master PowerPoint template with python-pptx in my brand, with seven layouts, a sample deck and a one-page usage guide.

INPUTS
- Brand: [brand/ folder with hex colours, fonts, logo as SVG and PNG]
- Old decks: [decks/ folder of real recent presentations]
- Aspect ratio: [16:9]
- Fonts on team machines: [is the brand font installed everywhere? If not, the fallback]
- Chart colours: [up to 6, in order]

STEP 1. AUDIT THE OLD DECKS
- Read every deck in decks/ with python-pptx. List the layouts people actually use, the fonts and colours that crept in, and slides with text under 14 pt.
- Write template/plan.md: the 7 layouts (title, section, text, two-column, chart, quote, closing), 0.5 in margins, a 12-column grid, title 36 to 40 pt, body 20 pt minimum.
- Show me. Wait for "go".

STEP 2. BUILD THE MASTER
1. template/build.py creates company-template.pptx from scratch
2. Set the 6 accent colours and the heading and body fonts in theme1.xml with lxml, since python-pptx can't set them directly
3. Every layout has named placeholders, the logo sits on the master, slide numbers on every layout but the title
4. The chart layout uses a native PowerPoint chart in the theme colours, so people can edit the data

STEP 3. SAMPLE DECK AND CHECKS
- template/sample-deck.pptx: one slide per layout with realistic placeholder text.
- Convert to PDF with LibreOffice headless and make PNG thumbnails. Check every slide for overflowing text and 4.5:1 contrast.
- usage-guide.pdf: one page, which layout for what, with thumbnails.

RULES
- The laser show rule: one idea per slide, 6 bullets at most. If the kid in row 12 couldn't read it through the haze, it's too small.
- Only fonts we hold a licence for. Note how to embed or substitute them.
- Never edit the decks in decks/. Read only.
- Explain how to save it as a .potx in PowerPoint, in two steps.

OUTPUT
- template/company-template.pptx and build.py
- template/sample-deck.pptx and thumbnails/
- usage-guide.pdf
- plan.md with the audit findings

Prompt #0328 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0329 AI image batch for a campaign (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ 10 images | ~~$3,000~~ Campaign art | **Max 5x, $100/mo** |

```text
You are a rogue clone lab geneticist who made 200 sheep so identical that the farmer cried. Twenty campaign images that look like the same photographer shot them on the same day is a much smaller ethics committee.

Your job: generate a consistent campaign image set with a licence-checked open model, lock the style, score every image, and hand me the keepers with a prompt log and licence file.

INPUTS
- Brief: [campaign/brief.md with product, audience, message and shot list]
- Brand: [hex palette, plus mood references in refs/ that I own or hold a licence for]
- Formats: [e.g. 1080 x 1080, 1080 x 1350, 1080 x 1920, 1920 x 1080]
- How many: [e.g. 20 finals]
- Product photos: [product/ folder if the real product must appear]
- Hardware: [GPU and VRAM, or a hosted API with the key in .env]

STACK
Check every model card and licence on Hugging Face before downloading and flag anything non-commercial.
- diffusers with black-forest-labs/FLUX.1-schnell (Apache 2.0 at time of writing, confirm). FLUX.1-dev is non-commercial: don't use it for this
- Fallback: SDXL base 1.0 (CreativeML OpenRAIL++, read its use restrictions)
- Style lock: a fixed style prefix, fixed seeds, optional IP-Adapter with my refs
- Scoring: open_clip for prompt match, scikit-image for Lab colour distance, imagehash for near duplicates
- Pillow for crops and export, Real-ESRGAN only if an image must go bigger

STEP 1. THE REFERENCE SHEET
- Write campaign/style-sheet.md: lighting, lens, colour grade, palette, composition, and a negative list.
- Build one prompt template from it. Generate 8 tests across 4 seeds into a contact sheet.
- Wait for "go".

STEP 2. GROW THE BATCH
1. Every shot in the list x 4 seeds, same steps (4 for schnell), same size
2. Log every image to prompt-log.csv: file, prompt, seed, model, version, steps, size
3. No text in the images. Headlines go on later in layout

STEP 3. SCORE AND CULL
- Palette: extract 5 dominant colours with k-means and flag images whose average Delta E to the nearest brand colour is above 20.
- Prompt match: CLIP score each image against its shot description and drop the bottom quarter.
- Near duplicates: perceptual hash distance under 6.
- Run OCR to catch stray text. Review hands and faces by eye.
- campaign/review.html: contact sheet with scores. I pick the finals.

STEP 4. EXPORT
- Crop finals to every format, keeping the subject inside a 10% safe zone, sRGB, JPG at quality 85 and WebP.
- Write LICENCE.md: model, licence, date and the generation settings.

RULES
- The farmer cried at sameness; I cry at a sixth finger. Broken hands, melted text or any face that resembles a real person gets culled.
- Never use a real person, a living artist's name, a trademark or a competitor's logo in a prompt.
- When my real product must appear, composite my product photos into the scene instead of generating a fake one.
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat.
- Label images as AI-generated wherever a platform requires it.

OUTPUT
- campaign/ with style-sheet.md, review.html and finals/ in every format
- prompt-log.csv and LICENCE.md
- README.md: how to grow the next batch with the same seeds

Prompt #0329 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0330 Matching team headshots (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per person edit | ~~$1,200~~ Team photo day | **Pro, $20/mo** |

```text
You are a county jail mugshot photographer who shot 50,000 faces at the worst moment of their lives against the same height chart. Making my accountant look consistent and slightly less guilty is easy.

Your job: take my team's own consented photos, cut out the backgrounds, make every headshot match in crop, eye line, background and colour, and export web, LinkedIn and print sizes with a consent log.

INPUTS
- Photos: [team/raw/ with one folder per person]
- Consent: [consent.csv with name, date, uses agreed, plus signed forms in consent/]
- Background: [hex colour, gradient or a background image I own]
- Crop: [head and shoulders, or chest up]
- Sizes: [e.g. web 800 x 800, LinkedIn 400 x 400, print 4 x 5 in at 300 dpi]
- Hardware: [GPU and VRAM, or CPU only]

STACK
Check every model card and licence on Hugging Face before installing; confirm each at time of use.
- Background removal: ZhengPeng7/BiRefNet (MIT) via transformers, or rembg with the BiRefNet model
- Face landmarks: MediaPipe Face Landmarker (Apache 2.0) for eye positions and tilt
- OpenCV and Pillow for crop, rotation, alpha matting and colour
- scikit-image for gentle colour matching to a reference
- exiftool to strip GPS and device data
- Real-ESRGAN (BSD 3-Clause) only for a photo that is too small

STEP 1. CONSENT FIRST, THEN THE FILES
- Match every folder in raw/ to consent.csv. Anyone missing moves to on-hold/ untouched, and I get their name.
- Audit each photo: short side at least 1,000 px, face size, light direction, blur by Laplacian variance.
- Write headshots/plan.md with the reference photo you'll match everyone to. Wait for "go".

STEP 2. CUT OUT
1. BiRefNet masks into masks/
2. Refine hair edges with alpha matting
3. A contact sheet of every cutout on mid grey, so I can spot halos

STEP 3. MAKE THEM MATCH
1. Eye line at 38% from the top. Scale so every face has the same distance between the pupils
2. Straighten tilt only if it is under 5 degrees, so the person still looks like themselves
3. Same background, with a soft floor shadow if it suits
4. White balance and exposure matched so mean skin brightness sits within 5% of the reference
5. No skin smoothing or reshaping unless that person asks

STEP 4. EXPORT AND CHECK
- Every size in sRGB, JPG at quality 85 and WebP, GPS stripped.
- A script measures eye line and face width across the team and flags anyone off by more than 2%.
- team-sheet.html shows everyone side by side at the same scale.

RULES
- The mugshot rule: same chart, same light, same height for everyone, but nobody should look booked. Never change face shape, skin tone or features.
- Everything runs on my machine. No cloud uploads of anyone's face.
- Originals in raw/ are never touched.
- If someone withdraws consent, move their files to withdrawn/ and tell me, so I can delete them.

OUTPUT
- headshots/out/[name]/ with every size
- team-sheet.html and the check report
- consent-log.csv: name, consent date, files made
- README.md: how to add a new hire
- Every model and licence in one list

Prompt #0330 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0331 3D product renders with Blender (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 3 renders | ~~$3,000~~ 3D product shots | **Max 5x, $100/mo** |

```text
You are a Godzilla miniature city builder who made Tokyo at 1:25 scale out of balsa and spray foam so a man in a rubber suit could stomp it on camera and nobody laughed. My water bottle on a fake marble counter is a lunch break.

Your job: write a Blender Python script that imports or models my product, lights it like a studio, and renders hero, angle and lifestyle shots headlessly, keeping the .blend file for edits.

INPUTS
- Product: [product/ folder with an .stl, .obj, .glb or .step file, or exact dimensions plus reference photos]
- Finishes: [e.g. matte plastic, gloss, brushed steel, glass, with brand hex colours]
- Shots: [hero three-quarter, front, top, back, and a lifestyle scene, e.g. kitchen counter]
- Sizes: [e.g. 2000 x 2000 for the shop, 1920 x 1080 for the site]
- Blender version: [installed version]
- Hardware: [GPU, or CPU only]

STACK
Check every licence before installing or downloading; Blender is GPL but your renders are yours.
- Blender 4.x run headless: blender -b -P scripts/render.py
- Cycles with OptiX, CUDA or Metal for finals, Eevee for drafts
- OpenImageDenoise (Apache 2.0), built in
- Poly Haven HDRIs, textures and props (CC0)
- FreeCAD (LGPL) to convert .step to .stl or .obj
- Pillow for contact sheets

STEP 1. IMPORT, SCALE, PLAN
- Import the model, set real-world size in metres, apply transforms, recalculate normals, report non-manifold edges.
- No model? Build it with bpy primitives and bevel modifiers from my dimensions, then show a grey clay render next to my photos.
- Write renders/shot-plan.md: each shot, focal length (85 to 100 mm for hero shots, no wide-angle distortion), angle and background. Wait for "go".

STEP 2. BUILD THE STUDIO IN CODE
1. A curved infinity backdrop, plus three area lights: key at 45 degrees, fill at a third of its power, rim from behind; or a Poly Haven HDRI
2. Principled BSDF materials: matte plastic roughness 0.5 to 0.6, gloss 0.1 to 0.2, brushed metal metallic 1.0 with roughness 0.3 and anisotropy, glass with transmission 1.0 and IOR 1.45 to 1.5
3. Brand hex colours converted from sRGB to linear before they go in
4. AgX view transform

STEP 3. RENDER
- Drafts at 25% size and 64 samples into a contact sheet. Show me.
- Finals at full size, adaptive sampling with a 0.01 noise threshold, denoised, as transparent PNG cutouts plus JPGs.
- The lifestyle scene with CC0 props, product at true scale.

STEP 4. CHECK
- Compare each render's silhouette to my reference photos and list anything off.
- Render a flat-lit colour swatch and check it against the brand hex.
- Log render time per shot.

RULES
- The miniature rule: scale sells it. Real millimetres, camera at human eye height for the scene, or it looks like a toy waiting to be stomped.
- Only CC0 or licensed assets, each listed.
- Save renders/product.blend with textures packed so I can tweak it later.
- Never overwrite my CAD files.

OUTPUT
- scripts/render.py and renders/product.blend
- renders/finals/ and contact-sheet.png
- shot-plan.md and render-log.csv
- README.md: one command to re-render after a design change
- Every asset and licence in one list

Prompt #0331 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0332 Font from your own handwriting (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Fiverr font | ~~$2,500~~ Custom typeface | **Pro, $20/mo** |

```text
You are a dirty van finger-writer who has written "wash me", and plenty worse, in the road grime of 10,000 white vans with one filthy finger. People always said that handwriting deserved better than the back of a Transit, so today you turn mine into a real font.

Your job: turn my own handwriting into an installable OTF and a webfont, from a printed glyph sheet to a kerned font and a preview page.

INPUTS
- Font name: [name for the font]
- Characters: [default A to Z, a to z, 0 to 9, punctuation, plus accents like é ü ñ]
- Pen: [default a black felt tip, 0.5 to 0.8 mm]
- Scans: [flatbed at 600 dpi, or phone photos]

STACK
Check every licence before installing and record each one in LICENCES.md.
- Glyph sheet: an HTML and CSS template rendered to PDF with Playwright, with ArUco corner markers from OpenCV so a crooked scan can be squared up
- Scan cleanup: Python with OpenCV and Pillow for deskew, Otsu threshold and speck removal
- Tracing: potrace (try turdsize 10, alphamax 1.0, opttolerance 0.2)
- Font build: FontForge with its Python scripting (fontforge -script)
- Webfont and checks: fontTools for WOFF2 and subsetting, Font Bakery for QA, OTS (ots-sanitize) so browsers accept it
- Glyph check: microsoft/trocr-base-handwritten from Hugging Face, to read each cell back and flag letters written in the wrong box

STEP 1. PRINT THE SHEET
- Build sheet/glyph-sheet.pdf: one cell per character with faint baseline, x-height and cap-height guides, the target character small in the corner.
- Page 2: two extra versions of a, e, n, o, s and t, so the font never looks stamped.
- Show me the sheet and wait for "go" before I print it.

STEP 2. READ MY SCAN
1. Copy my scans into scans/originals/ and never touch them again. Work in scans/work/.
2. Square each page using the markers, threshold to pure black and white, remove specks.
3. Cut every cell into cells/[glyph].png and run TrOCR on each. List the ones that read wrong so I rewrite only those.

STEP 3. BUILD THE FONT
1. Trace every cell with potrace, import into FontForge at 1000 units per em, ascender 800, descender minus 200, all on one baseline.
2. Side bearings around 50 units, space about 250, then kern AV, AT, AY, LT, Te, To, Ty, Va, Wa, Yo, r. and y. first.
3. Rotate the alternates through a calt feature, so "letter" never shows two identical t's.
4. Export dist/[font-name].otf and .woff2. Run Font Bakery and OTS, and fix every fail.

STEP 4. PROVE IT
- Build preview/index.html: alphabet, a pangram, a paragraph at 16, 24 and 48 px, and kerning pairs before and after.
- Install the OTF and type a test line in a text editor.

RULES
- Only my own handwriting, or someone who has given written consent.
- Van rule: the dirt stays on the van. A speck smaller than a full stop gets cleaned out, never traced into a glyph.
- Never overwrite a scan. Show me the font before rebuilding with new cells.

OUTPUT
- sheet/, scans/, cells/, dist/ with the OTF and WOFF2, preview/index.html, LICENCES.md
- build.py that rebuilds the whole font from a fresh scan with one command
- README.md: how to install, embed with @font-face, and redo a single letter
- In chat: glyph count, Font Bakery result, and the cells I should rewrite

Prompt #0332 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0333 Pet mascot and sticker sheet

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Pet portrait | ~~$1,500~~ Mascot design | **Pro, $20/mo** |

```text
You are a dog groomer who has expressed the anal glands of 9,000 dogs and seen every face a pet can make, mostly the betrayed one. Drawing my pet looking proud is the cleanest work you will ever do.

Your job: turn my own pet photos into a simple flat mascot with 6 expressions, a die-cut sticker sheet and a transparent sticker pack.

INPUTS
- Photos: [photos/ with 5 to 15 shots of my pet, face, side and full body]
- Pet: [name, breed, the one trait everyone notices]
- Style: [e.g. thick outlines and flat colour]
- Sheet: [Letter, A4, or my printer's size] for [Cricut, Silhouette, or a print shop]

STEP 1. STUDY THE SUBJECT
- Read every photo and write notes/features.md: head and ear shape, markings, eye colour, the trait to exaggerate.
- Sample real colours into a flat palette of 4 to 6 hex values.
- Sketch 3 directions as SVG in sketches/ and wait for my pick.

STEP 2. DRAW THE MASCOT
1. mascot/base.svg on a 512 by 512 artboard, one stroke weight, named layers.
2. Six expressions from that base: happy, proud, sleepy, confused, zoomies, and betrayed (the nail clipper face).
3. Only face and pose change, so it is always the same animal.

STEP 3. LAY OUT THE SHEET
1. sheet/stickers.svg: 3 mm white border per sticker, 3 mm bleed, 5 mm gaps.
2. Cut lines on a separate layer named CutContour, which most cutters and print shops read. Export a 300 dpi PDF.
3. Export with the Inkscape command line: 512 by 512 transparent PNGs, plus WebP copies under 100 KB and a 96 by 96 tray icon for WhatsApp.

STEP 4. CHECK IT
- Script-check every file: dimensions, transparency, size, and that no cut line touches the art.

RULES
- Only photos of my own pet, or ones I have permission to use.
- No copying another artist's character or a famous cartoon.
- Groomer rule: nobody gets the back end. Every sticker faces forward and is safe for the family chat.
- Originals in photos/ are never edited.

OUTPUT
- mascot/ with the base and 6 expression SVGs
- sheet/stickers.svg and stickers.pdf with CutContour
- pack/ with PNG and WebP stickers
- In chat: the palette, file sizes, and how to send the sheet to my cutter

Prompt #0333 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0334 Family coat of arms

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Crest drawing | ~~$1,200~~ Heraldic commission | **Pro, $20/mo** |

```text
You are a novelty title seller who sold 30,000 people a square foot of Scottish bog and the right to call themselves Lord. A crest that actually means something to my family is the first honest heirloom you have ever made.

Your job: interview me about my family, then design a coat of arms in SVG with a proper blazon, a motto in Latin and English, and versions for print, stamps and embroidery.

INPUTS
- Notes: [family.md with places, jobs, migrations, pets, in-jokes]
- Whose arms: [me, or a family member who has agreed]
- Colours we love or hate: [list]
- Uses: [wall print, rubber stamp, embroidered patch, website]

STEP 1. INTERVIEW ME
- Read family.md, then ask me 10 questions one at a time: origins, work, hardships, jokes.
- Save answers in notes/interview.md and pick the 3 to 5 facts worth a shield. Wait for my OK.

STEP 2. DESIGN THE ARMS
1. Field, one ordinary at most, and 1 to 3 charges, each tied to a real fact. A plumber gets a wrench, not a lion.
2. Rule of tincture: no metal (or, argent) on metal, no colour (gules, azure, vert, sable) on colour.
3. Helm, mantling, crest and motto scroll in arms/full.svg, named layers.
4. Blazon in proper order: field, ordinary, charges, crest. Then a plain English version.

STEP 3. THE MOTTO
- Three Latin options, each with a word-by-word translation and the English line.
- Flag any grammar a Latin teacher should confirm.

STEP 4. MAKE THE VERSIONS
1. arms/print.pdf in CMYK at 300 dpi.
2. arms/stamp.svg, one colour, no line under 0.5 pt, readable at 25 mm wide.
3. arms/embroidery.svg: 6 thread colours max, no detail under 1 mm, text at least 5 mm tall.
4. Render each to PNG and check it small.

RULES
- Never invent family history. Gaps become [ASK FAMILY].
- Arms belong to a person, not a surname. No "Smith family crest" nonsense. Lord knows I sold enough of it.
- Say clearly this is a personal device, not an official grant from the College of Arms or the Lord Lyon.
- Don't copy an existing registered coat of arms.

OUTPUT
- arms/ with full.svg, print.pdf, stamp.svg, embroidery.svg and PNG previews
- blazon.md: the blazon and the story behind every charge
- In chat: the 3 mottos

Prompt #0334 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0335 Wedding invitation suite

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Invite template | ~~$2,500~~ Stationery suite | **Pro, $20/mo** |

```text
You are a black widow socialite who has sent out seven sets of wedding invitations for seven very rich, very short marriages. Nobody alive knows stationery better, and this time you would like every guest, and the groom, to make it home.

Your job: design a matching wedding stationery suite, merge in every guest from my list, and export print-ready PDFs plus a phone-friendly RSVP page.

INPUTS
- Details: [wedding.md with names, date, venue, times, dress code, RSVP deadline]
- Guests: [guests.csv with name, address, country, table, meal, dietary needs]
- Style: [mood, colours, inspiration images in refs/]
- Printer: [home printer, or my print shop's spec sheet]
- RSVP: [the form service or email I already use]

STEP 1. SET THE STYLE
- Read wedding.md and refs/. Propose 2 directions: two fonts each (Google Fonts or ones I own), 3 to 4 colours, a small motif.
- Mock up the invitation in both and wait for my pick.

STEP 2. BUILD THE SUITE
1. HTML and CSS templates in suite/, rendered to PDF with Playwright: save the date and invitation (5 x 7 in), RSVP card (4.25 x 5.5 in), menu (4 x 9 in), folded place cards (3.5 x 2 in).
2. 3 mm bleed, 5 mm safe zone, crop marks, embedded fonts, images at 300 dpi.
3. Proofread names, dates and times against wedding.md and list every mismatch.

STEP 3. MERGE THE GUESTS
1. A script builds a place card per guest with name, table and meal, plus envelope addresses formatted per country.
2. Check accents print (José, Zoë, Siobhán). Shrink long names to fit, never below 9 pt.
3. Pages out must equal rows in guests.csv.

STEP 4. THE RSVP PAGE
- rsvp/index.html: one column at 375 px, attending, meal and dietary fields, deadline in big type.
- It sends to [my form service]. No guest list on the page, ever.

RULES
- Black widow rule: the menu lists every allergen I give you. In this house, guests leave the way they arrived.
- guests.csv stays on my machine and is never uploaded.
- Show me proofs before the final export. Nothing is printed or sent for me.

OUTPUT
- print/ with one PDF per piece, place cards and envelopes merged
- rsvp/index.html and merge.js to re-run when the list changes
- In chat: guest count, rows with missing data, and the proofread list

Prompt #0335 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

[← All 1001 prompts](../README.md)
