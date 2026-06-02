import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Mail, MessageCircle, Facebook, Instagram, CheckCircle2 } from "lucide-react";
import { PageHero, DataTable, CheckList } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { Field, TextareaField } from "@/components/site/FormFields";
import { FAQ } from "@/components/site/FAQ";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | My Quran Guide — Get in Touch Today" },
      {
        name: "description",
        content:
          "Have a question about our online Quran classes? Contact My Quran Guide via email, WhatsApp, Facebook or Instagram. We reply within 1-2 hours. Available 24/7!",
      },
      { property: "og:title", content: "Contact Us | My Quran Guide — Get in Touch Today" },
      {
        property: "og:description",
        content:
          "Contact My Quran Guide via email, WhatsApp, Facebook or Instagram. We reply within 1-2 hours. Available 24/7!",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { icon: Mail, title: "Email Us", value: SITE.email, sub: "We reply within 1-2 hours — 24/7", href: `mailto:${SITE.email}` },
  { icon: MessageCircle, title: "WhatsApp", value: SITE.whatsappDisplay, sub: "Message us anytime — fastest response", href: SITE.whatsappLink },
  { icon: Facebook, title: "Facebook", value: SITE.facebookDisplay, sub: "Message us on Facebook page", href: SITE.facebookLink },
  { icon: Instagram, title: "Instagram", value: SITE.instagramDisplay, sub: "DM us on Instagram anytime", href: SITE.instagramLink },
];

const responseTimes = [
  ["Email", "Within 1-2 Hours"],
  ["WhatsApp", "Within 1 Hour"],
  ["Facebook Message", "Within 1-2 Hours"],
  ["Instagram DM", "Within 1-2 Hours"],
  ["Availability", "24/7 — Any Time, Any Day"],
  ["Languages", "English & Urdu"],
];

const faqs = [
  { q: "How quickly do you reply?", a: "We reply to all messages within 1 to 2 hours — 24 hours a day, 7 days a week. Whether you reach out by email, WhatsApp, Facebook, or Instagram — our team is always ready to help." },
  { q: "Can I contact you on WhatsApp?", a: "Yes! WhatsApp is one of our fastest contact channels. Simply message us on WhatsApp and we will respond within 1 hour with all the information you need." },
  { q: "What information should I include in my message?", a: "To help us assist you better, please mention the student's name, age, course of interest, and your preferred class timing. This helps us match you with the right tutor right away." },
  { q: "Can I contact you before booking a free trial?", a: "Absolutely. You are welcome to contact us first with any questions before booking your free trial. Our team is happy to guide you and help you choose the right course for you or your child." },
  { q: "Do you communicate in English, Urdu and Punjabi ?", a: "Yes. Our team is fluent in both English,Urdu and Punjabi. You can contact us in whichever language you are most comfortable with." },
  { q: "Is there a phone number I can call?", a: "We currently offer support via WhatsApp, email, Facebook, and Instagram. WhatsApp is the fastest way to reach us and works just like a phone call if you prefer voice messages." },
];

const guideItems = [
  "Choose the right Quran course for your age and level",
  "Understand how our online classes work",
  "Get matched with the right male or female tutor",
  "Book your 2-day free trial class with zero hassle",
  "Answer any questions about timings, platform, or fees",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent! We will get back to you within 1-2 hours.");
    e.currentTarget.reset();
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Contact My Quran Guide — We Are Here for You 24/7"
        intro="Have a question about our online Quran classes? Want to know which course is right for you or your child? Or are you ready to book your 2-day free trial? Whatever you need — My Quran Guide is here to help."
      />

      <Section>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          We are available 24/7 and reply to all messages within 1 to 2 hours. Reach out to us through any of the channels below and our friendly team will get back to you as soon as possible.
        </p>
        <div className="mt-14">
          <SectionHeading title="Get in Touch with My Quran Guide" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-border bg-card p-6 text-center shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 text-base text-foreground">{c.title}</h3>
                <p className="mt-1 break-words text-sm font-medium text-primary">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.sub}</p>
              </a>
            ))}
          </div>
        </div>
      </Section>

      {/* Form */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Send Us a Message"
          title="Send Us a Message"
          intro="Fill in the form below and we will get back to you within 1-2 hours:"
        />
        <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl text-foreground">Message sent!</h3>
              <p className="mt-2 max-w-md text-muted-foreground">
                Thank you for reaching out. We will get back to you within 1-2 hours. For the fastest response, message us on WhatsApp.
              </p>
              <div className="mt-6">
                <CTAButton onClick={() => setSubmitted(false)} variant="outline">Send another message</CTAButton>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <Field label="Full Name" name="fullName" placeholder="Enter your full name" required />
              <Field label="Email Address" name="email" type="email" placeholder="Enter your email address" required />
              <Field label="WhatsApp Number (Optional)" name="whatsapp" placeholder="Enter your WhatsApp number with country code" />
              <Field label="Your Country" name="country" placeholder="e.g. USA, UK, Canada, Australia..." required />
              <Field label="Course You Are Interested In" name="course" placeholder="e.g. Tajweed, Hifz, Noorani Qaida, Female Classes..." required />
              <Field label="Student Age" name="age" placeholder="e.g. Child (7 years), Adult, New Muslim..." required />
              <Field label="Preferred Class Timing" name="timing" placeholder="e.g. Morning, Evening, Weekend..." required />
              <TextareaField label="Your Message" name="message" placeholder="Write your question or message here..." required />
              <CTAButton type="submit" className="w-full" size="lg">Send Message</CTAButton>
            </form>
          )}
        </div>
      </Section>

      {/* Response time */}
      <Section>
        <SectionHeading title="When Can You Reach Us?" />
        <div className="mt-10">
          <DataTable head={["Contact Channel", "Response Time"]} rows={responseTimes} />
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
        />
        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </Section>

      {/* Why contact */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow="Why Contact My Quran Guide?"
            title="Not Sure Where to Start? We Will Guide You"
            intro="Many families are not sure which course to choose, what level their child is at, or how online Quran classes work. That is completely okay. Our team is here to answer every question — no matter how big or small."
          />
          <p className="mt-6 text-base font-medium text-foreground">Contact My Quran Guide today and we will help you:</p>
          <div className="mt-6">
            <CheckList items={guideItems} />
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section tone="emerald">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            inverted
            title="Ready to Start? Contact Us Now — We Reply in 1-2 Hours"
            intro="Do not wait. Whether you are ready to enroll or just have a question — reach out to My Quran Guide today. We are available 24/7 and will reply within 1 to 2 hours. Your Quran learning journey is just one message away."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton href={`mailto:${SITE.email}`} variant="gold" size="lg">Email Us: {SITE.email}</CTAButton>
            <CTAButton href={SITE.whatsappLink} size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Message Us on WhatsApp
            </CTAButton>
            <CTAButton to="/free-trial" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Book Your Free Trial Class Now
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
