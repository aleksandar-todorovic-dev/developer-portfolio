import { Link } from "react-router";

import { verificationLinks } from "../../data/verificationLinks";
import { NewTabNotice } from "../ui";

export function ContactVerificationSection() {
  return (
    <section className="full-bleed border-y border-[var(--line)] bg-[var(--ink-2)] py-20 sm:py-28">
      <div className="content-frame">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(22rem,1.2fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--paper-muted)]">
              Work and contact
            </p>

            <h2 className="mt-5 font-display text-[clamp(3rem,6.2vw,6.4rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              THE WORK
              <span className="block text-[var(--violet-text)]">
                IS OPEN TO INSPECT.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-[var(--paper-muted)]">
              Review the projects, inspect the code, or contact me about
              frontend, web, implementation or software-facing work.
            </p>
          </div>

          <ul className="border-t border-[var(--line-strong)]">
            {verificationLinks.map((item) => {
              const content = (
                <>
                  <span>
                    <span className="block font-display text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                      {item.label}
                    </span>
                    <span className="mt-2 block max-w-2xl text-sm leading-6 text-[var(--paper-muted)]">
                      {item.description}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className={`text-2xl transition-transform group-hover:translate-x-2 ${
                      item.href.startsWith("mailto:")
                        ? "text-[var(--signal)]"
                        : "text-[var(--violet-text)]"
                    }`}
                  >
                    {item.download ? "↓" : item.external ? "↗" : "→"}
                  </span>

                  {item.external ? <NewTabNotice /> : null}
                </>
              );

              return (
                <li
                  key={item.label}
                  className="border-b border-[var(--line)]"
                >
                  {item.external ||
                  item.download ||
                  item.href.startsWith("mailto:") ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                      download={item.download}
                      className="focus-ring group grid min-h-30 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 transition-colors hover:bg-[var(--ink)] sm:px-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link
                      to={item.href}
                      className="focus-ring group grid min-h-30 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-6 transition-colors hover:bg-[var(--ink)] sm:px-4"
                    >
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
