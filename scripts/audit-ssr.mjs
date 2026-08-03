/**
 * Server-render audit.
 *
 * Fetches each page as a crawler would (no JavaScript executed) and asserts
 * the things that silently break SEO: missing canonical, FAQ answers that only
 * exist after hydration, duplicate H1s, invalid JSON-LD, and titles or
 * descriptions outside the range that survives a SERP.
 *
 * Usage: node scripts/audit-ssr.mjs http://localhost:8081
 */

const BASE = process.argv[2] ?? "http://localhost:8081";

const PATHS = [
  "/",
  "/courses",
  "/noorani-qaida-online",
  "/online-quran-recitation-classes",
  "/online-tajweed-classes",
  "/online-hifz-classes",
  "/online-islamic-studies",
  "/online-arabic-language-classes",
  "/female-quran-classes-online",
  "/fee-schedule",
  "/free-trial",
  "/thank-you",
  "/tutors",
  "/about",
  "/contact",
  "/online-quran-classes-for-kids",
  "/online-quran-classes-for-adults",
  "/quran-classes-for-new-muslims",
  "/online-quran-classes-usa",
  "/online-quran-classes-uk",
  "/online-quran-classes-canada",
  "/online-quran-classes-australia",
  "/blog",
  "/blog/how-long-to-learn-quran-reading",
  "/blog/noorani-qaida-explained",
  "/blog/tajweed-rules-for-beginners",
  "/blog/how-to-memorise-quran",
  "/blog/quran-for-new-muslims-first-steps",
  "/blog/choosing-an-online-quran-teacher",
  "/privacy-policy",
  "/terms-conditions",
];

const TITLE_RANGE = [45, 60];
const DESC_RANGE = [140, 158];

const problems = [];
const note = (path, msg) => problems.push(`${path}  ${msg}`);

function textOf(html, re) {
  const m = html.match(re);
  return m ? m[1].trim() : null;
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");
}

let checked = 0;

for (const path of PATHS) {
  const res = await fetch(BASE + path, { headers: { "User-Agent": "audit-bot" } });
  if (!res.ok) {
    note(path, `HTTP ${res.status}`);
    continue;
  }
  const html = await res.text();
  checked += 1;

  const robotsMeta = textOf(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
  // Length budgets exist so the SERP snippet does not truncate. A noindexed
  // page has no snippet, so the budgets do not apply to it.
  const indexable = !robotsMeta?.includes("noindex");

  // --- title ---
  const title = textOf(html, /<title[^>]*>([\s\S]*?)<\/title>/i);
  if (!title) note(path, "no <title>");
  else if (indexable) {
    const len = decode(title).length;
    if (len < TITLE_RANGE[0] || len > TITLE_RANGE[1]) {
      note(path, `title ${len} chars (want ${TITLE_RANGE.join("-")}): "${decode(title)}"`);
    }
  }

  // --- description ---
  const desc = textOf(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i);
  if (!desc) note(path, "no meta description");
  else if (indexable) {
    const len = decode(desc).length;
    if (len < DESC_RANGE[0] || len > DESC_RANGE[1]) {
      note(path, `description ${len} chars (want ${DESC_RANGE.join("-")})`);
    }
  }

  // --- canonical ---
  const canonical = textOf(html, /<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i);
  if (!canonical) note(path, "no canonical");
  else if (!canonical.startsWith("https://myquranguide.com")) {
    note(path, `canonical not absolute production URL: ${canonical}`);
  }

  // --- robots meta ---
  const shouldNoindex = path === "/thank-you";
  if (shouldNoindex && indexable) note(path, "should be noindex but is not");
  if (!shouldNoindex && !indexable) note(path, "unexpectedly noindex");

  // --- exactly one H1 ---
  const h1s = html.match(/<h1[\s>]/gi) ?? [];
  if (h1s.length !== 1) note(path, `${h1s.length} H1 elements (want exactly 1)`);

  // --- JSON-LD parses ---
  const ldBlocks = [...html.matchAll(
    /<script[^>]+type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi,
  )];
  for (const [, raw] of ldBlocks) {
    try {
      JSON.parse(decode(raw));
    } catch (e) {
      note(path, `invalid JSON-LD: ${e.message}`);
    }
  }

  // --- FAQ answers server-rendered ---
  // Every <summary> must have sibling text in the same <details> in the raw
  // HTML. A JS accordion would render the summary but not the answer.
  const details = [...html.matchAll(/<details[\s\S]*?<\/details>/gi)].map((m) => m[0]);
  for (const block of details) {
    const withoutSummary = block.replace(/<summary[\s\S]*?<\/summary>/i, "");
    const answerText = withoutSummary.replace(/<[^>]+>/g, "").trim();
    if (answerText.length < 40) {
      const q = textOf(block, /<summary[\s\S]*?>([\s\S]*?)<\/summary>/i)
        ?.replace(/<[^>]+>/g, "")
        .trim();
      note(path, `disclosure answer not server-rendered: "${q?.slice(0, 60)}"`);
    }
  }

  // --- banned patterns in visible copy ---
  const visible = html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ");
  if (/>>>|<<</.test(visible)) note(path, "contains >>> or <<< in visible copy");
  const emoji = visible.match(
    /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE0F}]/gu,
  );
  if (emoji) note(path, `emoji in visible copy: ${[...new Set(emoji)].join(" ")}`);

  // --- images have alt ---
  const imgs = [...html.matchAll(/<img[^>]*>/gi)].map((m) => m[0]);
  for (const img of imgs) {
    if (!/\balt=/.test(img)) note(path, `img without alt: ${img.slice(0, 70)}`);
  }
}

console.log(`\nChecked ${checked}/${PATHS.length} pages.`);
if (problems.length === 0) {
  console.log("No problems found.");
} else {
  console.log(`\n${problems.length} problem(s):\n`);
  for (const p of problems) console.log("  " + p);
}
