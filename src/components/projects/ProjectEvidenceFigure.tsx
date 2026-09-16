import type { ProjectScreenshot } from "../../types/project";
import { getProjectScreenshotDimensions } from "./projectScreenshotDimensions";
import { NewTabNotice } from "../ui/NewTabNotice";

export function ProjectEvidenceFigure({
  screenshot,
  className = "",
  cropBoard = false,
}: {
  screenshot?: ProjectScreenshot;
  className?: string;
  cropBoard?: boolean;
}) {
  if (!screenshot) return null;
  const dimensions = getProjectScreenshotDimensions(screenshot.src);
  return (
    <figure className={`min-w-0 ${className}`}>
      <a
        href={screenshot.src}
        target="_blank"
        rel="noreferrer"
        className="focus-ring block border border-current/25"
      >
        <span className="sr-only">Open full image: {screenshot.label}. </span>
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={dimensions?.width}
          height={dimensions?.height}
          loading="lazy"
          decoding="async"
          className={
            cropBoard
              ? "block aspect-[2.55/1] w-full object-cover object-top"
              : "block h-auto w-full"
          }
        />
        <NewTabNotice />
      </a>
      <figcaption className="mt-3 text-sm leading-6 opacity-80">
        {screenshot.caption}
      </figcaption>
    </figure>
  );
}
