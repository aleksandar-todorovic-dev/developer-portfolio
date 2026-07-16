import { Link } from "react-router";

import { SectionHeader } from "../ui/SectionHeader";
import { capabilityProofs } from "../../data/capabilityProofs";
import { getProjectBySlug } from "../../utils/getProjectBySlug";

export function ProjectStackSection() {
  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="Capabilities through real work"
        title="The stack matters when it solves something."
        description="Each capability is connected to a real product decision, technical problem, or working project."
      />

      <div className="mt-10 grid gap-x-10 lg:grid-cols-2">
        {capabilityProofs.map((capability, index) => (
          <article
            key={capability.title}
            className="border-t border-[#2B2340] py-7"
          >
            <p className="text-xs font-medium text-[#8B849A]">
              {String(index + 1).padStart(2, "0")}
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#F5F2FF]">
              {capability.title}
            </h3>

            <p className="mt-3 leading-7 text-[#A9A1BA]">
              {capability.description}
            </p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {capability.projectSlugs.map((slug) => {
                const project = getProjectBySlug(slug);

                if (!project) {
                  return null;
                }

                return (
                  <li key={project.slug}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="inline-flex rounded-full border border-[#3A3150] px-3 py-1 text-sm text-[#C4B5FD] transition hover:border-[#8B5CF6] hover:text-[#F5F2FF]"
                    >
                      {project.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
