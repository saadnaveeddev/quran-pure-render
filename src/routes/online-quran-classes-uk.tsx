import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { UK_PAGE } from "@/content/geo-pages";

export const Route = createFileRoute("/online-quran-classes-uk")({
  head: () => landingHead(UK_PAGE),
  component: () => <LandingPage page={UK_PAGE} />,
});
