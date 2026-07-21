import { cn } from "../../utils/cn";

type NewTabNoticeProps = {
  className?: string;
};

export function NewTabNotice({ className = "" }: NewTabNoticeProps) {
  return <span className={cn("sr-only", className)}>Opens in a new tab</span>;
}
