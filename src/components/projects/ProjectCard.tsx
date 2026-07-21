import { Link } from "react-router";

import type { Project } from "../../types/project";

type ProjectCardVariant = "compact" | "detailed";

type ProjectCardProps = {
  project: Project;
  variant?: ProjectCardVariant;
};

export function ProjectCard({
  project,
  variant = "detailed",
}: ProjectCardProps) {
  const isDetailed = variant === "detailed";
  const TitleTag = isDetailed ? "h2" : "h3";

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-[#2B2340] bg-[#11101A] p-6 transition duration-200 hover:-translate-y-1 hover:border-[#8B5CF6]">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
        {project.proofLabel}
      </p>

      <TitleTag className="mt-3 text-2xl font-semibold text-[#F5F2FF]">
        {project.title}
      </TitleTag>

      <p className="mt-3 leading-7 text-[#A9A1BA]">
        {project.shortDescription}
      </p>

      <div className="mt-6 border-l-2 border-[#4C1D95] pl-4">
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#A9A1BA]">
          Key decision
        </p>

        <p className="mt-2 text-sm leading-6 text-[#D8D2E8]">
          {project.keyDecision}
        </p>
      </div>

      {isDetailed && (
        <>
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#A9A1BA]">
              Highlights
            </p>

            <ul className="mt-3 space-y-2">
              {project.evidence.map((item) => (
                <li
                  key={item.label}
                  className="rounded-xl border border-[#2B2340] bg-[#181423] px-4 py-3"
                >
                  <p className="text-sm font-medium text-[#C4B5FD]">
                    {item.label}
                  </p>

                  <p className="mt-1 text-sm leading-6 text-[#A9A1BA]">
                    {item.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-[#2B2340] px-3 py-1 text-xs text-[#A9A1BA]"
              >
                {technology}
              </li>
            ))}
          </ul>
        </>
      )}

      <Link
        to={`/projects/${project.slug}`}
        className="mt-auto inline-flex items-center gap-2 pt-8 font-medium text-[#C4B5FD] transition group-hover:text-[#F5F2FF]"
      >
        View case study
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
