import { Link, useLocation } from "react-router";

type RecoveryLink = {
  label: string;
  description: string;
  href: string;
};

const recoveryLinks: RecoveryLink[] = [
  {
    label: "Case studies",
    description:
      "Review LifeRecompiled, Training App and TaskFlow.",
    href: "/projects",
  },
  {
    label: "Contact",
    description:
      "Find my email, professional links and current CV.",
    href: "/contact",
  },
];

export function NotFoundPage() {
  const location = useLocation();

  return (
    <section className="full-bleed min-h-[72vh] bg-[var(--ink)] text-[var(--paper)]">
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <p className="text-sm font-semibold text-[var(--paper-muted)]">
          Page not found
        </p>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] lg:items-center">
          <div className="relative z-10">
            <h1
              id="page-heading"
              tabIndex={-1}
              className="font-display max-w-[9ch] text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.86] tracking-[-0.07em] focus:outline-none"
            >
              That page isn&apos;t here.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
              The address may be incomplete, outdated or mistyped. You can
              return home or continue to the work and contact details below.
            </p>

            <p className="mt-5 max-w-xl text-sm text-[var(--paper-muted)]">
              You tried:{" "}
              <code className="break-all font-mono text-[var(--paper)]">
                {location.pathname}
              </code>
            </p>

            <Link
              to="/"
              className="focus-ring mt-8 inline-flex min-h-12 items-center gap-8 bg-[var(--violet)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--violet-dark)]"
            >
              Return home <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div aria-hidden="true" className="relative overflow-hidden py-6">
            <p
              className="font-display select-none text-center text-[clamp(8rem,22vw,18rem)] font-semibold leading-[0.72] tracking-[-0.1em] text-transparent"
              style={{ WebkitTextStroke: "1px var(--violet-text)" }}
            >
              404
            </p>
            <div className="absolute inset-x-[8%] top-1/2 h-px bg-[var(--violet-text)]">
              <span className="absolute right-[28%] top-1/2 size-2 -translate-y-1/2 bg-[var(--violet-text)]" />
            </div>
          </div>
        </div>

        <nav
          aria-label="Continue from missing page"
          className="mt-14 border-t border-[var(--line-strong)] sm:mt-20"
        >
          <p className="pt-6 text-sm font-semibold text-[var(--paper-muted)]">
            Or continue with
          </p>
          <ul className="mt-3 grid border-l border-t border-[var(--line-strong)] sm:grid-cols-2">
            {recoveryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="focus-ring group flex min-h-32 flex-col justify-between gap-6 border-b border-r border-[var(--line-strong)] p-5 transition-colors hover:bg-[var(--ink-2)] sm:p-6"
                >
                  <span className="flex items-center justify-between gap-5">
                    <span className="font-display text-3xl font-semibold tracking-[-0.04em]">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-[var(--violet-text)] transition-transform group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="max-w-md text-sm leading-6 text-[var(--paper-muted)]">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
