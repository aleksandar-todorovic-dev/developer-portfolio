import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { NavLink } from "react-router";

import { cn } from "../../utils/cn";

type NavItem = {
  to: string;
  label: string;
  index: string;
  note: string;
  end?: boolean;
};

const navLinks: NavItem[] = [
  {
    to: "/",
    label: "Home",
    index: "01",
    note: "Current signal",
    end: true,
  },
  {
    to: "/projects",
    label: "Projects",
    index: "02",
    note: "Three case studies",
  },
  {
    to: "/about",
    label: "About",
    index: "03",
    note: "Direction + method",
  },
  {
    to: "/contact",
    label: "Contact",
    index: "04",
    note: "Start a conversation",
  },
];

function desktopLinkClass(isActive: boolean) {
  return cn(
    "group relative flex min-h-12 items-center gap-2 border-l border-[var(--line)] px-4 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.12em] transition-colors last:border-r",
    isActive
      ? "bg-[var(--paper)] text-[var(--ink)]"
      : "text-[var(--paper-muted)] hover:bg-[var(--ink-2)] hover:text-[var(--paper)]",
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
            document
              .querySelector<HTMLElement>(
                'nav[aria-label="Main navigation"] a[aria-current="page"]',
              )
              ?.focus();
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
      <div className="content-frame flex h-full items-stretch justify-between">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="focus-ring group flex min-w-0 items-center gap-3 pr-4"
          aria-label="Aleksandar Todorovic, home"
        >
          <span className="grid size-10 shrink-0 grid-cols-2 overflow-hidden border border-[var(--line-strong)] font-display text-[0.72rem] font-extrabold leading-none">
            <span className="flex items-center justify-center bg-[var(--paper)] text-[var(--ink)]">
              A
            </span>
            <span className="flex items-center justify-center bg-[var(--violet)] text-white">
              T
            </span>
          </span>

          <span className="min-w-0">
            <span className="block truncate font-display text-sm font-bold tracking-[-0.02em] sm:text-base">
              Aleksandar Todorovic
            </span>

            <span className="mt-0.5 hidden items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-[var(--paper-muted)] sm:flex">
              <span className="size-1.5 bg-[var(--signal)]" aria-hidden="true" />
              Frontend / Serbia
            </span>
          </span>
        </NavLink>

        <nav
          className="hidden items-stretch md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => desktopLinkClass(isActive)}
            >
              <span className="text-[0.58rem]">{link.index}</span>
              <span>{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            "focus-ring relative -mr-[var(--frame-gutter)] flex min-w-24 items-center justify-between gap-4 border-l border-[var(--line)] px-4 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.12em] transition-colors md:hidden",
            isMenuOpen
              ? "bg-[var(--signal)] text-[var(--ink)]"
              : "bg-[var(--violet)] text-white hover:bg-[var(--violet-dark)]",
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

      <AnimatePresence initial={false}>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="fixed inset-x-0 top-[var(--header-height)] z-40 h-[calc(100dvh-var(--header-height))] overflow-y-auto bg-[var(--violet)] text-white md:hidden"
            aria-label="Mobile navigation"
            initial={
              shouldReduceMotion
                ? false
                : { clipPath: "inset(0 0 100% 0)" }
            }
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { clipPath: "inset(0 0 100% 0)" }
            }
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.42,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="content-frame flex min-h-full flex-col py-7">
              <div className="flex items-center justify-between border-b border-white/40 pb-4">
                <p className="signal-label">Site index / 04 routes</p>
                <p className="signal-label">Trace active</p>
              </div>

              <ol className="flex-1">
                {navLinks.map((link) => (
                  <li key={link.to} className="border-b border-white/35">
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        cn(
                          "focus-ring group grid min-h-25 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 py-4",
                          isActive ? "text-[var(--signal)]" : "text-white",
                        )
                      }
                    >
                      <span className="font-mono text-[0.7rem]">
                        {link.index}
                      </span>

                      <span>
                        <span className="block font-display text-[clamp(2rem,10vw,4rem)] font-semibold leading-none tracking-[-0.055em]">
                          {link.label}
                        </span>
                        <span className="mt-1 block font-mono text-[0.6rem] uppercase tracking-[0.12em]">
                          {link.note}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-2xl transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </NavLink>
                  </li>
                ))}
              </ol>

              <div className="grid gap-3 border-t border-white/40 pt-5 font-mono text-[0.62rem] uppercase tracking-[0.12em] sm:grid-cols-2">
                <p>React · TypeScript · Firebase</p>
                <p className="sm:text-right">Kragujevac, Serbia / 2026</p>
              </div>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
