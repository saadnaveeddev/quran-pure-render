/**
 * Downloads the woff2 subsets referenced by the @font-face rules in
 * styles.css into public/fonts.
 *
 * Google serves one @font-face per unicode-range subset, each preceded by a
 * `/* latin *\/`-style comment naming it. We request the CSS with a modern
 * browser User-Agent (otherwise Google returns ttf), match each subset to the
 * filename styles.css expects, and fetch only the subsets we actually use.
 *
 * Re-run with: node scripts/fetch-fonts.mjs
 */

import fs from "node:fs/promises";
import path from "node:path";

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

const OUT_DIR = path.join(process.cwd(), "public", "fonts");

/**
 * Each entry maps a Google Fonts family request to the local filenames.
 * `want` is keyed by `${weight}-${subset}` as it appears in Google's CSS.
 */
const FAMILIES = [
  {
    css: "https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&display=swap",
    want: {
      "400-latin": "instrument-sans-var-latin.woff2",
      "400-latin-ext": "instrument-sans-var-latin-ext.woff2",
    },
  },
  {
    css: "https://fonts.googleapis.com/css2?family=Gentium+Book+Plus:wght@400;700&display=swap",
    want: {
      "400-latin": "gentium-book-plus-400-latin.woff2",
      "400-latin-ext": "gentium-book-plus-400-latin-ext.woff2",
      "700-latin": "gentium-book-plus-700-latin.woff2",
      "700-latin-ext": "gentium-book-plus-700-latin-ext.woff2",
    },
  },
  {
    css: "https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap",
    want: {
      "400-arabic": "amiri-400-arabic.woff2",
      "400-latin": "amiri-400-latin.woff2",
      "700-arabic": "amiri-700-arabic.woff2",
      "700-latin": "amiri-700-latin.woff2",
    },
  },
  {
    css: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;600&display=swap",
    want: {
      "500-latin": "ibm-plex-mono-500-latin.woff2",
      "500-latin-ext": "ibm-plex-mono-500-latin-ext.woff2",
      "600-latin": "ibm-plex-mono-600-latin.woff2",
      "600-latin-ext": "ibm-plex-mono-600-latin-ext.woff2",
    },
  },
];

async function get(url, asText = true) {
  const res = await fetch(url, { headers: { "User-Agent": UA } });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return asText ? res.text() : Buffer.from(await res.arrayBuffer());
}

/** Splits Google's CSS into { subset, weight, url } records. */
function parseFaces(css) {
  const faces = [];
  // Each block is preceded by a comment naming the subset.
  const re = /\/\*\s*([a-z0-9-]+)\s*\*\/\s*@font-face\s*\{([\s\S]*?)\}/gi;
  let m;
  while ((m = re.exec(css)) !== null) {
    const [, subset, body] = m;
    const url = body.match(/src:\s*url\((https:[^)]+\.woff2)\)/i)?.[1];
    if (!url) continue;
    // Variable fonts declare a range like "400 700"; key them off the low end.
    const weight = body.match(/font-weight:\s*([0-9]+)/i)?.[1] ?? "400";
    faces.push({ subset, weight, url });
  }
  return faces;
}

await fs.mkdir(OUT_DIR, { recursive: true });

let total = 0;
const written = [];
const missing = [];

for (const family of FAMILIES) {
  const css = await get(family.css);
  const faces = parseFaces(css);

  for (const [key, filename] of Object.entries(family.want)) {
    const [weight, ...subsetParts] = key.split("-");
    const subset = subsetParts.join("-");
    const face = faces.find((f) => f.subset === subset && f.weight === weight);

    if (!face) {
      missing.push(`${filename} (no ${subset} @ ${weight} in ${family.css})`);
      continue;
    }

    const bytes = await get(face.url, false);
    if (bytes.length === 0) {
      missing.push(`${filename} (empty response)`);
      continue;
    }
    await fs.writeFile(path.join(OUT_DIR, filename), bytes);
    total += bytes.length;
    written.push(`${filename.padEnd(42)} ${(bytes.length / 1024).toFixed(1)} kB`);
  }
}

console.log(written.join("\n"));
console.log(`\n${written.length} files, ${(total / 1024).toFixed(1)} kB total.`);

if (missing.length) {
  console.log(`\nMISSING (${missing.length}):`);
  for (const m of missing) console.log("  " + m);
  process.exitCode = 1;
}
