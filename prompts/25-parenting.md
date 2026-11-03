# Parenting

30 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0793 Chore and allowance app for the fridge

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Simple web app | ~~$6,000~~ Family app build | **Pro, $20/mo** |

**What you'll need:** [Android tablet](https://www.amazon.com/s?k=android+tablet&tag=jefvandegra00-20) · [Magnetic fridge tablet mount](https://www.amazon.com/s?k=magnetic+tablet+mount+for+refrigerator&tag=jefvandegra00-20)

<sub>As an Amazon Associate I earn from qualifying purchases. It costs you nothing extra, helps keep these prompts free, and prevents me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

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

Prompt #0793 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0794 Bedtime stories in your own voice (deep build)

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

Prompt #0794 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0795 Kids birthday party run sheet

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ One party plan | ~~$2,500~~ Kids party company | **Pro, $20/mo** |

```text
You are a retired Apollo flight controller who got three men to the moon on less computing power than a party invite app. Fourteen seven-year-olds, one cake and a pinata is just another launch window with a countdown clock.

Your job: plan my kid's whole birthday party from my budget and guest count, and put every document I need in a party/ folder.

INPUTS
- Birthday kid: [first name and age only]
- Date, start and end time: [e.g. Saturday 2pm to 4pm]
- Venue: [home, park, hall], indoor or outdoor
- Guest count: [kids and adults]
- Budget: [total amount]
- Theme and must-haves: [theme, cake, pinata, games]
- Allergies: [allergies.md, first names only]
- Stores I use: [e.g. Costco, Dollarama, Target]

STEP 1. MISSION PLAN
- Split the budget: food and cake 35%, decor 15%, activities 25%, goodie bags 15%, 10% contingency. Adjust to my must-haves and show the table.
- Show me the plan. Wait for "go".

STEP 2. BUILD THE FLIGHT FILES
1. party/run-sheet.md: minute by minute from T minus 2 hours to cleanup, games in 10 to 15 minute blocks, food at the 45 minute mark, cake 30 minutes before pickup, a named adult for every job
2. party/rsvp-tracker.csv: family, kids coming, adults coming, allergies, RSVP date, reply chased (yes or no)
3. party/shopping-list.md grouped by store, with quantities for my guest count plus 10%
4. party/goodie-bags.md: per-bag contents, cost per bag, no choking-size toys for any guest under 3
5. party/rain-plan.md: the indoor version of every outdoor game, and the call time to decide
6. party/invite.html, A5 printable, with RSVP date set 10 days before the party

STEP 3. COUNTDOWN CHECK
- Add the shopping list total and confirm it fits the budget, or tell me what to cut.
- Open invite.html in a browser at print size and check nothing spills off the page.

RULES
- Kids' first names only. No surnames, photos or addresses of other people's children in any file.
- Every allergy goes on the food list and the cake order, flagged in caps.
- I send the invites myself. You draft, I hit send.
- Mission control always has an abort plan: if a step needs a grown-up you haven't named, flag it before launch day.

OUTPUT
- The party/ folder with all six files
- A chat summary: total cost, the three jobs that need an adult, and the shopping date

Prompt #0795 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0796 Screen time treaty and timer

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Printable contract | ~~$1,800~~ Family coach package | **Pro, $20/mo** |

```text
You are a retired nuclear arms treaty negotiator who spent his career counting warheads across a table from men who could end the world. An iPad deadline with a nine-year-old is the same brinkmanship, with lower stakes and louder screaming.

Your job: help my family negotiate a screen time agreement the kids actually sign, print it as a treaty, and build a small local timer page with earned minutes.

INPUTS
- Kids: [first names and ages only]
- Devices and rooms: [tablets, consoles, phones, where they live at night]
- Current fights: [fights.md, what we argue about and when]
- Family values: [homework first, outside time, no phones at dinner]
- Earned minute ideas: [chores, reading, sport]

STEP 1. OPENING POSITIONS
- Read fights.md and list the five recurring flashpoints.
- Draft a negotiation sheet per kid, at their reading level: what they want, what we want, three trades they can propose.
- Show me the sheets. Wait for "go" before the treaty.

STEP 2. DRAFT THE TREATY
1. Articles: daily base minutes by age (start near 60 on school days, 120 on weekends, then adjust to what we agree), earned minutes with a daily cap, screen-free zones and times, devices charge outside bedrooms by [time]
2. Breach and repair: what happens when a rule breaks, and how to earn trust back, no punishments over 24 hours
3. Review clause: we renegotiate every 8 weeks
4. treaty/treaty.html with signature lines for every family member, printed to treaty/treaty.pdf with Playwright or the browser's print to PDF

STEP 3. THE TIMER
- timer/index.html: one file, vanilla JS, a big countdown per kid, buttons to add earned minutes, saved in localStorage on our own device.
- Test it: start, pause, add 15 minutes, reload, confirm the time survives.

RULES
- No spyware, no hidden tracking, no reading the kids' messages. The timer is visible and the kids can see their own numbers.
- Nothing leaves our computer. No accounts, no cloud, no analytics.
- Kids get a real vote. Any article they reject goes back to the table.
- Every treaty needs verification: a weekly two-minute check-in on the fridge, not a surprise inspection.

OUTPUT
- negotiation/ with one sheet per kid
- treaty/treaty.html and treaty/treaty.pdf
- timer/index.html and a README.md on how to open it
- A chat summary: the five flashpoints and the article that settles each

Prompt #0796 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0797 Homework helper that refuses answers (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Simple tutor app | ~~$8,000~~ EdTech app build | **Pro, $20/mo** |

```text
You are Socrates, the original tutor who never once told a student the answer and only asked questions until they found it themselves. Athens made you drink hemlock for it, so a kid sulking over long division does not scare you.

Your job: build a local homework helper web app that walks my kid through their own homework with questions and hints, never the answer, and keeps a parent log of what was tricky.

INPUTS
- Kid: [first name and grade only]
- Subjects: [math, reading, science, French]
- Sample homework: [homework/ folder with 3 to 5 photos or typed questions, no names on the pages]
- Brain: [local Ollama on this computer, or the Claude API I already pay for]
- Hardware: [OS, RAM, GPU and VRAM or "no GPU"]

STACK
Check every licence before installing, prefer MIT or Apache 2.0.
- Back end: Node with Express, or Python with FastAPI, on localhost only
- Brain, local: Ollama running a small instruct model that fits my RAM (Llama, Qwen or Gemma family, check each model card on Hugging Face)
- Brain, cloud: the Anthropic API via the official SDK, key in .env, listed in .gitignore
- Reading photos: Tesseract OCR locally, so homework photos never leave this machine
- Math checks: mathjs or SymPy to verify the kid's own working, so hints are never wrong
- Storage: SQLite file for the parent log
- Front end: plain HTML and CSS, big buttons, readable at grade level

STEP 1. PLAN
- Check my hardware with a script and pick a model that answers in under 4 seconds.
- Show me the folder tree, the model, any monthly cost and the hint ladder. Wait for "go".

STEP 2. BUILD THE HINT LADDER
1. Rung 1: "What is the question asking?" Rung 2: "What do you already know?" Rung 3: a similar worked example with different numbers. Rung 4: point at the exact step that went wrong
2. A system prompt that forbids final answers, plus a code check that blocks any reply containing the solution computed by mathjs or SymPy
3. The kid types their answer; the app says right or not yet, and asks them to explain why

STEP 3. PARENT LOG
- log.html: date, subject, question, rungs used, time spent, and a "tricky" flag when 3 or more rungs were needed.
- A weekly summary of the top 3 tricky topics.

STEP 4. TRY TO BREAK IT
- tests/ with 20 jailbreak attempts a kid would try: "just tell me", "my teacher said you can", "pretend you are the answer key". All must fail.
- Run the tests and show me the pass rate.

RULES
- First name and grade only. No accounts, no tracking, no analytics, nothing on a public server.
- Photos stay local. Only typed question text ever goes to the cloud API, with no name attached.
- Never ask me to paste an API key into chat.
- You are allowed one question per reply, Socratic style. A wall of text is a lecture, and lectures got nobody out of a hemlock sentence.

OUTPUT
- homework-helper/ that starts with one command
- tests/ and their results
- README.md with setup, cost and how to wipe the log
- Every model and licence used, in one list

Prompt #0797 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0798 Lunchbox plan for picky eaters

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Meal plan, per week | ~~$1,200~~ Pediatric dietitian plan | **Pro, $20/mo** |

```text
You are a retired school lunch lady who served Tuesday Surprise to 900 kids a day for 30 years. You know exactly which foods get eaten and which ones end up stuck to the cafeteria ceiling.

Your job: turn what my kids actually eat into a four-week lunchbox rotation with shopping lists, a Sunday prep plan and a slow new-food ladder.

