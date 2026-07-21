import { useCallback, useId, useState } from "react";

import type { ProjectScreenshot } from "../../types/project";
import { cn } from "../../utils/cn";
import { NewTabNotice } from "../ui";
import { ProjectImageLightbox } from "./ProjectImageLightbox";
import { ProjectScreenshotSelector } from "./ProjectScreenshotSelector";

type ProjectVisualEvidenceProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectVisualEvidence({
  screenshots,
}: ProjectVisualEvidenceProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const [lightboxScreenshot, setLightboxScreenshot] =
    useState<ProjectScreenshot | null>(null);

  const viewerId = useId();
  const tabIdPrefix = useId();

  const closeLightbox = useCallback(() => {
    setLightboxScreenshot(null);
  }, []);

  const openScreenshot = useCallback((screenshot: ProjectScreenshot) => {
    const isNarrowViewport = window.innerWidth < 1024;

    if (screenshot.format === "desktop" && isNarrowViewport) {
      const imageWindow = window.open(screenshot.src, "_blank");

      if (imageWindow) {
        imageWindow.opener = null;
        return;
      }

      window.location.assign(screenshot.src);
      return;
    }

    setLightboxScreenshot(screenshot);
  }, []);

  const [initialScreenshot] = screenshots;

  if (!initialScreenshot) {
    return null;
  }

  const activeScreenshot = screenshots[activeIndex] ?? initialScreenshot;
  const isMobileScreenshot = activeScreenshot.format === "mobile";

  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(screenshots.length).padStart(2, "0");

  const activeTabId = `${tabIdPrefix}-${activeIndex}`;

  return (
    <section
      aria-labelledby="visual-evidence-heading"
      className="mt-16 border-t border-[#2B2340] pt-10"
    >
      <div className="border-b border-[#2B2340] pb-8">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
          Interface screenshots
        </p>

        <h2
          id="visual-evidence-heading"
          className="mt-3 text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF]"
        >
          Real project screens
        </h2>

        <p className="mt-4 max-w-xl leading-7 text-[#A9A1BA]">
          Explore the main interfaces and product states.
        </p>
      </div>

      <div
        id={viewerId}
        role="tabpanel"
        aria-labelledby={activeTabId}
        className={cn(
          "mt-8",
          isMobileScreenshot &&
            "overflow-hidden border border-[#2B2340] bg-[#11101A] lg:grid lg:grid-cols-[minmax(340px,420px)_minmax(0,1fr)] lg:grid-rows-[auto_auto_1fr_auto]",
        )}
      >
        {isMobileScreenshot ? (
          <>
            <button
              type="button"
              aria-label={`Open full image: ${activeScreenshot.label}`}
              onClick={() => openScreenshot(activeScreenshot)}
              className="flex min-h-150 w-full items-center justify-center bg-[#0D0B14] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] lg:col-start-1 lg:row-start-1 lg:row-span-4 lg:h-full lg:border-r lg:border-[#2B2340] lg:p-8"
            >
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                className="max-h-170 w-auto max-w-full object-contain"
              />
            </button>

            <figcaption className="border-t border-[#2B2340] p-7 lg:col-start-2 lg:row-start-1 lg:border-t-0 lg:p-9 lg:pb-7">
              <p className="font-mono text-sm text-[#5F5870]">
                {currentNumber} / {totalNumber}
              </p>

              <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
                Mobile interface
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#F5F2FF]">
                {activeScreenshot.label}
              </h3>

              <p className="mt-6 max-w-xl leading-7 text-[#A9A1BA]">
                {activeScreenshot.caption}
              </p>
            </figcaption>

            <p className="border-t border-[#2B2340] px-7 pb-4 pt-6 text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A] lg:col-start-2 lg:row-start-2 lg:px-9">
              Screenshot list
            </p>
          </>
        ) : (
          <figure className="overflow-hidden border border-[#2B2340] bg-[#11101A]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#2B2340] px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8B849A]">
                  Desktop interface
                </p>

                <h3 className="mt-1 font-medium text-[#F5F2FF]">
                  {activeScreenshot.label}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => openScreenshot(activeScreenshot)}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#C4B5FD] transition hover:text-[#F5F2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                Open full image
                <NewTabNotice className="lg:hidden" />
              </button>
            </div>

            <button
              type="button"
              aria-label={`Open full image: ${activeScreenshot.label}`}
              onClick={() => openScreenshot(activeScreenshot)}
              className="block w-full bg-[#0D0B14] p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] sm:p-4"
            >
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                className="block h-auto w-full object-contain"
              />
            </button>

            <figcaption className="grid gap-3 border-t border-[#2B2340] px-5 py-5 sm:grid-cols-[48px_minmax(0,1fr)] sm:px-6">
              <span className="font-mono text-sm text-[#5F5870]">
                {currentNumber}
              </span>

              <p className="max-w-4xl leading-7 text-[#A9A1BA]">
                {activeScreenshot.caption}
              </p>
            </figcaption>
          </figure>
        )}

        <ProjectScreenshotSelector
          screenshots={screenshots}
          activeIndex={activeIndex}
          panelId={viewerId}
          tabIdPrefix={tabIdPrefix}
          variant={isMobileScreenshot ? "rail" : "grid"}
          className={
            isMobileScreenshot
              ? "lg:col-start-2 lg:row-start-3 lg:self-start"
              : "mt-6"
          }
          onSelect={setActiveIndex}
        />

        {isMobileScreenshot ? (
          <div className="border-t border-[#2B2340] px-7 py-6 lg:col-start-2 lg:row-start-4 lg:px-9">
            <button
              type="button"
              onClick={() => openScreenshot(activeScreenshot)}
              className="inline-flex w-fit items-center border-b border-[#4C4161] pb-2 text-sm font-medium text-[#D8D2E8] transition hover:border-[#8B5CF6] hover:text-[#C4B5FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
            >
              Open full image
            </button>
          </div>
        ) : null}
      </div>

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {activeScreenshot.label}, screenshot {activeIndex + 1} of{" "}
        {screenshots.length}.
      </p>

      <ProjectImageLightbox
        screenshot={lightboxScreenshot}
        onClose={closeLightbox}
      />
    </section>
  );
}
