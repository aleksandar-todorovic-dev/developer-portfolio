import { Link } from "react-router";

import { TracePath } from "../components/motion/TracePath";
import type { ProjectSlug } from "../types/project";

type ProfileDetail = {
  label: string;
  value: string;
};

type WorkingPrinciple = {
  label: string;
  title: string;
  description: string;
};

type ProjectLink = {
  slug: ProjectSlug;
  title: string;
  description: string;
};

const profileDetails: ProfileDetail[] = [
  {
    label: "Based in",
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
    label: "Previous foundation",
    title: "Troubleshooting and responsibility came before development.",
    description:
      "Earlier IT support work gave me a practical foundation in tracing technical problems step by step. Several years in operations added responsibility, prioritization, communication and follow-through under pressure. Independent frontend projects are where those habits became visible in code.",
  },
  {
    label: "Working approach",
    title: "Understand the flow before changing the code.",
    description:
      "I start by clarifying the goal and tracing the relevant state or data flow. Then I keep the change focused and test both the normal path and likely edge cases. I use documentation and AI-assisted tools to investigate faster, but I do not ship a change unless I understand it, test it and can explain it.",
  },
  {
    label: "Current direction",
    title: "Frontend-first, without treating one stack as a wall.",
    description:
      "I am most experienced in the tools shown across these projects, but I am also comfortable working in existing frontend codebases and following documented APIs when the task is clear and I can test the result.",
  },
];

const projectLinks: ProjectLink[] = [
  {
    slug: "liferecompiled",
    title: "LifeRecompiled",
    description:
      "React and Firebase engineering, backend-connected flows and resilient product behavior.",
  },
  {
    slug: "training-app",
    title: "Training App",
    description:
      "Product thinking, mobile-first execution and a focused local-first MVP.",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    description:
      "Practical React and TypeScript UI architecture, typed state and drag-and-drop behavior.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="full-bleed bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-14 sm:py-20 lg:py-28">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--ink)]/30 pb-4">
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              About Aleksandar
            </p>
            <p className="text-sm text-[var(--ink)]/65">
              Frontend developer · Kragujevac, Serbia
            </p>
          </div>

          <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.6fr)] lg:items-end lg:gap-16">
            <div>
              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-display max-w-[12ch] text-balance text-[clamp(3.5rem,8.7vw,8.8rem)] font-semibold leading-[0.84] tracking-[-0.072em] focus:outline-none"
              >
                Frontend is a change of direction,
                <span className="block text-[var(--violet)]">
                  not a clean restart.
                </span>
              </h1>

              <div className="mt-10 max-w-3xl space-y-5 text-base leading-8 text-[var(--ink-2)] sm:text-lg">
                <p>
                  I am Aleksandar, a frontend-first web developer focused on
                  responsive applications, product interfaces and practical web
                  features. I moved into frontend after earlier IT support work
                  and several years in operations.
                </p>
                <p>
                  The work changed, but the habits carried over: understand the
                  problem, stay accountable for the result, test the important
                  paths and explain the outcome clearly.
                </p>
                <p>
                  Most of my work so far has been in React, TypeScript,
                  JavaScript and Firebase. Those are the tools behind my
                  strongest current projects, but I am also comfortable working
                  with existing codebases, documented APIs and related web
                  technologies.
                </p>
              </div>
            </div>

            <aside
              aria-label="Current professional profile"
              className="border-t border-[var(--ink)] pt-5"
            >
              <h2 className="font-display text-2xl font-semibold tracking-[-0.035em]">
                Current focus
              </h2>
              <dl className="mt-5 border-y border-[var(--ink)]/25">
                {profileDetails.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid gap-2 border-b border-[var(--ink)]/20 py-4 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] lg:grid-cols-1"
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

          <TracePath
            variant="clarity"
            className="mt-10 h-28 text-[var(--violet)] sm:mt-14 sm:h-36"
          />
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <header className="grid gap-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
            The route here
          </p>
          <div>
            <h2 className="font-display max-w-4xl text-balance text-[clamp(2.8rem,5.8vw,5.8rem)] font-semibold leading-[0.91] tracking-[-0.058em]">
              Earlier work still shapes how I build software now.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
              This is a career change with continuity: practical
              troubleshooting became deliberate frontend work, while
              responsibility and follow-through stayed the same.
            </p>
          </div>
        </header>

        <div className="mt-12 border-t border-[var(--line-strong)] sm:mt-16">
          {workingPrinciples.map((principle) => (
            <article
              key={principle.label}
              className="grid gap-5 border-b border-[var(--line)] py-9 sm:py-11 lg:grid-cols-[11rem_minmax(16rem,0.85fr)_minmax(0,1.15fr)] lg:gap-12"
            >
              <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
                {principle.label}
              </p>
              <h3 className="font-display max-w-xl text-[clamp(2rem,3.8vw,3.6rem)] font-semibold leading-[0.96] tracking-[-0.048em]">
                {principle.title}
              </h3>
              <p className="max-w-3xl self-center leading-8 text-[var(--paper-muted)]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24 sm:mt-32">
        <header className="grid gap-6 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-12">
          <p className="text-sm font-semibold text-[var(--violet-text)] lg:pt-2">
            Selected projects
          </p>
          <div>
            <h2 className="font-display max-w-4xl text-balance text-[clamp(2.8rem,5.8vw,5.8rem)] font-semibold leading-[0.91] tracking-[-0.058em]">
              Three projects show three different kinds of work.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
              Together they show backend-connected product flows, mobile-first
              product thinking, and typed React interface work.
            </p>
          </div>
        </header>

        <ul className="mt-12 border-y border-[var(--line-strong)] sm:mt-16">
          {projectLinks.map((project) => (
            <li
              key={project.slug}
              className="border-b border-[var(--line)] last:border-b-0"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring group grid gap-5 py-8 sm:grid-cols-[minmax(0,0.7fr)_minmax(18rem,1fr)_auto] sm:items-center sm:gap-10"
              >
                <h3
                  className={
                    project.slug === "liferecompiled"
                      ? "font-display whitespace-nowrap text-[clamp(1.8rem,6.4vw,3.8rem)] font-semibold leading-none tracking-[-0.055em]"
                      : "font-display text-[clamp(2.2rem,6.4vw,3.8rem)] font-semibold leading-none tracking-[-0.055em]"
                  }
                >
                  {project.title}
                </h3>
                <p className="max-w-2xl leading-7 text-[var(--paper-muted)]">
                  {project.description}
                </p>
                <span
                  aria-hidden="true"
                  className="text-2xl text-[var(--violet-text)] transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="full-bleed mt-24 bg-[var(--paper)] text-[var(--ink)] sm:mt-32">
        <div className="content-frame grid gap-10 py-14 sm:py-20 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              Where to go next
            </p>
            <h2 className="font-display mt-5 max-w-4xl text-balance text-[clamp(2.8rem,5.8vw,5.8rem)] font-semibold leading-[0.91] tracking-[-0.058em]">
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
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 bg-[var(--violet)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--violet-dark)]"
            >
              View case studies <span aria-hidden="true">→</span>
            </Link>
            <a
              href="/Aleksandar_Todorovic_CV.pdf"
              download
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <Link
              to="/contact"
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Contact <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
