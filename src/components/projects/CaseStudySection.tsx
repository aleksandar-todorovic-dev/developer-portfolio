import type { CaseStudySection as SectionData } from "../../types/project";

export function CaseStudySection({ section }: { section: SectionData }) {
  const validation = section.type === "validation";
  const limitation = section.type === "tradeoff";
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-heading`}
      className="case-scene full-bleed border-b border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame grid gap-6 py-10 sm:gap-8 sm:py-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:py-16">
        <div>
          {validation || limitation ? (
            <p className="eyebrow mb-4 text-[var(--violet-dark)]">
              {validation ? "Checked and delivered" : "Current limitations"}
            </p>
          ) : null}
          <h2
            id={`${section.id}-heading`}
            className="max-w-[23ch] font-display text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-[1.06] tracking-[-0.03em]"
          >
            {section.title}
          </h2>
        </div>
        <div className="max-w-[68ch]">
          <div className="case-narrative space-y-5 text-base leading-8 text-[var(--ink)]/75">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {section.bullets?.length ? (
            <ul className="mt-6 space-y-2 text-sm leading-7 text-[var(--ink)]/75">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="text-[var(--violet-dark)]"
                  >
                    {validation ? "✓" : "—"}
                  </span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
