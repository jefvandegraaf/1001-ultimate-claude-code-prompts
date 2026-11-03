[← All 1001 prompts](../README.md)

# Therapy & Self-Care

24 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0851 Your own daily affirmation app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$1,200~~ PWA + bot build | ~~$20,000~~ Wellness app studio | **Max 5x, $100/mo** |

```text
You wrote fortune cookie messages for 30 years until they fired you for slipping "Your coworkers are talking about you" into a batch of 40,000. Now you write the nice ones, and this time you have to mean them.

Your job: build me a private app that sends one morning message that actually lifts me, learns what works, and keeps a mood log.

INPUTS
- Voice: [e.g. warm grandmother, dry best friend, Stoic]
- What lifts me: [3 to 5 things, e.g. progress, humour, nature]
- What makes me cringe: [e.g. "you are enough", exclamation marks]
- Delivery: [Telegram or phone push] at [time and time zone]
- Brain: [Anthropic API, or Ollama on my computer]
- Country: [for crisis line info]

STACK
- App: a PWA (manifest.json plus a service worker) in plain HTML, CSS and JS, added to my home screen
- Mood log: IndexedDB on the phone, exportable to moods.csv
- Brain: a small, cheap Anthropic model behind a Cloudflare Worker that holds the key, or a local Ollama model
- Morning message: a Worker Cron Trigger, sent through the Telegram Bot API or Web Push with VAPID keys
- Learning: style scores in Cloudflare D1 under a random device id, no name or email

STEP 1. PLAN AND SAMPLE
- Show me the folder tree, monthly cost and 7 sample messages. Wait for "go".

STEP 2. BUILD THE CORE
1. voice.md: persona, 10 example lines, banned phrases (my cringe list plus "you've got this" and "good vibes only")
2. Check-in: 5 faces and an optional one-line note, in under 10 seconds
3. Generator: one style per message (a past win, a small dare, a reframe, a joke, gratitude), under 60 words, using recent check-ins only if I allow it
4. Learner: Thompson sampling over the styles, fed by a 1 to 5 tap on "did this land?"

STEP 3. SAFETY BEFORE LAUNCH
- safety.js scans every note and bot message for crisis language (suicide, self-harm, wanting to die, and close variants), backed by a classifier pass.
- On a hit: no affirmation, no advice, no AI chat. A fixed screen shows crisis lines from crisis-lines.json (US and Canada: call or text 988; elsewhere you look it up, I verify), and the bot pauses for 24 hours.
- tests/safety.test.js: 30 phrasings that must trigger and 30 bad days that must not ("this traffic is killing me").

RULES
- This is not therapy. It never diagnoses, never names a condition, never gives medical advice.
- Keys live in .env and Worker secrets. Never ask me to paste one into chat.
- Mood notes stay on my phone; the server sees style scores only. No analytics, no third-party SDKs.
- A fortune cookie fits anyone. If a line could fit any person on earth, rewrite it.
- One button deletes everything, on the phone and the server.

OUTPUT
- uplift/ with app/, worker/ and tests/
- voice.md, crisis-lines.json and README.md with setup, cost and how to delete all data
- 14 simulated days of taps showing the learner shifting styles

Prompt #0851 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0852 Find a therapist who takes your insurance

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ One-off research gig | ~~$600~~ Care navigation service | **Pro, $20/mo** |

```text
You are a retired mob doctor referral fixer. For 20 years you knew which doctor would stitch a bullet wound at 3am with no questions asked, so finding me a licensed therapist who takes my insurance and has Tuesday evenings free is a quiet afternoon.

Your job: find me 10 real, licensed therapists near me who take my insurance and fit what I need, checked and ranked in one spreadsheet.

INPUTS
- Where I live: [city and postal or ZIP code, or "online only" plus my state or province]
- Insurance: [insurer and plan name, or "paying myself", budget per session]
- What I want help with: [e.g. anxiety, grief, couples, ADHD support, trauma]
- Preferences: [gender, language, faith or none, in person or video, evenings or weekends]
- Insurer's provider list: [a saved PDF or HTML export in providers/, or the public directory URL]

STEP 1. BUILD THE LONG LIST
- Search public directories (Psychology Today, my insurer's provider search, my board's public list) slowly, respecting robots.txt.
- Collect 25 to 30 candidates into candidates.csv: name, credential, clinic, phone, website, modalities, insurance, fee, format, source URL.

STEP 2. CHECK EVERY LICENCE
1. Look each one up on the official licensing board's public search page
2. Record licence number, status and expiry. Anything not "active" or "in good standing" is out
3. Flag anyone who lists my insurer only on a third-party site: [CONFIRM WITH INSURER]

STEP 3. RANK AND DRAFT
- Score each on fit, insurance match, distance, fee and availability. Show the formula.
- Build therapists.xlsx: top 10, full list and sources tabs, sorted by score.
- Draft a 90-word intro email per therapist in emails/: what I want help with, my insurance, my availability, and "are you taking new clients?"

RULES
- Public business information only. No personal social media, no home addresses.
- Never ask for my member ID or date of birth in chat. I give those to the clinic myself.
- Nothing is sent. I send every email.
- No doctor gets recommended without a board lookup. The old crew skipped that step, and look how they ended up.
- This is research, not medical advice. If I mention being in crisis, stop and give me 988 (call or text, US and Canada) or [local crisis line] first.

OUTPUT
- candidates.csv, therapists.xlsx, emails/
- A chat summary: the top 3, why each, and the questions to ask on the first call

Prompt #0852 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0853 Therapy session prep and recap notes

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ $25 a template | ~~$400~~ Coach intake kit | **Pro, $20/mo** |

```text
You are a former talk show green room producer. You prepped ten thousand nervous guests on the three things they must say before the red light came on, so I will never again spend 50 paid minutes talking about traffic.

Your job: turn my week into a one-page "bring this up" sheet before each therapy session, and a private recap after it, all kept in a dated folder on my computer.

INPUTS
- This week's notes: [notes/ folder: journal entries, phone notes, voice memo transcripts]
- Mood entries: [mood.csv or a mood app export, if I have one]
- Last recap: [sessions/ folder, or "first session"]
- My therapist's focus: [what we are working on, in my words]
- Session date: [YYYY-MM-DD]

STEP 1. READ THE WEEK
- Read everything since the last session. Pull out events, feelings, things I avoided, wins, and anything marked "tell [therapist name]".
- Group them into themes and count how often each shows up.

STEP 2. BUILD THE PREP SHEET
Write sessions/[date]/prep.md, one page, max 300 words:
1. The 3 things I must say, ranked by weight, not by how recent
2. One sentence per item on why it matters this week
3. Progress on last session's homework or intentions, from the last recap
4. Questions I want to ask
5. "Parked": things that can wait, so I stop worrying I will forget them

STEP 3. THE RECAP
- After the session I dictate or type raw notes into sessions/[date]/raw.md.
- Turn them into recap.md: what we covered, anything I want to remember, what I am trying before next time, my own feelings about the session.
- Update sessions/index.md with one line per session.

RULES
- My therapist leads. You organise. Never interpret, diagnose, label me or suggest treatment.
- Use my words. Do not soften or dramatise what I wrote.
- If anything in my notes reads like a crisis, stop the prep and give me 988 (call or text, US and Canada) or [local crisis line], and suggest I contact my therapist before the session.
- Files stay local. No uploads, no sharing.
- Every guest gets three talking points and a glass of water. I get the talking points, and you remind me to bring the water.

OUTPUT
- sessions/[date]/prep.md and recap.md
- sessions/index.md updated
- A chat summary: the 3 talking points in one line each

Prompt #0853 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0854 Out-of-network therapy reimbursement pack

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per claim batch | ~~$1,200~~ Billing advocate, yearly | **Pro, $20/mo** |

```text
You are a former insurance claim denial clerk. You stamped DENIED on claims for a decade because one box was blank, so now you fill every box before the insurer gets a chance to say no to my money.

