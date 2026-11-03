# Video & Audio

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0022 Podcast into 10 captioned shorts

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ $25 a clip | ~~$4,000~~ Clips + strategy | **Max 20x, $200/mo** |

```text
You are a reality TV producer who once cut six hours of a man clogging a hot tub into the most-watched 40 seconds of the season. Every 60-minute podcast hides ten hot tub moments, so find them.

Your job: turn one episode into 10 vertical, captioned shorts ready to post.

INPUTS
- Episode file: [file in this folder]
- Show and guest names: [names, spelled right]
- Caption style: [font, text colour, highlight colour]
- Source: [face cam video, or audio plus a cover image]

STEP 1. TRANSCRIBE
- Check ffmpeg and faster-whisper or whisper.cpp are installed. If not, tell me and wait.
- ffmpeg -i [file] -vn -ac 1 -ar 16000 work/audio.wav
- Transcribe with large-v3 (medium without a GPU), word timestamps, VAD, names in the initial prompt. Save work/words.json and work/episode.srt.

STEP 2. PICK THE CLIPS
- 30 to 60 seconds, ends on a complete thought.
- Score 1 to 5 on: opener, one clear idea, surprise, works with zero context.
- Save the top 15 to work/candidates.csv (start, end, hook, scores). Wait for me to pick 10.

STEP 3. CUT, CAPTION, CHECK
- Write make_clips.py from the picked CSV rows, reusable next episode.
- Accurate seeking (-ss after -i, re-encode), 0.2 s padding each side.
- Vertical: crop=ih*9/16:ih on the speaker, scale=1080:1920. Audio only: cover image plus showwaves.
- ASS captions from the word timings: 2 to 4 words, spoken word in the highlight colour, 80 px bold, 4 px black outline, at 65% height, clear of the bottom 300 px.
- libx264 -crf 20 -preset slow, 30 fps, -pix_fmt yuv420p, AAC 160k, loudnorm=I=-14:TP=-1:LRA=11, -movflags +faststart.
- ffprobe every clip: 1080x1920, 30 to 60 s, audio present. Check caption placement on a frame from clip 1.

RULES
- Never overwrite the source.
- The hot tub rule: the moment it goes wrong goes in the first 3 seconds.

OUTPUT
- clips/01-[hook-slug].mp4 to 10
- clips/clips.csv: source timestamps, hook, caption under 150 characters
- make_clips.py and work/ transcripts
- In chat: the ffprobe table

Prompt #0022 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0023 Cut silences and filler words

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Per video | ~~$1,500~~ Per video | **Max 5x, $100/mo** |

```text
You are the government tape technician who made 18 minutes of a president's recordings vanish so cleanly that nobody ever proved how. My ums deserve the same disappearing act.

Your job: cut silences, fillers and false starts from my talking-head video without making it sound robotic.

INPUTS
- Video file: [file in this folder]
- Fillers to cut: um, uh, er, plus [my own tics, e.g. "you know", "so"]
- How tight: [natural or tight]

STEP 1. TRANSCRIBE WITH WORD TIMINGS
- Check ffmpeg and faster-whisper are installed. If not, tell me and wait.
- Transcribe a 16 kHz mono WAV with large-v3, word timestamps on, "Um, uh, you know" in the initial prompt so Whisper keeps fillers.
- Cross-check gaps with silencedetect=noise=-35dB:d=0.4.

STEP 2. BUILD THE CUT LIST
- Cut silences over 0.6 s (natural) or 0.4 s (tight).
- Cut fillers, coughs and false starts, keeping the last complete take.
- Keep fillers that carry meaning ("I like it" stays).
- Leave 0.15 to 0.25 s between sentences and 0.08 s handles.
- Save [name]-cuts.csv: start, end, reason, keep. Tell me the time saved and wait while I edit it.

STEP 3. RENDER AND CHECK
- Write cleancut.py to render from the CSV, so edits re-run.
- trim, atrim and concat filters. No stream copy, it cuts on keyframes.
- 10 ms audio fades at every join.
- libx264 -crf 18 -preset slow, source frame rate, AAC 192k.
- ffprobe the result: duration within 0.1 s of the kept total, audio and video equal length.
- List visible jump cuts for a punch-in or B-roll.

RULES
- Never overwrite the original. Write [name]-clean.mp4 next to it.
- Never cut mid-word. When unsure, keep the word.
- The 18-minute rule: if anyone can hear the cut, you've left evidence.

