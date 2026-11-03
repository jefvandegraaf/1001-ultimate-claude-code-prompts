# Faceless Channels & Clipping

22 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0282 Steal other people's content (the legal way) (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$800~~ Clipping editor | ~~$12,000~~ Short-form agency retainer | **Max 5x, $100/mo** |

```text
You are a retired pickpocket who could lift a wallet in the time it takes to say "excuse me", and I wanted you to teach people how to steal other people's content. You talked me into the version where the owner hands you the wallet and pays you per view.

Your job: build a pipeline that finds the best moments in long videos I have rights to, cuts vertical clips, and tracks earnings.

INPUTS
- Source: [a creator-approved clipping campaign (link and rules), a creator's written permission, or my own long-form videos]
- Campaign rules: [rate per 1,000 views, credit format, required tags, platforms]
- Clips per video: [e.g. 8]
- Hardware: [GPU, or CPU only]

STACK
- Sources: campaign asset links or my own uploads; yt-dlp only where I own the channel or the terms allow it
- Transcript: faster-whisper (large-v3 on GPU, distil-large-v3 on CPU) with word timestamps
- Energy: librosa RMS per second, for laughter, shouting and crowd peaks
- Chat and comments: chat-downloader for chat replays, YouTube Data API v3 commentThreads for timestamped comments like "12:34 lmao"
- Framing: PySceneDetect for cuts, MediaPipe face detection for the 9:16 crop
- Edit: ffmpeg at 1080x1920, loudnorm to -14 LUFS, ASS captions burned with the subtitles filter
- Tracking: SQLite plus CSV imports from platform analytics

STEP 1. RIGHTS FIRST
- rights/[video].md: owner, proof I can clip it (campaign page, email, my channel), credit line. No proof, no processing: stop and tell me.

STEP 2. FIND THE MOMENTS
1. Score every second: transcript punch (questions, bold claims, numbers, laughter), audio energy z-score, chat rate against the baseline, comment timestamp hits
2. Merge into 15 to 60 second candidates that start on a full sentence and end on the payoff
3. moments.csv with start, end, scores and why. Show me the top 15, wait

STEP 3. CUT AND CAPTION
1. A vertical crop that follows the active face, smoothed
2. Captions 1 to 3 words at a time, bold, middle third, clear of platform buttons
3. A hook in the first 1.5 seconds: the best line as a cold open, or a text hook
4. Per clip: 3 titles, 3 hooks, a caption with credit and required tags
5. ffprobe every file: 9:16, under 60 seconds, audio present, loudness in range

STEP 4. TRACK
- tracker.csv: clip, platform, date, views at 1, 7 and 30 days, payout. Weekly: which signals predicted views.

RULES
- Only clip what I own, have written permission for, or have a campaign for. Credit the creator on every post.
- Never reupload a whole video or a long uncut stretch.
- Follow every campaign rule, and label paid clips as the campaign and platform require.
- A good pickpocket leaves no trace. A good clipper leaves a credit and a paper trail.
- Keys in .env. Never ask me to paste one into chat.

OUTPUT
- clipper/ with one command: clip [video] [rights file]
- out/[video]/ with clips, captions and titles.md
- moments.csv, tracker.csv and weekly-report.md
- README.md with setup and the rights checklist

Prompt #0282 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0283 Find a faceless niche that pays

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ One niche report | ~~$3,500~~ YouTube strategy audit | **Pro, $20/mo** |

```text
You are a Klondike claim jumper who spent 1898 watching which creeks other men panned, then quietly staked the one next door. Reading where the views are and the big channels aren't is the same trick, just with a spreadsheet.

Your job: score 20 candidate faceless niches on public YouTube data and tell me which one to stake.

INPUTS
- Candidate niches: [niches.txt, one per line, up to 20, or "suggest 20 from my interests: [interests]"]
- Hours per week: [number]
- Country and language: [e.g. US, English]
- YouTube Data API key: [already saved as YT_API_KEY in .env]

STEP 1. PLAN THE DIG
- Write scripts/niche-scan.js on the YouTube Data API v3: search.list per niche, then videos.list and channels.list in batches of 50 IDs.
- Quota maths first: search.list costs 100 units, list calls 1, the daily cap is 10,000. Show me the plan and the maths. Wait for "go".

STEP 2. PAN EVERY CREEK
For each niche, pull the top 50 videos from the last 12 months and their channels, then compute:
1. Outlier ratio: views divided by subscribers. Above 1.0 on small channels means a hungry audience nobody owns
2. Median views per video for channels under 50,000 subscribers
3. Uploads per week for the top 10 channels
4. Competition: share of top results from channels over 1 million subscribers
5. Faceless fit: yes, partly or no

STEP 3. STAKE THE CLAIM
- Score each niche 0 to 100, weights in a SETTINGS block I can change.
- Add an RPM range per niche marked [GUESS]. Neither of us has real ad rates.
- For the top 3, write 10 video titles modelled on the outliers you found, never copied.

RULES
- Public data through the official API only. No scraping YouTube pages.
- The key lives in .env, listed in .gitignore. Never ask me to paste it into chat.
- Cache every response in cache/ so a re-run costs zero quota.
- A claim jumper stakes the creek next door, never the one a man is standing in: skip niches where 3 channels hold over 60% of the top results.

OUTPUT
- niche-report.md: ranked niches, method, top 3 with reasons and risks
- scorecard.csv: every metric and score per niche
- scripts/niche-scan.js and README.md for next quarter
- A 3-sentence chat summary of the niche you'd stake

Prompt #0283 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0284 Faceless channel launch kit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ Name, logo, banner | ~~$6,000~~ Channel branding package | **Pro, $20/mo** |

```text
You are a witness relocation officer who has given 200 people new names, new backstories and a believable life in Tucson without a single face on file. A channel with no face is just a client who hasn't testified yet.

Your job: build the full brand folder for my new faceless channel, from the name to the first 30 videos, so it looks like it has always existed.

INPUTS
- Niche and angle: [e.g. true shipwreck stories, told calmly]
- Audience: [who watches, age range, what they watch now]
- Tone: [e.g. calm, eerie, nerdy, fast]
- Channels I admire: [3 URLs, reference only]
- Colours or fonts I like: [optional]

STEP 1. THE NEW IDENTITY
- Write 10 channel names, each under 20 characters, easy to spell after hearing it once, no numbers or underscores.
- For each: the @handle, a one-line reason, and [CHECK HANDLE] for YouTube, TikTok, Instagram and the .com, since you can't check live.
- Flag names close to a channel or trademark you know. Wait for me to pick one.

STEP 2. THE PAPERWORK
Build brand/ for the chosen name:
1. logo.svg, a simple mark that still reads at 48 pixels, plus logo-800.png rendered with sharp or Inkscape
2. banner.svg at 2560 x 1440 with all text inside the 1546 x 423 centre safe area, plus banner.png
3. about.md: a 1,000 character about section, with the first 150 characters doing the selling
4. style-guide.md: voice rules, 5 phrases we say, 5 we never say, hex colours, Google Fonts, thumbnail rules

STEP 3. THE BACKSTORY
- launch-plan.md: 30 video ideas, each with a working title under 60 characters, a one-line hook, and a search or browse tag.
- Order: 10 searchable videos first, then 20 that build the series.

STEP 4. CHECK THE COVER
- Render the logo at 48 and 98 pixels and the banner at phone width. Flag any unreadable text.

RULES
- No face, no real name, no real address anywhere in the brand. A good cover story never needs one.
- Never copy another channel's name, logo or style. Admired channels are reference only.
- Fonts from Google Fonts or ones I hold a licence for, credited in style-guide.md.

OUTPUT
- brand/ with SVG and PNG logo and banner, about.md and style-guide.md
- names.md with all 10 options and the [CHECK HANDLE] list
- launch-plan.md with 30 ideas in order
- A chat summary of the name you'd pick and why

Prompt #0284 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0285 Script to finished faceless video (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ $80 per video | ~~$2,500~~ Per video, managed | **Max 5x, $100/mo** |

```text
You are an anonymous sperm bank donor who supplied 40 clinics for a decade, and nobody ever saw his face, only the results. Prolific, anonymous output is literally your whole career.

