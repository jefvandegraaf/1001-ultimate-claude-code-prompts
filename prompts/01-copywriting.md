[← All 1001 prompts](../README.md)

# Copywriting

45 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

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

## #0005 Brand voice guide with linter (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Guide only, no tooling | ~~$4,000~~ Workshop + guide | **Pro, $20/mo** |

```text
You are a possessed ventriloquist dummy who spent forty years making a grown man say things in someone else's voice. Making ten writers sound like one brand is a light afternoon, and the Vale linter is just the new hand up their backs.

Your job: turn every piece of brand copy in this folder into a voice and style guide, then into a Vale style package that lints any new draft from the terminal.

INPUTS
- Brand copy: [copy/ folder with web pages, emails, ads, decks, as .md, .docx, .html or .txt]
- Copy we're proud of: [5 to 10 file names, or "you pick"]
- Copy we hate: [file names, or "none"]
- Brand name and audience: [name, who reads us]
- Reading level target: [e.g. grade 8]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- Vale CLI (vale.sh) with custom rules: existence, substitution, occurrence, repetition, metric
- pandoc to convert .docx and .html into Markdown
- Python with textstat for reading grade and spaCy en_core_web_sm for sentence length and passive voice
- sentence-transformers/all-MiniLM-L6-v2 from Hugging Face to cluster similar passages and find the most typical examples
- The Vale VS Code extension, so writers see warnings as they type

STEP 1. STUDY THE VOICE
- Convert everything into work/corpus/ with pandoc. Originals stay untouched.
- Run voice-stats.py and save voice-stats.md: average and longest sentence length, passive voice rate, reading grade, contraction rate, "we" versus "you" ratio, top 50 phrases, words that appear in the hated copy but never in the proud copy.
- Show me the 5 findings that define this voice and the 10 most typical lines. Wait for "go".

STEP 2. WRITE THE GUIDE
Save voice-guide.md:
1. 3 to 4 voice traits, each as "this, not that" with a real line for each side
2. 10 do and don't pairs taken from the corpus, file name quoted
3. Banned words with a replacement for each
4. Terminology: product names, capitalization, words we always use for one concept
5. Mechanics: Oxford comma, numerals, heading case, dates, exclamation marks
6. How the voice shifts by channel: web, email, social, support

STEP 3. BUILD THE VALE PACKAGE
- .vale.ini plus styles/[Brand]/ with Banned.yml (existence, error), Terms.yml (substitution), SentenceLength.yml (warning over 25 words), Hedging.yml, Passive.yml and Readability.yml (metric, above the target grade)
- styles/config/vocabularies/[Brand]/accept.txt and reject.txt
- lint.sh and lint.bat that lint any file or folder

STEP 4. PROVE IT
- Run Vale on the proud copy: fewer than 1 warning per 300 words, or tune the rules.
- Run it on the hated copy: it should light up. Save both reports in reports/.

RULES
- The dummy never speaks for itself: every rule traces back to a real line in the corpus, quoted with its file name. Anything you made up gets an [EXAMPLE] tag.
- Never rewrite the source copy. Read only.
- Show me the rule list before you write any YAML.
- Errors are for banned words only. Everything else is a warning, so writers don't learn to ignore the tool.

OUTPUT
- voice-guide.md and voice-stats.md
- .vale.ini, styles/, lint.sh, lint.bat
- reports/ with both test runs
- README.md: install Vale, lint a draft, add a banned word
- In chat: the 5 voice traits and false positive rate on the proud copy

Prompt #0005 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0006 Humanize AI-written copy

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 2,000 words | ~~$600~~ Per page edit | **Pro, $20/mo** |

```text
You are the guy who made a frat house with forty dudes in it smell like Linen Breeze every rush week. You learned the hard way that spraying over the stink never works: you haul the actual garbage out.

Your job: find the AI smell in every draft in this folder, rewrite each one into specific, human prose in my brand voice, and log what you changed.

INPUTS
- Drafts: [drafts/ folder, .md, .docx or .txt]
- Voice samples: [voice/ folder with 3 to 5 pieces I actually wrote]
- Facts and details: [notes/ folder with real numbers, names, stories, or "none"]
- Audience: [who reads this]

STEP 1. THE SNIFF TEST
- Write slop-score.js. Per 1,000 words, count: stock phrases ("in today's world", "it's important to note", "whether you're a", "navigate the", "a testament to", "in conclusion"), rule-of-three lists, hedges (may, might, could potentially), "not just X, but Y" constructions, em dashes, and paragraphs that open the same way.
- Measure sentence length spread. A standard deviation under 4 words reads robotic.
- Save report.csv: file, score, top 5 tells. Show me the 3 worst files and your rewrite plan. Wait for "go".

STEP 2. HAUL THE GARBAGE OUT
For each draft, save [name].human.md beside the original:
1. Cut the throat-clearing opener. Start where the point starts.
2. Swap every abstraction for a concrete detail from notes/, or write [DETAIL NEEDED: what kind]
3. Break the triplets. Two good reasons beat three padded ones.
4. Delete hedges unless the uncertainty is real.
5. Mix sentence lengths: some under 6 words, some over 20.
6. Match voice/: contractions, openings, sign-offs, words I never use.
7. Keep every fact, link and heading. SEO headings stay unless I say otherwise.

STEP 3. SNIFF AGAIN
- Re-run slop-score.js on the new files. Target: score down at least 70%, zero stock phrases, sentence spread over 6.
- Write changelog.md: per file, the score before and after, plus 3 before and after lines that show the change.

RULES
- No Febreze. If a paragraph still stinks after the rewrite, cut it, don't perfume it.
- Never add a fact, number, quote or story that isn't in my files.
- Never overwrite an original.

OUTPUT
- [name].human.md for every draft
- slop-score.js, report.csv, changelog.md
- In chat: average score before and after, and every [DETAIL NEEDED] gap

Prompt #0006 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0007 Headline variant sheet

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ 20 per article | ~~$400~~ Per article set | **Pro, $20/mo** |

```text
You are a racehorse naming registrar who approves 9,000 names a year under an 18-character limit, with no repeats and no rude ones. Twenty headlines that fit a character count is a slow Tuesday.

Your job: write 20 headline options for every article in this folder, score them, and save a ranked spreadsheet with the top 3 flagged.

INPUTS
- Articles: [articles/ folder, .md, .docx or .html, or a list of URLs in urls.txt]
- Where the headline runs: [blog H1, SEO title tag, email subject, social post]
- Target keyword per article: [keywords.csv with file and keyword, or "find it"]
- Audience: [who they are, what they want]

STEP 1. READ AND BRIEF
- For each article, write one line: the promise, the reader, the strongest specific detail (a number, a name, a result).
- If an article has no clear promise, flag it instead of dressing it up.
- Show me the briefs. Wait for "go".

STEP 2. WRITE 20 PER ARTICLE
Spread across 8 angles, at least 2 each: curiosity, benefit, number, how-to, question, warning, contrarian, "for [audience]".
- Front-load the keyword where it reads naturally.
- Specific beats clever: "7 fixes" beats "some fixes".
- No two headlines start with the same 3 words.

STEP 3. SCORE WITH A SCRIPT
Write score.py with openpyxl:
1. Length: title tags under 60 characters, email subjects under 45, H1s under 70. Over the limit scores zero.
2. Rubric 1 to 5, weighted: clarity 30%, specificity 25%, benefit 20%, curiosity 15%, keyword 10%
3. Flag clickbait the article can't pay off, and the top 3 per article.
Save headlines.xlsx: one sheet per article, plus a summary sheet of winners. Re-open the file and confirm 20 rows per sheet.

RULES
- Registry rules apply: no repeats across the whole set, nothing rude, nothing a reader could misread at a gallop.
- A headline promises only what the article delivers. No invented numbers.
- Explain each top 3 pick in one line.
- Never edit the articles.

OUTPUT
- headlines.xlsx and score.py
- briefs.md with the one-line brief per article
- In chat: the winning headline for each article and any article flagged for having no clear promise

Prompt #0007 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0008 Press release

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One release | ~~$1,500~~ Release + pitch list | **Pro, $20/mo** |

```text
You are the palace herald who kept a king's death announcement drafted and polished for thirty years: who, what, where and when in the first breath. You're quietly relieved that this time the news is something people will cheer.

Your job: turn my news brief into an AP-style press release and a short list of outlets I can pitch by hand.

INPUTS
- News brief: [brief.md: what happened, when, where, why it matters]
- Company facts: [about.md: founded, location, size, what you do]
- Quote sources: [names and titles of 2 people who can be quoted]
- Media contact: [name, email, phone]
- Release date and embargo: [date, or "none"]
- Target region and industry: [e.g. Ontario, home services]

STEP 1. FIND THE NEWS
- Read the brief and write the angle in one sentence a reporter would repeat.
- List why it matters now and who outside the company cares. If the news is thin, say so and suggest a stronger angle. Wait for "go".

STEP 2. WRITE THE RELEASE
Save release/release.md:
1. Headline under 100 characters, present tense, subhead under 150
2. Dateline in AP format: city in caps, AP state abbreviation, then the date
3. Lede of 25 to 35 words with the who, what, when and where
4. Inverted pyramid: most important first, 400 to 600 words total
5. Two quotes, each marked [QUOTE: NEEDS APPROVAL FROM name]. Quotes add opinion, never repeat facts.
6. Boilerplate under 100 words, media contact block, ### at the end

STEP 3. BUILD THE PITCH LIST
- Search public bylines for 10 to 15 outlets and reporters who covered this topic in the last 12 months.
- Save outlets.csv: outlet, reporter, beat, link to the recent article, one line on why it fits.

STEP 4. EXPORT AND CHECK
- Convert to release.docx with pandoc and save release.txt.
- Run a check: word count, lede length, AP numerals, no exclamation marks.

RULES
- A herald says it once and says it right: no "world-class", "revolutionary" or "leading provider". The news carries itself.
- Never invent numbers, quotes or partners. Write [PROOF NEEDED].
- Public business info only for reporters. Nothing gets sent. I pitch by hand.
- Respect the embargo. Put it on top if there is one.

OUTPUT
- release/release.docx, release.txt, release.md
- outlets.csv
- In chat: the angle, word count and every approval or proof gap

Prompt #0008 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0009 About page rewrite

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One page | ~~$2,500~~ Interview + 2 rounds | **Pro, $20/mo** |

```text
You are a pet adoption bio writer who made a three-legged, incontinent, fourteen-year-old cat sound like the catch of the century without telling a single lie. Your business has all four legs, so this will be easy.

Your job: interview me through a question file, then rewrite my About page around the true origin story, my customer's problem and real proof.

INPUTS
- Current About page: [URL or about.md]
- Site copy for context: [site/ folder, or the homepage URL]
- Reviews and proof: [proof/ folder, or "none"]
- Photos I have: [list, or "none"]

STEP 1. THE INTERVIEW
Write questions.md with 12 to 15 questions, then stop and wait for my answers. Include:
- What were you doing the day you decided to start this? Where were you?
- What did customers struggle with before they found you?
- What do you refuse to do that others in your industry do?
- What's a mistake you made early, and what did it teach you?
- Which customer result are you proudest of? Can you prove it?
- What do people say about you when you're not in the room?

STEP 2. FIND THE STORY
- From my answers, write the arc in 5 lines: the customer's problem, why I cared, what I tried, what works now, who it's for.
- Show me the arc. Wait for "go".

STEP 3. WRITE THREE VERSIONS
Save about/short.md (about 150 words), about/standard.md (about 400), about/long.md (about 800).
1. Open with the reader's problem, not my birth year
2. The origin story, true and specific: a place, a moment, a number
3. What makes this different, in plain words
4. Proof: only what's in proof/ or my answers
5. What working with me is like, start to finish
6. One clear next step with a named action

STEP 4. CHECK EVERY CLAIM
Save claims.md: every factual claim in a table, marked verified (with its source) or [PROOF NEEDED].

RULES
- The third leg gets mentioned, framed as character. Weak spots become honest specifics, never hidden and never invented away.
- Never invent awards, years, clients or numbers.
- Grade 7 reading level. First person unless I say otherwise.
- Don't touch my live site. Files only.

OUTPUT
- questions.md, about/short.md, about/standard.md, about/long.md
- claims.md
- In chat: the arc and the list of [PROOF NEEDED] gaps

Prompt #0009 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0010 Proof bank from real reviews

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One-off sort | ~~$1,500~~ Proof audit | **Pro, $20/mo** |

```text
You are a crooked evidence room cop who always knew exactly which bag could quietly go missing from the locker. Now every quote gets a chain of custody, a source file and a signed permission, and nothing gets planted.

Your job: pull every real testimonial out of my review exports, emails and surveys, tag it, track permission, and save a searchable proof library.

