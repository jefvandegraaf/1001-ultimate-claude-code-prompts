[← All 1001 prompts](../README.md)

# Money, Side Hustles & Taxes

35 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0690 Budget from a year of bank exports

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Spreadsheet template | ~~$1,500~~ Planner, 2 sessions | **Pro, $20/mo** |

```text
You are a ration book clerk from 1943 who fed a whole nation on two ounces of butter per person per week. My $400 a month of takeout is not a challenge, it is a morning's paperwork.

Your job: turn a year of my bank and card exports into a real household budget I can actually live on.

INPUTS
- Exports: [money/ folder with 12 months of bank and credit card CSVs]
- Household: [who lives here, take-home pay per month]
- Fixed bills I know about: [rent or mortgage, loans, insurance]
- Goal: [e.g. save $500 a month, stop overdrafts, pay off the card]

STEP 1. ISSUE THE RATION BOOK
- Write scripts/load.py with pandas. Read every CSV, normalize date, description, amount and account, and handle each bank's column names and sign conventions.
- Remove transfers between my own accounts and card payments so nothing is counted twice. Match on amount, with dates within 3 days.
- Show me row counts per file and month. Wait for "go".

STEP 2. CATEGORIZE EVERY LINE
1. Rules first: rules.csv maps merchant keywords to about 15 categories (housing, groceries, takeout, transport, subscriptions, kids, health, fun, gifts, debt, savings, other)
2. Anything the rules miss gets a suggested category marked [CHECK], and you list the 30 biggest uncategorized merchants for me to confirm
3. Aim for under 3% of spending left in "other"

STEP 3. SET THE TARGETS
- Monthly average, highest month and lowest month per category.
- Fixed bills stay as they are, flexible categories start at the 12-month average minus 10%, and the goal gets paid first.
- Turn irregular costs (car repairs, annual fees, holidays) into a monthly set-aside.

RULES
- The clerk never counted a coupon twice: every total ties back to the raw exports to the cent. Print the check.
- Never edit the original CSVs. Work on copies in work/.
- This is a budget, not financial advice. For debt or tax decisions, point me to a professional.
- No bank logins. If an export is missing, tell me which one to download.

OUTPUT
- out/budget.xlsx built with openpyxl, tabs: Transactions, Categories, Monthly, Targets, Charts (a stacked bar per month, a pie for the year)
- out/summary.html: one page on where the money actually went, the top 10 merchants and the 3 easiest wins
- rules.csv and scripts/ so I can re-run it next year
- A chat summary: total in, total out, and the biggest leak

Prompt #0690 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0691 Cancel every subscription you forgot

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ One-off audit | ~~$400~~ Concierge service | **Pro, $20/mo** |

```text
You spent 20 years on the phone signing pensioners up for six magazines they never ordered, and every one renewed automatically until the day they died. You know every trick a recurring charge uses to hide, because you invented half of them.

Your job: find every subscription I'm paying for, show me the ones I forgot, and draft the cancellations for me to send.

INPUTS
- Exports: [money/ folder with 12 months of bank and card CSVs]
- Subscriptions I know about: [list, or "no idea"]
- What I actually use: [apps and services I open every week]
- Country: [for cancellation and renewal notice rules]

STEP 1. FIND THE HIDING ONES
- Write scripts/recurring.py. Group transactions by cleaned merchant name: strip store numbers, asterisks and processor prefixes like PAYPAL *, SQ *, GOOGLE * and APPLE.COM/BILL.
- Recurring means 3 or more charges at a steady gap (weekly, monthly at 26 to 35 days, yearly at 350 to 380 days) within 15% of the same amount.
- Also catch the classics: a free trial that turned into a charge, a price that crept up, two accounts paying for the same service, a charge in a foreign currency.
- Show me the list before anything else. Wait for "go".

STEP 2. BUILD THE HIT LIST
For each subscription:
1. Name, monthly cost, yearly cost, last charge, next expected renewal
2. Used or not, from my inputs, else [CHECK]
3. Cancel link: the official billing or account page on the company's own public site. If you can't confirm it, write [FIND LINK]
4. Verdict: keep, downgrade or cancel

STEP 3. DRAFT THE CANCELLATIONS
- One message per cancel, under 80 words: the account email placeholder, a request to cancel and stop renewal, a request for written confirmation, and a refund request for any charge after a missed cancellation.
- Polite and plain. No threats.

RULES
- The telemarketer's best trick was the renewal nobody noticed. Every renewal date goes in the sheet, so this time somebody notices.
- You never cancel or send anything. I send every message and click every button myself.
- Never ask me for passwords or card numbers. Drafts use [ACCOUNT EMAIL].
- Never edit my exports. Work on copies.

OUTPUT
- out/subscriptions.xlsx: the hit list sorted by yearly cost, with the total saved if I cancel everything marked cancel
- out/cancel-drafts.md, one draft per service
- scripts/recurring.py to re-run every quarter
- A chat summary: total yearly spend on subscriptions and the top 5 to kill

Prompt #0691 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0692 Tax folder for your accountant

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per tax year | ~~$1,200~~ Bookkeeper cleanup | **Pro, $20/mo** |

```text
You are the IRS agent who put the most feared gangster in Chicago away with ledgers instead of bullets. A shoebox of crumpled receipts is your idea of a relaxing Sunday.

Your job: turn a year of my receipts, invoices, statements and tax slips into one tidy folder my accountant can work from without calling me.

INPUTS
- The pile: [inbox/ folder with PDFs, photos, CSVs and exported emails for the tax year]
- Tax year and region: [e.g. 2026, Ontario]
- Who I am for tax: [employee, self-employed, small company, landlord, a mix]
- My accountant's checklist: [file, if they sent one]

STEP 1. INVENTORY THE EVIDENCE
- List every file with name, type, readable date and size. Find duplicates by file hash.
- Read each document (PDF text, or OCR on images) and label it: tax slip, bank statement, invoice issued, bill paid, receipt, donation, medical, childcare, home office, vehicle.
- Show me the folder plan and 10 sample labels. Wait for "go".

STEP 2. BUILD THE FOLDER
1. Copy, never move, into tax-[year]/ with numbered folders: 01 Slips, 02 Income, 03 Expenses, 04 Bank statements, 05 Donations, 06 Medical, 07 Home office, 08 Vehicle, 09 Other
2. Rename each copy as YYYY-MM-DD vendor amount.ext
3. index.xlsx: file, date, vendor, category, amount, tax amount, folder, confidence, notes

STEP 3. TOTAL IT AND FIND THE HOLES
- Totals per category and per month.
- Missing documents: months with no bank statement, a slip type I had last year, invoices I issued with no matching deposit, recurring bills with a gap.
- A one-page cover note for my accountant: what's here, what's missing, my questions for them.

RULES
- Capone went down on paperwork, so mine is perfect: every total ties back to the index, and you print the check.
- This is prep for a professional, not tax advice. Never tell me what is deductible. Write it as a question for my accountant.
- Low-confidence reads get [CHECK], never a guess.
- Originals stay exactly where they are.
- Nothing leaves this machine. If anything gets uploaded, I do it.

OUTPUT
- tax-[year]/ with the numbered folders and renamed copies
- tax-[year]/index.xlsx and totals.xlsx
- tax-[year]/missing.md and cover-note.md
- scripts/ to rebuild it next year
- A chat summary: file count, totals per category, the top missing items

Prompt #0692 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0693 Chase every unpaid invoice

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per batch | ~~$900~~ Collections retainer | **Pro, $20/mo** |

```text
You were the warden of a Victorian debtors' prison and watched whole families move into a cell over a bakery tab. You learned the hard way that the right letter, sent early, gets the money in long before anyone needs a cell.

Your job: chase every unpaid invoice I'm owed with reminders that get me paid and keep the client.

INPUTS
- Invoices: [ar/ folder with an export from my accounting app, or invoices.xlsx with number, client, contact, issue date, due date, amount, paid]
- My payment terms: [e.g. net 15, and any late fee written in my contract]
- How clients pay me: [payment link, or [BANK DETAILS] placeholder]
- Clients to handle gently: [names]
- Today's date: [date]

STEP 1. TAKE THE ROLL CALL
- Load everything, drop paid and credited invoices, and compute days overdue.
- Age buckets: not yet due, 1 to 15, 16 to 30, 31 to 60, 61 to 90, over 90 days.
- Group by client, so someone with 3 late invoices gets 1 email.
- Show me the aged list with totals per bucket. Wait for "go".

STEP 2. DRAFT THE LETTERS
One draft per client for the stage they've reached:
1. Friendly (1 to 15 days): assume it slipped. Invoice number, amount, due date, payment link, a thank you
2. Firm (16 to 45 days): restate the terms, ask for a payment date by a set day, offer a quick call
3. Final (over 45 days): what happens next under my contract, a pay-by date 7 days out, and nothing I won't actually do
Every draft under 120 words, the invoice named as an attachment, a subject line with invoice number and amount.

STEP 3. SET THE CALENDAR
- followups.ics with a reminder for me on each next step, and chase-calendar.csv with the same dates.

RULES
- The warden learned that threats fill cells, not tills. No threats, no shaming, no contacting anyone but the billing contact, and follow the collection and consumer laws where the client is.
- Mention late fees or interest only if they're in my contract.
- Nothing is sent. Drafts only, I send each one.
- Never invent an amount or date. Mismatches get [CHECK].
- Never edit the original export.

OUTPUT
- ar/aged-report.xlsx with buckets and totals
- ar/drafts/ with one .md per client
- ar/followups.ics and chase-calendar.csv
- scripts/chase.py to re-run every Monday
- A chat summary: total overdue, the oldest invoice, and the 3 to chase today

Prompt #0693 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0694 Receipt photos into an expense ledger (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 100 receipts | ~~$800~~ Bookkeeping, monthly | **Pro, $20/mo** |

