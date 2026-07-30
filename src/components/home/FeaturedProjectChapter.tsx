import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";

import type { Project, ProjectSlug } from "../../types/project";
import { getProjectScreenshotDimensions } from "../projects/projectScreenshotDimensions";
import { ProjectTitleText } from "../projects/ProjectTitleText";

type FeaturedProjectChapterProps = {
  project: Project;
  index: number;
};

type ChapterStyle = {
  scene: string;
  line: string;
  muted: string;
  accent: string;
  headerGrid: string;
  grid: string;
  contentOrder: string;
  mediaOrder: string;
  stage: string;
};

const chapterStyles: Record<ProjectSlug, ChapterStyle> = {
  liferecompiled: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    line: "border-[var(--ink)]/25",
    muted: "text-[var(--ink)]/70",
    accent: "text-[var(--violet-dark)]",
    headerGrid:
      "lg:grid-cols-[12rem_minmax(0,1fr)] xl:grid-cols-[minmax(20rem,0.68fr)_minmax(0,1.32fr)] xl:gap-14",
    grid: "xl:grid-cols-[minmax(20rem,0.68fr)_minmax(0,1.32fr)]",
    contentOrder: "",
    mediaOrder: "",
    stage:
      "overflow-hidden border border-[var(--ink)]/25 bg-[var(--ink)] p-2 sm:p-3",
  },
  "training-app": {
    scene: "bg-[var(--ink-2)] text-[var(--paper)]",
    line: "border-[var(--line-strong)]",
    muted: "text-[var(--paper-muted)]",
    accent: "text-[var(--violet-text)]",
    headerGrid: "lg:grid-cols-[12rem_minmax(0,1fr)]",
    grid: "xl:grid-cols-[minmax(19rem,0.72fr)_minmax(24rem,1.28fr)]",
    contentOrder: "xl:order-2 xl:max-w-[34rem]",
    mediaOrder: "xl:order-1",
    stage:
      "flex min-h-128 items-end justify-center overflow-hidden border border-[var(--line-strong)] bg-[var(--ink)] px-6 pt-10 sm:min-h-152 sm:px-10",
  },
  taskflow: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    line: "border-[var(--ink)]/25",
    muted: "text-[var(--ink)]/70",
    accent: "text-[var(--violet-dark)]",
    headerGrid: "lg:grid-cols-[12rem_minmax(0,1fr)]",
    grid: "xl:grid-cols-[minmax(0,1.16fr)_minmax(20rem,0.84fr)]",
    contentOrder: "xl:order-2",
    mediaOrder: "xl:order-1",
    stage:
      "overflow-hidden border-x border-t border-[var(--ink)]/25 bg-[var(--ink-2)] p-2 sm:p-3",
  },
};

const projectQuestions: Record<ProjectSlug, string> = {
  liferecompiled: "How should connected data behave when authority is split?",
  "training-app": "How can a routine continue without losing its place?",
  taskflow: "How should typed state move when the interface is reordered?",
};

