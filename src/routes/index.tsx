import { createFileRoute } from "@tanstack/react-router";
import {
  BadgeCheck,
  CalendarClock,
  Users,
  Video,
  Gift,
  Star,
  BookOpen,
  Sparkles,
  Trophy,
  Moon,
  Flower2,
  Languages,
} from "lucide-react";
import heroImage from "@/assets/hero-quran.jpg";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import { DataTable } from "@/components/site/PageHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Online Quran Classes | Learn Quran Online — My Quran Guide" },
      {
        name: "description",
        content:
          "Start your 2-day free trial today! My Quran Guide offers online Quran classes for kids, adults & new Muslims with certified male & female tutors. Flexible timings, all levels. Enroll now!",
      },
      { property: "og:title", content: "Online Quran Classes | Learn Quran Online — My Quran Guide" },
      {
        property: "og:description",
        content:
          "Online Quran classes for kids, adults & new Muslims with certified male & female tutors. Flexible timings, all levels. Start your 2-day free trial!",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const whyChoose = [
  {
    icon: BadgeCheck,
    title: "Certified & Experienced Tutors",
    body: "Every tutor at My Quran Guide is both certified and experienced. Our male and female teachers hold Islamic certifications and have years of hands-on teaching experience — so your child or family member learns the Quran the right way from day one.",
  },
  {
    icon: CalendarClock,
    title: "Flexible Scheduling — You Choose Your Time",
    body: "We understand that every student has a different routine. That is why we offer fully flexible class timings — you pick the day, you pick the time. Morning, evening, or weekend — we fit into your schedule, not the other way around.",
  },
  {
    icon: Users,
    title: "One-on-One & Group Classes Available",
    body: "Whether you prefer personalized attention through one-on-one sessions or enjoy learning in a group environment, My Quran Guide has you covered. Both formats are available for all age groups and levels.",
  },
  {
    icon: Video,
    title: "Learn via Zoom, Skype or Google Meet",
    body: "No app restrictions. No complicated setup. Our classes run on Zoom, Skype, and Google Meet — whichever platform you and your family are most comfortable with. All you need is a device and an internet connection.",
  },
  {
    icon: Gift,
    title: "2-Day Free Trial — Zero Risk",
    body: "We are so confident in the quality of our teaching that we offer a 2-day free trial to every new student. No credit card. No commitment. Just two full classes to experience My Quran Guide for yourself.",
  },
];

const courses = [
  { icon: BookOpen, title: "Noorani Qaida Online", body: "Perfect for beginners and young children aged 5 and above. Our Noorani Qaida course teaches the basics of Arabic letters, pronunciation, and sounds — the essential foundation before reading the Quran." },
  { icon: BookOpen, title: "Quran Recitation Classes", body: "Learn to read the Quran fluently and correctly with our Quran Recitation course. Suitable for all ages and levels — from those reading for the first time to those wanting to improve their fluency." },
  { icon: Sparkles, title: "Tajweed Classes Online", body: "Tajweed is the art of reciting the Quran with proper rules and pronunciation. Our certified Tajweed tutors teach you the exact Makharij and rules of Tajweed so every word is recited as it was revealed." },
  { icon: Trophy, title: "Hifz Program Online", body: "Memorizing the Quran is one of the greatest achievements in a Muslim's life. Our online Hifz program is structured, consistent, and guided by experienced Huffaz tutors — for both children and adults." },
  { icon: Moon, title: "Islamic Studies Online", body: "Beyond Quran, we offer Islamic Studies classes covering the basics of Islam, Fiqh, Seerah, and Islamic ethics — perfect for Muslim families wanting a complete Islamic education at home." },
  { icon: Languages, title: "Arabic Language Classes", body: "Understanding the Quran in its original language is a powerful experience. Our Arabic Language course teaches Quranic Arabic from scratch — helping students connect with the Quran on a deeper level." },
  { icon: Flower2, title: "Female Quran Classes Online", body: "For sisters who prefer learning with a female tutor, My Quran Guide offers dedicated female Quran classes. All our female tutors are certified, experienced, and create a comfortable and focused learning environment." },
];

const audience = [
  ["Kids (5-12)", "Noorani Qaida, Quran Recitation, Tajweed"],
  ["Teenagers (13-17)", "Quran Recitation, Tajweed, Hifz, Arabic"],
  ["Adults (18+)", "All Courses, Flexible Evening Timings"],
  ["New Muslims", "Beginner Quran, Islamic Studies, Arabic"],
  ["All Levels", "Beginner, Intermediate, Advanced"],
];

const steps = [
  { n: "1", title: "Book Your Free Trial", body: "Click the free trial button, fill in your name and preferred timing, and we will confirm your 2-day free trial class within 24 hours." },
  { n: "2", title: "Get Matched with Your Tutor", body: "Based on your age, level, and preference for a male or female tutor, we match you with the most suitable certified teacher from our team." },
  { n: "3", title: "Start Learning from Home", body: "Join your class on Zoom, Skype, or Google Meet — whichever you prefer — and begin your Quran learning journey with My Quran Guide today." },
];

const faqs = [
  { q: "Do you offer a free trial?", a: "Yes! My Quran Guide offers a 2-day free trial to all new students. No payment or credit card is required. Simply book your trial and experience the quality of our teaching before you commit." },
  { q: "What age groups do you teach?", a: "We teach students of all ages — from children as young as 5 years old to adults of any age. We also welcome new Muslims who are starting their Quran journey." },
  { q: "Can I choose a female tutor?", a: "Absolutely. My Quran Guide has certified and experienced female tutors available for sisters and young girls who prefer learning with a female teacher." },
  { q: "What platform are classes held on?", a: "Our classes are held on Zoom, Skype, or Google Meet — whichever platform you are most comfortable using." },
  { q: "What if I am a complete beginner?", a: "No problem at all. Our Noorani Qaida course is designed specifically for complete beginners. We start from the very basics and progress at your own pace." },
  { q: "Are your tutors certified?", a: "Yes. All tutors at My Quran Guide are both certified and experienced. They hold recognized Islamic teaching certifications and have years of online teaching experience." },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
          <div className="animate-fade-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-secondary-foreground">
              <Star className="h-3.5 w-3.5 text-gold" /> 500+ Students Worldwide
            </span>
            <h1 className="text-balance text-4xl leading-[1.1] text-foreground sm:text-5xl lg:text-[3.4rem]">
              Online Quran Classes for Kids, Adults &amp; New Muslims — Learn Quran from Home with My Quran Guide
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              At My Quran Guide, we make learning the Quran simple, flexible, and accessible for everyone — kids, teenagers, adults, and new Muslims alike. Whether you are a complete beginner or want to perfect your Tajweed, our certified and experienced male and female tutors are here to guide you every step of the way. Join thousands of students learning Quran online from the comfort of their home through Zoom, Skype, or Google Meet — on your schedule, at your pace. Start today with our 2-day free trial — no payment required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton to="/free-trial" size="lg">
                Start Your 2-Day Free Trial Now
              </CTAButton>
              <CTAButton to="/courses" size="lg" variant="outline">
                View Our Courses
              </CTAButton>
            </div>
          </div>
          <div className="animate-fade-in">
            <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
              <img
                src={heroImage}
                alt="An open Quran resting on a wooden stand with a soft geometric Islamic arch behind it"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why Choose My Quran Guide?"
          title="Why My Quran Guide Is the Right Choice for Your Family"
          intro="Finding a trustworthy and qualified Quran tutor online can be overwhelming. At My Quran Guide, we have made it easy. Here is what makes us different from other online Quran academies:"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl text-foreground">{item.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Courses */}
      <Section>
        <SectionHeading
          eyebrow="Our Online Quran Courses"
          title="Complete Online Quran Courses for All Levels"
          intro="From absolute beginners to advanced learners, My Quran Guide offers a full range of Quran and Islamic courses designed for every age and every level."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-emerald text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg text-foreground">{c.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{c.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton to="/courses" variant="outline">View All Courses</CTAButton>
        </div>
      </Section>

      {/* Audience */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Who Is My Quran Guide For?"
          title="Online Quran Classes for Everyone — No Matter Your Age or Level"
          intro="My Quran Guide welcomes students from all walks of life:"
        />
        <div className="mt-12">
          <DataTable head={["Student Type", "What We Offer"]} rows={audience} />
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="Start Learning Quran Online in 3 Simple Steps"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-xl font-semibold">
                {s.n}
              </span>
              <h3 className="mt-5 text-lg text-foreground">Step {s.n} — {s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton to="/free-trial">Book My Free Trial Class Now</CTAButton>
        </div>
      </Section>

      {/* Testimonial */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What Our Students Say"
          title="Trusted by Families Around the World"
          intro="Here is what parents, students, and new Muslims are saying about their experience with My Quran Guide:"
        />
        <figure className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-8 text-center shadow-card sm:p-10">
          <div className="mb-4 text-2xl tracking-widest text-gold" aria-label="5 out of 5 stars">★★★★★</div>
          <blockquote className="text-pretty font-display text-xl leading-relaxed text-foreground sm:text-2xl">
            “My daughter started with Noorani Qaida and within 3 months she is reading the Quran on her own. The female tutor is so patient and kind. Highly recommend My Quran Guide to every Muslim family.”
          </blockquote>
          <figcaption className="mt-6 text-sm font-medium text-muted-foreground">— Sarah M., Mother of 2</figcaption>
        </figure>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Online Quran Classes — Common Questions Answered"
        />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="emerald">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            inverted
            title="Start Your Quran Learning Journey Today — 2 Days Completely Free"
            intro="There has never been a better time to start learning the Quran. With My Quran Guide, you get certified tutors, flexible timings, one-on-one or group classes, and a 2-day free trial with zero risk. Join thousands of students and families who have already chosen My Quran Guide as their trusted online Quran academy."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">Start My Free Trial Now</CTAButton>
            <CTAButton to="/courses" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              View All Courses
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
