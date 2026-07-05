import { useState } from "react";
import { NavLink } from "react-router";

import { cn } from "../../utils/cn";

type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

const navLinks: NavItem[] = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function getNavLinkClass(isActive: boolean, variant: "desktop" | "mobile") {
  return cn(
    "font-medium transition",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B]",
    variant === "desktop"
      ? "rounded-full px-4 py-2 text-sm"
      : "rounded-2xl px-4 py-3 text-base",
    isActive
      ? "bg-[#211B31] text-[#F5F2FF]"
      : "text-[#A9A1BA] hover:bg-[#11101A] hover:text-[#F5F2FF]",
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[#2B2340]/70 bg-[#07060B]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-6 sm:py-4">
        <NavLink
          to="/"
          onClick={closeMenu}
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-[#8B5CF6]/40 bg-[#181423] text-sm font-bold text-[#C4B5FD] shadow-[0_0_24px_rgba(139,92,246,0.18)] sm:size-9">
            AT
          </span>

          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-sm font-semibold text-[#F5F2FF]">
              Aleksandar Todorovic
            </span>
            <span className="truncate text-xs text-[#A9A1BA]">
              React · TypeScript · Firebase
            </span>
          </span>
        </NavLink>

        <button
          type="button"
          className="inline-flex shrink-0 items-center justify-center rounded-full border border-[#2B2340] bg-[#11101A] px-3.5 py-2 text-sm font-medium text-[#F5F2FF] transition hover:border-[#8B5CF6]/70 hover:bg-[#181423] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B] md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => getNavLinkClass(isActive, "desktop")}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {isMenuOpen ? (
        <nav
          id="mobile-navigation"
          className="border-t border-[#2B2340]/70 px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto grid max-w-6xl gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={closeMenu}
                className={({ isActive }) =>
                  getNavLinkClass(isActive, "mobile")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