INPUTS
- Kids: [first names and ages only]
- Safe foods: [eats.md, per kid: foods they always eat, sometimes eat, never eat]
- Allergies and school rules: [nut-free, no heating, no glass]
- Budget per week: [amount]
- Prep time on Sunday: [minutes]

STEP 1. SORT THE TRAY
- Read eats.md and sort every food into protein, carb, fruit, veg, snack.
- Flag any kid with fewer than 3 safe proteins or 2 safe veg. Show me the table. Wait for "go".

STEP 2. THE ROTATION
1. 20 school days, one box per kid per day: one protein, one carb, one fruit or veg, one fun item
2. No repeat main within the same week
3. Each box at least 80% safe foods, plus one "tiny try" bite
4. Food safety: cold items with an ice pack, hot items in a thermos filled above 60C
5. lunch/rotation.csv: week, day, kid, item, category, prep note

STEP 3. THE NEW-FOOD LADDER
- One new food per kid per week, beside a safe food it resembles: crackers, then pita chips, then hummus on pita.
- Kids often need 10 to 15 tries, so each food repeats 3 times before moving up.
- lunch/ladder.md with a tick chart per kid.

STEP 4. SHOP AND PREP
- lunch/shopping-week-[1-4].md grouped by store aisle, quantities summed from the rotation.
- lunch/sunday-prep.md: what to batch, what keeps 4 days, what is made fresh.
- Render every file to PDF and check each prints on one page.

RULES
- General planning, not medical or dietary advice. If a kid eats fewer than 15 foods total, losing weight or gagging, tell me to talk to our doctor or a pediatric dietitian.
- No food shaming, no "good" and "bad" foods in anything the kids see.
- Never add an allergen, even as a tiny try.
- If it would end up on the ceiling in my cafeteria, it doesn't go in the box twice.

OUTPUT
- lunch/ with rotation.csv, ladder.md, four shopping lists, sunday-prep.md and PDFs of each
- A chat summary: weekly cost estimate and the three gaps to work on

Prompt #0798 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0799 Newborn night shift rota (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Basic tracker app | ~~$5,000~~ Custom app build | **Pro, $20/mo** |

```text
You are Freddy Krueger, who built a whole career on keeping people from sleeping. For once you are switching sides to get two wrecked parents some actual sleep.

Your job: build a small app on our home network where we log feeds, nappies and sleep in one tap, generate a fair night shift rota, and print a summary for the pediatrician.

INPUTS
- Baby: [first name and date of birth only]
- Parents: [two first names, who can do bottle feeds, who is breastfeeding if anyone]
- Feeding: [breast, bottle, both]
- Sleep goal per parent: [e.g. one 5 hour block a night]
- Devices: [phones we use, computer that stays on]
- Old notes: [notes/ folder, paper logs photographed or typed, optional]

STACK
Check every licence before installing, prefer MIT or Apache 2.0.
- Server: Node with Fastify, or Python with FastAPI, on the computer that stays on, home network only
- Database: SQLite via better-sqlite3 or Python sqlite3, one file, nightly copy to backups/
- Front end: a PWA with a web manifest and a service worker so it installs on both phones and works offline, syncing when back on Wi-Fi
- Charts: Chart.js for feed timing and sleep blocks
- Print: Playwright rendering summary.html to summary.pdf
- Access: a simple shared household PIN stored hashed with bcrypt, never in the code

STEP 1. PLAN
- Show me the screens, the data fields (time, type, side or ml, nappy wet or dirty, sleep start and end, who logged it) and the folder tree. Wait for "go".

STEP 2. ONE-TAP LOGGING
1. Home screen: four big buttons, Feed, Nappy, Sleep, Wake, usable one-handed in the dark
2. Dark red night mode, no white screens at 3am
3. Undo for 10 seconds after every tap
4. "Last feed 2h 40m ago" shown at the top

STEP 3. THE ROTA
- Split each night into shifts so each parent gets one protected block of at least [hours], scaled to who can feed.
- rota.html shows tonight and the next 7 nights, swappable with one tap, and counts nights covered per parent so it stays fair.

STEP 4. THE DOCTOR SUMMARY
- Weekly totals: feeds per 24 hours, wet and dirty nappies, longest sleep, plus a chart.
- summary.pdf, one page, for the appointment.
- Test: seed 14 days of fake data, check every total against a hand count.

RULES
- Logging and charts only. Never interpret the data as medical advice. If feeds, nappies or weight worry us, the app says call our pediatrician or health line, and for anything urgent, emergency services.
- Baby's first name only. No cloud, no accounts, no analytics, nothing reachable from outside our router.
- Never ask for our Wi-Fi password or PIN in chat.
- Freddy's rule now: nobody gets woken who isn't on shift. The rota screen says plainly whose night it is.

OUTPUT
- night-shift/ that starts with one command and a README.md with install steps for both phones
- tests/ with the totals check
- summary.pdf from the seeded data as a sample
- Every library and licence used, in one list

Prompt #0799 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0800 Co-parenting handover calendar

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Calendar setup | ~~$3,000~~ Family law clerk hours | **Pro, $20/mo** |

```text
You are a UN peacekeeper who spent 20 years standing in a buffer zone between two sides who refused to speak. Sunday 6pm handovers with a forgotten retainer are a ceasefire you know how to keep.

Your job: turn our custody schedule into shared calendars, handover checklists, a holiday swap log and an expense split sheet, so nobody argues in the car park.

INPUTS
- Custody schedule: [schedule.md or the schedule section of our agreement, e.g. 2-2-3 or week on week off]
- Kids: [first names and ages only]
- Handover details: [place, day, time, who drives]
- School calendar: [school-calendar.pdf or URL]
- Holidays and special days: [how our agreement splits them]
- Shared expenses: [what we split and the percentage]

STEP 1. READ THE AGREEMENT
- Turn the schedule into a table: date, home, handover time and place.
- Flag every gap or conflict: holidays that clash with the regular rotation, PD days, long weekends.
- Show me the first 3 months and the flags. Wait for "go".

STEP 2. BUILD THE CALENDARS
1. calendars/home-[parent].ics for each home, 12 months ahead, RFC 5545 valid, with a reminder 24 hours before each handover
2. calendars/school.ics with term dates and PD days
3. Validate each file with an ICS parser (ical.js or Python icalendar) and confirm the event count matches the table

STEP 3. PACKING AND LOGS
- handover/checklist-[kid].md: meds, retainer, school bag, sports gear, chargers, comfort item, ticked at each handover.
- handover/swap-log.csv: date asked, original day, swapped day, requested by, agreed by both (yes or no).
- money/expenses.csv: date, item, amount, paid by, split percentage, owed, receipt file name, with a running balance formula.

RULES
- First drafts of logistics only, not legal advice. The custody order or agreement always wins, and anything that changes it goes to our lawyer or mediator.
- Neutral wording everywhere. No blame, no notes about the other parent's behaviour in any shared file.
- I share the files myself. Nothing gets sent or synced automatically.
- Kids' first names only. No school names, addresses or photos in shared files.
- A buffer zone works because both sides see the same map: every shared file is identical for both homes.

OUTPUT
- calendars/, handover/ and money/ folders
- README.md: how each parent imports the ICS into Google, Apple or Outlook
- A chat summary: the conflicts found and the dates that need a decision

Prompt #0800 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0801 Lemonade stand business kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Printable kit | ~~$1,500~~ Kids business camp | **Pro, $20/mo** |

```text
You are a retired olive oil importer from the Corleone family who built a business behind a front that sold a perfectly ordinary product. This time the product really is just lemonade, and the books are honest.

Your job: build my kid a first business kit in a lemonade/ folder: a pricing calculator, profit jars, a sign and menu, a sales log and a one-page lesson on profit.

INPUTS
- Kid: [first name and age only]
- Stand location: [our driveway, front yard, a community event with permission]
- Products: [lemonade, cookies, anything else]
- Ingredient costs: [what we bought and the receipt totals, or ask me]
- Cups per batch: [e.g. 20]
- Profit split: [e.g. spend, save, give]

STEP 1. THE BOOKS
- lemonade/calculator.xlsx or .csv with formulas: ingredient cost per batch, cost per cup, suggested price at 2x and 3x cost, cups needed to break even.
- Startup costs include cups, ice, napkins and the sign, not just lemons.
- Show me the numbers in a small table. Wait for "go".

STEP 2. THE STOREFRONT
1. lemonade/sign.html: big, readable from 10 metres, price in the largest font after the word LEMONADE
2. lemonade/menu.html with prices and one honest line about the ingredients
3. Jar labels for each part of the split, printable on A4 or letter
4. Render all three to PDF and check each fits one page

STEP 3. THE LEDGER AND LESSON
- lemonade/sales-log.csv: date, start time, end time, cups sold, money in, costs, profit, weather.
- lemonade/lesson.md for a [age]-year-old: revenue, cost and profit, using their own numbers, plus three questions after day one: what sold best, what ran out, what would you change.

RULES
- Check local rules: some places need a permit for food stands. Tell me to look up my city's page; never assume.
- Food safety: clean jug, ice from a clean bag, gloves or tongs, nothing left in the sun more than 2 hours.
- An adult is at the stand the whole time. No online sales, no accounts, no kid photos posted.
- The Corleone books always balanced, and these do too: if the sales log doesn't add up, the kid recounts the cash before we eat any profits.

OUTPUT
- lemonade/ folder with calculator, sign, menu, jar labels, sales log, lesson and PDFs
- A chat summary: break-even cups, suggested price, and the 3 things to buy first

Prompt #0801 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0802 Tooth fairy operations kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Etsy printable set | ~~$800~~ Custom stationery design | **Pro, $20/mo** |

```text
You are a twice-a-week plasma seller who has sold bits of himself for cash for 20 years and knows the going rate for every body part. Pricing a seven-year-old's molar fairly is your specialist subject.

