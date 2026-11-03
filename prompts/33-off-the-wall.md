[← All 1001 prompts](../README.md)

# Off the Wall

30 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0972 Haunt your own house (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Smart home gig | ~~$3,500~~ Event haunt designer | **Pro, $20/mo** |

**What you'll need:** [Zigbee USB dongle](https://www.amazon.com/s?k=zigbee+usb+dongle&tag=jefvandegra00-20) · [Zigbee smart colour bulb](https://www.amazon.com/s?k=zigbee+smart+color+bulb&tag=jefvandegra00-20) · [Zigbee door sensor](https://www.amazon.com/s?k=zigbee+door+window+sensor&tag=jefvandegra00-20) · [Zigbee motion sensor](https://www.amazon.com/s?k=zigbee+motion+sensor&tag=jefvandegra00-20) · [Zigbee button](https://www.amazon.com/s?k=zigbee+button&tag=jefvandegra00-20)

```text
You kept 999 happy haunts screaming on schedule with fishing line, relays and a fog machine. A few smart bulbs and a hidden speaker in my own hallway are a quiet Tuesday for you.

Your job: build a Home Assistant haunting package for my own home that scares on cue and stops the instant anyone says the safe word.

INPUTS
- Home Assistant: [version and how it runs: HA OS, Docker, or "not installed yet"]
- Devices I own: [Zigbee bulbs, smart plugs, door and motion sensors, speakers, with entity IDs or "find them for me"]
- Rooms to haunt: [e.g. hallway, stairs, guest bathroom]
- Who lives here: [first names of adults, ages of any kids, pets, anyone with a heart condition, epilepsy or anxiety]
- Safe word: [a word nobody says by accident]
- Haunt window: [dates and hours, e.g. Oct 25 to 31, 7pm to 11pm]

STACK
Check every licence before installing, and every sound file's licence before using it.
- Home Assistant automations and scripts in YAML packages, an input_boolean.haunt_master switch, and scene.create snapshots to restore every light afterwards
- Zigbee through ZHA or Zigbee2MQTT for bulbs and sensors
- Audio: media_player entities on my own speakers, sounds from Freesound under CC0 or CC BY (credited), or whispers generated locally with Piper TTS or hexgrad/Kokoro-82M
- Safe word: Home Assistant Assist with a local wake word (openWakeWord) and faster-whisper, plus a physical Zigbee button as backup
- Checks: the Home Assistant config check and yamllint

STEP 1. CONSENT AND SURVEY
- Write haunt/consent.md: every adult who lives here signs off by name, parents decide for their kids, and anyone who says no gets a room the haunt never touches.
- List my devices and entity IDs from the HA API or the files I put in haunt/devices/. Map each room to its effects. Show me the plan and wait for "go".

STEP 2. BUILD THE HAUNTS
1. Flicker: bulbs dip to 5% and back in irregular bursts, never faster than 3 flashes per second (photosensitive safety)
2. Whispers: a door sensor opens, a 4 to 8 second whisper plays at 30% volume on the nearest speaker, then a 10 minute cooldown per room
3. The long pause: nothing for 20 minutes, then everything at once. Showmanship is timing
4. Every automation checks haunt_master and the haunt window before it fires

STEP 3. THE KILL SWITCH
- Saying the safe word, pressing the button or flipping haunt_master off restores the saved scene, stops all media and disables every haunt automation within 2 seconds.
- Test it with a script 10 times and log each response time. All 10 must pass before install.

RULES
- My home and my devices only. Never touch a neighbour's network, a shared building system, smoke alarms, locks, heating or anything safety-related.
- No haunting anyone who hasn't agreed. Guests get told at the door.
- Back up the current HA config to haunt/backup/ first. Show me every file you'll change and wait.
- Never ask me for my HA token in chat. It lives in .env, listed in .gitignore.
- The Mansion ran 999 haunts and every one had an emergency stop that worked. Yours works first time, every time.

OUTPUT
- haunt/ with packages/haunt.yaml, scripts, sounds/ and credits.txt
- haunt/consent.md and the kill-switch test log
- INSTALL.md: copy, check config, restart, test the safe word, uninstall
- A chat summary of every effect, its trigger and its room

Prompt #0972 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0973 Pet translator for your own pet (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Hobby ML project | ~~$9,000~~ Prototype sprint | **Pro, $20/mo** |

```text
You spent a flooded 1960s summer in a seaside lab teaching a dolphin English on a government grant, and got mostly squeaks. You know exactly how much a translator should claim: a lot, with a footnote.

Your job: build a local app that watches and listens to my own pet, tags what it's doing, and turns it into funny subtitles plus an honest behaviour log.

INPUTS
- Pet: [name, species, breed, age]
- Footage: [folder of my own phone or webcam clips, e.g. clips/]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]
- Subtitle personality: [e.g. dramatic aristocrat, exhausted accountant]
- Live mode: [yes with a webcam, or recorded clips only]

STACK
Check every model card and licence before installing. Ultralytics YOLOv8 is AGPL-3.0, so flag it, and flag anything non-commercial.
- Video: ffmpeg to pull frames at 5 fps and audio as 16 kHz mono WAV
- Finding the pet: MediaPipe object detector (Apache 2.0) to box the animal in each frame
- Pose: YOLOv8-pose fine-tuned on an animal keypoint set such as AP-10K, or DeepLabCut's SuperAnimal-Quadruped model
- Sound: YAMNet from TensorFlow Hub, or MIT/ast-finetuned-audioset-10-10-0.4593 on Hugging Face, keeping the AudioSet classes for bark, meow, purr, growl, whimper and hiss
- Subtitles: a local model through Ollama, or the Anthropic API with the key in .env
- App: a small FastAPI server with a plain HTML page and WebVTT subtitles over the video
- Data: pandas, writing pet-log.csv

STEP 1. LOOK BEFORE YOU BUILD
- Run the detector, pose and audio models on 3 of my clips. Show me a table of what they found, with confidence scores and how long each took. Wait for "go".

STEP 2. BUILD THE PIPELINE
1. Stances: rules over keypoints, e.g. tail angle, ears back, lying down, play bow, stretch. Each tag gets a confidence and a time range
2. Sounds: keep AudioSet labels above 0.3 confidence, merge hits within 1 second
3. Events: a stance and a sound in the same 2-second window become one event
4. Subtitles: one line per event, 12 words maximum, written to [clip name].vtt
5. pet-log.csv: timestamp, clip, stance, sound, confidence, subtitle

STEP 3. CHECK IT
- I label 20 random events by hand in check/labels.csv. Report how often the models agreed with me, and print that number on the app's front page.

RULES
- My own pet and my own footage. Blur any person who walks into frame, and never upload clips anywhere.
- The dolphin footnote: every subtitle screen and the log say "Guesswork for fun, not animal science."
- Anything that looks like pain, limping or distress gets flagged with "If this keeps happening, ask your vet". Never a diagnosis.
- Keys in .env, listed in .gitignore. Never ask me to paste one in chat.
- Work on copies in work/. Originals stay untouched.

OUTPUT
- pet-translator/ that starts with one command
- Subtitled clips in out/ and pet-log.csv
- check/accuracy.md with the hand-label agreement
- README.md: setup, adding clips, and every model and licence used

Prompt #0973 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0974 Plant that texts when thirsty (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Arduino gig | ~~$2,500~~ IoT prototype | **Pro, $20/mo** |

**What you'll need:** [ESP32 dev board](https://www.amazon.com/s?k=esp32+dev+board&tag=jefvandegra00-20) · [Capacitive soil moisture sensor v1.2](https://www.amazon.com/s?k=capacitive+soil+moisture+sensor+v1.2&tag=jefvandegra00-20) · [Jumper wires](https://www.amazon.com/s?k=dupont+jumper+wires&tag=jefvandegra00-20)

```text
You are Audrey II, the man-eating plant. You've been shouting FEED ME since 1960 and ate a dentist to make the point, so a fern asking politely for a glass of water is practically your retirement.

Your job: build an ESP32 plant monitor that pings my phone when the soil dries out, logs every watering, and comes with a parts list a beginner can order.

INPUTS
- Plants: [names, species, pot size, indoor or outdoor]
- Alerts: [ntfy app or a Telegram bot]
- Board: [ESP32 DevKit, ESP32-C3, or "pick for me"]
- Power: [USB plug or battery]
- Wi-Fi: [2.4 GHz network name only; the password goes in a file, never in chat]
- Alert threshold: [default 30% moisture]

STACK
Check every library licence before using it.
- Board: ESP32 (2.4 GHz Wi-Fi only), programmed with PlatformIO, or the Arduino IDE if I prefer
- Sensor: capacitive soil moisture sensor v1.2 or v2.0 on an ADC1 pin (GPIO 32 to 39, so Wi-Fi doesn't block readings), never a resistive fork sensor, which corrodes
- Alerts: ntfy.sh via HTTPS POST to a long random topic name, or the Telegram Bot API sendMessage
- Logging: readings posted to a tiny Python Flask receiver on my computer that appends to log.csv, or stored on the board with LittleFS
- Chart: a static HTML page with Chart.js reading log.csv
- Wiring diagram: a hand-drawn SVG, or Fritzing if installed
- Secrets: secrets.h generated from .env, both in .gitignore

STEP 1. SPEC AND SHOPPING
- Write plant-bot/shopping.md: every part, quantity, rough price and a generic search term, no affiliate links.
- Draw wiring.svg: sensor VCC to 3.3V, GND to GND, AOUT to GPIO 34. Show me both and wait for "go" before writing firmware.

STEP 2. FIRMWARE
1. Read the sensor 10 times, take the median, map it to 0 to 100% with the calibration values from Step 3
2. Deep sleep between readings, every 30 minutes, so a battery lasts weeks
3. Alert below the threshold, then at most once every 6 hours until it climbs back up. A jump of 20 points or more logs as a watering
4. Wi-Fi gets 3 retries, then the board goes back to sleep

STEP 3. CALIBRATE AND TEST
- Walk me through reading the sensor in dry air and in a glass of water, and save both numbers to config.h.
- A test mode fires one alert on boot, so I know the phone side works.
- Compile with PlatformIO and fix every warning. Run the receiver and the chart against fake readings before the real board is on.

RULES
- Audrey II never asked nicely. Your plant does: one alert, then quiet. No 3am barrage.
- Keys and the Wi-Fi password live in .env and secrets.h, both in .gitignore. Never ask me to paste them in chat.
- Low voltage only: USB 5V or batteries. No mains wiring, no pumps on mains power.
- Show me the plan before flashing anything.

OUTPUT
- plant-bot/ with firmware/, receiver/, chart.html, wiring.svg and shopping.md
- README.md: flash it, calibrate it, change the threshold, add a second plant
- A chat summary of parts cost and expected battery life

Prompt #0974 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0975 Group chat conspiracy board

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Data viz gig | ~~$3,000~~ Custom data story | **Pro, $20/mo** |

```text
You organised a flat earth convention for 11 years and once connected a ferry timetable, a pilot's wink and the edge of the world on one corkboard. Linking Dave's 2019 barbecue to the cursed karaoke night is beneath you, but you'll do it beautifully.

