import { Link } from "react-router";

import { capabilityProofs } from "../../data/capabilityProofs";
import { getProjectBySlug } from "../../utils/getProjectBySlug";

export function ProjectStackSection() {
  return (
    <section className="full-bleed bg-[var(--ink)] py-20 sm:py-28">
      <div className="content-frame">
        <div className="grid gap-9 lg:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="signal-label text-[var(--signal)]">
            04 / Capability map
          </p>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.45fr)] lg:items-end">
            <h2 className="display-balance font-display text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              THE STACK ONLY
              <span className="block text-[var(--violet)]">
                MATTERS IN USE.
              </span>
            </h2>

            <p className="border-l border-[var(--line-strong)] pl-5 text-base leading-7 text-[var(--paper-muted)]">
              Every capability below is tied to a real product decision,
              technical problem or working project.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-[var(--line)] md:grid-cols-2 xl:grid-cols-3">
          {capabilityProofs.map((capability, index) => (
            <article
              key={capability.title}
              className="group min-h-72 border-b border-r border-[var(--line)] p-6 transition-colors hover:bg-[var(--ink-2)] sm:p-8"
            >
              <div className="flex items-center justify-between gap-5">
                <p className="font-mono text-xs text-[var(--paper-muted)]">
                  {String(index + 1).padStart(2, "0")} /{" "}
                  {String(capabilityProofs.length).padStart(2, "0")}
                </p>
                <span
                  aria-hidden="true"
                  className="h-px w-8 bg-[var(--violet)] transition-[width] group-hover:w-16"
                />
              </div>

              <h3 className="mt-8 max-w-sm font-display text-2xl font-semibold tracking-[-0.035em]">
                {capability.title}
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--paper-muted)]">
                {capability.description}
              </p>

              <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {capability.projectSlugs.map((slug) => {
                  const project = getProjectBySlug(slug);

                  if (!project) {
                    return null;
                  }

                  return (
                    <li key={project.slug}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="font-mono text-[0.63rem] uppercase tracking-[0.1em] text-[var(--signal)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--paper)] focus-visible:outline-none"
                      >
                        {project.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
