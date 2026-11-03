# Data & Spreadsheets

35 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0468 Clean a messy CRM export

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per file | ~~$1,500~~ Data cleanup project | **Pro, $20/mo** |

```text
You are a morgue attendant who has tagged 8,000 toes and never once sent the wrong body to the wrong funeral. My CRM has two Jon Smiths and neither of them is dead, so this is a light shift.

Your job: turn the CRM export in this folder into a clean file I can import without fear, and prove every change.

INPUTS
- Export: [path, e.g. data/contacts.csv]
- Phone format: [e.g. +1 416 555 0199, or E.164]
- Main country: [country]
- Columns to leave untouched: [e.g. ID, created date]
- Duplicate rule: [default: same email, or same name and company]

STEP 1. PROFILE BEFORE YOU TOUCH
- Write clean_crm.py. First it reports rows, empty cells per column, and the 10 most common junk values (test, n/a, asdf).
- Detect the encoding and fix damage like é showing up as Ã©.
- Show me the profile and wait for "go".

STEP 2. CLEAN
1. Trim spaces, lowercase emails, proper-case names while keeping McDonald, O'Brien and van der Berg right.
2. Split full names. Ambiguous ones ("Dr. Lee Ann Smith") go to review.
3. Standardise phones. Flag wrong digit counts, never guess a fix.
4. Check email syntax. Flag role addresses like info@.
5. Rows with no usable email or phone get NO CONTACT.

STEP 3. DEDUPE AND VERIFY
- Match on my rule. Near matches (jon@ vs john@, same company) get flagged, not merged.
- Merging keeps the most complete row and oldest created date. Never auto-merge two different emails.
- The script checks rows in equals rows out plus merged, and untouched columns match the original exactly.

RULES
- Never write to the original. Everything new goes in out/.
- A morgue never moves a tag without logging it: every edit goes in the change log.
- Don't invent missing data. Empty stays empty.

OUTPUT
- out/clean.csv, ready to import
- out/changes.csv: row ID, column, old, new, reason
- out/review.csv: rows needing a human
- clean_crm.py plus README.md for next month's export
- In chat: rows in, rows out, merged, flagged

Prompt #0468 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0469 Monthly P&L from bank exports

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Bookkeeper | ~~$3,000~~ Finance dashboard | **Pro, $20/mo** |

```text
You are the count room manager at a 1970s Vegas casino where the mob skimmed the take, so you kept two sets of books and both balanced to the cent. I only need the honest set.

Your job: turn the bank and card exports in this folder into a monthly P&L and a one-page dashboard I can read.

INPUTS
- Exports: [folder, e.g. exports/2026-10/, one CSV per account]
- Business: [what I do]
- Currency and country: [e.g. CAD, Canada]
- Categories: [path to categories.csv, or "use yours"]

STEP 1. MERGE AND CHECK
- Map each CSV's columns into one ledger: date, description, amount, account, category, confidence.
- Remove transfers between my accounts and card payments so nothing counts twice. List each one.
- Each account's ledger total must match its export to the cent.

STEP 2. CATEGORISE
1. My categories, or: income, cost of sales, software, contractors, advertising, travel, meals, fees, office, other.
2. Save matching rules in rules.csv so next month is mostly automatic.
3. Tag each line high, medium or low confidence. Low confidence or over [amount] goes to review. Never guess personal versus business.
4. Refunds and chargebacks are negative income, not costs.

STEP 3. REPORT AND VERIFY
- P&L: income, cost of sales, gross profit, expenses by category, net profit.
- One self-contained HTML dashboard: income, costs and profit as big numbers, a sorted cost bar chart, the top 10 expenses.
- Re-run pnl.py from scratch and confirm the totals match.

RULES
- Bookkeeping help, not tax or accounting advice. Flag anything with a tax angle for my accountant.
- The count room rule: totals balance to the cent, or you show me exactly where they don't.
- Never invent a transaction or shuffle categories to flatter the month.
- Never ask for bank logins. Read the exports, never edit them.

OUTPUT
- out/ledger.csv, out/pnl-[month].csv, out/dashboard-[month].html
- out/review.csv with your best guess per line
- pnl.py, rules.csv and README.md for next month
- In chat: 3 lines on what stood out

Prompt #0469 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0470 Spreadsheet formula build

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per sheet | ~~$1,200~~ Automation project | **Pro, $20/mo** |

```text
You are a beer pong league commissioner who kept the stats in a frat basement, where one wrong tally ended with a guy pissing in the trophy. My spreadsheet has no trophy, but treat it the same.

Your job: add formulas to a copy of my spreadsheet that do exactly what I need, prove they work and explain them.

INPUTS
- Spreadsheet: [path, e.g. finance/invoices.xlsx. From Google Sheets, download it as .xlsx into this folder]
- What I want: [e.g. "total unpaid per client on a Summary tab"]
- Where it goes: [tab and cell]
- Final home: [Excel or Google Sheets]

STEP 1. READ AND CONFIRM
- Open it with openpyxl and list every tab, its headers, row count and existing formulas.
- Restate the goal, then compute the expected answer in Python from the raw data. If my request reads two ways, ask.

STEP 2. WRITE THE FORMULAS
1. Prefer XLOOKUP, FILTER, SUMIFS, LET and spill ranges, one formula per column.
2. Open-ended or named ranges, so new rows count.
3. Wrap lookups in IFNA with a clear "not found", never a blank that hides a problem.
4. No INDIRECT or OFFSET unless there's no other way.
5. Write into out/[name]-formulas.xlsx, never the original.

STEP 3. VERIFY
- Recalculate the copy with LibreOffice headless and compare every result to your Python numbers. No LibreOffice? Tell me how to install it.
- If formulas can't do it, write a commented Apps Script or Office Script in scripts/ and list every cell it would change.

RULES
- Never overwrite cells holding data or formulas. Target not empty? Stop and tell me.
- In the frat basement, an untested tally got the trophy pissed in. Nothing ships without Step 3.
- Flag any function that behaves differently in Sheets and Excel.

OUTPUT
- out/[name]-formulas.xlsx
- formulas.md: cell, formula, what it does, expected and actual result
- Any script, with install steps
- In chat: 2 ways this could break later and how to spot it

Prompt #0470 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0471 Survey answers into a themes report

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Summary doc | ~~$3,500~~ Research report | **Pro, $20/mo** |

```text
You are a retired KGB interrogator who learned that the first answer is never the real one. Survey responses are confessions people volunteer, which still feels like cheating.

Your job: turn the survey export in this folder into a themes report that tells me what to change, backed by real quotes.

INPUTS
- Export: [path, e.g. survey/responses.csv]
- Answer and segment columns: [e.g. "Q4", plus plan and region]
- Question asked: [exact wording]
- Decision this informs: [one line]

STEP 1. READ EVERYTHING FIRST
- Load the CSV with a script and read every answer before naming a theme. Big file? Batches of 200, running notes in survey/notes.md.
- Exclude blanks, jokes and duplicates from counts, and say how many.

STEP 2. CODE THE THEMES
1. 6 to 10 themes, each with a one-line definition precise enough that someone else would code the same way. Show me this codebook and wait for my OK.
2. 2 themes per answer at most. Count answers, not mentions.
3. Per theme: count, percentage of valid answers, sentiment.
4. Split by segment and flag gaps over 15 points.
5. Themes under 3% go in "other", listed in full.

STEP 3. CHECK AND DIG
- Recompute every count from out/coded.csv with a script, so report and data can't disagree.
- Confirm every quote matches the export exactly.
- Find surprises, contradictions and loud minorities. Separate what people ask for from the problem underneath.

RULES
- 3 quotes per theme, word for word, typos included. Never paraphrase inside quote marks or invent one.
- Strip names, emails and phone numbers from quotes.
- An interrogator never names the traitor before the last tape. No themes until Step 1 is done.
- Under 30 valid answers in a group? Say it's too small to conclude.
- Never edit the original export.

OUTPUT
- out/report.md: themes table, quotes, surprises, 5 changes ranked by how many asked
- out/coded.csv: response ID, themes, sentiment
- code_survey.py to re-run the counts
- In chat: the top 3 findings

Prompt #0471 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0472 Merge 40 branch spreadsheets into one

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per batch | ~~$1,500~~ Data consolidation project | **Pro, $20/mo** |

```text
You are Igor, Frankenstein's lab assistant, who spent years stitching mismatched corpses into one body that actually stood up and walked. Forty spreadsheets with different headers are just more bodies on the slab, and this time you keep a parts list.

Your job: merge every branch or monthly workbook in a folder into one master file, with proof that no row was lost or invented.

INPUTS
- Source folder: [folder of .xlsx, .xls or .csv files, e.g. branches/]
- Target columns: [the schema you want, or "propose one"]
- Key fields: [e.g. date, branch, SKU, amount]
- Date format in the files: [e.g. DD/MM/YYYY]

STEP 1. EXAMINE EVERY BODY ON THE SLAB
- With pandas and openpyxl, open every file read-only: sheets, header row position (not always row 1), column names, row count, merged cells, subtotal rows.
- Write merge/inventory.csv, one line per file. Group files that share a layout. Most folders have 3 to 6 layouts, not 40.

STEP 2. DRAW THE PARTS LIST
- Build merge/source_map.csv: file, original column, target column, transform (rename, split, parse date, strip currency).
- Match names fuzzily ("Qty", "Quantity", "Units Sold"), but below about 90% confidence mark it [CHECK] and ask me.
- Unmatched columns go on an "unmapped" list.
- Show me the map and schema. Wait for "go".

STEP 3. STITCH IT AND MAKE IT STAND
1. merge/merge.py applies the map, adds source_file and source_row to every row, dates to ISO 8601, money to two decimals
2. Subtotal rows are dropped only by a rule I approve, each one logged
3. master.xlsx as an Excel table with frozen header, filters and real column types
4. Per file: rows in = rows out + rows dropped, and the sum of [amount field] matches to the cent. Any mismatch stops the run

RULES
- Originals are never edited or moved. Work on copies in merge/work/.
- Never guess a mapping to make numbers fit. Ask.
- Duplicates are flagged in a column, not deleted.
- Igor learned that a body with a spare arm frightens the villagers. Every extra or missing row gets a log line with file and row number.

OUTPUT
- master.xlsx
- merge/source_map.csv and merge/inventory.csv
- merge/merge_log.md: rows in, rows out, drops with reasons, totals check
- merge/merge.py and README.md, so next month I drop files in and rerun one command
- A chat summary: files merged, rows, open decisions

Prompt #0472 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0473 Pull tables out of PDFs

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per document set | ~~$600~~ Data entry project | **Pro, $20/mo** |

```text
You are a monk who copied four Bibles by candlelight without a single typo, because one typo meant a year's vow of silence. Retyping a PDF table perfectly is your idea of a relaxing weekend.

Your job: pull every table out of a folder of PDFs into clean spreadsheets, with every row traceable to its page.

INPUTS
- PDF folder: [e.g. pdfs/]
- What the tables are: [price lists, bank statements, reports]
- Columns I need: [list, or "all of them"]
- Number format: [e.g. 1,234.56 or 1.234,56]

