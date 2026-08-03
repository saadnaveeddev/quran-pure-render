import { Link, useRouterState } from "@tanstack/react-router";
import { SITE, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";
import { WhatsAppIcon } from "./WhatsAppIcon";

/** Pages where the persistent ask would just repeat what's already on screen. */
const SUPPRESSED_PATHS = new Set(["/free-trial", "/thank-you"]);

const PREFILL = `Assalamu alaikum — I'd like to book a free trial class with ${SITE.name}.`;

/**
 * The site's one persistent CTA: a bar on mobile, a single WhatsApp button on
 * desktop. This exists so that individual pages can carry exactly one
 * contextual CTA instead of stacking three near-identical asks.
 */
export function StickyCta() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  if (SUPPRESSED_PATHS.has(pathname)) return null;

  return (
    <>
      {/* Mobile: bottom bar, clear of the home indicator. */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper-warm/95 backdrop-blur md:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <div className="flex items-stretch gap-2 p-2">
          <Link
            to="/free-trial"
            className="flex flex-1 items-center justify-center rounded-[2px] bg-lapis px-4 py-3 text-[0.9375rem] font-semibold text-white"
          >
            Book a free trial
          </Link>
          <a
            href={whatsappUrl(PREFILL)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { location: "sticky_bar" })}
            className="flex items-center justify-center gap-2 rounded-[2px] border border-ink/25 px-4 py-3 text-[0.9375rem] font-semibold text-ink"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>
      </div>
      {/* Keeps the bar from covering the end of the page. */}
      <div aria-hidden="true" className="h-[68px] md:hidden" />

      {/* Desktop: floating WhatsApp button. */}
      <a
        href={whatsappUrl(PREFILL)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message My Quran Guide on WhatsApp"
        onClick={() => track("whatsapp_click", { location: "desktop_float" })}
        className="shadow-lift fixed bottom-6 right-6 z-40 hidden h-14 w-14 items-center justify-center rounded-[2px] bg-lapis text-white transition-colors duration-[120ms] hover:bg-lapis-lift md:flex"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
    </>
  );
}
