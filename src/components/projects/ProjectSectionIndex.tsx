import { Link } from "react-router";
import type { CaseStudySection } from "../../types/project";

export function ProjectSectionIndex({
  sections,
}: {
  sections: CaseStudySection[];
}) {
  return (
    <nav
      aria-label="On this page"
      className="border-t border-[var(--ink)]/25 pt-4"
    >
      <ol className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <li key={section.id}>
            <Link
              to={`#${section.id}`}
              className="focus-ring flex min-h-11 items-center gap-3 py-2 text-sm leading-6 underline decoration-[var(--ink)]/25 underline-offset-4 hover:decoration-[var(--violet-dark)]"
            >
              <span aria-hidden="true" className="text-[var(--violet-dark)]">
                ↓
              </span>
              {section.title}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