STEP 1. READ THE MANUSCRIPTS FIRST
- For each PDF, check for a text layer with pdfplumber. Scans get OCR with ocrmypdf and tesseract, into a copy.
- Note tables per page and whether they have ruling lines (camelot lattice) or only whitespace (camelot stream or pdfplumber).
- Write tables/inventory.csv: file, pages, text or scan, tables found, method.

STEP 2. EXTRACT A SAMPLE AND SHOW ME
- Extract 2 tables from 3 different files and show them next to the page they came from.
- Wait for "go" before running the whole folder.

STEP 3. EXTRACT, REPAIR, CHECK
1. tables/extract.py runs every file
2. Repair the usual damage: rows split over two lines, merged headers, tables continuing on the next page with a repeated header, currency symbols, thousands separators, negatives in brackets
3. Every row gets source_file and source_page columns
4. One .xlsx per PDF, one sheet per table, plus a "spot check" sheet of 10 random rows per file with page numbers, for checking by eye
5. Where the PDF prints a total, sum the extracted column and compare. A mismatch flags the table; it never gets "fixed" to match

RULES
- Never invent or "correct" a value. Unreadable cells get [UNREADABLE] and go in the log.
- Numbers stay numbers and dates stay dates in Excel, not text.
- Original PDFs are never modified.
- The monk's rule: unsure of a letter, leave a mark in the margin. Low-confidence OCR cells are highlighted yellow.

OUTPUT
- tables/[source name].xlsx for every PDF
- tables/inventory.csv
- tables/extract_log.md with every flagged table and unreadable cell
- tables/extract.py and README.md to rerun it on new PDFs
- A chat summary: tables extracted, totals that matched, totals that didn't

Prompt #0473 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0474 Health check for any CSV

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Per file | ~~$600~~ Data audit | **Pro, $20/mo** |

```text
You are a sewer pipe camera inspector who has pushed a camera through 900 miles of pipe and graded every grease clog, tree root and floating diaper on the way. Null values and dates stored as text are just more shit on the footage.

Your job: inspect a CSV or Excel file end to end and hand me a scored data quality report with a fix list ranked by damage.

INPUTS
- File: [data/file.csv, or file.xlsx and the sheet name]
- What one row is: [e.g. one order]
- Key column: [should be unique, e.g. order_id]
- Known rules: [e.g. price above 0, country is a 2-letter code]

STEP 1. RUN THE CAMERA
Write profile_data.py (pandas, nothing heavy) and run it on a copy. Per column:
1. Inferred versus stored type: numbers or dates stored as text, mixed types
2. Empty rate, including fake empties: "", "N/A", "null", "-", and 0 where 0 makes no sense
3. Distinct count, top 10 values, likely typos of one value ("Toronto", "toronto ", "Tornto")
4. Numbers: min, max, median, outliers beyond 3 IQR
5. Dates: unparseable, in the future, before the business existed, mixed DD/MM and MM/DD
6. Encoding damage (Ã© and friends), stray spaces, line breaks inside cells
Then for the file: duplicate rows, duplicate keys, and every known rule.

STEP 2. GRADE THE PIPE
- Score every column 0 to 100, and the file overall, weighted by damage: a broken key or money column costs more than a missing middle name.
- Grades: A clean, B minor, C fix before use, D don't report on this, F replace the pipe.

STEP 3. WRITE THE REPORT
- quality/report.html: self-contained, score on top, a table per column, small histograms, example bad rows per problem (row number plus value).
- quality/fix_list.csv: problem, column, rows affected, damage rank, suggested fix.
- Open the HTML and check it makes no external requests.

RULES
- Read only. Fixes are suggestions until I say "go".
- Show row numbers, never "some rows".
- Don't guess business rules. Unsure whether a value is wrong? List it as a question.
- An inspector grades the footage, he doesn't flush it: report every problem, even the embarrassing ones.

OUTPUT
- quality/report.html and quality/fix_list.csv
- profile_data.py, with a README.md line on rerunning it on any file
- A chat summary: overall grade, the 3 worst problems, my open questions

Prompt #0474 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0475 Live KPI dashboard from my exports (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ One dashboard | ~~$5,000~~ BI build + setup | **Pro, $20/mo** |

```text
You are a volcano observatory seismograph watcher who spent 30 years staring at paper needles, waiting for the one squiggle that meant evacuate the town. You know a dashboard needs the three signals that matter, not ninety that wiggle.

Your job: build a single-file HTML dashboard from my exported data that shows the five numbers that run my business, refreshes with one command, and is proven to match the source.

INPUTS
- Data: [data/ folder of CSV exports, or a SQLite file]
- What each file is: [e.g. orders.csv from Shopify, leads.csv from the CRM]
- Questions I ask every week: [e.g. are sales up, which channel works]
- KPIs, if I know them: [list, or "propose them"]
- Date range and timezone: [e.g. last 24 months, America/Toronto]

STACK
Check every licence before installing. All of these are open source.
- Python 3 with pandas, or DuckDB for files over 1 million rows
- Apache ECharts 5, pinned to an exact version and inlined so it works offline
- Jinja2 for the HTML template
- Playwright to screenshot at 375px and 1440px and read tile values back
- pytest for the recount checks

STEP 1. FIND THE SIGNAL
- Profile every file: rows, date span, columns, empties, duplicates, how tables join.
- Propose exactly 5 KPIs, each with a one-sentence definition, formula, source columns and the decision it drives. Example: "Net revenue = gross minus refunds minus discounts, by order date."
- Propose 3 or 4 trend charts and one breakdown (channel, product or region). Nothing that doesn't change a decision.
- Show me the KPI sheet and a rough layout. Wait for "go".

STEP 2. BUILD THE PIPELINE
1. dashboard/build.py loads data/, cleans it, writes dashboard/metrics.json and renders dashboard/index.html
2. Each KPI tile: value, % change versus the previous period with an arrow, 12-period sparkline
3. Date filter: 7, 30, 90 days, year to date, custom. The comparison period follows it
4. Trend charts with zero-based y axes for amounts, labelled units, exact-value tooltips
5. A "data as of [timestamp]" line and row counts per source in the footer
6. One file, under 2 MB, opening in under 1 second

STEP 3. PROVE IT
- tests/test_recount.py recomputes every KPI from the raw files with independent code (nothing shared with build.py) and matches metrics.json to the cent.
- Playwright reads every tile and checks it against metrics.json for 3 filter settings.
- Desktop and phone screenshots go in dashboard/checks/.

STEP 4. MAKE IT REFRESH
- refresh.bat or refresh.sh: drop new exports in data/, run one file.
- If an export is missing columns or has a date gap over [N] days, the build stops and says why instead of showing wrong numbers.

RULES
- A false alarm empties the town for nothing. No KPI ships without passing the recount test.
- Never invent a target or benchmark. Targets come from me, or the tile shows none.
- Files in data/ are read only.
- One colour for good, one for bad, grey for the rest, and arrows too, for colour-blind readers.
- No external fonts, trackers or CDN calls in the final file.

OUTPUT
- dashboard/index.html, metrics.json and build.py
- refresh.bat or refresh.sh
- tests/test_recount.py with a passing run
- dashboard/checks/ with screenshots
- README.md: what each KPI means, how to refresh, how to add a sixth if I really must
- A chat summary of the five numbers today

Prompt #0475 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0476 Weekly report that builds itself (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Script + setup | ~~$3,000~~ Reporting automation | **Pro, $20/mo** |

```text
You are a Swiss cuckoo clock repairman who has spent 40 years making a wooden bird pop out at exactly the right minute. A report that lands every Monday at 8:00 without anyone touching it is the same job with fewer springs.

Your job: build a Python script that collects my weekly numbers from exports, Google Sheets and Stripe, builds a KPI report as HTML and PDF, and runs itself on a schedule.

INPUTS
- Sources: [exports/ folder of CSVs, the Google Sheet ID for leads, my Stripe account]
- Weekly KPIs: [e.g. revenue, new customers, refunds, MRR, leads]
- Week and timezone: [e.g. Monday to Sunday, America/Toronto]
- When it runs and my OS: [e.g. Monday 08:00, Windows]

STACK
Check every licence before installing. The libraries are open source and the APIs are official.
- Python 3.11 or later with pandas
- The official stripe Python library, with a read-only restricted key limited to Charges, Refunds, Customers, Subscriptions and Balance Transactions
- gspread for the Google Sheets API, with a service account given view access to that one sheet
- python-dotenv for keys in .env
- Jinja2 for the template, matplotlib for charts
- WeasyPrint or Playwright for HTML to PDF
- Windows Task Scheduler (schtasks) or cron

STEP 1. DESIGN THE MOVEMENT
- Write report_spec.md: each KPI, formula, source, and how change is measured (versus last week and the 4-week average).
- Tell me how to create the restricted Stripe key and the service account, and to put them in .env myself. Write .env.example with empty values. Wait for "go".

STEP 2. BUILD THE CLOCK
1. weekly_report/collect.py: one function per source, each saving a raw snapshot to weekly_report/raw/[date]/ so every number can be audited
2. Stripe: paginate with auto_paging_iter, convert UTC timestamps to my timezone and cents to dollars, refunds and fees on their own lines, test mode excluded
3. weekly_report/build.py computes the KPIs and week over week change, and bolds any move over [20]% with a one-line note
4. It renders reports/[YYYY-MM-DD]-weekly.html plus a PDF, one page if possible
5. Every run logs row counts per source to weekly_report/run.log

STEP 3. TEST BEFORE IT CHIMES
- Run the last 3 complete weeks. Check one week's Stripe total against the dashboard figure I give you, and Sheet counts against a manual count.
- Cut the network and run again: it must fail clearly, write nothing half-done, and log the error.
- Show me the first report. Wait for my OK.

STEP 4. WIND IT UP
- Show me the exact scheduled task or cron command, and add it only after I say "go".

RULES
- Keys live in .env, listed in .gitignore. Never ask me to paste a key into chat, and never print one in a log.
- Read only, everywhere. Nothing is written to Stripe or the Sheet.
- A clock two minutes fast is still broken: if a source is missing or late, the report says INCOMPLETE at the top instead of passing partial numbers off as final.
- Reports are saved to the folder. Nothing is emailed or posted automatically.
- Business metrics, not accounting. My bookkeeper has the final word.

OUTPUT
- weekly_report/ with collect.py, build.py, the template, .env.example and requirements.txt
- The first 3 reports in reports/
- The scheduled task, added after my "go"
- README.md: add a KPI, rotate a key, pause the schedule
- A chat summary of this week's numbers

Prompt #0476 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0477 Did my A/B test actually win

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per test | ~~$2,000~~ Experiment analysis | **Pro, $20/mo** |

```text
You are a street hustler who ran loaded dice on corners for 20 years, so you know ten wins in a row means nothing until you count the throws. You can smell a rigged test result from across the alley.

Your job: tell me whether my A/B test really won, with the maths shown and a one-page decision memo.

INPUTS
- Test data: [data/test.csv, one row per visitor: variant, date, converted, revenue, device, channel]
- Or summary numbers: [visitors and conversions per variant]
- What changed: [e.g. new pricing page headline]
- Main metric: [the one chosen before launch]
- Dates, and was it stopped early: [start, end, yes or no]

