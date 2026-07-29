import { Link } from "react-router";

import { TracePath } from "../motion/TracePath";
import { NewTabNotice } from "../ui";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/aleksandar-todorovic-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aleksandar-todorovic-dev",
    external: true,
  },
  {
    label: "CV",
    href: "/Aleksandar_Todorovic_CV.pdf",
    download: true,
  },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)] sm:mt-32">
      <div className="content-frame py-10 sm:py-14">
        <div className="grid gap-12 border-b border-[var(--line-strong)] pb-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end">
          <div>
            <p className="text-sm text-[var(--paper-muted)]">
              Aleksandar Todorovic · Frontend developer
            </p>

            <h2 className="mt-5 max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              From an unclear problem
              <span className="block text-[var(--violet-text)]">
                to something you can inspect.
              </span>
            </h2>
          </div>

          <div>
            <TracePath
              variant="complete"
              className="h-24 text-[var(--violet-text)]"
            />
            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--paper-muted)]">
              The case studies show the decisions, tradeoffs and tested results
              in between.
            </p>
          </div>
        </div>

        <div className="grid border-l border-t border-[var(--line-strong)] sm:grid-cols-2">
          <Link
            to="/projects"
            className="focus-ring group flex min-h-36 flex-col justify-between gap-8 border-b border-r border-[var(--line-strong)] p-5 transition-colors hover:bg-[var(--ink-2)] sm:p-7"
          >
            <span className="text-sm text-[var(--paper-muted)]">
              See the decisions and the finished work
            </span>
            <span className="flex items-end justify-between gap-6">
              <span className="font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.05em]">
                Projects
              </span>
              <span
                aria-hidden="true"
                className="text-2xl text-[var(--violet-text)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>

          <Link
            to="/contact"
            className="focus-ring group flex min-h-36 flex-col justify-between gap-8 border-b border-r border-[var(--line-strong)] p-5 transition-colors hover:bg-[var(--ink-2)] sm:p-7"
          >
            <span className="text-sm text-[var(--paper-muted)]">
              Share a role, project or clearly defined task
            </span>
            <span className="flex items-end justify-between gap-6">
              <span className="font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-none tracking-[-0.05em]">
                Contact
              </span>
              <span
                aria-hidden="true"
                className="text-2xl text-[var(--signal)] transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        </div>

        <div className="grid gap-7 pt-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    download={item.download}
                    className="focus-ring border-b border-transparent py-2 text-sm font-semibold hover:border-[var(--paper)]"
                  >
                    {item.label}
                    {item.external ? <NewTabNotice /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="text-sm text-[var(--paper-muted)] sm:text-right">
            © 2026 Aleksandar Todorovic · Built with React and TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
