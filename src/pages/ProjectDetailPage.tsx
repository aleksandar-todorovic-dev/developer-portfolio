import { Link, useParams } from "react-router";

import { CaseStudySection } from "../components/projects/CaseStudySection";
import { ProjectEvidenceList } from "../components/projects/ProjectEvidenceList";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectLinks } from "../components/projects/ProjectLinks";
import { ProjectSectionIndex } from "../components/projects/ProjectSectionIndex";
import { ProjectSummaryGrid } from "../components/projects/ProjectSummaryGrid";
import { ProjectVisualEvidence } from "../components/projects/ProjectVisualEvidence";
import { TechStackList } from "../components/projects/TechStackList";
import { getProjectBySlug } from "../utils/getProjectBySlug";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section className="full-bleed min-h-[70vh] bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame grid gap-12 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_minmax(14rem,0.38fr)] lg:items-end">
          <div>
            <p className="text-sm font-semibold text-[var(--violet-dark)]">
              Project not found
            </p>
            <h1
              id="page-heading"
              tabIndex={-1}
              className="font-display mt-6 max-w-5xl text-[clamp(3.6rem,9vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em]"
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
                style={{ color: "var(--paper)" }}
                className="focus-ring inline-flex min-h-12 items-center gap-7 bg-[var(--violet)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--violet-dark)]"
              >
                View all projects <span aria-hidden="true">→</span>
              </Link>
              <Link
                to="/"
                className="focus-ring inline-flex min-h-12 items-center gap-7 border border-[var(--ink)] px-5 py-3 text-sm font-semibold transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)]"
              >
                Return home
              </Link>
            </div>
          </div>

          <p
            aria-hidden="true"
            className="font-display select-none text-[clamp(7rem,18vw,15rem)] font-semibold leading-[0.72] tracking-[-0.1em] text-transparent lg:text-right"
            style={{ WebkitTextStroke: "1px var(--violet)" }}
          >
            404
          </p>
        </div>
      </section>
    );
  }

  return (
    <article>
      <div className="mb-8 flex items-center justify-between gap-5">
        <Link
          to="/projects"
          className="focus-ring inline-flex items-center gap-3 border-b border-[var(--line-strong)] pb-2 text-sm font-semibold text-[var(--paper-muted)] transition-colors hover:border-[var(--paper)] hover:text-[var(--paper)]"
        >
          <span aria-hidden="true">←</span>
          All projects
        </Link>
      </div>

      <ProjectHero
        title={project.title}
        shortDescription={project.shortDescription}
        category={project.category}
        sectionCount={project.caseStudySections.length}
      />

      <ProjectSummaryGrid
        proofSummary={project.proofSummary}
        keyDecision={project.keyDecision}
        tradeoff={project.tradeoff}
      />

      <ProjectVisualEvidence
        key={project.slug}
        screenshots={project.screenshots}
      />

      <div className="mt-20 space-y-20 sm:mt-28 sm:space-y-28">
        <TechStackList technologies={project.techStack} />
        <ProjectEvidenceList evidence={project.evidence} />
      </div>

      <ProjectLinks links={project.links} />
      <ProjectSectionIndex sections={project.caseStudySections} />

      {project.caseStudySections.length > 0 ? (
        <div className="mt-24 sm:mt-32">
          <header className="grid gap-8 border-y border-[var(--line-strong)] py-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:py-14">
            <div>
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--violet-text)]">
                Case study
              </p>
              <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper-muted)]">
                {String(project.caseStudySections.length).padStart(2, "0")}{" "}
                sections
              </p>
            </div>

            <div>
              <h2 className="font-display max-w-4xl text-[clamp(3rem,7vw,6.8rem)] leading-[0.84] font-semibold tracking-[-0.06em] text-[var(--paper)]">
                Inside the project.
              </h2>
              <p className="font-body mt-6 max-w-2xl text-lg leading-8 text-[var(--paper-muted)]">
                A structured breakdown of the decisions, implementation,
                constraints, validation, and lessons behind the project.
              </p>
            </div>
          </header>

          <div>
            {project.caseStudySections.map((section, index) => (
              <CaseStudySection
                key={section.id}
                section={section}
                index={index}
                total={project.caseStudySections.length}
                projectSlug={project.slug}
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
