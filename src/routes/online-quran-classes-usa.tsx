import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { USA_PAGE } from "@/content/geo-pages";

export const Route = createFileRoute("/online-quran-classes-usa")({
  head: () => landingHead(USA_PAGE),
  component: () => <LandingPage page={USA_PAGE} />,
});
