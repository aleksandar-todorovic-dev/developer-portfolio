import { useEffect, useState } from "react";
import { Link } from "react-router";

let hasPlayedHeroMotion = false;

function shouldPlayHeroMotion() {
  const forceMotionReview =
    new URLSearchParams(window.location.search).get("motion-review") === "hero";

  if (forceMotionReview) {
    return true;
  }

  if (hasPlayedHeroMotion) {
    return false;
  }

  try {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return false;
    }
  } catch {
    // CSS still supplies the complete reduced-motion state.
  }

  return true;
}

function HeroFieldTexture() {
  return (
    <div className="authored-hero-field" aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <span key={index} />
      ))}
    </div>
  );
}

export function AuthoredHero() {
  const [isMotionActive, setIsMotionActive] = useState(shouldPlayHeroMotion);

  useEffect(() => {
    hasPlayedHeroMotion = true;
  }, []);

  useEffect(() => {
    if (!isMotionActive) {
      return;
    }

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const finishMotion = () => setIsMotionActive(false);
    const handleReducedMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        finishMotion();
      }
    };
    const motionTimeoutId = window.setTimeout(finishMotion, 1280);

    reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

    return () => {
      reducedMotionQuery.removeEventListener(
        "change",
        handleReducedMotionChange,
      );
      window.clearTimeout(motionTimeoutId);
    };
  }, [isMotionActive]);

  return (
    <section
      className={`authored-hero relative full-bleed overflow-hidden border-b border-[var(--line)] bg-[var(--ink)] text-[var(--paper)] ${
        isMotionActive ? "authored-hero--active" : ""
      }`}
    >
      <HeroFieldTexture />

      <div className="content-frame relative z-10 flex flex-col py-7 sm:py-9 lg:min-h-[calc(100svh-var(--header-height))] lg:py-10">
        <div className="grid gap-3 border-b border-[var(--line)] pb-4 text-sm text-[var(--paper-muted)] sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p>Frontend developer · Kragujevac, Serbia</p>
          <p className="sm:text-right">React · TypeScript · Firebase</p>
        </div>

        <div className="grid gap-7 py-10 sm:gap-9 lg:flex-1 lg:-translate-y-7 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:content-stretch lg:items-end lg:gap-12 lg:py-16">
          <h1
            id="page-heading"
            tabIndex={-1}
            className={`authored-hero-heading font-display text-[clamp(3.35rem,10.8vw,10.9rem)] font-semibold leading-[0.78] tracking-[-0.075em] ${
              isMotionActive ? "authored-hero-heading--active" : ""
            }`}
          >
            <span className="authored-hero-line authored-hero-line--build block">
              I BUILD
            </span>
            <span className="authored-hero-line authored-hero-line--frontend authored-hero-outline block">
              FRONTEND
            </span>
            <span className="authored-hero-resolution mt-[0.18em] grid grid-cols-[auto_minmax(0,1fr)] items-end gap-[0.08em]">
              <span className="authored-hero-that mb-[0.26em] font-mono text-[0.135em] font-semibold uppercase leading-none tracking-[0.16em] text-[var(--paper-muted)]">
                That
              </span>
              <span className="authored-hero-line authored-hero-line--resolves min-w-0 text-[var(--violet)]">
                RESOLVES.
              </span>
            </span>
          </h1>

          <div className="lg:mb-2">
            <div className="border-l border-[var(--line-strong)] pl-6 sm:pl-7">
              <p className="body-pretty text-[1.05rem] leading-8 text-[var(--paper)] sm:text-lg sm:leading-8">
                Responsive React and TypeScript interfaces shaped around real
                product flows and backed by working projects you can inspect.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-4">
                <Link
                  to="/#selected-work"
                  className="focus-ring authored-text-link group inline-flex items-center gap-4 text-sm font-semibold"
                >
                  See selected work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                  >
                    →
                  </span>
                </Link>

                <Link
                  to="/about"
                  className="focus-ring authored-text-link authored-text-link--muted text-sm font-semibold"
                >
                  How I got here
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="authored-hero-completion grid gap-3 border-t border-[var(--line)] pt-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <span className="authored-hero-completion-line" aria-hidden="true" />
          <p className="text-[0.82rem] font-medium leading-5 tracking-[-0.01em] text-[var(--paper-muted)] sm:text-right">
            Real interfaces. Visible decisions. Live projects.
          </p>
        </div>
      </div>
    </section>
  );
}
