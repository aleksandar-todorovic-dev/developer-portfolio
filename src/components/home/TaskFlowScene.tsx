import { Link } from "react-router";

import type { Project } from "../../types/project";
import { TaskFlowReorder } from "../projects/TaskFlowReorder";
import { getProjectScreenshotDimensions } from "../projects/projectScreenshotDimensions";
import { NewTabNotice } from "../ui/NewTabNotice";

export function TaskFlowScene({ project }: { project: Project }) {
  const screenshot = project.screenshots[0];
  const liveLink = project.links.find((link) => link.type === "live");
  if (!screenshot) return null;
  const dimensions = getProjectScreenshotDimensions(screenshot.src);

  return (
    <article
      id="project-taskflow"
      tabIndex={-1}
      className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] border-t border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame py-14 sm:py-18 lg:py-24">
        <header className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow text-[var(--violet-dark)]">
              03 / Practical React + TypeScript
            </p>
            <h2 className="mt-5 font-display text-[clamp(3.6rem,9vw,9rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
              TaskFlow
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[var(--ink)]/75 sm:text-xl">
            A typed React board where drag-and-drop has to update real nested
            state, persist locally and remain understandable.
          </p>
        </header>
        <figure className="mt-9 sm:mt-12">
          <div className="border border-[var(--ink)]/25 bg-white p-2 sm:p-3">
            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={dimensions?.width}
              height={dimensions?.height}
              loading="lazy"
              decoding="async"
              className="block aspect-[2.55/1] w-full object-cover object-top"
            />
          </div>
          <figcaption className="flex flex-wrap items-center justify-between gap-x-8 gap-y-2 border-b border-[var(--ink)]/25 py-3 text-sm leading-6 text-[var(--ink)]/70">
            <span>
              One board. Four columns. The saved order is the working order.
            </span>
            <a
              href={screenshot.src}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex min-h-11 items-center gap-2 font-semibold text-[var(--violet-dark)]"
            >
              Open full board <span aria-hidden="true">↗</span>
              <NewTabNotice />
            </a>
          </figcaption>
        </figure>
        <div className="mt-8 grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <TaskFlowReorder />
          <div>
            <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.025em] sm:text-3xl">
              Move the card. Keep the board coherent.
            </h3>
            <p className="mt-4 max-w-xl leading-7 text-[var(--ink)]/70">
              Typed props and Context keep the column/card relationship
              explicit. Immutable helpers apply a valid drop, and a generic
              localStorage hook preserves the board after refresh.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
              <Link to="/projects/taskflow" className="text-action">
                Read the case study <span aria-hidden="true">→</span>
              </Link>
              {liveLink ? (
                <a
                  href={liveLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-action"
                >
                  Open live project <span aria-hidden="true">↗</span>
                  <NewTabNotice />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
