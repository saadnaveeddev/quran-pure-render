import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { PostCard } from "@/components/blog/PostCard";
import { CATEGORIES, POSTS } from "@/content/blog";
import { buildBlogListSchema, buildBreadcrumbSchema, buildPageSeo } from "@/lib/seo";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
];

export const Route = createFileRoute("/blog/")({
  head: () => ({
    ...buildPageSeo({
      title: "Guides to learning the Quran online | My Quran Guide",
      description:
        "Practical guides on learning to read the Quran, tajweed rules, memorisation, and choosing a tutor — written for families studying outside the Muslim world.",
      path: "/blog",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
      buildBlogListSchema(
        POSTS.map((p) => ({
          name: p.title,
          path: `/blog/${p.slug}`,
          datePublished: p.datePublished,
        })),
      ),
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [lead, ...rest] = POSTS;

  return (
    <>
      <PageHero
        label={`${POSTS.length} guides`}
        title="Guides to learning the Quran"
        intro="Straight answers to the questions families actually ask us, written by the people who teach the classes. No filler, and no advice we would not give you on a call."
        breadcrumbs={breadcrumbs}
        actions={
          <Button to="/free-trial" withChevron>
            Book two free classes
          </Button>
        }
      />

      {lead && (
        <Section>
          <SectionHeading
            align="left"
            label="Most recent"
            title={lead.title}
            intro={lead.excerpt}
          />
          <div className="mt-8">
            <Button to="/blog/$slug" params={{ slug: lead.slug }} withChevron>
              Read this guide
            </Button>
          </div>
        </Section>
      )}

      <Section tone="warm" ruled>
        <SectionHeading align="left" title="Every guide" />
        <ul className="mt-10 flex flex-wrap gap-2" aria-label="Topics covered">
          {CATEGORIES.map((c) => (
            <li
              key={c}
              className="rounded-[2px] border border-rule bg-paper px-3.5 py-2 text-[0.9375rem] text-ink-soft"
            >
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
