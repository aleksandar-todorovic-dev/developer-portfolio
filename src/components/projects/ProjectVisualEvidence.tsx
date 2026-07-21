import { useCallback, useId, useState } from "react";

import type { ProjectScreenshot } from "../../types/project";
import { ProjectImageLightbox } from "./ProjectImageLightbox";

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

  const closeLightbox = useCallback(() => {
    setLightboxScreenshot(null);
  }, []);

  const openScreenshot = useCallback((screenshot: ProjectScreenshot) => {
    const isNarrowViewport = window.innerWidth < 1024;

    if (screenshot.format === "desktop" && isNarrowViewport) {
      const imageWindow = window.open(screenshot.src, "_blank");

      if (imageWindow) {
        imageWindow.opener = null;
      }

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

  const hasMixedFormats = screenshots.some(
    (screenshot) => screenshot.format !== initialScreenshot.format,
  );

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

      <div id={viewerId} aria-live="polite" className="mt-8">
        {isMobileScreenshot ? (
          <figure className="overflow-hidden border border-[#2B2340] bg-[#11101A] lg:grid lg:grid-cols-[minmax(340px,420px)_minmax(0,1fr)]">
            <button
              type="button"
              aria-label={`Open full image: ${activeScreenshot.label}`}
              onClick={() => openScreenshot(activeScreenshot)}
              className="flex min-h-150 w-full items-center justify-center bg-[#0D0B14] p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] lg:p-8"
            >
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                className="max-h-170 w-auto max-w-full object-contain"
              />
            </button>

            <figcaption className="flex flex-col border-t border-[#2B2340] p-7 lg:border-l lg:border-t-0 lg:p-9">
              <div>
                <p className="font-mono text-sm text-[#5F5870]">
                  {currentNumber} / {totalNumber}
                </p>

                <p className="mt-5 text-xs font-medium uppercase tracking-[0.2em] text-[#C4B5FD]">
                  Mobile interface
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold text-[#F5F2FF]">
                {activeScreenshot.label}
              </h3>

              <p className="mt-6 max-w-xl leading-7 text-[#A9A1BA]">
                {activeScreenshot.caption}
              </p>

              <div className="mt-9 border-y border-[#2B2340]">
                <p className="py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#8B849A]">
                  Evidence set
                </p>

                <ol className="divide-y divide-[#2B2340] border-t border-[#2B2340]">
                  {screenshots.map((screenshot, index) => {
                    const isActive = index === activeIndex;
                    const number = String(index + 1).padStart(2, "0");

                    return (
                      <li key={screenshot.src}>
                        <button
                          type="button"
                          aria-pressed={isActive}
                          aria-controls={viewerId}
                          onClick={() => setActiveIndex(index)}
                          className={`grid w-full items-center gap-3 px-3 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] ${
                            hasMixedFormats
                              ? "grid-cols-[40px_minmax(0,1fr)_auto]"
                              : "grid-cols-[40px_minmax(0,1fr)]"
                          } ${
                            isActive
                              ? "bg-[#181423] text-[#F5F2FF]"
                              : "text-[#A9A1BA] hover:bg-[#0D0B14] hover:text-[#D8D2E8]"
                          }`}
                        >
                          <span
                            className={`font-mono text-sm ${
                              isActive ? "text-[#C4B5FD]" : "text-[#5F5870]"
                            }`}
                          >
                            {number}
                          </span>

                          <span className="font-medium">
                            {screenshot.label}
                          </span>

                          {hasMixedFormats && (
                            <span className="text-[0.65rem] uppercase tracking-[0.14em] text-[#6F687E]">
                              {screenshot.format}
                            </span>
                          )}
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>

              <button
                type="button"
                onClick={() => openScreenshot(activeScreenshot)}
                className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[#4C4161] pb-2 text-sm font-medium text-[#D8D2E8] transition hover:border-[#8B5CF6] hover:text-[#C4B5FD] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                Open full image
                <span aria-hidden="true">↗</span>
              </button>
            </figcaption>
          </figure>
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
                <span aria-hidden="true">↗</span>
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
      </div>

      {!isMobileScreenshot && (
        <nav
          aria-label="Select project screenshot"
          className="mt-6 border-y border-[#2B2340]"
        >
          <ol className="grid sm:grid-cols-2 xl:grid-cols-3">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;
              const number = String(index + 1).padStart(2, "0");

              return (
                <li
                  key={screenshot.src}
                  className="border-b border-[#2B2340] last:border-b-0 sm:border-r sm:even:border-r-0 xl:even:border-r xl:nth-[3n]:border-r-0"
                >
                  <button
                    type="button"
                    aria-pressed={isActive}
                    aria-controls={viewerId}
                    onClick={() => setActiveIndex(index)}
                    className={`grid w-full grid-cols-[40px_minmax(0,1fr)] gap-3 px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] ${
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
                      <span className="block font-medium">
                        {screenshot.label}
                      </span>

                      <span className="mt-1 block text-xs uppercase tracking-[0.14em] text-[#6F687E]">
                        {screenshot.format}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </nav>
      )}

      <ProjectImageLightbox
        screenshot={lightboxScreenshot}
        onClose={closeLightbox}
      />
    </section>
  );
}
