import { Link, useParams } from "react-router";

import { CaseStudySection } from "../components/projects/CaseStudySection";
import { ProjectEvidenceList } from "../components/projects/ProjectEvidenceList";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectLinks } from "../components/projects/ProjectLinks";
import { ProjectSummaryGrid } from "../components/projects/ProjectSummaryGrid";
import { ProjectSectionIndex } from "../components/projects/ProjectSectionIndex";
import { TechStackList } from "../components/projects/TechStackList";
import { getProjectBySlug } from "../utils/getProjectBySlug";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section>
        <Link
          to="/projects"
          className="text-sm font-medium text-[#C4B5FD] hover:text-[#F5F2FF]"
        >
          ← Back to projects
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
          Project not found
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This project does not exist.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
          Check the project URL or return to the projects page.
        </p>
      </section>
    );
  }

  return (
    <section>
      <Link
        to="/projects"
        className="text-sm font-medium text-[#C4B5FD] hover:text-[#F5F2FF]"
      >
        ← Back to projects
      </Link>

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

      <div className="mt-14 space-y-12">
        <TechStackList technologies={project.techStack} />

        <ProjectEvidenceList evidence={project.evidence} />
      </div>

      <ProjectLinks links={project.links} />
      <ProjectSectionIndex sections={project.caseStudySections} />

      {project.caseStudySections.length > 0 && (
        <div className="mt-20">
          <div className="border-t border-[#2B2340] pt-10">
            <div className="grid gap-5 lg:grid-cols-[180px_minmax(0,1fr)]">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
                Case study
              </p>

              <div>
                <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF] sm:text-4xl">
                  Project record
                </h2>

                <p className="mt-4 max-w-2xl leading-7 text-[#A9A1BA]">
                  A structured breakdown of the decisions, implementation,
                  constraints, validation, and lessons behind the project.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10">
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
      )}
    </section>
  );
}
