import { Link } from "react-router";

import { NewTabNotice } from "../components/ui";

type AvailabilityDetail = {
  label: string;
  value: string;
};

type OpportunityArea = {
  label: string;
  title: string;
  description: string;
};

type ContactLinkKind = "internal" | "external" | "email" | "download";

type ContactLink = {
  label: string;
  description: string;
  href: string;
  kind: ContactLinkKind;
};

const availabilityDetails: AvailabilityDetail[] = [
  {
    label: "Based in",
    value: "Kragujevac, Serbia",
  },
  {
    label: "Work mode",
    value: "Remote from Serbia or local work in Kragujevac",
  },
  {
    label: "Primary direction",
    value: "Frontend and web development, primarily with React and TypeScript",
  },
  {
    label: "Also open to",
    value: "Application support, implementation and software-facing roles",
  },
];

const opportunityAreas: OpportunityArea[] = [
  {
    label: "Frontend work",
    title: "User-facing web applications and interfaces",
    description:
      "React pages, responsive interfaces, dashboards, forms, state and data flows, Firebase-backed features and frontend product work.",
  },
  {
    label: "Focused web work",
    title: "Smaller web tasks with a clear result",
    description:
      "Existing codebase improvements, responsive fixes, maintenance, documented API integrations, UI cleanup, deployment and technical handoff.",
  },
  {
    label: "Adjacent roles",
    title: "Software-facing support and implementation",
    description:
      "Application or product support, implementation and QA-adjacent work where browser behavior, user flows, APIs, logs, documentation and clear troubleshooting matter.",
  },
];

const primaryEmail: ContactLink = {
  label: "Email",
  description:
    "The most direct way to contact me about a role, project, paid trial or clearly defined technical task.",
  href: "mailto:aleksandar.todorovic.rs@gmail.com",
  kind: "email",
};

const supportingLinks: ContactLink[] = [
  {
    label: "LinkedIn",
    description:
      "Review my professional background, current direction and public work history.",
    href: "https://www.linkedin.com/in/aleksandar-todorovic-dev",
    kind: "external",
  },
  {
    label: "GitHub",
    description:
      "Inspect repositories, source code, project documentation and development history.",
    href: "https://github.com/aleksandar-todorovic-dev",
    kind: "external",
  },
  {
    label: "Case studies",
    description:
      "Review the implementation decisions, limitations and lessons behind the main projects.",
    href: "/projects",
    kind: "internal",
  },
  {
    label: "Download CV",
    description:
      "Download a concise overview of my experience, technical focus and selected project work.",
    href: "/Aleksandar_Todorovic_CV.pdf",
    kind: "download",
  },
];

const usefulContext = [
  "What needs to be built, improved or investigated",
  "The current stack, repository or product context",
  "The expected result and important constraints",
  "Any timeline, access needs or parts of the system that should remain untouched",
];