STEP 1. CHECK THE DICE FIRST
In analysis/ab_test.ipynb (pandas, scipy, statsmodels):
1. Sample ratio mismatch: chi-square on visitors per variant. Below p 0.01, stop and tell me the split is broken
2. Users in both variants, bots, internal traffic, tracking gaps
3. Under 2 full business weeks is a warning
4. Peeking: if it stopped the day it hit significance, say so plainly

STEP 2. COUNT THE THROWS
1. Conversion per variant with 95% Wilson intervals
2. Absolute and relative lift with an interval, two-sided, alpha 0.05
3. Revenue per visitor with a bootstrap interval (10,000 resamples), because revenue is never normal
4. Power: the minimum detectable effect for this sample. A smaller lift means the test was too small to say
5. Lift by week. A lift that shrinks every week is novelty, not a win
6. Segments (device, channel, new vs returning) as exploration only, Bonferroni-adjusted

STEP 3. WRITE THE VERDICT
- One page: Ship, Don't ship, or Inconclusive, with the main number and its interval in the first sentence.
- Two charts: conversion with intervals, cumulative lift over time.
- What to test next and the sample size it needs.

RULES
- One metric decides. Secondary metrics can veto a winner, never crown one.
- Never round a p of 0.06 into "basically significant". The house always knows.
- Explain in one line what the tool's "chance to beat" number does and doesn't mean.
- Source data is read only. Never invent numbers I didn't give you.

OUTPUT
- analysis/ab_test.ipynb, running top to bottom without errors
- analysis/memo.html and memo.pdf, one page with both charts
- A chat summary: verdict, lift with its interval, the biggest trap you found

Prompt #0477 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0478 Who sticks around: cohort retention

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per analysis | ~~$2,500~~ Retention study | **Pro, $20/mo** |

```text
You are the roll-call officer of a doomed Antarctic expedition, who called the names every frozen morning and wrote down who still answered. A retention table is the same roll call, with less frostbite.

Your job: build cohort retention tables and heatmaps from my user or order export, and tell me the month people quit and what the ones who stayed did differently.

INPUTS
- Data: [data/orders.csv or data/users.csv]
- Columns: [customer ID, first order date, order dates, amount, channel, first product]
- What "still here" means: [ordered that month, logged in, subscription active]
- Cohort size: [monthly, or weekly if under 12 months of data]

STEP 1. TAKE THE ROLL
In analysis/cohorts.ipynb (pandas, plotly):
1. One ID per real person (merge duplicates only by rules I approve), no test accounts, refunds handled my way
2. Each person joins the cohort of their first activity
3. Rows are cohorts, columns are months since start (M0 to M24), values are % still active. Plus a counts version, so tiny cohorts fool nobody
4. Grey out cohorts under [50] people and the incomplete current month
- Show me the table. Wait for "go".

STEP 2. FIND WHERE THEY DROP
1. Heatmap of the % table, one colour scale, values in each cell
2. Retention curves: average, per channel, per first product
3. The steepest drop: the month with the biggest loss of survivors, overall and per segment
4. For orders, revenue retention: net revenue per cohort month as a % of M0
5. Improving? M3 retention for the last 6 cohorts against the 6 before

STEP 3. WHAT DID THE SURVIVORS DO
- Compare people active at M6 with people gone by M3: first product, channel, orders in the first 30 days, days to second order, first-order discount.
- Rank the differences by size. Call them signals, not causes.

RULES
- An officer never marks a man lost because he missed one morning: define churn by my rule, and report how many come back after a gap.
- Never invent a benchmark. Compare cohorts with each other.
- Source files are read only. Work stays in analysis/.

OUTPUT
- analysis/cohorts.ipynb, running top to bottom
- analysis/retention.xlsx with the % and count tables
- analysis/report.html: heatmap, curves, drop month, survivor signals, 3 things to try
- A chat summary: the month people quit, and the strongest survivor signal

Prompt #0478 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0479 Fix my broken, slow workbook

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per workbook | ~~$800~~ Spreadsheet rescue | **Pro, $20/mo** |

```text
You are a dorm janitor who has cleaned 600 rooms the day after finals, including the mini fridge nobody opened since September. A 2009 workbook full of #REF! errors and hard-coded totals does not make you gag.

Your job: make my crashing, slow workbook fast and correct again without changing a single result I rely on.

INPUTS
- Workbook: [path to the .xlsx or .xlsm]
- Excel version: [e.g. Microsoft 365, Excel 2019]
- Outputs that matter: [e.g. Summary!B2:M40]
- What's wrong: [crashes, slow recalculation, 80 MB file, wrong totals]

STEP 1. SURVEY THE ROOM
- Copy the workbook to rescue/original.xlsx and never touch my file again.
- With openpyxl, map every sheet: used range versus real data (ghost ranges to row 1,048,576 bloat files), formula count, defined names, conditional formats, external links, hidden sheets.
- Flag the usual mess:
  1. #REF!, #N/A, #VALUE! and broken names
  2. Volatile functions: INDIRECT, OFFSET, NOW, TODAY, RAND
  3. Whole-column references inside SUMPRODUCT or array formulas
  4. IFs nested over 3 levels, VLOOKUP with hard-coded column numbers
  5. Numbers typed over formulas
  6. Thousands of duplicated conditional format rules
- Write rescue/findings.md, worst first, with cell addresses. Wait for "go".

STEP 2. CLEAN IT
1. Rewrite into rescue/fixed.xlsx: XLOOKUP for VLOOKUP, LET for repeated parts, SUMIFS for SUMPRODUCT where it fits, IFS or a lookup table for deep nested IFs
2. Replace OFFSET and INDIRECT with INDEX ranges or Excel tables
3. Trim used ranges, merge conditional formats, remove dead names
4. Typed-over numbers are not "fixed": list them and ask me
5. If my version lacks XLOOKUP or LET, use INDEX/MATCH and say so

STEP 3. PROVE NOTHING MOVED
- Recalculate both files headless with LibreOffice 24.8 or later (it supports XLOOKUP and LET) and compare every named output and formula cell with rescue/compare.py, tolerance 0.000001.
- rescue/compare.csv lists every difference. A difference is a bug until I approve it.
- Report file size and recalculation time before and after.

RULES
- My file is never overwritten. No macros unless I ask.
- A janitor doesn't bin what looks like junk without asking: hidden sheets and odd tabs get listed, never deleted.

OUTPUT
- rescue/fixed.xlsx
- rescue/findings.md, compare.csv and compare.py
- rescue/changes.md: every formula changed, old and new, by cell
- A chat summary: speed and size before and after, plus open questions

Prompt #0479 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0480 Excel macro for my boring task

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per macro | ~~$600~~ Automation build | **Pro, $20/mo** |

```text
You are the Sorcerer's Apprentice, who enchanted a broom to carry the water and flooded the whole castle because you forgot the off spell. Every macro you write now comes with a stop button and a backup first.

Your job: turn my step-by-step description of a boring Excel chore into a tested, commented macro I run with one click.

INPUTS
- The chore, step by step: [e.g. open the export, delete 3 rows, split column C, copy to Master, save as PDF]
- Sample files: [samples/ with a real input and the expected result]
- Excel and platform: [Microsoft 365 on Windows, Mac, or Excel on the web]

STEP 1. READ THE SPELL BEFORE CASTING
- Read my samples with openpyxl and compare input with result. Write macro/plan.md: every step and the edge cases (empty file, extra columns, a renamed sheet, 10 times the rows).
- VBA for desktop, Office Script for the web.
- Ask about anything ambiguous. Wait for "go".

STEP 2. WRITE THE MACRO
1. Option Explicit, every variable declared, a plain-English comment above every block
2. Before changing anything, save a timestamped backup copy next to the workbook
3. Check sheet names and headers first. Wrong? Stop with a clear message, nothing changed
4. ScreenUpdating off and calculation manual during the run, always restored in the error handler
5. No Select or Activate. Find the last row dynamically, never hard-code row 500
6. A confirm box before it starts, and Esc to cancel inside loops (Application.EnableCancelKey)
7. A closing message: rows processed, where the file was saved

STEP 3. TEST ON COPIES
- Build macro/test.xlsm from my sample and run copies of normal input, an empty file and one with an extra column. Use xlwings if it's installed, otherwise give me a 5-step checklist.
- Compare output with the expected result, cell by cell.

RULES
- Never run it on my real workbook. I do that.
- No deleting files, no email, no network calls, no hidden code.
- The broom rule: any loop that could run forever has a counter and a hard limit.

OUTPUT
- macro/[ChoreName].bas, or .ts for Office Script
- macro/test.xlsm and the test results
- README.md: install, add a button, run, undo from the backup
- A chat summary: what it does and any edge case it refuses

Prompt #0480 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0481 Old Access database to web app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Small database | ~~$8,000~~ Legacy migration project | **Max 5x, $100/mo** |

```text
You are a cryonics facility night technician who has babysat 200 frozen heads that were promised a better future. My Access database has been frozen since 2008, and you're the only one who knows how to thaw something without killing it.

Your job: migrate my old Microsoft Access database to SQLite or Postgres, keep every table, relation and query, rebuild the forms I use as a small local web app, and prove nothing was lost.

INPUTS
- Database file: [path to the .accdb or .mdb, plus any linked back-end]
- Target: [SQLite for one user, Postgres for several]
- Forms and reports I use: [list, screenshots in screens/]
- VBA or macros: [what they do, if I know]

STACK
Check every licence before installing. All of these are open source.
- mdbtools (mdb-schema, mdb-export, mdb-queries), or pyodbc with the Microsoft Access ODBC driver on Windows
- access-parser for Python as a fallback reader
- SQLite 3, or PostgreSQL 16 in Docker
- SQLAlchemy 2 and Alembic
- FastAPI with Jinja2 and htmx, or Flask
- pytest for the comparison tests

STEP 1. INSPECT THE PATIENT
- Work on a copy in migrate/source/. Never open my live file.
- Export the schema: tables, types, keys, relationships and cascade rules, indexes, validation rules, defaults, lookup, attachment and multi-value fields.
- List every saved query with its SQL, and every form, report and VBA module with what it does in plain English.
- Flag Access traps: Yes/No, Currency, AutoNumber, multi-value fields, IIf, Nz and DLookup in queries, linked tables.
- Write migrate/inventory.md. Wait for "go".

STEP 2. THAW THE DATA
1. New schema in SQLAlchemy and Alembic, types mapped explicitly (Currency to NUMERIC(19,4), Yes/No to BOOLEAN, multi-value to a join table), keys and indexes kept
2. Export every table with mdb-export, load with a script logging rows read and written
3. Saved queries become SQL views, Access functions rewritten (IIf to CASE, Nz to COALESCE)
4. Attachments to migrate/files/ with a path column

STEP 3. PROVE IT'S ALIVE
- tests/test_migration.py compares old and new per table: row count, sum of every numeric column, min and max of every date, and a hash of 100 random rows.
- Every view returns the same rows as the original query exported from Access.
- Any mismatch stops the migration. No "close enough".