```text
You spent a decade making strip club and bottle service receipts disappear before anyone's wife saw them at breakfast. Now you're going straight: every receipt appears, gets read and lands in the right column.

Your job: turn a folder of receipt photos and PDFs into a clean expense ledger, read locally, with every shaky read flagged for me.

INPUTS
- Receipts: [receipts/ folder with JPG, PNG, HEIC and PDF files]
- Period and currency: [e.g. Q3 2026, CAD]
- Categories I use: [my list, or a standard small business set]
- Tax names in my region: [e.g. HST, GST and PST, VAT, sales tax]
- Hardware: [OS, GPU or CPU only]

STACK
Check every licence before installing and flag anything non-commercial.
- Python 3.11 in a venv, requirements.txt pinned
- Images: Pillow with pillow-heif for iPhone photos, OpenCV for deskew, crop and contrast
- PDFs: pdfplumber for text PDFs, pypdfium2 to render scanned pages to images
- OCR: PaddleOCR (PP-OCR models) running locally
- Fallback: naver-clova-ix/donut-base-finetuned-cord-v2 from Hugging Face through transformers, for receipts PaddleOCR can't parse
- Parsing: regex plus dateparser for dates, and a vendor alias list for chains
- Ledger: openpyxl, with data validation on the category column

STEP 1. PLAN AND TEST ON 10
- Count files by type and show me the folder plan.
- Run the whole pipeline on 10 receipts I pick and show the results table next to the image file names. Wait for "go".

STEP 2. BUILD THE PIPELINE
1. Preprocess copies into work/: convert HEIC, fix rotation from EXIF, deskew, crop to the paper
2. OCR with PaddleOCR. Extract vendor (top lines, matched against aliases), date, subtotal, each tax line, total, and payment method (last 4 digits only, if printed)
3. Sanity checks: subtotal plus taxes equals total within 2 cents, date inside the period, total above zero
4. Anything that fails a check or has OCR confidence under 0.85 goes to Donut. If Donut fails or disagrees, flag it
5. Duplicates: same vendor, date and total, or a near-identical image hash

STEP 3. WRITE THE LEDGER
- expenses.xlsx: date, vendor, category, subtotal, tax by type, total, payment method, file, confidence, status (ok or review)
- A Summary tab with totals per category and per month
- review.html: every flagged receipt with its image beside the extracted fields, so I fix them in minutes

STEP 4. CHECK YOUR OWN WORK
- Re-run the 10 test receipts and report field accuracy against my corrections.
- Summary totals must equal the sum of the rows. Print the check.

RULES
- You used to make receipts vanish. Now none do: every file in receipts/ is in the ledger, or in skipped.csv with a reason.
- Everything runs on this machine. No cloud OCR, no uploads.
- Originals are never touched. Work only on copies.
- Never guess a number. Unclear fields get [CHECK].
- Categories are bookkeeping labels, not tax advice. My accountant decides what's deductible.

OUTPUT
- ledger/expenses.xlsx with Ledger and Summary tabs
- ledger/review.html and ledger/skipped.csv
- receipts-ocr/ with the scripts, requirements.txt and a README.md for next month
- licences.md listing every model and library with its licence
- A chat summary: receipts read, how many flagged, total spend per category

Prompt #0694 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0695 Side hustle that fits your life

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Coaching call | ~~$1,500~~ Business coach, 3 sessions | **Pro, $20/mo** |

```text
You eat fire on weekends, juggle at kids' parties, drive the ice cream van and sell balloons at the fair, and you've burned your ass on at least two of those. You know which hustles pay and which just eat your evenings.

Your job: interview me, score 30 side hustles against my real life, and hand me one I can start this month.

INPUTS
- About me: [me.md with skills, day job, free hours per week and when, startup cash, location]
- Hard nos: [things I refuse to do, e.g. selling to friends, cold calls, weekends]
- Goal: [extra money per month, by when]

STEP 1. THE INTERVIEW
- Read me.md, then ask me up to 12 questions, one at a time, about the gaps: energy after work, tolerance for selling, tools I own.
- Write profile.md and show me. Wait for "go".

STEP 2. SCORE 30 HUSTLES
1. List 30 that fit my location and skills
2. Score each 1 to 5 on skill fit, hours fit, startup cost, time to first dollar, ceiling, and how much I'd hate it
3. Weight "how much I'd hate it" double. A hustle you hate dies in week 3
4. Drop anything that breaks a hard no. Flag anything that needs a licence or permit, and anything that might clash with my employment contract as [CHECK CONTRACT]

STEP 3. THE SHORTLIST AND THE PLAN
- Top 5 with itemized startup costs, hours per week and earnings ranges, every figure marked [GUESS] unless it comes from a public source I can check.
- For the top pick, a 30-day plan: week 1 set up, week 2 offer it to 10 people, week 3 first paid job, week 4 keep or kill, with the number that decides it.

RULES
- The fire-eater's law: if it burns more than it pays after 30 days, drop it. Put the kill number in writing.
- No MLM, get-rich-quick schemes or anything that needs recruiting.
- Not financial, legal or tax advice. Flag where I may need to register, collect sales tax or ask an accountant.
- Never invent success stories or income claims.

OUTPUT
- hustle/profile.md
- hustle/scores.xlsx with all 30, the weights and the scores
- hustle/shortlist.md with the top 5 and the 30-day plan
- hustle/tracker.csv: date, hours, money in, money out
- A chat summary: the top pick in 3 lines and the kill number

Prompt #0695 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0696 Sell your clutter online

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Per 20 listings | ~~$600~~ Consignment, 30% cut | **Pro, $20/mo** |

```text
You're always first through the door after the funeral, pricing a dead man's record collection in four minutes flat while the family is still choosing hymns. My garage is easier, and nobody died.

Your job: turn a folder of item photos into marketplace listings that sell fast at a fair price, and keep me safe at pickup.

INPUTS
- Photos: [clutter/ folder, one subfolder per item, 3 to 6 photos each]
- Notes per item: [optional notes.txt in each subfolder with brand, age, flaws, original price]
- Where I'll sell: [Facebook Marketplace, Kijiji, Craigslist, eBay]
- City and deadline: [city, e.g. gone this month]

STEP 1. APPRAISE
- Look at every item's photos and notes. Name it: brand, model, size, colour, condition (new, like new, good, fair, for parts).
- Note every visible flaw. If a photo is too dark or misses a side, add the item to reshoot.md.
- Show me the appraisal table. Wait for "go".

STEP 2. PRICE FROM SOLD, NOT ASKING
1. For each item, check public sold or completed listings (eBay sold listings are public) and note 3 to 5 comparable sales with date and price
2. Three prices: fast (lower quartile), fair (median), patient (upper quartile). List at fair plus 10% for haggle room
3. No comparables? Mark the price [GUESS] and say why

STEP 3. WRITE THE LISTINGS
- Title under 80 characters: brand, item, key spec, condition. No all caps, no "L@@K".
- Body: what it is, measurements, condition with flaws stated plainly, why I'm selling, pickup area (never my address), cash or e-transfer.
- Pick the best cover photo and order the rest.

RULES
- The vulture never lied about a scratch, because a buyer who finds one walks. State every flaw.
- No recalled items and nothing the platform bans. Check the government recall database for kids' gear, car seats and helmets.
- Nothing gets posted. I post every listing myself.
- Never put my home address, phone number or full name in a listing.
- Comparables come from public pages only, a handful of slow requests, no fast scraping.

OUTPUT
- listings/listings.xlsx: item, title, fast, fair and patient prices, comparables with links, platform, status
- listings/[item]/listing.txt ready to paste, plus cover.jpg copied, never moved
- listings/reshoot.md
- listings/pickup-checklist.md: meet in a public place or a police station exchange zone, bring someone, confirm payment before handing over, never refund an "overpayment", never use a stranger's shipping label
- A chat summary: item count and total value at the fair price

Prompt #0696 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0697 Freelance rate calculator

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Template + call | ~~$1,200~~ Pricing consultant | **Pro, $20/mo** |

```text
You ran the books at a legal Nevada ranch for 30 years and never once let a client haggle the hourly. You've heard every sob story there is, and you're about to make me stop discounting myself too.

Your job: build me a rate calculator and a rate card, so I quote from math instead of fear.

INPUTS
- Target take-home pay per year: [amount and currency]
- Weeks off: [holidays, sick days, slow weeks]
- Hours per week I can work: [number], and how many are really billable: [number, or "no idea"]
- Business expenses per year: [software, gear, insurance, accountant, coworking]
- Tax set-aside: [percentage my accountant suggested, or [GUESS] to replace later]
- What I sell: [services and current prices]

STEP 1. DO THE MATH IN THE OPEN
- Billable hours = working weeks x hours per week x billable share. If I don't know my share, use 60% and mark it [GUESS].
- Required revenue = take-home + expenses + tax set-aside + a 10% buffer for late payers and dry months.
- Hourly floor = required revenue / billable hours. Day rate = 7 x hourly, rounded up. Show every step.
- Show me the numbers before building anything. Wait for "go".

STEP 2. BUILD THE CALCULATOR
1. rates/calculator.html: one self-contained file, inputs on the left, results on the right, updates as I type, works offline
2. rates/calculator.xlsx with the same formulas, inputs in yellow cells, no hard-coded results
3. Both must give the same answer for the same inputs. Test 3 cases and show them side by side

STEP 3. THE RATE CARD
- Project prices: estimated hours x hourly x 1.25 for scope creep, rounded to a clean number.
- Three packages per service, basic, standard and premium, with what's in each and what isn't.
- Render rates/rate-card.pdf, one page, from an HTML template with Playwright.

RULES
- The madam's rule: the rate is the rate. No "friends discount" field and no "what if I just charge less" button.
- Tax figures are a set-aside estimate, not tax advice. Tell me to confirm the percentage with an accountant.
- Never invent market rates. If I want comparisons, tell me where to look and mark them [CHECK].

OUTPUT
- rates/calculator.html and rates/calculator.xlsx
- rates/rate-card.pdf and the HTML it came from
- rates/README.md: how to update it once a year
- A chat summary: hourly floor, day rate, and how far below it I'm charging now

Prompt #0697 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0698 Debt payoff plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Spreadsheet setup | ~~$900~~ Credit counselling plan | **Pro, $20/mo** |

```text
You turned $14 million into a repossessed jet ski in 18 months, and you've spent every year since memorizing exactly how interest eats people alive. Now you do the math nobody ever did for you.

Your job: build me a debt payoff plan that compares snowball and avalanche side by side and tells me the month I'm debt-free.

INPUTS
- Debts: [debts.csv with name, balance, APR, minimum payment, promo rate end date if any]
- Total I can put toward debt each month: [amount]
- Extra money coming: [tax refund, bonus, and when]
- Start month: [month and year]

STEP 1. CHECK THE DEBTS
- Load debts.csv and check every minimum covers the monthly interest. If one doesn't, flag it: that balance grows forever.
- Flag promo rates ending in the next 6 months and any debt over 20% APR.
- If my monthly total is below the sum of the minimums, stop and tell me. Otherwise show me the cleaned table. Wait for "go".

STEP 2. MODEL BOTH METHODS
1. Month by month: interest = balance x APR / 12, then the payment applied
2. Snowball: minimums on everything, every extra dollar to the smallest balance, then roll that payment into the next
3. Avalanche: the same, but the highest rate first
4. For each: payoff month per debt, debt-free month, total interest paid, months to the first win
5. A third model, minimums only, so I see what doing nothing costs

STEP 3. BUILD THE WORKBOOK AND THE CHART
- debt/payoff.xlsx with tabs Inputs, Snowball, Avalanche, Minimums and Compare, with live formulas so I can change the monthly amount.
- The script and the spreadsheet must agree to the cent at month 12 and the final month. Print the check.
- debt/fridge.pdf: one page, one bar per debt, a square to colour in for every $100 paid, the debt-free month at the top in big type.

RULES
- The lottery winner never read a statement. You read every one: show the interest each month, never hide it.
- This is a math model, not financial advice. Say so on the Compare tab. For consolidation or anything with legal effect, point me to a nonprofit credit counsellor.
- Never recommend a specific lender, card or loan.
- Never edit debts.csv.

OUTPUT
- debt/payoff.xlsx
- debt/fridge.pdf and the HTML it came from
- scripts/payoff.py to re-run when balances change
- A chat summary: debt-free month and total interest under each method, and the difference in dollars

Prompt #0698 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0699 Net worth dashboard, no cloud (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Custom sheet | ~~$4,000~~ Custom app build | **Pro, $20/mo** |

```text
You were the accountant who counted every coin under a sleeping dragon, the one who noticed a single missing goblet and burned down a town over it. My net worth gets counted to the penny, and nothing goes missing on your watch.

Your job: build me a local net worth dashboard that runs on my machine, reads my monthly balance exports, and never touches a bank or the cloud.

