import { Link } from "react-router";
import { profile } from "../../data/profile";
import { NewTabNotice } from "../ui/NewTabNotice";

export function ContactVerificationSection() {
  return (
    <section
      aria-labelledby="home-contact-heading"
      className="full-bleed border-t border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]"
    >
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <h2
          id="home-contact-heading"
          className="max-w-3xl font-display text-[clamp(2rem,4vw,4rem)] font-medium leading-[1.1] tracking-[-0.035em]"
        >
          The work is here.
          <br />
          The next message can be simple.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="email-link focus-ring mt-8 block w-fit max-w-full border-b border-[var(--line-strong)] pb-3 font-display text-[clamp(1.35rem,4vw,3.8rem)] font-semibold leading-tight tracking-[-0.035em]"
        >
          {profile.email}
          <span
            aria-hidden="true"
            className="ml-3 inline-block text-[var(--violet-text)]"
          >
            ↗
          </span>
        </a>
        <nav
          aria-label="Contact and background"
          className="mt-6 flex flex-wrap gap-x-8 gap-y-2"
        >
          <Link to="/contact" className="text-action">
            Contact <span aria-hidden="true">→</span>
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-action"
          >
            GitHub <span aria-hidden="true">↗</span>
            <NewTabNotice />
          </a>
          <a href={profile.cv} download className="text-action">
            Download CV <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
