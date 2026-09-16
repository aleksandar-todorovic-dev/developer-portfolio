import { motion, useReducedMotion } from "motion/react";

const steps = ["Trace the flow", "Make the call", "Test the result"];

export function BuildProcessSection() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      aria-labelledby="working-style-heading"
      className="full-bleed overflow-hidden bg-[var(--violet-dark)] text-[var(--paper)]"
    >
      <div className="content-frame py-16 sm:py-24 lg:py-32">
        <p className="eyebrow">How I work</p>
        <h2
          id="working-style-heading"
          className="mt-8 max-w-[17ch] font-display text-[clamp(2.75rem,7.8vw,8rem)] font-semibold leading-[0.91] tracking-[-0.055em]"
        >
          I DON&apos;T START
          <br />
          BY MOVING PIXELS.
        </h2>
        <div className="mt-10 grid gap-10 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24">
          <p className="max-w-[33ch] text-lg leading-8 text-[var(--paper)]/90 sm:text-xl">
            I start with the flow, keep the change bounded and test the result
            before I call it finished.
          </p>
          <motion.ol
            initial="rest"
            whileInView="settled"
            viewport={{ once: true, amount: 0.7 }}
            className="border-t border-[var(--paper)]/45"
          >
            {steps.map((step, index) => (
              <motion.li
                key={step}
                variants={{
                  rest: { x: reducedMotion ? 0 : 22, opacity: 0.9 },
                  settled: { x: 0, opacity: 1 },
                }}
                transition={{
                  duration: reducedMotion ? 0 : 0.45,
                  delay: reducedMotion ? 0 : index * 0.12,
                }}
                className="flex items-center justify-between gap-6 border-b border-[var(--paper)]/45 py-5"
              >
                <span className="font-display text-[clamp(1.55rem,3.2vw,2.6rem)] font-medium leading-tight tracking-[-0.025em]">
                  {step}
                </span>
                <span aria-hidden="true" className="text-xl">
                  {index === steps.length - 1 ? "↳" : "↓"}
                </span>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
