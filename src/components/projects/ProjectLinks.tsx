import type { ProjectLink } from "../../types/project";

type ProjectLinksProps = {
  links: ProjectLink[];
};

const linkTypeLabels: Record<ProjectLink["type"], string> = {
  live: "Live project",
  github: "Source code",
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <section
      aria-label="Project links"
      className="mt-14 border-y border-[#2B2340]"
    >
      <div className="grid lg:grid-cols-[180px_minmax(0,1fr)]">
        <div className="py-7 lg:border-r lg:border-[#2B2340] lg:pr-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Verification
          </p>

          <h2 className="mt-3 text-xl font-semibold text-[#F5F2FF]">
            Inspect the work
          </h2>
        </div>

        <div className="divide-y divide-[#2B2340] border-t border-[#2B2340] lg:border-t-0 lg:pl-8">
          {links.map((link, index) => (
            <a
              key={link.type}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-3 py-6 transition sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:items-center"
            >
              <span className="font-mono text-sm text-[#5F5870]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span>
                <span className="block text-xs font-medium uppercase tracking-[0.18em] text-[#8B849A]">
                  {linkTypeLabels[link.type]}
                </span>

                <span className="mt-1 block font-medium text-[#D8D2E8] transition group-hover:text-[#C4B5FD]">
                  {link.label}
                </span>
              </span>

              <span
                aria-hidden="true"
                className="text-xl text-[#8B5CF6] transition group-hover:-translate-y-1 group-hover:translate-x-1"
              >
                ↗
              </span>

              <span className="sr-only">Opens in a new tab</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
