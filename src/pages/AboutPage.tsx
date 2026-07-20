import { Link } from "react-router";

import { SectionHeader } from "../components/ui";
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
    label: "Strongest project proof",
    value: "React, TypeScript, JavaScript and Firebase",
  },
  {
    label: "Open to",
    value: "Roles, trial work and clearly scoped web problems",
  },
];

const workingPrinciples: WorkingPrinciple[] = [
  {
    label: "Current direction",
    title: "Frontend-first, without treating one stack as a wall.",
    description:
      "My strongest current evidence comes from React, TypeScript, JavaScript and Firebase because that is where I have built the deepest projects so far. I also work comfortably through existing frontend code, documented APIs, managed services and nearby web technologies when the scope is clear and the result can be verified.",
  },
  {
    label: "Working approach",
    title: "Understand the flow before changing the code.",
    description:
      "I prefer to clarify the real outcome, inspect the relevant state and data flow, keep the implementation contained, and then validate normal and edge-case behavior. I use documentation and AI-assisted tools to investigate faster, but I still need to understand the final change, test it and explain what was delivered.",
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
      "Product thinking, mobile-first execution and deliberate local-first MVP scope.",
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    proof:
      "Practical React and TypeScript UI architecture, typed state and drag-and-drop behavior.",
  },
];

export function AboutPage() {
  return (
    <>
      <section className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
            About / Current direction
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F5F2FF] sm:text-5xl lg:text-6xl">
            I build from a frontend center, not from a fixed technology box.
          </h1>

          <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-[#A9A1BA]">
            <p>
              I am Aleksandar, a frontend-first web developer focused on
              building responsive applications, product interfaces and clearly
              scoped web features.
            </p>

            <p>
              React, TypeScript, JavaScript and Firebase are the strongest parts
              of my current project evidence. They describe where I have worked
              most deeply so far, not the only kind of technical problem I am
              willing to approach.
            </p>
          </div>
        </div>

        <aside
          aria-label="Current professional profile"
          className="border-y border-[#2B2340] bg-[#0D0B14]"
        >
          <p className="border-b border-[#2B2340] px-5 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
            Current working profile
          </p>

          <dl>
            {profileSignals.map((signal) => (
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
          eyebrow="How I work"
          title="A practical delivery process, not a claim to know everything."
          description="The goal is to understand enough of the real problem to make a controlled change, verify it and communicate the result honestly."
        />

        <div className="mt-10 border-y border-[#2B2340]">
          {workingPrinciples.map((principle, index) => (
            <article
              key={principle.label}
              className="grid gap-5 border-b border-[#2B2340] py-8 last:border-b-0 lg:grid-cols-[150px_minmax(220px,0.8fr)_minmax(0,1.4fr)] lg:gap-10"
            >
              <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8B849A]">
                {String(index + 1).padStart(2, "0")} / {principle.label}
              </p>

              <h2 className="text-xl font-semibold leading-7 text-[#F5F2FF]">
                {principle.title}
              </h2>

              <p className="max-w-3xl leading-7 text-[#A9A1BA]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <SectionHeader
          eyebrow="Current proof"
          title="The projects show different parts of the same working direction."
          description="Each project exists in the portfolio because it makes a different kind of technical or product decision visible."
        />

        <div className="mt-10 border-y border-[#2B2340]">
          {projectProofLinks.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group grid gap-4 border-b border-[#2B2340] py-7 transition last:border-b-0 hover:bg-[#11101A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] md:grid-cols-[70px_220px_minmax(0,1fr)_auto] md:items-center md:px-4"
            >
              <span className="font-mono text-sm text-[#5F5870]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-semibold text-[#F5F2FF]">
                {project.title}
              </span>

              <span className="max-w-2xl leading-7 text-[#A9A1BA]">
                {project.proof}
              </span>

              <span
                aria-hidden="true"
                className="text-[#8B849A] transition group-hover:translate-x-1 group-hover:text-[#C4B5FD]"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-24 border-y border-[#2B2340] py-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
              Next step
            </p>

            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF] sm:text-4xl">
              The work is easier to judge through the projects than through a
              long biography.
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-[#A9A1BA]">
              Review the case studies, download the current CV, or contact me
              about a frontend, web, product-supporting or clearly bounded
              technical opportunity.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center justify-center border border-[#8B5CF6] bg-[#8B5CF6] px-5 text-sm font-semibold text-white transition hover:bg-[#A855F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
            >
              View case studies
            </Link>

            <a
              href="/Aleksandar_Todorovic_CV.pdf"
              download
              className="inline-flex min-h-12 items-center justify-center border border-[#3A3150] px-5 text-sm font-semibold text-[#D8D2E8] transition hover:border-[#8B5CF6] hover:text-[#F5F2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              Download CV
            </a>

            <Link
              to="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-[#3A3150] px-5 text-sm font-semibold text-[#D8D2E8] transition hover:border-[#8B5CF6] hover:text-[#F5F2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
