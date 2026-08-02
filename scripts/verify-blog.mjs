import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dir = "src/content/blog/posts";
const files = readdirSync(dir).filter((f) => f.endsWith(".ts"));

const BLOCK_KEYS = {
  p: { req: ["type", "text"], opt: [] },
  h2: { req: ["type", "text", "id"], opt: [] },
  h3: { req: ["type", "text"], opt: [] },
  list: { req: ["type", "items"], opt: ["ordered"] },
  quote: { req: ["type", "text"], opt: ["cite"] },
  arabic: { req: ["type", "arabic", "translation"], opt: ["transliteration", "reference"] },
  callout: { req: ["type", "title", "text"], opt: [] },
  table: { req: ["type", "caption", "head", "rows"], opt: [] },
};

const COURSE_KEYS = ["qaida", "recitation", "tajweed", "hifz", "islamicStudies", "arabic", "female"];
const CATEGORIES = ["Learning the Quran", "Tajweed", "Hifz", "For parents", "New Muslims", "Arabic"];

const slugs = [];
const results = [];

for (const f of files) {
  const src = readFileSync(join(dir, f), "utf8");
  // strip the import + export const NAME: BlogPost = ... ;
  const start = src.indexOf("= {");
  let body = src.slice(start + 2);
  body = body.trim().replace(/;\s*$/, "");
  const post = eval("(" + body + ")");
  slugs.push(post.slug);
  results.push({ file: f, post });
}

const problems = [];
const slugSet = new Set(slugs);

for (const { file, post } of results) {
  const p = (m) => problems.push(`${file}: ${m}`);

  const mt = post.metaTitle.length;
  const md = post.metaDescription.length;
  if (mt < 45 || mt > 60) p(`metaTitle length ${mt}`);
  if (!post.metaTitle.endsWith(" | My Quran Guide")) p("metaTitle missing suffix");
  if (md < 140 || md > 158) p(`metaDescription length ${md}`);
  if (post.excerpt.length >= 200) p(`excerpt length ${post.excerpt.length}`);
  if (!CATEGORIES.includes(post.category)) p(`bad category ${post.category}`);
  if (post.dateModified < post.datePublished) p("dateModified before datePublished");
  for (const d of [post.datePublished, post.dateModified]) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(d)) p(`bad date ${d}`);
    if (d < "2026-05-01" && d === post.datePublished) p(`datePublished out of range ${d}`);
    if (post.datePublished > "2026-07-28") p(`datePublished out of range ${d}`);
  }
  if (post.author !== "Ahad Rehman") p("author");
  if (post.authorTitle !== "Founder, My Quran Guide") p("authorTitle");

  // blocks
  let words = 0;
  let h2s = 0;
  const ids = new Set();
  for (const b of post.blocks) {
    const spec = BLOCK_KEYS[b.type];
    if (!spec) {
      p(`unknown block type ${b.type}`);
      continue;
    }
    for (const k of spec.req) if (!(k in b)) p(`block ${b.type} missing ${k}`);
    for (const k of Object.keys(b)) {
      if (!spec.req.includes(k) && !spec.opt.includes(k)) p(`block ${b.type} extra key ${k}`);
    }
    if (b.type === "h2") {
      h2s++;
      if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(b.id)) p(`bad h2 id ${b.id}`);
      if (ids.has(b.id)) p(`duplicate id ${b.id}`);
      ids.add(b.id);
      if (/^[A-Z][a-z]*( [A-Z][a-z]+)+/.test(b.text)) p(`possible Title Case h2: ${b.text}`);
    }
    const texts = [];
    if (b.text) texts.push(b.text);
    if (b.title) texts.push(b.title);
    if (b.caption) texts.push(b.caption);
    if (b.translation) texts.push(b.translation);
    if (b.items) texts.push(...b.items);
    if (b.head) texts.push(...b.head);
    if (b.rows) for (const r of b.rows) texts.push(...r);
    for (const t of texts) words += t.trim().split(/\s+/).filter(Boolean).length;
  }
  if (h2s < 5 || h2s > 8) p(`h2 count ${h2s}`);
  if (words < 1200 || words > 1800) p(`word count ${words}`);
  const expectedMin = Math.round(words / 220);
  if (Math.abs(post.readingMinutes - expectedMin) > 1) p(`readingMinutes ${post.readingMinutes} vs ~${expectedMin}`);

  if (!post.faqs || post.faqs.length < 3 || post.faqs.length > 5) p(`faq count ${post.faqs?.length}`);
  for (const f of post.faqs ?? []) {
    if (Object.keys(f).join(",") !== "q,a") p(`faq keys ${Object.keys(f)}`);
    const sentences = f.a.split(/(?<=[.?!])\s+/).filter(Boolean).length;
    if (sentences < 2 || sentences > 4) p(`faq answer sentences ${sentences}: ${f.q}`);
  }

  if (post.relatedPosts.length < 2 || post.relatedPosts.length > 3) p("relatedPosts count");
  for (const s of post.relatedPosts) {
    if (s === post.slug) p("relatedPosts contains self");
    if (!slugSet.has(s)) p(`relatedPosts unknown slug ${s}`);
  }
  for (const c of post.relatedCourses) if (!COURSE_KEYS.includes(c)) p(`bad course key ${c}`);

  // copy rules
  const raw = readFileSync(join(dir, file), "utf8");
  if (raw.includes(">>>") || raw.includes("<<<")) p("contains angle run");
  const emoji = raw.match(/\p{Extended_Pictographic}/gu);
  if (emoji) p(`emoji found ${emoji}`);

  console.log(
    [
      post.slug,
      `  metaTitle   (${mt}): ${post.metaTitle}`,
      `  metaDesc    (${md}): ${post.metaDescription}`,
      `  excerpt     (${post.excerpt.length})`,
      `  words: ${words}  h2: ${h2s}  readingMinutes: ${post.readingMinutes} (calc ${expectedMin})`,
      `  blocks: ${post.blocks.length} [${[...new Set(post.blocks.map((b) => b.type))].join(", ")}]`,
      `  faqs: ${post.faqs.length}  published: ${post.datePublished}`,
    ].join("\n"),
  );
}

console.log("\n--- problems ---");
if (problems.length === 0) console.log("none");
else problems.forEach((x) => console.log(x));
