import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { KIDS_PAGE } from "@/content/audience-pages";

export const Route = createFileRoute("/online-quran-classes-for-kids")({
  head: () => landingHead(KIDS_PAGE),
  component: () => <LandingPage page={KIDS_PAGE} />,
});