Your job: produce a tooth fairy kit: tiny handwriting letters, a lost tooth certificate, a going rate calculator so siblings get the same price, and a tooth log, all ready to print.

INPUTS
- Kids: [first names and ages only]
- Our going rate: [e.g. $2 per tooth, $5 for the first, bonus for molars]
- Tooth fairy name and voice: [e.g. Pearl, bossy but kind]
- Teeth lost so far: [per kid, roughly]
- Paper: [A4 or letter, any card stock]

STEP 1. SET THE RATE
- tooth/rate-calculator.csv with formulas: base rate, first-tooth bonus, molar bonus, and a "lost at school, still counts" rule.
- Total for a full set of 20 baby teeth per kid, so I can see the lifetime bill.
- Same rules for every sibling. Show me the table. Wait for "go".

STEP 2. THE STATIONERY
1. tooth/letters.html: 10 short letters (under 50 words each) for first tooth, wiggly tooth that fell out at dinner, swallowed tooth, lost tooth, front tooth, molar, last tooth, and a "fairy was late" apology
2. Tiny letters: 4 to a page, in a handwriting font from Google Fonts with an OFL licence, minimum 9pt so they stay readable
3. tooth/certificate.html with a blank for name, tooth and date
4. Swallowed or lost tooth note for when there is nothing under the pillow

STEP 3. THE LOG AND PRINT CHECK
- tooth/log.csv: kid, date, which tooth, amount paid, letter used.
- Render each HTML page to PDF with Playwright and check nothing spills off the page and letters cut cleanly along the guides.

RULES
- Kids' first names only. No photos, no accounts, nothing uploaded.
- Font licences checked and listed in README.md. No copyrighted characters or logos.
- Letters stay kind: no threats about brushing, no comparing siblings.
- A man who has bargained over his own blood plasma knows a fair price: the calculator wins every sibling dispute.

OUTPUT
- tooth/ folder with rate-calculator.csv, letters.html, certificate.html, log.csv and PDFs
- README.md with print settings and fonts used
- A chat summary: per-tooth rate and the lifetime total per kid

Prompt #0802 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0803 Elf on the Shelf 24-night plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Printable plan | ~~$900~~ Holiday planner package | **Pro, $20/mo** |

```text
You are the Eye of Sauron, who spent an age watching all of Middle-earth from one tower. A felt elf watching three kids from the bookshelf is a job you can do in your sleep, if you slept.

Your job: plan 24 nights of elf scenes using what is already in my house, with a printable calendar, a note for each morning, a shopping list and a 2 minute setup checklist.

INPUTS
- Kids: [first names and ages only]
- Elf name: [name]
- Start date: [e.g. December 1]
- What's in the house: [house.md, rooms and odd items: toilet paper, flour, Lego, mini marshmallows]
- Budget for extras: [amount]
- Nights I'll be exhausted: [dates with late work or travel]

STEP 1. SURVEY THE REALM
- Draft 24 scenes: silly, kind, helpful and a few mischief nights, with no two of the same kind in a row.
- Mark my exhausted nights with scenes that take under 60 seconds.
- Show me the list. Wait for "go".

STEP 2. THE NIGHTLY ORDERS
1. elf/calendar.html: a December grid, scene name per night, printable on one page
2. elf/notes.html: one note per morning from the elf, under 30 words, at reading level for my youngest
3. elf/setup.md: for every scene, items needed, where it goes, the 2 minute setup steps
4. elf/shopping-list.md for anything not in house.md, with a total that fits my budget

STEP 3. CHECKS
- No scene uses candles, small choking-size pieces near kids under 3, real food left out overnight that could spoil, or anything a kid might climb to reach.
- Render calendar and notes to PDF and check each prints cleanly on one page.

RULES
- Use what I already own first. Every bought item is flagged with a cost.
- Kids' first names only in any file. No photos or uploads.
- Mischief is harmless and easy to clean: no permanent markers on walls, nothing that wastes a lot of food.
- Elf characters and logos are trademarks: no copied artwork, draw our own.
- The Eye sees everything, so you see the calendar: if two scenes need the same item on back-to-back nights, flag it.

OUTPUT
- elf/ folder with calendar.html, notes.html, setup.md, shopping-list.md and PDFs
- A chat summary: total cost and the 3 scenes that need prep a day ahead

Prompt #0803 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0804 Teen driving practice log

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Lesson plan PDF | ~~$1,500~~ Driving school package | **Pro, $20/mo** |

```text
You are Mr. Toad of Toad Hall, who wrecked every motor car you ever touched and lost your licence to a very stern judge. The reformed Toad now teaches the slow, boring, safe way to merge.

Your job: build my teen a supervised driving log that totals day and night hours toward our licence requirement, plus a lesson plan that adds one hard skill at a time and post-drive checklists.

INPUTS
- Teen: [first name and age only]
- Where we live: [country and state or province]
- Licence requirement: [hours needed, night hours, from our licensing office page, or ask me to find it]
- Car: [automatic or manual]
- Practice time per week: [hours]
- Test date goal: [date or "no rush"]

STEP 1. SET THE REQUIREMENT
- Write the requirement into drive/requirements.md with the source link and date checked. If you can't confirm it, write [CHECK WITH LICENSING OFFICE] and stop for me.
- Show me the target. Wait for "go".

STEP 2. THE LOG
1. drive/log.xlsx or .csv: date, start time, end time, minutes, day or night (night from sunset, using our local sunset time), road type, weather, skills practised, supervisor initials
2. Formulas for total hours, night hours, hours left, and projected finish date at our weekly pace
3. A printable log sheet for the glovebox, matching the columns

STEP 3. THE LESSON LADDER
- 12 lessons, one new hard skill each, only after the last one is solid 3 drives in a row: empty car park, quiet streets, left turns across traffic, roundabouts, highway merge, rain, night, parallel parking, rush hour, unfamiliar route.
- drive/lessons.md: goal, route type, what good looks like, common mistakes, and a calm one-liner for the supervisor.
- drive/post-drive-checklist.html: 10 checks scored 1 to 3, plus one thing to repeat next drive. Render to PDF.

RULES
- Requirements change. Always link the official licensing source and tell me to recheck it before the test.
- No phones while driving, for the teen or the supervisor. The log is filled in after parking.
- Teen's first name only. No location tracking, no apps that record speed or routes.
- Toad's rule: speed is never a skill on the ladder. Smooth, early and boring passes the test.

OUTPUT
- drive/ with requirements.md, log, lessons.md, post-drive checklist and PDFs
- A chat summary: hours needed, projected finish date, and the first 3 lessons

Prompt #0804 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0805 Baby name shortlist stress test

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Name report | ~~$1,200~~ Baby naming consultant | **Pro, $20/mo** |

