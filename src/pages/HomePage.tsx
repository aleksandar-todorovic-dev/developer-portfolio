import { useEffect, useState } from "react";
import { Link } from "react-router";

import { BackgroundCredibilitySection } from "../components/home/BackgroundCredibilitySection";
import { BuildProcessSection } from "../components/home/BuildProcessSection";
import { ContactVerificationSection } from "../components/home/ContactVerificationSection";
import { FeaturedProjectChapter } from "../components/home/FeaturedProjectChapter";
import { ProjectStackSection } from "../components/home/ProjectStackSection";
import { ProjectProofPanel } from "../components/projects/ProjectProofPanel";
import { projects } from "../data/projects";

const clarityResolveSessionKey = "resolved-field-clarity-resolved";
let hasResolvedClarity = false;

function ClarityResolve() {
  const [isResolveActive, setIsResolveActive] = useState(() => {
    let wasResolved = hasResolvedClarity;

    try {
      wasResolved =
        wasResolved ||
        window.sessionStorage.getItem(clarityResolveSessionKey) === "true";
    } catch {
      // The finite resolve still works when session storage is unavailable.
    }

    try {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return false;
      }
    } catch {
      // The CSS reduced-motion fallback still presents the final state.
    }

    return !wasResolved;
  });

  useEffect(() => {
    hasResolvedClarity = true;

    try {
      window.sessionStorage.setItem(clarityResolveSessionKey, "true");
    } catch {
      // Module state still prevents repeat playback during this app session.
    }
  }, []);

  useEffect(() => {
    if (!isResolveActive) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finishResolve = () => {
      setIsResolveActive(false);
    };
    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        finishResolve();
      }
    };
    const resolveTimeoutId = window.setTimeout(finishResolve, 700);

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange,
      );
      window.clearTimeout(resolveTimeoutId);
    };
  }, [isResolveActive]);

  return (
    <span
      className={`clarity-resolve ${
        isResolveActive ? "clarity-resolve--active" : ""
      }`}
      onAnimationEnd={() => setIsResolveActive(false)}
    >
      CLARITY.
    </span>
  );
}

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden pb-10 pt-8 sm:pb-12 sm:pt-10">
        <div className="border-b border-[var(--line)] pb-4">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-[var(--paper-muted)]">
            Aleksandar Todorovic — Frontend developer
          </p>
        </div>

        <div className="py-10 sm:py-12 lg:py-14">
          <h1
            id="page-heading"
            tabIndex={-1}
            className="font-display text-[clamp(3rem,9.4vw,9rem)] font-semibold leading-[0.92] tracking-[-0.04em] [font-stretch:100%]"
          >
            <span className="block">I BUILD FRONTEND</span>
            <span className="block">FROM UNCERTAINTY</span>
            <span className="block">
              TO <ClarityResolve />
            </span>
          </h1>

          <div className="mt-9 grid gap-6 border-t border-[var(--line-strong)] pt-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
            <p className="max-w-[56ch] text-base leading-7 text-[var(--paper-muted)] sm:text-lg sm:leading-8">
              I trace the relevant flow, make a practical decision, and test
              the result through real project evidence.
            </p>

            <Link
              to="/projects"
              className="focus-ring inline-flex min-h-12 items-center justify-between gap-8 border-b border-[var(--paper)] pb-2 text-sm font-semibold text-[var(--paper)] transition-colors hover:border-[var(--violet-text)] hover:text-[var(--violet-text)]"
            >
              Inspect selected work
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <ProjectProofPanel projects={projects} />

      <section className="pb-12 pt-18 sm:pb-16 sm:pt-24">
        <div className="grid gap-6 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.13em] text-[var(--paper-muted)]">
            Selected work
          </p>

          <h2 className="max-w-5xl font-display text-[clamp(2.8rem,6vw,6.4rem)] font-semibold leading-[1.02] tracking-[-0.025em] md:leading-[1.01] [font-stretch:100%]">
            Three projects.
            <span className="block text-[var(--violet-text)]">
              Three different problems.
            </span>
          </h2>
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
