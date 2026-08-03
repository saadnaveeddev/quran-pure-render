import { Section, SectionHeading } from "@/components/site/Section";
import { Button } from "@/components/site/Button";
import { CurrencyToggle } from "@/components/site/CurrencyToggle";
import { PACKAGES, formatPrice } from "@/content/pricing";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

/** The three packages most families choose. The full five are on /fee-schedule. */
const PREVIEW_IDS = ["standard", "popular", "intensive"];

export function HomePricing() {
  const { currency } = useCurrency();
  const packages = PACKAGES.filter((p) => PREVIEW_IDS.includes(p.id));

  return (
    <Section ruled>
      <SectionHeading
        label="Fixed monthly prices"
        title="You will know the exact figure before you enrol"
        intro="No registration fee, no materials fee, no minimum term. Five per cent off for every additional child from the same family."
      />

      <CurrencyToggle className="mt-9" />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={cn("jadwal flex flex-col p-7", pkg.featured && "ring-1 ring-gold")}
          >
            {pkg.featured && (
              <p className="text-caption mb-3 text-gold-ink">Most families choose this</p>
            )}
            <h3 className="text-h3 text-ink">{pkg.name}</h3>
            <p className="mt-1 text-[0.9375rem] text-ink-soft">
              {pkg.daysPerWeek} days a week · {pkg.classesPerMonth} classes a month
            </p>
            <p className="text-data mt-6 text-3xl text-ink">
              {formatPrice(pkg.usdPerMonth, currency)}
              <span className="text-[0.9375rem] font-normal text-ink-soft"> a month</span>
            </p>
            <p className="mt-4 text-pretty text-[0.875rem] text-ink-soft">{pkg.bestFor}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button to="/fee-schedule" variant="secondary" withChevron>
          See all five packages and per-class fees
        </Button>
      </div>
    </Section>
  );
}
