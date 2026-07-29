import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import type { Project, ProjectSlug } from "../../types/project";
import { TracePath } from "../motion/TracePath";
import { projectTraceVariants } from "../motion/projectTraceVariants";
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
    action: string;
    imageStage: string;
    trace: string;
  }
> = {
  liferecompiled: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    muted: "text-[var(--ink)]/65",
    line: "border-[var(--ink)]/25",
    action: "bg-[var(--violet-dark)] text-[var(--paper)]",
    imageStage: "bg-[var(--ink)]",
    trace: "text-[var(--violet-dark)]",
  },
  "training-app": {
    scene: "bg-[var(--ink-2)] text-[var(--paper)]",
    muted: "text-[var(--paper-muted)]",
    line: "border-[var(--line-strong)]",
    action: "bg-[var(--paper)] text-[var(--ink)]",
    imageStage: "bg-[var(--ink)]",
    trace: "text-[var(--violet-text)]",
  },
  taskflow: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    muted: "text-[var(--ink)]/65",
    line: "border-[var(--ink)]/25",
    action: "bg-[var(--ink)] text-[var(--paper)]",
    imageStage: "bg-[var(--ink-2)]",
    trace: "text-[var(--violet-dark)]",
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

        <h3 className="project-word mt-8 font-display text-[clamp(2.3rem,4vw,4.4rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
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
          Read case study
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
      <div className={`mb-10 grid gap-5 border-b pb-6 ${styles.line} sm:grid-cols-[minmax(0,1fr)_minmax(14rem,0.65fr)] sm:items-center`}>
        <div className="flex items-center justify-between gap-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] sm:block">
          <span>Project {number} of 03</span>
          <span className={`sm:mt-2 sm:block ${styles.muted}`}>
            {project.proofLabel}
          </span>
        </div>

        <TracePath
          variant={projectTraceVariants[project.slug]}
          className={`h-16 ${styles.trace}`}
        />
      </div>

      <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
        <div
          className={`min-w-0 lg:col-span-5 ${
            isReversed ? "lg:col-start-8 lg:row-start-1" : ""
          }`}
        >
          <h2 className="project-word font-display text-[clamp(2.55rem,12vw,7.5rem)] font-semibold leading-[0.82] tracking-[-0.07em]">
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
              {coverScreenshot.label}
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
                  ? "relative w-full max-w-67 object-contain object-bottom shadow-[-16px_16px_0_var(--violet)]"
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
            {project.techStack.map((technology) => (
              <li
                key={technology}
                className="font-mono text-[0.65rem] uppercase tracking-[0.16em]"
              >
                {technology}
              </li>
            ))}
          </ul>

          <Link
            to={`/projects/${project.slug}`}
            className={`focus-ring mt-10 flex w-full items-center justify-between gap-5 px-5 py-4 font-mono text-xs uppercase tracking-[0.18em] transition-colors duration-200 ${styles.action}`}
          >
            Read full case study
            <span aria-hidden="true" className="text-xl">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
