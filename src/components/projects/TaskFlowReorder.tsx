import { motion, useReducedMotion } from "motion/react";

export function TaskFlowReorder() {
  const reducedMotion = useReducedMotion();
  return (
    <figure className="min-w-0">
      <figcaption className="eyebrow text-[var(--ink)]/65">
        A card move, illustrated
      </figcaption>
      <div
        aria-hidden="true"
        className="relative mt-4 border-y border-[var(--ink)]/25 pb-4"
      >
        <div className="grid grid-cols-2 py-3 text-sm font-semibold">
          <span>Backlog</span>
          <span className="pl-3">In progress</span>
        </div>
        <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-[var(--ink)]/25" />
        <motion.div
          className="relative w-1/2 pr-3"
          initial={reducedMotion ? false : { x: "0%" }}
          whileInView={{ x: "100%" }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            duration: reducedMotion ? 0 : 0.7,
            delay: reducedMotion ? 0 : 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex min-h-14 items-center justify-between gap-3 bg-[var(--ink)] px-3 py-3 text-sm font-semibold text-[var(--paper)]">
            <span>One card</span>
            <span aria-hidden="true" className="text-[var(--paper-muted)]">
              →
            </span>
          </div>
        </motion.div>
      </div>
      <p className="mt-3 text-sm leading-6 text-[var(--ink)]/70">
        A valid drop changes the column relationship and saves the new board
        state.
      </p>
    </figure>
  );
}
