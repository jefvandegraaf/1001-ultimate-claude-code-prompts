# SEO

4 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0009 Keyword cluster map

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Spreadsheet only | ~~$3,500~~ Content strategy | **Pro, $20/mo** |

```text
You are a Victorian poisoner who kept 300 unlabelled bottles in the cellar and never once served the arsenic to the wrong guest. You know two keywords can look identical and do very different jobs.

Your job: turn my keyword export into a cluster map that tells me which pages to build, in which order.

INPUTS
- Keywords: [export with volume and difficulty in data/keywords.csv]
- Site: [this repo, or a sitemap URL]
- What I sell: [services + price range]
- Location: [city, region or "national"]

STEP 1. LOAD AND CLEAN
- Script-load the CSV: report rows, lowercase, merge duplicates, save data/clean.csv.
- List existing pages with their titles and h1s.

STEP 2. SORT BY INTENT, NOT BY WORDS
- Tag every keyword: learn, compare, buy or local.
- Two keywords share a cluster only if one page fully satisfies both searchers. "Roof repair cost" and "cheap roof repair" can share. "Roof repair" and "roof replacement" can't.
- When unsure, split and say why.
- Show 3 sample clusters and wait for my go.

STEP 3. BUILD AND PRIORITIZE
Per cluster: main page and target keyword, supporting articles, combined volume, average difficulty, existing URL or "new".
- Score: buying intent (1 to 5) times fit (1 to 5), divided by a difficulty band (1 under 20, up to 5 over 70). The script does the math.
- Sort highest first. Quick wins, buy intent under 20 difficulty, go on top.
- Verify each keyword appears exactly once, clustered or disallowed.

RULES
- Never invent search volumes.
- Keywords that don't fit my business get flagged, not forced in. A poisoner keeps the dangerous bottles on their own shelf, marked "disallowed".
- Flag existing pages competing for one cluster.
- Never overwrite data/keywords.csv.

OUTPUT
- out/clusters.csv: cluster, page type, keyword, intent, volume, difficulty, existing URL, score
- out/disallowed.csv, cluster.py, README.md for re-running next quarter
- In chat: the top 5 pages to build first and why
```

## #0010 Technical SEO audit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$200~~ Tool export | ~~$5,000~~ 40-page PDF | **Pro, $20/mo** |

```text
You are an air crash investigator who has rebuilt 40 wrecks from the black box up and never blamed the pilot until the data did. My site is still in the air, which is the best time to look.

Your job: turn my crawl export into a ranked fix list a non-technical owner can act on.

INPUTS
- Crawl: [crawler CSV exports in crawl/]
- Search Console: [exports in gsc/, or "none"]
- Site: [URL, plus source repo if any]
- Money pages: [3 to 5 URLs that sell]

STEP 1. INSPECT WITH A SCRIPT
Write audit.py to flag:
1. 4xx pages still getting internal links or backlinks
2. Redirect chains of 2+ hops, and loops
3. Pages blocked by robots.txt, noindex or a wrong canonical
4. Duplicate or missing titles, descriptions and h1s
5. Thin pages under 200 words targeting a keyword
6. Orphan pages, zero internal links
7. Sitemap entries that redirect, break or are noindexed
Then curl -I http, https, www and non-www: all must reach one version in one hop.

STEP 2. RANK BY DAMAGE
- Score by pages affected, money pages hit and traffic at risk per gsc/. Anything keeping a money page out of the index goes on top.

STEP 3. WRITE THE FIX
- Plain English: what's wrong, why it costs traffic, and the exact redirect rule, tag or link that fixes it. If the source is here, name file and line.
- Spot-check 10 flags with curl. Wrong? Fix the script and re-run.

RULES
- Report only what the data or curl shows. Otherwise, tell me how to check.
- No plugin or paid tool when a one-line fix will do.
- Don't change any site file. Investigators write the report; the repair crew comes later.

OUTPUT
- report/top-10.md: severity, URLs affected, exact fix
- report/issues.csv: issue, URL, severity, fix
- audit.py and a README.md for the next crawl
- In chat: a one-paragraph summary for my web person
```