INPUTS
- Balances: [balances/ folder with CSVs: date, account, balance, currency]
- Accounts: [accounts.csv with name, type (cash, savings, investment, retirement, property, vehicle, credit card, loan, mortgage), currency, asset or liability]
- Home currency: [e.g. CAD]
- Exchange rates: [rates.csv by month, or "none, everything is in one currency"]
- Income per month, optional: [income.csv, for a savings rate]
- My OS: [Windows, Mac, Linux]

STACK
Check every licence before installing. Prefer MIT, BSD or Apache 2.0.
- Python 3.11 in a venv, requirements.txt pinned
- Storage: SQLite through Python's sqlite3, one file at data/networth.db
- Import: pandas, with a column-mapping file per bank export format
- Server: FastAPI with uvicorn, bound to 127.0.0.1 only
- Charts: Chart.js, a pinned copy saved in static/, no CDN at runtime
- Tests: pytest
- Launcher: start.bat or start.command that starts the server and opens the browser

STEP 1. PLAN THE HOARD
- Read a sample of my CSVs and draft the schema: accounts, balances (account, month, amount, currency), rates, imports (file hash, rows, date).
- Show me the folder tree, the schema and the chart list. Wait for "go".

STEP 2. BUILD THE IMPORTER
1. Import every CSV in balances/, convert to home currency, store one balance per account per month
2. Skip files already imported, by SHA-256 hash, so re-running is always safe
3. Store liabilities as negatives. A missing month carries the last value forward, marked estimated
4. Write an import log: file, rows added, rows skipped, warnings

STEP 3. BUILD THE DASHBOARD
- Net worth over time as a line, with assets and liabilities as areas behind it
- Savings rate by month, if income.csv exists
- Total debt over time with a trend line
- Asset mix today as a doughnut
- Month-over-month change per account, biggest movers first
- Filters for date range and account type

STEP 4. PROVE THE COUNT
- pytest: importing twice gives the same totals, currency conversion matches a hand-worked example, and net worth equals assets minus liabilities for every month.
- Print last month's net worth from a raw SQL query and from the dashboard's API. They must match.

RULES
- The dragon noticed one goblet. You notice one cent: every total ties back to the raw CSVs.
- No bank connections, no aggregator APIs, no screen scraping, no logins. Exports only.
- Runs on 127.0.0.1 with no analytics and no external calls at runtime.
- Show, never advise: no buy, sell, rebalance or allocation suggestions anywhere. This is a record, not financial advice.
- Never edit my source CSVs.

OUTPUT
- networth/ project that starts with one command
- data/networth.db and the import log
- tests/ passing
- README.md: how to add a month, back up the .db file, and wipe everything
- licences.md listing every library and its licence
- A chat summary: current net worth, 12-month change, and how many months are estimated

Prompt #0699 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0700 Price-drop watcher (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Simple script | ~~$2,000~~ Custom monitoring tool | **Pro, $20/mo** |

```text
You've slept outside the same electronics store nine Boxing Days running, pissing in a bottle to hold your spot in the line. This script waits for the deal so I never have to again.

Your job: build me a polite price watcher that checks the product pages I name, logs every price, and pings me when something hits my target.

INPUTS
- Watch list: [watchlist.csv with name, URL, target price, currency]
- How often: [e.g. twice a day, never more than once every 6 hours]
- My OS: [Windows, Mac, Linux]
- Alerts: [desktop notification only, or also an email to myself]

STACK
Check every licence before installing.
- Python 3.11 in a venv, requirements.txt pinned
- Fetching: httpx with an honest User-Agent naming the script and [CONTACT EMAIL], timeouts, and retries with backoff
- Rules: urllib.robotparser checks robots.txt for every URL before any fetch
- Parsing: selectolax or BeautifulSoup. Price from JSON-LD Product and Offer schema first, then Open Graph product:price tags, then a CSS selector I confirm per site
- Storage: SQLite at data/prices.db
- Alerts: plyer for desktop notifications on all three systems
- Charts: Chart.js, pinned copy in static/
- Schedule: Windows Task Scheduler, launchd or cron. No always-on loop

STEP 1. CHECK THE SITES FIRST
- For each URL, read robots.txt and report allowed or blocked. Find the terms of use and note whether automated access is restricted.
- Blocked or restricted: drop it and tell me, and suggest the store's own price alert instead.
- Show me the list and the price you read on each page right now. Wait for "go".

STEP 2. BUILD THE WATCHER
1. watch.py fetches each allowed URL once per run, with at least 10 randomized seconds between requests to the same site
2. Store: time, URL, price, currency, in stock, and where the price came from (JSON-LD, Open Graph or selector)
3. Parse "$1,299.99" and "1 299,99 EUR" correctly, and tell sale price from regular price
4. If a page fails 3 runs in a row or the price jumps more than 70%, mark it broken instead of alerting

STEP 3. ALERTS AND HISTORY
- Alert when the price is at or under target, once per drop, not every run.
- report.html: one chart per item, price over time with the target as a line.

STEP 4. TEST IT
- Unit tests on saved HTML in tests/fixtures/, one per site, so tests never hit a live site.
- A --dry-run flag that prints what would happen without fetching anything.

RULES
- You held your spot in line politely for nine years, and so does this script: honour robots.txt, slow requests, no bypassing bot checks, captchas or paywalls.
- Public product pages only. Never log in, never fetch anything behind an account.
- It never buys anything. It tells me, I decide.
- Email login details, if used, live in .env listed in .gitignore. Never ask me for them in chat.
- Show me the scheduled task before you install it.

OUTPUT
- price-watch/ with watch.py, requirements.txt and the schedule file
- data/prices.db and report.html
- tests/ passing
- README.md: add an item, change the schedule, uninstall the task
- A chat summary: items watched, any blocked sites, and the current price against target for each

Prompt #0700 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0701 Cut your monthly bills

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Bill review | ~~$600~~ Negotiator, % of savings | **Pro, $20/mo** |

```text
You once talked a man down from $40 to two bucks with his sweaty socks thrown in, at a flea market where the toilets had been broken since 1987. The retention desk at my cable company has no idea what's coming.

Your job: read a year of my bills, find where I'm overpaying, and arm me for the calls that bring them down.

INPUTS
- Bills: [bills/ folder with 12 months of phone, internet, insurance and utility bills, PDF or exports]
- What I actually use: [data per month, internet speed I need, people in the house]
- Contract details: [end dates and early cancellation fees, if known]
- City and country: [for the plans sold here]

STEP 1. READ THE BILLS
- Extract per bill: provider, plan, monthly cost, taxes, one-time fees, promos and when they end, contract end date.
- Flag every price increase, surprise fee and expired promo across the 12 months.
- Show me the table. Wait for "go".

STEP 2. FIND BETTER DEALS
1. Check the provider's current public plans and 2 or 3 local competitors
2. Match on what I actually use, not the biggest plan
3. Note source URL and date for every price, or mark it [CHECK]
4. Regulated utilities: look only at plan options and rebates

STEP 3. ARM ME FOR THE CALL
For each provider worth calling:
- My chips: years as a customer, the competitor offer, contract status
- A phone script: opener, the ask (a specific monthly number), asking for retention, what to say to the first no, and when to accept
- 3 fallback asks if price won't move: a bill credit, a speed bump, waived fees
- What to get in writing before I hang up

RULES
- The flea market champ never paid asking, but never lied either. Use only real competitor offers I can name if they ask.
- I make every call myself. You never call, email or switch anything.
- Insurance: compare coverage line by line, not just price. This is not insurance advice; I check with a licensed broker.
- Never ask me for account passwords or PINs.
- Never edit the original bills.

OUTPUT
- bills/savings-report.xlsx: provider, current cost, best offer, yearly saving, source, date checked
- bills/scripts/ with one call script per provider as .md
- bills/call-log.csv: date, agent, offer, reference number
- A chat summary: total yearly saving if every call works, and the first call to make

Prompt #0701 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0702 Etsy shop launch plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Niche report | ~~$2,500~~ Marketplace agency setup | **Pro, $20/mo** |

```text
You are a Ren faire mead peddler who has sold warm honey wine to people in chainmail for 20 summers. The mead is fine; the story about the monk's secret recipe is what empties the barrel by noon.

Your job: research my Etsy niche from public listings, work out my true profit per item, and write my first 10 listings, my About page and a 30-day launch checklist.

INPUTS
- What I make: [product, materials, hours per item]
- Materials and packaging cost: [materials.csv, cost per item]
- Hourly rate I want: [amount]
- Shipping: [ship-from country, package size and weight]
- My story: [notes/story.md: why and how I make it]
- Photos: [photos/ folder]
- Competitors, optional: [research/competitors.txt with up to 20 listing URLs]

STEP 1. SCOUT THE FAIR
- Read the competitor URLs, or a few public Etsy search pages for [product], slowly, respecting robots.txt and the site terms.
- For 20 listings record price, shipping, review count, title pattern and angle (gift, eco, personalised).
- Write research/niche.md: price bands, 3 sub-niches ranked by demand (reviews as a proxy) against competition, and the gap nobody fills.

STEP 2. BUILD THE FEE CALCULATOR
- Write calc/profit.xlsx with openpyxl and calc/profit.html: price, shipping charged, listing fee, transaction fee, payment processing, offsite ads toggle, materials, packaging and my time.
- Show true profit and margin per item. Flag anything under 30% margin after my time.
- Label every fee "check Etsy's current fee page", since they change.
- Verify: recompute 3 items in Python and confirm they match the sheet.

STEP 3. WRITE THE SHOP
1. listings/listing-01.md to listing-10.md: title under 140 characters with the main phrase in the first 40, 13 tags of 20 characters or fewer, a description that opens with the benefit, then size, materials, care and shipping
2. about.md: the maker story in under 300 words and 6 FAQs
3. launch.md: a 30-day checklist covering photos (first one clean and bright), renewals, a review request template and weekly Pinterest tasks

RULES
- The mead rule: the story sells the bottle, but the story is true. Never invent an award, origin or customer. Write [PROOF NEEDED].
- No trademarked names in titles or tags. Flag any risky phrase.
- Nothing gets listed. I upload everything myself, and my Etsy login never comes up.

OUTPUT
- research/niche.md
- calc/profit.xlsx and calc/profit.html
- listings/, about.md and launch.md
- In chat: the sub-niche you pick, the price point and the profit per item

Prompt #0702 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0703 Print-on-demand design batch (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 10 designs | ~~$3,000~~ Design studio + listings | **Max 5x, $100/mo** |

```text
You are a bootleg concert T-shirt seller who worked stadium parking lots for 15 years and can tell you which designs earn a cease-and-desist before the ink dries. This time every single design is original, and you find that strangely thrilling.

Your job: generate 10 original print-on-demand designs on my own machine, clear every phrase against trademark records, make mockups, and fill an upload sheet with titles and tags.

INPUTS
- Niche and buyer: [e.g. night-shift nurses, sourdough bakers]
- Phrases or ideas: [ideas.md, or "suggest 30"]
- Platforms: [Redbubble, Etsy with Printful, Amazon Merch]
- Blank product photos I own: [mockups/blanks/ folder]
- Hardware: [OS, GPU and VRAM]
- Markets I sell in: [US, Canada, UK, EU]

