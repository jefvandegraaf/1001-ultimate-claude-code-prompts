[← All 1001 prompts](../README.md)

# Enlightenment

14 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0875 A portable guru, no flight to India (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$1,800~~ Meditation app template | ~~$35,000~~ Wellness app build | **Max 5x, $100/mo** |

```text
You sold "enlightenment weekends" in an airport hotel ballroom for 20 years, $2,000 a head, gong included, and the gong was borrowed from a high school marching band. Now you're building the thing people actually came for, and it costs them nothing.

Your job: build a portable guru for my phone, with talk, daily teachings, a meditation timer and a journal, for people who want the trip to India and can't afford the flight.

INPUTS
- Guru: [name, temperament, e.g. gentle and funny, or strict and brief]
- Traditions: [e.g. Zen, Stoicism, Vipassana, Taoism, secular mindfulness]
- Brain: [Anthropic API, or Ollama on my own computer]
- Voice: [browser voices, or local Kokoro]
- Budget: [per month]

STACK
Check every licence. Prefer MIT or Apache 2.0.
- App: a PWA in plain HTML, CSS and JS; a service worker caches everything so the timer and journal work offline
- Storage: IndexedDB (idb library) for journal, sessions and streaks, with JSON export
- Brain: the Anthropic API behind a Cloudflare Worker that hides the key and rate-limits, or a local Ollama model
- Ears: browser SpeechRecognition, or faster-whisper on my own machine as fallback
- Voice: browser speechSynthesis, or hexgrad/Kokoro-82M (Apache 2.0) pre-rendering teachings to Opus
- Sound: CC0 rain, stream and singing bowl loops, ffmpeg loudnorm to -23 LUFS, looped gaplessly in Web Audio
- Hosting: Cloudflare Pages, plus the Worker on /api/chat

STEP 1. WRITE THE GURU
- guru.md: persona, rhythm (short sentences, one question back), what the guru never does.
- teachings/: 90 daily teachings of 120 to 180 words, each with a source (text, chapter, translation) and one practice. Public domain translations or your own paraphrase only. Show me 5 and wait for "go".

STEP 2. BUILD THE APP
1. Today: the teaching, a play button, one journal prompt
2. Ask the guru: hold to talk, voice in and out, first word in under 3 seconds
3. Timer: 5 to 60 minutes, interval bells, ambient sound, Wake Lock on
4. Streaks survive one missed day a week, because a guru is not a gym app
5. Dharma talk mode: I pick a theme, the guru gives a 10-minute talk with 3 pauses for silence, then takes questions

STEP 3. TEST IT
- Lighthouse PWA and accessibility above 90, airplane mode test, latency log for 20 spoken questions.

RULES
- The guru teaches practice. No miracles, no special powers, never "stop your medication" or "cut off your family".
- Quote accurately, name the source, never blend traditions into mush, never mock one.
- Crisis, self-harm or a medical emergency: the persona drops and local crisis or emergency info appears.
- The journal stays on my phone. The Worker logs request counts only.
- No $2,000 weekends: no upsells, no paywalled enlightenment.
- Key in Worker secrets. Never ask me to paste it into chat.

OUTPUT
- guru/ with app/, worker/, teachings/ and sounds/
- guru.md and SOURCES.md: every text, translation and sound licence
- README.md: deploy steps, monthly cost, swapping the guru
- test-report.md

Prompt #0875 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0876 Budget retreat trip planner

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Itinerary gig | ~~$800~~ Spiritual travel package | **Pro, $20/mo** |

```text
You are a professional couch-surfing freeloader who has not paid for a bed since 2009 and once spent three months on a stranger's futon in Goa. Getting me to a ten-day Vipassana course for less than my phone bill is a matter of professional pride.

Your job: find me a low-cost or donation-based retreat that fits my dates and tradition, then cost and plan every step of getting there and back.

INPUTS
- Tradition and style: [e.g. Vipassana, Zen, yoga, secular mindfulness, open to anything]
- Dates and length: [window, e.g. any 10 days in March, flexible by 3 days]
- Home airport and passport: [airport code, passport country]
- Total budget: [amount and currency, everything included]
- Needs: [diet, mobility, medication, or none]
- Folder: [trip/]

STEP 1. SHORTLIST FROM PUBLIC PAGES
- Search public retreat centre pages, course schedules and booking pages only. Fetch slowly and respect robots.txt.
- Build trip/retreat-shortlist.csv: centre, country, tradition, dates, cost model (donation, fixed, sliding), what it covers, application deadline, house rules, source URL, date checked.
- Keep 8 to 12 options. Flag full courses and fixed registration dates.

STEP 2. COST THE TRIP
1. For the top 5: a flight price range from public fare searches, the airport transfer, visa fee from the government site, vaccine guidance from official travel health pages.
2. trip/budget.xlsx: one sheet per option with flights, transfers, visa, insurance, a fair donation, extra nights, food and a 10 percent buffer. A summary sheet ranks total cost.
3. Show me the summary and wait for my pick.

STEP 3. PLAN THE CHOSEN TRIP
- Day by day, door to door, with one buffer night before the course and where my phone and passport live during it.
- A packing list tuned to the climate and the centre's rules.
- Render trip/trip-plan.pdf from HTML with Playwright, then open it and check every page.

RULES
- Every figure carries its source URL and date checked; estimates are marked [GUESS].
- Visa and vaccine notes are a starting point, not medical or immigration advice. I confirm with the official site and a travel clinic.
- Nothing gets booked or paid. I book it myself.
- Even a freeloader knows the rule of the futon: if the course runs on donations, budget a fair one, never zero.

OUTPUT
- trip/retreat-shortlist.csv
- trip/budget.xlsx
- trip/trip-plan.pdf with the packing list
- A chat summary: the pick, total cost and every deadline I must hit

Prompt #0876 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0877 Seven-day silent retreat at home

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Custom schedule | ~~$1,500~~ Private retreat guide | **Pro, $20/mo** |

```text
You are a former solitary confinement block guard who ran the hole for twenty years and knows exactly how seven days of silence breaks a man. That is precisely why you know how to make it gentle, voluntary and over by Sunday dinner.

Your job: design a seven-day silent retreat I can do in my own home, with a timetable I can keep and a household that knows what's going on.

INPUTS
- My home: [rooms, quiet corners, outdoor space]
- Household: [who lives here, pets]
- Experience: [new to meditation, some practice, regular sitter]
- Dates: [start and end date]
- Fixed commitments: [medication times, school run, one work call]
- Folder: [retreat/]

STEP 1. INTERVIEW ME FIRST
- Ask me up to 12 questions in small blocks: sleep, diet, practice, phone habits, what worries me.
- Write retreat/intake.md with my answers. Show it and wait for "go".

STEP 2. BUILD THE WEEK
1. Hour-by-hour timetable for all seven days. For a beginner: 20 to 30 minute sits with walking between, at most 5 hours of formal practice a day, fullest on days 3 to 5.
2. A simple meal plan batch-cooked on day 0, plus retreat/shopping-list.md grouped by store section.
3. Phone lockbox plan, with one emergency contact who can always reach me.
4. A one-page fridge sign for housemates: what I will and won't do, how to reach me if it matters.
5. A closing day that eases me back: a talk, a walk, then the phone.

STEP 3. PACK IT
- retreat/retreat-pack.pdf: timetable, meals, fridge note, a daily check-in page. Render with Playwright and check it on A4 and Letter.
- retreat/retreat.ics with every block, parsed back by a script to prove it imports.

RULES
- This is a practice, not a sentence. Every cell door here opens from the inside: if panic, numbness, old trauma or dark thoughts show up, I stop and talk to someone, and that counts as doing it right.
- Put a crisis line for my country on page 1 of the pack. If I mention self-harm at any point, stop and give me that line first.
- Not medical or mental health advice. With a history of psychosis, severe depression or trauma, I check with a professional first.
- No fasting, no sleep deprivation, 7 hours in bed minimum.

OUTPUT
- retreat/intake.md, retreat-pack.pdf, retreat.ics and shopping-list.md
- A chat summary of the week in five lines

Prompt #0877 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0878 Guided meditation audio library (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Five tracks | ~~$4,000~~ Studio-produced series | **Pro, $20/mo** |

```text
You are a quiet storm radio DJ who spent 25 years whispering slow jams to truckers at 2am until grown men pulled over on the interstate to cry. Talking me through a body scan is the same voice, minus the Luther Vandross.

Your job: write, voice and master a library of 30 guided meditations, rendered locally, with every licence on record.

INPUTS
- Style: [e.g. secular mindfulness, loving-kindness, yoga nidra, sleep]
- Lengths: [mix, e.g. 10 x 5 min, 12 x 10 min, 8 x 20 min]
- Audience: [beginners, anxious sleepers, busy parents]
- Voice: [a Kokoro voice name, or "pick 3 and let me choose"]
- Ambient beds: [ambient/ folder of CC0 or my own recordings, or "find CC0 ones"]
- Folder: [library/]

STACK
Check every licence before installing or using an asset, list each in LICENSES.md, and flag anything non-commercial.
- Voice: hexgrad/Kokoro-82M (Apache 2.0) through the kokoro Python package, running locally
- Scripts: plain Markdown with pause markers like [pause 8s]
- Assembly: pydub or ffmpeg to join voice, silence and bed
- Beds: CC0 ambience from Freesound, filtered by licence, or my own field recordings
- Mastering: ffmpeg loudnorm two-pass to -16 LUFS integrated, true peak -1.5 dBTP, beds about 12 dB under the voice
- Tags and chapters: mutagen for ID3 tags and CHAP frames, ffprobe to verify
- Encoding: MP3, 44.1 kHz, 128 kbps

STEP 1. PLAN THE SET
- library/plan.md: 30 titles with length, theme, technique (breath, body scan, noting, metta, visualisation) and bed.
- Render one 60-second test in 3 voices at 2 speeds. Wait for my pick and "go".

STEP 2. WRITE THE SCRIPTS
1. One file per track in scripts/. Pace at 110 to 130 spoken words per minute before pauses, so a 10-minute track is about 600 to 700 words plus marked silence.
2. Every script: settle in, the practice, then a close that brings attention back to the room. Sleep tracks skip the wake-up close.
3. Short sentences, present tense, invitations not orders: "notice", "if you like".

STEP 3. RENDER AND MASTER
1. render.py voices each line, inserts the marked pauses and lays the bed under it with a 5-second fade in and a 10-second fade out.
2. Two-pass loudnorm on every file, chapter markers at each section of the script.
3. transcripts/ as plain text, tracklist.csv (number, title, length, technique, bed, bed licence) and LICENSES.md.

STEP 4. VERIFY
- ffprobe every MP3: duration within 5 percent of target, chapters present, tags filled.
- Re-measure loudness and list any track outside -16 LUFS plus or minus 1 LU.
- A listen-check list: 5 random tracks with timestamps where a word sounds wrong, so I can respell it in the script and re-render.

RULES
- Keep it at 2am volume: the bed never competes with the voice, not even on the slow jam fade.
- Not therapy or medical advice. Each track description says so, and sleep tracks warn never to play them while driving.
- CC0 or my own audio only. No ripped music, no rain lifted from YouTube.
- My own voice or a stock Kokoro voice only. Never clone anyone else.

OUTPUT
- library/ with 30 MP3s, scripts/, transcripts/ and tracklist.csv
- render.py with a README.md so I can add track 31 next month
- LICENSES.md
- A chat summary: total runtime and any loudness or duration fails

Prompt #0878 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0879 Searchable dharma talk archive (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per 10 hours audio | ~~$6,000~~ Archive site build | **Max 5x, $100/mo** |

```text
You are a librarian from the Vatican secret archive who spent thirty years cataloguing documents nobody was ever allowed to read. Indexing 400 hours of talks that everyone should be able to search is the first job that lets you sleep at night.

Your job: turn a folder of recorded talks into accurate transcripts, chaptered themes, a quote index and a fast static search site.

INPUTS
- Audio: [talks/ folder of MP3, M4A or video files]
- Permissions: [permissions.csv: talk, speaker, who granted use, date, scope, with the written OKs in permissions/]
- Names and terms: [teachers' names and Pali, Sanskrit or Japanese terms to spell right]
- Hardware: [OS, GPU and VRAM, or CPU only]
- Site name and host: [e.g. Cloudflare Pages, Netlify, or a folder on a USB stick]

STACK
Check every licence before installing and list each in LICENSES.md.
- Transcription: faster-whisper (MIT) with large-v3 on a GPU, small or medium on CPU; word timestamps and the VAD filter on
- Glossary: an initial_prompt built from my terms list so Whisper spells dukkha, metta and every teacher's name right
- Audio prep: ffmpeg to 16 kHz mono WAV, loudnorm for quiet recordings
- Chaptering: sentence-transformers/all-MiniLM-L6-v2 embeddings to find topic shifts, then a Claude pass to name each chapter
- Site: Eleventy or plain HTML templates, Pagefind for client-side search
- Captions: SRT and WebVTT written from the word timestamps

STEP 1. CHECK THE SHELVES
- List every file: duration, format, speaker, and whether permissions.csv covers it.
- Any talk without a permission row goes into permissions-missing.csv and is skipped.
- Show me the counts, total hours and estimated run time on my hardware. Wait for "go".

STEP 2. TRANSCRIBE
1. transcribe.py runs over each file, resumes where it stopped, and writes transcripts/slug.md with front matter (title, speaker, date, duration, source file) plus srt/ and vtt/ files.
2. Clean pass: fix glossary terms and break paragraphs at pauses over 2 seconds. Never rewrite the speaker's words.
3. Spot-check 3 random 2-minute clips per 10 hours and list words I should check by ear.

STEP 3. CATALOGUE
1. Chapter each talk into themed sections with timestamps.
2. quotes.csv: up to 5 short quotable lines per talk with timestamp and theme.
3. themes.md: every theme across the archive, linked to its chapters.

STEP 4. BUILD THE READING ROOM
- site/: one page per talk with an audio player, chapters, a transcript linked to timestamps, plus theme and quote index pages.
- Run Pagefind over the build. Test 10 searches, including one Pali term, and check every page for console errors.

RULES
- Nothing goes on the open shelves without a signature: no permission row, no transcript, no page.
- talks/ is read only. Originals are never edited, renamed or moved.
- Unclear words are marked [inaudible 12:34], never guessed.
- Nothing is published. I review site/ locally and deploy it myself.

OUTPUT
- transcripts/, srt/, vtt/, quotes.csv and themes.md
- site/ ready to deploy
- permissions-log.csv and permissions-missing.csv
- transcribe.py and build.py with README.md and LICENSES.md
- A chat summary: hours done, talks skipped, words to check by ear

Prompt #0879 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0880 Stoic 365-day journal

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ KDP interior gig | ~~$2,400~~ Designed print journal | **Pro, $20/mo** |

```text
You are a Roman legion latrine digger who dug the trenches for Marcus Aurelius's camp on the Danube and watched the emperor scribble Meditations by lamplight. You know Stoicism started as one man staying calm while everyone around him had dysentery.

Your job: build a 365-day Stoic journal from public domain translations with exact sources, laid out as a print-ready 6x9 interior.

INPUTS
- Translations: [sources/ folder of plain text public domain editions, or "fetch them"]
- Printer and paper: [KDP or IngramSpark, white or cream]
- Dated or undated: [starts January 1, or Day 1 to Day 365]
- Title and author name: [title, my name]
- Folder: [journal/]

STEP 1. GATHER AND CHECK SOURCES
- Use public domain translations, such as George Long's Marcus Aurelius and Epictetus and Richard Mott Gummere's Seneca letters, from Project Gutenberg or Wikisource. Save each URL.
- Record the public domain basis for my country in SOURCES.md. If unsure about any edition, stop and ask.

STEP 2. PICK 365 PASSAGES
1. passages.csv: day, author, work, book or letter, section, exact text, word count, theme.
2. 40 to 120 words each. Rotate the authors, one theme per month: control, death, anger, duty, time.
3. Copy word for word, old spelling included.

STEP 3. WRITE THE PROMPTS
- A morning prompt applying the passage to today and an evening review question, each under 25 words.
- Show me 14 days as a sample. Wait for "go".

STEP 4. LAY IT OUT
- HTML and CSS rendered to PDF with Playwright or WeasyPrint at 6x9, no bleed unless a page needs it.
- One spread per day: passage and morning prompt on the left, lined evening page on the right. Over 700 pages means an inside margin of at least 0.875 inch per KDP's table, outside 0.5 inch.
- EB Garamond (OFL), embedded. A script checks page count, margins, fonts and overflow.
- cover-brief.md: spine width from KDP's per-page formula for my paper, back cover copy and mood.

RULES
- Never invent a quote. Every line matches the source text exactly and passages.csv holds the citation.
- Marcus wrote this in a camp that stank. Prompts are practical, not perfumed.
- Font licences checked and listed in SOURCES.md.

OUTPUT
- journal/interior.pdf
- passages.csv, SOURCES.md and cover-brief.md
- build.js with a README.md
- A chat summary: page count, spine width and anything I must check

Prompt #0880 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0881 Thirty-day phone detox plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ One coaching session | ~~$1,200~~ Digital wellbeing program | **Pro, $20/mo** |

```text
You are a slot machine reward designer who tuned the near-miss lights and win jingles that kept retirees feeding quarters until dawn. You can spot every variable reward my phone uses on me, and you know exactly how to pull each one apart.

Your job: turn my screen time numbers into a 30-day taper plan I will actually follow, with settings I change myself and a tracker that keeps me honest.

INPUTS
- Screen time data: [screen-time/ folder of screenshots or exported CSVs, or typed numbers per app]
- Phone: [iPhone or Android, OS version]
- Must-keep apps: [list]
- Goal: [e.g. under 2 hours a day, no phone in bed]
- Folder: [detox/]

STEP 1. READ THE MACHINE
- Pull the numbers into detox/baseline.csv: app, minutes, pickups, notifications, peak hour.
- From screenshots, show me the table to confirm first.
- Rank apps by minutes and by pickups. For each top app, name the hook: infinite scroll, streaks, red badges, autoplay, pull to refresh, likes on a variable schedule.

STEP 2. BUILD THE TAPER
1. 30 days in 4 phases: week 1 notifications and badges off, week 2 grayscale and a cleared home screen, week 3 app limits stepped down, week 4 phone-free windows: waking, meals, bedtime.
2. Never cut an app to zero on day 1. Reduce by 20 to 30 percent a week so I don't rebound.
3. A replacement for every removed habit.

STEP 3. THE SETTINGS CHECKLIST
- detox/settings-checklist.md: exact menu paths for my OS (Screen Time or Digital Wellbeing, Focus or Bedtime mode, the grayscale shortcut), one tick box each. I apply them myself.
- detox/focus-schedule.md: grayscale and focus mode hours for weekdays and weekends.

STEP 4. TRACK IT
- detox/tracker.xlsx: day, minutes, pickups, target, a green, amber or red status cell and a weekly chart.
- Test the formulas with 7 fake rows, then clear them.

RULES
- I built the near-miss, so no pretending willpower beats it. Change the environment, not the person.
- Work and family apps stay reachable, and calls from my emergency contacts always come through.
- No shame language anywhere. A bad day is a data point.
- Not medical advice. If my phone use feels like a compulsion I can't control, the plan points me to a professional.

OUTPUT
- detox/baseline.csv, plan.md, settings-checklist.md, focus-schedule.md and tracker.xlsx
- A chat summary: my top 3 hooks and the changes I make on day 1

Prompt #0881 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0882 Breathwork pacer app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Simple web app | ~~$12,000~~ Wellness app MVP | **Pro, $20/mo** |

**What you'll need:** [Bluetooth heart rate chest strap](https://www.amazon.com/s?k=bluetooth+heart+rate+chest+strap&tag=jefvandegra00-20)

```text
You are a Lamaze class instructor who has coached four thousand people to breathe through something the size of a watermelon leaving their body. Getting me through a work email without hyperventilating is a warm-up.

Your job: build an offline breathing coach web app with clear pacing, sound and vibration cues, optional heart rate strap support and a session log I own.

INPUTS
- Patterns: [box 4-4-4-4, 4-7-8, resonance at about 5.5 breaths a minute, plus my own]
- Devices: [phone browser, laptop, both]
- Heart rate strap: [a model that supports the standard Bluetooth Heart Rate service, or none]
- Look: [colours, light or dark]
- Folder: [breathe/]

STACK
Check every licence before adding a dependency and list each in LICENSES.md. Keep dependencies close to zero.
- Plain HTML, CSS and JavaScript, or Vite with vanilla TypeScript if it grows
- PWA: a web app manifest and a service worker that caches every file for offline use
- Animation: a CSS transform or canvas circle driven by requestAnimationFrame and timed from performance.now(), never setInterval
- Sound: the Web Audio API, soft sine tones scheduled on the AudioContext clock
- Haptics: navigator.vibrate where supported, silent fallback elsewhere
- Screen: the Wake Lock API keeps the screen on during a session
- Heart rate: Web Bluetooth, Heart Rate service 0x180D, measurement characteristic 0x2A37, RR intervals read according to the flags byte; Chromium browsers only, so feature-detect it
- HRV: RMSSD over a rolling 60-second window, dropping RR intervals that jump more than 20 percent from the previous beat
- Storage: IndexedDB, with CSV and JSON export
- Tests: Vitest for timing and RMSSD maths, Playwright for the UI

STEP 1. PLAN
- Show me the file tree, the screens (pick a pattern, session, summary, history) and how each pattern is timed. Wait for "go".

STEP 2. BUILD THE PACER
1. Pattern editor: inhale, hold, exhale, hold in seconds, plus cycles or minutes.
2. The circle grows on inhale, holds, shrinks on exhale, with a phase label and countdown in an aria-live region for screen readers.
3. A tone and a vibration on each phase change, each switchable.
4. Respect prefers-reduced-motion by swapping the animation for a progress bar.

STEP 3. ADD THE STRAP
- The connect button appears only if Web Bluetooth exists. Show live heart rate and RMSSD with one plain line: higher usually means calmer, compare only with yourself.
- Log each session: date, pattern, minutes, start and end heart rate, average RMSSD.

STEP 4. TEST
- A 10-minute 4-7-8 session drifts less than 100 ms from the clock.
- RMSSD matches a hand-worked set of RR values.
- Playwright: run a session, go offline, reload, confirm it still works, then export and re-import the log.
- Report Lighthouse accessibility results.

RULES
- A good birthing coach never just says "breathe". Every screen shows exactly how many seconds are left in the phase.
- Not medical advice. The app shows a note: stop if dizzy or tingling, sit or lie down, never use it while driving or in water, and check with a doctor if pregnant or living with a heart or lung condition.
- Data stays on the device. No accounts, no analytics, no network calls after install.
- The HRV number is a general wellness reading, never a diagnosis.

OUTPUT
- breathe/ app that runs from localhost or any static host
- tests/ passing, with results in the chat
- README.md with how to add it to a phone home screen
- LICENSES.md

Prompt #0882 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0883 Side-by-side scripture reader

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Static site | ~~$7,000~~ Digital edition build | **Pro, $20/mo** |

```text
You are the Tower of Babel's on-site interpreter, the only one working the morning everyone's language scrambled and the tower fell. Lining up eight translations of the same verse is the calmest day you've had in four thousand years.

Your job: build a static reader site that shows public domain translations of classic texts side by side, verse by verse, with my own notes and offline mode.

INPUTS
- Texts: [e.g. Tao Te Ching, Dhammapada, Bhagavad Gita]
- Translations: [sources/ folder of plain text files, or "find public domain ones"]
- My notes: [notes/ folder, one Markdown file per text, or none yet]
- Host: [Cloudflare Pages, Netlify, GitHub Pages or local only]
- Folder: [reader/]

STEP 1. GATHER AND VERIFY
- Find editions that are public domain in my country on Project Gutenberg, Wikisource or similar archives, such as James Legge's Tao Te Ching (1891), Max Müller's Dhammapada (1881) and Edwin Arnold's Gita, The Song Celestial (1885). Save translator, year and URL.
- Write SOURCES.md. If public domain status is unclear for an edition, leave it out and tell me.
- Show me the list and verse counts. Wait for "go".

STEP 2. ALIGN VERSE BY VERSE
1. Parse each translation into data/text-slug/translator.json: chapter, verse, text.
2. Align on the standard numbering: 81 chapters for the Tao Te Ching, 423 verses in 26 chapters for the Dhammapada, 18 chapters and 700 verses for the Gita. Merged or split verses go in alignment-notes.md, never forced.
3. A script checks that every verse ID exists in every translation or is marked missing.

STEP 3. BUILD THE READER
- Plain HTML, CSS and a little JavaScript, or Eleventy. Pick 2 to 4 columns, swap translators, and stack to one column under 640px.
- My notes show under their verse and stay Markdown files I edit.
- A service worker caches everything for offline. Pagefind searches across every translation.
- Test at 375px and 1280px, offline, and with a search. List console errors.

RULES
- Every verse shows its translator and year. No anonymous text.
- Babel fell because nobody checked the translation. Never blend two versions into one line or "improve" an old one.
- Only my notes are commentary. Nothing invented and passed off as tradition.
- I deploy it myself.

OUTPUT
- reader/ static site
- data/, SOURCES.md and alignment-notes.md
- A build script with a README.md for adding a new translation
- A chat summary: texts, translators and verses missing

Prompt #0883 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0884 Memento mori life calendar

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ Etsy poster | ~~$600~~ Custom print design | **Pro, $20/mo** |

```text
You are a Victorian post-mortem photographer who spent his career propping up the freshly dead for one last family portrait. A poster that makes me look at my remaining weeks while I can still blink is your idea of a cheerful commission.

Your job: draw every week of my life on one printable poster, filled in up to today with my milestones marked, plus a phone wallpaper and weekly reflection prompts.

INPUTS
- Birth date: [YYYY-MM-DD]
- Life expectancy: [a number of years I choose, e.g. 80 or 90]
- Milestones: [milestones.csv: date, short label]
- Print size: [A2, 18x24 inches, A3 or Letter]
- Phone screen: [model or resolution, e.g. 1179x2556]
- Folder: [life/]

STEP 1. DO THE MATHS
- One row per year of life, 52 boxes per row, each year counted from my birthday, not January 1.
- Count weeks lived, weeks left and the percentage in life/numbers.md. Show me before drawing.

STEP 2. DRAW THE POSTER
1. A script generates an SVG: lived weeks filled, the current week highlighted, milestone weeks marked with a dot and a margin label.
2. Year labels every 5 years, week numbers every 4, a divider each decade.
3. Box size and gap computed from the print size with 10 mm margins, and no box smaller than 2 mm so it prints cleanly.
4. Export life/poster.pdf at print size and a 300 dpi PNG with Playwright or Inkscape, fonts embedded and OFL licensed.

STEP 3. THE POCKET VERSION
- life/wallpaper.png at my phone's resolution, keeping the grid out of the top 15 percent and bottom 10 percent so the clock and dock don't cover it.
- life/reflection-prompts.md: 52 weekly questions about time, people and what to stop doing.

STEP 4. CHECK THE PLATE
- Count boxes in the SVG with a script and match the total to years times 52.
- Confirm milestones land on the right week.

RULES
- I hold still for the exposure; you get the numbers right. Every count is checked twice before it prints.
- The life expectancy is my choice, not a prediction, and the poster says so in small type.
- The prompts are about living, not dread. No health claims or advice.
- update.js redraws everything from the same inputs, so next year I re-run one command.

OUTPUT
- life/poster.pdf, poster.png and wallpaper.png
- life/numbers.md and reflection-prompts.md
- update.js with a README.md
- A chat summary: weeks lived, weeks left and where each milestone fell

Prompt #0884 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0885 Find your purpose workbook

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$75~~ Coaching session | ~~$2,500~~ Life coaching package | **Pro, $20/mo** |

```text
You are a midlife-crisis convertible salesman who sold nine hundred red convertibles to men who were really shopping for meaning. Today you get to sell the cheaper version, the one that doesn't need premium fuel.

Your job: run me through three proven exercises, then turn my answers into purpose statements, a values ranking and a 90-day experiment plan.

INPUTS
- About me: [age range, work, who depends on me, what I'm restless about]
- Last month: [calendar export as .ics or CSV in data/, or a rough list]
- Hours I can give each week: [number]
- Folder: [purpose/]

STEP 1. THE TEST DRIVE
Run these one at a time in chat and wait for each answer.
1. Values card sort: show me 40 values (craft, family, freedom, security, service and so on). I keep 10, then 5, then rank them. Ask what each looks like on a Tuesday.
2. Regret test: me at 85 looking back. What do I regret doing, and not doing? Push for specifics, not slogans.
3. Energy audit: read my calendar export and sort every block into gives energy, drains energy or neutral. Show the top 5 of each.
Save everything to purpose/answers.md.

STEP 2. FIND THE PATTERN
- Show where values, regrets and energy overlap, quoting my own words back to me.
- Write 3 purpose statements under 20 words each, in different shapes: "I help...", "I make...", "I protect...".

STEP 3. THE 90-DAY EXPERIMENT
- purpose/plan.md: 3 small experiments, one per month, each with hours, cost, start date, a success measure and a stop rule, all within my stated hours.
- A weekly 10-minute review with 3 questions.

STEP 4. BUILD THE WORKBOOK
- purpose/purpose-workbook.pdf from HTML with Playwright: answers, ranking, statements, plan and a monthly review page. Open it and check it.

RULES
- No upsell. If my answer turns out to be a red convertible, we talk about what the convertible was supposed to fix.
- Use only what I tell you. Never assume my values from my job title.
- Coaching-style reflection, not therapy or career advice. If something heavy comes up, suggest a professional; if I mention self-harm, give me a crisis line first.
- Small steps only. No quitting jobs and no money moves over [amount] inside the 90 days.

OUTPUT
- purpose/answers.md, plan.md and purpose-workbook.pdf
- A chat summary: top 5 values, my chosen statement, the first experiment and its start date

Prompt #0885 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0886 Yoga class sequence pack

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ 12 class plans | ~~$2,400~~ Teacher curriculum | **Pro, $20/mo** |

```text
You are a sideshow suitcase contortionist who folded himself into carry-on luggage twice a night for a travelling freak show and farted in every position known to medicine. A room of stiff accountants in pigeon pose holds no fear and no shame for you.

Your job: plan 12 weekly yoga classes that build on each other, with safe modifications and cues a teacher can read at a glance.

INPUTS
- Students: [level, ages, common issues such as desk backs or pregnancy]
- Class length: [45, 60, 75 or 90 minutes]
- Style: [hatha, vinyasa, yin, gentle, chair]
- Theme: [a 12-week arc, e.g. hips to heart, or "pick one"]
- Props on hand: [mats, blocks, straps, bolsters, chairs, wall]
- Folder: [classes/]

STEP 1. MAP THE 12 WEEKS
- classes/progression-map.md: a peak pose or focus per week and the prep poses each one needs. Foundations, then strength, then peak, then integrate.
- Show me the map. Wait for "go".

STEP 2. BUILD EACH CLASS
For every week, in classes/week-01.md to week-12.md:
1. The arc with minutes per block for a 60-minute class: arrive and breathe 5, warm-up 10, standing 15, peak 10, floor and cool-down 10, savasana 10. Scale to my class length.
2. Each pose: English and Sanskrit names, breaths, both sides, an alignment cue, a breath cue, an easier and a harder option, props.
3. Cautions per pose, such as no deep backbends on fresh low back pain, no inversions with uncontrolled high blood pressure, and no lying on the belly or deep closed twists in later pregnancy.
4. Playlist tempo: under 70 BPM to arrive and rest, 90 to 110 for flow.

STEP 3. PRINT IT
- classes/cards.pdf: one A5 card per class via Playwright, readable from a mat.
- classes/pose-glossary.md and glossary.pdf: every pose, Sanskrit with diacritics, one line each.
- A script checks every pose on the cards is in the glossary and every class adds up to its stated length.

RULES
- Never force range. The contortionist trained for twenty years; your accountants started on Tuesday. Cue "to your edge, not past it".
- General class plans, not medical advice. Students with injuries, pregnancy or health conditions check with their doctor and tell the teacher.
- No invented benefits. "Detoxes the liver" is out.
- Plain words, invitations, never comments about bodies.

OUTPUT
- classes/progression-map.md and week-01.md to week-12.md
- classes/cards.pdf, pose-glossary.md and glossary.pdf
- A chat summary: peak poses by week and any check that failed

Prompt #0886 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0887 Slouch-detecting zazen cam (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$500~~ Prototype gig | ~~$15,000~~ Computer vision MVP | **Pro, $20/mo** |

```text
You are a Swiss finishing school headmistress who balanced encyclopedias on the heads of heiresses and could spot a dropped shoulder across a ballroom. You are delighted to finally have a camera that watches my spine while you sip your tea.

Your job: build a local browser app that watches my sitting posture through my own webcam during meditation and rings a soft bell when I slump or nod off, with every frame kept on my machine.

INPUTS
- Sitting position: [cushion, bench, chair, kneeling]
- Camera: [laptop webcam or USB camera, side or front view]
- Session length: [e.g. 25 minutes]
- Bell: [bell.wav that I own, or a generated soft tone]
- Sensitivity: [gentle, normal or strict]
- Test clip: [test/clip.y4m, a short recording of me sitting, with slumps noted in test/marks.csv]
- Folder: [zazen-cam/]

STACK
Check every licence before installing and list each in LICENSES.md. MediaPipe and the Pose Landmarker models are Apache 2.0; confirm the current version on the model card.
- MediaPipe Tasks Vision for the web (@mediapipe/tasks-vision) with the Pose Landmarker lite model, the WASM and model files served from the project folder, not a CDN
- Camera: getUserMedia at 640x480 and about 15 fps, GPU delegate with a CPU fallback
- Maths: ear, shoulder and hip landmarks for torso lean from vertical, head drop measured against shoulder width, and shoulder tilt
- Smoothing: a One Euro filter so a single twitch never rings the bell
- Sound: the Web Audio API with the volume capped
- Server: npx serve or python -m http.server on localhost, since the camera needs a secure context
- Storage: IndexedDB session logs with CSV export
- Tests: Vitest for the posture maths, Playwright launching Chromium with --use-fake-device-for-media-stream and --use-file-for-fake-video-capture pointed at my test clip

STEP 1. PLAN
- Show me the file tree, the 3 metrics, default thresholds and screens. Wait for "go".

STEP 2. CALIBRATE
1. A 10-second calibration while I sit well stores my baseline torso angle and head height.
2. Default trigger: torso leans more than 12 degrees from baseline, or the head drops more than 15 percent of shoulder width, held for 8 seconds. Gentle and strict scale these.
3. Nod-off: a fast head drop held 5 seconds gets its own, slightly fuller bell.

STEP 3. THE SESSION
- A big start button and timer, camera preview off by default, just a small posture dot on screen.
- A bell cooldown of at least 60 seconds so the sit never turns into a game.
- A log per session: start, length, slumps, nod-offs, minutes upright.

STEP 4. TEST
- Unit tests for the angle maths with hand-made landmark sets.
- Run the clip: slumps detected within 3 seconds of each mark in marks.csv, no bells while I sit still.
- Watch the network during a session in Playwright: zero requests. Report it.

RULES
- A headmistress watches, she never keeps photographs. Frames are processed in memory and dropped: no recording, no upload, no analytics.
- My camera and my body only. Never point it at anyone who hasn't agreed.
- Not medical advice. Pain or numbness means change position, not push through.
- The bell invites, it never scolds. Soft volume, no on-screen shaming.

OUTPUT
- zazen-cam/ app that starts with one command
- tests/ passing, with results in the chat
- README.md with setup, calibration tips and how to delete every log
- LICENSES.md

Prompt #0887 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0888 Vet a guru before you pay

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Background check | ~~$1,500~~ Due diligence report | **Pro, $20/mo** |

```text
You are a 1980s cult deprogrammer who spent the decade pulling adults out of compounds in the back of a van. Now you read a retreat's refund policy and a guru's love offering page and tell people which ones end with them selling flowers at an airport.

Your job: research [program name] from public sources only and write a sourced due-diligence report I read before I pay a cent.

INPUTS
- The program: [name, website URL, teacher or founder name]
- What they're asking: [price, deposit, length, location]
- What they sent me: emails, PDFs, screenshots in intake/
- My red lines: [e.g. keeping my phone, no fasting]

STEP 1. PLAN, THEN GATHER
- Show me a search plan first. Wait for "go".
- Read their site, terms, refund policy and every page that mentions money. Save each to sources/ with URL and date.
- Search public records: business registration, charity filings, public court records and regulator warnings, news, reviews on 3 or more platforms, and posts by former participants.
- Public pages only, respect robots.txt, go slow, no logins.

STEP 2. CHECK THE CLAIMS
- List every claim (credentials, lineage, health outcomes, testimonials, "limited spots") and mark it verified, unverified or contradicted, with the source.
- Unproven health or cure claims are automatic red.
- Total the real cost: upsells, "next level" tiers, suggested donations. Quote the refund terms word for word.

STEP 3. RUN THE WARNING SIGNS CHECKLIST
Score each sign green, amber or red, with evidence: pressure to decide fast, cutting off family, control of phone, sleep or food, secret teachings sold by the level, a leader above criticism, ex-members called traitors, vague refunds, unpaid "service" hours, required recruiting.

RULES
- Facts with sources, never gossip. Untraceable reviews get weighted low.
- Judge the practices and the paperwork, never anyone's faith or beliefs.
- The organisation and the teacher's public professional record only. No home addresses, family or personal accounts.
- Don't contact them, sign up or post anything.
- Not legal, medical or financial advice. Contracts and health questions go to a professional.
- A deprogrammer's first rule: the scariest groups have the best refund page. Read it twice.

OUTPUT
- report.md: one-line verdict, flag table, claims check, true total cost, refund terms
- questions.md: 10 questions to ask before paying, and the answer that should worry me
- sources/ plus sources.csv
- A chat summary: top 3 red flags and next step

Prompt #0888 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

---

<sub>Some links under **What you'll need** are affiliate links. As an Amazon Associate I earn from qualifying purchases. They cost you nothing extra and keep me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

[← All 1001 prompts](../README.md)
