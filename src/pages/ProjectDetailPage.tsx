import { Link, useParams } from "react-router";
import { CaseStudySection } from "../components/projects/CaseStudySection";
import { ProjectCaseScene } from "../components/projects/ProjectCaseScenes";
import { ProjectFactsBand } from "../components/projects/ProjectFactsBand";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectSectionIndex } from "../components/projects/ProjectSectionIndex";
import { ProjectTitleText } from "../components/projects/ProjectTitleText";
import { ProjectVisualEvidence } from "../components/projects/ProjectVisualEvidence";
import { projectFacts } from "../data/projectFacts";
import { projects } from "../data/projects";
import { getProjectBySlug } from "../utils/getProjectBySlug";
import { isProjectScene } from "../utils/isProjectScene";
import { NotFoundPage } from "./NotFoundPage";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <NotFoundPage projectNotFound />;
  const projectIndex = projects.findIndex(
    (candidate) => candidate.slug === project.slug,
  );
  const nextProject = projects[(projectIndex + 1) % projects.length];
  return (
    <article>
      <div className="py-2">
        <Link
          to="/projects"
          className="focus-ring inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-[var(--paper-muted)]"
        >
          <span aria-hidden="true">←</span>All projects
        </Link>
      </div>
      <ProjectHero project={project} />
      <ProjectFactsBand facts={projectFacts[project.slug]} />
      <ProjectVisualEvidence
        key={project.slug}
        screenshots={project.screenshots}
      />
      <section
        aria-labelledby="inside-project-heading"
        className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
      >
        <div className="content-frame py-9 sm:py-12">
          <h2
            id="inside-project-heading"
            className="font-display text-3xl font-semibold tracking-[-0.03em]"
          >
            Inside the project
          </h2>
          <p className="mt-3 mb-5 max-w-2xl text-sm leading-7 text-[var(--ink)]/75">
            The implementation, the decisions behind it, and what the current
            version still leaves open.
          </p>
          <ProjectSectionIndex sections={project.caseStudySections} />
        </div>
      </section>
      {project.caseStudySections.map((section) =>
        isProjectScene(project, section) ? (
          <ProjectCaseScene
            key={section.id}
            project={project}
            section={section}
          />
        ) : (
          <CaseStudySection key={section.id} section={section} />
        ),
      )}
      {nextProject ? (
        <nav
          aria-label="Next project"
          className={`full-bleed ${nextProject.slug === "training-app" ? "bg-[#10272a]" : nextProject.slug === "taskflow" ? "bg-[var(--paper-deep)] text-[var(--ink)]" : "bg-[var(--ink)]"}`}
        >
          <Link
            to={`/projects/${nextProject.slug}`}
            className="focus-ring content-frame group block py-12 sm:py-16 lg:py-20"
          >
            <p className="eyebrow">
              Next / {projectFacts[nextProject.slug].role}
            </p>
            <span className="mt-6 flex items-end justify-between gap-5">
              <span className="project-word font-display text-[clamp(2.5rem,7vw,7rem)] font-semibold leading-none tracking-[-0.045em]">
                <ProjectTitleText title={nextProject.title} />
              </span>
              <span aria-hidden="true" className="text-3xl sm:text-5xl">
                →
              </span>
            </span>
            <span className="mt-6 block max-w-2xl text-base leading-7 opacity-80">
              {nextProject.shortDescription}
            </span>
          </Link>
        </nav>
      ) : null}
    </article>
  );
}
