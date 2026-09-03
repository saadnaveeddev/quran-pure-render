import { createFileRoute } from "@tanstack/react-router";
import {
  HomeAudiences,
  HomeClosing,
  HomeCourses,
  HomeFaq,
  HomeHero,
  HomeHowItWorks,
  HomePricing,
  HomeTestimonials,
  HomeTutors,
} from "@/components/home";
import { homeFaqs } from "@/content/faqs";
import { COURSE_LIST } from "@/content/courses";
import { SITE } from "@/lib/site";
import { buildFaqSchema, buildItemListSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildPageSeo({
      title: "Online Quran Classes | 2-Day Free Trial - My Quran Guide",
      description:
        "Learn Quran online with certified male & female tutors. Flexible timings for kids, adults & new Muslims. Start your 2-day free trial today - no card needed.",
      path: "/",
      ogImagePath: SITE.heroImagePath,
    });

    return {
      ...seo,
      links: [
        ...seo.links,
        { rel: "preload", as: "image", href: SITE.heroImagePath, fetchpriority: "high" },
      ],
      scripts: [
        buildFaqSchema(homeFaqs),
        buildItemListSchema(
          COURSE_LIST.map((course) => ({
            name: course.h1,
            path: course.path,
            description: course.summary,
          })),
        ),
      ],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeCourses />
      <HomeHowItWorks />
      <HomeTutors />
      <HomeTestimonials />
      <HomeAudiences />
      <HomePricing />
      <HomeFaq />
      <HomeClosing />
    </>
  );
}
