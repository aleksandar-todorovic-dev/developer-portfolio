import type { ProjectEvidence } from "../../types/project";

type ProjectEvidenceListProps = {
  evidence: ProjectEvidence[];
};

export function ProjectEvidenceList({ evidence }: ProjectEvidenceListProps) {
  return (
    <section
      aria-labelledby="evidence-heading"
      className="border-t border-[var(--line-strong)] pt-8"
    >
      <div className="grid gap-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
        <div>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--paper-muted)]">
            Verified signals
          </p>

          <h2
            id="evidence-heading"
            className="font-display mt-4 text-3xl leading-none font-semibold tracking-[-0.045em] text-[var(--paper)]"
          >
            Key implementation details
          </h2>
        </div>

        <ol className="border-y border-[var(--line-strong)]">
          {evidence.map((item, index) => (
            <li
              key={item.label}
              className="group grid border-b border-[var(--line)] py-7 last:border-b-0 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-5"
            >
              <span className="font-mono text-xs text-[var(--violet-text)]">
                EVID—{String(index + 1).padStart(2, "0")}
              </span>

              <div className="mt-4 sm:mt-0">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.035em] text-[var(--paper)] transition-colors group-hover:text-[var(--signal)]">
                  {item.label}
                </h3>

                <p className="font-body mt-3 max-w-3xl leading-7 text-[var(--paper-muted)]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
