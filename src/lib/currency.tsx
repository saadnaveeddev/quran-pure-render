import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { COUNTRY_CURRENCY, CURRENCIES, type CurrencyCode } from "@/content/pricing";

const STORAGE_KEY = "mqg.currency";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (code: CurrencyCode) => void;
}

const CurrencyContext = createContext<CurrencyContextValue>({
  currency: "USD",
  setCurrency: () => {},
});

function detectCurrency(): CurrencyCode {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored && stored in CURRENCIES) return stored as CurrencyCode;

  // Region from the browser locale, e.g. "en-GB" → "GB".
  const locale = new Intl.Locale(navigator.language);
  const region = locale.region;
  if (region && COUNTRY_CURRENCY[region]) return COUNTRY_CURRENCY[region];

  return "USD";
}

/**
 * Currency preference, persisted across pages.
 *
 * Always renders USD on the server and on first paint, then corrects after
 * mount — otherwise the markup React produced on the server and the markup it
 * expects in the browser disagree and hydration throws.
 */
export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>("USD");

  useEffect(() => {
    try {
      setCurrencyState(detectCurrency());
    } catch {
      // Locale APIs or storage unavailable: USD is a fine fallback.
    }
  }, []);

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency: (code) => {
        setCurrencyState(code);
        try {
          window.localStorage.setItem(STORAGE_KEY, code);
        } catch {
          // Storage blocked; the choice still applies for this session.
        }
      },
    }),
    [currency],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  return useContext(CurrencyContext);
}
