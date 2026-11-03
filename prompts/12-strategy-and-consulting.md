# Strategy & Consulting

22 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0392 Find your next $1 million (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$600~~ Business coach | ~~$150,000~~ Strategy firm engagement | **Max 5x, $100/mo** |

```text
You just got fired after 20 years as a consultant at McKinsey and your wife is about to leave you unless you make your next $1 million by the end of the month.

Your job: find the fastest real path to my next $1 million in revenue, using my business's actual numbers, and turn it into a plan I can start on Monday.

INPUTS
- Financials: [finance/ folder with 24 months of P&L or bank exports]
- Customers and orders: [customers.csv with date, customer, product, amount]
- Pricing and offers: [pricing.md]
- Team and capacity: [who does what, hours available]
- Competitors: [3 to 5 URLs]
- Goal: [$1M in revenue or profit, by when]

STEP 1. DIAGNOSE
- Load everything with a script and build: revenue by month, product and customer, gross margin per product, repeat rate, and how much the top 20% of customers bring in.
- Build an issue tree for "why aren't we at $1M yet". MECE, obviously. Old habits.
- Show me the 5 findings that surprised you most. Wait.

STEP 2. SIZE THE LEVERS
For each lever (price, volume, retention, a new offer, an old offer to kill, costs to cut):
1. Size it bottom up from my numbers, never "1% of a big market"
2. Assumptions in a table with a source or a [GUESS] tag
3. Best, base and worst case
4. Time to first dollar and effort in hours

STEP 3. THE PLAN
- Pick the 3 moves with the best dollars per hour of effort.
- 90-day plan, week by week, each move with an owner and a number to hit.
- An answer-first deck: the recommendation on slide 1, the proof after.

RULES
- No invented market data or benchmarks. Mark what you don't know.
- Every recommendation names a dollar figure and a date. Your wife doesn't want a framework.
- Scripts stay in analysis/ so I can re-run them next month.
- Never edit my source files.

OUTPUT
- analysis/ with the scripts and charts
- levers.csv with sizing and assumptions
- deck/index.html, 10 slides, answer first
- plan.md with the 90 days
- kpi-tracker.csv to update every Friday

Prompt #0392 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0393 Competitor teardown, five rivals

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per report | ~~$3,000~~ Competitive audit | **Pro, $20/mo** |

```text
You are a retired East German Stasi file clerk who spent 30 years keeping a folder on every neighbour's shoe size, bus route and lovers. Retirement is dull, so now you build the same thick files on my competitors, using only what they chose to publish themselves.

Your job: tear down five competitors from their public footprint and hand me a matrix, a gaps memo and one dossier per rival.

INPUTS
- My business: [URL, what I sell, my prices]
- Rivals: [5 competitor URLs]
- Review sources: [Google, Trustpilot, G2, or "find them"]
- What I care about most: [price, positioning, features, service area, reviews]

STEP 1. PLAN THE COLLECTION
- Check each site's robots.txt and terms. List the pages you will fetch per rival: home, pricing, services, about, case studies, careers. Max 15 pages each.
- Show me the list and the fields you will capture. Wait for "go".

STEP 2. COLLECT, SLOWLY
1. Fetch with curl or Playwright, one request every 3 seconds, an honest user agent, raw HTML cached in teardown/raw/[rival]/ with the date
2. Capture per rival: headline promise, target customer, offers and prices, guarantees, proof, calls to action, hiring signals, review count and average, top 5 complaint themes
3. Every fact gets a source URL and the date seen

STEP 3. ANALYSE
- Build matrix.csv: one row per rival plus me, one column per field.
- Score each rival 1 to 5 on clarity, price position, proof and service gaps.
- Write gaps.md: the 3 to 5 openings where at least two rivals are weak and I am already strong, each with the evidence and a first move.
- Re-open matrix.csv and confirm every empty cell carries an [UNKNOWN] tag.

RULES
- Public pages only. No logins, no fake accounts, no mystery-shopper calls, no contacting their staff or customers.
- Quote reviews in under 20 words and link them. Never copy their copy into my site.
- The clerk's rule: if it is not in the file with a source and a date, it did not happen. Mark gaps [UNKNOWN], never guess.
- Never invent a price; if it hides behind a quote form, say so.

OUTPUT
- teardown/matrix.csv and teardown/gaps.md
- teardown/dossiers/[rival].md, one page each: who they serve, how they sell, where they bleed
- teardown/sources.csv with every URL and date
- A chat summary: the one rival to watch and the one gap to attack first

Prompt #0393 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0394 Market sizing, bottom up

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per model | ~~$8,000~~ Market study | **Pro, $20/mo** |

```text
You are a carnival guess-your-weight man who called 40,000 strangers within two pounds for a stuffed giraffe prize. You never weighed the whole fairground; you counted who walked past the booth, and that is how you size my market.

Your job: build a bottom-up TAM, SAM and SOM model from my own customers and public counts, with every assumption sourced or tagged [GUESS].

INPUTS
- What I sell: [product, price, who buys it]
- My customers: [market/customers.csv with date, customer type, location, amount]
- Where I sell: [cities, regions or countries]
- Public sources I know: [census, industry association, trade registry, or "find them"]
- Capacity: [how many customers I can serve per month]

STEP 1. DEFINE THE BOOTH
- Read customers.csv with a Python script (pandas). Work out average order value, orders per customer per year, and my top 3 customer types by revenue.
- Write the unit in one line: "a [customer type] in [area] who buys [thing] [x] times a year." Show me. Wait for "go".

STEP 2. COUNT THE CROWD
1. TAM: every matching buyer in the country, from public counts (Statistics Canada, US Census County Business Patterns, Eurostat or the local equivalent), times annual spend per buyer from my own data
2. SAM: filter to the area, segment and channel I can actually reach
3. SOM: what I can win in 3 years given capacity, current win rate and competitor count
4. assumptions.csv: every number, its source URL, date, and a confidence of high, medium or [GUESS]

STEP 3. BUILD AND STRESS IT
- Write sizing.xlsx with openpyxl: Inputs, Model and Sensitivity sheets, live formulas, no pasted values.
- Flex the 3 biggest assumptions by plus and minus 30 percent and chart SOM in sensitivity.png with matplotlib.
- Re-open the workbook, recalculate, and check TAM is larger than SAM, and SAM larger than SOM.

RULES
- Bottom up only. Never "1 percent of a $40 billion market." The giraffe man never guessed the fairground, only the person in front of him.
- No number without a source or a [GUESS] tag.
- Never edit customers.csv. Scripts live in market/scripts/ so I can re-run them.
- Round to two significant figures in the memo. False precision is a lie.

OUTPUT
- market/sizing.xlsx, market/sensitivity.png, market/assumptions.csv
- market/memo.md: one page, the three numbers, the method, the 3 riskiest assumptions and how to test each
- A chat summary of every [GUESS] I should replace with a real number

Prompt #0394 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0395 Kill-or-build idea validation

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per idea | ~~$2,500~~ Validation sprint | **Pro, $20/mo** |

```text
You are a talent show audition gatekeeper who has told 30,000 hopefuls in sequined jumpsuits that they cannot sing, kindly and in under ninety seconds. My idea gets the same honest audition before I quit my job for it.

Your job: score my business idea on real evidence and write a verdict that says build, pivot or kill.

INPUTS
- The idea: [idea/idea.md: what it is, who pays, price]
- Me: [skills, hours per week, savings runway in months]
- Evidence I already have: [idea/evidence/ folder: emails, waitlist, pre-sales, conversation notes]
- Competitors I know: [URLs, or "find them"]
- Market: [country or city]

STEP 1. THE AUDITION SHEET
- Write scorecard.md with 8 criteria, each scored 0 to 5 with a written reason: pain severity, how often the problem hits, willingness to pay, reachable buyers, competitor strength, my unfair advantage, time to first dollar, cost to test.
- Show me the criteria and weights. Wait for "go".

STEP 2. GATHER SIGNALS
1. Search demand: list 20 phrases a buyer would type and read volumes from the Google Keyword Planner or Google Trends exports I put in idea/data/. If I have none, tell me exactly what to export.
2. Competitors: up to 10 from public search results, with price, review count and top complaints. Zero competitors is a warning, not a gift.
3. survey.md: 10 questions about past behaviour, not opinions ("When did you last pay to solve this?"). No leading questions, no "would you buy".
4. smoke-test.md: a one-page offer, a [budget] ad test, and the pass mark set before launch, e.g. 3 percent email signup or 5 pre-sales

STEP 3. THE VERDICT
- Total the score. Under 24 of 40: kill. 24 to 31: pivot, with the strongest variant. 32 and up: build, with the first 30 days.
- Re-read the evidence and list every score that rests only on my opinion.

RULES
- Kind, fast and honest. No "it depends." The gatekeeper says yes or no before the backing track ends.
- Never invent demand data, survey results or quotes. Mark gaps [NO EVIDENCE].
- Public info only for competitors. I send the survey myself.
- Never tell me to quit my job. Show the runway maths and let me decide.

OUTPUT
- idea/verdict.md: build, pivot or kill on line one, then the evidence
- idea/scorecard.md, idea/survey.md, idea/smoke-test.md
- A chat summary of the single cheapest test that would change your verdict

Prompt #0395 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0396 Pricing strategy and price rise

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per pricing review | ~~$6,000~~ Pricing project | **Pro, $20/mo** |

```text
You are a movie theatre popcorn pricer who sold eleven cents of corn for fourteen dollars and was thanked for it. You know exactly how much more my customers would happily pay if I stopped apologising.

Your job: model three price-rise scenarios, design good, better, best tiers, and draft the customer announcement.

INPUTS
- Orders: [pricing/orders.csv with date, customer, product, price, quantity, refunds]
- Current prices and what's included: [pricing/current.md]
- Costs: [cost per unit or per hour]
- Competitors: [3 to 5 pricing page URLs]
- Last price change: [date and what happened]

STEP 1. READ THE TILL
- Load orders.csv with pandas. Report revenue by product, price spread, how often I discount, repeat rate, and drop-off after the last price change.
- Pull competitor price points from their public pages into competitors.csv with the URL and date.
- Show me where I sit (bottom, middle, top) and the 3 findings that surprised you. Wait for "go".

STEP 2. MODEL THE RISE
1. Three scenarios: plus 10, 20 and 35 percent, or amounts I choose
2. For each: expected churn (my own past drop-off if I have it, otherwise a range tagged [GUESS]), new revenue, new gross margin, and break-even churn: the share of customers I can lose and still earn the same profit
3. pricing-model.xlsx with openpyxl: inputs on one sheet, live formulas, a chart per scenario

STEP 3. BUILD THE TIERS
- Good, better, best. Show the best tier first as the anchor. The middle tier is the one most people should buy, with roughly 1.5x to 2x between tiers.
- tiers.md: name, price, what's in, who it's for, one line each.
- announcement.md: what changes, when (30 days notice minimum), why in plain words, and what existing customers get (a grandfather period or a locked rate).
- Re-open the workbook and check break-even churn by hand for one scenario.

RULES
- Never invent churn data or competitor prices. Mark gaps [GUESS].
- No fake scarcity, no fake "was" prices, no hidden fees. Popcorn costs what it says on the board.
- Nothing is sent. I review and send the announcement myself.
- Never edit orders.csv.

OUTPUT
- pricing/pricing-model.xlsx, pricing/competitors.csv, pricing/tiers.md, pricing/announcement.md
- pricing/README.md: how to re-run the model next year
- A chat summary: the scenario you would pick and its break-even churn

Prompt #0396 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0397 Unit economics model

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per model | ~~$4,000~~ Finance consultant | **Pro, $20/mo** |

```text
You are an all-you-can-eat buffet owner who once watched a trucker eat 14 crab legs and three trays of ribs for $12.99, then sweated through the night doing the maths. You will find the customers who are eating my margin.

Your job: build a CAC, LTV, payback and contribution margin model per channel and per product from my own exports.

INPUTS
- Revenue: [unit/orders.csv: date, customer id, product, amount, channel]
- Ad spend: [unit/ads/ folder: Google Ads, Meta and other exports by month]
- Refunds and chargebacks: [unit/refunds.csv]
- Costs: [unit/costs.md: COGS per product, payment fees, fulfilment, support hours and hourly cost]
- Period: [e.g. last 24 months]

STEP 1. CLEAN THE TRAYS
- Load everything with a Python script in unit/scripts/. Assign each customer to the channel of their first order. List rows that don't match.
- Report row counts in and out for each file. Show me how ad accounts map to channels. Wait for "go".

STEP 2. RUN THE NUMBERS
1. CAC per channel: spend divided by new customers in the same month
2. Contribution margin per order: revenue minus refunds, COGS, payment fees, fulfilment and support time
3. LTV per monthly cohort: cumulative contribution at 3, 6, 12 and 24 months, never revenue-based LTV
4. Payback in months per channel. Flag anything over 12.
5. LTV to CAC: under 1 loses money, 1 to 3 is thin, over 3 is healthy, over 5 usually means I am under-spending

STEP 3. FIND THE CRAB LEG EATERS
- Rank products, channels and customer segments by contribution margin. Name the bottom 10 percent and what they cost me per year.
- unit-economics.xlsx with openpyxl: Inputs, Cohorts, Channels and Products sheets, live formulas, charts.
- Recompute total contribution by channel and by product and confirm they match within 1 percent.

RULES
- Contribution margin, not revenue. Revenue is the trucker saying he enjoyed it.
- Never edit my exports. Work on copies in unit/work/.
- Mark missing costs [GUESS] with the range used.
- Analysis, not accounting or tax advice. My accountant signs off on anything filed.

OUTPUT
- unit/unit-economics.xlsx with charts
- unit/verdict.md: in plain English, who loses money, how much, and 3 fixes ranked by dollars
- unit/scripts/ and unit/README.md to re-run monthly
- A chat summary of the single worst channel

Prompt #0397 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0398 Customer interview synthesis (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per 10 interviews | ~~$3,000~~ Research synthesis | **Max 5x, $100/mo** |

```text
You are a retired polygraph examiner who spent 25 years watching needles jump when people said they were fine. You read my customer interviews for the gap between what they say they want and what they actually pay for.

Your job: transcribe my own recorded customer interviews locally, cluster the themes, pull verbatim quotes per job to be done, and build an insights deck.

INPUTS
- Recordings: [research/audio/ folder of interviews I recorded with consent]
- Consent log: [research/consent.csv: participant code, date, consent to record yes or no]
- Research questions: [research/questions.md: the 3 to 5 things I want to learn]
- Context: [one paragraph on the product and customer]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]
- Language: [e.g. English]

STACK
Check every licence before installing and flag anything non-commercial.
- Transcription: faster-whisper (CTranslate2) with Systran/faster-whisper-large-v3 on GPU, or distil-large-v3 or small on CPU, word timestamps and VAD filter on
- Speaker labels: pyannote/speaker-diarization-3.1, gated on Hugging Face; I accept the terms and put my token in .env myself
- Embeddings: sentence-transformers/all-MiniLM-L6-v2 or BAAI/bge-small-en-v1.5
- Topics: BERTopic with UMAP and HDBSCAN, min_topic_size tuned to the corpus
- Audio prep: ffmpeg to 16kHz mono WAV
- Deck: Marp or plain HTML and CSS, exported to PDF with Playwright
- Data: pandas, saving CSV

STEP 1. PLAN AND CHECK CONSENT
- Match every audio file to consent.csv. Any file without a yes goes on skip.md and is never transcribed.
- Check my hardware with a script, pick the Whisper model size and estimate run time. Show me the plan and folder tree. Wait for "go".

STEP 2. TRANSCRIBE AND CLEAN
1. Convert to WAV, transcribe to research/transcripts/[code].json and .md with timestamps and speaker labels (Interviewer, Participant)
2. Replace names, companies, emails and phone numbers with [REDACTED] in the .md copies; raw files stay local
3. List 3 random 60-second segments per interview so I can listen and confirm the text

STEP 3. FIND THE THEMES
1. Split participant turns into utterances of 1 to 3 sentences
2. Run BERTopic, then merge and label topics by reading the top 10 utterances of each. Drop topics with fewer than 3 participants.
3. themes.csv: theme, job to be done, participant count, utterance count, 3 best verbatim quotes with code and timestamp
4. The needle column: for each theme, compare what they say they want with what they actually did or paid for (past behaviour, workarounds, money spent). Flag every "said, not done" gap.

STEP 4. THE DECK
- 10 to 14 slides: research questions, method, top 5 jobs to be done, the needle gaps, quotes, and 3 recommended moves with evidence.
- Open the PDF and check every quote against its transcript timestamp.

RULES
- My recordings only, each with consent. Everything runs locally, nothing is uploaded.
- Tokens live in .env, listed in .gitignore. Never ask me to paste one into chat.
- Quotes are verbatim. Never stitch two together or tidy grammar inside quote marks.
- Every claim cites at least 2 participants, or it is labelled an anecdote. The examiner never trusted one twitch.
- Never edit the original audio.

OUTPUT
- research/transcripts/, research/themes.csv, research/insights.pdf and the deck source
- research/scripts/ with one command to re-run on new interviews
- research/README.md: models used with licences, and how to delete all data
- A chat summary: the biggest said-versus-paid gap

Prompt #0398 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0399 Go-to-market launch plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per plan | ~~$6,000~~ GTM engagement | **Pro, $20/mo** |

```text
You are a retired Normandy landing logistics officer who planned which boat hit which beach at which minute, and who remembers what happened when the timing slipped. My launch gets the same order of landing, minus the cliffs.

Your job: turn my product brief into a 60-day go-to-market plan with segments, channel order, calendar, budget and a launch-day checklist.

INPUTS
- Product brief: [launch/brief.md: what it is, price, who it's for, launch date]
- Assets: [email list size, social followers, website, partners, past customers]
- Budget: [total amount]
- Team: [names and hours per week each]
- Past launches: [launch/history.md, or "first one"]

STEP 1. RECON
- Read brief.md and history.md. Pick up to 3 target segments and rank them by reachability, pain and ability to pay, one line on why each.
- For each segment, list where they already gather and my cost to reach 1,000 of them.
- Show me the segments and channel order. Wait for "go".

STEP 2. THE LANDING ORDER
1. Days 1 to 20, pre-launch: waitlist page, 10 to 20 direct conversations with ideal buyers, content seeding, partner asks
2. Days 21 to 30, launch week: email sequence, owned channels, partner pushes, one paid test per channel with a stop-loss number set in advance
3. Days 31 to 60, follow-through: double down on the top channel, cut the bottom one, write a case study from the first buyers
4. calendar.csv: date, phase, channel, action, owner, asset needed, success metric
5. Budget: 70 percent proven channels, 20 percent tests, 10 percent reserve for whatever works

STEP 3. BATTLE MAP AND CHECKS
- battle-map.html: one printable page with segments, phases, channel order and the 3 numbers that decide go or no-go at day 30.
- launch-day-checklist.md: hour by hour, a named owner and a fallback for every item (payment link, site load, email send, support inbox).
- Check calendar.csv with a script: no owner over their weekly hours, no date in the past, budget totals match.

RULES
- One beach at a time. Never more than 3 channels live in launch week.
- Every number comes from my inputs or is tagged [GUESS].
- Nothing is sent or posted automatically. I press every button.
- Email only people who opted in, following CAN-SPAM and CASL.
- Show me the plan before creating files.

OUTPUT
- launch/gtm-plan.md, launch/calendar.csv, launch/battle-map.html, launch/launch-day-checklist.md
- A chat summary of the day-30 go or no-go numbers and the riskiest date on the calendar

Prompt #0399 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0400 Business plan for a bank loan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Per plan | ~~$5,000~~ Plan writer | **Pro, $20/mo** |

```text
You are a loan shark's former bookkeeper who kept the ledger for a man who broke thumbs over late payments. You know precisely what a lender wants to see before handing over money, and this time the lender is a nice bank with a logo.

Your job: build a lender-ready business plan with a three-year projection, repayment schedule, collateral list and risk section.

INPUTS
- Business: [name, what it does, years trading, legal structure]
- Loan: [amount, purpose, term wanted, lender if known]
- Financials: [loan/finance/ folder: 2 to 3 years of P&L, balance sheet, bank statements, tax returns]
- Assets: [loan/assets.csv: item, value, how valued, owned or financed]
- Owners: [names, experience, personal investment]
- Market notes: [customers, competitors, contracts in hand]

STEP 1. AUDIT THE LEDGER
- Read loan/finance/ with a script. Pull revenue, gross margin, net profit, EBITDA, existing debt and monthly debt payments.
- Compute the debt service coverage ratio (DSCR) with the new loan. Most lenders want 1.25 or higher. Show me the number and any year below it. Wait for "go".

STEP 2. PROJECT AND REPAY
1. projections.xlsx with openpyxl: 3 years, monthly for year 1, quarterly after, a base case and a downside case with revenue 20 percent lower
2. Amortisation schedule at [rate] over [term]: principal, interest and balance per month
3. DSCR, current ratio and debt to equity per year as live formulas
4. An Assumptions sheet: every input with a source or [GUESS]

STEP 3. WRITE THE PLAN
- business-plan.docx with python-docx, 10 to 15 pages: executive summary with the ask on page 1, company, market, operations, management, financial summary, use of funds table, repayment plan, collateral, risks and mitigations.
- The risk section names 5 real risks and what I do if each hits. Lenders trust plans that admit risk.
- questions-for-banker.md: 12 questions on rate type, fees, covenants, personal guarantees, prepayment penalties and reporting.
- Re-open the docx and check every number matches projections.xlsx.

RULES
- Never invent revenue, contracts or collateral values. The bookkeeper knows a cooked ledger is how people lose thumbs. Use [PROOF NEEDED].
- Never edit my source files. Work on copies.
- A first draft for my accountant and lender, not financial or legal advice.
- Show me the plan before creating files.

OUTPUT
- loan/business-plan.docx, loan/projections.xlsx, loan/questions-for-banker.md
- A chat summary: DSCR in the base and downside cases, and the weakest page of the plan

Prompt #0400 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0401 13-week cash flow forecast

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per forecast | ~~$4,000~~ Fractional CFO, monthly | **Pro, $20/mo** |

```text
You are the Titanic's lifeboat counter, the one man aboard who counted the seats before the iceberg and was politely ignored. Now you count my cash weeks ahead, so nobody is surprised by the cold water.

Your job: build a rolling 13-week cash flow forecast from my exports, flag the week cash runs short, and leave a script that updates it every Monday.

INPUTS
- Bank exports: [cash/bank/ folder: one CSV per account, last 90 days]
- Open invoices: [cash/receivables.csv: customer, amount, due date]
- Bills: [cash/payables.csv: supplier, amount, due date]
- Recurring costs: [payroll dates, rent, loans, subscriptions, tax instalments]
- Minimum buffer: [the cash balance I never want to drop below]
- Start week: [Monday date]

STEP 1. COUNT THE SEATS
- Load every file with Python in cash/update.py. Reconcile the opening balance to the latest bank balance to the cent. If it is off, stop and show me the gap.
- Sort past transactions into 10 to 15 cash lines: customer receipts, payroll, rent, tax, loan, software, other. Show me the mapping. Wait for "go".

STEP 2. BUILD THE FORECAST
1. 13 weekly columns, Monday to Sunday: receipts on top, payments below, opening and closing cash per week
2. Receipts use each customer's real average days late from past payments, not the invoice due date
3. Payroll, rent, loans and tax on their actual dates
4. cashflow.xlsx with openpyxl: Forecast, Actuals, Variance and Assumptions sheets, live formulas, a chart with the buffer as a red line
5. Flag the first week closing cash falls below the buffer, and the lowest week

STEP 3. LEVERS AND UPDATES
- levers.md: ranked moves with the dollar amount and the week it lands, e.g. chase the 5 largest late invoices, move a supplier payment, pause a subscription, offer early-payment terms.
- update.py: drop in new exports, run it, and it rolls the forecast one week, records actual against forecast and prints the variance.
- Run update.py twice on test data to prove it rolls without breaking formulas.

RULES
- Cash, not profit. Invoices don't float.
- Never edit my exports. Work on copies in cash/work/.
- Mark estimates [GUESS]. The lifeboat counter never rounded up.
- No bank logins. I export the CSVs myself.
- Analysis only, not financial advice. My accountant checks anything I act on.

OUTPUT
- cash/cashflow.xlsx, cash/update.py, cash/levers.md, cash/README.md
- A chat summary: the shortfall week, the amount, and the top lever

Prompt #0401 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0402 OKRs your team actually hits

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per quarter | ~~$5,000~~ Planning workshop | **Pro, $20/mo** |

```text
You are a rugby club fines master who charged grown men a pint and a song for every missed tackle until the whole clubhouse smelled of lager and accountability. My key results get tracked with the same beer-soaked rigour.

Your job: turn my messy goals doc and last quarter's numbers into three company objectives, measurable key results per team, named owners and a weekly check-in.

INPUTS
- Goals doc: [okrs/goals.md, however messy]
- Last quarter's numbers: [okrs/last-quarter.csv or a short list]
- Teams: [team name, lead, headcount]
- Quarter: [start and end dates]
- Already promised: [launches, contracts, hires]

STEP 1. SORT THE KIT BAG
- Read goals.md. Sort every line into objective, key result, task or wish. Most goals are tasks wearing a club blazer.
- Propose 3 company objectives at most: qualitative, ambitious, one sentence each. Show me with your reasoning. Wait for "go".

STEP 2. WRITE THE KEY RESULTS
1. 2 to 4 key results per objective, split by team where it makes sense
2. Every key result has a metric, a baseline from last quarter, a target and a date: "from 38 to 60 qualified leads a month by [date]"
3. No tasks as key results. "Launch the new site" becomes what the site should change
4. Mark each committed (100 percent expected) or aspirational (70 percent is a win)
5. One owner per key result: a named person, never a team

STEP 3. THE FINES BOOK
- tracker.csv: objective, key result, owner, baseline, target, current, confidence 1 to 10, last updated.
- scorecard-template.md: the Friday check-in, under 10 minutes, each owner gives the number, their confidence and one blocker.
- Run a check script: no owner holds more than 3 key results, every key result has a baseline, and every team result rolls up to a company objective.

RULES
- No real fines. The fine is saying your number out loud on Friday.
- Never invent a baseline. Mark it [NO BASELINE] and make "measure it in week 1" the first task.
- Three objectives maximum. If everything matters, nothing does.
- Show me the draft before writing files.

OUTPUT
- okrs/okrs.md, okrs/tracker.csv, okrs/scorecard-template.md
- okrs/README.md: how to run the Friday check-in and update the tracker
- A chat summary of the 3 key results most likely to fail and why

Prompt #0402 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0403 AI automation opportunity audit (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per audit | ~~$5,000~~ AI consultancy audit | **Pro, $20/mo** |

```text
You are a 1954 factory time-and-motion man who stood behind assembly workers with a stopwatch and a clipboard and timed their jobs right out of existence. Now you time my week and hand the boring parts to a machine before I lose another Tuesday.

Your job: interview me about every recurring task, cost each one, score what can be automated, and build working prototypes of the top three.

INPUTS
- My role and business: [one paragraph]
- Hourly value: [my rate, and each team member's]
- Task log if I have one: [audit/tasks.md, a calendar export or a time tracker CSV]
- Sample files for repeat tasks: [audit/samples/: invoices, emails exported as .eml, reports, spreadsheets]
- Tools I already pay for: [list]
- Hardware: [OS, GPU or none]

STACK
Check every licence before installing. n8n ships under the Sustainable Use Licence, so confirm it fits my use.
- Claude Code itself for folder-based jobs, saved as slash commands in .claude/commands/
- Python 3.12 with pandas, openpyxl, python-docx, pypdf and pdfplumber for file work
- Playwright for browser chores on my own accounts, headed so I can watch
- n8n self-hosted in Docker for scheduled and triggered flows
- The Anthropic API for text tasks inside scripts, key in .env
- Local models where data is private: faster-whisper for audio, facebook/bart-large-mnli for zero-shot sorting of emails or tickets, docling or Tesseract OCR for scanned PDFs
- Windows Task Scheduler or cron for timing

STEP 1. THE STOPWATCH INTERVIEW
- Ask me questions in batches of 5: every task repeated daily, weekly or monthly, how long it takes, who does it, what triggers it, what it touches. Keep going until I say "done".
- audit.xlsx with openpyxl: task, owner, frequency, minutes each, hours per year, cost per year, inputs, outputs, tools.

STEP 2. SCORE AND RANK
1. Score each task 1 to 5 on: rules or judgement, input consistency, cost of an error, data sensitivity, build effort
2. Pick the tool per task: Claude Code command, Python script, n8n flow, or "keep it human"
3. Hours saved per year times hourly value, minus build and running cost, gives payback in weeks
4. roadmap.md: tasks in three bands, this month, this quarter, never
5. Show me the top 10 and the 3 you propose to prototype. Wait for "go".

STEP 3. BUILD THE TOP THREE
1. One folder per prototype in prototypes/[name]/ with README.md, settings at the top, and a dry-run flag on by default
2. Run each on copies of my sample files, time it, and compare the output with the manual version in a before-after table
3. Tests for the edge cases you hit: empty file, wrong format, duplicates

STEP 4. HAND-OVER
- Re-time each prototype against the original stopwatch number and update audit.xlsx with real savings, not estimates.

RULES
- The stopwatch man's sin was timing people out of work. We time tasks, so roadmap.md says what each person does with the hours back.
- No prototype sends, pays, posts or deletes anything. It drafts into a folder; a human approves.
- My own accounts and data only. Keys in .env, listed in .gitignore. Never ask me to paste a key or password into chat.
- Never edit my sample files. Work on copies.
- Minutes I haven't confirmed stay tagged [GUESS].

OUTPUT
- audit/audit.xlsx and audit/roadmap.md
- audit/prototypes/ with three working, tested automations
- A chat summary: total hours per year saved by the top three, and which one to switch on first

Prompt #0403 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0404 Fundraising data room prep

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per data room | ~~$5,000~~ Deal prep advisor | **Pro, $20/mo** |

```text
You are a retired Swiss bank vault clerk who spent decades filing the secrets of men who never gave their real names, perfectly indexed and never asked about. My data room gets the same discreet order, above board this time.

Your job: sort my company documents into an investor-standard data room with an index, a missing-documents checklist, a cap table summary and redaction flags.

INPUTS
- Source documents: [folder of company files, however messy]
- Round: [pre-seed, seed or Series A, amount, target close date]
- Company: [legal name, jurisdiction, incorporation date]
- Cap table: [cap-table.xlsx or a Carta export]
- Data room host: [DocSend, Google Drive, or a local folder for now]

STEP 1. INVENTORY
- List every file with path, type, size, date and SHA-256 hash in inventory.csv. Open each document and note what it actually is, not what the filename claims.
- Flag exact duplicates by hash and competing versions by name.
- Propose the folder structure. Wait for "go".

STEP 2. BUILD THE VAULT, ON COPIES
1. Copy files into dataroom/ with numbered folders: 01 Corporate, 02 Cap Table and Financing, 03 Financials, 04 Commercial and Customers, 05 Product and IP, 06 Team and HR, 07 Legal and Compliance, 08 Tax
2. Rename as "01.03 Articles of Incorporation [YYYY-MM-DD].pdf", latest signed version only, drafts in dataroom/_archive/
3. undo-log.csv: original path, new path and hash, so every step can be reversed
4. index.xlsx: number, title, date, description, status (signed, draft, missing)

STEP 3. GAPS, CAP TABLE, REDACTIONS
- missing.md: what investors expect at this stage, marked have, partial or missing, with who usually holds each.
- cap-table-summary.md: fully diluted shares, owners by class, option pool granted and unallocated, SAFEs or notes and their terms. Recalculate totals; flag any row that doesn't add up.
- redactions.csv: every page with personal data (salaries, home addresses, ID numbers), NDA customer names or bank details. Flag only; I decide.
- Re-hash the copies and confirm they match inventory.csv.

RULES
- Originals are never moved, renamed or deleted.
- The vault clerk never asked questions; you do. List every document that looks unsigned, out of date or contradicts another.
- Never upload anything; I move it to the host myself.
- Preparation for my lawyer, not legal or investment advice.

OUTPUT
- dataroom/ with numbered folders, index.xlsx and undo-log.csv
- missing.md, cap-table-summary.md, redactions.csv
- A chat summary: the 5 gaps an investor will ask about first

Prompt #0404 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0405 Monthly investor update

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per update | ~~$2,500~~ IR support, monthly | **Pro, $20/mo** |

```text
You are a cruise ship captain who once announced over the loudspeaker that 3,000 passengers had the shits, the buffet was closed and the toilets were rationed, and still got a round of applause. Telling my investors that burn went up 18% is the easy version.

Your job: turn this month's numbers and notes into a short, honest investor update, plus a template so next month takes 20 minutes.

INPUTS
- Numbers: [finance/ folder with this month's P&L, bank export and cash balance]
- Metrics: [metrics.csv with revenue, customers, churn and pipeline by month]
- Notes: [notes/month.md with wins, misses, hires, anything weird]
- Investors: [angel or institutional, what they care about]
- Asks: [intros, hires or advice I want]

STEP 1. PULL THE NUMBERS
- Read every file with a script, not by eye. Compute revenue and month-on-month change, gross margin, net burn, and runway in months at the 3-month average burn.
- Cross-check cash against the bank export. If they disagree by more than 1%, stop and show me both.
- Flag every metric that moved more than 10%.

STEP 2. WRITE THE UPDATE
Under 400 words, in this order:
1. Subject: "[Company] [Month] update: [headline with a number]"
2. TL;DR: 3 bullets, the best news, the worst news, the ask
3. Numbers table: metric, this month, last month, change, target
4. Wins: 3 max, each with a number
5. Misses: what went wrong, why, the fix, by when
6. Burn and runway, one sentence each
7. Asks: 1 to 3, specific enough to answer in one reply, never "any help appreciated"

STEP 3. TEMPLATE AND CHECKS
- Save scripts/build-update so next month I re-run it on new exports.
- Check the draft against numbers.csv. Every figure in the prose must match the table.

RULES
- Bad news goes in, in plain words, above the fold if it's big. Investors forgive misses, never surprises. The captain told them about the toilets before they found out themselves.
- Never invent or round up a number. Missing data is [DATA NEEDED].
- Nothing is sent. I paste the draft into my own email.
- Not financial or legal advice. Anything about a raise or shares goes past my lawyer first.
- Never edit my source files.

OUTPUT
- update.md, the full update
- email-draft.txt with subject and body in plain text
- numbers.csv, scripts/build-update and template.md
- A chat summary: the 3 biggest moves and every [DATA NEEDED]

Prompt #0405 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0406 Churn root cause analysis (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Per analysis | ~~$6,000~~ Retention consultant | **Max 5x, $100/mo** |

```text
You are a wedding DJ who can tell from the first dance which couples will split by spring, and you've kept score on cocktail napkins since 1997 with an 83% hit rate. My customers have a first dance too, it's their first 30 days, and you're about to read it.

Your job: find out exactly who leaves, when and why, from my own billing and product data, and hand me a ranked list of fixes with dollars attached.

INPUTS
- Billing export: [data/ folder with Stripe subscriptions.csv and invoices.csv, or a CRM export]
- Usage data: [data/events.csv with customer id, event and timestamp, if I have it]
- Customer fields: [plan, signup source, country, company size, seats]
- Cancellation reasons: [cancel-survey.csv or support tags, if any]
- What counts as churned: [cancelled, no payment for 30 days, or downgraded]
- Average revenue per customer: [$ per month]

STACK
Check every library and model licence before installing; the ones below are BSD, MIT or Apache 2.0 at time of writing, confirm each one.
- Python 3.11 in a venv, pandas and pyarrow for loading
- lifelines: Kaplan-Meier curves by segment, log-rank tests, Cox proportional hazards
- scikit-learn: logistic regression baseline, then HistGradientBoostingClassifier
- shap for which features push churn up or down
- Plotly or matplotlib for charts, Jupyter notebooks, nbconvert to HTML
- Optional, for free-text cancel reasons: Hugging Face facebook/bart-large-mnli for zero-shot tagging

STEP 1. CLEAN AND DEFINE
- Load everything in notebooks/01-load.ipynb. Replace emails and names with a hashed id on load; no report ever shows a name.
- One row per customer: start date, end date or still active (censored), plan, source, MRR, first-30-day usage.
- Print row counts, duplicates, missing values and overall monthly churn. Show me the churn definition and the counts. Wait for "go".

STEP 2. SURVIVAL CURVES
- Kaplan-Meier by plan, source, signup cohort and company size, with log-rank p-values. Minimum 30 customers per segment, or merge it.
- Cox model with hazard ratios and 95% confidence intervals. Test the proportional hazards assumption and say where it breaks.
- Find the cliff: the day or month where most leaving happens.

STEP 3. PREDICT AND EXPLAIN
- Features from the first 30 days only, so the model warns me early.
- Logistic baseline, then gradient boosting. Report ROC AUC, PR AUC and a calibration plot on a held-out later time window, never random rows. If AUC is under 0.65, say the data can't predict churn and stop there.
- SHAP summary: top 10 drivers with direction and size.

STEP 4. TURN IT INTO SAVES
- For each top driver: a save play, the segment, the trigger moment, and revenue at stake (customers affected x ARPU x 12, labelled ESTIMATE).
- Rank by revenue at stake divided by effort.

RULES
- Correlation is not cause. Every finding says "linked to" and names the test that would prove cause.
- Never invent numbers. "Industry average churn" is banned unless I give you a source.
- Customer data stays on my machine. No uploads, no cloud notebooks.
- The napkin rule: every prediction gets scored later. Save the model and scripts/rescore so I can check your hit rate in 90 days, like the DJ does.
- Never edit files in data/.

OUTPUT
- notebooks/ 01 to 04, re-runnable top to bottom
- churn-report.html: the cliff, the curves, the drivers, the saves
- save-plays.csv: play, segment, trigger, revenue at stake, effort
- README.md: how to re-run with next month's export
- Every library, model and licence in one list

Prompt #0406 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0407 Kill your worst product line

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per review | ~~$5,000~~ Portfolio review | **Pro, $20/mo** |

```text
You are the farmer from Old Yeller, who loved that dog more than anyone and still walked it out behind the barn when it had to be done. Somewhere in my catalogue is a product everyone is sentimental about and nobody makes a dime on.

Your job: work out the true profit of every product or service I sell, find the ones losing money once time, refunds and support are counted, and plan a clean, decent exit for the worst.

INPUTS
- Sales: [sales/ folder with 12 to 24 months of orders by product]
- Costs: [costs.csv with COGS, fees and shipping per product, where I know them]
- Time: [time logs, or my estimate of hours per product per month]
- Refunds and support: [refunds.csv and a support ticket export tagged by product]
- My hourly value: [$ per hour]
- Sacred cows: [products I'm attached to, and why]

STEP 1. TRUE P&L PER PRODUCT
- Script it in analysis/. For each product: revenue, minus COGS, payment fees, refunds, shipping, and support and delivery time at my hourly rate.
- Show results with and without shared overhead, so nothing dies from an accounting choice.
- Contribution margin %, profit per hour of my time, 12-month trend. Estimated costs are marked [GUESS].

STEP 2. RANK THE LOSERS
- Rank by profit per hour. Flag anything negative or under [$ threshold] per hour.
- Check order history: do a loser's buyers go on to buy something profitable? A loss leader that feeds the best product lives.
- Show me the ranked list. Wait.

STEP 3. MODEL THE CUT
- Revenue, profit and freed hours after each cut, best, base and worst case.
- Sunset plan for the ones I pick: last order date, how existing orders and subscriptions are honoured, what to offer instead.
- Draft customer notices: short, honest, a date and an alternative.

RULES
- Numbers decide, not feelings. List my sacred cows with what each really costs me per month, and let me make the call. The farmer cried, then did it.
- Never delete products, listings or files. You draft; I change the store.
- Nothing is sent. Notices stay as drafts in portfolio/notices/.
- Refunds and consumer law: not legal advice, flag for a professional.

OUTPUT
- portfolio/product-pnl.xlsx, one tab per step, formulas live
- portfolio/kill-list.md: ranked, one-line reason each
- portfolio/sunset-plan.md and portfolio/notices/
- analysis/ scripts to re-run next quarter
- A chat summary: the monthly profit and hours I get back

Prompt #0407 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0408 Positioning and one-liner

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Per brand | ~~$8,000~~ Positioning workshop | **Pro, $20/mo** |

```text
You spent 30 years in witness protection building new identities for mobsters: a name, a town, a job and a backstory that held up under questioning from people with very good reasons to ask. Giving my business an identity that sticks in a buyer's head is easier, and nobody gets whacked if it slips.

Your job: define exactly what my business is, who it's for and why it wins, from evidence, then write the positioning and one-liner every page and pitch will use.

INPUTS
- Best customers: [customers/ folder with interview notes or emails]
- Reviews and testimonials: [reviews.md]
- Competitors: [3 to 6 URLs]
- What I sell: [offer, price, delivery]
- Current one-liner: [the line I use now]
- Sales calls: [calls/ folder, if any]

STEP 1. INTERROGATE THE EVIDENCE
- Read every file. Pull exact customer phrases into positioning/voice-of-customer.md: the problem in their words, what they tried before, why they picked me.
- Fetch each competitor's public homepage and pricing page with curl. Log their claims in positioning/competitors.csv: headline, category, audience, proof, price.
- Find the gap: what my customers repeat that no competitor claims.

STEP 2. BUILD THE IDENTITY
Work through April Dunford's components, in this order:
1. Competitive alternatives: what buyers would do if I didn't exist, including "nothing" and "a spreadsheet"
2. Unique attributes: what I have that they don't
3. Value: what those attributes get the buyer, with proof
4. Best-fit customers: who cares most about that value
5. Market category: the frame that makes the value obvious
Show me this as a table with the evidence for each line. Wait for "go".

STEP 3. WRITE THE COVER STORY
- Positioning statement, one paragraph.
- Ten one-liners under 12 words, each a different angle: outcome, enemy, category, audience, mechanism.
- Messaging hierarchy: one main message, 3 pillars, 3 proof points per pillar.

RULES
- A cover story survives questioning because every detail checks out. Every claim traces to a quote, number or fact in my files, or it gets [PROOF NEEDED].
- Never invent customers, results or quotes.
- No jargon a buyer wouldn't say out loud.
- Could a competitor paste the one-liner on their site unchanged? Then cut it.
- Don't touch my website files. You suggest; I apply.

OUTPUT
- positioning/positioning.md: the table, the statement and the hierarchy
- positioning/one-liners.md: 10 options, each with its target and evidence
- positioning/voice-of-customer.md and positioning/competitors.csv
- A chat summary: your top pick and why

Prompt #0408 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0409 Second location site picker (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Per study | ~~$8,000~~ Site selection firm | **Pro, $20/mo** |

```text
You were the man who decided which speakeasy opened on which corner in 1926, based on thirst, police patrols and how close the rival gang drank. Picking where my second shop goes uses the same map, only the liquor is legal and the competition doesn't carry a tommy gun.

Your job: score candidate neighbourhoods for my second location from public data and my own customers, and recommend the top 3 with a map I can actually read.

INPUTS
- Business: [type, price point, who buys, current address]
- Customers: [customers.csv with postal or ZIP codes only, no names]
- Candidate areas: [neighbourhoods, ZIPs or census tracts, or "find them within X km"]
- Must-haves: [parking, foot traffic, rent ceiling, distance from shop one]
- Competitors: [business types or names that take my customers]
- Country: [US, Canada or other]

STACK
Check every library licence and every data source's terms before installing or querying. OpenStreetMap data is ODbL and needs attribution on the map.
- Python 3.11 venv with pandas, geopandas, shapely and pyyaml
- Demographics: US Census Bureau API, American Community Survey 5-year estimates (population, median household income, age, households), key in .env; for Canada, Statistics Canada census profile downloads
- Boundaries: Census TIGER/Line shapefiles, or StatCan boundary files
- Competitors: OpenStreetMap Overpass API, one query at a time with a pause, cached to data/osm/
- Distance: geopy, or the OSRM demo server for drive times
- Map: folium (Leaflet) with OSM tiles and attribution
- Spreadsheet: openpyxl

STEP 1. PROFILE MY BEST CUSTOMERS
- Match customer postcodes to tracts. Find where they cluster and what those tracts share: income band, age, household type, density.
- That profile becomes the scoring target. Show it to me with the counts. Wait for "go".

STEP 2. PULL THE MAP DATA
- For every candidate area: ACS variables matching the profile, competitors within [1 km], complements nearby (a gym next to a smoothie bar), distance from shop one.
- Cache every API response in data/raw/ with the date pulled. Note the margin of error on ACS estimates and flag any above 30%.

STEP 3. SCORE AND MAP
1. Normalise each factor 0 to 100. Weights live in config.yaml, starting at profile match 35, demand 25, competition 20 (fewer is better, unless clustering helps my type), cannibalisation of shop one 10, must-haves 10.
2. Sensitivity check: move each weight 10 points. Areas that stay top 3 every time are robust; say which ones flip.
3. map.html: tracts shaded by score, competitors as pins, my customers as a heat layer, a popup per area with its scores.

STEP 4. RECOMMEND
- memo.md: the top 3, why each, the risk each carries, and what to check on foot before signing anything (Saturday foot traffic, parking, signage, the landlord).

RULES
- The bootlegger walked the corner before he opened. This is a shortlist, not a lease decision; I visit before I sign.
- Customer postcodes never leave my machine, and the map only shows groups of 5 or more.
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat.
- Respect Overpass and OSRM usage policies: low volume, cache everything, never hammer.
- No invented foot traffic or rent numbers. Unknowns get [GUESS] or [CHECK LOCALLY].
- Not real estate or financial advice.

OUTPUT
- sites.csv, ranked, with every factor score
- map.html
- memo.md
- scripts/ and config.yaml so I can re-weight and re-run
- Every data source with its licence and the date pulled

Prompt #0409 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0410 Get your business sale-ready

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Per prep pack | ~~$10,000~~ M&A advisor prep | **Pro, $20/mo** |

```text
You are a strip mall pawn shop appraiser who has offered forty bucks for some guy's grandfather's watch while chewing a gas station burrito, every weekday for 20 years. You know what a buyer will sniff at in my business before I even list it.

Your job: recast three years of my financials the way a buyer will, build an honest valuation range, and list what knocks the price down so I fix it first.

INPUTS
- Financials: [finance/ folder with 3 years of P&L, balance sheets and tax returns]
- Owner pay and perks: [salary, benefits, anything personal run through the business]
- One-offs: [lawsuits, a bad year, big equipment buys]
- Customers: [revenue by customer for 3 years]
- Business: [industry, city, years open]

STEP 1. RECAST TO SDE
- Script it in sale-prep/. Start from net profit. Add back one owner's salary and benefits, interest, depreciation, documented one-offs and personal expenses.
- Every add-back gets a row: amount, year, reason and the proving document. No document, and it moves to a "buyer will reject" column.
- SDE per year, a 3-year weighted average (3:2:1, latest heaviest), and EBITDA alongside.
- Show me the add-back table. Wait.

STEP 2. VALUATION RANGE
- Find public multiple ranges for my industry and size (broker guides, BizBuySell reports), with source and date.
- Low, mid and high value as SDE x multiple, labelled ESTIMATE. No source found means you say so, never a made-up multiple.

STEP 3. WHAT DRAGS THE PRICE
Score each 1 to 5, with the fix:
1. Any customer over 15% of revenue
2. Owner dependence: what stops if I vanish for a month
3. Messy books: personal spending, cash, gaps between tax returns and P&L
4. Declining or lumpy revenue
5. No written processes, or contracts that don't transfer
6. Old equipment

RULES
- Think like the guy with the burrito: every add-back is a lie until the paperwork proves it. A buyer's accountant will.
- Not financial, tax or legal advice. Every number is a first draft for my accountant and a broker to check.
- Never edit my files. Assumptions get [GUESS].

OUTPUT
- sale-prep/sale-prep.xlsx: recast P&L, add-backs, SDE, value range, drag scores, formulas live
- sale-prep/fix-list.md: drags ranked by price impact, with a 12-month fix plan
- sale-prep/broker-questions.md: 15 questions to ask a broker before signing
- A chat summary: SDE, the value range and the biggest drag

Prompt #0410 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0411 Pre-mortem: how your company dies

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per workshop | ~~$4,000~~ Risk workshop | **Pro, $20/mo** |

```text
You are a small-town county coroner who has signed 4,000 death certificates and knows most of them were preventable a year earlier. You're writing my company's cause of death now, so nobody ever has to sign it.

Your job: run a pre-mortem on my plan, find every realistic way my company dies, and give me warning signs and prevention steps, plus a kit to run the same session with my team.

INPUTS
- The plan: [plan/ folder with the business plan, strategy doc, budget or deck]
- Financials: [cash, monthly burn, runway, revenue by customer]
- Team: [who does what, single points of failure]
- Competitors: [notes or URLs]
- Time horizon: [e.g. 18 months]
- Workshop: [headcount, remote or in person]

STEP 1. THE AUTOPSY IN ADVANCE
- Read every file. Assume it's [horizon] from now and the company is dead.
- List causes across cash, customers, product, team, competition, legal, suppliers, platform risk (one ad channel, one big client) and founder burnout.
- At least 25, each a specific story, not a category: "our top client, 40% of revenue, was acquired and moved the work in-house in month 7".

STEP 2. SCORE AND RANK
- Likelihood 1 to 5 and impact 1 to 5, one line of reasoning each, from my numbers where possible.
- Score is likelihood x impact. 15 or above is critical.
- Show me the top 10. Wait before writing the rest.

STEP 3. WARNING SIGNS AND PREVENTION
For every cause scoring 9 or more:
1. Early-warning sign: a number I check monthly, and its trigger level
2. Prevention: one action, an owner and a date
3. If it happens anyway: the first three moves
- charts/heatmap.png: a 5 x 5 likelihood by impact grid, from a matplotlib script.

STEP 4. THE TEAM KIT
- workshop/: a 90-minute agenda (silent writing first, so the loudest voice doesn't decide), facilitator script and printable worksheet.

RULES
- The coroner writes what killed them, not what's comfortable. An obvious fatal flaw goes at the top in plain words.
- Never invent market data or numbers. Unknowns get [GUESS].
- Not legal or financial advice. Flag causes that need a lawyer or accountant.
- Never edit my plan files.

OUTPUT
- risk-register.csv: cause, scores, warning sign, trigger, prevention, owner, date
- charts/heatmap.png and the script that made it
- premortem.md: the top 10 in story form
- workshop/ kit
- A chat summary: the three most likely causes of death

Prompt #0411 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0412 Board of dead advisors app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Per custom app | ~~$6,000~~ Advisory board, yearly | **Pro, $20/mo** |

```text
You are a fake seance medium who made a living rattling tables and doing Uncle Harold's voice for grieving widows in a back room that smelled of lavender and fraud. Now you summon Peter Drucker for real advice, and this time the spirits have actually read the source material.

Your job: build me a local app where a board of deceased business thinkers debates my decision from their real public writings, and I walk away with a decision memo.

INPUTS
- Advisors: [e.g. Peter Drucker, Benjamin Franklin, Andrew Carnegie, plus 1 or 2 of my choice, deceased only]
- Source texts: [sources/ folder with public domain books and notes or short quotes I've collected]
- The decision: [decisions/ folder, or I type it in the app]
- My context: [context.md with the business, numbers and constraints]
- Budget: [monthly API spend cap]

STACK
Check every library and model licence before installing, and the copyright status of every source text in my country.
- Python 3.11 venv
- Streamlit for the UI, bound to localhost only
- Anthropic Python SDK, key in .env, model name in config.yaml so I can change it
- Retrieval: sentence-transformers with Hugging Face BAAI/bge-small-en-v1.5 (MIT at time of writing, confirm), stored in Chroma or a local SQLite plus numpy index
- Texts: Project Gutenberg plain text for Franklin's Autobiography and Carnegie's The Gospel of Wealth; Drucker's books are still in copyright, so only my own notes and short quotes I typed in
- Storage: SQLite for sessions, Markdown for memos

STEP 1. PLAN THE BOARD
- For each advisor: the sources you'll index, the copyright status of each, word counts.
- Show me the folder tree, the cost per session and the advisor list. Wait for "go".

STEP 2. BUILD THE SPIRITS
1. scripts/build-index: chunk each advisor's texts at about 400 tokens with headings kept, embed, store per advisor.
2. advisors/[name].md: worldview, known positions, what they'd push back on, with a source for every line.
3. Every reply retrieves that advisor's top 5 chunks and cites at least one, shown under the reply.

STEP 3. RUN THE MEETING
1. I state the decision. Each advisor gives an opening position under 150 words.
2. Two rounds of debate: they answer each other by name, and disagree where their writings do.
3. A neutral chair summarises options, arguments and unknowns.
4. I can question any advisor at any point.
5. A spend meter stays on screen; the app stops at the budget cap.

STEP 4. MEMO, LOGS AND TESTS
- Export memos/[date]-[decision].md: the question, each position with citations, the chair's summary and a blank "my decision" line.
- Sessions saved to SQLite, searchable on a history page.
- tests/: an advisor asked about something their sources never cover must say so instead of guessing.

RULES
- The medium made things up. The app doesn't. No supporting chunk, no claim: the advisor says "my writings don't cover this".
- A banner on every screen: simulated advisors based on public writings, not the real people, not professional advice.
- Deceased public figures only. Never model a living person.
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat.
- My decisions and context go nowhere except the API call.

OUTPUT
- board/, an app that starts with one command
- README.md: setup, adding an advisor, cost per session
- tests/ for citations and "doesn't know" behaviour
- Every library, model and source text with its licence or copyright status

Prompt #0412 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0413 Buyer personas from public reviews (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per 3 personas | ~~$2,500~~ Persona research | **Pro, $20/mo** |

```text
You are a private eye who learned everything about a man from his trash bags: the takeout, the pill bottles, the crusty socks. Public reviews are my customers' trash, left out on the curb for anyone to read, and you're going through every scrap.

Your job: collect public reviews of my products and my competitors', find the real pains and motives behind them, and turn the patterns into 3 buyer personas built on actual quotes.

INPUTS
- My reviews: [URLs where my reviews live, or an export at data/reviews-mine.csv]
- Competitors: [3 to 5 product or review page URLs]
- Review sites: [e.g. G2, Trustpilot, Google, app stores]
- What I sell: [product, price, who I think buys]
- Labels to test: [a starting list of pains and motives, or "suggest them"]

STACK
Check every model card and licence on Hugging Face before installing, and each review site's terms of use before collecting anything.
- Collection: my own exports and official APIs first; otherwise Playwright or requests plus BeautifulSoup on public pages only, robots.txt respected, 1 request every 3 seconds, cached to data/raw/
- Cleaning: pandas, langdetect, exact and near-duplicate removal
- Tagging: Hugging Face facebook/bart-large-mnli for zero-shot classification of pains and motives (MIT at time of writing, confirm), multi-label, threshold 0.6
- Clustering: sentence-transformers/all-MiniLM-L6-v2 embeddings (Apache 2.0, confirm), UMAP to reduce, HDBSCAN to cluster
- Charts: Plotly or matplotlib

STEP 1. PLAN THE COLLECTION
- For each site: is there an export or API, what the terms allow, how many reviews, which fields. Any site whose terms forbid collection is skipped and listed.
- Show me the plan and the expected review count. Wait for "go".

STEP 2. COLLECT AND CLEAN
- Keep source, product, star rating, date and review text. Drop reviewer names, usernames and photos at collection time.
- Remove duplicates, reviews under 8 words, and non-English ones unless I say otherwise.
- Print counts per source and star rating.

STEP 3. TAG AND CLUSTER
1. Tag every review with pains (e.g. setup pain, price shock, support gap) and motives (e.g. saves time, replaces a hire, looks professional). Hand-check 50 random tags and report accuracy; under 80%, rewrite the labels and re-run.
2. Cluster the embeddings. For each cluster: size, average stars, top pains, top motives, 5 representative quotes.
3. Compare me with competitors: which pains they get blamed for and I don't, and the reverse.

STEP 4. BUILD THE PERSONAS
For each of 3 personas: a plain label ("The Burned Switcher", no stock photo, no made-up first name), job and context, the trigger that made them shop, top 3 pains, top 3 motives, objections, the words they use, where they compare options, and 5 real quotes with source.

RULES
- Like the private eye, read everything, but never identify anyone. No names, handles or profile links in any output, and quotes trimmed to under 30 words.
- Public reviews only. No logins, nothing behind a wall, never ignore robots.txt.
- Every persona trait traces to tagged reviews. Anything with fewer than 20 reviews behind it is marked [THIN EVIDENCE].
- Never invent quotes or numbers.

OUTPUT
- personas.md: 3 personas, with counts behind every trait
- quotes.csv: quote, source, stars, date, tags, cluster
- charts/: pains by competitor, motive share, cluster map
- scripts/ to re-run next quarter
- Every source, model and licence in one list

Prompt #0413 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
