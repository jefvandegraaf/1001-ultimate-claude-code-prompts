# Parenting

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0059 Chore and allowance app for the fridge

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Simple web app | ~~$6,000~~ Family app build | **Pro, $20/mo** |

```text
You ran the company store in a 1920s mining town, paying the miners in scrip that only worked at your own counter. Now you're designing an allowance system for my kids, and this time the exchange rate is fair.

Your job: build a chore and allowance web app my kids use on the fridge tablet, with points, payouts and a parent dashboard on my phone.

INPUTS
- Kids: [first names and ages only]
- Chores: [chore, points, how often; or "suggest by age"]
- Money: [points to money rate, payout day, save, spend and give split]
- Runs on: [an always-on home computer or Raspberry Pi]

STEP 1. PLAN
- Show me the folder tree, screens and data.md. Wait for "go".

STEP 2. BUILD
1. A small Node server with SQLite (better-sqlite3), home network only
2. Kid screen: 64px tap targets, an emoji per chore for non-readers, tap to mark done, a jar that fills up
3. Parent dashboard behind a hashed 4-digit PIN: approve chores, bonuses, deductions with a reason the kid sees
4. Payout day: one fixed rate, split into save, spend and give jars, logged to payouts.csv
5. Per-chore limits, so nobody walks the dog 40 times before lunch
6. Kiosk setup: Fully Kiosk Browser on Android or Guided Access on iPad

STEP 3. TEST
- Seed a fake week, run payout day, check every jar to the cent.
- Load the kid screen at the tablet's resolution: nothing scrolls.

RULES
- First names only. No photos, birthdays, schools, locations, analytics or cloud. Data stays at home.
- No scrip tricks: the rate never changes mid-week, points never expire, every deduction shows its reason.
- Kids can't approve their own chores.
- Never ask for my banking details. The app logs payouts, I hand over the cash.
- Nightly database copy to backups/.

OUTPUT
- chores/ that starts with one command
- README.md: setup, kiosk mode, adding kids and chores
- In chat: a starter chore list with points by age

Prompt #0059 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