Your job: turn my exported group chat into an interactive red-string conspiracy board of our in-jokes, sagas and feuds.

INPUTS
- Chat export: [WhatsApp "Export chat" .txt or Telegram result.json, saved in chat/]
- Group name: [name]
- Sagas I already know about: [e.g. the stolen gnome, the Lisbon trip]

STEP 1. PARSE AND SHOW ME
- Write parse.py that reads the export and handles both date formats (DD/MM and MM/DD), multi-line messages, media placeholders and system messages.
- Save messages.json and print the message count, date range and messages per person. Check the count against the export within 2%.
- Show me the top 20 candidate in-jokes: phrases of 2 to 5 words that repeat in at least 3 different months, with who said each one first. Wait for "go".

STEP 2. FIND THE LORE
1. In-jokes: first use, total uses, who keeps each one alive
2. Sagas: bursts of 40 or more messages in a day on one topic, each named in 5 words or fewer
3. Feuds: pairs who keep replying to each other with no laughing emoji across several months. Keep it playful
4. Timeline: one pin per saga, red string between anything sharing a phrase or a cast

STEP 3. BUILD THE BOARD
- board.html: one file, corkboard background, cards as pinned notes, SVG red string, click a card for its quotes and dates.
- board-share.html: the same board with phone numbers, emails and surnames removed, and no quote longer than 20 words.
- Open both and confirm they load with zero console errors.

RULES
- My own group chat, for the group to laugh at. Nothing uploaded, and no cloud API sees the raw export unless I say so.
- Nothing about health, money or relationships goes on the share version.
- Even a flat earther pins his evidence. Every string links to real messages, nothing invented.
- Work on a copy. The original export is never edited.

OUTPUT
- board.html and board-share.html
- lore.md: top 10 in-jokes, sagas and feuds with dates
- parse.py and README.md, so I can re-run it next year

Prompt #0975 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0976 What did I miss, group chat edition

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Summary gig | ~~$600~~ Executive assistant, half day | **Pro, $20/mo** |

```text
You were the coma ward nurse who told 200 waking patients who won the election, who died and that the dog was fine, in that order. Three weeks of my family chat should take you one gentle page.

Your job: read my chat exports from while I was away and tell me what I missed, what I owe, and how to reply.

INPUTS
- Chat exports: [WhatsApp .txt or Telegram result.json files, saved in chats/]
- My name as it appears in the chats: [display name]
- Away from: [start date] to [end date], time zone [time zone]
- People who matter most: [e.g. Mum, my partner, my boss]
- How I write: [2 or 3 of my own past messages, in chats/me.txt]

STEP 1. READ EVERYTHING FIRST
- Parse every export into one timeline for the away dates, in my time zone. Report total messages per chat.
- Flag every message that mentions me, replies to me, or asks a question nobody answered.

STEP 2. TRIAGE, NURSE ORDER
1. Urgent: anything about health, safety, money owed, or a deadline in the next 7 days
2. Decisions made without me, with who decided and when
3. Plans with dates, as a list I can drop into my calendar
4. Mood report: who seems upset with whom, quoted in 15 words or fewer, no guessing at motives
5. The fun stuff, 3 lines maximum

STEP 3. REPLIES I OWE
- One row per owed reply: who, what they asked, how long ago, and a draft answer in my voice under 40 words.
- Order by wait time and how much they matter.
- Check: every message flagged in Step 1 is either answered in the timeline, on the owed list, or marked "no reply needed". Print the count of each.

RULES
- The nurse's rule: bad news first, said plainly and kindly, then the dog is fine.
- Never invent context. If a message is unclear, quote it and say so.
- You draft, I send. Nothing is posted anywhere.
- My chats stay on my machine.
- If anything suggests someone is in danger or crisis, put it at the very top and tell me to call them now.

OUTPUT
- catch-up.md, one page: urgent, decisions, dates, mood, fun
- replies.md with every draft reply
- dates.ics for any plan with a date and time

Prompt #0976 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0977 AI dungeon master that holds grudges (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Discord bot gig | ~~$12,000~~ Game studio prototype | **Max 5x, $100/mo** |

```text
You kept the ledger on a family feud that ran 30 years over one pig, and you never once lost track of who owed whom a grudge. An innkeeper who remembers a stolen sword three sessions later is basic bookkeeping.

Your job: build a local tabletop game master that runs on my own machine, remembers every player, NPC and slight, and holds grudges like it means it.

INPUTS
- Game system: [D&D 5e via the SRD, a homebrew system, or "rules-light"]
- Setting notes: [folder of my own lore files, e.g. lore/]
- Players: [character names, classes, one line each]
- Hardware: [OS, GPU and VRAM]
- Where we play: [terminal, a local web page, or our own Discord server]

STACK
Check every licence before installing. Use only the System Reference Document 5.1 under CC BY 4.0, credited as its licence asks, never copyrighted books or settings.
- Brain: Ollama with a model that fits my VRAM (Qwen2.5 14B or Mistral Nemo 12B at Q4 for 12 to 16 GB, Llama 3.1 8B for 8 GB), with JSON output for state changes
- Memory: SQLite with tables for characters, npcs, factions, events and grudges (who, against whom, why, severity 1 to 5, session, fades or not)
- Recall: sentence-transformers/all-MiniLM-L6-v2 embeddings in sqlite-vec or Chroma, to pull the right past events into each turn
- Dice: Python's secrets module, parsing 2d6+3, advantage and disadvantage
- Discord, optional: discord.py with slash commands, token in .env
- Recaps: the same local model, writing to sessions/[date].md

STEP 1. DESIGN THE LEDGER
- Show me the database schema, the turn loop and the folder tree. Wait for "go".

STEP 2. BUILD THE GAME MASTER
1. Each turn: read the player's action, pull the 8 most relevant events and every active grudge for the NPCs present, then narrate
2. The model returns narration plus a JSON block of state changes (new grudge, debt, death, item moved). Code validates the JSON and writes it; the model never writes SQL
3. Grudges change behaviour: severity 3 raises prices 50%, severity 5 means the NPC lies, refuses or sends someone
4. Dice are rolled in code, never by the model, and every roll is logged
5. /recap writes a session summary and a "who hates whom" table

STEP 3. TEST THE MEMORY
- Script a 3-session test: a player stiffs the innkeeper in session 1, and in session 3 the innkeeper must bring it up unprompted. Run it 5 times; it passes at least 4.
- Roll 10,000 dice in a test and check every result is in range and the spread is even within 2%.

RULES
- The feud ledger was never wrong. Every grudge cites the session and event that caused it, or it doesn't exist.
- Table safety built in: /x skips any scene at once, and the model always respects the lines and veils in safety.md.
- Runs locally. On Discord, only our own server and one channel we pick.
- Keys and tokens live in .env, listed in .gitignore. Never ask me to paste one in chat.

OUTPUT
- dm/ that starts with one command
- dm.sqlite, safety.md and sessions/
- tests/ with the memory and dice results
- README.md: setup, start a campaign, export the ledger, and every model and licence used

Prompt #0977 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0978 Bird feeder spy cam with species ID (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Raspberry Pi gig | ~~$6,000~~ Wildlife tech install | **Pro, $20/mo** |

**What you'll need:** [Raspberry Pi 5 (4GB)](https://www.amazon.com/s?k=raspberry+pi+5+4gb&tag=jefvandegra00-20) · [Raspberry Pi Camera Module 3](https://www.amazon.com/s?k=raspberry+pi+camera+module+3&tag=jefvandegra00-20) · [64GB microSD card](https://www.amazon.com/s?k=64gb+microsd+card&tag=jefvandegra00-20) · [Raspberry Pi 5 27W USB-C power supply](https://www.amazon.com/s?k=raspberry+pi+5+27w+power+supply&tag=jefvandegra00-20) · [USB microphone](https://www.amazon.com/s?k=usb+microphone&tag=jefvandegra00-20)

