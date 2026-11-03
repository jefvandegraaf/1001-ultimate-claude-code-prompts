// Builds prompts/*.md and the README index from data/prompts.json.
// Run: node scripts/build.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const data = JSON.parse(fs.readFileSync(path.join(root, "data/prompts.json"), "utf8"));
const PLANS = { 20: "Pro, $20/mo", 100: "Max 5x, $100/mo", 200: "Max 20x, $200/mo" };
const usd = n => "$" + n.toLocaleString("en-US");
// Travels with every copy, as CC BY 4.0 asks
const credit = p => `Prompt #${p.id} from 1001 Ultimate Claude Code Prompts by Jef van de Graaf · jefvandegraaf.com`;
const slug = s => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// One Markdown file per category
const outDir = path.join(root, "prompts");
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir);
const index = [];
data.categories.forEach((cat, ci) => {
  const items = data.prompts.filter(p => p.category === cat.code);
  const file = `${String(ci + 1).padStart(2, "0")}-${slug(cat.name)}.md`;
  const first = items[0].id, last = items[items.length - 1].id;
  index.push(`| [${cat.name}](prompts/${file}) | ${items.length} | #${first} to #${last} |`);
  const body = items.map(p => [
    `## #${p.id} ${p.task}${p.deep ? " (deep build)" : ""}`,
    "",
    `| Cheap freelancer | Expensive agency | Claude Code |`,
    `|---|---|---|`,
    `| ~~${usd(p.freelancer)}~~ ${p.freelancer_note} | ~~${usd(p.agency)}~~ ${p.agency_note} | **${PLANS[p.claude_code_plan]}** |`,
    "",
    // gear to buy; the one affiliate note sits at the bottom of the file
    ...(p.needs && p.needs.length ? [`**What you'll need:** ${p.needs.map(n => `[${n.label}](${n.url})`).join(" · ")}`, ""] : []),
    "```text",
    p.prompt,
    "",
    credit(p),
    "```",
    ""
  ].join("\n")).join("\n");
  const note = items.some(p => p.needs && p.needs.length) ? `---\n\n<sub>${data.small_print.affiliate}</sub>\n\n` : "";
  fs.writeFileSync(path.join(outDir, file), `[← All 1001 prompts](../README.md)\n\n# ${cat.name}\n\n${items.length} prompts. Copy one, fill in the [brackets], paste it into Claude Code.\n\n${body}\n${note}[← All 1001 prompts](../README.md)\n`);
});

// README index and totals
const sumF = data.prompts.reduce((n, p) => n + p.freelancer, 0);
const sumA = data.prompts.reduce((n, p) => n + p.agency, 0);
const maxC = Math.max(...data.prompts.map(p => p.claude_code_plan));
const block = [
  data.prompts.length >= 1001 ? "**All 1001 prompts.**" : `**${data.prompts.length} of 1001 prompts written so far.**`,
  "",
  `All of them, done by a cheap freelancer: ~~${usd(sumF)}~~. By an expensive agency: ~~${usd(sumA)}~~. By Claude Code: **${usd(maxC)} a month**.`,
  "",
  "| Category | Prompts | Numbers |",
  "|---|---|---|",
  ...index
].join("\n");
const readmePath = path.join(root, "README.md");
const readme = fs.readFileSync(readmePath, "utf8");
fs.writeFileSync(readmePath, readme.replace(/<!-- index:start -->[\s\S]*<!-- index:end -->/, `<!-- index:start -->\n${block}\n<!-- index:end -->`));

// The licence points at the prompt Jef uses to find uncredited copies, wherever it is numbered today
const hound = data.prompts.find(p => p.task === "The Copyright Bloodhound");
if (hound) {
  const ci = data.categories.findIndex(c => c.code === hound.category);
  const file = `prompts/${String(ci + 1).padStart(2, "0")}-${slug(data.categories[ci].name)}.md`;
  const anchor = `${hound.id}-the-copyright-bloodhound${hound.deep ? "-deep-build" : ""}`;
  const line = `And yes, Jef runs [prompt #${hound.id}, The Copyright Bloodhound](${file}#${anchor}), to sniff out anyone who doesn't.`;
  for (const f of ["README.md", "DISCLAIMER.md"]) {
    const p = path.join(root, f);
    fs.writeFileSync(p, fs.readFileSync(p, "utf8").replace(/<!-- hound:start -->[\s\S]*?<!-- hound:end -->/, `<!-- hound:start -->${line}<!-- hound:end -->`));
  }
}
console.log(`Built ${data.prompts.length} prompts in ${data.categories.length} files`);
