import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="min-h-screen bg-[#07060B] px-6 py-16 text-[#F5F2FF]">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
          404
        </p>

        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Page not found.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="mt-8 inline-flex rounded-full bg-[#8B5CF6] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#A855F7]"
        >
          Back to home
        </Link>
      </section>
    </main>
  );
}
