import { motion, useReducedMotion } from "motion/react";
import { Link, useLocation } from "react-router";

import { cn } from "../utils/cn";

type RecoveryLink = {
  label: string;
  description: string;
  href: string;
};

const recoveryLinks: RecoveryLink[] = [
  {
    label: "Home",
    description: "Return to the homepage and main project overview.",
    href: "/",
  },
  {
    label: "Case studies",
    description:
      "Review LifeRecompiled, Training App and TaskFlow in more detail.",
    href: "/projects",
  },
  {
    label: "Contact",
    description:
      "Find direct contact details, professional links and the current CV.",
    href: "/contact",
  },
];

const recoveryPanels = [
  {
    layout: "md:col-span-5",
    surface: "bg-[var(--paper)]",
    text: "text-[var(--ink)]",
  },
  {
    layout: "md:col-span-7 md:mt-20",
    surface: "bg-[var(--violet)]",
    text: "text-[var(--paper)]",
  },
  {
    layout: "md:col-span-8 md:col-start-5",
    surface:
      "border border-[var(--line-strong)] bg-[var(--ink-2)]",
    text: "text-[var(--paper)]",
  },
] as const;

export function NotFoundPage() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();

  return (
    <>
      <section className="full-bleed relative isolate overflow-hidden bg-[var(--ink)] text-[var(--paper)]">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[19rem] -z-10 h-px bg-[var(--line)] sm:top-[42%]"
        />
        <motion.div
          aria-hidden="true"
          initial={prefersReducedMotion ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="absolute left-0 top-[19rem] z-20 h-1 w-[32%] origin-left bg-[var(--signal)] sm:top-[42%]"
        />

        <div className="content-frame py-14 sm:py-20 lg:py-24">
          <div className="flex items-center justify-between gap-5">
            <p className="signal-label font-mono text-[0.68rem] uppercase tracking-[0.2em] text-[var(--signal)]">
              404 / Route not found
            </p>
            <p className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper-muted)]">
              Trace interrupted
            </p>
          </div>

          <div className="mt-7 grid min-h-[25rem] items-center sm:min-h-[32rem]">
            <p
              aria-hidden="true"
              className="font-display col-start-1 row-start-1 self-start select-none whitespace-nowrap pt-20 text-center text-[clamp(11rem,36vw,33rem)] font-semibold leading-[0.66] tracking-[-0.12em] text-transparent sm:self-center sm:pt-0"
              style={{ WebkitTextStroke: "1px var(--violet)" }}
            >
              404
            </p>

            <div className="relative z-10 col-start-1 row-start-1 py-12 sm:pl-[8%]">
              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-display max-w-[9ch] text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.86] tracking-[-0.07em] focus:outline-none"
              >
                This page could not be found.
              </h1>

              <p className="mt-7 max-w-xl text-base leading-8 text-[var(--paper-muted)] sm:text-lg">
                The address may be incomplete, outdated or mistyped. The
                portfolio itself is still here, and the main routes below will
                take you back to useful content.
              </p>

              <Link
                to="/"
                style={{ color: "var(--ink)" }}
                className="focus-ring mt-8 inline-flex min-h-12 items-center gap-8 bg-[var(--signal)] px-5 py-3 font-mono text-xs font-semibold uppercase tracking-[0.14em] text-[var(--ink)] transition-colors hover:bg-[var(--paper)]"
              >
                Return home <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <aside
            aria-label="Route diagnostic"
            className="cut-corner relative z-20 bg-[var(--violet-dark)] p-5 sm:p-7"
          >
            <div className="flex items-center justify-between gap-5 border-b border-[var(--paper)]/25 pb-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--signal)]">
                Route check
              </p>
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 bg-[var(--signal)]"
              />
            </div>

            <dl className="grid gap-px bg-[var(--paper)]/20 lg:grid-cols-[1.2fr_1fr_1fr]">
              <div className="bg-[var(--violet-dark)] py-5 pr-5 lg:px-5 lg:first:pl-0">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Requested path
                </dt>
                <dd className="mt-3 break-all font-mono text-sm leading-6 text-[var(--paper)]">
                  {location.pathname}
                </dd>
              </div>

              <div className="bg-[var(--violet-dark)] py-5 lg:px-5">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Status
                </dt>
                <dd className="mt-3 leading-6 text-[var(--paper)]">
                  No matching portfolio route was found.
                </dd>
              </div>

              <div className="bg-[var(--violet-dark)] py-5 lg:pl-5">
                <dt className="font-mono text-[0.64rem] uppercase tracking-[0.16em] text-[var(--paper)]">
                  Suggested action
                </dt>
                <dd className="mt-3 leading-6 text-[var(--paper)]">
                  Choose one of the links below.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="mt-20 sm:mt-28">
        <div className="grid gap-6 md:grid-cols-[minmax(8rem,0.28fr)_minmax(0,1fr)] md:gap-10">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--signal)] md:pt-2">
            Available routes
          </p>

          <h2 className="font-display max-w-4xl text-[clamp(2.8rem,6vw,6.2rem)] font-semibold leading-[0.9] tracking-[-0.06em] text-[var(--paper)]">
            Continue from one of the main pages.
          </h2>
        </div>

        <nav aria-label="Recover from missing page" className="mt-12">
          <ul className="grid gap-4 md:grid-cols-12">
            {recoveryLinks.map((item, index) => {
              const panel = recoveryPanels[index];

              return (
                <li
                  key={item.href}
                  className={cn(panel.layout, panel.text)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "group focus-ring cut-corner flex min-h-[18rem] h-full flex-col justify-between p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8",
                      panel.surface,
                    )}
                  >
                    <div className="flex items-start justify-between gap-5 font-mono text-[0.66rem] uppercase tracking-[0.16em]">
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <span
                        aria-hidden="true"
                        className="text-2xl transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                    <div>
                      <span className="font-display block text-[clamp(2.7rem,5vw,5.5rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
                        {item.label}
                      </span>
                      <span className="mt-5 block max-w-lg leading-7">
                        {item.description}
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </>
  );
}