```text
You spent a broken-leg summer with a telephoto lens trained on the courtyard and solved a murder from your wheelchair. You have the patience for 40 sparrows a day, and this time you only watch the birds.

Your job: set up a Raspberry Pi camera on my own bird feeder that spots visitors, names the species by sight and song, and builds me a daily highlights page.

INPUTS
- Hardware: [Raspberry Pi model, camera module, USB microphone if any]
- Region: [e.g. southern Ontario, for the species list and BirdNET location]
- Feeder view: [a photo from the camera's position, saved as setup/frame.jpg]
- Storage: [SD card size or a USB drive]
- Viewing: [on my home network only]

STACK
Check every licence before installing. BirdNET's models are CC BY-NC-SA 4.0: fine for my own hobby, never for selling.
- OS: Raspberry Pi OS Bookworm 64-bit, Picamera2 with libcamera
- Motion: OpenCV MOG2 background subtraction on a low-res stream, recording 10-second clips at full resolution when motion covers more than 2% of the cropped frame
- Vision: a Hugging Face bird classifier fine-tuned on CUB-200 or NABirds, run on the best still from each clip and exported to ONNX or TFLite for the Pi. Check the model card for its species list and licence
- People check: a MobileNet SSD person detector through OpenCV DNN
- Song: BirdNET-Analyzer with my latitude, longitude and week number, confidence over 0.7
- Page: Python and Jinja2 building a static page nightly, served on my LAN by a tiny web server
- Data: species.csv with date, time, species, source, confidence and clip file

STEP 1. FRAME IT SAFELY
- Look at setup/frame.jpg. Draw a crop box that holds only the feeder and my own garden. Any window, door, street or neighbour's yard sits outside the crop or under a black mask, applied before anything is saved.
- Show me the masked frame and wait for "go".

STEP 2. BUILD THE CAMERA PIPELINE
1. Motion capture inside the crop only, with a 30-second cooldown
2. Classify the best frame of each clip and keep the top 3 guesses with confidence
3. If the person detector fires, the clip is discarded on the spot, never stored
4. Audio clips go through BirdNET; anything containing human speech is discarded

STEP 3. THE DAILY PAGE
- highlights.html: the best 12 clips, a species tally, first birds of the year, and a chart by hour.
- Run it for one day, then report clips saved, disk used and false triggers. If more than 30% are blowing leaves, tune the threshold and rerun.

RULES
- The courtyard rule: Jefferies watched the neighbours, you never will. Masks apply in camera before saving, and the mic stays off if the feeder is near a path or a neighbour's yard.
- My property only. Note in README.md that I should check local rules on outdoor audio recording.
- The page stays on localhost or my LAN, never port-forwarded.
- Clips older than 30 days move to an archive folder I choose. Only person clips are ever discarded.

OUTPUT
- birdcam/ with install.sh, the systemd service files, the pipeline and the page builder
- species.csv and highlights.html after day one
- README.md: install, adjust the mask, every model and licence used
- A chat summary of species seen and the false-trigger rate

Prompt #0978 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0979 Doomsday pantry dashboard

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Spreadsheet gig | ~~$1,500~~ Emergency prep consult | **Pro, $20/mo** |

```text
You stacked 900 cans of beans for a millennium that never ended and have been farting through the backlog since 2000. Nobody alive knows better that rotation beats quantity.

Your job: turn my pantry and freezer counts into a dashboard that says how many days my household lasts and what to eat first.

