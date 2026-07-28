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
    <section
      aria-label="Project links"
      className="full-bleed mt-24 border-y border-[var(--paper)]/25 bg-[var(--violet-dark)] text-[var(--paper)] sm:mt-32"
    >
      <div className="content-frame grid lg:grid-cols-[16rem_minmax(0,1fr)]">
        <div className="py-10 lg:border-r lg:border-[var(--paper)]/25 lg:pr-10">
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--paper)]">
            External resolve
          </p>

          <h2 className="font-display mt-5 text-4xl leading-[0.92] font-semibold tracking-[-0.05em]">
            View the project
          </h2>
        </div>

        <div className="border-t border-[var(--paper)]/25 lg:border-t-0 lg:pl-10">
          {links.map((link, index) => (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="focus-ring group grid gap-5 border-b border-[var(--paper)]/25 py-8 last:border-b-0 sm:grid-cols-[4rem_minmax(0,1fr)_4rem] sm:items-center"
            >
              <span className="font-mono text-xs text-[var(--signal)]">
                OUT—{String(index + 1).padStart(2, "0")}
              </span>

              <span>
                <span className="block font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--paper)]">
                  {linkTypeLabels[link.type]}
                </span>

                <span className="font-display mt-2 block text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                  {link.label}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="flex size-12 items-center justify-center bg-[var(--signal)] text-2xl text-[var(--ink)] transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>

              <NewTabNotice />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
