import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { PageHero, DataTable } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Field, TextareaField } from "@/components/site/FormFields";
import { CheckCircle2 } from "lucide-react";
import { buildBreadcrumbSchema, buildPageSeo } from "@/lib/seo";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Free Trial", to: "/free-trial" },
];

export const Route = createFileRoute("/free-trial")({
  head: () => ({
    ...buildPageSeo({
      title: "Book Free Trial Online Quran Class — 2 Days Free | My Quran Guide",
      description:
        "Book your 2-day free trial online Quran class at My Quran Guide — 100% free, no credit card, no commitment. Choose any course, any timing. Certified male & female tutors. Enroll now!",
      path: "/free-trial",
    }),
    scripts: [
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: FreeTrialPage,
});

const steps = [
  { n: "1", title: "Fill in the Form Below", body: "Tell us your name, email, WhatsApp number, the course you are interested in, your preferred tutor gender, and your available timing. It takes less than 2 minutes." },
  { n: "2", title: "We Confirm Your Trial & Match Your Tutor", body: "Within a few hours, our team will contact you to confirm your 2 free trial classes and match you with the most suitable certified male or female tutor based on your preferences." },
  { n: "3", title: "Join Your Class & Start Learning", body: "At your chosen time, join your free trial class on Zoom, Skype or Google Meet and begin your Quran learning journey — completely free, with zero pressure to enroll." },
];

const includes = [
  { title: "2 Complete Online Classes", body: "Two full Quran classes with a certified and experienced tutor — not a demo, not a sales pitch. Real classes, real learning." },
  { title: "Any Course — You Choose", body: "Pick any course you want — Noorani Qaida, Quran Recitation, Tajweed, Hifz, Islamic Studies, Arabic or Female Quran Classes." },
  { title: "Male or Female Tutor — You Choose", body: "Tell us your preference and we will match you with the right certified male or female tutor for your trial classes." },
  { title: "Your Timing — You Decide", body: "Morning, afternoon, evening or weekend — you choose the time that fits your schedule perfectly." },
  { title: "Your Platform — Zoom, Skype or Google Meet", body: "Join your free trial class on whichever platform you are most comfortable with. No complicated setup required." },
  { title: "100% Free — Zero Risk", body: "No payment. No credit card. No hidden charges. Your 2-day free trial is completely free with absolutely no obligation to continue." },
];

const confidence = [
  "Meet your certified tutor and feel comfortable with their teaching style",
  "See how our online Quran classes actually work — live and interactive",
  "Understand the course structure and what your child or you will be learning",
  "Ask any questions about fees, timings, or courses with zero pressure",
  "Make a fully informed decision before enrolling",
];

const glance = [
  ["Number of Free Classes", "2 Complete Classes"],
  ["Cost", "100% Free — No Payment Required"],
  ["Credit Card Required", "No — Never"],
  ["Course Options", "Any Course — Student Chooses"],
  ["Tutor Gender", "Male or Female — Student Chooses"],
  ["Class Timing", "Any Time — Student Chooses"],
  ["Class Duration", "30 or 45 Minutes"],
  ["Platform", "Zoom, Skype or Google Meet"],
  ["Commitment After Trial", "Zero — No Obligation"],
  ["Who Can Apply", "New Students Only — Once Per Student"],
  ["Confirmation Time", "Within a Few Hours"],
  ["Languages", "English and Urdu"],
];

function FreeTrialPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Free trial request received! We will confirm your 2 free trial classes within a few hours.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero title="Free Trial" breadcrumbs={breadcrumbs} />

      {/* Steps */}
      <Section>
        <SectionHeading
          eyebrow="How to Book Your Free Trial"
          title="3 Simple Steps to Start Your Free Trial"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-gold-foreground font-display text-xl font-semibold">{s.n}</span>
              <h3 className="mt-5 text-lg text-foreground">{s.title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="#booking-form">Book My Free Trial Now</CTAButton>
        </div>
      </Section>

      {/* Booking form */}
      <Section tone="muted" id="booking-form">
        <SectionHeading
          eyebrow="Free Trial Booking Form"
          title="Book Your 2-Day Free Trial — Fill in the Form"
          intro="Complete the form below and we will confirm your 2 free trial classes within a few hours:"
        />
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl text-foreground">Thank you!</h3>
              <p className="mt-2 max-w-md text-muted-foreground">
                We will confirm your 2 free trial classes within a few hours. You can also message us on WhatsApp for the fastest response.
              </p>
              <div className="mt-6">
                <CTAButton onClick={() => setSubmitted(false)} variant="outline">Submit another request</CTAButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
              <Field label="Email Address" name="email" type="email" placeholder="Enter your email address" required />
              <Field label="WhatsApp Number" name="whatsapp" placeholder="Enter your WhatsApp number with country code" required />
              <Field label="Your Country" name="country" placeholder="e.g. USA, UK, Canada, Australia..." required />
              <Field label="Student Age" name="age" placeholder="e.g. Child (7 years), Teenager (15), Adult, New Muslim..." required />
              <Field label="Course You Want to Try" name="course" placeholder="e.g. Noorani Qaida, Tajweed, Hifz, Arabic, Female Classes..." required />
              <Field label="Preferred Tutor Gender" name="tutorGender" placeholder="Male or Female" required />
              <Field label="Preferred Class Timing" name="timing" placeholder="e.g. Monday & Wednesday at 5pm, Weekend mornings..." required />
              <Field label="Platform Preference" name="platform" placeholder="Zoom, Skype or Google Meet" required />
              <TextareaField label="Anything Else? (Optional)" name="notes" placeholder="Any questions or special requirements..." />
              <CTAButton type="submit" className="w-full" size="lg">Book My Free Trial</CTAButton>
            </form>
          )}
        </div>
      </Section>

      {/* Includes */}
      <Section>
        <SectionHeading
          eyebrow="What You Get in Your Free Trial"
          title="Your 2-Day Free Trial Includes Everything"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {includes.map((i) => (
            <div key={i.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <CheckCircle2 className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-lg text-foreground">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why we offer */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why We Offer a Free Trial"
          title="We Are Confident in the Quality of Our Teaching"
          intro="At My Quran Guide, we offer a 2-day free trial because we genuinely believe in the quality of our teaching. We do not want you to commit to anything before you have experienced our classes for yourself."
        />
        <p className="mx-auto mt-6 max-w-3xl text-center text-base text-muted-foreground">Our free trial gives you the chance to:</p>
        <ul className="mx-auto mt-8 max-w-2xl space-y-3">
          {confidence.map((c, i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{c}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          We are so confident you will love your experience at My Quran Guide that we offer 2 full classes — not just a 15-minute demo. Because we know that once you experience our teaching, you will want to continue.
        </p>
      </Section>

      {/* At a glance */}
      <Section>
        <SectionHeading title="Free Trial — At a Glance" />
        <div className="mt-10">
          <DataTable head={["Free Trial Detail", "Information"]} rows={glance} />
        </div>
        <div className="mt-12 text-center">
          <CTAButton href="#booking-form" size="lg">Book My Free Trial Now</CTAButton>
        </div>
      </Section>
    </>
  );
}
