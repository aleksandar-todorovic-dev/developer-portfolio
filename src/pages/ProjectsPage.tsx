import { motion, useReducedMotion } from "motion/react";

import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "../data/projects";

export function ProjectsPage() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <section className="full-bleed border-b border-[var(--ink)]/25 bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame relative py-16 sm:py-24 lg:py-32">
          <div className="flex items-center justify-between gap-6 border-b border-[var(--ink)]/25 pb-5 font-mono text-[0.68rem] uppercase tracking-[0.16em]">
            <span>Selected projects</span>
            <span aria-label={`${projects.length} projects`}>
              {projects.length} case studies
            </span>
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-end">
            <div className="min-w-0">
              <p className="mb-5 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[var(--violet-dark)]">
                Frontend work
              </p>

              <h1
                id="page-heading"
                tabIndex={-1}
                className="font-display max-w-5xl text-[clamp(3.4rem,11vw,9.5rem)] leading-[0.8] font-semibold tracking-[-0.075em]"
              >
                <span className="block">Selected</span>
                <motion.span
                  className="block text-[var(--violet-dark)]"
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

            <div className="border-l border-[var(--ink)]/30 pl-6">
              <p className="font-body text-lg leading-8">
                Each project exists here for a different reason.
              </p>
              <p className="mt-5 font-body text-sm leading-6 text-[var(--ink)]/70">
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
