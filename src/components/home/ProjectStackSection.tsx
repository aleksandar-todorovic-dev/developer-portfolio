import { Link } from "react-router";

import { capabilityProofs } from "../../data/capabilityProofs";
import { getProjectBySlug } from "../../utils/getProjectBySlug";

export function ProjectStackSection() {
  return (
    <section className="full-bleed bg-[var(--ink)] py-20 sm:py-28">
      <div className="content-frame">
        <div className="grid gap-9 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--paper-muted)]">
            Capabilities
          </p>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.45fr)] lg:items-end">
            <h2 className="display-balance font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[1.04] tracking-[-0.025em] md:leading-none md:tracking-[-0.035em]">
              The stack only
              <span className="block text-[var(--violet-text)]">
                matters in use.
              </span>
            </h2>

            <p className="border-l border-[var(--line-strong)] pl-5 text-base leading-7 text-[var(--paper-muted)]">
              Every capability below is tied to a real product decision,
              technical problem or working project.
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-t border-[var(--line-strong)] md:grid-cols-2 xl:grid-cols-3">
          {capabilityProofs.map((capability) => (
            <article
              key={capability.title}
              className="group border-b border-[var(--line)] py-7 md:px-7 md:odd:border-r xl:border-r xl:[&:nth-child(3n)]:border-r-0"
            >
              <h3 className="max-w-sm font-display text-2xl font-semibold tracking-[-0.035em]">
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
                        className="font-mono text-[0.63rem] uppercase tracking-[0.1em] text-[var(--violet-text)] underline decoration-[var(--line-strong)] underline-offset-4 transition-colors hover:text-[var(--paper)] focus-visible:outline-none"
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
