import { cn } from "../../utils/cn";

type SignalMarkProps = {
  className?: string;
};

export function SignalMark({ className = "" }: SignalMarkProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("signal-mark inline-block shrink-0", className)}
    />
  );
}
