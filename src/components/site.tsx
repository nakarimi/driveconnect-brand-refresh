import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="DriveConnect home">
      <span className="logo-orb relative grid h-11 w-11 place-items-center rounded-full">
        <svg viewBox="0 0 24 24" className="h-6 w-6 fill-primary-foreground" aria-hidden>
          <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11a2 2 0 0 1 1 1.7V17a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4.3A2 2 0 0 1 5 11zm2.2-.5h9.6l-1.1-3.4a.6.6 0 0 0-.6-.4H8.9a.6.6 0 0 0-.6.4zM7.5 14.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4zm9 0a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
        </svg>
        <span className="absolute right-0 top-0 h-3 w-3 rounded-full border-2 border-card bg-[var(--dot)]" />
      </span>
      <span className="leading-none">
        <span className="wordmark block text-xl">DriveConnect</span>
        <span className="tagline mt-1 block text-[9px]">Precision learning</span>
      </span>
    </Link>
  );
}

const nav = [
  { to: "/learners", label: "Learners" },
  { to: "/instructors", label: "Instructors" },
  { to: "/accompanying-drivers", label: "Accompanying drivers" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/safety", label: "Safety" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-foreground hover:text-primary" activeProps={{ className: "text-primary" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <a href="#get-the-app" className="text-sm font-semibold text-primary">Log in</a>
          <a href="#get-the-app" className="btn-primary text-sm">Get the app</a>
        </div>
        <button className="btn-ghost px-4 py-2 text-sm lg:hidden" onClick={() => setOpen(!open)} aria-expanded={open}>
          Menu
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t bg-background px-6 py-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="py-2 font-semibold text-foreground">
              {n.label}
            </Link>
          ))}
          <a href="#get-the-app" className="btn-primary mt-3">Get the app</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const links = [
    ...nav,
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
    { to: "/terms", label: "Terms" },
    { to: "/privacy", label: "Privacy" },
    { to: "/gdpr", label: "GDPR" },
  ] as const;
  return (
    <footer id="get-the-app" className="border-t bg-warm">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.2fr_2fr]">
        <div className="space-y-4">
          <Logo />
          <a href="mailto:support@driverconnectapp.com" className="block font-semibold text-primary">
            support@driverconnectapp.com
          </a>
          <div className="flex gap-3">
            <span className="btn-ghost px-4 py-2 text-sm">App Store</span>
            <span className="btn-ghost px-4 py-2 text-sm">Google Play</span>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-3 text-sm font-semibold sm:grid-cols-3">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className="text-foreground hover:text-primary">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-divider">
        <div className="mx-auto max-w-6xl space-y-2 px-6 py-6 text-sm">
          <p>DriveConnect is an intermediary. It does not provide lessons, verify qualifications, or process payments.</p>
          <p>You must be 18 or older to use DriveConnect. © {new Date().getFullYear()} DriverConnect.</p>
        </div>
      </div>
    </footer>
  );
}

export function PageHero({ eyebrow, title, body, children }: { eyebrow?: string; title: string; body?: ReactNode; children?: ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-16 md:pt-24">
      {eyebrow && <p className="tagline mb-4 text-xs">{eyebrow}</p>}
      <h1 className="max-w-3xl text-4xl md:text-6xl">{title}</h1>
      {body && <p className="mt-6 max-w-2xl text-lg leading-relaxed">{body}</p>}
      {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
    </section>
  );
}

export function Section({ children, warm, className = "" }: { children: ReactNode; warm?: boolean; className?: string }) {
  return (
    <section className={warm ? "bg-warm" : ""}>
      <div className={`mx-auto max-w-6xl px-6 py-16 ${className}`}>{children}</div>
    </section>
  );
}

export function Card({ title, children, tint }: { title: string; children: ReactNode; tint?: boolean }) {
  return (
    <div className={`rounded-[20px] border p-7 ${tint ? "bg-surface" : "bg-card"}`}>
      <h3 className="text-lg">{title}</h3>
      <div className="mt-3 leading-relaxed">{children}</div>
    </div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">{children}</span>;
}

export function Stat({ figure, children, source }: { figure: string; children: ReactNode; source: string }) {
  return (
    <div className="rounded-[20px] border bg-card p-7">
      <p className="text-4xl font-extrabold tracking-tight text-primary">{figure}</p>
      <div className="mt-3 text-foreground">{children}</div>
      <p className="mt-3 text-xs">{source}</p>
    </div>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return <div className="rounded-r-[18px] border-l-4 border-primary bg-surface p-5 text-sm leading-relaxed text-foreground">{children}</div>;
}

export function Steps({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-4">
      {items.map((s, i) => (
        <li key={s.title} className="rounded-[20px] border bg-card p-6">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent font-extrabold text-primary">{i + 1}</span>
          <h3 className="mt-4 text-base">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

export const fatalStatNote =
  "RSA analysis of fatal collisions, 2020–2024. Collision involvement does not mean the learner driver was at fault.";

export function meta(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | DriveConnect` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | DriveConnect` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
