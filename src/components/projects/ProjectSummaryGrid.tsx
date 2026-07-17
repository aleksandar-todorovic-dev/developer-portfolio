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
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
        <h2 className="text-lg font-semibold">What it proves</h2>

        <p className="mt-3 leading-7 text-[#A9A1BA]">{proofSummary}</p>
      </article>

      <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
        <h2 className="text-lg font-semibold">Key decision</h2>

        <p className="mt-3 leading-7 text-[#A9A1BA]">{keyDecision}</p>
      </article>

      <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
        <h2 className="text-lg font-semibold">Tradeoff</h2>

        <p className="mt-3 leading-7 text-[#A9A1BA]">{tradeoff}</p>
      </article>
    </div>
  );
}
