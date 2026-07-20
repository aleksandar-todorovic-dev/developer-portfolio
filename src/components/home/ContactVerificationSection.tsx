import { Link } from "react-router";

import { verificationLinks } from "../../data/verificationLinks";

export function ContactVerificationSection() {
  return (
    <section className="mt-24 border-t border-[#2B2340] pt-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#A78BFA]">
            Contact and verification
          </p>

          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight text-[#F5F2FF] sm:text-4xl">
            The work is available to inspect.
          </h2>

          <p className="mt-5 max-w-xl leading-7 text-[#A9A1BA]">
            Review the projects, inspect the code, or contact me about a clearly
            scoped frontend, web, implementation, or software-facing
            opportunity.
          </p>
        </div>

        <ul className="border-y border-[#2B2340]">
          {verificationLinks.map((item) => (
            <li
              key={item.label}
              className="border-b border-[#2B2340] last:border-b-0"
            >
              {item.external ||
              item.download ||
              item.href.startsWith("mailto:") ? (
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  download={item.download}
                  className="group grid gap-2 py-6 transition sm:grid-cols-[150px_1fr] sm:gap-8"
                >
                  <span className="font-medium text-[#F5F2FF] transition group-hover:text-[#C4B5FD]">
                    {item.label}
                  </span>

                  <span className="leading-7 text-[#A9A1BA]">
                    {item.description}
                  </span>
                </a>
              ) : (
                <Link
                  to={item.href}
                  className="group grid gap-2 py-6 transition sm:grid-cols-[150px_1fr] sm:gap-8"
                >
                  <span className="font-medium text-[#F5F2FF] transition group-hover:text-[#C4B5FD]">
                    {item.label}
                  </span>

                  <span className="leading-7 text-[#A9A1BA]">
                    {item.description}
                  </span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