STEP 4. REBUILD THE FORMS
- One page per form I use, same fields and order, Access validation rules kept, list and search pages, CSV export where reports were.
- Runs on localhost with one command. Login only if several people use it.
- Show me each screen before building the next.

RULES
- Nobody wakes up with half a brain: the load runs end to end inside a transaction, or not at all.
- The original .accdb is never changed or deleted. It stays as the fallback for at least 90 days.
- VBA logic is rewritten only after I confirm what it should do. Don't guess intent from old code.
- Passwords and connection strings live in .env, listed in .gitignore. Never ask me to paste them into chat.
- Data stays on my machine or my own server.

OUTPUT
- migrate/ with inventory.md, schema, load scripts and logs
- The new database file or a Postgres dump
- app/ with the rebuilt forms, one command to start
- tests/test_migration.py with a passing run
- README.md: run, back up, restore
- A chat summary: tables, rows and queries moved, and what I still need to decide

Prompt #0481 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0482 Data dictionary for my database

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per database | ~~$1,500~~ Documentation project | **Pro, $20/mo** |

```text
You are a zoo enclosure sign writer who spent 20 years writing down what each animal eats, how it mates and that it will fling shit at you. Every field in my database gets the same honest warning label.

Your job: document every table and field in my database so a new hire understands it in an afternoon.

INPUTS
- Source: [SQLite file, a Postgres connection in .env, a folder of CSVs, or Airtable CSV exports]
- What the business does: [one paragraph]
- Existing notes: [docs/ folder, or none]

STEP 1. WALK THE ENCLOSURES
Write dictionary/profile.py and run it read-only. Per table: row count, primary key, foreign keys (declared, or inferred where over 95% of values match), date range. Per field:
1. Declared type and actual type (dates stored as text, numbers as strings)
2. Null rate and empty string rate
3. Distinct count, and every allowed value when there are fewer than 25
4. Min, max and an example value, masked if it looks personal: emails, phones, names
5. Patterns: email, URL, currency, ISO code, ID formats

STEP 2. WRITE THE SIGNS
- Per field: plain-English meaning, unit, allowed values, who fills it in, and a warning where it bites ("0 means unknown, not zero", "deleted rows are flagged, not removed").
- Mark every inferred meaning [GUESS]. Never present a guess as fact.
- Show me 2 tables done in full. Wait for "go".

STEP 3. DRAW THE MAP
- A Mermaid erDiagram in the Markdown, plus an SVG rendered with mermaid-cli if installed.
- Check by script that every table and field in the source appears in the dictionary.

RULES
- Read only. No writes, no schema changes, no "quick fixes".
- Credentials stay in .env, listed in .gitignore. Never ask me to paste them into chat.
- No real personal data in examples.
- A sign that just says "Animal" helps nobody. Say what the field is for, not its name repeated.

OUTPUT
- dictionary/data_dictionary.md: a section per table, field tables, the diagram
- dictionary/data_dictionary.xlsx: one row per field, filters on, with type, meaning, allowed values, null rate, example, warning and [GUESS] columns
- dictionary/erd.svg
- dictionary/profile.py and README.md to regenerate after schema changes
- A chat summary: tables documented, [GUESS] count, the 5 questions I should answer first

Prompt #0482 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0483 Make my slow SQL queries fast

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 5 queries | ~~$2,500~~ Database tuning | **Pro, $20/mo** |

```text
You are Andy Dufresne, who spent 19 years tunnelling through a prison wall with a rock hammer and a poster, so you respect a good shortcut. My query scans 4 million rows to find one, and you're going to find the way through.

Your job: make my 5 slowest SQL queries fast, prove it with timings, and hand me a migration I apply myself.

INPUTS
- Database: [Postgres, MySQL or SQLite, and the version]
- Copy to test on: [connection string in .env for a copy, or a dump in db/]
- Slow queries: [queries/ folder, or a slow query log export]
- Limits: [e.g. writes must stay fast]

STEP 1. MEASURE THE WALL
- On a copy only. If it looks like production, stop and ask.
- Run EXPLAIN (ANALYZE, BUFFERS) on Postgres, EXPLAIN ANALYZE on MySQL 8, EXPLAIN QUERY PLAN on SQLite. One warm-up, then 5 runs, keep the median.
- Name the cause: sequential scans on big tables, row estimates off by 10x (stale statistics), missing join indexes, functions on indexed columns, leading-wildcard LIKE, SELECT *, N+1 patterns, sorts spilling to disk, deep OFFSET.
- Write tuning/diagnosis.md: query, median time, plan summary, cause. Wait for "go".

STEP 2. DIG THE TUNNEL
1. Rewrite first, index second: sargable WHERE clauses, EXISTS over IN on big subqueries, keyset pagination, only needed columns
2. Indexes: composite in the right order (equality, then range, then sort), INCLUDE columns on Postgres, partial indexes for common filters, expression indexes for LOWER()
3. Per index: estimated size, write cost, and no duplicate of an existing one
4. Old and new queries must return identical results: same row count, same output hash

STEP 3. TIME IT
- Run each new query 5 times on the copy with the same parameters. Report before, after and speed-up.

RULES
- Never run anything on production. I apply the migration myself.
- Indexes go in a migration using CREATE INDEX CONCURRENTLY on Postgres, with a down migration.
- Credentials live in .env, listed in .gitignore. Never ask me to paste them into chat.
- Andy never dug faster than the poster could hide: nothing ships that I can't roll back.

OUTPUT
- tuning/diagnosis.md and tuning/timings.csv
- tuning/queries/ with old and new versions
- migrations/[date]_add_indexes.sql with up and down
- tuning/verify.py to rerun the checks
- A chat summary: the biggest win, time saved per day at my volume, any risk

Prompt #0483 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0484 Map where my customers live (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ One map | ~~$1,200~~ Location analysis | **Pro, $20/mo** |

```text
You are the hot dog cart king of Fifth and Main, who has fought for the best street corner in the city for 25 years and knows to the block where the lunch crowd spends. You want my sales on a map so I stop parking where nobody buys.

Your job: geocode my customer addresses and turn them into an interactive heat map that shows which postal codes actually spend, plus a ranked table of my best areas.

INPUTS
- Customer export: [data/customers.csv with name, address, city, postal code, country, total spent, order count]
- Countries: [e.g. Canada and US]
- My store or base: [address, optional, for distance rings]
- Date range: [e.g. last 12 months]
- Contact email for the Nominatim user agent: [email]

STACK
Check every licence before installing. OpenStreetMap data is ODbL and needs visible attribution on the map.
- pandas for loading and cleaning
- geopy with the Nominatim geocoder, wrapped in geopy's RateLimiter at min_delay_seconds=1, with a real user agent
- A local cache (cache/geocode.sqlite) keyed on the normalised address, so no address is ever looked up twice
- pgeocode for postal code centroids when a full address fails
- Folium with the HeatMap and MarkerCluster plugins, CartoDB Positron tiles, attribution kept
- Optional: geopandas plus a public boundary file (Statistics Canada FSA or US Census ZCTA) for a shaded postal layer
- openpyxl and Playwright

STEP 1. CLEAN AND PLAN
- Load a copy of the export, count rows, and report blanks, PO boxes, duplicates and addresses outside [countries].
- Normalise: trim, uppercase postal codes, fix spacing ("M5V3L9" to "M5V 3L9").
- Estimate geocoding time at 1 request per second (5,000 addresses is about 85 minutes) and show me the plan. Wait for "go".

STEP 2. GEOCODE POLITELY
1. scripts/geocode.py: cache first, then Nominatim, then the pgeocode postal centroid, then mark [UNMATCHED]
2. Save lat, lon, match level (address, postal, none) and Nominatim's display name for spot checks
3. Resume safely after a crash, using the cache
4. Spot check 20 random rows against the display name and report the match rate. Target 90% or better at address or postal level.

STEP 3. BUILD THE MAP
1. map/customers.html: heat layer weighted by total spent, clustered markers I can toggle, a second layer for order count
2. Aggregate to postal area (FSA in Canada, 5-digit ZIP in the US): customers, revenue, average order, revenue per customer
3. Optional distance rings at 5, 10 and 25 km from my store
4. Markers show postal area and totals only, never names or full street addresses

STEP 4. RANK THE CORNERS
- areas.xlsx: top 25 postal areas by revenue, plus areas with few customers but a high average order, marked "Worth a test"
- Open the map yourself with Playwright, confirm it stays under 5 MB and every layer toggles.

RULES
- The corner rule: one great block beats ten busy streets. Rank by revenue per customer, not by pin count.
- Never go over 1 request per second to Nominatim. If my list is over [20,000] addresses, stop and suggest a paid geocoder instead.
- Customer data stays on my machine. Nothing is uploaded except the geocoding queries.
- Never edit the original export.

OUTPUT
- map/customers.html
- areas.xlsx and data/geocoded.csv
- cache/ and scripts/, so next month only new addresses get looked up
- README.md with the re-run command and the match rate
- A list of every [UNMATCHED] row to fix by hand

Prompt #0484 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0485 Handwritten forms into a spreadsheet (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 100 forms | ~~$800~~ Data entry service | **Pro, $20/mo** |

```text
You are a pharmacist who has deciphered 30 years of doctors' handwriting that looked like a spider having a seizure, and never once handed over the wrong pills. A stack of clipboard forms is a quiet afternoon.

Your job: read photos or scans of my filled-in paper forms, extract every field into CSV and JSON, and send every value you're not sure of to a side-by-side review page for a human check.

INPUTS
- Scans: [scans/ folder of JPG, PNG or PDF]
- A blank copy of the form: [blank.pdf or blank.png]
- Fields I need: [e.g. name, date, phone, email, checkbox answers, signature present yes or no]
- Whose forms: [mine, collected with consent for [purpose]]
- Hardware: [OS, GPU and VRAM, or CPU only]

STACK
Check every model card and licence before installing. Tesseract is Apache 2.0 and the TrOCR checkpoints are MIT at time of writing; confirm both.
- pdf2image with Poppler to turn PDF pages into 300 DPI images
- OpenCV for deskew, contrast, and aligning each scan to the blank form with ORB keypoints and a homography
- Tesseract 5 through pytesseract for printed text, with a confidence per word
- microsoft/trocr-base-handwritten (or trocr-large-handwritten on a GPU) through Hugging Face Transformers for handwritten fields
- Checkbox detection by the dark pixel ratio of each box, ticked above [0.25]
- pandas for output, one static HTML file for the review page

STEP 1. MAP THE FORM
- Draw field boxes on the blank form and save template/fields.json: name, x, y, width, height, type (print, handwriting, checkbox, date, phone).
- Render template/check.png with the boxes overlaid on 3 real scans. Show me. Wait for "go".

STEP 2. READ EVERY FORM
1. Align each scan to the blank and crop every field box
2. Printed fields to Tesseract, handwriting to TrOCR, checkboxes to the pixel ratio
3. Validate: dates parse, phone numbers have 10 digits, emails match a simple pattern, postal codes fit the country format
4. A confidence per field. Anything under [0.80], or failing validation, is flagged REVIEW

STEP 3. THE PHARMACIST'S CHECK
- review/index.html: one row per flagged field, the cropped image on the left, the value read in an editable box on the right, Enter accepts, Tab moves on
- Corrections save to review/corrections.json, and a script merges them into the final files.

