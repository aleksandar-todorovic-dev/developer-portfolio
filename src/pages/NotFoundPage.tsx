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
    <section className="full-bleed bg-[var(--paper)] text-[var(--ink)]">
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <p className="text-sm font-semibold text-[var(--violet-dark)]">
          Page not found
        </p>

        <div className="mt-8 max-w-4xl">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="max-w-[12ch] font-display text-[clamp(3rem,7vw,6.4rem)] font-semibold leading-[0.96] tracking-[-0.035em] focus:outline-none"
          >
            That page isn&apos;t here.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-[var(--ink)]/70 sm:text-lg">
            The address may be incomplete, outdated or mistyped. You can return
            home or continue to the work and contact details below.
          </p>

          <p className="mt-5 max-w-xl text-sm text-[var(--ink)]/65">
            You tried:{" "}
            <code className="break-all font-mono text-[var(--ink)]">
              {location.pathname}
            </code>
          </p>

          <Link
            to="/"
            className="focus-ring mt-8 inline-flex min-h-12 items-center gap-8 bg-[var(--violet-dark)] px-5 py-3 text-sm font-semibold text-[var(--paper)] transition-colors hover:bg-[var(--ink)]"
          >
            Return home <span aria-hidden="true">→</span>
          </Link>
        </div>

        <nav
          aria-label="Continue from missing page"
          className="mt-14 border-t border-[var(--ink)]/30 sm:mt-20"
        >
          <p className="pt-6 text-sm font-semibold text-[var(--ink)]/65">
            Or continue with
          </p>
          <ul className="mt-3 grid border-l border-t border-[var(--ink)]/25 sm:grid-cols-2">
            {recoveryLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="focus-ring group flex min-h-32 flex-col justify-between gap-6 border-b border-r border-[var(--ink)]/25 p-5 transition-colors hover:bg-[var(--ink)] hover:text-[var(--paper)] sm:p-6"
                >
                  <span className="flex items-center justify-between gap-5">
                    <span className="font-display text-3xl font-semibold tracking-[-0.025em]">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-xl text-[var(--violet-dark)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--paper)] motion-reduce:group-hover:translate-x-0"
                    >
                      →
                    </span>
                  </span>
                  <span className="max-w-md text-sm leading-6 text-[var(--ink)]/65 group-hover:text-[var(--paper)]/70">
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
