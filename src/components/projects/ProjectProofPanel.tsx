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
        <ol className="grid md:grid-cols-3">
          {projects.map((project, index) => (
            <li
              key={project.slug}
              className="border-b border-[var(--ink)]/20 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring group relative grid min-h-24 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-4 md:min-h-32 md:px-6"
              >
                <span>
                  <span className="font-mono text-[0.61rem] uppercase tracking-[0.1em] text-[var(--violet-dark)]">
                    {String(index + 1).padStart(2, "0")} · {project.proofLabel}
                  </span>
                  <span className="project-word mt-2 block font-display text-[clamp(1.4rem,3vw,2rem)] font-semibold leading-none tracking-[-0.025em] [font-stretch:100%]">
                    <ProjectTitleText title={project.title} />
                  </span>
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                >
                  →
                </span>

                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-[var(--violet-dark)] transition-transform duration-200 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
                />
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