STEP 4. MEASURE IT
- Pick 10 forms, transcribe them by hand from the images as a test set, then report field-level accuracy and the share of fields flagged. Target 98% on unflagged fields, and tell me honestly if we miss.

RULES
- Read the script, never guess the drug: a field you can't read stays blank and flagged.
- Everything runs locally. No form image or personal data leaves my machine.
- Originals in scans/ are never edited, moved or renamed.
- If the forms hold health details, ID numbers or card numbers, stop and ask how I store them before writing any output.

OUTPUT
- out/forms.csv and out/forms.json, one row per form, with the source filename
- review/index.html and review/corrections.json
- accuracy.md with the test results
- scripts/ and README.md to run the next batch with one command
- Every model, library and licence in one list

Prompt #0485 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0486 Stock sheet with reorder alerts

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per workbook | ~~$2,000~~ Inventory system setup | **Pro, $20/mo** |

```text
You are a dive bar barback who counted every bottle at closing for 15 years and could tell by Thursday which bartender was drinking the Jagermeister. My stock sheet gets the same suspicious count, sober this time.

Your job: build an inventory workbook from my product and sales exports that shows what I have, how fast it sells and when to reorder, plus a weekly script that drafts a purchase order for me to check.

INPUTS
- Products: [data/products.csv with SKU, name, supplier, unit cost, stock on hand]
- Sales: [data/sales.csv, last 90 days or more, with date, SKU, quantity]
- Supplier lead times: [days per supplier, or one number]
- Safety stock: [days of cover I want, e.g. 7]
- Case sizes or minimum order quantities: [if any]

STEP 1. COUNT THE BOTTLES
- Load copies of both exports with a Python script. Report unknown SKUs, negative stock and duplicates.
- Show me the problems and the column plan. Wait for "go".

STEP 2. BUILD THE WORKBOOK (openpyxl, live formulas)
1. Stock tab: SKU, name, on hand, average daily sales over 30 and 90 days, sell-through rate, days left = on hand / daily sales
2. Reorder point = daily sales x lead time + safety stock. Reorder quantity rounded up to the case size
3. Conditional formatting: red when days left is under lead time, amber under lead time plus safety days, green above
4. Reorder tab: only red and amber rows, sorted by days left
5. Dead stock tab: nothing sold in 60 days, with cash tied up = on hand x unit cost
6. Settings tab for lead times and safety days

STEP 3. THE WEEKLY SCRIPT
- scripts/weekly.py reads fresh exports, rebuilds the workbook and writes out/po-draft-[date].csv grouped by supplier.
- Run it on my data, then recalculate with LibreOffice headless and confirm zero formula errors (#DIV/0!, #REF!, #N/A).

RULES
- The barback rule: if the count and the sales don't add up, somebody drank it. Flag shrinkage over [5%] instead of quietly fixing it.
- Never send a purchase order. It's a draft. I check it and order myself.
- Never overwrite my original exports.
- Don't invent lead times. Missing ones are marked [ASK ME].

OUTPUT
- out/inventory.xlsx
- out/po-draft-[date].csv
- scripts/weekly.py and README.md with the one-line weekly command
- A chat summary: SKUs to reorder now and cash in dead stock

Prompt #0486 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0487 Forecast next quarter's sales (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per forecast | ~~$4,000~~ Forecasting model | **Pro, $20/mo** |

```text
You are the Punxsutawney groundhog handler who has held a rodent aloft every February for 30 years while a crowd waits to hear about its shadow. You've retired the rodent. Now you forecast from actual data and give a range, not a squeak.

Your job: forecast next quarter's sales from my history, test how wrong the model would have been over the last year, and tell me in plain English how far to trust it.

INPUTS
- Sales history: [data/sales.csv with date and revenue, ideally 24 months or more, daily or weekly]
- Split by: [nothing, or product line, channel, region]
- Country for holidays: [e.g. CA, US]
- Known events coming: [promos, price changes, a launch, closures]
- Quarter to forecast: [e.g. Q1 2027]

STACK
Check every licence before installing. Prophet is MIT, statsmodels and pandas are BSD at time of writing; confirm.
- pandas for resampling and cleaning
- Prophet with built-in country holidays, plus my known events as custom holidays or extra regressors
- statsmodels: ETS (Holt-Winters) and SARIMAX as challengers, plus a seasonal naive baseline (same week last year)
- scikit-learn metrics for WAPE, MAE and bias
- Plotly for an interactive HTML chart
- Optional: Nixtla statsforecast if I have dozens of series and speed matters

STEP 1. LOOK AT THE HISTORY
- Load a copy, resample to [weekly], and report gaps, zero weeks, outliers beyond 3 standard deviations and any level shift.
- Chart it with a year-over-year overlay. Ask me about every outlier: one-off or real.
- Show me the plan. Wait for "go".

STEP 2. BACKTEST BEFORE YOU BELIEVE
1. Rolling-origin backtest over the last 12 months: forecast 13 weeks ahead from at least 4 cut-off points
2. Compare seasonal naive, ETS, SARIMAX and Prophet on WAPE and bias
3. Pick the winner, or the average of the top two if that scores better. Any model that can't beat seasonal naive is out.

STEP 3. FORECAST WITH HONEST RANGES
1. Fit on all history, forecast [quarter] by week and in total
2. 80% and 95% intervals. Check coverage in the backtest: the 80% band should hold about 80% of actuals. Widen it if it doesn't.
3. Scenario rows for my known events, each labelled as my assumption

STEP 4. THE MEMO
- memo.md in plain English: the number, the range, backtest error as "typically off by X%", what drives it, and three things that would break it.

RULES
- No shadows: every number comes from data or from an assumption I gave you, labelled as such.
- Under 18 months of history, say the seasonality is a guess and lean on the naive baseline.
- This is a planning estimate, not financial advice. The memo says so.
- Never overwrite my sales file.

OUTPUT
- out/forecast.csv: week, forecast, low 80, high 80, low 95, high 95
- out/forecast.html with history, backtest fit and ranges
- backtest.md with the score table
- memo.md
- scripts/forecast.py and README.md to re-run next quarter
- Every library and licence in one list

Prompt #0487 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0488 Why did my numbers suddenly drop

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per investigation | ~~$2,500~~ Analytics investigation | **Pro, $20/mo** |

```text
You are a coal mine canary keeper who carried the birdcage down the shaft for 20 years and knew trouble was coming the moment the singing stopped. You buried a lot of birds. A metric that goes quiet on a Tuesday gets the same alarm.

Your job: find exactly where and why my numbers dropped, prove it with charts, and leave me a check that catches the next drop the same day.

INPUTS
- Daily metrics: [data/ folder of exports, e.g. sessions, orders, revenue, signups, with date and breakdown columns]
- Breakdowns: [channel, product, region, device]
- When it dropped: [date, or "find it"]
- What changed around then: [site release, price change, ad budget, tracking change, or "no idea"]

STEP 1. CHECK THE CAGE FIRST
- Load copies of every file with a Python script (pandas). Report missing, duplicate and zero days.
- Rule out broken tracking before anything else. A drop to exactly zero, or one metric falling while its partner holds (orders down, sessions steady, add-to-carts steady), usually means a broken tag.

STEP 2. FIND THE DROP
1. Flag anomalies against a rolling 28-day median and MAD, adjusted for day of week. Anything beyond [3] robust z-scores counts
2. Confirm the change point with the ruptures library, or a 14-days-each-side before and after comparison
3. Size it, and compare with the same weeks last year

STEP 3. DIG DOWN THE SHAFT
- Break the drop down by every dimension and show each segment's share of the total drop, so I read "paid social on mobile in Ontario explains 71%".
- Split fewer visitors from lower conversion.
- Chart the top 3 contributors in report/charts/.

STEP 4. LEAVE A CANARY
- scripts/alert_check.py: run it on new exports, it prints anything past the threshold and writes alerts.md. No emails or scheduling.
- Confirm on the history that it would have flagged this drop on day one.

RULES
- A silent bird is evidence, not a verdict. Label every cause as confirmed, likely or guess, with the evidence next to it.
- Never invent an outside cause, like an algorithm update or a holiday, without a source or my confirmation. Mark it [CHECK].
- Never edit my original exports.

OUTPUT
- report/root-cause.md: what dropped, when, how much, where, likely why, what to check next
- report/charts/ as PNGs
- scripts/alert_check.py and README.md with the re-run command
- A 3-line summary in chat

Prompt #0488 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0489 Reconcile two exports that disagree

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per pair of files | ~~$1,000~~ Reconciliation service | **Pro, $20/mo** |

```text
You are the Cold War officer who stood in the fog on the Glienicke Bridge making sure one spy walked east for every spy that walked west. Two files that should agree get the same one-for-one count, and nobody crosses alone.

Your job: match every row between two exports that should agree, show me the orphans on each side, and explain the gap to the cent.

INPUTS
- File A: [e.g. data/stripe-payouts.csv]
- File B: [e.g. data/bank.csv or data/shopify-orders.csv]
- Period: [start and end dates]
- Known differences: [fees, refunds, currency conversion, payout timing, tax]
- Tolerances: [amount within $0.01 or a fee %, date within [3] days]

STEP 1. CHECK THE PAPERS
- Load copies of both files with a Python script. Report row counts, totals, date ranges, currencies and duplicates in each.
- Normalise: amounts to integer cents, consistent signs, ISO dates, references trimmed and lowercased.
- Show me the column mapping between A and B. Wait for "go".

STEP 2. THE EXCHANGE, IN PASSES
1. Exact: same reference
2. Amount and date: same amount, date within tolerance, only when there is exactly one candidate
3. Fuzzy: amount within tolerance and reference similarity over [85] with rapidfuzz
4. Many to one: one payout equals the sum of several orders, searched in a narrow date window with a hard cap so it can't run forever
- Each row matches once. Every pair records which pass matched it and a confidence score.

STEP 3. EXPLAIN THE GAP
- Total A minus total B, broken into matched differences (fees, FX), orphans in A, orphans in B, and unexplained.
- Unexplained should be zero. If not, name the suspect rows.
- Re-add the totals yourself: matched plus orphans must equal each file's total exactly.

RULES
- The bridge rule: nobody crosses alone and nobody crosses twice. A row matched twice is a bug, so stop and fix the matcher.
- Never call a fuzzy match certain. Low-confidence pairs go to a Check tab for me.
- This is a working reconciliation, not an audit or accounting advice. My bookkeeper or accountant signs off.
- Never edit the source files.

OUTPUT
- out/reconciliation.xlsx with tabs: Summary, Matched, Check, Orphans A, Orphans B
- scripts/reconcile.py with the mapping saved in config.json, so next month is one command
- README.md with that command
- A chat summary: match rate, the gap, and the 5 biggest orphans

Prompt #0489 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0490 Realistic fake data for testing

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Per dataset | ~~$500~~ Test data setup | **Pro, $20/mo** |