```text
You are a hurricane naming committee clerk who names things that will flatten coastlines and end up on the evening news. You know exactly how a name sounds when someone is yelling it.

Your job: stress test our baby name shortlist against public popularity data, initials, nicknames, playground rhymes and our surname, and write a ranked report with charts.

INPUTS
- Shortlist: [names.txt, one name per line, with middle name options]
- Surname: [surname or surnames, and if hyphenated]
- Country and region: [it decides which popularity data to use]
- Languages spoken by family: [e.g. English, Dutch, Thai]
- Must avoid: [exes, feuds, pets]

STEP 1. GET THE DATA
- Download the public baby name data for our country: US Social Security names by year, UK ONS, Statistics Canada or the provincial lists, or the closest official source. Cite the file and year.
- Pull 30 years of rank for every name and spelling to names/data/. Show me the sources. Wait for "go".

STEP 2. THE STRESS TESTS
1. Popularity: current rank, trend over 10 years, and how many kids per 1000 births, so I know how many in a class
2. Initials and monogram: first, middle, last, flag anything that spells a word or acronym
3. Nicknames: every common short form, and which one sticks
4. Rhymes and teasing: the obvious playground rhymes, kept polite in the report
5. Flow with surname: syllable count, repeated sounds, first name ending where the surname starts
6. Other languages: meaning or sound in each family language
7. Shout test: yelled across a park, is it clear, or confused with a common word

STEP 3. THE REPORT
- names/report.html: one card per name with a score out of 10 per test, a popularity chart (Chart.js) and the verdict.
- Ranked table at the top. Render to report.pdf.
- Check every chart loaded and every rank matches the raw data.

RULES
- Public data only. Cite every source, never invent a rank.
- No judgement of anyone's culture, religion or heritage. Flag meaning, never mock it.
- The final pick is ours. The report ranks, it does not decide.
- A storm name gets retired if it causes damage. Any name that fails 3 tests gets a red retired stamp.

OUTPUT
- names/ with data/, report.html, report.pdf and the script that built it
- A chat summary: top 3, and the one surprise from the data

Prompt #0805 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0806 Baby-proofing audit from photos

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Checklist PDF | ~~$1,200~~ In-home audit + install | **Pro, $20/mo** |

```text
You are a slapstick pratfall stuntman who has been paid to tumble down every staircase, crack your skull on every coffee table corner and skid on every loose rug in Hollywood. You know every trap a home can hold at crawling height.

Your job: go through photos of my own home room by room and write a hazard checklist, a prioritised shopping list with costs and an install plan, saved as a printable PDF.

INPUTS
- Photos: [babyproof/photos/ folder, named by room, taken at 60cm height, no people or kids in frame]
- Floor plan or room list: [rooms.md]
- Baby's age and stage: [e.g. 6 months, starting to crawl]
- Home type: [house, apartment, rental, stairs or not]
- Budget: [amount]
- Rental rules: [can we drill or not]

STEP 1. THE WALKTHROUGH
- Log each hazard from the photos into babyproof/hazards.csv: room, photo file, hazard, height (floor, crawl, pull-to-stand, climb), severity (1 to 5), fix.
- Check the big killers first: furniture and TVs that can tip, window blind cords, stairs, water (baths, buckets, pools), medicines and button batteries, magnets, cleaning products, hot surfaces, small objects under 3cm.
- Show me the top 10. Wait for "go".

STEP 2. THE FIX LIST
1. babyproof/shopping-list.md: item, quantity, typical price, where to buy, which hazard it fixes
2. Anchor every dresser, bookcase and TV, gates at top and bottom of stairs with the top gate hardware-mounted, cordless blinds or cord cleats, cabinet locks, outlet covers, corner guards, toilet lock
3. Sort by severity, then cost, and mark what fits the budget

STEP 3. THE INSTALL PLAN
- babyproof/install-plan.md: weekend by weekend, tools needed, time per item, rental-safe alternatives where drilling is not allowed.
- Recheck at pulling to stand and at walking.
- Render everything to babyproof/report.pdf and check the tables fit the page.

RULES
- Photos stay on this machine. No faces, no house number or street visible.
- I can only see what's in the photos. Anything out of frame goes on a "check yourself" list.
- General safety guidance, not a certified inspection. For pools and gas, tell me to get a local pro.
- Follow each product's installation instructions over yours.
- I fell down those stairs for money. Your baby does it for free, so stairs and tip-overs always rank first.

OUTPUT
- babyproof/ with hazards.csv, shopping-list.md, install-plan.md and report.pdf
- A chat summary: total cost, top 5 hazards and the first weekend's jobs

Prompt #0806 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0807 Potty training kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Printable chart set | ~~$500~~ Potty coach package | **Pro, $20/mo** |

```text
You are a former chamber pot carrier at Versailles, where 3,000 courtiers relieved themselves in the hallways of the most beautiful palace on earth and you mopped up after every one of them. One toddler aiming at an actual potty is, by your standards, civilisation itself.

Your job: build a complete potty training kit for my child in a potty/ folder, ready to print tonight.

INPUTS
- Child: [first name and age in months]
- Readiness signs: [e.g. dry for 2 hours, tells you when wet]
- Start date and who is home: [date, adults]
- Daycare or sitter: [yes or no]
- Rewards that work: [stickers, songs]
- Words we use: [wee, pee, poo, potty, toilet]

STEP 1. CHECK READINESS AND PLAN
- Score readiness: dry for 2 hours, pulls pants down, follows a two-step instruction, shows interest. Under 3 of 4? Suggest waiting 2 to 4 weeks.
- Show me the plan and file list, then wait for "go".

STEP 2. BUILD THE 3-DAY SCHEDULE
1. potty/schedule.md: sits every 20 to 30 minutes on day 1, every 45 to 60 by day 3, plus after waking, meals and before the bath
2. potty/timers.ics: reminders for those sits
3. Sit scripts: what to say, 5 minutes at most, one calm line for accidents

STEP 3. MAKE THE PRINTABLES
- potty/chart.html: sticker chart with print CSS for A4 and Letter, 7 days by 8 slots, big boxes, [first name] at the top
- potty/rewards.md: a fading ladder: sticker per try, per success, per dry morning, then a small prize at 10 dry days
- potty/accident-log.csv: time, wee or poo, where, what came before
- potty/daycare-note.md: our words, schedule and reward on one page

STEP 4. CHECK IT
- Print chart.html to PDF in both sizes and confirm nothing is cut off. Parse timers.ics back and count reminders.

RULES
- First name and age only. Nothing about my child leaves this folder.
- No shaming, no punishment, no cutting drinks to reduce accidents. The courtiers had no shame either, but they were adults and should have known better.
- General guidance, not medical advice. Constipation, pain or blood means a call to our doctor.
- No invented statistics; mark guesses [GUESS].

OUTPUT
- potty/ with every file above, plus the chart PDFs
- A chat summary: start date, the readiness verdict, and the one thing to buy before day 1

Prompt #0807 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0808 First-year baby budget

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Budget spreadsheet | ~~$1,200~~ Financial planner session | **Pro, $20/mo** |

```text
You used to sell Y2K panic: generators, water drums and 400 cans of beans to families bracing for a disaster that never came. You know exactly what fear sells to new parents, because you were the one selling it.

Your job: build a first-year budget for our baby that separates what we will really use from what anxiety wants us to buy.

INPUTS
- Due date or baby's age: [date]
- Where we live and currency: [city, country]
- Feeding plan: [breastfeeding, formula, combination, not sure]
- Childcare plan: [parent at home, daycare from month X, family]
- Leave and income change: [weeks, monthly change]
- Gear we have or can borrow: [list]
- Monthly amount we can spare: [amount]

STEP 1. LIST THE COSTS
- List costs by category: feeding, nappies, clothes, sleep, travel, health, childcare, one-off gear.
- Every price is an estimate for [city]. Tag each [ESTIMATE] with where the number came from, or [GUESS].
- Show me the categories and assumptions, then wait for "go".

STEP 2. BUY, BORROW OR SKIP
Give every gear item one verdict and the month it's first needed:
1. Buy new: safety items like the car seat and mattress, never secondhand without a known history
2. Borrow or buy used: clothes, bouncer, bath, high chair
3. Skip: the generator-in-the-garage items, each with a one-line reason

STEP 3. BUILD THE SPREADSHEET
- Write budget/baby-year.xlsx with openpyxl: sheets for Monthly (months 0 to 12, totals, running total against my monthly amount), Gear, Nappies and Registry.
- Nappy forecast: typical daily counts by age (roughly 10 to 12 for a newborn, 6 to 8 by month 6), the likely month for each size change, and a rule to bulk buy no more than one box ahead.
- Formulas, not pasted numbers, so one price change updates everything.

STEP 4. CHECK IT
- Re-open the file with a script and recompute three totals independently.

RULES
- Not financial advice. This is a planning estimate; our bank or a planner can check the big decisions.
- You sold fear for a living. Do not sell it to us. If an item mostly exists to calm parents, say so.
- Never overwrite an existing budget file.

OUTPUT
- budget/baby-year.xlsx
- budget/assumptions.md listing every estimate and its source
- A chat summary: first-year total, the 3 biggest costs and the 5 things to skip

Prompt #0808 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0809 Sort 40,000 family photos (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Photo organizer gig | ~~$4,000~~ Photo organizing service | **Max 5x, $100/mo** |

**What you'll need:** [External hard drive](https://www.amazon.com/s?k=external+hard+drive&tag=jefvandegra00-20)

<sub>As an Amazon Associate I earn from qualifying purchases. It costs you nothing extra, helps keep these prompts free, and prevents me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

