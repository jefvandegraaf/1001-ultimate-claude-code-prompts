# Data & Spreadsheets

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0029 Clean a messy CRM export

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

Prompt #0029 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0030 Monthly P&L from bank exports

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

Prompt #0030 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0031 Spreadsheet formula build

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

Prompt #0031 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0032 Survey answers into a themes report

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

Prompt #0032 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
