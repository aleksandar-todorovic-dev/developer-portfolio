import { cn } from "../../utils/cn";

type SectionHeaderAlign = "left" | "center";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: SectionHeaderAlign;
  className?: string;
};

const alignClasses: Record<SectionHeaderAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex max-w-3xl flex-col gap-3",
        alignClasses[align],
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4B5FD]">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-bold tracking-tight text-[#F5F2FF] sm:text-4xl">
        {title}
      </h2>

      {description ? (
        <p className="text-base leading-7 text-[#A9A1BA] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
