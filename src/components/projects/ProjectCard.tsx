import { Link } from "react-router";
import type { Project } from "../../types/project";
import { projectFacts } from "../../data/projectFacts";
import { ProjectEvidenceFigure } from "./ProjectEvidenceFigure";
import { ProjectTitleText } from "./ProjectTitleText";
import { NewTabNotice } from "../ui/NewTabNotice";

function EntryCopy({ project, index }: { project: Project; index: number }) {
  return (
    <>
      <p className="eyebrow">
        {String(index + 1).padStart(2, "0")} / {projectFacts[project.slug].role}
      </p>
      <h2 className="project-word mt-5 font-display text-[clamp(2.7rem,6.5vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.05em]">
        <ProjectTitleText title={project.title} />
      </h2>
      <p className="mt-5 max-w-[48ch] text-lg leading-8 opacity-85">
        {project.shortDescription}
      </p>
      <p className="eyebrow mt-5 max-w-xl opacity-75">
        {project.techStack.join(" · ")}
      </p>
      <div className="mt-5 flex flex-wrap gap-x-7 gap-y-2">
        <Link to={`/projects/${project.slug}`} className="text-action">
          Read the case study <span aria-hidden="true">→</span>
        </Link>
        {project.links.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center gap-2 text-sm font-semibold"
          >
            {link.type === "live" ? "Live project" : "Source"}
            <span aria-hidden="true">↗</span>
            <NewTabNotice />
          </a>
        ))}
      </div>
    </>
  );
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  if (project.slug === "liferecompiled") {
    return (
      <article
        id={`entry-${project.slug}`}
        tabIndex={-1}
        className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="content-frame py-14 sm:py-20 lg:py-24">
          <div className="lg:ml-[8%]">
            <EntryCopy project={project} index={index} />
          </div>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.8fr_0.8fr] lg:gap-8">
            <ProjectEvidenceFigure
              screenshot={project.screenshots.find((s) =>
                s.src.endsWith("/post-detail.png"),
              )}
            />
            <div className="ml-auto w-[88%] lg:ml-0 lg:mt-24 lg:w-full">
              <p className="eyebrow mb-4 text-[var(--violet-text)]">
                Beyond the public feed
              </p>
              <ProjectEvidenceFigure
                screenshot={project.screenshots.find((s) =>
                  s.src.endsWith("/saved-posts.png"),
                )}
              />
              <p className="mt-5 max-w-md text-sm leading-7 text-[var(--paper-muted)]">
                Reactions, saved context and a staged deletion lifecycle connect
                the visible UI to the Firebase architecture.
              </p>
            </div>
          </div>
        </div>
      </article>
    );
  }
  if (project.slug === "training-app") {
    return (
      <article
        id={`entry-${project.slug}`}
        tabIndex={-1}
        className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] border-y border-[var(--line)] bg-[#10272a] text-[var(--paper)]"
      >
        <div className="content-frame grid gap-10 py-14 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:py-24">
          <div className="lg:pt-12">
            <EntryCopy project={project} index={index} />
            <p className="mt-9 max-w-md border-l-2 border-[#79d7df] pl-5 text-lg leading-8">
              The calendar can move.
              <br />
              The training order stays clear.
            </p>
          </div>
          <div className="grid grid-cols-2 items-start gap-4 sm:gap-7">
            <ProjectEvidenceFigure
              screenshot={project.screenshots.find((s) =>
                s.src.endsWith("/exercise.png"),
              )}
              className="max-w-72"
            />
            <ProjectEvidenceFigure
              screenshot={project.screenshots.find((s) =>
                s.src.endsWith("/partial-day.png"),
              )}
              className="mt-14 max-w-72 sm:mt-24"
            />
          </div>
        </div>
      </article>
    );
  }
  return (
    <article
      id={`entry-${project.slug}`}
      tabIndex={-1}
      className="full-bleed scroll-mt-[calc(var(--header-height)+1rem)] bg-[var(--paper)] text-[var(--ink)]"
    >
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <EntryCopy project={project} index={index} />
        <ProjectEvidenceFigure
          screenshot={project.screenshots[0]}
          cropBoard
          className="mt-9"
        />
        <p className="mt-5 text-sm leading-7 text-[var(--ink)]/70">
          Built from a guided course foundation, then completed, documented and
          independently refined into a focused Kanban product.
        </p>
      </div>
    </article>
  );
}
