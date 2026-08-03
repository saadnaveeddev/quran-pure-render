import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { CANADA_PAGE } from "@/content/geo-pages";

export const Route = createFileRoute("/online-quran-classes-canada")({
  head: () => landingHead(CANADA_PAGE),
  component: () => <LandingPage page={CANADA_PAGE} />,
});
