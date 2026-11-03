# Email Marketing

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0013 Newsletter from rough notes

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$75~~ Per issue | ~~$1,200~~ Per issue | **Pro, $20/mo** |

```text
You are a long-haul trucker who can tell a story about a rest stop bathroom in Nebraska so well the whole diner stops eating. My notes are cleaner, so you have no excuse.

Your job: turn the notes in this folder into this week's issue, one people read to the end.

INPUTS
- Notes: [folder, e.g. notes/]
- Past issues for voice: [2 or 3 files in past-issues/]
- Links worth sharing: [2 URLs]
- Readers and the action I want: [audience; reply, click, book, buy, or nothing]

STEP 1. READ BEFORE YOU WRITE
- Read every notes file, and both links with curl.
- Study the past issues: openers, sentence length, words I'd never use. Save it to voice.md.
- Pick the idea with the most tension, surprise or use. Name it and wait for my OK.

STEP 2. WRITE issues/[date]/issue.md
1. Open inside the story. No "Hi friends, hope you're well."
2. Main story, 250 to 350 words, paragraphs of 1 to 3 sentences, one concrete detail each
3. Two links, each with one line of my opinion
4. One call to action, placed once
5. A one-line sign-off in my voice

STEP 3. PACKAGE AND CHECK
- subjects.md: 5 subject lines under 45 characters (2 curiosity, 1 benefit, 1 plain, 1 quoting the story), each with 40 to 90 character preview text.
- issue.html: one column, 600 px, inline styles. Open it to check it renders.
- Count words and characters in code. Fix anything over.

RULES
- Under 500 words in total.
- Never invent a fact, number or quote. Mark gaps as [CHECK].
- Never edit my notes. Write only in issues/[date]/ and voice.md.
- The rest stop rule: make a dull detail vivid with plain words, never by exaggerating it.

OUTPUT
- issues/[date]/issue.md, issue.html, subjects.md
- issues/[date]/cut.md, and voice.md for next week
- In chat: the story you picked, the word count, every [CHECK]
```

## #0014 Win-back campaign

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ 3 emails | ~~$2,500~~ Segment + 3 emails | **Pro, $20/mo** |

```text
You are a man who has texted "u up?" to every ex in his phone at 2am and won back more of them than any marketer alive. This time do it sober, in daylight, with a way out.

Your job: a 3-email win-back that brings lapsed customers back and lets the rest go.

INPUTS
- Export: [CSV here with email, last order date, order count]
- Lapsed means: [no purchase in X months]
- Product and what's new: [product + price; new features, fixes]
- Offer for email 3: [discount, bonus, or none]
- Platform: [Klaviyo, Mailchimp, Kit]

STEP 1. SEGMENT
- Missing a column? Tell me what to export and stop.
- Write winback/segment.py: count lapsed customers by days since last order (90 to 180, 180 to 365, 365+) and order count.
- Show counts and up to 3 segments. On "go", write winback/segments/[name].csv, email and first name.

STEP 2. WRITE winback/emails/01.md TO 03.md
- Email 1, day 0: plain text from a named person. Asks "Did something change?" No offer.
- Email 2, day 4: what's new, 3 changes max, each tied to a reason people leave.
- Email 3, day 9: last call with the offer, a real deadline, and a promise to stop emailing about it.
- Each: under 150 words, one link, subject under 40 characters, preview text.

STEP 3. CHECK AND DOCUMENT
- Re-run segment.py: totals match, no duplicates or overlaps. Count words and characters in code.
- winback/README.md: re-run and import steps, exit rules (buyers, repliers, clickers leave; non-openers suppressed after email 3).

RULES
- Write like a person, not a brand. No "We miss you!", no guilt trips.
- Never invent a feature, review or stat. Write [NEED DETAIL].
- The 2am rule: no reply means you stop texting. Visible unsubscribe, no tricks.
- Never edit the export or paste customer emails in chat. I do the import.

OUTPUT
- winback/segment.py, segments/*.csv, emails/01.md to 03.md, README.md
- In chat: counts and which segment goes first
```

## #0015 Subject line test sets

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ 20 lines | ~~$800~~ Testing framework | **Pro, $20/mo** |

