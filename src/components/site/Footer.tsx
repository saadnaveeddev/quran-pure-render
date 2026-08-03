import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { RosetteDivider } from "@/components/manuscript/Rosette";
import { COURSE_LIST } from "@/content/courses";
import { ORG_FACTS, SITE, whatsappUrl } from "@/lib/site";
import { track } from "@/lib/analytics";

/**
 * The footer doubles as the site's internal linking layer.
 *
 * Every course, audience and country page is reachable from every page, which
 * is what lets link equity actually circulate rather than pooling on the home
 * page. Grouped under real headings, not a single undifferentiated list.
 */

const audiencePages = [
  { to: "/online-quran-classes-for-kids", label: "Classes for kids" },
  { to: "/online-quran-classes-for-adults", label: "Classes for adults" },
  { to: "/quran-classes-for-new-muslims", label: "Classes for new Muslims" },
];

const countryPages = [
  { to: "/online-quran-classes-usa", label: "United States" },
  { to: "/online-quran-classes-uk", label: "United Kingdom" },
  { to: "/online-quran-classes-canada", label: "Canada" },
  { to: "/online-quran-classes-australia", label: "Australia" },
];

const companyPages = [
  { to: "/about", label: "About us" },
  { to: "/tutors", label: "Our tutors" },
  { to: "/fee-schedule", label: "Fees" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ to: string; label: string }>;
}) {
  return (
    <div>
      <h2 className="text-caption text-gold">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="text-[0.9375rem] text-paper/75 underline-offset-4 transition-colors duration-[120ms] hover:text-paper hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_repeat(4,minmax(0,1fr))] lg:gap-10">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-pretty text-[0.9375rem] leading-relaxed text-paper/75">
              One-to-one Quran teaching for families outside the Muslim world, with tutors in{" "}
              {ORG_FACTS.tutorsBasedIn} and a support office in {ORG_FACTS.officeBasedIn}.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp_click", { location: "footer" })}
              className="mt-6 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-paper underline-offset-4 hover:underline"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {SITE.whatsappDisplay}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              onClick={() => track("email_click", { location: "footer" })}
              className="mt-2 block text-[0.9375rem] text-paper/75 underline-offset-4 hover:text-paper hover:underline"
            >
              {SITE.email}
            </a>
            <p className="mt-4 text-[0.8125rem] text-paper/55">
              Replies {ORG_FACTS.supportResponseTime} during working hours.
            </p>
          </div>

          <FooterColumn
            title="Courses"
            links={COURSE_LIST.map((c) => ({ to: c.path, label: c.navLabel }))}
          />
          <FooterColumn title="Who we teach" links={audiencePages} />
          <FooterColumn title="By country" links={countryPages} />
          <FooterColumn title="Academy" links={companyPages} />
        </div>

        <RosetteDivider className="mt-14 opacity-60" />

        <div className="mt-8 flex flex-col gap-4 text-[0.8125rem] text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link
                to="/privacy-policy"
                className="underline-offset-4 hover:text-paper hover:underline"
              >
                Privacy policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms-conditions"
                className="underline-offset-4 hover:text-paper hover:underline"
              >
                Terms and conditions
              </Link>
            </li>
            <li>
              <a
                href={SITE.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-paper hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={SITE.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="underline-offset-4 hover:text-paper hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
