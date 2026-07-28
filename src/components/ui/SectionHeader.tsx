import { cn } from "../../utils/cn";

type SectionHeaderAlign = "left" | "center";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeaderAlign;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "max-w-6xl",
        isCentered
          ? "mx-auto flex flex-col items-center text-center"
          : "grid gap-6 md:grid-cols-[minmax(8rem,0.28fr)_minmax(0,1fr)] md:gap-10",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "flex items-center gap-3",
            isCentered && "mb-5 justify-center",
            !isCentered && "md:pt-2",
          )}
        >
          <span
            aria-hidden="true"
            className="h-2.5 w-2.5 shrink-0 bg-[var(--signal)]"
          />
          <p className="signal-label font-mono text-[0.68rem] uppercase tracking-[0.18em] text-[var(--paper-muted)]">
            {eyebrow}
          </p>
        </div>
      ) : null}

      <div className={cn(!eyebrow && !isCentered && "md:col-start-2")}>
        <h2 className="font-display max-w-5xl text-balance text-[clamp(2.5rem,5vw,5.1rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-[var(--paper)]">
          {title}
        </h2>

        {description ? (
          <p
            className={cn(
              "font-body mt-5 max-w-3xl text-base leading-7 text-[var(--paper-muted)] sm:text-lg sm:leading-8",
              isCentered && "mx-auto",
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
