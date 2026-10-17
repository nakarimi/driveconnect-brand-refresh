import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero, Section, meta } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => meta("Contact", "Get in touch with DriveConnect support."),
  component: ContactPage,
});

const field = "w-full rounded-[18px] border bg-card px-4 py-3 text-foreground";

function ContactPage() {
  const [f, setF] = useState({ name: "", email: "", role: "Learner", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const body = `Name: ${f.name}\nEmail: ${f.email}\nRole: ${f.role}\n\n${f.message}`;
    window.location.href = `mailto:support@driverconnectapp.com?subject=${encodeURIComponent("DriveConnect enquiry")}&body=${encodeURIComponent(body)}`;
  };
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch" body="This form emails support@driverconnectapp.com. We reply as soon as we can — this is not a 24-hour safety service." />
      <Section warm>
        <form onSubmit={submit} className="grid max-w-xl gap-4">
          <input required placeholder="Name" className={field} value={f.name} onChange={(e) => setF({ ...f, name: e.target.value })} />
          <input required type="email" placeholder="Email" className={field} value={f.email} onChange={(e) => setF({ ...f, email: e.target.value })} />
          <select className={field} value={f.role} onChange={(e) => setF({ ...f, role: e.target.value })}>
            <option>Learner</option><option>Instructor</option><option>Accompanying driver</option><option>Other</option>
          </select>
          <textarea required rows={5} placeholder="Message" className={field} value={f.message} onChange={(e) => setF({ ...f, message: e.target.value })} />
          <button type="submit" className="btn-primary justify-self-start">Send message</button>
        </form>
      </Section>
    </>
  );
}
