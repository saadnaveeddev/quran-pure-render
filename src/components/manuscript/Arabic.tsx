import { cn } from "@/lib/utils";

/**
 * Arabic script always carries its own language and direction so screen
 * readers switch voice and the bidi algorithm resolves correctly.
 */
export function Arabic({ children, className }: { children: string; className?: string }) {
  return (
    <span lang="ar" dir="rtl" className={cn("font-arabic align-middle", className)}>
      {children}
    </span>
  );
}

/**
 * A transliterated term paired with its script on first use —
 * e.g. Tajweed (تجويد). An authenticity signal no competitor bothers with.
 */
export function Term({ en, ar, className }: { en: string; ar: string; className?: string }) {
  return (
    <span className={cn("whitespace-nowrap", className)}>
      {en} (<Arabic className="text-[1.25em]">{ar}</Arabic>)
    </span>
  );
}
