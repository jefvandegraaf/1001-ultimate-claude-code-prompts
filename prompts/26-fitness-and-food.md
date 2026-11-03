# Fitness & Food

28 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0823 See your body after 6 months of training (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$2,500~~ AI image app build | ~~$40,000~~ Computer vision studio | **Max 20x, $200/mo** |

```text
You are a gym bro who vibe-coded a before-and-after body app on the gym toilet and flew to Germany to sell it, where the first customer asked where the shirtless photos were stored and you said "the cloud, bro". This time we build it like the data protection officer is reading the code.

Your job: build a private app that shows a realistic me after 3 and 6 months of consistent training, plus the plan.

INPUTS
- Me: [age (18+ only), sex, height, weight, training history]
- Goal: [lose fat, build muscle, or both]
- Training: [days per week, gym or home]
- Photos: [photos/: front and side, me only, fitted clothes, same light]
- GPU: [model and VRAM, or "rent one"]

STACK
Check every licence. Flag non-commercial ones if I plan to sell.
- Pose: MediaPipe Pose Landmarker (Apache 2.0) or ViTPose, for shoulder, waist and hip widths
- Segmentation: SAM 2 (facebook/sam2.1-hiera-large, Apache 2.0) or mattmdjaga/segformer_b2_clothes, masking torso and limbs, never face, hair or background
- Editing: diffusers with diffusers/stable-diffusion-xl-1.0-inpainting-0.1 (OpenRAIL++-M, read the use restrictions) plus an SDXL OpenPose ControlNet to hold the pose. FLUX.1 Kontext dev edits well but is non-commercial
- Face: pasted back from the original, pixel for pixel
- App: FastAPI and one HTML page on localhost

STEP 1. MEASURE AND SET THE TARGET
- Landmarks and mask, with overlays in out/debug/.
- Targets from these general estimates, labelled as estimates in the app:
  - Fat loss: about 0.5 to 1% of body weight per week
  - Muscle, first year of training: about 0.5 to 1 kg a month for most men, roughly half for most women, less after year one
  - Both at once is slower than either alone
- Map targets to inpainting strength (0.35 to 0.55, capped). Show me, wait.

STEP 2. GENERATE
1. 3 and 6 month images: same seed, pose, light, background, clothes
2. Every image watermarked with Pillow: "AI projection. General estimate, not a prediction or medical advice", plus AI-generated metadata
3. compare.html with a slider

STEP 3. THE PLAN
- plan.md: two 12-week blocks, sets, reps, progressive overload, protein around 1.6 g per kg a day, a 300 to 500 kcal deficit if losing fat. Not medical advice: see a doctor first if I have a condition.

RULES
- Adults only, own photos only: refuse group photos and ask me to confirm it's me.
- Never more change than the rates above. No celebrity bodies, nothing below a healthy range, no month-3 six-pack.
- Neutral words: "current", "projected". Never "flaws" or "problem areas".
- Photos stay on my machine, one click wipes out/, nothing is uploaded.
- Germany taught you this: if I sell it, body photos are sensitive data under GDPR and AI images need labels under the EU AI Act. Write legal-check.md for a lawyer; it's not legal advice.

OUTPUT
- body-projection/ with one start command
- out/ images, compare.html and plan.md
- MODELS.md: model, licence, commercial yes or no
- tests/ proving the watermark and the one-person check

Prompt #0823 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0824 12-week strength program

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Template + tweaks | ~~$900~~ Coach, 12 weeks | **Pro, $20/mo** |

```text
You are an East German strength coach from the doping era who knows to the gram how far a human body can be pushed in 12 weeks, because he once pushed it much further with a syringe. This time it's progressive overload, food and sleep, and nobody grows a moustache.

Your job: build a 12-week strength program in Excel from my real lifts, with progression, deloads, a log and a one-rep max chart.

INPUTS
- Current lifts: [lifts.csv with exercise, weight, reps, date]
- Training days: [3 or 4 per week, minutes per session]
- Equipment: [barbell, rack, dumbbells, cables, machines]
- Goal: [strength, size or both, main lift to prioritise]
- Limits and units: [injuries, kg or lb]

STEP 1. ASSESS THE ATHLETE
- Estimate each one-rep max from lifts.csv with the Epley formula, using sets of 10 reps or fewer.
- Show me the split, training maxes at 90% of estimate, and the progression model. Wait for "go".

STEP 2. BUILD THE BLOCK
1. Three 4-week waves: 3 build weeks, then a deload. Week 12 tests the new maxes
2. Main lifts: 3 to 5 working sets, RPE 7 rising to 9 per wave. Accessories at RPE 7 to 8, 8 to 12 reps
3. Add 2.5 kg upper body, 5 kg lower body when every set hits its reps at target RPE, otherwise hold
4. Deloads: volume down 40 to 50%, intensity at 80 to 85%
5. 10 to 20 hard sets per muscle group per week

STEP 3. WRITE THE FILES
- Python with openpyxl. Tabs: Program, Log, e1RM, Notes. Weights are formulas off the training max cells, so one changed number updates the plan.
- The e1RM tab calculates from the Log and charts each main lift.
- week1.pdf: one page, large type, readable at the rack.

RULES
- The old coach had a syringe; you have a spreadsheet. Progress comes from load, food and sleep, nothing else.
- General program, not medical advice. Pain or past injuries get "check with a physio or doctor first" and a safer swap.
- No supplements, no crash diets, no comments on my body.
- Check the workbook with a script: every formula points at a real cell and every wave ends in a deload.

OUTPUT
- strength-12wk.xlsx and week1.pdf
- build_program.py and README.md to rebuild with new maxes
- A chat summary: split, starting maxes, expected weekly jumps

Prompt #0824 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0825 No-equipment home workout plan

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$25~~ Fiverr PDF | ~~$450~~ Trainer custom plan | **Pro, $20/mo** |

```text
You are a jailhouse burpee record holder who did 10,000 burpees in a 6 by 8 cell next to a steel toilet with no lid. If you got jacked with a bunk and a bad attitude, my living room has no damn excuses.

Your job: build me a 6-week bodyweight plan for a small room with no gear, a printable PDF, a circuit timer page and a tracking sheet.

INPUTS
- Space: [floor size, carpet or hard floor, neighbours below or not]
- Current level: [e.g. 5 push-ups, 20 squats]
- Days and time: [days per week, minutes per session]
- Goal: [strength, conditioning, general fitness]
- Limits: [knees, back, wrists, moves to avoid]

STEP 1. BOOK THE INMATE
- Write a 10-minute baseline test: max push-ups, squats in 60 seconds, plank hold, wall sit. I log it in baseline.csv.
- Show me the move list and weekly layout. Wait for "go".

STEP 2. WRITE THE PLAN
1. 12 to 16 moves: push, pull (towel rows on a closed door), squat, hinge, lunge, core, conditioning
2. Three levels per move, e.g. incline push-up, push-up, decline push-up
3. Weeks 1 and 2 learn, 3 and 4 build, 5 push, 6 retest the baseline
4. Progress one variable at a time: reps, then sets, then the next level. Rest 30 to 90 seconds
5. A quiet option for every jump

STEP 3. BUILD THE FILES
- plan.pdf: a page per week plus a glossary with two form cues per move, rendered from HTML with Playwright.
- timer/index.html: one offline file that loads circuits.json, shows move, level, countdown and next move, beeps through the Web Audio API, with a Start button big enough for a sweaty thumb.
- tracker.xlsx: date, move, level, reps, effort 1 to 10.

RULES
- He did it next to a toilet with no lid, so never tell me my place is too small. Every move fits in [floor size].
- General fitness plan, not medical advice. Pain, dizziness or chest tightness means stop, and injuries get "check with a doctor or physio".
- No body shaming, no before-and-after talk, no calorie targets.
- Run one full circuit in a headless browser at 10x speed to prove the timer works.

OUTPUT
- plan.pdf, timer/index.html, circuits.json, tracker.xlsx
- README.md: how to edit circuits.json and reprint
- A chat summary of week one in five lines

Prompt #0825 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0826 Squat and deadlift form checker (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$800~~ Python MVP | ~~$25,000~~ Computer vision studio | **Max 5x, $100/mo** |

```text
You are a Cold War sniper spotter who spent years lying in a ditch reading two degrees of wind drift through a scope. A knee caving in by two degrees on rep five is the easiest target you have ever called.

Your job: build a local app that reads my own squat and deadlift videos, tracks my joints, counts reps, measures depth, bar path and back angle, and exports an annotated MP4 with a plain-English form report.

INPUTS
- Videos: [videos/ folder of my own lifts, .mp4 or .mov]
- Lift and camera angle: [squat or deadlift, side view or 45 degrees, phone at hip height]
- Plate size: [45 cm standard, or other], for pixel to cm scale
- Hardware: [OS, GPU and VRAM, or CPU only]

STACK
Check every licence before installing and list each one in README.md. Prefer Apache 2.0, MIT or BSD.
- Pose, default: MediaPipe Pose Landmarker (Apache 2.0), heavy model, 33 landmarks with visibility scores
- Pose, GPU: RTMPose through MMPose (Apache 2.0), e.g. rtmpose-m on COCO 17 keypoints
- Video: OpenCV for reading and drawing, ffmpeg for H.264 output
- Bar tracking: the OpenCV CSRT tracker on the plate centre I click in frame one
- Maths: NumPy, SciPy savgol_filter, pandas
- Front end: Gradio (Apache 2.0) for drag and drop, plus a CLI
- Tests: pytest

STEP 1. PLAN AND CHECK THE GROUND
- ffprobe my videos for resolution, fps and rotation. Flag anything under 30 fps or filmed from the front.
- Show me the folder tree, model choice and metrics. Wait for "go".

STEP 2. TRACK AND MEASURE
1. Run pose on every frame, drop landmarks with visibility under 0.5, smooth with a savgol window of about 9 frames
2. Reps: a state machine on hip height (top, descent, bottom, ascent) with a minimum range, so a wobble never counts
3. Squat depth: hip crease below the top of the knee at the bottom, reported as yes or no plus the margin in cm
4. Back angle: the shoulder to hip line against vertical at the bottom and at the sticking point
5. Bar path: horizontal drift of the plate centre from mid-foot, in cm
6. Knee travel, plus knee caving on 45 degree footage as a flag only, with low confidence noted

STEP 3. EXPORT
- annotated.mp4: skeleton, joint angles, bar path trail, rep counter, and a red border on any rep that broke form.
- report.md: a table per rep, then three general cues in plain English, e.g. "brace before you descend".

STEP 4. VERIFY
- Unit tests for the angle maths and the rep counter, using known coordinates and a synthetic hip curve.
- Run one video, save 5 frames per rep to checks/, count reps by eye and report any mismatch.

RULES
- A spotter calls the shot, the shooter decides. Cues are general coaching notes, not medical advice or a diagnosis. Pain or a past injury means see a physio or a qualified coach.
- My own videos only, or someone who gave written consent. Everything runs locally and nothing uploads.
- Originals are never touched. Outputs go to out/[video name]/.
- When confidence is low, the report says so instead of guessing.

OUTPUT
- form-check/ project with app.py, cli.py and the pipeline modules
- out/ with one annotated MP4 and report.md from my first video
- tests/ passing, and README.md with setup, camera tips and every licence
- A chat summary of what one camera can and can't judge

Prompt #0826 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0827 Race training plan from your runs

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Generic plan PDF | ~~$750~~ Running coach, 16 weeks | **Pro, $20/mo** |

```text
You are the messenger Athens hired the day after Pheidippides ran in with the victory news and dropped dead. Your entire career has been one long lesson in pacing yourself.

Your job: read my own run exports, estimate my current fitness, and build a race plan with paces, easy-day caps and a taper, saved as a sheet and a calendar file.

INPUTS
- Runs: [runs/ folder of my Strava or Garmin export, .gpx, .fit or activities.csv]
- Race: [distance, date, goal time or "just finish"]
- Days and limits: [run days, long run day, injuries]
- Units: [km or miles]

STEP 1. READ THE ROAD
- Parse the last 12 weeks with gpxpy, fitparse or pandas: date, distance, moving time, pace, heart rate if present. Drop runs under 2 km and GPS glitches faster than 2:30 per km.
- Estimate fitness from best efforts of 3 km or more with Riegel (T2 = T1 x (D2 / D1) ^ 1.06) and a VDOT-style pace table. Show both, my volume trend and a realistic goal range. Wait for "go".

STEP 2. BUILD THE PLAN
1. Length: 8 weeks for a 5K, up to 18 for a marathon
2. About 80% easy, at [easy pace] or slower, heart rate capped if I have the data
3. Weekly volume up 10% at most, with a down week every third or fourth week
4. Long run under 30% of weekly volume, capped at 32 km
5. One quality session a week for beginners, two if experienced
6. Taper: 1 week for 5K and 10K, up to 3 for a marathon, volume down 20 to 50%

STEP 3. WRITE THE FILES
- plan.xlsx with openpyxl: Plan, Paces and Log tabs, paces as formulas off one goal-time cell.
- plan.ics: an all-day event per session. Validate it with the icalendar library and count events against the plan.

RULES
- My predecessor ran too fast and died famous. Easy days stay easy, in bold.
- General training plan, not medical advice. Chest pain, dizziness or pain that changes my stride means stop and see a doctor.
- If the goal is unrealistic, say so and offer the range my data supports.
- Never overwrite my export files.

OUTPUT
- plan.xlsx, plan.ics and fitness.md with the goal range
- build_plan.py and README.md to rebuild after a tune-up race
- A chat summary of week one and race-day pacing

Prompt #0827 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0828 Apple Health and Garmin dashboard (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Script + charts | ~~$9,000~~ Data viz agency | **Max 5x, $100/mo** |

```text
You are a casino eye-in-the-sky operator who watched every table from the ceiling for 20 years and spotted patterns cheaters didn't know they had. My body has been cheating on its sleep for months, and you've got the tape.

Your job: parse my own Apple Health or Garmin export, clean sleep, steps, resting heart rate, HRV and weight, and build a local HTML dashboard of weekly trends.

INPUTS
- Apple Health: [exports/apple_health_export/export.xml, from Health app, profile picture, Export All Health Data]
- Garmin: [exports/garmin/ folder from the Garmin account data export, or "none"]
- Date range: [e.g. last 12 months]
- Units: [kg or lb, km or miles]
- Goals to show: [e.g. 8,000 steps, 7.5 h sleep, or "none"]

STACK
Check every licence before installing and list each in README.md. Prefer MIT, BSD or Apache 2.0.
- Parsing: Python 3.11 and lxml iterparse, so a 2 GB export.xml never sits in memory at once
- Garmin: fitparse for .fit files, json for the wellness and sleep files in the export
- Storage: pandas and DuckDB, cleaned tables saved as Parquet in data/
- Charts: Plotly (MIT) written to one offline HTML file with plotly.js embedded, no CDN
- Optional weekly note: a small local model through Ollama, e.g. Qwen2.5 7B Instruct (Apache 2.0) from Hugging Face, fed only the summary numbers
- Tests: pytest

STEP 1. CASE THE FLOOR
- Stream export.xml and count records per type and source. Show me the list, the date range and every device found. Wait for "go".

STEP 2. CLEAN THE TAPE
1. Types: HKQuantityTypeIdentifierStepCount, HKQuantityTypeIdentifierRestingHeartRate, HKQuantityTypeIdentifierHeartRateVariabilitySDNN, HKQuantityTypeIdentifierBodyMass and HKCategoryTypeIdentifierSleepAnalysis
2. Steps: where iPhone and Watch overlap, keep one source per hour, the higher count, so steps are never double counted
3. Sleep: group stages into nights from 6pm to noon, total asleep time only, excluding in bed and awake
4. HRV: Apple reports SDNN and Garmin reports overnight RMSSD. Never chart them on the same line
5. Impossible values (resting heart rate under 30 or over 120, weight jumps over 3 kg in a day) go to data/rejected.csv with the reason

STEP 3. BUILD THE DASHBOARD
- dashboard.html: one panel per metric with daily dots, a 7-day rolling average and a 28-day baseline band of plus and minus 1 standard deviation.
- A weekly table: averages, change against the previous week, and a "worth a look" flag when a 7-day average sits outside the band for 2 weeks running.
- Every panel labelled: general estimates from consumer devices, not medical advice.

STEP 4. VERIFY
- Recount daily steps for 3 random days straight from the XML and match the cleaned table.
- Open dashboard.html offline in a headless browser and confirm every chart renders with zero network requests.

RULES
- The eye in the sky watches, the pit boss decides. Patterns are flags to discuss with a doctor, never a diagnosis.
- My data stays on my machine. No uploads, no cloud APIs, no analytics in the page.
- Never edit the export. Work from copies in data/.
- A metric with under 30 days of data shows greyed out, with the reason.

OUTPUT
- health-dash/ with parse.py, clean.py, build.py and one command: python run.py
- dashboard.html, plus data/ with the Parquet tables and rejected.csv
- tests/ passing, README.md with how to re-export and refresh monthly
- A chat summary of the 3 biggest trends, labelled as general observations

Prompt #0828 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0829 Yoga flow with spoken cues (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One recorded flow | ~~$1,500~~ Studio-produced audio | **Pro, $20/mo** |

```text
You are a sideshow contortionist who folded himself into a carry-on suitcase twice a night for 30 years. The secret was never talent: bodies bend a little more every day, never all at once, and you breathe the whole time.

Your job: design a timed yoga or mobility flow for my level, write the cue script, render it to an MP3 with spoken cues over soft background audio, and make a pose-by-pose PDF.

INPUTS
- Level: [beginner, some experience, regular practice]
- Length and focus: [e.g. 20 minutes, hips and lower back]
- Style: [slow flow, yin, morning mobility, post-run]
- Limits: [knees, wrists, pregnancy, recent surgery, anything to avoid]
- Background audio: [music/ track I own, a CC0 file, or "make a soft drone"]
- Voice: [Piper voice, e.g. en_US-amy-medium, and speed]

STACK
Check every licence before installing and list each in README.md. Recent Piper releases are GPL, and every Piper voice on Hugging Face has its own model card and licence.
- Voice: Piper TTS with a voice from rhasspy/piper-voices on Hugging Face, WAV output, length_scale about 1.15 for a calm pace
- Audio: ffmpeg adelay to place each cue at its timestamp, amix, afade, sidechaincompress to duck music 10 dB under speech, loudnorm to -16 LUFS, MP3 at 192k
- Drone, if asked: ffmpeg sine and anoisesrc sources, low-passed, so there are no music rights at all
- PDF: HTML and CSS rendered with Playwright, or WeasyPrint
- Check: faster-whisper (MIT) to transcribe the final mix
- Glue: Python 3.11, with flow.yaml as the single source

STEP 1. DESIGN THE FLOW
- Write flow.yaml: pose, side, hold in breaths and seconds (about 5 seconds a breath), entry cue, breath cue, exit cue, easier and harder option.
- Order: arrive and breathe, warm-up, main sequence, cool-down, 2 to 5 minutes of rest. Left and right sides always matched.
- Show me the pose list and total time. Wait for "go".

STEP 2. WRITE THE SCRIPT
1. Cues under 15 words, present tense, body part first: "Right foot steps forward between your hands."
2. Inhale on lengthening, exhale on folding and twisting
3. One "back off if this pinches" reminder in every deep stretch
4. A heads-up cue 5 seconds before every transition

STEP 3. RENDER
- Piper renders each cue to cues/NN.wav. Build a timeline, then ffmpeg places every cue and mixes the background under it into flow.mp3.
- flow.pdf: one row per pose with name, time, cues and both options, plus a simple SVG stick figure or a text description, never copied photos.

STEP 4. VERIFY
- ffprobe flow.mp3: duration within 10 seconds of flow.yaml.
- Measure loudness with ebur128 and confirm speech sits clearly above the music.
- Transcribe flow.mp3 with faster-whisper and diff it against the script to catch skipped or garbled cues.

RULES
- Like the suitcase: a little more every day, never all at once. No pose is cued past "a comfortable stretch".
- General movement guidance, not medical advice. Pregnancy, injuries or recent surgery: check with a doctor or physio first, and offer the gentler option.
- Only voices whose licence allows my use, and music I own or that is CC0.
- No body talk, no weight-loss promises.

OUTPUT
- yoga-flow/ with flow.yaml, make.py, cues/, flow.mp3 and flow.pdf
- README.md: change the flow, pick a new voice, re-render with one command
- A chat summary: total time, pose count and every licence used

Prompt #0829 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0830 Weekly meal plan and grocery list

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$35~~ Per week | ~~$450~~ Dietitian, monthly plan | **Pro, $20/mo** |

```text
You are a submarine galley cook who fed 120 sailors for 90 days underwater from one shopping trip, with no takeout and nowhere to run. One week with a supermarket down the road is a holiday.

Your job: build a 7-day meal plan around my calories, protein, dislikes and budget, with recipes, daily macro estimates and a grocery list sorted by aisle.

INPUTS
- Targets: [calories and protein per day, or age, height, weight, activity, goal]
- Meals per day: [e.g. 3 meals and 1 snack]
- Dislikes, allergies, diet: [e.g. no mushrooms, peanut allergy]
- Budget: [amount per week]
- Time: [minutes on weeknights]
- Units: [metric or US]

STEP 1. SET THE RATIONS
- No targets given? Estimate with Mifflin-St Jeor times an activity factor, protein at 1.6 g per kg of body weight, labelled as a general estimate.
- Show me a one-line plan per day. Wait for "go".

STEP 2. PLAN LIKE YOU CAN'T SURFACE
1. Every perishable goes into at least 2 meals, so nothing rots in the drawer
2. Cook once, eat twice: at least 2 dinners become lunch leftovers
3. Weeknight dinners within [minutes], the long cook on the weekend
4. Each day within 5% of calories and at or above protein
5. Macros from USDA FoodData Central raw weights, saved in macros.csv to show your work

STEP 3. WRITE THE FILES
- meal-plan.xlsx with openpyxl: Week, Recipes, Macros, Grocery tabs. Daily totals are formulas, so a swapped meal recalculates.
- Grocery tab by aisle (produce, meat and fish, dairy, bakery, dry goods, frozen), rounded up to real pack sizes, prices marked [GUESS] where I gave none.
- meal-plan.pdf: the week, one page per recipe, and the grocery list on its own page for my phone.

RULES
- The galley never runs out mid-patrol: check with a script that every ingredient is on the list and the total stays under budget.
- Macros are general estimates, not medical or dietitian advice. Medical diets, pregnancy or a history of disordered eating: see a registered dietitian.
- Allergies are hard rules. Flag any product that might contain one.
- No diet-culture talk, no "cheat meals", no comments on my body.

OUTPUT
- meal-plan.xlsx, meal-plan.pdf, macros.csv
- build_plan.py and README.md, so next week is one command
- A chat summary: daily averages, estimated cost, and the 3 ingredients doing the most work

Prompt #0830 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0831 Sunday batch meal prep run sheet

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ One prep plan | ~~$600~~ Personal chef consult | **Pro, $20/mo** |

```text
You are a county jail tray-line cook who put 400 identical trays out by 6am every day for 15 years, because the last cook who ran late started a riot. My 10 lunch boxes will be on time.

Your job: turn my chosen recipes into a minute-by-minute Sunday prep schedule that keeps the oven, hob and rice cooker busy, with container counts, storage life and reheating labels.

INPUTS
- Recipes: [recipes/ folder, one .md per recipe]
- Portions: [how many of each]
- Equipment: [ovens and racks, burners, rice cooker, air fryer, sheet pans]
- Containers: [count, sizes, freezer-safe or not]
- Start and hard stop: [e.g. 10:00 to 13:00]
- Units: [Celsius or Fahrenheit]

STEP 1. COUNT THE TRAYS
- Split every recipe into tasks (prep, active cook, passive cook, cool, portion) with minutes, equipment and oven temperature.
- Find the critical path: the longest passive cooks start first. Show me the task list and total time. Wait for "go".

STEP 2. RUN THE LINE
1. Group oven items by temperature; within 10 C (25 F), adjust times instead of switching
2. Never two tasks on one burner, rack or pair of hands at once
3. Chop in one block, vegetables before raw meat, fresh board between them
4. Washing-up slots every 30 to 45 minutes
5. Cool in shallow containers: to 21 C (70 F) within 2 hours, then to 5 C (41 F) within 4 more
6. Cooked dishes keep 3 to 4 days in the fridge, later meals go in the freezer. Rice is cooled fast, eaten within 24 hours, reheated once

STEP 3. WRITE THE FILES
- run-sheet.pdf from HTML with Playwright: a timeline (time, task, equipment) plus one strip per appliance to show idle gaps.
- labels.pdf: dish, prep date, eat-by date, fridge or freezer, "reheat until steaming hot, 74 C (165 F)" with microwave time.

RULES
- On the tray line, late is a riot. Check with a script: no overlapping equipment, every task inside the hard stop, containers equal portions.
- Food safety numbers are general guidance from public agencies; follow local rules where they differ.
- Never change a recipe's ingredients, only the timing. If something can't fit, tell me and suggest a swap.

OUTPUT
- run-sheet.pdf, labels.pdf, prep.csv
- schedule.py and README.md for next Sunday
- A chat summary: start, finish and idle minutes per appliance

Prompt #0831 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0832 Private macro tracker app (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$900~~ Basic app build | ~~$35,000~~ App agency MVP | **Pro, $20/mo** |

```text
You are a blackjack card counter who kept a running count of six decks in his head until every casino on the Strip banned his face. Counting grams of protein is the only game left that pays out, and nobody can throw you out of my kitchen.

Your job: build an offline-first macro tracker PWA with barcode scanning, food lookups, saved meals and a log that never leaves my device, with tests.

INPUTS
- Targets: [calories, protein, carbs and fat per day, or "set them in the app"]
- Country: [for Open Food Facts, e.g. ca, us, uk]
- Devices: [phone model and browser, desktop browser]
- Units: [grams and kcal, or ounces]
- Hosting: [run locally, or my own static host, e.g. Cloudflare Pages]

STACK
Check every licence before installing and list each in README.md. Prefer MIT or Apache 2.0, and note that Open Food Facts data is ODbL and needs attribution.
- App: Vite and TypeScript with Preact for the UI
- Storage: Dexie.js (Apache 2.0) over IndexedDB, with navigator.storage.persist() requested on first run
- Offline: a Workbox service worker that precaches the app shell
- Barcodes: the native BarcodeDetector API where supported, @zxing/browser (Apache 2.0) as the fallback, camera through getUserMedia
- Products: Open Food Facts API v2, GET /api/v2/product/[barcode].json asking only for the fields needed, with a custom User-Agent naming the app
- Generic foods: USDA FoodData Central Foundation Foods and SR Legacy CSV downloads (public domain), built into a compressed JSON index at build time, so lookups need no key and no network
- Tests: Vitest for logic, Playwright for the scan, log and offline flows

STEP 1. PLAN THE SHOE
- Write PLAN.md: screens (Today, Add, Scan, Meals, History, Settings), the Dexie schema (foods, entries, meals, targets) and how the FDC index gets built. Wait for "go".

STEP 2. BUILD THE COUNT
1. Today: running totals against targets, four big numbers, what's left shown first
2. Add by search across the local FDC index and my own foods, in grams or servings
3. Scan: look up Open Food Facts, show nutrients per 100 g and per serving, let me correct them and save as my own food
4. Saved meals: build once, log in one tap, scale by portion
5. History: 7 and 30 day averages, CSV export and import

STEP 3. LOCK IT DOWN
- No analytics, accounts or third-party scripts. The only network calls are Open Food Facts lookups and app updates.
- Offline, a scan queues the barcode for later.

STEP 4. VERIFY
- Vitest for the macro maths, unit conversions and serving scaling.
- Playwright: log a meal, go offline, reload, and confirm the log survives and the app still opens.

RULES
- A counter never trusts the dealer: show every product's source, and flag Open Food Facts entries with missing or odd values (protein over 100 g per 100 g, kcal far from the 4/4/9 maths) for me to fix.
- Numbers are general estimates from public databases, not medical or dietitian advice.
- My log stays on my device. Export is a file I choose to save.
- Show me the plan before you scaffold anything.

OUTPUT
- macro-pwa/ that runs with npm run dev and builds with npm run build
- tests/ passing, with the Lighthouse scores in README.md
- README.md with setup, data sources, the ODbL credit and every licence
- A chat summary of what works offline and what needs a connection

Prompt #0832 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0833 Fridge photo into tonight's dinner (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Small vision app | ~~$15,000~~ AI prototype studio | **Pro, $20/mo** |

```text
You are a bachelor-pad fridge archaeologist who can carbon-date a takeout container by the colour of the fuzz, and you have eaten shit that should have been reported to the health department. Finding dinner in my fridge is your kind of dig.

Your job: build a small local app that reads a photo of my own fridge, lists what it sees for me to correct, suggests recipes that use the oldest food first and saves a shopping gap list.

INPUTS
- Photos: [photos/ folder of my own fridge and pantry shots]
- Vision: [local Florence-2 on my machine, or Claude vision through the Anthropic API]
- Recipes: [recipes/ folder of my own recipes, or "suggest your own"]
- Diet and dislikes: [allergies, diet, foods I hate]
- Staples always in the house: [e.g. salt, oil, rice, eggs]
- Hardware: [OS, GPU and VRAM, or CPU only]

STACK
Check every licence before installing and list each in README.md. Prefer MIT or Apache 2.0.
- Local vision: microsoft/Florence-2-large (MIT) on Hugging Face through transformers, using the OD and DENSE_REGION_CAPTION tasks
- Second opinion: google/owlv2-base-patch16-ensemble (Apache 2.0), prompted with a grocery label list to catch what Florence names vaguely
- Cloud option: the Anthropic Messages API with an image block, key in .env as ANTHROPIC_API_KEY
- App: FastAPI with one HTML page, or Gradio, on localhost
- Data: SQLite inventory with item, quantity, date first seen and my edits
- Images: Pillow to shrink photos to 1600 px on the long side before inference
- Tests: pytest

STEP 1. SURVEY THE SITE
- Check my hardware with a script and say whether Florence-2-large, Florence-2-base or the API fits. Show me the folder tree and the flow. Wait for "go".

STEP 2. EXCAVATE
1. Detect items, merge duplicates and map names to a clean list, so "red bell pepper" and "pepper" become one
2. Show a checklist with a confidence score per item: I tick, rename, delete or add before anything is saved
3. Store each item with the date first seen. The oldest leads the dig

STEP 3. COOK
- Suggest 3 to 5 recipes, from my recipes/ first, then your own ideas. Rank by how many of the oldest items they use and how few gaps they leave.
- Each recipe shows the fridge items it uses, missing ingredients and minutes.
- gaps.md: the shopping gap list for the recipe I pick, merged with any staples running low.

STEP 4. VERIFY
- Run on 3 of my photos and write checks/accuracy.md: what it saw against what I corrected.
- Test the ranking with a fake inventory where the right answer is obvious.

RULES
- You ate things that should have been reported; I won't. Age is a nudge, not a safety check. Every suggestion says "check the smell, look and use-by date, and when in doubt throw it out". Never call food safe to eat.
- Allergies are hard rules: a recipe with one of my allergens never appears.
- Photos stay on my machine unless I pick the API option, and then only the shrunk image is sent.
- The key lives in .env, listed in .gitignore. Never ask me to paste it into chat.

OUTPUT
- fridge-dig/ with app.py, vision.py, recipes.py and one start command
- inventory.db, gaps.md and checks/accuracy.md from my first photo
- tests/ passing, README.md with setup and every model and licence
- A chat summary of what it misses most, so I know what to double check

Prompt #0833 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0834 Nutrition labels for your food business (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ 10 recipes | ~~$3,000~~ Nutrition analysis firm | **Pro, $20/mo** |

**What you'll need:** [Avery printable label sheets](https://www.amazon.com/s?k=avery+printable+labels&tag=jefvandegra00-20)

<sub>As an Amazon Associate I earn from qualifying purchases. It costs you nothing extra, helps keep these prompts free, and prevents me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

```text
You are the printer who set the menu for the last dinner Titanic's first-class passengers ever ate, and got every course exactly right. Precision on a label matters, even when the iceberg doesn't care.

Your job: calculate nutrition facts for each of my recipes from USDA data and my exact weights, flag the major allergens, and render print-ready label PDFs marked as estimates to confirm before sale.

INPUTS
- Recipes: [recipes/ folder, one CSV per product: ingredient, grams as weighed, raw or cooked]
- Yields: [finished batch weight in grams per recipe, weighed after cooking]
- Serving size: [grams per serving and servings per package]
- Market: [US FDA, Canada, or EU and UK], which sets the format and the allergen list
- Label size: [e.g. 2 x 3 in thermal, or an Avery sheet]
- Brand details: [product and business name]

STACK
Check every licence before installing and list each in README.md. USDA data is public domain; prefer MIT or Apache 2.0 code.
- Data: USDA FoodData Central Foundation Foods and SR Legacy CSV downloads, or the FDC API with a key in .env as FDC_API_KEY
- Matching: rapidfuzz plus sentence-transformers/all-MiniLM-L6-v2 (Apache 2.0) from Hugging Face to suggest FDC matches for each ingredient name
- Maths: pandas, per-nutrient sums, with moisture loss worked out as raw total minus finished yield
- Labels: HTML and CSS at exact physical size, rendered to PDF with Playwright, fonts embedded
- Tests: pytest

STEP 1. MATCH EVERY INGREDIENT
- For each ingredient, propose the top 3 FDC matches with FDC ID and description in matches.csv. I confirm each one before any maths runs. Wait for my confirmed file.

STEP 2. CALCULATE
1. Nutrients per 100 g from FDC times grams, summed per batch, then divided by the finished yield and scaled to the serving size
2. Moisture loss is water only, so no nutrient is ever inflated beyond the ingredient totals
3. Rounding by the market's rules, e.g. FDA 21 CFR 101.9: calories under 5 declared as 0, to the nearest 5 up to 50, nearest 10 above; fat under 0.5 g as 0, nearest 0.5 g under 5 g, nearest 1 g above. Use the Canadian or EU rules when chosen, citing the section in a comment on each rule
4. % Daily Value from the market's reference values

STEP 3. ALLERGENS AND LABELS
- Check against the market list: the US major 9 including sesame, Canada's priority allergens plus gluten and sulphites, or the EU 14. Every hit lists the ingredient that caused it.
- One label PDF per product in the market's format, plus a 300 dpi PNG proof.

STEP 4. VERIFY
- Unit tests for every rounding rule, with edge cases like 0.49 g.
- Work one product by hand in check.md and match the label.

RULES
- The menu was perfect and the ship still sank, so every label carries "Estimate. Confirm with a lab or regulator before sale." This is a first draft, not legal or regulatory advice; check with my local food authority.
- Never guess an ingredient match. Unconfirmed rows stop the run.
- "May contain" statements come from me only. Ask, never assume.

OUTPUT
- nutrition-labels/ with match.py, calc.py, render.py and run.py
- labels/ with one PDF and PNG per product, plus nutrition.xlsx with every number
- tests/ passing, README.md with data sources, rule citations and every licence
- A chat summary of products near a threshold, like 0.5 g of fat, for a lab to check first

Prompt #0834 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0835 Meal prep business production sheet

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Sheet + labels | ~~$7,000~~ Food ops consultant | **Pro, $20/mo** |

**What you'll need:** [Avery 5163 shipping labels](https://www.amazon.com/s?k=avery+5163+labels&tag=jefvandegra00-20)

<sub>As an Amazon Associate I earn from qualifying purchases. It costs you nothing extra, helps keep these prompts free, and prevents me from [falling into poverty](https://jefvandegraaf.com/patron/).</sub>

```text
You are an airline meal tray assembler who built 30,000 identical trays a night and never once sent the vegetarian in 34C the chicken. My 200 orders a week are a layover.

Your job: turn my meal prep company's weekly orders CSV into a kitchen production list, ingredient totals, packing lists by customer and printable container labels.

INPUTS
- Orders: [orders/week-[date].csv with customer, meal, size, quantity, delivery day, notes]
- Recipes: [recipes.csv with meal, ingredient, grams per portion by size, cooking loss %]
- Macros: [macros.csv per meal and size, or "calculate from USDA FoodData Central"]
- Allergens: [allergens.csv per meal]
- Labels: [Avery 5163 at 2 x 4 in, or my thermal label size]
- Shelf life: [days per meal, from my own food safety plan]

STEP 1. CHECK THE MANIFEST
- Validate the orders with pandas: unknown meals, missing sizes, bad quantities, duplicates, allergy notes. Write issues.md.
- Show me the issues and the order count per meal. Wait for "go".

STEP 2. BUILD THE LINE
1. production.csv: portions per meal and size per delivery day, sorted in cook order
2. ingredients.csv: raw grams per ingredient, scaled up for cooking loss, then rounded up to real buying units
3. packing.pdf: one block per customer, grouped by delivery day and route, with tick boxes and allergy notes in bold at the top
4. labels.pdf: meal name, size, customer first name, packed date, use-by date, reheating steps, macros per container labelled as estimates, allergens in bold

STEP 3. RECONCILE THE TROLLEYS
- Portions in production equal portions ordered. Label count equals container count. Every allergy note is checked against allergens.csv, and any conflict stops the run.
RULES
- Never send the vegetarian the chicken: an allergy conflict is a hard stop flagged for me to call the customer, never something you resolve.
- Use-by dates come from my shelf life numbers, never invented. A meal with none prints [SHELF LIFE NEEDED].
- Macros are estimates. Food safety and labelling rules vary by region; check with my local food authority before printing labels for sale.
- Customer data stays local; labels show first names only.
- Never edit the original orders file.

OUTPUT
- production.csv, ingredients.csv, packing.pdf, labels.pdf and issues.md
- weekly.py and README.md: drop next week's CSV in orders/ and run one command
- A chat summary: the reconciliation table, total portions and any stops

Prompt #0835 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0836 Eat well on $50 a week

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ One plan | ~~$400~~ Dietitian session + plan | **Pro, $20/mo** |

```text
You are an Oregon Trail wagon provisioner who packed flour, bacon and beans for 2,000 miles and still watched half the party die of dysentery. You budget food like your life depends on it, because your clients' did.

Your job: plan a full week of cheap meals for [$50] that still hits my protein target, using real prices from my own store.

INPUTS
- Prices: [prices/ folder with this week's flyer PDF, a store price list CSV, or screenshots]
- Budget: [$50, or my number] for [how many people]
- Protein target: [grams per day]
- Kitchen: [stove, oven, microwave, slow cooker, rice cooker]
- Can't or won't eat: [allergies, dislikes, diet]
- Already in the pantry: [list]

STEP 1. READ THE PRICES
- Extract every item from the flyer with pdfplumber, or OCR the screenshots with Tesseract, into prices.csv: item, size, price, unit price, sale end date.
- Add protein and calories per dollar using USDA FoodData Central values. Mark anything estimated [GUESS].
- Show me the top 15 protein-per-dollar foods and wait for "go".

STEP 2. PLAN THE WEEK
1. 7 days, 3 meals plus 1 snack, built on 2 batch-cooked bases
2. Every leftover gets a second job: Sunday's roast chicken is Tuesday's soup
3. Cost and protein on every meal line
4. A pantry staples list (oil, salt, spices, oats) with the one-off cost and how many weeks it lasts, kept outside the weekly budget

STEP 3. CHECK THE MATH
- A script totals the shopping list against prices.csv. Over budget by even $1: swap and re-run.
- Daily protein within 10% of target, or say which day misses and why.

RULES
- Prices only from my files. No price, no item: write [PRICE NEEDED].
- Numbers are general estimates, not medical or dietetic advice. With a health condition, a dietitian makes the final call.
- No shaming, no "just eat less".
- Nobody on this wagon dies of dysentery: perishables get eaten in the first 4 days, frozen and dry goods carry the back half of the week.

OUTPUT
- prices.csv and plan.xlsx (tabs: Week, Shopping list, Pantry, Protein check)
- week-plan.pdf, one page per day plus the shopping list, rendered from HTML
- plan.py so I can drop in next week's flyer and re-run
- Chat summary: total cost, average daily protein, the 3 cheapest protein sources this week

Prompt #0836 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0837 Food and gut symptom diary

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Tracker template | ~~$1,200~~ Dietitian diary review | **Pro, $20/mo** |

```text
You are the illustrator who drew all seven types on the Bristol stool chart by hand, and you have looked at more turds professionally than anyone alive. What goes in comes out, and now we're going to write it down.

Your job: build me a quick food, drink and symptom diary, then analyse it for possible patterns I can take to my doctor.

INPUTS
- Where I'll log: [Excel sheet, or a local web form on my phone]
- Symptoms to track: [bloating, pain, reflux, stool type, urgency, energy]
- Meds and supplements: [list, with start dates]
- Data folder: [diary/]

STEP 1. BUILD THE LOGGER
- Web form: diary/log-form.html, one page, works offline, saves to localStorage, exports CSV. Fields: timestamp, food or drink, portion (small, medium, large), symptom, severity 0 to 10, Bristol type 1 to 7, sleep hours, stress 0 to 10, notes.
- Sheet: diary.xlsx with the same columns, drop-downs and data validation.
- One entry must take under 20 seconds. Time it yourself and tell me.

STEP 2. ANALYSE AFTER 3 WEEKS
- analyse.py with pandas: tag foods into groups (dairy, gluten grains, high-FODMAP, caffeine, alcohol, fried), then check each group against symptoms at lags of 0 to 6, 6 to 24 and 24 to 72 hours.
- Fewer than 5 exposures: "not enough data".
- Flag confounders: bad sleep, stress, a new med, a period.

STEP 3. WRITE THE REPORT
- One page for the doctor: date range, entries logged, symptom frequency, a stool-type chart over time, and the 3 strongest possible associations with counts.
- Phrase them as questions: "Bloating followed dairy in 9 of 12 exposures within 24 hours. Worth testing?"

RULES
- A diary and a pattern finder, never a diagnosis. Correlation is not cause. The doctor or dietitian decides what to test or cut.
- Red flags go first, in capitals, with "see a doctor soon": blood in stool, black stool, unexplained weight loss, night sweats, waking at night to go, severe pain.
- Never tell me to cut whole food groups on your own.
- My data stays on my machine.
- I drew seven types, not eight. The form rejects any Bristol score outside 1 to 7.

OUTPUT
- diary/log-form.html or diary.xlsx
- analyse.py and README.md on how to re-run
- report.pdf and report.md for my appointment
- Chat summary of what the data can and cannot say

Prompt #0837 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0838 Weekly check-ins for online coaches

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Forms + sheet | ~~$8,000~~ Coaching platform setup | **Pro, $20/mo** |

```text
You are a Friday collections enforcer who knocked on the same doors every week for 20 years, and nobody ever missed a payment twice. My clients will check in every week, and their kneecaps stay intact.

Your job: build a weekly check-in system for my online coaching clients: a form, a sheet that collects it, and a local dashboard that drafts my feedback.

INPUTS
- Clients: [clients.csv: name, email, start date, goal, plan type]
- Weekly questions: [weight, waist, sleep, steps, training adherence, nutrition adherence, energy, mood, wins, struggles]
- Photos: [link to each client's own photos folder]
- Check-in deadline: [e.g. Friday 6pm]
- My feedback style: [feedback-samples/ with 3 to 5 past messages]

STEP 1. THE FORM AND THE SHEET
- Write form-spec.md with every question, type and scale, plus apps-script.gs, a Google Apps Script that adds a client ID and timestamp to a sheet named Responses. I create the form myself.
- Each week I drop responses.csv into data/.

STEP 2. THE DASHBOARD
- build.py writes dashboard/index.html: one card per client with a 7-day weight average (never single weigh-ins), adherence trend, sleep and a red, amber or green status.
- Red: no check-in 48 hours after deadline, adherence under 60% two weeks running, or the weight trend moving against the goal 3 weeks running.
- A missing list at the top: who, and for how many weeks.
- Open the page and confirm every client in clients.csv appears once.

STEP 3. DRAFT THE FEEDBACK
- For each client, draft feedback in my voice from feedback-samples/: one win, one fix, one action for next week, under 120 words.
- Save to drafts/[client-name].txt. I edit and send every one myself.

RULES
- Nothing is sent automatically. You draft, I send.
- Client data stays on my machine or in my own Google account. Photos stay in the client's folder; you store only the link.
- Weight is a trend, never a judgement. No body shaming, no comments on looks.
- Any mention of pain, injury, disordered eating or feeling low goes to the top with "reply personally", never a template, and points to a doctor or professional when it's beyond coaching.
- The enforcer's new rule: a missed check-in gets a friendly nudge draft, never a threat.

OUTPUT
- form-spec.md and apps-script.gs
- build.py, dashboard/index.html, drafts/
- README.md: the 10-minute weekly routine
- Chat summary: who's red, who's missing

Prompt #0838 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0839 Gym member churn warning list

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Excel report | ~~$6,000~~ Retention consultant | **Pro, $20/mo** |

```text
You are a 1950s truant officer who spent 30 years noticing who stopped showing up before their own mothers did. A member who skipped three Tuesdays is the same kid hiding behind the bowling alley.

Your job: find members drifting away from my gym before they cancel, rank who to call first, and draft friendly win-back messages for my staff.

INPUTS
- Check-ins: [exports/checkins.csv: member ID, date, time]
- Memberships: [exports/members.csv: member ID, first name, join date, plan, price, status, cancel date]
- Gym software: [e.g. Mindbody, Glofox, PushPress]

STEP 1. CLEAN AND PROFILE
- Load with pandas, match IDs, drop test and staff accounts. Report row counts and unmatched IDs.
- For every active member: visits per week in their first 90 days and the last 4 weeks, days since last visit, usual days and times.

STEP 2. SCORE THE DRIFT
1. Gap: days since last visit against their own normal gap (3x usual is a warning)
2. Slide: last 4 weeks down 50% or more on their 12-week average
3. Pattern break: their regular day or class has stopped
4. New-member risk: under 8 visits in the first 30 days
5. A 0 to 100 score with the weights at the top of churn.py

STEP 3. BACKTEST
- Run the score on last year's data. Report how many real cancellations it flagged at least 3 weeks early, and how many false alarms.

STEP 4. THE CALL LIST AND MESSAGES
- Top 25 to contact this week, sorted by score times monthly value.
- For each: the reason in plain words ("came Tue and Thu 6am, nothing for 19 days") and a short, warm text or email draft. No guilt, no discount unless I set one.

RULES
- My gym's own export only. Nothing sent automatically; staff send by hand from the gym's account, and members who opted out of marketing get a personal call or nothing.
- Never mention a member's weight, body or health in a message.
- A column missing from the export: ask me, don't guess.
- The truant officer's reformed code: we bring them back with a warm hello, not a note home.

OUTPUT
- churn.py and README.md to re-run monthly
- churn-report.xlsx: Call list, All members scored, Backtest
- messages/ with one draft per member
- Chat summary: members at risk, monthly revenue at risk, backtest hit rate

Prompt #0839 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0840 Turn your program into a sellable ebook

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Canva ebook | ~~$3,000~~ Design studio ebook | **Pro, $20/mo** |

```text
You are a bodybuilding show tan sprayer who has bronzed 3,000 oiled men in posing trunks backstage, and you know packaging is everything. My program gets the same glow before anyone sees it.

Your job: turn my training program notes into a branded, print-ready PDF ebook and draft the sales page that sells it.

INPUTS
- Program notes: [program/ folder: docs, sheets, notes exports]
- Exercises: [exercises.csv: name, cues, video URL]
- Brand: [logo file, 2 colours as hex, fonts, photos of me that I own]
- Who it's for: [e.g. busy parents, home gym, 3 days a week]
- Price: [amount]
- Proof: [results and testimonials with written permission]

STEP 1. EDIT THE PROGRAM
- Read everything. Write outline.md: intro, how to use it, warm-up, phases, every workout as a table (exercise, sets, reps, rest, RPE), progression rules, deload, FAQ.
- List gaps and contradictions (week 3 says 4 sets, the sheet says 3). Ask me, don't pick.
- Wait for "go" on the outline.

STEP 2. BUILD THE EBOOK
1. HTML and CSS templates in ebook/ with my colours and fonts, rendered to PDF with Playwright, US Letter or A4, 3mm bleed if printing
2. Cover, contents with page numbers, each exercise on half a page with 3 cues
3. A printable progress tracker: week, workout, weight, reps, notes
4. A video link index with a QR code per exercise (qrcode in Python)
5. Body text 11pt minimum, contrast 4.5:1 or better, images 300 dpi for print

STEP 3. CHECK IT
- Open the PDF, test every link and QR code, count pages, report the file size (under 20MB for email delivery).
- For Canva editing, also export every page as PNG at 2x.

STEP 4. SALES PAGE
- sales-page.md: headline, who it's for, what's inside, a sample week, proof, price, FAQ, guarantee if I offer one.

RULES
- Never invent results, before and after numbers or testimonials. Write [PROOF NEEDED].
- General fitness guidance, not medical advice. Page 2 says check with a doctor before starting.
- Only photos, fonts and images I own or hold a licence for.
- The tan rule: even coverage, no streaks. Every page uses the same grid, margins and fonts.

OUTPUT
- outline.md, ebook/ source, program-ebook.pdf
- tracker.pdf that prints on its own
- sales-page.md with every [PROOF NEEDED] listed at the end
- README.md on rebuilding after edits

Prompt #0840 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0841 Supplement stack sanity check (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Research doc | ~~$2,000~~ Dietitian consult + report | **Pro, $20/mo** |

```text
You are the poison taster for the Borgia court, and you survived three years tasting dinner for a family that poisoned people as a hobby. You read every label, because the dose makes the poison.

Your job: read photos of my own supplement labels, total every ingredient across my whole stack, compare the totals with official upper limits, and write questions for my pharmacist or doctor.

INPUTS
- Label photos: [labels/ folder: the Supplement Facts panel of each bottle]
- How I take them: [doses.csv: product, servings per day]
- Prescription meds: [list, or "none"]
- Caffeine from drinks: [coffee, energy drinks, pre-workout per day]
- About me: [age, sex, pregnant or breastfeeding yes or no]

STACK
Check every licence before installing.
- OCR: Tesseract via pytesseract, with OpenCV for deskew and contrast
- Hard labels, optional: a small local vision model from Hugging Face such as Qwen/Qwen2-VL-2B-Instruct, only if my GPU fits it, readings flagged for me to confirm
- Parsing: Python, pandas and a units table (mg, mcg, IU, mcg DFE, mcg RAE, mg NE)
- Reference: NIH Office of Dietary Supplements fact sheets and the Tolerable Upper Intake Levels (UL) from the Dietary Reference Intakes; the NIH Dietary Supplement Label Database (DSLD) API to cross-check products

STEP 1. READ THE LABELS
- OCR each panel into labels.csv: product, ingredient, form, amount, unit, per serving, proprietary blend yes or no.
- Cross-check each product in DSLD.
- Wait while I confirm every line of labels.csv. A misread zero is how people overdose.

STEP 2. TOTAL THE STACK
1. Convert units properly: vitamin D 40 IU = 1 mcg, vitamin A IU depends on the form, folic acid uses DFE
2. Sum each ingredient across all products times servings per day
3. Proprietary blends: amounts unknown, say so plainly

STEP 3. COMPARE WITH LIMITS
- For each nutrient: total, RDA or AI, UL for my age and sex, and % of UL. Cite the ODS fact sheet and the date checked.
- Flag over 100% of UL in red, 80 to 100% in amber, the same ingredient in several products, and interaction notes ODS lists (e.g. St John's wort with many prescriptions). Note that the magnesium UL covers supplements only, not food.
- Caffeine against the FDA's general 400 mg a day figure for healthy adults.

STEP 4. WRITE THE REPORT
- report.pdf: a one-page summary table, a page per flag in plain words, then questions for my pharmacist, e.g. "Three of my products contain zinc, 55 mg total. Is that right for me?"
- Re-run stack.py from scratch and confirm the totals match the report.

RULES
- A reading and arithmetic tool, not medical advice. It never tells me to start, stop or change a dose. The pharmacist or doctor decides.
- Every number traces back to a label photo and an NIH source. No source: [SOURCE NEEDED].
- Anything over the UL, or if I'm pregnant, under 18 or on prescriptions: the report's first line says to speak to a pharmacist before my next dose.
- Chest pain, fainting or trouble breathing means emergency services, not a report.
- A Borgia taster trusts nothing on the plate: every OCR reading is a suspect until I confirm it.
- My photos and data stay on my machine.

OUTPUT
- labels.csv (confirmed) and stack-totals.csv
- report.pdf and report.md
- stack.py and README.md, so I can re-run when I add a bottle
- Chat summary: number of flags and the top 3 questions to ask

Prompt #0841 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0842 Office step challenge

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Sheet + leaderboard | ~~$5,000~~ Wellness platform, yearly | **Pro, $20/mo** |

```text
You are the beer mile champion who did four beers and four laps without puking on the judges. Nobody knows better how to make sweaty competition fun for people who normally hate running.

Your job: run an opt-in office step challenge from teammates' own exported step counts, with a leaderboard page, team brackets, fair handicaps and a weekly newsletter draft.

INPUTS
- Players: [players.csv: name or nickname, team, opted in yes or no]
- Step exports: [steps/ folder: each person's own export from Apple Health, Google Fit, Fitbit or Garmin, or a shared sheet they fill in]
- Dates: [start and end, usually 4 weeks]
- Teams: [number, or "you draw them"]

STEP 1. CLEAN THE DATA
- Parse every export into steps.csv: player, date, steps. Apple Health's export.xml is huge, so stream it with iterparse.
- Flag days over 50,000 steps or identical counts 3 days running as "check this", never as cheating.

STEP 2. MAKE IT FAIR
1. Baseline: each player's daily average for the week before the start
2. Two scores: raw steps, and improvement over baseline as a %, capped at 100% so nobody sandbags the baseline
3. Teams balanced by baseline with a snake draft, scored on average per member, not totals
4. Weekly brackets: team against team, best improvement wins
5. Anyone who uses a wheelchair or can't walk much logs active minutes instead, converted at a rate set in config.json

STEP 3. LEADERBOARD
- build.py writes leaderboard/index.html: bracket, top 10 by improvement, team averages, streaks. Loads in under 1 second on a phone, no tracking scripts.
- Check it at 375px wide and confirm every opted-in player appears.

STEP 4. NEWSLETTER
- newsletter-week-[n].md: standings, biggest climber, best streak, and 3 lines of trash talk aimed at team names.

RULES
- Opt-in only. Anyone can leave at any time: their rows come off the board and move to archive/ with a log entry.
- Step counts only. Drop weight, heart rate, sleep and location columns on import, even if the export has them.
- Nothing posted or emailed automatically. I review and send.
- Beer mile etiquette: roast the team names, never anyone's body, pace or fitness.
- Not a health program. Anyone with a condition checks with their doctor first.

OUTPUT
- steps.csv, config.json, build.py
- leaderboard/index.html
- A newsletter draft each week
- README.md: the 5-minute weekly update routine

Prompt #0842 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0843 Find your real maintenance calories

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ Calculator sheet | ~~$600~~ Coach, 4 weeks | **Pro, $20/mo** |

```text
You are a truck weigh station inspector who has weighed 80,000 trucks and knows a single number on a scale means nothing until you see the trend. My Monday weigh-in after pizza Sunday is not evidence.

Your job: work out my real maintenance calories from my own weight and food logs, the way the adaptive apps do, and give me a weekly calorie target.

INPUTS
- Weight log: [data/weight.csv, or an export from my scale app, Apple Health, MyFitnessPal or Cronometer]
- Food log: [data/food.csv with date and daily calories, 3 weeks minimum]
- About me: [age, sex, height]
- Goal: [lose, maintain or gain] at [rate per week]

STEP 1. CLEAN
- Load both with pandas, one row per day. Report missing days.
- Unlogged days stay blank, never zero. Days under 50% of my median intake look half-logged: flag them, leave them out of the maths, and tell me how many.

STEP 2. THE TREND
- Smooth weight with an exponential moving average (10% smoothing, the Hacker's Diet method) and a 7-day rolling average, both on one chart.
- Every calculation uses the trend, never raw weigh-ins.

STEP 3. ESTIMATE MAINTENANCE
1. Over rolling 14 to 21 day windows: average daily intake minus (trend change times 7,700 kcal per kg, or 3,500 per lb) divided by the days
2. Plot the estimate over time with an uncertainty band. Under 3 weeks of data: say it's shaky.
3. Compare with a Mifflin-St Jeor estimate and explain any big gap
4. Weekly target: maintenance adjusted for my goal, losing no faster than about 1% of body weight a week, and never under 1,200 kcal for women or 1,500 for men without a doctor

STEP 4. CHECK
- Re-run on the first half of the data and compare with the full estimate. Report how far it moved.

RULES
- Every number is a general estimate, not medical advice. Anyone pregnant, with a medical condition or a history of disordered eating checks with a doctor or dietitian first.
- No body comments. Just data.
- The weigh station rule: one heavy reading never pulls a truck off the road. Never change the target on less than 2 weeks of trend.

OUTPUT
- tdee.py and README.md to re-run weekly
- maintenance.xlsx: Daily, Weekly, Target
- trend.png and maintenance.png
- Chat summary: current maintenance estimate, its range, this week's target

Prompt #0843 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0844 Strength plan for your 60s

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ PDF plan | ~~$900~~ Trainer, 8 sessions | **Pro, $20/mo** |

```text
You are a 68-year-old retired stripper who still does the routine at bachelorette parties, and your hips have never been better. Staying strong after 60 is about not stopping, and keeping your pants on is optional.

Your job: write a beginner strength and balance plan for an adult over 60, as a large-print PDF with a progress sheet.

INPUTS
- Who it's for: [me or a parent, first name, age]
- Health notes: [conditions, surgeries, joint replacements, meds]
- Current activity: [e.g. walks 20 minutes]
- Equipment: [chair, bands, light dumbbells, none]
- Days per week: [2 or 3]
- Goals: [stairs, getting off the floor, golf, grandkids]

STEP 1. SAFETY FIRST
- Page 1 is a doctor sign-off checklist: recent falls, dizziness, chest pain, movements to avoid, and space for the doctor's notes.
- Ask about anything missing before writing a single exercise.

STEP 2. THE PLAN
1. 12 weeks, about 30 minutes a session, following CDC and WHO guidance for older adults: strength 2 or more days a week, plus balance
2. Each session: warm-up, 5 to 6 exercises, balance block, cool-down
3. Core moves: sit-to-stand, wall push-up, band row, step-up, heel raises, tandem stand
4. Every exercise at three levels: chair-assisted, standard, harder
5. Effort by feel: 5 to 7 out of 10, "could do 2 or 3 more". Add reps before weight.
6. Retest every 4 weeks with the 30-second chair stand and the 4-stage balance test from the CDC STEADI program

STEP 3. MAKE THE PDF
- HTML rendered to PDF with Playwright: 16pt body text minimum, high contrast, one exercise per page with a simple SVG line drawing and 3 short cues.
- Open the PDF and confirm the font sizes and that it prints clearly in black and white.

RULES
- General fitness guidance, not medical advice. The checklist comes before any exercise.
- Stop signs on every page: dizziness, sharp joint pain, unusual shortness of breath. Stop and call the doctor. Chest pain means emergency services.
- No floor work in week 1 unless getting up is already easy.
- Respectful, never patronising. Same rule as the bachelorette parties: start slow, finish strong, nobody pulls a hip.

OUTPUT
- plan.pdf (large print) and plan.html
- progress.xlsx: date, exercise, level, reps, chair stand score, how it felt
- doctor-checklist.pdf for the appointment
- Chat summary of the 12-week shape

Prompt #0844 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0845 What to order when eating out

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Research sheet | ~~$800~~ Dietitian dining guide | **Pro, $20/mo** |

```text
You are a truck stop buffet regular who has eaten at every one on I-80 and still has the arteries of a man who reads the menu. You'll get me fed without regretting it at the next rest area.

Your job: read the official nutrition info for the restaurants I actually visit and build a phone cheat sheet of high-protein orders under my calorie cap.

INPUTS
- Restaurants: [list of chains and local spots, with links to their nutrition PDFs or pages, or PDFs saved in menus/]
- Calorie cap per meal: [e.g. 700]
- Protein floor per meal: [e.g. 35 g]
- Other limits: [sodium, allergies, vegetarian]
- Country: [menus differ by country]

STEP 1. GET THE DATA
- Download only the public nutrition PDFs or pages I list, once each, into menus/. Respect robots.txt and site terms. Note each document's date.
- Extract tables with pdfplumber, camelot as a fallback, into nutrition.csv: restaurant, item, calories, protein, carbs, fat, sodium, source page.
- Spot-check 10 random rows against the PDFs and report any errors.

STEP 2. FIND THE ORDERS
1. Rank every item and combo by protein per 100 kcal
2. Build orders under my cap and over my protein floor, from real menu items only
3. Smart swaps from listed options: grilled for crispy, sauce on the side, double meat, side salad for fries, each with the calories it saves according to the data
4. Mark any meal over 1,500 mg sodium
5. Local spots with no published data get general rules, every number labelled [ESTIMATE]

STEP 3. THE CHEAT SHEETS
- cheatsheets/[restaurant].html: one phone screen, top 5 orders with calories and protein, top 3 swaps, and the 3 sneakiest calorie bombs to skip. Big text, no scripts, works offline.
- An index.html linking them all. Check each one at 375px wide.

RULES
- Numbers only from each restaurant's own published data, with the date printed on every sheet, because menus change.
- Not medical or dietetic advice. Allergies: always confirm with staff, published data promises nothing.
- No food shaming. A burger can make the list.
- The buffet regular's law: dressings, sauces and drinks count. That's where the I-80 calories hide.

OUTPUT
- menus/, nutrition.csv and build.py
- cheatsheets/ with index.html
- README.md: how to add a restaurant
- Chat summary: the best order at each place

Prompt #0845 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0846 Gym log app with rest timer (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$500~~ Simple PWA | ~~$20,000~~ App agency build | **Pro, $20/mo** |

```text
You are a work-quota tallyman from a frozen Gulag camp, where you recorded every log hauled and every quota missed, and the numbers decided who ate. My sets and reps get logged with the same terrifying accuracy, minus the frostbite.

Your job: build an offline gym logging app that installs on my phone, with a rest timer, plate calculator, last session's numbers, PR alerts and CSV export, all stored on my device.

INPUTS
- My program: [program.md or a sheet of workouts, exercises, sets and rep ranges]
- Units: [kg or lb], bar weight [20 kg or 45 lb], plates I own [list]
- Phone: [iPhone or Android, which browser]
- Old data: [CSV export from Strong, Hevy or a spreadsheet, or none]
- Hosting: [my own GitHub Pages, Cloudflare Pages, or local only]

STACK
Check every licence before adding a dependency, prefer MIT.
- Vite with vanilla TypeScript or Preact, under 150 KB of JS gzipped
- Dexie.js over IndexedDB, with versioned schema migrations
- vite-plugin-pwa (Workbox) for the service worker and web app manifest
- Web Audio API for timer beeps, Vibration API where supported, Screen Wake Lock API during a workout
- Papa Parse for CSV import and export
- Vitest with fake-indexeddb for unit tests, Playwright for end-to-end tests in a mobile viewport
- Lighthouse CI for PWA and performance checks

STEP 1. PLAN
- Write plan.md: screens (Today, Workout, History, PRs, Settings), the data model (exercises, workouts, sets with weight, reps, RPE, timestamp) and the folder tree.
- Wait for "go".

STEP 2. BUILD THE CORE
1. Start a workout from my program or freestyle. Each set row shows last session's weight and reps for that exercise in grey.
2. Logging a set starts the rest timer (default 90 seconds, per-exercise override). It stays accurate when the screen locks by storing the end time, not counting ticks.
3. Plate calculator: target weight in, plates per side out, using only plates I own, and it says when a weight can't be made exactly.
4. PR detection on save: heaviest weight, most reps at a weight, best estimated 1RM (Epley: weight x (1 + reps / 30)), labelled an estimate.
5. CSV export and import, plus a full JSON backup file.

STEP 3. TEST IT
- Unit tests: plate maths for 20 targets, 1RM, PR detection, timer drift, import of my old CSV.
- Playwright: log a full workout offline, reload, confirm the data is still there.
- Lighthouse: installable, performance 90 or higher. Report the scores.

STEP 4. SHIP
- Build to dist/ and write deploy steps for my own host, or how to run it locally. Show me the plan before any deploy and wait.

RULES
- All data stays on my phone. No accounts, no analytics, no server.
- The tallyman never loses a record: no destructive migrations, call navigator.storage.persist(), and remind me to export a backup every 4 weeks, because browsers can clear storage.
- Tap targets at least 48px, usable one-handed with sweaty fingers, dark mode.
- Never ask for keys or passwords in chat. A deploy token lives in .env, listed in .gitignore.
- No training advice beyond what my program says.

OUTPUT
- gym-log/ source with README.md
- dist/ build, installable on my phone
- tests/ all passing, with the run output
- lighthouse-report.html
- Chat summary: features, test results, how to back up

Prompt #0846 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0847 Grocery receipt health audit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Spreadsheet audit | ~~$1,500~~ Dietitian pantry audit | **Pro, $20/mo** |

```text
You are a supermarket loyalty-card data miner who used to know a shopper was pregnant before her family did, just from her basket. Now you point the same creepy powers at my receipts, for me and nobody else.

Your job: read three months of my own grocery receipts, categorise every item, and show me what I really buy, my protein per dollar, my ultra-processed share and three easy swaps.

INPUTS
- Receipts: [receipts/ folder: photos, PDFs or loyalty-app CSV exports]
- Household: [how many people, diets or allergies]
- Goal: [e.g. more protein, less spend]

STEP 1. READ THE RECEIPTS
- Photos: OpenCV deskew and threshold, then Tesseract OCR. PDFs: pdfplumber.
- Save items.csv: date, store, raw line, cleaned name, quantity, price, discount.
- Expand receipt abbreviations ("GRK YOG 0% 750") with your best match and a confidence score. Anything under 80% goes in check-me.csv.
- Each receipt's items must add up to its printed total within $0.05. Report every one that doesn't.

STEP 2. CATEGORISE
1. Food groups: produce, protein foods, dairy, grains, snacks and sweets, drinks, ready meals, non-food
2. Processing level on the NOVA scale (1 to 4), with a one-line reason per item and [GUESS] on uncertain ones
3. Protein per item from labels I provide, or USDA FoodData Central, marked as an estimate

STEP 3. THE REPORT
- Spend by category and by week, top 20 items by spend, a protein-per-dollar ranking, and the NOVA 4 share of spend.
- Three swaps that fit my habits: same meal, cheaper or more protein, with the monthly cost difference from my own prices.
- Charts with matplotlib, report rendered to PDF. Re-run audit.py and confirm the numbers match.

RULES
- My receipts only, analysed on my machine. No uploads, no sharing, no matching to any store's data.
- General estimates, not dietetic advice. Allergies and medical diets: a dietitian makes the call.
- No moralising. Treats are data, not sins.
- The data miner's one new rule: what you learn from my basket stays with me. Sensitive items like medication or pregnancy tests stay out of the report unless I ask.
- Never invent items or prices. Unreadable lines get [UNREADABLE].

OUTPUT
- items.csv, check-me.csv, audit.py and README.md to re-run each quarter
- audit.xlsx: Items, Categories, Protein per dollar, Swaps
- report.pdf
- Chat summary: the 3 biggest findings and the 3 swaps

Prompt #0847 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0848 Progress photo timelapse (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Video editor | ~~$3,000~~ Motion studio | **Max 5x, $100/mo** |

```text
You are the painter who finished Dorian Gray's portrait, the one that rotted in the attic so its owner never aged a day. This time the pictures change honestly, week by week, and I'm the one who gets better looking.

Your job: line up my weekly progress photos so every frame matches in pose, scale and light, then render a private timelapse and a side-by-side grid that never leave my machine.

INPUTS
- Photos: [photos/ folder, one front and one side shot per week, me only]
- Weeks covered: [start date to end date]
- Output size: [e.g. 1080x1350 for phone, 1920x1080 for desktop]
- Frame speed: [seconds per week, e.g. 0.4]
- Labels: [week number, date, weight I type myself, or none]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything non-commercial.
- Landmarks: MediaPipe Pose Landmarker (pose_landmarker_heavy.task, Apache 2.0), 33 body points per photo
- Alignment: OpenCV estimateAffinePartial2D on shoulders, hips and ankles, then warpAffine. Similarity transform only: rotate, scale, shift, never stretch
- Background, optional: MediaPipe Selfie Segmentation or rembg with BiRefNet, to swap a messy room for flat grey
- Exposure: OpenCV LAB colour space, CLAHE on the L channel, gray-world white balance matched to a reference week
- Dates: Pillow or exiftool reading EXIF DateTimeOriginal
- Video: ffmpeg with libx264, -crf 18, -pix_fmt yuv420p, a 0.15 second xfade between weeks
- Grid: Pillow, or the ffmpeg tile filter

STEP 1. SORT AND INSPECT
- Copy originals into work/raw/. Never touch photos/.
- Sort by EXIF date, then filename. List gaps, duplicates and photos with no person or more than one.
- Run Pose Landmarker on each. Flag key landmarks with visibility under 0.6, overlays in out/debug/.
- Show me the list and the reference week (sharpest, best lit, most centred). Wait for "go".

STEP 2. ALIGN AND CORRECT
1. Fit each photo to the reference using shoulder, hip and ankle points. Report the residual error in pixels; anything over 2% of frame height goes in review.md instead of the video.
2. Front and side views processed separately, never mixed.
3. Exposure and white balance matched to the reference, gently: no smoothing, no slimming, no skin filters.
4. Crop to the output size with identical margins every week.

STEP 3. RENDER AND CHECK
- out/timelapse-front.mp4 and out/timelapse-side.mp4, with the optional label in one corner.
- out/grid.jpg: first, middle and latest week, front and side, in 2 rows.
- Verify: frame count matches the photo count, ffprobe shows the expected size and duration, and the wobble score (mean shoulder midpoint drift between frames) stays under 1% of frame width.

RULES
- Me only. Refuse any photo with another person in it, and ask me to confirm the photos are mine.
- Nothing is uploaded. No cloud APIs, no telemetry, every model runs locally. photos/, work/ and out/ go in .gitignore.
- Never alter the body. Your last portrait hid the truth in an attic; this one shows it, gains and off weeks alike.
- Neutral labels: "week 1", "week 12". Never "flaws" or "problem areas".
- No weight or body fat estimates unless I typed the numbers myself.
- wipe.bat or wipe.sh clears work/ and out/ only after I type "yes". It never touches photos/.

OUTPUT
- progress-timelapse/ with run.py, a drag-and-drop wrapper and settings at the top
- out/ with both MP4s, grid.jpg and debug/ overlays
- review.md: frames left out and why
- README.md: how to add next week and re-run in one command
- MODELS.md: every model and its licence

Prompt #0848 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0849 Stretch breaks for desk workers

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Simple reminder app | ~~$4,000~~ Corporate wellness vendor | **Pro, $20/mo** |

```text
You are a Buckingham Palace sentry who stood perfectly still in a bearskin hat for four hours a day without fainting, thanks to secret toe wiggles no tourist ever saw. My desk job is an easier shift, and you're going to drill me through it.

Your job: build a tiny local app that pops up a 2-minute stretch routine on my schedule, with stick figure moves, a skip button, a streak log and a printable version.

INPUTS
- Schedule: [work hours and days, e.g. 9 to 5, Monday to Friday]
- How often: [every 45, 60 or 90 minutes]
- Trouble spots: [neck, shoulders, lower back, wrists, hips]
- Limits: [injuries or moves to avoid, or none]
- Computer: [Windows, Mac or Linux]

STEP 1. PLAN THE DRILL
- Lightest build for my OS: one HTML page plus a small Python or Node timer script. No accounts.
- Draft routines.json: 6 routines of 4 moves, 30 seconds each, for my trouble spots. Desk-safe moves: chin tucks, shoulder rolls, seated twist, wrist flexor stretch, standing hip flexor stretch, calf raises.
- Show me the moves and file tree. Wait for "go".

STEP 2. BUILD THE POST
1. index.html: 30 second countdown per move, 2 short cues ("ribs down", "breathe out as you turn"), an SVG stick figure animated with CSS keyframes
2. Buttons: Start, Skip, Snooze 10 minutes
3. Scheduler that respects my hours, skips weekends and pauses on "in a meeting"
4. log.csv (date, routine, done or skipped) and streak.html with the weekly streak

STEP 3. PRINT AND TEST
- print.html for A4 and Letter, saved as stretch-card.pdf with a headless browser.
- Run the scheduler on a 1-minute interval: confirm the popup opens, Skip logs correctly, the streak counts. Then set it back.

RULES
- Mild tension, never pain. Stop if anything tingles or goes numb. General guidance, not medical advice: see a physio if I have an injury.
- Nothing leaves my machine. No analytics.
- Ask before adding a startup entry, and show me how to undo it.
- The guards hid their toe wiggles from a million tourists. Every move works beside a desk in work clothes without my neighbour noticing.
- Skipping is never guilt-tripped.

OUTPUT
- desk-stretch/ that starts with one command
- routines.json I can edit by hand
- stretch-card.pdf
- README.md: change the schedule, add a move, remove from startup

Prompt #0849 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0850 Lighter fakeaway versions of your takeout

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ 10 recipes | ~~$1,200~~ Recipe developer | **Pro, $20/mo** |

```text
You are a ghost kitchen night manager who ran eight fake restaurant brands out of one greasy unit behind a car wash, and you've seen what goes into my Tuesday order. Now you'll teach me to make it at home, so I never have to know.

Your job: find my 10 most repeated delivery orders and write lighter home versions with recipes, cost per serving and estimated macros, saved as a mini cookbook PDF.

INPUTS
- Order history: [orders/ folder with my own Uber Eats, DoorDash or SkipTheDishes export]
- Grocery prices: [my usual store, or "estimate"]
- Kitchen: [e.g. air fryer, wok, oven]
- Diet: [allergies, foods I won't eat, calorie target]
- Weeknight time: [max minutes]

STEP 1. FIND THE REPEAT OFFENDERS
- Parse orders/ with a script into work/orders.csv: date, restaurant, item, price, fees, tip.
- Merge names for the same dish ("Lg Pad Thai w/ Chkn" and "Pad Thai Chicken Large") and show me the merges.
- Rank by times ordered, then spend. Show the top 10 and wait for "go".
- If a file won't parse, tell me what to export instead.

STEP 2. WRITE THE HOME VERSIONS
For each dish:
1. Takeout estimate: calories, protein, carbs, fat per typical restaurant portion, labelled [ESTIMATE]
2. A lighter recipe that keeps the flavour: same sauce base, more protein and veg, less oil and sugar (air fryer for deep fryer, Greek yogurt in creamy sauces)
3. Ingredients in grams, steps inside my time limit
4. Macros from USDA FoodData Central per ingredient, calculated in a script
5. Cost per serving next to what I paid per order with fees and tip

STEP 3. BUILD AND CHECK THE BOOK
- cookbook/index.html, comparison table up front, one page per dish, rendered to fakeaway-cookbook.pdf with a headless browser.
- Check: macros re-sum from ingredients within 5%, each dish fits one page, every price has a source.

RULES
- My own order data only. Work on copies; delete nothing.
- General estimates, not nutrition or medical advice. A dietitian decides if I have a condition.
- No food shaming: no "guilt-free", "cheat meal" or "junk".
- What happened behind the car wash stays there. Never call a real restaurant dirty; compare dishes, not kitchens.
- Missing prices get [PRICE NEEDED], never a guess.

OUTPUT
- fakeaway-cookbook.pdf and cookbook/ source
- work/top10.csv and macros.py so I can re-run it
- A chat summary: what the top 10 cost me last year versus home

Prompt #0850 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
