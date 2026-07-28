import { motion, useReducedMotion } from "motion/react";
import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";

import type { ProjectScreenshot } from "../../types/project";
import { getProjectScreenshotDimensions } from "./projectScreenshotDimensions";

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
  const shouldReduceMotion = useReducedMotion();
  const titleId = useId();
  const descriptionId = useId();

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

  const dimensions = getProjectScreenshotDimensions(screenshot.src);

  return createPortal(
    <motion.div
      className="fixed inset-0 z-100 bg-[var(--ink)]/96 p-3 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      initial={shouldReduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.18 }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="mx-auto flex h-full max-w-400 flex-col overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)]"
        initial={
          shouldReduceMotion
            ? false
            : { clipPath: "inset(2.5% 2.5% 2.5% 2.5%)" }
        }
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 0.28, ease: [0.76, 0, 0.24, 1] }}
      >
        <header className="flex items-start justify-between gap-6 border-b border-[var(--line-strong)] bg-[var(--violet)] px-5 py-4 sm:px-7">
          <div>
            <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[var(--paper)]">
              Full-size screenshot / evidence
            </p>

            <h2
              id={titleId}
              className="font-display mt-2 text-xl font-semibold tracking-[-0.035em]"
            >
              {screenshot.label}
            </h2>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring inline-flex min-h-11 items-center gap-3 border border-[var(--paper)]/55 px-4 font-mono text-[0.67rem] uppercase tracking-[0.16em] transition-colors hover:border-[var(--signal)] hover:bg-[var(--signal)] hover:text-[var(--ink)]"
          >
            Close
            <span aria-hidden="true" className="text-lg">
              ×
            </span>
          </button>
        </header>

        <div className="flex min-h-0 flex-1 items-center justify-center overflow-hidden bg-[var(--paper)] p-3 sm:p-6">
          <img
            src={screenshot.src}
            alt={screenshot.alt}
            decoding="async"
            width={dimensions?.width}
            height={dimensions?.height}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <footer className="grid gap-3 border-t border-[var(--line-strong)] px-5 py-4 sm:grid-cols-[5rem_minmax(0,1fr)] sm:px-7">
          <span className="font-mono text-[0.63rem] uppercase tracking-[0.16em] text-[var(--violet-text)]">
            Caption
          </span>
          <p
            id={descriptionId}
            className="font-body max-w-4xl text-sm leading-6 text-[var(--paper-muted)]"
          >
            {screenshot.caption}
          </p>
        </footer>
      </motion.div>
    </motion.div>,
    document.body,
  );
}
