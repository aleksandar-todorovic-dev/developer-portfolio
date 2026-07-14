import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "liferecompiled",
    title: "LifeRecompiled",
    shortDescription:
      "A production-style React and Firebase engineering case study built around a community app surface.",
    category: "firebase-engineering",
    proofLabel: "Firebase engineering",
    proofSummary:
      "Demonstrates authentication, Firestore data modeling, Cloud Functions, protected routes, resilient UX flows, and honest backend tradeoffs.",
    keyDecision:
      "Used Cloud Functions for higher-risk operations such as aggregate maintenance, privileged deletion, and scheduled cleanup.",
    tradeoff:
      "Some MVP policies still remain UI-level and would need stricter backend enforcement before a real production release.",
    techStack: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Cloud Functions",
      "Tailwind CSS",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://liferecompiled.com",
      },
    ],
  },
  {
    slug: "training-app",
    title: "Training App",
    shortDescription:
      "A mobile-first local-first React MVP for structured workout cycles and guided exercise logging.",
    category: "product-mvp",
    proofLabel: "Product-focused MVP",
    proofSummary:
      "Demonstrates product thinking, guided user flows, runtime state modeling, local persistence, and controlled MVP scope.",
    keyDecision:
      "Kept the first version local-first by using Context, reducer state, and localStorage instead of introducing backend scope.",
    tradeoff:
      "The local-first model keeps the MVP focused, but it does not provide user accounts or cloud synchronization.",
    techStack: [
      "React",
      "React Router",
      "Context",
      "Reducer",
      "Tailwind CSS",
      "localStorage",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://training-app-mvp.web.app",
      },
    ],
  },
  {
    slug: "taskflow",
    title: "TaskFlow",
    shortDescription:
      "A polished React and TypeScript Kanban board with drag-and-drop interactions and local persistence.",
    category: "typescript-ui",
    proofLabel: "TypeScript UI",
    proofSummary:
      "Demonstrates typed React components, Context typing, generic hooks, immutable nested state updates, and drag-and-drop UI.",
    keyDecision:
      "Used a typed board data model, reusable reorder helpers, and a generic localStorage hook to keep state updates understandable.",
    tradeoff:
      "LocalStorage persistence fits the project scope, but the app is not designed for shared real-time collaboration.",
    techStack: [
      "React",
      "TypeScript",
      "Context API",
      "styled-components",
      "localStorage",
    ],
    links: [
      {
        type: "live",
        label: "Live project",
        href: "https://taskflow-kanban-kappa.vercel.app",
      },
    ],
  },
];
