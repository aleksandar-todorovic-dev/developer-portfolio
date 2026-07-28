import { motion, useReducedMotion } from "motion/react";

type SignalLineProps = {
  className?: string;
  delay?: number;
};

export function SignalLine({
  className = "",
  delay = 0,
}: SignalLineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.span
      aria-hidden="true"
      className={`block h-px origin-left bg-[var(--signal)] ${className}`}
      initial={shouldReduceMotion ? false : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.68,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}