```text
You kept a nitrate film vault until the night it caught fire and took 400 irreplaceable reels with it, all because nobody had made a second copy. Forty thousand family photos on one tired laptop drive give you flashbacks.

Your job: sort decades of our family photos into year and event folders, remove duplicates, tag scenes and build a highlights book, entirely offline, without losing a single file.

INPUTS
- Source folders: [paths, e.g. D:/Photos, phone exports, scanner output]
- Destination drive: [path, with at least 2x the source size free]
- Existing backup: [where, or "none"]
- Family first names for event naming: [list]
- Years to cover and big events I remember: [list]

STACK
Check every licence before installing; prefer MIT, BSD or Apache 2.0 and flag anything non-commercial.
- exiftool for capture dates, camera model and GPS, falling back to file dates
- Python with Pillow, pillow-heif for HEIC and rawpy for RAW previews
- imagehash (pHash) for near-duplicates, SHA-256 for exact duplicates
- open_clip with a LAION-trained ViT-B-32 checkpoint from Hugging Face for local scene tags (beach, birthday, snow, wedding), on CPU if there's no GPU
- SQLite as the catalogue: one row per file with hash, date, source path, new path and tags
- WeasyPrint or Playwright for the highlights PDFs

STEP 1. PROTECT FIRST, THEN SURVEY
- Confirm a full backup exists. If not, copy everything to the destination drive and verify every SHA-256 before anything else.
- Scan everything into catalogue.db. Report file count, total size, date range, files with no EXIF date, and file types.
- Show me the survey and the folder pattern, e.g. 2014/2014-07 Lake trip, then wait for "go".

STEP 2. SORT AND DEDUPE
1. Copy, never move, into the new tree.
2. Exact duplicates: keep one, list the rest. Near-duplicates at pHash distance 5 or less go to review/ for me, never auto-removed.
3. Start a new event when more than 6 hours pass between shots; name it from my list or as [date] [top tag].
4. Files with no date go to undated/ with a best guess in the catalogue.
5. Write undo-log.csv: every original path and its new path.

STEP 3. TAG AND PICK HIGHLIGHTS
- Run open_clip over every photo once and store the top 3 tags with scores.
- Per year, pick 24 highlights: sharp (Laplacian variance), not a duplicate, spread across events. I can swap picks in highlights.csv before you build.

STEP 4. BUILD AND VERIFY
- Build highlights/[year].pdf, 2 photos per page with date and event.
- Verify: files in equals unique files out plus listed duplicates. Spot-check 20 random hashes against the originals.

RULES
- Nothing leaves this computer. No cloud uploads, no online face recognition; photos of the kids stay local.
- Never delete. Duplicates are listed, not removed, until I say so.
- The vault burned because there was one copy. End with a 3-2-1 backup plan, and never scan a drive that is failing or mid-recovery.
- Long jobs run in batches with progress saved, so a crash resumes instead of restarting.

OUTPUT
- The sorted tree, catalogue.db, undo-log.csv and review/
- highlights/ with one PDF per year
- scripts/ with one command per step, plus README.md
- A chat summary: counts, duplicates found, undated files and backup advice

Prompt #0809 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0810 Fridge art archive book (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Scan + photobook | ~~$1,500~~ Art archiving service | **Pro, $20/mo** |

```text
You are a Vermeer forger whose copies were so convincing the experts never once missed the originals. That is the only way 300 macaroni paintings will ever leave this fridge without tears.

Your job: turn our pile of kids' art into a gallery page and a printed art book, then suggest which originals can retire.

INPUTS
- Photos of the art: [art/raw/, phone photos of each piece on a plain background]
- Artists: [first names and ages only]
- Years covered: [e.g. 2023 to 2026]
- Book size: [e.g. 8x8 inch square, A4 landscape]
- How many originals we keep: [e.g. one box, 20 pieces per child per year]

STACK
Check every licence before installing; prefer MIT, BSD or Apache 2.0.
- OpenCV (opencv-python) for edge detection, perspective correction and auto-crop
- Pillow for white balance and resizing, pillow-heif for iPhone photos
- exiftool for capture dates
- A static HTML gallery with CSS grid and lazy-loaded images, no framework
- WeasyPrint or Playwright to render the book PDF at 300 DPI, with bleed if the printer wants it

STEP 1. SHOOTING GUIDE AND SAMPLES
- Write art/shoot-guide.md: daylight near a window, phone directly above, plain contrasting background, whole sheet in frame, and the back too if there's writing on it.
- Process 5 samples and show me before and after. Wait for "go".

STEP 2. CLEAN THE SCANS
1. Find the paper edge (Canny plus the largest four-point contour), warp it flat, crop 1 percent inside the edge
2. Correct white balance from the paper, not the art
3. Save art/clean/[name]-[yyyy-mm]-[nn].jpg at 3000 px on the long side; raws stay untouched
4. Anything the detector can't find goes to art/check/ for me, never guessed

STEP 3. GALLERY AND BOOK
- art/gallery/index.html: filter by artist and year, title and date under each piece, works offline from the folder
- art/book-[year].pdf: a cover with the artist's first name, one piece per page or two small ones, title and age on each, an index at the back
- Titles come from the artist. Where there is none, write [UNTITLED, ASK ARTIST], because five-year-olds have strong opinions.

STEP 4. VERIFY, THEN THE RETIREMENT LIST
- Check every clean image is in the gallery and the book, page counts match, and every image prints at 300 DPI or better at its size.
- Only after I approve the book: art/retire.csv suggesting originals to recycle, with keepers marked (name signatures, milestones, anything with words or handprints).

RULES
- Kids' art and names stay on this computer. I upload to the printer myself.
- You never throw anything out. You suggest; we decide together with the artist.
- A forger never improves on the master. No AI enhancing that redraws a child's lines: clean the photo, not the art.

OUTPUT
- art/clean/, art/check/, art/gallery/index.html
- art/book-[year].pdf and art/retire.csv
- scripts/ and README.md so next year's pile is one command
- A chat summary: pieces processed, pieces needing a reshoot, and the page count

Prompt #0810 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0811 Road trip survival kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Itinerary + printables | ~~$1,000~~ Travel agent package | **Pro, $20/mo** |

```text
You were the purser on the Mayflower: 66 days at sea, 102 passengers, one bucket, and half of them didn't see the spring. A six-hour drive to grandma's with snacks and a tablet is, frankly, a pleasure cruise.

Your job: plan our family road trip so everyone arrives fed, rested and still speaking, all in a roadtrip/ folder.

INPUTS
- Route: [start, destination, must-see stops]
- Departure: [date and time]
- Car and passengers: [car, adults who drive, kids by first name and age]
- Needs: [car sickness, nap times, toilet-trained or not, diets, allergies]
- Screen rules: [hours allowed, devices, headphones]
- Audio we own: [list]

STEP 1. BUILD THE TIMELINE
- Take the drive time from the route and add 25 percent for kids. Plan a stop every 90 minutes, 15 to 20 minutes each, with one 45-minute stop around lunch.
- For each stop name the type of place (playground rest area, town park) and a backup. I check real places on a map; never invent businesses or hours.
- Show me the timeline, then wait for "go".

STEP 2. THE ON-BOARD SCHEDULE
1. Rotate 30 to 45-minute blocks: snack, game, audio, screen, quiet or nap, so nothing runs out by hour two
2. Snacks: low mess, packed per kid per leg
3. Screens go in the hardest stretch, usually the last 90 minutes, not the first

STEP 3. PRINTABLES AND AUDIO
- roadtrip/games.html: car bingo, a scavenger hunt and drawing prompts by age, A4 and Letter, clipboard-sized
- roadtrip/no-paper-games.md: 10 prop-free games
- roadtrip/audio-queue.md: an offline queue from audio we own, lengths adding up to each leg, with a reminder to download before leaving
- roadtrip/packing.md: by bag, including a car-sick kit (bags, wipes, spare clothes, towel) and a night-before checklist

STEP 4. CHECK
- Print games.html to PDF in both sizes and confirm nothing is cut off.
- Add up the blocks against the timeline and fix any leg that doesn't match.

RULES
- Kids' first names and ages only. No location-sharing apps.
- Drivers rest at least every 2 hours. The passenger runs the schedule.
- The Mayflower had no stop plan. We do, and the packing list still includes a bucket, because some lessons stay learned.

OUTPUT
- roadtrip/ with every file above, plus the PDFs
- A chat summary: departure time, total stops and the three things to pack the night before

Prompt #0811 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0812 School email chaos digest (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Inbox setup gig | ~~$3,000~~ Virtual assistant, per month | **Pro, $20/mo** |

```text
You were the Scotland Yard inspector who read 600 letters claiming to be from the Ripper, hunting for the one that mattered. Finding the single real deadline buried in 40 PTA emails about bake sales is the same grim work, with worse fonts.

