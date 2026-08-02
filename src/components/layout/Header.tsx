import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { NavLink } from "react-router";

import { cn } from "../../utils/cn";

type NavItem = {
  to: string;
  label: string;
  note: string;
  desktopOrder: number;
  end?: boolean;
};

const navLinks: NavItem[] = [
  {
    to: "/",
    label: "Home",
    note: "Portfolio overview",
    desktopOrder: 0,
    end: true,
  },
  {
    to: "/projects",
    label: "Projects",
    note: "Selected case studies",
    desktopOrder: 2,
  },
  {
    to: "/about",
    label: "About",
    note: "Background and approach",
    desktopOrder: 1,
  },
  {
    to: "/contact",
    label: "Contact",
    note: "Email and professional links",
    desktopOrder: 3,
  },
];

const desktopNavLinks = [...navLinks].sort(
  (firstLink, secondLink) =>
    firstLink.desktopOrder - secondLink.desktopOrder,
);

function desktopLinkClass(isActive: boolean) {
  return cn(
    "focus-ring group relative z-0 grid min-h-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-4 py-2 text-sm font-semibold tracking-[-0.01em] transition-colors duration-200 focus-visible:z-10 lg:px-5",
    isActive
      ? "text-[var(--paper)]"
      : "text-[var(--paper-muted)] hover:text-[var(--paper)]",
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = useReducedMotion();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        window.requestAnimationFrame(() => {
          menuButtonRef.current?.focus();
        });
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const menuLinks = Array.from(
        document.querySelectorAll<HTMLElement>(
          '#mobile-navigation a[href], #mobile-navigation button:not([disabled]), #mobile-navigation [tabindex]:not([tabindex="-1"])',
        ),
      );
      const firstElement = menuButtonRef.current;
      const lastElement = menuLinks.at(-1);

      if (!firstElement || !lastElement) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");

    const handleDesktopViewport = (event: MediaQueryListEvent) => {
      if (event.matches) {
        const mobileNavigation = document.getElementById("mobile-navigation");
        const focusWasInsideMenu =
          document.activeElement instanceof HTMLElement &&
          (document.activeElement === menuButtonRef.current ||
            mobileNavigation?.contains(document.activeElement));

        setIsMenuOpen(false);

        if (focusWasInsideMenu) {
          window.requestAnimationFrame(() => {
            const focusTarget =
              document.querySelector<HTMLElement>(
                'nav[aria-label="Main navigation"] a[aria-current="page"]',
              ) ??
              document.querySelector<HTMLElement>(
                'a[aria-label="Aleksandar Todorovic, home"]',
              ) ??
              document.getElementById("page-heading");

            focusTarget?.focus();
          });
        }
      }
    };

    desktopQuery.addEventListener("change", handleDesktopViewport);

    return () => {
      desktopQuery.removeEventListener("change", handleDesktopViewport);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-[var(--header-height)] border-b border-[var(--line)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="content-frame flex h-full items-stretch justify-between md:grid md:grid-cols-[minmax(15rem,22rem)_minmax(1.5rem,1fr)_minmax(27rem,42rem)]">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="focus-ring group flex min-w-0 items-center pr-3 sm:pr-4 md:w-full md:justify-self-start md:pr-8"
          aria-label="Aleksandar Todorovic, home"
        >
          <span className="min-w-0">
            <span className="block whitespace-nowrap font-display text-[clamp(0.82rem,4vw,1rem)] font-bold tracking-[-0.015em] md:whitespace-normal md:text-[1.35rem] md:leading-[0.9] md:tracking-[-0.025em]">
              <span className="md:block">Aleksandar</span>{" "}
              <span className="md:block">Todorovic</span>
            </span>

            <span className="mt-0.5 hidden text-[0.68rem] text-[var(--paper-muted)] sm:block md:mt-2">
              Frontend developer
            </span>
          </span>
        </NavLink>

        <nav
          className="relative hidden h-full grid-cols-[minmax(0,1.18fr)_minmax(10rem,0.82fr)] grid-rows-2 border-l border-[var(--line)] before:pointer-events-none before:absolute before:inset-x-0 before:top-1/2 before:h-px before:bg-[var(--line)] md:col-start-3 md:grid"
          aria-label="Main navigation"
        >
          {desktopNavLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                desktopLinkClass(isActive)
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative w-fit transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 w-8 origin-left bg-[var(--violet)] transition-transform duration-200 ease-out motion-reduce:transition-none",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100",
                      )}
                    />
                  </span>

                  {link.to === "/contact" ? (
                    <span aria-hidden="true">→</span>
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            "focus-ring relative -mr-[var(--frame-gutter)] flex min-w-24 items-center justify-between gap-4 border-l border-[var(--line)] px-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors md:hidden",
            isMenuOpen
              ? "bg-[var(--violet-dark)] text-[var(--paper)]"
              : "bg-transparent text-[var(--paper)] hover:bg-[var(--ink-2)]",
          )}
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span>{isMenuOpen ? "Close" : "Menu"}</span>
          <span className="text-base" aria-hidden="true">
            {isMenuOpen ? "×" : "≡"}
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <motion.nav
          id="mobile-navigation"
          className="fixed inset-x-0 top-[var(--header-height)] z-40 h-[calc(100dvh-var(--header-height))] overflow-y-auto bg-[var(--paper)] text-[var(--ink)] md:hidden"
          aria-label="Mobile navigation"
          initial={
            shouldReduceMotion
              ? false
              : { clipPath: "inset(0 0 100% 0)" }
          }
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.22,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="content-frame flex min-h-full flex-col py-7">
              <div className="flex items-center justify-between gap-6 border-b border-[var(--ink)]/25 pb-4">
                <p className="text-sm font-semibold">Navigation</p>
                <p className="text-sm text-[var(--ink-2)]">
                  Aleksandar Todorovic
                </p>
              </div>

              <ul className="flex-1">
                {navLinks.map((link) => (
                  <li
                    key={link.to}
                    className="border-b border-[var(--ink)]/25"
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          "focus-ring group relative grid min-h-25 grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-5 pl-4",
                          isActive
                            ? "text-[var(--violet-dark)] before:absolute before:inset-y-5 before:left-0 before:w-1 before:bg-[var(--violet)]"
                            : "text-[var(--ink)] hover:text-[var(--violet-dark)]",
                        )
                      }
                    >
                      <span>
                        <span className="block font-display text-[clamp(2rem,9vw,3.5rem)] font-semibold leading-[0.96] tracking-[-0.035em]">
                          {link.label}
                        </span>
                        <span className="mt-1.5 block text-sm text-current">
                          {link.note}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-2xl transition-transform group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0"
                      >
                        →
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="grid gap-4 border-t border-[var(--ink)]/25 pt-5 text-sm sm:grid-cols-2 sm:items-center">
                <p className="text-[var(--ink-2)]">
                  Frontend developer based in Kragujevac, Serbia.
                </p>
                <a
                  href="mailto:aleksandar.todorovic.rs@gmail.com"
                  onClick={closeMenu}
                  className="focus-ring justify-self-start font-semibold text-[var(--violet-dark)] underline decoration-[var(--violet)] underline-offset-4 sm:justify-self-end"
                >
                  Send an email
                </a>
              </div>
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}
