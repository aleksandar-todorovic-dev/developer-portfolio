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

const projectMiddleSceneIds = {
  liferecompiled: "reaction-correctness",
  "training-app": "core-product-decision",
  taskflow: "drag-and-drop-state-updates",
} satisfies Record<ProjectSlug, string>;

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

function MiddleSceneList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="border-t border-current/20 pt-3 text-sm leading-6 first:border-t-0 first:pt-0"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

function ProjectMiddleScene({
  projectSlug,
  bullets,
  evidence,
}: {
  projectSlug: ProjectSlug;
  bullets: string[];
  evidence: ProjectEvidence;
}) {
  if (projectSlug === "liferecompiled") {
    return (
      <div className="mt-12 border-y border-[var(--line-strong)]">
        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(18rem,0.65fr)]">
          <div className="grid sm:grid-cols-2 lg:border-r lg:border-[var(--line)]">
            <div className="px-5 py-7 lg:px-7">
              <h3 className="max-w-[24ch] text-sm font-semibold leading-6">
                {bullets[0]}
              </h3>
              <MiddleSceneList
                items={bullets.slice(1, 3)}
                className="mt-5"
              />
            </div>
            <div className="border-t border-[var(--line)] px-5 py-7 sm:border-l sm:border-t-0 lg:px-7">
              <h3 className="max-w-[24ch] text-sm font-semibold leading-6">
                {bullets[3]}
              </h3>
              <MiddleSceneList
                items={bullets.slice(4)}
                className="mt-5"
              />
            </div>
          </div>
          <div className="border-t border-[var(--line)] bg-[var(--violet-dark)] px-5 py-7 text-[var(--paper)] lg:border-t-0 lg:px-7">
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--paper)]">
              {evidence.label}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--paper)]/80">
              {evidence.detail}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (projectSlug === "training-app") {
    return (
      <div className="mt-12 border-y border-[var(--line-strong)]">
        <div className="grid items-stretch sm:grid-cols-[minmax(0,0.72fr)_3rem_minmax(0,1.28fr)]">
          <div className="px-5 py-7 sm:px-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--paper-muted)]">
              Current
            </p>
            <MiddleSceneList
              items={bullets.slice(0, 2)}
              className="mt-5"
            />
          </div>

          <span
            aria-hidden="true"
            className="flex items-center justify-center border-y border-[var(--line)] py-3 text-2xl text-[var(--violet-text)] sm:border-x sm:border-y-0 sm:py-0"
          >
            →
          </span>

          <div className="px-5 py-7 sm:px-7">
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--violet-text)]">
              Next
            </p>
            <MiddleSceneList
              items={bullets.slice(2)}
              className="mt-5"
            />
          </div>
        </div>

        <div className="border-t border-[var(--line-strong)] px-5 py-7 sm:grid sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8 sm:px-7">
          <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--violet-text)]">
            {evidence.label}
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--paper-muted)] sm:mt-0">
            {evidence.detail}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 border-y border-[var(--ink)]/25">
      <div className="grid lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.35fr)_minmax(15rem,0.9fr)]">
        <MiddleSceneList
          items={bullets.slice(0, 2)}
          className="px-5 py-7 lg:border-r lg:border-[var(--ink)]/20 lg:px-7"
        />
        <MiddleSceneList
          items={bullets.slice(2, 5)}
          className="border-t border-[var(--ink)]/20 px-5 py-7 lg:border-r lg:border-t-0 lg:px-7"
        />
        <div className="border-t border-[var(--ink)]/20 px-5 py-7 lg:border-t-0 lg:px-7">
          <MiddleSceneList items={bullets.slice(5)} />
          <div className="mt-6 border-t border-[var(--ink)]/25 pt-5">
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--violet-dark)]">
              {evidence.label}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--ink)]/70">
              {evidence.detail}
            </p>
          </div>
        </div>
      </div>
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
    projectMiddleSceneIds[projectSlug] === section.id;
  const middleSceneEvidence = isStrongScene ? evidence[0] : undefined;
  const sidebarEvidence = middleSceneEvidence ? [] : evidence;
  const intensity = isStrongScene
    ? "strong"
    : baseSectionIntensities[section.type];
  const bullets = section.bullets ?? [];
  const isDark = isStrongScene && projectSlug !== "taskflow";
  const isProcess = section.type === "product-flow";
  const isSplit =
    section.type === "overview" ||
    section.type === "architecture" ||
    section.type === "product-flow";

  const sectionSurface = isStrongScene
    ? projectSlug === "liferecompiled"
      ? "border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)]"
      : projectSlug === "training-app"
        ? "border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)]"
        : "border-[var(--ink)]/20 bg-[var(--paper)] text-[var(--ink)]"
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
            sidebarEvidence.length
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

            {bullets.length && !middleSceneEvidence ? (
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

          {sidebarEvidence.length ? (
            <ProjectEvidenceList
              evidence={sidebarEvidence}
              tone={isDark ? "dark" : "light"}
            />
          ) : null}
        </div>

        {middleSceneEvidence ? (
          <ProjectMiddleScene
            projectSlug={projectSlug}
            bullets={bullets}
            evidence={middleSceneEvidence}
          />
        ) : null}
      </div>
    </section>
  );
}
