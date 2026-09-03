import { Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { AUDIENCE_PAGE_LIST } from "@/content/audience-pages";
import { GEO_PAGES } from "@/content/geo-pages";

/**
 * Routes visitors to the page written for their actual situation, and gives
 * the audience and country pages a link from the site's strongest page. Both
 * matter: without this the landing pages are orphans that only the footer
 * points at.
 */
export function HomeAudiences() {
  return (
    <Section tone="warm" ruled>
      <SectionHeading
        label="Kids, adults, beginners & new Muslims"
        title="Online Quran Classes for Everyone — No Matter Your Age or Level"
        intro="Kids (5–12), teenagers (13–17), adults, new Muslims and complete beginners each have a starting point — and class times that work in London and in Sydney."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {AUDIENCE_PAGE_LIST.map((page, i) => (
          <Reveal key={page.path} delayMs={i * 60}>
            <Link
              to={page.path}
              className="jadwal group block h-full p-6 transition-colors duration-[120ms] hover:border-lapis"
            >
              <h3 className="text-h3 text-balance text-ink group-hover:text-lapis">
                {page.breadcrumbLabel}
              </h3>
              <p className="mt-2.5 text-pretty text-[0.9375rem] text-ink-soft">{page.heroLabel}</p>
            </Link>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 border-t border-rule pt-8">
        <h3 className="text-caption text-gold-ink">Class times in your own timezone</h3>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {GEO_PAGES.map((page) => (
            <li key={page.path}>
              <Link
                to={page.path}
                className="inline-block rounded-[2px] border border-rule bg-paper px-4 py-2.5 text-[0.9375rem] text-ink-soft transition-colors duration-[120ms] hover:border-lapis hover:text-lapis"
              >
                {page.breadcrumbLabel}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
