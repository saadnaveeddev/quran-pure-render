import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { Faq } from "@/components/site/Disclosure";
import { ChipGroup, DataTable } from "@/components/site/Spec";
import { CurrencyToggle } from "@/components/site/CurrencyToggle";
import { RosetteList } from "@/components/manuscript/Rosette";
import { COURSE_LIST } from "@/content/courses";
import { feeScheduleFaqs } from "@/content/faqs";
import {
  PACKAGES,
  PAYMENT_METHODS,
  REFUND_POLICY,
  SIBLING_DISCOUNT_PERCENT,
  formatPrice,
} from "@/content/pricing";
import { useCurrency } from "@/lib/currency";
import { SITE, whatsappUrl } from "@/lib/site";
import {
  buildAggregateOfferSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildPageSeo,
} from "@/lib/seo";
import { cn } from "@/lib/utils";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Fees", to: "/fee-schedule" },
];

const monthlyPrices = PACKAGES.map((p) => p.usdPerMonth);

export const Route = createFileRoute("/fee-schedule")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Quran Class Fees & Pricing | My Quran Guide",
      description:
        "Fixed monthly and per-class fees for online Quran classes, shown in USD, GBP, EUR, CAD and AUD. Five per cent sibling discount, no registration fee.",
      path: "/fee-schedule",
    }),
    scripts: [
      buildFaqSchema(feeScheduleFaqs),
      buildAggregateOfferSchema({
        lowUsd: Math.min(...monthlyPrices),
        highUsd: Math.max(...monthlyPrices),
        offerCount: PACKAGES.length,
      }),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: FeeSchedulePage,
});

function FeeSchedulePage() {
  const { currency } = useCurrency();

  const siblingRows = [
    ["First child", "Full fee"],
    ["Second child", `${SIBLING_DISCOUNT_PERCENT}% off`],
    ["Third child", `${SIBLING_DISCOUNT_PERCENT}% off`],
    ["Fourth child and beyond", `${SIBLING_DISCOUNT_PERCENT}% off each`],
  ];

  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        label="Fixed prices, no registration fee"
        title="What online Quran classes cost"
        intro="Every figure on this page is a fixed number rather than a range, because a range tells you nothing you can budget against. Prices are set in US dollars and converted at a published fixed rate."
        actions={
          <Button to="/free-trial" withChevron>
            Start with two free classes
          </Button>
        }
      />

      <Section>
        <CurrencyToggle />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={cn("jadwal flex flex-col p-7", pkg.featured && "ring-1 ring-gold")}
            >
              {pkg.featured && (
                <p className="text-caption mb-3 text-gold-ink">Most families choose this</p>
              )}
              <h2 className="text-h3 text-ink">{pkg.name}</h2>
              <p className="text-data mt-5 text-3xl text-ink">
                {formatPrice(pkg.usdPerMonth, currency)}
                <span className="text-[0.9375rem] font-normal text-ink-soft"> a month</span>
              </p>
              <dl className="mt-6 space-y-1.5 border-t border-rule pt-5 text-[0.875rem]">
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Days a week</dt>
                  <dd className="text-data text-ink">{pkg.daysPerWeek}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Classes a month</dt>
                  <dd className="text-data text-ink">{pkg.classesPerMonth}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-ink-soft">Per class</dt>
                  <dd className="text-data text-ink">
                    {formatPrice(pkg.usdPerMonth / pkg.classesPerMonth, currency, "half")}
                  </dd>
                </div>
              </dl>
              <p className="mt-5 text-pretty text-[0.875rem] text-ink-soft">{pkg.bestFor}</p>
              <div className="mt-auto pt-6">
                <Button
                  to="/free-trial"
                  variant={pkg.featured ? "primary" : "secondary"}
                  className="w-full"
                >
                  Start free
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Genuinely tabular: course against currency. Kept as a table. */}
      <Section tone="warm" ruled>
        <SectionHeading
          label="Pay as you go"
          title="Per-class fees by course"
          intro="No monthly commitment. The same fee applies whether the session is 30 or 45 minutes."
          align="left"
        />
        <DataTable
          className="mt-10"
          caption="Per-class fee for each course"
          head={["Course", `Per class (${currency})`]}
          rows={COURSE_LIST.map((course) => [
            course.navLabel,
            formatPrice(course.usdPerClass, currency, "half"),
          ])}
        />
      </Section>

      <Section ruled>
        <SectionHeading
          label={`${SIBLING_DISCOUNT_PERCENT}% per additional child`}
          title="Siblings discount"
          intro="Tell us during enrolment that you are signing up more than one child and the discount is applied automatically to every child after the first."
          align="left"
        />
        <DataTable
          className="mt-10 max-w-xl"
          caption="Discount applied per child"
          head={["Student", "Discount"]}
          rows={siblingRows}
        />
      </Section>

      <Section tone="warm" ruled>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading label="Paying" title="How you can pay" align="left" />
            <ChipGroup className="mt-8" items={[...PAYMENT_METHODS]} label="Payment methods" />
            <p className="measure mt-6 text-[0.9375rem] text-ink-soft">
              Monthly in advance, weekly, or per class — whichever suits. You can change between
              them at any time with no penalty.
            </p>
          </div>
          <div>
            <SectionHeading label="If it doesn't work out" title="Refund policy" align="left" />
            <RosetteList
              className="mt-8 text-[0.9375rem] text-ink-soft"
              items={[...REFUND_POLICY]}
            />
            <p className="mt-6 text-[0.9375rem] text-ink-soft">
              Refund questions go to{" "}
              <a
                href={`mailto:${SITE.email}`}
                className="text-lapis underline-offset-4 hover:underline"
              >
                {SITE.email}
              </a>{" "}
              and are answered within 24 to 48 hours.
            </p>
          </div>
        </div>
      </Section>

      <Section ruled>
        <SectionHeading label="Before you pay anything" title="Questions about fees" align="left" />
        <div className="mt-10">
          <Faq items={feeScheduleFaqs} group="fees-faq" className="mx-0 max-w-none" />
        </div>
      </Section>

      <Section tone="ink">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-h2 text-balance text-paper">
            Not sure which package fits? Get a personalised quote
          </h2>
          <p className="mt-5 text-pretty text-body-l text-paper/80">
            Tell us how many children, which courses and how many days a week, and we will send back
            one figure — including the sibling discount — with no obligation attached to it.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button
              href={whatsappUrl(
                "Assalamu alaikum — could you send me a fee quote? Students and courses: ",
              )}
              size="lg"
              withChevron
            >
              Get a personalised quote
            </Button>
            <Button
              to="/free-trial"
              variant="secondary"
              size="lg"
              className="border-paper/35 text-paper hover:bg-paper/10"
            >
              Or start with two free classes
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
