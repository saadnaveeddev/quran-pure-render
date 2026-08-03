import { Link } from "@tanstack/react-router";
import type { BlogPost } from "@/content/blog/types";
import { cn } from "@/lib/utils";

/** Formats an ISO date for display without pulling in a date library. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function PostCard({ post, className }: { post: BlogPost; className?: string }) {
  return (
    <article className={cn("jadwal flex flex-col p-6", className)}>
      <p className="text-caption text-gold-ink">{post.category}</p>
      <h3 className="text-h3 mt-2.5 text-balance text-ink">
        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="underline-offset-4 hover:text-lapis hover:underline"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-pretty text-[0.9375rem] text-ink-soft">{post.excerpt}</p>
      <p className="mt-5 text-[0.8125rem] text-ink-faint">
        <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
        <span aria-hidden="true"> · </span>
        {post.readingMinutes} min read
      </p>
    </article>
  );
}
