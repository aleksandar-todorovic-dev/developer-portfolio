import type { PropsWithChildren } from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLocation } from "react-router";

import { cn } from "../../utils/cn";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = PropsWithChildren<{
  className?: string;
}>;

function RouteTrace() {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      key={`${location.pathname}${location.hash}`}
      aria-hidden="true"
      className="fixed inset-x-0 top-[var(--header-height)] z-40 h-0.5 origin-left bg-[var(--signal)]"
      initial={shouldReduceMotion ? false : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.46,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  );
}

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="route-stage flex min-h-screen flex-col bg-[var(--ink)] text-[var(--paper)]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-100 -translate-y-24 border-2 border-[var(--ink)] bg-[var(--signal)] px-4 py-3 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-[var(--ink)] transition-transform focus:translate-y-0 focus:outline-none"
      >
        Skip to main content
      </a>

      <Header />
      <RouteTrace />

      <main
        id="main-content"
        tabIndex={-1}
        className={cn("w-full flex-1", className)}
      >
        <div className="content-frame">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
