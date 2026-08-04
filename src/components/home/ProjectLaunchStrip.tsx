import type { MouseEvent } from "react";

import type { Project, ProjectSlug } from "../../types/project";
import { ProjectTitleText } from "../projects/ProjectTitleText";

const launchRoles: Record<ProjectSlug, string> = {
  liferecompiled: "Firebase engineering",
  "training-app": "Product thinking",
  taskflow: "React + TypeScript UI",
};

type ProjectLaunchStripProps = {
  projects: Project[];
};

export function ProjectLaunchStrip({ projects }: ProjectLaunchStripProps) {
  const handleProjectJump = (
    event: MouseEvent<HTMLAnchorElement>,
    projectSlug: ProjectSlug,
  ) => {
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const targetId = `project-${projectSlug}`;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", `#${targetId}`);

    const shouldReduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
    target.focus({ preventScroll: true });
  };

  return (
    <nav
      id="selected-work"
      tabIndex={-1}
      aria-label="Selected projects"
      className="project-launch-strip full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]"
    >
      <ol className="content-frame grid md:grid-cols-3 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,0.95fr)_minmax(0,0.55fr)]">
        {projects.map((project, index) => (
          <li
            key={project.slug}
            className="border-b border-[var(--ink)]/20 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <a
              href={`#project-${project.slug}`}
              onClick={(event) => handleProjectJump(event, project.slug)}
              className="focus-ring group relative grid min-h-24 grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-4 px-1 py-5 sm:min-h-30 sm:py-6 md:min-h-34 md:px-5 md:py-7 lg:min-h-38 lg:px-6"
            >
              <span className="pt-1 font-mono text-[0.62rem] font-semibold text-[var(--violet-dark)]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="min-w-0">
                <span className="project-word block font-display text-[clamp(1.35rem,2.5vw,2.15rem)] font-semibold leading-none tracking-[-0.035em] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none">
                  <ProjectTitleText title={project.title} />
                </span>
                <span className="mt-2 block text-xs leading-5 text-[var(--ink)]/62 sm:mt-3">
                  {launchRoles[project.slug]}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="pt-0.5 text-lg text-[var(--violet-dark)] transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
              >
                →
              </span>

              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[var(--violet-dark)] transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100 motion-reduce:transition-none"
              />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