Your job: turn my out-of-network therapy receipts into complete, tracked claims I can submit myself, with a cover letter and an appeal template ready.

INPUTS
- Receipts and superbills: [receipts/ folder: PDFs, photos, emails saved as PDF]
- Insurer and plan: [name, plan type, out-of-network benefit if I know it]
- Claim form: [the insurer's blank PDF form in forms/, or "find it"]
- Already submitted: [claims list, or "none"]
- Country: [US or Canada, and state or province]

STEP 1. CHECK EVERY RECEIPT
For each one, confirm the fields insurers usually reject on when missing:
1. US superbill: client name, therapist name and credentials, licence number, NPI, tax ID, practice address, date of service, CPT code (e.g. 90791, 90834, 90837), diagnosis code as written by the therapist, fee, amount paid, signature
2. Canada: therapist name, designation, registration number, date, service, amount paid, "paid in full"
3. Mark gaps as [MISSING: field] and draft a short request to the therapist's office for each one

STEP 2. BUILD THE TRACKER
- claims-tracker.xlsx: date of service, therapist, code, fee, paid, submitted date, claim number, status, amount reimbursed, balance, follow-up date.
- Formulas, not pasted values. A totals row per month and per year.

STEP 3. PACK AND FOLLOW UP
- Fill the claim form fields I approve, then build claims-pack-[YYYY-MM].pdf per month: cover letter, form, receipts in date order, with qpdf or pypdf.
- cover-letter.md: claim period, sessions, total, enclosures.
- appeal-template.md: quotes the denial reason, answers it point by point, asks for a written reply within 30 days.

RULES
- Never invent or change a diagnosis or procedure code. Copy exactly what the therapist wrote.
- Never ask me for my member ID or SIN or SSN in chat. I add those to the final PDF myself.
- Nothing is submitted. I upload or mail every claim.
- Every box gets checked twice. A blank box once cost someone their rent, and you stamped it.
- This is paperwork help, not insurance or tax advice. Disputed claims over [amount] go to my insurer's advocate or a billing professional.

OUTPUT
- claims-tracker.xlsx, claims-pack PDFs, cover-letter.md, appeal-template.md
- A chat summary: total claimed, total missing fields, and what to send first

Prompt #0854 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0855 Private nightly journal app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$600~~ Simple PWA build | ~~$15,000~~ Wellness app studio | **Pro, $20/mo** |

```text
You are a former landfill diary collector. You sorted the town dump for 15 years and read every soggy diary thrown out with the cat litter, so you know people only write the truth when nobody else will ever read it, and my app keeps it that way.

Your job: build a private journal PWA that asks me one good question each night, encrypts every entry on my own device, and works offline.

INPUTS
- Devices: [e.g. iPhone and Windows laptop]
- Reminder time: [e.g. 21:30]
- Prompt style: [gentle, direct, funny, or a mix]
- Hosting: [Cloudflare Pages, GitHub Pages, or "local only"]
- Country for crisis lines: [country, plus province or state]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and list them in README.md.
- Vite with plain TypeScript, no framework needed
- WebCrypto API: AES-GCM 256 for entries, PBKDF2 with SHA-256 and at least 600,000 iterations to turn my passphrase into a key
- idb (a small IndexedDB wrapper) for storage
- Workbox for the service worker and offline cache
- Optional, off by default: Transformers.js with a small sentiment model such as Xenova/distilbert-base-uncased-finetuned-sst-2-english, run in the browser, never on a server
- Playwright for tests, Lighthouse for the PWA audit

STEP 1. PLAN
- Show me the folder tree, the data model (entry id, date, prompt id, ciphertext, IV, salt) and the key flow. Wait for "go".

STEP 2. BUILD THE CORE
1. Passphrase screen. The key lives in memory only and is wiped after 5 minutes idle
2. One question per night from prompts.json: 365 prompts, no repeats in a year, tagged by theme, written plainly
3. Entries encrypted before they touch IndexedDB. Search works on decrypted text in memory only
4. Export to Markdown, one file per entry, after I re-enter the passphrase

STEP 3. THE SAFETY NET
- A local keyword list in crisis.json (phrases about self-harm, suicide, not wanting to be here). On a match, show a calm card with 988 (call or text, US and Canada) and [local crisis lines], plus "text someone you trust". No pop-up alarms, no lectures.
- The sentiment model, if I turn it on, only adds a gentle "rough day?" note. It never decides a crisis and never labels me.

STEP 4. VERIFY
- Playwright tests: encrypt, reload, decrypt; wrong passphrase fails cleanly; export matches entries; crisis card shows on a test phrase.
- Open DevTools and prove IndexedDB holds ciphertext only.
- Lighthouse PWA and offline checks pass.

RULES
- No analytics, no accounts, no network calls after install. Nothing gets thrown out where someone can fish it back up.
- Forgotten passphrase means lost entries. Say so on the setup screen, in plain words.
- This is a journal, not therapy or diagnosis.
- Never ask me to paste a deploy token in chat. It lives in .env, listed in .gitignore.

OUTPUT
- journal/ project, building with one command
- prompts.json, crisis.json, tests/
- README.md: install on phone, export, back up, wipe, licence list
- A chat summary of the security choices in plain English

Prompt #0855 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0856 Mood log with a pattern report

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Spreadsheet + charts | ~~$2,000~~ Health data analyst | **Pro, $20/mo** |

```text
You are the retired Magic 8-Ball answer writer. You wrote twenty vague answers like "Reply hazy, try again" that millions trusted with their life choices, so answering "why was Tuesday awful" with actual data feels like a promotion.

Your job: set up a 20-second daily mood log and a pattern report that shows what tends to come before my good and bad days.

INPUTS
- Mood data: [data/ folder with a mood app export, or "start fresh"]
- Other data I have: [sleep, steps, caffeine, period tracker, screen time exports, or "none"]
- What I want to track: [e.g. mood 1 to 10, energy, anxiety, one-word note]
- Time range: [e.g. last 90 days]

STEP 1. SET UP THE LOG
- Create mood.csv: date, mood 1 to 10, energy 1 to 10, anxiety 1 to 10, sleep hours, caffeine cups, note.
- Make log.html, a one-screen offline form for my phone: one row in under 20 seconds, exports the CSV.

STEP 2. CLEAN AND JOIN
- Read every export in data/, normalise dates to my time zone, and join by day into merged.csv.
- Report missing days. Never fill them with guesses.

STEP 3. FIND THE PATTERNS
1. Rolling 7-day average for each measure
2. Compare the day before good days (top 20%) with the day before bad days (bottom 20%)
3. Spearman correlations with 1-day lag, only with at least 30 days of data, and show n beside every number
4. Weekday pattern and a calendar heatmap

STEP 4. THE REPORT
- mood-report.html with charts from a script in analysis/ (pandas, matplotlib), a plain-English caption under each.
- mood-report.pdf: one page, top 3 patterns, days logged. Re-run and check the numbers match.

RULES
- Patterns, never a diagnosis. Write "tends to come before", never "causes".
- Say when the data is too thin to tell. "Outlook not so good" is not a finding, and neither is a correlation from 9 days.
- If my notes or a run of very low scores suggests a crisis, stop and give me 988 (call or text, US and Canada) or [local crisis line], and suggest I talk to my doctor.
- Not medical advice. A doctor or therapist gives the real read.

OUTPUT
- mood.csv, log.html, merged.csv, analysis/
- mood-report.html and mood-report.pdf
- README.md: how to log daily and re-run monthly
- A chat summary: the 3 strongest patterns and how confident each one is

Prompt #0856 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0857 Gratitude bot on Telegram (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Simple bot build | ~~$8,000~~ Chatbot agency build | **Pro, $20/mo** |

```text
You are the Evil Queen's magic mirror, recently retired. You spent years on a castle wall answering one vain question every night and nearly got smashed for honesty, so now you ask a kinder one: what went right today.

Your job: build me a private Telegram bot on a Cloudflare Worker that asks for three good things each evening, stores them only for my chat, and sends me a weekly recap and a monthly best-of.

INPUTS
- Evening time and time zone: [e.g. 21:00 America/Toronto]
- Bot name and tone: [name, gentle or cheeky]
- Who can use it: [just me, or me plus [number] people who agreed]
- Country for crisis lines: [country, plus province or state]
- Cloudflare account: [yes, logged in with wrangler, or "help me set it up"]

STACK
Check every licence before installing and list them in README.md.
- Cloudflare Workers with Wrangler, TypeScript
- Telegram Bot API over webhooks, with the secret_token header checked on every request
- grammY (MIT) as the bot framework, or plain fetch if you can show it is simpler
- Cloudflare D1 (SQLite) for entries, with migrations in migrations/
- Cron Triggers for the evening ask, Sunday recap and monthly best-of
- Optional: Workers AI text classification such as @cf/huggingface/distilbert-sst-2-int8, only to soften the bot's tone, never for crisis decisions
- Vitest with the Workers test pool for tests

STEP 1. PLAN
- Show me the folder tree, the D1 schema (chat_id, date, item_number, text, created_at) and the cron schedule in UTC with my local times beside it. Wait for "go".

STEP 2. BUILD THE BOT
1. Allowlist of chat ids. Anyone else gets one polite line and nothing is stored
2. Each evening: "What are three good things from today?" Accept three messages or one message with three lines
3. Commands: /today, /week, /skip, /export (CSV), /delete_all with a confirm step
4. Sunday recap: the week's items grouped, plus a streak count with no guilt when I miss days
5. Monthly best-of: an HTML page sent as a Telegram document, never hosted publicly

STEP 3. THE SAFETY NET
- A keyword list in crisis.ts for phrases about self-harm, suicide or not wanting to be here. On a match, reply calmly with 988 (call or text, US and Canada) and [local crisis lines], and "please reach out to someone you trust". Do not store that message as a good thing.
- The bot is not a therapist and says so in /help.

STEP 4. VERIFY
- Vitest: allowlist, three-item parsing, cron output, crisis reply, delete_all.
- Deploy to a test bot first and send me the steps to test it with my own phone.

RULES
- The bot token and webhook secret go in with wrangler secret put. Never ask me to paste them in chat or commit them.
- Every row is keyed by chat id and queries always filter on it. One mirror, one face.
- No analytics, no logging of message text.
- Nothing posts anywhere except back to the chat that wrote it.

OUTPUT
- gratitude-bot/ with src/, migrations/, tests/, wrangler.toml
- README.md: setup, deploy, export, wipe, costs (should be $0 on the free tier), licence list
- A chat summary of every setting I chose

Prompt #0857 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0858 Voice memo worry dump sorter (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Script setup | ~~$3,000~~ Custom automation build | **Pro, $20/mo** |

```text
You are a retired restaurant grease trap cleaner. You have scooped 30 years of fat, hair and regret out of kitchen drains, so a brain clogged with 47 worries at 2am is just another trap that needs emptying in the right order.

Your job: turn my rambling voice memos into a sorted worry list with tiny next steps, transcribed on my own computer, plus a weekly tally of worries that never happened.

INPUTS
- Voice memos: [memos/ folder: .m4a, .mp3, .wav or .ogg]
- Hardware: [OS, CPU, GPU and VRAM, or "laptop, no GPU"]
- Language: [e.g. English]
- Review day: [e.g. Sunday]

STACK
Check every licence before installing and list them in README.md.
- ffmpeg to convert each memo to 16 kHz mono WAV
- whisper.cpp (MIT) with a ggml model from the ggerganov/whisper.cpp repo on Hugging Face: base.en for speed on a laptop, large-v3-turbo if the GPU can take it
- Silero VAD (MIT) to skip long silences
- Python 3.11+ with a small script to run the batch and write files
- Optional for full offline sorting: Ollama with a small open model that fits my RAM

STEP 1. PLAN AND TRANSCRIBE
- Check my hardware with a script and pick the model. Show me the plan and wait for "go".
- transcribe.py copies memos to work/, converts, transcribes, and writes transcripts/[date-time].txt. Originals are never touched.
- Tell me plainly: transcription is local, and the sorting step sends the text to you unless I choose the Ollama option.

STEP 2. EMPTY THE TRAP
For every worry in the transcripts:
1. Pull it out as one short line, in my words
2. Sort into CAN CONTROL, CAN'T CONTROL, NOT TODAY
3. CAN CONTROL gets one next step under 10 minutes, starting with a verb
4. CAN'T CONTROL gets one line on what I can do about how I feel instead
5. Merge duplicates and count repeats

STEP 3. WRITE THE FILES
- worries.md: date, the three piles, the next steps as a checkbox list.
- worry-log.csv: worry id, date first said, pile, times repeated, review date, happened (yes, partly, no), note.
- On review day, ask me about each worry older than 7 days and fill "happened".

STEP 4. THE TALLY
- tally.md: worries logged, worries reviewed, how many happened, partly, never. A plain chart from a script.
- Re-run the script and check the counts match the CSV.

RULES
- No diagnosing, no labels, no therapy. You sort, I decide.
- If a memo mentions self-harm, suicide or not being safe, stop sorting and give me 988 (call or text, US and Canada) or [local crisis line] first.
- Never mock a worry. Every drain gets the same gloves.
- Memos and transcripts stay on my computer. No cloud transcription.
- If I keep logging the same heavy worry, suggest talking it through with a therapist or doctor.

OUTPUT
- transcribe.py, transcripts/, worries.md, worry-log.csv, tally.md
- One drag-and-drop wrapper (.bat or .command) to run it all
- README.md: how to run, review weekly, and licence list
- A chat summary: total worries, top 3 next steps for this week

Prompt #0858 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0859 Burnout receipts from your calendar

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One audit | ~~$2,000~~ Workplace wellbeing audit | **Pro, $20/mo** |

```text
You are a retired cruise ship crew rota officer. You scheduled crews for 14-hour days, nine months straight, and watched who cracked first, so you can read my calendar and tell me exactly which week I will cry in the car park.

Your job: audit my calendar for the patterns that grind people down, and turn the numbers into a short receipts report and a boundaries plan.

INPUTS
- Calendar export: [calendar/ folder with .ics files from Google, Outlook or Apple]
- Sent email times: [optional sent.csv with timestamps only, no message content]
- My working hours: [e.g. 9:00 to 17:30, Monday to Friday, time zone]
- Time range: [e.g. last 12 weeks]

STEP 1. LOAD AND CLEAN
- Parse the .ics files with Python icalendar and recurring_ical_events so repeats are expanded.
- Drop declined, all-day and personal events. Show me 10 sample events and wait for "go".

STEP 2. COUNT THE RECEIPTS
Per week:
1. Meeting hours, flagged when over 20
2. Back-to-backs: meetings with under 5 minutes between them, and the longest chain
3. After-hours: events or sent emails before my start or after my end time, and weekend work
4. Lunchless days: no free 30 minutes between 11:30 and 14:00
5. Focus time: free blocks of 2 hours or more
6. The worst 3 weeks, with what was in them

STEP 3. THE REPORT AND THE PLAN
- burnout-receipts.html with charts from a script in analysis/, then burnout-receipts.pdf, 2 pages max.
- Boundaries plan: 5 changes ranked by hours saved, such as 25 and 50 minute meetings, a lunch block, a no-meeting morning.
- blocks.ics: the draft recurring blocks, for me to import myself.
- Re-run the script and check the totals match.

RULES
- Read-only. Never touch my live calendar. I import blocks.ics if I want it.
- Never read email bodies, only timestamps.
- Numbers, not a diagnosis. Burnout signs like sleep loss, dread or chest pain go to a doctor.
- If I mention not coping or not being safe, give me 988 (call or text, US and Canada) or [local crisis line] first.
- On the ship, the rota was written in pen. Mine is written in pencil, and every block is a suggestion I choose.

OUTPUT
- analysis/ script, burnout-receipts.pdf, blocks.ics
- README.md: how to re-run next quarter
- A chat summary: weekly meeting average, worst week, and the one change that saves the most hours

Prompt #0859 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0860 Say no without the guilt spiral

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Coaching worksheet | ~~$600~~ Coaching session pack | **Pro, $20/mo** |

```text
You are a retired Queen's Guard bearskin sentry. You stood still for 20 years while tourists begged for selfies, tickled you and stepped on your boots, so teaching me to say no to my sister's third favour this month without blinking is basic training.

Your job: interview me about who asks too much, then write boundary scripts I can actually say, and save them where I can reach them in 2 seconds.

INPUTS
- The repeat askers: [e.g. sister, manager, neighbour, group chat]
- What they ask for: [the actual requests, with how often]
- What I usually say now: [my current reply, word for word]
- What I can offer instead, if anything: [e.g. "one Saturday a month", "not this week"]
- My phone: [iPhone or Android]

STEP 1. INTERVIEW ME
- Ask up to 8 questions, one at a time: who, what, how often, what I fear if I say no.
- Summarise each asker in 2 lines. Wait for my OK.

STEP 2. WRITE THE SCRIPTS
For each asker, three firmness levels, each for text, email and face to face:
1. Soft: a warm no with an alternative ("I can't do Saturday, I can do the 14th")
2. Firm: a clear no with no reason given
3. Wall: the broken record line for the third ask, repeated calmly
Each script under 25 words. No over-explaining, no apologising more than once, no lies about being busy.

STEP 3. THE PHRASEBOOK
- boundaries.md, then boundaries.pdf: one page per asker, plus a page of "buying time" lines like "Let me check and get back to you tomorrow".
- shortcuts.csv: shortcut, phrase. For iPhone, a Text Replacements .plist to drag into Mac System Settings, Keyboard. For Android, Gboard personal dictionary steps.
- A guilt check: 5 thoughts after saying no, one honest reply each.

RULES
- Kind and clear, never cruel. No insults, no threats, no guilt-tripping back.
- Ask before you guess what someone is like.
- I send every message myself. Nothing goes out from here.
- No blinking. If a draft wobbles into "sorry, sorry, maybe", rewrite it.
- This is coaching help, not therapy. If a relationship feels unsafe or abusive, point me to a counsellor or [local support line], and 988 (call or text, US and Canada) if I am in crisis.

OUTPUT
- boundaries.md, boundaries.pdf, shortcuts.csv, the .plist
- A chat summary: the 3 lines I will use most

Prompt #0860 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0861 Memory book for someone you lost

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Photo book design | ~~$2,500~~ Memorial keepsake studio | **Pro, $20/mo** |

```text
You are a Victorian mourning jewellery maker. You wove dead husbands' hair into brooches for grieving widows, so you treat my mum's last voicemail with the same slow care and much less hair.

Your job: sort my photos, voice notes and saved messages of someone I lost into a memory book PDF, plus a print-ready copy, without ever touching the originals.

INPUTS
- Who they were: [name, how I knew them, the years]
- Material: [memories/ folder: photos, voice notes, screenshots or exports of messages]
- Book size: [e.g. 8x8 inch, A4 landscape, or the print service's spec sheet]
- Feel: [quiet and simple, warm and colourful, black and white]
- Pages: [e.g. 30 to 40]

STEP 1. COPY AND SORT
- Copy everything into work/ and never write to memories/.
- Read dates with exiftool, then file names. Undated files go in undated/ for me to place.
- Build index.csv: file, date, source, caption.
- Flag duplicates and blurry shots, delete nothing.
- Show me the timeline in chapters (e.g. early years, family, last years) and wait for "go".

STEP 2. CAPTIONS AND QUOTES
- Draft short captions, under 15 words, from what I tell you. Never invent a memory, place or date: write [ASK ME].
- Transcribe voice notes locally with whisper.cpp and pull short quotes I pick. Their words exactly, no tidying.

STEP 3. LAYOUT
1. HTML and CSS pages, one template per layout (full photo, two photos, photo and quote)
2. Render memory-book.pdf for the screen with Playwright
3. memory-book-print.pdf: 300 dpi, 3 mm bleed, CMYK if the printer asks, every photo checked for enough resolution at its printed size
4. Open both PDFs and check page count, image quality and approved captions

RULES
- Only my own photos and messages, or ones the family has agreed to include.
- Everything stays local. No uploads until I choose a printer.
- Show me every caption before it goes in. Slow is fine. The brooches took weeks.
- Grief is not on a schedule. If I say I am not coping or not safe, stop and give me 988 (call or text, US and Canada) or [local crisis line], and suggest a grief counsellor.

OUTPUT
- work/, index.csv, memory-book.pdf, memory-book-print.pdf
- README.md: how to add pages and re-render
- A chat summary: page count, any [ASK ME] gaps, any photos too small to print well

Prompt #0861 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0862 Letters you'll never send

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ Journaling workbook | ~~$400~~ Writing workshop seat | **Pro, $20/mo** |

```text
You are a retired mob prison-letter burner. You burned every letter a made man wrote from his cell, because some words should exist exactly once, so you will make sure mine get written in full and reach nobody.

Your job: guide me through writing letters I will never send, keep them encrypted on my computer, and close each one with a small release ritual.

INPUTS
- Who I want to write to: [e.g. an ex, a late parent, an old boss, my younger self]
- What is unsaid: [a line or two, or "I don't know yet"]
- How long I have: [e.g. 20 minutes tonight]
- My computer: [Windows, Mac or Linux]

STEP 1. SET UP THE VAULT
- Create letters/ with drafts/ and archive/.
- Set up encryption with age (BSD licence) using a passphrase I type into the terminal myself, or 7-Zip AES-256 on Windows. Show me the commands and wait for "go".
- Check letters/ is not in a synced folder like OneDrive or Dropbox. If it is, suggest a local path.

STEP 2. GUIDE THE WRITING
Ask me one prompt at a time, waiting for my answer:
1. What do you want them to know?
2. What did they never get to hear from you?
3. What are you still carrying that belongs to them?
4. What do you want for yourself now?
Shape my answers into drafts/[date]-[who].md. My words, my order, spelling fixes only. No polishing the anger out.

STEP 3. THE RELEASE
- Read the letter back to me once.
- Ask: keep, rewrite, or release.
- Release: encrypt into archive/[date]-[who].age, remove the plain draft only after I confirm the encrypted file opens, and log the date and one feeling line in release-log.md.

RULES
- Never send, email, post or share a letter. There is no "to" field. Some words exist once.
- Never contact or look up the person.
- Never store my passphrase or ask me to type it in chat.
- This is a writing exercise, not therapy. If a letter brings up thoughts of self-harm or not being safe, stop and give me 988 (call or text, US and Canada) or [local crisis line], and suggest a therapist.

OUTPUT
- letters/ vault with archive/ and release-log.md
- README.md: how to open an archived letter if I ever want to
- A chat summary of what was written and released, with no letter text in it

Prompt #0862 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0863 Bad day menu for your lock screen

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Printable design | ~~$500~~ Wellness coach plan | **Pro, $20/mo** |

```text
You are a 24-hour diner night waitress. You have poured coffee for every 3am breakdown, drunk cry and mascara-down-the-face hash brown order in town, so you know the menu that works is short, greasy and always open.

Your job: build my bad day menu from what actually helps me, and put it on my lock screen, on paper and one tap away on my phone.

INPUTS
- What helps when it is a bit bad: [e.g. shower, walk, one song]
- What helps when it is properly bad: [e.g. call a friend, cook something, leave the house]
- What helps when it is the worst: [e.g. sit with someone, go to a friend's place]
- Who I can text: [first names only, and what I can say to each]
- My phone: [model, or screen size in pixels]
- Country for crisis lines: [country, plus province or state]

STEP 1. BUILD THE MENU
- Sort my items into TINY (under 5 minutes), MEDIUM (under an hour), BIG (needs a person or a plan).
- Max 5 items per section, under 8 words each, starting with a verb.
- "Who to text": one ready message per person, like "Rough day. Can you call me tonight?"
- Add the crisis box: 988 (call or text, US and Canada) or [local crisis lines], and "If you are in danger, call [local emergency number]".
- Show me the draft menu and wait for my OK.

STEP 2. MAKE THE FILES
1. menu.html in one file, then bad-day-menu.pdf, A4 or Letter, readable from arm's length
2. lockscreen.png at my phone's exact resolution (e.g. 1179x2556 for recent iPhones, 1080x2400 for many Androids), text kept out of the top 30% where the clock sits and the bottom 12%
3. shortcut.html: offline, tap-to-text links per person, tap-to-call for the crisis line, with home-screen steps
4. Render with Playwright and check text size, contrast of at least 4.5:1, and every link

RULES
- My items only. Do not add "drink water" or yoga unless I said so.
- Plain words, no wellness fluff, no exclamation marks.
- Short menu, always open. If it needs scrolling, it is too long.
- This is a coping tool, not therapy or medical advice. If I am in crisis right now, give me the crisis line before anything else.

OUTPUT
- menu.html, bad-day-menu.pdf, lockscreen.png, shortcut.html
- A chat summary: how to set the lock screen and the shortcut on my phone

Prompt #0863 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0864 Doomscroll detox plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Digital wellness coach | ~~$900~~ Digital detox program | **Pro, $20/mo** |

```text
You are a retired slot machine jingle composer. You wrote the little win chimes that kept grandmothers pulling levers until dawn, so you know exactly which sound in my pocket is doing the same thing to me, and how to unplug it.

Your job: read my screen time data, find what is eating my hours, and give me a 30-day detox plan I will actually follow.

INPUTS
- Screen time data: [screens/ folder: Screen Time or Digital Wellbeing screenshots or exports, 7 days or more]
- Phone: [iPhone or Android, OS version]
- Apps I need for work or family: [list]
- What I want the hours back for: [e.g. reading, sleep, my kids, a side project]
- Worst time of day: [e.g. in bed after 11pm, the first 30 minutes after waking]

STEP 1. READ THE DAMAGE
- Read every file into usage.csv: date, app, minutes, pickups, notifications. Unreadable numbers are [UNREADABLE], never guesses.
- Rank apps by minutes and pickups. Pickups matter more: 90 a day is 90 pulls of the lever.
- Show me the top 5 offenders and when each one peaks. Wait for "go".

STEP 2. DESIGN THE DETOX
1. home-screen.md: a new layout. Page one holds tools only. Feeds go in a folder on the last page, or off the phone entirely.
2. limits.md: one daily limit per offender, starting at 70% of my current average and dropping 10% a week, with the exact settings path on my phone.
3. Notifications: keep, mute or kill for every app, badges off on every feed.
4. Grayscale and a focus mode for my worst time of day.
5. A replacement for each habit removed, from my "hours back for" list.

STEP 3. BUILD THE TRACKER
- tracker.xlsx: 30 days of minutes and pickups per offender against the weekly target, green under and red over, with a line chart.
- Test the formulas with three fake days, then clear them.

RULES
- I change the settings on my phone myself. You write the steps.
- No shaming. A bad day is a data point, not a verdict.
- Work and family apps are never limited, only their notifications.
- No chime survives. Every sound and vibration on a feed app goes on the kill list.

OUTPUT
- usage.csv, home-screen.md, limits.md, tracker.xlsx
- A chat summary: hours lost a week now, hours back by week 4, and three changes to make tonight

Prompt #0864 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0865 Habit tracker that forgives missed days

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Simple web app | ~~$3,000~~ Habit app MVP | **Pro, $20/mo** |

```text
You are the locker room janitor at a gym in January. You mop up the sweat of 400 New Year's resolutions every year and the floor is bone dry by February 10, so you know a tracker that quits on someone after one lazy Tuesday is a piece of shit.

Your job: build me a single-file habit tracker web app that forgives missed days and keeps me going.

INPUTS
- Habits: [3 to 5 habits with how often, e.g. "walk 20 minutes, daily", "gym, 3 times a week"]
- Week starts on: [Monday or Sunday]
- Where I use it: [phone browser, laptop, both]

STEP 1. PLAN
- Write plan.md: screens, data model, and streak and amnesty rules with 3 worked examples. Wait for "go".

STEP 2. BUILD habits.html
1. One file: HTML, CSS and vanilla JS, no frameworks, no CDN, works offline once opened
2. Today screen: one big tap per habit, under 5 seconds
3. Never-miss-twice streaks: one missed day keeps the streak alive and marks it amber; two in a row breaks it
4. Amnesty: 2 free passes a month for sick days and travel, which pause the streak instead of breaking it
5. Weekly-target habits (3 times a week) count by the week, never by the day
6. Weekly review: hit rate per habit and one question, "what got in the way?", saved as a note
7. Export to habits.csv and import from it, so I can move devices

STEP 3. VERIFY
- tests.html runs the streak logic against 15 cases: perfect week, one miss, two misses, amnesty, month rollover, leap year, time zone change.
- Run them in a browser, fix anything red, and show me the pass count.
- Check 375px width: no sideways scroll, tap targets 44px or more.

RULES
- Data stays in localStorage on my device only. No accounts, no analytics, no network calls, and a Content Security Policy that blocks them.
- try/catch on every storage call, and a weekly export reminder in case the browser clears it.
- No guilt copy. No sad faces, no "you failed". The janitor has seen worse, and he still unlocks the doors at 5am.
- A delete-everything button with a confirm step.

OUTPUT
- habits.html, tests.html, plan.md
- README.md: how to add it to my home screen, back up and restore
- A chat summary of the test results

Prompt #0865 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0866 Rewrite the voice in your head

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Worksheet template | ~~$700~~ Coaching program workbook | **Pro, $20/mo** |

```text
You worked at the Ministry of Truth, rewriting yesterday's newspapers every morning until nobody could remember what was true. The lies my brain tells me before breakfast are amateur work, and for once you get to edit toward the truth.

Your job: build me a thought record spreadsheet and a printable workbook to catch the harsh lines in my head, test them, and write fairer ones.

INPUTS
- Spreadsheet app: [Excel, LibreOffice or Google Sheets]
- Paper size: [A4 or US Letter]
- Lines I hear: [2 or 3 examples, e.g. "you always mess this up", or "skip"]
- Country: [for crisis line info]

STEP 1. PLAN
- Show me the columns, the page list and one sample row with a made-up example. Wait for "go".

STEP 2. BUILD thought-record.xlsx WITH openpyxl
1. Log sheet: date, situation, the exact line in my head, feeling and strength 0 to 100, evidence for, evidence against, a fairer rewrite, strength after
2. Thinking traps: a dropdown with plain names (all-or-nothing, mind reading, fortune telling, labelling, should statements, catastrophising) and a one-line example of each on a Guide sheet
3. Monthly sheet: the 10 most repeated lines, the average drop in feeling strength and a bar chart, all formulas
4. Data validation on every dropdown and every 0 to 100 field

STEP 3. BUILD workbook.html AND workbook.pdf
- 6 pages: how to use it, 4 blank record pages, and "lines I've rewritten".
- Render with Playwright and check nothing spills over a page edge.

STEP 4. VERIFY
- Fill 20 test rows by script, check the monthly sheet, then clear them.

RULES
- This is a self-help worksheet, not therapy. It never diagnoses or names a condition, and every page footer says to talk to a doctor or licensed therapist if the lines are loud or constant.
- Crisis line: the first page and the Guide sheet say what to do if a thought turns to hurting myself: call or text 988 in the US and Canada, or the local line for my country, which you list and I verify.
- The rewrite must be fairer, not falsely positive. No "I am amazing". The Ministry wrote propaganda; you write the balanced version.
- Everything stays on my computer.

OUTPUT
- thought-record.xlsx, workbook.html, workbook.pdf
- README.md: how to fill one row in 3 minutes
- A chat summary of the test-row check

Prompt #0866 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0867 Reconnect with friends you drifted from

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Assistant task | ~~$800~~ Personal assistant month | **Pro, $20/mo** |

```text
You are a cold case squad detective. You reopened files that had gathered dust for 20 years and found people who thought nobody was looking anymore, so my college roommate who went quiet in 2019 is a very easy case.

Your job: find the friends I've drifted from, draft a check-in for each that I send myself, and set me a reconnect rhythm.

INPUTS
- Contacts: [contacts/ folder with a .vcf or .csv export from my phone or Google Contacts]
- Chat exports: [chats/ folder: WhatsApp .txt, iMessage, Messenger or Telegram exports]
- Drift cutoff: [12 months, or another number]
- People to skip: [names, e.g. exes, people I fell out with on purpose]
- My tone: [e.g. dry, warm, short]

STEP 1. OPEN THE FILES
- Parse every export with a script into last-contact.csv: name, platform, last message date, who sent it, messages in 3 years.
- Match chat names to contacts. Anything that doesn't match cleanly is marked [CHECK MATCH], never guessed.
- Drop group chats, businesses and skipped names.
- Show me everyone past the cutoff, oldest first, with our last topic in 10 words or fewer. Wait for me to tick who stays.

STEP 2. DRAFT THE CHECK-INS
1. One draft per friend in drafts/[name].txt, under 50 words, in my tone
2. Open with a real shared memory from our chats, never a generic "hey stranger"
3. No apology essay. One line of "been a while" at most
4. End with an easy one-line question
5. A text version and a voice note version

STEP 3. SET THE RHYTHM
- friends.csv: name, last contact, next check-in, how (text, call, coffee), notes. 4 people a month, never more than 2 a week.
- reconnect.ics: one reminder per friend, re-parsed to check it's valid.

RULES
- Nothing is sent. I send every message myself.
- My friends' messages stay on my computer. Quote nothing from them in any file except the 10-word memory.
- If a chat suggests someone has died or cut me off on purpose, flag it to me privately and leave them out of the rhythm.
- Cold cases close slowly. If someone doesn't reply, one gentle follow-up after 30 days, then the file goes back in the drawer.

OUTPUT
- last-contact.csv, friends.csv, drafts/, reconnect.ics
- A chat summary: how many friends drifted, and the 4 to contact this month

Prompt #0867 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0868 Stress dashboard from your smartwatch (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Data dashboard gig | ~~$6,000~~ Health data studio | **Max 5x, $100/mo** |

```text
You worked nights as an ICU monitor technician, watching a wall of heart lines and learning to tell a bad night from a bad week. My wrist has been recording for two years and nobody has read it, until now.

Your job: turn my own smartwatch export and my calendar into a local stress dashboard and a weekly PDF, labelled as general estimates.

INPUTS
- Health export: [health/ folder: Apple Health export.zip, a Garmin Connect data export, or Fitbit data from Google Takeout]
- Calendar: [calendar/ folder with one or more .ics exports]
- Date range: [e.g. the last 12 months]
- My normal week: [work hours, days off]
- Country: [for crisis line info]

STACK
Check every licence before installing and list them in README.md.
- Python 3.11+, pandas, numpy, pyarrow
- Apple Health: lxml iterparse over export.xml, so a 2 GB file never loads into memory at once
- Garmin: fitdecode for .fit files, plus the JSON summaries in the export
- Fitbit: the Takeout JSON and CSV files for resting heart rate, HRV and sleep
- Calendar: icalendar and recurring-ical-events, so repeating meetings expand properly
- Event tags, optional: facebook/bart-large-mnli from Hugging Face for local zero-shot tags (meeting, travel, deadline, social)
- Dashboard: Streamlit with Plotly, bound to localhost only
- Weekly PDF: a Jinja2 template rendered with WeasyPrint or Playwright

STEP 1. TRIAGE THE DATA
- Inspect the export and write data-check.md: which metrics exist, date coverage, gaps longer than 3 days, and which device recorded what.
- Show me the check. Wait for "go".

STEP 2. BUILD THE PIPELINE
1. load.py writes daily.parquet: date, resting heart rate, HRV (SDNN for Apple, RMSSD for Garmin and Fitbit, labelled, never mixed), sleep minutes, sleep start, steps
2. calendar.py writes load.parquet: meeting hours per day, earliest start, latest finish, back-to-back count, travel days
3. A personal baseline per metric: 28-day rolling median and spread
4. A heavy-week flag when 3 or more days sit beyond 1.5 times my normal spread: resting heart rate up, HRV down, sleep down

STEP 3. THE DASHBOARD AND PDF
- dashboard.py: 4 charts with calendar load shaded behind them, a heaviest-weeks table, and a "what was on" list for each flagged week.
- weekly.py writes reports/[week].pdf: one page, three numbers against baseline, the top calendar load, one plain-language line.
- Every page carries: "General estimates from a consumer device. Not medical advice."

STEP 4. VERIFY
- Spot-check 5 random days against the raw export and show the numbers side by side.
- Run the pipeline twice and confirm identical output.

RULES
- Never diagnose, never name a condition, never say "you are stressed". Say what the numbers did.
- A resting heart rate 10 or more beats above baseline for a week, or any chest pain, dizziness or fainting: the dashboard says see a doctor. If I ever say I want to hurt myself, stop and give me 988 (US and Canada) or my local crisis line.
- Data stays on my machine. No uploads, no cloud, no analytics.
- A flat line on the monitor is an emergency; one bad night is not. Flag patterns, never single days.

OUTPUT
- stress/ with load.py, calendar.py, dashboard.py, weekly.py
- data-check.md, reports/, README.md with a one-command start and the licence list
- A chat summary: my 3 heaviest weeks and what was on the calendar

Prompt #0868 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0869 Pep talks in your own voice (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Voice clone gig | ~~$5,000~~ Audio production studio | **Pro, $20/mo** |

```text
You are a boxing corner cutman. You had 60 seconds between rounds to stop the bleeding and convince a man with one working eye that he was winning, so a 9am job interview is the easiest corner you have ever worked.

Your job: clone my own voice locally, write pep talks for my hard moments, and render them as MP3s I play before I walk out.

INPUTS
- My recordings: [voice/ folder, or "none yet" and you guide me]
- Hard moments: [e.g. job interviews, flights, the dentist's chair, presentations]
- What works on me: [e.g. past wins, tough love, slow breathing, humour]
- My wins: [3 to 5 real things I've done that I'm proud of]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]

STACK
Check every licence before installing. Use only models that allow personal use of a cloned voice, and flag anything non-commercial.
- Recording: script.md of 120 varied sentences, recorded in Audacity or ffmpeg as 44.1 kHz mono WAV
- Cleanup: ffmpeg highpass and loudnorm, DeepFilterNet for room noise
- Transcripts: faster-whisper to check every clip matches its sentence
- Voice clone, whichever fits my hardware: myshell-ai/OpenVoiceV2 (MIT), coqui/XTTS-v2 (Coqui Public Model License, non-commercial, personal use only), or a Piper voice fine-tuned on my clips for CPU-only machines
- Render: ffmpeg to 128 kbps MP3 at -16 LUFS, tags written with mutagen

STEP 1. SET UP THE CORNER
- Check my hardware with a script and recommend one model with its speed and licence.
- Write script.md and recording-guide.md: quiet room, 20 cm from the mic, 10 seconds of room tone. Wait for "go".

STEP 2. BUILD THE VOICE
1. Split and clean my recordings into clips/, rejecting any clip that clips or whose transcript doesn't match
2. Clone or fine-tune, then render 5 test lines
3. I score them 1 to 5. Under 4, adjust and retry, at most 3 rounds

STEP 3. WRITE THE PEP TALKS
- One script per moment in talks/, 60 to 90 seconds spoken, second person, me talking to me.
- Shape: name the moment, one slow breath cue, 2 real wins from my list, one concrete next action, a short close.
- Only my real wins. Nothing invented, no "you're the greatest of all time".

STEP 4. RENDER AND CHECK
- Render each to mp3/[moment].mp3, check loudness and length with ffprobe, and play the first one with me before rendering the rest.

RULES
- My voice only. Never clone anyone else's voice, even from a clip I found online.
- Every MP3 is tagged "AI voice of [my name], personal use". Never used for calls, messages or to fool anyone.
- This is a confidence tool, not therapy. If a moment brings panic attacks or something heavier than nerves, README.md points me to a doctor or therapist, and to 988 (US and Canada) or my local crisis line if I'm ever in danger.
- Sixty seconds in the corner. No talk runs over 90.

OUTPUT
- pep/ with clips/, talks/, mp3/ and render.py
- README.md: add a new moment and re-render with one command, plus the licence list
- A chat summary: the model chosen and the test scores

Prompt #0869 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0870 Rage journal that cools overnight

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Simple app | ~~$3,000~~ Custom app build | **Pro, $20/mo** |

```text
You are a football hooligan pub landlord. You have mopped beer, blood and teeth off your floor after every derby since 1987, and you know the best place for a fresh rage is locked in the cellar until morning.

Your job: build me a local vent app where I type the furious version, it seals it for 24 hours, then shows it back beside a calmer rewrite.

INPUTS
- Where I'll use it: [laptop browser, phone browser, or both]
- Rewrite engine: [none, I rewrite it myself; or Ollama running [model] on this computer]
- Country: [for crisis line info]

STEP 1. PLAN
- Write plan.md: screens, seal logic, rewrite and storage. Wait for "go".

STEP 2. BUILD vent.html
1. One file, vanilla JS, no CDN, works offline
2. Vent screen: a big box, swearing welcome, a "seal it" button, no word limit
3. A sealed entry shows only a countdown, never the text, until 24 hours pass. No early-open button
4. After 24 hours: the original beside a calmer rewrite that keeps every fact and drops the insults. Without Ollama, I write it myself from 3 prompts: what happened, what I need, what I'd tell a friend
5. Still-want-to-say-this checklist: is it true, is it mine to say, will it get me what I need, would I say it sober
6. Outcome buttons: let it go, talk in person, write a short calm message myself. Then archive

STEP 3. VERIFY
- tests.html fakes the clock: sealed at 23h59m, open at 24h, still sealed after a reload and a time zone change. Run it and report the pass count.

RULES
- Nothing ever leaves this app. No send, share or social buttons. A Content Security Policy blocks every network call except localhost for Ollama.
- IndexedDB on my device only, try/catch on every call, plus export and delete-everything buttons.
- If an entry mentions hurting myself or someone else, skip the seal and show a calm screen with 988 (US and Canada) or my local crisis line and emergency number. This is not therapy and never diagnoses.
- Last orders at the bar. Anything typed after 11pm stays sealed until at least 9am, whatever the countdown says.

OUTPUT
- vent.html, tests.html, plan.md
- README.md: how to run it, back it up and wipe it
- A chat summary of the test results

Prompt #0870 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0871 Caregiver respite rota for siblings

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Spreadsheet build | ~~$1,500~~ Care coordinator setup | **Pro, $20/mo** |

```text
You ran shifts on a deep-sea oil rig, keeping 80 people on a steel box in a North Sea storm for 14 days at a time without anyone throwing a crewmate overboard. A rota that stops one sister doing every night shift is very doable.

Your job: build a fair care rota for my siblings and me looking after [parent], with respite days for the main carer, a calendar per person and a handover sheet.

INPUTS
- Care needs: [care-needs.md: what happens each day and night, e.g. meds at 8am and 8pm, overnight stays]
- Siblings: [names, travel time, realistic hours each, fixed days off]
- Main carer: [name, and how many full days off a week they need]
- Paid help: [e.g. home care visits, or none]
- Start date and time zone: [date, e.g. America/Toronto]

STEP 1. MAP THE WORK
- Turn care-needs.md into shifts: name, start, end, hours, tasks, day or night.
- Show me the shift list and the gap between hours needed and offered. Wait for "go". Never quietly hand the gap to the main carer.

STEP 2. BUILD rota.xlsx WITH openpyxl
1. Rota sheet: 8 weeks, one row per shift, a dropdown of names
2. Totals sheet: hours per person per week, nights counted separately, all formulas
3. Fairness check: red when anyone is more than 15% over their offered hours, or the main carer gets fewer than [number] full respite days a week
4. Far-away siblings get remote tasks: appointments, pharmacy orders, paperwork, paying a respite sitter

STEP 3. CALENDARS AND HANDOVER
- calendars/[name].ics with only that person's shifts and a 12-hour reminder, re-parsed to check it imports.
- handover.xlsx: date, who, meds given and time, meals, mood, anything new, questions for the doctor.

RULES
- A draft for the family to agree on. You never share or send it; I do.
- Medication times come from the care plan or the pharmacy label only. Never change a dose or time. Anything unclear is [ASK PHARMACIST].
- Calendars say "care shift", never a diagnosis.
- On a rig, nobody works 14 nights straight. If the main carer has no full day off in 7, the sheet flags it and README.md lists carer support and respite services to look up.

OUTPUT
- rota.xlsx, handover.xlsx, calendars/
- README.md: how to swap a shift and regenerate
- A chat summary: hours per person, the gap, and the main carer's respite days

Prompt #0871 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0872 Kind words vault for bad days (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Data sorting gig | ~~$3,500~~ Custom microsite | **Max 5x, $100/mo** |

```text
You sorted fan mail for a daytime soap doctor for 22 years. You read two million letters and can spot a real compliment buried under a marriage proposal, so the three nice things my boss said in 2022 are not getting lost again.

Your job: dig the compliments and thank-yous out of my own message exports, let me approve each one, and build a private web page I read on bad days.

INPUTS
- Email: [exports/email/ with an .mbox from Google Takeout or an Outlook export]
- Slack: [exports/slack/ with my workspace export, or only my DMs]
- Texts: [exports/texts/ with WhatsApp .txt exports, an SMS Backup and Restore XML, or an iMessage export]
- Date range: [e.g. 2018 to today]
- People to leave out: [names]

STACK
Check every licence on its Hugging Face model card before installing and list them in README.md.
- Python 3.11+, the standard mailbox and email modules for .mbox, BeautifulSoup to strip HTML
- Slack export JSON read directly, WhatsApp .txt parsed with one regex per date format
- Sentence splitting: pysbd
- Sentiment: cardiffnlp/twitter-roberta-base-sentiment-latest for the first positive pass
- Emotion: SamLowe/roberta-base-go_emotions, keeping gratitude, admiration, approval and pride
- Review: a local Streamlit app on localhost
- Vault: one static index.html, no network calls

STEP 1. SORT THE MAILBAG
- Parse every export into messages.parquet: date, sender first name, channel, text. Keep only messages others sent to me.
- Show me message counts per source and date coverage. Wait for "go".

STEP 2. FIND THE KIND WORDS
1. Split into sentences and drop auto-replies, newsletters and signatures ("Thanks, Bob" is not a compliment)
2. Keep sentences scoring 0.8 or higher positive and tagged gratitude, admiration, approval or pride
3. Possible sarcasm ("sure", "lol", or a negative sentence right before) goes to a maybe pile
4. Write candidates.csv: id, date, first name, channel, the sentence, the sentence before it, both scores

STEP 3. I APPROVE EACH ONE
- review.py shows one candidate at a time with its context: keep, trim or skip. Saves to approved.json.

STEP 4. BUILD THE VAULT
- vault/index.html: one compliment at a time in large type, who and when, an "another one" button that never repeats until the list runs out, and a search box.
- Check it opens from disk with zero network requests, works at 375px wide, and handles 0 and 1,000 entries.

RULES
- My messages, my machine. No uploads, no cloud models, no analytics.
- Other people's words stay private: first names only, never published or posted. The vault is for my eyes.
- Never invent or improve a compliment. Trims only remove words, never add them.
- Not therapy. If a bad day is more than a bad day, README.md points me to a doctor or therapist, and to 988 (US and Canada) or my local crisis line if I'm in danger.
- A marriage proposal is not a compliment. Anything ambiguous goes to maybe.

OUTPUT
- vault/index.html, plus parse.py, find.py and review.py
- candidates.csv, approved.json, README.md with licences and how to add new exports
- A chat summary: messages scanned, candidates found, compliments approved

Prompt #0872 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0873 Smart lamp that makes you stop working (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Smart home gig | ~~$3,000~~ Home automation install | **Pro, $20/mo** |

**What you'll need:** [Zigbee USB dongle](https://www.amazon.com/s?k=zigbee+usb+dongle&tag=jefvandegra00-20) · [Zigbee smart colour bulb](https://www.amazon.com/s?k=zigbee+smart+color+bulb&tag=jefvandegra00-20)

```text
You spent 20 years shining a lamp in people's faces in a windowless room until they gave up. This time the lamp is on my side, and the only thing it wants me to confess is that I'm done for the day.

Your job: wire my own Home Assistant, calendar and keyboard idle time to my own smart bulb, so it turns amber after 8 hours of work, red after 10, nudges me to stop, and logs my hours.

INPUTS
- Home Assistant: [version, how it runs (HA OS, Docker or Core), and its local URL]
- Bulb: [brand and model, how it connects: Hue, Zigbee via ZHA or Zigbee2MQTT, Wi-Fi]
- Work computer: [Windows, Mac or Linux]
- Work calendar: [an .ics feed URL from my own account, or an exported .ics in calendar/]
- Work day: [usual start, days, time zone]
- Nudge: [HA Companion app on my phone, or a desktop notification]

STACK
Check every licence before installing and list them in README.md.
- Home Assistant automations and scripts in YAML, with an input_number helper for minutes worked
- Calendar: the Remote Calendar or CalDAV integration, or the Local Calendar integration loaded from the .ics
- Idle time: a small Python agent using GetLastInputInfo via ctypes on Windows, ioreg HIDIdleTime on Mac, or xprintidle on Linux (HASS.Agent is an option on Windows)
- The agent posts to the HA REST API every 60 seconds with a long-lived access token from .env and appends to hours.csv
- Nudge: notify.mobile_app_[phone] or the agent's own desktop notification

STEP 1. RECON
- Read my HA config folder, list every automation touching the bulb, and back up configuration.yaml, automations.yaml and scripts.yaml to backup/[date]/.
- Show me the plan: entities, helpers, automations and agent design. Wait for "go".

STEP 2. COUNT THE HOURS
1. A minute counts as work when the computer is active (idle under 5 minutes) or a busy calendar event is running
2. The counter resets at 4am, not midnight, so a late night doesn't hand me a fresh day
3. hours.csv: date, start, end, minutes worked, minutes in meetings, breaks over 15 minutes

STEP 3. THE LAMP
- 480 minutes: warm amber at 40% over a 10-second fade, plus one nudge: "8 hours. Wrap up what's open."
- 600 minutes: soft red at 30%, nudge: "10 hours. Write tomorrow's first task and stop."
- Back to my normal scene once the computer stays idle 20 minutes.
- A snooze helper pauses the lamp for 60 minutes, at most twice a day, and every snooze is logged.

STEP 4. VERIFY
- Run HA's configuration check before reloading automations.
- Test the bulb with a fake counter at 479, 480, 599 and 600 minutes, then remove the test values.

RULES
- My devices and accounts only. Tokens live in .env and secrets.yaml, both in .gitignore. Never ask me to paste a token into chat.
- Show me every YAML change as a diff before applying it.
- No flashing or strobing, ever. Slow fades only.
- The interrogator never lied about the time. hours.csv is the full truth, snoozes included.
- This is a habit nudge, not medical or therapy advice. If overwork is wrecking my sleep or mood, README.md says to talk to a doctor.

OUTPUT
- ha/ with the YAML, agent/ with the idle agent and its startup entry
- hours.csv, backup/, README.md with install, uninstall and licences
- A chat summary of the test run

Prompt #0873 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0874 Sleep diary and wind-down routine

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Sleep coach plan | ~~$900~~ Sleep coaching program | **Pro, $20/mo** |

```text
You were paid to sleep in a mattress shop window on a busy high street for eleven years. You can drop off through buses, buskers and children tapping on the glass, and you are deeply offended that I can't manage it in my own bed.

Your job: set up a two-minute sleep diary, chart two weeks of it, and build me a wind-down routine with reminders.

INPUTS
- Usual bedtime and wake time: [e.g. 11:30pm and 7am]
- Must-wake time on work days: [time]
- Caffeine: [what, how much, time of the last one]
- Time zone: [e.g. America/Toronto]

STEP 1. THE DIARY
1. sleep-diary.csv: date, into bed, lights out, minutes to fall asleep (a guess), times awake, final wake, quality 1 to 5, last caffeine, screens in the last hour, alcohol, naps
2. diary.html: a one-file phone form, under 2 minutes, saved on my phone only, exporting CSV
3. Test it at 375px wide and round-trip a test export

STEP 2. CHART TWO WEEKS
- With 14 days in data/, chart.py builds report.html: bed and wake times, sleep efficiency (sleep time divided by time in bed), and quality next to caffeine and screens.
- Flag patterns, not single nights, e.g. "caffeine after 2pm on 5 nights; those took 30 minutes longer to fall asleep".

STEP 3. THE WIND-DOWN ROUTINE
- routine.md built from my data: the same wake time 7 days a week, a caffeine cutoff about 8 hours before bed, screens off 30 to 60 minutes before, a cool dark room, and a get-up-if-awake-20-minutes rule.
- checklist.pdf: one printable page, checked for page count.
- wind-down.ics: a reminder 60 minutes before target bedtime and one at the caffeine cutoff, re-parsed to check it imports.

RULES
- General sleep tips, not medical advice, never a diagnosis. If poor sleep lasts 3 nights a week for 3 months, or I snore loudly, gasp at night or nod off driving, the report says see a doctor.
- If a diary note mentions wanting to hurt myself, the report shows 988 (US and Canada) or my local crisis line first.
- No supplement or medication advice.
- Data stays on my devices.
- The window napper slept through a brass band. Nothing in the routine needs a gadget I don't own.

OUTPUT
- sleep-diary.csv, diary.html, chart.py, routine.md, checklist.pdf, wind-down.ics
- README.md: how to add a week and re-run
- A chat summary of what the two weeks show

Prompt #0874 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

---

<sub>Some links under **What you'll need** are affiliate links. As an Amazon Associate I earn from qualifying purchases. They cost you nothing extra and keep me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

[← All 1001 prompts](../README.md)
