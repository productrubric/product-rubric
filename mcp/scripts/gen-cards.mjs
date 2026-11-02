#!/usr/bin/env node
/**
 * Generate src/cards.generated.ts: the shipped cards embedded as a
 * record for the hosted Worker and the local package's built-in library.
 *
 * Cards are a bonus form of the library, not a second library: every
 * card is one criterion from one rubric, plus a cover card per rubric.
 * This script regenerates cards from the rubric files themselves, so
 * a rubric change regenerates the card, and the card cannot drift
 * from the rubric it came from.
 *
 * Card deck, number, and short card title come from
 * scripts/card-mapping.json, which mirrors the live cards page
 * (https://productrubric.com/cards). Rubric criteria are matched to
 * cards in file order per rubric, except Design Principles Score,
 * whose first two criteria are not shown as cards on the cards page
 * (they are covered by Usability Heuristics Review), so those two
 * are skipped when matching.
 *
 * Run automatically by `npm run gen` (see package.json). The output
 * is a gitignored build artifact: it is regenerated on every build
 * and deploy, never committed.
 *
 * Usage: node scripts/gen-cards.mjs [rubricsDir]
 * Default rubricsDir: ../rubrics relative to this package.
 */

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const rubricsDir = process.argv[2]
  ? resolve(process.argv[2])
  : resolve(here, "../../rubrics");
const mappingFile = resolve(here, "card-mapping.json");
const outFile = resolve(here, "../src/cards.generated.ts");

function strip(s) {
  return s.replace(/\s+/g, " ").trim();
}
function parseRubric(text) {
  const meta = {};
  const fm = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (fm) {
    for (const line of fm[1].split("\n")) {
      const i = line.indexOf(":");
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
    }
  }
  const criteria = [];
  const parts = text.split(/\n###\s+/);
  for (const part of parts.slice(1)) {
    const first = part.split("\n")[0].trim();
    const title = first.replace(/^\d+\.\s*/, "").trim();
    const body = part.slice(first.length);
    const principleMatch = body.match(/^\s*([\s\S]*?)\n- What/);
    const principle = principleMatch ? strip(principleMatch[1]) : "";
    const field = (label) => {
      const m = body.match(new RegExp(`- ${label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*([\\s\\S]*?)(?=\\n- |\\n### |$)`, "m"));
      return m ? strip(m[1]) : null;
    };
    criteria.push({
      title,
      principle,
      what_to_examine: field("What to examine") || field("Check"),
      good_looks_like: field("What good looks like"),
      bad_looks_like: field("What bad looks like"),
    });
  }
  return { meta, criteria };
}

const rubrics = {};
for (const entry of readdirSync(rubricsDir).sort()) {
  const entryPath = join(rubricsDir, entry);
  const files = statSync(entryPath).isDirectory()
    ? readdirSync(entryPath).sort().map((f) => join(entryPath, f))
    : [entryPath];
  for (const filePath of files) {
    const file = filePath.split("/").pop();
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const parsed = parseRubric(readFileSync(filePath, "utf8"));
    if (parsed.meta.name) rubrics[parsed.meta.name] = parsed;
  }
}

const mapping = JSON.parse(readFileSync(mappingFile, "utf8"));
const byRubric = {};
for (const m of mapping) {
  if (!m.cover) (byRubric[m.rubric] ??= []).push(m);
}
const cards = [];
for (const rubricName of Object.keys(byRubric).sort()) {
  const rub = rubrics[rubricName];
  if (!rub) throw new Error(`Rubric not found for card mapping: ${rubricName}`);
  let criteria = rub.criteria;
  if (rubricName === "Design Principles Score") criteria = criteria.slice(2);
  const cardList = byRubric[rubricName].sort((a, b) => a.num - b.num);
  if (cardList.length !== criteria.length) {
    throw new Error(`Card count mismatch for ${rubricName}: ${cardList.length} cards, ${criteria.length} criteria`);
  }
  cardList.forEach((m, i) => {
    const crit = criteria[i];
    cards.push({
      deck: m.deck,
      num: m.num,
      rubric: rubricName,
      cover: false,
      title: m.card_title,
      rubric_title: crit.title,
      principle: crit.principle,
      url: `https://productrubric.com/cards#card-${m.deck}-${m.num}`,
      what_to_examine: crit.what_to_examine,
      good_looks_like: crit.good_looks_like,
      bad_looks_like: crit.bad_looks_like,
    });
  });
}
for (const m of mapping.filter((x) => x.cover).sort((a, b) => a.deck.localeCompare(b.deck) || a.num - b.num)) {
  const rub = rubrics[m.rubric];
  cards.push({
    deck: m.deck,
    num: m.num,
    rubric: m.rubric,
    cover: true,
    title: m.rubric,
    principle: rub.meta.summary,
    url: `https://productrubric.com/cards#card-${m.deck}-${m.num}`,
    when_to_use: rub.meta.when_to_use,
    level_and_scale: rub.meta.level && rub.meta.scale ? `${rub.meta.level[0].toUpperCase()}${rub.meta.level.slice(1)}. ${rub.meta.scale}` : null,
  });
}
const deckOrder = { "product-design": 0, "product-management": 1, "marketing": 2, "ux-research": 3 };
cards.sort((a, b) => deckOrder[a.deck] - deckOrder[b.deck] || a.num - b.num);

const lines = [
  "/**",
  " * GENERATED by scripts/gen-cards.mjs. Do not edit by hand.",
  ` * Embedded copies of the ${cards.length} ProductRubric cards, generated`,
  " * from the rubric files at build time. Cards are a bonus form of",
  " * the library, not a second library: each card is one criterion",
  " * from one rubric, plus a cover card per rubric.",
  " */",
  "",
  "export const CARDS = " + JSON.stringify(cards, null, 2) + ";",
  "",
];
writeFileSync(outFile, lines.join("\n"));
console.log(`gen-cards: embedded ${cards.length} cards from ${rubricsDir}`);
