import { createFileRoute } from "@tanstack/react-router";
import { Callout, Card, PageHero, Section, Stat, Steps, fatalStatNote, meta } from "@/components/site";

void Callout; void Card; void Stat; void Steps; void fatalStatNote;

export const Route = createFileRoute("/accompanying-drivers")({
  head: () => meta("Accompanying drivers", "Help a learner practise safely as an eligible accompanying driver."),
  component: AccompanyingDriversPage,
});

function AccompanyingDriversPage() {
  return (
    <>
      <PageHero eyebrow="For practice sponsors" title="Make a difference from the passenger seat." body="If you are an eligible accompanying driver, you can connect with learners nearby, arrange supervised practice, and help someone build confidence behind the wheel." />
      <Section warm>
        <h2 className="text-3xl">Supervised practice matters.</h2>
        <p className="mt-3 max-w-2xl">Learners need professional instruction — and they also need opportunities to practise safely between lessons.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Support a learner">Help someone practise the skills they are learning with their instructor.</Card>
          <Card title="Help improve road safety">Give learners a chance to practise with an eligible accompanying driver rather than driving alone.</Card>
          <Card title="Meet people in your community">Connect with learners nearby.</Card>
        </div>
      </Section>
      <Section className="space-y-6">
        <div className="max-w-md"><Stat figure="27 of 34" source={fatalStatNote}>learner drivers involved in fatal collisions were unaccompanied.</Stat></div>
        <Callout>DriveConnect accompanying drivers provide supervised practice support, not professional driving instruction. Paid driving instruction must be provided by an appropriately authorised driving instructor.</Callout>
        <div><a href="#get-the-app" className="btn-primary">Become a Practice Sponsor</a><p className="mt-3 text-sm">Help someone practise. Support safer roads.</p></div>
      </Section>
    </>
  );
}
