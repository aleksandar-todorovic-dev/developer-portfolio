import type { ProjectFacts } from "../../data/projectFacts";

export function ProjectFactsBand({ facts }: { facts: ProjectFacts }) {
  const items = [
    ["Role / scope", facts.scope],
    ["Key decision", facts.decision],
    ["Constraint", facts.constraint],
    ["Current status", facts.status],
  ];
  return (
    <section
      aria-label="Project facts"
      className="full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
    >
      <dl className="content-frame grid grid-cols-2 gap-x-5 gap-y-4 py-5 sm:gap-x-8 lg:grid-cols-4">
        {items.map(([label, value]) => (
          <div key={label}>
            <dt className="eyebrow text-[var(--ink)]/65">{label}</dt>
            <dd className="mt-2 max-w-[34ch] text-sm leading-6">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