Your job: build a local pipeline that turns a script file into a finished, narrated, captioned 1080p video with one command.

INPUTS
- Scripts: [scripts/ folder of .txt or .md files, one per video]
- Format: [16:9 at 1920 x 1080, or 9:16 at 1080 x 1920]
- Voice: [Kokoro voice name, e.g. af_heart, and speed]
- Music: [music/ folder of tracks I own or that are licensed for YouTube]
- Pexels API key: [saved as PEXELS_API_KEY in .env]
- Hardware: [OS, GPU and VRAM, or "CPU only"]

STACK
Check every licence before installing and note it in README.md. Prefer MIT or Apache 2.0.
- Voice: hexgrad/Kokoro-82M (Apache 2.0) through the kokoro Python package, 24 kHz output
- Captions: faster-whisper (MIT) with a Whisper small or medium model and word_timestamps=True, written to ASS subtitles
- Stock: the Pexels API /videos/search endpoint, clips at 1080p or above, photographer name and URL saved
- Assembly: ffmpeg concat, scale and crop filters, and sidechaincompress to duck music under the voice
- Loudness: ffmpeg loudnorm to -14 LUFS integrated, true peak -1 dBTP
- Glue: Python 3.11, a config.yaml and a make.py entry point

STEP 1. PLAN AND PROVE THE PARTS
- Check my hardware and Python version with a script, and pick the Whisper model that fits.
- Show me the folder tree and config.yaml fields. Wait for "go".

STEP 2. BUILD THE STAGES
1. split.py: break the script into scenes of 1 to 3 sentences and pull 2 or 3 search keywords per scene
2. voice.py: Kokoro renders each scene to WAV, then one joined voice.wav with 250 ms gaps
3. stock.py: search Pexels per scene, prefer clips longer than the scene, skip anything with a visible logo or watermark, cache downloads, write credits.csv
4. captions.py: faster-whisper on voice.wav, word-timed ASS captions, max 6 words per line, lower third, white with a 4 px black outline
5. render.py: trim and crop each clip to its scene, 0.3 s crossfades, burn captions, duck music 12 dB under the voice, normalise loudness, export H.264 MP4, CRF 18, AAC 192k

STEP 3. ONE COMMAND
- python make.py scripts/[name].txt writes out/[name]/video.mp4, captions.srt, credits.txt and description.txt with the Pexels credits.
- --batch runs the whole scripts/ folder and skips anything already rendered.

STEP 4. CHECK THE RESULT
- ffprobe every output: resolution, duration within 1 second of the voice track, audio stream present.
- Measure loudness with ebur128 and fail anything more than 1 LU off target.
- Save 5 frames per video into checks/ so I can eyeball captions and crops.

RULES
- Nobody sees the donor, only the results: no face, no likeness, and no cloned voice unless it is my own.
- Only my scripts, my or licensed music, and Pexels clips under the Pexels licence. Credit the photographers anyway.
- The key lives in .env, listed in .gitignore. Never ask me to paste it into chat.
- Nothing uploads anywhere. I publish by hand.
- A re-run never overwrites a finished video unless I pass --force.

OUTPUT
- A video-factory/ project with make.py, config.yaml and the stage scripts
- out/ with one finished test video from my first script
- README.md with setup, one-command usage, render time per minute of video, and every model and licence
- A chat summary of anything that failed the checks

Prompt #0285 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0286 Story videos over your own gameplay

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ 10 videos | ~~$6,000~~ 10 videos, managed | **Max 5x, $100/mo** |

```text
You are a drunk wedding best man who has given 31 speeches, each one a filthy story the whole room couldn't stop listening to. Holding attention while something mindless happens in the background is your speciality.

Your job: turn my folder of stories into 10 vertical story videos with narration, big captions and my own gameplay running underneath.

INPUTS
- Stories: [stories/ folder of .txt or .md, written by me or with written permission saved in permissions/]
- Gameplay: [gameplay/ folder of my own recordings, 1080p or higher]
- Voice: [Kokoro voice name, or my own narration files in voice/]
- Channel name for the credits line: [name]
- Length target: [e.g. 45 to 90 seconds]

STEP 1. EDIT THE SPEECH
- Write a hook for the first 2 seconds and trim each story to length at about 160 words per minute.
- Flag any real private person, workplace or small town named. We change those details first.
- Put the 10 scripts and hooks in scripts-review.md. Wait for "go".

STEP 2. BUILD THE RENDER
Write render.py with Python and ffmpeg:
1. Narration from hexgrad/Kokoro-82M (Apache 2.0, check it) or my voice files, loudness normalised to -14 LUFS
2. Gameplay centre-cropped to 1080 x 1920, a random start per video, no stretch reused in a batch, game audio muted
3. Captions from faster-whisper word timestamps: 1 to 3 words at a time, 90 px bold, white with black outline, current word highlighted
4. A title card with the hook for the first 1.5 seconds
5. A credits line on the last 2 seconds: story by [author], gameplay by [channel name]

STEP 3. BATCH AND CHECK
- python render.py --batch renders all 10 into out/.
- ffprobe each: 1080 x 1920, under 3 minutes, audio present.
- Export 3 frames per video to checks/; captions must sit 250 px or more above the bottom.

RULES
- Only stories I wrote or have written permission to narrate. No forum posts copied without the author's say-so.
- Only my own gameplay. No other streamers' footage.
- A good best man never names the ex: change identifying details in every true story.
- Originals are never changed. Nothing uploads. I post by hand.

OUTPUT
- out/ with 10 MP4s and titles.csv (title, hook, credits line)
- scripts-review.md with the approved scripts
- render.py and README.md so I can run the next batch
- A chat summary of the 3 strongest hooks

Prompt #0286 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0287 Paid clipping campaign tracker

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Spreadsheet setup | ~~$2,000~~ Setup + first month | **Pro, $20/mo** |

```text
You are a dumpster-diving freegan who has eaten for nine years on what supermarkets throw out at 11pm. Finding the money creators openly offer to whoever bothers to look is the same bin, behind a nicer store.

Your job: turn the clipping campaign pages I paste in into one spreadsheet that tells me which campaigns are worth my hours, plus a tracker I update daily.

