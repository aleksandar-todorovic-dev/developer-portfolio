export function Footer() {
  return (
    <footer className="border-t border-[#2B2340]/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-[#A9A1BA] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Aleksandar Todorovic. Built with React and TypeScript.</p>

        <div className="flex gap-4">
          <a
            href="https://github.com/aleksandar-todorovic-dev"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#F5F2FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B]"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/aleksandar-todorovic-dev"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#F5F2FF] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
