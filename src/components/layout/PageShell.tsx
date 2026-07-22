import type { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";
import { Footer } from "./Footer";
import { Header } from "./Header";

type PageShellProps = PropsWithChildren<{
  className?: string;
}>;

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#07060B] text-[#F5F2FF]">
      <a
        href="#main-content"
        className="fixed left-4 top-4 z-100 -translate-y-24 border border-[#8B5CF6] bg-[#181423] px-4 py-3 text-sm font-semibold text-[#F5F2FF] transition focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
      >
        Skip to main content
      </a>

      <Header />

      <main
        id="main-content"
        tabIndex={-1}
        className={cn(
          "mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-6 sm:py-14 lg:py-16",
          className,
        )}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
