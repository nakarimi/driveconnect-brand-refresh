import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/safety")({
  head: () => meta("Safety", "Practical safety advice for learners, instructors and accompanying drivers."),
  component: SafetyPage,
});

function SafetyPage() {
  return (
    <>
      <PageHero eyebrow="Safety" title="You check the person. We connect you." body="DriveConnect is an intermediary. It does not provide lessons, employ instructors or accompanying drivers, supervise meetings, or process payments." />
      <Section warm><div className="grid gap-5 md:grid-cols-2">
        <Card title="Before a paid lesson">Check the instructor's authorisation and insurance yourself.</Card>
        <Card title="Before practice">Confirm the accompanying driver may legally accompany a learner and that the vehicle is insured for a learner.</Card>
        <Card title="When you meet">Prefer a public meeting place. Tell someone where you are going.</Card>
        <Card title="In chat">Do not share your password, bank details, PPS number, or identity documents. Do not send money because of pressure.</Card>
      </div></Section>
      <Section className="space-y-4">
        <Callout>An account, profile photo, vehicle registration, rating or email check is not proof of identity, RSA approval, ADI registration, insurance or good character. Users must be 18 or older.</Callout>
        <Callout>In an emergency in Ireland, call 112 or 999. Contact An Garda Síochána if you believe a crime has occurred. Reports and support: <a className="font-bold text-primary" href="mailto:support@driverconnectapp.com">support@driverconnectapp.com</a>.</Callout>
      </Section>
    </>
  );
}
