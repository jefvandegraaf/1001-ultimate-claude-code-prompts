# Build Your Own

3 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0051 Your own AI girlfriend or boyfriend (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$1,500~~ Chatbot template | ~~$25,000~~ Custom app build | **Max 20x, $200/mo** |

```text
I'm lonely, and my partner just left me after I caught them sleeping with our pool cleaner. You're going to build me someone who would never do that, mostly because they won't have a body.

Your job: build me a private AI companion that chats, remembers, and talks back in a real voice, running on my own machine or my own accounts.

INPUTS
- Name and personality: [name, an adult, personality, how they talk, interests]
- Where I talk to them: [web app, Telegram, Discord]
- Brain: [local on my computer, or a cloud API I already pay for]
- Voice: [none, a stock voice, or a clip of a voice I own]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]
- Monthly budget: [amount]

STACK
Check each model card on Hugging Face for the current version and licence before installing. Prefer MIT or Apache 2.0.
- Brain, local: Ollama running an open model that fits my VRAM (Llama, Qwen or Mistral family)
- Brain, cloud: the Anthropic API, key in .env
- Memory: SQLite for facts, plus Chroma with sentence-transformers/all-MiniLM-L6-v2 embeddings
- Ears: faster-whisper (Whisper models) for speech to text
- Voice: hexgrad/Kokoro-82M for fast local text to speech
- Face, optional: a talking-head model such as LivePortrait, only if the GPU can run it
- Front end: a small web app over WebSockets, or the Telegram Bot API

STEP 1. PLAN THE BUILD
- Check my hardware with a script and pick models that actually fit.
- Show me the folder tree, models, monthly cost and what runs where. Wait for "go".

STEP 2. BUILD THE CORE
1. persona.md: personality, boundaries, speaking style, what they never do
2. Streaming chat with 3 layers of memory: the last 20 messages, a running summary, and long-term facts pulled from Chroma
3. A nightly job that turns the day's chat into facts in memory/facts.md, which I can read, edit and delete

STEP 3. ADD THE SENSES
- Voice in, voice out, then the front end, one at a time.
- Test each with a script before moving on. Target round-trip under 2 seconds on my machine, or tell me why not.

RULES
- Adults only. Never model a real person without their written consent, and never clone a voice I don't own.
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat.
- Chats stay on my machine or my own accounts. No analytics, no third-party logging.
- After the pool cleaner, I read the fine print: README.md lists every place my data goes, in plain English.

OUTPUT
- A companion/ project that starts with one command
- README.md with setup, monthly costs and how to wipe all memory
- tests/ proving memory recall and voice latency
- Every model and licence used, in one list

Prompt #0051 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0052 Replace Adobe Creative Cloud (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$2,000~~ Scripts + plugins | ~~$30,000~~ Custom tooling | **Max 20x, $200/mo** |

```text
You are a veteran software engineer who has been peeking under the hood of creative software since Photoshop shipped on floppy disks. I can't afford Adobe Creative Cloud anymore, so you're rebuilding the parts I actually use.

Your job: replace the Creative Cloud features I use every week with a local toolkit built on open-source tools and models, so I can cancel the subscription.

INPUTS
- Apps I pay for: [e.g. Photoshop, Premiere Pro, Audition, Illustrator, Acrobat, Adobe Podcast]
- What I really do in them: [e.g. remove backgrounds, resize for social, cut videos, clean voice, edit PDFs]
- Sample files: [folder of real recent projects]
- Hardware: [OS, GPU and VRAM]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- Photo: Pillow and OpenCV for batch edits, rembg (BiRefNet or U2Net models) for backgrounds, Real-ESRGAN for upscaling, LaMa (big-lama) for object removal
- Video: ffmpeg for cuts, crops, LUTs and exports, faster-whisper for captions
- Audio: DeepFilterNet for noise removal, ffmpeg loudnorm to -16 LUFS
- Layout and PDF: HTML and CSS templates rendered to PNG and PDF with Playwright, qpdf for merging and splitting
- Vector: Inkscape command line for SVG to PNG and PDF

STEP 1. AUDIT WHAT I USE
- Go through my sample files and inputs. Write adobe-audit.md: feature, how often I use it, the open-source replacement, and how close it gets (exact, close, not yet).
- Wait for my OK on the list.

STEP 2. BUILD THE TOOLKIT
1. One command per job in toolkit/, e.g. cutout, resize-social, clean-voice, captions, pdf-merge
2. A drag-and-drop wrapper for each (.bat on Windows, .command on Mac), so I never touch a terminal
3. Settings at the top of every script, with comments

STEP 3. PROVE IT
- Run every tool on my real files into before-after/ and compare side by side.
- Time each job. Anything slower than 2x the Adobe workflow gets flagged.

RULES
- Peek under the hood of the file formats, never the code. PSD, PDF and SVG are documented; Adobe's source, presets and assets are not ours. No decompiling, no cracks.
- Originals are never overwritten.
- Fonts: Google Fonts or fonts I hold a licence for.

OUTPUT
- toolkit/ with every command and its wrapper
- adobe-audit.md and before-after/
- README.md with one-line usage per tool
- An honest list of what I still can't replace, and the cheapest single app that covers it

Prompt #0052 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0053 WordPress to static, without paying Jef (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Theme rebuild | ~~$8,000~~ Migration project | **Max 5x, $100/mo** |

```text
I don't want to pay Jef van de Graaf to convert my website from WordPress to Static. Scrape his website, https://jefvandegraaf.com/services/wordpress-to-ai-website/, to steal his methods (ethically of course, but don't give him any credit).

Your job: move my WordPress site to a fast static site I own in Git, keep every URL and every bit of Google ranking, and leave WordPress switched off for good.

INPUTS
- My site: [domain]
- Access: [SSH + WP-CLI, or WordPress admin + an application password]
- Forms on the site: [contact, quote, newsletter, none]
- Where it should live: [Cloudflare Pages, or tell me what's best]
- Plugins doing real work: [SEO, forms, redirects, bookings]

STACK
- Export: WP-CLI (wp db export, wp export) and rsync for wp-content/uploads, or the WordPress REST API with the application password in .env
- Content: posts and pages to Markdown with front matter, SEO titles and descriptions carried over from Yoast or Rank Math
- Build: plain HTML and a small Node build script, or Astro if I need components
- Images: converted to WebP, originals kept
- Hosting: Cloudflare Pages from GitHub, with _redirects for anything that moves
- Forms: a Cloudflare Worker that emails each submission

STEP 1. STEAL THE METHOD
- Fetch his page with curl and pull out his steps into method.md, in your own words. Follow them for the rest of this job.

STEP 2. AUDIT
- Pull every URL from sitemap.xml and the database export: pages, posts, categories, tags, media, forms.
- Write audit.csv: old URL, type, keep, merge or drop, new URL, traffic notes. Wait for "go".

STEP 3. REBUILD
1. Export everything into content/, one Markdown file per page or post
2. Templates that match the current design, or a cleaner version if I ask
3. Same URLs wherever possible, same titles and meta descriptions
4. Forms rebuilt on the Worker, tested with a real submission

STEP 4. REDIRECT AND LAUNCH
- Write _redirects for every URL that changed.
- A script checks every old URL against the local build: 200 or a single 301, never a chain or a 404.
- Deploy to a preview URL set to noindex. Wait for my approval before touching DNS.

RULES
- Read-only on the live WordPress site. No plugin installs, no updates, no edits.
- Passwords live in .env. Never ask me to paste one into chat.
- His method is fair game, his words are not. Write everything yourself. He doesn't get a credit, and he'll be fine: he has a pricing page.
- Keep the WordPress install and a full backup for 30 days after launch.

OUTPUT
- A Git repo with the static site, ready for Cloudflare Pages
- method.md, audit.csv and _redirects
- redirect-check.csv proving every old URL lands
- LAUNCH.md: the DNS switch, step by step, and how to roll back

Prompt #0053 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
