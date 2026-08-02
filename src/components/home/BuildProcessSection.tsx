import { motion, useReducedMotion } from "motion/react";

import { buildSteps } from "../../data/buildSteps";

const processTraceVariants = {
  unresolved: {
    pathLength: 0,
  },
  resolved: {
    pathLength: 1,
  },
};

export function BuildProcessSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="build-process-heading"
      className="full-bleed overflow-hidden bg-[var(--violet-dark)] text-[var(--paper)]"
    >
      <div className="content-frame py-20 sm:py-28">
        <div className="grid gap-9 lg:grid-cols-[minmax(11rem,0.36fr)_minmax(0,1.64fr)] lg:gap-14">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--paper)]/75">
              How I work
            </p>
            <p className="mt-4 max-w-48 text-sm leading-6 text-[var(--paper)]/72">
              A practical route from an unclear brief to a tested result.
            </p>
          </div>

          <div>
            <h2
              id="build-process-heading"
              className="max-w-6xl font-display text-[clamp(3.1rem,7.2vw,7.4rem)] font-semibold leading-[0.9] tracking-[-0.045em] [font-stretch:100%]"
            >
              The work moves
              <span className="block text-[var(--paper)]/72">
                through decisions.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--paper)]/78">
              The projects are different, but the decision process behind them
              follows the same grounded sequence.
            </p>
          </div>
        </div>

        <motion.div
          className="relative mt-14 border-y border-[var(--paper)]/35"
          initial={shouldReduceMotion ? false : "unresolved"}
          whileInView="resolved"
          viewport={{ once: true, amount: 0.42 }}
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 1200 300"
            preserveAspectRatio="none"
            className="build-process-trace pointer-events-none absolute inset-x-0 top-10 hidden h-[calc(100%_-_5rem)] w-full overflow-visible md:block"
          >
            <path
              d="M18 24C248 24 260 132 500 132S754 276 1182 276"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
              className="text-[var(--paper)]/24"
            />
            <motion.path
              data-local-trace="build"
              d="M18 24C248 24 260 132 500 132S754 276 1182 276"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              vectorEffect="non-scaling-stroke"
              className="text-[var(--paper)]"
              variants={processTraceVariants}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.68,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          </svg>

          <div className="relative z-10 grid gap-3 py-7 md:min-h-88 md:grid-cols-12 md:grid-rows-3 md:gap-0 md:py-10">
            <div className="border-l-2 border-[var(--paper)]/55 py-4 pl-4 md:col-span-4 md:row-start-1 md:self-start md:border-l-0 md:py-0 md:pl-0">
              <p className="relative max-w-[9ch] bg-[var(--violet-dark)] font-display text-[clamp(2rem,4.8vw,4.8rem)] font-semibold uppercase leading-[0.9] tracking-[-0.035em]">
                Unclear input
              </p>
            </div>

            <div className="border-l-2 border-[var(--paper)]/70 py-4 pl-4 md:col-span-5 md:col-start-4 md:row-start-2 md:self-center md:border-l-0 md:py-0 md:pl-0">
              <p className="relative max-w-[11ch] bg-[var(--violet-dark)] font-display text-[clamp(2.25rem,5.5vw,5.6rem)] font-semibold uppercase leading-[0.88] tracking-[-0.04em]">
                Practical decisions
              </p>
            </div>

            <div className="border-l-2 border-[var(--paper)] py-4 pl-4 md:col-span-5 md:col-start-8 md:row-start-3 md:self-end md:border-l-0 md:py-0 md:pl-0 md:text-right">
              <p className="relative ml-auto max-w-[10ch] bg-[var(--violet-dark)] font-display text-[clamp(2.5rem,6.2vw,6.4rem)] font-semibold uppercase leading-[0.86] tracking-[-0.045em]">
                Inspectable result
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-[var(--paper)] text-[var(--ink)]">
        <ol className="content-frame grid gap-x-8 py-10 md:grid-cols-2 md:py-12 xl:grid-cols-4">
          {buildSteps.map((step, index) => (
            <li
              key={step.number}
              className="border-t border-[var(--ink)]/25 py-7"
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
