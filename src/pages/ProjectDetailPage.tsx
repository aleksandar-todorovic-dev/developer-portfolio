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
        <div className="content-frame py-16 sm:py-24">
          <Link
            to="/projects"
            className="focus-ring inline-flex items-center gap-3 border-b border-[var(--ink)] pb-2 font-mono text-xs uppercase tracking-[0.18em]"
          >
            <span aria-hidden="true">←</span>
            Project register
          </Link>

          <p className="signal-label mt-16 w-fit bg-[var(--signal)] text-[var(--ink)]">
            Resolve error / 404
          </p>

          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-display mt-7 max-w-5xl text-[clamp(3.8rem,10vw,9rem)] leading-[0.82] font-semibold tracking-[-0.07em]"
          >
            This project does not exist.
          </h1>

          <p className="font-body mt-8 max-w-2xl border-l-2 border-[var(--violet)] pl-5 text-lg leading-8 text-[var(--ink)]/70">
            Check the project URL or return to the projects page.
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
          className="focus-ring inline-flex items-center gap-3 border-b border-[var(--line-strong)] pb-2 font-mono text-xs uppercase tracking-[0.18em] text-[var(--paper-muted)] transition-colors hover:border-[var(--signal)] hover:text-[var(--paper)]"
        >
          <span aria-hidden="true">←</span>
          Project register
        </Link>

        <span
          aria-hidden="true"
          className="hidden font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--paper-muted)] sm:block"
        >
          TRACE / {project.slug}
        </span>
      </div>

      <ProjectHero
        proofLabel={project.proofLabel}
        title={project.title}
        shortDescription={project.shortDescription}
        slug={project.slug}
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
              <p className="signal-label w-fit bg-[var(--violet)] text-[var(--paper)]">
                Case study
              </p>
              <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper-muted)]">
                {String(project.caseStudySections.length).padStart(2, "0")}{" "}
                records
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
              />
            ))}
          </div>
        </div>
      ) : null}
    </article>
  );
}
