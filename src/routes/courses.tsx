import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { ChipGroup } from "@/components/site/Spec";
import { CourseCard } from "@/components/site/Cards";
import { RosetteDivider } from "@/components/manuscript/Rosette";
import { COURSE_FACETS, COURSE_LIST, type Audience, type StartLevel } from "@/content/courses";
import { coursesFaqs } from "@/content/faqs";
import { useCurrency } from "@/lib/currency";
import { whatsappUrl } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildItemListSchema,
  buildPageSeo,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
];

export const Route = createFileRoute("/courses")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Quran Courses: Tajweed, Hifz, Qaida | My Quran Guide",
      description:
        "Seven online Quran courses with certified tutors: Noorani Qaida, recitation, Tajweed, Hifz, Islamic studies and Quranic Arabic. Compare levels and fees.",
      path: "/courses",
    }),
    scripts: [
      buildFaqSchema(coursesFaqs),
      buildItemListSchema(
        COURSE_LIST.map((course) => ({
          name: course.h1,
          path: course.path,
          description: course.summary,
        })),
      ),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: CoursesPage,
});

const AUDIENCE_LABELS: Record<Audience, string> = {
  children: "Children",
  adults: "Adults",
};

const LEVEL_LABELS: Record<StartLevel, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const SCHEDULE = [
  { label: "Session length", options: ["30 minutes", "45 minutes"] },
  { label: "Days per week", options: ["2", "3", "4", "5", "6"] },
  { label: "Format", options: ["One-to-one", "Small group on request"] },
  { label: "Platform", options: ["Zoom", "Skype", "Google Meet"] },
  { label: "Tutor", options: ["Male", "Female"] },
  { label: "Time of day", options: ["Morning", "Afternoon", "Evening", "Weekend"] },
];

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "border px-4 py-2 text-[0.875rem] font-medium transition-colors duration-[120ms]",
        active
          ? "border-lapis bg-lapis text-white"
          : "border-rule bg-paper-warm text-ink-soft hover:text-lapis",
      )}
    >
      {children}
    </button>
  );
}

function CoursesPage() {
  const { currency } = useCurrency();
  const [audience, setAudience] = useState<Audience | null>(null);
  const [level, setLevel] = useState<StartLevel | null>(null);

  const visible = COURSE_LIST.filter((course) => {
    const facets = COURSE_FACETS[course.key];
    if (audience && !facets.audience.includes(audience)) return false;
    if (level && !facets.startLevel.includes(level)) return false;
    return true;
  });

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        label="Seven courses"
        title="Online Quran courses, from the first letter to full Hifz"
        intro="Every course below is taught one-to-one by a certified tutor, in 30 or 45 minute sessions, two to six days a week. Filter by who is learning and where they are starting."
        actions={
          <Button to="/free-trial" withChevron>
            Book a free trial class
          </Button>
        }
      />

      <Section>
        <div className="flex flex-col gap-6 border border-rule bg-paper-warm p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="text-caption text-gold-ink">Who is learning</span>
            <div className="flex flex-wrap">
              <FilterButton active={audience === null} onClick={() => setAudience(null)}>
                Anyone
              </FilterButton>
              {(Object.keys(AUDIENCE_LABELS) as Audience[]).map((value) => (
                <FilterButton
                  key={value}
                  active={audience === value}
                  onClick={() => setAudience(value)}
                >
                  {AUDIENCE_LABELS[value]}
                </FilterButton>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <span className="text-caption text-gold-ink">Starting level</span>
            <div className="flex flex-wrap">
              <FilterButton active={level === null} onClick={() => setLevel(null)}>
                Any
              </FilterButton>
              {(Object.keys(LEVEL_LABELS) as StartLevel[]).map((value) => (
                <FilterButton key={value} active={level === value} onClick={() => setLevel(value)}>
                  {LEVEL_LABELS[value]}
                </FilterButton>
              ))}
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-5 text-[0.875rem] text-ink-soft">
          Showing {visible.length} of {COURSE_LIST.length} courses.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((course) => (
            <CourseCard key={course.key} course={course} currency={currency} />
          ))}
        </div>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading
          label="You choose all six"
          title="The schedule is built around you, not a timetable"
          align="left"
        />
        <dl className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SCHEDULE.map((row) => (
            <div key={row.label}>
              <dt className="text-caption text-gold-ink">{row.label}</dt>
              <dd className="mt-3">
                <ChipGroup items={row.options} label={row.label} />
              </dd>
            </div>
          ))}
        </dl>
        <RosetteDivider className="mt-14" />
        <p className="measure mx-auto mt-10 text-center text-ink-soft">
          Tutors teach across the full 24-hour cycle, so a 6am slot in the Gulf and a 9pm slot in
          California are both ordinary requests rather than special cases.
        </p>
      </Section>

      <Section ruled>
        <SectionHeading
          label="Choosing between them"
          title="Questions about the courses"
          align="left"
        />
        <div className="mt-10">
          <Faq items={coursesFaqs} group="courses-faq" className="mx-0 max-w-none" />
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">Not sure which one applies to you?</h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">
            Book a trial without picking a course. The tutor will listen to you read for a few
            minutes and tell you where to start — that assessment is the whole point of the first
            free class.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Book an assessment class
            </Button>
            <Button
              href={whatsappUrl("Assalamu alaikum — which course should I start with?")}
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Ask on WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
