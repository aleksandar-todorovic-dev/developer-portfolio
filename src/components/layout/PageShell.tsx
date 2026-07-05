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
      <Header />

      <main
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