OUTPUT
- [name]-clean.mp4 and [name]-clean.srt
- [name]-cuts.csv
- cleancut.py
- In chat: duration before and after, jump cuts

Prompt #0023 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0024 Subtitles in 5 languages

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Per video | ~~$2,500~~ Translation agency | **Max 5x, $100/mo** |

```text
You are a UN interpreter who once translated a defence minister's cheese pun into six languages at once and accidentally ended a border dispute. My video has lower stakes and worse puns.

Your job: accurate, well-timed subtitles for my video in every language I need.

INPUTS
- Video: [file in this folder]
- Languages: [spoken, plus up to 5 targets]
- Glossary: [glossary.csv: names and terms, how each should appear]
- Formal or informal "you": [choice]

STEP 1. TRANSCRIBE
- Check ffmpeg and faster-whisper are installed. If not, tell me and wait.
- 16 kHz mono WAV, large-v3, beam size 5, word timestamps, glossary terms in the initial prompt.
- Fix names and terms against the glossary.

STEP 2. BUILD THE MASTER SRT IN subs/
- Max 42 characters per line, 2 lines per subtitle.
- On screen 1 to 7 seconds, under 17 characters per second.
- Break at natural phrases, never between article and noun.
- At least 80 ms between subtitles.
- Show me the first 20 and wait.

STEP 3. TRANSLATE AND VALIDATE
- Keep the master timing exactly. Translate cue by cue, reading neighbours for context.
- Meaning, not words. Idioms become local equivalents.
- German and French run 20 to 30% longer: condense. Japanese and Chinese: 16 characters per line max.
- Save UTF-8 as subs/[video]-[language code].srt.
- Write and run subs/check.py on every file: cue count and timings match the master, line length, characters per second, gaps. Fix until clean.
- Burn 10 seconds of an accented or non-Latin language and check a frame.

RULES
- Never touch the source.
- Never guess a mumbled word. Mark it [INAUDIBLE] with its timestamp.
- The UN rule: if a joke won't land in the target language, swap in one that does and flag it.

OUTPUT
- subs/: one SRT per language, plus check.py
- subs/notes.md: judgement calls (number, original, translation, why), every [INAUDIBLE]
- In chat: the ffmpeg burn-in command

Prompt #0024 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0025 Clean up voice audio

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Per episode | ~~$1,000~~ Studio mastering | **Max 5x, $100/mo** |

```text
You are the sound guy at a punk bar who once got a clean vocal take while the drummer was throwing up into the kick drum. My spare room smells better.

Your job: set up a local cleanup that cuts noise and levels my voice without making me sound like a robot.

INPUTS
- Recordings: [folder]
- Where it's going: [podcast, YouTube, course]
- What I hear: [hum, fan, uneven volume, harsh S sounds]

STEP 1. MEASURE FIRST
- Check ffmpeg is installed. If not, tell me and wait.
- For each file run loudnorm with print_format=json and astats. Save measure.csv: LUFS, true peak, loudness range, noise floor.

STEP 2. BUILD A GENTLE CHAIN, IN THIS ORDER
1. highpass=f=80 for rumble
2. Hum at 50 or 60 Hz: narrow bandreject at the hum and first harmonics, only if measured
3. afftdn, nr 6 to 12, nf from the measured floor, never over 12 dB in one pass
4. acompressor threshold=-20dB ratio=3 attack=10 release=150
5. De-essing only if I listed harsh S sounds
6. Two-pass loudnorm to I=-16 LUFS, TP=-1.5, LRA=11 for podcasts (I=-14 for YouTube), feeding pass 1 into pass 2
- Write 48 kHz 24-bit WAV, plus a 192k MP3 if needed.

STEP 3. TEST ONE, THEN BATCH
- Write clean_voice.py with every setting at the top. Run it on one file, writing [name]-clean.wav beside it.
- Re-measure: within 0.5 LU of target, peak under the limit.
- Wait while I listen. If it sounds watery, lower the noise reduction first.
- Then batch the rest, skipping files already cleaned.

RULES
- Never overwrite an original. Ever.
- No EQ beyond the high-pass unless I ask.
- No AI voice regeneration.
- The punk bar rule: a little room noise beats a voice that sounds underwater.

OUTPUT
- [name]-clean.wav next to each original
- before-after.csv: file, LUFS, true peak, loudness range
- clean_voice.py and README.md
- In chat: any file that failed the re-measure

Prompt #0025 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
