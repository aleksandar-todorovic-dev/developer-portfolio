import { useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { ProjectScreenshot } from "../../types/project";
import { cn } from "../../utils/cn";

type ProjectScreenshotSelectorVariant = "grid" | "rail";

type ProjectScreenshotSelectorProps = {
  screenshots: ProjectScreenshot[];
  activeIndex: number;
  panelId: string;
  tabIdPrefix: string;
  variant?: ProjectScreenshotSelectorVariant;
  className?: string;
  onSelect: (index: number) => void;
};

export function ProjectScreenshotSelector({
  screenshots,
  activeIndex,
  panelId,
  tabIdPrefix,
  variant = "grid",
  className = "",
  onSelect,
}: ProjectScreenshotSelectorProps) {
  const [focusedIndex, setFocusedIndex] = useState(activeIndex);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const isRail = variant === "rail";

  function focusTab(index: number) {
    setFocusedIndex(index);
    tabRefs.current[index]?.focus();
  }

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
        if (isRail) {
          return;
        }
        nextIndex = (index + 1) % screenshots.length;
        break;

      case "ArrowLeft":
        if (isRail) {
          return;
        }
        nextIndex = (index - 1 + screenshots.length) % screenshots.length;
        break;

      case "ArrowDown":
        if (!isRail) {
          return;
        }
        nextIndex = (index + 1) % screenshots.length;
        break;

      case "ArrowUp":
        if (!isRail) {
          return;
        }
        nextIndex = (index - 1 + screenshots.length) % screenshots.length;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = screenshots.length - 1;
        break;

      default:
        return;
    }

    event.preventDefault();
    focusTab(nextIndex);
  }

  return (
    <div
      role="tablist"
      aria-label="Select project screenshot"
      aria-orientation={isRail ? "vertical" : "horizontal"}
      className={cn(
        isRail
          ? "border-y border-[var(--line-strong)]"
          : "grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 xl:grid-cols-3",
        className,
      )}
    >
      {screenshots.map((screenshot, index) => {
        const isActive = index === activeIndex;
        const number = String(index + 1).padStart(2, "0");

        return (
          <button
            key={screenshot.src}
            ref={(element) => {
              tabRefs.current[index] = element;
            }}
            id={`${tabIdPrefix}-${index}`}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-controls={panelId}
            tabIndex={index === focusedIndex ? 0 : -1}
            onFocus={() => setFocusedIndex(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            onClick={() => {
              setFocusedIndex(index);
              onSelect(index);
            }}
            className={cn(
              "focus-ring group relative grid min-h-24 grid-cols-[3rem_minmax(0,1fr)] gap-3 px-4 py-5 text-left transition-colors duration-200",
              isRail && "w-full border-b border-[var(--line)] last:border-b-0",
              isActive
                ? "bg-[var(--violet)] text-[var(--paper)]"
                : "bg-[var(--ink)] text-[var(--paper-muted)] hover:bg-[var(--ink-2)] hover:text-[var(--paper)]",
            )}
          >
            <span
              className={cn(
                "font-mono text-xs",
                isActive
                  ? "text-[var(--signal)]"
                  : "text-[var(--violet-text)]",
              )}
            >
              IMG—{number}
            </span>

            <span>
              <span className="font-body block font-semibold">
                {screenshot.label}
              </span>

              <span
                className={cn(
                  "mt-2 block font-mono text-[0.61rem] uppercase tracking-[0.17em]",
                  isActive
                    ? "text-[var(--paper)]"
                    : "text-[var(--paper-muted)]",
                )}
              >
                {screenshot.format} / select
              </span>
            </span>

            <span
              aria-hidden="true"
              className={cn(
                "absolute bottom-0 left-0 h-1 transition-[width] duration-300",
                isActive
                  ? "w-full bg-[var(--signal)]"
                  : "w-0 bg-[var(--violet)] group-hover:w-1/3",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}
