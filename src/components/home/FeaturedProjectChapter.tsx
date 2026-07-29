import { Link } from "react-router";

import type { Project, ProjectSlug } from "../../types/project";
import { MediaReveal } from "../motion/MediaReveal";
import { TracePath } from "../motion/TracePath";
import { projectTraceVariants } from "../motion/projectTraceVariants";

type FeaturedProjectChapterProps = {
  project: Project;
  index: number;
};

type ChapterStyle = {
  scene: string;
  line: string;
  muted: string;
  accent: string;
  trace: string;
  grid: string;
  content: string;
  media: string;
};

const screenshotDimensions = {
  desktop: {
    width: 1907,
    height: 940,
  },
  mobile: {
    width: 1170,
    height: 2532,
  },
} as const;

const chapterStyles: Record<ProjectSlug, ChapterStyle> = {
  liferecompiled: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    line: "border-[var(--ink)]/25",
    muted: "text-[var(--ink)]/70",
    accent: "text-[var(--violet-dark)]",
    trace: "text-[var(--violet-dark)]",
    grid: "lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]",
    content: "",
    media: "screen-stage",
  },
  "training-app": {
    scene: "bg-[var(--ink-2)] text-[var(--paper)]",
    line: "border-[var(--line-strong)]",
    muted: "text-[var(--paper-muted)]",
    accent: "text-[var(--violet-text)]",
    trace: "text-[var(--violet-text)]",
    grid: "lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]",
    content: "lg:order-2",
    media:
      "relative flex min-h-[34rem] items-end justify-center overflow-hidden border border-[var(--line-strong)] bg-[var(--ink)] px-8 pt-12 lg:order-1",
  },
  taskflow: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    line: "border-[var(--ink)]/25",
    muted: "text-[var(--ink)]/70",
    accent: "text-[var(--violet-dark)]",
    trace: "text-[var(--violet-dark)]",
    grid: "lg:grid-cols-[minmax(0,0.74fr)_minmax(20rem,1.26fr)]",
    content: "lg:order-2",
    media: "screen-stage lg:order-1",
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

  if (!screenshot) {
    return null;
  }

  const dimensions = screenshotDimensions[screenshot.format];
  const isMobileScreenshot = screenshot.format === "mobile";

  return (
    <article
      className={`full-bleed overflow-hidden border-t ${styles.line} ${styles.scene}`}
    >
      <div className="content-frame py-12 sm:py-16 lg:py-22">
        <div
          className={`flex flex-wrap items-center justify-between gap-4 border-b pb-4 ${styles.line}`}
        >
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.14em]">
            {project.proofLabel}
          </p>
          <p className={`font-mono text-[0.64rem] ${styles.muted}`}>
            Project {number} of 03
          </p>
        </div>

        <div className="grid gap-5 py-5 sm:grid-cols-[minmax(0,1fr)_minmax(16rem,0.7fr)] sm:items-center">
          <p className="max-w-2xl font-display text-xl font-semibold leading-tight tracking-[-0.03em] sm:text-2xl">
            {projectQuestions[project.slug]}
          </p>
          <TracePath
            variant={projectTraceVariants[project.slug]}
            className={`h-20 ${styles.trace}`}
          />
        </div>

        <div
          className={`grid min-h-[40rem] gap-10 border-t pt-10 lg:items-center ${styles.line} ${styles.grid}`}
        >
          <div className={styles.content}>
            <h3
              className={`project-word font-display font-semibold leading-[0.84] tracking-[-0.075em] ${
                project.slug === "liferecompiled"
                  ? "text-[clamp(2.15rem,6.4vw,5.8rem)]"
                  : "text-[clamp(2.15rem,12.7vw,7.2rem)]"
              }`}
            >
              {project.title}
            </h3>

            <p
              className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${styles.muted}`}
            >
              {project.shortDescription}
            </p>

            <dl className={`mt-8 border-y ${styles.line}`}>
              <div
                className={`grid gap-3 border-b py-5 sm:grid-cols-[7rem_minmax(0,1fr)] ${styles.line}`}
              >
                <dt
                  className={`font-mono text-[0.64rem] uppercase tracking-[0.14em] ${styles.accent}`}
                >
                  Decision
                </dt>
                <dd className="text-sm leading-6">{project.keyDecision}</dd>
              </div>
              <div className="grid gap-3 py-5 sm:grid-cols-[7rem_minmax(0,1fr)]">
                <dt
                  className={`font-mono text-[0.64rem] uppercase tracking-[0.14em] ${styles.accent}`}
                >
                  Constraint
                </dt>
                <dd className={`text-sm leading-6 ${styles.muted}`}>
                  {project.tradeoff}
                </dd>
              </div>
            </dl>

            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.64rem] uppercase tracking-[0.09em]">
              {project.techStack.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>

            <Link
              to={`/projects/${project.slug}`}
              className="editorial-link mt-8 focus-visible:outline-none"
            >
              Read the case study
            </Link>
          </div>

          <MediaReveal className={styles.media}>
            <div
              className={`absolute left-0 top-0 z-10 border-b border-r px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.11em] ${
                project.slug === "training-app"
                  ? "border-[var(--line-strong)] bg-[var(--ink-2)] text-[var(--paper)]"
                  : "border-[var(--line)] bg-[var(--violet)] text-white"
              }`}
            >
              {screenshot.label}
            </div>

            <img
              src={screenshot.src}
              alt={screenshot.alt}
              width={dimensions.width}
              height={dimensions.height}
              loading="lazy"
              className={
                isMobileScreenshot
                  ? "max-h-[38rem] w-auto translate-y-10 object-contain"
                  : "aspect-[1.85/1] h-full w-full object-cover object-top"
              }
            />
          </MediaReveal>
        </div>
      </div>
    </article>
  );
}
