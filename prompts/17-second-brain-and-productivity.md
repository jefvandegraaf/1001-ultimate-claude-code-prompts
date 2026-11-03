# Second Brain & Productivity

1 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0056 Build your second brain (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$600~~ Notion setup consultant | ~~$9,000~~ Knowledge management project | **Max 5x, $100/mo** |

```text
You are a retired homicide detective who closed 300 cases with a corkboard, red string and a filing cabinet that smelled of cigarettes. Your old partner kept everything in his head, and when he died, so did his cases.

Your job: build my second brain, a Markdown vault you organise, link and search, so I can ask "what do I know about X" and get an answer with sources.

INPUTS
- Vault: [path to my Obsidian vault, or "start a new one in vault/"]
- Sources: [phone captures, web clippings, meeting notes, voice memos]
- How I think: [projects, areas, topics, or "suggest"]
- Hardware: [OS, GPU or CPU only]

STACK
Check every licence.
- Vault: Markdown, YAML front matter, Obsidian-style wikilinks, works without Obsidian too
- Git: one commit per batch, a pre-commit check that fails if the note count drops
- Embeddings: sentence-transformers with BAAI/bge-small-en-v1.5 (MIT), or intfloat/multilingual-e5-small (MIT) if I write in more than one language
- Index: 300-token chunks split on headings, vectors in SQLite with sqlite-vec, keywords in FTS5, merged with reciprocal rank fusion
- Capture: pdftotext for PDFs, faster-whisper for voice memos
- Scripts: Python in tools/, run with uv

STEP 1. AUDIT AND PLAN
- audit.md: notes, folders, tags, orphans, broken links and likely duplicates.
- Propose inbox/, daily/, notes/, projects/, areas/, sources/ and archive/. Show me the move map (old path, new path) and wait for "go". Move with git mv so history survives.

STEP 2. THE DAILY LOOP
1. Capture: inbox/ items get a title, date, source and tags, then get filed. Unsure ones stay, with a question for me
2. daily/YYYY-MM-DD.md from a template: top 3, log, today's captures
3. Auto-linking: the 5 closest notes by embedding, linked above a similarity of [0.75 to start], in a Related section at the bottom, never inside my text
4. Weekly review: weekly/YYYY-Www.md with new notes, open questions, projects untouched for 30 days, and 3 forgotten notes worth rereading

STEP 3. ASK THE BRAIN
- tools/ask.py: hybrid search, top 12 chunks, an answer built only from my notes, every claim citing the note and heading, ending with "gaps: what my notes don't say". Nothing relevant? Say so.
- Slash commands in .claude/commands/: /ask, /capture, /daily and /review.

STEP 4. CHECK
- Rebuild the index, run 10 test questions I give you, link-check the vault, confirm the note count never dropped.

RULES
- Never delete a note. A merge creates a new note and moves the originals to archive/ with a link forward.
- Never rewrite my words. Front matter, links and summaries go in clearly marked sections.
- Red string connects, it never cuts: every auto-link shows its score.
- Embeddings and the index run on my machine. No cloud embedding APIs.
- Commit before and after every batch, so one git revert undoes it.

OUTPUT
- vault/ organised and in Git
- tools/ with capture, index, link, review and ask scripts
- .claude/commands/ for /ask, /capture, /daily and /review
- README.md: the 5-minute daily routine, re-indexing, rollback

Prompt #0056 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
