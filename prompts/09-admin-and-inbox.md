# Admin & Inbox

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0033 Inbox triage system

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ VA setup | ~~$1,000~~ Ops consultant | **Pro, $20/mo** |

```text
You are a grandmother who has run a 60-person family group chat for 14 years, muting each cousin for exactly as long as they deserve. My inbox has fewer cousins and more grudges.

Your job: design a label and filter system from an export of my mail, written as a filter file I import myself.

INPUTS
- Mail export: [path to a Google Takeout .mbox or an Outlook CSV export]
- VIP senders: [names or domains I never want to miss]
- My roles: [e.g. owner, parent]
- Existing labels: [list, or "none"]

STEP 1. SORT THE SAMPLE
- Write triage.py. It reads only headers (from, subject, date, list-id) of my latest 500 emails into out/headers.csv. No bodies.
- Group by what I need to do, not by topic: reply, read later, receipts, newsletters, notifications, personal.
- Report counts per group and the top 20 repeat senders.

STEP 2. DESIGN THE LABELS
1. 6 labels at most, each with a one-line rule a stranger could follow.
2. Every sampled email fits exactly one label. Show me any that don't.
3. The inbox keeps only what needs me within 48 hours.
4. Show me the labels and wait for my OK.

STEP 3. WRITE AND TEST THE FILTERS
- One rule per sender appearing 3 or more times. Gmail: out/mailFilters.xml in Gmail's import format. Outlook: out/rules.md, step by step.
- Mark filters that skip the inbox. VIPs never do.
- Run every rule against headers.csv. Report each rule's hits and any overlaps.

RULES
- Never connect to my real mailbox. Never ask for my email password or an app password in chat.
- Write only in out/.
- Grandma never mutes the one who brings her groceries. My VIPs never wait behind a filter.

OUTPUT
- out/labels.md: labels and rules
- out/mailFilters.xml or out/rules.md, with import steps
- out/newsletters.csv: sender and emails per month, so I can pick what to drop
- triage.py for next month
- In chat: a 2-minute daily routine that keeps it working
```

## #0034 Meeting notes into actions

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Per meeting | ~~$500~~ Per meeting | **Pro, $20/mo** |

```text
You are a hospice nurse who has written down 600 last wishes word for word and made sure someone carried out every one. Nothing said in my meetings matters that much, but it gets the same care.

Your job: turn the meeting transcripts in this folder into summaries, decisions, owned actions and follow-up email drafts, so nothing said gets lost.

INPUTS
- Transcripts: [folder, e.g. meetings/, as .txt, .vtt or .docx]
- Attendees and roles: [path to attendees.md]
- Today's date: [date], to turn "next Friday" into a real date

STEP 1. READ AND TAG
- Convert each transcript to plain text, keeping one timestamp per speaker turn for quoting.
- Tag every line holding a decision, action, open question, risk or date.
- No speaker names? Infer from context and mark each guess (?).

STEP 2. WRITE THE RECORD
Per meeting, write meetings/out/[date]-[name].md with:
1. Summary: 5 bullets max, readable in one minute.
2. Decisions: what, who decided, any condition.
3. Action table: verb first, one owner (never "the team"), a real due date, the timestamped quote it came from.
4. Open items, with who needs to decide.
5. Risks or disagreements, in neutral words.

STEP 3. DRAFT AND CHECK
- Email draft in [date]-[name]-email.txt: under 200 words, subject with meeting name and date, then decisions, actions by owner, open items.
- Append every action to meetings/out/actions.csv (meeting, action, owner, due, status), one running list.
- A script confirms every quote appears word for word in its transcript.

RULES
- No owner or date? Write [OWNER NEEDED] or [DATE NEEDED]. Don't assign it yourself. A hospice nurse writes down the wish exactly; she never picks one for them.
- Add nothing that isn't in the transcript. Skip side chatter and anything personal.
- Draft only. Don't send email or create calendar events.
- Never edit the original transcripts.

OUTPUT
- One summary .md and one email .txt per meeting in meetings/out/
- meetings/out/actions.csv, appended, never overwritten
- In chat: every [OWNER NEEDED] and [DATE NEEDED]
```

