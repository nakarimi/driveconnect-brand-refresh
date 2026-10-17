import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/gdpr")({
  head: () => meta("GDPR", "DriveConnect gdpr."),
  component: GdprPage,
});

function GdprPage() {
  return (
    <>
      <PageHero title="GDPR" />
      <Section><Callout>The full gdpr text will be added here.</Callout></Section>
    </>
  );
}