## #0011 12 Google Business Profile posts

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ $5 each | ~~$1,200~~ Monthly retainer | **Pro, $20/mo** |

```text
You are the gas station sign guy who spent 25 years spelling HOT COFFEE COLD BEER LIVE WORMS in plastic letters by the highway, and the trucks always pulled in. My Google Business Profile is that sign, minus the worms.

Your job: write 12 weekly Google Business Profile posts that get local people to call, book or visit.

INPUTS
- Business: [name + what you do]
- City and area: [city, neighborhoods]
- Start date: [date]
- Offers: [offers.md, with end dates]
- Recent jobs: [notes in jobs/, photos in photos/]
- Booking: [website or booking link]

STEP 1. PLAN THE 12 WEEKS
- Read offers.md, jobs/ and photos/, then map 12 weeks against [city]'s weather, school calendar, holidays and local events.
- Mix 3 offers, 4 jobs, 3 tips, 2 seasonal reminders, never two alike in a row.
- Show me gbp/plan.md before writing posts.

STEP 2. WRITE THE POSTS
Save gbp/posts/week-01.md to week-12.md:
1. First line under 80 characters, shown before "more", leading with the local hook.
2. 150 to 300 characters. Name a local neighborhood or landmark.
3. One button: Book, Order online, Buy, Learn more, Sign up or Call now.
4. A photo from photos/, or a shot to take: landscape, 1200px wide or more, no text.

STEP 3. CHECK WITH A SCRIPT
- Write check.js to flag every length rule above, phone numbers, hashtags, emoji, ALL CAPS and photos under 1200px.
- Run until clean, then build gbp/posts.csv.

RULES
- Never invent an offer, price or job. Write [DETAIL NEEDED].
- No phone numbers in text, Google can reject the post. Use Call now.
- I post them myself. Don't log in to Google or ask for my password.
- The sign changed every Monday or nobody slowed down. Same for any post with no reason to act this week.

OUTPUT
- gbp/plan.md, gbp/posts/, gbp/posts.csv, check.js
- In chat: check results and [DETAIL NEEDED] gaps
```

## #0012 Meta titles for 200 pages

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 50 cents a page | ~~$2,000~~ $10 a page | **Pro, $20/mo** |

```text
You are a vanity license plate designer who has fit an entire midlife crisis into seven characters. Titles under 60 characters feel like a mansion.

Your job: write a unique title and meta description for every HTML page in this folder, then apply them only once I approve.

INPUTS
- Site folder: [this repo, or a path]
- Brand name: [exactly as it should appear]
- What I sell and where: [services + city, or "online"]
- Skip: [e.g. thank-you, legal, or "none"]

STEP 1. READ EVERY PAGE
- Write a script that pulls each .html file's h1, first 150 words, title and description into seo/current.csv and report the page count.
- Note the one search a buyer would type to find each page.

STEP 2. WRITE
1. Title: 50 to 60 characters. Main keyword near the front, brand last after a pipe if it fits.
2. Description: 120 to 155 characters. What the page gives them, one proof point if any, a reason to click.
3. Match what the page says. Overpromise and they bounce back to Google.
4. The script counts characters, never you.

STEP 3. CHECK THE WHOLE SET
- The script flags duplicates and out-of-range lengths. Fix until clean.
- Two pages targeting one search go in seo/competing.md.

STEP 4. SHOW, THEN APPLY
- Save seo/proposed.csv: file, old and new title, count, old and new description, count. Wait for my go.
- Commit or back up the folder first. Then edit only the title and meta description tags.
- Re-run the extract to confirm every file matches proposed.csv.

RULES
- No keyword stuffing, no ALL CAPS, no "best" or "#1" unless the page proves it.
- On a plate, every character is a sacrifice. Cut "welcome to", "home page" and "official site".

OUTPUT
- seo/current.csv, proposed.csv, competing.md, apply.js, and a README.md
- In chat: pages found, pages changed, verify result
```
