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
      case "ArrowDown":
        nextIndex = (index + 1) % screenshots.length;
        break;

      case "ArrowLeft":
      case "ArrowUp":
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
          ? "border-y border-[#2B2340]"
          : "grid border-y border-[#2B2340] sm:grid-cols-2 xl:grid-cols-3",
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
            className={`${
              isRail
                ? "grid w-full grid-cols-[40px_minmax(0,1fr)] gap-3 border-b border-[#2B2340] px-4 py-4 text-left last:border-b-0"
                : "grid grid-cols-[40px_minmax(0,1fr)] gap-3 border-b border-[#2B2340] px-4 py-4 text-left sm:border-r sm:even:border-r-0 xl:even:border-r xl:nth-[3n]:border-r-0"
            } transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] ${
              isActive
                ? "bg-[#181423] text-[#F5F2FF]"
                : "text-[#A9A1BA] hover:bg-[#11101A] hover:text-[#D8D2E8]"
            }`}
          >
            <span
              className={`font-mono text-sm ${
                isActive ? "text-[#C4B5FD]" : "text-[#5F5870]"
              }`}
            >
              {number}
            </span>

            <span>
              <span className="block font-medium">{screenshot.label}</span>

              <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-[#6F687E]">
                {screenshot.format}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
