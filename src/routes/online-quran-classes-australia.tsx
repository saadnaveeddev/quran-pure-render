import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { AUSTRALIA_PAGE } from "@/content/geo-pages";

export const Route = createFileRoute("/online-quran-classes-australia")({
  head: () => landingHead(AUSTRALIA_PAGE),
  component: () => <LandingPage page={AUSTRALIA_PAGE} />,
});
