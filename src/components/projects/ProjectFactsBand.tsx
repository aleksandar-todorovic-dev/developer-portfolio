import type { ProjectLink } from "../../types/project";
import { ProjectLinks } from "./ProjectLinks";
import { TechStackList } from "./TechStackList";

type ProjectFactsBandProps = {
  proofSummary: string;
  keyDecision: string;
  tradeoff: string;
  technologies: string[];
  links: ProjectLink[];
};

export function ProjectFactsBand({
  proofSummary,
  keyDecision,
  tradeoff,
  technologies,
  links,
}: ProjectFactsBandProps) {
  return (
    <section
      aria-labelledby="project-facts-heading"
      className="full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame py-8 sm:py-11">
        <h2 id="project-facts-heading" className="sr-only">
          Project decision and facts
        </h2>

        <div className="grid border-b border-[var(--ink)]/25 lg:grid-cols-12">
          <div className="pb-5 lg:col-span-5 lg:border-r lg:border-[var(--ink)]/25 lg:pr-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--ink)]/65">
              Demonstrates
            </p>
            <p className="mt-3 max-w-2xl text-[0.95rem] leading-7 sm:text-base">
              {proofSummary}
            </p>
          </div>

          <div className="border-t border-[var(--ink)]/25 py-5 lg:col-span-7 lg:border-t-0 lg:py-0 lg:pl-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--violet-dark)]">
              Key decision
            </p>
            <p className="mt-3 max-w-3xl text-[0.95rem] leading-7 sm:text-base">
              {keyDecision}
            </p>
          </div>
        </div>

        <div className="grid border-b border-[var(--ink)]/25 lg:grid-cols-12">
          <div className="py-5 lg:col-span-7 lg:border-r lg:border-[var(--ink)]/25 lg:pr-10">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--ink)]/65">
              Tradeoff
            </p>
            <p className="mt-3 max-w-3xl text-[0.95rem] leading-7 text-[var(--ink)]/72">
              {tradeoff}
            </p>
          </div>

          <div className="border-t border-[var(--ink)]/25 py-5 lg:col-span-5 lg:border-t-0 lg:pl-10">
            <TechStackList technologies={technologies} />
          </div>
        </div>

        <ProjectLinks links={links} />
      </div>
    </section>
  );
}