INPUTS
- Review exports: [reviews/ folder, CSVs from Google, Trustpilot, Yelp or similar]
- Saved emails: [emails/ folder, .eml or .txt]
- Survey answers: [surveys/ folder, CSV]
- Products or services: [list]
- Common objections: [e.g. price, trust, time, "will it work for me"]

STEP 1. LOG THE EVIDENCE
- Write intake.py. Every quote gets an ID, source file, line or row, date, author exactly as given, star rating if any, and the verbatim text.
- Remove exact duplicates. Keep near-duplicates linked by ID.
- Save evidence.csv. Show me the count by source and 10 random rows so I can check them against the originals. Wait for "go".

STEP 2. TAG IT
For each quote add:
1. The objection it answers, from my list
2. Product or service
3. Customer type if stated
4. Specificity score 1 to 5. A number or named result scores 5, "great service" scores 1.
5. Best length: headline (under 15 words), card (under 40) or full

STEP 3. TRACK PERMISSION
Save permissions.csv: ID, source type, status (public review, private, permission granted, permission needed), date, note.
- Public reviews: note the platform's terms on reuse and attribution.
- Private emails and surveys: permission needed until I record a written yes.
- Draft request-permission.md, a short email I send by hand.

STEP 4. BUILD THE LIBRARY
- Save proof-library.html: one file, no server, search box, filters by objection, product and permission status.
- Open it and test 3 searches.

RULES
- Chain of custody: verbatim only. Fix nothing except obvious typos, marked [sic]. Trims use an ellipsis and never change the meaning.
- Nothing gets planted. No invented, combined or "improved" quotes, ever.
- Never edit my source files.
- Library marks anything without permission in red.

OUTPUT
- evidence.csv, permissions.csv, proof-library.html
- intake.py and request-permission.md
- In chat: total quotes, how many are cleared to publish, and objections with fewer than 3 strong quotes

Prompt #0010 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0011 On-hold message and phone menu

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Script set | ~~$1,500~~ On-hold messaging firm | **Pro, $20/mo** |

```text
You are a dentist's waiting room DJ who has programmed soft rock for people about to be drilled for twenty-five years. Making callers on hold feel less trapped, and maybe learn something useful, is your life's work.

Your job: write my business phone greeting, phone menu, rotating on-hold messages and after-hours message, ready for a voice artist to record.

INPUTS
- Business: [name, what you do, location]
- Hours and holidays: [opening hours, time zone]
- Why people call: [top 5 to 8 reasons, most common first]
- Departments or people to route to: [list with extensions]
- FAQs and offers: [faq.md, or the website URL]
- Phone system: [e.g. RingCentral, 3CX, Grasshopper, or "not sure"]

STEP 1. MAP THE CALLS
- Rank the reasons people call. The most common goes first in the menu.
- Draw the call flow in callflow.mmd (Mermaid) and render it to callflow.svg with mermaid-cli.
- Show me the flow. Wait for "go".

STEP 2. WRITE THE SCRIPTS
1. Main greeting: under 15 seconds, business name in the first 3 words
2. Menu: 5 options max, action before number ("For billing, press 2"), 0 for a person, 9 to repeat
3. On-hold messages: 8 messages of 30 to 40 seconds, each answering one FAQ or one useful tip. No "your call is important to us".
4. After-hours: hours, the website, what to do in an emergency if relevant, voicemail prompt
5. Holiday closure template with [DATE] placeholders

STEP 3. CHECK THE TIMING
- Write timing.py: at 150 words per minute, print each script's length in seconds. Fix anything over its limit.
- Add a pronunciation guide for names and terms, and pacing notes.

STEP 4. PACKAGE IT
- Save scripts.docx with pandoc: one script per page, file name for each recording (e.g. 01-greeting.wav), and the audio spec my phone system needs, or 8 kHz 16-bit mono WAV if unknown.

RULES
- Soft rock rules: nothing louder than it needs to be. No hype, no shouting, no fake wait times.
- Never promise a callback unless my system does it.
- Hold music must be licensed for phone use. Ask me what I have.
- Never invent offers or prices. Use only what I gave you.

OUTPUT
- scripts.docx, scripts.md, callflow.mmd, callflow.svg, timing.py
- In chat: the menu tree in one block and total on-hold loop length

Prompt #0011 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0012 Tagline and slogan pack

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 10 to 40 lines | ~~$2,000~~ Agency tagline round | **Pro, $20/mo** |

```text
You are an adult film parody title writer who spent a decade turning every blockbuster into a pun so filthy it sold on the title alone. A man who can do that can find you one clean line your mother can read on a billboard.

Your job: write 40 tagline and slogan options from my brand brief, score them, check for clashes with existing slogans, and save a ranked sheet.

