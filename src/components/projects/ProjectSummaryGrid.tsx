type ProjectSummaryGridProps = {
  proofSummary: string;
  keyDecision: string;
  tradeoff: string;
};

export function ProjectSummaryGrid({
  proofSummary,
  keyDecision,
  tradeoff,
}: ProjectSummaryGridProps) {
  return (
    <section
      aria-label="Project summary"
      className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame grid lg:grid-cols-12">
        <article className="border-b border-[var(--ink)]/25 py-12 sm:py-16 lg:col-span-7 lg:border-b-0 lg:border-r lg:pr-12">
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em]">
              What it proves
            </p>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-[var(--violet-dark)]"
            />
          </div>

          <h2 className="mt-8 max-w-2xl font-display text-[clamp(2.7rem,5.5vw,5.2rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
            What it demonstrates.
          </h2>

          <p className="font-body mt-8 max-w-2xl text-lg leading-8 text-[var(--ink)]/72">
            {proofSummary}
          </p>
        </article>

        <article className="bg-[var(--ink)] px-6 py-12 text-[var(--paper)] sm:px-10 sm:py-16 lg:col-span-5 lg:-mr-[var(--frame-edge)] lg:pr-[var(--frame-edge)]">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em] text-[var(--violet-text)]">
            Key decision
          </p>

          <h2 className="mt-8 font-display text-[clamp(2.2rem,4.5vw,4.4rem)] font-semibold leading-[0.92] tracking-[-0.055em]">
            The choice that mattered.
          </h2>

          <p className="font-body mt-7 max-w-xl leading-8 text-[var(--paper-muted)]">
            {keyDecision}
          </p>
        </article>

        <article className="border-t border-[var(--ink)]/25 py-10 sm:py-12 lg:col-span-10 lg:col-start-3 lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-10">
          <div className="flex items-start justify-between gap-4 lg:block">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.16em]">
              Tradeoff
            </p>
            <span aria-hidden="true" className="font-mono text-[var(--violet-dark)]">
              ——
            </span>
          </div>

          <div className="mt-6 lg:mt-0">
            <h2 className="font-display text-3xl leading-none font-semibold tracking-[-0.045em] sm:text-4xl">
              What this choice leaves out
            </h2>
            <p className="font-body mt-5 max-w-3xl leading-7 text-[var(--ink)]/70">
              {tradeoff}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
