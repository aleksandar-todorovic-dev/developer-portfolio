import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import type { Project, ProjectSlug } from "../../types/project";
import { getProjectScreenshotDimensions } from "./projectScreenshotDimensions";

type ProjectCardVariant = "compact" | "detailed";

type ProjectCardProps = {
  project: Project;
  variant?: ProjectCardVariant;
  index?: number;
};

const projectOrder: Record<ProjectSlug, number> = {
  liferecompiled: 0,
  "training-app": 1,
  taskflow: 2,
};

const chapterStyles: Record<
  ProjectSlug,
  {
    scene: string;
    muted: string;
    line: string;
    signal: string;
    imageStage: string;
  }
> = {
  liferecompiled: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    muted: "text-[var(--ink)]/65",
    line: "border-[var(--ink)]/25",
    signal: "bg-[var(--violet)] text-[var(--paper)]",
    imageStage: "bg-[var(--ink)]",
  },
  "training-app": {
    scene: "bg-[var(--violet)] text-[var(--paper)]",
    muted: "text-[var(--paper)]",
    line: "border-[var(--paper)]/30",
    signal: "bg-[var(--signal)] text-[var(--ink)]",
    imageStage: "bg-[var(--violet-dark)]",
  },
  taskflow: {
    scene: "bg-[var(--ink-2)] text-[var(--paper)]",
    muted: "text-[var(--paper-muted)]",
    line: "border-[var(--line)]",
    signal: "bg-[var(--signal)] text-[var(--ink)]",
    imageStage: "bg-[var(--violet-dark)]",
  },
};

export function ProjectCard({
  project,
  variant = "detailed",
  index = projectOrder[project.slug],
}: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDetailed = variant === "detailed";
  const number = String(index + 1).padStart(2, "0");
  const styles = chapterStyles[project.slug];
  const [coverScreenshot] = project.screenshots;
  const dimensions = coverScreenshot
    ? getProjectScreenshotDimensions(coverScreenshot.src)
    : undefined;

  if (!isDetailed) {
    return (
      <article
        className={`group relative flex h-full flex-col overflow-hidden border-t ${styles.line} ${styles.scene} p-6 sm:p-7`}
      >
        <div className="flex items-center justify-between gap-5 font-mono text-[0.68rem] uppercase tracking-[0.18em]">
          <span>{project.proofLabel}</span>
          <span>{number} / 03</span>
        </div>

        <h3 className="font-display mt-8 text-[clamp(2.3rem,4vw,4.4rem)] leading-[0.9] font-semibold tracking-[-0.055em] [overflow-wrap:anywhere]">
          {project.title}
        </h3>

        <p className={`font-body mt-6 leading-7 ${styles.muted}`}>
          {project.shortDescription}
        </p>

        <div className={`mt-7 border-l-2 pl-4 ${styles.line}`}>
          <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em]">
            Key decision
          </p>
          <p className={`font-body mt-3 text-sm leading-6 ${styles.muted}`}>
            {project.keyDecision}
          </p>
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="focus-ring mt-auto flex items-center justify-between gap-4 border-t border-current/25 pt-6 font-mono text-xs uppercase tracking-[0.16em]"
        >
          Trace case study
          <span
            aria-hidden="true"
            className="text-xl transition-transform duration-200 group-hover:translate-x-2"
          >
            →
          </span>
        </Link>
      </article>
    );
  }

  const isReversed = index % 2 === 1;
  const isMobileCover = coverScreenshot?.format === "mobile";

  return (
    <article
      className={`relative border-b ${styles.line} ${styles.scene} px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28`}
    >
      <div className="mb-9 flex items-center gap-4 font-mono text-[0.68rem] uppercase tracking-[0.2em]">
        <span className={`signal-label ${styles.signal}`}>Trace—{number}</span>
        <span className={`h-px flex-1 border-t ${styles.line}`} />
        <span>{project.proofLabel}</span>
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div
          className={`min-w-0 lg:col-span-5 ${
            isReversed ? "lg:col-start-8 lg:row-start-1" : ""
          }`}
        >
          <h2 className="font-display text-[clamp(3.2rem,7.2vw,7.5rem)] leading-[0.8] font-semibold tracking-[-0.07em] [overflow-wrap:anywhere]">
            {project.title}
          </h2>

          <p className={`font-body mt-7 max-w-xl text-lg leading-8 ${styles.muted}`}>
            {project.shortDescription}
          </p>

          <div className={`mt-9 border-t pt-6 ${styles.line}`}>
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em]">
              What it demonstrates
            </p>
            <p className="font-body mt-4 max-w-xl leading-7">
              {project.proofSummary}
            </p>
          </div>
        </div>

        {coverScreenshot ? (
          <Link
            to={`/projects/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className={`focus-ring group relative overflow-hidden lg:col-span-7 lg:row-span-2 ${
              isReversed ? "lg:col-start-1 lg:row-start-1" : ""
            } ${styles.imageStage} ${
              isMobileCover
                ? "flex min-h-125 items-end justify-center px-10 pt-12 sm:min-h-150"
                : "p-2 sm:p-3"
            }`}
          >
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 z-10 border-b border-r border-[var(--paper)]/30 px-3 py-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[var(--paper)]"
            >
              Screen / {coverScreenshot.format}
            </div>

            <motion.img
              src={coverScreenshot.src}
              alt={coverScreenshot.alt}
              loading="lazy"
              decoding="async"
              width={dimensions?.width}
              height={dimensions?.height}
              className={
                isMobileCover
                  ? "relative w-full max-w-67 object-contain object-bottom shadow-[-18px_18px_0_var(--signal)]"
                  : "relative h-full w-full object-cover transition-[filter] duration-300 group-hover:contrast-110"
              }
              initial={shouldReduceMotion ? false : { scale: 1.06 }}
              whileInView={{ scale: 1 }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.018 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            />
          </Link>
        ) : null}

        <div
          className={`lg:col-span-5 ${
            isReversed ? "lg:col-start-8" : ""
          }`}
        >
          <dl className={`border-y ${styles.line}`}>
            <div className={`grid gap-3 border-b py-5 sm:grid-cols-[8rem_1fr] ${styles.line}`}>
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.18em]">
                Decision
              </dt>
              <dd className={`font-body text-sm leading-6 ${styles.muted}`}>
                {project.keyDecision}
              </dd>
            </div>
            <div className="grid gap-3 py-5 sm:grid-cols-[8rem_1fr]">
              <dt className="font-mono text-[0.66rem] uppercase tracking-[0.18em]">
                Tradeoff
              </dt>
              <dd className={`font-body text-sm leading-6 ${styles.muted}`}>
                {project.tradeoff}
              </dd>
            </div>
          </dl>

          <ul
            aria-label={`${project.title} technologies`}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
          >
            {project.techStack.map((technology, technologyIndex) => (
              <li
                key={technology}
                className="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
              >
                <span className={styles.muted}>
                  {String(technologyIndex + 1).padStart(2, "0")} /
                </span>{" "}
                {technology}
              </li>
            ))}
          </ul>

          <Link
            to={`/projects/${project.slug}`}
            className={`focus-ring mt-10 flex w-full items-center justify-between gap-5 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] transition-transform duration-200 hover:-translate-y-1 ${styles.signal}`}
          >
            Resolve full case study
            <span aria-hidden="true" className="text-xl">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
