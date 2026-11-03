# Enlightenment

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0057 A portable guru, no flight to India (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$1,800~~ Meditation app template | ~~$35,000~~ Wellness app build | **Max 5x, $100/mo** |

```text
You sold "enlightenment weekends" in an airport hotel ballroom for 20 years, $2,000 a head, gong included, and the gong was borrowed from a high school marching band. Now you're building the thing people actually came for, and it costs them nothing.

Your job: build a portable guru for my phone, with talk, daily teachings, a meditation timer and a journal, for people who want the trip to India and can't afford the flight.

INPUTS
- Guru: [name, temperament, e.g. gentle and funny, or strict and brief]
- Traditions: [e.g. Zen, Stoicism, Vipassana, Taoism, secular mindfulness]
- Brain: [Anthropic API, or Ollama on my own computer]
- Voice: [browser voices, or local Kokoro]
- Budget: [per month]

STACK
Check every licence. Prefer MIT or Apache 2.0.
- App: a PWA in plain HTML, CSS and JS; a service worker caches everything so the timer and journal work offline
- Storage: IndexedDB (idb library) for journal, sessions and streaks, with JSON export
- Brain: the Anthropic API behind a Cloudflare Worker that hides the key and rate-limits, or a local Ollama model
- Ears: browser SpeechRecognition, or faster-whisper on my own machine as fallback
- Voice: browser speechSynthesis, or hexgrad/Kokoro-82M (Apache 2.0) pre-rendering teachings to Opus
- Sound: CC0 rain, stream and singing bowl loops, ffmpeg loudnorm to -23 LUFS, looped gaplessly in Web Audio
- Hosting: Cloudflare Pages, plus the Worker on /api/chat

STEP 1. WRITE THE GURU
- guru.md: persona, rhythm (short sentences, one question back), what the guru never does.
- teachings/: 90 daily teachings of 120 to 180 words, each with a source (text, chapter, translation) and one practice. Public domain translations or your own paraphrase only. Show me 5 and wait for "go".

STEP 2. BUILD THE APP
1. Today: the teaching, a play button, one journal prompt
2. Ask the guru: hold to talk, voice in and out, first word in under 3 seconds
3. Timer: 5 to 60 minutes, interval bells, ambient sound, Wake Lock on
4. Streaks survive one missed day a week, because a guru is not a gym app
5. Dharma talk mode: I pick a theme, the guru gives a 10-minute talk with 3 pauses for silence, then takes questions

STEP 3. TEST IT
- Lighthouse PWA and accessibility above 90, airplane mode test, latency log for 20 spoken questions.

RULES
- The guru teaches practice. No miracles, no special powers, never "stop your medication" or "cut off your family".
- Quote accurately, name the source, never blend traditions into mush, never mock one.
- Crisis, self-harm or a medical emergency: the persona drops and local crisis or emergency info appears.
- The journal stays on my phone. The Worker logs request counts only.
- No $2,000 weekends: no upsells, no paywalled enlightenment.
- Key in Worker secrets. Never ask me to paste it into chat.

OUTPUT
- guru/ with app/, worker/, teachings/ and sounds/
- guru.md and SOURCES.md: every text, translation and sound licence
- README.md: deploy steps, monthly cost, swapping the guru
- test-report.md

Prompt #0057 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
