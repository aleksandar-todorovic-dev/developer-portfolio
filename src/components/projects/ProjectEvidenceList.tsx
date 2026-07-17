import type { ProjectEvidence } from "../../types/project";

type ProjectEvidenceListProps = {
  evidence: ProjectEvidence[];
};

export function ProjectEvidenceList({ evidence }: ProjectEvidenceListProps) {
  return (
    <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6 lg:col-span-2">
      <h2 className="text-lg font-semibold">Evidence</h2>

      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {evidence.map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-[#2B2340] bg-[#181423] p-4"
          >
            <p className="text-sm font-medium text-[#C4B5FD]">{item.label}</p>

            <p className="mt-2 text-sm leading-6 text-[#A9A1BA]">
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
}
