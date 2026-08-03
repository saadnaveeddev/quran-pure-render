import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { CourseCard } from "@/components/site/Cards";
import { Blocks } from "@/components/blog/Blocks";
import { PostCard, formatDate } from "@/components/blog/PostCard";
import { RosetteDivider } from "@/components/manuscript/Rosette";
import { COURSES } from "@/content/courses";
import { POSTS_BY_SLUG, getPost } from "@/content/blog";
import { tableOfContents } from "@/content/blog/types";
import { useCurrency } from "@/lib/currency";
import { buildArticleSchema, buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};

    const path = `/blog/${post.slug}`;
    const breadcrumbs = [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path },
    ];

    return {
      ...buildPageSeo({
        title: post.metaTitle,
        description: post.metaDescription,
        path,
        type: "article",
      }),
      scripts: [
        buildArticleSchema({
          title: post.title,
          description: post.metaDescription,
          path,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          authorName: post.author,
        }),
        buildBreadcrumbSchema(breadcrumbs),
        ...(post.faqs?.length ? [buildFaqSchema(post.faqs)] : []),
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const { currency } = useCurrency();

  const toc = tableOfContents(post);
  const related = post.relatedCourses.map((key) => COURSES[key]);
  const siblings = post.relatedPosts
    .map((slug) => POSTS_BY_SLUG[slug])
    .filter((p) => p && p.slug !== post.slug);

  return (
    <>
      <header className="border-b border-rule bg-paper-warm">
        <div className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Blog", to: "/blog" },
              { label: post.category, to: "/blog" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-caption mb-3 text-gold-ink">{post.category}</p>
            <h1 className="text-display-l text-balance text-ink">{post.title}</h1>
            <p className="measure mt-5 text-pretty text-body-l text-ink-soft">{post.excerpt}</p>

            {/* Named author, dates and reading time — the byline block that
                was missing entirely, and that E-E-A-T assessment leans on. */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-rule pt-6 text-[0.875rem] text-ink-soft">
              <span>
                By <strong className="font-semibold text-ink">{post.author}</strong>,{" "}
                {post.authorTitle}
              </span>
              <span>
                Published{" "}
                <time dateTime={post.datePublished}>{formatDate(post.datePublished)}</time>
              </span>
              {post.dateModified !== post.datePublished && (
                <span>
                  Updated <time dateTime={post.dateModified}>{formatDate(post.dateModified)}</time>
                </span>
              )}
              <span>{post.readingMinutes} min read</span>
            </div>
          </div>
        </div>
      </header>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,15rem)] lg:gap-16">
          <article className="max-w-2xl">
            <Blocks blocks={post.blocks} />
          </article>

          {toc.length > 2 && (
            <nav
              aria-label="On this page"
              className="order-first lg:order-last lg:sticky lg:top-24 lg:self-start"
            >
              <h2 className="text-caption text-gold-ink">On this page</h2>
              <ul className="mt-4 space-y-2.5 border-l border-rule pl-4">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="text-[0.875rem] text-ink-soft underline-offset-4 hover:text-lapis hover:underline"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </Section>

      {post.faqs && post.faqs.length > 0 && (
        <Section tone="warm" ruled>
          <SectionHeading align="left" title="Related questions" />
          <Faq className="mx-0 mt-10 max-w-3xl" items={post.faqs} group="post-faq" />
        </Section>
      )}

      <Section ruled>
        <SectionHeading
          align="left"
          label="Learn this with a tutor"
          title="Courses that cover what you have just read"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((course) => (
            <CourseCard key={course.key} course={course} currency={currency} />
          ))}
        </div>
      </Section>

      {siblings.length > 0 && (
        <Section tone="warm" ruled>
          <SectionHeading align="left" title="Read next" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {siblings.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <RosetteDivider className="mx-auto mb-10 max-w-xs opacity-70" />
          <h2 className="text-h2 text-balance text-paper">
            Reading about it only takes you so far
          </h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">
            Two free one-to-one classes, with the tutor you would continue with. No card details and
            no obligation either way.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Book two free classes
            </Button>
            <Link
              to="/blog"
              className="inline-flex items-center px-5 py-3.5 text-base font-semibold text-paper/80 underline-offset-4 hover:text-paper hover:underline"
            >
              Back to all guides
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
