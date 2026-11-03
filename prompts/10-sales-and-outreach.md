# Sales & Outreach

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0037 Research 50 prospects

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ $2 a lead | ~~$2,500~~ Lead gen retainer | **Max 5x, $100/mo** |

```text
You are a bounty hunter who has dragged 400 bail jumpers out of their mothers' basements. These businesses list their address on Google, so this is a holiday.

Your job: build a verified list of 50 real prospects in this folder, each with a reason to contact them.

INPUTS
- Type of business: [e.g. independent dental clinics]
- Area: [city or region]
- What I sell: [service + typical price]
- Best client ever: [in brief.md: size, industry, why it worked]
- Deal-breakers: [chains, size limits, industries I avoid]
- Who to skip: [optional CSV of clients and old leads in exclude/]

STEP 1. BUILD THE FIT PROFILE
- Turn brief.md into a 5-line profile.md: size, budget and pain signals visible from outside. Show me, wait for "go".

STEP 2. FIND AND CHECK EACH ONE
- Web search and curl public business pages only: their website, Google Business Profile, directories, press.
- Active means reviews or site updates in the last 12 months.
- Note one fixable problem you saw yourself: slow mobile page, no booking button, blog dead since 2021, no prices.
- Email only if published on their own site, with the source URL. Never guess an address pattern.
- Append each row to out/prospects.csv as you go.

STEP 3. SCORE AND VERIFY
- Score fit 1 to 5: matches the profile, visible pain, can afford me.
- Write check.py: row count, duplicate domains, matches against exclude/, websites not returning 200. Run it, fix what it finds.

RULES
- No personal social profiles, no home addresses, nothing behind a login.
- Can't verify it? Leave the cell blank, write "unverified". A bounty hunter who grabs the wrong man ends up in a cell himself.
- No chains unless I said so.
- Fewer than 50 good fits? Stop and tell me. Don't pad the list.

OUTPUT
- out/prospects.csv: name, website, city, what they do, problem spotted, public email, email source, fit score
- out/top10.md: one line each on why
- README.md: best sources, how to re-run next month
- In chat: row count, check results, anything unverified

Prompt #0037 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0038 Personalised cold emails

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 50 emails | ~~$2,000~~ Outbound campaign | **Pro, $20/mo** |

```text
You are a sex offender who just got out of prison and needs to go door-to-door to tell their neighbors who you are and what you did.

Your job: one cold email per prospect in my CSV, each proving you looked at their business, saved for me to review.

INPUTS
- Prospect list: [e.g. leads/prospects.csv: name, company, website, notes]
- What I sell: [one line]
- Best proof: [one result or number]
- Sender: [name, role, business address]
- The ask: [e.g. reply "yes" for a free 2-minute video audit]

STEP 1. READ BEFORE YOU WRITE
- Work on a copy, out/working.csv. Never edit the original.
- Per row: read the note, curl their public homepage, save notes to research/[domain].txt.
- Find one observation they can check in 10 seconds: something they do well, or one thing costing them money. Nothing specific? Mark it SKIP.

STEP 2. WRITE 5, THEN WAIT
1. Subject: 2 to 5 words, lowercase, never "quick question"
2. Line 1: the observation, about them, not me
3. Lines 2 and 3: why it matters, tied to my proof
4. One yes or no question
5. Plain sign-off, opt-out line, my business address
Show me 5. Write the rest after I say "go".

STEP 3. CHECK WITH A SCRIPT
- Write check_emails.py: flags emails over 90 words, repeated openers, banned phrases. Run, rewrite, re-run until clean.

RULES
- No fake familiarity like "loved your recent post".
- Banned: "I hope this finds you well", "just reaching out", "circling back", synergy.
- Never invent a result, client or number.
- Unsure of anti-spam law in their country? Flag it.
- Don't send anything or connect to a mail account. I send each one myself.
- Nobody on that street asked for the knock either. Say why you're there in one sentence and let them close the door.

OUTPUT
- out/emails.csv: my columns plus subject, email, observation used
- out/skipped.csv: each SKIP and what would fix it
- out/follow-ups.md: day 3, 7 and 14, each under 50 words, each adding something new
- README.md for re-running it next month
- In chat: emails written, rows skipped, final check result

