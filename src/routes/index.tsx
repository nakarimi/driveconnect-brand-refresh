import { createFileRoute, Link } from "@tanstack/react-router";
import { Callout, Card, Chip, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () =>
    meta(
      "Learn. Practise. Drive with confidence.",
      "Find driving instructors and accompanying drivers near you in Ireland. Arrange lessons and supervised practice in one app.",
    ),
  component: Index,
});

const roles = [
  { chip: "Learner", title: "Learn and practise", body: "Find instructors and accompanying drivers near you, and keep your progress in one place.", to: "/learners" },
  { chip: "Instructor", title: "Get found by learners near you", body: "Show your availability, receive enquiries and build a professional profile.", to: "/instructors" },
  { chip: "Accompanying driver", title: "Make a difference from the passenger seat", body: "Help a learner practise safely between their professional lessons.", to: "/accompanying-drivers" },
] as const;

function Index() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="tagline mb-5 text-xs">Ireland · Driving support</p>
          <h1 className="text-5xl leading-[1.05] md:text-6xl">Learn. Practise. Drive with confidence.</h1>
          <p className="mt-6 text-lg leading-relaxed">
            Find driving instructors and accompanying drivers near you. Arrange lessons, get supervised practice, and keep progress in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/learners" className="btn-primary">I'm learning to drive</Link>
            <Link to="/instructors" className="btn-ghost">I teach or accompany</Link>
          </div>
          <p className="mt-5 text-sm">Free to join. You must be 18 or older.</p>
        </div>
        <div className="relative rounded-[28px] bg-warm p-8">
          <div className="space-y-4">
            {roles.map((r, i) => (
              <div key={r.chip} className={`rounded-[20px] border bg-card p-5 ${i === 1 ? "md:ml-10" : ""} ${i === 2 ? "md:ml-4" : ""}`}>
                <Chip>{r.chip}</Chip>
                <p className="mt-3 font-bold text-foreground">{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section warm>
        <div className="grid gap-5 md:grid-cols-3">
          {roles.map((r) => (
            <Link key={r.to} to={r.to} className="rounded-[20px] border bg-card p-7 transition-colors hover:bg-surface">
              <Chip>{r.chip}</Chip>
              <h3 className="mt-4 text-xl">{r.title}</h3>
              <p className="mt-3 leading-relaxed">{r.body}</p>
              <span className="mt-5 inline-block font-bold text-primary">Learn more →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 text-3xl md:text-4xl">How it works</h2>
        <Steps
          items={[
            { title: "Choose your role", body: "Learner, instructor or accompanying driver." },
            { title: "Create your profile", body: "Add your area, availability and what you are looking for." },
            { title: "Discover people near you", body: "Browse local profiles that suit your needs." },
            { title: "Message and arrange directly", body: "Agree time, place and terms between yourselves." },
          ]}
        />
      </Section>

      <Section warm>
        <h2 className="mb-8 text-3xl md:text-4xl">Driving in Ireland</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <Stat figure="389,000+" source="Irish market figure, 2025. Not DriveConnect users.">current learner permits in Ireland in 2025.</Stat>
          <Stat figure="2,700+" source="RSA figure. Not DriveConnect users.">RSA-approved driving instructors in Ireland.</Stat>
          <Stat figure="27 of 34" source={fatalStatNote}>learner drivers involved in fatal collisions were unaccompanied.</Stat>
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 text-3xl md:text-4xl">You check the person. We connect you.</h2>
        <div className="grid gap-5 md:grid-cols-3">
          <Card title="Verify it yourself" tint>Check qualifications and insurance before any lesson or practice.</Card>
          <Card title="Meet when comfortable" tint>Only meet when you are comfortable. Prefer a public place.</Card>
          <Card title="Agreed between you" tint>DriveConnect does not take payment or supervise the journey.</Card>
        </div>
        <div className="mt-6"><Callout>Read our <Link to="/safety" className="font-bold text-primary">safety advice</Link> before you meet anyone.</Callout></div>
      </Section>

      <Section warm className="text-center">
        <h2 className="text-3xl md:text-4xl">Ready to start?</h2>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/learners" className="btn-primary">Create a learner account</Link>
          <Link to="/instructors" className="btn-primary">Join as an instructor</Link>
          <Link to="/accompanying-drivers" className="btn-primary">Become a practice sponsor</Link>
        </div>
      </Section>
    </>
  );
}
