/**
 * Content and contrast audit.
 *
 * Complements audit-ssr.mjs. Checks the requirements that are about editorial
 * completeness rather than markup: internal linking depth, related-course
 * blocks, freshness dates, unique primary keywords, and the colour-contrast
 * floor for the design tokens.
 *
 * Usage: node scripts/audit-content.mjs http://localhost:8081
 */

const BASE = process.argv[2] ?? "http://localhost:8081";
const problems = [];
const note = (where, msg) => problems.push(`${where}  ${msg}`);

/* ------------------------------------------------------------------ */
/* Colour contrast                                                     */
/* ------------------------------------------------------------------ */

function luminance(hex) {
  const [r, g, b] = hex
    .replace("#", "")
    .match(/.{2}/g)
    .map((h) => {
      const c = parseInt(h, 16) / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function ratio(a, b) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

// Light theme tokens from styles.css, and the pairs actually used together.
const T = {
  ink: "#10182b",
  inkSoft: "#2b3245",
  inkFaint: "#5a5648",
  lapis: "#2a3f7e",
  lapisLift: "#3c55a0",
  gold: "#ab8129",
  goldInk: "#6e5214",
  goldWash: "#f0e4c4",
  paper: "#f5f2ea",
  paperWarm: "#fbf9f4",
  success: "#2f6b4f",
  error: "#9b2c2c",
  white: "#ffffff",
};

const PAIRS = [
  ["body text on paper", T.inkSoft, T.paper, 4.5],
  ["body text on warm paper", T.inkSoft, T.paperWarm, 4.5],
  ["headings on paper", T.ink, T.paper, 4.5],
  ["hint text on paper", T.inkFaint, T.paper, 4.5],
  ["hint text on warm paper", T.inkFaint, T.paperWarm, 4.5],
  ["link on paper", T.lapis, T.paper, 4.5],
  ["link on warm paper", T.lapis, T.paperWarm, 4.5],
  ["gold-ink caption on paper", T.goldInk, T.paper, 4.5],
  ["gold-ink caption on warm paper", T.goldInk, T.paperWarm, 4.5],
  ["gold-ink on gold wash", T.goldInk, T.goldWash, 4.5],
  ["error text on paper", T.error, T.paper, 4.5],
  ["success text on paper", T.success, T.paper, 4.5],
  ["button label on lapis", T.white, T.lapis, 4.5],
  ["button label on lapis hover", T.white, T.lapisLift, 4.5],
  ["paper text on ink", T.paper, T.ink, 4.5],
  ["gold on ink (footer headings)", T.gold, T.ink, 4.5],
  // Non-text UI only needs 3:1.
  ["gold rules on paper", T.gold, T.paper, 3],
  ["focus ring on paper", T.lapis, T.paper, 3],
];

console.log("Contrast:");
for (const [name, fg, bg, min] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  console.log(`  ${ok ? "pass" : "FAIL"}  ${r.toFixed(2)}:1  (min ${min})  ${name}`);
  if (!ok) note("contrast", `${name} is ${r.toFixed(2)}:1, needs ${min}:1`);
}

/* ------------------------------------------------------------------ */
/* Page content                                                        */
/* ------------------------------------------------------------------ */

// The seven course pages, as the site itself advertises them.
const COURSE_PATHS = [
  "/noorani-qaida-online",
  "/online-quran-recitation-classes",
  "/online-tajweed-classes",
  "/online-hifz-classes",
  "/online-islamic-studies",
  "/online-arabic-language-classes",
  "/female-quran-classes-online",
];

// Cross-check that the sitemap still agrees, so this list cannot go stale
// silently when a course is added or renamed.
const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
for (const path of COURSE_PATHS) {
  if (!sitemap.includes(`<loc>https://myquranguide.com${path}</loc>`)) {
    note("sitemap", `${path} is missing from sitemap.xml`);
  }
}

// Titles must not collide, or the pages compete with each other in the SERP.
const titles = new Map();

for (const path of COURSE_PATHS) {
  const html = await (await fetch(BASE + path)).text();

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  if (title) {
    if (titles.has(title)) note(path, `duplicate title, also used by ${titles.get(title)}`);
    titles.set(title, path);
  }

  // Freshness signal.
  if (!/Last updated/i.test(html)) note(path, "no 'Last updated' date");

  // Related-courses block: at least two links to sibling course pages.
  const siblingLinks = COURSE_PATHS.filter((p) => p !== path && html.includes(`href="${p}"`));
  if (siblingLinks.length < 2) {
    note(path, `only ${siblingLinks.length} sibling course link(s), want 2+`);
  }

  // Contextual internal linking depth.
  const internal = new Set(
    [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]).filter((h) => h !== "/"),
  );
  if (internal.size < 8) note(path, `only ${internal.size} distinct internal links`);

  // Heading order must not skip a level.
  const levels = [...html.matchAll(/<h([1-6])[\s>]/gi)].map((m) => Number(m[1]));
  for (let i = 1; i < levels.length; i += 1) {
    if (levels[i] - levels[i - 1] > 1) {
      note(path, `heading jumps from h${levels[i - 1]} to h${levels[i]}`);
      break;
    }
  }
}

console.log(`\nChecked ${COURSE_PATHS.length} course pages.`);
if (problems.length === 0) {
  console.log("No problems found.");
} else {
  console.log(`\n${problems.length} problem(s):\n`);
  for (const p of problems) console.log("  " + p);
  process.exitCode = 1;
}
