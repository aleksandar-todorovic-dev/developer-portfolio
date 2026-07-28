import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import { SectionHeader } from "../components/ui";
import { cn } from "../utils/cn";
import type { ProjectSlug } from "../types/project";

type ProfileSignal = {
  label: string;
  value: string;
};

type WorkingPrinciple = {
  label: string;
  title: string;
  description: string;
};

type ProjectProofLink = {
  slug: ProjectSlug;
  title: string;
  proof: string;
};

const profileSignals: ProfileSignal[] = [
  {
    label: "Base",
    value: "Kragujevac, Serbia",
  },
  {
    label: "Current direction",
    value: "Frontend-first web development",
  },
  {
    label: "Strongest current work",
    value: "React, TypeScript, JavaScript and Firebase",
  },
  {
    label: "Open to",
    value: "Roles, trial work and clearly defined web tasks",
  },
];

const workingPrinciples: WorkingPrinciple[] = [
  {
    label: "Current direction",
    title: "Frontend-first, without treating one stack as a wall.",
    description:
      "I am most experienced in the tools shown across these projects, but I am also comfortable working in existing frontend codebases and following documented APIs when the task is clear and I can test the result.",
  },
  {
    label: "Working approach",
    title: "Understand the flow before changing the code.",
    description:
      "I start by clarifying the goal and tracing the relevant state or data flow. Then I keep the change focused and test both the normal path and likely edge cases. I use documentation and AI-assisted tools to investigate faster, but I do not ship a change unless I understand it, test it and can explain it.",
  },
  {
    label: "Previous foundation",
    title: "Troubleshooting and responsibility came before development.",
    description:
      "Earlier IT support work gave me a practical foundation in tracing technical problems step by step. Several years in operations added responsibility, prioritization, communication and follow-through under pressure. Independent frontend projects are where those habits became visible in code.",
  },
];

const projectProofLinks: ProjectProofLink[] = [
  {
    slug: "liferecompiled",
    title: "LifeRecompiled",
    proof:
      "React and Firebase engineering, backend-connected flows and resilient product behavior.",
  },
  {
    slug: "training-app",
    title: "Training App",
    proof:
      "Product thinking, mobile-first execution and a focused local-first MVP.",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    proof:
      "Practical React and TypeScript UI architecture, typed state and drag-and-drop behavior.",
  },
];

const principlePanels = [
  {
    panel:
      "bg-[var(--paper)] text-[var(--ink)] lg:mr-[18%] lg:grid-cols-[minmax(0,0.85fr)_minmax(20rem,1.15fr)]",
    metadata: "text-[var(--violet-dark)]",
    title: "text-[var(--ink)]",
    body: "text-[var(--ink-2)]",
    number: "text-[var(--violet)]/12",
  },
  {
    panel:
      "bg-[var(--violet-dark)] text-[var(--paper)] lg:ml-[18%] lg:grid-cols-[minmax(20rem,1.15fr)_minmax(0,0.85fr)]",
    metadata: "text-[var(--signal)]",
    title: "text-[var(--paper)] lg:order-2",
    body: "text-[var(--paper)] lg:order-1",
    number: "text-[var(--paper)]/8",
  },
  {
    panel:
      "border border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)] lg:mx-[8%] lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)]",
    metadata: "text-[var(--signal)]",
    title: "text-[var(--paper)]",
    body: "text-[var(--paper-muted)]",
    number: "text-[var(--violet)]/20",
  },
] as const;

const projectPanels = [
  {
    layout: "lg:col-span-7",
    surface: "bg-[var(--violet)]",
    text: "text-[var(--paper)]",
  },
  {
    layout: "lg:col-span-5",
    surface: "bg-[var(--paper)]",
    text: "text-[var(--ink)]",
  },
  {
    layout: "lg:col-span-8 lg:col-start-5",
    surface:
      "border border-[var(--line-strong)] bg-[var(--ink-2)]",
    text: "text-[var(--paper)]",
  },
] as const;

