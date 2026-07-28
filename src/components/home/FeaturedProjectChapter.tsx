import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router";

import type { Project } from "../../types/project";
import { MediaReveal } from "../motion/MediaReveal";

type FeaturedProjectChapterProps = {
  project: Project;
  index: number;
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

export function FeaturedProjectChapter({
  project,
  index,
}: FeaturedProjectChapterProps) {
  const shouldReduceMotion = useReducedMotion();
  const [screenshot] = project.screenshots;
  const isTrainingApp = project.slug === "training-app";
  const isTaskFlow = project.slug === "taskflow";
  const number = String(index + 1).padStart(2, "0");

  if (!screenshot) {
    return null;
  }

  const dimensions = screenshotDimensions[screenshot.format];

  return (
    <article
      className={`full-bleed overflow-hidden border-t ${
        isTrainingApp
          ? "border-white/35 bg-[var(--violet)] text-white"
          : isTaskFlow
            ? "border-black/20 bg-[var(--paper)] text-[var(--ink)]"
            : "border-[var(--line)] bg-[var(--ink-2)] text-[var(--paper)]"
      }`}
    >
      <div
        className={`content-frame grid min-h-[42rem] gap-10 py-12 sm:py-16 lg:items-center lg:py-24 ${
          isTrainingApp
            ? "lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
            : "lg:grid-cols-[minmax(18rem,0.72fr)_minmax(0,1.28fr)]"
        }`}
      >
        <div
          className={
            isTrainingApp ? "lg:order-1" : isTaskFlow ? "lg:order-2" : ""
          }
        >
          <div
            className={`flex items-center justify-between gap-5 border-b pb-4 ${
              isTaskFlow
                ? "border-black/30"
                : isTrainingApp
                  ? "border-white/40"
                  : "border-[var(--line)]"
            }`}
          >
            <p className="signal-label">
              Project record / {project.proofLabel}
            </p>

            <motion.span
              aria-hidden="true"
              className={`font-display text-6xl font-extrabold leading-none sm:text-8xl ${
                isTrainingApp
                  ? "text-[var(--signal)]"
                  : isTaskFlow
                    ? "text-[var(--violet)]"
                    : "text-[var(--violet)]"
              }`}
              initial={shouldReduceMotion ? false : { x: -28 }}
              whileInView={{ x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {number}
            </motion.span>
          </div>

          <h3 className="project-word mt-7 font-display text-[clamp(3rem,8vw,7.5rem)] font-semibold leading-[0.84] tracking-[-0.075em]">
            {project.title}
          </h3>

          <p
            className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${
              isTrainingApp
                ? "text-white"
                : isTaskFlow
                  ? "text-black/65"
                  : "text-[var(--paper-muted)]"
            }`}
          >
            {project.shortDescription}
          </p>

          <div
            className={`mt-8 grid gap-6 border-y py-6 sm:grid-cols-2 ${
              isTaskFlow
                ? "border-black/30"
                : isTrainingApp
                  ? "border-white/40"
                  : "border-[var(--line)]"
            }`}
          >
            <div>
              <p className="signal-label">What it proves</p>
              <p className="mt-2 text-sm leading-6">{project.proofSummary}</p>
            </div>

            <div>
              <p className="signal-label">Honest edge</p>
              <p className="mt-2 text-sm leading-6">{project.tradeoff}</p>
            </div>
          </div>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.66rem] uppercase tracking-[0.1em]">
            {project.techStack.map((technology) => (
              <li key={technology} className="flex items-center gap-2">
                <span
                  className={`size-1.5 ${
                    isTrainingApp
                      ? "bg-[var(--signal)]"
                      : "bg-[var(--violet)]"
                  }`}
                  aria-hidden="true"
                />
                {technology}
              </li>
            ))}
          </ul>

          <Link
            to={`/projects/${project.slug}`}
            className="editorial-link mt-8 focus-visible:outline-none"
          >
            Trace the case study
          </Link>
        </div>

        <MediaReveal
          className={
            isTrainingApp
              ? "relative flex min-h-[34rem] items-end justify-center overflow-hidden border border-white/35 bg-[var(--ink)] px-8 pt-12 lg:order-2"
              : isTaskFlow
                ? "screen-stage bg-[var(--ink)] lg:order-1"
                : "screen-stage"
          }
        >
          <div
            aria-hidden="true"
            className={`absolute left-0 top-0 px-3 py-2 font-mono text-[0.58rem] uppercase tracking-[0.11em] ${
              isTrainingApp
                ? "bg-[var(--signal)] text-[var(--ink)]"
                : "bg-[var(--violet)] text-white"
            }`}
          >
            Interface proof / {number}
          </div>

          <img
            src={screenshot.src}
            alt={screenshot.alt}
            width={dimensions.width}
            height={dimensions.height}
            loading="lazy"
            className={
              isTrainingApp
                ? "max-h-[38rem] w-auto translate-y-10 object-contain"
                : "aspect-[1.85/1] h-full w-full object-cover object-top"
            }
          />
        </MediaReveal>
      </div>
    </article>
  );
}
