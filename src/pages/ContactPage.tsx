import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import { NewTabNotice, SectionHeader } from "../components/ui";
import { cn } from "../utils/cn";

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

type ContactDirectoryLinkProps = {
  item: ContactLink;
  index: number;
  surfaceClassName: string;
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

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    description:
      "The most direct way to contact me about a role, project, paid trial or clearly defined technical task.",
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

const opportunityLayouts = [
  "lg:col-span-5",
  "lg:col-span-4 lg:mt-24",
  "lg:col-span-3 lg:mt-48",
] as const;

const directoryPanels = [
  {
    layout: "lg:col-span-8 lg:row-span-2",
    surface: "min-h-[24rem] bg-[var(--violet)] sm:min-h-[29rem]",
    text: "text-[var(--paper)]",
  },
  {
    layout: "lg:col-span-4",
    surface: "min-h-[15rem] bg-[var(--paper)] lg:min-h-0",
    text: "text-[var(--ink)]",
  },
  {
    layout: "lg:col-span-4",
    surface:
      "min-h-[15rem] border border-[var(--line-strong)] bg-[var(--ink-2)] lg:min-h-0",
    text: "text-[var(--paper)]",
  },
  {
    layout: "lg:col-span-5",
    surface:
      "min-h-[18rem] border border-[var(--line-strong)] bg-[var(--ink)]",
    text: "text-[var(--paper)]",
  },
  {
    layout: "lg:col-span-7",
    surface: "min-h-[18rem] bg-[var(--signal)]",
    text: "text-[var(--ink)]",
  },
] as const;

function ContactDirectoryLink({
  item,
  index,
  surfaceClassName,
}: ContactDirectoryLinkProps) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-6 font-mono text-[0.66rem] uppercase tracking-[0.16em]">
        <span>
          {String(index + 1).padStart(2, "0")} / {item.kind}
        </span>
        <span
          aria-hidden="true"
          className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        >
          {item.kind === "external"
            ? "↗"
            : item.kind === "download"
              ? "↓"
              : "→"}
        </span>
      </div>

      <div className="mt-auto pt-12">
        <span className="font-display block break-words text-[clamp(2.8rem,6vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
          {item.label}
        </span>
        <span className="mt-6 block max-w-xl text-sm leading-7 sm:text-base">
          {item.description}
        </span>
      </div>

      {item.kind === "external" ? <NewTabNotice /> : null}
    </>
  );

  const className = cn(
    "group focus-ring cut-corner flex h-full flex-col overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
    surfaceClassName,
  );

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
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="full-bleed relative isolate overflow-hidden bg-[var(--paper)] text-[var(--ink)]">
        <div
          aria-hidden="true"
          className="absolute right-0 top-0 -z-10 h-[36%] w-[18%] bg-[var(--signal)] max-sm:w-5"
        />

        <div className="content-frame py-14 sm:py-20 lg:py-28">
          <div className="flex items-center justify-between gap-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--violet-dark)]">
              Contact / Opportunities
            </p>
            <div className="flex items-center gap-3 font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--ink-2)]">
              <motion.span
                aria-hidden="true"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : { scale: [1, 1.5, 1], opacity: [1, 0.55, 1] }
                }
                transition={{
                  duration: 1.8,
                  repeat: prefersReducedMotion ? 0 : Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="h-2.5 w-2.5 bg-[var(--signal)]"
              />
              Open channel
            </div>
          </div>

          <motion.div
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 h-px origin-left bg-[var(--ink)]"
          />

          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-display mt-9 max-w-[13ch] text-[clamp(4rem,11.5vw,11.5rem)] font-semibold leading-[0.8] tracking-[-0.08em] focus:outline-none"
          >
            A useful conversation
            <span className="block text-[var(--violet)] sm:ml-[0.55ch]">
              starts with
            </span>
            <span className="block sm:ml-[1.7ch]">a clear problem.</span>
          </h1>

          <div className="mt-14 grid gap-10 border-t border-[var(--ink)] pt-8 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,0.7fr)] lg:gap-16">
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
              href="mailto:aleksandar.todorovic.rs@gmail.com"
              style={{ color: "var(--paper)" }}
              className="focus-ring group flex min-h-32 items-end justify-between gap-8 bg-[var(--ink)] p-5 text-[var(--paper)] transition-colors hover:bg-[var(--violet-dark)] sm:p-6"
            >
              <span>
                <span className="font-mono block text-[0.65rem] uppercase tracking-[0.16em] text-[var(--signal)]">
                  Direct line
                </span>
                <span className="font-display mt-3 block text-3xl font-semibold tracking-[-0.045em]">
                  Send an email
                </span>
              </span>
              <span
                aria-hidden="true"
                className="text-3xl transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
          </div>

          <aside
            aria-label="Availability and work preferences"
            className="mt-12 lg:mt-16"
          >
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-[var(--violet-dark)]">
              Availability context
            </p>

            <dl className="mt-4 grid border-l border-t border-[var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
              {availabilitySignals.map((signal) => (
                <div
                  key={signal.label}
                  className="border-b border-r border-[var(--ink)] p-5"
                >
                  <dt className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-[var(--violet-dark)]">
                    {signal.label}
                  </dt>
                  <dd className="mt-3 text-sm leading-6">{signal.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <SectionHeader
          eyebrow="Where I can help"
          title="Clear goal in. Testable result out."
          description="I work best when the goal is clear and the result can be tested. That can mean building a frontend feature, improving an existing codebase or tracing a software issue through to a working result."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-6">
          {opportunityAreas.map((area, index) => (
            <article
              key={area.label}
              className={cn(
                "relative border-t border-[var(--line-strong)] pt-5",
                opportunityLayouts[index],
              )}
            >
              <span
                aria-hidden="true"
                className="font-display block text-[clamp(5rem,10vw,9rem)] font-semibold leading-[0.75] tracking-[-0.08em] text-[var(--violet)]"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="font-mono mt-8 text-[0.66rem] uppercase tracking-[0.17em] text-[var(--signal)]">
                {area.label}
              </p>
              <h2 className="font-display mt-4 text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-[var(--paper)]">
                {area.title}
              </h2>
              <p className="mt-5 leading-7 text-[var(--paper-muted)]">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="full-bleed mt-24 bg-[var(--violet-dark)] text-[var(--paper)] sm:mt-32">
        <div className="content-frame grid gap-12 py-14 sm:py-20 lg:grid-cols-[minmax(16rem,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--signal)]">
              Useful first message
            </p>

            <h2 className="font-display mt-5 max-w-xl text-[clamp(2.8rem,5vw,5.2rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              A little context makes the first conversation much more useful.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-[var(--paper)]">
              A complete specification is not necessary. A short description of
              the real outcome and current situation is usually enough to
              begin.
            </p>
          </div>

          <ol className="grid self-start border-l border-t border-[var(--paper)]/25 sm:grid-cols-2">
            {usefulContext.map((item, index) => (
              <li
                key={item}
                className="min-h-40 border-b border-r border-[var(--paper)]/25 p-5 sm:p-6"
              >
                <span className="font-mono text-[0.68rem] text-[var(--signal)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-8 block leading-7 text-[var(--paper)]">
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <SectionHeader
          eyebrow="Contact and project links"
          title="Choose your entry point."
          description="Contact me directly, review the work, inspect the code or download the current CV."
        />

        <ul className="mt-12 grid gap-3 lg:grid-cols-12">
          {contactLinks.map((item, index) => {
            const panel = directoryPanels[index];

            return (
              <li
                key={item.label}
                className={cn(panel.layout, panel.text)}
              >
                <ContactDirectoryLink
                  item={item}
                  index={index}
                  surfaceClassName={panel.surface}
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