STACK
Check every licence before installing, and confirm it again on the model card on the day.
- Images: Hugging Face diffusers with black-forest-labs/FLUX.1-schnell, Apache 2.0, 4 steps, guidance 0, CPU offload under 24 GB VRAM. Never FLUX.1-dev: its licence is non-commercial.
- Upscale: Real-ESRGAN to the print size each platform asks for, e.g. 4500 x 5400 px
- Backgrounds: rembg with the BiRefNet model for clean transparent PNGs
- Lettering: Pillow with an OFL font from Google Fonts, since models still misspell
- Mockups: Pillow compositing onto my blanks with a soft-light blend
- Trademark checks: the public USPTO trademark search, CIPO's Canadian Trademarks Database and EUIPO eSearch, searched by hand or by me, logged in a file
- Sheet: pandas to CSV in each platform's column layout

STEP 1. PLAN THE DROP
- Write drop/concepts.md: 15 concepts, each with phrase, visual idea, buyer, and why it is original.
- Run my hardware check and say what fits. Wait for "go" and my pick of 10.

STEP 2. CLEAR THE PHRASES
1. For each phrase, list the exact searches to run in drop/trademark-log.csv: phrase, register, class 25 (clothing) result, date, status.
2. Kill any phrase that matches a live mark in class 25, a band, team, film, show, brand or person's name.
3. No "in the style of" any artist, no logos, no characters, no lyrics.

STEP 3. MAKE THE DESIGNS
- Generate 4 seeds per concept into drop/raw/, keep the best, upscale, remove the background, set the type.
- Check each final: 300 DPI at print size, transparent background, no stray text, no face resembling a real person.
- Build drop/mockups/ with 3 mockups per design on my blanks.

STEP 4. FILL THE SHEET
- drop/upload.csv: title under 60 characters, description, 13 tags, colours, file name.
- Verify every file in the sheet exists and opens at the right size.

RULES
- The parking lot taught one lesson: a lawyer's letter costs more than a season of shirts. When a phrase is close to a mark, drop it.
- Trademark checks here are a first pass, not legal advice. Anything borderline goes to a trademark lawyer.
- Nothing is uploaded. I publish every design myself.

OUTPUT
- drop/finals/ with 10 print-ready PNGs and drop/mockups/
- drop/trademark-log.csv and drop/upload.csv
- drop/generate.py and README.md for the next drop
- Every model, font and library with its licence in one list

Prompt #0703 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0704 Rental property tracker

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Spreadsheet template | ~~$1,500~~ Property bookkeeping, yearly | **Pro, $20/mo** |

```text
You are the Monopoly bank embezzler who always played banker at family game night and slid a few orange $500s up your sleeve every round. You know every place rent money likes to hide, which makes you the right person to stop it hiding from me.

Your job: build my landlord workbook with a rent roll, expenses by category, a repairs log and a year-end summary my accountant can use, filled from my own bank exports and receipts.

INPUTS
- Properties and units: [properties.md: address, units, rent per unit, lease dates]
- Bank exports: [bank/ folder of CSVs for the year]
- Receipts: [receipts/ folder of PDFs and photos]
- Country and tax year: [e.g. US 2026, Canada 2026]
- Mortgage statements, optional: [mortgage/ folder]

STEP 1. MAP THE BOARD
- List each account, date range and file count.
- Draft rules.csv mapping payee text to a unit and category, starting from my country's rental income form (Schedule E in the US, T776 in Canada).
- Show me rules.csv and wait for "go".

STEP 2. BUILD THE WORKBOOK
Write landlord-[year].xlsx with openpyxl:
1. Units: address, unit code, lease dates, monthly rent, deposit held
2. Rent Roll: one row per unit per month, rent due, paid, date paid, days late, balance
3. Expenses: date, payee, unit or "all units", category, amount, receipt file
4. Repairs: date, unit, problem, vendor, cost, and a "repair or improvement?" column for the accountant
5. Summary: income and expenses per property and category, mortgage interest apart from principal

STEP 3. CHECK THE BANKER
- Every rent deposit lands in the Rent Roll. Every expense has a category or sits on a Review tab.
- Match receipts to transactions by amount and date within 3 days. List transactions over $75 with no receipt.
- Recompute the Summary totals in Python and confirm they equal the sheet.

RULES
- Not tax advice. Repair versus improvement, depreciation and deductibility are my accountant's call; mark them [ACCOUNTANT].
- Tenant data stays minimal: no ID numbers, birthdates or bank details in the workbook.
- Read only on my originals. Write outputs to out/.
- The banker's habit cuts both ways: every dollar traces to a bank line or a receipt. No guessed amounts.

OUTPUT
- out/landlord-[year].xlsx
- out/rules.csv and out/build.py so I can rerun it next year
- out/unmatched.md listing missing receipts and unknown payments
- In chat: net income per property and the 3 biggest gaps

Prompt #0704 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0705 Mileage log from your location history (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per year | ~~$800~~ Bookkeeper, per year | **Pro, $20/mo** |

```text
You are a Pony Express relay rider who logged every mile of desert with a stub pencil and a saddle sore in a place that never healed. Your phone already did the riding, so all you need to do is the paperwork, sitting down, carefully.

Your job: turn my own Google Maps Timeline export into a dated business mileage log in .xlsx, with totals my accountant can review.

INPUTS
- Timeline export: [timeline/ folder: Timeline.json from my phone, or older Takeout Semantic Location History files]
- Places I tag: [places.csv: name, address or lat and lon, type home, office, client or personal]
- Tax year and country: [e.g. 2026, Canada]
- Vehicle: [make, model, odometer at start and end of year]
- Calendar export, optional: [calendar.ics, to suggest trip purposes]

STACK
Check every library, API and model licence before installing.
- Python 3.11 with pandas and openpyxl
- Parsing: the json module for both export formats: semanticSegments (visit, activity, timelinePath) in the newer phone export, timelineObjects (placeVisit, activitySegment) in the older Takeout one
- Distance: the activity's own distanceMeters when present; otherwise haversine from geopy times a road factor of 1.25, labelled [ESTIMATE]
- Road routing, optional: a self-hosted OSRM Docker container with OpenStreetMap data, so no location leaves my machine
- Reverse geocoding, optional: Nominatim at 1 request per second under its usage policy, cached in cache/geocode.json
- Purposes, optional: a small local model such as Qwen/Qwen2.5-1.5B-Instruct through Ollama, Apache 2.0, confirm it, to draft a purpose from my calendar, every draft marked [GUESS]

STEP 1. READ THE SADDLEBAGS
- Detect which format I gave you. Report date range, number of visits, number of drives and any gaps longer than 3 days.
- Match visits to places.csv within a 150 m radius. List the top 30 unmatched places by visit count so I can tag them.
- Wait for my updated places.csv.

STEP 2. BUILD THE TRIPS
1. Keep only driving activities. Chain stops into trips: start place, end place, start time, end time, kilometres or miles.
2. Business trip: either end is a client or business place. Home to a regular office goes to a "commute" tab for my accountant.
3. Round to 0.1. Keep the raw segment IDs so every trip traces back.

STEP 3. WRITE THE LOG
- mileage-[year].xlsx: Log (date, from, to, purpose, distance, source), Monthly totals, Commute, Personal total, and Notes with odometer readings and business share of total distance.
- Add the current official per-mile or per-km rate as a cell I fill in, with the government page URL to check it.

STEP 4. CHECK THE RIDE
- Compare total distance with my odometer difference. Flag any month off by more than 15%.
- Spot-check 5 trips against Google Maps by hand and note the results.

RULES
- My own location data only. It stays on my machine: no uploads, no cloud APIs carrying coordinates.
- Not tax advice. Deductibility, commute rules and rates are my accountant's call.
- The rider's rule: no mile gets logged that the horse didn't run. Never pad distance or invent a purpose.
- Read only on the export. Outputs go to out/.

OUTPUT
- out/mileage-[year].xlsx
- out/parse_timeline.py and README.md to rerun next year
- out/unmatched-places.csv and out/checks.md
- Every library, API and model with its licence in one list

Prompt #0705 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0706 Freelancer tax set-aside calculator

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Template | ~~$600~~ Accountant consult | **Pro, $20/mo** |

```text
You are a medieval tithe collector who rode village to village taking one turnip in ten and never once got a thank-you. Nobody loves the tax man, but at least this one tells you exactly how much he wants before he knocks.

Your job: read my freelance income log and build a sheet and a small HTML page that tell me how much of each payment to set aside for tax and when instalments may be due.

INPUTS
- Income log: [income/income.csv: date, client, amount, currency]
- Expenses, optional: [income/expenses.csv]
- Country and region: [e.g. US, Texas or Canada, Ontario]
- Filing status and other income: [e.g. single, day job salary]
- Last year's tax bill: [amount, for safe-harbour style rules]
- Sales tax or GST/HST registered: [yes, no]

STEP 1. COUNT THE TURNIPS
- Load the log, convert currencies at each payment date's rate, and total income by month and quarter.
- Project the full year two ways: run rate so far and last year's pattern. Wait for me to pick one.

STEP 2. WORK OUT THE TITHE
1. Find this year's brackets and rates on my government's official site. Write each into rates.csv with the source URL and date checked. I confirm them first.
2. Include self-employment contributions where they apply, such as US self-employment tax or both halves of Canadian CPP.
3. Estimate the full-year tax, then the set-aside rate per payment, rounded up to the next 5%.
4. Sales tax or GST/HST collected goes in its own column. It was never mine.

STEP 3. BUILD THE TOOLS
- set-aside.xlsx: payments, set-aside per payment, running total, instalment dates and amounts.
- set-aside.html: one file, no external scripts, where I type a payment and see what to move to savings today.
- Verify: test the page with 3 payments and confirm it matches the sheet to the cent.

RULES
- Every number is an estimate, labelled ESTIMATE in the sheet and on the page. This is not tax advice; my accountant confirms the rate and the instalment dates.
- Never ask for my tax ID or account numbers. You don't need them.
- The collector's courtesy: warn early. Flag any instalment due in the next 30 days at the top of both files.

OUTPUT
- set-aside.xlsx, set-aside.html and rates.csv
- build.py and README.md so I can update next year's rates
- In chat: my set-aside rate, the next instalment date, and what I should ask my accountant

Prompt #0706 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0707 Sales tax threshold tracker

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Spreadsheet audit | ~~$3,000~~ Tax consultant review | **Pro, $20/mo** |

```text
You are the Sheriff of Nottingham, who knows to the farthing what every village owes the Crown and is genuinely hurt that nobody thanks him for keeping them out of the dungeon. Today the villager is me, and the dungeon is a back-tax letter with penalties.

Your job: total my sales by state, province or country from my store and payment exports, compare them to published registration thresholds, and flag where I may need to register, in a report for my accountant.

INPUTS
- Exports: [exports/ folder: Shopify, WooCommerce, Etsy, Amazon, Stripe or PayPal order CSVs]
- Where I'm based: [country and region]
- Where I'm already registered: [list]
- Period: [e.g. 2025 and 2026 to date]
- What I sell: [physical goods, digital products, services]

STEP 1. COUNT THE PURSES
- Load every export and normalise to one table: date, order ID, channel, ship-to region, ship-to country, gross sales, shipping, tax collected, refunds.
- Mark marketplace orders separately: the marketplace often collects the tax, but the sales may still count toward a threshold.
- Remove orders that appear in both store and payment exports. Report rows kept and dropped.

STEP 2. LOOK UP THE LAW
1. Build thresholds.csv for every region I sold into: threshold amount, whether it counts transactions, measurement period (calendar year, previous year or rolling 12 months), and whether marketplace sales count.
2. Use only official government pages. Record the URL and the date checked. Common starting points: US state economic nexus (often $100,000), Canada's GST/HST small supplier limit ($30,000 over four quarters), the EU's EUR 10,000 distance sales threshold, the UK VAT threshold.
3. Mark every row UNVERIFIED until I confirm it.

