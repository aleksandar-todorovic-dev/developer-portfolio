import { motion, useReducedMotion } from "motion/react";
import { useCallback, useId, useState } from "react";

import type { ProjectScreenshot } from "../../types/project";
import { cn } from "../../utils/cn";
import { NewTabNotice } from "../ui";
import { ProjectImageLightbox } from "./ProjectImageLightbox";
import { ProjectScreenshotSelector } from "./ProjectScreenshotSelector";
import { getProjectScreenshotDimensions } from "./projectScreenshotDimensions";

type ProjectVisualEvidenceProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectVisualEvidence({
  screenshots,
}: ProjectVisualEvidenceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxScreenshot, setLightboxScreenshot] =
    useState<ProjectScreenshot | null>(null);
  const shouldReduceMotion = useReducedMotion();
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
  const activeDimensions = getProjectScreenshotDimensions(
    activeScreenshot.src,
  );
  const isMobileScreenshot = activeScreenshot.format === "mobile";
  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(screenshots.length).padStart(2, "0");
  const activeTabId = `${tabIdPrefix}-${activeIndex}`;

  return (
    <section
      aria-labelledby="visual-evidence-heading"
      className="full-bleed overflow-hidden bg-[var(--ink)] py-20 text-[var(--paper)] sm:py-28"
    >
      <div className="content-frame">
        <header className="grid gap-7 border-b border-[var(--line-strong)] pb-9 lg:grid-cols-[minmax(0,1fr)_19rem] lg:items-end">
          <div>
            <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--violet-text)]">
              Project screenshots
            </p>

            <h2
              id="visual-evidence-heading"
              className="mt-6 font-display text-[clamp(3.2rem,7vw,6.5rem)] font-semibold leading-[0.84] tracking-[-0.065em]"
            >
              See the
              <span className="block text-[var(--violet-text)]">work.</span>
            </h2>
          </div>

          <div className="border-l border-[var(--line-strong)] pl-6">
            <p className="font-body text-lg leading-8">
              Real project screens, not decorative mockups.
            </p>
            <p className="font-body mt-4 text-sm leading-6 text-[var(--paper-muted)]">
              Select a screenshot, inspect the full interface and follow the
              product through the image sequence.
            </p>
          </div>
        </header>

        <div
          className={cn(
            "mt-10",
            isMobileScreenshot &&
              "border border-[var(--line-strong)] lg:grid lg:grid-cols-[minmax(23rem,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_auto_1fr_auto]",
          )}
        >
          {isMobileScreenshot ? (
            <>
              <div
                id={viewerId}
                role="tabpanel"
                aria-labelledby={activeTabId}
                className="relative overflow-hidden bg-[var(--ink-2)] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:border-r lg:border-[var(--line-strong)]"
              >
                <button
                  type="button"
                  onClick={() => openScreenshot(activeScreenshot)}
                  className="focus-ring relative flex min-h-155 w-full items-end justify-center overflow-hidden px-9 pt-14 lg:h-full lg:min-h-190 lg:px-16"
                >
                  <span className="sr-only">
                    Open full image: {activeScreenshot.label}.{" "}
                    {activeScreenshot.alt}
                  </span>

                  <motion.img
                    src={activeScreenshot.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={activeDimensions?.width}
                    height={activeDimensions?.height}
                    className="relative max-h-165 w-auto max-w-full object-contain object-bottom shadow-[-18px_18px_0_var(--violet)] lg:max-h-190"
                    initial={shouldReduceMotion ? false : { y: 48, rotate: 1.5 }}
                    whileInView={{ y: 0, rotate: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                </button>
              </div>

              <div className="border-t border-[var(--line-strong)] p-7 lg:col-start-2 lg:row-start-1 lg:border-t-0 lg:p-9">
                <div className="flex items-center justify-between gap-5 font-mono text-[0.67rem] uppercase tracking-[0.18em]">
                  <span className="text-[var(--violet-text)]">
                    Screenshot {currentNumber} of {totalNumber}
                  </span>
                  <span>Mobile interface</span>
                </div>

                <h3 className="font-display mt-7 text-4xl leading-[0.92] font-semibold tracking-[-0.05em] sm:text-5xl">
                  {activeScreenshot.label}
                </h3>

                <p className="font-body mt-6 max-w-xl leading-7 text-[var(--paper-muted)]">
                  {activeScreenshot.caption}
                </p>
              </div>

              <p className="border-t border-[var(--line)] px-7 py-5 font-mono text-[0.63rem] uppercase tracking-[0.2em] text-[var(--paper-muted)] lg:col-start-2 lg:row-start-2 lg:px-9">
                Choose another view
              </p>
            </>
          ) : (
            <div className="border border-[var(--line-strong)]">
              <div className="flex flex-wrap items-center justify-between gap-5 border-b border-[var(--line-strong)] bg-[var(--ink-2)] px-5 py-4 sm:px-7">
                <div className="flex items-center gap-5">
                  <span className="font-mono text-xs text-[var(--violet-text)]">
                    {currentNumber} / {totalNumber}
                  </span>
                  <div>
                    <p className="font-mono text-[0.61rem] uppercase tracking-[0.18em] text-[var(--paper)]">
                      Desktop interface
                    </p>
                    <h3 className="font-body mt-1 font-semibold">
                      {activeScreenshot.label}
                    </h3>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openScreenshot(activeScreenshot)}
                  className="focus-ring inline-flex items-center gap-3 border-b border-[var(--paper)]/60 pb-2 font-mono text-[0.67rem] uppercase tracking-[0.16em] transition-colors hover:border-[var(--violet-text)] hover:text-[var(--violet-text)]"
                >
                  Open full image
                  <span aria-hidden="true">↗</span>
                  <NewTabNotice className="lg:hidden" />
                </button>
              </div>

              <div
                id={viewerId}
                role="tabpanel"
                aria-labelledby={activeTabId}
                className="bg-[var(--paper)] p-2 sm:p-4"
              >
                <button
                  type="button"
                  onClick={() => openScreenshot(activeScreenshot)}
                  className="focus-ring block w-full overflow-hidden bg-[var(--ink-2)]"
                >
                  <span className="sr-only">
                    Open full image: {activeScreenshot.label}.{" "}
                    {activeScreenshot.alt}
                  </span>

                  <NewTabNotice className="lg:hidden" />

                  <motion.img
                    src={activeScreenshot.src}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={activeDimensions?.width}
                    height={activeDimensions?.height}
                    className="block h-auto w-full object-contain"
                    initial={shouldReduceMotion ? false : { scale: 1.035 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      ease: [0.76, 0, 0.24, 1],
                    }}
                  />
                </button>
              </div>

              <div className="grid gap-4 border-t border-[var(--line-strong)] px-5 py-6 sm:grid-cols-[5rem_minmax(0,1fr)] sm:px-7">
                <span className="font-mono text-xs text-[var(--violet-text)]">
                  Caption
                </span>

                <p className="font-body max-w-4xl leading-7 text-[var(--paper-muted)]">
                  {activeScreenshot.caption}
                </p>
              </div>
            </div>
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
            <div className="border-t border-[var(--line-strong)] px-7 py-6 lg:col-start-2 lg:row-start-4 lg:px-9">
              <button
                type="button"
                onClick={() => openScreenshot(activeScreenshot)}
                className="focus-ring inline-flex items-center gap-3 border-b border-[var(--paper-muted)] pb-2 font-mono text-[0.67rem] uppercase tracking-[0.16em] transition-colors hover:border-[var(--violet-text)] hover:text-[var(--violet-text)]"
              >
                Open full image
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          ) : null}
        </div>

        <p className="sr-only" aria-live="polite" aria-atomic="true">
          Showing {activeScreenshot.label}, screenshot {activeIndex + 1} of{" "}
          {screenshots.length}.
        </p>
      </div>

      <ProjectImageLightbox
        screenshot={lightboxScreenshot}
        onClose={closeLightbox}
      />
    </section>
  );
}
