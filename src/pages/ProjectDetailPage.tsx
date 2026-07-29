import { Link, useParams } from "react-router";

import { CaseStudySection } from "../components/projects/CaseStudySection";
import { ProjectFactsBand } from "../components/projects/ProjectFactsBand";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectSectionIndex } from "../components/projects/ProjectSectionIndex";
import { ProjectTitleText } from "../components/projects/ProjectTitleText";
import { ProjectVisualEvidence } from "../components/projects/ProjectVisualEvidence";
import { projects } from "../data/projects";
import { getProjectBySlug } from "../utils/getProjectBySlug";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="full-bleed min-h-[65vh] bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-16 sm:py-24">
          <p className="text-sm font-semibold text-[var(--violet-dark)]">
            Project not found
          </p>
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-display mt-6 max-w-4xl text-[clamp(2.8rem,7vw,5.5rem)] font-semibold leading-[1] tracking-[-0.03em]"
          >
            There isn&apos;t a project at this address.
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--ink-2)]">
            The URL may be incomplete or mistyped. All published work is
            available from the projects page.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="focus-ring inline-flex min-h-12 items-center gap-6 bg-[var(--violet-dark)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--ink)]"
            >
              View all projects <span aria-hidden="true">→</span>
            </Link>
            <Link
              to="/"
              className="focus-ring inline-flex min-h-12 items-center gap-6 border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
            >
              Return home <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const projectIndex = projects.findIndex(
    (candidate) => candidate.slug === project.slug,
  );
  const nextProject =
    projects[(projectIndex + 1) % projects.length] ?? projects[0];

  return (
    <article>
      <div className="py-6">
        <Link
          to="/projects"
          className="focus-ring inline-flex items-center gap-3 border-b border-[var(--line-strong)] pb-2 text-sm font-semibold text-[var(--paper-muted)] transition-colors hover:border-[var(--paper)] hover:text-[var(--paper)]"
        >
          Back to Projects <span aria-hidden="true">→</span>
        </Link>
      </div>

      <ProjectHero
        title={project.title}
        shortDescription={project.shortDescription}
        proofLabel={project.proofLabel}
      />

      <ProjectFactsBand
        proofSummary={project.proofSummary}
        keyDecision={project.keyDecision}
        tradeoff={project.tradeoff}
        technologies={project.techStack}
        links={project.links}
      />

      <ProjectVisualEvidence
        key={project.slug}
        screenshots={project.screenshots}
      />

      {project.caseStudySections.length > 0 ? (
        <>
          <section
            aria-labelledby="inside-project-heading"
            className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
          >
            <div className="content-frame py-10 sm:py-14">
              <header className="grid gap-3 pb-6 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-end">
                <p className="text-sm font-semibold text-[var(--violet-dark)]">
                  Case study
                </p>
                <div>
                  <h2
                    id="inside-project-heading"
                    className="font-display text-[clamp(2.7rem,5.5vw,5.2rem)] font-semibold leading-[1.02] tracking-[-0.025em] md:leading-none md:tracking-[-0.03em]"
                  >
                    Inside the project
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-[var(--ink)]/68">
                    Decisions, implementation, constraints and validation,
                    followed in the order they shaped the work.
                  </p>
                </div>
              </header>

              <ProjectSectionIndex sections={project.caseStudySections} />
            </div>
          </section>

          <div>
            {project.caseStudySections.map((section, index) => (
              <CaseStudySection
                key={section.id}
                section={section}
                evidence={project.evidence.filter(
                  (item) => item.sectionId === section.id,
                )}
                index={index}
                total={project.caseStudySections.length}
                projectSlug={project.slug}
              />
            ))}
          </div>
        </>
      ) : null}

      {nextProject ? (
        <nav
          aria-label="Next project"
          className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
        >
          <div className="content-frame py-12 sm:py-16">
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              Next project
            </p>
            <Link
              to={`/projects/${nextProject.slug}`}
              className="focus-ring group mt-5 flex items-end justify-between gap-6 border-t border-[var(--ink)]/25 pt-6"
            >
              <span className="project-word max-w-[12ch] font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1] tracking-[-0.03em]">
                <ProjectTitleText title={nextProject.title} />
              </span>
              <span
                aria-hidden="true"
                className="pb-1 text-3xl text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
              >
                →
              </span>
            </Link>
          </div>
        </nav>
      ) : null}
    </article>
  );
}
