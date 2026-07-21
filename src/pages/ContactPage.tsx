import { Link } from "react-router";

import { SectionHeader } from "../components/ui";

type AvailabilitySignal = {
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

const availabilitySignals: AvailabilitySignal[] = [
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
    value: "Frontend, React, TypeScript and web development",
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
    label: "Contained delivery",
    title: "Smaller web problems with a clear result",
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

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    description:
      "The most direct way to contact me about a role, project, paid trial or clearly scoped technical problem.",
    href: "mailto:aleksandar.todorovic.rs@gmail.com",
    kind: "email",
  },
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
      "Review the implementation decisions, evidence, limitations and lessons behind the main projects.",
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
  "Any timeline, access or ownership boundaries",
];

const contactLinkClassName =
  "group grid gap-3 py-6 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] sm:grid-cols-[160px_minmax(0,1fr)_auto] sm:items-center sm:gap-8 sm:px-4";

export function ContactPage() {
  return (
    <>
      <section className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
            Contact / Opportunities
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F5F2FF] sm:text-5xl lg:text-6xl">
            A useful conversation starts with a clear problem.
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#A9A1BA]">
            <p>
              I am open to frontend and web development opportunities, smaller
              clearly scoped deliverables, and software-facing roles where
              technical investigation and reliable follow-through matter.
            </p>

            <p>
              My strongest current project evidence is in React, TypeScript,
              JavaScript and Firebase. I am also comfortable working through
              existing frontend code, documented APIs, managed services and
              related web technologies when the scope can be understood, tested
              and verified.
            </p>
          </div>

          <a
            href="mailto:aleksandar.todorovic.rs@gmail.com"
            className="mt-9 inline-flex min-h-12 items-center justify-center border border-[#8B5CF6] bg-[#8B5CF6] px-6 text-sm font-semibold text-white transition hover:bg-[#A855F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
          >
            Send an email
          </a>
        </div>

        <aside
          aria-label="Availability and work preferences"
          className="border-y border-[#2B2340] bg-[#0D0B14]"
        >
          <p className="border-b border-[#2B2340] px-5 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
            Availability context
          </p>

          <dl>
            {availabilitySignals.map((signal) => (
              <div
                key={signal.label}
                className="border-b border-[#2B2340] px-5 py-5 last:border-b-0"
              >
                <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#6F687E]">
                  {signal.label}
                </dt>

                <dd className="mt-2 leading-6 text-[#D8D2E8]">
                  {signal.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section className="mt-24">
        <SectionHeader
          eyebrow="Good working fit"
          title="I work best when the goal is clear and the result can be tested."
          description="The requested result should be easy to understand, the work should stay focused, and there should be a clear way to confirm that the outcome works."
        />

        <div className="mt-10 border-y border-[#2B2340]">
          {opportunityAreas.map((area, index) => (
            <article
              key={area.label}
              className="grid gap-5 border-b border-[#2B2340] py-8 last:border-b-0 lg:grid-cols-[150px_minmax(220px,0.8fr)_minmax(0,1.4fr)] lg:gap-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8B849A]">
                {String(index + 1).padStart(2, "0")} / {area.label}
              </p>

              <h2 className="text-xl font-semibold leading-7 text-[#F5F2FF]">
                {area.title}
              </h2>

              <p className="max-w-3xl leading-7 text-[#A9A1BA]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 grid gap-10 border-y border-[#2B2340] py-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
            Useful first message
          </p>

          <h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF] sm:text-4xl">
            A little context makes the first conversation much more useful.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#A9A1BA]">
            A complete specification is not necessary. A short description of
            the real outcome and current situation is usually enough to begin.
          </p>
        </div>

        <ol className="border-t border-[#2B2340]">
          {usefulContext.map((item, index) => (
            <li
              key={item}
              className="grid grid-cols-[48px_minmax(0,1fr)] gap-4 border-b border-[#2B2340] py-5"
            >
              <span className="font-mono text-sm text-[#5F5870]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="leading-7 text-[#D8D2E8]">{item}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-24">
        <SectionHeader
          eyebrow="Contact and verification"
          title="Choose the easiest way to reach me or review my work."
          description="Contact me directly, review the work, inspect the code or download the current CV."
        />

        <ul className="mt-10 border-y border-[#2B2340]">
          {contactLinks.map((item) => (
            <li
              key={item.label}
              className="border-b border-[#2B2340] last:border-b-0"
            >
              {item.kind === "internal" ? (
                <Link to={item.href} className={contactLinkClassName}>
                  <span className="font-semibold text-[#F5F2FF] transition group-hover:text-[#C4B5FD]">
                    {item.label}
                  </span>

                  <span className="max-w-3xl leading-7 text-[#A9A1BA]">
                    {item.description}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#8B849A] transition group-hover:translate-x-1 group-hover:text-[#C4B5FD]"
                  >
                    →
                  </span>
                </Link>
              ) : (
                <a
                  href={item.href}
                  target={item.kind === "external" ? "_blank" : undefined}
                  rel={item.kind === "external" ? "noreferrer" : undefined}
                  download={item.kind === "download"}
                  className={contactLinkClassName}
                >
                  <span className="font-semibold text-[#F5F2FF] transition group-hover:text-[#C4B5FD]">
                    {item.label}
                  </span>

                  <span className="max-w-3xl leading-7 text-[#A9A1BA]">
                    {item.description}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#8B849A] transition group-hover:translate-x-1 group-hover:text-[#C4B5FD]"
                  >
                    ↗
                  </span>
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
