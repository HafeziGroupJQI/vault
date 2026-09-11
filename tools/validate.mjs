// Validates the vault: frontmatter parses, typed records match schema/*.json,
// wikilinks and embeds resolve, and nothing in content/ is tagged internal.
// Usage: node tools/validate.mjs   (exit 1 on any error)
import fs from "node:fs";
import path from "node:path";
import yaml from "js-yaml";
import Ajv2020 from "ajv/dist/2020.js";

import { fileURLToPath } from "node:url";
const ROOT = fileURLToPath(new URL("..", import.meta.url));
const CONTENT = path.join(ROOT, "content");
const ajv = new Ajv2020({ allErrors: true, strict: false });
const schemas = {};
for (const f of fs.readdirSync(path.join(ROOT, "schema"))) {
  const type = f.replace(".schema.json", "");
  schemas[type] = ajv.compile(JSON.parse(fs.readFileSync(path.join(ROOT, "schema", f), "utf8")));
}

const walk = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) =>
    d.isDirectory() ? walk(path.join(dir, d.name)) : [path.join(dir, d.name)]);

const files = walk(CONTENT);
const pages = files.filter((f) => /\.(md|qmd)$/.test(f));
const rel = (f) => path.relative(CONTENT, f).split(path.sep).join("/");

// every way a wikilink may name a file: full path without extension, basename, or a title/alias
const targets = new Set();
const errors = [];
const parsed = [];
for (const f of pages) {
  const text = fs.readFileSync(f, "utf8");
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) { errors.push(`${rel(f)}: missing frontmatter`); continue; }
  let fm;
  try { fm = yaml.load(m[1]) ?? {}; } catch (e) { errors.push(`${rel(f)}: bad yaml: ${e.message}`); continue; }
  const noExt = rel(f).replace(/\.(md|qmd)$/, "");
  targets.add(noExt); targets.add(path.basename(noExt));
  if (noExt.endsWith("/index")) targets.add(noExt.slice(0, -6));
  if (fm.title) targets.add(String(fm.title));
  for (const a of fm.aliases ?? []) targets.add(String(a));
  parsed.push({ f, fm, body: text.slice(m[0].length) });
}
for (const f of files.filter((f) => !/\.(md|qmd)$/.test(f))) {
  targets.add(rel(f)); targets.add(rel(f).replace(/\.[^.]+$/, ""));
}

for (const { f, fm, body } of parsed) {
  const name = rel(f);
  if (!fm.title) errors.push(`${name}: no title`);
  if ((fm.tags ?? []).includes("internal") || (fm.tags ?? []).includes("private"))
    errors.push(`${name}: tagged internal/private but lives in content/ (public)`);
  if (fm.type && schemas[fm.type] && !schemas[fm.type](fm))
    for (const e of schemas[fm.type].errors) errors.push(`${name}: ${e.instancePath || "/"} ${e.message}`);
  const linkRe = /(!?)\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]*)?\]\]/g;
  for (const [, , raw] of body.matchAll(linkRe)) {
    const t = raw.trim().replace(/\\$/, "").replace(/\.(md|qmd)$/, "");
    if (!targets.has(t) && !targets.has(path.basename(t))) errors.push(`${name}: unresolved link [[${raw}]]`);
  }
  for (const [, raw] of body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    if (/^https?:/.test(raw)) continue;
    const p = path.resolve(path.dirname(f), raw.split(/[ )]/)[0]);
    if (!fs.existsSync(p)) errors.push(`${name}: missing image ${raw}`);
  }
}

// equipment <-> setup cross references
const eq = new Set(parsed.filter((p) => p.fm.type === "equipment").map((p) => p.fm.id));
const setups = new Set(parsed.filter((p) => p.fm.type === "setup").map((p) => p.fm.id));
for (const { f, fm } of parsed) {
  if (fm.type === "equipment") for (const s of fm.setups ?? []) {
    const id = s.replace(/^\[\[setups\/|\]\]$/g, "");
    if (!setups.has(id)) errors.push(`${rel(f)}: unknown setup ${id}`);
  }
  if (fm.type === "setup") for (const e of fm.equipment ?? []) {
    const id = e.replace(/^\[\[equipment\/|\]\]$/g, "");
    if (!eq.has(id)) errors.push(`${rel(f)}: unknown equipment ${id}`);
  }
}

console.log(`${parsed.length} pages, ${eq.size} equipment records, ${setups.size} setups`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("vault ok");
