import { Link } from "react-router";
import { profile } from "../data/profile";

export function AboutPage() {
  return (
    <>
      <section className="full-bleed bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-12 sm:py-18 lg:py-24">
          <p className="eyebrow text-[var(--violet-dark)]">
            About / {profile.name}
          </p>
          <h1
            id="page-heading"
            tabIndex={-1}
            className="mt-7 max-w-[22ch] font-display text-[clamp(2.8rem,6.6vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            Frontend is a change of direction,
            <br />
            <span className="text-[var(--violet-dark)]">
              not a clean restart.
            </span>
          </h1>
          <p className="mt-8 max-w-[57ch] text-lg leading-8 text-[var(--ink)]/75 lg:ml-[25%]">
            Earlier IT support and years of operational responsibility did not
            disappear when I moved into frontend. They became part of how I
            troubleshoot, prioritize and follow technical work through.
          </p>
        </div>
      </section>
      <section
        aria-labelledby="background-heading"
        className="full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
      >
        <div className="content-frame grid gap-8 py-12 sm:py-16 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2
            id="background-heading"
            className="max-w-[14ch] font-display text-[clamp(2rem,4vw,4rem)] font-semibold leading-[1.04] tracking-[-0.035em]"
          >
            What I bring with me.
          </h2>
          <div className="max-w-3xl">
            <div className="border-b border-[var(--ink)]/25 pb-7">
              <p className="eyebrow text-[var(--violet-dark)]">
                IT support foundation
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">
                Find the problem before choosing the fix.
              </h3>
              <p className="mt-3 leading-8 text-[var(--ink)]/75">
                Earlier IT support work meant helping users with computers,
                setup and everyday technical issues. It taught me to reproduce a
                problem, check assumptions and follow the relevant steps.
              </p>
            </div>
            <div className="border-b border-[var(--ink)]/25 py-7 sm:ml-7">
              <p className="eyebrow text-[var(--violet-dark)]">
                Operations responsibility
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">
                Prioritize, communicate, follow through.
              </h3>
              <p className="mt-3 leading-8 text-[var(--ink)]/75">
                Years of day-to-day operational responsibility meant handling
                people, competing priorities and unexpected problems. That
                experience still shapes how I approach work under pressure.
              </p>
            </div>
            <div className="pt-7 sm:ml-14">
              <p className="eyebrow text-[var(--violet-dark)]">
                Frontend project work
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em]">
                Put those habits into working software.
              </h3>
              <p className="mt-3 leading-8 text-[var(--ink)]/75">
                Structured JavaScript and React learning led into independent
                projects: a Firebase-backed community app, a structured training
                product and a typed Kanban board. Building, deploying and
                documenting those projects is where I turned that learning into
                practical frontend work.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="principles-heading"
        className="full-bleed bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="content-frame grid gap-9 py-14 sm:py-20 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2
            id="principles-heading"
            className="eyebrow text-[var(--violet-text)]"
          >
            In practice
          </h2>
          <div>
            <ul className="space-y-4 font-display text-[clamp(1.8rem,4vw,3.8rem)] font-medium leading-[1.1] tracking-[-0.035em]">
              <li>Trace the relevant flow.</li>
              <li>Keep the change bounded.</li>
              <li>Test and explain the result.</li>
            </ul>
            <p className="mt-7 max-w-[58ch] leading-8 text-[var(--paper-muted)]">
              I use documentation, browser tools and automated checks to
              investigate efficiently. I test the result against the
              application, cover normal and edge cases, and make sure I can
              explain the final change.
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="current-direction-heading"
        className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
      >
        <div className="content-frame grid gap-8 py-14 sm:py-20 lg:grid-cols-[0.6fr_1.4fr] lg:gap-16">
          <h2
            id="current-direction-heading"
            className="eyebrow text-[var(--violet-dark)]"
          >
            Where I am now
          </h2>
          <div>
            <p className="max-w-[34ch] font-display text-[clamp(2rem,3.7vw,3.6rem)] font-medium leading-[1.1] tracking-[-0.03em]">
              Frontend-first.
              <br />
              Based in {profile.location}.
            </p>
            <p className="mt-6 max-w-[58ch] leading-8 text-[var(--ink)]/75">
              React, TypeScript, JavaScript and Firebase are the center of my
              current work. I'm open to frontend roles and clearly scoped web
              projects, remotely from Serbia or locally in Kragujevac.
            </p>
            <nav
              aria-label="More about Aleksandar"
              className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              <Link
                to="/contact"
                className="focus-ring inline-flex min-h-12 items-center gap-10 bg-[var(--violet-dark)] px-5 py-3 text-sm font-semibold text-[var(--paper)]"
              >
                Contact <span aria-hidden="true">→</span>
              </Link>
              <a href={profile.cv} download className="text-action">
                Download CV <span aria-hidden="true">↓</span>
              </a>
              <Link to="/projects" className="text-action">
                Projects <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
