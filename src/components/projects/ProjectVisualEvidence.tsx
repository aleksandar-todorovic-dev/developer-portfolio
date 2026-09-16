import { useCallback, useId, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();
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
  const activeDimensions = getProjectScreenshotDimensions(activeScreenshot.src);
  const isMobileScreenshot = activeScreenshot.format === "mobile";
  const currentNumber = String(activeIndex + 1).padStart(2, "0");
  const totalNumber = String(screenshots.length).padStart(2, "0");
  const activeTabId = `${tabIdPrefix}-${activeIndex}`;

  return (
    <section
      aria-labelledby="visual-evidence-heading"
      className="full-bleed overflow-hidden bg-[var(--ink)] py-7 text-[var(--paper)] sm:py-10"
    >
      <div className="content-frame">
        <motion.header
          className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line-strong)] pb-4"
          initial={shouldReduceMotion ? false : { opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <h2
              id="visual-evidence-heading"
              className="font-display text-2xl font-semibold leading-[1.04] tracking-[-0.025em] sm:text-3xl"
            >
              The working interface.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--paper-muted)]">
              Choose a screen. Open it at full size.
            </p>
          </div>
        </motion.header>

        <div
          className={cn(
            "mt-6",
            isMobileScreenshot &&
              "border border-[var(--line-strong)] lg:grid lg:grid-cols-[minmax(23rem,0.95fr)_minmax(0,1.05fr)] lg:grid-rows-[auto_1fr_auto]",
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
                  className="focus-ring screenshot-trigger relative flex min-h-112 w-full items-end justify-center overflow-hidden px-6 pt-8 sm:min-h-130 sm:px-8 sm:pt-10 lg:h-full lg:min-h-160 lg:px-14"
                >
                  <span className="sr-only">
                    Open full image: {activeScreenshot.label}.{" "}
                    {activeScreenshot.alt}
                  </span>

                  <img
                    src={activeScreenshot.src}
                    alt=""
                    loading="eager"
                    decoding="async"
                    width={activeDimensions?.width}
                    height={activeDimensions?.height}
                    className="relative max-h-104 w-auto max-w-full object-contain object-bottom shadow-[-12px_12px_0_var(--violet)] sm:max-h-118 lg:max-h-150"
                  />
                </button>
              </div>

              <div className="border-t border-[var(--line-strong)] p-5 lg:col-start-2 lg:row-start-1 lg:border-t-0 lg:p-9">
                <div className="flex items-center justify-between gap-5 font-mono text-[0.64rem] uppercase tracking-[0.12em]">
                  <span className="text-[var(--violet-text)]">
                    Screenshot {currentNumber} of {totalNumber}
                  </span>
                  <span>Mobile interface</span>
                </div>

                <h3 className="mt-4 font-display text-3xl font-semibold leading-[1.02] tracking-[-0.025em] sm:text-4xl lg:mt-7 lg:text-5xl">
                  {activeScreenshot.label}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-[var(--paper-muted)] lg:mt-6">
                  {activeScreenshot.caption}
                </p>
              </div>
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
                  className="focus-ring screenshot-trigger block w-full overflow-hidden bg-[var(--ink-2)]"
                >
                  <span className="sr-only">
                    Open full image: {activeScreenshot.label}.{" "}
                    {activeScreenshot.alt}
                  </span>

                  <NewTabNotice className="lg:hidden" />

                  <img
                    src={activeScreenshot.src}
                    alt=""
                    loading="eager"
                    decoding="async"
                    width={activeDimensions?.width}
                    height={activeDimensions?.height}
                    className="block h-auto w-full object-contain"
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
                ? "lg:col-start-2 lg:row-start-2 lg:self-start"
                : "mt-6"
            }
            onSelect={setActiveIndex}
          />

          {isMobileScreenshot ? (
            <div className="border-t border-[var(--line-strong)] px-5 py-5 lg:col-start-2 lg:row-start-3 lg:px-9">
              <button
                type="button"
                onClick={() => openScreenshot(activeScreenshot)}
                className="focus-ring inline-flex items-center gap-3 border-b border-[var(--paper-muted)] pb-2 font-mono text-[0.67rem] uppercase tracking-[0.16em] transition-colors hover:border-[var(--violet-text)] hover:text-[var(--violet-text)]"
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
      </div>

      <ProjectImageLightbox
        screenshot={lightboxScreenshot}
        onClose={closeLightbox}
      />
    </section>
  );
}
