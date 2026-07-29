import type { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = PropsWithChildren<{
  className?: string;
}>;

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
