import type { ProjectLink } from "../../types/project";

type ProjectLinksProps = {
  links: ProjectLink[];
};

export function ProjectLinks({ links }: ProjectLinksProps) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {links.map((link) => (
        <a
          key={link.type}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-[#7C3AED] px-4 py-2 font-medium text-white transition hover:bg-[#6D28D9]"
        >
          {link.label}
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}
