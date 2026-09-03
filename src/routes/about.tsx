import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { RosetteList } from "@/components/manuscript/Rosette";
import { Reveal } from "@/components/site/Reveal";
import { COURSE_LIST } from "@/content/courses";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";
import { ORG_FACTS, whatsappUrl } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
];

/** About page copy from My_Quran_Guide_AboutUs_FINAL (27 August 2026). */

const principles = [
  {
    title: "Accessibility",
    body: "We believe Quran education should never be out of reach for any Muslim family, anywhere in the world.",
  },
  {
    title: "Authenticity",
    body: "We teach the Quran the way it was revealed — with proper Tajweed, correct pronunciation, and deep respect for every word.",
  },
  {
    title: "Care",
    body: "Every student at My Quran Guide is treated like family. Our tutors are patient, encouraging, and genuinely invested in your progress.",
  },
  {
    title: "Flexibility",
    body: "Life is busy. We build our schedule around yours — not the other way around.",
  },
];

const whoWeTeach = [
  {
    title: "Kids (5-12)",
    body: "Just starting their Quran journey with Noorani Qaida and basic recitation.",
  },
  {
    title: "Teenagers (13-17)",
    body: "Ready to improve their Tajweed, begin Hifz, or learn Arabic.",
  },
  {
    title: "Adults (18+)",
    body: "Learning or improving Quran recitation with flexible evening timings.",
  },
  {
    title: "New Muslims",
    body: "Taking their first steps in Islam, guided by a patient, English-speaking tutor with care and respect.",
  },
];

const facts = [
  { label: "Teaching staff based in", value: ORG_FACTS.tutorsBasedIn },
  { label: "Office and support", value: ORG_FACTS.officeBasedIn },
  { label: "Teaching languages", value: ORG_FACTS.teachingLanguages.join(", ") },
  { label: "Class format", value: "One-to-one only" },
  { label: "Platforms", value: ORG_FACTS.platforms.join(", ") },
  { label: "Session lengths", value: "30 or 45 minutes" },
  { label: "Free trial", value: `${ORG_FACTS.freeTrialClasses} full classes` },
  { label: "Support response", value: ORG_FACTS.supportResponseTime },
  { label: "Courses offered", value: `${COURSE_LIST.length} courses` },
];

