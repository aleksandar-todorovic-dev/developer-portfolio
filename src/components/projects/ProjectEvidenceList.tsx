import type { ProjectEvidence } from "../../types/project";

type ProjectEvidenceListProps = {
  evidence: ProjectEvidence[];
  tone?: "dark" | "light";
};

export function ProjectEvidenceList({
  evidence,
  tone = "light",
}: ProjectEvidenceListProps) {
  const isDark = tone === "dark";

  return (
    <aside
      aria-label="Evidence for this section"
      className={`border-l-2 pl-5 xl:sticky xl:top-28 ${
        isDark
          ? "border-[var(--violet-text)]"
          : "border-[var(--violet-dark)]"
      }`}
    >
      <p
        className={`font-mono text-[0.62rem] uppercase tracking-[0.14em] ${
          isDark ? "text-[var(--violet-text)]" : "text-[var(--violet-dark)]"
        }`}
      >
        Supporting evidence
      </p>

      <ul className="mt-5">
        {evidence.map((item) => (
          <li
            key={item.label}
            className={`border-t py-5 first:pt-0 ${
              isDark ? "border-[var(--line)]" : "border-[var(--ink)]/20"
            }`}
          >
            <h3 className="text-base font-semibold leading-6">{item.label}</h3>
            <p
              className={`mt-2 text-sm leading-6 ${
                isDark
                  ? "text-[var(--paper-muted)]"
                  : "text-[var(--ink)]/68"
              }`}
            >
              {item.detail}
            </p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