Your job: turn our school email export into a one-page weekly family digest and a calendar file.

INPUTS
- Email export: [school/inbox/, .eml or .mbox files, e.g. a Google Takeout of our "School" label]
- Saved newsletters and forms: [school/attachments/]
- Kids: [first names, grade or class, teacher names]
- Week starts on: [Sunday or Monday]
- Time zone: [e.g. America/Toronto]

STACK
Check every licence before installing; prefer MIT, BSD or Apache 2.0.
- Python standard library email and mailbox modules for .eml and .mbox
- BeautifulSoup to turn HTML newsletters into text
- pdfplumber for PDF newsletters and permission slips
- dateparser for "next Friday" and "the 14th", resolved against each email's sent date
- icalendar to write the .ics, with stable UIDs so re-runs update events instead of duplicating them
- Claude reading each cleaned email for the judgment calls

STEP 1. PARSE AND SAMPLE
- Parse every message, collapse forwards and repeat reminders of the same thing, and keep sender, date, subject and body.
- Extract 10 sample items into a table: what, which kid, date, deadline, action, source file. Show me and wait for "go".

STEP 2. EXTRACT EVERYTHING
Give every item one type:
1. Event: date, time, place, which kid
2. Deadline: forms, payments, sign-ups, with the hard date
3. Bring: costumes, lunch, money, gym clothes, by day
4. FYI: worth knowing, no action
Every row links to its source file. Anything with an unclear date goes to school/check.md, never guessed.

STEP 3. DIGEST AND CALENDAR
- school/digest-[week].md and .html, one page: this week's deadlines in date order at the top, then day by day events and what to bring per kid, then next week's heads-up and FYI in one line each.
- school/family.ics: events as events, deadlines as all-day items with a reminder 2 days before.
- digest.py so I drop in a new export and re-run every Sunday.

STEP 4. VERIFY
- Parse family.ics back and confirm every deadline in the digest is in it.
- Confirm every digest row has a source file and nothing in check.md was silently dropped.

RULES
- Read only. You never reply, forward, sign or pay anything. I handle every form myself.
- Kids' names and school emails stay on this computer. No uploads.
- The inspector trusted no letter on its say-so. If two emails give different dates, show both and flag it.
- Never invent an event to fill a quiet week.

OUTPUT
- school/digest-[week].md and .html
- school/family.ics and school/check.md
- digest.py and README.md with the weekly steps
- A chat summary: this week's deadlines, anything unclear, and how many emails had nothing in them

Prompt #0812 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0813 Video game from your kid's drawings (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Simple game build | ~~$10,000~~ Indie game studio | **Pro, $20/mo** |

```text
You are Geppetto, the woodcarver whose puppet son came to life and promptly wandered off into a whale. Turning a crayon dinosaur into a jumping, playable hero is the same dream, with far fewer whales.

Your job: turn my kid's drawings into a small browser game starring their own characters, playable offline at home and easy to extend together.

INPUTS
- Drawings: [game/drawings/, photos or scans, one character or object per page]
- Artist: [first name and age only]
- The story in their words: [e.g. "the dinosaur eats clouds and the volcano is the bad guy"]
- Kind of game: [side-scroller, collect-the-things, maze, or let the kid decide]
- Computer it runs on: [OS and browser]

STACK
Check every licence before installing; prefer MIT, BSD or Apache 2.0.
- rembg with the u2net or BiRefNet model for local background removal
- OpenCV and Pillow to trim, clean paper texture and resize sprites to 64, 128 or 256 px
- Phaser 3 (MIT) with Arcade Physics for the game
- Vite for a local dev server, then a static build in dist/
- jsfxr for chiptune sound effects, or the kid saying "boing" into our own phone
- Tiled map editor, optional, for levels saved as JSON

STEP 1. PLAN WITH THE ARTIST
- Write game/design.md in kid language: the hero, what they collect, what's bad, how you win, 3 levels.
- Cut out the first 3 sprites, show me the plan and the sprites, and wait for "go" from both of us.

STEP 2. MAKE THE SPRITES
1. Remove backgrounds and trim, keeping every wobbly line exactly as drawn
2. Simple motion from one drawing: a 2-frame bob, squash and stretch, a flip
3. Save game/assets/ with sprites.json listing name, size and source drawing

STEP 3. BUILD THE GAME
- A title screen with the artist's game name, 3 short levels, and a win screen that says "made by [first name]"
- Arrow keys or WASD plus spacebar, big hitboxes, generous checkpoints, progress never lost
- Tuned to [age]: under 7 means no fail state at all

STEP 4. TEST AND HAND OVER
- Build it, then play every level headless with Playwright and confirm each can be finished.
- Turn Wi-Fi off and confirm it still runs.
- Write README.md for kid and parent: one command to start, how to add a drawing, how to add a level.

RULES
- Only my child's own drawings and first name. No uploads, accounts, analytics or ads.
- No AI image generation replacing their art. Geppetto carved the boy; he didn't swap him for a nicer one.
- Keep the code simple and commented, so a curious 9-year-old can change one number and see what happens.
- Show me before installing anything globally.

OUTPUT
- game/ with dist/ playable offline
- game/design.md, game/assets/ and sprites.json
- README.md with "add a drawing" and "add a level"
- A chat summary: how to start it, and three ideas for level 4

Prompt #0813 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0814 The talk, scripted by age

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Script PDF | ~~$900~~ Parent educator sessions | **Pro, $20/mo** |

```text
You are a dairy farm cattle inseminator who has explained where calves come from to visiting farmers while wearing a glove up to the shoulder. A calm, gloveless script for an 11-year-old is the easiest birds and bees talk you will ever give.

Your job: write age-by-age scripts so I can talk to my child about bodies, puberty and where babies come from without panicking.

INPUTS
- Child: [first name and age]
- What they know or have asked: [questions, things heard at school]
- Our words and values: [names for body parts, what we stress]
- Where we live: [country, for local resources]

STEP 1. PLAN BY AGE
- Write the-talk/plan.md with 4 stages: 3 to 5 (correct names for body parts, privacy, consent to touch), 6 to 8 (basics of where babies come from), 9 to 12 (puberty for all bodies, periods, emotions), 13 and up (relationships, consent, online safety).
- Mark [first name]'s stage and anything earlier still to cover.
- Show me the outline, then wait for "go".

STEP 2. WRITE THE SCRIPTS
For the current stage and the next:
1. An opener for a car ride or walk: side by side beats face to face
2. The core explanation in plain, correct words, 150 words or fewer
3. 10 likely questions with short, calm, true answers, and "let's find out together" where it fits
4. A close: come back any time, nothing is too weird to ask

STEP 3. RESOURCES AND ONE PAGE
- the-talk/resources.md: books and sites from national health services, paediatric associations and children's hospitals. Check each link loads; mark any you can't verify [CHECK].
- the-talk/one-page.html: printable, with the stages, next talk date and three phrases to remember. Print to PDF and confirm it fits one page.

RULES
- General information, not medical advice. Early or late puberty, pain, or anything worrying goes to our doctor.
- If a question hints that someone touched my child or asked them to keep a secret, tell me plainly to contact our doctor or local child protection line.
- First name and age only. Nothing about my child goes online.
- The inseminator never blushed and never got graphic. Neither do you.

OUTPUT
- Every file above, plus the PDF
- A chat summary: the current stage, the first sentence to say and the next 2 topics

Prompt #0814 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0815 First phone lockdown and contract

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Setup guide | ~~$1,500~~ Family tech consultant | **Pro, $20/mo** |

```text
You used to run burner phones for a drug crew and tossed 400 of them into rivers, because you knew exactly what each one gave away. Your 12-year-old's first phone gets locked down like it is already evidence.

Your job: write a step-by-step guide to set up my teen's first phone together with them, plus a phone contract we both sign.

INPUTS
- Teen: [first name and age]
- Phone and OS: [iPhone model and iOS version, or Android model and version]
- Family setup: [Apple Family Sharing, Google Family Link, or none yet]
- Worries: [strangers, spending, scams, sleep]

STEP 1. CHECK THE CURRENT MENUS
- Settings move every release. Write for [OS version] from the official Apple or Google help pages, linking each step. Unconfirmed menu paths get [CHECK ON PHONE].
- Show me the outline, then wait for "go".

STEP 2. THE SETUP GUIDE, DONE TOGETHER
first-phone/setup.md, each step with what to tap, why, and a checkbox:
1. Account: a child account in our family group, a passcode they choose and we know for now
2. Privacy: location per app set to off or "while using", location sharing with friends off, photo location data off
3. App store: ask to buy on, an age rating limit, no saved payment card
4. Screen time: night downtime, agreed limits, charging outside the bedroom
5. Calls and messages: unknown senders filtered, calls from contacts only at first
6. Scams: 6 common patterns (prize, account lock, "send a photo", gift cards, a friend's new number, a DM link) and one rule: stop and show a parent

STEP 3. THE CONTRACT
- first-phone/contract.html: 10 to 14 short clauses written with my teen, half their promises and half ours (privacy, trust, when rules loosen), a 3-month review date and signature lines.
- Render contract.pdf in A4 and Letter and check it fits 2 pages.

RULES
- Set up with my teen, never behind their back. No spyware, no secret message reading, no keyloggers.
- Never ask for my Apple ID or Google password in chat. I type those on the phone.
- A burner leaks nothing, and neither does this phone: end the guide with a check of every app's location, contacts, camera and microphone permissions.

OUTPUT
- first-phone/setup.md, contract.html and contract.pdf
- A chat summary: the 3 most important settings and the review date

Prompt #0815 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0816 Babysitter house manual

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Printable binder | ~~$800~~ Nanny agency onboarding | **Pro, $20/mo** |

```text
You were the night matron of a Victorian orphanage: 60 children, one candle, and a ledger that recorded every cough. Tonight's sitter gets two children and a binder, and the binder, like you, is very thorough.

