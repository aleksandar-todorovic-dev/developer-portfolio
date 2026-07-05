import type { HTMLAttributes, PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

type BadgeVariant = "default" | "accent" | "success" | "warning";

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    variant?: BadgeVariant;
  }
>;

const variantClasses: Record<BadgeVariant, string> = {
  default: "border-[#2B2340] bg-[#11101A] text-[#D8D2E8]",
  accent: "border-[#8B5CF6]/40 bg-[#211B31] text-[#C4B5FD]",
  success: "border-[#22C55E]/30 bg-[#22C55E]/10 text-[#86EFAC]",
  warning: "border-[#F59E0B]/30 bg-[#F59E0B]/10 text-[#FCD34D]",
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
        "inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium",
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