const faqs = [
  {
    q: "Who is behind My Quran Guide?",
    a: `The teaching staff are based in ${ORG_FACTS.tutorsBasedIn} and the administrative office is in ${ORG_FACTS.officeBasedIn}. If you want to know who specifically would teach you, ask and we will send that tutor's name and qualification before you book anything.`,
  },
  {
    q: "How many students have you taught?",
    a: "My Quran Guide has taught 500+ students across multiple countries. Our founder, Hafiz Abdul Shakoor, brings 8+ years of Quran teaching experience, and every family starts with a 2-day free trial so you can judge the teaching directly.",
  },
  {
    q: "Do you teach a particular madhhab or school of thought?",
    a: "Recitation and tajweed are taught as they are transmitted, and are not a point of difference between schools. For Islamic studies, tell us your family's background and we will teach in line with it or keep to what is agreed across the schools, whichever you prefer.",
  },
  {
    q: "Are classes recorded?",
    a: "Not by default, for the students' privacy. If you would like your own classes recorded for revision, ask your tutor and they will arrange it. Parents are welcome to record their own child's sessions at any time.",
  },
  {
    q: "What happens if we need to pause for a while?",
    a: "Tell us and we pause the schedule. Travel, exams, illness and Ramadan all interrupt lessons and none of that costs you anything. Your slot is held where we reasonably can, and if it cannot be we will tell you honestly rather than quietly reassigning it.",
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    ...buildPageSeo({
      title: "About Us | My Quran Guide - Certified Online Quran Academy",
      description:
        "Certified Pakistani Quran tutors, 500+ students taught, flexible timings for every family. Book your 2-day free trial with My Quran Guide today.",
      path: "/about",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
      buildFaqSchema(faqs),
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        label="500+ students taught · 8+ years of teaching"
        title="About My Quran Guide — Making Quality Quran Education Accessible for Everyone"
        intro="My Quran Guide was founded with one clear purpose — to make quality Quran education accessible to every Muslim, no matter where they live in the world. What started as a personal passion for teaching the Quran has grown into a trusted online Quran academy with over 500 students taught and 8+ years of teaching experience behind our founder and team."
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <Button to="/free-trial" withChevron>
              Book My Free Trial Class Now
            </Button>
            <Button variant="secondary" to="/tutors">
              How we vet tutors
            </Button>
          </>
        }
      />

      <Section>
        <div className="measure mx-auto space-y-5 text-pretty text-body-l text-ink-soft">
          <p>
            We are not just another online Quran platform. We are a team of certified, experienced,
            English-speaking Pakistani tutors who genuinely care about every student's progress —
            from a 5-year-old learning their first Arabic letters to an adult new Muslim reciting
            the Quran for the very first time.
          </p>
          <p>
            At My Quran Guide, we believe that every Muslim deserves access to authentic,
            high-quality Quran education — regardless of their location, schedule, or level. Our
            mission is simple: “To make quality Quran education accessible for every student, every
            family, and every new Muslim around the world — from the comfort of their home.”
          </p>
        </div>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading
          label="Our values"
          title="Our Values — What We Stand For"
          intro="This mission drives every decision we make — from the tutors we hire, to the courses we design, to the flexible timings we offer."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {principles.map((p) => (
            <Reveal key={p.title} className="jadwal p-6">
              <h3 className="text-h3 text-ink">{p.title}</h3>
              <p className="mt-2.5 text-pretty text-[0.9375rem] text-ink-soft">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section ruled>
        <SectionHeading
          label="Kids, adults, teenagers & new Muslims"
          title="Who We Serve — Kids, Adults, Teenagers & New Muslims"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {whoWeTeach.map((w) => (
            <div key={w.title}>
              <h3 className="text-h3 text-ink">{w.title}</h3>
              <p className="mt-2 text-pretty text-ink-soft">{w.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="warm" ruled>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Why students trust us"
              title="Why 500+ Students Trust My Quran Guide"
              intro="Trust is not built overnight. It is earned — one class at a time, one student at a time."
            />
            <RosetteList
              className="mt-8 text-ink-soft"
              items={[
                "500+ students successfully taught",
                "8+ years of teaching experience, led by founder Hafiz Abdul Shakoor",
                "Certified male and female tutors from Pakistan",
                "Fluent, English-speaking instruction",
                "Flexible timings — you choose your schedule",
                "One-on-one and group classes available",
                "Classes via Zoom, Skype & Google Meet",
                "2-day free trial — no payment required",
                "All levels welcome, from beginner to advanced",
                "New Muslims warmly welcomed",
              ]}
            />
            <p className="measure mt-6 text-pretty text-ink-soft">
              My Quran Guide did not begin as a business. It began as a calling. Our founder, Hafiz
              Abdul Shakoor, brings 8+ years of Quran teaching experience and built My Quran Guide
              to remove the barriers families faced: no local madrassa, no qualified female tutor,
              and no flexible timing that fit a busy modern lifestyle.
            </p>
          </div>

          <div>
            <h2 className="text-h2 text-ink">Who We Are — Certified, Experienced & English-Speaking</h2>
            <SpecStrip className="mt-6" columns={1} items={facts} />
          </div>
        </div>
      </Section>

      <Section ruled>
        <SectionHeading label="Five questions" title="What people ask before enrolling" />
        <Faq className="mt-10" items={faqs} group="about-faq" />
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">
            Start Your Journey with My Quran Guide Today
          </h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">
            Whether you are a parent looking for the best online Quran teacher for your child, an
            adult wanting to reconnect with the Quran, or a new Muslim taking your very first steps
            — My Quran Guide is here for you. Book your 2-day free trial today. No payment. No
            commitment. Just two classes to experience the My Quran Guide difference for yourself.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button to="/free-trial" size="lg" withChevron>
              Book My Free Trial Class Now
            </Button>
            <Button
              href={whatsappUrl("Assalamu alaikum, I have a question about the academy.")}
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Ask us a question first
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
