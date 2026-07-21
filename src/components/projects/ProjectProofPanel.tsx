import { Link } from "react-router";

import type { Project } from "../../types/project";

type ProjectProofPanelProps = {
  projects: Project[];
};

export function ProjectProofPanel({ projects }: ProjectProofPanelProps) {
  return (
    <aside className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#A9A1BA]">
          Selected projects
        </p>

        <span className="text-xs text-[#C4B5FD]">
          {projects.length} projects
        </span>
      </div>

      <ul className="mt-5 divide-y divide-[#2B2340]">
        {projects.map((project) => (
          <li key={project.slug} className="py-4 first:pt-0 last:pb-0">
            <Link to={`/projects/${project.slug}`} className="group block">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-medium text-[#F5F2FF]">{project.title}</p>

                  <p className="mt-1 text-sm text-[#A9A1BA]">
                    {project.proofLabel}
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="text-[#C4B5FD] transition group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
