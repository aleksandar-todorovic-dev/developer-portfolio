import { ProjectTitleText } from "./ProjectTitleText";

type ProjectHeroProps = {
  title: string;
  shortDescription: string;
  proofLabel: string;
};

export function ProjectHero({
  title,
  shortDescription,
  proofLabel,
}: ProjectHeroProps) {
  return (
    <header className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame py-12 sm:py-18 lg:py-22">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--ink)]/25 pb-4">
          <p className="text-sm font-semibold text-[var(--violet-dark)]">
            Project case study
          </p>
          <p className="text-sm text-[var(--ink)]/65">{proofLabel}</p>
        </div>

        <h1
          id="page-heading"
          tabIndex={-1}
          className="project-word mt-10 max-w-[11ch] font-display text-[clamp(3rem,11vw,8.75rem)] font-semibold leading-[0.96] tracking-[-0.028em] md:leading-[0.92] md:tracking-[-0.04em]"
        >
          <ProjectTitleText title={title} />
        </h1>

        <p className="mt-8 max-w-[54ch] text-lg leading-8 text-[var(--ink)]/72 sm:text-xl">
          {shortDescription}
        </p>
      </div>
    </header>
  );
}
