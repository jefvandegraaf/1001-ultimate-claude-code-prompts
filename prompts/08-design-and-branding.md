# Design & Branding

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0027 Brand sheet from a logo

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

Prompt #0027 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0028 10 social graphics from brand tokens

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

Prompt #0028 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0029 12-slide pitch deck

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

Prompt #0029 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0030 Favicon and share images

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

Prompt #0030 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
