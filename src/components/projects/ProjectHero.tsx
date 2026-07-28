import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    <header className="full-bleed relative overflow-hidden border-y border-[var(--paper)]/25 bg-[var(--violet)] text-[var(--paper)]">
      <motion.div
        aria-hidden="true"
        className="absolute inset-y-0 left-[17%] w-px bg-[var(--paper)]/20"
        initial={shouldReduceMotion ? false : { scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "top" }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-28 -top-28 size-72 rotate-45 border border-[var(--paper)]/20 sm:size-96"
      />

      <div className="content-frame relative py-12 sm:py-18 lg:py-24">
        <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--paper)]/30 pb-5 font-mono text-[0.66rem] uppercase tracking-[0.2em]">
          <span>Case study / {proofLabel}</span>
          <span>Record—{slug}</span>
        </div>

        <div className="grid gap-12 pt-10 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-end">
          <div className="min-w-0">
            <p className="signal-label mb-7 w-fit bg-[var(--signal)] text-[var(--ink)]">
              Resolved project
            </p>

            <h1
              id="page-heading"
              tabIndex={-1}
              className="font-display max-w-6xl text-[clamp(2.25rem,11vw,9rem)] leading-[0.8] font-semibold tracking-[-0.07em] [overflow-wrap:anywhere]"
            >
              {title}
            </h1>

            <motion.div
              aria-hidden="true"
              className="mt-7 h-2 w-full max-w-3xl bg-[var(--signal)]"
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
              style={{ transformOrigin: "left" }}
            />

            <p className="font-body mt-8 max-w-3xl text-lg leading-8 text-[var(--paper)] sm:text-xl">
              {shortDescription}
            </p>
          </div>

          <aside aria-label="Project overview" className="border-l border-[var(--paper)]/35 pl-6">
            <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-[var(--paper)]">
              Execution map
            </p>

            <dl className="mt-5 border-y border-[var(--paper)]/35">
              <div className="grid grid-cols-[5.4rem_1fr] gap-4 border-b border-[var(--paper)]/25 py-4">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Project
                </dt>
                <dd className="font-body text-sm font-semibold">{slug}</dd>
              </div>

              <div className="grid grid-cols-[5.4rem_1fr] gap-4 border-b border-[var(--paper)]/25 py-4">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Mode
                </dt>
                <dd className="font-body text-sm font-semibold">
                  {categoryLabels[category]}
                </dd>
              </div>

              <div className="grid grid-cols-[5.4rem_1fr] gap-4 py-4">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Records
                </dt>
                <dd className="font-mono text-sm text-[var(--signal)]">
                  {String(sectionCount).padStart(2, "0")}
                </dd>
              </div>
            </dl>

            <p className="font-body mt-5 text-sm leading-6 text-[var(--paper)]">
              Decisions, implementation, tradeoffs, validation and lessons
              traced end to end.
            </p>
          </aside>
        </div>
      </div>
    </header>
  );
}