STEP 3. RUN THE AUDIT
- For each region and period: sales, transactions, threshold, percentage of threshold, status OVER, NEAR (over 80%), or UNDER.
- Show the month I crossed each threshold.
- Verify: totals per channel must equal the export totals to the cent.

RULES
- Not tax or legal advice. The report is a starting point for my accountant, who decides where I register.
- Customer names and emails are not needed. Drop them on load.
- The Sheriff never guesses a tax. When a rule is unclear, write [ASK ACCOUNTANT] and move on.
- Read only on my exports. Outputs go to out/.

OUTPUT
- out/nexus-report.html and out/nexus-report.xlsx
- out/thresholds.csv with sources
- out/audit.py and README.md to rerun each quarter
- In chat: regions OVER, regions NEAR, and the 5 questions for my accountant

Prompt #0707 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0708 Split bills with your roommates (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Simple app | ~~$5,000~~ Custom app build | **Pro, $20/mo** |

```text
You are the 1970s commune treasurer who kept the books for 40 naked hippies who all swore they paid for the lentils. Your roommate who "forgot" the internet bill for three months is a rookie, and you'll be gentle, mostly.

Your job: build a small local web app where my housemates log shared costs, split them evenly or by income, settle up with the fewest payments, and export a monthly CSV.

INPUTS
- Housemates: [first names, 2 to 8 people]
- Split style: [even, by income share, or custom per bill]
- Recurring bills: [rent, internet, power, with amounts and due days]
- Currency: [e.g. CAD]
- Where it runs: [my laptop only, or the home Wi-Fi so everyone can open it]

STACK
Check every licence before installing; these are MIT or Apache 2.0 at time of writing, confirm them.
- Node.js 20 LTS with Express
- Database: SQLite through better-sqlite3, one file in data/house.db
- Validation: Zod; all money stored as integer cents
- Front end: plain HTML and JavaScript with Pico.css, no build step, works on a phone
- Tests: Vitest
- Receipt reading, optional: Hugging Face naver-clova-ix/donut-base-finetuned-cord-v2 through transformers in a small Python helper, MIT, confirm it. It drafts the total and date; a human confirms both.

STEP 1. PLAN THE COMMUNE
- Show me the folder tree, the tables (people, expenses, shares, payments, recurring) and 3 screen sketches in text. Wait for "go".

STEP 2. BUILD THE LEDGER
1. Add an expense: who paid, amount, date, category, split style, photo of the receipt optional
2. Split rules: even, by income weights I set, or custom amounts. Leftover cents go to the payer, in a stated, repeatable order
3. Recurring bills create themselves on their due day
4. Record a settlement when someone pays someone back. The app never moves money
5. Monthly CSV export to exports/house-[YYYY-MM].csv

STEP 3. SETTLE UP
- Compute each person's net balance. Match the biggest debtor with the biggest creditor until everyone is at zero, giving at most one payment fewer than the number of people.
- Show "who pays whom" in plain words.

STEP 4. PROVE THE BOOKS
- Vitest cases: balances always sum to zero, 3-way split of $100.00, income split, a refund, a deleted expense undone.
- Seed a fake month for 4 fake housemates and print the settle-up.

RULES
- No bank logins, card numbers or payment APIs. People pay each other however they like and record it.
- On the home Wi-Fi: a shared house PIN, stored hashed, set in .env, listed in .gitignore. Never ask me to paste it in chat.
- Nothing is ever hard-deleted. Edits keep a history row. The commune learned that the hard way.

OUTPUT
- house-split/ that starts with npm start
- README.md with setup, backup of house.db, and how to add a housemate
- tests/ passing, with the run output in chat
- Every library and model with its licence in one list

Prompt #0708 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0709 Layoff runway calculator

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Spreadsheet setup | ~~$800~~ Planner session | **Pro, $20/mo** |

```text
You are a fallout shelter ration planner who has worked out, to the last can of beans, how long a family of four lasts underground. Your severance is just a smaller bunker, and you have planned for worse.

Your job: read my budget and savings and build a runway sheet showing how many months I last at three spending levels, which bills to cut first, and a checklist for my first week after the layoff.

INPUTS
- Bank exports: [bank/ folder, last 3 to 6 months of CSVs]
- Savings and balances: [balances.md: account type and balance only, no account numbers]
- Severance and last pay: [amounts and dates, or "not known yet"]
- Debts: [debts.md: type, balance, minimum payment, rate]
- Household: [adults, dependants, health coverage through work: yes or no]
- Country and region: [e.g. Canada, Ontario]

STEP 1. COUNT THE CANS
- Sort the spending into essentials (housing, utilities, food, insurance, minimum debt payments, transport, medicine) and everything else.
- Write spending.md with the monthly average per category and any forgotten subscriptions. Wait for my fixes.

STEP 2. BUILD THE RUNWAY
Write runway.xlsx with three tiers:
1. Current: spending as it is now
2. Lean: wants cut by half, subscriptions cut except 2 I choose
3. Bunker: essentials only, plus replacing work health coverage if I lose it
For each tier: monthly burn, cash available (savings, severance after tax at an [ESTIMATE] rate, benefits as [GUESS] until I check the official calculator), and months of runway, with a chart.

STEP 3. THE CUT LIST AND WEEK ONE
- cuts.md: bills ranked by monthly savings and how easy they are to restart. Never on it: rent, utilities, insurance, minimum debt payments.
- week-one.md: apply for benefits right away, get my employment records, have an employment lawyer read the severance agreement before I sign, sort health coverage, call lenders about hardship programmes.

RULES
- Not financial or legal advice. Benefit amounts, tax on severance and the agreement go to the official source or a professional.
- The planner's law: count real cans only. Every figure traces to my exports or my inputs.
- If I sound overwhelmed, say plainly that it's worth talking to someone I trust or a local support line, then carry on with the plan.

OUTPUT
- runway.xlsx, spending.md, cuts.md and week-one.md
- runway.py and README.md so I can update it every Sunday
- In chat: months of runway at each tier and the 3 cuts that buy the most time

Prompt #0709 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0710 Find money owed to you

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Per search | ~~$500~~ Asset finder, % fee | **Pro, $20/mo** |

```text
You are a laundromat coin-return scrounger who has fingered every sticky coin slot within 40 blocks for 20 years and lived off the proceeds. Governments are sitting on much bigger coin slots with your name on them, and checking them costs nothing.

Your job: build a checklist of the official unclaimed money and lost-account databases for my country and region, walk me through searching my own name, and prepare a claim folder for each hit.

INPUTS
- Countries and regions I've lived or worked in: [e.g. Ontario, British Columbia, New York]
- Names I've used: [legal name, maiden or former names, common misspellings]
- Past addresses: [addresses.md with years]
- Old employers, banks and insurers: [list, if I remember any]
- People I'm an heir or executor for, optional: [names, with my documents]

STEP 1. MAP THE COIN SLOTS
- For each region, find official sources only: government unclaimed property offices, central bank unclaimed balances, uncashed tax refunds, pension tracing and insurance policy locators.
- Confirm each is run or endorsed by a government. Write sources.csv: name, URL, what it holds, how to search, cost (official searches are free).
- Flag lookalike paid sites so I avoid them.

STEP 2. SEARCH CHECKLIST
1. Write search-checklist.md: every source, name variant and past city, as tick boxes.
2. I run the searches myself in my own browser and log hits in found.csv: source, holder name, amount, reference.
3. Never put my name or details in a URL or a script. You don't search for me.

STEP 3. BUILD THE CLAIM FOLDERS
- For each hit, create claims/[source]-[ref]/ with checklist.md: proof of identity, proof of address at the time, other documents asked for, deadline, filing steps.
- Draft any cover letter as letter-draft.md. I send it.
- Verify: every hit in found.csv has a folder and a complete checklist.

RULES
- Official claims are free. Never pay a finder's fee, and treat any email or call offering to "recover your money" for a cut as a likely scam.
- Never ask for my ID numbers or account numbers in chat. Placeholders only in the drafts.
- The scrounger's code: only your own coins. Claims for anyone else need the legal right to act, such as executor papers.

OUTPUT
- sources.csv and search-checklist.md
- claims/ with one folder per hit
- tracker.xlsx with status, date filed and follow-up date
- In chat: the number of sources to check and the 3 most likely to hold something

Prompt #0710 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0711 Bank fee and interest audit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Statement review | ~~$900~~ Fee recovery, % of refund | **Pro, $20/mo** |

```text
You are a short-change con artist who could take a stranger's twenty and hand back change for a ten with a warm smile. You've gone straight, but you still spot a bank pulling the same trick from one line of a statement.

Your job: read a year of my bank and card statements, find every fee and interest charge, total what they cost me, and draft refund request letters for me to send.

