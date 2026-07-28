import { Link } from "react-router";

import type { Project } from "../../types/project";

type ProjectProofPanelProps = {
  projects: Project[];
};

export function ProjectProofPanel({ projects }: ProjectProofPanelProps) {
  return (
    <aside className="relative overflow-hidden border border-[var(--line-strong)] bg-[var(--violet)] text-[var(--paper)]">
      <div
        aria-hidden="true"
        className="absolute -right-12 -top-12 size-28 rotate-45 border border-[var(--paper)]/25"
      />

      <div className="relative flex items-center justify-between gap-4 border-b border-[var(--paper)]/30 px-5 py-4">
        <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em]">
          Selected proof
        </p>

        <span className="bg-[var(--signal)] px-2 py-1 font-mono text-[0.62rem] text-[var(--ink)]">
          {String(projects.length).padStart(2, "0")} RECORDS
        </span>
      </div>

      <ol className="relative">
        {projects.map((project, index) => (
          <li key={project.slug} className="border-b border-[var(--paper)]/30 last:border-b-0">
            <Link
              to={`/projects/${project.slug}`}
              className="focus-ring group grid grid-cols-[3rem_minmax(0,1fr)_2rem] gap-3 px-5 py-5"
            >
              <span className="font-mono text-xs text-[var(--signal)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                <span className="font-display block text-xl font-semibold tracking-[-0.035em]">
                  {project.title}
                </span>
                <span className="font-mono mt-2 block text-[0.61rem] uppercase tracking-[0.15em] text-[var(--paper)]">
                  {project.proofLabel}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-xl transition-transform duration-200 group-hover:translate-x-2"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
}