export function FeaturedProjectChapter({
  project,
  index,
}: FeaturedProjectChapterProps) {
  const [screenshot] = project.screenshots;
  const number = String(index + 1).padStart(2, "0");
  const styles = chapterStyles[project.slug];
  const shouldReduceMotion = useReducedMotion();

  if (!screenshot) {
    return null;
  }

  const dimensions = getProjectScreenshotDimensions(screenshot.src);
  const isMobileScreenshot = screenshot.format === "mobile";

  return (
    <article
      className={`full-bleed overflow-hidden border-t ${styles.line} ${styles.scene}`}
    >
      <div className="content-frame py-12 sm:py-16 lg:py-22">
        <header
          className={`grid gap-5 border-b pb-8 ${styles.line} lg:items-start ${styles.headerGrid}`}
        >
          <div className="flex items-center justify-between gap-5 font-mono text-[0.63rem] uppercase tracking-[0.11em] lg:block">
            <p>{project.proofLabel}</p>
            <p className={`lg:mt-2 ${styles.muted}`}>
              Project {number} of 03
            </p>
          </div>

          <p className="max-w-4xl font-display text-[clamp(1.8rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] [font-stretch:100%]">
            {projectQuestions[project.slug]}
          </p>
        </header>

        <div
          className={`grid gap-10 pt-10 xl:items-center xl:gap-14 ${styles.grid}`}
        >
          <div className={styles.contentOrder}>
            <h3 className="project-word font-display text-[clamp(3rem,8vw,7rem)] font-semibold leading-[0.94] tracking-[-0.035em] [font-stretch:100%]">
              <ProjectTitleText title={project.title} />
            </h3>

            <p
              className={`max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
                project.slug === "training-app" ? "mt-8" : "mt-6"
              } ${styles.muted}`}
            >
              {project.shortDescription}
            </p>

            <dl
              className={`border-y ${
                project.slug === "training-app" ? "mt-10" : "mt-8"
              } ${styles.line}`}
            >
              <div
                className={`grid gap-3 border-b py-5 sm:grid-cols-[7rem_minmax(0,1fr)] ${styles.line}`}
              >
                <dt
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.11em] ${styles.accent}`}
                >
                  Decision
                </dt>
                <dd className="text-sm leading-6">{project.keyDecision}</dd>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-[7rem_minmax(0,1fr)]">
                <dt
                  className={`font-mono text-[0.62rem] uppercase tracking-[0.11em] ${styles.accent}`}
                >
                  Constraint
                </dt>
                <dd className={`text-sm leading-6 ${styles.muted}`}>
                  {project.tradeoff}
                </dd>
              </div>
            </dl>

            <ul
              className={`flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.61rem] uppercase tracking-[0.08em] ${
                project.slug === "training-app" ? "mt-8" : "mt-6"
              }`}
            >
              {project.techStack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <Link
              to={`/projects/${project.slug}`}
              className={`focus-ring inline-flex min-h-12 items-center gap-8 border-b pb-2 text-sm font-semibold transition-colors ${
                project.slug === "training-app" ? "mt-10" : "mt-8"
              } ${styles.accent}`}
            >
              Read the case study
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <figure className={styles.mediaOrder}>
            <motion.div
              className={`relative ${styles.stage}`}
              initial={
                project.slug === "liferecompiled" && !shouldReduceMotion
                  ? { x: -10, opacity: 0.92 }
                  : false
              }
              whileInView={
                project.slug === "liferecompiled"
                  ? { x: 0, opacity: 1 }
                  : undefined
              }
              viewport={
                project.slug === "liferecompiled"
                  ? { once: true, amount: 0.3 }
                  : undefined
              }
              transition={{
                duration:
                  project.slug === "liferecompiled" &&
                  !shouldReduceMotion
                    ? 0.42
                    : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={`absolute left-0 top-0 z-10 border-b border-r px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.1em] ${
                  project.slug === "training-app"
                    ? "border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)]"
                    : "border-[var(--paper)]/30 bg-[var(--violet-dark)] text-[var(--paper)]"
                }`}
              >
                {screenshot.label}
              </div>

              <img
                src={screenshot.src}
                alt={screenshot.alt}
                width={dimensions?.width}
                height={dimensions?.height}
                loading="lazy"
                decoding="async"
                className={
                  isMobileScreenshot
                    ? "block max-h-168 w-auto max-w-full object-contain"
                    : "block h-auto w-full"
                }
              />
            </motion.div>

            {project.slug === "taskflow" ? (
              <ol
                aria-label="TaskFlow board order"
                className="grid grid-cols-2 border-l border-t border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)] md:grid-cols-4"
              >
                {["Backlog", "In progress", "Review", "Done"].map(
                  (column, columnIndex) => (
                    <li
                      key={column}
                      className="border-b border-r border-[var(--line-strong)] px-3 py-3"
                    >
                      <span
                        aria-hidden="true"
                        className="font-mono text-[0.58rem] text-[var(--violet-text)]"
                      >
                        {String(columnIndex + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block text-xs font-semibold">
                        {column}
                      </span>
                    </li>
                  ),
                )}
              </ol>
            ) : null}

            <figcaption
              className={`mt-4 max-w-3xl text-sm leading-6 ${styles.muted}`}
            >
              {screenshot.caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </article>
  );
}
