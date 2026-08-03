import { createFileRoute } from "@tanstack/react-router";
import { LandingPage, landingHead } from "@/components/site/LandingPage";
import { NEW_MUSLIMS_PAGE } from "@/content/audience-pages";

export const Route = createFileRoute("/quran-classes-for-new-muslims")({
  head: () => landingHead(NEW_MUSLIMS_PAGE),
  component: () => <LandingPage page={NEW_MUSLIMS_PAGE} />,
});
