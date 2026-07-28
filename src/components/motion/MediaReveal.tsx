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
    <motion.div
      className={className}
      initial={
        shouldReduceMotion
          ? false
          : {
              clipPath: "inset(0 100% 0 0)",
            }
      }
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.72,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
