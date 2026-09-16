import { Link } from "react-router";

export function NotFoundPage({
  projectNotFound = false,
}: {
  projectNotFound?: boolean;
}) {
  return (
    <section className="full-bleed min-h-[65svh] bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame py-14 sm:py-24">
        <p className="eyebrow text-[var(--violet-dark)]">
          404 / {projectNotFound ? "Project not found" : "Page not found"}
        </p>
        <h1
          id="page-heading"
          tabIndex={-1}
          className="mt-7 max-w-[19ch] font-display text-[clamp(2.6rem,6.5vw,6rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        >
          {projectNotFound
            ? "There is no project at this address."
            : "There is no page at this address."}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--ink)]/75">
          The link may be incomplete or out of date. You can reach all three
          projects from here.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2">
          <Link to="/" className="text-action">
            Home <span aria-hidden="true">→</span>
          </Link>
          <Link to="/projects" className="text-action">
            Projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