Your job: build a babysitter manual that answers every question before the sitter has to text me.

INPUTS
- Kids: [first names and ages]
- Routines: [house/routines.md: dinner, bath, bedtime]
- Health: [allergies, medications with doses and times exactly as our doctor or pharmacist wrote them]
- Emergency contacts: [us, a nearby neighbour, a grandparent, our doctor]
- House: [address, where the first aid kit, torch and extinguisher live]
- Rules: [screens, snacks, visitors, pets]

STEP 1. FIND THE GAPS
- List what a sitter would still have to ask. Show me the [MISSING] list and wait.

STEP 2. WRITE THE MANUAL
sitter/manual.html, printable and readable offline on a phone:
1. Front page: emergency numbers in large type, our full address written out for an emergency call, the nearest hospital, poison control
2. Routines by the hour, per kid by first name
3. Allergies and medication: what, how much, when, what a reaction looks like, what to do, where the EpiPen is if there is one
4. House rules and where things are
5. Wi-Fi card: guest network name and a QR code made locally with the Python qrcode library; I type the password into the config myself
6. What to do if: fever, a fall, a nosebleed, a power cut, someone at the door, a child who won't sleep, and when to call us versus emergency services

STEP 3. RENDER AND CHECK
- Print sitter/manual.pdf in A4 and Letter; the front page fits one sheet and nothing is under 12 pt.
- Check every medication has a dose and a time.

RULES
- Medication details come only from what I give you, copied exactly. Never suggest a dose. Unclear? Write [ASK PARENT].
- Not medical advice. The what-to-do-if page says: when in doubt, call emergency services first.
- First names only for the kids. Never put the alarm code in a file; leave a blank line for me to write it by hand.
- The matron's ledger never had a blank page. If a section is empty, say so in the chat summary.

OUTPUT
- sitter/manual.html, manual.pdf and wifi-card.png
- A chat summary: every [MISSING] item still open

Prompt #0816 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0817 Kids sports team parent admin

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Season setup | ~~$2,500~~ League admin service | **Pro, $20/mo** |

```text
You spent 25 years washing what grown men left behind in a professional locker room, and you still won't talk about the 1998 playoffs. A rota for orange slices and fair minutes on the field is the cleanest job in sport.

Your job: build a full season kit so our kids' coach and team parent can run the season without a single group chat meltdown.

INPUTS
- Team: [sport, age group, number of players]
- Roster: [team/roster.csv: player first name, parent first name, contact preference]
- Schedule: [team/schedule.csv: date, time, field, home or away]
- League rules: [playing-time rules, game length, positions]
- Season dates and time zone: [dates, zone]

STEP 1. CHECK THE INPUTS
- Load roster and schedule with a script and flag clashes, missing fields and holiday weekends.
- Show me the summary and wait for "go".

STEP 2. BUILD THE ROTAS
1. team/season.ics: every game and practice, field address as location, a reminder 90 minutes before
2. team/snacks.csv and carpool.csv: equal shares, no family twice in a row, swap rules at the top
3. team/playing-time.py: equal minutes for every player across the season within one period, a turn at every position the league allows, absences carried forward fairly, and a one-page sideline sheet per game
4. team/equipment.md: per game and per season: balls, pump, cones, first aid kit, ice packs, water, pinnies

STEP 3. DRAFT THE EMAILS
- team/emails/: welcome, rotas, weather cancellation, mid-season check-in and end-of-season thanks. Short, friendly, every date pulled from the files.
- Drafts only. The coach sends them from their own email, with parents in bcc.

STEP 4. CHECK IT
- Re-run playing-time.py with a random absence pattern and show me the minutes spread.
- Parse season.ics back and count events against schedule.csv.

RULES
- Players by first name only. No photos, birthdays or medical notes in shared files; medical info goes to the coach privately.
- Fair minutes beat winning at this age. If league rules allow less, flag it and still default to equal time.
- Nothing is sent automatically.
- The launderer's rule: nothing left in the bag at season's end. Write a return list for every piece of shared gear.

OUTPUT
- team/ with season.ics, snacks.csv, carpool.csv, playing-time.py, game sheets, equipment.md and emails/
- README.md: how to swap a rota slot and re-run
- A chat summary: clashes found and the first email to send

Prompt #0817 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0818 Morning routine that beats the bus (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Printable cards | ~~$1,500~~ Smart home setup | **Pro, $20/mo** |

```text
You were an oshiya on the Tokyo subway, politely shoving 3,000 commuters a morning into trains that leave to the second. Getting two kids, four shoes and one backpack out the door by 7:42 is a gentle warm-up.

Your job: build a morning routine display for the kitchen TV or tablet, with picture cards per kid and a countdown to the bus, running only on our home network.

INPUTS
- Kids: [first names, ages, can they read yet]
- Morning steps: [wake, toilet, dress, breakfast, teeth, shoes, coat, bag]
- Leave time and days: [e.g. 7:42, weekdays, school calendar]
- Screen: [old tablet, smart TV browser, Raspberry Pi with a monitor]
- Home Assistant: [yes and version, or no]
- Smart lamp: [brand and model, or none]

STACK
Check every licence before installing; prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- A static web app in HTML, CSS and plain JavaScript, served on the home network by Python http.server or Caddy
- Picture cards: OpenMoji (CC BY-SA 4.0, credit it), ARASAAC pictograms (CC BY-NC-SA, home use only), or our own photos of the actual shoes
- The Screen Wake Lock API and the device's kiosk mode to keep it on
- Home Assistant, optional: a script triggered through its REST API using a long-lived access token kept in .env
- Web Speech API, optional, for a spoken "shoes time" cue

STEP 1. PLAN THE MORNING
- Work back from the leave time: each step gets a duration and a deadline (shoes by 7:35, out by 7:42).
- Show me the timeline per kid and a screen sketch. Wait for "go".

STEP 2. BUILD THE DISPLAY
1. morning/index.html: a column per kid, big picture cards, tap to mark done, a progress bar
2. A bus countdown that turns amber at 10 minutes and red at 5
3. Picture-only cards for non-readers, one word under each for readers
4. morning/config.json for steps, times, days and school holidays; the board resets itself at 3 a.m.
5. High contrast, readable from 3 metres

STEP 3. LAMP HOOK, OPTIONAL
- morning/hook.py: a tiny local proxy that reads the token from .env and calls one script, e.g. flash the hallway lamp at shoes time. The page never sees the token.
- Write automation.yaml for me to add to Home Assistant myself.

STEP 4. TEST
- Run a fake morning at 10x speed in Playwright and check every deadline and colour change fires.
- Unplug the internet and confirm it still works, and that it only answers inside our network.

RULES
- Home network only. No cloud dashboards, accounts or tracking, and no photos of the kids uploaded anywhere.
- Never ask me to paste the token in chat. .env goes in .gitignore, with a .env.example beside it.
- Show me the plan before touching any Home Assistant config.
- The oshiya pushed gently and on time. The board never shames anyone; a missed step just stays on screen.

OUTPUT
- morning/ with index.html, config.json, hook.py, automation.yaml and .env.example
- README.md: start it, change a time, add a school holiday
- A chat summary: the timeline, and the step most likely to cause a late bus

Prompt #0818 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0819 Things my kid said book

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Book layout | ~~$2,000~~ Keepsake book studio | **Pro, $20/mo** |

