import { motion, useReducedMotion } from "motion/react";

import { buildSteps } from "../../data/buildSteps";

export function BuildProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="full-bleed bg-[var(--paper)] py-20 text-[var(--ink)] sm:py-28">
      <div className="content-frame">
        <div className="grid gap-9 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--violet-dark)]">
              How I work
            </p>
            <p className="mt-3 max-w-40 text-sm leading-6 text-[var(--ink)]/65">
              A practical route from an unclear brief to a tested result.
            </p>
          </div>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(2.7rem,5.5vw,5.4rem)] font-semibold leading-[1.04] tracking-[-0.025em] md:leading-none md:tracking-[-0.035em]">
              The work moves
              <span className="block text-[var(--violet-dark)]">
                through decisions.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--ink)]/70">
              The projects are different, but the decision process behind them
              follows the same grounded sequence.
            </p>
          </div>
        </div>

        <div className="relative mt-12 border-y border-[var(--ink)]/20">
          <div className="grid grid-cols-3 xl:grid-cols-[1fr_2fr_1fr]">
            <p className="flex min-h-14 items-center border-r border-[var(--ink)]/20 px-3 py-3 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]/60 sm:px-5">
              Unclear input
            </p>
            <p className="flex min-h-14 items-center border-r border-[var(--ink)]/20 px-3 py-3 font-mono text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[var(--violet-dark)] sm:px-5">
              Practical decisions
            </p>
            <p className="flex min-h-14 items-center justify-end px-3 py-3 text-right font-mono text-[0.58rem] font-semibold uppercase tracking-[0.1em] text-[var(--ink)]/60 sm:px-5">
              Inspectable result
            </p>
          </div>

          <motion.span
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-px h-0.5 origin-left bg-[var(--violet-dark)]"
            initial={shouldReduceMotion ? false : { scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.62,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>

        <ol className="grid md:grid-cols-2 xl:grid-cols-4">
          {buildSteps.map((step, index) => (
            <li
              key={step.number}
              className="group border-b border-[var(--ink)]/20 py-7 md:px-7 md:odd:border-r xl:border-b-0 xl:border-r xl:last:border-r-0"
            >
              <p className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-[var(--violet-dark)]">
                Step {index + 1} of 4
              </p>

              <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.02em]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--ink)]/70">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
