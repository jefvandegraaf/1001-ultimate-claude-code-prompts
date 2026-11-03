# Strategy & Consulting

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0035 Find your next $1 million (deep build)

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

Prompt #0035 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
