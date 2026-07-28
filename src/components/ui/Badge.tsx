import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

type BadgeVariant = "default" | "accent" | "success" | "warning";

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
  }
>;

const variantClasses: Record<BadgeVariant, string> = {
  default:
    "border-[var(--line)] bg-[var(--ink-2)] text-[var(--paper-muted)]",
  accent: "border-[var(--violet)] bg-[var(--violet)] text-white",
  success:
    "border-[var(--signal)] bg-[var(--signal)] text-[var(--ink)]",
  warning:
    "border-[var(--paper)] bg-[var(--paper)] text-[var(--ink)]",
};

export function Badge({
  children,
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center border px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.08em]",
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

type TechBadgeProps = Omit<BadgeProps, "variant">;

export function TechBadge({ children, className, ...props }: TechBadgeProps) {
  return (
    <Badge variant="accent" className={className} {...props}>
      {children}
    </Badge>
  );
}
