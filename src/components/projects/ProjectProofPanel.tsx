import { Link } from "react-router";

import type { Project } from "../../types/project";
import { ProjectTitleText } from "./ProjectTitleText";

type ProjectProofPanelProps = {
  projects: Project[];
};

export function ProjectProofPanel({ projects }: ProjectProofPanelProps) {
  return (
    <nav
      aria-label="Selected project evidence"
      className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame">
        <ol className="relative grid md:grid-cols-3 md:gap-x-5 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,1fr)_minmax(0,0.88fr)] lg:gap-x-8">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className="border-b border-[var(--ink)]/20 last:border-b-0 md:border-b-0"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring group relative grid h-full min-h-32 grid-cols-[minmax(0,1fr)_auto] items-start gap-5 py-6 md:min-h-48 md:px-2 md:py-7 lg:px-4"
              >
                <span className="min-w-0">
                  <span className="font-mono text-[0.61rem] uppercase tracking-[0.1em] text-[var(--violet-dark)]">
                    {String(index + 1).padStart(2, "0")} · {project.proofLabel}
                  </span>
                  <span className="project-word mt-2 block font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-none tracking-[-0.025em] transition-colors duration-200 group-hover:text-[var(--violet-dark)] group-focus-visible:text-[var(--violet-dark)] motion-reduce:transition-none [font-stretch:100%]">
                    <ProjectTitleText title={project.title} />
                  </span>
                  <span className="mt-4 block max-w-[38ch] text-[0.76rem] leading-5 text-[var(--ink)]/65">
                    {project.proofSummary}
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="mt-0.5 text-xl text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:group-hover:translate-x-0 motion-reduce:group-focus-visible:translate-x-0"
                >
                  →
                </span>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-0 left-0 h-0.5 w-12 origin-left scale-x-0 bg-[var(--violet-dark)] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none md:left-2 lg:left-4"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
