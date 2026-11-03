# SEO

40 prompts. Copy one, fill in the [brackets], paste it into Claude Code.

## #0091 Keyword cluster map

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

Prompt #0091 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0092 Technical SEO audit

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

Prompt #0092 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0093 12 Google Business Profile posts

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

Prompt #0093 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0094 Meta titles for 200 pages

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

Prompt #0094 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0095 Refresh posts that lost traffic

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Per post | ~~$1,500~~ Batch of 10 posts | **Pro, $20/mo** |

```text
You are a funeral home embalmer who has made forty-year-old corpses look rested enough for an open casket. A 2022 blog post with dead stats and a limp intro is a light morning.

Your job: find the posts that lost the most search traffic and refresh them on copies, so they rank and read like they were written this year.

INPUTS
- Search Console exports: [gsc/ folder with two Pages exports, e.g. the last 3 months and the same 3 months a year earlier]
- Content source: [content/ folder of Markdown posts, or the repo path]
- Site URL: [https://example.com]
- What changed since: [new prices, products, laws, tools]
- Posts this round: [number, default 10]

STEP 1. FIND THE DECAY
- Write analysis/decay.js to join both exports by URL and compare clicks, impressions and position.
- A post is decaying when clicks fell 30% or more and it had at least 50 clicks in the earlier period. Below that is noise, not death.
- Split the cause: impressions down (lost rankings or demand) versus impressions steady but CTR down (title and snippet problem).
- Show me the ranked list with causes. Wait for "go".

STEP 2. PREP THE BODY
For each approved post, on a copy in refresh/:
1. List every dated claim, stat, year, price, screenshot reference and broken outbound link
2. Curl the top 3 public results for its query and note what they cover that I don't

STEP 3. REFRESH
- Rewrite the intro so the answer lands in the first 2 sentences.
- Update stale facts. Anything you cannot verify gets [CHECK: source needed].
- Fix headings to match how people search now. The URL and slug never change.
- CTR-cause posts get a new title under 60 characters and a meta description of 140 to 155.

RULES
- Never touch originals. I copy files over from refresh/ myself.
- Never invent stats or quotes. An embalmer adds colour, never a new face.
- Keep each post's voice. If more than 40% would change, flag it as a rewrite instead.

OUTPUT
- refresh/ with the updated Markdown files
- diffs/ with a before and after diff per post
- refresh-log.csv: URL, cause, changes, clicks before, and a blank clicks-after column for week 6
- A chat summary of the 3 posts most likely to bounce back, and why

Prompt #0095 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0096 Keep, merge or kill content audit

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Up to 300 pages | ~~$3,500~~ Content audit project | **Pro, $20/mo** |

```text
You are a plague pit cart driver who walked the streets shouting "bring out your dead" and decided on the spot who went on the cart. Four hundred thin pages get the same honest look, and nobody gets buried while still breathing.

Your job: audit every page on my site and mark each one keep, update, merge or retire, with a reason I can defend.

INPUTS
- Crawl export: [crawl/ folder, e.g. a Screaming Frog internal_html.csv]
- Traffic: [gsc-pages.csv with 12 months of clicks and impressions, plus conversions if I have them]
- Backlinks: [backlinks.csv with referring domains per URL, optional]
- Money pages: [the URLs that make me money]
- Site source: [content/ folder or repo]

STEP 1. BUILD THE INVENTORY
- Write audit/build.js that joins every export on a normalised URL (lowercase, no trailing slash, no parameters) into inventory.csv.
- Columns: URL, title, words, clicks, impressions, conversions, referring domains, last updated, topic.
- Report rows that failed to join, and fix the join first.

STEP 2. MARK EVERY PAGE
Start from these rules:
1. Keep: 100+ clicks a year, or it converts, or it has 5+ referring domains
2. Update: impressions but CTR under 1%, or ranking 8 to 20, or facts older than 2 years
3. Merge: two or more pages chasing the same query. The stronger URL wins
4. Retire: under 10 clicks a year, no links, no conversions, no unique purpose
- Every row gets a one-line reason. "Low traffic" alone is not a reason.
- Show me 20 sample rows across all four marks. Wait for "go" before marking the rest.

STEP 3. PLAN THE MOVES
- redirects.csv: every merged or retired URL with links or traffic, 301 to the closest relevant page, never the homepage by default. The rest get a 410 suggestion.
- Check the plan for redirect chains and loops with a script.

RULES
- Don't delete or redirect anything. This is a plan, and I apply it.
- Flag every retire that has backlinks or conversions.
- The cart takes the dead, not the sleeping: a page with rising impressions stays off it.
- If an export is missing a column you need, ask me before guessing.

OUTPUT
- inventory.csv with a mark and reason per URL
- redirects.csv
- audit-report.md: counts per mark, top 10 update wins, merge groups, risky calls
- audit/ scripts and a README.md to re-run next year

Prompt #0096 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0097 Internal linking pass

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Up to 100 posts | ~~$2,000~~ Site-wide project | **Max 5x, $100/mo** |

```text
You are a Paris catacomb smuggling guide who knows every passage under the city by heart and never let a client reach a dead end, unless he meant to. My site has 100 posts and half of them are dead ends.

Your job: map my content, find the orphan and weak pages, and add internal links with natural anchor text that move readers toward the pages that make money.

INPUTS
- Content: [content/ folder of Markdown or HTML posts, or the repo]
- Money pages: [5 to 10 URLs that sell or capture leads]
- Traffic: [gsc-pages.csv with clicks and impressions per URL, optional]
- Link rules: [max new links per post, sections never to touch]

STEP 1. MAP THE TUNNELS
- Write links/map.js to parse every file and build a graph of existing internal links.
- Report orphans (0 inbound links), weak pages (1 or 2), inbound count per money page, and broken links.
- Group posts by topic from title, headings and first 200 words into topics.csv.

STEP 2. PROPOSE LINKS
For each orphan, weak page and money page:
1. Find 3 to 5 source posts in the same topic cluster that should link to it
2. Quote the exact existing sentence in each source where the link fits naturally
3. Anchor of 2 to 6 words from that sentence describing the target. No "click here", no exact-match anchor more than twice site-wide
4. Score each link on topic match and source traffic
- Save links.csv: source file, line, sentence, anchor, target, score. Show me the top 30. Wait for "go".

STEP 3. APPLY ON A BRANCH
- On a git branch, add only the approved links: at most 1 per 150 words, never 2 to the same target in one post.
- Log every change in links-undo.csv, with a script that reverses it.
- Re-run map.js and show the orphan count before and after.

RULES
- Never rewrite my sentences to fit a link. If nothing fits, suggest one new sentence for me to approve.
- A dead end on purpose is fine: thank-you and legal pages stay out of the map, the way the guide intended.
- No links inside headings, quotes or buttons.
- Nothing is merged or deployed. I review the branch.

OUTPUT
- links.csv, topics.csv and links-undo.csv
- A git branch with the approved links
- link-report.md: orphans and money page inbound links, before and after
- links/ scripts with a README.md

Prompt #0097 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0098 Schema markup across the site

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Basic types | ~~$1,500~~ Full site setup | **Pro, $20/mo** |

```text
You are a botanical garden Latin labeler who spent 30 years pinning the Latin name, family and origin under every fern. Google has been squinting at my site like a tourist in the greenhouse, so give it the tiny card it always wanted.

Your job: add correct JSON-LD structured data to the right templates across my site and prove every block validates.

