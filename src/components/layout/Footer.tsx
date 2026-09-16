import { Link } from "react-router";
import { profile } from "../../data/profile";
import { NewTabNotice } from "../ui/NewTabNotice";

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="content-frame flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-6">
        <p className="text-sm leading-6 text-[var(--paper-muted)]">
          © {new Date().getFullYear()} {profile.name}
          <span className="block sm:inline"> · {profile.location}</span>
        </p>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-1 text-sm font-semibold"
        >
          <Link
            to="/contact"
            className="focus-ring inline-flex min-h-11 items-center"
          >
            Contact
          </Link>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="focus-ring inline-flex min-h-11 items-center gap-2"
          >
            LinkedIn <span aria-hidden="true">↗</span>
            <NewTabNotice />
          </a>
          <a
            href={profile.cv}
            download
            className="focus-ring inline-flex min-h-11 items-center gap-2"
          >
            CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </footer>
  );
}
