import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { Rosette, RosetteDivider } from "@/components/manuscript/Rosette";
import { COURSE_LIST } from "@/content/courses";
import { buildPageSeo } from "@/lib/seo";
import { ORG_FACTS, SITE, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";

/**
 * Post-submission confirmation.
 *
 * A distinct URL rather than an in-place state swap, so the conversion is a
 * real pageview that any analytics or ads account can key a goal off. It is
 * noindexed because it has no standalone search value and would otherwise
 * compete with /free-trial.
 */

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    ...buildPageSeo({
      title: "Request received | My Quran Guide",
      description:
        "Your free trial request has reached us. We will confirm your tutor and class time shortly.",
      path: "/thank-you",
      noindex: true,
    }),
  }),
  component: ThankYouPage,
});

const next = [
  {
    title: "Check WhatsApp first",
    body: `We reply ${ORG_FACTS.supportResponseTime} during working hours. The message names your tutor and gives the class time converted to your own timezone.`,
  },
  {
    title: "Then check your email",
    body: "The joining link and a short note on what to have ready arrive by email. If it is not there within a day, look in your spam folder before assuming we have not written.",
  },
  {
    title: "Have the Qaida or mushaf to hand",
    body: "Any copy will do, printed or on a screen. The tutor can also share theirs on screen if you do not have one yet.",
  },
];

function ThankYouPage() {
  return (
    <>
      <Section tone="warm" className="text-center">
        <Rosette className="mx-auto h-14 w-14 text-gold" animate />
        <h1 className="text-display-l mt-8 text-balance text-ink">Your request has reached us</h1>
        <p className="measure mx-auto mt-5 text-pretty text-body-l text-ink-soft">
          Nothing else is needed from you right now. A member of the team is reading your answers
          and will come back with a named tutor and a specific time.
        </p>
        <RosetteDivider className="mx-auto mt-12 max-w-md" />
      </Section>

      <Section>
        <ol className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-3">
          {next.map((n) => (
            <li key={n.title}>
              <h2 className="text-h3 text-ink">{n.title}</h2>
              <p className="mt-2 text-pretty text-ink-soft">{n.body}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-14 max-w-2xl border border-rule bg-paper-warm p-6 text-center sm:p-8">
          <h2 className="text-h3 text-ink">Need it sooner, or want to change something?</h2>
          <p className="mt-2 text-pretty text-ink-soft">
            Message us directly and we will pick it up straight away.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button
              href={whatsappUrl("Assalamu alaikum, I have just submitted a free trial request.")}
              onClick={() => track("whatsapp_click", { location: "thank_you" })}
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp {SITE.whatsappDisplay}
            </Button>
            <Button
              variant="secondary"
              href={`mailto:${SITE.email}`}
              onClick={() => track("email_click", { location: "thank_you" })}
            >
              {SITE.email}
            </Button>
          </div>
        </div>
      </Section>

      <Section tone="warm" ruled>
        <h2 className="text-h2 text-center text-balance text-ink">
          While you wait, read about the course
        </h2>
        <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2.5">
          {COURSE_LIST.map((c) => (
            <li key={c.key}>
              <Button variant="secondary" to={c.path}>
                {c.navLabel}
              </Button>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
