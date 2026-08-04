import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";

import type { Project, ProjectSlug } from "../../types/project";
import { getProjectScreenshotDimensions } from "../projects/projectScreenshotDimensions";
import { LifeRecompiledScene } from "./LifeRecompiledScene";
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
    grid: "xl:grid-cols-[minmax(19rem,0.82fr)_minmax(22rem,1.18fr)]",
    contentOrder: "xl:order-2 xl:max-w-[32rem]",
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
    grid: "xl:grid-cols-[minmax(0,1.42fr)_minmax(18rem,0.58fr)]",
    contentOrder: "xl:order-2 xl:max-w-[28rem] xl:pt-8",
    mediaOrder: "xl:order-1",
    stage: "overflow-hidden bg-[var(--ink-2)] p-2 sm:p-3",
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
  const isLifeRecompiled = project.slug === "liferecompiled";
  const isTrainingApp = project.slug === "training-app";
  const isTaskFlow = project.slug === "taskflow";
  const nextTrainingScreenshot = isTrainingApp
    ? project.screenshots[1]
    : undefined;

  if (isLifeRecompiled) {
    return (
      <LifeRecompiledScene
        project={project}
        index={index}
        shouldReduceMotion={Boolean(shouldReduceMotion)}
      />
    );
  }

  if (!screenshot) {
    return null;
  }

  const dimensions = getProjectScreenshotDimensions(screenshot.src);
  const isMobileScreenshot = screenshot.format === "mobile";

  return (
    <article
      id={`project-${project.slug}`}
      tabIndex={-1}
      className={`full-bleed scroll-mt-[calc(var(--header-height)+1rem)] overflow-hidden border-t focus:outline-none ${styles.line} ${styles.scene}`}
    >
      <div className="content-frame py-12 sm:py-16 lg:py-22">
        <header
          className={`grid gap-5 border-b pb-8 ${styles.line} lg:items-start ${styles.headerGrid}`}
        >
          <div
            className={`flex items-center justify-between gap-5 font-mono text-[0.63rem] uppercase tracking-[0.11em] lg:block ${
              isLifeRecompiled
                ? "xl:col-start-2 xl:row-start-1"
                : ""
            }`}
          >
            <p>{project.proofLabel}</p>
            <p className={`lg:mt-2 ${styles.muted}`}>
              Project {number} of 03
            </p>
          </div>

          <p
            className={`max-w-4xl font-display text-[clamp(1.8rem,4vw,3.6rem)] font-semibold leading-[1.05] tracking-[-0.02em] [font-stretch:100%] ${
              isLifeRecompiled
                ? "xl:col-start-1 xl:row-start-1 xl:max-w-[17ch]"
                : ""
            }`}
          >
            {projectQuestions[project.slug]}
          </p>
        </header>

        <div className="relative pt-10">
          {isLifeRecompiled ? (
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -right-[var(--frame-edge)] -top-10 left-[35%] hidden bg-[var(--ink)] xl:block"
            />
          ) : null}

          <div
            className={`relative grid gap-10 xl:gap-14 ${
              isTaskFlow ? "xl:items-start" : "xl:items-center"
            } ${styles.grid}`}
          >
            <div className={styles.contentOrder}>
              <h3
                className={`project-word font-display font-semibold leading-[0.94] tracking-[-0.035em] [font-stretch:100%] ${
                  isLifeRecompiled || isTaskFlow
                    ? "text-[clamp(3rem,5vw,4.4rem)]"
                    : "text-[clamp(3rem,8vw,7rem)]"
                }`}
              >
                <ProjectTitleText title={project.title} />
              </h3>

              <p
                className={`max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
                  isTrainingApp ? "mt-8" : "mt-6"
                } ${styles.muted}`}
              >
                {project.shortDescription}
              </p>

              <dl
                className={`border-y ${
                  isTrainingApp ? "mt-10" : "mt-8"
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
                  isTrainingApp ? "mt-8" : "mt-6"
                }`}
              >
                {project.techStack.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <Link
                to={`/projects/${project.slug}`}
                className={`focus-ring inline-flex min-h-12 items-center gap-8 border-b pb-2 text-sm font-semibold transition-colors ${
                  isTrainingApp ? "mt-10" : "mt-8"
                } ${styles.accent}`}
              >
                Read the case study
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <motion.figure
              className={`${styles.mediaOrder} ${
                isLifeRecompiled
                  ? "xl:-ml-8 xl:-mr-[var(--frame-edge)]"
                  : ""
              }`}
              initial={
                shouldReduceMotion
                  ? false
                  : isLifeRecompiled
                    ? { x: -16, opacity: 0.84 }
                    : isTrainingApp
                      ? { y: 12, opacity: 0.88 }
                      : false
              }
              whileInView={
                isLifeRecompiled
                  ? { x: 0, opacity: 1 }
                  : isTrainingApp
                    ? { y: 0, opacity: 1 }
                    : undefined
              }
              viewport={
                isLifeRecompiled || isTrainingApp
                  ? { once: true, amount: 0.25 }
                  : undefined
              }
              transition={{
                duration: shouldReduceMotion
                  ? 0
                  : isLifeRecompiled
                    ? 0.56
                    : isTrainingApp
                      ? 0.48
                      : 0,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                className={
                  isTaskFlow
                    ? "border border-[var(--ink)]/25"
                    : undefined
                }
              >
                <div className={`relative ${styles.stage}`}>
                  <div
                    className={`absolute left-0 top-0 z-10 border-b border-r px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.1em] ${
                      isTrainingApp
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
                </div>

                {isTaskFlow ? (
                  <ol
                    aria-label="TaskFlow board order"
                    className="grid grid-cols-2 border-t border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)] md:grid-cols-4"
                  >
                    {["Backlog", "In progress", "Review", "Done"].map(
                      (column, columnIndex) => (
                        <li
                          key={column}
                          className={`px-3 py-3 ${
                            columnIndex < 2
                              ? "border-b border-[var(--line-strong)] md:border-b-0"
                              : ""
                          } ${
                            columnIndex % 2 === 0
                              ? "border-r border-[var(--line-strong)]"
                              : columnIndex === 1
                                ? "md:border-r md:border-[var(--line-strong)]"
                                : ""
                          }`}
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
              </div>

              {isTrainingApp && nextTrainingScreenshot ? (
                <dl className="grid grid-cols-2 border-x border-b border-[var(--line-strong)] bg-[var(--ink)] text-[var(--paper)]">
                  <div className="px-4 py-4 sm:px-5">
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--violet-text)]">
                      Current
                    </dt>
                    <dd className="mt-2 text-sm font-semibold">
                      {screenshot.label}
                    </dd>
                  </div>

                  <div className="relative border-l border-[var(--line-strong)] px-4 py-4 sm:px-5">
                    <span
                      aria-hidden="true"
                      className="absolute -left-2.5 top-1/2 -translate-y-1/2 bg-[var(--ink)] px-1 text-[var(--violet-text)]"
                    >
                      →
                    </span>
                    <dt className="font-mono text-[0.58rem] uppercase tracking-[0.1em] text-[var(--violet-text)]">
                      Next
                    </dt>
                    <dd className="mt-2 text-sm font-semibold">
                      {nextTrainingScreenshot.label}
                    </dd>
                  </div>
                </dl>
              ) : null}

              {isLifeRecompiled ? (
                <figcaption className="mt-4 max-w-4xl text-sm leading-6 text-[var(--ink)]/70 xl:grid xl:grid-cols-[minmax(8rem,0.38fr)_minmax(0,1fr)] xl:items-start xl:gap-5 xl:text-[var(--paper-muted)]">
                  <motion.svg
                    aria-hidden="true"
                    className="hidden h-7 w-full text-[var(--paper)] xl:block"
                    viewBox="0 0 160 24"
                    preserveAspectRatio="none"
                    fill="none"
                    initial={shouldReduceMotion ? false : "hidden"}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                  >
                    <path
                      d="M2 20 C52 20 78 4 158 4"
                      stroke="currentColor"
                      strokeOpacity="0.2"
                      vectorEffect="non-scaling-stroke"
                    />
                    <motion.path
                      data-local-trace="life"
                      d="M2 20 C52 20 78 4 158 4"
                      stroke="var(--violet-text)"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      variants={{
                        hidden: { pathLength: 0 },
                        visible: { pathLength: 1 },
                      }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.68,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  </motion.svg>
                  <span>{screenshot.caption}</span>
                </figcaption>
              ) : (
                <figcaption
                  className={`mt-4 max-w-3xl text-sm leading-6 ${styles.muted}`}
                >
                  {screenshot.caption}
                </figcaption>
              )}
            </motion.figure>
          </div>
        </div>
      </div>
    </article>
  );
}
