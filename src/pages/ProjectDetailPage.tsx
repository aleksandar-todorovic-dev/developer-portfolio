import { Link, useParams } from "react-router";

import { CaseStudySection } from "../components/projects/CaseStudySection";
import { ProjectEvidenceList } from "../components/projects/ProjectEvidenceList";
import { ProjectHero } from "../components/projects/ProjectHero";
import { ProjectLinks } from "../components/projects/ProjectLinks";
import { ProjectSummaryGrid } from "../components/projects/ProjectSummaryGrid";
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
      />

      <ProjectSummaryGrid
        proofSummary={project.proofSummary}
        keyDecision={project.keyDecision}
        tradeoff={project.tradeoff}
      />

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <TechStackList technologies={project.techStack} />

        <ProjectEvidenceList evidence={project.evidence} />
      </div>

      <ProjectLinks links={project.links} />

      {project.caseStudySections.length > 0 && (
        <div className="mt-16">
          {project.caseStudySections.map((section) => (
            <CaseStudySection key={section.id} section={section} />
          ))}
        </div>
      )}
    </section>
  );
}
