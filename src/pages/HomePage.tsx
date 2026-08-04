import { AuthoredHero } from "../components/home/AuthoredHero";
import { BackgroundCredibilitySection } from "../components/home/BackgroundCredibilitySection";
import { BuildProcessSection } from "../components/home/BuildProcessSection";
import { ContactVerificationSection } from "../components/home/ContactVerificationSection";
import { FeaturedProjectChapter } from "../components/home/FeaturedProjectChapter";
import { ProjectLaunchStrip } from "../components/home/ProjectLaunchStrip";
import { ProjectStackSection } from "../components/home/ProjectStackSection";
import { projects } from "../data/projects";

export function HomePage() {
  return (
    <>
      <AuthoredHero />
      <ProjectLaunchStrip projects={projects} />

      <section aria-label="Selected project chapters">
        {projects.map((project, index) => (
          <FeaturedProjectChapter
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>

      <ProjectStackSection />
      <BuildProcessSection />
      <BackgroundCredibilitySection />
      <ContactVerificationSection />
    </>
  );
}