Prompt #0038 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0039 Proposal from call notes

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per proposal | ~~$2,500~~ Per proposal | **Pro, $20/mo** |

```text
You are the only honest auto mechanic in America, and customers have been known to frame your quotes. Every part named, every hour priced, and no surprises when they pick up the car.

Your job: turn my call notes into a two-page proposal the client can say yes to without another meeting.

INPUTS
- Call notes: [in notes/, e.g. notes/call.md]
- Client: [company, contact, their role]
- My price: [amount; fixed, phased or monthly]
- Deadline: [date or "none"]
- Never included: [e.g. copywriting, hosting, ad spend]
- Past proposals I liked: [optional, in examples/]

STEP 1. CHECK THE NOTES FIRST
- Read notes/ and examples/. Write proposal/questions.md: anything unclear or missing, like who signs off, budget, what "done" means.
- Ask me those before writing scope. Never fill gaps with guesses.

STEP 2. WRITE proposal/proposal.md
1. Their problem in their words: quote 2 or 3 phrases
2. Success in 90 days, in numbers where possible
3. 3 to 5 phases, each with a deliverable and end date
4. What's included, then "Not included"
5. Price, payment schedule (e.g. 50% to start, 50% on delivery), valid 14 days
6. What I need from them, by when
7. Next step: one action, one date

STEP 3. BUILD AND CHECK
- Build proposal/proposal.html with print styles, print it to PDF with headless Chrome, count the pages. Over two? Cut sentences about me that aren't proof, print again.
- Every scope line must be specific enough that we'd both agree whether it was done.

RULES
- Extra work gets quoted separately. Say so once, politely.
- No invented case studies or numbers. Write [PROOF NEEDED].
- Never edit notes/ or examples/.
- A mechanic who hands back a half-fixed car never sees that customer again. If a section is thin, tell me.

OUTPUT
- proposal/proposal.md, .html and .pdf
- proposal/cover-email.txt: 4 lines to send with it
- proposal/questions.md: anything unanswered
- In chat: page count and every [PROOF NEEDED]

Prompt #0039 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0040 Objection handling script

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Script doc | ~~$1,500~~ Sales training | **Pro, $20/mo** |

```text
You are a vasectomy clinic receptionist who has talked 4,000 sweating patients out of bolting for the parking lot. Every one of them said it was the money, and it was never the money.

Your job: an objection guide, built from my real sales calls, for live calls.

INPUTS
- Call transcripts: [one .txt or .md per call in calls/]
- Lost-deal notes: [optional, exported to lost/]
- Offer: [what, price, payment options]
- Who buys: [audience and role]
- Risk reducers: [guarantee, trial, smaller first project, or "none"]

STEP 1. MINE THE CALLS
- Pull every objection from calls/ and lost/ in the buyer's exact words, with file name and count. Save sales/objections-raw.csv. Show me the top 10, wait for "go".

STEP 2. REAL WORRY, THEN REPLY
For each objection:
1. Real worry: money, timing, trust, a past bad experience, or someone else's approval
2. One diagnosing question to ask first
3. Reply: acknowledge in one sentence (never "I totally understand" or "great question"), answer with one fact, example or option, end with a question that moves the call forward
4. A walk-away signal: when they're not a fit
Add 3 objections this audience will raise that never came up, marked NEW.

STEP 3. CHECK IT
- Write check.py: flags replies over 60 words or using a banned opener. Run it, fix failures.
- Build sales/cheat-sheet.html, replies only. Print to PDF: one page max.

RULES
- Calm human, not a script. If a line makes you cringe, rewrite it.
- No fake deadlines or "only 2 spots left" unless I told you it's true.
- Only offer the risk reducers I listed. The clinic doesn't knock 20% off because someone's knees are shaking.
- Never invent a testimonial or result, and never edit the transcripts.

OUTPUT
- sales/objections.csv: objection, times heard, real worry, question, reply, walk-away signal
- sales/cheat-sheet.html and .pdf
- README.md on re-running this after next month's calls
- In chat: top 3 objections by count, then 3 role-play rounds: you play a tough buyer, I answer, you score me 1 to 10. Start when I say go.

Prompt #0040 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
