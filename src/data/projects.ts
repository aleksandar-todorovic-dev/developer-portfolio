import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    slug: "liferecompiled",
    title: "LifeRecompiled",
    shortDescription:
      "A production-style React and Firebase engineering case study built around a community/blog app surface.",
    category: "firebase-engineering",
    proofLabel: "Firebase engineering",
    proofSummary:
      "Demonstrates authentication, Firestore data modeling, Cloud Functions, protected routes, resilient UX flows, and honest backend tradeoffs.",
    keyDecision:
      "Used Cloud Functions for higher-risk operations such as aggregate maintenance, privileged deletion, and scheduled cleanup.",
    tradeoff:
      "Some MVP policies still remain UI-level and would need stricter backend enforcement before a real production release.",
    evidence: [
      {
        label: "Backend correctness",
        detail:
          "Cloud Functions maintain reaction aggregates, privileged deletion flows, and scheduled cleanup.",
      },
      {
        label: "Resilient saved posts",
        detail:
          "Snapshot metadata, ghost cards, and Undo behavior keep saved content useful when source posts change.",
      },
    ],
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
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/liferecompiled",
      },
    ],
  },
  {
    slug: "training-app",
    title: "Training App",
    shortDescription:
      "A mobile-first structured training system that combines guided workout execution with stable cycle continuity.",
    category: "product-mvp",
    proofLabel: "Product-focused MVP",
    proofSummary:
      "Demonstrates product thinking through information hierarchy, guided execution, controlled flexibility, honest partial-completion modeling, and deliberate MVP scope.",
    keyDecision:
      "Designed the product around two connected values: clarity during the workout and continuity across the cycle, using a stable training order instead of a rigid calendar-based schedule.",
    tradeoff:
      "Local-first persistence keeps the MVP focused and usable, but progress remains browser-specific without accounts or cloud synchronization.",
    evidence: [
      {
        label: "Clarity during the workout",
        detail:
          "Action-first screens combine exercise order, set targets, RIR, tempo, rest, progression guidance, contextual cues, logging, previous values, and the next meaningful step.",
      },
      {
        label: "Continuity across the cycle",
        detail:
          "A stable D1-D6 order inside a flexible 9-day rhythm, partial-day support, and previous-value carry-over preserve progress when real-life schedules change.",
      },
    ],
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
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/training-app",
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
      "Used a typed board data model, immutable update helpers, and a generic localStorage hook to keep nested state changes understandable.",
    tradeoff:
      "Local-first persistence fits the project scope, but the app is not designed for shared real-time collaboration.",
    evidence: [
      {
        label: "Typed state model",
        detail:
          "Typed props, Context values, events, refs, and board data keep component and state contracts explicit.",
      },
      {
        label: "Reusable state helpers",
        detail:
          "A generic reorder helper and immutable update functions handle column and card drag-and-drop behavior.",
      },
    ],
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
      {
        type: "github",
        label: "GitHub repository",
        href: "https://github.com/aleksandar-todorovic-dev/taskflow-kanban",
      },
    ],
  },
];
