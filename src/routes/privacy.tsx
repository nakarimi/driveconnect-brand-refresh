import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/privacy")({
  head: () => meta("Privacy policy", "DriveConnect privacy policy."),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy policy" />
      <Section><Callout>The full privacy policy text will be added here.</Callout></Section>
    </>
  );
}
