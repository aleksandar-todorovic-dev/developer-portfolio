import { motion } from "motion/react";
import { Link } from "react-router";

import type { Project } from "../../types/project";
import { NewTabNotice } from "../ui";
import { getProjectScreenshotDimensions } from "../projects/projectScreenshotDimensions";

type LifeRecompiledSceneProps = {
  project: Project;
  index: number;
  shouldReduceMotion: boolean;
};

export function LifeRecompiledScene({
  project,
  index,
  shouldReduceMotion,
}: LifeRecompiledSceneProps) {
  const primaryScreenshot =
    project.screenshots.find((screenshot) =>
      screenshot.src.endsWith("/post-detail.png"),
    ) ?? project.screenshots[0];
  const savedScreenshot =
    project.screenshots.find((screenshot) =>
      screenshot.src.endsWith("/saved-posts.png"),
    ) ?? project.screenshots[1];
  const mobileScreenshot = project.screenshots.find(
    (screenshot) => screenshot.format === "mobile",
  );
  const liveLink = project.links.find((link) => link.type === "live");

  if (!primaryScreenshot || !savedScreenshot || !mobileScreenshot) {
    return null;
  }

  const primaryDimensions = getProjectScreenshotDimensions(
    primaryScreenshot.src,
  );
  const savedDimensions = getProjectScreenshotDimensions(savedScreenshot.src);
  const mobileDimensions = getProjectScreenshotDimensions(mobileScreenshot.src);
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <article
      id={`project-${project.slug}`}
      tabIndex={-1}
      className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden border-t border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)] focus:outline-none"
    >
      <div className="content-frame py-14 sm:py-18 lg:py-24">
        <header className="grid gap-8 border-b border-[var(--ink)]/25 pb-9 lg:grid-cols-[minmax(11rem,0.35fr)_minmax(0,1.65fr)] lg:gap-12 lg:pb-12">
          <div className="flex items-start justify-between gap-5 font-mono text-[0.63rem] uppercase tracking-[0.11em] lg:block">
            <p>Project {projectNumber}</p>
            <p className="text-[var(--ink)]/60 lg:mt-2">Firebase engineering</p>
          </div>

          <div className="lg:max-w-[65rem]">
            <p className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-[var(--violet-dark)]">
              React + Firebase community product
            </p>
            <h2 className="project-word mt-4 font-display text-[clamp(3.4rem,8vw,8.8rem)] font-semibold leading-[0.82] tracking-[-0.065em] [font-stretch:100%]">
              LifeRecompiled
            </h2>
            <p className="body-pretty mt-6 max-w-[42rem] text-[clamp(1.25rem,2.2vw,2rem)] font-medium leading-[1.18] tracking-[-0.025em] text-[var(--ink)]/80">
              A connected community product where reactions, saved content and
              deletion still behave when the data changes.
            </p>
          </div>
        </header>

        <div className="mt-10 grid gap-12 xl:grid-cols-[minmax(18rem,0.48fr)_minmax(0,1.52fr)] xl:items-start xl:gap-14">
          <div className="xl:sticky xl:top-28 xl:pb-14">
            <p className="max-w-[15ch] font-display text-[clamp(2rem,3.5vw,3.4rem)] font-semibold leading-[0.96] tracking-[-0.04em]">
              Backend authority where correctness matters.
            </p>

            <p className="body-pretty mt-6 max-w-[34rem] text-base leading-7 text-[var(--ink)]/70 sm:text-lg sm:leading-8 xl:max-w-[29rem]">
              Cloud Functions own aggregate reactions, privileged deletion and
              scheduled cleanup. Snapshot metadata and reversible interface
              states keep saved content understandable when source posts move
              or disappear.
            </p>

            <div className="mt-9 border-l-2 border-[var(--violet-dark)] pl-5">
              <p className="font-mono text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--violet-dark)]">
                Reaction integrity
              </p>
              <p className="mt-2 max-w-[31rem] text-sm leading-6 text-[var(--ink)]/70">
                Deterministic records, retry guards and backend-maintained
                counts keep one interaction from becoming several results.
              </p>
            </div>

            <div className="mt-7 border-t border-[var(--ink)]/25 pt-6 sm:ml-7 xl:ml-5">
              <p className="font-mono text-[0.72rem] font-semibold uppercase leading-5 tracking-[0.1em] text-[var(--violet-dark)]">
                Saved content
              </p>
              <p className="mt-2 max-w-[31rem] text-sm leading-6 text-[var(--ink)]/70">
                Snapshot context, ghost states and Undo keep the reading list
                useful when the original document is no longer available.
              </p>
            </div>

            <p className="mt-7 max-w-[29rem] font-mono text-[0.62rem] uppercase leading-5 tracking-[0.09em] text-[var(--ink)]/60">
              Trash → restore → privileged permanent removal
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to={`/projects/${project.slug}`}
                className="focus-ring inline-flex min-h-12 items-center gap-8 border-b border-[var(--violet-dark)] pb-2 text-sm font-semibold text-[var(--violet-dark)] transition-colors"
              >
                Read the case study
                <span aria-hidden="true">→</span>
              </Link>

              {liveLink ? (
                <a
                  href={liveLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-[var(--ink)]/75 transition-colors hover:text-[var(--ink)]"
                >
                  Open live project
                  <span aria-hidden="true">↗</span>
                  <NewTabNotice />
                </a>
              ) : null}
            </div>
          </div>

          <div className="relative -mr-[var(--frame-edge)] bg-[var(--ink)] py-3 pl-3 pr-5 text-[var(--paper)] sm:py-5 sm:pl-5 sm:pr-7 xl:-mr-[var(--frame-edge)] xl:min-h-[52rem] xl:py-7 xl:pl-7 xl:pr-14">
            <div className="mb-4 flex items-center justify-between gap-5 border-b border-[var(--line)] pb-3 font-mono text-[0.63rem] uppercase tracking-[0.09em]">
              <span className="font-semibold text-[var(--paper)]">
                Working product evidence
              </span>
              <span className="text-right text-[var(--paper-muted)]">
                Live routes · real states
              </span>
            </div>

            <motion.figure
              className="relative z-10 overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] lg:-rotate-[0.25deg]"
              initial={
                shouldReduceMotion ? false : { x: 22, opacity: 0.86 }
              }
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.62,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <figcaption className="absolute left-0 top-0 z-10 border-b border-r border-[var(--line-strong)] bg-[var(--violet-dark)] px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.1em] text-[var(--paper)]">
                Post state / discussion
              </figcaption>
              <img
                src={primaryScreenshot.src}
                alt={primaryScreenshot.alt}
                width={primaryDimensions?.width}
                height={primaryDimensions?.height}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </motion.figure>

            <div className="relative mt-4 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(11rem,0.65fr)] lg:items-start xl:mt-6 xl:grid-cols-[minmax(0,1.58fr)_minmax(12rem,0.42fr)]">
              <motion.figure
                className="overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] lg:translate-x-4 lg:rotate-[0.25deg] xl:translate-x-7"
                initial={
                  shouldReduceMotion ? false : { y: 18, opacity: 0.84 }
                }
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.58,
                  delay: shouldReduceMotion ? 0 : 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <figcaption className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b border-[var(--line)] px-3 py-2 font-mono text-[0.55rem] uppercase tracking-[0.09em] text-[var(--paper-muted)]">
                  <span>Saved references</span>
                  <span>Fallback context</span>
                </figcaption>
                <img
                  src={savedScreenshot.src}
                  alt={savedScreenshot.alt}
                  width={savedDimensions?.width}
                  height={savedDimensions?.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </motion.figure>

              <motion.figure
                className="relative z-20 mx-auto w-[62%] min-w-40 max-w-64 overflow-hidden border border-[var(--line-strong)] bg-[var(--ink-2)] ring-1 ring-[rgba(243,239,230,0.58)] ring-offset-4 ring-offset-[var(--ink)] lg:w-full lg:max-w-none lg:justify-self-end lg:rotate-[0.8deg] xl:-ml-5 xl:-mt-20"
                initial={
                  shouldReduceMotion ? false : { y: 26, opacity: 0.82 }
                }
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.66,
                  delay: shouldReduceMotion ? 0 : 0.16,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <figcaption className="border-b border-[var(--line)] px-3 py-2 font-mono text-[0.59rem] font-medium uppercase tracking-[0.09em] text-[var(--paper)]">
                  Mobile discussion
                </figcaption>
                <img
                  src={mobileScreenshot.src}
                  alt={mobileScreenshot.alt}
                  width={mobileDimensions?.width}
                  height={mobileDimensions?.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </motion.figure>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
