import type { ProjectCategory, ProjectSlug } from "../../types/project";

type ProjectHeroProps = {
  proofLabel: string;
  title: string;
  shortDescription: string;
  slug: ProjectSlug;
  category: ProjectCategory;
  sectionCount: number;
};

const categoryLabels: Record<ProjectCategory, string> = {
  "firebase-engineering": "Firebase engineering",
  "product-mvp": "Product-focused MVP",
  "typescript-ui": "TypeScript interface",
};

export function ProjectHero({
  proofLabel,
  title,
  shortDescription,
  slug,
  category,
  sectionCount,
}: ProjectHeroProps) {
  return (
    <header className="mt-8 border-y border-[#2B2340] py-10 sm:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(280px,0.6fr)] lg:items-end">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
            Case study · {proofLabel}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.04em] text-[#F5F2FF] sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#A9A1BA] sm:text-xl">
            {shortDescription}
          </p>
        </div>

        <aside className="border-t border-[#2B2340] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Project dossier
          </p>

          <dl className="mt-6 divide-y divide-[#2B2340] border-y border-[#2B2340]">
            <div className="flex items-start justify-between gap-6 py-4">
              <dt className="text-sm text-[#8B849A]">File</dt>

              <dd className="text-right font-medium text-[#D8D2E8]">{slug}</dd>
            </div>

            <div className="flex items-start justify-between gap-6 py-4">
              <dt className="text-sm text-[#8B849A]">Category</dt>

              <dd className="text-right font-medium text-[#D8D2E8]">
                {categoryLabels[category]}
              </dd>
            </div>

            <div className="flex items-start justify-between gap-6 py-4">
              <dt className="text-sm text-[#8B849A]">Sections</dt>

              <dd className="font-medium text-[#C4B5FD]">
                {String(sectionCount).padStart(2, "0")}
              </dd>
            </div>
          </dl>

          <p className="mt-5 text-sm leading-6 text-[#8B849A]">
            Structured around real decisions, implementation details, tradeoffs,
            validation, and lessons.
          </p>
        </aside>
      </div>
    </header>
  );
}
