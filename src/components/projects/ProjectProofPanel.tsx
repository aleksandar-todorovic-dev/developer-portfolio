import { Link } from "react-router";

import type { Project } from "../../types/project";

type ProjectProofPanelProps = {
  projects: Project[];
};

export function ProjectProofPanel({ projects }: ProjectProofPanelProps) {
  return (
    <aside className="full-bleed border-y border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame grid lg:grid-cols-[13rem_minmax(0,1fr)]">
        <div className="border-b border-[var(--ink)]/20 py-6 lg:border-b-0 lg:border-r lg:pr-8">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.15em] text-[var(--violet-dark)]">
            Project map
          </p>
          <p className="mt-3 max-w-44 text-sm leading-6 text-[var(--ink)]/70">
            Three routes into the work, each grounded in a different kind of
            decision.
          </p>
        </div>

        <ol className="grid sm:grid-cols-3 lg:pl-8">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className="border-b border-[var(--ink)]/20 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring group flex h-full min-h-28 items-center justify-between gap-4 px-1 py-5 sm:px-5"
              >
                <span>
                  <span className="font-mono text-[0.62rem] text-[var(--violet-dark)]">
                    {String(index + 1).padStart(2, "0")} / {project.proofLabel}
                  </span>
                  <span className="project-word mt-2 block font-display text-xl font-semibold tracking-[-0.035em]">
                    {project.title}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-2"
                >
                  →
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