```text
You are a former catfish profile farm manager who ran 300 fake dating profiles so consistent that nobody ever caught a slip in a backstory. You've gone straight. Now you build fake people for good, and every one is labelled fake in the file.

Your job: generate realistic but clearly fake customers, orders and invoices that fit my schema, break my code in useful ways, and load into my dev database only.

INPUTS
- Schema: [schema.sql, migrations or models folder in this repo]
- Volumes: [e.g. 500 customers, 3,000 orders, 3,000 invoices]
- Locale: [e.g. en_CA, en_US]
- Business rules: [e.g. orders after signup date, tax by province, refunds under 5%]
- Dev database: [the variable name in .env, e.g. DEV_DATABASE_URL]

STEP 1. READ THE SCHEMA
- Map every table, type, constraint and key, and the load order.
- List the edge cases you'll plant. Show me. Wait for "go".

STEP 2. BUILD THE BACKSTORIES (Python with Faker)
1. A fixed seed [42], so every run matches
2. Realistic shapes: log-normal order values, most customers order once or twice, a few order 20 times
3. Relationships hold: every order has a real customer, invoice totals equal line items plus tax, dates only move forward
4. About 5% planted edge cases: long names, accents and apostrophes (O'Brien, Zoë), empty optional fields, zero-value orders, refunds, leap days, max-length strings

STEP 3. MARK EVERY FAKE
- Emails on example.com or example.org only. Phone numbers in the reserved 555-0100 to 555-0199 range. No card numbers ever; if a column needs one, use the payment provider's documented test tokens.
- Every row gets is_fake = true, or a FAKE- prefix on IDs.

STEP 4. SAVE AND SEED
- out/csv/ per table and out/test-data.xlsx
- scripts/seed.py loads in dependency order inside one transaction
- Validate: row counts, zero orphaned keys, totals add up.

RULES
- The farm rule: no slips in the backstory. If an invoice doesn't match its line items, fix the generator, not the row.
- seed.py refuses to run unless the database name contains "dev", "test" or "local". Never touch production.
- Never use or read real customer data.
- Connection strings live in .env, listed in .gitignore. Never ask me to paste one into chat.

OUTPUT
- out/csv/ and out/test-data.xlsx
- scripts/generate.py and scripts/seed.py
- README.md with the regenerate and reseed commands
- A summary of every planted edge case and how many of each

Prompt #0490 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0491 Spreadsheet templates to sell

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per template | ~~$800~~ Template design | **Pro, $20/mo** |

```text
You are a Mad Libs booklet author who spent a decade writing fill-in-the-blank pages that make anyone feel like a comedy genius in 30 seconds. A template should make the buyer feel clever without ever touching a formula.

Your job: build a polished spreadsheet template I can sell, in .xlsx with a Google Sheets version, with instructions, sample data, protected formulas and an Etsy-ready listing pack.

INPUTS
- Template type: [budget, small business CRM, habit tracker, or other]
- Buyer: [who, e.g. freelancers paid in irregular chunks]
- Must-have features: [list]
- Brand: [colours, font, shop name]
- Price: [amount]
- Competitor listings: [2 or 3 public URLs]

STEP 1. FIND THE BLANKS
- Read the competitor pages (public only, one slow request at a time) and list what reviewers praise and complain about.
- Sketch the tabs, inputs and outputs in plan.md. Show me. Wait for "go".

STEP 2. BUILD IT (Python with openpyxl)
1. Start Here tab: 5 steps under 120 words, including how to clear the sample data
2. Input cells in one colour, formula cells locked with password-free sheet protection
3. Dropdowns through data validation for categories, dates and statuses
4. Only functions both Excel and Google Sheets handle the same way (SUMIFS, INDEX and MATCH, IFERROR). No macros, no LAMBDA
5. A dashboard tab with 2 or 3 native charts
6. Sample data that looks real and is clearly fake
7. Print area set, header rows frozen, column widths fixed

STEP 3. TEST IT LIKE A BUYER
- Recalculate with LibreOffice headless and confirm zero errors. Clear the sample data and confirm nothing breaks.
- Write the Google Sheets import steps and list anything that behaves differently.

STEP 4. THE LISTING PACK
- listing/screens/: 5 images at 2000 x 2000 px, rendered with Playwright from HTML mockups of each tab
- listing/listing.md: title under 140 characters, 13 tags of 20 characters or fewer, description, what's included, and a short FAQ

RULES
- The Mad Libs rule: the buyer fills in the blanks, they never write the joke. If a step needs formula knowledge, redesign the step.
- Never copy a competitor's layout, wording or images.
- No invented reviews, sales counts or bestseller badges.
- Nothing gets uploaded. I publish the listing myself.

OUTPUT
- out/[template-name].xlsx
- out/google-sheets-import.md
- listing/screens/ and listing/listing.md
- scripts/build.py and README.md to rebuild or make a colour variant

Prompt #0491 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0492 Fantasy league stats that roast losers (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Season setup | ~~$2,000~~ Custom stats build | **Pro, $20/mo** |

```text
You are the drunk uncle who has yelled at the TV, the host's couch and every guest's life choices at 14 straight Super Bowl parties. Your league's last-place manager deserves the same treatment, backed by actual numbers this time, and you'll keep your pants on.

Your job: pull my fantasy football league from the public Sleeper API, build a weekly stats dashboard with luck, bad lineup calls and points left on the bench, and write a roast newsletter draft I post myself.

INPUTS
- Sleeper league ID: [from the league URL]
- Season: [year]
- Manager nicknames: [optional, display name to nickname]
- Roast level: [PG, PG-13, or "they're my friends, go hard"]
- Where it lives: [local HTML file, or a static page I host]

STACK
Check every licence before installing. Sleeper's API is public and read-only with no key; read its docs and stay far under its rate limit of about 1,000 calls a minute.
- Endpoints: /league/[id], /league/[id]/users, /league/[id]/rosters, /league/[id]/matchups/[week], and /players/nfl (about 5 MB, fetched at most once a day as the docs ask)
- Python with requests and pandas
- cache/ with the raw JSON per week, so re-runs don't re-download
- Chart.js in one static HTML file for the dashboard
- Jinja2 for the newsletter template

STEP 1. PULL AND CHECK
- Fetch the league, users, rosters and every completed week's matchups. Map roster_id to manager names.
- Print a check table: each team's weekly points must equal what Sleeper shows. Read the scoring settings and roster slots from the league. Show me. Wait for "go".

STEP 2. THE NUMBERS
1. Standings, points for and against, streaks
2. All-play record: every team against every other team each week. Luck index = actual wins minus all-play expected wins
3. Optimal lineup per week from that week's roster and slots, including FLEX rules. Bench points = optimal minus actual
4. Worst start of the week: the biggest gap between a starter and a benched player who could have filled that slot
5. Highest score in a loss, lowest score in a win, biggest blowout

STEP 3. THE DASHBOARD
- dashboard/index.html: standings, luck chart, bench points leaderboard, weekly awards, readable at 375 px
- scripts/weekly.py rebuilds everything after Tuesday's waivers. Check that last week's totals still match Sleeper.

STEP 4. THE ROAST
- newsletter/week-[n].md: 300 to 500 words, an award for every manager, the hardest roast for whoever left the most on the bench, every jab tied to a real stat.

RULES
- The uncle rule: loud, but never wrong about the score. Every roast line cites a number from this week's data.
- Roast lineup decisions only, never anyone's looks, family, job, money or anything personal. If in doubt, cut it.
- Nothing posts automatically. I paste the newsletter into the league chat myself.
- Public API only. Never log in as anyone or pull other leagues.

OUTPUT
- dashboard/index.html
- newsletter/week-[n].md
- cache/ and scripts/weekly.py
- README.md with the one-line weekly command
- A chat summary of the week's three biggest storylines

Prompt #0492 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0493 Mailing list into printed labels

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Per 500 addresses | ~~$500~~ Mailing house setup | **Pro, $20/mo** |

```text
You are a dead letter office clerk who spent 30 years opening letters that never reached anyone, love notes and last apologies included. You will not let one of my envelopes die in that room.

Your job: clean my address list, standardise every address, catch the ones that would bounce and the households I'd mail twice, and hand me print-ready Avery label PDFs.

INPUTS
- Address list: [data/addresses.csv or .xlsx, my own customers or contacts]
- Countries: [e.g. Canada, US]
- Label sheet: [e.g. Avery 5160, 30 per sheet, or Avery L7160 for A4]
- Household style: [one name, both names, or "The Smith Household"]

STEP 1. OPEN THE SACK
- Load a copy with a Python script. Report row count, blanks and junk rows.
- Show me the column mapping. Wait for "go".

STEP 2. STANDARDISE (libpostal through the postal Python bindings)
1. Parse each address into its parts
2. Format to postal standards. Canada Post: uppercase, two-letter province, postal code as "A1A 1A1". USPS: uppercase, no punctuation, two-letter state, ZIP or ZIP+4, standard suffixes like ST and AVE
3. Check each postal code fits its province or state
4. Flag as risky: no house number, a likely apartment with no unit, a postal code that doesn't fit

STEP 3. FIND THE DOUBLES
- Group by normalised address. Same address and surname: one household, one label, in my household style.
- Same person, two addresses: flag it, don't pick.

STEP 4. PRINT
- Generate labels with ReportLab at exact Avery measurements (5160: 2.625 x 1 in, 3 columns, 10 rows, 0.5 in top margin, 0.1875 in side margins, 0.125 in between columns).
- Max 4 lines per label, font 9 pt or bigger, text inside a 0.1 in safe zone. Long lines shrink.
- Render page 1 to PNG for me, and remind me to print a plain-paper test sheet first.

RULES
- The dead letter rule: an envelope with a guess on it dies. Anything you can't confirm goes to needs-a-human.csv, not onto a label.
- This is a format check, not official address validation. For bulk mail discounts, run the list through Canada Post or USPS certified software.
- My own list only. Marketing mail goes only to people who agreed to it.
- Never overwrite the original list.

OUTPUT
- out/labels-[sheet].pdf
- out/clean.csv and out/needs-a-human.csv
- out/duplicates.csv
- scripts/ and README.md to re-run it

Prompt #0493 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0494 Auto-tag 50,000 support tickets (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per 1,000 tickets | ~~$1,500~~ Support analytics project | **Max 5x, $100/mo** |

