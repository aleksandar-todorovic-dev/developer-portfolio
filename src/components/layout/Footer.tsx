import { Link } from "react-router";

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
    <footer className="relative mt-24 overflow-hidden bg-[var(--violet)] text-white sm:mt-32">
      <div
        aria-hidden="true"
        className="h-8 w-full bg-[var(--ink)] [clip-path:polygon(0_0,11%_0,11%_38%,29%_38%,29%_74%,48%_74%,48%_28%,67%_28%,67%_56%,83%_56%,83%_15%,100%_15%,100%_0)] sm:h-14"
      />

      <div className="content-frame pt-10 sm:pt-14">
        <div className="grid gap-10 border-b border-white/40 pb-10 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end">
          <div>
            <p className="signal-label flex items-center gap-3">
              <span className="size-2 bg-[var(--signal)]" aria-hidden="true" />
              Open to clear frontend and web problems
            </p>

            <h2 className="mt-5 max-w-5xl font-display text-[clamp(3.25rem,9vw,8.5rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              LET&apos;S RESOLVE
              <span className="block text-[var(--signal)]">WHAT&apos;S NEXT.</span>
            </h2>
          </div>

          <div className="border-t border-white/40 pt-5 lg:border-l lg:border-t-0 lg:pl-7 lg:pt-0">
            <p className="max-w-xs text-sm leading-6 text-white">
              Based in Kragujevac, Serbia. Frontend-first work with React,
              TypeScript, JavaScript and Firebase.
            </p>

            <Link
              to="/contact"
              className="editorial-link mt-5 text-sm text-white focus-visible:outline-none"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        <div className="grid gap-7 py-7 sm:grid-cols-[1fr_auto] sm:items-center">
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-3">
              <li>
                <Link
                  to="/projects"
                  className="focus-ring signal-label border-b border-transparent py-2 hover:border-white"
                >
                  Projects
                </Link>
              </li>

              {footerLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noreferrer" : undefined}
                    download={item.download}
                    className="focus-ring signal-label border-b border-transparent py-2 hover:border-white"
                  >
                    {item.label}
                    {item.external ? <NewTabNotice /> : null}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-white sm:text-right">
            © 2026 / React + TypeScript / Build trace 01
          </p>
        </div>
      </div>

      <p
        aria-hidden="true"
        className="pointer-events-none -mb-[0.09em] ml-[-0.04em] whitespace-nowrap font-display text-[clamp(5.8rem,21vw,20rem)] font-extrabold leading-[0.72] tracking-[-0.09em] text-[var(--ink)]"
      >
        ALEKSANDAR
      </p>
    </footer>
  );
}
