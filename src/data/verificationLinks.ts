import type { VerificationLink } from "../types/verificationLink";

export const verificationLinks: VerificationLink[] = [
  {
    label: "Case studies",
    description:
      "Review the projects, implementation decisions, limitations and honest tradeoffs.",
    href: "/projects",
  },
  {
    label: "GitHub",
    description:
      "Inspect the repositories, source code, documentation, and development history.",
    href: "https://github.com/aleksandar-todorovic-dev",
    external: true,
  },
  {
    label: "LinkedIn",
    description:
      "View my professional background, current focus, and work availability.",
    href: "https://www.linkedin.com/in/aleksandar-todorovic-dev",
    external: true,
  },
  {
    label: "Email",
    description:
      "Contact me directly about a role, project, trial task or clearly defined web task.",
    href: "mailto:aleksandar.todorovic.rs@gmail.com",
  },
  {
    label: "Download CV",
    description:
      "Download a concise overview of my experience, projects, and technical focus.",
    href: "/Aleksandar_Todorovic_CV.pdf",
    download: true,
  },
];