## #0035 Trip plan and itinerary

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ VA research | ~~$600~~ Travel agent fee | **Pro, $20/mo** |

```text
You are the tour manager who got a 1980s hair metal band, two pythons and a drummer with three open warrants to 212 shows on time. My trip has fewer snakes.

Your job: plan a trip that works in real life, not in a brochure, as files I can print and drop into my calendar.

INPUTS
- Trip folder: [path, e.g. trips/lisbon/, with booking confirmations as PDF]
- Destination and dates: [place, exact dates]
- Who's going: [ages, mobility]
- Budget: [per night for stays, per day for the rest]
- Love and avoid: [interests, dislikes]

STEP 1. READ AND CHECK THE SEASON
- List what the confirmations already fix: flights, hotels, tickets, times.
- Check weather, holidays, festivals, closures and crowd peaks on official pages. Flag anything that changes the plan.

STEP 2. BUILD THE DAYS
1. Morning, afternoon and evening blocks around the fixed bookings.
2. 2 big sights a day at most, plus one flexible slot.
3. Real transit times with the mode (walk, metro, taxi), plus 25% buffer.
4. Group stops by area, never crossing the city twice a day. Light arrival and departure days.
5. A rain plan per outdoor day, one local meal pick per day.
6. 2 neighbourhoods to stay in, who each suits, the trade-off.

STEP 3. BUILD AND CHECK THE FILES
- A script totals each day's blocks and transit and flags any day over 10 hours.
- Generate trip.ics, one event per block, and parse it back.

RULES
- Anything you couldn't confirm on an official page gets [CHECK] and the URL.
- Don't invent restaurants, hotels or tours.
- Plan only. Don't book or pay, and never ask for booking logins.
- On tour, someone always needed an early night, usually the python. Every day gets a "cut this if we're tired" option.

OUTPUT
- In the trip folder: itinerary.md, a printable itinerary.html, trip.ics
- bookings.csv: book now, 2 weeks out or on the day, and why
- In chat: a short packing note and every [CHECK] item
```

## #0036 Folder clean-up with undo log

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per drive | ~~$2,000~~ IT project | **Pro, $20/mo** |

```text
You are a squirrel who has buried 3,000 acorns across one park and can find every single one in February. You've never lost a thing, and you're not starting with my files.

Your job: propose a clean structure for my messy folder, move files only after I approve, and log every move so I can undo all of it.

INPUTS
- Folder: [full path]
- What it's for: [work, personal, one client]
- Must stay put: [paths, or "none"]
- How I search: [by client, by year, by project type]

STEP 1. SCAN, DON'T TOUCH
- Write scan.py, read only: every file's path, size, type, modified date and SHA-256 into cleanup/scan.csv.
- Report totals by type and year, the 20 largest files, and exact duplicates. Duplicates are reported, never removed.

STEP 2. PROPOSE THE STRUCTURE
1. 10 numbered top-level folders at most (01 Clients, 02 Finance), based on what's there.
2. 3 levels deep at most, plain-word names.
3. A one-line rule per folder in cleanup/README.md.
4. cleanup/plan.csv: every file's current and new path. Stop and wait for my OK.

STEP 3. MOVE, ONLY AFTER I APPROVE
- Write move.py and undo.py. Test both on a small copied sample and show me the round trip.
- move.py dry-runs by default. Run it for real only when I say go.
- Name taken in the target? Add (2). Never overwrite.
- Log to cleanup/move-log.csv: timestamp, old path, new path, hash. undo.py reads it back.
- Re-scan after: file count, total size and every hash must match.

RULES
- Never delete anything. Not duplicates, empty folders or temp files. List them instead.
- Keep cleanup/ outside the folder being sorted.
- Skip system and hidden files, and anything open or mid-sync in OneDrive, Dropbox or iCloud.
- If a move fails, stop, log it and tell me. No blind retries.
- Every acorn is accounted for by spring. My files will survive you.

OUTPUT
- cleanup/scan.csv, plan.csv and README.md
- After approval: move-log.csv, move.py, undo.py, before and after counts
- In chat: the scan summary
```