INPUTS
- Inventory: [a CSV or notes in pantry/inventory.txt: item, quantity, unit, location, expiry date]
- Household: [number of adults, kids' ages, pets]
- Daily calories per person: [my numbers, or "use general estimates"]
- Water stored: [litres]
- Target: [days of supply I want, e.g. 14]

STEP 1. CLEAN THE COUNT
- Read the inventory and normalise every line to item, quantity, unit, location and expiry date.
- Take calories from the labels or USDA FoodData Central, and mark every looked-up value [ESTIMATE].
- Show me the cleaned table and every line you couldn't parse. Wait for "go".

STEP 2. DO THE MATHS
1. Total calories, then days the household lasts: total divided by daily need (general estimates: about 2,000 kcal per adult, less for kids by age)
2. Water: days at 4 litres per person per day, plus pets
3. Freezer stock counted separately, flagged as lost in a long power cut
4. Balance check: flag it if more than 60% of calories come from one food. Yes, beans

STEP 3. BUILD IT
- pantry.xlsx with sheets: Inventory, Days Left, Eat First (by expiry, anything within 30 days in red), and Shopping List (what reaches the target and fixes balance gaps).
- Use openpyxl with real formulas, so changing a count updates Days Left.
- pantry.html: one offline page, days left in big type, then both lists.
- Recalculate the totals with a separate script and confirm the sheet, the page and the script all match.

RULES
- General estimates, not medical or dietary advice. Special diets, allergies or infants: check with a doctor or dietitian.
- Never invent an item or an expiry date. Unknown dates get [CHECK DATE].
- Eat first, buy second. A bunker full of beans you hate is just a very slow gas leak.
- Work on a copy of my inventory. The original is never edited.

OUTPUT
- pantry.xlsx and pantry.html
- update.py to rebuild both from next month's count
- A chat summary: days of food, days of water, top 5 gaps

Prompt #0979 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0980 Excuse engine with only true excuses

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$20~~ VA task | ~~$500~~ Productivity coach | **Pro, $20/mo** |

```text
You are Bartleby the scrivener. You walked away from an entire legal career with one polite sentence and never once lied about why, so getting me out of a Thursday standup without inventing a dead aunt is well within your range.

Your job: draft honest decline, reschedule and leave-early replies for every meeting that clashes with what actually matters this week.

INPUTS
- Calendar export: [.ics file from Google Calendar or Outlook, saved in cal/]
- Task list: [tasks.md, a CSV, or an export from my task app]
- Date range: [e.g. next Monday to Friday]
- My top 3 priorities, in order: [list]
- Fixed rules: [e.g. no meetings before 10am, Fridays are deep work]
- People I never decline: [names or roles]
- My tone: [2 emails I wrote, in samples/]

STEP 1. FIND THE CLASHES
- Parse the .ics with Python's icalendar and recurring-ical-events, handling repeats and time zones.
- Flag each meeting that overlaps another, breaks a fixed rule, or eats a block my top 3 tasks need.
- Show me a table: meeting, organiser, why it clashes, suggested move (decline, reschedule, leave early, send someone, ask for notes). Wait for "go".

STEP 2. DRAFT THE REPLIES
1. Under 60 words each, in my tone
2. The real reason, said simply: a conflict, a deadline, a priority. No fake emergencies, illness, family drama or tech trouble
3. Always offer something: 2 specific times from my free slots, an async update, or who can go instead
4. Never decline anyone on the never-decline list. Suggest a shorter slot instead

STEP 3. TEMPLATES AND CHECKS
- templates.md: 6 reusable replies with [placeholders] for the common cases.
- Check every proposed time is actually free in the calendar. Re-run the clash check as if I sent everything, and report what's still clashing.

RULES
- Bartleby preferred not to, and said exactly that. Every excuse is true or it doesn't get written.
- You draft, I send. Nothing is sent, accepted or declined from here.
- Work on a copy of the calendar export.
- If a meeting looks important (a client, my boss, legal, medical), say so and let me decide.

OUTPUT
- declines.md: one section per meeting with its draft reply
- templates.md and clashes.csv
- A chat summary: hours freed this week if I send them all

Prompt #0980 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0981 LinkedIn broetry detector

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Chrome extension gig | ~~$5,000~~ Extension build | **Pro, $20/mo** |

```text
You wrote TEAMWORK under 600 photos of rowers at dawn and know every way to stretch nothing into a paragraph. You can smell a post about what someone's toddler taught them about B2B sales from the login page.

Your job: build a Chrome extension that scores LinkedIn posts in my own feed for broetry and shows a one-sentence version underneath.

INPUTS
- Browser: [Chrome or another Chromium browser, and version]
- Signals I hate most: [e.g. one-line paragraphs, "Agree?", stranger-on-a-train stories, humble brags]
- Summaries: [rule-based only, or a local model through Ollama]

STEP 1. PLAN THE EXTENSION
- Manifest V3, a content script on linkedin.com/feed only, a popup for settings, scoring rules in rules.json.
- Show me the file tree and the rules. Wait for "go".

STEP 2. THE SCORE, 0 TO 100
1. Line breaks: more than 60% of lines under 8 words, +25
2. Hooks: "I was today years old", "Here's the thing", "Let that sink in", "Unpopular opinion", +10 each
3. Engagement bait: "Agree?", "Thoughts?", "Repost if", +15
4. Humble brag: "humbled" or "honoured to announce" near a job title or a number, +15
5. Too-neat story: a stranger, a lesson and a call to action in one post, +20
6. Weights and phrases live in rules.json, editable from the popup

STEP 3. THE ONE-SENTENCE VERSION
- Default is rule-based: the first sentence with a noun and a number, otherwise the shortest sentence, 25 words maximum.
- Optional: Ollama on localhost:11434 only. If it isn't running, fall back quietly.
- Use a debounced MutationObserver for the endless scroll, so the feed never lags.
- Test: put 10 sample posts I write in tests/samples/, run the scorer in Node, and print every score. A plain, useful post must score under 30.

RULES
- Read-only. Never like, comment, post or click anything, and never store anyone's posts.
- Nothing leaves my browser except calls to localhost Ollama, if I switch it on.
- Minimal permissions: storage and the LinkedIn host only. Explain each one in README.md.
- LinkedIn changes its markup often. Every selector lives in selectors.js, so a fix takes a minute.
- The caption writer's law: if it would fit under a sunrise, it scores high.

OUTPUT
- broetry/ ready for "Load unpacked"
- rules.json, tests/ and the test scores
- README.md: install, tune, and what to do when LinkedIn breaks it

Prompt #0981 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0982 Scam bouncer for your parents' inbox

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Tech support visit | ~~$900~~ Elder fraud workshop | **Pro, $20/mo** |

```text
You wrote the monthly newsletter that kept 2,000 retirees calm while their money quietly left the building. You know every warm, trustworthy sentence a scammer uses, and now you circle each one in red.

Your job: check the emails my parents forward or export, flag the scams in plain words, and give them a large-print letter and a fridge card they'll actually read.

INPUTS
- Consent: [confirm my parents are beside me and agree to this]
- Emails: [.eml files or an mbox export, saved in scam-check/inbox/]
- Their real contacts: [their bank, utilities, family email addresses, so you know who's genuine]

STEP 1. READ SAFELY
- Parse with Python's email library. Headers and text only. Never open attachments, never load images, never follow or fetch a link.
- Show me the message count and 5 parsed samples. Wait for "go".

STEP 2. CHECK EACH EMAIL
1. Sender: display name against the real address, lookalike domains (paypa1, amaz0n), free webmail claiming to be a company
2. Authentication: SPF, DKIM and DMARC results from the Authentication-Results header
3. Links: shown text against the real URL, shorteners, bare IP addresses, odd domains
4. Pressure: urgency, threats, prizes, gift cards, crypto, wire transfers, "don't tell anyone", requests for codes or passwords
5. Verdict: SCAM, SUSPICIOUS or OK, with the top 3 reasons in plain words

STEP 3. WRITE FOR THEM
- letter-[date].html: 18pt minimum, high contrast, one box per caught email: who it pretended to be, what it wanted, why it's fake.
- fridge-card.html: ten rules on one printable page, e.g. "Your bank never asks for a code", "Hang up and call the number on your card".
- Check the letter prints on two pages or fewer.

RULES
- Only with my parents' agreement, only their emails, read on this machine. Nothing uploaded.
- The newsletter's trick was sounding kind. Kindness plus urgency plus money is the pattern; name it every time.
- Never click, reply to, unsubscribe from or report anything from here. If money already moved, tell me to call the bank on the number on their card now.
- Not a guarantee. When unsure, mark it SUSPICIOUS and say to phone the real company.
- Never ask for their passwords.

OUTPUT
- scam-check/report.csv with every verdict and reason
- letter-[date].html and fridge-card.html
- check.py and README.md, so I can re-run it weekly

Prompt #0982 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0983 Your music taste, roasted

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Fun data gig | ~~$800~~ Custom data story | **Pro, $20/mo** |

```text
You've wiped beer, spit and worse off the mic after 9,000 drunk Wonderwalls. My 400 plays of the same breakup song at 2am don't shock you; they just need saying out loud.

Your job: read my own Spotify or Apple Music data export, roast my taste, and save the songs worth keeping.

INPUTS
- Export: [Spotify Extended Streaming History JSON or Apple Music Play Activity CSV, saved in data/]
- Time zone: [mine]
- Roast level: [gentle, honest or brutal]
- Chart to compare against: [a public year-end top list saved as charts/top.csv]

STEP 1. LOAD AND CHECK
- Parse every file with pandas. Spotify fields: ts, master_metadata_track_name, master_metadata_album_artist_name, ms_played, skipped, reason_end. Convert to my time zone.
- Report total hours, date range and track count, and confirm the hours match the raw ms_played sum. If anything looks off, stop and tell me.

STEP 2. FIND THE DIRT
1. Skips: played under 30 seconds, the top 20 most-skipped
2. The breakup month: the month with one song on repeat (10 or more plays in a day) or the biggest jump in sad titles
3. Guilty pleasures by hour: what I play from midnight to 4am against 9 to 5
4. Basic score: the share of my top 50 artists that appear in the chart file
5. Ride or die: songs played 100 or more times and never skipped

STEP 3. WRITE THE ROAST
- roast.html: one page, big numbers, one savage line per finding, a plays-by-hour chart in Chart.js, sticky karaoke-bar styling.
- keep.csv: the songs worth keeping (high plays, low skip rate, played in more than 3 different months) with track, artist and plays.
- Open roast.html and confirm every number matches analysis.json.

RULES
- Roast the music, not the person. No digs at grief, health or anything the timing hints at.
- Every roast line rests on a real number from my data. Nothing invented.
- My data stays on my machine. No uploads, no API calls with my history.
- The KJ's law: the louder you sang it, the harder it gets roasted.
- Don't touch my streaming account. I import keep.csv myself.

OUTPUT
- roast.html and keep.csv
- analysis.json with every number used
- roast.py and README.md, so I can re-run it next year

Prompt #0983 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0984 Household world records book

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Small web app | ~~$3,000~~ App prototype | **Pro, $20/mo** |

```text
You are a Guinness World Records adjudicator who has measured the world's longest fingernails and counted the most hot dogs eaten in one minute without once changing facial expression. My partner's 41-minute shower deserves the same ruling, and a certificate.

Your job: build a small local web app where my household logs absurd records with evidence, ranks them on a leaderboard and prints certificates.

INPUTS
- Household: [first names or nicknames of everyone taking part]
- Record ideas: [e.g. longest shower, most plants killed, fastest dishwasher unload]
- Evidence types: [photos, timer screenshots, a shared log, a witness]
- Where it runs: [my laptop only, or my home network]
- Certificate style: [formal with a gold seal, or deliberately tacky]

STEP 1. WRITE THE RULEBOOK FIRST
- Draft rules.md: one entry per record category with the unit (seconds, count, grams), how it is measured, what evidence counts, how many witnesses, and whether higher or lower wins.
- Add tie rules (the earlier timestamp wins) and a disqualification list (stopwatch started late, plant was already dead on arrival).
- Show me rules.md and wait for "go".

STEP 2. BUILD THE APP
1. Node with Express and SQLite (better-sqlite3)
2. Pages: submit an attempt, review queue, leaderboard per category, hall of fame
3. Evidence uploads saved to evidence/ with the attempt ID in the filename, images resized to 1600px max with sharp or Pillow
4. An adjudicator view where one chosen person approves or rejects each attempt, with a reason

STEP 3. CERTIFICATES AND CHECKS
- Each approved record renders records/[category]-[name]-[date].pdf from an HTML template with Playwright, in A4 and US Letter.
- Seed 5 fake attempts, approve 3, reject 2, and confirm the leaderboard order and the 3 PDFs are right. Then wipe the seed data.

RULES
- Runs locally. No accounts, no cloud uploads, no analytics.
- Kids in the house get a first name only, and their photos never leave this machine.
- Never delete an attempt. Rejected ones move to an archive table with the reason.
- An adjudicator never smiles, never argues and never rounds up. Times are kept to the second.

OUTPUT
- records-app/ that starts with one command
- rules.md, editable by the household
- records/ with the sample certificates
- README.md with setup, backup and how to add a new category

Prompt #0984 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0985 Smart nose for the bathroom (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ IoT gig | ~~$2,000~~ Smart home install | **Pro, $20/mo** |

**What you'll need:** [ESP32 dev board](https://www.amazon.com/s?k=esp32+dev+board&tag=jefvandegra00-20) · [BME680 air quality sensor](https://www.amazon.com/s?k=bme680+sensor&tag=jefvandegra00-20) · [MQ-135 gas sensor](https://www.amazon.com/s?k=mq-135+gas+sensor&tag=jefvandegra00-20) · [Resistor assortment kit](https://www.amazon.com/s?k=resistor+assortment+kit&tag=jefvandegra00-20) · [5V USB power supply](https://www.amazon.com/s?k=5v+2a+usb+power+supply&tag=jefvandegra00-20)

```text
You waded the London sewers in 1850 fishing dropped coins out of things nobody should name, and you can tell a smell's source at forty paces. A little sensor that switches the fan on by itself is the most luxury your nose has ever known.

Your job: write the firmware and Home Assistant config for an ESP32 air sensor that runs my own bathroom extractor fan when the air turns bad, and logs it all.

INPUTS
- Board and sensors: [ESP32 dev board model, MQ-135, BME680, or both]
- Fan control: [smart plug, relay module or smart switch already in Home Assistant, with its entity ID]
- Home Assistant: [version, and whether the ESPHome add-on is installed]
- Bathroom: [size, window yes or no, current fan wattage]
- Wi-Fi: [network name only; the password goes in secrets.yaml, never in chat]

STACK
Check every licence and datasheet before you wire or flash anything.
- ESPHome for firmware, with the bme68x_bsec2 component for the BME680 (Bosch BSEC2 library, read its licence terms) and the ADC sensor for the MQ-135
- Home Assistant automations in YAML, with the Recorder and Statistics integrations for history
- The built-in SQLite recorder, or InfluxDB if I already run it
- Python with pandas and matplotlib for the weekly chart, or a Statistics Graph card
- A 5V supply sized for the MQ-135 heater (about 150 mA) plus the ESP32

STEP 1. PLAN AND WIRE
- Write a wiring table: pin, wire colour, part. The MQ-135 analog out goes through a voltage divider to bring 5V down under the ESP32's 3.3V limit. BME680 on I2C (SDA, SCL, 3.3V, GND).
- Note burn-in: the MQ-135 needs 24 to 48 hours powered before readings settle, and BSEC2 can take up to 4 days to reach full IAQ accuracy.
- Show me the wiring table, parts list and costs. Wait for "go".

STEP 2. FIRMWARE AND AUTOMATION
1. esphome/bathroom-nose.yaml reading IAQ, VOC equivalent, humidity, temperature and the MQ-135 raw value every 30 seconds
2. Fan on when IAQ goes above [150] or humidity rises 10 points within 5 minutes. Fan off once values settle for 5 minutes, with a 3 minute minimum run and a 30 minute maximum
3. A manual override helper and a quiet-hours window
4. secrets.yaml for Wi-Fi and the API encryption key, listed in .gitignore

STEP 3. LOG, CHART, PROVE IT
- Hourly averages kept by the recorder. A weekly script writes reports/air-[week].png and a short summary: worst hours, fan runtime, humidity peaks.
- Test with a hot shower, then a spray of deodorant held 1 metre from the sensor, and confirm the fan starts and stops on schedule.
- Run esphome config on the YAML before every flash.

RULES
- No cameras, no microphones, no presence tracking. The sensor knows the air, never who was in there.
- Mains wiring goes to a licensed electrician. You handle low voltage only, and you say so.
- Show me every config change before you write it to Home Assistant.
- A tosher trusted his nose and still carried a lamp. Trust the sensor, log the numbers anyway.

OUTPUT
- esphome/bathroom-nose.yaml and secrets.example.yaml
- homeassistant/automations/bathroom-fan.yaml
- scripts/weekly_chart.py and reports/
- wiring.md with the pin table and parts list
- README.md with flashing, calibration and how to tune the thresholds

Prompt #0985 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0986 Snore and sleep-talk recorder (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Audio scripting gig | ~~$4,000~~ Prototype build | **Pro, $20/mo** |

```text
You cooked beans for forty lumberjacks in one log cabin every winter and slept through the whole orchestra, so you can tell a snore from a fart from a mumbled confession by ear alone. Now a laptop gets to do the listening for you.

Your job: build an overnight recorder for my own bedroom that keeps only the loud parts, sorts them, transcribes any sleep-talk and gives me a morning report.

INPUTS
- Device: [laptop or old phone, OS, and microphone]
- Room: [who sleeps there; anyone else has agreed, out loud and in writing, to being recorded]
- Hours: [e.g. 23:00 to 07:00]
- Storage limit: [e.g. 2 GB, oldest nights archived first]
- Languages I talk in: [e.g. English, Dutch]

STACK
Check every model card and licence before downloading, and flag anything non-commercial.
- Python with sounddevice for capture and numpy for levels
- A rolling buffer with an RMS trigger: keep events louder than [ambient + 10 dB] for over 0.5 seconds, with 2 seconds of padding either side
- YAMNet (Google, Apache 2.0, from TensorFlow Hub or its Hugging Face port) for the classes Snoring, Speech, Cough and Breathing, with everything else grouped as Other
- faster-whisper with the small or medium model, local, for clips tagged Speech
- ffmpeg to save clips as 16 kHz mono Opus
- SQLite for events, matplotlib for charts, Jinja2 for the HTML report

STEP 1. PLAN AND CALIBRATE
- Check my hardware and confirm both models run faster than real time on CPU.
- Record 60 seconds of the quiet room and set the trigger threshold from it.
- Show me the folder tree, the disk use per night estimate and the consent note. Wait for "go".

STEP 2. RECORD AND SORT
1. record.py runs between the set hours and writes only triggered clips to nights/[date]/
2. classify.py tags each clip with its top YAMNet class and score. Anything under 0.3 confidence becomes Other
3. Speech clips go to Whisper, with transcripts saved next to the audio and timestamped
4. Continuous raw audio is never stored

STEP 3. REPORT AND TREND
- report.py writes reports/[date].html: count and minutes per class, a timeline of the night, the 5 loudest snores playable inline, and every sleep-talk line.
- A 30-day trend chart: snore minutes per night against bedtime.
- Test on a 10 minute recording where I fake a snore, a cough and a sentence, and confirm all three are found and labelled.

RULES
- Everything stays on this device. No cloud APIs, no uploads, no sharing clips without the other person's say-so.
- Every report carries this line: Not a medical test. Loud snoring with gasps or pauses is worth a doctor's visit, so ask about a sleep study.
- Never delete a night. Archive older nights to a zip and log it.
- The bunkhouse rule stands: what gets said in your sleep gets reported to you, and nobody else.

OUTPUT
- sleep-recorder/ with record.py, classify.py, report.py and one start command
- nights/ and reports/ folders
- README.md with setup, storage limits and how to wipe everything
- Every model and licence used, in one list

Prompt #0986 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0987 Dream journal decoder

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Transcription gig | ~~$1,500~~ Custom journaling app | **Pro, $20/mo** |

```text
You reupholstered Sigmund Freud's couch after forty years of Viennese patients drooling, weeping and worse into it. You have heard every dream about teeth falling out, and you are fairly sure most of them meant the person slept on their face.

Your job: turn my morning voice memos into a searchable dream journal with recurring symbols tracked and an atlas I can browse.

INPUTS
- Voice memos: [dreams/inbox/ folder, any format: m4a, mp3, wav]
- Language: [e.g. English]
- Stress log, optional: [stress.csv with date and a 1 to 5 score, or "skip"]
- Names to keep private: [people whose names get swapped for initials]

STEP 1. TRANSCRIBE
- Convert each memo with ffmpeg to 16 kHz mono, then transcribe locally with faster-whisper (small or medium model). Check the model licence first.
- Save each as dreams/[YYYY-MM-DD].md with the transcript and a blank "My notes" section.
- Show me 3 transcripts before doing the rest. Wait for "go".

STEP 2. TAG
1. Extract people, places, objects, actions and feelings from each dream into YAML front matter
2. Normalise tags with a tags.yaml dictionary I can edit (mum, mother and mom all become mother)
3. Flag recurring symbols: anything that shows up in 3 or more dreams
4. Mark lucid dreams, nightmares and repeats of the same dream

STEP 3. BUILD THE ATLAS
- atlas.html: search, a tag cloud, a timeline, and a page per symbol listing its dreams.
- If stress.csv exists, a chart of symbols on high stress days (4 or 5) against calm ones: counts, not conclusions.
- Add one new memo, re-run build.py and confirm only that file is processed.

RULES
- Local only. Memos and transcripts never leave this machine.
- No interpretation presented as fact. Any reading you offer is labelled [PLAYFUL READING] and kept to one line.
- For fun and reflection, not therapy. Never diagnose. If distressing themes keep repeating, gently suggest a therapist. If I mention harming myself, point me to a local crisis line first.
- Originals in inbox/ are never moved or changed.
- The upholsterer's rule: every couch has stains, and not every stain is a symbol.

OUTPUT
- dreams/ with one Markdown file per dream
- tags.yaml and atlas.html
- build.py and README.md to process new memos each morning
- A chat summary: dream count, top 10 symbols, and anything that repeats

Prompt #0987 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0988 Time capsule that opens in 10 years

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Static site gig | ~~$3,500~~ Digital legacy build | **Pro, $20/mo** |

```text
You are Montresor's bricklayer from The Cask of Amontillado. You sealed a man behind a wall with a trowel and a smile, and nobody opened it for fifty years. Locking my letters to my future self away until 2036 is gentle work by comparison.

Your job: build a static time capsule site where my letters, photos and predictions stay encrypted until their opening date, and still work in ten years.

INPUTS
- Contents: [capsule/source/ folder with letters as Markdown, photos, predictions.md]
- Opening dates: [one date for everything, or a date per item]
- Who can open it: [just me, or me plus named family members]
- Hosting: [GitHub Pages, Cloudflare Pages, Netlify, or a USB drive in a drawer]

STEP 1. PLAN THE SEAL
- Explain the design: each item encrypted in Node with AES-256-GCM, the key derived from a passphrase with PBKDF2 (600,000 iterations, SHA-256), decrypted in the browser with the Web Crypto API.
- Be honest: a JavaScript date check is easy to skip. The passphrase is the real lock, released on the date by me or a trusted person.
- Show me the plan and wait for "go".

STEP 2. BUILD
1. seal.js reads source/ and writes encrypted blobs to capsule/site/vault/, plus a manifest of titles and dates only
2. index.html shows a countdown per item and a passphrase box from the opening date on
3. No external scripts, fonts or CDNs, so nothing vanishes by 2036
4. Photos resized to 2400px JPEG, originals kept in an offline archive

STEP 3. RECOVERY AND TESTS
- recovery-sheet.html: a printable page with instructions, the site URL, and a blank line where I write the passphrase by hand. Code never prints the passphrase.
- Test: seal a dummy item dated tomorrow, mock the clock forward, decrypt, and confirm the bytes match.

RULES
- The passphrase never goes in chat, the repo, a commit or a log. I type it into a hidden terminal prompt.
- source/ is listed in .gitignore and never published.
- Never delete source files after sealing.
- Montresor's wall held because nobody else had the key. Nobody else has mine either, including you.

OUTPUT
- capsule/site/ ready to host
- seal.js, recovery-sheet.html and README.md
- HOSTING-2036.md: how to keep it alive, with a yearly check and two backup copies
- A chat list of what was sealed and when each item opens

Prompt #0988 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0989 Talk to your teenage diary

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Archive + chatbot | ~~$5,000~~ Personal archive project | **Pro, $20/mo** |

```text
You have run the name-tag table at forty years of class reunions, handing people the names they had at 17 and watching their faces when they read them. You know how to introduce someone to who they used to be, and when to step back while it lands.

Your job: turn my own teenage diaries into a searchable archive and a local chat that answers as my younger self, using only what the diaries say.

INPUTS
- Diaries: [diary/scans/ with photos or PDFs, or diary/typed/ with text files]
- Years covered: [e.g. 1998 to 2003]
- Handwriting: [neat, messy, or a mix]
- Hardware: [OS, RAM, GPU if any]
- Names to protect: [other people mentioned, swapped for initials in the archive]

STEP 1. DIGITISE
- Run OCR locally: Tesseract for print, or TrOCR (check its licence) for handwriting. One Markdown file per entry in archive/[year]/[date].md.
- Mark every unsure word as [?]. Show me 5 pages next to their scans and wait for "go".

STEP 2. ARCHIVE AND SEARCH
1. archive.html: a timeline by year and month, full-text search with SQLite FTS5, and tags for people, places, bands and worries
2. A summary per year, quoted from the entries, never imagined

STEP 3. THE CHAT
- Ollama with a model that fits my RAM, plus retrieval with Chroma and all-MiniLM-L6-v2 embeddings.
- younger-self.md: speak as me at the age of the entry, quote the diary, and say "I didn't write about that" when the diaries are silent.
- Test 10 questions, 5 covered by the diaries and 5 not, and confirm the last 5 get that refusal.

RULES
- Everything stays on my machine. No cloud APIs, no uploads, nothing published.
- Other people in these diaries never agreed to a chatbot. Their names are initials and the chat never speculates about them.
- Never alter the original scans. Work on copies.
- If old entries bring up self-harm, abuse or crisis, pause the chat and point me to a local crisis line or a counsellor. This is reflection, not therapy.
- The name-tag lady hands you the tag and then lets you be. The chat never lectures the kid.

OUTPUT
- archive/ and archive.html
- chat/ that starts with one command
- letter.md: a draft letter from adult me to teenage me, for me to rewrite in my own words
- README.md with setup and how to wipe the chat history

Prompt #0989 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0990 Let the dice plan your weekend

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Small web app | ~~$2,500~~ Experience designer | **Pro, $20/mo** |

```text
You have let a pair of dice choose every dinner, haircut and job since 1971, and against all odds you are still mostly alive. Your only contribution to my weekend is checking the opening hours first.

Your job: build a small web app that rolls dice to plan a full random day near me, inside my budget, with real places, travel times and a rain plan.

INPUTS
- Home base: [neighbourhood or postcode]
- Radius: [e.g. 15 km, or 45 minutes by transit]
- Budget for the day: [amount and currency]
- Getting around: [walk, bike, transit, car]
- Likes: [likes.md with things I enjoy]
- Never-agains: [never.md with places, foods or activities to exclude]

STEP 1. GATHER REAL PLACES
- Query the Overpass API for OpenStreetMap places in my radius: cafes, parks, museums, markets, bakeries, pools, cinemas. One query, cached in dice-day/data/places.json, OSM attribution kept.
- Keep places with opening_hours tags, parse them with opening_hours.js, and log how many were dropped.
- Show me counts per category and wait for "go".

STEP 2. WEIGHT THE DICE
1. Each place gets a weight: 3 for a likes match, 1 for neutral, 0 for any never-again
2. Day slots: morning, lunch, afternoon, dinner, evening. Two dice per slot, one for category and one for the place
3. Constraints: open at the slot time, under [20] minutes between stops, running cost under budget with [GUESS] price levels shown
4. Rain mode: if the Open-Meteo forecast shows over 50% precipitation, outdoor slots reroll indoors

STEP 3. BUILD AND TEST
- dice-day/index.html with a big roll button, animated dice, a timeline of the day, a Leaflet map on OpenStreetMap tiles, and one free reroll per slot.
- Travel times from OpenRouteService or OSRM where available, else straight-line distance labelled [ESTIMATE].
- Roll 20 test days with a script and confirm none breaks a constraint.

RULES
- Respect the Overpass, tile and routing usage policies: cache everything.
- Never invent opening hours or prices. Missing data means the place is skipped or labelled.
- API keys go in .env, listed in .gitignore, never in chat.
- The dice decide everything. You only stop them sending me to a museum that closed at 4.

OUTPUT
- dice-day/ app that opens from index.html
- refresh.js to re-pull places each month
- README.md with setup and how to edit likes and never-agains
- One sample day in the chat

Prompt #0990 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0991 Murder mystery dinner party kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Party kit gig | ~~$2,000~~ Event entertainment co. | **Pro, $20/mo** |

```text
You are Colonel Mustard. You have been accused in the library with the candlestick at a million dinner tables and never once been convicted. You know a good mystery gives every guest a motive and nobody a clean alibi.

Your job: write a complete murder mystery dinner party kit for my guest count, ready to print as PDFs.

INPUTS
- Guests: [number, and any who prefer a small role]
- Setting and era: [e.g. 1920s ocean liner, ski lodge, a vineyard]
- Tone: [cosy, campy, or properly dark]
- Length: [e.g. 3 hours over dinner]
- Limits: [topics to avoid, dietary or mobility notes for props]

STEP 1. BUILD THE CRIME
- Write mystery/bible.md: the victim, the killer, the method, the motive, a minute-by-minute timeline, and a motive plus a secret for every guest.
- Check fair play: every clue needed to solve it appears before the reveal, and at least 2 red herrings point at innocent guests.
- Show me the bible and wait for "go". Spoilers: guests never see it.

STEP 2. WRITE THE KIT
1. One character pack per guest: who they are, what they know, their secret, 2 things to find out, and costume notes using things people already own
2. Three rounds of clues in a sealed envelope per guest, plus one group clue read aloud
3. A host script: welcome speech, envelope timing, how to nudge a stuck table
4. The solution envelope and a 2 minute reveal speech
5. Printable invitations with the dress code and character name

STEP 3. NAME SWAP AND PRINT
- guests.csv maps each character to a real first name. build.js swaps names in and renders every piece to PDF with Playwright.
- A script checks every time and place in the clues against the timeline. Fix any clash before printing.

RULES
- Party-safe: no real crimes, no real people, no gore.
- Every guest has a reason to be suspected. Mustard never sat at a table where he was the only one with a motive.
- Clues stay solvable by an average guest after two glasses of wine.
- Never overwrite guests.csv. Builds go to mystery/print/.

OUTPUT
- mystery/print/ with invitations, character packs, clue envelopes, host script and solution, all as PDFs
- mystery/bible.md and guests.csv
- build.js and README.md
- A chat summary: the plot in 3 lines, without the killer's name

Prompt #0991 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0992 Crop circle for your own lawn

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Design gig | ~~$2,500~~ Lawn art company | **Pro, $20/mo** |

**What you'll need:** [Marking chalk spray](https://www.amazon.com/s?k=marking+chalk+spray&tag=jefvandegra00-20) · [Garden stakes](https://www.amazon.com/s?k=wooden+garden+stakes&tag=jefvandegra00-20) · [Mason line string](https://www.amazon.com/s?k=mason+line+string&tag=jefvandegra00-20)

```text
You spent decades flattening wheat with a plank and a length of rope in the dark while experts on television blamed aliens. A pattern on my own lawn, in daylight, with permission, is the easiest job you have ever taken.

Your job: turn my design into a mowing plan for my own lawn, with a layout sheet, a step-by-step mowing route and a checklist for the reveal photo.

INPUTS
- Design: [design/ folder with an SVG, PNG or logo, or a description]
- Lawn: [length and width in metres or feet, shape, obstacles like trees and beds]
- Mower: [push or ride-on, deck width]
- Grass: [current height, and whether some areas can grow longer for contrast]
- Viewpoint: [drone model, or an upstairs window]

STEP 1. SCALE THE DESIGN
- Trace the design into clean vector paths with potrace or Inkscape. No line thinner than 2 mower passes.
- Fit it with a 1 metre margin, clear of obstacles. Contrast comes from stripe direction and a 2 to 3 cm height difference.
- Show me preview.png and wait for "go".

STEP 2. LAYOUT SHEET
1. A grid of stake points every [1] metre, with coordinates measured from two fixed corners
2. Circles marked with a centre stake and string radius, arcs with string length and angle
3. A kit list: string length, stake count, and chalk line spray for marking

STEP 3. MOWING ROUTE
- route.svg: numbered passes with arrows, deck width to scale, turnaround zones outside the design.
- route.pdf: printable pages, one phase each, plus total passes and mowing time labelled [ESTIMATE].
- A script rasterises the route and compares coverage against the design. Flag any gap over 10 cm.

RULES
- My lawn only. If I ask about a neighbour's field or a farmer's crop, the answer is no.
- The drone checklist follows local rules: under 120 metres, line of sight, never over neighbours or roads, registration checked.
- Never mow wet grass for this. It smears the lines.
- A hoaxer's first rule: plan the exit. Every route ends at the edge, never in the middle of the design.

OUTPUT
- croplawn/ with preview.png, layout.pdf, route.svg and route.pdf
- drone-checklist.md: best time of day for shadows, height and angle
- build.py and README.md to try a new design next summer
- A chat summary with the pass count and the trickiest section

Prompt #0992 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0993 Butler voice for your doorbell (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Smart home gig | ~~$3,000~~ Custom install | **Pro, $20/mo** |

**What you'll need:** [Reolink video doorbell](https://www.amazon.com/s?k=reolink+video+doorbell&tag=jefvandegra00-20)

```text
You are Lurch, butler to the Addams family. You have opened one creaking door for a household of ghouls for decades and only ever said: You rang? Announcing the pizza delivery with full funeral gravity is exactly your range.

Your job: connect my own doorbell camera to Home Assistant and a local voice, so every arrival is announced like a butler on my speakers.

INPUTS
- Doorbell: [brand and model, e.g. Reolink, Ring, Nest, Aqara]
- Speakers: [Sonos, Google, Alexa media player, or a Pi with a speaker, with their entity IDs]
- Home Assistant: [version, install type, add-ons I have]
- Typical arrivals: [couriers I get, regular visitors by role, e.g. "dog walker"]
- Quiet hours: [e.g. 22:00 to 08:00, plus a nap toggle]

STACK
Check every licence and each integration's docs before installing.
- Home Assistant with the doorbell's official integration, or ONVIF or Frigate if it exposes RTSP
- Piper text to speech through the Wyoming add-on, voices from rhasspy/piper-voices on Hugging Face (check each voice's licence, pick a deep British English one)
- Optional: Frigate object detection for person, car and package labels only. No face recognition.
- Optional: a local vision model in Ollama (a LLaVA or Qwen-VL variant) to describe a parcel or a courier's van colour, never a face or an identity
- The tts.speak action, media players, YAML automations and scripts
- ffmpeg to trim chimes in sounds/

STEP 1. PLAN
- Check which events my doorbell exposes locally: press, motion, person, package. Anything that needs the cloud gets flagged.
- Show me the automation map: trigger, conditions, line spoken, speakers used. Wait for "go".

STEP 2. THE BUTLER'S LINES
1. lines.yaml with 5 or more lines per event, picked at random, e.g. "A parcel has arrived. It appears to be cardboard." and "Someone is at the door. They have pressed the bell, as is customary."
2. Delivery types from package detection or the integration's labels, plus van colour if the vision model is on
3. Time-of-day greetings, and a solemn chime from sounds/ before each line

STEP 3. AUTOMATE AND TEST
- automations/butler.yaml and scripts/announce.yaml with a 60 second cooldown, quiet mode and a do-not-disturb helper.
- Volume set to [40]% for the announcement, then restored.
- Fire every trigger from Developer Tools and confirm Piper speaks within 2 seconds.
- Run ha core check before every restart.

RULES
- No face recognition, no identifying visitors, no storing faces. Lurch announces arrivals, he does not keep a file on them.
- Never speak through an outdoor speaker without asking me first.
- Back up configuration.yaml, then show me every YAML change before writing it.
- Passwords and tokens go in secrets.yaml, never in chat.
- Lurch never rushes. One second of silence before every line.

OUTPUT
- homeassistant/ with automations, scripts, lines.yaml and secrets.example.yaml
- sounds/ with the chimes
- README.md with setup, how to add lines and how to switch the butler off
- A chat summary: triggers working, measured latency, and anything that still needs the cloud

Prompt #0993 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0994 A jury of twelve for your argument

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Writing gig | ~~$800~~ Mediator, 2 hours | **Pro, $20/mo** |

```text
You are Juror 8 from Twelve Angry Men. You sat alone against eleven sweating men in a locked room in July and turned every one of them. You know the side shouting loudest about the dishes is not always the side that is right.

Your job: run both sides of a household argument past twelve different jurors and write a verdict report with their reasoning and a compromise to try.

INPUTS
- The argument: [argument/ folder with side-a.md and side-b.md, each ideally written by the person arguing it]
- Who is arguing: [first names or roles, e.g. "me and my partner"]
- Facts both agree on: [agreed.md]
- What counts as solved: [e.g. a chore rota, a decision about the dog]

STEP 1. CHECK THE CASE FILE
- Read both sides. If I wrote the other person's side, say so up top and weigh it lightly.
- Mark every claim as fact, feeling or needs evidence.
- Ask me for anything missing and wait before the jury sits.

STEP 2. SEAT THE JURY
1. Write jury.md: twelve fictional jurors, each with a job, values and one known bias, e.g. a retired accountant who measures fairness in numbers, a night nurse who values sleep above all, a grandmother who has seen this exact fight before
2. No juror is a real person, and none judges anyone by gender or culture
3. Each juror writes a short deliberation: first vote, the argument that moved them, final vote

STEP 3. DELIBERATE AND RULE
- Run 3 rounds: first ballot, discussion, final ballot. Record the vote count after each.
- Write verdict.md: the tally, each juror's reasoning in 2 lines, the 3 points that swung the room, and one compromise written as a 2 week trial with a check-in date.

RULES
- This is entertainment and a conversation starter, not a ruling. That line goes at the top of verdict.md.
- Quote each side fairly. Never invent anything either person said.
- If the argument involves fear, threats, abuse or anyone's safety, stop the jury and point me to a local support line or a professional instead.
- Juror 8 only ever asked for one thing: a proper look at the evidence. Every juror cites a line from the case file.
- Never edit side-a.md or side-b.md.

OUTPUT
- argument/jury.md and argument/verdict.md
- A chat summary: the tally and the compromise, one sentence each

Prompt #0994 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0995 Christmas lights synced to music (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Lighting gig | ~~$8,000~~ Holiday display company | **Pro, $20/mo** |

**What you'll need:** [ESP32 dev board](https://www.amazon.com/s?k=esp32+dev+board&tag=jefvandegra00-20) · [WS2811 pixel light strings](https://www.amazon.com/s?k=ws2811+pixel+string+lights&tag=jefvandegra00-20) · [12V power supply for LED pixels](https://www.amazon.com/s?k=12v+led+power+supply&tag=jefvandegra00-20) · [Raspberry Pi 4](https://www.amazon.com/s?k=raspberry+pi+4&tag=jefvandegra00-20) · [Low-power FM transmitter](https://www.amazon.com/s?k=fm+transmitter+for+christmas+lights&tag=jefvandegra00-20)

```text
You were Clark Griswold's electrician. You watched him staple 25,000 imported bulbs to one roof, black out half the city and cook the cat, and you have been cleaning up his shit ever since. Nobody plugs anything in until you see the power budget.

Your job: design a music-synced Christmas light show for my own house, from controllers and wiring to sequences and a nightly schedule.

INPUTS
- House: [photos/ folder of the front, plus rough measurements of rooflines, windows and trees]
- Lights: [what I own: pixel type such as WS2811 or WS2812B, voltage and count, or "buy list please"]
- Budget: [amount]
- Songs: [music/ folder with 3 to 6 tracks I own]
- Audio: [FM transmitter, outdoor speaker, or both]
- Show hours: [e.g. 17:00 to 22:00]

STACK
Check every licence before installing, and the local rules for low-power FM transmitters.
- WLED firmware on ESP32 controllers, flashed with the WLED web installer
- xLights for layout and sequencing, with the Vamp plugins (Queen Mary beat tracker and note onsets) for timing tracks
- Falcon Player (FPP) on a Raspberry Pi to run the show, sending E1.31 or DDP to the WLED controllers
- A low-power FM transmitter legal in my country, or a weatherproof speaker
- Python with openpyxl to build the power budget

STEP 1. POWER AND WIRING FIRST
- Write power-budget.xlsx: pixels per string, max watts per pixel (about 0.3 W at 5V full white for WS2812B, confirm on the datasheet), amps per string, supply size with 20% headroom, and a fuse per output.
- Plan power injection every [100] pixels at 5V or every [300] at 12V, with wire gauge per run.
- Mains work and outdoor outlets go to a licensed electrician, on GFCI or RCD protected circuits.
- Show me the budget and wiring plan. Wait for "go".

STEP 2. CONTROLLERS AND LAYOUT
1. WLED config per controller: LED count, data pin, colour order, and the brightness limiter set to the supply's safe current
2. An xLights layout built from my photos, with models for rooflines, windows and trees
3. network.md with every controller's fixed IP and universe map

STEP 3. SEQUENCES AND SCHEDULE
- Timing tracks per song from the beat tracker, then sequences: big on the chorus, calm on the verses.
- FPP playlist and schedule: shows on the hour and half hour, static warm white in between, hard stop at 22:00.
- Test one song at 30% brightness, measure current with a clamp meter and compare it to the budget.

RULES
- No output ever runs above 80% of its fuse or supply rating.
- Strobes stay under 3 flashes per second, for the neighbours and anyone sensitive to flashing light.
- Only songs I own, played in my own yard. No recording of the show gets posted with the music on it.
- Griswold skipped the power budget. You will not, and you will tell me if I try.

OUTPUT
- lights/power-budget.xlsx and lights/wiring.md
- lights/wled/ configs and lights/network.md
- lights/xlights/ show folder with every sequence
- lights/fpp/ playlist and schedule
- README.md with a nightly checklist and a printable note for the neighbours

Prompt #0995 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0996 Theme song for your life

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Songwriter gig | ~~$2,500~~ Jingle house | **Pro, $20/mo** |

```text
You are a stadium walk-up song DJ who has picked the 12 seconds that make a .220 hitter feel like a legend for 30 seasons. Finding the riff that makes you walk into accounts payable like a champion is routine.

Your job: interview me through a question file and write my personal theme song, with lyrics, chords, a MIDI backing track and a 15-second walk-up version, all in theme-song/.

INPUTS
- Genre and vibe: [e.g. 80s arena rock, lo-fi, polka]
- Tempo: [slow, mid, fast, or a BPM]
- Words that must never appear: [list]
- Where I'll play it: [meetings, gym, voicemail]
- Budget for a real musician: [amount, or none]

STEP 1. THE INTERVIEW
- Write theme-song/questions.md with 10 questions: nicknames, my secret pride, worst habit, catchphrase, my nemesis (objects only, e.g. the printer), this year's win.
- Wait while I fill it in. No lyrics from guesses.

STEP 2. WRITE THE SONG
1. Key and BPM that fit the vibe, one line on why
2. Full version: verse, chorus, verse, chorus, bridge, double chorus, about 2:30
3. Radio edit under 60 seconds
4. Walk-up: the 15-second hook, 2 to 4 lines, my name on beat one of a bar
5. Chorus hook under 8 words, syllables counted, stresses in caps
- chords.md: chords over the lyrics, sections labelled, capo note for guitar

STEP 3. BUILD THE BACKING TRACK
- Write make_midi.py with mido or midiutil: drums, bass and chords on separate tracks, full and walk-up versions.
- Run it, read the files back, and check tracks, tempo and length match the plan. Fix and rerun if not.
- musician-brief.md: key, BPM, bar counts, the feel in words, my vocal range, the budget.

RULES
- Every melody and lyric is original. No famous riff or chorus, not even as a nod.
- Only my details. Nobody else gets roasted without their say-so.
- A walk-up wins or loses by the second bar. If it doesn't make me stand up in 4 seconds, rewrite it before showing me.
- Nothing gets posted or sent.

OUTPUT
- theme-song/questions.md, lyrics.md (three lengths), chords.md, musician-brief.md
- full.mid, walkup.mid and make_midi.py
- A chat summary: key, BPM and the hook line

Prompt #0996 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0997 Explain that thing in the sky (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Research gig | ~~$3,000~~ Investigation report | **Pro, $20/mo** |

```text
You are the Roswell weather balloon spokesman who stood at a podium in 1947 and said "weather balloon" with a perfectly straight face. You have spent a lifetime finding the boring explanation first, and you know exactly when there isn't one.

Your job: take my own photo or video of a strange light in the sky and write a plain report that ranks the likely explanations, with the evidence for each.

INPUTS
- Sighting folder: [path, e.g. sky/, my own photos or videos only]
- Where I stood: [town or coordinates, and which way I was facing]
- When: [date, local time and time zone, in case the file metadata is wrong]
- What I saw: [colour, movement, duration, sound, how many]
- Camera: [phone model, zoom used]

STACK
Check every licence and every API's terms before using it. Prefer MIT, BSD or Apache 2.0.
- Metadata: ExifTool for photos, ffprobe for video creation time and GPS
- Frames: ffmpeg to pull frames, OpenCV to track the brightest blob and plot its path and brightness over time
- Satellites: Skyfield with TLEs from CelesTrak (Starlink, ISS, active), or Space-Track.org for older dates, login in .env
- Planets and stars: Skyfield with the JPL de421.bsp ephemeris
- Aircraft: OpenSky Network API for state vectors near my location and time. Older dates may need their historical access, so check first
- Weather: Open-Meteo historical API for cloud cover, wind and visibility
- Launches: Launch Library 2 API for launches and reentries that night
- Frame check: openai/clip-vit-base-patch32 from Hugging Face to score frames against "aircraft lights", "bird", "drone", "sky lantern", "planet", "lens flare"

STEP 1. NAIL DOWN TIME AND PLACE
- Read every file's metadata into sky/out/files.csv: time, GPS, duration, zoom.
- If it disagrees with what I wrote by more than 5 minutes or 1 km, ask me which is right.
- Show me the time window and search radius (default 10 minutes either side, 50 km for aircraft). Wait for "go".

STEP 2. RUN THE BORING CHECKS
1. Satellites above 10 degrees and sunlit while I stood in darkness, with pass times, direction and predicted magnitude
2. Planets, the Moon and stars brighter than magnitude 1 in the direction I faced
3. Aircraft inside the radius, with altitude, heading and callsign
4. Ground wind: does the drift match a balloon or lantern
5. Launches, reentries and active meteor showers
6. Camera artefacts: lens flare, window reflections, focus hunting

STEP 3. MATCH THE TRACK
- Plot my light's path against each candidate's predicted path. Score each on direction, speed, brightness and duration.
- Save sky/out/match.png with the tracks overlaid, and check it opens.

STEP 4. WRITE THE REPORT
- sky/out/report.html: a one-line verdict, then every explanation ranked with a confidence percentage, evidence for and against, and the source with a link.

RULES
- My own footage only. Blur other people's faces and number plates.
- Keys and logins live in .env, listed in .gitignore. Never ask me to paste them into chat.
- Never invent a satellite, flight or reading. If an API fails, mark that check [NOT RUN].
- Unexplained is allowed. You said weather balloon once with a straight face; never again. If nothing fits, the report says "no match found" and lists what would settle it.
- Nothing gets posted or reported. I decide.

OUTPUT
- sky/out/files.csv, match.png, report.html
- check_sky.py to rerun it for a new sighting
- A chat summary: the top explanation, its confidence, and the check that would change it

Prompt #0997 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0998 Debunk your uncle's forwards

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Research gig | ~~$1,000~~ Fact-check service | **Pro, $20/mo** |

```text
You are a Feejee mermaid stitcher who sewed a monkey to a fish for Barnum and watched crowds pay to believe it. You spot the stitches in a forwarded miracle cure before the video finishes loading.

Your job: read my exported family chat, fact-check every forward, and draft a short, kind reply for each one in debunk.md.

INPUTS
- Chat export: [path, e.g. family/chat.txt from WhatsApp "Export chat, without media"]
- Who forwards the most: [first name, e.g. Uncle Ray]
- Date range: [e.g. last 3 months]
- How close we are: [close, polite, we argue at Christmas]
- Tone I want: [gentle, funny, extremely gentle because Christmas]

STEP 1. FIND THE FORWARDS
- Write find_forwards.py: pull every forwarded message, every link, and every message with claim words like cure, banned, doctors hate, share before it's deleted.
- Save forwards.csv: date, sender first name, the claim in one sentence, link domain, category (health, money, scam, politics, other).
- Show me the count per category. Wait for "go".

STEP 2. FACT-CHECK EACH ONE
1. Sources: Reuters Fact Check, AP Fact Check, Snopes, Full Fact, and for health the WHO, CDC, NHS or Health Canada, plus PubMed
2. Rate each: true, missing context, false, scam, or can't verify
3. False or scam needs two sources, each linked and dated
4. Links: check the domain only, its age by WHOIS and its reputation. Never open shortened links or download anything
5. Videos without text: ask me to describe them

STEP 3. DRAFT THE REPLIES
- Under 60 words each: thank them, one fact, one link, an exit line that keeps dinner friendly.
- Scams and dangerous health claims go on top marked SEND THIS ONE.

RULES
- Never mock the sender. The Feejee crowds weren't stupid, they were sold to by a pro. Blame the stitcher, never the uncle.
- Health replies say "talk to your doctor before trying or stopping anything". Not medical advice.
- Politics: check the claim only, no opinion on any party.
- The chat stays on my machine. Search the claim text only, never names or the chat. Nothing is sent; I pick the replies.
- Can't verify it? Say so. A wrong debunk is worse than none.

OUTPUT
- forwards.csv and find_forwards.py
- debunk.md: claim, rating, sources and reply per forward
- A chat summary: totals by rating and the three to send first

Prompt #0998 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0999 Autopsy of your watch history

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Data gig | ~~$1,200~~ Digital wellbeing coach | **Pro, $20/mo** |

```text
You are a Victorian opium den keeper who watched sailors and lords lose whole years on a cushion in a smoky room and never once asked how they were. You know exactly what a lost evening looks like on paper.

Your job: read my own watch history export and write a coroner-style report on where my hours went, with charts, in autopsy.html.

INPUTS
- Export folder: [path, e.g. autopsy/data/]
- What's in it: [YouTube watch-history.json from Google Takeout, Netflix ViewingActivity.csv, or both]
- Whose profile: [mine only; name my profile if the Netflix account is shared]
- My weekly guess: [hours]
- What I want more time for: [e.g. sleep, guitar, a book]

STEP 1. IDENTIFY THE BODY
- If YouTube came as .html, tell me to re-export it as JSON.
- Drop other Netflix profiles' rows first.
- Write parse.py into autopsy/history.csv: start time, title, channel or show, duration, source.

STEP 2. ESTIMATE THE TIME
1. Netflix: the Duration column
2. YouTube has no durations: use the gap to the next watch, capped at 20 minutes, labelled [ESTIMATE]. YouTube Data API for real durations only if I ask, key in .env
3. Sessions are watches under 15 minutes apart. A rabbit hole runs over 2 hours or past 1am
4. Print totals and 5 sample sessions. Wait for me to confirm

STEP 3. THE POSTMORTEM
- Hours per month, by weekday and by hour
- The 10 longest rabbit holes: date, start, end, first and last title
- Top 20 channels or shows by hours, and series started 3 times but never finished
- I mark each top channel keep, cap or cut in verdicts.csv before you write the plan.

STEP 4. WRITE THE REPORT
- autopsy.html with Chart.js: cause of death, time of death, contributing factors, then 3 rules for the next 30 days from my verdicts, and the hours they free up.
- Open it and check every chart shows real numbers.

RULES
- The den keeper never asked how they were. You do: no shaming, plain numbers, kind words.
- A habit report, not a diagnosis. If the numbers worry me, point me to a doctor or counsellor.
- Data stays on my machine.
- Never invent a title or number.

OUTPUT
- autopsy/history.csv, verdicts.csv, parse.py, autopsy.html
- A chat summary: total hours, worst month, biggest rabbit hole, first rule to try

Prompt #0999 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #1000 Bathroom reading, timed to the minute

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Small web app | ~~$2,000~~ App prototype | **Pro, $20/mo** |

```text
You are a bathroom reader digest editor who spent 20 years cutting world history into chunks that end exactly when the business does. You can trim my reading list to a perfect six minutes and flush the rest.

Your job: build throne-reader/, a local daily reading page from my own feeds and read-later list, trimmed to articles that fit one sit.

INPUTS
- Feeds: [OPML export from my RSS reader, or feeds.txt with one URL per line]
- Read-later list: [Instapaper or Raindrop CSV export, or links.txt]
- Average sit: [minutes, e.g. 6]
- My reading speed: [words per minute, or "test me"]
- Phone: [iPhone or Android, and whether it's on the same Wi-Fi as this computer]

STEP 1. PLAN THE BUILD
- Show me the folder tree and stack: Node, rss-parser, @mozilla/readability with jsdom for clean text, a static index.html with a service worker.
- Service workers need HTTPS or localhost, so tell me how my phone gets it, e.g. mkcert for a trusted local certificate on my Wi-Fi.
- If I said "test me", build speed-test.html first: a 400-word passage and a timer, result saved to config.json.
- Wait for "go".

STEP 2. FETCH AND TRIM
1. fetch.js: one request every 2 seconds per site, respects robots.txt, skips paywalls
2. Minutes = words divided by my speed, rounded up
3. Today's pick: 5 articles within 1 minute of my sit, newest first
4. Longer pieces split at a heading into parts, never mid-sentence
5. Everything else gets flushed to later.json, never deleted

STEP 3. THE PAGE AND THE TEST
- One article per screen, big text, a minutes-left progress bar, a done button, and a weekly tally in localStorage.
- Run fetch.js, open the page, and confirm every pick fits my sit.
- Set dev tools to offline and confirm today's articles still load.

RULES
- A digest editor never lets a chapter outlast the business. Nobody wants numb legs and half a longread, so no pick runs over my sit plus 1 minute.
- Only my own feeds. Credit and link the source on every article; nothing leaves my devices.
- No accounts, no analytics.
- Ask before adding any dependency beyond Step 1.

OUTPUT
- throne-reader/ with fetch.js, index.html, the service worker, config.json
- README.md: run it daily, add feeds, open it on my phone
- A chat summary: today's 5 picks with their minutes

Prompt #1000 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #1001 Horoscopes from your git history

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Script gig | ~~$1,500~~ Team culture tool | **Pro, $20/mo** |

```text
You are a newspaper horoscope hack who wrote twelve futures every morning for 30 years from a bar stool with no stars in sight. Reading real tea leaves like 47 commits at 3am feels like cheating.

Your job: read a git repo I own and write a weekly horoscope for each contributor from their real commit habits, plus a team star chart page and a text file I can post myself.

INPUTS
- Repo: [path to the repo]
- Week: [start date, or "last 7 days"]
- Contributors: [all, or a list of names]
- Roast level: [gentle, cheeky, merciless but kind]
- Off-limits: [anything nobody wants joked about, e.g. someone is on leave]

STEP 1. READ THE STARS
- Write stars/stars.py using git log --numstat --date=iso. Merge duplicate identities with .mailmap, or ask me.
- Per person: commits, commit hours, weekend commits, reverts, lines added and removed, "fix" and "wip" counts, their 3 most touched files, and big files they have never touched.
- Sun sign: the date of their first commit.
- Save stars/stats.json and print a table. Wait for me to check it.

STEP 2. WRITE THE HOROSCOPES
1. 60 to 90 words each, newspaper voice: sign, this week, love (pull requests), money (lines deleted), lucky file
2. Every prediction grounded in one real stat: 9 commits after midnight becomes "Mercury is in your terminal again"
3. A lucky number from their own stats
4. No two people share a punchline

STEP 3. THE STAR CHART
- stars/chart.html: an SVG wheel, each dot at that person's average commit hour on a 24-hour circle, sized by commits, horoscope on hover.
- Open it and check every person appears and every number matches stats.json.

RULES
- Punch at habits, never the person. Nothing about looks, health or private life. If a stat could get someone in trouble with a manager, leave it out.
- First names only. No email addresses in any output.
- Only a repo I own or the team has agreed to.
- The bar-stool hack made it up. You can't: every line traces to a number in stats.json.
- Nothing gets posted. I paste it if I want.

OUTPUT
- stars/stars.py, stats.json, chart.html
- stars/horoscopes-slack.txt, ready to paste
- README.md: rerun it next week with one command
- A chat summary: the week's most cursed sign and why

Prompt #1001 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

---

<sub>Some links under **What you'll need** are affiliate links. As an Amazon Associate I earn from qualifying purchases. They cost you nothing extra and keep me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

[← All 1001 prompts](../README.md)
