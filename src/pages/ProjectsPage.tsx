import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <section>
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
        Three projects, three proofs
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Each project exists here for a different reason.
      </h1>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
        Firebase engineering, product-focused MVP thinking, and practical React
        + TypeScript interface work.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
