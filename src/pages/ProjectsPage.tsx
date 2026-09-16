import { Link } from "react-router";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projectFacts } from "../data/projectFacts";
import { projects } from "../data/projects";

export function ProjectsPage() {
  return (
    <>
      <section className="full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-12 sm:py-16 lg:py-20">
          <p className="eyebrow text-[var(--violet-dark)]">Selected projects</p>
          <h1
            id="page-heading"
            tabIndex={-1}
            className="mt-7 max-w-[17ch] font-display text-[clamp(2.9rem,7.5vw,7rem)] font-semibold leading-[0.96] tracking-[-0.045em]"
          >
            Three projects.
            <br />
            Three kinds of frontend proof.
          </h1>
          <p className="mt-7 max-w-[54ch] text-lg leading-8 text-[var(--ink)]/75">
            Engineering depth, product thinking and practical React + TypeScript
            UI — shown through real interfaces and case studies.
          </p>
          <nav
            aria-label="Compare project evidence"
            className="mt-8 border-t border-[var(--ink)]/25 pt-3"
          >
            <ol className="flex flex-wrap gap-x-10 gap-y-1">
              {projects.map((project, index) => (
                <li key={project.slug}>
                  <Link
                    to={`#entry-${project.slug}`}
                    className="focus-ring inline-flex min-h-12 items-center gap-3 text-sm font-semibold"
                  >
                    <span className="eyebrow text-[var(--violet-dark)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {projectFacts[project.slug].role}
                    <span aria-hidden="true">↓</span>
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </section>
      <section aria-label="Project case studies">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>
    </>
  );
}
