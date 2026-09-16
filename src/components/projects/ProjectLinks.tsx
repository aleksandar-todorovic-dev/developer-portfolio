import type { ProjectLink } from "../../types/project";
import { NewTabNotice } from "../ui/NewTabNotice";

export function ProjectLinks({ links }: { links: ProjectLink[] }) {
  return (
    <nav
      aria-label="Project links"
      className="mt-3 flex flex-wrap gap-x-7 gap-y-2"
    >
      {links.map((link) => (
        <a
          key={link.type}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="text-action"
        >
          <span>{link.type === "live" ? "Live project" : "Source code"}</span>
          <span aria-hidden="true">↗</span>
          <NewTabNotice />
        </a>
      ))}
    </nav>
  );
}
