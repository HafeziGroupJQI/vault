// Vendors the live hafezi.jqi.umd.edu theme (stylesheet, fonts, logos, favicon)
// into src/assets/theme/, rewriting absolute /static/ font urls to relative
// paths so the css works from any base path.
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const SITE = "https://hafezi.jqi.umd.edu";
const OUT = fileURLToPath(new URL("../src/assets/theme/", import.meta.url));

async function fetchText(url) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  return r.text();
}

async function fetchBin(url, dest) {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`${r.status} ${url}`);
  await fs.writeFile(dest, Buffer.from(await r.arrayBuffer()));
}

await fs.mkdir(path.join(OUT, "fonts"), { recursive: true });

// 1. find the hashed stylesheet name from the homepage
const home = await fetchText(SITE + "/");
const cssPath = home.match(/href="(\/styles\.[a-f0-9]+\.css)"/)?.[1];
if (!cssPath) throw new Error("could not find stylesheet link on homepage");
let css = await fetchText(SITE + cssPath);
console.log(`fetched ${cssPath} (${css.length} bytes)`);

// 2. download every /static/ font the css references, rewrite to fonts/
const fontUrls = [...new Set([...css.matchAll(/url\((\/static\/[^)]+\.(?:woff2?|ttf|otf))\)/g)].map((m) => m[1]))];
for (const u of fontUrls) {
  const name = path.basename(u);
  await fetchBin(SITE + u, path.join(OUT, "fonts", name));
  css = css.replaceAll(`url(${u})`, `url(fonts/${name})`);
}
console.log(`vendored ${fontUrls.length} font files`);

await fs.writeFile(path.join(OUT, "styles.css"), css);

// 3. logos + favicon used by header/footer
const assets = [
  "/logo_hafezi.svg",
  "/jqi-logo-white.svg",
  "/umd-logo-white.svg",
  "/nist-logo-white.svg",
];
for (const a of assets) {
  await fetchBin(SITE + a, path.join(OUT, path.basename(a)));
}
console.log(`vendored ${assets.length} logos`);
console.log("theme sync complete ->", OUT);
