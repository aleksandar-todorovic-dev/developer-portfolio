import { motion, useReducedMotion } from "motion/react";

import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();
  const projectCount = String(projects.length).padStart(2, "0");

  return (
    <>
      <section className="full-bleed relative overflow-hidden border-b border-[var(--line-strong)] bg-[var(--violet)] text-[var(--paper)]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-[9%] hidden w-px bg-[var(--paper)]/35 lg:block"
        />
        <div
          aria-hidden="true"
          className="absolute -right-12 top-20 size-40 rotate-45 border border-[var(--paper)]/25 lg:size-64"
        />

        <div className="content-frame relative py-16 sm:py-24 lg:py-32">
          <div className="flex items-center justify-between gap-6 border-b border-[var(--paper)]/35 pb-5 font-mono text-[0.68rem] uppercase tracking-[0.2em]">
            <span>Project register / selected work</span>
            <span aria-label={`${projects.length} projects`}>
              TRACE—00 / {projectCount}
            </span>
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
            <div className="min-w-0">
              <p className="signal-label mb-5 w-fit bg-[var(--signal)] text-[var(--ink)]">
                Execution records
              </p>

              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-display max-w-5xl text-[clamp(3.4rem,11vw,9.5rem)] leading-[0.78] font-semibold tracking-[-0.075em] [overflow-wrap:anywhere]"
              >
                <span className="block">Selected</span>
                <motion.span
                  className="block text-[var(--signal)]"
                  initial={
                    shouldReduceMotion
                      ? false
                      : { scaleX: 0.88, x: "-0.08em" }
                  }
                  animate={{ scaleX: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                  style={{ transformOrigin: "left" }}
                >
                  work.
                </motion.span>
              </h1>
            </div>

            <div className="border-l border-[var(--paper)]/40 pl-6">
              <p className="font-body text-lg leading-8">
                Each project exists here for a different reason.
              </p>
              <p className="mt-5 font-body text-sm leading-6 text-[var(--paper)]">
                Firebase engineering, product-focused MVP thinking, and
                practical React + TypeScript interface work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-label="Selected project case studies"
        className="full-bleed bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="content-frame">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
