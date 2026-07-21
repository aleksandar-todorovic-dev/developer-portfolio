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
      className="mt-12 border-y border-[#2B2340]"
    >
      <div className="grid divide-y divide-[#2B2340] lg:grid-cols-3 lg:divide-x lg:divide-y-0">
        <article className="py-8 lg:pr-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C4B5FD]">
              Proof
            </p>

            <span className="font-mono text-sm text-[#5F5870]">01</span>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-[#F5F2FF]">
            What it demonstrates
          </h2>

          <p className="mt-4 leading-7 text-[#A9A1BA]">{proofSummary}</p>
        </article>

        <article className="py-8 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C4B5FD]">
              Decision
            </p>

            <span className="font-mono text-sm text-[#5F5870]">02</span>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-[#F5F2FF]">
            The choice that mattered
          </h2>

          <p className="mt-4 leading-7 text-[#A9A1BA]">{keyDecision}</p>
        </article>

        <article className="py-8 lg:pl-8">
          <div className="flex items-center justify-between gap-4">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#C4B5FD]">
              Tradeoff
            </p>

            <span className="font-mono text-sm text-[#5F5870]">03</span>
          </div>

          <h2 className="mt-5 text-xl font-semibold text-[#F5F2FF]">
            What this choice leaves out
          </h2>

          <p className="mt-4 leading-7 text-[#A9A1BA]">{tradeoff}</p>
        </article>
      </div>
    </section>
  );
}
