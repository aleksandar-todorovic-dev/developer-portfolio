import type {
  CaseStudySection as CaseStudySectionData,
  CaseStudySectionType,
  ProjectSlug,
} from "../../types/project";
import { TracePath } from "../motion/TracePath";
import { projectTraceVariants } from "../motion/projectTraceVariants";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
  index: number;
  total: number;
  projectSlug: ProjectSlug;
};

type SectionIntensity = "strong" | "structured" | "quiet";

type SectionMetaProps = {
  index: number;
  total: number;
  label: string;
  mutedClassName: string;
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

const sectionIntensities = {
  overview: "strong",
  "role-scope": "structured",
  decision: "strong",
  implementation: "structured",
  architecture: "strong",
  "product-flow": "strong",
  tradeoff: "structured",
  validation: "structured",
  learning: "quiet",
  future: "strong",
} satisfies Record<CaseStudySectionType, SectionIntensity>;

const sectionSurfaces: Record<CaseStudySectionType, string> = {
  overview: "bg-[var(--ink-2)] text-[var(--paper)]",
  "role-scope": "bg-[var(--paper)] text-[var(--ink)]",
  decision: "bg-[var(--ink)] text-[var(--paper)]",
  implementation: "bg-[var(--paper)] text-[var(--ink)]",
  architecture: "bg-[var(--ink-2)] text-[var(--paper)]",
  "product-flow": "bg-[var(--paper)] text-[var(--ink)]",
  tradeoff: "bg-[var(--paper)] text-[var(--ink)]",
  validation: "bg-[var(--ink-2)] text-[var(--paper)]",
  learning: "bg-[var(--paper)] text-[var(--ink)]",
  future: "bg-[var(--ink)] text-[var(--paper)]",
};

const sectionBorders: Record<CaseStudySectionType, string> = {
  overview: "border-[var(--line-strong)]",
  "role-scope": "border-[var(--ink)]/25",
  decision: "border-[var(--line-strong)]",
  implementation: "border-[var(--ink)]/25",
  architecture: "border-[var(--line-strong)]",
  "product-flow": "border-[var(--ink)]/25",
  tradeoff: "border-[var(--ink)]/25",
  validation: "border-[var(--line-strong)]",
  learning: "border-[var(--ink)]/25",
  future: "border-[var(--line-strong)]",
};

const intensitySpacing: Record<SectionIntensity, string> = {
  strong: "py-16 sm:py-24 lg:py-28",
  structured: "py-14 sm:py-20 lg:py-22",
  quiet: "py-20 sm:py-28 lg:py-32",
};

function SectionMeta({
  index,
  total,
  label,
  mutedClassName,
}: SectionMetaProps) {
  return (
    <div className="flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.16em]">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <span
        aria-hidden="true"
        className={`h-px flex-1 bg-current ${mutedClassName}`}
      />
      <span>
        {label} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function Paragraphs({
  paragraphs,
  className,
}: {
  paragraphs: string[];
  className: string;
}) {
  return (
    <div className={`space-y-5 font-body ${className}`}>
      {paragraphs.map((paragraph, paragraphIndex) => (
        <p key={`${paragraphIndex}-${paragraph}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export function CaseStudySection({
  section,
  index,
  total,
  projectSlug,
}: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`;
  const typeLabel = sectionTypeLabels[section.type];
  const intensity = sectionIntensities[section.type];
  const bullets = section.bullets ?? [];

  function renderSectionContent() {
    switch (section.type) {
      case "overview":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-45"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(17rem,0.8fr)] lg:items-end">
              <h2
                id={headingId}
                className="max-w-4xl font-display text-[clamp(3rem,7vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="border-l border-[var(--line-strong)] pl-6 text-lg leading-8 text-[var(--paper-muted)]"
              />
            </div>

            <span
              aria-hidden="true"
              className="mt-12 block h-px w-full bg-[var(--violet-text)]"
            />
          </div>
        );

      case "role-scope":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-35"
            />

            <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div>
                <h2
                  id={headingId}
                  className="font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
                >
                  {section.title}
                </h2>

                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="mt-8 max-w-2xl text-base leading-8 text-[var(--ink)]/70"
                />
              </div>

              {bullets.length ? (
                <ul className="border-y border-[var(--ink)]/25">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-[var(--ink)]/20 py-5 last:border-b-0"
                    >
                      <span className="font-body font-semibold leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "decision":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-45"
            />

            <div className="mt-10 border-l-4 border-[var(--violet)] pl-6 sm:pl-10">
              <h2
                id={headingId}
                className="max-w-5xl font-display text-[clamp(3rem,6.3vw,6rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="mt-9 max-w-3xl text-lg leading-8 text-[var(--paper-muted)]"
              />

              {bullets.length ? (
                <ul className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-r border-[var(--line)] p-5"
                    >
                      <span className="font-body text-sm leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "implementation":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-35"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-14">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.15em] text-[var(--violet-dark)]">
                How it was built
              </p>

              <div>
                <h2
                  id={headingId}
                  className="max-w-4xl font-display text-[clamp(2.6rem,5vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
                >
                  {section.title}
                </h2>

                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="mt-8 max-w-3xl text-lg leading-8 text-[var(--ink)]/70"
                />

                {bullets.length ? (
                  <ul className="mt-10 border-y border-[var(--ink)]/25">
                    {bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="border-b border-[var(--ink)]/20 py-5 last:border-b-0"
                      >
                        <span className="font-body leading-7">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        );

      case "architecture":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-45"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <h2
                id={headingId}
                className="font-display text-[clamp(2.9rem,5.8vw,5.6rem)] font-semibold leading-[0.87] tracking-[-0.06em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="self-end border-l border-[var(--violet)] pl-6 text-lg leading-8 text-[var(--paper-muted)]"
              />
            </div>

            {bullets.length ? (
              <ul className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="min-h-32 bg-[var(--ink)] p-5"
                  >
                    <span className="block font-body text-sm leading-6">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );

      case "product-flow":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-35"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]">
              <h2
                id={headingId}
                className="max-w-4xl font-display text-[clamp(3rem,6vw,5.8rem)] font-semibold leading-[0.86] tracking-[-0.06em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="border-l border-[var(--violet-dark)] pl-6 text-lg leading-8 text-[var(--ink)]/70"
              />
            </div>

            {bullets.length ? (
              <ol className="mt-12 grid border-l border-t border-[var(--ink)]/25 sm:grid-cols-2 lg:grid-cols-3">
                {bullets.map((bullet, bulletIndex) => (
                  <li
                    key={`${bulletIndex}-${bullet}`}
                    className="min-h-36 border-b border-r border-[var(--ink)]/25 p-5"
                  >
                    <span className="font-mono text-xs text-[var(--violet-dark)]">
                      Step {String(bulletIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-7 block font-body leading-6">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ol>
            ) : null}
          </div>
        );

      case "tradeoff":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-35"
            />

            <div className="mt-10 grid gap-10 border-l-4 border-[var(--violet-dark)] pl-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:pl-10">
              <h2
                id={headingId}
                className="font-display text-[clamp(2.7rem,5vw,4.8rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="text-base leading-8 text-[var(--ink)]/70"
              />
            </div>

            {bullets.length ? (
              <ul className="mt-10 columns-1 border-y border-[var(--ink)]/25 sm:columns-2">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="break-inside-avoid border-b border-[var(--ink)]/20 py-5 sm:mr-8"
                  >
                    <span className="font-body text-sm leading-6">
                      {bullet}
                    </span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        );

      case "validation":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-45"
            />

            <div className="mt-9 grid gap-8 border-b border-[var(--line)] pb-9 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:items-center">
              <p className="max-w-2xl font-body text-lg leading-8 text-[var(--paper-muted)]">
                The project path closes with checks against real behavior,
                failure-sensitive states and responsive use.
              </p>
              <TracePath
                variant={projectTraceVariants[projectSlug]}
                className="h-20 text-[var(--violet-text)]"
              />
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div>
                <h2
                  id={headingId}
                  className="font-display text-[clamp(2.7rem,5.2vw,5rem)] font-semibold leading-[0.9] tracking-[-0.055em]"
                >
                  {section.title}
                </h2>
                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="mt-8 max-w-2xl text-base leading-8 text-[var(--paper-muted)]"
                />
              </div>

              {bullets.length ? (
                <ul className="border-y border-[var(--line-strong)]">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-[var(--line)] py-4 last:border-b-0"
                    >
                      <span className="font-body text-sm leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "learning":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-35"
            />

            <div className="mt-14 lg:ml-[16.666%]">
              <h2
                id={headingId}
                className="max-w-4xl font-display text-[clamp(2.5rem,4.5vw,4.2rem)] font-semibold leading-[0.92] tracking-[-0.05em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="mt-10 max-w-3xl text-lg leading-8 text-[var(--ink)]/72"
              />

              {bullets.length ? (
                <ul className="mt-12 border-t border-[var(--ink)]/25">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-[var(--ink)]/20 py-5"
                    >
                      <span className="max-w-3xl font-body text-sm leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "future":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-45"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_7rem]">
              <h2
                id={headingId}
                className="max-w-5xl font-display text-[clamp(3rem,6.2vw,6.2rem)] font-semibold leading-[0.85] tracking-[-0.06em]"
              >
                {section.title}
              </h2>

              <span
                aria-hidden="true"
                className="hidden self-center text-right font-display text-7xl text-[var(--violet-text)] lg:block"
              >
                →
              </span>
            </div>

            <div className="mt-10 grid gap-10 border-t border-[var(--line)] pt-10 lg:grid-cols-2">
              <Paragraphs
                paragraphs={section.paragraphs}
                className="text-lg leading-8 text-[var(--paper-muted)]"
              />

              {bullets.length ? (
                <ul className="border-y border-[var(--line-strong)]">
                  {bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="border-b border-[var(--line)] py-4 last:border-b-0"
                    >
                      <span className="font-body text-sm leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );
    }
  }

  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={headingId}
      data-intensity={intensity}
      className={`full-bleed scroll-mt-28 border-b focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--signal)] ${sectionBorders[section.type]} ${sectionSurfaces[section.type]}`}
    >
      <div className={`content-frame ${intensitySpacing[intensity]}`}>
        {renderSectionContent()}
      </div>
    </section>
  );
}
