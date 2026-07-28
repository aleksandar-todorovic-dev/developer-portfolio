import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
  }
>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border border-[var(--violet)] bg-[var(--violet)] text-white hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]",
  secondary:
    "border border-[var(--line-strong)] bg-transparent text-[var(--paper)] hover:border-[var(--paper)] hover:bg-[var(--paper)] hover:text-[var(--ink)]",
  ghost:
    "border-b border-[var(--line-strong)] text-[var(--paper-muted)] hover:border-[var(--signal)] hover:text-[var(--paper)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-2 text-xs",
  md: "px-5 py-3 text-sm",
};

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex items-center justify-center font-mono font-semibold uppercase tracking-[0.08em] transition-colors",
        "focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--signal)]",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
