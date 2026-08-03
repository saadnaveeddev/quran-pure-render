import { CURRENCIES, CURRENCY_CODES, RATES_SET_ON } from "@/content/pricing";
import { useCurrency } from "@/lib/currency";
import { cn } from "@/lib/utils";

export function CurrencyToggle({ className }: { className?: string }) {
  const { currency, setCurrency } = useCurrency();

  const ratesDate = new Date(RATES_SET_ON).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div role="group" aria-label="Display currency" className="flex flex-wrap justify-center">
        {CURRENCY_CODES.map((code) => {
          const active = code === currency;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setCurrency(code)}
              aria-pressed={active}
              className={cn(
                "-ml-px border px-4 py-2 text-[0.875rem] font-semibold transition-colors duration-[120ms] first:ml-0",
                active
                  ? "border-lapis bg-lapis text-white"
                  : "border-rule bg-paper-warm text-ink-soft hover:text-lapis",
              )}
            >
              <span className="sr-only">{CURRENCIES[code].label}</span>
              <span aria-hidden="true">{code}</span>
            </button>
          );
        })}
      </div>
      <p className="text-[0.8125rem] text-ink-soft">
        Fees are set in US dollars. Other currencies use a fixed rate published on {ratesDate}, so
        the amounts here always agree with each other.
      </p>
    </div>
  );
}
