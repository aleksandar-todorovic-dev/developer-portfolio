import { ProjectCard } from "../components/projects/ProjectCard";
import { ProjectProofPanel } from "../components/projects/ProjectProofPanel";
import { BuildProcessSection } from "../components/home/BuildProcessSection";
import { ProjectStackSection } from "../components/home/ProjectStackSection";
import { BackgroundCredibilitySection } from "../components/home/BackgroundCredibilitySection";
import { ContactVerificationSection } from "../components/home/ContactVerificationSection";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <section className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-14">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
            Frontend Developer
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I build React, TypeScript and Firebase projects around real product
            flows and practical engineering decisions.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
            My main projects demonstrate Firebase engineering, structured
            product thinking, and typed React interface work.
          </p>
        </div>

        <ProjectProofPanel projects={projects} />
      </section>

      <section className="mt-24">
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
          Three projects, three proofs
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Each project demonstrates a different part of how I build.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
          The projects are selected for the engineering decisions, product
          thinking, and frontend skills they make visible.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              variant="compact"
            />
          ))}
        </div>
      </section>

      <BuildProcessSection />
      <ProjectStackSection />
      <BackgroundCredibilitySection />
      <ContactVerificationSection />
    </>
  );
}
