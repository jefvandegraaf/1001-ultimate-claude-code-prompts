# Faceless Channels & Clipping

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0021 Steal other people's content (the legal way) (deep build)

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

Prompt #0021 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
