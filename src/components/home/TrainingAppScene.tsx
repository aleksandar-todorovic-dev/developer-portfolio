import { motion } from "motion/react";
import { Link } from "react-router";

import type { Project } from "../../types/project";
import { getProjectScreenshotDimensions } from "../projects/projectScreenshotDimensions";
import { NewTabNotice } from "../ui";

type TrainingAppSceneProps = {
  project: Project;
  index: number;
  shouldReduceMotion: boolean;
};

export function TrainingAppScene({
  project,
  index,
  shouldReduceMotion,
}: TrainingAppSceneProps) {
  const currentScreenshot =
    project.screenshots.find((screenshot) =>
      screenshot.src.endsWith("/exercise.png"),
    ) ?? project.screenshots[0];
  const nextScreenshot =
    project.screenshots.find((screenshot) =>
      screenshot.src.endsWith("/partial-day.png"),
    ) ?? project.screenshots[1];
  const liveLink = project.links.find((link) => link.type === "live");

  if (!currentScreenshot || !nextScreenshot) {
    return null;
  }

  const currentDimensions = getProjectScreenshotDimensions(
    currentScreenshot.src,
  );
  const nextDimensions = getProjectScreenshotDimensions(nextScreenshot.src);
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      id={`project-${project.slug}`}
      tabIndex={-1}
      className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden border-t border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)] focus:outline-none"
    >
      <div className="content-frame py-14 sm:py-18 lg:py-24">
        <header className="border-b border-[var(--line)] pb-9 lg:pb-12">
          <div className="flex items-start justify-between gap-5 font-mono text-[0.63rem] uppercase tracking-[0.11em]">
            <p>Project {projectNumber}</p>
            <p className="text-right text-[var(--paper-muted)]">
              Product-focused MVP
            </p>
          </div>

          <div className="mt-8 grid gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:items-end lg:gap-12">
            <div>
              <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[#79d7df]">
                Mobile-first workout product
              </p>
              <h2 className="project-word mt-4 font-display text-[clamp(3.6rem,8.5vw,9rem)] font-semibold leading-[0.82] tracking-[-0.065em] [font-stretch:100%]">
                Training App
              </h2>
            </div>

            <p className="body-pretty max-w-[35rem] text-[clamp(1.18rem,2vw,1.8rem)] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--paper)]/82 lg:justify-self-end">
              Guided workouts, logged progress and a clear next session. A
              local-first React product built around the training cycle.
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-12 xl:grid-cols-[minmax(0,1.38fr)_minmax(19rem,0.62fr)] xl:items-start xl:gap-14">
          <div className="relative overflow-hidden border border-[var(--line-strong)] bg-[var(--ink)] px-4 pb-7 pt-4 sm:px-7 sm:pb-12 sm:pt-6 lg:px-10 lg:pb-16 lg:pt-8">
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[38%] bg-[#17363a]"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 top-[18%] w-px bg-[var(--violet)]/60 sm:right-[8%]"
            />

            <div className="relative z-10 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 border-b border-[var(--line)] pb-3 font-mono text-[0.61rem] uppercase tracking-[0.1em]">
              <span className="font-semibold text-[var(--paper)]">
                Working flow
              </span>
            </div>

            <div className="relative z-10 mt-7 grid gap-8 sm:grid-cols-2 sm:items-start sm:gap-7 lg:mt-10 lg:gap-10">
              <motion.figure
                className="mx-auto w-full max-w-[21rem] sm:mx-0 sm:justify-self-end"
                initial={shouldReduceMotion ? false : { x: -18, opacity: 0.86 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.58,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <figcaption className="flex items-center justify-between gap-4 border border-b-0 border-[var(--line-strong)] bg-[var(--ink-2)] px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.09em]">
                  <span className="font-semibold text-[#79d7df]">Current</span>
                  <span className="text-[var(--paper-muted)]">
                    Exercise execution
                  </span>
                </figcaption>
                <div className="overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] ring-1 ring-[#79d7df]/45 ring-offset-4 ring-offset-[var(--ink)]">
                  <img
                    src={currentScreenshot.src}
                    alt={currentScreenshot.alt}
                    width={currentDimensions?.width}
                    height={currentDimensions?.height}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full"
                  />
                </div>
              </motion.figure>

              <div className="mx-auto w-[88%] max-w-[19rem] sm:mx-0 sm:w-full sm:translate-y-12 sm:justify-self-start">
                <motion.figure
                  initial={
                    shouldReduceMotion ? false : { x: 22, y: 20, opacity: 0.84 }
                  }
                  whileInView={{ x: 0, y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.64,
                    delay: shouldReduceMotion ? 0 : 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <figcaption className="flex items-center justify-between gap-4 border border-b-0 border-[var(--line-strong)] bg-[var(--ink-2)] px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.09em]">
                    <span className="font-semibold text-[var(--violet-text)]">
                      Next
                    </span>
                    <span className="text-right text-[var(--paper-muted)]">
                      Partial-day decision
                    </span>
                  </figcaption>
                  <div className="overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] ring-1 ring-[var(--violet)]/55 ring-offset-4 ring-offset-[var(--ink)]">
                    <img
                      src={nextScreenshot.src}
                      alt={nextScreenshot.alt}
                      width={nextDimensions?.width}
                      height={nextDimensions?.height}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full"
                    />
                  </div>
                </motion.figure>
              </div>

              <div
                aria-hidden="true"
                className="absolute left-[46%] top-[42%] hidden w-[13%] items-center sm:flex"
              >
                <motion.span
                  className="block h-px flex-1 origin-left bg-[#79d7df]"
                  initial={shouldReduceMotion ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.46,
                    delay: shouldReduceMotion ? 0 : 0.2,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
                <span className="-ml-px text-sm leading-none text-[#79d7df]">
                  →
                </span>
              </div>
            </div>

            <div className="relative z-10 mt-8 grid gap-3 border-t border-[var(--line)] pt-4 font-mono text-[0.59rem] uppercase leading-5 tracking-[0.09em] text-[var(--paper-muted)] sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:mt-20">
              <p>Targets · previous values · set logging</p>
              <p className="sm:text-right">
                Cycle order stays clear · partial days stay partial
              </p>
            </div>
          </div>

          <div className="xl:sticky xl:top-28 xl:pb-14">
            <p className="max-w-[16ch] font-display text-[clamp(2rem,3.5vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              A training cycle that does not break when the week does.
            </p>

            <p className="body-pretty mt-6 max-w-[34rem] text-base leading-7 text-[var(--paper-muted)] sm:text-lg sm:leading-8 xl:max-w-[29rem]">
              The plan follows its own sequence of training and rest days
              instead of resetting with the calendar week. Targets, previous
              results and set logging stay close to the current exercise, while
              interrupted sessions stay partial instead of being treated as
              complete.
            </p>

            <div className="mt-9 border-l-2 border-[#79d7df] pl-5">
              <p className="font-mono text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.1em] text-[#79d7df]">
                Focused execution
              </p>
              <p className="mt-2 max-w-[31rem] text-sm leading-6 text-[var(--paper-muted)]">
                Prescribed targets, previous values, guidance and live set
                logging stay together on one screen, so the user can focus on
                the exercise being performed.
              </p>
            </div>

            <div className="mt-7 border-t border-[var(--line)] pt-6 sm:ml-7 xl:ml-5">
              <p className="font-mono text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--violet-text)]">
                Cycle-based continuity
              </p>
              <p className="mt-2 max-w-[31rem] text-sm leading-6 text-[var(--paper-muted)]">
                Completed work carries forward, unfinished work stays visible
                and the next session continues from the actual state of the plan
                — without forcing a weekly reset or marking a partial day
                complete.
              </p>
            </div>

            <p className="mt-8 max-w-[30rem] font-mono text-[0.62rem] uppercase leading-5 tracking-[0.09em] text-[var(--paper-muted)]">
              React Router · Context + reducer · versioned localStorage
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring inline-flex min-h-12 items-center gap-8 border-b border-[#79d7df] pb-2 text-sm font-semibold text-[#79d7df] transition-colors"
              >
                Read the case study
                <span aria-hidden="true">→</span>
              </Link>

              {liveLink ? (
                <a
                  href={liveLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--paper)]/78 transition-colors hover:text-[var(--paper)]"
                >
                  Open live project
                  <span aria-hidden="true">↗</span>
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
