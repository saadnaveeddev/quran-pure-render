// TODO: bylines are placeholders. Every post is currently attributed to
// "Ahad Rehman, Founder, My Quran Guide". Confirm the real author of each post
// with them before launch — an incorrect byline is worse for E-E-A-T than a
// generic one, and the name is emitted in Article schema.

import type { BlogCategory, BlogPost } from "./types";

import { CHOOSING_TEACHER_POST } from "./posts/choosing-an-online-quran-teacher";
import { HOW_LONG_POST } from "./posts/how-long-to-learn-quran-reading";
import { MEMORISE_POST } from "./posts/how-to-memorise-quran";
import { QAIDA_EXPLAINED_POST } from "./posts/noorani-qaida-explained";
import { NEW_MUSLIM_STEPS_POST } from "./posts/quran-for-new-muslims-first-steps";
import { TAJWEED_BEGINNERS_POST } from "./posts/tajweed-rules-for-beginners";

export type { Block, BlogCategory, BlogPost } from "./types";
export { tableOfContents } from "./types";

const ALL: ReadonlyArray<BlogPost> = [
  HOW_LONG_POST,
  QAIDA_EXPLAINED_POST,
  TAJWEED_BEGINNERS_POST,
  MEMORISE_POST,
  NEW_MUSLIM_STEPS_POST,
  CHOOSING_TEACHER_POST,
];

/** Newest first. The index page and the sitemap both read this order. */
export const POSTS: ReadonlyArray<BlogPost> = [...ALL].sort((a, b) =>
  b.datePublished.localeCompare(a.datePublished),
);

export const POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  POSTS.map((post) => [post.slug, post]),
);

export function getPost(slug: string): BlogPost | undefined {
  return POSTS_BY_SLUG[slug];
}

/** Deduped, in POSTS order, so the filter list matches what is on the page. */
export const CATEGORIES: ReadonlyArray<BlogCategory> = [
  ...new Set(POSTS.map((post) => post.category)),
];
