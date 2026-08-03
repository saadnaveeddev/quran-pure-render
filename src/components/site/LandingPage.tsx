import { PageHero } from "./PageHero";
import { Section, SectionHeading } from "./Section";
import { Button } from "./Button";
import { Faq } from "./Disclosure";
import { DataTable } from "./Spec";
import { CourseCard } from "./Cards";
import { RosetteList } from "@/components/manuscript/Rosette";
import { COURSES } from "@/content/courses";
import type { LandingPage as LandingPageData } from "@/content/landing";
import { useCurrency } from "@/lib/currency";
import { whatsappUrl } from "@/lib/site";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";

export function landingBreadcrumbs(page: LandingPageData) {
  return [
    { label: "Home", to: "/" },
    { label: page.breadcrumbLabel, to: page.path },
  ];
}

export function landingHead(page: LandingPageData) {
  const breadcrumbs = landingBreadcrumbs(page);
  return {
    ...buildPageSeo({
      title: page.metaTitle,
      description: page.metaDescription,
      path: page.path,
    }),
    scripts: [
      buildFaqSchema(page.faqs),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  };
}

export function LandingPage({ page }: { page: LandingPageData }) {
  const { currency } = useCurrency();
  const related = page.relatedCourses.map((key) => COURSES[key]);

  const lastUpdatedLabel = new Date(page.lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        breadcrumbs={landingBreadcrumbs(page)}
        label={page.heroLabel}
        title={page.h1}
        intro={page.intro}
        actions={
          <>
            <Button to="/free-trial" withChevron>
              Book a free trial class
            </Button>
            <Button
              href={whatsappUrl("Assalamu alaikum — I have a question about your classes.")}
              variant="secondary"
            >
              Ask on WhatsApp
            </Button>
          </>
        }
      />

      {page.sections.map((section, i) => (
        <Section key={section.heading} tone={i % 2 === 1 ? "warm" : "paper"} ruled={i > 0}>
          <SectionHeading label={section.label} title={section.heading} align="left" />
          <div className="measure mt-8 space-y-5 text-pretty text-ink-soft">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>
          {section.list && (
            <RosetteList
              className="measure mt-8 text-[0.9375rem] text-ink-soft"
              items={section.list}
            />
          )}
        </Section>
      ))}

      {page.slotTable && (
        <Section ruled>
          <SectionHeading
            label="Times in your clock, not ours"
            title="When classes actually run"
            align="left"
          />
          <DataTable
            className="mt-10"
            caption={page.slotTable.caption}
            head={page.slotTable.head}
            rows={page.slotTable.rows}
          />
        </Section>
      )}

      <Section tone="warm" ruled>
        <SectionHeading label="Where to start" title="Courses that fit" align="left" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((course) => (
            <CourseCard key={course.key} course={course} currency={page.currency ?? currency} />
          ))}
        </div>
      </Section>

      <Section ruled>
        <SectionHeading
          label={`${page.faqs.length} questions`}
          title="Questions we get asked"
          align="left"
        />
        <div className="mt-10">
          <Faq items={page.faqs} group={`${page.path}-faq`} className="mx-0 max-w-none" />
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">{page.closing.title}</h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">{page.closing.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              {page.closing.action}
            </Button>
            <Button
              href={whatsappUrl("Assalamu alaikum — I'd like to book a free trial class.")}
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Book on WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-[0.8125rem] text-paper/60">
            Last updated <time dateTime={page.lastUpdated}>{lastUpdatedLabel}</time>
          </p>
        </div>
      </Section>
    </>
  );
}
