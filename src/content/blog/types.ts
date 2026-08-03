import type { FaqItem } from "@/components/site/Disclosure";
import type { CourseKey } from "@/content/courses";

/**
 * Blog content model.
 *
 * Posts are structured blocks rather than raw HTML or MDX. That costs a little
 * authoring convenience and buys three things the brief actually needs: every
 * post renders through the same typographic components so the design cannot
 * drift, no `dangerouslySetInnerHTML` anywhere, and no extra build tooling in
 * a Vite/TanStack pipeline that does not have an MDX pipeline today.
 *
 * The blog exists to capture informational search demand and to feed internal
 * links to the course pages. A post with no `relatedCourses` is not doing its
 * job.
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: ReadonlyArray<string>; ordered?: boolean }
  | { type: "quote"; text: string; cite?: string }
  /** Arabic with translation. Rendered with lang/dir set correctly. */
  | {
      type: "arabic";
      arabic: string;
      transliteration?: string;
      translation: string;
      reference?: string;
    }
  /** A pulled-out practical point. Used sparingly, never as decoration. */
  | { type: "callout"; title: string; text: string }
  | {
      type: "table";
      caption: string;
      head: ReadonlyArray<string>;
      rows: ReadonlyArray<ReadonlyArray<string>>;
    };

export type BlogCategory =
  | "Learning the Quran"
  | "Tajweed"
  | "Hifz"
  | "For parents"
  | "New Muslims"
  | "Arabic";

export interface BlogPost {
  slug: string;
  title: string;
  /** 45-60 chars including the brand suffix. */
  metaTitle: string;
  /** 140-158 chars. */
  metaDescription: string;
  /** One or two sentences for cards and the index page. */
  excerpt: string;
  category: BlogCategory;
  primaryKeyword: string;
  /** ISO dates. Both are emitted in Article schema. */
  datePublished: string;
  dateModified: string;
  /**
   * Named author. An anonymous "admin" byline is worth nothing for E-E-A-T,
   * so this must resolve to a real person before launch.
   */
  author: string;
  authorTitle: string;
  readingMinutes: number;
  blocks: ReadonlyArray<Block>;
  faqs?: ReadonlyArray<FaqItem>;
  /** The commercial pages this post should pass equity to. */
  relatedCourses: ReadonlyArray<CourseKey>;
  /** Slugs of sibling posts. */
  relatedPosts: ReadonlyArray<string>;
}

/** Section headings with an id become the in-page contents list. */
export function tableOfContents(post: BlogPost) {
  return post.blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b) => ({ id: b.id, text: b.text }));
}
