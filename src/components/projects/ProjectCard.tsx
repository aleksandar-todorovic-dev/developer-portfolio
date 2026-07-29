import { Link } from "react-router";

import type { Project, ProjectSlug } from "../../types/project";
import { getProjectScreenshotDimensions } from "./projectScreenshotDimensions";
import { ProjectTitleText } from "./ProjectTitleText";

type ProjectCardProps = {
  project: Project;
  index: number;
};

const chapterStyles: Record<
  ProjectSlug,
  {
    scene: string;
    muted: string;
    line: string;
    accent: string;
    action: string;
    grid: string;
    contentOrder: string;
    mediaOrder: string;
    imageStage: string;
  }
> = {
  liferecompiled: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    muted: "text-[var(--ink)]/68",
    line: "border-[var(--ink)]/25",
    accent: "text-[var(--violet-dark)]",
    action: "bg-[var(--violet-dark)] text-[var(--paper)]",
    grid: "xl:grid-cols-[minmax(26rem,1.12fr)_minmax(0,0.88fr)]",
    contentOrder: "",
    mediaOrder: "",
    imageStage: "bg-[var(--ink)] p-2 sm:p-3",
  },
  "training-app": {
    scene: "bg-[var(--ink-2)] text-[var(--paper)]",
    muted: "text-[var(--paper-muted)]",
    line: "border-[var(--line-strong)]",
    accent: "text-[var(--violet-text)]",
    action: "bg-[var(--paper)] text-[var(--ink)]",
    grid: "xl:grid-cols-[minmax(0,1.06fr)_minmax(22rem,0.94fr)]",
    contentOrder: "xl:order-2",
    mediaOrder: "xl:order-1",
    imageStage:
      "flex min-h-132 items-end justify-center bg-[var(--ink)] px-8 pt-12 sm:min-h-160",
  },
  taskflow: {
    scene: "bg-[var(--paper)] text-[var(--ink)]",
    muted: "text-[var(--ink)]/68",
    line: "border-[var(--ink)]/25",
    accent: "text-[var(--violet-dark)]",
    action: "bg-[var(--ink)] text-[var(--paper)]",
    grid: "xl:grid-cols-[minmax(21rem,0.8fr)_minmax(0,1.2fr)]",
    contentOrder: "",
    mediaOrder: "",
    imageStage: "bg-[var(--ink-2)] p-2 sm:p-3",
  },
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const number = String(index + 1).padStart(2, "0");
  const styles = chapterStyles[project.slug];
  const [coverScreenshot] = project.screenshots;
  const dimensions = coverScreenshot
    ? getProjectScreenshotDimensions(coverScreenshot.src)
    : undefined;
  const isMobileCover = coverScreenshot?.format === "mobile";

  return (
    <article
      className={`border-b px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 ${styles.line} ${styles.scene}`}
    >
      <header
        className={`flex flex-wrap items-center justify-between gap-4 border-b pb-5 font-mono text-[0.63rem] uppercase tracking-[0.11em] ${styles.line}`}
      >
        <span>Project {number} of 03</span>
        <span className={styles.muted}>{project.proofLabel}</span>
      </header>

      <div
        className={`grid gap-10 pt-10 xl:items-center xl:gap-14 ${styles.grid}`}
      >
        <div className={styles.contentOrder}>
          <h2 className="project-word font-display text-[clamp(3rem,7.3vw,6.6rem)] font-semibold leading-[0.94] tracking-[-0.035em] [font-stretch:100%]">
            <ProjectTitleText title={project.title} />
          </h2>

          <p
            className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${styles.muted}`}
          >
            {project.shortDescription}
          </p>

          <div className={`mt-8 border-t pt-6 ${styles.line}`}>
            <p
              className={`font-mono text-[0.61rem] uppercase tracking-[0.1em] ${styles.accent}`}
            >
              What it demonstrates
            </p>
            <p className="mt-4 max-w-2xl leading-7">
              {project.proofSummary}
            </p>
          </div>

          <dl className={`mt-8 border-y ${styles.line}`}>
            <div
              className={`grid gap-3 border-b py-5 sm:grid-cols-[7rem_1fr] ${styles.line}`}
            >
              <dt className="font-mono text-[0.61rem] uppercase tracking-[0.1em]">
                Decision
              </dt>
              <dd className={`text-sm leading-6 ${styles.muted}`}>
                {project.keyDecision}
              </dd>
            </div>
            <div className="grid gap-3 py-5 sm:grid-cols-[7rem_1fr]">
              <dt className="font-mono text-[0.61rem] uppercase tracking-[0.1em]">
                Tradeoff
              </dt>
              <dd className={`text-sm leading-6 ${styles.muted}`}>
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
                className="font-mono text-[0.61rem] uppercase tracking-[0.08em]"
              >
                {technology}
              </li>
            ))}
          </ul>

          <Link
            to={`/projects/${project.slug}`}
            className={`focus-ring mt-9 flex min-h-12 w-full items-center justify-between gap-5 px-5 py-3 text-sm font-semibold transition-colors ${styles.action}`}
          >
            Read full case study
            <span aria-hidden="true" className="text-xl">
              →
            </span>
          </Link>
        </div>

        {coverScreenshot ? (
          <figure className={styles.mediaOrder}>
            <Link
              to={`/projects/${project.slug}`}
              aria-label={`View ${project.title} case study`}
              className={`focus-ring group relative block overflow-hidden border ${styles.line} ${styles.imageStage}`}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 z-10 border-b border-r border-[var(--paper)]/30 bg-[var(--ink)] px-3 py-2 font-mono text-[0.56rem] uppercase tracking-[0.1em] text-[var(--paper)]"
              >
                {coverScreenshot.label}
              </span>

              <img
                src={coverScreenshot.src}
                alt={coverScreenshot.alt}
                loading="lazy"
                decoding="async"
                width={dimensions?.width}
                height={dimensions?.height}
                style={isMobileCover ? { maxWidth: "22rem" } : undefined}
                className={
                  isMobileCover
                    ? "block h-auto w-full object-contain"
                    : "block h-auto w-full"
                }
              />
            </Link>

            <figcaption
              className={`mt-4 max-w-3xl text-sm leading-6 ${styles.muted}`}
            >
              {coverScreenshot.caption}
            </figcaption>
          </figure>
        ) : null}
      </div>
    </article>
  );
}
