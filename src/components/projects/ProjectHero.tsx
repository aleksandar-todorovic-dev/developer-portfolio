import type { ProjectCategory } from "../../types/project";

type ProjectHeroProps = {
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  sectionCount: number;
};

const categoryLabels: Record<ProjectCategory, string> = {
  "firebase-engineering": "Firebase engineering",
  "product-mvp": "Product-focused MVP",
  "typescript-ui": "TypeScript interface",
};

export function ProjectHero({
  title,
  shortDescription,
  category,
  sectionCount,
}: ProjectHeroProps) {
  return (
    <header className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame relative py-12 sm:py-18 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
          <div className="min-w-0">
            <p className="mb-7 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--violet-dark)]">
              Project case study
            </p>

            <h1
              id="page-heading"
              tabIndex={-1}
              className="project-word max-w-6xl font-display text-[clamp(2.25rem,11vw,9rem)] font-semibold leading-[0.82] tracking-[-0.07em]"
            >
              {title}
            </h1>

            <div
              aria-hidden="true"
              className="mt-7 h-1 w-full max-w-3xl bg-[var(--violet-dark)]"
            />

            <p className="mt-8 max-w-3xl font-body text-lg leading-8 text-[var(--ink)]/72 sm:text-xl">
              {shortDescription}
            </p>
          </div>

          <aside aria-label="Project overview" className="border-l border-[var(--ink)]/30 pl-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--ink)]/70">
              At a glance
            </p>

            <dl className="mt-5 border-y border-[var(--ink)]/30">
              <div className="grid grid-cols-[5.4rem_1fr] gap-4 border-b border-[var(--ink)]/20 py-4">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[var(--ink)]/65">
                  Focus
                </dt>
                <dd className="font-body text-sm font-semibold">
                  {categoryLabels[category]}
                </dd>
              </div>

              <div className="grid grid-cols-[5.4rem_1fr] gap-4 py-4">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[var(--ink)]/65">
                  Sections
                </dt>
                <dd className="font-mono text-sm text-[var(--violet-dark)]">
                  {String(sectionCount).padStart(2, "0")}
                </dd>
              </div>
            </dl>

            <p className="mt-5 font-body text-sm leading-6 text-[var(--ink)]/70">
              Decisions, implementation, tradeoffs, validation and lessons
              behind the finished project.
            </p>
          </aside>
        </div>
      </div>
    </header>
  );
}