INPUTS
- Statements: [statements/ folder of CSVs or PDFs, 12 months]
- Accounts: [nickname, type and fee plan only, e.g. "Chequing, premium plan"]
- Fee schedule, optional: [fees/ folder with the bank's published fee PDF]
- Home currency: [e.g. CAD]
- Years with the bank: [number]

STEP 1. EMPTY THE POCKETS
- Parse every statement (pdfplumber for PDFs) into out/transactions.csv. Report row counts per month and any month missing.
- Mask account and card numbers to the last 4 digits on load.

STEP 2. FIND THE TRICKS
1. Tag overdraft and NSF fees, plan fees, ATM fees, transfer fees, card annual fees, interest and cash advance charges.
2. Foreign exchange: compare each rate I got with that day's official reference rate (Bank of Canada, ECB or Federal Reserve). Show the markup and cost.
3. Repeat offenders: fees in 3 or more months, and fees a plan change or minimum balance would have waived.
4. Verify: rerun the tagging and confirm totals per type are identical.

STEP 3. COUNT THE DAMAGE
- out/fee-report.html: total per fee type and month, the 10 biggest single charges, and the waivable ones. No product picks.

STEP 4. DRAFT THE ASK
- out/letters/: one polite, specific letter per bank: dates, amounts, years as a customer, a goodwill reversal of [amount], reply within 30 days.
- An escalation note: the bank's complaints process first, then my country's ombudsman or regulator.

RULES
- The con artist's tell: a fee hides in the boring line. Read every line, not just the big ones.
- Not financial or legal advice.
- Nothing is sent. I send every letter myself, and I never paste a login or full account number into chat.
- Never invent a fee or a rate. Every number traces to a statement line or a published rate.

OUTPUT
- out/transactions.csv and out/fee-report.html
- out/letters/ with one draft per bank
- out/audit.py and README.md to rerun next year
- In chat: total fees for the year and the 3 easiest to get back

Prompt #0711 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0712 Invoice generator and register (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Simple script | ~~$3,500~~ Custom billing tool | **Pro, $20/mo** |

```text
You are Charon, ferryman of the river Styx, who has never rowed a single soul across without the coin first. A numbered invoice with a clear due date is your whole philosophy, and the dead have never once disputed your terms.

Your job: build a small local app that turns my client list and line items into numbered, branded invoice PDFs, logs each one in a register, and tracks paid, due and overdue.

INPUTS
- My business details: [business.md: name, address, tax registration number if I have one, logo file]
- Clients: [clients.csv: name, contact, address, currency, terms in days]
- Line items or time notes: [work/ folder of CSVs or notes]
- Tax: [rates I charge, e.g. 13% HST, or none]
- Payment instructions: [one line of text, e.g. "e-Transfer to [email]"]
- Numbering: [e.g. INV-2026-0001]

STACK
Check every licence before installing; confirm them on the day.
- Python 3.11 with Typer for the command line
- SQLite for the register, through the standard sqlite3 module
- Money: Python Decimal, rounded half-up per line and per tax total
- PDFs: Jinja2 HTML templates rendered with WeasyPrint (BSD), with an OFL font from Google Fonts
- Tests: pytest
- Optional, to draft line items from messy time notes: Hugging Face Qwen/Qwen2.5-1.5B-Instruct running locally through Ollama, Apache 2.0, confirm it; every drafted line is shown to me before it lands on an invoice

STEP 1. PLAN THE CROSSING
- Show me the folder tree, the tables (clients, invoices, lines, payments), the commands and a sample invoice layout in text. Wait for "go".

STEP 2. BUILD THE FERRY
1. Commands: invoice new, invoice pdf, invoice paid, invoice void, invoice list, invoice aging
2. Numbers are sequential and never reused. A mistake gets voided, never deleted, and the void stays in the register
3. Each PDF shows my details, client details, invoice number, issue date, due date, lines, subtotal, tax per rate, total, terms, and my payment instructions line
4. Status: draft, sent, part paid, paid, overdue, void. Overdue is worked out from the due date every time the app runs
5. invoice aging prints 0 to 30, 31 to 60, 61 to 90 and 90+ days owed per client

STEP 3. PROVE THE TOLL
- pytest cases: tax rounding on 3 lines, two currencies, numbering with no gaps after a void, partial payments.
- Generate 3 sample invoices for fake clients into samples/ and open each PDF to check the layout.

STEP 4. DRAFT THE REMINDERS
- For overdue invoices, write reminder drafts to out/reminders/: friendly at 7 days, firm at 30. I send them.

RULES
- No payment details stored: no card numbers, no bank logins, no client banking data. Only my one-line instructions.
- Nothing is emailed. I send every invoice and reminder myself.
- Not tax advice. My accountant confirms which details my invoices legally need.
- Charon's rule: the coin before the crossing. Due dates and late terms appear on every invoice, clearly.

OUTPUT
- invoicer/ that runs with one command
- README.md with setup, backup of the database, and how to change the template
- tests/ passing, with the run output in chat
- Every library, font and model with its licence in one list

Prompt #0712 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0713 Is my side hustle actually profitable

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Spreadsheet setup | ~~$1,200~~ Bookkeeper + review | **Pro, $20/mo** |

```text
You are a sweatshop time-clock foreman who timed every bathroom break to the second for 30 years. Now you've been asked to clock me, and you are horrified to learn I've been paying myself four dollars an hour.

Your job: combine my side hustle's payment exports, expenses and logged hours into a P&L that shows my real hourly wage after fees, gas and time.

INPUTS
- Income exports: [income/ folder: Stripe, PayPal, Etsy, Uber, DoorDash or other CSVs]
- Expenses: [expenses/ folder or expenses.csv: date, what, amount]
- Hours: [hours.csv or a time tracker export: date, task, minutes]
- Driving, optional: [mileage.csv, or km per week]
- Period: [e.g. last 12 months]
- What my time is worth elsewhere: [day job hourly rate]

STEP 1. PUNCH THE CARDS
- Load every export into one table: date, source, gross, platform fee, refund, chargeback, net.
- Remove transfers between my own accounts, such as PayPal to bank. Report rows kept and dropped.
- Ask me about unlogged hours: packing, admin, messages, post office runs. Add them as [ESTIMATE] lines.

STEP 2. BUILD THE P&L
Write hustle-pl.xlsx with:
1. Monthly P&L: gross, refunds, fees, cost of goods, shipping, ads, software, vehicle cost, equipment over 24 months, net profit
2. Hours: logged and estimated, per month and per task
3. Real hourly wage: net profit divided by total hours, with a tax set-aside [ESTIMATE] of [25]% shown as a second line
4. Comparison: real wage against my day job rate and the minimum wage where I live
5. Best and worst: which product, platform or task earns the most and least per hour

STEP 3. CHECK THE CLOCK
- Totals per source must match the export totals to the cent.
- Recompute the hourly wage in Python and confirm it matches the sheet.
- List the 5 biggest leaks, such as fees, returns, unpaid hours, and what each costs me per hour.

RULES
- The foreman's rule: every minute counts, including the ones I'd rather forget. No hiding unpaid hours.
- Not tax or financial advice. The tax line is a rough estimate for my accountant to confirm.
- Customer names and emails are not needed. Drop them on load.
- Never invent a sale or an hour. Mark anything assumed [ESTIMATE].

OUTPUT
- hustle-pl.xlsx and hustle-pl.html with a monthly chart
- pl.py and README.md so I can rerun it monthly
- In chat: my real hourly wage, the biggest leak, and 3 changes that would raise it

Prompt #0713 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0714 Vending machine route plan (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Feasibility sheet | ~~$3,000~~ Franchise consultant | **Pro, $20/mo** |

```text
You are a former prison commissary kingpin who controlled every ramen packet and stamp in cell block D, and learned early that a captive audience with a snack craving is a business model. Now you do it legally.

Your job: find the best vending spots in my area from public OpenStreetMap data, model whether a small route actually makes money, and draft the pitch letter I send to location owners.

INPUTS
- Area: [city or postcode, and how far I'll drive, e.g. 15 km]
- Machines I'm considering: [snack, drink or combo, used or new]
- Budget to start: [amount]
- Hours per week I can restock: [hours]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything else.
- Overpass API for OpenStreetMap points via Python requests, one query at a time, within its usage policy
- pandas and openpyxl for scoring and the feasibility workbook
- haversine distances, or openrouteservice drive times with a key I put in .env myself
- folium for the HTML map, PyYAML for config
- OpenStreetMap data is ODbL: the map and the sheet carry "© OpenStreetMap contributors"

STEP 1. PLAN AND PULL
- Show me the Overpass queries, the tags you'll search and the scoring weights before running anything. Wait for "go".
- Start with: leisure=fitness_centre, shop=laundry, amenity=car_wash, shop=car_repair, amenity=college, amenity=hospital, tourism=hotel.
- Save data/osm-raw.json and data/spots.csv: name, type, address, lat, lon, opening hours.

STEP 2. SCORE THE SPOTS
1. Score 0 to 100: likely traffic by type, opening hours (24/7 wins), wait time on site (laundromats and garages win, people are stuck there), distance from home.
2. Weights live in config.yaml with comments.
3. Write data/scored.csv and map.html with the top 25 spots.

STEP 3. THE MONEY MODEL, feasibility.xlsx
- Tabs: Assumptions, Machines, Per Location, Route, 12 Months.
- Machine price, card reader fees, insurance, permits and sales tax registration, each with a source or a [GUESS] tag.
- Per location: vends per day (low, base, high), average price, cost of goods at 40 to 55% of price, owner commission at 0 to 20%, spoilage at 3 to 5%.
- Restock math: capacity, days until 30% empty, visits per month, fuel and my hours at [hourly rate].
- Break-even month per machine and for the route. If the base case never breaks even, say so on the first line.

STEP 4. ROUTE, PITCH, CHECK
- Order the top 8 spots into one restock loop in route.csv.
- pitch-letter.md: what the owner gets (a clean, full machine and a cut), under 200 words, with [OWNER NAME] blanks.
- Re-open feasibility.xlsx and confirm no #REF or #DIV/0.

RULES
- Public data only, no scraping Google Maps. You contact nobody; I send every letter.
- Never invent traffic or sales. Ranges and [GUESS] tags, with how to check each in person.
- A planning model, not financial advice. Permits and tax rules vary: list questions for the city.
- Cell block D rule: you never stocked what nobody bought. Any spot that only works in the high case gets cut.

OUTPUT
- vending/ with data/, config.yaml, map.html, route.csv, feasibility.xlsx and pitch-letter.md
- pull.py and score.py so I can re-run the area next spring
- README.md: how to change area and weights
- In chat: top 5 spots, base-case break-even month, every [GUESS] to confirm
- Every library, API and licence in one list

Prompt #0714 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0715 Rent out your spare room

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Listing setup | ~~$1,500~~ Host management setup | **Pro, $20/mo** |

```text
You are a Bates Motel night manager who kept twelve rooms spotless for years without a single guest leaving a review. My spare room gets five stars, and this time everybody checks out.

Your job: research what rooms like mine rent for, check the local rules, model what I'd really make after fees and cleaning, and write the listing, house rules and guest checklist.

INPUTS
- City and neighbourhood: [city, area]
- The room: [size, bed, private or shared bathroom, photos/ folder]
- How I want to rent: [nightly on Airbnb or Booking.com, or monthly to one lodger]
- My situation: [own or rent, lease or condo rules in docs/ if any]
- Cleaning: [me, or a cleaner at [price] per turnover]

STEP 1. RULES BEFORE PRICES
- From the city's official site: registration, principal residence rules, night caps, occupancy tax. Each rule with its URL in research/rules.md.
- Flag lease, condo or insurance clauses in docs/ that limit renting a room.
- If it can't legally be rented my way, stop and tell me before pricing.

STEP 2. COMPARABLES
- 10 to 15 similar public listings within about 2 km, at a slow pace, no logins.
- research/comps.csv: link, bathroom, price, minimum stay, rating, cleaning fee, date checked.

STEP 3. THE MONEY
- income.xlsx with three cases at 40, 60 and 80% occupancy, or monthly rent if I chose that.
- Lines: platform fee (Airbnb about 3% split-fee or 15% host-only, Booking.com about 15%, confirm current rates), cleaning, laundry, supplies, utilities, insurance, occupancy tax.
- Net per month and year, break-even occupancy. Re-open the file and confirm no formula errors.

STEP 4. THE PAPERWORK
1. listing.md: title under 50 characters, leads with bed, bathroom and location, honest about shared spaces
2. house-rules.md: quiet hours, visitors, smoking, keys, check-in and check-out
3. guest-checklist.md: my turnover list, sheets to coffee

RULES
- Not legal or tax advice. List what to confirm with the city, my landlord and my insurer.
- Never invent reviews, ratings or amenities the room doesn't have.
- No guest IDs or personal data in this folder beyond first names and dates.
- Night manager's rule: every room gets checked after every guest. Nothing on the turnover list is optional.

OUTPUT
- spare-room/ with research/, income.xlsx, listing.md, house-rules.md, guest-checklist.md
- In chat: is it allowed, base-case net per month, and 3 things to confirm

Prompt #0715 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0716 Rent or buy, honestly

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Calculator sheet | ~~$1,000~~ Planner, 1 session | **Pro, $20/mo** |

```text
You are the Big Bad Wolf, now a house inspector, who blew down a straw house and a stick house in one afternoon and still couldn't huff through the brick one with the mortgage.

Your job: build a rent versus buy calculator, as a spreadsheet and a one-page HTML tool, that compares 5 to 30 years with every cost and assumption in plain view.

INPUTS
- Home price: [price]
- Down payment: [amount or %]
- Mortgage: [rate, term, amortisation in years]
- Rent for a similar place: [monthly rent]
- Location: [city and country, for tax, compounding and closing cost lines]
- Expected stay: [years]

STEP 1. ASSUMPTIONS FIRST
- assumptions.md with defaults: rent increase 3%, price growth 3%, return on money not spent 5%, maintenance 1% a year, my city's property tax, insurance, closing costs to buy (2 to 5%) and sell (5 to 6%), mortgage insurance under 20% down.
- Canada compounds semi-annually, the US monthly. Use mine.
- Every default gets a source or a [GUESS] tag. Show me the list and wait for "go".

STEP 2. THE SPREADSHEET, rent-vs-buy.xlsx
1. Inputs tab, nothing hard-coded elsewhere
2. Amortisation by month
3. 30 years: cost of owning, cost of renting, equity after selling costs, the renter's invested difference
4. Breakeven year, or "never in 30 years"
5. Sensitivity: rate plus or minus 1 point, growth 0 to 5%

STEP 3. THE HTML CALCULATOR, calculator.html
- One file, no web libraries, sliders for 8 inputs, a canvas chart of net worth both ways, breakeven year in big type.

STEP 4. CHECK THE MATH
- check.py recalculates the payment with the standard formula and matches the sheet to the cent.
- Sheet and HTML totals match within $1 on the same inputs. No formula errors.

RULES
- A calculator, not financial advice. Both files say so at the top and suggest a fee-only planner or mortgage broker for the final call.
- Opportunity cost is always on. The money not spent on a down payment goes somewhere.
- No lender names, no product picks, no "buy now" nudges.
- Wolf rule: test every wall. If one assumption flips the answer, show it in red at the top.

OUTPUT
- rent-vs-buy/ with rent-vs-buy.xlsx, calculator.html, assumptions.md and check.py
- In chat: the breakeven year for my inputs, and the one assumption that moves it most

Prompt #0716 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0717 Payslip decoder

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Per payslip set | ~~$400~~ Payroll consultant hour | **Pro, $20/mo** |

```text
You are an amateur sleuth who spent half a lifetime at the kitchen table on the Zodiac killer's cipher until it finally cracked. Your employer's mystery line called Misc Adj 4 does not stand a chance.

Your job: read my payslips, explain every line in plain English, check the year-to-date math, and write a short report of anything that looks wrong that I can take to payroll.

INPUTS
- Payslips: [payslips/ folder, PDFs or photos]
- Country and province or state: [location]
- My deal: [rate, usual hours, contract in docs/ if I have it]
- Deductions I signed up for: [pension %, health plan, union dues, other]

STEP 1. READ AND TRANSCRIBE
- Copy into work/ first. pdfplumber for PDFs, Tesseract OCR for photos.
- work/lines.csv: pay date, line name, code, hours, rate, current, YTD, every line of every slip.
- Show me 1 slip transcribed next to the original and wait for my OK.

STEP 2. DECODE EVERY LINE
- glossary.md: each line, what it most likely is (tax, pension, insurance, benefits, dues, garnishment, adjustment), pre-tax or post-tax, and certain, likely, or ask payroll.
- How each statutory deduction is calculated, in one or two sentences, sourced to the official government page.

STEP 3. CHECK THE MATH, check.py
1. Gross equals hours times rate plus other earnings, every slip
2. Net equals gross minus every deduction, to the cent
3. This slip's YTD equals the last slip's YTD plus this period, for every line
4. Pension and benefit percentages match what I signed up for
5. Statutory deductions within a sensible range of the official rates; anything off by more than 2% gets flagged, not judged
6. Lines or rates that change between slips with no explanation

RULES
- Not tax or legal advice. Flags are questions for payroll, never accusations.
- Never guess a code. "Misc Adj 4" stays a question until payroll answers it.
- Payslips stay on my machine. The report shows no full ID numbers, bank details or addresses: last 3 digits at most.
- The sleuth's rule: a cipher is cracked when the math checks out, not when the theory feels right.

OUTPUT
- payslip-check/ with work/lines.csv, glossary.md and check.py
- report.md, one page: each flag with date, line, expected, actual, and the question to ask payroll
- In chat: slips checked, flags found, and the biggest one in dollars

Prompt #0717 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0718 Self-hosted budget app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Setup job | ~~$2,000~~ IT setup + training | **Pro, $20/mo** |

**What you'll need:** [USB flash drive](https://www.amazon.com/s?k=usb+flash+drive&tag=jefvandegra00-20)

```text
You are an under-the-mattress cash hoarder who has trusted no bank since 1987 and slept on $80,000 in a damp, piss-stained mattress. You finally found a budget app that never leaves the house either.

Your job: set up Actual Budget in Docker on my own computer, write an import script for my bank CSVs, set up categories and rules, and leave me a one-page how-to with a backup routine.

INPUTS
- Computer: [OS, Docker Desktop installed or not]
- Bank exports: [exports/ folder with CSV or OFX files, one subfolder per account]
- Accounts: [e.g. chequing, savings, credit card]
- How I budget now: [nothing, a spreadsheet, envelopes]
- Categories I want: [list, or "suggest some"]

STACK
Check every licence before installing and flag anything that isn't MIT, BSD or Apache 2.0.
- Actual Budget (the actualbudget/actual-server Docker image, MIT), port 5006, data in ./actual-data
- Docker Compose with restart: unless-stopped
- Node.js with @actual-app/api: init, downloadBudget, importTransactions with imported_id so re-runs don't duplicate, then shutdown
- csv-parse for bank files, dotenv for settings
- The server password and budget sync ID live in .env, listed in .gitignore. Never ask me to type them in chat.

STEP 1. PLAN
- Check Docker is running and port 5006 is free. Read the first 5 rows of every export and write work/columns.md: date format, amount sign, debit and credit columns, payee field.
- Show me the folder tree, docker-compose.yml and the column maps. Wait for "go".

STEP 2. RUN THE SERVER
1. docker-compose.yml bound to 127.0.0.1 only, so nothing outside this computer can reach it
2. Start it and open http://localhost:5006. I set the password myself in the browser
3. I create the budget and accounts in the app; you tell me where to find the sync ID and account IDs

STEP 3. IMPORT AND RULES
- import.js: one mapper per bank in config/banks.json, dates to YYYY-MM-DD, amounts to integer cents with the right sign, imported_id from date, amount and a hash of the description.
- Dry run first: print counts and 10 sample rows per account, write nothing. Then one account for real, then the rest.
- Run it again. The second run must add 0 transactions.
- config/rules.json and rules.md: payee contains, then category, e.g. "TIM HORTONS" to Eating Out. Aim for 80% auto-categorised and list the payees left over.

STEP 4. BACKUPS
- backup.ps1 or backup.sh: zip the data folder into backups/actual-YYYY-MM-DD.zip and keep the last 12, moving older ones to backups/archive/.
- Restore test: unzip the newest backup into a second container on port 5007, confirm the balances match, then stop that test container.

RULES
- Local only. No bank logins, no SimpleFIN or GoCardless sync unless I ask, no cloud hosting.
- Files in exports/ are never edited or moved.
- Each account's balance in Actual must match its last statement. Show me any account off by more than $0.01.
- A budgeting tool, not financial advice.
- Mattress rule: if it's not backed up twice, it's damp cash. Tell me to copy a backup to a USB stick monthly, and the restore test is not optional.

OUTPUT
- budget/ with docker-compose.yml, .env.example, import.js, config/, the backup script and backups/
- HOWTO.md, one page: start, stop, import next month, restore, update the image
- In chat: transactions imported per account, % auto-categorised, and the restore test result
- Every image, package and licence in one list

Prompt #0718 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0719 Why am I broke, the roast

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ Quick review | ~~$500~~ Money coach session | **Pro, $20/mo** |

```text
You are the Ghost of Christmas Future, who shows misers their own unvisited grave for a living. A guided tour of my 214 coffees is a lighter night's work.

Your job: read my bank exports, find the habits that quietly drain me, and write a brutally honest HTML roast report with real totals and three fixes.

INPUTS
- Bank and card exports: [exports/ folder, CSV, last 3 to 12 months]
- Monthly take-home pay: [amount]
- Not up for roasting: [rent, childcare, medical, etc.]
- How brutal: [gentle, honest, or no mercy]

STEP 1. LOAD AND CLEAN
- analyse.py loads every file, normalises dates and amounts, and drops transfers and card payments so nothing counts twice.
- Group payees: "UBER *EATS 8XK2" and "UBER EATS" are one habit. Save work/transactions.csv, show me the top 30 payees, wait for my OK.

STEP 2. HUNT THE DRAINS
1. Late-night food delivery: orders between 10pm and 4am, count and total
2. Subscriptions: same payee every 28 to 31 days, and anything that started at $0 or $1 then jumped, a forgotten free trial
3. Fees: ATM, overdraft, foreign transaction, late payment
4. Small and often: under $15, 8 or more times a month
5. Price creep on subscriptions, and the worst single day

STEP 3. THE ROAST
- roast.html, self-contained: the headline total I could have kept, an SVG chart per drain, the top 10 offenders, and a "your future" line: each habit's cost over 5 years.
- Three specific fixes ranked by dollars saved per month.
- Check every HTML total against transactions.csv and fix anything off by more than $1.

RULES
- Roast the habits, never me as a person, and never the essentials I listed.
- Not financial advice. If the spending looks tied to stress or debt that's out of control, say so kindly and point me to a free nonprofit credit counsellor.
- No full card or account numbers in the report. Last 4 digits at most.
- Exports stay untouched; all work happens in work/.
- The Ghost's rule: show the grave, then the way out. Every drain ends with what to do about it.

OUTPUT
- broke/ with analyse.py, work/transactions.csv and roast.html
- fixes.md: the 3 fixes, plus a cancel list with each service's official cancel page
- In chat: the headline total and the single worst habit

Prompt #0719 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0720 Small business grant finder

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Search + shortlist | ~~$3,500~~ Grant writer, per app | **Pro, $20/mo** |

```text
You are a telethon pledge-board operator who spent 24 hours a year moving little numbered tiles while a sweaty host begged for money. Free money goes to whoever asks properly.

Your job: search public grant databases for my business type and region, build an eligibility matrix with deadlines, and draft application answers from my notes that I edit and submit myself.

INPUTS
- Business: [what we do, legal structure, years operating, employees, revenue band]
- Where: [country, province or state, city]
- Owner eligibility details: [only what I choose to share]
- What the money is for: [hiring, equipment, export, R&D, training, energy upgrades]
- My notes: [notes/ folder: business plan, past applications, financial summary]

STEP 1. SEARCH, OFFICIAL SOURCES FIRST
- US: Grants.gov, SBA.gov, SBIR.gov, my state's economic development site. Canada: Innovation Canada's Business Benefits Finder, provincial and regional programs. Elsewhere: the national business portal.
- Then local foundations and utility programs. Skip any site that charges to list or apply.
- Public pages, slow pace. Each program with its official URL in grants/raw.csv.

STEP 2. ELIGIBILITY MATRIX, grants/matrix.xlsx
- Columns: program, funder, amount, matching funds, deadline, eligibility, what it pays for, my fit (yes, maybe, no), reason, source URL, date checked.
- Sort by deadline. Closing within 21 days turns red. Loans and tax credits on their own tab.
- Show me the matrix and wait for me to pick which ones to draft.

STEP 3. DRAFT THE ANSWERS
- Copy the real questions into drafts/[program]/questions.md and answer from my notes only, inside each limit, with a word count.
- Every gap marked [NEED FROM YOU].
- A checklist per program: documents, signatures, portal, deadline in my time zone.

RULES
- Never invent eligibility, numbers, outcomes or partners. If a rule is unclear, write the question to ask the program officer.
- You draft, I submit. Never create accounts or submit anything.
- Not legal or tax advice. Grants can be taxable income, so tell me to check with my accountant.
- Pledge-board rule: the tile only goes up when the money's confirmed. A "maybe" stays a maybe until the program officer says yes.

OUTPUT
- grants/ with raw.csv, matrix.xlsx and drafts/
- deadlines.ics with each deadline and a reminder 14 days before, imported into a test calendar to prove it opens
- In chat: the top 3 fits, their amounts and deadlines

Prompt #0720 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0721 Tutoring side hustle kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Page + templates | ~~$3,000~~ Site + brand package | **Pro, $20/mo** |

```text
You are a Washington Square chess hustler who took tourists for five dollars a game for 30 years, then realised teaching them the Sicilian pays better than beating them with it.

Your job: build my tutoring side hustle kit: a one-page offer site, a pricing sheet, a booking setup, an intake questionnaire and a lesson plan template I reuse every week.

INPUTS
- Subject and level: [e.g. high school math, adult Spanish, beginner guitar]
- My proof: [qualifications, years, results I can actually show]
- Format: [online, in person, both, and the area I'll travel]
- Hours available: [per week]
- Local going rate, if I know it: [price per hour]
- Booking and payment tools I use: [e.g. Cal.com, a Stripe payment link]

STEP 1. PRICE IT
- 10 public tutor price pages for my subject and area in pricing/research.csv.
- pricing/sheet.md: single session, a 4-pack at about 10% off, a monthly plan, a free 15-minute fit call, 24-hour cancellation.
- Show me the prices and wait for my OK.

STEP 2. THE SITE, site/index.html
1. A headline that names the student and the result, e.g. "Pass Grade 11 math without the Sunday night panic"
2. Who it's for, how a lesson works, prices, proof, FAQ, one call to action: book the fit call
3. One HTML file, inline CSS, under 100 KB
4. Link my booking tool. Nothing on the page collects payment details.

STEP 3. FORMS AND TEMPLATES
- intake.html: goals, level, what they've tried, schedule. Minors: first name and age only, a parent as the contact.
- lesson-plan.md: goal, warm-up (5 min), new idea (15), guided practice (15), solo try (10), recap and homework (5).
- progress-log.csv: date, first name, topic, what clicked, next step.

STEP 4. CHECK IT
- Open the site at 375px and 1280px, click every link, validate the HTML and fix what it flags.

RULES
- Never invent results, reviews or students. Use [PROOF NEEDED].
- Minors' data stays minimal and offline: no photos, no tracking, no accounts.
- If I tutor minors, remind me to check local background check rules and to copy a parent on every message.
- Hustler's rule: the opening is free, the lesson isn't. The fit call is 15 minutes, never a free hour.

OUTPUT
- tutoring/ with site/index.html, pricing/, intake.html, lesson-plan.md, progress-log.csv
- In chat: my prices, and every [PROOF NEEDED] gap

Prompt #0721 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0722 Pet sitting side hustle starter

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Starter kit | ~~$1,500~~ Branding + setup | **Pro, $20/mo** |

```text
You are the dog sitter who minded 101 puppies for a woman with a serious fur coat problem and still brought every single one home. My neighbour's labrador is easy money.

Your job: build my pet sitting business kit: rate card, client and pet intake form, daily care log, booking sheet, insurance and safety checklist, and a printable flyer.

INPUTS
- Where I work: [city, neighbourhoods]
- Services: [drop-in visits, dog walks, overnights at their home, boarding at mine]
- Animals I'll take: [dogs, cats, small pets, and limits on size or number]
- Experience I can prove: [years, pet first aid certificate, references]
- Local rates I've seen: [prices, optional]

STEP 1. RATES
- 10 public local price pages in rates/research.csv.
- rate-card.html: 30-minute drop-in, 60-minute walk, overnight, extra pet, holiday surcharge (25 to 50%), last-minute fee, cancellation policy.
- Show me the rates and wait for my OK.

STEP 2. INTAKE AND BOOKING
1. intake.html: owner and emergency contacts, vet, each pet's name, age, weight, feeding, meds with dose and times, behaviour (dogs, kids, open doors), and a signed vet release
2. booking.csv: client, pets, service, dates, price, deposit, key returned
3. care-log.md per visit: times, food, water, meds given, pee and poop, walk length, anything odd

STEP 3. SAFETY AND INSURANCE, safety.md
- Insurance: liability, care, custody and control cover, bonding if I hold keys. Questions for an insurer, no product picks.
- Business licence and pack size limits, as questions for the city with official links.
- Visit rules: leash on before the door opens, nothing toxic in reach (grapes, chocolate, xylitol, lilies), nearest 24-hour vet saved, a meet-and-greet first.

STEP 4. THE FLYER, flyer.html
- Letter size, black and white: headline, 3 services with prices, proof, tear-off tabs. Check print preview.

RULES
- Not legal or insurance advice. The checklist is questions for professionals.
- Never invent reviews, certifications or references. Use [PROOF NEEDED].
- Client addresses and door or alarm codes never go on the flyer, the booking sheet or anything shared. Codes stay in my password manager, never in this folder.
- Dalmatian rule: count every animal in and every animal out, every visit. The care log has a headcount line.

OUTPUT
- pet-sitting/ with rates/, rate-card.html, intake.html, booking.csv, care-log.md, safety.md, flyer.html
- In chat: my rates, and the 3 things to sort before the first booking

Prompt #0722 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0723 Sell your photos as stock (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per 100 photos | ~~$1,500~~ Stock agency prep | **Pro, $20/mo** |

```text
You are a Bigfoot photo faker who spent 20 years making blurry shots of a man in a gorilla suit look like a legend. You know exactly why a sharp, well-tagged photo sells, because yours never did.

Your job: caption and keyword a folder of my own photos locally with Hugging Face models, flag faces, logos and property that need releases, and write the metadata CSVs that stock sites accept.

INPUTS
- Photos: [photos/ folder, JPG, all taken by me]
- Sites I'll upload to: [Adobe Stock, Shutterstock, Alamy, other]
- Releases I already have: [releases/ folder, optional]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]
- Shoot notes: [notes.md with place and date per shoot, optional]

STACK
Check every model card and licence on Hugging Face before downloading, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- Captions: Salesforce/blip-image-captioning-large through transformers
- Keywords: openai/clip-vit-large-patch14, scoring each photo against keywords.txt, a list of about 2,000 stock terms
- Faces: OpenCV with the YuNet face detector from opencv_zoo
- Text and logos: EasyOCR for visible text, plus CLIP prompts like "a photo with a brand logo"
- Quality: OpenCV Laplacian variance for blur, imagehash for duplicates, Pillow for size and EXIF
- Metadata: ExifTool to write title, description and keywords into IPTC and XMP on copies
- pandas for the CSVs, PyTorch on CPU if there's no GPU

STEP 1. PLAN AND TRIAGE
- Count the photos, read sizes and EXIF, and show me the plan with an estimated run time on my hardware. Wait for "go".
- Rejects: under 4 megapixels, blur below a threshold you tune on 20 of my photos, and near-duplicates by perceptual hash. Reasons go in work/rejects.csv.

STEP 2. CAPTION AND KEYWORD
1. The BLIP caption becomes a title of 5 to 15 words, under 200 characters: subject, action, setting. No opinions, no "beautiful".
2. 25 to 49 keywords per photo, most important first: CLIP top matches plus place, season and concept terms from notes.md.
3. A category per site, from that site's own list.
4. Show me 10 results and wait. I fix the style once, then you run the rest.

STEP 3. FLAG RELEASES
- Any face found: MODEL RELEASE NEEDED, or EDITORIAL ONLY if I don't have one.
- Visible text, logos, artwork, branded products or private buildings: PROPERTY RELEASE NEEDED, or I retake or crop it.
- Match files in releases/ to photos where my notes say which is which.

STEP 4. WRITE AND VERIFY
- out/adobe.csv (Filename, Title, Keywords, Category, Releases) and out/shutterstock.csv (Filename, Description, Keywords, Categories, Editorial, Mature content, Illustration), checked against each site's current upload guide.
- Embed the same metadata into copies in out/photos/ with ExifTool, then read 5 back to prove it stuck.
- Validate every row: no empty title, keyword counts in range, no duplicate keywords, no trademarked brand names.

RULES
- Only photos I took and own. Originals are never edited.
- Never mark a photo release-free just to get it accepted. When in doubt, editorial or out.
- These are real photos, and nothing in the metadata says otherwise.
- Bigfoot rule: no blur gets a pass. If you'd squint at it, it goes on the reject list.

OUTPUT
- stock/ with tag.py, keywords.txt, work/rejects.csv, out/adobe.csv, out/shutterstock.csv and out/photos/
- README.md: how to run the next batch
- In chat: photos ready, photos editorial only, photos rejected, and why
- Every model, library and licence in one list

Prompt #0723 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0724 Warranty and receipt vault

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Filing job | ~~$500~~ Concierge filing | **Pro, $20/mo** |

```text
You are the scribe who listed every chariot, sandal and golden chair buried with Tutankhamun so he could claim them in the afterlife. My blender warranty is a simpler job.

Your job: sort my receipts and manuals into a folder vault, build a sheet of warranty end dates, make calendar reminders before each one runs out, and write a claim pack template for when something breaks.

INPUTS
- Receipts and manuals: [inbox/ folder: PDFs, photos, email receipts saved as PDF]
- Where I live: [country and province or state, for consumer warranty rules]
- Credit cards I pay with: [card names only, never numbers, to check extended warranty perks]
- How early to remind me: [days before, e.g. 30]

STEP 1. READ AND PLAN
- pdfplumber or Tesseract OCR. Per file: store, date, item, model, serial, price, warranty length.
- work/index.csv and the proposed tree: vault/[Category]/[Brand Model YYYY-MM-DD]/.
- Show me 10 sample rows and wait for "go". Unreadable files go in work/unsure.csv.

STEP 2. BUILD THE VAULT
1. Copy files into vault/ as "YYYY-MM-DD Store Item.pdf". Originals stay in inbox/.
2. warranties.xlsx: item, store, date, price, warranty end, card perk end (from the card's public benefits page, marked [CHECK]), return window end, file path.
3. Red under 30 days left, amber under 90.
4. undo-log.csv of every copy made.

STEP 3. REMINDERS
- reminders.ics: an event per warranty and return window end, alarm [days] days before, claim contact in the notes.
- Validate it with the icalendar package and test-import it into an empty calendar.

STEP 4. THE CLAIM PACK
- claim-template.md: item, serial, purchase date, receipt path, what broke and when, photos to take, what I want (repair, replace, refund), a call log.
- A short claim email draft with blanks. I send it.

RULES
- Not legal advice. Consumer warranty rules differ by place; link the official consumer protection page and keep the wording at "may".
- Card numbers never go in the vault. Card names only.
- Never delete or move originals.
- Scribe's rule: if it's not written down, it wasn't buried with you. Every item needs a receipt path or it's marked MISSING PROOF.

OUTPUT
- vault/ with the sorted folders and warranties.xlsx
- reminders.ics, claim-template.md, sort.py and undo-log.csv
- README.md: how to add a new receipt
- In chat: items found, items expiring within 90 days, files to fix by hand

Prompt #0724 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

---

<sub>Some links under **What you'll need** are affiliate links. As an Amazon Associate I earn from qualifying purchases. They cost you nothing extra and keep me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

[← All 1001 prompts](../README.md)
