import { useRef, useState } from "react";
import { Link } from "react-router";
import { NewTabNotice } from "../components/ui/NewTabNotice";
import { profile } from "../data/profile";

export function ContactPage() {
  const [copyMessage, setCopyMessage] = useState("");
  const emailRef = useRef<HTMLSpanElement>(null);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyMessage("Email address copied.");
    } catch {
      if (emailRef.current) {
        const range = document.createRange();
        range.selectNodeContents(emailRef.current);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setCopyMessage(
        "The address is selected. Use your device’s copy command to copy it.",
      );
    }
  }

  const [emailName, emailDomain] = profile.email.split("@");
  return (
    <>
      <section className="full-bleed bg-[var(--paper)] text-[var(--ink)]">
        <div className="content-frame py-12 sm:py-18 lg:py-24">
          <p className="eyebrow text-[var(--violet-dark)]">
            Contact / {profile.name}
          </p>
          <h1
            id="page-heading"
            tabIndex={-1}
            className="mt-7 max-w-[16ch] font-display text-[clamp(3rem,7.4vw,7.25rem)] font-semibold leading-[0.98] tracking-[-0.045em]"
          >
            A short first message is enough.
          </h1>
          <p className="mt-7 max-w-[47ch] text-lg leading-8 text-[var(--ink)]/75">
            A link, the problem you are trying to solve, the expected result and
            any important constraints are enough to start.
          </p>
          <div className="mt-10 border-y border-[var(--ink)]/30 py-7 sm:mt-14 sm:py-9">
            <p className="eyebrow text-[var(--violet-dark)]">
              Email me directly
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="email-link focus-ring mt-5 block w-fit max-w-full font-display text-[clamp(1.5rem,4.7vw,4.5rem)] font-semibold leading-[1.15] tracking-[-0.035em]"
            >
              <span ref={emailRef}>
                {emailName}
                <wbr />@{emailDomain}
              </span>
              <span
                aria-hidden="true"
                className="ml-3 inline-block text-[var(--violet-dark)]"
              >
                ↗
              </span>
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="text-action mt-5"
            >
              Copy email address <span aria-hidden="true">⧉</span>
            </button>
            <p
              role="status"
              aria-live="polite"
              className="mt-3 min-h-6 text-sm leading-6 text-[var(--ink)]/75"
            >
              {copyMessage}
            </p>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="contact-context-heading"
        className="full-bleed bg-[var(--ink)] text-[var(--paper)]"
      >
        <div className="content-frame grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <h2
              id="contact-context-heading"
              className="eyebrow text-[var(--violet-text)]"
            >
              A little context
            </h2>
            <p className="mt-5 font-display text-[clamp(1.8rem,3.5vw,3rem)] font-medium leading-tight tracking-[-0.03em]">
              {profile.location}.<br />
              Open to remote work from Serbia and local opportunities in
              Kragujevac.
            </p>
            <p className="mt-5 max-w-xl leading-8 text-[var(--paper-muted)]">
              My focus is frontend and web development. I'm also open to
              adjacent software-facing roles where troubleshooting, product
              understanding and clear technical communication matter.
            </p>
          </div>
          <nav
            aria-label="Professional links"
            className="grid grid-cols-2 items-start gap-x-8 gap-y-2 border-t border-[var(--line)] pt-4"
          >
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-action"
            >
              LinkedIn <span aria-hidden="true">↗</span>
              <NewTabNotice />
            </a>
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
            <Link to="/projects" className="text-action">
              Projects <span aria-hidden="true">→</span>
            </Link>
          </nav>
        </div>
      </section>
    </>
  );
}
