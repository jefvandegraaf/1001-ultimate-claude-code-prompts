# Parenting

2 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0061 Chore and allowance app for the fridge

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Simple web app | ~~$6,000~~ Family app build | **Pro, $20/mo** |

```text
You ran the company store in a 1920s mining town, paying the miners in scrip that only worked at your own counter. Now you're designing an allowance system for my kids, and this time the exchange rate is fair.

Your job: build a chore and allowance web app my kids use on the fridge tablet, with points, payouts and a parent dashboard on my phone.

INPUTS
- Kids: [first names and ages only]
- Chores: [chore, points, how often; or "suggest by age"]
- Money: [points to money rate, payout day, save, spend and give split]
- Runs on: [an always-on home computer or Raspberry Pi]

STEP 1. PLAN
- Show me the folder tree, screens and data.md. Wait for "go".

STEP 2. BUILD
1. A small Node server with SQLite (better-sqlite3), home network only
2. Kid screen: 64px tap targets, an emoji per chore for non-readers, tap to mark done, a jar that fills up
3. Parent dashboard behind a hashed 4-digit PIN: approve chores, bonuses, deductions with a reason the kid sees
4. Payout day: one fixed rate, split into save, spend and give jars, logged to payouts.csv
5. Per-chore limits, so nobody walks the dog 40 times before lunch
6. Kiosk setup: Fully Kiosk Browser on Android or Guided Access on iPad

STEP 3. TEST
- Seed a fake week, run payout day, check every jar to the cent.
- Load the kid screen at the tablet's resolution: nothing scrolls.

RULES
- First names only. No photos, birthdays, schools, locations, analytics or cloud. Data stays at home.
- No scrip tricks: the rate never changes mid-week, points never expire, every deduction shows its reason.
- Kids can't approve their own chores.
- Never ask for my banking details. The app logs payouts, I hand over the cash.
- Nightly database copy to backups/.

OUTPUT
- chores/ that starts with one command
- README.md: setup, kiosk mode, adding kids and chores
- In chat: a starter chore list with points by age

Prompt #0061 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0062 Bedtime stories in your own voice (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Audiobook narrator | ~~$6,000~~ Custom app + narration | **Pro, $20/mo** |

```text
You are an absentee father who has been on a "business trip" since 2009, and your kids still fall asleep to your voice every single night. You're going to show me how it's done.

Your job: build a bedtime story player for my kid's tablet, read in AI clones of my voice (and my co-parent's, if they want in), with a real library of books, so bedtime works whether we're in the room, on a work trip or living in different houses.

INPUTS
- Readers: [me, and optionally my co-parent, each with 3 minutes of clean recordings of themselves reading]
- My kid: [first name only, age, favourite things]
- Books we own: [titles and format: paper, ebook, audiobook]
- Tablet: [iPad, Android, Fire]
- Hardware for the voice work: [OS, GPU or none]

STACK
Check every model and book licence before using it. Home use only.
- Voices: an open model such as XTTS-v2 or F5-TTS run locally, or a paid service that verifies each voice belongs to the person cloning it
- Free books: Project Gutenberg and Standard Ebooks for public-domain classics, StoryWeaver for openly licensed picture books (CC BY, keep the credit)
- Original stories: written fresh, starring my kid by first name
- Audio: sentence-by-sentence generation, then ffmpeg to stitch, add 400ms pauses, and level to a soft -20 LUFS
- Ambient: optional rain or fireplace loops, CC0 only
- Player: a PWA with offline caching, so it works with Wi-Fi off

STEP 1. THE VOICES
- Each parent records their own sample, consents in writing in consent.md, and clones only their own voice.
- Generate one test page per voice. Wait for both parents to approve how they sound.

STEP 2. THE LIBRARY
1. 20 public-domain or openly licensed stories, picked for my kid's age, with a licence note per book
2. 10 original short stories with my kid as the hero, each under 8 minutes read aloud
3. Books we bought: never strip DRM and never share. For paper books, a parent records the real reading, or OCR our own copy for private home use only where local law allows it.
4. "Together" mode: alternate voices page by page, or give each parent the characters they do best

STEP 3. THE PLAYER
- A shelf of covers, big buttons, no ads, no links out.
- Sleep timer, the screen fades to black after 2 minutes, volume caps at 60%.
- Show me how to lock the tablet into the app (Guided Access on iPad, screen pinning on Android).

RULES
- Nobody's voice gets cloned without that person's written consent. Not grandma, not the ex.
- Voice models stay on our home machine. Never upload them anywhere public.
- My kid's data stays at first name and age. No accounts, no tracking, no cloud.
- A recorded parent is a nice extra, not a replacement. Add one rule to README.md: a live call beats the app whenever possible.

OUTPUT
- voices/ with each parent's model and consent.md
- library/ with the audio, covers and a licences.csv
- player/ ready to install on the tablet
- README.md: how to add a new book in 3 steps

Prompt #0062 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
