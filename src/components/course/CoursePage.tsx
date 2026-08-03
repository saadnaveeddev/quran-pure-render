import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Disclosure, Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { CourseCard } from "@/components/site/Cards";
import { TutorsSection } from "@/components/site/Trust";
import { RosetteList } from "@/components/manuscript/Rosette";
import { Term } from "@/components/manuscript/Arabic";
import { COURSES, type Course } from "@/content/courses";
import { formatPrice } from "@/content/pricing";
import { useCurrency } from "@/lib/currency";
import { courseBreadcrumbs } from "@/lib/course-head";
import { whatsappUrl } from "@/lib/site";

/**
 * One template for all seven course pages. Everything shown here comes from
 * the course record in content/courses.ts, which is what keeps the syllabus,
 * the fees, the schema and the related-course links in agreement.
 */
export function CoursePage({ course }: { course: Course }) {
  const { currency } = useCurrency();
  const breadcrumbs = courseBreadcrumbs(course);
  const related = course.related.map((key) => COURSES[key]);

  const lastUpdatedLabel = new Date(course.lastUpdated).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        label={course.level}
        title={course.h1}
        intro={course.summary}
        actions={
          <>
            <Button to="/free-trial" withChevron>
              Book a free trial class
            </Button>
            <Button
              href={whatsappUrl(
                `Assalamu alaikum — I'd like to ask about the ${course.navLabel} course.`,
              )}
              variant="secondary"
            >
              Ask about this course
            </Button>
          </>
        }
      />

      {/* 1 — What this course actually is */}
      <Section>
        <div className="measure mx-auto space-y-5 text-pretty">
          <h2 className="text-h2 text-ink">
            {course.term ? (
              <>
                What <Term en={course.term.en} ar={course.term.ar} /> means here
              </>
            ) : (
              `What the ${course.navLabel.toLowerCase()} course covers`
            )}
          </h2>
          {course.intro.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </Section>

      {/* 2 — The specifics, as a spec list rather than a table */}
      <Section tone="warm" ruled>
        <SectionHeading label="At a glance" title="How this course runs" align="left" />
        <SpecStrip
          className="mt-10"
          columns={3}
          items={[
            { label: "Level", value: course.level },
            { label: "Suitable for", value: course.ages },
            { label: "Prerequisite", value: course.prerequisite },
            {
              label: "Session length",
              value: course.sessionMinutes.map((m) => `${m} min`).join(" or "),
            },
            { label: "Days per week", value: "2 to 6, you choose" },
            { label: "Typical duration", value: course.typicalDuration },
            { label: "Format", value: "One-to-one" },
            { label: "Platform", value: "Zoom, Skype or Google Meet" },
            {
              label: "Fee",
              value: (
                <span className="text-data">
                  {formatPrice(course.usdPerClass, currency, "half")} a class
                </span>
              ),
            },
          ]}
        />
      </Section>

      {/* 3 — Syllabus. Native disclosure, so every module is in the HTML. */}
      <Section ruled>
        <SectionHeading
          label={course.syllabusLabel}
          title="The syllabus, module by module"
          align="left"
        />
        <div className="mt-10 border-t border-rule">
          {course.modules.map((module, i) => (
            <Disclosure
              key={module.title}
              group={`${course.key}-syllabus`}
              defaultOpen={i === 0}
              summary={
                <span className="block">
                  <span className="text-caption block text-gold-ink">{module.label}</span>
                  <span className="mt-1 block">{module.title}</span>
                </span>
              }
            >
              <RosetteList items={module.points} className="text-[0.9375rem]" />
            </Disclosure>
          ))}
        </div>
      </Section>

      {/* 4 — Who this is for */}
      <Section tone="warm" ruled>
        <SectionHeading label="Four typical students" title="Who this course is for" align="left" />
        <div className="mt-10 grid gap-px border border-rule bg-rule sm:grid-cols-2">
          {course.personas.map((persona) => (
            <article key={persona.title} className="bg-paper-warm p-6">
              <h3 className="text-h3 text-ink">{persona.title}</h3>
              <p className="mt-3 text-pretty text-[0.9375rem] text-ink-soft">{persona.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 5 — Who would teach it */}
      <Section ruled>
        <SectionHeading
          label="Your tutor"
          title={`Who teaches ${course.navLabel.toLowerCase()}`}
          align="left"
        />
        <TutorsSection limit={2} />
      </Section>

      {/* 6 — Fees for this course specifically */}
      <Section tone="warm" ruled>
        <SectionHeading
          label="Fees"
          title={`What ${course.navLabel.toLowerCase()} costs`}
          align="left"
        />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-6 border border-rule bg-paper-warm p-7">
          <div>
            <p className="text-data text-4xl text-ink">
              {formatPrice(course.usdPerClass, currency, "half")}
            </p>
            <p className="mt-1 text-[0.9375rem] text-ink-soft">per class, fixed — not a range</p>
          </div>
          <div className="measure text-[0.9375rem] text-ink-soft">
            <p>
              Monthly packages work out cheaper from three classes a week, and every additional
              child from the same family gets five per cent off.
            </p>
          </div>
          <Button to="/fee-schedule" variant="secondary" withChevron>
            See monthly packages
          </Button>
        </div>
      </Section>

      {/* 7 — FAQ */}
      <Section ruled>
        <SectionHeading
          label={`${course.faqs.length} questions`}
          title={`${course.navLabel} questions, answered`}
          align="left"
        />
        <div className="mt-10">
          <Faq items={course.faqs} group={`${course.key}-faq`} className="mx-0 max-w-none" />
        </div>
      </Section>

      {/* 8 — The internal linking layer the site was missing */}
      <Section tone="warm" ruled>
        <SectionHeading
          label="Related courses"
          title="Where students usually go next"
          align="left"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {related.map((sibling) => (
            <CourseCard key={sibling.key} course={sibling} currency={currency} />
          ))}
        </div>
      </Section>

      {/* 9 — One closing CTA, written for this page */}
      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">{course.closingCta.title}</h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">{course.closingCta.body}</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              {course.closingCta.action}
            </Button>
            <Button
              href={whatsappUrl(
                `Assalamu alaikum — I'd like to book a free ${course.navLabel} trial class.`,
              )}
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Book on WhatsApp
            </Button>
          </div>
          <p className="mt-8 text-[0.8125rem] text-paper/60">
            Last updated <time dateTime={course.lastUpdated}>{lastUpdatedLabel}</time>
          </p>
        </div>
      </Section>
    </>
  );
}