export function AboutPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="full-bleed relative isolate overflow-hidden bg-[var(--violet)] text-[var(--paper)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-[72%] hidden w-px bg-[var(--paper)]/20 lg:block"
        />
        <div
          aria-hidden="true"
          className="font-display absolute -bottom-[0.22em] -right-[0.03em] -z-10 select-none text-[clamp(10rem,30vw,30rem)] font-semibold leading-none tracking-[-0.12em] text-[var(--violet-dark)]/25"
        >
          A
        </div>

        <div className="content-frame relative py-14 sm:py-20 lg:py-28">
          <div className="flex items-center justify-between gap-6">
            <p className="signal-label font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[var(--paper)]">
              About / Current direction
            </p>
            <p className="font-mono hidden text-[0.68rem] uppercase tracking-[0.16em] text-[var(--paper)] sm:block">
              Profile trace · 01
            </p>
          </div>

          <motion.div
            aria-hidden="true"
            initial={prefersReducedMotion ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.75, ease: [0.2, 0.8, 0.2, 1] }}
            className="mt-5 h-px origin-left bg-[var(--signal)]"
          />

          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-display mt-9 max-w-[13ch] text-balance text-[clamp(3.6rem,9.5vw,9.6rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-[var(--paper)] focus:outline-none"
          >
            Frontend is where
            <span className="block sm:ml-[0.75ch]">I work best,</span>
            <span className="mt-3 block max-w-[16ch] text-[0.5em] leading-[0.95] tracking-[-0.055em] sm:ml-[2.7ch]">
              but I do not limit every project to one exact stack.
            </span>
          </h1>

          <div className="mt-14 grid gap-10 border-t border-[var(--paper)]/30 pt-8 lg:mt-20 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
            <div className="max-w-xl space-y-5 text-base leading-8 text-[var(--paper)] sm:text-lg">
              <p>
                I am Aleksandar, a frontend-first web developer focused on
                responsive applications, product interfaces and practical web
                features.
              </p>

              <p>
                Most of my work so far has been in React, TypeScript, JavaScript
                and Firebase. Those are the tools behind my strongest current
                projects, but I am also comfortable working with existing
                codebases, documented APIs and related web technologies.
              </p>
            </div>

            <aside aria-label="Current professional profile">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper)]">
                Current working profile
              </p>

              <dl className="mt-5 grid border-l border-t border-[var(--paper)]/30 sm:grid-cols-2">
                {profileSignals.map((signal) => (
                  <div
                    key={signal.label}
                    className="border-b border-r border-[var(--paper)]/30 p-5"
                  >
                    <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--signal)]">
                      {signal.label}
                    </dt>
                    <dd className="mt-3 text-sm leading-6 text-[var(--paper)] sm:text-base">
                      {signal.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <SectionHeader
          eyebrow="How I work"
          title="I keep the work focused, understandable and testable."
          description="I start by understanding the real problem, make a focused change, test it carefully and explain the result clearly."
        />

        <div className="mt-12 space-y-5 sm:mt-16">
          {workingPrinciples.map((principle, index) => {
            const panel = principlePanels[index];

            return (
              <article
                key={principle.label}
                className={cn(
                  "cut-corner relative grid min-h-[22rem] content-between gap-10 overflow-hidden p-6 sm:p-10 lg:gap-16 lg:p-14",
                  panel.panel,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "font-display pointer-events-none absolute -bottom-[0.28em] right-3 text-[clamp(9rem,21vw,18rem)] font-semibold leading-none tracking-[-0.1em]",
                    panel.number,
                  )}
                >
                  {index + 1}
                </span>

                <div className={cn("relative z-10", panel.title)}>
                  <p
                    className={cn(
                      "font-mono text-[0.68rem] uppercase tracking-[0.18em]",
                      panel.metadata,
                    )}
                  >
                    {String(index + 1).padStart(2, "0")} / {principle.label}
                  </p>
                  <h2 className="font-display mt-6 max-w-xl text-[clamp(2.15rem,4.5vw,4.5rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                    {principle.title}
                  </h2>
                </div>

                <p
                  className={cn(
                    "relative z-10 max-w-2xl self-end text-base leading-8",
                    panel.body,
                  )}
                >
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <SectionHeader
          eyebrow="Selected projects"
          title="Three projects. Three different forms of proof."
          description="The projects show different parts of the same working direction. Each one highlights a different kind of technical or product work."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-12">
          {projectProofLinks.map((project, index) => {
            const panel = projectPanels[index];

            return (
              <div
                key={project.slug}
                className={cn(
                  panel.layout,
                  panel.text,
                )}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className={cn(
                    "group focus-ring cut-corner flex min-h-[20rem] h-full flex-col justify-between overflow-hidden p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[24rem] sm:p-9",
                    panel.surface,
                  )}
                >
                  <div className="flex items-start justify-between gap-6 font-mono text-[0.68rem] uppercase tracking-[0.17em]">
                    <span>
                      {String(index + 1).padStart(2, "0")} / Evidence
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-2xl leading-none transition-transform duration-300 group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display break-words text-[clamp(2.7rem,6vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]">
                      {project.title}
                    </h3>
                    <p className="mt-6 max-w-xl text-sm leading-7 sm:text-base">
                      {project.proof}
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="full-bleed mt-24 bg-[var(--paper)] text-[var(--ink)] sm:mt-32">
        <div className="content-frame grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--violet-dark)]">
              Next step / 04
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-balance text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.06em]">
              The work is easier to judge through the projects than through a
              long biography.
            </h2>

            <p className="mt-6 max-w-2xl leading-8 text-[var(--ink-2)]">
              Review the case studies, download the current CV, or contact me
              about a frontend, web, product-facing, implementation or
              software-facing opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row lg:max-w-[17rem] lg:flex-col">
            <Link
              to="/projects"
              style={{ color: "var(--paper)" }}
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 bg-[var(--violet)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-[var(--paper)] transition-colors hover:bg-[var(--violet-dark)]"
            >
              View case studies <span aria-hidden="true">→</span>
            </Link>

            <a
              href="/Aleksandar_Todorovic_CV.pdf"
              download
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 border border-[var(--ink)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>

            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 border border-[var(--ink)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.12em] transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
