import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";

type MediaRevealProps = PropsWithChildren<{
  className?: string;
}>;

export function MediaReveal({
  children,
  className = "",
}: MediaRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={className}>
      {children}

      {shouldReduceMotion ? null : (
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 origin-right bg-[var(--ink)]"
          initial={{ scaleX: 1 }}
          whileInView={{ scaleX: 0 }}
          viewport={{ once: true, amount: 0.16 }}
          transition={{
            duration: 0.72,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
    </div>
  );
}