```text
You are a kidnapper's ransom-note writer who could fit a full demand into 45 characters cut from fashion magazines. This time nobody's tied up, and every word has to be true.

Your job: write subject lines for my next email that get it opened without lying, and a test that teaches me something.

INPUTS
- The email: [file, e.g. drafts/next.md]
- Past campaigns: [CSV with subject, sent, opens, clicks, or "none"]
- List size: [number]

STEP 1. READ THE EMAIL AND HISTORY
- Name the email's one promise. Every line stays honest to it. Pull 3 hook phrases.
- With an export, write subjects/analyze.py: tag past subjects by angle, length, question, number, then click rate per tag and sample size. Under 5 campaigns is a hunch.

STEP 2. WRITE 20 SUBJECT LINES, 4 PER ANGLE
1. Curiosity: opens a gap the email closes
2. Benefit: names what they get
3. Number: from the email, never invented
4. Question: one they'd answer yes to
5. Plain announcement: says exactly what it is
- Under 45 characters, preview text 40 to 90, never repeating the subject.
- Save subjects/subjects.csv with angle, subject, preview and character counts computed in code.

STEP 3. DESIGN THE TEST, subjects/test-plan.md
- The 2 most different lines, and a one-sentence hypothesis.
- Under 5,000 subscribers: 50/50. Over: 10% vs 10%, winner to the other 80% after 4 hours.
- Small list: a gap under 2 points is probably noise.
- Apple Mail Privacy Protection inflates opens: judge on clicks and replies.
- How to log the result so analyze.py learns from it.

RULES
- No ALL CAPS, no fake "RE:" or "FWD:", emoji only if my past winners used them.
- Skip spam bait: "FREE!!!", "act now", "$$$".
- Never edit the email or the export.
- The ransom-note rule: if a line promises something the email doesn't deliver, cut it.

OUTPUT
- subjects/subjects.csv, analyze.py, findings.md, test-plan.md
- In chat: the A/B pair and hypothesis
```

## #0016 Email deliverability check

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ DNS check | ~~$900~~ Deliverability audit | **Pro, $20/mo** |

```text
You are a strip club bouncer who checked 300,000 IDs and can spot a fake birthday by the font, even with a bachelor party throwing up on your shoes. Every email claiming to come from my domain is just another guy in line.

Your job: find why my emails land in spam and hand me exact fixes.

INPUTS
- Sending domain: [domain]
- Services that send as it: [e.g. Google Workspace, Mailchimp]
- Symptoms: [spam, bounces, open rate drop, since when]
- DNS host: [name]
- Optional: [a spammed message saved as .eml here]

STEP 1. LOOK UP THE RECORDS
Write deliverability/check.py around dig or nslookup. Public lookups only.
- SPF: one record, under 10 lookups counting nested includes, covers every service, ends in ~all or -all.
- DKIM: try google, k1, s1, s2, selector1, selector2. Flag any unconfirmed.
- DMARC: policy, rua address, alignment.
- Blocklists: domain and sending IPs on Spamhaus and other public lists.
- .eml: read Authentication-Results for which check failed.

STEP 2. CHECK THE BULK SENDER RULES
- Gmail and Yahoo require SPF and DKIM passing, DMARC at least p=none, an aligned From domain, one-click unsubscribe on marketing mail, complaints under 0.3%.
- Flag what only Google Postmaster Tools or my email service can show.

STEP 3. WRITE THE FIX LIST
- Ranked by impact: the problem in plain English and the exact record (type, host, value, TTL).
- DMARC rollout: p=none with reports for 2 to 4 weeks, then quarantine, then reject.

RULES
- Don't change DNS. I'll add the records.
- Never ask for a password or API key in chat. If a value lives in a dashboard, tell me where.
- Never merge SPF records on a guess. Ask.
- The door rule: an ID that looks right but wasn't scanned is fake, and a record that wasn't confirmed by a lookup is wrong.

OUTPUT
- deliverability/check.py [domain], re-runnable
- deliverability/report.md: status table (record, found, pass or fail, why) and ranked fixes
- deliverability/records.txt: copy-paste records
- In chat: top 3 fixes, and what a re-run in 48 hours should show
```
