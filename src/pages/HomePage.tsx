import { Link } from "react-router";

import { BackgroundCredibilitySection } from "../components/home/BackgroundCredibilitySection";
import { BuildProcessSection } from "../components/home/BuildProcessSection";
import { ContactVerificationSection } from "../components/home/ContactVerificationSection";
import { FeaturedProjectChapter } from "../components/home/FeaturedProjectChapter";
import { ProjectStackSection } from "../components/home/ProjectStackSection";
import { ResolveText } from "../components/motion/ResolveText";
import { TracePath } from "../components/motion/TracePath";
import { ProjectProofPanel } from "../components/projects/ProjectProofPanel";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-var(--header-height))] overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14 lg:flex lg:flex-col lg:justify-between lg:pb-18">
        <div className="grid gap-7 border-b border-[var(--line)] pb-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--paper-muted)]">
            Aleksandar Todorovic — Frontend developer
          </p>

          <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[var(--paper-muted)] sm:text-right">
            React · TypeScript · JavaScript · Firebase
          </p>
        </div>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:py-18">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="display-balance font-display text-[clamp(3.45rem,11.2vw,10.8rem)] font-semibold leading-[0.78] tracking-[-0.082em]"
          >
            <span className="block">I BUILD</span>
            <span className="block text-outline">FRONTEND</span>
            <span className="mt-[0.42em] block font-mono text-[0.16em] font-semibold uppercase leading-none tracking-[0.15em] text-[var(--paper-muted)]">
              From uncertainty to
            </span>
            <ResolveText
              text="CLARITY."
              className="text-[var(--violet)]"
            />
          </h1>

          <div className="border-t border-[var(--line-strong)] pt-5 lg:mb-2 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="text-base leading-7 text-[var(--paper)]">
              I trace the relevant flow, understand the constraints and build
              responsive frontend work around a practical decision.
            </p>

            <p className="mt-4 text-sm leading-6 text-[var(--paper-muted)]">
              The result is tested, documented and shown through real project
              evidence.
            </p>

            <Link
              to="/projects"
              className="editorial-link mt-6 text-sm text-[var(--paper)] focus-visible:outline-none"
            >
              Inspect the work
            </Link>
          </div>
        </div>

        <div className="border-t border-[var(--line)] pt-5">
          <div className="flex items-center justify-between gap-6 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--paper-muted)]">
            <span>Unclear problem</span>
            <span>Tested outcome</span>
          </div>

          <TracePath
            variant="clarity"
            className="mt-2 h-24 text-[var(--violet)] sm:h-28"
          />
        </div>
      </section>

      <ProjectProofPanel projects={projects} />

      <section className="pb-12 pt-24 sm:pb-16 sm:pt-30">
        <div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--paper-muted)]">
            Selected work
          </p>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(3rem,6.8vw,7.2rem)] font-semibold leading-[0.88] tracking-[-0.06em]">
              THREE PROJECTS.
              <span className="block text-[var(--violet-text)]">
                THREE DIFFERENT PROBLEMS.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--paper-muted)]">
              Connected data, product continuity and typed interaction each
              require a different path from problem to result.
            </p>
          </div>
        </div>
      </section>

      <section aria-label="Selected project chapters">
        {projects.map((project, index) => (
          <FeaturedProjectChapter
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>

      <ProjectStackSection />
      <BuildProcessSection />
      <BackgroundCredibilitySection />
      <ContactVerificationSection />
    </>
  );
}
