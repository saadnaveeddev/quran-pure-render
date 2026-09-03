import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { SpecStrip } from "@/components/site/Spec";
import { Field, TextareaField } from "@/components/site/FormFields";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { SITE, ORG_FACTS, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";
import { contactFaqs } from "@/content/faqs";
import { TUTOR_TIMEZONE_LABEL } from "@/lib/timezone";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Contact", to: "/contact" },
];

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...buildPageSeo({
      title: "Contact Us | My Quran Guide — Get in Touch Today",
      description:
        "Have a question about our online Quran classes? Contact My Quran Guide via email, WhatsApp, Facebook or Instagram. We reply within 1-2 hours. Available 24/7!",
      path: "/contact",
    }),
    scripts: [
      buildFaqSchema([...contactFaqs]),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: ContactPage,
});

const availability = [
  { label: "WhatsApp", value: "Fastest. Usually under an hour." },
  { label: "Email", value: ORG_FACTS.supportResponseTime },
  { label: "Working hours", value: TUTOR_TIMEZONE_LABEL },
  { label: "Languages", value: ORG_FACTS.teachingLanguages.join(", ") },
];

/** Four fields. Anything longer belongs on the trial form, not here. */
function ContactForm() {
  const [state, setState] = useState({ name: "", email: "", whatsapp: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof state) => (v: string) => setState((s) => ({ ...s, [k]: v }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="jadwal p-8 text-center">
        <h3 className="text-h3 text-ink">Message received</h3>
        <p className="measure mx-auto mt-3 text-ink-soft">
          We will reply {ORG_FACTS.supportResponseTime} during working hours. If it is urgent,
          WhatsApp is faster than waiting on email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="jadwal space-y-5 p-6 sm:p-8" noValidate>
      <Field
        label="Your name"
        name="c-name"
        required
        autoComplete="name"
        value={state.name}
        onChange={set("name")}
      />
      <Field
        label="Email address"
        name="c-email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        value={state.email}
        onChange={set("email")}
      />
      <Field
        label="WhatsApp number"
        name="c-whatsapp"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        placeholder="+1 555 123 4567"
        hint="Only if you would rather we reply there."
        value={state.whatsapp}
        onChange={set("whatsapp")}
      />
      <TextareaField
        label="Your question"
        name="c-message"
        required
        rows={5}
        value={state.message}
        onChange={set("message")}
      />
      {status === "error" && (
        <p className="text-[0.875rem] text-error" role="alert">
          That did not send. Please try WhatsApp or email us directly at {SITE.email}.
        </p>
      )}
      <Button type="submit" size="lg" disabled={status === "sending"}>
        {status === "sending" ? "Sending" : "Send message"}
      </Button>
    </form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHero
        label={`Replies ${ORG_FACTS.supportResponseTime} — available 24/7`}
        title="Contact My Quran Guide — We Are Here for You 24/7"
        intro="Have a question about our online Quran classes? Want to know which course is right for you or your child? Or are you ready to book your 2-day free trial? Whatever you need — My Quran Guide is here to help. We are available 24/7 and reply to all messages within 1 to 2 hours."
        breadcrumbs={breadcrumbs}
        actions={
          <>
            <Button
              href={whatsappUrl("Assalamu alaikum, I have a question about your classes.")}
              onClick={() => track("whatsapp_click", { location: "contact_hero" })}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {SITE.whatsappDisplay}
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${SITE.email}`}
              onClick={() => track("email_click", { location: "contact_hero" })}
            >
              {SITE.email}
            </Button>
          </>
        }
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              label="Get in touch"
              title="Get in Touch with My Quran Guide"
              intro="Reach out to us through any of the channels below and our friendly team will get back to you as soon as possible."
            />
            <SpecStrip className="mt-10" columns={1} items={availability} />
            <p className="measure mt-8 text-pretty text-ink-soft">
              Our tutors work to {TUTOR_TIMEZONE_LABEL}, so a message sent late at night in North
              America will usually be answered while you are asleep and waiting for you in the
              morning.
            </p>
            <div className="mt-8">
              <Button to="/free-trial" variant="secondary" withChevron>
                Or go straight to booking a free trial
              </Button>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section tone="warm" ruled>
        <SectionHeading
          label={`${contactFaqs.length} questions`}
          title="Frequently Asked Questions"
        />
        <Faq className="mt-10" items={contactFaqs} group="contact-faq" />
      </Section>
    </>
  );
}
