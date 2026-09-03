import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { BEGINNERS_PAGE } from "@/content/audience-pages";

export const Route = createFileRoute("/online-quran-classes-for-beginners")({
  head: () => landingHead(BEGINNERS_PAGE),
  component: () => <LandingPage page={BEGINNERS_PAGE} />,
});
