import { createFileRoute } from "@tanstack/react-router";
import { PageHero, DataTable } from "@/components/site/PageHero";
import { Section, SectionHeading } from "@/components/site/Section";
import { CTAButton } from "@/components/site/CTAButton";
import { FAQ } from "@/components/site/FAQ";
import { Check } from "lucide-react";
import { feeScheduleFaqs } from "@/content/faqs";
import { buildBreadcrumbSchema, buildFaqSchema, buildPageSeo } from "@/lib/seo";
import { SITE } from "@/lib/site";

const breadcrumbs = [
  { label: "Home", to: "/" },
  { label: "Fee Schedule", to: "/fee-schedule" },
];

export const Route = createFileRoute("/fee-schedule")({
  head: () => ({
    ...buildPageSeo({
      title: "Online Quran Classes Fee Schedule | Affordable Pricing — My Quran Guide",
      description:
        "View the full fee schedule for My Quran Guide online Quran classes. Affordable monthly packages and per class pricing in USD & GBP. Siblings discount available. Start with 2 days free trial!",
      path: "/fee-schedule",
    }),
    scripts: [
      buildFaqSchema([...feeScheduleFaqs]),
      buildBreadcrumbSchema(breadcrumbs.map((b) => ({ name: b.label, path: b.to }))),
    ],
  }),
  component: FeeSchedulePage,
});

const highlights = [
  { emoji: "💰", title: "Affordable & Transparent Pricing", body: "No hidden charges. No registration fees. What you see is what you pay — clear, honest, and affordable." },
  { emoji: "🔄", title: "Flexible Payment — Monthly or Per Class", body: "Choose between a monthly package or pay per class — whichever suits your budget and schedule best." },
  { emoji: "👨‍👩‍👧", title: "5% Siblings Discount", body: "Enroll more than one child from the same family and receive a 5% discount on each additional sibling's fees." },
  { emoji: "💳", title: "All Payment Methods Accepted", body: "Pay easily via PayPal, Bank Transfer, Wise, or any other convenient payment method. Flexible payment timing available." },
  { emoji: "🎁", title: "2 Days Free Trial — Always Free", body: "Every new student starts with 2 completely free trial classes before any payment is required." },
];

const packages = [
  { name: "STARTER PACKAGE — 2 Days/Week", usd: "$35–$45 / month", gbp: "£29–£35 / month", days: "2 days per week", classes: "Approx. 8 classes/month" },
  { name: "STANDARD PACKAGE — 3 Days/Week", usd: "$45–$60 / month", gbp: "£36–£48 / month", days: "3 days per week", classes: "Approx. 12 classes/month" },
  { name: "POPULAR PACKAGE — 4 Days/Week", usd: "$60–$80 / month", gbp: "£48–£64 / month", days: "4 days per week", classes: "Approx. 16 classes/month", featured: true },
  { name: "INTENSIVE PACKAGE — 5 Days/Week", usd: "$75–$100 / month", gbp: "£60–£80 / month", days: "5 days per week", classes: "Approx. 20 classes/month" },
  { name: "FULL WEEK PACKAGE — 6 Days/Week", usd: "$90–$120 / month", gbp: "£72–£96 / month", days: "6 days per week", classes: "Approx. 24 classes/month" },
];

const perClass = [
  ["Noorani Qaida", "$6 – $8 per class", "£4 – £6 per class"],
  ["Quran Recitation (Reading)", "$6 – $8 per class", "£4 – £6 per class"],
  ["Tajweed Classes", "$6 – $8 per class", "£4 – £6 per class"],
  ["Hifz Program", "$6 – $8 per class", "£6 – £10 per class"],
  ["Islamic Studies", "$6 – $8 per class", "£5 – £7 per class"],
  ["Arabic Language", "$10 – $15 per class", "£8 – £12 per class"],
  ["Female Quran Classes", "$6 – $8 per class", "£4 – £6 per class"],
];

const siblings = [
  ["1st Child", "Full Standard Fee — No Discount"],
  ["2nd Child (Sibling)", "5% Discount Applied"],
  ["3rd Child (Sibling)", "5% Discount Applied"],
  ["4th Child & Above", "5% Discount Applied per Child"],
];

const payment = [
  ["PayPal", "Fast, secure and accepted worldwide"],
  ["Bank Transfer", "Direct bank transfer available"],
  ["Wise (TransferWise)", "Low-fee international transfers"],
  ["Other Methods", "Contact us for alternative options"],
  ["Payment Timing", "Flexible — Monthly advance or per class"],
  ["Currency", "USD ($) and GBP (£) both accepted"],
];

const refundPoints = [
  "If a class is missed due to a tutor issue — a replacement class is provided at no extra cost",
  "If a student wishes to cancel after enrollment — unused classes are refunded on a pro-rata basis",
  "Refund requests must be submitted within 7 days of the billing date",
  "Free trial classes are non-refundable as they are already provided at zero cost",
  "Refunds are processed within 5-7 business days via the original payment method",
];

