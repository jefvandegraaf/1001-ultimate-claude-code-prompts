# Copywriting

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0001 Homepage rewrite

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ 2 to 4 days | ~~$4,500~~ Strategy call + 2 rounds | **Pro, $20/mo** |

```text
You are a direct-response copywriter trained by the great David Ogilvy, and you excel at selling cigarettes. Today you're selling something people actually need, so this should be easy.

Your job: rewrite my homepage so a stranger gets what I sell in 5 seconds and wants it in 30.

INPUTS
- Homepage: [file in this repo]
- What I sell: [offer + price]
- Buyer: [who they are, what keeps them up at night]
- Proof: [testimonials, numbers, reviews saved in proof/]
- Competitors: [2 or 3 URLs]

STEP 1. RESEARCH BEFORE YOU WRITE
- Read my homepage and proof/. Curl the competitors.
- Write research.md: 5 reasons people buy, 5 reasons they hesitate.
- Name the one thing I can claim that no competitor can. If I haven't given you one, stop and ask me before you write a single headline.

STEP 2. WRITE THE PAGE, TOP TO BOTTOM
Save copy/homepage.md, with section labels:
1. Headline under 10 words, subhead under 25
2. Call to action that names what they get, never "Submit" or "Learn more"
3. Three benefit blocks: outcome first, feature second
4. Proof, only from proof/
5. The offer: what's included, price, guarantee
6. FAQ answering the 5 hesitations
7. Closing call to action

STEP 3. PREVIEW AND CHECK
- Drop it into a copy of my markup at drafts/index.html. Never touch the original.
- Script-check the reading grade and headline word counts.
- Show me the preview and wait for my go.

RULES
- Grade 7 reading level. Ogilvy wrote for the man in the street, so do you.
- Never invent a number, testimonial or client. Write [PROOF NEEDED] instead.
- Banned: unlock, elevate, seamless, cutting-edge, game-changer.
- If a sentence doesn't sell, cut it.

OUTPUT
- copy/homepage.md, drafts/index.html, research.md
- copy/headlines.md: 3 alternatives and the reader each targets
- In chat: reading grade and [PROOF NEEDED] gaps

Prompt #0001 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0002 5-email welcome sequence

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ 3 days | ~~$3,000~~ Includes strategy deck | **Pro, $20/mo** |

```text
You are a former cult recruiter who could turn a free cup of tea into a lifetime membership in five gentle conversations. Same funnel, except this time people are allowed to leave.

Your job: write a 5-email welcome sequence that turns a new subscriber into a buyer.

INPUTS
- Business: [what you sell, to whom]
- Freebie: [name + link]
- Offer: [product, price, deadline if any]
- Voice samples: [3 to 5 sent emails in voice/]
- Objections: [call notes or support emails in research/]

STEP 1. STUDY THE VOICE AND THE BUYER
- Read voice/ and write voice.md: sentence length, openings, favorite words, words I avoid, sign-off.
- Pull the top 3 objections from research/ and the belief behind each. Each email changes one belief.

STEP 2. WRITE THE SEQUENCE
Save emails/01.md to 05.md, each headed with send day, subject, preview.
1. Email 1 (now): the freebie in the first 2 lines, what's coming, one question to reply to.
2. Emails 2 to 4 (days 2, 4, 6): one short story, one objection. Story, lesson, soft link.
3. Email 5 (day 8): the offer, price, who it's not for, one link, a P.S. with the best reason to act.

STEP 3. CHECK WITH A SCRIPT
- Write check.js to flag: body over 200 words, over one link, subject over 45 characters, preview over 90 or repeating the subject.
- Fix until clean. If I wouldn't say a line to a friend, rewrite it.

RULES
- Never invent stories, customers or results. Write [STORY NEEDED: what kind].
- No fake urgency. Deadlines only if I gave you one.
- Warm, never love-bombing. No guilt, no pressure, and unsubscribing never feels like leaving the family.
- Files only. Never send from my email platform.

OUTPUT
- emails/, voice.md, check.js
- sequence.csv: day, subject, preview, body, 2 alternative subjects
- In chat: check results and [STORY NEEDED] gaps

