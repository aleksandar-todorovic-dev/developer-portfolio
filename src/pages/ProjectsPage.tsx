import { Link } from "react-router";

import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <section>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
        Projects
      </p>

      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Selected project case studies.
      </h1>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            to={`/projects/${project.slug}`}
            className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-5 transition hover:border-[#8B5CF6]"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
              {project.proofLabel}
            </p>

            <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>

            <p className="mt-3 text-sm leading-6 text-[#A9A1BA]">
              {project.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
