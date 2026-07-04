import { Link, useParams } from "react-router";

export function ProjectDetailPage() {
  const { slug } = useParams();

  return (
    <main className="min-h-screen bg-[#07060B] px-6 py-16 text-[#F5F2FF]">
      <section className="mx-auto max-w-5xl">
        <Link
          to="/projects"
          className="text-sm font-medium text-[#C4B5FD] hover:text-[#F5F2FF]"
        >
          ← Back to projects
        </Link>

        <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
          Project Detail
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          {slug}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
          This is a temporary project detail page. Later, this route will read
          typed project data by slug and render a full case study.
        </p>
      </section>
    </main>
  );
}