function FeeSchedulePage() {
  return (
    <>
      <PageHero title="Fee Schedule" breadcrumbs={breadcrumbs} />

      <Section>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted-foreground">
          All fees are available in both USD ($) and GBP (£). A siblings discount of 5% is available for families enrolling more than one child. And remember — every new student starts with a 2-day free trial at absolutely no cost.
        </p>
        <div className="mt-14">
          <SectionHeading title="What Makes My Quran Guide Fees Different" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <span className="text-2xl">{h.emoji}</span>
                <h3 className="mt-3 text-lg text-foreground">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Monthly Packages"
          title="Choose Your Monthly Plan — USD ($) & GBP (£)"
          intro="All monthly packages include certified male or female tutor, one-on-one or group class, flexible timings, and classes via Zoom, Skype or Google Meet. Class duration: 30 or 45 minutes — student chooses."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={
                "relative flex flex-col rounded-3xl border p-7 shadow-soft " +
                (p.featured
                  ? "border-gold/60 bg-card ring-2 ring-gold/40"
                  : "border-border bg-card")
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">{p.name}</h3>
              <div className="mt-4">
                <p className="font-display text-2xl text-foreground">{p.usd}</p>
                <p className="mt-1 text-lg text-muted-foreground">{p.gbp}</p>
                <p className="mt-1 text-xs text-muted-foreground">per month</p>
              </div>
              <dl className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                <div><dt className="font-semibold text-foreground">Days Per Week:</dt> <dd className="inline">{p.days}</dd></div>
                <div><dt className="font-semibold text-foreground">Total Classes/Month:</dt> <dd className="inline">{p.classes}</dd></div>
                <div><dt className="font-semibold text-foreground">Class Duration:</dt> <dd className="inline">30 or 45 minutes — Student Chooses</dd></div>
              </dl>
              <div className="mt-auto pt-6">
                <CTAButton to="/free-trial" variant={p.featured ? "gold" : "primary"} className="w-full">
                  Start with 2 Days Free Trial
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Per Class Fees"
          title="Pay Per Class — Course-Wise Pricing"
          intro="Prefer flexibility? Pay per class with no monthly commitment. Fees vary by course as shown below:"
        />
        <div className="mt-10">
          <DataTable head={["Course", "Per Class (USD)", "Per Class (GBP)"]} rows={perClass} />
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Note: Exact per class fee is confirmed upon enrollment based on course, duration, and tutor availability. Contact us for a personalized quote.
        </p>
        <div className="mt-6 text-center">
          <CTAButton to="/contact" variant="outline">Contact Us for a Personalized Fee Quote</CTAButton>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Siblings Discount"
          title="5% Discount for Every Additional Sibling"
          intro="At My Quran Guide, we support Muslim families in giving every child the gift of Quran education. That is why we offer a 5% siblings discount on the fees of every additional child enrolled from the same family."
        />
        <div className="mt-10">
          <DataTable head={["Student", "Discount"]} rows={siblings} />
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          To claim the siblings discount, simply mention during enrollment that you are enrolling multiple children from the same family. Our team will apply the discount automatically.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Payment Methods"
          title="Easy & Flexible Payment Options"
          intro="My Quran Guide accepts all major payment methods to make paying for your classes as easy as possible:"
        />
        <div className="mt-10">
          <DataTable head={["Payment Method", "Details"]} rows={payment} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Refund Policy"
          title="Our Refund Policy — Fair & Transparent"
          intro="My Quran Guide has a clear and fair refund policy to protect every student and family:"
        />
        <ul className="mx-auto mt-10 max-w-3xl space-y-4">
          {refundPoints.map((p, i) => (
            <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                <Check className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-[0.95rem] leading-relaxed text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-muted-foreground">
          For any refund queries, contact us at {SITE.email} and we will resolve your concern within 24-48 hours.
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions About Fees & Pricing"
        />
        <div className="mt-12">
          <FAQ items={feeScheduleFaqs} />
        </div>
      </Section>

      <Section tone="emerald">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            inverted
            title="Start with 2 Days Free — No Payment Until You Are Ready"
            intro="Before paying anything, every new student at My Quran Guide gets 2 completely free trial classes. Experience our certified tutors, flexible schedule, and quality teaching — then choose the plan that works best for you. Affordable, transparent, and always flexible."
          />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/free-trial" variant="gold" size="lg">Book My 2-Day Free Trial — 100% Free</CTAButton>
            <CTAButton to="/contact" size="lg" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
              Contact Us for a Personalized Fee Quote
            </CTAButton>
          </div>
        </div>
      </Section>
    </>
  );
}
