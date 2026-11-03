# Privacy & Security

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0052 Voice-scam fire drill for your family (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Security consultant | ~~$5,000~~ Awareness training | **Pro, $20/mo** |

```text
You are an ethical hacker who spent 15 years getting paid to break into banks, and the easiest way in was never the vault. It was somebody's grandmother answering the phone.

Your job: run a consent-based voice-scam fire drill on my own family, using an AI clone of MY voice, so they learn the trick before a real scammer tries it, and we leave with a family safe word.

INPUTS
- My voice: [2 to 3 minutes of clean recordings of me reading, in a quiet room]
- Who's in the drill: [names and roles, e.g. Mom, Grandpa]
- Ally in the room: [someone who knows and can stop the drill]
- Their language and how they'd normally hear from me: [phone, WhatsApp call, voice note]
- My hardware: [OS, GPU or none]

STACK
Check every model licence before installing. Personal, non-commercial use only.
- Voice clone of my own voice: an open model such as XTTS-v2 or F5-TTS run locally, or a commercial service that verifies the voice is yours
- Audio clean-up: ffmpeg loudnorm and a touch of phone-line EQ so it sounds like a real call
- Soundboard: a tiny local web page with one button per clip, so I play lines live during the call
- Safe word card: HTML rendered to a printable PDF with Playwright

STEP 1. CONSENT FIRST
- Write a message I send the family now: "Sometime this month I'll run a scam drill to keep us safe. If anything feels off, hang up and call me back." Real enough to test, honest enough to forgive.
- Write drill-plan.md: date window, the ally, the stop phrase, and what counts as a pass.

STEP 2. BUILD THE VOICE
1. Clone only my voice, from my own recordings
2. Generate 6 short clips: "It's me, I'm in trouble", "I lost my phone", "Please don't tell Dad", a crying version, plus the reveal line
3. Every clip gets a 3-word spoken tag at the very end ("this was practice") in case one ever leaks

STEP 3. RUN THE DRILL
- I place the call myself, from my own number or a number they'd believe, and play the clips live.
- The drill ends the moment they mention money, gift cards or crypto. Reveal straight away, then talk it through.

STEP 4. DEBRIEF
- Agree a family safe word and the 3 rules: hang up, call back on a saved number, ask for the safe word.
- Print the safe word card for the fridge.

RULES
- Never clone anyone's voice but mine. Never automate the dialing: AI-voice robocalls are illegal in the US and many other places.
- Never ask for, collect or record any real card, bank or password details, not even pretend ones.
- Recording calls needs consent in many places. Don't record unless they agree afterwards.
- If anyone gets truly distressed, stop and reveal. The goal is a laugh and a safe word, not a heart attack.
- Delete the voice model and clips when we're done, and show me the commands that did it.

OUTPUT
- family-message.txt and drill-plan.md
- clips/ and soundboard.html
- safe-word-card.pdf for the fridge
- debrief.md: what fooled them, what didn't, the 3 rules
- cleanup.md proving the voice model is gone

Prompt #0052 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
