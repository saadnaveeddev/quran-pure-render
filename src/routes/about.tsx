import { createFileRoute } from "@tanstack/react-router";
import { PageHero, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  CalendarClock,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | My Quran Guide — Online Quran Academy" },
      {
        name: "description",
        content:
          "Learn about My Quran Guide — our mission is to make quality Quran education accessible for everyone. 500+ students taught by certified Pakistani tutors fluent in English. Book your free trial today!",
      },
      { property: "og:title", content: "About Us | My Quran Guide — Online Quran Academy" },
      {
        property: "og:description",
        content:
          "Our mission is to make quality Quran education accessible for everyone. 500+ students taught by certified Pakistani tutors fluent in English.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const tutorQualities = [
  ["Certified", "Holds recognized Islamic teaching certification"],
  ["Experienced", "10+ years combined teaching experience"],
  ["English Speaking", "Fluent in English for clear communication"],
  ["Male & Female", "Available for all students and families"],
  ["Student Focused", "Personalized attention for every learner"],
];

const whatWeTeach = [
  "Noorani Qaida — For absolute beginners",
  "Quran Recitation — Fluent and correct reading",
  "Tajweed — Proper rules of Quran recitation",
  "Hifz Program — Quran memorization",
  "Islamic Studies — Fiqh, Seerah, Islamic ethics",
  "Arabic Language — Quranic Arabic from scratch",
  "Female Quran Classes — For sisters only",
];

const serve = [
  { title: "Kids (5-12)", body: "Kids aged 5 to 12 who are just starting their Quran journey with Noorani Qaida and basic recitation." },
  { title: "Teenagers (13-17)", body: "Teenagers aged 13 to 17 who want to improve their Tajweed, begin Hifz, or learn Arabic." },
  { title: "Adults (18+)", body: "Adults of any age who want to learn or improve their Quran recitation with flexible evening timings." },
  { title: "New Muslims", body: "New Muslims who are taking their first steps in Islam and need a patient, understanding, and English-speaking tutor to guide them with care and respect." },
];

const trust = [
  "500+ students successfully taught",
  "10+ years of combined teaching experience",
  "Certified & experienced male and female tutors",
  "Flexible timings — you choose your schedule",
  "One-on-one and group classes available",
  "Classes via Zoom, Skype & Google Meet",
  "2-day free trial — no payment required",
  "All levels welcome — beginner to advanced",
  "New Muslims warmly welcomed",
];

const values = [
  { icon: ShieldCheck, title: "Accessibility", body: "We believe Quran education should never be out of reach for any Muslim family, anywhere in the world." },
  { icon: Sparkles, title: "Authenticity", body: "We teach the Quran the way it was revealed — with proper Tajweed, correct pronunciation, and deep respect for every word." },
  { icon: HeartHandshake, title: "Care", body: "Every student at My Quran Guide is treated like family. Our tutors are patient, encouraging, and genuinely invested in your progress." },
  { icon: CalendarClock, title: "Flexibility", body: "Life is busy. We build our schedule around yours — not the other way around." },
  { icon: Award, title: "Trust", body: "From your very first free trial class, we want you to feel confident that My Quran Guide is the right choice for you and your family." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About My Quran Guide — Making Quality Quran Education Accessible for Everyone"
        intro="My Quran Guide was founded with one clear purpose — to make quality Quran education accessible to every Muslim, no matter where they live in the world. What started as a personal passion for teaching the Quran has grown into a trusted online Quran academy with over 500 students taught and more than 10 years of combined teaching experience behind our team."
      />

      <Section>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          We are not just another online Quran platform. We are a team of certified, experienced, and English-speaking Pakistani tutors who genuinely care about every student's progress — from a 5-year-old learning their first Arabic letters to an adult new Muslim reciting the Quran for the very first time.
        </p>
      </Section>

      {/* Mission */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Mission"
          title="Our Mission — Quality Quran Education for Every Home"
          intro="At My Quran Guide, we believe that every Muslim deserves access to authentic, high-quality Quran education — regardless of their location, schedule, or level. Our mission is simple:"
        />
        <blockquote className="mx-auto mt-10 max-w-2xl rounded-3xl border border-border bg-card p-8 text-center font-display text-xl leading-relaxed text-foreground shadow-card sm:text-2xl">
          “To make quality Quran education accessible for every student, every family, and every new Muslim around the world — from the comfort of their home.”
        </blockquote>
        <p className="mx-auto mt-8 max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          This mission drives every decision we make — from the tutors we hire, to the courses we design, to the flexible timings we offer. Because at the end of the day, learning the Quran should never be difficult to access.
        </p>
      </Section>

      {/* Story */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="Our Story — 10+ Years of Teaching, One Clear Vision"
          />
          <div className="mt-8 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
            <p>My Quran Guide did not begin as a business. It began as a calling.</p>
            <p>With over 10 years of Quran teaching experience, our founder understood one thing clearly — thousands of Muslim families around the world wanted their children and themselves to learn the Quran properly, but faced real barriers. No local madrassa nearby. No qualified female tutor available. No flexible timing that fit a busy modern lifestyle.</p>
            <p>My Quran Guide was built to remove every one of those barriers.</p>
            <p>Today, with 500+ students taught across multiple countries, we are proud to be a trusted name in online Quran education — and we are just getting started.</p>
          </div>
        </div>
      </Section>

      {/* Who we are */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Who We Are"
          title="Who We Are — Certified, Experienced & English-Speaking"
          intro="Our team is made up of certified male and female Quran tutors from Pakistan — all of whom are fluent in English. This means your child or family member is not just learning from a qualified Islamic scholar, but from someone who can explain concepts clearly, answer questions confidently, and make every class engaging and easy to understand."
        />
        <p className="mt-6 text-center text-sm font-medium text-foreground">Every tutor at My Quran Guide is:</p>
        <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
          {tutorQualities.map(([q, d]) => (
            <div key={q} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <h3 className="text-base text-foreground">{q}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* What we teach */}
      <Section>
        <SectionHeading
          eyebrow="What We Teach"
          title="What We Teach — Complete Quran & Islamic Education"
          intro="My Quran Guide offers a complete range of online Quran and Islamic courses for students of all ages and all levels:"
        />
        <div className="mx-auto mt-10 max-w-2xl">
          <CheckList items={whatWeTeach} className="grid gap-3 sm:grid-cols-1" />
        </div>
      </Section>

      {/* Who we serve */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Who We Serve"
          title="Who We Serve — Kids, Adults, Teenagers & New Muslims"
          intro="My Quran Guide was built for every type of learner:"
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {serve.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="text-lg text-foreground">{s.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          No matter who you are or where you are starting from — My Quran Guide has a place for you.
        </p>
      </Section>

      {/* Trust */}
      <Section>
        <SectionHeading
          eyebrow="Why Students Trust Us"
          title="Why 500+ Students Trust My Quran Guide"
          intro="Trust is not built overnight. It is earned — one class at a time, one student at a time. Here is why families around the world continue to choose My Quran Guide:"
        />
        <div className="mx-auto mt-10 max-w-3xl">
          <CheckList items={trust} className="grid gap-3 sm:grid-cols-2" />
        </div>
      </Section>

      {/* Values */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Values"
          title="Our Values — What We Stand For"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg text-foreground">{v.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="emerald">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            inverted
            title="Start Your Journey with My Quran Guide Today"
            intro="Whether you are a parent looking for the best online Quran teacher for your child, an adult wanting to reconnect with the Quran, or a new Muslim taking your very first steps — My Quran Guide is here for you. Book your 2-day free trial today. No payment. No commitment. Just two classes to experience the My Quran Guide difference for yourself."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">Book My Free Trial Class Now</CTAButton>
            <CTAButton to="/courses" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              View Our Courses
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