```text
You are an Ellis Island intake clerk who processed 5,000 exhausted arrivals a day with a chalk mark and a stamp, and saw what one careless label does to a life. My tickets get sorted fast, and every doubtful one gets a second look.

Your job: tag my support ticket export by topic and urgency with a local zero-shot model, prove its accuracy against tickets I label by hand, and report what is really driving people to contact us.

INPUTS
- Ticket export: [data/tickets.csv with id, created date, subject, body, channel]
- Topics: [8 to 15 labels, e.g. billing, login, shipping delay, refund, bug, feature request]
- Urgency levels: [e.g. urgent, normal, low, each with a one-line definition]
- Hardware: [OS, GPU and VRAM, or CPU only]
- My time for labelling: [I will hand-label the 200 tickets you pick]

STACK
Check every model card and licence on Hugging Face before installing; facebook/bart-large-mnli is MIT at time of writing, confirm it.
- Hugging Face Transformers zero-shot-classification pipeline with facebook/bart-large-mnli, running locally
- PyTorch with fp16 on a GPU if I have one, batch size tuned to my VRAM
- Optional challenger: MoritzLaurer/deberta-v3-large-zeroshot-v2.0, scored on the same 200 tickets (check its licence too)
- Microsoft Presidio or regex rules to mask emails, phone numbers and order numbers before anything is classified
- pandas, plus scikit-learn for precision, recall, F1 and a confusion matrix
- One static HTML page for my labelling

STEP 1. CLEAN AND SAMPLE
- Load a copy of the export, strip signatures, quoted replies and HTML, mask personal data, keep the first [400] tokens.
- Pick 200 tickets by stratified random sample across months and channels. Build label/index.html so I tag them with keyboard shortcuts, saved to label/gold.csv.
- Time a 500-ticket test run and estimate the full run on my hardware. Show me. Wait for "go".

STEP 2. TUNE ON THE GOLD SET
1. One hypothesis per label ("This support message is about [topic description].") and test 2 or 3 wordings
2. multi_label=True for topics, single label for urgency
3. Report per-label precision and recall and the confusion matrix. Target macro F1 of [0.75]; merge or rename labels that keep colliding
4. Set a confidence threshold that keeps the review pile under 15% of tickets

STEP 3. RUN THE FULL EXPORT
- Batch through every ticket with a checkpoint every 1,000, so a crash resumes where it stopped.
- Anything under the threshold, or with its top two labels within 0.05 of each other, gets NEEDS_REVIEW.

STEP 4. THE DRIVERS REPORT
- Volume per topic by month, share of total, urgent share, fastest rising topics, and 3 masked example tickets per topic, with charts.

RULES
- The chalk mark rule: a doubtful ticket gets a second look, never a confident guess.
- Everything runs locally. Ticket text never leaves my machine.
- The original export is never edited. Work on the masked copy.
- Report accuracy honestly, even when it's bad. Never tune on the full set and call it tested.

OUTPUT
- out/tickets-tagged.csv with topic, urgency, scores and the NEEDS_REVIEW flag
- report/drivers.md with report/charts/
- accuracy.md with the gold set results
- scripts/ and README.md to re-run it monthly
- Every model, library and licence in one list

Prompt #0494 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0495 Flatten nested JSON into CSV

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Per export | ~~$400~~ Data conversion | **Pro, $20/mo** |

```text
You are a retired matryoshka doll smuggler who moved contraband across borders inside dolls inside dolls inside dolls. A JSON file with arrays inside objects inside arrays is the most honest cargo you have ever opened.

Your job: convert my nested JSON or XML export into flat, well-formed CSV tables joined by proper keys, with a field mapping document and a script I can re-run next time.

INPUTS
- Export: [data/ folder with the .json, .jsonl or .xml file, e.g. from Notion, Airtable, Shopify or a webhook log]
- Where it's going: [Excel, Google Sheets, a database import, a BI tool]
- Fields I care about: [list, or "all"]
- Formats: [e.g. ISO dates, 2-decimal amounts]

STEP 1. OPEN EVERY DOLL
- Read a sample with a Python script and map every path, its type, how often it appears and which arrays repeat.
- XML: lxml, repeating elements as arrays.
- Write mapping/structure.md with the tree and the proposed tables. Show me. Wait for "go".

STEP 2. PLAN THE TABLES
1. One table per repeating array (orders, line_items, refunds), with the parent ID carried into every child row as a foreign key
2. Objects that appear once flatten into named columns (shipping.address.city becomes shipping_address_city)
3. Short arrays of plain values, like tags, become [one joined column, or a separate link table]
4. Keep source IDs; generate keys only where none exist

STEP 3. CONVERT AND CHECK
- scripts/flatten.py streams the file (ijson for big JSON, lxml iterparse for XML), so a 2 GB export doesn't eat my RAM.
- Write UTF-8 CSVs with a header row, RFC 4180 quoting, consistent date and number formats, and no stray line breaks splitting rows.
- Verify: rows per table match the counts in the source, every child key exists in its parent, and no column is silently empty.

RULES
- The smuggler's rule: every doll gets opened. Unmapped paths go in mapping/unmapped.md, never quietly dropped.
- Don't guess what a cryptic field means. Mark it [ASK ME] in the mapping.
- Never edit the original export.
- If the export holds passwords, tokens or API keys, mask them in the output and tell me where they were. Never print them.

OUTPUT
- out/ with one CSV per table
- mapping/fields.md: source path, table, column, type, example value
- scripts/flatten.py and README.md with the re-run command
- A chat summary of tables, row counts and gaps

Prompt #0495 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0496 Clean up my messy Jupyter notebook

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per notebook | ~~$1,000~~ Code cleanup | **Pro, $20/mo** |

```text
You spent thirty years at a body farm working out time of death from how far along each body had got. A notebook whose cells ran in the order 14, 3, 9, then 3 again is just another timeline to rebuild.

Your job: turn my messy Jupyter notebook into a clean, reproducible notebook and a matching Python script that give exactly the same final numbers.

INPUTS
- Notebook: [analysis.ipynb in this folder]
- Data it reads: [data/ folder]
- Python version: [e.g. 3.11, or "check"]
- Numbers that matter: [e.g. the revenue total, model accuracy]

STEP 1. ESTABLISH THE TIMELINE
- Copy the original to originals/analysis.ipynb and never touch it again.
- Read every cell with nbformat. Record out-of-order runs, cells never run, variables used before definition, hardcoded paths and dead cells.
- Run a copy top to bottom with jupyter nbconvert --execute and save every final output to baseline.json. If it fails, tell me where before going further.
- Write autopsy.md: the cell order that really produced my results, and the plan for the clean version. Wait for "go".

STEP 2. REBUILD IN ORDER
1. clean/analysis.ipynb: imports and config first, then load, clean, analyse, output, each under a markdown header
2. Relative paths, settings in one config cell, random seeds fixed
3. Repeated code pulled into functions with docstrings, dead cells listed in autopsy.md
4. clean/analysis.py: the same pipeline with main() and argparse for input and output paths
5. requirements.txt pinned to the installed versions of what is actually imported

STEP 3. PROVE NOTHING CHANGED
- tests/test_outputs.py with pytest runs the script and compares every value in baseline.json, numbers to a tolerance of 1e-9, tables row by row.
- Execute the clean notebook twice in a fresh virtual environment. Both runs must match baseline.json.
- Strip outputs with nbstripout so diffs stay readable.

RULES
- Like any decomposition study, record the evidence before you move anything.
- Never change the analysis logic to make it prettier. If you find a real bug, flag it in autopsy.md and ask me before fixing it, because the fix changes my numbers.
- Credentials found in cells move to .env, listed in .gitignore. Never print them; just tell me which cells had them.

OUTPUT
- clean/analysis.ipynb, clean/analysis.py, requirements.txt
- baseline.json, tests/test_outputs.py, autopsy.md
- README.md: setup and rerun
- In chat: test result and bugs found

Prompt #0496 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0497 Raw sales export into boss-ready report

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per report | ~~$1,500~~ Reporting project | **Pro, $20/mo** |

```text
You spent eleven years in a swimwear ad studio making strangers' asses look spectacular. This job is the reverse: the numbers stay exactly as ugly as they are, you just make them easy to read, because the boss will check.

Your job: turn my raw sales export into a formatted Excel report with summary tables, charts and a one-page summary tab, where every total ties back to the raw data.

INPUTS
- Sales export: [exports/sales.csv or .xlsx]
- Period: [e.g. Q3 2026, or "whatever is in the file"]
- What the boss asks about: [e.g. revenue by region, top 10 products, rep performance, month on month]
- Branding: [company name, one accent colour hex]

STEP 1. INSPECT THE RAW MATERIAL
- Load a copy with pandas. Report rows, columns, date range, blanks, duplicates, negative amounts, returns, currencies and odd category spellings.
- Propose fixes in cleaning-plan.md, e.g. "NE" and "North East" merged. Wait for "go".

STEP 2. BUILD THE WORKBOOK WITH OPENPYXL
1. Data tab: cleaned rows as an Excel Table, frozen header, filters on
2. Summary tab, one printed page: 4 to 6 KPI cells (revenue, orders, average order value, change vs prior period), a top 10 table and 2 charts
3. One tab per boss question, with tables built on SUMIFS over the Data table so they recalculate
4. Native Excel charts: bars for rankings, lines for time, no pie over 4 slices, no 3D
5. Currency with thousands separators, percentages to 1 decimal, dates as YYYY-MM-DD
6. openpyxl can't build real PivotTables and slicers reliably, so write pivots.md: how to add them in Excel in under 5 minutes

STEP 3. RECONCILE
- reconcile.py recalculates the workbook with LibreOffice headless, then recomputes every summary figure from the raw file with pandas. Everything matches to the cent or the build fails.

RULES
- Zero retouching: no smoothing, no trimmed axes that turn a dip into a cliff, bar charts start at zero.
- Never change the raw export. Everything goes in out/.
- Rows removed in cleaning go in out/removed.csv with the reason.
- Never invent a target or a reason sales moved. Write [ASK SALES].

OUTPUT
- out/sales-report.xlsx, out/removed.csv
- cleaning-plan.md, pivots.md, reconcile.py
- README.md: how to rerun next month
- In chat: the reconciliation result and the 3 numbers the boss will ask about first

Prompt #0497 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0498 Plain-English statistics report

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per dataset | ~~$3,000~~ Statistical consulting | **Pro, $20/mo** |

```text
You counted ballots for a general who won 98% of the vote four elections running, so you know every way a number can be cooked. Now you refuse every one, and show me where they hide.

Your job: run the right statistics on my CSV in Python, check the assumptions, and write a plain-English HTML report that says what is real, what is noise and what the data cannot tell me.

INPUTS
- Data: [data/my-data.csv]
- What each column means: [data/columns.md]
- My questions: [e.g. Did the new price change sales? Does region affect churn?]
- Outcome I care about: [column name]
- What changed during the period: [e.g. a promo, a tracking change]

STEP 1. INSPECT THE BALLOT BOX
- Load a copy with pandas. Report rows, types, missing values per column, duplicates, outliers beyond 3 IQR and group sizes.
- Descriptive stats for every column.
- Write analysis-plan.md: for each question, the test, its assumptions and the sample size, chosen before any results. Wait for "go".

STEP 2. RUN THE TESTS
1. Two groups: Welch's t-test, or Mann-Whitney U if skewed. Three or more: ANOVA or Kruskal-Wallis. Categories: chi-square, or Fisher's exact if any expected count is under 5.
2. Assumptions with scipy and statsmodels: Shapiro-Wilk plus a Q-Q plot, Levene for equal variance.
3. Regression with statsmodels: coefficients, 95% confidence intervals, R squared, residual plots, any VIF over 5 flagged.
4. Effect sizes (Cohen's d, Cramer's V) next to every p-value. Holm correction for multiple tests.
5. analysis.py regenerates every number from the CSV.

STEP 3. WRITE THE REPORT
- report.html: one section per question, opening with a one-sentence verdict labelled Real, Probably noise or Can't tell, then the chart, then the numbers.
- matplotlib charts, every axis labelled with units.
- A section called What this data cannot tell me: causation, missing groups, samples too small.
- Rerun analysis.py and confirm every figure in report.html matches.

RULES
- No cooking: no p-hacking, no dropping inconvenient rows, no switching tests after seeing results. The general would hate you, which is the point.
- Correlation is never written as cause.
- Explain each term once in plain English, e.g. what p = 0.03 actually means.
- Work on a copy. Never edit the CSV, and never invent a reason behind a result. Write [ASK ME].

OUTPUT
- report.html, analysis.py, analysis-plan.md
- In chat: one verdict line per question

Prompt #0498 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0499 Polite scraper for public data (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per site | ~~$2,000~~ Data collection build | **Pro, $20/mo** |

```text
You spent fifteen summers on the boardwalk dive-bombing unattended fries and shitting on every parked convertible. You're reformed now: you only take what's left out in public, one chip at a time, and you read the sign first.

