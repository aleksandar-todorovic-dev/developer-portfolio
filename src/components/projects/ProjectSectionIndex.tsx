import type { CaseStudySection } from "../../types/project";

type ProjectSectionIndexProps = {
  sections: CaseStudySection[];
};

export function ProjectSectionIndex({ sections }: ProjectSectionIndexProps) {
  return (
    <nav
      aria-label="Case study sections"
      className="mt-20 border-y border-[#2B2340]"
    >
      <div className="grid lg:grid-cols-[180px_minmax(0,1fr)]">
        <div className="py-8 lg:border-r lg:border-[#2B2340] lg:pr-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Index
          </p>

          <h2 className="mt-3 text-xl font-semibold text-[#F5F2FF]">
            Inside this project
          </h2>
        </div>

        <ol className="divide-y divide-[#2B2340] border-t border-[#2B2340] lg:border-t-0 lg:pl-8">
          {sections.map((section, index) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="group grid gap-3 py-5 sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-center"
              >
                <span className="font-mono text-sm text-[#5F5870]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="font-medium text-[#D8D2E8] transition group-hover:text-[#C4B5FD]">
                  {section.title}
                </span>

                <span
                  aria-hidden="true"
                  className="text-[#8B5CF6] transition group-hover:translate-x-1"
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
