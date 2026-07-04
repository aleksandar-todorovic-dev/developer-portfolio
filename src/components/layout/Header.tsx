import { NavLink } from "react-router";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2B2340]/70 bg-[#07060B]/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-xl border border-[#8B5CF6]/40 bg-[#181423] text-sm font-bold text-[#C4B5FD] shadow-[0_0_24px_rgba(139,92,246,0.18)]">
            AT
          </span>

          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-[#F5F2FF]">
              Aleksandar Todorovic
            </span>
            <span className="text-xs text-[#A9A1BA]">
              React · TypeScript · Firebase
            </span>
          </span>
        </NavLink>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                [
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#07060B]",
                  isActive
                    ? "bg-[#211B31] text-[#F5F2FF]"
                    : "text-[#A9A1BA] hover:bg-[#11101A] hover:text-[#F5F2FF]",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
