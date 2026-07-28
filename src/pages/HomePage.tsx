import { Link } from "react-router";

import { BackgroundCredibilitySection } from "../components/home/BackgroundCredibilitySection";
import { BuildProcessSection } from "../components/home/BuildProcessSection";
import { ContactVerificationSection } from "../components/home/ContactVerificationSection";
import { FeaturedProjectChapter } from "../components/home/FeaturedProjectChapter";
import { ProjectStackSection } from "../components/home/ProjectStackSection";
import { ResolveText } from "../components/motion/ResolveText";
import { SignalLine } from "../components/motion/SignalLine";
import { ProjectProofPanel } from "../components/projects/ProjectProofPanel";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-var(--header-height))] overflow-hidden pb-12 pt-10 sm:pb-16 sm:pt-14 lg:flex lg:flex-col lg:justify-between lg:pb-20">
        <div
          aria-hidden="true"
          className="trace-grid absolute -right-[22vw] top-[8%] -z-1 h-[34rem] w-[72vw] opacity-20"
        />

        <div className="grid gap-7 border-y border-[var(--line)] py-4 sm:grid-cols-[1fr_auto] sm:items-center">
          <p className="signal-label flex items-center gap-3 text-[var(--paper-muted)]">
            <span className="size-2 bg-[var(--signal)]" aria-hidden="true" />
            Aleksandar Todorovic / Frontend developer
          </p>

          <p className="signal-label text-[var(--paper-muted)] sm:text-right">
            React · TypeScript · JavaScript · Firebase
          </p>
        </div>

        <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-end lg:py-20">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="display-balance font-display text-[clamp(3.55rem,11.8vw,11.5rem)] font-semibold leading-[0.78] tracking-[-0.082em]"
          >
            <span className="block">I BUILD</span>
            <span className="block text-outline">FRONTEND</span>
            <span className="mt-[0.22em] block font-mono text-[0.16em] font-semibold uppercase leading-none tracking-[0.18em] text-[var(--paper-muted)]">
              That
            </span>
            <ResolveText
              text="RESOLVES."
              className="text-[var(--violet)]"
            />
          </h1>

          <div className="border-l border-[var(--line-strong)] pl-5 lg:mb-2">
            <p className="text-base leading-7 text-[var(--paper-muted)]">
              I build responsive web applications and product interfaces with
              clear user flows and practical engineering decisions behind
              them.
            </p>

            <Link
              to="/projects"
              className="editorial-link mt-6 text-sm text-[var(--signal)] focus-visible:outline-none"
            >
              Inspect the work
            </Link>
          </div>
        </div>

        <div>
          <SignalLine delay={0.25} />

          <div className="grid gap-4 pt-4 font-mono text-[0.63rem] uppercase tracking-[0.12em] text-[var(--paper-muted)] sm:grid-cols-3">
            <p>Signal 01 / Product interfaces</p>
            <p className="sm:text-center">Signal 02 / Typed interaction</p>
            <p className="sm:text-right">Signal 03 / Connected systems</p>
          </div>
        </div>
      </section>

      <div className="full-bleed border-y border-[var(--line)] bg-[var(--violet)]">
        <div className="content-frame py-6 sm:py-8">
          <ProjectProofPanel projects={projects} />
        </div>
      </div>

      <section className="pb-12 pt-24 sm:pb-16 sm:pt-32">
        <div className="grid gap-8 lg:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="signal-label text-[var(--signal)]">
            01—03 / Selected records
          </p>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(3.25rem,7.5vw,8rem)] font-semibold leading-[0.86] tracking-[-0.068em]">
              THREE PROJECTS.
              <span className="block text-[var(--paper-muted)]">
                THREE DIFFERENT PROOFS.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--paper-muted)]">
              Each project exists here for a different engineering reason.
              Follow the screenshots, decisions and tradeoffs—not a stack of
              interchangeable cards.
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
