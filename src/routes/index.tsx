import { createFileRoute } from "@tanstack/react-router";
import {
  HomeCoursesSection,
  HomeFaqSection,
  HomeFinalCtaSection,
  HomeHeroSection,
  HomeHowItWorksSection,
  HomeTestimonialSection,
  HomeWhyChooseSection,
} from "@/components/home";
import { homeFaqs } from "@/content/faqs";
import { buildFaqSchema, buildPageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => {
    const seo = buildPageSeo({
      title: "Online Quran Classes | Learn Quran Online — My Quran Guide",
      description:
        "Start your 2-day free trial today! My Quran Guide offers online Quran classes for kids, adults & new Muslims with certified male & female tutors. Flexible timings, all levels. Enroll now!",
      path: "/",
      ogImagePath: "/hero-quran.svg",
    });

    return {
      ...seo,
      links: [...seo.links, { rel: "preload", as: "image", href: "/hero-quran.svg" }],
      scripts: [buildFaqSchema([...homeFaqs])],
    };
  },
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <HomeCoursesSection />
      <HomeWhyChooseSection />
      <HomeHowItWorksSection />
      <HomeTestimonialSection />
      <HomeFaqSection items={homeFaqs} />
      <HomeFinalCtaSection />
    </>
  );
}
