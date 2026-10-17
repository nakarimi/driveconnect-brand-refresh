import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/instructors")({
  head: () => meta("Instructors", "Create your professional profile and get found by learners near you."),
  component: InstructorsPage,
});

function InstructorsPage() {
  return (
    <>
      <PageHero eyebrow="For instructors" title="Get found by learners near you." body="Create your professional profile, show your availability, receive learner enquiries, and manage bookings in one place." />
      <Section warm>
        <h2 className="text-3xl">Turn empty hours into bookings.</h2>
        <p className="mt-3 max-w-2xl">Let learners discover your availability and contact you when they are ready to learn.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Get discovered">Put your professional profile in front of learners searching in your area.</Card>
          <Card title="Manage your schedule">Show availability and organise lesson enquiries without endless back-and-forth.</Card>
          <Card title="Build your reputation">Collect learner feedback and build a professional profile.</Card>
        </div>
      </Section>
      <Section className="space-y-6">
        <div className="max-w-md"><Stat figure="2,700+" source="RSA figure. Not DriveConnect users.">RSA-approved driving instructors in Ireland. Make it easier for local learners to discover your services.</Stat></div>
        <Callout>Calling a profile RSA-approved on this site describes the audience. DriveConnect does not check ADI registration.</Callout>
        <a href="#get-the-app" className="btn-primary">Join as an instructor</a>
      </Section>
    </>
  );
}
