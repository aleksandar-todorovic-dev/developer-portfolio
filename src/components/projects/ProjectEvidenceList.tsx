import type { ProjectEvidence } from "../../types/project";

type ProjectEvidenceListProps = {
  evidence: ProjectEvidence[];
};

export function ProjectEvidenceList({ evidence }: ProjectEvidenceListProps) {
  return (
    <section
      aria-labelledby="evidence-heading"
      className="border-t border-[#2B2340] pt-8"
    >
      <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Project highlights
          </p>

          <h2
            id="evidence-heading"
            className="mt-3 text-xl font-semibold text-[#F5F2FF]"
          >
            Key implementation details
          </h2>
        </div>

        <ul className="divide-y divide-[#2B2340] border-y border-[#2B2340]">
          {evidence.map((item, index) => (
            <li
              key={item.label}
              className="grid gap-3 py-6 sm:grid-cols-[48px_minmax(0,1fr)]"
            >
              <span className="font-mono text-sm text-[#5F5870]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="font-medium text-[#C4B5FD]">{item.label}</h3>

                <p className="mt-2 max-w-3xl leading-7 text-[#A9A1BA]">
                  {item.detail}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
