import type {
  CaseStudySection as CaseStudySectionData,
  CaseStudySectionType,
} from "../../types/project";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
  index: number;
  total: number;
};

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

const sectionSurfaces: Record<CaseStudySectionType, string> = {
  overview: "bg-[var(--violet)] text-[var(--paper)]",
  "role-scope": "bg-[var(--paper)] text-[var(--ink)]",
  decision: "bg-[var(--ink)] text-[var(--paper)]",
  implementation: "bg-[var(--ink-2)] text-[var(--paper)]",
  architecture: "bg-[var(--ink)] text-[var(--paper)]",
  "product-flow": "bg-[var(--violet-dark)] text-[var(--paper)]",
  tradeoff: "bg-[var(--paper)] text-[var(--ink)]",
  validation: "bg-[var(--ink-2)] text-[var(--paper)]",
  learning: "bg-[var(--paper)] text-[var(--ink)]",
  future: "bg-[var(--violet)] text-[var(--paper)]",
};

function SectionMeta({
  index,
  total,
  label,
  mutedClassName,
}: SectionMetaProps) {
  return (
    <div className="flex items-center gap-4 font-mono text-[0.66rem] uppercase tracking-[0.19em]">
      <span>{String(index + 1).padStart(2, "0")}</span>
      <span aria-hidden="true" className={`h-px flex-1 bg-current ${mutedClassName}`} />
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
    <div className={`font-body space-y-5 ${className}`}>
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
}: CaseStudySectionProps) {
  const headingId = `${section.id}-heading`;
  const typeLabel = sectionTypeLabels[section.type];
  const number = String(index + 1).padStart(2, "0");

  function renderSectionContent() {
    switch (section.type) {
      case "overview":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-65"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(17rem,0.75fr)] lg:items-end">
              <h2
                id={headingId}
                className="font-display max-w-4xl text-[clamp(3.8rem,9vw,8.5rem)] leading-[0.79] font-semibold tracking-[-0.07em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="border-l border-[var(--paper)]/40 pl-6 text-lg leading-8 text-[var(--paper)]"
              />
            </div>

            <div
              aria-hidden="true"
              className="mt-12 grid grid-cols-[1fr_3fr_1fr] gap-2"
            >
              <span className="h-2 bg-[var(--signal)]" />
              <span className="h-2 bg-[var(--paper)]" />
              <span className="h-2 border border-[var(--paper)]/45" />
            </div>
          </div>
        );

      case "role-scope":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-55"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
              <div>
                <p className="signal-label w-fit bg-[var(--violet)] text-[var(--paper)]">
                  Ownership map
                </p>
                <h2
                  id={headingId}
                  className="font-display mt-6 text-[clamp(3rem,6.5vw,6.6rem)] leading-[0.84] font-semibold tracking-[-0.06em]"
                >
                  {section.title}
                </h2>

                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="mt-8 max-w-2xl text-base leading-8 text-[var(--ink)]/70"
                />
              </div>

              {section.bullets?.length ? (
                <ol className="grid border-l border-t border-[var(--ink)]/25 sm:grid-cols-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="min-h-30 border-b border-r border-[var(--ink)]/25 p-5"
                    >
                      <span className="font-mono text-[0.63rem] text-[var(--violet)]">
                        SCOPE—{String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body mt-5 block font-semibold leading-6">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        );

      case "decision":
        return (
          <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="font-mono text-5xl text-[var(--signal)]">{number}</p>
              <p className="font-mono mt-4 text-[0.66rem] uppercase tracking-[0.19em] text-[var(--paper-muted)]">
                {typeLabel}
                <span className="mt-2 block">
                  of {String(total).padStart(2, "0")}
                </span>
              </p>
            </div>

            <div className="border-l-8 border-[var(--violet)] pl-6 sm:pl-10">
              <p className="signal-label w-fit bg-[var(--signal)] text-[var(--ink)]">
                Decision point
              </p>

              <h2
                id={headingId}
                className="font-display mt-7 max-w-5xl text-[clamp(3.2rem,7.5vw,7.5rem)] leading-[0.82] font-semibold tracking-[-0.065em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="mt-9 max-w-3xl text-lg leading-8 text-[var(--paper-muted)]"
              />

              {section.bullets?.length ? (
                <ul className="mt-10 grid border-l border-t border-[var(--line)] md:grid-cols-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-r border-[var(--line)] p-5"
                    >
                      <span className="font-mono text-xs text-[var(--violet-text)]">
                        {String.fromCharCode(65 + bulletIndex)}
                      </span>
                      <span className="font-body text-sm leading-6">{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "implementation":
        return (
          <div className="grid gap-10 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-14">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <SectionMeta
                index={index}
                total={total}
                label="Build"
                mutedClassName="opacity-55"
              />
              <p className="font-mono mt-6 text-[0.64rem] uppercase tracking-[0.18em] text-[var(--violet-text)]">
                Execute top → bottom
              </p>
            </div>

            <div>
              <h2
                id={headingId}
                className="font-display max-w-4xl text-[clamp(3rem,6.5vw,6.3rem)] leading-[0.85] font-semibold tracking-[-0.06em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="mt-8 max-w-3xl text-lg leading-8 text-[var(--paper-muted)]"
              />

              {section.bullets?.length ? (
                <ol className="relative mt-10 border-y border-[var(--line-strong)]">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="group grid grid-cols-[3.5rem_minmax(0,1fr)] border-b border-[var(--line)] py-5 last:border-b-0"
                    >
                      <span className="font-mono text-xs text-[var(--violet-text)]">
                        EX—{String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body leading-7 transition-transform duration-200 group-hover:translate-x-2">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        );

      case "architecture":
        return (
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] bg-size-[4rem_4rem] opacity-25"
            />

            <div className="relative">
              <SectionMeta
                index={index}
                total={total}
                label={typeLabel}
                mutedClassName="opacity-55"
              />

              <div className="mt-10 grid gap-10 lg:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.64rem] uppercase tracking-[0.19em] text-[var(--signal)]">
                    System topology / nodes
                  </p>
                  <h2
                    id={headingId}
                    className="font-display mt-6 text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.83] font-semibold tracking-[-0.06em]"
                  >
                    {section.title}
                  </h2>
                </div>

                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="self-end border-l border-[var(--violet)] pl-6 text-lg leading-8 text-[var(--paper-muted)]"
                />
              </div>

              {section.bullets?.length ? (
                <ul className="mt-12 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="relative min-h-32 bg-[var(--ink-2)] p-5"
                    >
                      <span className="font-mono text-[0.62rem] text-[var(--violet-text)]">
                        NODE_{String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body mt-6 block text-sm leading-6">
                        {bullet}
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute bottom-0 right-0 size-2 bg-[var(--signal)]"
                      />
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        );

      case "product-flow":
        return (
          <div>
            <SectionMeta
              index={index}
              total={total}
              label={typeLabel}
              mutedClassName="opacity-60"
            />

            <div className="mt-10 grid gap-9 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
              <h2
                id={headingId}
                className="font-display max-w-4xl text-[clamp(3.2rem,7vw,7rem)] leading-[0.82] font-semibold tracking-[-0.065em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="border-l border-[var(--paper)]/35 pl-6 text-lg leading-8 text-[var(--paper)]"
              />
            </div>

            {section.bullets?.length ? (
              <ol className="mt-12 grid gap-px border border-[var(--paper)]/25 bg-[var(--paper)]/25 sm:grid-cols-2 lg:grid-cols-3">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={`${bulletIndex}-${bullet}`}
                    className="relative min-h-36 bg-[var(--violet-dark)] p-5"
                  >
                    <span className="font-mono text-xs text-[var(--signal)]">
                      STEP—{String(bulletIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body mt-7 block leading-6">{bullet}</span>
                    {bulletIndex < section.bullets!.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute bottom-4 right-4 text-xl text-[var(--paper)]/45"
                      >
                        →
                      </span>
                    ) : null}
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
              mutedClassName="opacity-55"
            />

            <div className="mt-10 grid lg:grid-cols-12">
              <div className="bg-[var(--violet)] p-7 text-[var(--paper)] sm:p-10 lg:col-span-8">
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-[var(--signal)]">
                  Constraint acknowledged
                </p>
                <h2
                  id={headingId}
                  className="font-display mt-6 text-[clamp(3.1rem,7vw,7rem)] leading-[0.82] font-semibold tracking-[-0.065em]"
                >
                  {section.title}
                </h2>
              </div>

              <div className="border-x border-b border-[var(--ink)]/25 p-7 sm:p-10 lg:col-span-4 lg:border-l-0 lg:border-t">
                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="text-base leading-8 text-[var(--ink)]/72"
                />
              </div>
            </div>

            {section.bullets?.length ? (
              <ul className="mt-8 columns-1 border-y border-[var(--ink)]/30 sm:columns-2">
                {section.bullets.map((bullet, bulletIndex) => (
                  <li
                    key={`${bulletIndex}-${bullet}`}
                    className="break-inside-avoid border-b border-[var(--ink)]/20 py-5 sm:mr-8"
                  >
                    <span className="font-mono mr-3 text-[0.62rem] text-[var(--violet)]">
                      LIMIT—{String(bulletIndex + 1).padStart(2, "0")}
                    </span>
                    <span className="font-body text-sm leading-6">{bullet}</span>
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
              mutedClassName="opacity-55"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
              <div>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--signal)]">
                  Verification log / pass
                </p>
                <h2
                  id={headingId}
                  className="font-display mt-6 text-[clamp(3rem,6.5vw,6.5rem)] leading-[0.84] font-semibold tracking-[-0.06em]"
                >
                  {section.title}
                </h2>
                <Paragraphs
                  paragraphs={section.paragraphs}
                  className="mt-8 max-w-2xl text-base leading-8 text-[var(--paper-muted)]"
                />
              </div>

              {section.bullets?.length ? (
                <ul className="border-y border-[var(--line-strong)]">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 border-b border-[var(--line)] py-4 last:border-b-0"
                    >
                      <span className="font-mono text-[0.61rem] text-[var(--signal)]">
                        [PASS]
                      </span>
                      <span className="font-body text-sm leading-6">
                        <span className="font-mono mr-3 text-[var(--violet-text)]">
                          {String(bulletIndex + 1).padStart(2, "0")}
                        </span>
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
              mutedClassName="opacity-55"
            />

            <div className="mt-14 lg:ml-[16.666%]">
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.18em] text-[var(--violet)]">
                Reflection / retained state
              </p>
              <h2
                id={headingId}
                className="font-display mt-6 max-w-5xl text-[clamp(3.4rem,7.5vw,7.4rem)] leading-[0.83] font-semibold tracking-[-0.065em]"
              >
                {section.title}
              </h2>

              <Paragraphs
                paragraphs={section.paragraphs}
                className="mt-10 max-w-4xl text-xl leading-9 text-[var(--ink)]/72"
              />

              {section.bullets?.length ? (
                <ul className="mt-12 grid border-t border-[var(--ink)]/25 md:grid-cols-2">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[var(--ink)]/25 py-5 md:pr-8 md:odd:border-r md:even:pl-8"
                    >
                      <span className="font-mono text-xs text-[var(--violet)]">
                        {String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm leading-6">{bullet}</span>
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
              mutedClassName="opacity-65"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_9rem]">
              <div>
                <p className="signal-label w-fit bg-[var(--signal)] text-[var(--ink)]">
                  Next state
                </p>
                <h2
                  id={headingId}
                  className="font-display mt-7 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] leading-[0.8] font-semibold tracking-[-0.07em]"
                >
                  {section.title}
                </h2>
              </div>

              <span
                aria-hidden="true"
                className="hidden self-center text-right font-display text-8xl text-[var(--signal)] lg:block"
              >
                →
              </span>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <Paragraphs
                paragraphs={section.paragraphs}
                className="text-lg leading-8 text-[var(--paper)]"
              />

              {section.bullets?.length ? (
                <ul className="border-y border-[var(--paper)]/35">
                  {section.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={`${bulletIndex}-${bullet}`}
                      className="grid grid-cols-[3rem_1fr] gap-3 border-b border-[var(--paper)]/25 py-4 last:border-b-0"
                    >
                      <span className="font-mono text-xs text-[var(--signal)]">
                        ↗{String(bulletIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="font-body text-sm leading-6">{bullet}</span>
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
      className={`full-bleed scroll-mt-28 border-b border-[var(--line-strong)] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[var(--signal)] ${sectionSurfaces[section.type]}`}
    >
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        {renderSectionContent()}
      </div>
    </section>
  );
}