function ContactLinkRow({ item }: { item: ContactLink }) {
  const indicator =
    item.kind === "external"
      ? "↗"
      : item.kind === "download"
        ? "↓"
        : item.kind === "internal"
          ? "→"
          : null;

  const content = (
    <>
      <span>
        <span className="block font-display text-[clamp(2rem,4vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
          {item.label}
        </span>
        <span className="mt-3 block max-w-2xl leading-7 text-[var(--paper-muted)]">
          {item.description}
        </span>
      </span>
      {indicator ? (
        <span
          aria-hidden="true"
          className="text-2xl text-[var(--violet-text)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 motion-reduce:group-hover:translate-x-0 motion-reduce:group-hover:translate-y-0"
        >
          {indicator}
        </span>
      ) : null}
      {item.kind === "external" ? <NewTabNotice /> : null}
    </>
  );

  const className =
    "focus-ring group grid min-h-32 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 py-7";

  if (item.kind === "internal") {
    return (
      <Link to={item.href} className={className}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={item.href}
      target={item.kind === "external" ? "_blank" : undefined}
      rel={item.kind === "external" ? "noreferrer" : undefined}
      download={item.kind === "download"}
      className={className}
    >
      {content}
    </a>
  );
}

export function ContactPage() {
  return (
    <>
      <section className="full-bleed bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-14 sm:py-20 lg:py-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--ink)]/30 pb-4">
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              Contact
            </p>
            <p className="text-sm text-[var(--ink)]/65">
              Available for frontend, web and software-facing work
            </p>
          </div>

          <h1
            id="page-heading"
            tabIndex={-1}
            className="mt-10 max-w-[14ch] text-balance font-display text-[clamp(3rem,7.8vw,7.2rem)] font-semibold leading-[0.96] tracking-[-0.032em] focus:outline-none md:leading-[0.93] md:tracking-[-0.042em]"
          >
            A useful conversation
            <span className="block text-[var(--violet-dark)]">
              starts with a clear problem.
            </span>
          </h1>

          <div className="mt-12 grid gap-10 border-t border-[var(--ink)] pt-8 lg:mt-16 lg:grid-cols-[minmax(0,0.75fr)_minmax(22rem,1.25fr)] lg:items-end lg:gap-16">
            <div className="max-w-3xl space-y-5 text-base leading-8 text-[var(--ink-2)] sm:text-lg">
              <p>
                I am open to frontend and web development opportunities,
                smaller, clearly defined web tasks, and software-facing roles
                where technical troubleshooting and reliable follow-through
                matter.
              </p>
              <p>
                My strongest work so far is in React, TypeScript, JavaScript and
                Firebase. I am also comfortable working in existing frontend
                codebases, following documented APIs and using related web
                technologies when the task is clear and I can test the result.
              </p>
            </div>

            <a
              href={primaryEmail.href}
              className="focus-ring border-l-4 border-[var(--violet)] bg-[var(--ink)] p-6 text-[var(--paper)] transition-colors hover:bg-[var(--ink-2)] sm:p-8"
            >
              <span className="block text-sm font-semibold">Email me</span>
              <span className="mt-5 block font-display text-[clamp(1.55rem,4.5vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                <span className="block">aleksandar.</span>
                <span className="block">todorovic.rs</span>
                <span className="block text-[var(--violet-text)]">
                  @gmail.com
                </span>
              </span>
              <span className="mt-6 block max-w-2xl text-sm leading-6 text-[var(--paper-muted)]">
                {primaryEmail.description}
              </span>
            </a>
          </div>

          <aside
            aria-label="Availability and work preferences"
            className="mt-14 border-t border-[var(--ink)]/30 pt-5 sm:mt-18"
          >
            <h2 className="font-display text-2xl font-semibold tracking-[-0.035em]">
              Availability
            </h2>
            <dl className="mt-5 grid gap-x-10 border-y border-[var(--ink)]/25 md:grid-cols-2">
              {availabilityDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="grid gap-2 border-b border-[var(--ink)]/20 py-4 last:border-b-0 md:grid-cols-[9rem_minmax(0,1fr)] md:even:border-l md:even:pl-10 md:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-[var(--violet-dark)]">
                    {detail.label}
                  </dt>
                  <dd className="text-sm leading-6">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <header className="grid gap-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
            Where I can help
          </p>
          <div>
            <h2 className="max-w-4xl text-balance font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[1.02] tracking-[-0.025em] md:tracking-[-0.028em]">
              I work best when the goal is clear and the result can be tested.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
              That can mean building a frontend feature, improving an existing
              codebase or tracing a software issue through to a working result.
            </p>
          </div>
        </header>

        <div className="mt-12 border-t border-[var(--line-strong)] sm:mt-16">
          {opportunityAreas.map((area) => (
            <article
              key={area.label}
              className="grid gap-5 border-b border-[var(--line)] py-9 sm:py-11 lg:grid-cols-[11rem_minmax(16rem,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
            >
              <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
                {area.label}
              </p>
              <h3 className="max-w-xl font-display text-[clamp(1.9rem,3.5vw,3.25rem)] font-semibold leading-[1.04] tracking-[-0.025em]">
                {area.title}
              </h3>
              <p className="max-w-3xl self-center leading-8 text-[var(--paper-muted)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="full-bleed mt-24 bg-[var(--paper)] text-[var(--ink)] sm:mt-32">
        <div className="content-frame grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(16rem,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              Your first message
            </p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.5rem,4.8vw,4.7rem)] font-semibold leading-[1.02] tracking-[-0.025em] md:tracking-[-0.028em]">
              A short first message is enough.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-[var(--ink-2)]">
              A complete specification is not necessary. A short description of
              the real outcome and current situation is usually enough to
              begin.
            </p>
          </div>

          <ul className="self-start border-y border-[var(--ink)]/25">
            {usefulContext.map((item) => (
              <li
                key={item}
                className="grid grid-cols-[1.25rem_minmax(0,1fr)] gap-4 border-b border-[var(--ink)]/20 py-5 last:border-b-0"
              >
                <span
                  aria-hidden="true"
                  className="mt-[0.65rem] h-px bg-[var(--violet)]"
                />
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <header className="grid gap-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
            Other useful links
          </p>
          <div>
            <h2 className="max-w-4xl text-balance font-display text-[clamp(2.5rem,5vw,4.9rem)] font-semibold leading-[1.02] tracking-[-0.025em] md:tracking-[-0.028em]">
              Review the work or continue the conversation elsewhere.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
              The case studies, source code, professional background and current
              CV are all available directly.
            </p>
          </div>
        </header>

        <ul className="mt-12 border-y border-[var(--line-strong)] sm:mt-16">
          {supportingLinks.map((item) => (
            <li
              key={item.label}
              className="border-b border-[var(--line)] last:border-b-0"
            >
              <ContactLinkRow item={item} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
