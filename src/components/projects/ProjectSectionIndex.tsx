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
      aria-labelledby="section-index-heading"
      className="border-y border-[var(--ink)]/25"
    >
      <div className="flex items-center justify-between gap-5 py-4">
        <h3
          id="section-index-heading"
          className="text-sm font-semibold text-[var(--violet-dark)]"
        >
          On this page
        </h3>
        <p className="text-sm text-[var(--ink)]/60">
          {sections.length} sections
        </p>
      </div>

      <ol className="grid grid-cols-2 border-l border-t border-[var(--ink)]/20 lg:grid-cols-3">
        {sections.map((section, index) => (
          <li
            key={section.id}
            className="border-b border-r border-[var(--ink)]/20"
          >
            <a
              href={`#${section.id}`}
              className="focus-ring grid min-h-16 grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-2 p-3"
            >
              <span className="pt-0.5 font-mono text-[0.61rem] text-[var(--violet-dark)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-semibold leading-5 sm:text-sm">
                <span className="sr-only">
                  {sectionTypeLabels[section.type]}:{" "}
                </span>
                {section.title}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
