import { Link } from "react-router";

import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectTitleText } from "../components/projects/ProjectTitleText";
import { projects } from "../data/projects";

const comparisonLayouts = [
  {
    column: "lg:col-span-5",
    title: "lg:text-[2.75rem]",
    summary: "max-w-[38ch]",
  },
  {
    column: "lg:col-span-4",
    title: "lg:text-[2.35rem]",
    summary: "max-w-[34ch]",
  },
  {
    column: "lg:col-span-3",
    title: "lg:text-[2.05rem]",
    summary: "max-w-[29ch]",
  },
] as const;

export function ProjectsPage() {
  return (
    <>
      <section className="full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-10 sm:py-14 lg:py-16">
          <div className="flex items-center justify-between gap-6 border-b border-[var(--ink)]/25 pb-4 font-mono text-[0.65rem] uppercase tracking-[0.12em]">
            <span>Selected projects</span>
            <span aria-label={`${projects.length} projects`}>
              {projects.length} case studies
            </span>
          </div>

          <div className="grid gap-6 pt-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(18rem,0.55fr)] lg:items-end">
            <h1
              id="page-heading"
              tabIndex={-1}
              className="max-w-4xl font-display text-[clamp(3rem,6.4vw,6rem)] font-semibold leading-[0.96] tracking-[-0.035em] [font-stretch:100%]"
            >
              Selected projects.
            </h1>

            <p className="max-w-xl border-l border-[var(--ink)]/30 pl-5 text-base leading-7 text-[var(--ink)]/70">
              Compare three kinds of frontend proof, then inspect the decisions
              and evidence behind each case study.
            </p>
          </div>

          <ol className="mt-9 grid border-y border-[var(--ink)]/25 md:grid-cols-3 md:gap-x-6 lg:grid-cols-12 lg:gap-x-9">
            {projects.map((project, index) => {
              const layout =
                comparisonLayouts[index] ?? comparisonLayouts[2];

              return (
                <li
                  key={project.slug}
                  className={`border-b border-[var(--ink)]/20 last:border-b-0 md:border-b-0 ${layout.column}`}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="focus-ring group relative grid h-full min-h-36 grid-cols-[minmax(0,1fr)_auto] items-start gap-5 py-6 md:min-h-52 md:py-7"
                  >
                    <span className="min-w-0">
                      <span className="font-mono text-[0.6rem] uppercase tracking-[0.1em] text-[var(--violet-dark)]">
                        {String(index + 1).padStart(2, "0")} ·{" "}
                        {project.proofLabel}
                      </span>
                      <span
                        className={`project-word mt-4 block font-display text-[clamp(1.75rem,3vw,2.4rem)] font-semibold leading-none tracking-[-0.025em] transition-colors duration-200 group-hover:text-[var(--violet-dark)] group-focus-visible:text-[var(--violet-dark)] motion-reduce:transition-none [font-stretch:100%] ${layout.title}`}
                      >
                        <ProjectTitleText title={project.title} />
                      </span>
                      <span
                        className={`mt-5 block text-sm leading-6 text-[var(--ink)]/68 ${layout.summary}`}
                      >
                        {project.proofSummary}
                      </span>
                    </span>

                    <span
                      aria-hidden="true"
                      className="mt-0.5 text-xl text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
                    >
                      →
                    </span>

                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-[0.12] bg-[var(--violet-dark)] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                    />
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section
        aria-label="Detailed project case studies"
        className="full-bleed bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="content-frame">
          <header className="border-b border-[var(--line)] py-8 sm:py-10">
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.11em] text-[var(--paper-muted)]">
              Detailed evidence
            </p>
          </header>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
