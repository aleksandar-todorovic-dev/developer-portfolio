import type {
  CaseStudySection,
  CaseStudySectionType,
} from "../../types/project";

type ProjectSectionIndexProps = {
  sections: CaseStudySection[];
};

const sectionTypeLabels: Record<CaseStudySectionType, string> = {
  overview: "Overview",
  "role-scope": "Role / scope",
  decision: "Decision",
  implementation: "Implementation",
  architecture: "Architecture",
  "product-flow": "Product flow",
  tradeoff: "Tradeoff",
  validation: "Validation",
  learning: "Learning",
  future: "Future",
};

export function ProjectSectionIndex({ sections }: ProjectSectionIndexProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame grid lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div className="border-b border-[var(--ink)]/25 py-10 lg:border-b-0 lg:border-r lg:pr-10">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--ink)]/70">
            On this page
          </p>

          <h2 className="font-display mt-5 text-4xl leading-[0.9] font-semibold tracking-[-0.05em]">
            Case study index
          </h2>

          <p className="font-body mt-5 max-w-48 text-sm leading-6 text-[var(--ink)]/65">
            Jump directly to any section of the case study.
          </p>
        </div>

        <ol className="lg:pl-10">
          {sections.map((section, index) => (
            <li key={section.id} className="border-b border-[var(--ink)]/25 last:border-b-0">
              <a
                href={`#${section.id}`}
                className="focus-ring group grid gap-3 py-5 sm:grid-cols-[4rem_8rem_minmax(0,1fr)_2rem] sm:items-center"
              >
                <span className="font-mono text-xs text-[var(--violet)]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[var(--ink)]/70">
                  {sectionTypeLabels[section.type]}
                </span>

                <span className="font-body font-semibold transition-transform duration-200 group-hover:translate-x-2">
                  {section.title}
                </span>

                <span
                  aria-hidden="true"
                  className="text-xl text-[var(--violet)] transition-transform duration-200 group-hover:translate-y-1"
                >
                  ↓
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
