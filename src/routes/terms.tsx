import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/terms")({
  head: () => meta("Terms of use", "DriveConnect terms of use."),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero title="Terms of use" />
      <Section><Callout>The full terms of use text will be added here.</Callout></Section>
    </>
  );
}
