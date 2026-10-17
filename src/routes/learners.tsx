import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/learners")({
  head: () => meta("Learners", "Find driving instructors and accompanying drivers near you in Ireland."),
  component: LearnersPage,
});

function LearnersPage() {
  return (
    <>
      <PageHero eyebrow="For learners" title="Learn. Practise. Drive with confidence." body="Find driving instructors and trusted accompanying drivers near you. Book lessons, arrange practice, and keep track of your progress — all in one place.">
        <a href="#get-the-app" className="btn-primary">Create a learner account</a>
      </PageHero>
      <Section warm><div className="grid gap-5 md:grid-cols-3">
        <Card title="Find an instructor">Discover driving instructors near you, compare profiles, and find lessons that fit your schedule.</Card>
        <Card title="Find practice support">Connect with a suitable accompanying driver so you can get more supervised practice between professional lessons.</Card>
        <Card title="Track your progress">Keep your lessons, practice sessions, feedback and next steps together in one place.</Card>
      </div></Section>
      <Section><div className="max-w-md"><Stat figure="389,000+" source="Irish market figure. Not DriveConnect users.">Ireland had more than 389,000 current learner permits in 2025.</Stat></div></Section>
    </>
  );
}
