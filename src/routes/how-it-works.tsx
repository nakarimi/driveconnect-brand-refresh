import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/how-it-works")({
  head: () => meta("How it works", "Profiles, availability, discovery and one-to-one messages explained."),
  component: HowItWorksPage,
});

function HowItWorksPage() {
  return (
    <>
      <PageHero eyebrow="How it works" title="Find people near you. Arrange directly." body="DriveConnect helps you discover local instructors, accompanying drivers and learners, then message them one-to-one." />
      <Section warm><Steps items={[
        { title: "Choose your role", body: "Join as a learner, instructor or accompanying driver." },
        { title: "Create your profile", body: "Add your area and the times you are usually available." },
        { title: "Discover people near you", body: "Browse profiles of people in your area." },
        { title: "Message and arrange directly", body: "Talk one-to-one and agree the details together." },
      ]} /></Section>
      <Section><Callout>Displayed availability is not a confirmed booking. Price, time, place, vehicle and insurance are agreed between the two people. DriveConnect does not process payments.</Callout></Section>
    </>
  );
}
