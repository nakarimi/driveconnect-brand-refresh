import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/faq")({
  head: () => meta("FAQ", "Answers to common questions about DriveConnect."),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Questions and answers" />
      <Section warm><div className="grid gap-4">
        <Card title="Is DriveConnect a driving school?">No.</Card>
        <Card title="Does DriveConnect take payment?">No. Not in this version.</Card>
        <Card title="Does DriveConnect verify RSA approval or insurance?">No. Users must check.</Card>
        <Card title="Who can join?">Adults 18 and over: learners, driving instructors, and eligible accompanying drivers.</Card>
        <Card title="What is an accompanying driver?">A practice sponsor, not an instructor.</Card>
        <Card title="Is a shown time slot a booking?">No.</Card>
      </div></Section>
    </>
  );
}
