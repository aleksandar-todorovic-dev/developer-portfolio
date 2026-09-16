import type { Project } from "../../types/project";
import { projectFacts } from "../../data/projectFacts";
import { ProjectTitleText } from "./ProjectTitleText";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame py-8 sm:py-10 lg:py-12">
        <p className="eyebrow text-[var(--violet-dark)]">
          Project case study / {projectFacts[project.slug].role}
        </p>
        <h1
          id="page-heading"
          tabIndex={-1}
          className="project-word mt-5 font-display text-[clamp(2.7rem,8.5vw,7rem)] font-semibold leading-[0.96] tracking-[-0.04em]"
        >
          <ProjectTitleText title={project.title} />
        </h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <p className="max-w-[54ch] text-base leading-7 text-[var(--ink)]/75 sm:text-lg sm:leading-8">
            {project.shortDescription}
          </p>
          <div>
            <p className="eyebrow text-[var(--ink)]/65">
              {project.techStack.join(" · ")}
            </p>
            <ProjectLinks links={project.links} />
          </div>
        </div>
      </div>
    </header>
  );
}
