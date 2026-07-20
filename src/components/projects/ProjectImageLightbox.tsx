import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import type { ProjectScreenshot } from "../../types/project";

type ProjectImageLightboxProps = {
  screenshot: ProjectScreenshot | null;
  onClose: () => void;
};

export function ProjectImageLightbox({
  screenshot,
  onClose,
}: ProjectImageLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const titleId = useId();
  const descriptionId = useId();

  const isDesktopScreenshot = screenshot?.format === "desktop";

  useEffect(() => {
    if (!screenshot) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousBodyOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
        );

      if (!focusableElements || focusableElements.length === 0) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }

      if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      previouslyFocusedElement?.focus();
    };
  }, [screenshot, onClose]);

  if (!screenshot) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-100 bg-[#07060B]/95 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="mx-auto flex h-full max-w-[1600px] flex-col overflow-hidden border border-[#3A3150] bg-[#0D0B14]"
      >
        <header className="flex items-start justify-between gap-6 border-b border-[#2B2340] px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#8B849A]">
              Full visual evidence
            </p>

            <h2
              id={titleId}
              className="mt-1 text-lg font-semibold text-[#F5F2FF]"
            >
              {screenshot.label}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex min-h-11 items-center gap-2 border border-[#3A3150] px-4 text-sm font-medium text-[#D8D2E8] transition hover:border-[#8B5CF6] hover:text-[#F5F2FF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            Close
            <span aria-hidden="true">x</span>
          </button>
        </header>

        <div
          className={`min-h-0 flex-1 p-3 sm:p-6 ${
            isDesktopScreenshot
              ? "overflow-auto overscroll-contain lg:flex lg:items-center lg:justify-center"
              : "flex items-center justify-center overflow-hidden"
          }`}
        >
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            className={
              isDesktopScreenshot
                ? "block h-auto w-240 max-w-none lg:max-h-full lg:w-auto lg:max-w-full lg:object-contain"
                : "max-h-full max-w-full object-contain"
            }
          />
        </div>

        <footer className="border-t border-[#2B2340] px-5 py-4 sm:px-6">
          <p
            id={descriptionId}
            className="max-w-4xl text-sm leading-6 text-[#A9A1BA]"
          >
            {screenshot.caption}
          </p>
          {isDesktopScreenshot && (
            <p className="mt-3 text-xs font-medium uppercase tracking-[0.14em] text-[#6F687E] lg:hidden">
              Swipe horizontally to inspect the desktop interface.
            </p>
          )}
        </footer>
      </div>
    </div>,
    document.body,
  );
}
