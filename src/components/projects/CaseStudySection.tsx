import type {
  CaseStudySection as CaseStudySectionData,
  CaseStudySectionType,
} from "../../types/project";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
  index: number;
  total: number;
};

const sectionTypeLabels: Record<CaseStudySectionType, string> = {
  overview: "Overview",
  "role-scope": "Role and scope",
  decision: "Engineering decision",
  implementation: "Implementation",
  architecture: "Architecture",
  "product-flow": "Product flow",
  tradeoff: "Tradeoff",
  validation: "Validation",
  learning: "Learning",
  future: "Future direction",
};

export function CaseStudySection({
  section,
  index,
  total,
}: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`;

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className="scroll-mt-24 border-t border-[#2B2340] py-12 sm:py-14"
    >
      <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-mono text-sm text-[#5F5870]">
            {String(index + 1).padStart(2, "0")}
            <span className="mx-2">/</span>
            {String(total).padStart(2, "0")}
          </p>

          <p className="mt-4 text-xs font-medium uppercase tracking-[0.22em] text-[#C4B5FD]">
            {sectionTypeLabels[section.type]}
          </p>
        </div>

        <div>
          <h2
            id={headingId}
            className="max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF] sm:text-4xl"
          >
            {section.title}
          </h2>

          <div className="mt-7 max-w-3xl space-y-5">
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-[#A9A1BA] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {section.bullets && section.bullets.length > 0 && (
            <ul className="mt-8 max-w-3xl border-y border-[#2B2340]">
              {section.bullets.map((bullet, bulletIndex) => (
                <li
                  key={bullet}
                  className="grid grid-cols-[40px_minmax(0,1fr)] gap-3 border-b border-[#2B2340] py-5 last:border-b-0"
                >
                  <span className="font-mono text-sm text-[#5F5870]">
                    {String(bulletIndex + 1).padStart(2, "0")}
                  </span>

                  <span className="leading-7 text-[#D8D2E8]">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