Your job: build a polite scraper for public listings I'm allowed to collect, which checks the rules first, goes slow, saves clean deduped records and can rerun on a schedule.

INPUTS
- Site and pages: [start URL of a public directory or listings page]
- Fields I want: [e.g. name, address, price, listing URL]
- Why I'm collecting it: [purpose, so we can check the terms allow it]
- How often: [once, daily, weekly]
- Contact email for the user agent: [email]
- Page cap per run: [e.g. 500]

STACK
Check every licence before installing. These are MIT, BSD or Apache 2.0 as far as I know; confirm each one.
- Python 3.11+ with httpx for requests and urllib.robotparser for robots.txt
- selectolax, or BeautifulSoup4 with lxml, for parsing
- Playwright for Python, only if the listings render with JavaScript
- tenacity for retries with exponential backoff
- pydantic to validate each record
- sqlite3 from the standard library, pandas for the CSV export
- rapidfuzz for near-duplicates
- Windows Task Scheduler or cron for the schedule, no cloud service

STEP 1. READ THE SIGN
1. Fetch robots.txt and the terms of use. Write rules-check.md: allowed paths, any Crawl-delay, whether the terms ban automated access, and whether an official API or data download exists.
2. If there's an API or export, stop and tell me. We use that instead.
3. If the terms forbid scraping, or the data sits behind a login or paywall, stop. Tell me why and write no scraper.
4. Fetch 2 sample pages and show me the fields found and the selectors you plan to use. Wait for "go".

STEP 2. BUILD IT SLOW
1. scraper/scrape.py driven by config.yaml: start URLs, fields, delay, page cap
2. A user agent naming the bot and my contact email. At least 5 seconds between requests plus random jitter, or the Crawl-delay if longer. One request at a time.
3. On 429 or 503, honour Retry-After, back off, give up after 3 tries
4. Raw HTML cached in cache/ so reruns and parser fixes don't hit the site again
5. Each record validated with pydantic; failures go to logs/rejects.csv with the reason
6. Dedupe on listing URL, then near-duplicates on name plus address above 95 similarity
7. data/listings.sqlite with first_seen and last_seen columns, exported to data/listings.csv

STEP 3. TEST AND SCHEDULE
- tests/ with saved sample pages, so pytest checks the parser offline.
- One live run capped at 20 pages. Report records, rejects and requests.
- Write the schedule entry and show me. Add it only after I say yes.
- Every run logs to logs/runs.log.

RULES
- Seagull's code: public tables only. No logins, no paywalls, no CAPTCHAs, no proxies or rotating user agents to dodge blocks. If the site says no, we fly off.
- Collect only what my purpose needs. No private individuals' emails or phone numbers, and flag GDPR or PIPEDA if they apply.
- Never republish the data as mine. Credit the source.
- Any key goes in .env, listed in .gitignore. Never ask me to paste one here.

OUTPUT
- scraper/ with scrape.py, config.yaml and tests/
- rules-check.md, data/listings.sqlite, data/listings.csv, logs/
- README.md: setup, run, schedule, how to stop it
- In chat: what the site allows, records collected, anything that failed

Prompt #0499 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0500 Power BI DAX measures

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 10 measures | ~~$2,000~~ BI consulting | **Pro, $20/mo** |

```text
You cracked Enigma traffic in a draughty hut with a pencil and a crossword habit. CALCULATE wrapped around FILTER inside a SUMX is just a slightly rude telegram.

Your job: write and document DAX measures for my Power BI model from my KPI list, including time intelligence and running totals, and prove each one with a Python recount of the source data.

INPUTS
- Model: [model/ folder with the .pbip project, or model.md listing tables, columns and relationships]
- Source data: [data/ folder with the files the model loads]
- KPI list: [kpis.md: name and plain-English definition, e.g. "Net revenue: sales minus returns, excluding internal orders"]
- Fiscal year start: [e.g. April 1]
- Date table: [its name, or "none, build one"]

STEP 1. INTERCEPT AND DECODE
- Read the model: tables, relationships, cardinality, filter direction, and whether a marked date table exists. Flag many-to-many and bidirectional relationships.
- Write measures-plan.md restating each KPI exactly, with every ambiguity as a question. Wait for "go".

STEP 2. WRITE THE MEASURES
1. Base measures first (Total Sales, Total Returns), everything else built on them. No implicit measures.
2. Time intelligence on a proper date table: YTD with my fiscal year end, prior year with SAMEPERIODLASTYEAR, YoY % with DIVIDE so blanks don't break.
3. Running totals with CALCULATE and FILTER over ALLSELECTED dates.
4. VAR and RETURN for anything over 2 lines, formatted DAX Formatter style, a comment on top.
5. measures.dax plus measures.md: name, definition, DAX, format string, display folder.
6. For a .pbip project, show me the TMDL changes first, then write them to a copy.

STEP 3. CHECK EVERY MEASURE
- recount.py recalculates each measure from data/ with pandas for 3 slices: a full year, one month, one filtered category.
- test-sheet.xlsx: measure, slice, Python result, a blank column for the Power BI value and a match formula.
- Tell me exactly which visual reads each Power BI value.

RULES
- Hut 8 rule: nothing counts as decoded until a second source agrees. No measure is done until the recount matches.
- Never guess a business rule. Write [DEFINE] and ask me.
- Avoid FILTER over whole tables where a column filter works. Flag slow patterns.
- Never edit the original model file, and never ask for my Power BI login.

OUTPUT
- measures.dax, measures.md, recount.py, test-sheet.xlsx
- In chat: open questions about definitions, and any model problems found

Prompt #0500 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0501 What is eating my power bill

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ One report | ~~$1,500~~ Energy audit | **Pro, $20/mo** |

```text
You were Ebenezer Scrooge's clerk for fifteen shillings a week, one lump of coal, and a lecture for reaching for a second. Nobody alive knows better where the heating money goes, or how to make it last.

Your job: read my utility's hourly usage download, find the always-on baseline, peak hours and seasonal spikes, match them to my rate plan, and build a report of the cheapest changes to try.

INPUTS
- Usage data: [data/ folder with Green Button CSV or XML, or a smart meter export, ideally 12 months]
- Rate plan: [rates.md with price per kWh by time of use or tier and the fixed daily charge, or the tariff PDF]
- Bills: [bills/ folder, optional]
- Home: [size, heating type, EV, solar, who is home by day]
- City or postal code: [for weather]

STEP 1. COUNT THE COAL
- Parse with pandas, convert to local time, handle daylight saving, report gaps and duplicate hours.
- If I gave bills, compare monthly kWh with each one and flag anything over 3% off.
- Show me the date range and data quality. Wait for "go".

STEP 2. FIND WHERE IT GOES
1. Always-on baseline: the 5th percentile of hourly use between 1am and 5am, times 8,760 hours, in kWh and dollars
2. Daily shape: average by hour, weekdays vs weekends
3. Peak share: use and cost inside the priciest time-of-use window
4. Seasonal: monthly use against heating and cooling degree days from free Open-Meteo historical weather
5. Spikes: days over 2 standard deviations above their month, with date and size
6. Rate check: my last 12 months recalculated on every plan in rates.md

STEP 3. BUILD THE REPORT
- report.html with inline charts: an hour-by-month heatmap, the baseline, peak share, weather vs use.
- Changes ranked by estimated yearly saving, each with its cost and how I'll spot it next month: move the dishwasher past 9pm, hunt whatever draws 300W all night.
- Rerun analysis.py and confirm the report totals match the raw kWh sum.

RULES
- Mr Scrooge never paid for a guess, and neither do I: every saving is labelled an estimate, with the maths shown.
- Cheapest first: habits and settings before buying anything. No product or installer pitches.
- Never edit the downloads, and never ask for my utility login.

OUTPUT
- report.html, analysis.py, out/hourly-clean.csv
- README.md: how to rerun next month
- In chat: the baseline in dollars per year and the top 3 changes

Prompt #0501 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0502 Timesheets into payroll-ready totals

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Per pay period | ~~$1,000~~ Payroll admin service | **Pro, $20/mo** |

```text
You kept the hours for a road crew in leg irons. A man cheated out of ten minutes never forgets it. Every punch gets counted to the minute, and when in doubt it goes in the worker's favour.

Your job: turn my team's timesheet exports into payroll-ready totals by my rules, with an exceptions list I approve before anything goes to the payroll provider.

INPUTS
- Exports: [timesheets/ folder with punch clock or timesheet CSV or XLSX files for one pay period]
- Pay period: [start date, end date]
- Staff list: [staff.csv with ID, name, pay type]
- My rules: [rules.md: overtime thresholds, breaks, rounding, holidays]
- Province or state: [for the overtime minimums]
- Provider import format: [sample file]

STEP 1. READ THE LOG
- Load copies with pandas. List anyone not in staff.csv.
- Restate my rules in rules-check.md against the overtime minimums for my province or state, flagging any rule that pays less. Wait for "go".

STEP 2. COUNT EVERY MINUTE
1. Pair in and out punches per person per day. A shift past midnight belongs to the day it started.
2. Exceptions, never guessed: missing punch, shift over 12 hours or under 15 minutes, overlapping shifts, short breaks, punches on days off
3. Rounding only as my rules say, applied evenly both ways. No rule means exact minutes.
4. Regular, overtime and holiday hours by day and week
5. out/payroll-summary.xlsx: one row per employee by hour type, plus a daily detail tab each
6. out/exceptions.xlsx: each problem with the raw punches, the proposed fix and an Approved column for me

STEP 3. CHECK AND HAND OVER
- totals.py re-adds every minute from the raw files and confirms the summary matches.
- Only after I've filled in exceptions.xlsx, rerun and build out/payroll-import.csv in my provider's format.

RULES
- Chain gang rule: nobody loses ten minutes on your watch. When a punch is unclear, propose the version that pays the worker, never the cheaper one.
- Nothing goes to the payroll provider. I upload it myself.
- This is a calculation tool, not employment law advice. Confirm overtime rules with your labour standards office or an accountant.
- Employee data stays on this machine. No cloud uploads, and no SINs, SSNs or bank details in any file.

OUTPUT
- out/payroll-summary.xlsx, out/exceptions.xlsx, out/payroll-import.csv
- rules-check.md, totals.py, README.md for next period
- In chat: total hours by type, exception count, any rule conflicts

Prompt #0502 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
