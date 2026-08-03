import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { ADULTS_PAGE } from "@/content/audience-pages";

export const Route = createFileRoute("/online-quran-classes-for-adults")({
  head: () => landingHead(ADULTS_PAGE),
  component: () => <LandingPage page={ADULTS_PAGE} />,
});
