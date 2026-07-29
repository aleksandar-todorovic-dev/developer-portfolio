import type {
  CaseStudySection as CaseStudySectionData,
  CaseStudySectionType,
  ProjectEvidence,
  ProjectSlug,
} from "../../types/project";
import { ProjectEvidenceList } from "./ProjectEvidenceList";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
  evidence?: ProjectEvidence[];
  index: number;
  total: number;
  projectSlug: ProjectSlug;
};

type SectionIntensity = "strong" | "structured" | "quiet";

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

const baseSectionIntensities = {
  overview: "structured",
  "role-scope": "quiet",
  decision: "quiet",
  implementation: "quiet",
  architecture: "structured",
  "product-flow": "structured",
  tradeoff: "quiet",
  validation: "structured",
  learning: "quiet",
  future: "quiet",
} satisfies Record<CaseStudySectionType, SectionIntensity>;

const projectStrongSceneIds = {
  liferecompiled: [
    "backend-boundary-decision",
    "validation-and-delivery",
  ],
  "training-app": ["core-product-decision"],
  taskflow: ["typed-board-architecture", "validation-and-delivery"],
} satisfies Record<ProjectSlug, readonly string[]>;

const sectionSpacing: Record<SectionIntensity, string> = {
  strong: "py-16 sm:py-22 lg:py-24",
  structured: "py-14 sm:py-20 lg:py-22",
  quiet: "py-14 sm:py-18 lg:py-20",
};

function Paragraphs({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className: string;
}) {
  return (
    <div className={`space-y-5 ${className}`}>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={`${paragraphIndex}-${paragraph}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export function CaseStudySection({
  section,
  evidence = [],
  index,
  total,
  projectSlug,
}: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`;
  const isStrongScene =
    projectStrongSceneIds[projectSlug].includes(section.id);
  const intensity = isStrongScene
    ? "strong"
    : baseSectionIntensities[section.type];
  const bullets = section.bullets ?? [];
  const isDark = isStrongScene;
  const isProcess = section.type === "product-flow";
  const isSplit =
    section.type === "overview" ||
    section.type === "architecture" ||
    section.type === "product-flow";

  const sectionSurface = isDark
    ? section.type === "validation"
      ? "border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)]"
      : "border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)]"
    : "border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)]";

  const mutedText = isDark
    ? "text-[var(--paper-muted)]"
    : "text-[var(--ink)]/70";
  const focusOutline = isDark
    ? "focus-visible:outline-[var(--signal)]"
    : "focus-visible:outline-[var(--violet-dark)]";

  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={headingId}
      data-intensity={intensity}
      className={`full-bleed scroll-mt-28 border-b focus-visible:outline-2 focus-visible:outline-offset-[-2px] ${focusOutline} ${sectionSurface}`}
    >
      <div className={`content-frame ${sectionSpacing[intensity]}`}>
        <div className="flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="font-semibold">{sectionTypeLabels[section.type]}</p>
          <p className={mutedText}>
            {String(index + 1).padStart(2, "0")} of{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>

        <div
          className={`mt-8 grid gap-10 ${
            evidence.length
              ? "xl:grid-cols-[minmax(0,1fr)_minmax(17rem,0.34fr)] xl:gap-14"
              : ""
          }`}
        >
          <div>
            <div
              className={`grid gap-7 ${
                isSplit
                  ? "lg:grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] lg:items-start lg:gap-14"
                  : "max-w-4xl"
              }`}
            >
              <h2
                id={headingId}
                className={`font-display font-semibold tracking-[-0.025em] ${
                  intensity === "strong"
                    ? "text-[clamp(2.75rem,5.8vw,5.6rem)] leading-[1.04] md:leading-[1]"
                    : "text-[clamp(2.4rem,4.8vw,4.8rem)] leading-[1.02]"
                }`}
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className={`max-w-[68ch] text-base leading-8 sm:text-lg ${mutedText}`}
              />
            </div>

            {bullets.length ? (
              isProcess ? (
                <ol
                  aria-label={`${section.title} steps`}
                  className={`mt-10 grid border-l border-t sm:grid-cols-2 lg:grid-cols-3 ${
                    isDark
                      ? "border-[var(--line)]"
                      : "border-[var(--ink)]/20"
                  }`}
                >
                  {bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className={`border-b border-r p-5 ${
                        isDark
                          ? "border-[var(--line)]"
                          : "border-[var(--ink)]/20"
                      }`}
                    >
                      <span
                        className={`text-xs font-semibold ${
                          isDark
                            ? "text-[var(--violet-text)]"
                            : "text-[var(--violet-dark)]"
                        }`}
                      >
                        Step {String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-4 block text-sm leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : (
                <ul
                  className={`mt-10 grid border-l border-t sm:grid-cols-2 ${
                    isDark
                      ? "border-[var(--line)]"
                      : "border-[var(--ink)]/20"
                  }`}
                >
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className={`border-b border-r p-5 text-sm leading-6 ${
                        isDark
                          ? "border-[var(--line)]"
                          : "border-[var(--ink)]/20"
                      }`}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )
            ) : null}
          </div>

          {evidence.length ? (
            <ProjectEvidenceList
              evidence={evidence}
              tone={isDark ? "dark" : "light"}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