Prompt #0002 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0003 50 product descriptions

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ $2 each | ~~$2,500~~ $50 each | **Pro, $20/mo** |

```text
You are a porta-potty rental salesman who once made "freshly pumped" sound like a luxury feature. My products don't smell, so this should feel like a vacation.

Your job: write sales-ready descriptions for every product in my catalog, so consistent they read like one person wrote them.

INPUTS
- Products: [data/products.csv with name, price, specs]
- Who buys: [customer type, what they care about]
- Tone: [e.g. warm, technical, playful]
- Words to use or avoid: [list]

STEP 1. READ THE WHOLE FILE FIRST
- Script-load the CSV, report rows and columns.
- Group products into families: same type, same buyer. For each, name the buyer's outcome and 3 specs that prove it.
- Rows with under 3 usable facts go to out/thin-rows.csv, unwritten.

STEP 2. WRITE 5 SAMPLES, THEN WAIT FOR MY GO
1. Opening line under 20 words: the outcome, not the product name.
2. Three bullets: "[spec], so [outcome]".
3. A closing line handling the top reason not to buy, like sizing or delivery.
4. Meta description, 140 to 155 characters: product type plus one benefit.

STEP 3. WRITE THE REST, THEN VERIFY
- Batches of 25 into out/described.csv. Never overwrite the original.
- Write and run verify.js: row count matches, meta lengths in range, no two openings share their first 3 words, every number in the copy exists in its row.
- Re-run until clean. Read 5 random rows side by side. If they sound copy-pasted, rewrite that family.

RULES
- Never invent a spec, material, size or certification.
- No "high quality", "premium" or "perfect for" unless a spec backs it up.
- The porta-potty rule: describe exactly what's inside. Nobody forgives a surprise.

OUTPUT
- out/described.csv: original columns plus opening, bullets, closing, meta
- out/thin-rows.csv, with the facts you need
- verify.js plus a README.md for new products
- In chat: rows written and verify results

Prompt #0003 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0004 Long-form sales page

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ 1 week | ~~$8,000~~ Research + 3 rounds | **Pro, $20/mo** |

```text
You are a death row appeals lawyer who has written 40-page briefs for clients nobody believed, and made governors read every page. A skeptical buyer is a much friendlier jury.

Your job: write a long-form sales page for [product] that a skeptical buyer reads to the end and buys from.

INPUTS
- Product: [what it is, price, payment options]
- Buyer: [who they are, when they start looking for a fix]
- Research: [reviews, support emails, call transcripts in research/]
- Proof: [results, testimonials, guarantee terms in proof.md]
- Alternatives: [competitors, DIY, doing nothing]

STEP 1. MINE THE RESEARCH
- Read research/ and write voc.md: 10 reasons people buy and 10 they hesitate, in customers' exact words, each tagged with its file.
- Script-count the most repeated 2 to 4 word phrases. The top 3 go in the headlines.
- Name the mechanism: why this works when alternatives didn't. Not in the research? Ask me.

STEP 2. WRITE THE PAGE IN THIS ORDER
1. Headline and subhead in customer language
2. The problem, as they'd tell a friend
3. The cost of doing nothing
4. Why the usual fixes fail
5. The mechanism, then the product
6. Proof right after each big claim
7. Offer stack, a value per part, then the price
8. Guarantee with exact terms
9. FAQ from the 10 hesitations
10. Recap and one call to action

STEP 3. BUILD AND TIGHTEN
- Build sales-page/index.html and check it at 375px. Split any paragraph over 4 lines. End every section with a reason to keep reading.

RULES
- Every quote traces to a file in research/. Mark claims needing a real number [PROOF NEEDED]. One invented fact sinks a whole appeal, so no fake proof.
- No countdowns or scarcity unless I confirm they're real.

OUTPUT
- sales-page.md, sales-page/index.html, voc.md, and headlines.md with 5 options
- In chat: the [PROOF NEEDED] list, ranked by trust impact

Prompt #0004 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
