import { Link } from "react-router";

export function BackgroundCredibilitySection() {
  return (
    <section
      aria-labelledby="about-bridge-heading"
      className="full-bleed bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame grid gap-7 py-14 sm:py-20 lg:grid-cols-[0.35fr_1.1fr_0.75fr] lg:gap-12 lg:py-24">
        <p className="eyebrow text-[var(--violet-dark)]">How I got here</p>
        <h2
          id="about-bridge-heading"
          className="max-w-[21ch] font-display text-[clamp(2.25rem,4.5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.035em]"
        >
          Frontend is a change of direction, not a clean restart.
        </h2>
        <div className="lg:pt-2">
          <p className="max-w-lg leading-8 text-[var(--ink)]/75">
            Earlier IT support and years of operational responsibility still
            shape how I troubleshoot, prioritize and follow work through today.
          </p>
          <Link to="/about" className="text-action mt-6">
            Read the story <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