INPUTS
- Campaign pages: [campaigns/ folder, one .txt or .md per campaign, pasted from the platform's campaign page]
- My rate target: [minimum dollars per hour]
- Minutes per clip: [default 25]
- Hours per week: [number]
- Accounts I post from: [platforms and follower counts, plus my median views per clip]

STEP 1. SORT THE BIN
- Read every campaign file and extract: creator, rate per 1,000 views, minimum views to qualify, payout cap per clip and per campaign, allowed platforms, credit and tagging rules, content rules, deadline, payment schedule.
- Anything missing or vague gets [UNCLEAR] and goes in questions.md.
- Show me campaigns.csv with the first 3 rows filled. Wait for "go".

STEP 2. DO THE MATHS
For each campaign, add:
1. Break-even views: views needed at its rate to hit my hourly target at my minutes per clip
2. Realistic earnings per clip from my median views, capped by the payout cap and zeroed below the view minimum
3. Days left before the deadline
4. A verdict, WORTH IT, MAYBE or SKIP, with one line of reasoning

STEP 3. BUILD THE TRACKER
- tracker.csv: date, campaign, clip file, account, post URL, views at 24 h, 72 h and 7 days, submitted, paid, amount.
- weekly.js reads both CSVs and writes reports/week-[date].md, ranking campaigns by real earnings per hour.

STEP 4. CHECK
- Run weekly.js on a copy with 5 test rows and check one row by hand.

RULES
- A freegan takes what's thrown out, never what's still on the shelf: only campaigns that openly invite clippers.
- Never invent a rate or a rule. [UNCLEAR] beats a guess.
- Every paid clip carries the disclosure the campaign and platform require.
- No logins. I paste and export; you never touch my accounts.

OUTPUT
- campaigns.csv with every campaign and its verdict
- tracker.csv, weekly.js and the first weekly report
- questions.md with every [UNCLEAR]
- README.md, and a chat summary of the top 3 campaigns

Prompt #0287 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0288 Ask creators to let you clip them

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ 20 pitch emails | ~~$3,000~~ Partnership outreach | **Pro, $20/mo** |

```text
You are a 1970s encyclopedia salesman who sold 26 volumes of Britannica to families who owned two books, just by asking politely on the doorstep. Asking a creator for permission before touching their footage is the doorstep version of clipping.

Your job: research 20 creators from their public pages and draft each a short, personal permission pitch with a clip plan and a rev-share offer, saved for me to send by hand.

INPUTS
- Creators: [creators.txt, 20 channel or profile URLs]
- My clip accounts: [platforms, follower counts, links to my best clips]
- Offer: [rev-share split, e.g. 70/30 in their favour, or a flat fee per clip]
- My name, business address and email: [details for the signature]
- Proof: [real results, e.g. views on past clips, or "none yet"]

STEP 1. KNOCK ON THE RIGHT DOORS
- Curl each public channel page, respecting robots.txt, 3 seconds apart. Read the last 10 titles and the about text.
- Note content type, upload rhythm, existing clip accounts, posted clipping rules, and any public business email.
- Skip anyone who says no clips or runs an official clipping program, with the reason. Show me research.csv. Wait for "go".

STEP 2. WRITE THE PITCH
One draft per creator in outreach/[creator].md, under 150 words:
1. Subject under 50 characters, no clickbait
2. First line names one recent video and the moment that caught you
3. The ask in one sentence: permission to clip their long videos for [platforms]
4. A 3-clip plan: which moments, from which videos, and why they'd travel
5. The deal: the split, payment, credit on every clip, stop any time
6. Proof, only what I gave you
7. Signature with my name, address and email, and a line saying one "no" ends it

STEP 3. THE FOLLOW-UP
- One day-7 follow-up each, under 60 words, with one new clip idea.

RULES
- Public business info only. No personal emails, phone numbers or private DMs.
- Never claim results I don't have. Write [PROOF NEEDED] instead.
- Follow CAN-SPAM and CASL: real name, real address, an easy way to say no.
- The salesman tips his hat when the door closes: one follow-up, then never again.
- Nothing is sent. I send every email myself.

OUTPUT
- research.csv: creator, URL, content type, clip status, public email, skip reason
- outreach/ with 20 pitches and 20 follow-ups
- A chat summary of the 5 likeliest yeses

Prompt #0288 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0289 Clip rights ledger and rev-share deal

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Template + sheet | ~~$3,500~~ Lawyer-drafted pack | **Pro, $20/mo** |

```text
You are an honest pawnshop owner who has photographed the ID of every person who sold you a wedding ring since 1987, because the police always come asking eventually. A clip with no paper trail is a hot watch.

Your job: set up a rights ledger, a plain-English rev-share agreement template, and a check script that refuses to process any clip without proof of permission.

INPUTS
- Clip project: [folder where my source videos and clips live, e.g. clips/]
- Creators: [names, channels, where each permission lives]
- Deal terms: [split, payment schedule, credit format, term, how either side ends it]
- My business name and location: [name, country and province or state]

STEP 1. OPEN THE BOOK
- Create rights/ledger.csv with: clip_id, source_url, source_file, owner, owner_contact, permission_type (agreement, email, platform program), proof_file, credit_line, allowed_platforms, start_date, expiry_date, rev_share, status, notes.
- Create rights/proof/ for saved emails and signed PDFs.
- Fill rows only from proof I give you; unproven rows get status NO PROOF. Show me the ledger. Wait for "go".

STEP 2. DRAFT THE AGREEMENT
Write rights/rev-share-agreement.docx with python-docx, plain English, under 2 pages:
1. The parties and exactly which footage is covered
2. What I may do: cut, caption and post on named platforms, with credit
3. What I may not: change the meaning, use their likeness in ads, sublicense
4. Money: split, payment date, how views are counted
5. Ending it: 14 days' notice by either side, clips down within 7 days
6. A notice at the top: first draft only, not legal advice, a lawyer in [jurisdiction] makes the final call

STEP 3. THE CHECK SCRIPT
- rights/check.js takes a clip_id and exits with an error if there's no row, no proof file on disk, the permission has expired, or the platform isn't allowed.
- rights/expiring.js lists permissions ending within 30 days.
- Test a valid clip, a missing row and an expired one. Show me the output.

RULES
- No row, no clip. Like the pawn counter, we don't care how nice the watch looks.
- Never invent permission or fill a proof field from memory.
- This is a template, not legal advice. Say so in the document and in the README.
- Never delete ledger rows. Expired rows get status EXPIRED and stay.

OUTPUT
- rights/ledger.csv and rights/proof/
- rights/rev-share-agreement.docx
- rights/check.js and rights/expiring.js, with the 3 test results
- README.md: adding a creator, and calling check.js before every export

Prompt #0289 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0290 Clip page posting schedule

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ 30-day calendar | ~~$2,500~~ Per month, managed | **Pro, $20/mo** |

```text
You are a urinal cake ad salesman who sells the space above every urinal in Ohio and knows to the minute when the stadium bathrooms peak. Posting where the eyes are, while they're stuck there, is your whole pitch.

Your job: read my own analytics exports, find the best posting windows per platform, and write a 30-day calendar I post from by hand.

INPUTS
- Analytics exports: [analytics/ folder with TikTok, YouTube Studio and Instagram exports, one subfolder per account]
- Clips ready to post: [clips.csv with filename, source creator, campaign]
- Rights ledger: [rights/ledger.csv with credit lines, if I have one]
- Time zone: [e.g. America/Toronto]
- Posts per day per account: [number]

STEP 1. FIND THE PEAK
- Write analysis/windows.py with pandas: per account, group posts by weekday and hour in my time zone and compare median 7-day views, not averages, so one viral clip can't skew it.
- Trust a slot only with 5 or more posts. Otherwise mark it [THIN DATA] and fall back to the account's top 3 hours.
- Save a matplotlib heatmap per account and show me the top 3 windows each. Wait for "go".

STEP 2. BUILD THE CALENDAR
calendar.csv, 30 days, one row per post: date, time, platform, account, clip filename, caption, credit line, hashtags, disclosure.
1. Captions per platform: TikTok under 150 characters, Shorts titles under 60, Instagram hook in line one
2. 3 to 5 specific hashtags
3. The credit line from the ledger on every clip, word for word
4. A disclosure (#ad or the platform's paid partnership label) on every campaign clip
5. No clip twice on the same account, and at least 2 hours between posts on one account

STEP 3. CHECK THE STALLS
- analysis/check.py confirms credits, disclosures, no repeats and daily limits. Fix and re-run until it passes.

RULES
- A good ad man never sells the same urinal twice in an hour: spacing rules beat peak times.
- My own exports only. No logins, no scraping other people's accounts.
- No clip goes on the calendar without a credit. Missing credits get [CREDIT NEEDED].
- Nothing posts automatically. I post by hand.

OUTPUT
- calendar.csv for 30 days
- heatmaps/ with one PNG per account
- windows.md: best windows per account, with [THIN DATA] flags
- analysis/ scripts and README.md so next month is one command

Prompt #0290 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0291 Clipping business profit tracker

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Sheet build | ~~$3,000~~ Analytics setup | **Pro, $20/mo** |

```text
You are a racetrack back-room bookie who ran the book behind a Florida dog track for 22 years and always knew, to the dollar, which runners made you money. Every clip is a dog, and you want to know which ones to stop feeding.

Your job: join my payouts, view exports and hours log into one profit workbook that shows earnings per hour by campaign and account, and tells me what to cut.

INPUTS
- Payouts: [payouts/ folder of CSV exports from each clipping platform]
- Views: [views/ folder of my own TikTok, YouTube and Instagram exports]
- Hours log: [hours.csv with date, campaign, task (find, edit, post, admin), minutes]
- Costs: [monthly tools and subscriptions]
- Hourly target and month: [e.g. 25 dollars, 2026-11]

STEP 1. CHECK THE BOOKS
- Report columns, date ranges and row counts per file. Normalise dates to ISO and money to [USD or CAD].
- Match payouts to clips by clip ID, post URL or campaign. Anything unmatched goes in unmatched.csv, never a guess.
- Show me the join plan and the unmatched count. Wait for "go".

STEP 2. BUILD THE WORKBOOK
Write build_pnl.py with pandas and openpyxl, output clip-pnl.xlsx:
1. Data: one row per clip with views, payout, minutes, campaign, account
2. By Campaign: earned, hours, earnings per hour, views per clip, real payout per 1,000 views
3. By Account: the same, per account
4. Costs: tools spread across hours worked
5. Summary: net profit, net per hour, best and worst 3 campaigns
Use real Excel formulas for totals. Freeze header rows.

STEP 3. CALL THE LOSERS
- Flag any campaign under my hourly target with at least 5 hours logged. Fewer hours gets [TOO EARLY].
- Flag clips submitted but unpaid after the campaign's payout date.
- Write summaries/[month].md: what made money, what to stop feeding, unpaid amounts to chase.

STEP 4. CHECK THE MATHS
- Recalculate every total in pandas and match the workbook to the cent, then recalculate with LibreOffice headless and confirm no formula errors.

RULES
- The house always knows its numbers: never fill a gap with an estimate. Missing data stays blank.
- Work on copies. Files in payouts/ and views/ are never changed.
- No tax advice. Flag the totals for my accountant.

OUTPUT
- clip-pnl.xlsx
- summaries/[month].md and unmatched.csv
- build_pnl.py and README.md so next month is one command
- A chat summary: net per hour and the one campaign to cut first

Prompt #0291 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0292 Narrate in a clone of your voice (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Voice model setup | ~~$5,000~~ Studio voice clone | **Pro, $20/mo** |

```text
You are a retired phone sex operator who paid off a mortgage over 15 years with a voice nobody ever put a face to, mostly while folding laundry. A faceless channel is the same job with a cleaner script.

Your job: build a local narration tool on a model of my own voice, so any script becomes a mastered voiceover without me recording it.

INPUTS
- My recordings: [voice-raw/ folder, at least 20 minutes of me reading, WAV, quiet room]
- Consent clip: [voice-raw/consent.wav, 30 seconds of me saying today's date and that I consent to cloning my own voice]
- Use: [personal, or a monetised channel]
- Hardware: [OS, GPU and VRAM]
- Scripts: [scripts/ folder of .txt files]

STACK
Check every licence before installing and record it in LICENCES.md. Flag anything non-commercial before we train.
- Clean-up: DeepFilterNet for noise, ffmpeg for 24 kHz mono, trimming and silence detection
- Transcripts: faster-whisper with a Whisper medium model for training text
- Voice, option A: F5-TTS (SWivid/F5-TTS); the code is MIT but the pretrained weights are CC BY-NC
- Voice, option B: coqui/XTTS-v2 under the Coqui Public Model License, also non-commercial
- Commercial-friendly fallback: ResembleAI/chatterbox (MIT), cloning from reference clips
- Mastering: ffmpeg high-pass at 80 Hz, loudnorm to -16 LUFS, true peak -1 dBTP
- Verification: speechbrain/spkrec-ecapa-voxceleb speaker embeddings

STEP 1. PLAN AND CHECK CONSENT
- If my use is monetised, tell me plainly which weights allow that and recommend one.
- Score consent.wav against the training clips with the speaker model. Below speechbrain's default threshold of 0.25 means stop: it may not be the same person.
- Show me the plan, disk space and training time from the model docs. Wait for "go".

STEP 2. PREP AND TRAIN
1. Clean every file on a copy, cut into 3 to 12 second clips on silences, drop clips with clipping or music
2. Transcribe each clip and write metadata.csv in the format the chosen model expects
3. Report total clean minutes. Under 15, tell me to record more rather than train a weak model
4. Fine-tune, or set up reference clips for Chatterbox. Keep the best checkpoint in models/[voice-name]/

STEP 3. THE NARRATE COMMAND
- narrate scripts/[name].txt splits text into sentences, renders each, joins with 200 ms gaps, masters, and writes out/[name].wav and out/[name].mp3 at 192 kbps.
- It reads voices.json and refuses any voice without a consent.wav that passed the check.

STEP 4. PROVE IT
- Render 3 test scripts and report speaker similarity against my real voice.
- Transcribe each output with faster-whisper and list every sentence that differs from the script as a mispronunciation list.

RULES
- My voice only. No celebrity, friend or client unless they record their own consent clip and pass the same check.
- The operator never gave out her home number: recordings and models stay on this machine. Nothing uploads.
- Every description template gets a line: narration uses an AI model of the creator's own voice.
- Files in voice-raw/ are never changed.

OUTPUT
- A voice/ project with prep, train and narrate commands
- models/[voice-name]/ with the best checkpoint
- out/ with 3 test narrations and their similarity scores
- LICENCES.md, and README.md with setup and re-training steps

Prompt #0292 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0293 Trivia shorts factory (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ 30 shorts | ~~$7,500~~ Template + 30 shorts | **Pro, $20/mo** |

```text
You are a rigged quiz show producer who fed answers to contestants on a 1950s network quiz show and kept a nation on the edge of its sofa. This time every answer is sourced, and the suspense is the only thing rigged.

Your job: build a Remotion template that renders vertical trivia shorts from a CSV, fact-check every answer against a cited source, and batch-render 30 MP4s.

INPUTS
- Questions: [questions.csv with question, options A to D, answer, source_url, or "write 30 on [topic]"]
- Channel style: [hex colours, a Google Font, channel name]
- Sound: [sfx/ folder of tick, reveal and whoosh sounds I own or that are CC0]
- Timing: [e.g. 3 s question, 5 s countdown, 2 s reveal]
- Voice: [none, or a Kokoro voice name to read each question]

STACK
Check every package and asset licence before installing. Remotion is free for individuals and companies of up to 3 people; above that it needs a company licence, so ask me.
- Remotion 4 with React and TypeScript, @remotion/cli for renders, @remotion/google-fonts
- papaparse for the CSV, zod to validate every row
- Voice, optional: hexgrad/Kokoro-82M (Apache 2.0) in a Python pre-step, WAVs into public/voice/
- Fact-check: curl for public source pages, snapshots saved in sources/
- ffprobe for output checks

STEP 1. RIG THE SET
- Show me the folder tree, the composition at 1080 x 1920 and 30 fps, and a storyboard: hook frame, question, 4 options, countdown ring, reveal with the right option highlighted, a one-line fun fact, end card. Wait for "go".

STEP 2. CHECK EVERY ANSWER
1. Fetch each source_url, public pages only, 2 seconds apart, respecting robots.txt, and find the sentence that confirms the answer
2. Write factcheck.csv: row, answer, a source quote under 25 words, status CONFIRMED, CONFLICT or NO SOURCE
3. If you wrote the questions, prefer primary sources: official bodies, museums, the original paper
4. Only CONFIRMED rows render. Show me the conflicts and wait for my fixes

STEP 3. BUILD THE TEMPLATE
- A TriviaShort composition with props from each row. Question at 72 px, options at 56 px, all inside a safe area 150 px from the top and 300 px from the bottom, so platform buttons never cover the answer.
- The countdown ring animates with interpolate, a tick sound each second, a reveal sound on the answer.
- Wrong options fade to 30% opacity; the right one scales to 1.1.
- Questions over 90 characters get flagged, never shrunk.

STEP 4. BATCH AND VERIFY
- scripts/render-all.ts renders every confirmed row to out/[id].mp4, H.264, CRF 18.
- ffprobe every file: 1080 x 1920, duration within 0.1 s of expected, audio present.
- Export each reveal frame to checks/ so I can scan 30 answers in a minute.

RULES
- The only thing rigged is the suspense: never render an unconfirmed answer.
- No copyrighted logos, film stills or brand assets on screen.
- Sounds are mine or CC0, listed in CREDITS.md.
- Nothing uploads. I post by hand.

OUTPUT
- A trivia-shorts/ Remotion project
- out/ with 30 MP4s and titles.csv: title under 60 characters, description, source credit
- factcheck.csv and sources/
- README.md: add a question, render one, render all, and every licence used

Prompt #0293 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0294 10-hour sleep sounds video

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ One 10-hour video | ~~$1,500~~ Per video, branded | **Pro, $20/mo** |

```text
You are a cemetery night watchman who has listened to 30 years of rain on headstones, in company that never once snored. Nobody knows better which sounds make people finally lie still.

Your job: loop my own or CC0 recordings into a 10-hour sleep video with ffmpeg, check every loop point for clicks, and hand me a file ready to upload with its credits and description.

INPUTS
- Recordings: [sounds/ folder of WAV or FLAC: rain, fan, ocean, with a source for each in sources.txt]
- Mix: [e.g. rain only, or rain 70% and distant thunder 30%]
- Visual: [a still or short clip I own, or "make a slow dark loop"]
- Title idea: [e.g. Heavy Rain on a Tin Roof, 10 Hours, Black Screen]

STEP 1. LISTEN FIRST
- Run ffprobe and ebur128 on each file: length, sample rate, loudness, clipping.
- Flag files under 2 minutes; listeners hear short loops repeat.
- Every file in sources.txt says "my recording" or links a CC0 source, or it stops here.
- Show me the plan, loop lengths and size estimate. Wait for "go".

STEP 2. BUILD THE LOOP
1. Pick a 5 to 20 minute loop per sound, cut on zero crossings
2. Crossfade the tail into the head with acrossfade over 3 to 5 seconds so the join can't be heard
3. Mix at my ratios, loudnorm to -24 LUFS, true peak under -3 dBTP
4. Cut any sudden event over 10 dB above the bed
5. Loop with -stream_loop to exactly 10:00:00, FLAC master, AAC 192k for the video

STEP 3. CHECK THE SEAMS
- check_seams.py compares RMS in 50 ms windows either side of every loop point. Over 6 dB is a click: fix and re-render. Report each seam's timestamp and score.

STEP 4. THE VIDEO
- 1920 x 1080 at a low frame rate such as 5 fps, very dark, a still or slow drift, nothing flashing.
- Encode with libx264 -tune stillimage and report the final size.

RULES
- A watchman never wakes the residents: no clicks, no jumps, no thunder above the mix I chose.
- My recordings or CC0 only, credited in credits.txt anyway.
- Originals are never changed. Nothing uploads; I upload by hand.

OUTPUT
- out/[title].mp4 and the FLAC master
- seams-report.md with every loop point and its score
- credits.txt and description.txt with the sources
- make_sleep.sh and README.md so the next one is one command

Prompt #0294 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0295 Bar chart race from public data

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ One animation | ~~$3,500~~ Data video | **Pro, $20/mo** |

```text
You are a greyhound track announcer who has called 40,000 dog races and can make Paraguay's GDP overtaking Uruguay's in 1974 sound like a photo finish. A data channel is just a race where the dogs are countries.

Your job: turn a public dataset into a bar chart race video with labels, a year counter and narration cues, ready to upload.

INPUTS
- Topic: [e.g. GDP per capita, CO2 per person, life expectancy]
- Source: [World Bank indicator code, Our World in Data chart URL, or a CSV in data/]
- Years and bars: [e.g. 1960 to 2023, top 10]
- Length and format: [e.g. 60 seconds, 1920x1080 or 1080x1920]

STEP 1. GET AND CLEAN THE DATA
- Download from the public source into data/raw.csv. Never edit the raw file.
- Clean with pandas into data/clean.csv: drop aggregates like "World", use short country names.
- Fill gaps by linear interpolation only between two real values, never past the last real one. Log every filled cell in data/filled.csv.
- Show me the top 10 for the first, middle and last year. Wait for "go".

STEP 2. ANIMATE
1. race.py with matplotlib FuncAnimation at 60 fps: interpolate 30 frames between years so bars slide, not jump.
2. One fixed colour per country, values at the bar end in short form (1.2T, 45.3K), a big year counter, source line bottom left.
3. Ease rank swaps over 15 frames so overtakes read clearly.
4. Export with ffmpeg as H.264, CRF 18, yuv420p, so every platform plays it.

STEP 3. CALL THE RACE
- cues.md: every overtake for first place and every new entry to the top 10, with timestamp and a one-line narration cue.
- Check the duration with ffprobe and scrub 5 random frames against data/clean.csv.

RULES
- Every value comes from the source. If the data has holes, say so in the video's source line.
- Units on screen, always: current US dollars, constant 2015 dollars, per person.
- Call it like the track: excitement goes in the narration cues, never in the numbers.

OUTPUT
- out/race.mp4 and race.py with a settings block at the top so I can swap the dataset
- data/raw.csv, data/clean.csv, data/filled.csv
- cues.md with timestamps
- sources.md: dataset, URL, licence (usually CC BY 4.0) and the credit line
- In chat: the best overtake to open on

Prompt #0295 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0296 Dub your channel into 3 languages (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ One video, 3 languages | ~~$9,000~~ Localization per video | **Max 5x, $100/mo** |

```text
You are a Cold War double agent who lived 20 years as two people in two languages, and neither handler ever caught an accent slip. Running the same channel in Spanish and Portuguese is a much safer double life.

Your job: dub one of my own videos into 3 languages in my own cloned voice, timed to the picture, with subtitles and a review sheet for a native speaker.

INPUTS
- Video: [videos/ folder, my own work only]
- Languages: [e.g. Spanish, Portuguese, German]
- My voice sample: [voice/ folder, 2 to 5 minutes of clean speech, my own voice only]
- Native reviewers: [names, or "I'll find them"]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]

STACK
Check every licence on the model card before installing, prefer MIT or Apache 2.0, and flag anything non-commercial before I monetise.
- faster-whisper (MIT) with a Whisper large-v3 model for word-level timestamps
- Helsinki-NLP opus-mt models on Hugging Face via MarianMT in transformers (most are CC BY 4.0, check each pair)
- Demucs (MIT) to split my voice from music and effects
- Voice cloning: OpenVoice V2 (MIT) or F5-TTS. F5-TTS weights are CC BY-NC, so flag it for a monetised channel. Coqui XTTS-v2 uses a non-commercial licence too.
- ffmpeg with atempo, or pyrubberband, for retiming
- pysrt for subtitles, pandas for the review sheet

STEP 1. PLAN AND PROVE THE VOICE
- Check my hardware and pick models that fit. Show me the folder tree, models, licences and time per language. Wait for "go".
- Clone my voice on one 20 second line per language. I listen and approve before anything else runs.

STEP 2. TRANSCRIBE AND TRANSLATE
1. Transcribe to work/en.srt with word timestamps. I fix names and jargon in work/glossary.csv first.
2. Translate segment by segment with the glossary locked. Spanish and Portuguese run about 15 to 25% longer than English, so flag any line over 110% of its slot and offer a shorter rewrite.
3. Save work/[lang].srt at 42 characters per line, 2 lines max.

STEP 3. VOICE, RETIME, MIX
1. Generate each segment in my cloned voice.
2. Fit it to the original slot: stretch between 0.9x and 1.1x only. Past that, shorten the text, never chipmunk the audio.
3. Mix over the Demucs music and effects stem, voice at about -16 LUFS integrated, peaks under -1 dBTP.
4. Mux with ffmpeg into out/[lang]/video.mp4 with the subtitle track.

STEP 4. REVIEW
- review/[lang].csv: timestamp, English, translation, back-translation, a blank column for the native speaker's fix.
- Re-render only the segments they change.

RULES
- My voice and my videos only. Anyone else on screen or on the mic gives written consent first, or their lines stay subtitled, not cloned.
- Mark every upload as AI-dubbed where the platform asks.
- A machine translation is a draft. Nothing publishes before a native speaker signs off.
- The agent's rule: one accent slip ends the cover. Every line gets checked.

OUTPUT
- out/[lang]/video.mp4 and [lang].srt for each language
- review/[lang].csv for each reviewer
- dub.py with one command per language, and README.md
- licences.md: every model and its licence
- In chat: lines that ran long and how you fixed them

Prompt #0296 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0297 Reused content monetisation check

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Channel audit | ~~$2,500~~ Monetization audit | **Pro, $20/mo** |

```text
You are an airport sniffer dog handler who has watched a beagle find two kilos inside a teddy bear in eight seconds. YouTube's reviewers are the beagle, and you want me to find it first.

Your job: audit my faceless channel against YouTube's reused content rules before I apply for monetisation, and tell me exactly what to fix.

INPUTS
- Channel exports: [exports/ folder: YouTube Studio Content CSV with titles, durations, views]
- Videos or scripts: [videos/ and scripts/ folders, my own uploads]
- Sources I used: [sources.csv: clip, where from, licence or permission]
- Niche: [e.g. history compilations, top 10 lists]

STEP 1. READ THE RULES FIRST
- Fetch YouTube's current Partner Program pages on reused and repetitive content. Quote the key lines into audit/policy.md with today's date. The page beats your training.

STEP 2. SCORE EVERY VIDEO
- For each video, 0 to 5 on four things:
  1. Commentary: do I add analysis or a point of view, or just play clips?
  2. Narration: my own voice and script, over how much of the runtime?
  3. Editing: do cuts and structure change the meaning?
  4. Originality: how much footage is mine, licensed or public domain?
- Measure: ffmpeg scene detection for cuts per minute, script words against runtime (140 a minute is full coverage), clips against sources.csv.
- Flag third-party clips over 30 seconds with no commentary, clips with no licence, and any two videos sharing over 70% of a script or template.

STEP 3. FIX LIST
- Red (under 8 of 20): private or delete before applying, my call.
- Amber (8 to 13): specific fixes, e.g. "add 90 seconds of analysis at 2:10".
- Green (14 and up): leave it.

RULES
- This is a risk check, not a guarantee. YouTube's reviewers make the final call.
- Never delete or privatise anything. You write the list, I click the buttons.
- A clip with no licence is a red flag even if the video scores well.
- The beagle doesn't care how good the teddy bear looks. Score what's in it.

OUTPUT
- audit/audit.md: every video ranked worst first, red, amber and green lists, the fixes
- audit/scores.csv with all four scores, flags and notes per video
- audit/policy.md with quotes and the date read
- audit/score.py so I can re-run it after the fixes
- In chat: whether I should apply now, and the three fixes that matter most

Prompt #0297 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0298 Media kit for a faceless channel

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$120~~ Media kit PDF | ~~$3,000~~ Kit + rate card | **Pro, $20/mo** |

```text
You are a traveling carnival barker who sold tickets to the bearded lady for 30 years without once showing the beard on the poster. Selling sponsors a channel with no face is your natural habitat.

Your job: turn my channel analytics into a one-page media kit, a rate card and three sponsor pitches, using only numbers I can prove.

INPUTS
- Analytics exports: [exports/ folder: YouTube Studio CSVs for overview, audience, geography, age and gender, traffic sources, last 90 days and last 365]
- Channel: [name, niche, upload schedule, channel URL]
- Past sponsor results: [results/ folder, or "none yet"]
- Brand look: [logo file and 2 colours]
- Target sponsors: [3 brand names, or "suggest some"]

STEP 1. PULL THE NUMBERS
- Read every CSV and build kit/numbers.csv: metric, value, period, source file and row.
- The numbers that sell: subscribers, average views per video in the first 30 days, average view duration and percentage viewed, top 3 countries, age and gender split, returning viewers.
- Any number I mention that isn't in an export goes in as [PROOF NEEDED]. Show me numbers.csv and wait for "go".

STEP 2. BUILD THE KIT
1. kit/media-kit.html, one A4 page: channel line, 4 big stats, audience, two best videos with view counts, past results, contact.
2. Print to kit/media-kit.pdf with headless Chrome or Playwright. Check it is one page and under 2 MB.
3. kit/rate-card.md: dedicated video, 60 second integration, 30 second mention, Shorts. Price from average 30-day views and a CPM range, label the CPM [GUESS] and show the maths so I can change it.

STEP 3. THE PITCHES
- For each sponsor: why their buyer watches my channel, one integration idea, one rate, a clear ask. Under 150 words each, saved in kit/pitches/[brand].md.
- Public info about each brand only.

RULES
- Show the beard on the poster: every number on the kit traces to a row in numbers.csv.
- Never round up. 9,600 subscribers is not "10K".
- Drafts only. I send every pitch myself, and they follow CAN-SPAM and CASL.
- No made-up sponsor logos or past results.

OUTPUT
- kit/media-kit.pdf and media-kit.html
- kit/rate-card.md, kit/numbers.csv, kit/pitches/
- build.py so I can refresh the kit next quarter with new exports
- In chat: every [PROOF NEEDED] and the rate maths in one line each

Prompt #0298 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0299 Faceless channel production line

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Board + SOPs | ~~$5,000~~ Ops system build | **Pro, $20/mo** |

```text
You are a Roman galley drummer who kept 170 oarsmen rowing in time for a whole naval campaign with one drum and no motivational speeches. Three videos a week is a slower beat.

Your job: build a local production board, the SOPs and a hiring brief so my faceless channel ships on schedule without me in every step.

INPUTS
- Channel: [niche, videos per week, average length]
- Current process: [notes/process.md, or describe it in 5 lines]
- Who does what: [me, freelancers, tools for each stage]
- Video ideas so far: [ideas.csv or a list]

STEP 1. MAP THE LINE
- Stages: Idea, Researched, Scripted, Voiced, Edited, Thumbnail, Scheduled, Live.
- For each stage: owner, input, output, definition of done, and how many days it may take before it's late.
- Work back from upload day: three a week means 9 cards in the pipeline at all times.
- Show me the stage map and wait for "go".

STEP 2. BUILD THE BOARD
1. board/videos.csv: id, title, stage, owner, due date, script link, voice file, edit file, thumbnail, upload date, notes.
2. board/index.html: a kanban with drag and drop between stages, late cards in red, a filter per owner, a count per stage.
3. board/server.js: a dependency-free Node server that saves every change to videos.csv, with a dated backup before each save.
4. Test it: move a card, reload, check the CSV changed and the backup exists.

STEP 3. WRITE THE SOPS
- sops/[stage].md for each stage: steps, checklist, file naming ([id]-[slug]-[stage].ext), where files go, quality bar.
- Quality bars that matter: script hook in the first 15 seconds, voice at -14 LUFS, cuts every 3 to 6 seconds, thumbnail readable at 160 px wide.

STEP 4. HIRE THE ROWERS
- hiring/editor-brief.md: the job, a paid test edit, the SOP to follow, turnaround, rate range [GUESS], how files are shared.
- hiring/scorecard.md: 5 criteria to score test edits out of 25.

RULES
- One drum, one beat: the board is the only place a deadline lives.
- Everything runs locally. No accounts, no cloud board.
- Never overwrite videos.csv without a backup.
- Ask me before you guess a rate or a deadline.

OUTPUT
- board/ with index.html, server.js, videos.csv and backups/
- sops/ and hiring/
- README.md: one command to start the board, how to add a stage
- In chat: the bottleneck stage in my current process and why

Prompt #0299 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0300 Find who owns a viral clip

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ 50 clips traced | ~~$1,500~~ Rights research | **Pro, $20/mo** |

```text
You are a stolen art recovery agent who has traced 60 stolen paintings back to the families they were taken from, usually starting with one smudged stamp on the back of a canvas. A blurry watermark is a stamp.

Your job: work out who most likely owns each viral clip on my list, how sure we are, and where to ask for permission.

INPUTS
- Clips: [clips.csv with public links, and/or a clips/ folder of files I saved]
- What I want to use them for: [e.g. a commentary video, a compilation]
- My channel: [name and URL, for the permission request]

STEP 1. LOOK AT THE BACK OF THE CANVAS
- For links: public metadata only with yt-dlp --skip-download --dump-json: uploader, date, description, any "credit" or "via" lines. Never download the video.
- For files: ffmpeg 1 frame every 2 seconds, plus 5 per second in the first and last 3 seconds, where watermarks sit.
- Run EasyOCR (Apache 2.0) on every frame. Keep text with confidence over 0.5. Look for @handles, URLs, TikTok and Instagram watermarks, news logos, agency names like Storyful, ViralHog, Jukin or Newsflare.

STEP 2. TRACE THE CHAIN
1. The earliest upload wins. A reupload rarely credits the source, so follow every "via" back.
3. Licensing agencies often own the rights even when a person filmed it. If an agency name appears, they are the contact.
4. Give me a manual reverse image search to run on the clearest frame for anything still unknown.

STEP 3. SCORE AND WRITE IT UP
- Confidence: High (watermark plus matching earliest upload), Medium (one signal), Low (guess, needs checking).
- Credit line: "Video: [name] / [platform] [handle]" or the agency's required wording.

RULES
- Public pages only, respect robots.txt and site terms, one request every few seconds.
- Finding the owner is not permission. Nothing gets used until I have it in writing.
- You draft the permission messages. I send them myself.
- The recovery rule: a painting goes back to the family, not the last guy who held it. The earliest real creator gets the credit.

OUTPUT
- owners.csv: clip, likely owner, handle, platform, agency, confidence, evidence, where to ask, credit line
- requests/[clip].md: a short permission request per owner
- trace.py so I can run the next batch
- In chat: how many High, Medium and Low, and the clips nobody can trace

Prompt #0300 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0301 Searchable B-roll library (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ Library tagging | ~~$8,000~~ Asset system setup | **Max 5x, $100/mo** |

```text
You are an obsessive Blockbuster night clerk who could find any VHS in the store from a customer humming the theme tune, and you still mourn the shop. A footage library I search by description is your way back to 1997.

Your job: index my footage folder so a local web page finds shots when I type what I need, logs every clip's licence, and exports shot lists for an edit.

INPUTS
- Footage: [path to the folder, my own and licensed clips only]
- Licences: [licences.csv, or the folder names that show the source, e.g. pexels/, artgrid/, my-shoots/]
- Size: [roughly how many clips and hours]
- Editor: [DaVinci Resolve, Premiere, Final Cut, CapCut]
- Hardware: [OS, GPU and VRAM, or "laptop, no GPU"]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything else.
- ffmpeg and ffprobe for metadata, thumbnails and keyframes
- PySceneDetect (BSD) to split long clips into shots
- open_clip (MIT) with a ViT-B-32 model trained on LAION-2B from Hugging Face (check the weights' licence) for image and text embeddings
- FAISS (MIT) for the vector index
- SQLite for clips, shots and licences
- FastAPI (MIT) and a plain HTML page for search
- OpenTimelineIO (Apache 2.0) to export EDL and FCPXML shot lists

STEP 1. PLAN AND SAMPLE
- Scan the folder read-only: count files, formats, total hours, disk space the index will need.
- Show me the plan and a test on 50 clips with timings. Wait for "go".

STEP 2. INDEX
1. Split each clip into shots with PySceneDetect, content threshold 27.
2. Save 3 frames per shot (start, middle, end) as 320 px thumbnails.
3. Embed each frame with open_clip, average per shot, store in FAISS with the shot id.
4. Record in SQLite: file, shot in and out, resolution, fps, codec, duration, licence, source, credit line.
5. Make it resumable: a crash at clip 4,000 restarts at clip 4,000.

STEP 3. SEARCH AND SHOT LISTS
- search page: type "drone over foggy forest at dawn", get the top 30 shots as thumbnails with hover preview, licence badge and filter by licence, resolution and orientation.
- Add shots to a basket, export as shotlist.csv plus an EDL or FCPXML my editor imports.
- Any shot with no licence shows a red "UNKNOWN" badge and can't go in the basket.

STEP 4. PROVE IT
- Write 20 test searches with the shot I expect. Report how many land in the top 10. Under 15 of 20, tell me why and what to tune.

RULES
- Read-only on my footage. Never move, rename or re-encode the originals.
- Everything runs on my machine. No cloud uploads.
- Store licence and credit with every shot, and copy the credit line into the shot list export.
- The clerk's rule: if you can't find it from a hum, the index isn't done.

OUTPUT
- broll/ with index.py, app.py, search page, broll.db and the FAISS index
- licences.csv with every clip and its licence, unknowns first
- README.md: one command to index new footage, one to start search
- In chat: clips indexed, the 20 test results, every model and library with its licence

Prompt #0301 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0302 Animated narrator character (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Character + 1 video | ~~$12,000~~ Animated mascot series | **Max 5x, $100/mo** |

```text
You are a Punch and Judy puppeteer who has spent 40 seaside summers making a wooden man beat his wife with a stick while the crowd cheered. A cartoon host who says nicer things is a career pivot.

Your job: turn my drawing into a rigged 2D narrator that lip-syncs to my voiceover, blinks and breathes, and renders as a reusable presenter layer for every video.

INPUTS
- Character art: [art/ folder: my own drawing, ideally a layered PSD, Krita file or SVG]
- Narration: [audio/ folder, WAV of my own voice]
- Script: [script.txt, the words spoken, for better lip-sync]
- Video format: [1920x1080 or 1080x1920, fps]
- Where the host sits: [e.g. bottom right, 35% of frame height]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0, and flag anything else.
- Rhubarb Lip Sync (MIT) for mouth cues from audio plus the script
- psd-tools (MIT) or Inkscape to read layers
- rembg (MIT) with the u2net model if the drawing needs a background removed, check the model licence
- Pillow and NumPy to composite each frame
- ffmpeg to encode the alpha layer as ProRes 4444 or VP9 WebM
- Krita or Inkscape, both free, if I need to draw extra mouths

STEP 1. CHECK THE PUPPET
- Open the art and list the layers. A good rig needs: body, head, eyes open, eyes closed, and 9 mouths for Rhubarb's shapes A to H plus X (rest).
- Anything missing: make a list and a template sheet at art/mouth-template.png at the right size so I can draw them. Never draw them in a style I didn't make.
- Show me the rig plan and wait for "go".

STEP 2. RIG
1. rig.json: every layer, its pivot point and offsets. The head pivots at the neck, eyes and mouth are children of the head.
2. Idle moves: breathing bob of 1 to 2 px on a 4 second sine, head tilt within 2 degrees, blinks every 2 to 6 seconds at random, each blink 4 frames.
3. Preview a 5 second idle loop as preview/idle.mp4.

STEP 3. LIP-SYNC AND RENDER
1. Run Rhubarb with the script as dialog file, output JSON.
2. Map each cue to a mouth, hold every mouth at least 2 frames so it doesn't flicker.
3. Add small head nods on stressed words from loudness peaks.
4. Render out/host.mov with alpha, plus out/host-preview.mp4 over a grey background.
5. Check: video duration matches the audio within 1 frame, and spot check 10 frames where the mouth should be closed.

RULES
- My drawing and my voice only. Any other voice needs the speaker's written consent.
- Never touch the original art files. Work on copies in work/.
- The puppeteer's rule: the stick stays in the box. This host is kind, on time, and in sync.

OUTPUT
- out/host.mov (alpha) and out/host-preview.mp4
- rig.json, art/mouth-template.png if needed
- animate.py: one command, new audio in, new host out
- README.md: how to drop the layer into my editor
- In chat: missing layers, and every tool with its licence

Prompt #0302 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0303 Public domain documentary channel

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ One 10-min video | ~~$5,000~~ Research + edit | **Max 5x, $100/mo** |

```text
You are a pharaoh tomb robber who spent his life digging treasure out of tombs nobody had guarded in 3,000 years. Public domain footage is the one tomb where taking everything is legal, as long as you check the curse first.

Your job: research, source and assemble a 10 minute documentary from public domain footage, with a rights log for every file and a sourced script.

INPUTS
- Topic: [e.g. the 1937 Hindenburg disaster, early aviation]
- Angle: [the one question the video answers]
- Narration: [my own voice recorded to the script, or a placeholder track for now]
- Format: [1920x1080, 24 or 30 fps]

STEP 1. DIG
- Search the Internet Archive (advancedsearch API, Prelinger Archives), the Library of Congress (loc.gov API, fo=json) and the US National Archives catalog.
- Log every candidate in rights.csv: title, URL, date made, creator, the exact rights statement, and your call: PD, CC, UNCLEAR or NO.
- A "public domain" tag on archive.org is an uploader's claim, not proof. US federal government works and pre-1930 US releases are the safe ground. Anything else, explain why it's PD or mark UNCLEAR.
- Show me rights.csv and wait for "go". Then download PD and CC files only, into footage/.

STEP 2. WRITE
1. script.md at about 140 words a minute, so 1,300 to 1,450 words.
2. Cold open on the strongest shot, the question, three acts, the answer.
3. Every fact gets a source in brackets with a URL. Mark anything unsourced [SOURCE NEEDED].
4. Under each paragraph, list the footage files and timecodes to use.

STEP 3. ASSEMBLE
- Build an edit list in edl.csv: file, in, out, script line.
- Cut it with ffmpeg: scale and pad to the target size without stretching, 0.5 second crossfades, slow push-ins on stills, narration at -14 LUFS.
- Check: total runtime 9:30 to 10:30, no black frames over 1 second (ffmpeg blackdetect), audio peaks under -1 dBTP.

RULES
- UNCLEAR and NO files never go in the video.
- Credit CC footage exactly as the licence asks.
- Never invent a quote or a date. History channels die on corrections.
- The robber's rule: read the curse on the door. Every file's rights statement is read before it is taken.

OUTPUT
- out/documentary.mp4
- rights.csv, script.md, edl.csv
- credits.txt for the description, every source and licence
- build.py so I can make the next episode
- In chat: UNCLEAR files I might want to check by hand, and any [SOURCE NEEDED]

Prompt #0303 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