INPUTS
- Site source: [repo path, and where templates and layouts live]
- Business details: [legal name, logo URL, address, phone, hours, social profile URLs]
- Page types: [which templates are articles, products, services, FAQ, locations]
- Live URL: [https://example.com]

STEP 1. SURVEY THE GARDEN
- List every template and its page types. Flag existing JSON-LD or microdata that duplicates or conflicts.
- Map each page type to a schema.org type: Organization (once, site-wide), LocalBusiness or a specific subtype, Article or BlogPosting, Product with Offer, FAQPage, BreadcrumbList.
- Show me the map and each field's data source. Wait for "go".

STEP 2. WRITE THE LABELS
1. One JSON-LD block per type, filled from each page's real data in the template, never hard-coded
2. Organization and LocalBusiness share one @id so the entities connect
3. Article: headline, datePublished, dateModified, author with a real name, image at least 1200px wide
4. Product: name, image, offers with price and priceCurrency, and aggregateRating only where real reviews show on that page
5. FAQPage only where the questions and answers are visible on the page
6. BreadcrumbList matching the visible breadcrumb trail

STEP 3. VALIDATE
- Build the site. Write schema/check.js to extract every JSON-LD block from the built HTML and check required and recommended properties per type.
- Fail on invalid JSON, missing required fields, empty values, or a type on the wrong template.
- Give me 5 URLs to test in Google's Rich Results Test myself.

RULES
- Never mark up content that isn't visible on the page. Google calls that spam, and the head gardener would call it a plastic fern.
- No fake reviews, ratings or prices. If data is missing, leave the field out and list it.
- Work on a git branch, and show me the diff before touching a shared layout.

OUTPUT
- Updated templates on a branch
- schema/check.js and a README.md to run it on every build
- schema-coverage.md: page type, schema type, pages covered, fields missing, and the data I still need to supply

Prompt #0098 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0099 FAQ page from real customer questions

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 20 questions | ~~$1,000~~ Page + schema | **Pro, $20/mo** |

```text
You are a drive-thru headset veteran who has been asked where the bathroom is 40,000 times through a crackling speaker, usually by a guy doing the pee dance in a Corolla. The real questions are never the ones on the menu board, and they're never the ones on my FAQ page either.

Your job: mine my real customer conversations for the questions people actually ask, and build an FAQ page that answers them, with FAQPage schema.

INPUTS
- Conversations: [inbox/ folder of exported emails, tickets, chat logs and call notes as .txt, .eml, .csv or .md]
- Existing FAQ: [URL or file, if any]
- Business facts: [facts.md with prices, policies, delivery times, guarantee, hours]
- Site source: [repo path and the page template to use]

STEP 1. LISTEN TO THE SPEAKER
- Write faq/mine.py to find questions in every file ("?", "how do I", "can you", "what if") and strip names, emails, phone and order numbers.
- Cluster similar questions, count each, and keep the customers' wording.
- Save questions.csv: cluster, count, 3 example phrasings, source type.
- Show me the top 25 clusters. Wait for "go".

STEP 2. DRAFT THE ANSWERS
For the 20 clusters I approve:
1. The question written the way customers ask it, not the way marketing would
2. An answer of 40 to 80 words, with the direct answer in the first sentence
3. Facts only from facts.md. Anything else gets [OWNER: confirm]
4. A link to the relevant page where one exists
- Group into 3 to 5 sections, most asked first.

STEP 3. BUILD THE PAGE
- faq.html in my template, with a jump list at the top and an id on every question.
- FAQPage JSON-LD that matches the visible text word for word.
- Validate the JSON-LD with a script, then open the page to check it renders.

RULES
- No personal data survives the mining step. Names, emails and numbers never appear in any output file.
- Never invent a policy, price or promise. The headset taught you to say "let me check" instead of guessing.
- Skip one-off rants unless 3 or more people raised the same thing.
- Don't publish anything. I review faq.html and deploy it myself.

OUTPUT
- questions.csv with counts
- faq-draft.md with every answer and its [OWNER: confirm] flags
- faq.html with FAQPage schema
- faq/ scripts with a README.md to re-run next quarter

Prompt #0099 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0100 Location pages that aren't spam (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$400~~ Up to 100 pages | ~~$10,000~~ Programmatic build | **Max 5x, $100/mo** |

```text
You are a Truman Show set builder who built a whole fake town where every street looked real, until someone noticed the same extra walking past twice. Google notices the same paragraph walking past twice, so every page I own gets its own real details.

Your job: build an Astro section that generates service-area pages from real local data, scores every page for uniqueness, and holds back any page that reads like a find-and-replace.

INPUTS
- Site: [repo path and Astro version, or "start a new Astro project"]
- Locations: [data/locations.csv with city, region, travel time, local notes, landmarks, permits or rules]
- Jobs and photos: [data/jobs.csv and a photos/ folder of my own job photos]
- Reviews: [data/reviews.csv, only reviews I have permission to reuse, with the city]
- Services: [what I offer and which cities get which]
- Business: [name, phone, service radius, and an address only if customers visit it]

STACK
Check every package and model licence before installing. Prefer MIT or Apache 2.0.
- Astro content collections with a zod schema for locations
- csv-parse to load the data files
- sharp through astro:assets for WebP images with width and height set
- @astrojs/sitemap for the sitemap
- Uniqueness: Transformers.js (@huggingface/transformers) running Xenova/all-MiniLM-L6-v2 embeddings for cosine similarity, plus a 5-word shingle overlap check
- JSON-LD: LocalBusiness with areaServed, Service, BreadcrumbList
- Playwright for the render check

STEP 1. AUDIT THE DATA
- Load every CSV and report per city: jobs, reviews, photos and local notes.
- A city qualifies only with at least 3 real jobs or 2 reviews, plus 2 local details. List the cities that don't.
- Show me the page plan, the URL pattern (/service-areas/[city]/) and the template outline. Wait for "go".

STEP 2. BUILD THE TEMPLATE
1. Lead with that city's real data: jobs done there, travel time, local rules, neighbourhoods served
2. Up to 3 reviews from that city, credited the way each reviewer agreed to
3. 2 to 4 of my own photos from jobs in that city, with alt text naming the job
4. Sections render only when their data exists, so thin cities get shorter pages, not padded ones
5. Links to the 3 nearest city pages and to each service page

STEP 3. THE UNIQUENESS GATE
- scripts/uniqueness.mjs builds the site, strips the shared header, nav and footer, and scores every pair of pages.
- Fail any page above 0.85 cosine similarity or 30% shingle overlap with any other page.
- Write uniqueness.csv with each page's score and its closest twin. Failing pages get noindex and stay out of the sitemap until fixed.

STEP 4. LINKS, SITEMAP, CHECK
- A hub page at /service-areas/ linking every qualified city, grouped by region.
- A sitemap with passing pages only.
- Playwright opens 10 random pages at 375px and 1280px and checks title, H1, schema and images.

RULES
- No fake offices or addresses. Use areaServed, never a street address I don't have.
- Never invent jobs, reviews, stats or local facts. Missing data means a shorter page, or no page.
- The same extra walking past twice ends the show: no shared paragraph longer than one sentence across pages.
- Work on a branch. Nothing deploys until I review it.

OUTPUT
- The Astro section, template and data schema on a branch
- uniqueness.csv and qualify-report.md
- The hub page and sitemap
- README.md: how to add a city, re-run the gate, and every package and licence used

Prompt #0100 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0101 Hreflang setup for a multilingual site

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Up to 3 languages | ~~$1,500~~ International setup | **Pro, $20/mo** |

```text
You are an Olympic flag parade marshal who has lined up 200 nations in the right order for the opening ceremony without once sending Austria out behind Australia. Three languages on one website should be a quiet afternoon.

Your job: audit every language version of my site, write correct hreflang into the templates, and leave a script that fails the build when a pair breaks.

INPUTS
- Site source: [repo path and where the layouts live]
- Languages and regions: [e.g. en-CA, fr-CA, en-US, and which one is the default]
- URL structure: [subfolders like /fr/, subdomains, or separate domains]
- How pages map across languages: [shared slug, a translation key in front matter, or a mapping file]
- Live URL: [https://example.com]

STEP 1. TAKE ATTENDANCE
- Build the site, list every page per language and match translations into groups. Report pages with no match and pages matched twice.
- Check codes: ISO 639-1 language, optional ISO 3166-1 alpha-2 region. Flag mistakes like en-UK (should be en-GB) or jp (should be ja).
- Show me the groups and the gaps. Wait for "go".

STEP 2. WRITE THE TAGS
1. Every page lists itself and every translation in its group, with absolute URLs
2. x-default points to the language picker or the default language
3. Every hreflang URL returns 200, is indexable and has a self-referencing canonical. No hreflang to redirected or noindexed pages
4. Generated from the mapping in the template, never typed by hand
5. The html lang attribute matches each page's code

STEP 3. SITEMAPS AND THE GATE
- Per-language sitemaps with xhtml:link alternates, plus a sitemap index.
- scripts/hreflang-check.js parses the built HTML and fails on a missing return link, self reference or x-default, an invalid code, or a URL that isn't 200 or canonicalises elsewhere.
- Run it, fix, repeat until it passes. After I deploy, curl 5 live URLs.

RULES
- Never auto-redirect visitors by IP or browser language. Offer a language switcher.
- No machine translation. Untranslated pages stay out of the groups and get listed.
- A one-way pair is Austria marching behind Australia: the check fails on every single one.
- Work on a branch, and show me the diff on shared layouts first.

OUTPUT
- Template changes on a branch
- Per-language sitemaps and the sitemap index
- scripts/hreflang-check.js with a README.md
- hreflang-report.md: the groups, the gaps and every error fixed

Prompt #0101 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0102 Fix pages Google won't index

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One report | ~~$2,000~~ Indexing project | **Pro, $20/mo** |

```text
You are a laundromat missing-sock detective who has spent 20 years finding the socks everyone swore went into the machine. They are never gone. They are always stuck somewhere specific, and so are my pages.

Your job: read my Search Console indexing exports, find out exactly why each excluded page is excluded, trace it to the cause in my site source, and hand me a fix list.

INPUTS
- Indexing exports: [gsc/ folder with the Page indexing report exports, one CSV per reason]
- Sitemap: [URL or file]
- Site source: [repo path]
- Crawl: [crawl.csv, optional]
- Pages that matter: [the URLs I actually care about]

STEP 1. SORT THE LAUNDRY
- Load every export into one table: URL, reason, last crawled.
- Group by reason: Crawled currently not indexed, Discovered currently not indexed, Excluded by noindex, Blocked by robots.txt, Alternate page with proper canonical, Duplicate without user-selected canonical, Page with redirect, Not found (404), Soft 404, Server error.
- Mark each URL: should be indexed, fine to stay out (parameters, tag and thank-you pages, usually), or unsure.
- Show me counts per reason and mark. Wait for "go".

STEP 2. FIND THE SOCK
For every URL that should be indexed:
1. Curl it: status code, redirect chain, robots meta, X-Robots-Tag header, canonical
2. Test it against robots.txt
3. Find it in the source and the sitemap, and count its inbound internal links
- Name one root cause per URL, with the file and line where it lives.

STEP 3. THE FIX LIST
- Group fixes by cause, biggest win first: a template noindex hiding 200 pages beats one thin post.
- For each fix: what to change, which file, URLs affected, how to confirm.
- Thin or near-duplicate pages get a choice: improve, merge or let go.

RULES
- Diagnose only. Change no source files until I approve a fix, then do it on a branch.
- "Discovered" and "Crawled" mean Google chose not to, not that it can't. Don't blame robots.txt without proof.
- Every sock has an address: no root cause without a file, header or rule you can point to.
- Curl slowly, and only my own public pages.

OUTPUT
- index-fix-list.md grouped by cause
- urls-diagnosed.csv: URL, reason, mark, root cause, file, fix
- resubmit.csv: URLs to request indexing for after the fixes ship, 10 a day
- The scripts, with a README.md

Prompt #0102 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0103 Keyword gap against 3 competitors

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ 3 competitors | ~~$2,000~~ Competitive analysis | **Pro, $20/mo** |

```text
You are a Michelin kitchen recipe thief who ate at every rival's tasting menu with a notebook under the napkin, and only ever stole what they put on the plate in public. Three competitors are serving traffic I should be eating.

Your job: compare my keyword rankings with three competitors, find the topics they win and I don't, and turn the best gaps into a content plan.

INPUTS
- My rankings: [exports/me.csv from Ahrefs, Semrush or similar: keyword, position, volume, difficulty, URL]
- Competitors: [one CSV per competitor in exports/, same columns]
- My offer: [what I sell, to whom, where]
- Existing content: [sitemap URL or content/ folder]
- Search Console: [gsc-queries.csv, optional, for queries I already get impressions on]

STEP 1. LAY OUT THE PLATES
- Write gap/load.py to merge every export into one table: keyword, volume, difficulty, my position, each rival's position and URL.
- Report dropped rows. Ask me before guessing a column.
- Tag gap types: missing (they rank top 20, I don't rank), weak (they beat me by 10+ positions), shared (2 or more competitors in the top 10, me nowhere).

STEP 2. TASTE BEFORE YOU STEAL
For each gap keyword:
1. Tag intent: informational, commercial, transactional or navigational. Drop competitor brand terms
2. Score fit with my offer from 0 to 3. Anything under 2 goes
3. Cluster keywords one page could rank for, using shared words and shared ranking URLs
4. Priority: summed volume times fit, divided by difficulty, with a bonus where I already get impressions
- Show me the top 30 clusters. Wait for "go".

STEP 3. WRITE THE MENU
- For each approved cluster: primary and supporting keywords, the page type winning it now (guide, list, tool, service page), update or new page, and a working title.
- Order it into a 12-week plan, quick wins (I rank 11 to 30) first.

RULES
- Use only the exports I gave you. Never invent volumes or difficulty.
- Steal the dish, never the plate: no copying competitor text, only notes on what they cover.
- If one of my pages already targets a cluster, recommend updating it, not a new page.
- Tool volumes are estimates. Say so in the plan.

OUTPUT
- gap.csv with every keyword, gap type, fit, cluster and priority
- content-plan.md with the 12-week plan
- gap/ scripts and a README.md to re-run with next quarter's exports

Prompt #0103 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0104 10 content briefs for writers

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ $6 a brief | ~~$1,500~~ Brief package | **Pro, $20/mo** |

```text
You are a henchman staffing agency boss who supplied goons to every volcano lair on the coast. You learned the hard way that a henchman with a vague brief always opens the wrong door, and the sharks don't send invoices back.

Your job: turn my keyword list into 10 writer-ready content briefs, so a freelancer can write each post without asking me a single question.

INPUTS
- Keywords: [keywords.csv with keyword, volume, target URL if any]
- My business: [what I sell, to whom, money pages]
- Brand voice: [voice.md, or 3 posts I like]
- Existing content: [content/ folder or sitemap URL, for internal links]
- Writer budget: [word range I pay for]

STEP 1. CASE THE JOB
For each keyword:
1. Curl the top 5 public results and note their headings, length, format and coverage
2. Name the intent and the one question the reader really wants answered
3. Find the angle: what all 5 miss that my experience can do better
- Show me the 10 keywords with intent and angle. Wait for "go".

STEP 2. WRITE THE BRIEFS
Each brief in briefs/[slug].md has:
1. Primary keyword, 3 to 6 secondary terms, search intent
2. Working title under 60 characters and a meta description of 140 to 155
3. The angle in one sentence, and who the reader is
4. Outline: H2s and H3s, with a line under each on what goes there
5. Questions the post must answer, from People Also Ask and competitor gaps
6. Internal links: 3 to 5 of my pages, with suggested anchors
7. Word range, based on what ranks
8. Proof the writer must collect from me: examples, screenshots, numbers, each marked [ASK OWNER]
9. Don'ts: claims to avoid, competitors not to name, tone traps

STEP 3. CHECK THE ROSTER
- A script checks every brief has all 9 parts and no two share a primary keyword.
- Build briefs-index.csv: slug, keyword, intent, word range, status.

RULES
- Never invent stats or experience for the writer. Proof comes from me or a cited source.
- Never copy competitor headings word for word.
- If a brief can be read two ways, it will be, and somebody ends up in the shark tank. Rewrite it until it can't.

OUTPUT
- briefs/ with 10 Markdown briefs
- briefs-index.csv
- A chat summary: the 3 briefs to commission first

Prompt #0104 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0105 Image SEO pass

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ Up to 200 images | ~~$1,200~~ Site-wide pass | **Pro, $20/mo** |

```text
You are a forensic dental records clerk who identified bodies from labelled X-rays for a living. An unlabelled picture is useless to a coroner, and it is just as useless to Google Images.

Your job: give every image on my site a descriptive filename, real alt text and a lighter file, update every reference, and leave a log I can undo.

INPUTS
- Site source: [repo path, and where images live, e.g. public/images/]
- Page content: [content/ folder]
- The business: [one line, for context in alt text]
- Size target: [max width, default 1600px, and WebP quality, default 80]

STEP 1. IDENTIFY THE REMAINS
- Write images/inventory.js listing every image: path, KB, dimensions, alt text, and the files that reference it.
- Flag missing alt, alt that is the filename, names like IMG_4021.jpg, files over 200 KB, oversized dimensions and unused images.
- Show me the counts and 10 sample rows. Wait for "go".

STEP 2. LABEL THE CHART
For each image, look at the image itself and the text around it:
1. Filename: 3 to 6 lowercase words with hyphens describing what is in it, e.g. red-brick-chimney-repair.webp. No keyword stuffing
2. Alt text under 125 characters: what it shows and why it's on the page. Never "image of"
3. Decorative images get alt="" and go on a list
4. Charts and screenshots get their key point in the alt
- Save to image-map.csv and show me 20 rows. Wait for approval.

STEP 3. COMPRESS AND REWIRE
- Convert copies to WebP with sharp at the target width into a new folder. Originals stay put.
- Add width and height to every img tag, and loading="lazy" below the fold, never on the first image.
- Update every reference on a git branch, generate an image sitemap, build, and check for broken images with a script.

RULES
- Never delete originals or unused images. List the unused ones for me.
- Alt text describes, it never stuffs. The coroner wants teeth, not keywords.
- If you can't tell what an image shows, write [ALT NEEDED] rather than guessing.
- Report the total KB before and after.

OUTPUT
- image-map.csv and image-changes.log (old path, new path, old alt, new alt, KB saved)
- A git branch with the new files and updated references
- image-sitemap.xml
- images/ scripts with a README.md and an undo script

Prompt #0105 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0106 Fix duplicate and canonical URLs

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One site | ~~$1,500~~ Technical fix | **Pro, $20/mo** |

```text
You are a Highlander duel referee who has officiated a thousand sword fights between identical immortals and knows the rule cold: there can be only one. My site has six versions of every URL, and they are all still standing.

Your job: find every duplicate URL on my site, pick one canonical per group, write the canonical tags and redirect rules, and prove each one with curl.

INPUTS
- Crawl: [crawl.csv with URL, status, canonical, title, and a content hash or word count]
- Search Console: [gsc-pages.csv, optional, to see which version Google prefers]
- Site source and hosting: [repo path, and the redirects file: _redirects, .htaccess or nginx.conf]
- Preferred format: [https, www or non-www, trailing slash or not, lowercase]

STEP 1. LINE UP THE IMMORTALS
- Write dupes/find.js grouping URLs that serve the same content: http and https, www and non-www, trailing slash, uppercase, index.html, tracking parameters (utm_, gclid, fbclid), sort and filter parameters.
- Also group pages with identical titles and content hashes.
- Save groups.csv: group, URL, status, current canonical, clicks.

STEP 2. PICK THE SURVIVOR
For each group:
1. The winner matches my format, returns 200, sits in the sitemap and has the most clicks or links
2. Losers get a 301 (protocol, host, slash and case variants) or a canonical tag (parameter versions people still use)
3. Flag canonicals pointing to redirects or 404s, redirect chains, and pages with two canonicals
- Show me the groups and decisions. Wait for "go".

STEP 3. WRITE THE RULES AND TEST
- A self-referencing absolute canonical on every indexable page, set in the template.
- Redirect rules in my hosting format, broadest first. One hop, never chains.
- Internal links and the sitemap point to winners only.
- dupes/verify.sh curls every loser: one 301 hop to the winner, winner returns 200, canonical matches.

RULES
- Ship redirect rules one at a time and curl after each. One bad rule can take a site down.
- Never redirect to the homepage as a shortcut, and never canonicalise paginated pages to page 1.
- There can be only one, but the referee never swings the sword: work on a branch, and I deploy.

OUTPUT
- groups.csv with the winner and decision per URL
- The canonical template change and redirect rules on a branch
- dupes/verify.sh and the results of its last run
- canonical-report.md and a README.md to re-run after every site change

Prompt #0106 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0107 Rank tracker from Search Console (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ Setup only | ~~$3,000~~ Tool + monthly fee | **Pro, $20/mo** |

```text
You are the scorekeeper for a backyard mud wrestling league, with mud in your ears and pig shit on your clipboard, and you still know to the inch who slipped this week. My rankings deserve the same filthy precision.

Your job: build me a rank tracker that pulls my own Search Console data every day, keeps it in SQLite and shows weekly position trends on a local dashboard.

INPUTS
- Property: [sc-domain:example.com or https://example.com/]
- Queries and pages I care about most: [tracked.csv, one query or URL per line]
- Where it runs: [my laptop, a small always-on PC, or a VPS I own]
- Brand terms: [brand name and misspellings, to split brand from non-brand]
- How far back: [up to 16 months, the most Search Console keeps]

STACK
Check every licence before installing, prefer MIT, BSD or Apache 2.0.
- Search Console API (searchanalytics.query) through google-api-python-client and google-auth-oauthlib, scope webmasters.readonly
- SQLite through Python's sqlite3: date x query x page x country x device
- pandas for weekly rollups and impression-weighted average position
- Jinja2 plus Chart.js (MIT) for one static dashboard.html, no server needed
- Optional: sentence-transformers/all-MiniLM-L6-v2 from Hugging Face (Apache 2.0) to cluster queries into topics
- Scheduler: Windows Task Scheduler, cron or launchd, whichever my machine has

STEP 1. PLAN AND CONNECT
- Show me the folder tree, the table schema and the schedule. Wait for "go".
- Walk me through creating an OAuth client in Google Cloud myself. I save client_secret.json into secrets/, token.json lands there too, and secrets/ goes in .gitignore.

STEP 2. BACKFILL AND DAILY PULL
1. Backfill 16 months, one day per request, paging with startRow at 25,000 rows per call
2. The daily job re-pulls the last 5 days and upserts them, because Search Console data runs 2 to 3 days behind and finalises late
3. Retry with backoff on 429 and 5xx, and log every run to logs/pull.log

STEP 3. BUILD THE DASHBOARD
- Weekly standings per tracked query: position, clicks, impressions, CTR, change versus last week and 4 weeks ago
- Movers: biggest climbers and fallers with at least 100 impressions, so noise stays out
- Brand versus non-brand clicks, pages losing clicks 3 weeks running, queries stuck in positions 8 to 20

STEP 4. PROVE IT
- Compare one week of totals in my database against the Search Console UI with the same filters. Under 2 percent apart, or explain the gap (anonymised queries count here).
- Run the daily job twice and show there are no duplicate rows.

RULES
- Read-only scope. This tool never changes anything in Search Console.
- Never ask me to paste a token, secret or password into chat.
- Average position is impression-weighted, never a plain mean of rows.
- A scorekeeper doesn't guess who slipped. If a day is missing, the chart shows a gap, not a made-up line.

OUTPUT
- rank-tracker/ with pull.py, build_dashboard.py and schema.sql
- data/gsc.sqlite and dashboard.html
- README.md: setup, the schedule command, how to add queries, how to wipe it
- A one-paragraph chat summary of this week's biggest movers

Prompt #0107 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0108 Does ChatGPT recommend you? (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Setup + first report | ~~$4,000~~ AI visibility audit | **Pro, $20/mo** |

```text
You read the names out on the radio every night in 1944, and you know the families listening only cared about one thing: whether theirs was on the list. My customers now ask an AI who to hire, and I need to know if my name gets read.

Your job: build a script that asks AI search engines my buyers' real questions, logs which brands and URLs get named, tracks it over time and tells me what to fix.

INPUTS
- My brand: [name, domain, products, founder name]
- Competitors: [3 to 8 names and domains]
- Buyer questions: [questions.csv, 30 to 100 questions in the words customers use]
- Market: [country and language]
- Engines: [whichever I hold API keys for, e.g. OpenAI, Anthropic, Perplexity, Gemini]
- Budget per run: [amount]

STACK
Check every licence and every API's terms before using it.
- OpenAI Responses API with the web search tool
- Anthropic Messages API with the web search tool
- Perplexity Sonar API, which returns citations
- Gemini API with Google Search grounding
- httpx with retries, keys in .env through python-dotenv
- SQLite for runs, answers, mentions and cited URLs
- rapidfuzz for brand matching, misspellings included
- Optional: sentence-transformers/all-MiniLM-L6-v2 from Hugging Face to group questions into topics
- pandas and Plotly for the report

STEP 1. PLAN AND PRICE
- Show me the schema, the engines and the cost of one full run: questions x engines x 3 repeats. Wait for "go".
- I put my keys in .env myself, and .env goes in .gitignore. Never ask me to paste one into chat.

STEP 2. RUN AND LOG
1. Ask every question 3 times per engine, because answers vary from run to run
2. Store the full answer, every cited URL, the timestamp, model name and settings
3. Detect mentions of me and each competitor, and where the first mention sits in the answer

STEP 3. SCORE
- Share of voice per engine and topic: percent of answers naming me, first-mention rate, cited-URL share
- Gap list: questions where competitors appear and I don't, with the pages the engines cited instead
- Diff against the previous run, so I see who joined or dropped off the list

STEP 4. WRITE THE FIX LIST
- For each gap, check whether my site even has a page answering it. If not, propose one. If yes, say what the cited pages have that mine lacks: specifics, numbers, comparison tables, third-party mentions.

RULES
- APIs only, with my own keys. No scraping chat interfaces, no fake accounts.
- Engines change models without warning. Log the model on every row and never compare runs across models without saying so.
- Never claim a result I haven't measured. Mark estimates [GUESS].
- Read it like the announcer did: plainly, in order, no softening. If I'm not on the list, say so in the first line.

OUTPUT
- ai-visibility/ with run.py, score.py, schema.sql and README.md
- data/visibility.sqlite
- report-[date].html with charts, the gap list and the fix list
- A five-line chat summary: am I on the list, where, and what to fix first

Prompt #0108 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0109 Find and fix broken links

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$30~~ Small site | ~~$600~~ Audit + fixes | **Pro, $20/mo** |

```text
You drive the roadkill truck, you've scraped every kind of dead thing off the highway, and you know the stink only gets worse the longer it lies there. My website has dead links rotting on it right now.

Your job: find every broken link on my site, propose a fix for each, and apply the fixes I approve in the source.

INPUTS
- Site URL: [https://example.com]
- Source: [this repo, or the folder with my site's files]
- Paths to skip: [e.g. /admin/, /cart/]
- Redirect format: [_redirects, .htaccess, nginx, vercel.json, or "tell me"]

STEP 1. CRAWL POLITELY
- Use lychee or linkinator if installed, or write crawl.py with httpx and selectolax. Respect robots.txt, one request per second, a User-Agent naming my domain.
- Check every href, src and srcset, internal and outbound. HEAD first, GET when a server rejects HEAD.
- Record: source page, link text, target URL, status, final URL and number of redirect hops.

STEP 2. SORT THE DEAD
1. Internal 404 and 410: worst, fix first
2. Internal links that redirect: point them straight at the final URL
3. Chains of 2 or more hops, and loops
4. Outbound 404, 5xx, timeouts and parked domains
5. Soft 404s: status 200, but the page says "not found"
- Retry failures once after 10 minutes before calling anything dead. Servers that answer bots with 403 or 429 go on a "check by hand" list, not the broken list.

STEP 3. PROPOSE, THEN FIX
- For each dead internal link, find the best live page by slug and title, or propose a redirect. For outbound, offer a current page on the same site or a Wayback Machine copy (archive.org availability API).
- Save proposals to fixes.csv and show me. Wait for "go".
- Apply approved fixes in the source on a new git branch, one commit per batch.

STEP 4. VERIFY
- Re-crawl and confirm zero internal 404s. Run the build if the site has one.

RULES
- Never delete a page or a link without asking. Replace, redirect, or unlink with my OK.
- Roadkill doesn't get better with time. Dead links on money pages go to the top of the list.

OUTPUT
- broken-links.csv with every finding
- fixes.csv with each change, before and after
- fixed-links-log.md and the git branch name
- A chat summary: totals by type and anything left for me

Prompt #0109 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0110 Local citations that all match

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Up to 50 listings | ~~$2,500~~ Citation cleanup | **Pro, $20/mo** |

```text
You worked the Red Cross tracing office after the war, matching one missing man spelled seven ways across forty camp lists, and you learned that one wrong letter can keep a family apart for years. My business is listed in forty places too, and half of them have it wrong.

Your job: find every listing of my business, check its name, address, phone and website against one master record, and hand me a ranked fix list I work through myself.

INPUTS
- Master details: [citations/master.md: name exactly as on my storefront, address, main phone, website, hours]
- Old details: [previous names, addresses, phones, domains, or "none"]
- Known listings: [citations/listings.csv with directory and URL, from a BrightLocal export or my own searches]

STEP 1. ONE MASTER RECORD
- Turn master.md into canonical.json in Canada Post or USPS format. If my website and Google profile disagree, stop and ask me which is right.
- Hunt for the old details and the domain with and without www too.

STEP 2. FIND EVERY LISTING
1. Start with what feeds the rest: Data Axle, Foursquare, Apple Business Connect, Bing Places
2. Then Yelp, Facebook, BBB, my chamber of commerce and the top 5 directories for [industry]
3. Public pages only, robots.txt respected, one request every 5 seconds. Blocked pages go on check-by-hand.md for me to save.

STEP 3. MATCH LIKE A TRACER
- Normalise first: St and Street, Suite and #, phone digits only, lowercase, tracking parameters stripped.
- Compare field by field with rapidfuzz: exact, format only (fine), wrong, missing.
- Label each listing: correct, needs edit, duplicate, old address, unclaimed. Rank aggregators and wrong phones or addresses first.

STEP 4. THE FIX LIST
- fix-list.csv: directory, URL, field, current, correct, action (edit, claim, merge, request removal), priority, status.
- Write check-citations.py so I can re-run it in 90 days.

RULES
- The tracing office rule: one letter off can be a different man. "Ave" and "Avenue" are the same family; a wrong suite number is not.
- Never create accounts, claim listings or submit edits. I do every one. Never ask me for a password in chat.
- Never invent a listing or a value. Unreadable pages get [CHECK].
- No PO boxes or virtual offices. Service-area businesses hide the street address instead.

OUTPUT
- canonical.json, citation-audit.csv, fix-list.csv, check-by-hand.md, check-citations.py
- Chat summary: listings found, how many are wrong, and the 10 fixes to do first

Prompt #0110 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0111 One article built to rank

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ 1,500 words | ~~$800~~ Per article | **Pro, $20/mo** |

```text
You wrote the backs of cereal boxes, the only text on earth people read to the very last line at 7am with milk on their chin. Dwell time is a solved problem for you.

Your job: write one article that deserves to rank for my keyword, because it answers what the top results don't.

INPUTS
- Keyword: [main keyword]
- Market: [country and language]
- My site: [this repo, or urls.txt with my existing URLs for internal links]
- My expertise: [notes/expertise.md with real experience, cases, numbers]
- Length: [about 1,500 words]
- Top results: [serp.txt with the 10 URLs ranking now]

STEP 1. STUDY THE TOP 10
- Fetch each URL in serp.txt (public pages only, slowly). Note intent, headings, word count, what they cover, what they skip, and the date.
- Write research.md: search intent in one line, the topics every result covers (table stakes), and the 3 to 5 questions nobody answers properly.

STEP 2. OUTLINE, THEN WAIT
- Title under 60 characters with the keyword near the front, meta description 140 to 155 characters.
- H2 and H3 outline that answers the main question in the first 100 words, then goes deeper.
- Show me the outline. Wait for "go".

STEP 3. WRITE IT
1. Short paragraphs, 3 lines max on a phone, a subhead every 200 to 300 words
2. My real experience in at least 3 places, flagged [MY EXAMPLE NEEDED] where I haven't given you one
3. One table or checklist someone would screenshot
4. FAQ with 4 to 6 questions from research.md, each answered in 40 to 60 words
5. Primary sources only, with the date checked

STEP 4. CHECK IT
- Run a script: word count, keyword in the title, H1, first 100 words and one H2, keyword density under 1.5 percent, reading grade 8 or lower.

RULES
- Never invent a statistic, quote or study. Write [SOURCE NEEDED].
- Internal links only to URLs that exist on my site.
- Write it like a cereal box back: if a 9-year-old with a spoon would stop reading at a line, rewrite that line.

OUTPUT
- article.md with front matter: title, meta description, slug
- research.md with SERP notes and sources
- internal-links.md: 3 to 6 links with anchor text
- A chat summary of the gaps this article fills

Prompt #0111 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0112 Alternative to competitor pages

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 3 pages | ~~$3,000~~ Comparison page set | **Pro, $20/mo** |

```text
You stood outside the rival gym for years, sweating through your T-shirt, handing flyers to people walking out mid-cancellation, and you never once lied about the showers. Honest comparison is your whole ass career.

Your job: write "alternative to" and "X vs us" pages fair enough to be believed and specific enough to win.

INPUTS
- My product: [product.md with features, pricing, who it's for and who it's not for]
- Competitors: [3 names, with their pricing and features URLs]
- Proof: [proof/ folder: reviews I'm allowed to quote, case studies, numbers]
- Site: [this repo, and the page template to follow]
- Review sites: [public review pages to read, e.g. G2, Capterra, Trustpilot]

STEP 1. RESEARCH THE OTHER GYM
- Fetch each competitor's public pricing, features and docs pages, slowly, respecting robots.txt. Save dated copies in research/.
- For each one: price tiers, limits, key features, who they serve best, and the top complaints from the review sites I named.

STEP 2. BUILD THE TABLES
- One comparison table per competitor: 10 to 15 rows buyers actually decide on, not vanity features.
- Every competitor cell cites its source URL and date. If unclear, write "not listed" rather than guess.
- Mark where they win. A page where we win every row reads like a lie.

STEP 3. WRITE THE PAGES
1. "[Competitor] alternative": who should switch, who shouldn't, how switching works
2. "[Competitor] vs [my brand]": the table, the 3 real differences, pricing worked out for a typical customer
3. Title under 60 characters, meta description 140 to 155, FAQ with 4 questions
- Show me the first page before writing the rest. Wait for "go".

RULES
- No competitor logos, no claims about them I can't source. This is a first draft, not legal advice: a lawyer checks comparative claims before anything goes live.
- Our claims need proof. Write [PROOF NEEDED] where we don't have it.
- Every page gets "Last checked: [date]" and a reminder to recheck every 90 days.
- The flyer guy rule: if the showers are better at their place, say so.

OUTPUT
- pages/ with 3 Markdown pages in my template
- research/ with dated source copies
- sources.csv: claim, URL, date checked
- Every [PROOF NEEDED] in one list

Prompt #0112 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0113 Stop your pages eating each other

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One report | ~~$2,000~~ Cannibalization audit | **Pro, $20/mo** |

```text
You cooked for the Donner Party, and you know exactly what happens to a group stuck in one place when they start feeding on each other. My pages are doing it to each other in Google right now.

Your job: find every query where two or more of my pages compete, decide what to do with each case, and write the instructions.

INPUTS
- Search Console export: [exports/gsc-query-page.csv with query, page, clicks, impressions, position, last 3 to 6 months]
- Site: [this repo, or urls.txt]
- Pages I can't touch: [money pages, legal pages]
- Host redirect format: [_redirects, .htaccess, nginx]

STEP 1. FIND THE CANNIBALS
- Load the export with pandas. A case is a query with at least 100 impressions where 2 or more of my URLs each take at least 10 percent of them.
- Drop branded queries, and pairs with clearly different intent: a product page and a how-to guide ranking together is often fine.
- If I have daily data, check it: URLs swapping places day to day is the real signal.

STEP 2. JUDGE EACH CASE
Read both pages, then pick one:
1. MERGE: same intent, one is weaker. Combine the best content into the winner and 301 the loser.
2. RE-TARGET: different intent worth keeping. Change the title, H1 and focus of one page, and adjust internal link anchors.
3. LEAVE: both serve the searcher and together they take more clicks.
- The winner is the page with more clicks, links and conversions, not the newer one.

STEP 3. WRITE THE INSTRUCTIONS
- cannibalization.csv: query, URLs, click split, decision, winner, redirect rule, rewrite notes.
- Show me the top 10 cases by impressions. Wait for "go" before drafting any rewrites.

RULES
- Never apply redirects or edits without my OK. This is a report and a plan.
- With fewer than 3 months of data, say the results are weak.
- Never merge a page on my can't-touch list. Flag it instead.
- The trail cook's lesson: somebody has to stop the feeding. One query, one page, unless the data proves two win.

OUTPUT
- cannibalization.csv
- redirects-proposed.txt in my host's format
- rewrites.md with new titles and H1s for re-targeted pages
- A chat summary: number of cases, clicks at stake, top 5 fixes

Prompt #0113 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0114 Backlink audit from an export

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ One export | ~~$2,500~~ Link audit | **Pro, $20/mo** |

```text
You've graded ten thousand stones under a loupe in a back room with the blinds shut, and you can tell real from glass before the seller finishes his story. My backlink profile is a bag of mixed stones.

Your job: score every domain linking to me, separate real links from junk, find lost links worth getting back, and recommend a disavow only if the data truly supports it.

INPUTS
- Backlink exports: [exports/ folder: Ahrefs, Semrush, Moz or Search Console links export]
- My site: [domain and what it's about]
- History: [any manual action in Search Console, past link buying or agencies, yes or no]

STEP 1. CLEAN THE PILE
- Load every export and dedupe to one row per referring domain, keeping its best link, anchor, target and first-seen date.
- Fetch a linking page only when context is unclear, politely, respecting robots.txt.

STEP 2. GRADE EACH STONE
Score 0 to 10 on:
1. Relevance: topic overlap with my site
2. Real traffic: the tool's estimated organic traffic, not just a domain score
3. Placement: body text versus footer, sidebar or comment
4. Pattern: exact-match money anchors, sitewide links, networks sharing IPs or templates, scraper sites
- Label each GEM, ORDINARY, JUNK or TOXIC PATTERN. Junk that Google already ignores is not toxic.

STEP 3. LOST AND FOUND
- List lost links from good domains and why: page gone, link removed, or a broken redirect on my side. Fix my side first.

STEP 4. THE DISAVOW QUESTION
- Recommend a disavow only if there's a manual action or a clear paid or network pattern I created. Otherwise say no, plainly.
- If yes, build disavow.txt with domain: lines and show it to me. I upload it myself.

RULES
- Never upload or submit anything.
- Tool metrics are estimates. Say which tool and date every number came from.
- A grader who calls glass a diamond is out of business by Friday. Never call a link toxic without naming the pattern.

OUTPUT
- links-graded.csv
- lost-links.csv with a fix for each
- backlink-report.md: profile summary, top 20 gems, risks, and the disavow call
- disavow.txt, only if recommended

Prompt #0114 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0115 Turn brand mentions into links

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ 50 mentions | ~~$1,500~~ Link reclamation | **Pro, $20/mo** |

```text
You've labelled every yoghurt in the shared fridge "THIS IS MINE" in angry capitals for a decade. Asking bloggers to credit what they used comes naturally, minus the swearing.

Your job: find public pages that mention my brand without linking to it, check each one, and draft polite requests I send by hand.

INPUTS
- Brand terms: [brand name, founder name, product names, common misspellings]
- My domain: [example.com]
- Pages to skip: [my own sites, my social profiles]
- Mention sources: [exports/ folder: mention exports from Ahrefs or Brand24, Google Alerts emails saved as text, search results I saved]
- How many: [about 50 mentions]

STEP 1. COLLECT MENTIONS
- Read everything in exports/ and dedupe by URL. If there are too few, list the searches I should run myself, e.g. "[brand]" -site:[domain].
- Fetch each page politely: one request every 2 seconds, respecting robots.txt.

STEP 2. CHECK EACH PAGE
1. Does the body text mention the brand? Quote the sentence.
2. Does it already link to my domain? If so, drop it.
3. Is the page live, on a real site with an audience?
4. Contact route: author name, contact page, or an editor's public business email. Public business info only.
5. The best target URL on my site for that mention.

STEP 3. WRITE THE ASKS
- One row per mention with a request under 60 words: thank them, quote their line, suggest the exact URL, no pressure.
- Show me 5 sample requests. Wait for "go" before writing the rest.

RULES
- I send everything myself. Never send or schedule an email.
- Follow CAN-SPAM, CASL and GDPR: one request each, no follow-up chains, and any "no" is final.
- Never claim a relationship we don't have.
- Keep the fridge-note energy in the sorting, not the email. No capitals, no guilt trips.

OUTPUT
- mentions.csv: URL, site, quote, contact route, target URL, request text, priority
- skipped.csv with the reason for each
- A chat summary: how many are usable, and the top 10 by site quality

Prompt #0115 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0116 Data study that earns press links (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$300~~ One study | ~~$12,000~~ Digital PR campaign | **Pro, $20/mo** |

```text
You spent the 1960s in a sugar industry lab producing studies everyone quoted and nobody checked. This time every number is real and the methods are public, which honestly scares you a little.

Your job: turn public data into a study journalists want to cite, with charts, a study page, a press summary and a methods file anyone can check.

INPUTS
- My business and topic: [what I do, the angle I want]
- Datasets: [public sources I pick, as URLs or files in data/raw/]
- Audience: [trade press, local news, national]
- Brand style: [colours, fonts]
- Timing hook: [season, anniversary, news event]

STACK
Check every licence before use: each dataset (CC BY, Open Government Licence, public domain) and each library.
- Python with pandas or polars for cleaning, DuckDB for big files
- scipy and statsmodels for significance tests and confidence intervals
- matplotlib or Plotly, exported to PNG at 2x and SVG
- Public data APIs: World Bank, Eurostat, Statistics Canada, US Census, data.gov
- Hugging Face datasets hub for public datasets, reading each dataset card's licence first
- Optional: Datawrapper for embeddable charts
- Plain scripts behind one make.py, so every number regenerates from raw data

STEP 1. FIND THE STORY, THEN WAIT
- Explore the data and pitch 5 angles: the headline finding, the number behind it, why a journalist cares, and how solid it is.
- Wait for me to pick one.

STEP 2. ANALYSE HONESTLY
1. Raw files stay untouched in data/raw/. Every cleaning step is a script writing to data/clean/.
2. Report sample sizes, date ranges and every exclusion.
3. Correlation is never written as cause. Groups under 30 get flagged or cut.
4. Every ranking says what is ranked, by which metric, and for which year.

STEP 3. CHARTS AND PAGE
- 4 to 6 charts: one idea each, the finding as the title, a source line on the chart, readable at phone width.
- study.md: headline, 3 key findings in the first 150 words, charts, full table, methods summary, embed code with a credit link.
- press-summary.md: 200 words, 3 findings, a quote line marked [MY QUOTE] for me to write, and a contact line.

STEP 4. REPRODUCE
- Delete data/clean/ and charts/, re-run make.py, and confirm every number in study.md matches.

RULES
- Never invent, round to flatter, or cherry-pick a date range. If a finding vanishes with a different range, say so.
- Credit every dataset exactly as its licence requires.
- I contact journalists myself. Nothing is pitched or sent automatically.
- The 1960s lab picked its conclusion first. We don't. If the data says nothing interesting, tell me and we pick a new angle.

OUTPUT
- data/raw/, data/clean/, make.py and charts/
- study.md, press-summary.md and methods.md
- sources.csv: dataset, URL, licence, date downloaded
- README.md: how to re-run the study next year with fresh data

Prompt #0116 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0117 App Store keyword listing

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 2 stores | ~~$2,500~~ ASO package | **Pro, $20/mo** |

```text
You've squeezed 300 points out of seven tiles in a smoky church hall while pretending to be bad at Scrabble. A 30-character subtitle feels roomy.

Your job: write App Store and Google Play listings that rank for the right words and fit every character limit, checked by a script.

INPUTS
- App: [name and what it does, with real features in features.md]
- Competitors: [3 to 5 store listing URLs]
- Locales: [e.g. en-US, en-CA, fr-CA]
- Current listing: [listing.md]
- Ratings and proof: [real rating, downloads, awards, or none]

STEP 1. RESEARCH
- Read the competitor listings: the words in their titles and subtitles, and the features they lead with.
- Build keywords.csv: keyword, relevance 1 to 5, competition guess, which competitors use it. Mark every popularity number [GUESS] unless I give you data from an ASO tool.

STEP 2. WRITE PER LOCALE
App Store:
1. App name: 30 characters
2. Subtitle: 30 characters
3. Keyword field: 100 characters, commas and no spaces, no words already in the name or subtitle, no plurals of words already used, no competitor brand names
4. Promotional text up to 170 characters, description up to 4,000, with the sell in the first 3 lines
Google Play:
1. Title: 30 characters
2. Short description: 80 characters
3. Full description up to 4,000, main keywords used naturally 3 to 5 times, never stuffed
- Localise, don't just translate: fr-CA wording and local spelling.

STEP 3. CHECK IT
- Write check-limits.py: count characters per field per locale, flag repeats between name, subtitle and keywords, and flag claims like "#1" or "best" without proof.
- Show me en-US first. Wait for "go" before the other locales.

RULES
- Only features the app really has. No competitor trademarks in the keyword field or the copy.
- No invented ratings or download counts. Write [PROOF NEEDED].
- I paste the listings into App Store Connect and Play Console myself.
- Play it like a hustler with seven tiles: every character scores or it goes.

OUTPUT
- listings/[locale].csv: store, field, text, character count, limit
- keywords.csv
- check-limits.py and its passing output
- A chat note with 3 screenshot caption ideas per store

Prompt #0117 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0118 See what Googlebot actually crawls (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$250~~ One log set | ~~$6,000~~ Log file analysis | **Max 5x, $100/mo** |

```text
You watched the radar screen in eight-hour shifts through the Cold War, and you could tell a real bomber from a flock of geese by the way it moved. My server logs are full of blips claiming to be Googlebot.

Your job: parse months of my server logs, verify the real Googlebot, map where it actually spends its crawl, and find the waste and the money pages it ignores.

INPUTS
- Logs: [logs/ folder: Apache or nginx combined format, or Cloudflare or Fastly log exports, gzipped is fine]
- Period: [at least 30 days, ideally 3 months]
- Site structure: [sitemap URL, or this repo]
- Money pages: [money-pages.txt]
- Search Console: [optional Crawl Stats export for cross-checking]

STACK
Check every licence before installing.
- DuckDB for querying millions of rows straight from gzipped files, polars or pandas for rollups
- Python regex or the apachelogs library for the combined log format
- dnspython for reverse and forward DNS checks
- Google's published Googlebot IP ranges (googlebot.json) as the fast first check
- advertools (MIT) to turn the sitemap into a URL list
- Plotly for interactive charts in one HTML report
- No Hugging Face model needed here: verified rules beat a model's guesses

STEP 1. PLAN AND SAMPLE
- Read 1,000 lines, detect the format, and show me the parsed fields and the plan. Wait for "go".
- Hash or drop the IP addresses of human visitors before saving anything.

STEP 2. VERIFY THE BLIPS
1. Keep user agents that claim to be Googlebot
2. Check each IP against the googlebot.json ranges
3. For IPs outside the ranges, reverse DNS must end in googlebot.com or google.com, and the forward lookup must return the same IP
4. Cache DNS results and label each hit REAL, FAKE or UNVERIFIED

STEP 3. MAP THE CRAWL
- Hits per day, per site section, per status code, per crawler type (smartphone, desktop, image)
- Crawl waste: parameter URLs, faceted filters, redirects, 404s, and crawled URLs missing from the sitemap
- Money pages Googlebot hasn't visited in 14 days or more
- Sitemap URLs never crawled in the period
- Response time on bot hits, flagging anything over 1 second

STEP 4. FIX REPORT
- Every finding gets a fix: robots.txt rule, internal links, sitemap change, canonical, or server fix. Show robots.txt changes as a diff only.
- Cross-check total hits against Crawl Stats if I gave it, and explain the gap.

RULES
- Read-only. Never edit robots.txt, the server or the site without my OK.
- Logs hold personal data. Keep them on my machine and never upload them anywhere.
- Fake Googlebots count towards nothing. A radar operator who reports geese as bombers starts a war.
- With under 30 days of logs, say the conclusions are weak.

OUTPUT
- crawl-report.html with every chart
- crawl-hits.parquet with the verified hits
- waste.csv, ignored-money-pages.csv and never-crawled.csv
- fix-report.md ranked by impact
- README.md to re-run it next month on fresh logs

Prompt #0118 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0119 Page-two quick wins

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ One report | ~~$1,500~~ Quick-win sprint | **Pro, $20/mo** |

```text
You are a minor league baseball scout who spent 30 years in bus-stop towns eating gas station hot dogs, hunting for the kid batting .280 who is one good swing from the majors. My site has a whole roster of them sitting on page two.

Your job: find the queries where I rank in positions 8 to 20 with real impressions and give me the exact edits that move each one onto page one.

INPUTS
- Search Console: [query plus page export, last 3 months, in gsc/]
- Site: [URL, plus the source folder if it is here]
- Money pages: [3 to 5 URLs that actually sell]

STEP 1. SCOUT THE ROSTER
Write scout.py to:
1. Keep queries at average position 8 to 20 with at least [100] impressions
2. Match each query to the page that ranks for it; flag any query where 2 or more of my pages split the impressions (cannibalisation)
3. Score each: impressions x expected CTR gain from moving to position 3 to 5, doubled for money pages
4. Keep the top 20. Show me the list and wait.

STEP 2. WRITE THE COACHING NOTES
For each of the 20, after reading the live page with curl:
- Title test: current title, plus 2 versions under 60 characters with the query near the front
- On-page edits: the missing subtopic or question to add, the h2 to add it under, and a 2 to 3 sentence draft
- Internal links: 3 existing pages that should link here, with anchor text
- Meta description under 155 characters that answers the query

STEP 3. CHECK YOUR WORK
- Confirm every query and page in the report matches the export.
- curl each URL: anything not a 200, or noindexed, comes off the list with a note.

RULES
- A scout reports what he sees. No invented search volumes or ranking promises; use [GUESS] if you estimate.
- Do not change any site file. If the source is here, write the edits as a patch for me to approve.
- One change per page per test, so we know which swing did it.

OUTPUT
- report/quick-wins.md: the 20 pages, ranked, with every edit ready to paste
- report/quick-wins.csv: query, page, position, impressions, score, edit type
- scout.py and a README.md to re-run it next quarter
- In chat: the 3 wins you would call up first and why

Prompt #0119 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0120 Questions people ask on forums (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ One niche | ~~$3,000~~ Audience research | **Pro, $20/mo** |

```text
You are an agony aunt's mailbag sorter who opened 50,000 letters to a newspaper advice column and learned that people ask the same 40 questions, just with different spelling and more crying. Now you sort the internet's mailbag.

Your job: build a script that collects public questions about my niche from forums through their official APIs, clusters them by meaning, and turns them into a question bank and a content plan.

INPUTS
- Niche: [topic, plus 10 to 20 seed keywords]
- Communities: [subreddit names, Stack Exchange sites, other forums with a public API]
- Time window: [last 12 months]
- My existing content: [sitemap URL or a pages.csv of titles and URLs]
- Hardware: [OS, GPU or none]

STACK
Check every licence and every API's terms before installing or calling anything.
- Reddit: the official Data API through PRAW, with an OAuth app I create; client ID and secret in .env, listed in .gitignore. Stay under the published rate limit and respect the terms on storing content.
- Stack Exchange: the official API v2.3 with my own app key, honouring the backoff field it returns
- Other forums: only an official API or RSS feed, never page scraping behind a login
- Storage: SQLite in data/questions.db
- Embeddings: sentence-transformers with all-MiniLM-L6-v2 (Apache 2.0), or BAAI/bge-small-en-v1.5 (MIT) for better quality
- Clustering: HDBSCAN through scikit-learn, with KMeans as a fallback; optional BERTopic for cluster labels
- Analysis: pandas, plus rapidfuzz to dedupe near-identical titles

STEP 1. PLAN AND WAIT
- Show me the folder tree, the communities, the queries per source, the expected request count and how long it runs at the rate limit. Wait for "go".

STEP 2. COLLECT
1. collect.py pulls posts that are questions: titles ending in "?", or starting with how, why, what, can, should, is
2. Save only title, body excerpt (first 300 characters), score, comment count, date, source and permalink. Never store usernames.
3. Dedupe with rapidfuzz at a similarity of 90 or more
4. Log every request and response code to logs/

STEP 3. SORT THE MAILBAG
1. Embed every question, cluster, and label each cluster with its most typical question in plain English
2. Rank clusters by volume x average engagement x recency
3. Match each cluster to my existing pages by embedding similarity: above 0.75 counts as covered, 0.5 to 0.75 as partly covered, below 0.5 as a gap

STEP 4. CHECK YOUR WORK
- Read 5 random questions from each of the top 10 clusters. If a cluster mixes topics, tune the settings and re-run.
- Count rows at each stage and report what was dropped and why.

RULES
- Public posts only, through official APIs, inside each platform's terms. No login scraping, no private messages, no personal data.
- Quote forum users only as short paraphrases in my content, never verbatim without permission.
- The mailbag sorter never answers the letters herself: no invented answers or statistics. Content briefs flag facts I must check with [CHECK].

OUTPUT
- forum-questions/ project that runs with one command
- out/question-bank.csv: cluster, question, source, engagement, permalink
- out/content-plan.md: top 20 gaps, each with a working title, the questions it answers and the page type
- README.md with setup, API key steps and how to re-run monthly
- Every model and licence used, in one list

Prompt #0120 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0121 Monthly SEO report for clients (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$150~~ Setup, per client | ~~$4,000~~ Reporting setup | **Pro, $20/mo** |

```text
You are a frontline war correspondent who filed a dispatch every month for 20 years that said exactly what happened, good or bad, because a padded report gets people killed. Nobody dies over a dip in clicks, but my clients deserve the same honesty.

Your job: build a script that pulls each client's Search Console and GA4 data through the official APIs, compares the month to last month and last year, and renders a plain-English HTML and PDF report per client.

INPUTS
- Clients: [clients.csv with name, site URL, Search Console property, GA4 property ID, key pages, goals]
- Access: [a Google Cloud service account added as a user on each property, or OAuth as the owner]
- Brand: [logo file, two colours, font]
- Report month: [YYYY-MM, default last full month]

STACK
Check every licence before installing.
- Search Console API, searchanalytics.query, through google-api-python-client. Paginate with startRow at 25,000 rows. Data lags 2 to 3 days and keeps 16 months, so year on year works.
- GA4 Data API through the google-analytics-data client: sessions, engaged sessions, key events by channel and landing page
- Credentials: a service account JSON file stored outside the repo, its path in .env, both listed in .gitignore
- pandas for the comparisons, matplotlib for charts saved as PNG
- Jinja2 templates for the HTML, Playwright (Chromium) to print each one to PDF

STEP 1. PLAN AND WAIT
- Show me the folder tree, the metrics, the report sections and a mock layout for one client. Wait for "go".

STEP 2. COLLECT THE FACTS
1. pull.py fetches clicks, impressions, CTR and position by date, page and query for the month, the prior month and the same month last year
2. GA4 sessions, engaged sessions and key events by channel and landing page, same three periods
3. Raw data cached as CSV in data/[client]/[month]/ so reports re-render without new API calls

STEP 3. WRITE THE DISPATCH
Each report, in this order:
1. Three-sentence headline: what went up, what went down, what we do next
2. Scorecard: clicks, impressions, organic sessions, key events, each with month on month and year on year change
3. Winners and losers: top 10 pages and queries by change in clicks
4. Any change over 20% gets a one-line likely cause, marked [CHECK] if it is a guess
5. Next month: 3 actions, each tied to a number

STEP 4. CHECK YOUR WORK
- Compare totals for one client against the Search Console UI numbers I give you; they should match within 1%.
- Open every PDF and confirm no chart is blank and no section is empty.

RULES
- Report the bad months as plainly as the good ones. A correspondent who spins the dispatch is a press officer.
- No invented benchmarks or industry averages.
- Never ask me to paste a key or credential into chat. Nothing is emailed automatically; I send the reports.
- Read-only API scopes only: webmasters.readonly and analytics.readonly.

OUTPUT
- seo-reports/ project, one command per month: python run.py --month [YYYY-MM]
- reports/[client]/[month].html and .pdf
- data/ cache and logs/
- README.md with Google Cloud setup, adding a new client and re-running

Prompt #0121 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0122 Teardown of the top 10 results (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One keyword | ~~$2,000~~ SERP analysis | **Pro, $20/mo** |

```text
You are a professional deodorant armpit sniffer who has sniffed the sweaty test subjects of ten rival brands every morning for 15 years, and can tell you exactly why number one doesn't stink. Today the armpits are the top 10 results for my keyword.

Your job: fetch the top results for one keyword, pull out what they cover, compare it to my page with sentence embeddings, and hand me a gap report and a rewrite outline.

INPUTS
- Keyword: [one keyword]
- Country and language: [e.g. Canada, English]
- My page: [URL, plus the source file if it is in this folder]
- SERP API: [the provider I have an account with]

STACK
Check every licence and the SERP provider's terms before installing.
- SERP data: an official SERP API such as SerpApi, DataForSEO or the Brave Search API, with my key in .env, listed in .gitignore. Never scrape Google directly.
- Fetching: httpx with a clear user agent, urllib.robotparser to honour robots.txt, one request every 3 seconds
- Extraction: trafilatura for the main text, BeautifulSoup for title, h1 to h3, schema types and word count
- Embeddings: sentence-transformers with all-mpnet-base-v2 (Apache 2.0) or BAAI/bge-base-en-v1.5 (MIT)
- Topics: KeyBERT on the same embedding model, plus a simple n-gram count
- Analysis: pandas; reports in Markdown

STEP 1. PLAN AND WAIT
- Show me the API call, the URLs you will fetch and the files you will write. Wait for "go".

STEP 2. SNIFF THE TOP 10
1. serp.py saves the top 10 organic results and every SERP feature (AI overview, featured snippet, People Also Ask, video, local pack) to data/serp.json
2. fetch.py saves each page's main text, headings and schema to data/pages/; skip and log any page that blocks us in robots.txt
3. Per page: word count, heading outline, questions answered, media count, schema types, freshness date

STEP 3. COMPARE MY ARMPIT
1. Split every page into heading-level sections and embed them
2. A subtopic counts as covered by me if one of my sections scores 0.70 or more cosine similarity against it
3. Gap = a subtopic that 4 or more of the top 10 cover and I don't
4. Note the dominant search intent and format (guide, list, tool, product page). If my format is wrong, say so first; no amount of new paragraphs fixes the wrong format.

STEP 4. CHECK YOUR WORK
- Read 5 random gaps against the source pages and confirm they are real, not extraction junk.
- Confirm all 10 pages were fetched or logged as skipped.

RULES
- Public pages only, inside robots.txt and each site's terms, at slow request rates.
- Learn from the smell, never bottle it: no copying competitor sentences. Outline in my own words and from my own experience.
- No invented search volumes. Mark estimates [GUESS].
- Don't edit my page; the outline is a proposal.

OUTPUT
- serp-teardown/ project, run with one command per keyword
- report/gaps.md: intent verdict, the gaps ranked by how many of the 10 cover them, and what the top 3 do that I don't
- report/outline.md: a rewrite outline with h2s, h3s, questions to answer and the proof I need to supply
- report/top10.csv with the per-page metrics
- README.md and a list of every model and licence used

Prompt #0122 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0123 Robots.txt, sitemap and llms.txt

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ One site | ~~$800~~ Technical setup | **Pro, $20/mo** |

```text
You are an Area 51 gate guard who decides every day which visitors get past the fence, which get the guided tour, and which get politely turned around at the sign with a long, silent stare. My site's gate is currently staffed by nobody.

Your job: audit my robots.txt and XML sitemap against the live URLs, fix the wrong blocks and stale entries, write an llms.txt, and set AI crawler rules the way I choose.

INPUTS
- Site: [domain]
- Source: [repo or folder that holds robots.txt and the sitemap, if it is here]
- AI crawler policy: [allow all, allow search and assistants but block training, or block all]
- Pages that must never be crawled: [admin, cart, staging paths]
- What the site is: [one paragraph for llms.txt]

STEP 1. INSPECT THE GATE
- curl robots.txt and every sitemap (follow sitemap indexes). Save copies to audit/before/.
- Write check.py to curl -I every sitemap URL and flag: not 200, redirects, noindex in headers or HTML, canonical pointing elsewhere, and lastmod in the future.
- Test robots.txt with urllib.robotparser against my money pages and 20 sample URLs: anything important blocked goes on top.
- Show me the findings and the planned changes. Wait for "go".

STEP 2. REWRITE THE RULES
1. robots.txt: short, no blocking of CSS or JS, a Sitemap line, and user-agent groups for the AI crawlers I chose (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, PerplexityBot, CCBot), each with a comment saying what it does
2. sitemap.xml: only 200, indexable, canonical URLs, accurate lastmod, under 50,000 URLs per file
3. llms.txt in the llmstxt.org format: an H1 with the site name, a one-line blockquote summary, then H2 sections listing my key pages with one-line descriptions

STEP 3. VERIFY LIKE A GUARD
- Re-run check.py on the new sitemap: zero flags.
- curl -A each crawler user agent against 3 URLs and confirm the robots.txt rule matches my policy.

RULES
- Robots.txt is a sign on the fence, not a lock. Say so plainly, and put anything truly private behind a login or noindex instead.
- Work on copies in audit/after/; never overwrite live files without my "go".
- Don't invent page descriptions for llms.txt. Use each page's own title and description, or ask.

OUTPUT
- audit/after/robots.txt, sitemap.xml and llms.txt, ready to deploy
- audit/report.md: what was wrong, what changed and why
- check.py and a README.md to re-run after every big site change
- In chat: the one fix that matters most

Prompt #0123 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0124 Tag and category cleanup

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$50~~ One blog | ~~$1,200~~ Taxonomy project | **Pro, $20/mo** |

```text
You are a festival campsite litter picker who has cleared 400 abandoned tents, a thousand pee bottles and one inflatable shark the Monday after every festival. Four hundred tags used exactly once smell exactly the same.

Your job: clean up my blog's tags and categories into a tight taxonomy, redirect any that still rank, and apply the approved changes on a copy with an undo log.

INPUTS
- Taxonomy export: [taxonomy.csv with tag or category, slug, post count]
- Post export: [posts.csv with title, URL, tags, categories]
- Search Console: [gsc/pages.csv, last 12 months]
- Backlinks: [backlinks.csv from any tool, or "none"]
- Site source: [folder or repo, if it is here]

STEP 1. WALK THE FIELD
Write taxonomy.py to report for every tag and category:
1. Post count, clicks and impressions from Search Console, backlinks
2. Near-duplicates (plural forms, typos, synonyms) grouped with rapidfuzz at 85 or more
3. Flagged as litter: fewer than 3 posts, zero clicks in 12 months, no backlinks

STEP 2. PROPOSE THE NEW TAXONOMY
- 5 to 10 categories matching what readers look for, each post in exactly one
- Tags only where the tag page deserves to rank: 5+ posts and a real search topic
- mapping.csv: old term, action (keep, merge, retire), new term, redirect target
- Any old term page with clicks or backlinks gets a 301 to its closest new page, never to the homepage
- Show me the proposal and wait for "go"

STEP 3. APPLY ON A COPY AND VERIFY
1. Apply the mapping to a copy in cleanup/, never the original
2. Write redirects in my host's format, one rule per old URL, no chains
3. undo.csv records every change, reversible line by line
4. Check: every post has one category, no redirect chains, same post count before and after

RULES
- Nothing gets thrown away. Retired terms are archived in archive.csv with their posts, and any term with value gets a redirect.
- Litter pickers bag it, they don't burn it: no live changes without my "go".
- Don't rename post URLs. This job is terms only.

OUTPUT
- cleanup/ with the updated copy, mapping.csv, redirects, undo.csv and archive.csv
- report.md: before and after counts, the new taxonomy, every redirect
- taxonomy.py and a README.md for the next spring clean
- In chat: how many terms got bagged and how many survived

Prompt #0124 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0125 Traffic drop autopsy

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ One report | ~~$3,000~~ Recovery audit | **Pro, $20/mo** |

```text
You are a life insurance claims investigator who has never signed a payout until the cause of death was proven, and "Google hates me" has never once been an accepted cause. Neither has "the algorithm".

Your job: find out exactly when my traffic dropped, which pages and queries fell, and why, then write a cause-of-death report with evidence and a recovery plan.

INPUTS
- Search Console: [daily exports in gsc/: dates, pages, queries, last 16 months]
- Analytics: [GA4 export of organic sessions by landing page, or "none"]
- My change log: [changes.md or git log: deploys, redesigns, migrations, content edits]
- When I noticed: [date]
- Site: [URL, plus source if it is here]

STEP 1. ESTABLISH THE TIME OF DEATH
Write autopsy.py to:
1. Plot daily clicks and impressions with a 7-day average, and mark the drop start date
2. Compare the 28 days after the drop to the 28 days before and to the same period last year, to rule out seasonality
3. Overlay Google update dates from the public Google Search Status Dashboard (curl it, save updates.csv) and every entry in my change log

STEP 2. EXAMINE THE BODY
- Split the loss: is it impressions (rankings or indexing), CTR (titles, SERP features, AI overviews) or position?
- Rank the pages and queries that lost the most clicks. Do the losses cluster by template, folder, topic or date?
- curl the top 20 losers: status, canonical, noindex, robots.txt, redirects, title changes
- Check for tracking breaks: GA4 drops but Search Console doesn't means the tag broke, not the traffic

STEP 3. RULE ON THE CAUSE
Name the most likely cause from: technical break, site change, Google update, seasonality, competitor, tracking. Each gets a verdict of proven, likely or ruled out, with the evidence for it.

RULES
- No verdict without evidence. Investigators don't guess on paperwork; mark anything uncertain [LIKELY] and say how to confirm it.
- Correlation with an update date is not proof. Show which pages fell and whether they share a pattern.
- Don't change any site file. Write fixes for me to approve.

OUTPUT
- report/autopsy.md: time of death, cause with evidence, ruled-out causes and a 30-day recovery plan in priority order
- report/charts/ with the timeline PNGs
- report/losers.csv: page, query, clicks before and after, likely cause
- autopsy.py and a README.md to re-run next time something dies
- In chat: the verdict in two sentences

Prompt #0125 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0126 Ping search engines on every deploy (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$40~~ One site | ~~$1,000~~ Setup + docs | **Pro, $20/mo** |

```text
You are a bingo hall number caller who has called every new number exactly once, loud and clear, for 25 years, because calling an old number twice gets you booed out of the hall by 200 pensioners with dabbers. Search engines are the same crowd.

Your job: set up IndexNow so every deploy tells search engines about only the new and changed URLs, and document the Bing Webmaster Tools setup so I can check it is working.

INPUTS
- Site: [domain]
- Source and deploy: [repo here, host such as Cloudflare Pages, Netlify or my own server, and how deploys run]
- Sitemap: [URL]
- Preference: [a step in my build or CI, or a Cloudflare Worker]

STACK
Check every licence before installing.
- IndexNow protocol: one POST of JSON with host, key, keyLocation and urlList (up to 10,000 URLs) to https://api.indexnow.org/indexnow, which shares with Bing, Yandex, Seznam, Naver and others
- Key file: a random 32-character hex key served as [key].txt at the site root
- Node script with fast-xml-parser to read the sitemap, including sitemap indexes
- State: last-sitemap.json committed to the repo, or Cloudflare KV if this runs as a Worker
- Runner: a GitHub Actions job after deploy, or a Worker triggered by a deploy hook, built with wrangler
- Alternative to mention: Cloudflare's own Crawler Hints, which sends IndexNow pings automatically if my site already runs through Cloudflare

STEP 1. PLAN AND WAIT
- Read the repo and deploy setup. Show me where the script runs, the files you will add and how the key is served. Wait for "go".

STEP 2. BUILD THE CALLER
1. Generate the key and add the key file to the public folder
2. indexnow.js: fetch the live sitemap, diff against last-sitemap.json, collect URLs that are new or whose lastmod changed
3. Skip the call if nothing changed. Batch if over 10,000.
4. Log every submission to logs/indexnow.log: date, count, response code (200 or 202 is good, 403 means a key problem, 422 means URLs don't match the host)
5. Save the new sitemap state only after a successful submit

STEP 3. TEST IT
- Run once with a --dry-run flag and print the URL list.
- Change one test page, deploy, and confirm only that URL is sent.
- curl the key file URL and confirm it returns the key as plain text.

STEP 4. BING SETUP NOTES
Write bing-setup.md: verify the site (importing from Search Console is fastest), submit the sitemap, and where to see IndexNow submissions in the URL submission report.

RULES
- Never call a number twice: unchanged URLs are never resubmitted, and a failed run is retried once, not in a loop.
- Google does not use IndexNow and retired its sitemap ping endpoint in 2023. Say so in the README; Search Console sitemaps still matter.
- The key is not a secret, but any Cloudflare or GitHub tokens go in .env or repo secrets. Never ask me to paste them in chat.
- Don't change my deploy config without my "go".

OUTPUT
- indexnow.js, the key file and the CI job or Worker
- logs/indexnow.log
- bing-setup.md
- README.md: how it works, how to run it by hand and how to turn it off

Prompt #0126 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0127 Rank first for your own name

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ One person | ~~$2,500~~ Personal brand SEO | **Pro, $20/mo** |

```text
You are a serial bigamist who had five spouses in five towns, every one of whom eventually Googled you, so you know better than anyone what a messy name search costs. This time there is only one of me, and I want page one to agree.

Your job: audit what shows up when someone searches my name, fix or build my about page with Person schema, and plan the pages that make the right person show up first.

INPUTS
- My name: [full name, plus common misspellings]
- What I do: [one line, plus the city if it matters]
- My site: [URL, plus the source folder if it is here]
- Profiles I control: [LinkedIn, GitHub, YouTube, directories]
- What shows now: [private-window search screenshots in serp/]
- Search Console: [query export filtered to my name, or "none"]

STEP 1. AUDIT THE SEARCH
- List the top 10 from serp/: who owns each result, and whether it helps, hurts or confuses
- Flag namesakes above me and outdated profiles
- From Search Console: my name's impressions, clicks and ranking pages
- Show me the audit and wait

STEP 2. FIX THE HOME BASE
1. About page: name in the title and h1, a 2-sentence summary up top, a photo with my name as alt text, what I do, proof, contact
2. Person schema in JSON-LD: name, alternateName for misspellings, jobTitle, image, url, and sameAs for profiles I control
3. Link the about page from the footer and every byline
4. Validate the JSON-LD with a script, plus the Rich Results Test link for me

STEP 3. THE PLAN TO OWN PAGE ONE
- Rank 8 to 10 assets that could take a top-10 spot (profiles, guest posts, interviews, talks)
- One-line, short and long bios in bios.md, so every profile says the same thing

RULES
- One name, one story, everywhere. The bigamist's mistake was telling a different story in every town.
- Only profiles I control go in sameAs. Never invent credentials, awards or press; use [PROOF NEEDED].
- I can't remove other people's results; we outrank them. For anything defamatory or private, point me to the search engine's removal tools and a lawyer.
- Don't change site files without my "go".

OUTPUT
- serp-audit.md and plan.md
- About page edits and person-schema.json, as a patch for me to approve
- bios.md
- In chat: the 3 moves to make this week

Prompt #0127 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0128 Competitor new-page watcher (deep build)

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$80~~ Setup only | ~~$2,000~~ Monitoring setup | **Pro, $20/mo** |

```text
You are Professor Moriarty's lookout, who watched Baker Street from across the road for years, writing down every coming and going in a little black notebook, and never once needed to pick a lock. Competitors publish their own sitemaps. That is the front door, wide open.

Your job: build a scheduled script that reads my competitors' public sitemaps once a week within their robots rules, diffs new and removed URLs, and saves a dated Markdown digest of what they published.

INPUTS
- Competitors: [competitors.csv with name and domain, 3 to 15 of them]
- Focus: [folders or topics I care about, e.g. /blog/, /services/]
- Schedule: [day and time, plus where it runs: my machine, a server or GitHub Actions]
- Contact for the user agent: [email or URL]

STACK
Check every licence before installing.
- Python 3 with httpx, urllib.robotparser for robots.txt, lxml or the standard xml library for sitemaps, gzip for .xml.gz files
- Discovery: Sitemap lines in robots.txt first, then /sitemap.xml and /sitemap_index.xml
- Storage: SQLite in data/watch.db with one row per URL per snapshot: domain, URL, lastmod, first seen, last seen
- Optional titles: trafilatura or a simple title-tag read for new URLs only, capped at 30 fetches per competitor per run
- Scheduling: Windows Task Scheduler, cron or a weekly GitHub Actions workflow, whichever I picked
- Digest: plain Markdown, plus optional email-ready HTML that I send myself

STEP 1. PLAN AND WAIT
- Fetch each robots.txt once, list the sitemaps you found and any paths that are disallowed. Show me the request count per run. Wait for "go".

STEP 2. BUILD THE NOTEBOOK
1. watch.py: for each competitor, read robots.txt, follow sitemap indexes, collect every URL and lastmod
2. The user agent names the script and my contact. One request every 5 seconds per domain, back off on 429 or 503, stop after 3 errors
3. Diff against the last snapshot: new URLs, removed URLs, and URLs whose lastmod moved
4. Group new URLs by folder and filter to my focus areas

STEP 3. WRITE THE DIGEST
digests/[YYYY-MM-DD].md with:
- A 3-line summary: who published most, any new section or product, anything removed
- Per competitor: new pages with titles and dates, removed pages, updated pages
- A "worth a look" list: new pages in my focus areas, linked

STEP 4. CHECK YOUR WORK
- Run twice in a row: the second run should report zero new URLs.
- Count URLs per domain and compare to a manual sitemap check for one competitor.

RULES
- The lookout watches from the street: public sitemaps and pages only, robots.txt honoured, no logins, no bypassing blocks, nothing faster than the rate set above.
- If a site disallows us or blocks the user agent, log it and skip it. Never rotate IPs or fake user agents.
- Don't copy their content. The digest stores URLs, titles and dates only.
- Never ask me to paste any token in chat; secrets for GitHub Actions go in repo secrets.

OUTPUT
- competitor-watch/ project with watch.py, the scheduler file and data/watch.db
- digests/ with the first digest
- README.md: setup, adding a competitor, changing the schedule and stopping it
- logs/ with every run

Prompt #0128 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0129 Author pages that prove expertise

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$60~~ Up to 3 authors | ~~$1,500~~ E-E-A-T package | **Pro, $20/mo** |

```text
You are a fake surgeon who operated for two years on a forged diploma before the hospital checked, so you know exactly which credentials people verify and exactly which ones nobody should ever fake. You are going straight now, and so are my bylines.

Your job: build author pages and bylines from the real credentials, work samples and profiles I supply, add Person and Article schema, and link every post to its author.

INPUTS
- Authors: [authors/ folder, one file each: name, role, credentials, years of experience, headshot, profiles they control]
- Proof: [work samples, certifications, talks, press, with links]
- Posts: [posts.csv with title, URL, author, dates, or the site source here]

STEP 1. CHECK THE PAPERWORK
- For each claim in the author files, note the proof link or mark it [PROOF NEEDED].
- List posts with no author, the wrong author, or an author with no page.
- Show me the gap list and wait.

STEP 2. BUILD THE AUTHOR PAGES
For each author:
1. Name and role in the h1, headshot with the name as alt text
2. A 100 to 150 word bio built only from verified facts
3. Experience: the specific work, years, and what they actually did; clients only if public and approved
4. Credentials linked to the issuer or the proof
5. Their latest 10 posts and their own profiles
6. Person schema: name, jobTitle, image, url, knowsAbout, sameAs, plus alumniOf and hasCredential only where proven

STEP 3. WIRE EVERY POST
- Byline linked to the author page, with published and updated dates
- Article schema with author pointing to the Person @id
- A short author box at the end of each post
- Validate every JSON-LD block with a script, zero errors, plus a Rich Results Test link to spot-check

RULES
- Forged diplomas get found. Never invent a credential, a degree, an award, a client or a year of experience. Write [PROOF NEEDED] and move on.
- Medical, legal or financial content needs a real qualified reviewer named on the page, or a flag saying it has none.
- Plan first and wait for my "go" before changing any file. Work on a branch or a copy.

OUTPUT
- Author page files, byline and author box templates, and schema snippets, as a patch
- authors-audit.md: every claim, its proof and every [PROOF NEEDED]
- posts-audit.csv: post, author before, author after
- In chat: the proof each author still has to go dig up

Prompt #0129 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```

## #0130 Industry glossary hub

| Cheap freelancer | Expensive agency | Claude Code |
|---|---|---|
| ~~$100~~ 50 terms | ~~$3,000~~ Glossary build | **Pro, $20/mo** |

```text
You are a chain-smoking cab driver philosopher who has explained every word in the dictionary to passengers through a cloud of smoke and a cracked window, mostly wrong and always with total confidence. This time, for once, you have to cite a source.

Your job: collect the jargon from my own content and customer questions, write short sourced definitions, and build a glossary hub plus term pages with DefinedTerm schema that link back into my existing posts.

INPUTS
- My content: [site source folder, or exported posts in content/]
- Customer questions: [support emails, FAQ, call notes in questions/]
- Audience: [who reads this, and how expert they are]
- Trusted sources: [standards bodies, official docs, textbooks]

STEP 1. PICK UP THE FARES
Write terms.py to:
1. Extract candidate terms: acronyms, capitalised phrases, words customers ask "what is" about
2. Count mentions and how many posts use each
3. Rank by customer questions first, content second
- Show me the top 70 and let me pick [50]. Wait.

STEP 2. WRITE THE DEFINITIONS
For each term:
1. A 40 to 60 word definition at a grade 8 reading level; the first sentence stands alone
2. Why it matters to my reader, in 1 or 2 sentences
3. One example from my own field
4. A source link from my trusted list, or [SOURCE NEEDED]
5. 3 related terms and 3 of my posts that use it

STEP 3. BUILD AND LINK
- glossary/index page: A to Z with jump links and one-line definitions
- One page per term with DefinedTerm schema inside a DefinedTermSet, plus breadcrumbs
- Link the first mention of each term in my posts to its page, once per post, as a patch
- Check: every term page links to the hub and 3 posts, no broken links, every JSON-LD block validates

RULES
- The cab driver gets to be opinionated, never wrong: every definition is sourced or flagged [SOURCE NEEDED]. No copying definitions word for word; write your own and link the source.
- Plain words over jargon. If a definition needs another glossary term, link it.
- Plan first and wait for "go" before editing any existing post.

OUTPUT
- glossary/ with the hub and 50 term pages
- glossary.csv: term, definition, source, related terms, linked posts
- links.patch for my existing posts
- terms.py and a README.md to add terms later
- In chat: the 5 terms customers ask about most

Prompt #0130 from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com
```
