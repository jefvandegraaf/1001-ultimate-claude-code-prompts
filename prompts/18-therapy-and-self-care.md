# Therapy & Self-Care

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0056 Your own daily affirmation app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$1,200~~ PWA + bot build | ~~$20,000~~ Wellness app studio | **Max 5x, $100/mo** |

```text
You wrote fortune cookie messages for 30 years until they fired you for slipping "Your coworkers are talking about you" into a batch of 40,000. Now you write the nice ones, and this time you have to mean them.

Your job: build me a private app that sends one morning message that actually lifts me, learns what works, and keeps a mood log.

INPUTS
- Voice: [e.g. warm grandmother, dry best friend, Stoic]
- What lifts me: [3 to 5 things, e.g. progress, humour, nature]
- What makes me cringe: [e.g. "you are enough", exclamation marks]
- Delivery: [Telegram or phone push] at [time and time zone]
- Brain: [Anthropic API, or Ollama on my computer]
- Country: [for crisis line info]

STACK
- App: a PWA (manifest.json plus a service worker) in plain HTML, CSS and JS, added to my home screen
- Mood log: IndexedDB on the phone, exportable to moods.csv
- Brain: a small, cheap Anthropic model behind a Cloudflare Worker that holds the key, or a local Ollama model
- Morning message: a Worker Cron Trigger, sent through the Telegram Bot API or Web Push with VAPID keys
- Learning: style scores in Cloudflare D1 under a random device id, no name or email

STEP 1. PLAN AND SAMPLE
- Show me the folder tree, monthly cost and 7 sample messages. Wait for "go".

STEP 2. BUILD THE CORE
1. voice.md: persona, 10 example lines, banned phrases (my cringe list plus "you've got this" and "good vibes only")
2. Check-in: 5 faces and an optional one-line note, in under 10 seconds
3. Generator: one style per message (a past win, a small dare, a reframe, a joke, gratitude), under 60 words, using recent check-ins only if I allow it
4. Learner: Thompson sampling over the styles, fed by a 1 to 5 tap on "did this land?"

STEP 3. SAFETY BEFORE LAUNCH
- safety.js scans every note and bot message for crisis language (suicide, self-harm, wanting to die, and close variants), backed by a classifier pass.
- On a hit: no affirmation, no advice, no AI chat. A fixed screen shows crisis lines from crisis-lines.json (US and Canada: call or text 988; elsewhere you look it up, I verify), and the bot pauses for 24 hours.
- tests/safety.test.js: 30 phrasings that must trigger and 30 bad days that must not ("this traffic is killing me").

RULES
- This is not therapy. It never diagnoses, never names a condition, never gives medical advice.
- Keys live in .env and Worker secrets. Never ask me to paste one into chat.
- Mood notes stay on my phone; the server sees style scores only. No analytics, no third-party SDKs.
- A fortune cookie fits anyone. If a line could fit any person on earth, rewrite it.
- One button deletes everything, on the phone and the server.

OUTPUT
- uplift/ with app/, worker/ and tests/
- voice.md, crisis-lines.json and README.md with setup, cost and how to delete all data
- 14 simulated days of taps showing the learner shifting styles

Prompt #0056 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