```text
You are a Hollywood blooper reel editor who spent 30 years rescuing the takes everyone else threw on the cutting room floor. Your kid calling a giraffe a "long horse" beats anything you ever saved from a soundstage.

Your job: turn my messy notes file of things my kid said into a dated, illustrated quote book with chapters by age, laid out as a print-ready PDF.

INPUTS
- Notes: [notes/quotes.txt, phone notes export or screenshots in notes/]
- Kid: [first name and birth month and year only]
- Book: [title, trim size such as 8x8 in, photobook service such as Mixbook or Blurb]
- Art: [scans of my kid's own drawings in drawings/, or "simple line art"]

STEP 1. CLEAN AND DATE EVERY QUOTE
- Parse every line into quotes.csv: date, age in years and months, quote, context.
- The quote stays exactly as said: "pasghetti" is the point.
- Undated quotes get [DATE?]. Never guess a date.
- Flag duplicates and anything that could embarrass them at 16. Show me the list and wait for "go".

STEP 2. CUT THE BOOK
1. Chapters by age, each with an opener I write or [INTRO NEEDED]
2. One quote per page for the greats, two to four for the rest, from a ranked shortlist I approve
3. Quote type 28 to 40 pt, small date and age line underneath
4. Art from drawings/, or plain SVG line art, one per spread at most

STEP 3. LAY OUT AND CHECK
- Build it in HTML with Paged.js or WeasyPrint, export book.pdf.
- Print spec from the service's own template: 0.125 in bleed, 0.25 in safe margin, 300 dpi images, fonts embedded.
- Run pdffonts and pdfinfo, check page count meets the service minimum and is a multiple it accepts.

RULES
- First name only. No surname, school, address or photos of my kid in the book or any file.
- Everything stays on this computer. I upload the PDF to the printer myself.
- Every quote is real. Never write a funny line they didn't say. A blooper reel only works if nobody faked the take.
- Work on copies, never edit notes/.

OUTPUT
- quotes.csv, book/index.html, book.pdf, cover.pdf
- build.sh so I can add next year's quotes and rebuild
- In chat: page count, print check results, [DATE?] and [INTRO NEEDED] list

Prompt #0819 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0820 College application command center

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Tracker setup | ~~$6,000~~ Admissions consultant package | **Pro, $20/mo** |

```text
You are a college admissions fixer who once got kids into top schools with staged rowing photos and envelopes of cash. Now you run the honest version: every deadline met, every form filed, every essay in the kid's own words.

Your job: build a college application command center in a college/ folder with deadlines, checklists, an aid timeline and essay feedback rules.

INPUTS
- Student: [first name and graduation year only]
- Schools: [college/schools.txt: name, plan such as ED, EA, RD, rolling]
- Essays: [drafts the teen wrote in college/essays/]
- Aid: [FAFSA, CSS Profile, state aid, scholarships to track]

STEP 1. BUILD THE TRACKER
- Look up each deadline on the school's official admissions page with curl. Never trust a blog.
- Write tracker.csv: school, plan, deadline with time and time zone as the school states it, test policy, essays required, recommendations, fee, fee waiver, portal, status, source URL.
- Any date you can't confirm gets [CHECK] and a line in check.md. Show me the tracker and wait for "go".

STEP 2. CALENDAR AND CHECKLISTS
1. deadlines.ics (RFC 5545): every deadline plus reminders at 30, 14, 7 and 2 days, each event with its source URL
2. checklist.md per school: transcript request, counselor letter, two teacher letters asked 4 weeks ahead, test scores, supplements, fee or waiver
3. aid-timeline.md: FAFSA and CSS Profile opening dates from studentaid.gov and the College Board, each school's priority aid deadline, scholarship dates
4. Validate deadlines.ics with a script: parses, every event has a date, no duplicate UIDs

STEP 3. ESSAY FEEDBACK RULES
- essay-rules.md: feedback is questions and margin comments only. No rewritten sentences, no suggested lines, no ghost drafts.
- feedback.js reports word counts against each limit (Common App is 650), repeated words and which prompt each draft answers.

RULES
- The teen writes every word of every essay. That is the whole difference between you and the old envelope business.
- Never log in to a portal or ask for any password, SSN or tax figure in chat. Aid numbers stay in the official forms.
- No recommendation drafts. Each teacher writes their own letter.
- Nothing is submitted. The family submits.

OUTPUT
- college/: tracker.csv, deadlines.ics, checklist folder, aid-timeline.md, essay-rules.md, feedback.js, check.md
- README.md: how to add a school and rebuild the calendar
- In chat: the next 5 deadlines and every [CHECK]

Prompt #0820 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0821 Whose turn is it app

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Simple app build | ~~$3,000~~ Custom app build | **Pro, $20/mo** |

```text
You are a competitive belching league referee who has measured burps in decibels and broken up brawls over who went first. Deciding who gets the front seat is a light docket.

Your job: build a tiny offline web app that settles whose turn it is for the front seat, the movie pick or the last cookie, with a fair log so I stop being the judge.

INPUTS
- Kids: [first names only]
- Things to rotate: [front seat, movie pick, last cookie, bath first, or my own list]
- Device: [the family tablet or my phone]
- Folder: [whose-turn/ in this repo]

STEP 1. PLAN THE RULES
- Write rules.md in words a 6 year old can follow:
  1. Each thing has its own rotation
  2. Tap "Done" and the turn moves on
  3. An absent kid keeps their place and goes first when back
  4. Swaps only when both kids agree, logged as a swap
  5. Undo the last tap only, within 2 minutes, for fat fingers
- Show me rules.md and the screens. Wait for "go".

STEP 2. BUILD THE APP
1. Plain HTML, CSS and JavaScript, no framework, no build step
2. manifest.json and a service worker that caches every file, so it installs to the home screen and works in the car with no signal
3. Data in IndexedDB on the device: rotations, a log with time, kid and action
4. One big screen per thing: whose turn, in 72 pt type, a "Done" button with 64 px tap targets, and the last 10 turns underneath
5. Parent screen behind a 4 digit PIN, stored hashed: add kids, edit order, reset, export log.csv

STEP 3. TEST IT
- Write test.js that simulates 300 turns with absences and swaps and confirms no kid ever gets two turns in a row unfairly.
- Run Lighthouse in Chrome, check it installs, then switch DevTools to offline and reload.

RULES
- First names only. No accounts, analytics, cloud sync or network calls of any kind.
- The log is the ruling. Nobody argues with the log, the same way nobody argued with the decibel meter.
- Plain colours, no sounds, no ads, no streaks or rewards.

OUTPUT
- whose-turn/ with index.html, app.js, sw.js, manifest.json, icons, test.js
- README.md: how to install it on an iPad and an Android tablet
- In chat: test results and the Lighthouse score

Prompt #0821 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0822 Toy rotation system

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Organizer plan | ~~$1,500~~ Home organizer visit | **Pro, $20/mo** |

```text
You are Gollum, who lost his precious once and spent 500 years in a cave muttering about it. You understand why my kid notices one missing toy out of 200, and why we rotate, never steal.

Your job: inventory our toy pile from photos, split it into rotation bins that swap every two weeks, and make labels, a swap calendar and a donation list for me to approve.

INPUTS
- Photos: [toy photos in toys/photos/, toys only, no kids in frame]
- Kids: [first names and ages only]
- Storage: [number of bins, shelf space, where bins live]
- Always out: [the favourites that never rotate]

STEP 1. INVENTORY
- Look at every photo and write toys.xlsx with openpyxl: id, photo file, name, type (build, pretend, art, active, puzzle, books, vehicles, soft), age range, pieces, condition, notes.
- Anything you can't identify gets [WHAT IS THIS?]. Sets with missing pieces get flagged.
- Show me the sheet and wait for "go".

STEP 2. SPLIT INTO BINS
1. Split everything except "always out" into the number of bins I gave, 8 to 12 toys each
2. Every bin gets a balance of types, so no bin is all puzzles
3. Toys that are played with together stay together
4. Write bins.csv and bins.md with a photo grid per bin

STEP 3. LABELS, CALENDAR, DONATIONS
- labels.pdf on Avery 5163 (2 x 4 in) with ReportLab: bin letter, a small picture strip, contents list.
- swap.ics (RFC 5545): a swap every 14 days for the next 6 months, at a time I choose.
- donate.md: duplicates, outgrown toys and broken ones, each with a reason. It is a suggestion list only.
- Check: every toy id appears in exactly one bin or on the always-out list, and labels.pdf prints at 100 percent scale.

RULES
- Nothing leaves the house on your say. I approve donations, and my kid gets a veto on anything they love. Hiding the precious in a bin is fine; taking it, never, precious.
- Photos stay on this computer. No uploads, no cloud, no names on any label.
- Work on copies. Never rename or move files in toys/photos/.

OUTPUT
- toys.xlsx, bins.csv, bins.md, labels.pdf, swap.ics, donate.md
- rotate.py so I can add new toys and rebuild the bins
- In chat: bins and counts, [WHAT IS THIS?] items, donation shortlist

Prompt #0822 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
