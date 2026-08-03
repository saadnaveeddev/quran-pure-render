/**
 * Pricing.
 *
 * Every fee is stored once, in USD, as a fixed number. Other currencies are
 * derived from that single figure at a fixed, published rate — which is what
 * makes the USD and GBP columns internally consistent instead of drifting
 * apart row by row. Ranges are deliberately gone: "$35–$45" reads as
 * "we'll decide what to charge you".
 */

export type CurrencyCode = "USD" | "GBP" | "EUR" | "CAD" | "AUD";

export interface Currency {
  code: CurrencyCode;
  symbol: string;
  label: string;
  /** Units of this currency per 1 USD. */
  rate: number;
}

/** Review quarterly; the published date is shown next to the currency toggle. */
export const RATES_SET_ON = "2026-08-01";

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  USD: { code: "USD", symbol: "$", label: "US dollar", rate: 1 },
  GBP: { code: "GBP", symbol: "£", label: "British pound", rate: 0.79 },
  EUR: { code: "EUR", symbol: "€", label: "Euro", rate: 0.92 },
  CAD: { code: "CAD", symbol: "CA$", label: "Canadian dollar", rate: 1.37 },
  AUD: { code: "AUD", symbol: "A$", label: "Australian dollar", rate: 1.52 },
};

export const CURRENCY_CODES = Object.keys(CURRENCIES) as CurrencyCode[];

/** Country → default currency, used to preselect the toggle. */
export const COUNTRY_CURRENCY: Record<string, CurrencyCode> = {
  GB: "GBP",
  IE: "EUR",
  DE: "EUR",
  FR: "EUR",
  NL: "EUR",
  ES: "EUR",
  IT: "EUR",
  CA: "CAD",
  AU: "AUD",
  NZ: "AUD",
};

function roundTo(value: number, step: number): number {
  return Math.round(value / step) * step;
}

/** Per-class fees land on a clean half unit; monthly fees on a whole unit. */
export function convert(usd: number, code: CurrencyCode, granularity: "half" | "whole"): number {
  const converted = usd * CURRENCIES[code].rate;
  return roundTo(converted, granularity === "half" ? 0.5 : 1);
}

export function formatPrice(
  usd: number,
  code: CurrencyCode,
  granularity: "half" | "whole" = "whole",
): string {
  const value = convert(usd, code, granularity);
  const decimals = Number.isInteger(value) ? 0 : 2;
  return `${CURRENCIES[code].symbol}${value.toFixed(decimals)}`;
}

export interface Package {
  id: string;
  name: string;
  daysPerWeek: number;
  classesPerMonth: number;
  /** Canonical monthly fee in USD. */
  usdPerMonth: number;
  bestFor: string;
  featured?: boolean;
}

export const PACKAGES: ReadonlyArray<Package> = [
  {
    id: "starter",
    name: "Starter",
    daysPerWeek: 2,
    classesPerMonth: 8,
    usdPerMonth: 40,
    bestFor: "Busy schedules and steady, unhurried progress",
  },
  {
    id: "standard",
    name: "Standard",
    daysPerWeek: 3,
    classesPerMonth: 12,
    usdPerMonth: 52,
    bestFor: "The minimum we recommend for consistent improvement",
  },
  {
    id: "popular",
    name: "Regular",
    daysPerWeek: 4,
    classesPerMonth: 16,
    usdPerMonth: 70,
    bestFor: "Most students — enough contact time to build real fluency",
    featured: true,
  },
  {
    id: "intensive",
    name: "Intensive",
    daysPerWeek: 5,
    classesPerMonth: 20,
    usdPerMonth: 88,
    bestFor: "Hifz students and anyone working to a deadline",
  },
  {
    id: "full-week",
    name: "Full week",
    daysPerWeek: 6,
    classesPerMonth: 24,
    usdPerMonth: 105,
    bestFor: "Full-time Hifz and accelerated Arabic study",
  },
];

export const SIBLING_DISCOUNT_PERCENT = 5;

export const PAYMENT_METHODS = ["PayPal", "Bank transfer", "Wise", "Debit or credit card"] as const;

export const REFUND_POLICY = [
  "A class missed because of a tutor issue is replaced at no extra cost.",
  "Cancel after enrolling and unused classes are refunded pro rata.",
  "Refund requests are accepted within 7 days of the billing date.",
  "Free trial classes are not refundable — they already cost nothing.",
  "Refunds are returned to the original payment method within 5–7 business days.",
] as const;
