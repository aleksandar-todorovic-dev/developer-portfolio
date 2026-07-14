import { Link, useParams } from "react-router";

import { getProjectBySlug } from "../utils/getProjectBySlug";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <section>
        <Link
          to="/projects"
          className="text-sm font-medium text-[#C4B5FD] hover:text-[#F5F2FF]"
        >
          ← Back to projects
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
          Project not found
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This project does not exist.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
          Check the project URL or return to the projects page.
        </p>
      </section>
    );
  }

  return (
    <section>
      <Link
        to="/projects"
        className="text-sm font-medium text-[#C4B5FD] hover:text-[#F5F2FF]"
      >
        ← Back to projects
      </Link>

      <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
        {project.proofLabel}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {project.title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
        {project.shortDescription}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
          <h2 className="text-lg font-semibold">What it proves</h2>

          <p className="mt-3 leading-7 text-[#A9A1BA]">
            {project.proofSummary}
          </p>
        </article>

        <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
          <h2 className="text-lg font-semibold">Key decision</h2>

          <p className="mt-3 leading-7 text-[#A9A1BA]">{project.keyDecision}</p>
        </article>

        <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
          <h2 className="text-lg font-semibold">Tradeoff</h2>

          <p className="mt-3 leading-7 text-[#A9A1BA]">{project.tradeoff}</p>
        </article>

        <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
          <h2 className="text-lg font-semibold">Technology</h2>

          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((technology) => (
              <li
                key={technology}
                className="rounded-full border border-[#2B2340] px-3 py-1 text-sm text-[#C4B5FD]"
              >
                {technology}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <div className="mt-8 flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a
            key={link.type}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#8B5CF6] px-4 py-2 font-medium text-white transition hover:bg-[#A855F7]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
