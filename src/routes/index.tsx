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
      title: "Online Quran Classes for Kids & Adults | My Quran Guide",
      description:
        "One-to-one online Quran classes with certified male and female tutors. Noorani Qaida, Tajweed, Hifz and Arabic, from age five. Two free trial classes.",
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
