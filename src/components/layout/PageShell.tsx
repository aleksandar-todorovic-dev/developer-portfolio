import type { PropsWithChildren } from "react";

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
        className={[
          "mx-auto w-full max-w-6xl flex-1 px-6 py-16",
          className,
        ].join(" ")}
      >
        {children}
      </main>

      <Footer />
    </div>
  );
}
