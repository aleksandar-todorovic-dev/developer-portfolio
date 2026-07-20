import { Link, useLocation } from "react-router";

type RecoveryLink = {
  label: string;
  description: string;
  href: string;
};

const recoveryLinks: RecoveryLink[] = [
  {
    label: "Home",
    description:
      "Return to the main portfolio journey and the three-project proof map.",
    href: "/",
  },
  {
    label: "Case studies",
    description:
      "Review LifeRecompiled, Training App and TaskFlow in more detail.",
    href: "/projects",
  },
  {
    label: "Contact",
    description:
      "Find direct contact details, professional links and the current CV.",
    href: "/contact",
  },
];

export function NotFoundPage() {
  const location = useLocation();

  return (
    <>
      <section className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(300px,0.8fr)] lg:gap-16">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
            404 / Route not found
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#F5F2FF] sm:text-5xl lg:text-6xl">
            This route does not lead to a project file.
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-[#A9A1BA]">
            The address may be incomplete, outdated or mistyped. The portfolio
            itself is still here, and the main routes below will take you back
            to useful content.
          </p>

          <Link
            to="/"
            className="mt-9 inline-flex min-h-12 items-center justify-center border border-[#8B5CF6] bg-[#8B5CF6] px-6 text-sm font-semibold text-white transition hover:bg-[#A855F7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4B5FD]"
          >
            Return home
          </Link>
        </div>

        <aside
          aria-label="Route diagnostic"
          className="border-y border-[#2B2340] bg-[#0D0B14]"
        >
          <p className="border-b border-[#2B2340] px-5 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
            Route check
          </p>

          <dl>
            <div className="border-b border-[#2B2340] px-5 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#6F687E]">
                Requested path
              </dt>

              <dd className="mt-2 break-all font-mono text-sm leading-6 text-[#D8D2E8]">
                {location.pathname}
              </dd>
            </div>

            <div className="border-b border-[#2B2340] px-5 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#6F687E]">
                Status
              </dt>

              <dd className="mt-2 leading-6 text-[#D8D2E8]">
                No matching portfolio route was found.
              </dd>
            </div>

            <div className="px-5 py-5">
              <dt className="text-xs font-medium uppercase tracking-[0.16em] text-[#6F687E]">
                Suggested action
              </dt>

              <dd className="mt-2 leading-6 text-[#D8D2E8]">
                Choose one of the verified routes below.
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="mt-24">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#8B849A]">
            Available routes
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-[#F5F2FF] sm:text-4xl">
            Continue through a known part of the portfolio.
          </h2>
        </div>

        <nav
          aria-label="Recover from missing page"
          className="mt-10 border-y border-[#2B2340]"
        >
          <ul>
            {recoveryLinks.map((item, index) => (
              <li
                key={item.href}
                className="border-b border-[#2B2340] last:border-b-0"
              >
                <Link
                  to={item.href}
                  className="group grid gap-4 py-7 transition hover:bg-[#11101A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8B5CF6] sm:grid-cols-[70px_180px_minmax(0,1fr)_auto] sm:items-center sm:px-4"
                >
                  <span className="font-mono text-sm text-[#5F5870]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="font-semibold text-[#F5F2FF] transition group-hover:text-[#C4B5FD]">
                    {item.label}
                  </span>

                  <span className="max-w-3xl leading-7 text-[#A9A1BA]">
                    {item.description}
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-[#8B849A] transition group-hover:translate-x-1 group-hover:text-[#C4B5FD]"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
