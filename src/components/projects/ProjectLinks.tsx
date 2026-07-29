import type { ProjectLink } from "../../types/project";
import { NewTabNotice } from "../ui";

type ProjectLinksProps = {
  links: ProjectLink[];
};

const linkTypeLabels: Record<ProjectLink["type"], string> = {
  live: "Live project",
  github: "Source code",
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <nav
      aria-label="Project links"
      className="grid gap-3 pt-5 sm:grid-cols-[10rem_minmax(0,1fr)] sm:items-start"
    >
      <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--ink)]/65">
        Live and source
      </p>

      <div className="grid grid-cols-2 gap-2">
        {links.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-12 items-center justify-between gap-2 border border-[var(--ink)]/35 px-3 py-2 text-sm font-semibold transition-colors duration-200 hover:border-[var(--violet-dark)] hover:text-[var(--violet-dark)]"
          >
            <span>
              <span className="sr-only">{linkTypeLabels[link.type]}: </span>
              {link.label}
            </span>
            <span aria-hidden="true">↗</span>
            <NewTabNotice />
          </a>
        ))}
      </div>
    </nav>
  );
}