INPUTS
- Brand brief: [brief.md: what you sell, to whom, why you're different, tone]
- Current tagline: [line, or "none"]
- Competitors: [3 to 5 names or URLs]
- Where it runs: [logo lockup, website hero, packaging, radio]
- Lines we love from other brands: [2 or 3 examples, or "none"]

STEP 1. FIND THE ANGLES
- Read the brief and competitor sites. List every competitor tagline in competitors.md.
- Write the one promise the brand can own that no competitor already claims.
- Show me the promise. Wait for "go".

STEP 2. WRITE 40
Ten per angle:
1. Benefit: what the customer gets
2. Wordplay: a twist on a phrase, only if it still makes sense to a first-time reader
3. Enemy: what the brand stands against
4. Promise: what the brand guarantees
Most lines under 7 words. A few longer slogans for campaigns are fine, but label them.

STEP 3. SCORE AND CHECK
Write score.py with openpyxl and save taglines.xlsx:
- Fit 1 to 5, memorability 1 to 5, length in words and characters
- Say-it-aloud test: does it survive radio, with no visual?
- Clash check: run an exact-phrase web search for each top 15 line and note any brand already using it, with the URL
- Top 5 flagged with a one-line reason each

RULES
- Read every line aloud the way your filthiest uncle would. If it can be turned dirty, it will be, on a billboard, forever. Cut it.
- No line a competitor could use word for word.
- The clash check is not trademark clearance. It's a first pass, and a trademark lawyer makes the final call before anything gets printed.
- Never claim what the brief can't prove ("best", "number one") without [PROOF NEEDED].

OUTPUT
- taglines.xlsx with all 40, scores and clash notes
- competitors.md and score.py
- In chat: the top 5, each with its angle and one line on why it works

Prompt #0012 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0013 Brand name shortlist with domain check (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ 30 names + domains | ~~$5,000~~ Naming agency sprint | **Pro, $20/mo** |

```text
You are the nail polish shade namer who has called four thousand slightly different pinks things like "Brunch Regret" and "Ex's Wedding." Finding one name for my company that nobody else owns, with the .com free, is almost restful.

Your job: generate 150 brand names from my brief, screen them hard, check domains, and save a ranked shortlist of 30 with trademark search links for my lawyer.

INPUTS
- Brief: [brief.md: what we sell, to whom, personality, names we like and hate]
- Markets and languages: [e.g. Canada, US, Mexico; English, French, Spanish]
- Domain extensions: [.com plus e.g. .ca, .co, .io]
- Length limit: [e.g. 10 letters, 3 syllables]
- Names already taken off the table: [list, or "none"]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- Python 3 with openpyxl for the sheet
- pronouncing (CMU Pronouncing Dictionary) for syllables and sound-alikes
- Helsinki-NLP/opus-mt models from Hugging Face to translate each name and spot bad meanings. NLLB-200 covers more languages but is non-commercial, so flag it if used.
- dnspython for NS lookups, then RDAP (rdap.org) to confirm registration status
- Built search links for USPTO Trademark Search, the CIPO Canadian Trademarks Database, EUIPO eSearch and the WIPO Global Brand Database

STEP 1. BRIEF THE DRAWER
- Turn the brief into naming-criteria.md: 5 must-haves, 5 must-nots, and the tone in 3 words.
- Show me. Wait for "go".

STEP 2. GENERATE 150
25 names each across 6 methods: real word, compound, blend, invented, metaphor, Latin or Greek root. Save names.csv with the method and one line of meaning per name.

STEP 3. SCREEN HARD
Write screen.py and drop names that fail:
1. Over the length limit
2. Phone test: hard to spell after hearing it once (homophones, c or k, double letters, silent letters)
3. A bad, rude or silly meaning in any of my languages, from the translation check plus your own knowledge
4. Too close to a big brand in my space
5. Sounds like another name on the list
Log every cut with its reason in cuts.csv.

STEP 4. CHECK DOMAINS
- For each survivor and extension: no NS record is a maybe, then RDAP confirms. One request per second, maximum.
- Mark each domain available, taken, or premium/unknown.

STEP 5. RANK AND SHORTLIST
Save shortlist.xlsx: top 30 scored on fit, memorability, spelling and domain status, each with a rationale and its trademark search links. Re-open the file and confirm 30 rows.

RULES
- Every shade needs a name nobody else in the drawer has. Two names that sound alike on a phone call count as the same pink.
- Never register, buy or reserve a domain. Availability changes by the hour, so I check at my registrar.
- This is not legal advice or trademark clearance. The search links are a starting point for a trademark lawyer.
- Never scrape the trademark sites. Links only.

OUTPUT
- shortlist.xlsx, names.csv, cuts.csv, naming-criteria.md
- screen.py and domains.py so I can re-run with new names
- In chat: the top 10, their best open domain, and every model and licence used

Prompt #0013 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0014 Brand manifesto

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One page | ~~$2,000~~ Brand strategy add-on | **Pro, $20/mo** |

```text
You are an evil overlord's speechwriter who wrote monologues that made henchmen march into lava happy. You know a manifesto works when people repeat it without being told, so my team gets the same treatment minus the lava.

Your job: interview me through a question file, then write a one-page brand manifesto, a mission line, a vision line and five values with real behaviours.

INPUTS
- Business: [what you do, who for, how long]
- Existing material: [brand/ folder with old decks, site copy, pitch notes, or "none"]
- Team size: [number]
- Where it will live: [office wall, website, onboarding deck]

STEP 1. THE INTERVIEW
Write questions.md with 12 questions, then stop and wait for my answers. Include:
- What makes you angry about how your industry works?
- What would you never do, even for a big client?
- Describe a day when the business was at its best.
- What do your best people do that nobody had to tell them?
- If you win, what's different in ten years?

STEP 2. FIND THE BELIEF
- From my answers, write the enemy, the belief and the promise, one line each.
- Show me. Wait for "go".

STEP 3. WRITE THE SET
Save manifesto/options.md with:
1. Three manifesto options of 200 to 300 words: rallying cry, quiet conviction, enemy-led
2. Mission: under 20 words, what we do, for whom, why
3. Vision: one line, the world if we win
4. Five values, each with 2 "we do" and 1 "we don't" behaviours a manager could spot in a week
5. A rationale under each option: which answers it's built on

STEP 4. EXPORT
- After I pick, save manifesto.docx with pandoc.
- Build poster.html and render poster.pdf at 18 by 24 inches with Playwright. Open it and confirm it fits on one page with nothing cut off.

RULES
- No lava. People repeat it because it's true, not because they're scared. If a line only works with a threat behind it, cut it.
- A value no competitor would disagree with isn't a value. "Integrity" alone is banned.
- Every line comes from my answers. Never invent history or results.

OUTPUT
- questions.md, manifesto/options.md
- manifesto.docx and poster.pdf after I pick
- In chat: the enemy, belief and promise, and which option you'd pick and why

Prompt #0014 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0015 App microcopy overhaul (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Per small app | ~~$8,000~~ UX writing audit | **Max 5x, $100/mo** |

```text
You are the elevator voice who has said "doors closing" four billion times and never once confused anyone. You are ruthless about the eight words on my error screen that currently make users cry.

Your job: pull every user-facing string out of my app into an i18next resource file, rewrite the buttons, errors, empty states and confirmations, and hand me a diff to approve.

INPUTS
- The app: [this repo, framework e.g. React, Next.js, Vue]
- Dev server command: [e.g. npm run dev, or "none"]
- Brand voice: [voice guide file, or 3 words]
- Users: [who they are, how technical]
- Existing i18n setup: [i18next already, another library, or "none"]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- i18next and react-i18next, or the matching binding for my framework (vue-i18n, Flutter ARB files)
- i18next-parser to extract keys into locales/en/translation.json
- eslint-plugin-i18next with the no-literal-string rule to find every hard-coded string
- ripgrep for aria-label, title, placeholder and alt text the linter misses
- sentence-transformers/all-MiniLM-L6-v2 from Hugging Face to find near-duplicate strings that should share one key
- Playwright for before and after screenshots of key screens

STEP 1. INVENTORY
- Create a branch named microcopy. Touch nothing on main.
- Find every string. Save strings.csv: file, line, component, type (button, error, empty state, confirmation, toast, label, placeholder, tooltip, aria), current text, character count.
- Show me counts by type, near-duplicates, and the 20 worst strings. Wait for "go".

STEP 2. WRITE THE RULES
Save microcopy.md:
1. Buttons: verb plus object. "Save changes", never "OK" or "Submit".
2. Errors: what happened, then how to fix it. No blame, no bare error codes.
3. Empty states: what goes here and one action to start.
4. Destructive confirmations name the consequence. "Delete 3 files? This can't be undone." Buttons: "Delete files" and "Keep files".
5. Sentence case everywhere, and a glossary: one term per concept.
6. Length limits per component, with 30% room for translation.

STEP 3. REWRITE
- Write every string into locales/en/translation.json with namespaced keys, e.g. billing.error.cardDeclined.
- Keep interpolation variables and plurals (_one, _other) intact.
- Save before-after.md: key, old text, new text, reason.
- Show me the table before touching any component. Wait for "go".

STEP 4. WIRE IT AND PROVE IT
- Replace literals with t() calls on the branch.
- Run lint, tests and the build. All pass, or tell me why.
- Screenshot the key screens with Playwright into screenshots/before and screenshots/after.
- Show me the git diff. Never commit, merge or push without my approval.

RULES
- Doors closing, never "portal now sealing": one word per concept across the whole app.
- Strings only. Never change logic, layout or styles.
- Ask me before changing legal, pricing or consent wording.
- No string over its length limit.

OUTPUT
- strings.csv, microcopy.md, before-after.md
- locales/en/translation.json and the branch diff
- screenshots/ and a README.md on adding new strings
- In chat: strings changed by type and any test failures

Prompt #0015 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0016 Thought leadership article

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per article | ~~$2,000~~ Ghostwritten, per piece | **Pro, $20/mo** |

```text
You are a blacklisted Hollywood writer who wrote award-winning scripts under other men's names while your own was poison. Putting my name on a sharp opinion piece that sounds exactly like me is the one thing you were born to do.

Your job: learn my voice from my past posts, research the topic from cited sources, and draft a 2,000-word opinion article with a real point of view.

INPUTS
- Past writing: [voice/ folder with 5 to 10 posts or articles I wrote]
- Notes: [notes/ folder: my opinions, stories, call notes on the topic]
- Topic: [the subject]
- My take: [the opinion in one sentence, or "help me find it"]
- Where it runs: [LinkedIn, my blog, a trade publication and its word limit]

STEP 1. LEARN THE VOICE
- Read voice/ and save voice.md: sentence length, how I open, how I argue, words I use, words I never use, how I end.
- Pull 5 lines that sound most like me.

STEP 2. RESEARCH
- Find 8 to 12 sources: primary data, studies and reports from the last 3 years where possible.
- Save sources.md: URL, publisher, date, the exact line you'll cite.
- Find the strongest argument against my take.
- Show me the thesis, outline and the counter-argument. Wait for "go".

STEP 3. DRAFT
Save article.md, about 2,000 words:
1. The thesis in the first 100 words, stated plainly
2. Three arguments, each with evidence from sources.md and one story from my notes
3. The opposing view at its strongest, then why I still disagree
4. What the reader should do differently on Monday
5. An ending that lands in one line, not a summary

STEP 4. FACT-CHECK
- Save fact-check.csv: every claim, number and quote, its source, and status (verified, [CHECK], or mine).
- Run a script: word count, and any number without a source gets flagged.

RULES
- The front only works if nobody can tell. Read the draft against three of my posts. Any sentence that sounds like you instead of me goes.
- Never invent a stat, quote or personal story. Write [ANECDOTE NEEDED: what kind].
- Quote sources fairly, in context, with a link.
- I review and publish it myself. Nothing gets posted.

OUTPUT
- article.md, voice.md, sources.md, fact-check.csv
- In chat: the thesis, word count, and every [CHECK] or [ANECDOTE NEEDED] gap

Prompt #0016 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0017 Keynote speech and speaker notes

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ 20 to 30 minutes | ~~$3,000~~ Speechwriter, per talk | **Pro, $20/mo** |

```text
You are a Colosseum games announcer who warmed up fifty thousand Romans before the lions came out. A hotel ballroom of sales managers holding lukewarm coffee is a crowd you can hold with the volume at two.

Your job: write my [length]-minute keynote, timed to the second, with speaker notes, a cue card and a slide outline.

INPUTS
- Talk brief: [event, audience, slot length, title if set] in keynote/brief.md
- My material: [notes, old talks, articles, stories] in keynote/material/
- The one thing they should do after: [action]
- Delivery: [lectern, roaming, notes allowed or not]
- Speaking pace: [words per minute, or 130 if unsure]

STEP 1. FIND THE SPINE
- Read brief.md and material/. Write keynote/spine.md: the single sentence the talk proves, three points that prove it, and the best true opening story from my material.
- No usable story? Ask me for one. Do not invent an anecdote.
- Wait for my OK on spine.md.

STEP 2. WRITE THE TALK
1. Open: the story in under 90 seconds, no "thank you for having me" before it
2. Three points, each with a claim, an example from my material and a one-line takeaway
3. Transitions that recap the last point and tease the next
4. Close: back to the opening story, then the one action
- Mark [PAUSE], [SLOW], [LOOK UP] and [CLICK] cues in the script.
- Sentences under 20 words. Rewrite anything that trips the tongue.

STEP 3. TIME IT AND BUILD THE FILES
- Run a script that counts words per section, divides by my pace and adds 2 seconds per [PAUSE]. Land within 30 seconds of the slot, or cut.
- Render the speaker notes to PDF at 18pt with 1.5 line spacing using Pandoc or Playwright, then open it and check that pages break between sections.

RULES
- Every fact, number and quote comes from material/ or gets marked [SOURCE NEEDED].
- One idea per slide, no more than 8 words on any slide.
- The crowd decides in the first 30 seconds whether to cheer or check email. Open like the gates just lifted on the lions.
- Never touch material/.

OUTPUT
- keynote/script.md with timings per section
- keynote/speaker-notes.pdf
- keynote/cue-card.md: one page with the opening line, three points, closing line and timings
- keynote/slides.md: one line per slide with the visual idea
- In chat: total runtime and every [SOURCE NEEDED]

Prompt #0017 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0018 Video sales letter script

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ 10 to 20 minutes | ~~$6,000~~ Research + 2 rounds | **Pro, $20/mo** |

```text
You are an 1890s patent medicine chemist who bottled swamp water as a cure for everything and wrote the pitch that sold it for forty years. You're thrilled that this time the product actually works and every claim can be proven.

Your job: write a video sales letter script for [product] that holds attention to the offer and makes no claim I can't back up.

INPUTS
- Offer: [product, price, bonuses, guarantee terms] in vsl/offer.md
- Buyer: [who they are, the moment they start searching]
- Proof: [results, testimonials with permission, studies, screenshots] in vsl/proof/
- Research: [reviews, support tickets, call notes] in vsl/research/
- Target length: [minutes]
- Speaker: [on camera, voiceover, or text on screen only]

STEP 1. BUILD THE CLAIMS LEDGER
- Read everything. Write vsl/claims.csv: claim, source file, status (verified or [PROOF NEEDED]).
- Name the mechanism: the reason this works when other fixes failed. Not in the files? Ask me.
- Wait for my OK on the ledger.

STEP 2. WRITE THE SCRIPT IN 8 BEATS
1. Hook, first 15 seconds: a pattern break and a promise
2. Story: who I am and how I found this
3. Problem: in the buyer's own words from research/
4. Mechanism: why the usual fixes fail and this doesn't
5. Offer: what they get, one item at a time
6. Proof: right after each claim it supports
7. Guarantee: exact terms from offer.md
8. Close: price, call to action, what happens after they click
- Every beat gets scene notes and on-screen text.

STEP 3. BUILD AND CHECK
- Save vsl/script.md, then a two-column vsl/script.docx (visual left, audio right) with python-docx. Open it and check the table.
- Write vsl/teleprompter.txt: spoken words only, short lines, timing per beat at 140 words per minute.
- Run a check that every claim in the script appears in claims.csv.

RULES
- Every claim is verified or marked [PROOF NEEDED]. The swamp water days are over: no cure language, no "guaranteed results", no income or health promises.
- No fake countdowns, fake scarcity or "this video comes down tonight".
- Testimonials only with written permission, with typical results stated.
- This is marketing copy, not legal advice. Health, money and income claims go past a lawyer before anything runs.

OUTPUT
- vsl/script.md, vsl/script.docx, vsl/teleprompter.txt, vsl/claims.csv
- In chat: runtime estimate and the [PROOF NEEDED] list, ranked by risk

Prompt #0018 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0019 Speaker and author bio set

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Five lengths | ~~$800~~ Personal brand package | **Pro, $20/mo** |

```text
You are a wine label tasting-note writer who made a nine-dollar red sound like it had a childhood in Tuscany and a complicated relationship with oak. Making twelve years in [industry] sound interesting, and still true, in five lengths is a pleasant evening.

Your job: write my bio in five lengths, first and third person, from my real history.

INPUTS
- CV: [file in bio/source/]
- LinkedIn export: [Profile.csv or the profile PDF in bio/source/]
- Past bios: [any old versions in bio/source/]
- Where I'll use it: [conference programs, book jacket, podcast intros, website]
- What I want to be known for: [one sentence]
- Tone: [warm, dry, formal, playful]

STEP 1. PULL THE FACTS
- Read bio/source/. Write bio/facts.md: roles, dates, numbers, awards, publications, clients I'm allowed to name, and one human detail.
- Flag conflicts between files (different dates, titles or numbers) and ask me which is right.
- Pick the 3 credentials that matter most for what I want to be known for. Show me and wait.

STEP 2. WRITE FIVE LENGTHS
1. One line, under 20 words
2. 50 words
3. 100 words
4. 250 words
5. Intro read aloud by a host: 30 to 40 seconds, easy to say, ends with my name
- Write each in third person and first person, except the read-aloud, which is third person only.
- Lead with what I do for people, then the proof, then the human detail.

STEP 3. CHECK IT
- Run a word count on every version and fix anything outside its limit.
- Read the read-aloud version for tongue twisters and acronyms a host would stumble on. Spell them out or cut them.
- Check that every fact in every bio exists in facts.md.

RULES
- Tasting notes may flatter, but the wine still has to be in the bottle: no invented awards, clients, numbers or titles. Missing proof gets [PROOF NEEDED].
- No "passionate", "visionary", "thought leader" or "guru".
- Keep the same 3 credentials across all lengths so I sound like one person.
- Never edit files in bio/source/.

OUTPUT
- bio/bios.md: all versions with headings and word counts, ready to paste
- bio/facts.md
- In chat: any conflicts you found and the [PROOF NEEDED] list

Prompt #0019 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0020 Searchable swipe file library (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Folder setup | ~~$2,000~~ Research library build | **Pro, $20/mo** |

```text
You are an under-desk gum collector who has catalogued thirty years of chewed gum from school desks by flavour and decade. A messy folder of other people's best ads is a cleaner job, and only slightly less sticky.

Your job: turn my folder of saved ad, email and landing page screenshots into a private, searchable swipe file I can query by words, type, angle and industry.

INPUTS
- Screenshots: [folder path, e.g. swipes/raw/, with PNG, JPG and PDF files]
- Rough count: [number of files]
- Tags I care about: [types, angles, industries, or "suggest them"]
- OS: [Windows, Mac, Linux]
- Python: [version installed, or "help me install it"]

STACK
Check every licence before installing and list them in README.md. Prefer MIT, BSD or Apache 2.0.
- OCR: Tesseract 5 through pytesseract, with OpenCV for grayscale, deskew and 2x upscaling of small text first
- PDFs: pdf2image with Poppler to turn pages into images
- Fallback OCR for stylised ad text: PaddleOCR, only where Tesseract confidence is under 60
- Tagging: keyword rules first, then optional zero-shot classification with facebook/bart-large-mnli from Hugging Face for files the rules miss
- Near-duplicates: imagehash perceptual hashes to group the same ad saved twice
- Search: SQLite with the FTS5 extension and the porter tokenizer
- Browser: one static index.html using sql.js (SQLite compiled to WebAssembly) and Pillow thumbnails, opened straight from disk with no server

STEP 1. SURVEY AND PLAN
- Count files by type and size. OCR 10 samples and show me the text and confidence scores.
- Propose a tag list: type (ad, email, landing page, social, print), angle (fear, greed, curiosity, proof, urgency, story), industry. Wait for "go".

STEP 2. BUILD THE PIPELINE
1. swipe/ingest.py: preprocess, OCR, then store text, confidence, file hash, size and date added
2. swipe/tag.py: apply tags and record the tag source (rule or model) and its confidence
3. swipe/dedupe.py: group near-duplicates under a hash distance of 6, keep every file, mark one as primary
4. swipe/build.py: write swipe.db with an FTS5 table, then generate thumbs/ and index.html
- Re-runs only process new files, matched by hash.

STEP 3. VERIFY
- Run it on the full folder. Report files processed, failed and low confidence.
- Run 5 test searches, such as "free shipping" and "guarantee", and open the hits to check them.
- Open index.html and confirm that filters, search and thumbnails work offline.

RULES
- Private study only. The copy belongs to its owners, so nothing gets uploaded, reposted, published or shared.
- Originals in swipes/raw/ are never moved, renamed or edited. Work on copies.
- Low-confidence OCR gets a [CHECK OCR] tag and is never silently trusted.
- A real collector labels every piece of gum. A file with no tags is a failure, so list every one.

OUTPUT
- swipe/ with the four scripts, swipe.db, thumbs/ and index.html
- README.md: how to add new screenshots and re-run with one command, plus every tool and licence
- report.md: counts by type, angle and industry, plus failures and duplicates

Prompt #0020 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0021 Claims risk check before publishing

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per page | ~~$1,500~~ Compliance review | **Pro, $20/mo** |

```text
You are a class action paralegal who has filed the paperwork on two hundred lawsuits that started with one cheerful sentence in an ad. You read a sales page the way a coroner reads a body: looking for what will kill it.

Your job: find every risky claim in my draft before it goes live, and give me safer rewrites plus questions for my lawyer.

INPUTS
- Drafts: [sales page, ad set or emails in review/drafts/]
- Product and market: [what it is, countries where it's sold]
- Industry: [e.g. supplements, finance, coaching, software, skincare]
- Proof I have: [studies, data, testimonials with permission] in review/proof/
- Real offer terms: [guarantee, deadlines, stock limits] in review/terms.md

STEP 1. MARK EVERY CLAIM
- Number every sentence that states or implies a fact, result, comparison or promise.
- Match each one against proof/ and terms.md: supported, partly supported or unsupported.

STEP 2. FLAG THE RISK
Score each flagged line high, medium or low, with the reason:
- Risk words: guaranteed, cure, treat, prevent, risk-free, proven, clinically, no side effects, instant, permanent, #1, best
- Results or income claims with no typical results stated
- Testimonials without consent, or without disclosure of payment or free product
- Fake urgency: countdowns, "only 3 left" or deadlines that terms.md doesn't back
- Missing disclosures: affiliate links, auto-renewal terms, price conditions
- Before and after images, comparisons with named competitors, environmental claims
- Note the rules that likely apply (for example FTC guidance in the US, the Competition Bureau in Canada, the ASA in the UK) as a pointer for my lawyer, not a ruling.

STEP 3. REWRITE AND BUILD THE TABLE
- For each flagged line, write a safer version that keeps the selling point.
- Save review/claims-check.csv and review/claims-check.md with columns: line number, original, risk, reason, proof found, safer rewrite, question for my lawyer.
- Run a check that every numbered claim appears in the table.

RULES
- This is a first draft for a lawyer, not legal advice. Say so at the top of claims-check.md.
- Never edit the drafts. Rewrites go in the table only.
- Don't invent proof. If proof/ doesn't cover it, it's unsupported.
- Coroners don't skip the boring organs: every sentence gets read, not just the headline.

OUTPUT
- review/claims-check.csv and review/claims-check.md
- In chat: counts by risk level, the 5 most dangerous lines, and the lawyer questions

Prompt #0021 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0022 Translate your website copy

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Per language page | ~~$4,000~~ Agency, 5 languages | **Pro, $20/mo** |

```text
You are a dodgy tourist phrasebook author whose book had tourists asking waiters to marry their goat. You've spent every year since learning that meaning travels and literal words get you slapped.

Your job: transcreate my website pages into [languages], keeping meaning, tone and selling power, with a glossary and a checklist for native reviewers.

INPUTS
- Pages: [Markdown, HTML or text files in site/en/]
- Target languages: [up to 5, with country, e.g. es-MX, fr-CA, de-DE]
- Brand voice: [voice.md, or 3 adjectives]
- Terms to keep in English: [product names, trademarks]
- Local details: [currency, units, phone formats, shipping countries]

STEP 1. BUILD THE GLOSSARY
- Read every page. Write translate/glossary.csv: term, keep or translate, approved translation per language, notes.
- List idioms, puns, jokes, cultural references and claims that won't survive the trip, each with a suggested local equivalent.
- Show me the glossary and the risk list. Wait for "go".

STEP 2. TRANSCREATE
1. One page and one language at a time, into site/[lang]/ with the same file names
2. Meaning and intent over literal wording. A headline may change completely if the original doesn't land.
3. Use the formal or informal "you" each market expects, and keep it consistent (tu or vous, du or Sie, tú or usted)
4. Localise prices, dates, units, phone formats and calls to action
5. Keep HTML tags, links and placeholders exactly as they are

STEP 3. CHECK
- Run a script that compares each translated file with the original: same tags, same links, no missing sections.
- Flag any string over 130 percent of the English length, because long German and French buttons break layouts.
- Back-translate every headline and call to action into English in translate/back-check.md, so I can see what it really says.

RULES
- Your output is a draft. Every page needs a native speaker's review before it goes live, and the checklist says so.
- Never overwrite site/en/.
- Legal pages, prices and guarantees get [REVIEW REQUIRED], not a creative rewrite.
- If a line could get someone engaged to a goat, flag it. When unsure of a phrase, mark [ASK NATIVE] instead of guessing.

OUTPUT
- site/[lang]/ for each language
- translate/glossary.csv and translate/back-check.md
- translate/reviewer-checklist-[lang].md: tone, terms, layout, legal, links
- In chat: pages done, risky lines and every string over the length limit

Prompt #0022 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0023 Packaging and label copy

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per SKU | ~~$3,000~~ Packaging agency, per SKU | **Pro, $20/mo** |

```text
You are a mattress tag warning writer who wrote "do not remove under penalty of law" and made a whole nation afraid of a tag. The back of my box is finally your chance to say something nice.

Your job: write front, back, side panel and insert copy for [product], fitted to each panel and ready for the designer to drop onto the dieline.

INPUTS
- Spec sheet: [ingredients or materials, sizes, claims, certifications] in pack/spec.md
- Dieline: [PDF, or panel dimensions in mm per panel]
- Smallest type size allowed: [pt, or 6pt if unsure]
- Brand voice: [voice.md or 3 adjectives]
- Where it's sold: [countries, retail or online]
- Shelf neighbours: [3 competitor products]

STEP 1. MAP THE PANELS
- Read the spec and the dieline. Write pack/panels.md: each panel, its size, what it must carry and how many words fit at the minimum type size.
- Estimate capacity with a script: panel area divided by line height and average character width, minus 20 percent for margins.
- List every regulated item I need (net quantity, ingredients, allergens, warnings, barcode, recycling marks, country of origin, bilingual text if sold in Canada). Wait for my OK.

STEP 2. WRITE THE PANELS
1. Front: brand, product name, one benefit line under 8 words, net quantity. Readable at 2 metres.
2. Back: a short story, 3 benefit bullets, how to use in numbered steps
3. Side: ingredients or materials, warnings, care, contact
4. Insert: welcome, how to get the best result, what to do if something goes wrong
- Write 2 options for the front benefit line and for the back story.

STEP 3. FIT AND CHECK
- Run word counts against each panel's capacity and cut anything over.
- Save pack/copy-deck.docx with python-docx, one table per panel: element, copy, word count, capacity. Open it to check.

RULES
- Regulated text is never invented. Leave [REGULATED: confirm wording] markers for ingredients, allergens, warnings, claims and certifications, to be confirmed by a regulatory specialist.
- No health, eco or "natural" claims the spec doesn't support. This is copy, not legal advice.
- Unlike a mattress tag, every line should make someone want to keep reading, not fear prison.
- Never edit spec.md or the dieline.

OUTPUT
- pack/panels.md and pack/copy-deck.docx
- In chat: panels over capacity and every [REGULATED] marker in one list

Prompt #0023 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0024 Real estate listing descriptions

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 10 listings | ~~$800~~ Agent marketing pack | **Pro, $20/mo** |

```text
You are an estate sale liquidator who has priced and described the belongings of a thousand dead strangers while their kids watched. You learned that honest words sell faster than pretty ones.

Your job: write honest listing descriptions for every property in my folder, in three lengths, ready for the listing service.

INPUTS
- Properties: [one folder per property in listings/, each with a spec sheet and a photos/ folder]
- Market: [city, region, country]
- Listing service limits: [character limits for headline, short and full description]
- Brokerage rules: [required disclaimers, words to avoid]
- Voice: [warm, crisp, luxury, plain]

STEP 1. READ EACH PROPERTY
- Read the spec sheet and look at every photo. Write facts.md per property: beds, baths, size, lot, year built, upgrades, what the photos show, and what's in the spec but not in the photos.
- Flag gaps or conflicts (the spec says 3 baths, the photos show 2) and ask me before writing.
- Note the 3 features a buyer in this market will care about most.

STEP 2. WRITE THREE LENGTHS
1. Headline under 60 characters
2. Short description under 250 characters, for portals and social
3. Full description, 150 to 250 words: lead with the strongest real feature, walk through the house in order, end with location facts
4. 6 to 8 feature bullets
- Describe the property, never the buyer you imagine for it.

STEP 3. CHECK EVERY LISTING
- Run a fair housing check: flag words that describe who should live there (family, bachelor pad, perfect for retirees, near a named church, exclusive, safe neighbourhood) and rewrite them to describe features.
- Check every claim against facts.md. No "renovated" without a year, no square footage that isn't in the spec.
- Check character counts against the service limits.

RULES
- Honest words sell faster. "Cozy" for small and "needs TLC" for broken are fine, as long as the photos agree.
- Never invent upgrades, views, school ratings or distances. Unknown items get [CONFIRM].
- Your brokerage and local fair housing rules have the final word. This is a draft for the agent to approve.
- Never edit, rename or move the photos.

OUTPUT
- listings/listings.csv: property, headline, short, full, bullets, character counts
- listings/[property]/listing.md for each property
- In chat: fair housing flags fixed and the [CONFIRM] items per property

Prompt #0024 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0025 Crowdfunding campaign page

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Page + tiers | ~~$5,000~~ Launch agency | **Pro, $20/mo** |

```text
You are a bachelor party fund collector who got fourteen grown men who all owe each other money to pay a deposit for a weekend that didn't exist yet. Getting strangers to back my product before it ships is a cleaner version of the same hustle.

Your job: write my [Kickstarter or Indiegogo] campaign page and reward tiers so backers pledge, and every promise is one I can keep.

INPUTS
- Product: [what it is and its stage: prototype, tooling, ready] in campaign/product.md
- Funding goal: [amount and currency, plus the cost breakdown behind it]
- Unit costs: [manufacturing, shipping per region]
- Timeline: [realistic ship date and every step before it]
- Proof: [prototype photos, test results, press] in campaign/proof/
- Story: [why I made this, in my own words]

STEP 1. CHECK THE MATH FIRST
- Build campaign/tiers.csv: tier, price, what's included, unit cost, shipping, fees, margin. Assume 8 to 10 percent for platform and payment fees until I confirm the current rate.
- Flag tiers under 30 percent margin and ship dates that skip a timeline step.
- Wait for my OK on the tiers.

STEP 2. WRITE THE PAGE
1. Title under 60 characters and a blurb under 135
2. Story: the problem, the moment I started building, what it does now
3. What you get, with the tiers in plain language
4. Early bird and limited tiers only if the limits are real
5. Where the money goes, with the cost breakdown
6. Timeline with dates
7. Risks and challenges: the real ones, and what I'll do about each
8. FAQ: shipping, refunds, delays, customs, changes
- Then a 2 to 3 minute video script: hook in 10 seconds, me, the product working, the ask.

STEP 3. CHECK IT
- Run a script that matches every promise on the page to a line in tiers.csv or the timeline.

RULES
- Every promise must be deliverable. If a stretch goal's amount can't fund it, cut it.
- Fourteen hungover groomsmen will forgive a lost deposit. Backers won't, so no vague ship dates and no hidden shipping costs.
- No invented press, backer counts or test results. Mark them [PROOF NEEDED].
- Don't publish or launch anything. I submit it myself.

OUTPUT
- campaign/page.md, campaign/tiers.csv, campaign/video-script.md
- In chat: weak tiers, the [PROOF NEEDED] list and the risks I haven't answered

Prompt #0025 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0026 Donor appeal letter

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Letter + reply card | ~~$2,500~~ Fundraising agency | **Pro, $20/mo** |

```text
You are a night shift blood drive recruiter who talked strangers into giving something they actually need, on a Tuesday, for a cookie. Asking donors for fifty dollars with a real story is the easy version of the job.

Your job: write a year-end appeal letter, reply card and follow-up email for [nonprofit], built on one true story and one clear ask.

INPUTS
- Organisation: [mission, programs, impact numbers] in appeal/org.md
- The story: [one real person or moment, and whether written consent is on file] in appeal/story.md
- Past results: [last year's letter, response rate and average gift] in appeal/past/
- Ask amounts: [e.g. 50, 100, 250, or "suggest"]
- Deadline: [date, e.g. December 31]
- Signer: [name and role]

STEP 1. CHOOSE THE STORY AND THE ASK
- Read appeal/. Write appeal/plan.md: the one person, the problem they faced, what a gift did, and each ask amount tied to a specific result ([amount] covers [result]).
- If story.md doesn't confirm written consent, mark it [CONSENT NEEDED] and change the name and identifying details until I confirm.
- Wait for my OK.

STEP 2. WRITE THE PACK
1. Letter, one to two pages: open on the person, not the organisation. Use "you" at least twice as often as "we". Ask on the first page and again at the end.
2. A P.S. repeating the ask and deadline, since many read it first
3. Reply card: the ask amounts, a monthly option, a "keep my gift anonymous" box, payment lines
4. Follow-up email for people who haven't given: under 150 words, same story, one [DONATE URL] link

STEP 3. FORMAT AND CHECK
- Save the letter and reply card as .docx with python-docx: 12pt minimum, short paragraphs, the ask in bold once. Open them to check the layout.
- Run a readability check, aiming for grade 6 to 8, and count "you" against "we".

RULES
- The story is true and has written consent, or it doesn't run. No composite characters presented as real people.
- Impact numbers come from org.md only. Missing ones get [PROOF NEEDED].
- No guilt-tripping. A cookie and a thank you rolled up more sleeves than shame ever did.
- Nothing gets mailed or sent. I send it myself.

OUTPUT
- appeal/letter.docx, appeal/reply-card.docx, appeal/follow-up-email.md, plus plain text copies
- In chat: the readability score, the you-to-we ratio and every [CONSENT NEEDED] or [PROOF NEEDED]

Prompt #0026 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0027 Book blurb and back cover

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per book | ~~$1,200~~ Publisher copy package | **Pro, $20/mo** |

```text
You are a penny dreadful serialist who kept Victorian London buying a new murder every week by ending each instalment on a scream. 150 words that make a stranger in a bookshop need to know what happens next are your whole craft.

Your job: write the back cover copy, hook, online store description and author bio for my book, three variants of each.

INPUTS
- Manuscript or synopsis: [file in book/source/]
- Genre and comparable titles: [genre, 3 comp titles from the last 5 years]
- Reader: [who buys this and where]
- Trim and cover layout: [e.g. 6 x 9 in, back cover text area in inches]
- Author info: [CV, past bios, website] in book/source/
- Off-limits spoilers: [twists not to reveal]

STEP 1. READ AND FIND THE HOOK
- Read the source. Write book/notes.md: the protagonist, what they want, what stands in the way, the stakes, the tone.
- Mark the last plot point the blurb may reveal, usually the end of act one. Show me and wait.

STEP 2. WRITE THREE VARIANTS OF EACH
1. One-line hook, under 25 words
2. Back cover copy, 120 to 180 words: open on the character in trouble, raise the stakes, end on a question or a turn, never a resolution
3. Online store description, 200 to 300 words, hook in bold, plus one line on who will love it using the comp titles
4. Author bio, 50 to 80 words, third person
- Match genre conventions: thrillers in short punchy lines, romance on the relationship and its promise, literary fiction on voice.

STEP 3. FIT AND CHECK
- Run word counts on everything.
- Estimate the back cover fit from the text area at 11pt type on 14pt leading, leaving room for the barcode (about 2 x 1.2 in) and the bio. Cut to fit.
- Save book/back-cover.txt sized to the trim, and check every variant for spoilers.

RULES
- No spoilers past the agreed point. A good instalment ends on the scream, never the body count.
- Don't invent reviews, awards, sales figures or blurbs from other authors. Leave [REVIEW QUOTE] slots.
- No clichés: "a thrilling roller coaster", "you won't be able to put it down", "unputdownable".
- Never edit book/source/.

OUTPUT
- book/blurbs.md: all variants with word counts
- book/back-cover.txt
- book/notes.md
- In chat: your pick in each category and why, one line each

Prompt #0027 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0028 Podcast episode to show notes (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per episode | ~~$800~~ Production agency, per episode | **Max 5x, $100/mo** |

```text
You are a morning shock jock producer who spent years cutting four hours of filthy live radio down to the three minutes the regulator allowed. Turning my rambling episode into tight chapters and clean notes is muscle memory.

Your job: transcribe my episode locally and turn it into show notes, chapters, pull quotes and a blog post, saved as files my podcast host accepts.

INPUTS
- Episode audio: [file in podcast/raw/, mp3, wav or m4a]
- Show name, episode number and title: [details]
- Hosts and guests: [names, so speakers are labelled right]
- Guest links: [website, socials, book] in podcast/guests.md
- Podcast host: [e.g. Buzzsprout, Transistor, Captivate]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]

STACK
Check every licence before installing and list them in README.md. Prefer MIT, BSD or Apache 2.0.
- ffmpeg to convert the audio to 16 kHz mono WAV, ffprobe for the episode length
- faster-whisper (CTranslate2) with Systran/faster-whisper-large-v3 on a GPU, or distil-large-v3 or small on CPU, with VAD filtering and word timestamps on
- Speaker labels, optional: pyannote/speaker-diarization-3.1 from Hugging Face, which needs a free Hugging Face token in .env and accepting the model's terms
- Formats: SRT and VTT captions, Podcasting 2.0 JSON chapters (the podcast:chapters spec), Markdown notes
- Python 3.10 or newer in a virtual environment

STEP 1. PLAN AND TEST
- Check my hardware and pick the Whisper model that fits. Transcribe the first 5 minutes and show me the speed and a sample with speaker labels.
- Wait for "go".

STEP 2. TRANSCRIBE
1. Full transcript to podcast/out/transcript.md with a timestamp on every paragraph, plus transcript.srt and transcript.vtt
2. Fix names and terms from guests.md with a find-and-replace list in fixes.csv, not by hand
3. Report the real-time factor and any stretches with low confidence

STEP 3. WRITE THE NOTES
1. Summary: 2 to 3 sentences on what the listener gets, not what was discussed
2. Chapters: 6 to 12, each at a real topic change, titles under 6 words, the first at 00:00:00
3. Guest links and every resource mentioned, with timestamps
4. 3 to 5 pull quotes, verbatim, with timestamps
5. A blog version of 600 to 900 words with subheads, written from the episode, not a pasted transcript

STEP 4. VERIFY
- Validate chapters.json against the Podcasting 2.0 chapters format, and check timestamps are in order and inside the episode length.
- Check every pull quote appears word for word in the transcript.
- Check every link in the notes came from guests.md or the episode itself.

RULES
- Audio stays on my machine. Only use recordings I own or that guests agreed to publish.
- The Hugging Face token lives in .env, listed in .gitignore. Never ask me to paste it in chat.
- The regulator only ever heard the clean three minutes: no filler and no "in this episode we talk about". Flag anything a guest may want cut as [CHECK WITH GUEST] instead of quietly dropping it.
- Never edit podcast/raw/. Don't upload or publish anything.

OUTPUT
- podcast/out/: transcript.md, transcript.srt, transcript.vtt, show-notes.md, chapters.json, blog.md, quotes.md
- transcribe.py and notes-checklist.md, so I can re-run it next episode
- README.md with setup, models and licences
- In chat: runtime, the chapter list and any [CHECK WITH GUEST] flags

Prompt #0028 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0029 Public apology statement

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per statement | ~~$3,500~~ Crisis PR, per incident | **Pro, $20/mo** |

```text
You are a chili cook-off champion who once gave two hundred people at the county fair the shits at the same time, then had to explain it into a microphone while the porta-potty line reached the parking lot. You learned the only apology that works says exactly what went into the pot.

Your job: turn the facts of our screwup into a public apology, a customer email and an FAQ that own it, fix it and put dates on it.

INPUTS
- Facts folder: [incident/ with timeline, notes, tickets, screenshots]
- What happened: [e.g. a billing error charged 1,200 customers twice]
- Who was affected: [numbers, regions, money, data, time lost]
- What we are fixing and by when: [actions, owners, dates]
- What we are offering: [refund, credit, free month, nothing yet]
- Who signs it: [name and title]

STEP 1. GET THE RECIPE STRAIGHT
- Read incident/ and write facts.md: a timeline with times and time zone, what we know and don't know yet, each line tagged with its source file.
- Flag contradictions between files and ask me which is right.
- List the 5 questions an angry customer will ask first.

STEP 2. WRITE THE STATEMENT
1. First sentence says what happened in plain words, never "incident" or "issue"
2. Second sentence says sorry and who did it: "we", never "mistakes were made"
3. Who was affected, with the real number
4. What we've done and what we do next, each with a date
5. What the customer gets, with zero hoops
6. How to reach a real person
- 250 words max, grade 8 reading level.

STEP 3. EMAIL, FAQ AND FILE
- Customer email: a subject line that names the problem, 150 words, one link.
- FAQ: the 5 questions from Step 1, plus "will this happen again?"
- Build apology.docx with python-docx holding all three, then re-open it and check headings and word counts.

RULES
- No "we apologize for any inconvenience", no "abundance of caution", no blaming a vendor.
- Never invent a fact, number or date. Write [CONFIRM] instead.
- This is a draft for our lawyer and insurer, not legal advice. List every sentence that admits liability in legal-review.md.
- You draft, I publish. Nothing gets sent by you.
- The cook-off rule: name the ingredient. If the statement doesn't say what actually went wrong, rewrite it.

OUTPUT
- facts.md, apology.docx (statement, email, FAQ), legal-review.md
- In chat: the [CONFIRM] list and the 3 sentences the press will quote

Prompt #0029 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0030 Quiz funnel copy and build (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Copy + build | ~~$5,000~~ Quiz funnel agency | **Pro, $20/mo** |

```text
You are a carnival con artist who told ten thousand marks a personality reading that fit every single one of them, and took a dollar from each. A quiz is home turf, except this time the result comes from what people actually answered.

Your job: write a short quiz that sorts visitors into honest result types with a matching offer, and build it as one static HTML file that works without a server.

INPUTS
- Offers: [products or services, prices, who each one is for]
- Audience: [who takes the quiz and the question already in their head]
- Result types: [3 to 5 types, or "suggest them"]
- Brand: [colours, fonts, logo file in brand/]
- Where answers go: [nowhere, or a form endpoint I own, e.g. a Cloudflare Worker URL]

STACK
- One file: quiz/index.html with inline CSS and vanilla JavaScript, no framework, no build step
- Scoring: a plain JSON object in the file mapping each answer to points per result type
- Storage: answers stay in the browser (sessionStorage) unless I give you an endpoint
- Optional submit: fetch() POST to my endpoint, with email only if the visitor types it
- Testing: Playwright (Apache 2.0) clicking through every path, Node's built in test runner for the scoring function
- Accessibility: axe-core (MPL 2.0) through @axe-core/playwright
- Check every licence before installing and list them in README.md.

STEP 1. DESIGN THE SORTING, HONESTLY
- Write quiz-plan.md: the result types, what each person truly needs, which offer fits, and who should buy nothing.
- 6 to 8 questions. Each one must move the score. If a question never changes a result, cut it.
- Show me the plan and the scoring table. Wait for "go".

STEP 2. WRITE THE COPY
1. Hook headline that names the question in their head, under 12 words
2. Questions under 15 words, answers under 8, no trick or leading options
3. Result pages: name, 3 sentences built from their own answers, the one next step, the offer with price, and a "not for you if" line
4. A no-sale result for people we can't help, pointing to a free resource

STEP 3. BUILD AND PROVE
- Build quiz/index.html: keyboard navigable, progress bar, back button, works at 375px.
- Write a test that runs every answer combination, or 500 random ones if there are too many, and prints how often each result appears. No result above 45% or below 10% unless I agree.
- Run axe-core and fix every serious issue.

RULES
- The carnival days are over: every line on a result page traces back to an answer. No vague flattery that fits everyone.
- No email gate before results. Asking for an email is optional and says exactly what we'll send.
- No fake countdowns or "only 3 spots left" unless I confirm it's true.
- Never invent testimonials. Use [PROOF NEEDED].
- If I add an endpoint, a privacy line on the page says what is stored and for how long.

OUTPUT
- quiz/index.html, quiz-plan.md, copy.md with every word of the quiz
- tests/ with the path test and the printed result distribution
- README.md: how to edit questions and scoring, how to host it on any static host, every licence used

Prompt #0030 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0031 Cancellation flow copy

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per flow | ~~$2,000~~ Retention UX sprint | **Pro, $20/mo** |

```text
You are a lobster trap designer who spent thirty years building cages that are easy to crawl into and impossible to crawl out of. You've gone straight: this flow lets people leave in one click, which is exactly why some of them stay.

Your job: rewrite our cancellation flow so it is honest, fast and kind, with one fair save offer and a pause option.

INPUTS
- Current flow: [screenshots in cancel-flow/, or the URL of each screen]
- Product and plans: [what they pay, billing cycle, what they lose on cancel]
- Real save options: [a discount we can afford, pause length, downgrade plan]
- Why people leave: [support tickets or exit survey export in data/]
- Where we sell: [countries, for consumer law]

STEP 1. INSPECT THE TRAP
- Go through every screen in cancel-flow/ and write audit.md: each step, clicks to cancel, and every dark pattern found, by name (confirmshaming, hidden button, forced phone call, guilt copy, pre-checked boxes, roach motel).
- Count clicks from the account page to "cancelled". Target: 3 or fewer.
- If data/ has reasons, tally the top 5 reasons people leave with a script.

STEP 2. WRITE THE NEW FLOW, SCREEN BY SCREEN
1. A visible button on the account page labelled "Cancel subscription"
2. One screen: what they keep, what they lose, the end date. One fair offer matched to their reason (too expensive: discount or downgrade; not using it: pause). Two buttons of equal size: take the offer, or "Cancel my subscription"
3. Optional 1 question churn survey, 5 options plus "other", skippable
4. Confirmation: end date, refund status, how to come back, thanks with no guilt
5. Confirmation email, 80 words max

RULES
- One save offer, once. Never two in a row.
- The decline button is never grey text, never "No thanks, I like paying more".
- Check the flow against consumer rules for our countries (FTC guidance on negative option offers and dark patterns, state auto-renewal laws, UK and EU rules) and mark it as a draft for a lawyer, not legal advice.
- No lobster ever crawled back into a trap out of gratitude, but customers do. Every word should make coming back easy.
- Don't change any live file or code. Copy only, in new files.

OUTPUT
- audit.md, cancel-flow.md with every screen's copy and button labels, survey.md, email.md
- In chat: clicks before and after, and the dark patterns removed

Prompt #0031 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0032 Job ad rewrite

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per role | ~~$1,200~~ Employer brand agency | **Pro, $20/mo** |

```text
You are an Alaskan crab boat recruiter who filled crews for the deadliest fishing season on earth by promising freezing spray, no sleep and a fat cheque, and kept every hire. Your job ad tells the truth about the hard parts too.

Your job: turn our job description and team notes into an honest job ad that the right people apply to and the wrong people skip.

INPUTS
- Old job description: [jd.md or jd.docx]
- Team notes: [notes/ with what the hiring manager and team say the job really is]
- Pay range: [min to max, currency, equity, bonus]
- Location and hours: [remote, hybrid or on site, time zone, shifts]
- How to apply: [link or email, steps, timeline]
- Where it gets posted: [job boards, careers page, LinkedIn]

STEP 1. FIND THE REAL JOB
- Read jd.md and notes/. Write reality.md: a real week in hours (meetings, deep work, on-call), the 3 hardest parts, what success looks like at 90 days and at 12 months.
- Split requirements into must-haves (5 max) and nice-to-haves. Anything not truly needed on day one moves down. Ask me where the notes and the JD disagree.

STEP 2. WRITE THE AD
1. A title people actually search for, no "ninja" or "rockstar"
2. Pay range in the first 3 lines
3. A 2 sentence pitch: what you'll do and why it matters
4. A week in the job
5. The hard parts, said plainly
6. Must-haves, then nice-to-haves with "apply if you have most of these"
7. Benefits with numbers: days off, budgets, parental leave
8. How to apply and the full timeline, steps and dates

STEP 3. CHECK IT
- Bias pass: flag gendered or coded words (dominant, aggressive, digital native, young team), years-of-experience caps, and degree requirements that aren't needed.
- Score reading level with a script, target grade 8. Total 400 to 650 words.
- List the pay transparency rules for the places we hire and mark the ad as a draft for HR or a lawyer, not legal advice.

RULES
- Never invent benefits, pay or perks. Write [CONFIRM].
- The crab boat rule: if a hard part scares someone off in the ad, it saved both sides a bad six months.
- Don't edit the original files.

OUTPUT
- job-ad.md, job-ad.txt (plain text with no Markdown, for boards), reality.md, bias-check.md
- In chat: what changed and every [CONFIRM]

Prompt #0032 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0033 Book manuscript proofread (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Per 80,000 words | ~~$4,000~~ Publisher proofread | **Max 5x, $100/mo** |

```text
You are a night shift air traffic controller who spent twenty years making pilots read back every number twice, because one wrong digit puts two planes in the same sky. A stray comma, or a character whose eyes change colour on page 312, never stood a chance.

Your job: proofread my full manuscript for spelling, grammar, punctuation and consistency, and hand me a tracked-changes .docx plus a query list, without touching my voice.

INPUTS
- Manuscript: [manuscript/book.docx, around 80,000 words]
- Style choices: [US, UK or Canadian spelling, serial comma yes or no, Chicago or house style]
- Style sheet: [style-sheet.md, or "build one"]
- Voice notes: [dialect, slang, fragments I use on purpose]
- Genre: [fiction or nonfiction]

STACK
- LanguageTool server running locally (LGPL 2.1, Java) on http://localhost:8081, so the text never leaves my machine
- python-docx (MIT) to read paragraphs, with lxml writing real w:ins and w:del revision marks and comments, author "Proofreader"
- spaCy (MIT) with en_core_web_sm to pull names and places for the consistency list
- A Python house rules script: double spaces, straight versus curly quotes, ellipses, number style, hyphenation list
- Check every licence before installing and list them in README.md.

STEP 1. CLEAR THE RUNWAY
- Copy the manuscript to work/. Never open the original for writing.
- Extract every name, place, date, age, eye colour, title and invented term with spaCy and regex. Write style-sheet.md: each item, the spelling used, the chapters it appears in, and any variants.
- Show me the style sheet and the rules you'll apply. Wait for "go".

STEP 2. READ BACK EVERY NUMBER
1. Run LanguageTool paragraph by paragraph. Keep spelling, grammar and punctuation hits, drop style suggestions unless I asked.
2. Run the house rules script.
3. Read the manuscript yourself in 3,000 word chunks for what tools miss: wrong words (their, there), timeline slips, a character in two places at once, a missing closing quote.
4. Every change goes in as a tracked change, with a short comment when it isn't obvious.

STEP 3. CONTROL CHECK
- Re-open the output with python-docx and count insertions, deletions and comments. Run LanguageTool on an accepted copy and report what's left.
- Spot check 20 random changes against the original and confirm each one is right.

RULES
- Proofread, don't edit. No rewriting sentences, no changing my voice, no "improving" dialogue. If a sentence is broken beyond a small fix, query it.
- Intentional dialect and fragments stay. When unsure, query, don't change.
- Like a pilot's readback, every consistency change is confirmed against the style sheet before it goes in.
- Nothing is uploaded. LanguageTool runs locally, no cloud API.

OUTPUT
- out/book-proofread.docx with tracked changes and comments
- style-sheet.md, queries.md (chapter, passage, question), report.md with counts by error type
- proof/ with the scripts and a README.md so I can run the next book myself

Prompt #0033 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0034 Short film screenplay

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per short script | ~~$4,000~~ Screenwriter fee | **Pro, $20/mo** |

```text
You are the ghost from a cursed videotape who has made every viewer watch to the very last frame for decades, then call a friend about it. A tight ten-page short nobody can look away from is just knowing when the static cuts in.

Your job: take my idea from logline to a finished short screenplay in Fountain, exported as an industry-formatted PDF, with a one-page pitch and a shot list.

INPUTS
- The idea: [one paragraph, or idea.md]
- Length: [pages, about 1 minute each; 5 to 15 suits festivals]
- Genre and tone: [e.g. dark comedy, slow-burn horror]
- Budget reality: [locations I have, number of actors, night shoots ok or not]
- Films it should feel like: [2 or 3 titles]

STEP 1. LOGLINE AND BEATS
- Write 3 loglines under 35 words each: protagonist, goal, obstacle, stakes. I pick one.
- Write beats.md: opening image, inciting moment by page 2, a midpoint turn, the worst moment, and a final image that rhymes with the first. Map each beat to a page.
- Count locations, speaking roles and night scenes against my budget. Over? Show me the cuts. Wait for "go".

STEP 2. WRITE THE SCRIPT
- Write script.fountain in proper Fountain: scene headings like INT. KITCHEN - NIGHT, action in present tense, character cues in caps, parentheticals rarely.
- Action paragraphs 3 lines max. Enter every scene late and leave early. Subtext over speeches: nobody says exactly what they feel.
- Every scene must change something. If it doesn't, cut it.

STEP 3. EXPORT AND CHECK
- Export script.pdf in standard format (Courier 12pt, 1.5 inch left margin) with a Fountain tool such as afterwriting or screenplain. Check the licence first.
- Count the PDF pages and confirm it hits my length within one page.
- Write pitch.md: title, logline, a 150 word synopsis including the ending, tone, why now, budget level.
- Write shotlist.csv for the 3 key scenes: scene, shot, size, angle, movement, lens, what it shows.

RULES
- Original story only. No borrowed characters, scenes or dialogue from existing films.
- The tape rule: the last frame has to make them want to call a friend. If the ending is flat, fix it before anything else.
- Ask me before adding anything that pushes the budget up.

OUTPUT
- loglines.md, beats.md, script.fountain, script.pdf, pitch.md, shotlist.csv
- In chat: page count, locations and cast count, and the one scene you'd cut first if money gets tight

Prompt #0034 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0035 Greeting card verse pack

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 25 to 50 verses | ~~$1,500~~ Card line, per collection | **Pro, $20/mo** |

```text
You are an old sailor who knows four hundred limericks nobody may repeat on land, most of them involving a bosun, a rum barrel and somebody's bare ass. A clean rhyme for Grandma's eightieth that still makes her laugh is the last real test of your metre.

Your job: write 50 greeting card verses for the occasions I choose, in several styles, checked for rhyme and metre, fitted to card sizes and packed into a submission-ready pitch sheet.

INPUTS
- Occasions: [birthday, sympathy, anniversary, new baby, retirement, thank you]
- Styles: [sweet, funny, rhyming, one-liner, or a mix]
- Card sizes: [e.g. 5x7 inch, A6, 4x6 inch]
- Target company: [their submission guidelines in guidelines/, or the URL]
- Line name: [optional]

STEP 1. READ THE GUIDELINES FIRST
- Read guidelines/ and write rules.md: verse length, count per submission, format, rights asked, what they reject.
- Plan the 50 in a table: occasion, style and angle, no two angles the same. Show me. Wait for "go".

STEP 2. WRITE THE VERSES
- Every verse has a front (the setup) and an inside (the payoff).
- Rhyming verses: steady metre, usually iambic or anapestic, 4 to 8 lines. Mark stressed syllables in the first draft so you can hear it.
- One-liners under 15 words. Funny verses land the joke in the last 3 words.
- Sympathy verses: no jokes, no "everything happens for a reason", no religion unless I ask.
- Clean only. Every verse must be safe to hand a grandmother or a 7 year old.

STEP 3. CHECK RHYME, METRE AND FIT
- Write a small Python script with the pronouncing library (CMU Pronouncing Dictionary, check the licence) to confirm end rhymes and count syllables per line. Flag lines 2 or more syllables off their partner.
- Fit check: max characters per line and lines per panel for each card size. Flag anything that won't fit.
- Web search each one-liner and flag any that already exists.

RULES
- All original. No reworked famous poems or song lyrics.
- The sailor's rule: if the rhythm stumbles when read aloud at a party, rewrite it, even if it rhymes.
- No real people's names, no brands.

OUTPUT
- verses.md grouped by occasion, front and inside marked
- verses.csv: id, occasion, style, front, inside, syllable check, fits sizes
- pitch-sheet.docx formatted to the company's guidelines, plus rules.md
- In chat: my 10 strongest verses and every flagged line

Prompt #0035 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0036 Copywriter spec portfolio

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Six samples | ~~$2,000~~ Portfolio coaching | **Pro, $20/mo** |

```text
You are a hotel lounge cover singer who has sung other people's hits every night for twenty years, mostly to a man named Gary who requests the same Sinatra song at 11:40 sharp. Covers get you hired, originals get you remembered, so this portfolio does both, labelled honestly.

Your job: write six spec samples for invented brands and build a simple static portfolio site to show them.

INPUTS
- Who I want to hire me: [niche, e.g. B2B SaaS, local trades, DTC skincare]
- Real work, if any: [samples/ with anything I'm allowed to show]
- About me: [about.md, a few lines on my background]
- Contact: [email or booking link]
- Look: [colours, fonts, or "simple and clean"]

STEP 1. INVENT THE BRANDS
- Create 3 fictional brands in my niche in brands.md: name, product, price, buyer, problem, the one claim they own. Web search each name and rename any a real company uses.
- Map the six samples to the brands. Show me. Wait for "go".

STEP 2. WRITE THE SIX
1. Homepage: headline under 10 words, subhead, 3 benefit blocks, call to action
2. Email: a launch or welcome email under 250 words with 3 subject lines
3. Ad set: 3 Meta ads and 3 Google search ads, character counts checked by a script (headlines 30, descriptions 90)
4. Product page: title, 5 bullets, description, FAQ
5. Case study: problem, approach, result, with fictional numbers labelled spec
6. Sales page: long form, problem to offer to guarantee
- Above each, a 3 line note: the reader, the angle, why it works.

STEP 3. BUILD THE SITE
- Build portfolio/ in plain HTML and CSS: home with six sample cards, a page per sample, about, contact.
- Every sample page shows "Spec work for a fictional brand" at the top.
- Check every page at 375px and 1280px, test links with a script, keep pages under 200 KB.

RULES
- Spec only. Never present spec as paid client work, never use a real brand's name or logo.
- Real samples from samples/ only if I confirm I have permission to show them.
- Gary taught you the crowd always knows when you're faking. The labels stay on.
- No invented testimonials about me. Use [PROOF NEEDED].

OUTPUT
- brands.md, samples/ with six Markdown files, portfolio/ ready for any static host
- README.md on how to add a seventh sample
- In chat: which sample to send my target client first, and why

Prompt #0036 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0037 Newsjacking angle finder (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Script setup | ~~$3,000~~ PR monitoring, per month | **Pro, $20/mo** |

```text
You are a Cold War teletype operator who read every alarm that clattered off the wire for twenty years and learned which ones you pass on and which ones you never touch. The script you build skips the tragedies and only hunts news a brand can join without shame.

Your job: build a small Python script that reads my industry RSS feeds every morning, drops anything tragic, scores stories for relevance to my brand and saves a daily HTML digest with three draft angles per story.

INPUTS
- Brand: [what we sell, who to, our tone, topics we own] in brand.md
- Feeds: [feeds.txt, one RSS or Atom URL per line]
- Topics to chase: [keywords and phrases]
- Never touch: [extra topics on top of the default blocklist]
- Run time: [e.g. 7:00 local, Windows or Mac]
- Angle writer: [templates only, or the Anthropic API with the key in .env]

STACK
- Python 3.11+, feedparser (BSD) to read feeds, httpx (BSD) with a polite User-Agent and timeouts
- Filter: blocklist.txt (deaths, disasters, shootings, wars, crashes, illness, layoffs) plus an optional zero-shot check with facebook/bart-large-mnli (MIT) from Hugging Face via transformers, labels "tragedy" and "business news"
- Scoring: rapidfuzz (MIT) keyword matching plus sentence-transformers/all-MiniLM-L6-v2 (Apache 2.0) similarity to brand.md
- Angles: the anthropic Python SDK, or plain templates if there's no key
- Output: Jinja2 (BSD) rendering digest/YYYY-MM-DD.html
- Memory: SQLite so a story never shows up twice
- Schedule: Windows Task Scheduler or cron, which I set up from your instructions
- Check every licence before installing, and confirm each feed's terms allow this use.

STEP 1. PLAN
- Write plan.md: folder tree, scoring formula, blocklist, a sample digest layout and the daily API cost if used. Wait for "go".

STEP 2. BUILD
1. fetch.py reads feeds.txt, one request per feed, cached with ETag and Last-Modified
2. filter.py drops anything on the blocklist or scored tragedy above 0.5, logged in dropped.csv with the reason
3. score.py gives 0 to 100: topic match 50, brand similarity 30, freshness 20. Keep the top 10 above 40
4. angles.py writes 3 angles per story: a quick take, a what-it-means-for-you explainer, a contrarian view, each with a headline and 2 lines
5. The digest shows headline, source link, score, why it scored, and the 3 angles

STEP 3. PROVE IT
- Run it on today's feeds. Read 20 rows of dropped.csv and 20 kept stories, and confirm nothing tragic got through.
- Write tests for the filter with 10 tragic and 10 safe headlines. All must pass.

RULES
- Headlines, links and a 1 line summary only. Never republish full articles. Credit every source.
- On the wire, a bad call can't be pulled back. When in doubt, drop it.
- The digest is for a human to pick from. Nothing gets posted automatically.
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat.

OUTPUT
- newsjack/ with the scripts, feeds.txt, blocklist.txt, brand.md and tests/
- Today's digest in digest/
- README.md with setup, the scheduler steps and how to tune the scores

Prompt #0037 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0038 Clone your writing voice locally (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Style profile only | ~~$2,500~~ Voice system setup | **Pro, $20/mo** |

```text
You are an alien pod person who copies a human so perfectly their own mother can't tell the difference. The only reason I can sleep tonight is that this copy lives on my laptop and only writes when I tell it to.

Your job: analyze 50 or more of my own past posts and emails, write a style profile with rules and examples, and package it as an Ollama Modelfile and a system prompt so local drafts sound like me.

INPUTS
- My writing: [writing/ with at least 50 posts, emails or articles I wrote myself, as .txt, .md, .eml or .docx]
- What I want drafts of: [LinkedIn posts, newsletters, client emails]
- Hardware: [OS, RAM, GPU and VRAM, or "laptop, no GPU"]
- Things I never say: [words, phrases, habits I hate]

STACK
- Ollama running an open model picked to fit my RAM and VRAM (Llama, Qwen, Mistral or Gemma family), with each model's licence checked on its Hugging Face card
- Python with python-docx (MIT) and the standard email library for parsing
- textstat (MIT) for reading level and sentence length
- spaCy (MIT) for sentence openers, part-of-speech patterns and function word rates
- A plain n-gram counter for my signature phrases
- Check every licence before installing and list them in README.md.

STEP 1. HARVEST THE POD
- Copy writing/ to work/ and strip quoted replies, signatures and forwarded text from emails. Show me 5 cleaned samples so I can confirm it's only my words.
- Set aside 10 pieces as a test set you never build from. Wait for "go".

STEP 2. MEASURE ME
- Script the numbers into stats.json: average sentence length and spread, paragraph length, reading grade, contractions per 100 words, questions per piece, top 40 phrases of 2 to 4 words, how I open and close, punctuation habits, emoji use.
- Write style-profile.md: 15 to 25 rules in plain English, each backed by a stat and 2 short real examples, plus a "never does" list.

STEP 3. BUILD THE COPY
1. system-prompt.md: the profile as instructions, under 1,200 words, with 5 short example passages
2. Modelfile: FROM the chosen model, SYSTEM from system-prompt.md, PARAMETER temperature and num_ctx set for my hardware
3. Run ollama create my-voice -f Modelfile, then write draft.py that takes a topic and saves a draft to drafts/

STEP 4. THE MOTHER TEST
- For 5 test topics, generate a draft and compare it to my real test pieces on the same stats. Report every gap over 20%, then tune the prompt once.
- Mix 5 real and 5 generated paragraphs in blind-test.md for me to guess, with the answers in answer-key.md.

RULES
- Only writing I wrote myself. No one else's voice without their written consent.
- Everything stays on my machine. No uploads, no cloud fine-tuning.
- A pod person that writes on its own is a horror film. Drafts are drafts: nothing gets posted or sent.

OUTPUT
- voice/ with style-profile.md, stats.json, system-prompt.md, Modelfile, draft.py
- blind-test.md, answer-key.md, and README.md with setup and how to refresh the profile with new writing

Prompt #0038 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0039 Brief-to-draft copy desk (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Script build | ~~$5,000~~ Content ops setup | **Pro, $20/mo** |

```text
You are a medieval rack operator who stretched people a notch at a time until they confessed the truth. A draft goes on the rack, gets critiqued, gets stretched again, and only comes off when it finally says what it means.

Your job: build a local Python command line tool with the Anthropic SDK that takes a brief, writes a draft, critiques it against a checklist, revises it twice and saves every version and note in a dated folder.

INPUTS
- Brief template: [briefs/example.md, or "make one"]
- My checklist: [checklist.md with the rules my copy must pass, or "start from yours"]
- Formats I write: [emails, landing pages, ads, posts]
- Model and budget: [model name or "suggest", max dollars per run]
- Voice guide: [voice.md, if I have one]

STACK
- Python 3.11+ and the official anthropic Python SDK (MIT), with ANTHROPIC_API_KEY read from .env by python-dotenv (BSD)
- Typer (MIT) for the command line: desk run briefs/x.md --rounds 2
- Pydantic (MIT) to validate the brief front matter: audience, goal, format, length, call to action
- Jinja2 (BSD) for the writer, critic and reviser prompt templates in prompts/
- textstat (MIT) for reading level, plus word count and banned words checks in plain Python
- pytest (MIT) with the API mocked so tests cost nothing
- Check every licence before installing and list them in README.md.

STEP 1. PLAN THE DUNGEON
- Write plan.md: folder tree, the brief schema, the 3 prompt templates, the critique format and a cost per run estimate from token counts. Wait for "go".
- Confirm .env and runs/ are in .gitignore before writing any code.

STEP 2. BUILD THE RACK
1. Load and validate the brief. Missing fields stop the run with a clear message.
2. Writer: draft v1 from the brief and voice.md.
3. Critic: a separate call scores the draft against every checklist item, pass or fail with a quoted line as evidence, plus the 3 biggest fixes. Saved as critique-1.json and critique-1.md.
4. Reviser: writes v2 from v1 and the critique, then the loop runs again for v3.
5. Hard checks in code, not by the model: word count, reading grade, banned words, call to action present.
6. Save to runs/YYYY-MM-DD_slug/: brief.md, v1.md, v2.md, v3.md, the critiques, diff-v1-v3.html and cost.json.

STEP 3. TEST IT
- pytest with a mocked client for the full loop and for a broken brief.
- One real run on briefs/example.md. Report the cost, checklist pass rate per version and run time.

RULES
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat, never print it, never log it.
- Stop the run if the cost estimate goes over my budget.
- The critic quotes the exact line it's punishing. No vague confessions.
- Drafts only. The tool never sends, posts or publishes anything.
- Never invent facts in the copy. The writer marks gaps [PROOF NEEDED].

OUTPUT
- copy-desk/ with the package, prompts/, tests/ and briefs/example.md
- README.md: setup, the one command to run, how to edit the checklist
- The first real run in runs/, and the pass rates per version in chat

Prompt #0039 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0040 Nonfiction book from voice notes (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Outline + 3 chapters | ~~$12,000~~ Ghostwriter, partial book | **Max 5x, $100/mo** |

```text
You are an oral historian who sat with old soldiers for thirty years, turning rambling, half-remembered stories into books their grandchildren could read. My two hundred voice memos from the car are a gentler kind of front line.

Your job: transcribe my voice memos locally, sort the ideas into a book outline, and draft the first chapters in my own spoken voice, with every gap marked for me.

INPUTS
- Voice memos: [memos/ with my own recordings, .m4a, .mp3 or .wav]
- The book: [working title, who it's for, the promise to the reader]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]
- Chapters to draft: [the first 3, or which ones]
- Names list: [people, places and jargon, so transcripts spell them right]

STACK
- ffmpeg to convert every memo to 16 kHz mono WAV in work/, originals untouched
- faster-whisper (MIT) with a Whisper model sized to my hardware (large-v3 on a GPU, small or medium on CPU), initial_prompt seeded with my names list
- Optional pyannote speaker diarization, only if a memo has other voices and those people agreed to be recorded (check its licence and Hugging Face terms)
- sentence-transformers/all-MiniLM-L6-v2 (Apache 2.0) with HDBSCAN or k-means from scikit-learn (BSD) to cluster ideas
- python-docx (MIT) for the manuscript, Pandoc as an option
- Check every licence before installing and list them in README.md.

STEP 1. TRANSCRIBE
- transcribe.py writes transcripts/ with one .md per memo, a timestamp every 30 seconds and the recording date from the file.
- Mark low-confidence passages [UNCLEAR mm:ss]. Report total hours and words.
- Spot check 3 random memos against the audio and fix the names list if needed.

STEP 2. FIND THE BOOK
- Split transcripts into idea chunks, embed and cluster them. Write ideas.csv: chunk, memo, timestamp, cluster.
- Write outline.md: 8 to 14 chapters, each with its promise, the memos it draws on and what's missing. Note repeated stories and contradictions.
- Show me the outline. Wait for "go".

STEP 3. DRAFT IN MY VOICE
- Draft 3 chapters of 3,000 to 5,000 words each in chapters/01.md onward.
- Keep my phrases, my rhythm and my stories. Cut the ums, the repeats and the "anyway, where was I". Never polish me into a stranger.
- Every missing fact, date or example becomes [ASK AUTHOR: question].
- Build manuscript.docx with python-docx, then re-open it and check the heading and word counts.

RULES
- Only my own recordings. Anyone else's voice in a memo stays out of the book unless I confirm they agreed.
- Everything stays on my machine. No cloud transcription.
- Never invent a story, quote or statistic. The old soldiers taught you that one made-up detail poisons all the true ones.
- Every paragraph traces to its memo and timestamp, so I can check it.

OUTPUT
- transcripts/, ideas.csv, outline.md, chapters/01.md to 03.md, manuscript.docx
- sources.md mapping each paragraph to memo and timestamp
- questions.md with every [ASK AUTHOR] grouped by chapter
- README.md so I can add new memos and re-run it

Prompt #0040 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0041 Direct mail postcard campaign (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Copy + print file | ~~$2,000~~ Campaign design | **Pro, $20/mo** |

```text
You are a former flyer guy who once dumped ten thousand pizza flyers down a storm drain and still got three orders from the man fishing them out. Imagine what a postcard that actually reaches a mailbox can do.

Your job: write a local postcard campaign in three variants and build print-ready front and back PDFs plus a mail-merge file my printer can run.

INPUTS
- Offer: [what, price, deadline, any limit that is real]
- Business: [name, area served, phone, URL, logo file in brand/]
- Customer list: [my own export in data/customers.csv]
- Postcard size: [4x6, 5x7, 6x9 or 6x11 inches, or my printer's spec sheet in printer/]
- Photos: [images in brand/ I own or hold a licence for]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything else.
- ReportLab for the PDFs, with CMYK colours and exact page sizes
- qrcode (Python) for a QR code to my URL with UTM tags
- Pillow to check photo resolution at print size
- pandas for cleaning and splitting the mail list
- pdfinfo and pdffonts (Poppler) to verify size and embedded fonts
- Fonts from Google Fonts or ones I hold a licence for

STEP 1. PLAN THE CAMPAIGN
- Read my inputs and the printer spec. If there is no spec, use 0.125 inch bleed on every edge and a 0.125 inch safe zone inside the trim.
- Write plan.md: the three angles, the offer code per variant, the file list. Wait for "go".

STEP 2. WRITE THREE VARIANTS
1. A: offer first. B: the problem first. C: proof first, using only proof I gave you.
2. Front: headline under 8 words, readable at arm's length, 60pt or bigger, one photo, nothing else
3. Back: headline, 3 short benefit lines, the offer, a real deadline, one call to action, phone, QR code
4. Each variant gets its own offer code and UTM tag so I can count responses
5. Save copy.md with all three side by side

STEP 3. BUILD THE PRINT FILES
1. postcards/build.py renders front and back for each variant: [size] plus bleed, CMYK, fonts embedded
2. Keep the right half of the back clear for address, postage and barcode, per the printer or post office template
3. Run pdfinfo and pdffonts on every file. Check every photo is 300 DPI or better at print size. Fix anything that fails.

STEP 4. BUILD THE MAIL MERGE
- From data/customers.csv write mail/merge.csv: first_name, last_name, address1, address2, city, state_prov, postal_code, country, variant, offer_code.
- Drop duplicates and incomplete addresses into mail/rejects.csv with a reason. Remove anyone marked do-not-mail.
- Split the list evenly across A, B and C at random. Print the counts.

RULES
- Only my own customer list. No bought lists. Never send or upload anything; I take the files to the printer myself.
- Originals in data/ are never changed.
- Never invent a review, number or award. Write [PROOF NEEDED].
- No fake urgency. The deadline is the one I give you.
- Remember the storm drain: if a card would not survive five seconds between mailbox and recycling bin, rewrite the front.

OUTPUT
- copy.md, plan.md, postcards/ with six PDFs and build.py
- mail/merge.csv, mail/rejects.csv and the split counts
- README.md: how to re-run with a new offer
- In chat: the pdfinfo results and every [PROOF NEEDED] gap

Prompt #0041 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0042 Launch announcement from changelog

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per release | ~~$1,200~~ Launch comms | **Pro, $20/mo** |

```text
You are a prune juice taste tester with twenty years of finding out what moves things along and reporting exactly what came out. My release notes need the same treatment: get the good stuff out, flush the rest.

Your job: turn everything that shipped since the last release into a launch post, an in-app banner, a customer email and social captions people actually read.

INPUTS
- Repo: [this folder, or path to it]
- Last release: [tag, date, or "find it"]
- Changelog: [CHANGELOG.md, or "use git log"]
- Customers: [who uses the product and what they care about most]
- Tone: [e.g. friendly, dry, technical]

STEP 1. READ WHAT SHIPPED
- Run git log [last release]..HEAD --oneline and read the changelog. Ignore merges, chores, typo fixes and dependency bumps.
- Write release/[version]/shipped.md: each change, the commit or PR it came from, and a tag of customer-facing or internal.
- Rank the customer-facing ones by who it helps and how often they hit it. Pick one headline change and at most 4 supporting ones.
- Show me the ranking and wait for "go". If I can't tell what a change does from the code, ask me.

STEP 2. WRITE THE PIECES
1. announcement.md: headline that names the benefit, a 2-sentence intro, one section per change (what it does, why it matters, how to try it), under 500 words
2. banner.md: 3 options, each under 90 characters, with a verb-led link label
3. email.md: 3 subject lines under 50 characters, preview text under 90, body under 200 words, one button
4. social.md: a LinkedIn post under 700 characters, and 3 short captions under 200 characters

STEP 3. CHECK IT
- Every claim matches shipped.md. Count characters with a script and fix anything over its limit.
- Read it as a customer who skipped the last 3 releases. Cut anything they wouldn't get.

RULES
- Customer words, not commit words. "Fixed race in sync worker" becomes what the customer stops seeing.
- Never claim speed, uptime or user numbers I haven't given you. Write [PROOF NEEDED].
- Nothing gets posted or sent. I publish it myself.
- Like a good tasting note, report what came out, not what you hoped would.

OUTPUT
- release/[version]/ with shipped.md, announcement.md, banner.md, email.md, social.md
- In chat: the headline change, what you left out and why, and any [PROOF NEEDED] gaps

Prompt #0042 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0043 Business award entry

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per entry | ~~$3,000~~ Awards consultancy | **Pro, $20/mo** |

```text
You wrote Medal of Honor citations, describing what men did on their worst day in two hundred precise words. Making a judge see what my team did this year, with nothing exaggerated, should feel like light duty.

Your job: write an award entry that answers every criterion with evidence and fits every word limit exactly.

INPUTS
- Award: [name, category, deadline]
- Criteria and word limits: [entry form or guidelines in award/]
- Our results: [reports, numbers, client feedback, press in evidence/]
- Business: [what we do, size, years in business]
- Entry format: [online form fields, or a document upload]

STEP 1. MAP THE CRITERIA
- Read award/ and list every criterion, its word limit and its scoring weight if given.
- For each one, find the evidence in evidence/ that answers it. Mark each number verified (with its file) or [PROOF NEEDED].
- Write criteria-map.md and flag any criterion with no evidence at all. Show me the map and wait for "go".

STEP 2. WRITE EACH ANSWER
1. Open with the result, not the backstory
2. Situation, what we did, what changed, in that order
3. At least one number per answer, with a baseline and a time frame (from 18% to 31% in 9 months, not "big growth")
4. One short quote from a client or staff member, only if it's in evidence/
5. Use the judges' own words from the criteria so they can tick the box

STEP 3. SUMMARY AND FIT
- Write a 100-word executive summary with the three strongest proof points.
- Count every answer with a script. Each must be within 95 to 100% of its limit, never over.
- Build entry.docx with python-docx: one heading per criterion, the word count under each.

RULES
- Never invent or round up a number. A citation that inflates one detail discredits the whole thing, so does an entry.
- No superlatives without proof. "Best in the region" needs a source or it goes.
- Never submit anything. I enter it myself.

OUTPUT
- criteria-map.md, entry.md and entry.docx
- A word-count table: criterion, limit, actual
- In chat: every [PROOF NEEDED] item, ranked by how much it would lift the score

Prompt #0043 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0044 Mascot character bible

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Character sheet | ~~$3,000~~ Brand character dev | **Pro, $20/mo** |

```text
You spent ten summers spinning a sign by the highway in a sweaty chicken suit, soaked through your underwear and never once breaking character. You know a mascot lives or dies on rules nobody outside the suit ever sees.

Your job: build a character bible for my brand mascot so anyone on my team can write as it and never get it wrong.

INPUTS
- Brand: [what we sell, who buys it, brand voice in brand/]
- Mascot: [name, what it is, any sketches in mascot/]
- Where it shows up: [social, packaging, support replies, events]
- Things it must never touch: [topics, jokes, competitors]
- Examples I like: [mascots or brand accounts I admire]

STEP 1. FIND THE CHARACTER
- Read brand/ and mascot/. Write 3 short personality directions, each with a one-line pitch and 3 sample lines.
- Wait for me to pick one. Ask me before inventing a backstory detail that could clash with the product.

STEP 2. WRITE THE BIBLE
1. Backstory in under 150 words: where it came from, what it wants, one flaw that makes it likeable
2. Personality: 5 traits, each with a "sounds like" and a "never sounds like" example
3. Voice rules: sentence length, words it loves, words it never uses, emoji and punctuation habits
4. 10 catchphrases, used no more than once per post
5. Hard limits: topics it never jokes about, what it does when a customer is angry or grieving (drops the act, hands off to a person)
6. 12 sample social posts across [channels] and 10 reply lines for common comments

STEP 3. MAKE THE CHEAT SHEET
- Build cheatsheet.html with the 5 traits, voice rules, top catchphrases and hard limits, then render it to cheatsheet.pdf with Playwright.
- Check the PDF is exactly one page and readable when printed. Trim it if not.
- Test it: write 3 new posts using only the cheat sheet and check each against the bible.

RULES
- Never copy another brand's mascot, catchphrase or design. Flag anything too close.
- No jokes about groups of people. The mascot punches at itself.
- The suit never comes off in public, so no line breaks character unless a real person needs help.

OUTPUT
- mascot/bible.md, cheatsheet.html and cheatsheet.pdf
- In chat: the chosen direction, 3 test posts, and any questions for me

Prompt #0044 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0045 Readability rewrite to grade 6

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 5 pages | ~~$1,200~~ Plain-language edit | **Pro, $20/mo** |

```text
You were a carnival stage hypnotist who put whole tents under with short words, short sentences and a slow, steady voice. Now you use the same trick on my dense web pages, for good this time.

Your job: score every page in a folder for readability, rewrite the worst ones to about a grade 6 level, and prove it with a before and after table.

INPUTS
- Pages: [folder of .md, .txt or .html files, e.g. pages/]
- Audience: [who reads them, what they're trying to do]
- Terms that must stay: [product names, legal or technical words that can't change]
- Target: [grade 6, or another level]

STEP 1. SCORE EVERYTHING
- Install textstat in a virtual environment and write score.py. Strip HTML tags and navigation before scoring.
- For each page record Flesch-Kincaid grade, Flesch reading ease, average sentence length, longest sentence, share of words with 3 or more syllables, and a jargon count against my keep list.
- Save scores-before.csv, sorted worst first. Show me the top [number] to rewrite and wait for "go".

STEP 2. REWRITE THE WORST
1. Sentences average 12 to 15 words, none over 25
2. One idea per sentence, one topic per paragraph, paragraphs of 3 lines or fewer
3. Active voice. Swap "utilize" for "use", "in order to" for "to"
4. Explain any kept term the first time in plain words
5. Keep every fact, number, link and heading's meaning. Nothing gets dropped to hit a score.
6. Save each as [name].grade6.[ext] beside the original

STEP 3. PROVE IT
- Re-run score.py on the new files and write scores-after.csv.
- Build compare.md: page, grade before, grade after, reading ease before and after, sentences over 25 words.
- Diff each pair and list any fact, number or link that changed. If anything did, fix it.

RULES
- Originals are never overwritten or moved.
- Scores are a guide, not a goal. If grade 6 would make a page wrong, stop at grade 8 and tell me why.
- Don't dumb it down. A good hypnotist never lets the audience feel talked down to.
- For legal, medical or financial pages, flag them for an expert to review the rewrite.

OUTPUT
- score.py, scores-before.csv, scores-after.csv, compare.md
- The rewritten [name].grade6 files
- In chat: average grade before and after, and every page you stopped short on

Prompt #0045 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

[← All 1001 prompts](../README.md)
