import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { Button } from "@/components/site/Button";
import { Toaster } from "@/components/ui/sonner";
import { CurrencyProvider } from "@/lib/currency";
import { COURSE_LIST } from "@/content/courses";
import { ANALYTICS, SITE, absoluteUrl } from "@/lib/site";
import { buildOrganizationSchema, buildWebsiteSchema } from "@/lib/seo";

type ScriptTag = { src?: string; async?: boolean; children?: string; type?: string };

/** Env-gated analytics. Nothing is emitted unless real IDs are configured. */
function analyticsScripts(): ScriptTag[] {
  const scripts: ScriptTag[] = [];
  if (ANALYTICS.gaId) {
    scripts.push(
      { src: `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.gaId}`, async: true },
      {
        children: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ANALYTICS.gaId}',{anonymize_ip:true});`,
      },
    );
  }
  if (ANALYTICS.metaPixelId) {
    scripts.push({
      children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${ANALYTICS.metaPixelId}');fbq('track','PageView');`,
    });
  }
  return scripts;
}

function NotFoundComponent() {
  return (
    <div className="mx-auto w-full max-w-3xl px-5 py-24 sm:px-8">
      <h1 className="text-display-l text-ink">We can't find that page</h1>
      <p className="measure mt-5 text-body-l text-ink-soft">
        The link may be out of date, or the page may have moved during our recent rebuild.
        Everything we teach is listed below.
      </p>

      <h2 className="text-h3 mt-12 border-t border-rule pt-8 text-ink">Our courses</h2>
      <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
        {COURSE_LIST.map((course) => (
          <li key={course.key}>
            <Link
              to={course.path}
              className="text-[0.9375rem] text-lapis underline-offset-4 hover:underline"
            >
              {course.navLabel}
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-wrap gap-3">
        <Button to="/" withChevron>
          Back to the home page
        </Button>
        <Button to="/free-trial" variant="secondary">
          Book a free trial class
        </Button>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-24 sm:px-8">
      <h1 className="text-h2 text-ink">This page didn't load</h1>
      <p className="measure mt-4 text-ink-soft">
        Something went wrong at our end. Refreshing usually fixes it.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button
          onClick={() => {
            router.invalidate();
            reset();
          }}
        >
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Go to the home page
        </Button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { title: "Online Quran Classes for Kids & Adults | My Quran Guide" },
      {
        name: "description",
        content:
          "One-to-one online Quran classes with certified male and female tutors. Noorani Qaida, Tajweed, Hifz and Arabic, from age five. Two free trial classes.",
      },
      { name: "author", content: SITE.name },
      { name: "publisher", content: SITE.name },
      { name: "theme-color", content: SITE.themeColor },
      { name: "format-detection", content: "telephone=no" },
      ...(ANALYTICS.gscVerification
        ? [{ name: "google-site-verification", content: ANALYTICS.gscVerification }]
        : []),
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: SITE.twitterHandle },
      { name: "twitter:creator", content: SITE.twitterHandle },
      { property: "og:image", content: absoluteUrl(SITE.defaultOgImagePath) },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: SITE.faviconPath },
      { rel: "apple-touch-icon", href: SITE.faviconPath },
      // Only the two subsets needed for first paint. The rest are fetched
      // on demand by the @font-face unicode-range rules in styles.css.
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/instrument-sans-var-latin.woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "preload",
        as: "font",
        type: "font/woff2",
        href: "/fonts/gentium-book-plus-400-latin.woff2",
        crossOrigin: "anonymous",
      },
    ],
    scripts: [buildOrganizationSchema(), buildWebsiteSchema(), ...analyticsScripts()],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
        <a
          href="#main-content"
          className="sr-only z-[100] bg-lapis px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4"
        >
          Skip to main content
        </a>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
            <Outlet />
          </main>
          <Footer />
        </div>
        <StickyCta />
        <Toaster />
      </CurrencyProvider>
    </QueryClientProvider>
  );
}
