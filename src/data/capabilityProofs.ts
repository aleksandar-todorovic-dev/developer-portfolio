import type { CapabilityProof } from "../types/capabilityProof";

export const capabilityProofs: CapabilityProof[] = [
  {
    title: "Product thinking",
    description:
      "Translating real training rules into a clear product flow with controlled flexibility, honest partial completion, and deliberate MVP scope.",
    projectSlugs: ["training-app"],
  },
  {
    title: "Firebase engineering",
    description:
      "Building authentication, Firestore data models, Cloud Functions, access boundaries, aggregate maintenance, and deletion lifecycles.",
    projectSlugs: ["liferecompiled"],
  },
  {
    title: "TypeScript in React",
    description:
      "Using typed props, Context contracts, generic hooks, reusable helpers, events, refs, and explicit board data models.",
    projectSlugs: ["taskflow"],
  },
  {
    title: "State and persistence",
    description:
      "Managing structured application state, immutable updates, browser persistence, and continuity across user sessions.",
    projectSlugs: ["training-app", "taskflow"],
  },
  {
    title: "Resilient product flows",
    description:
      "Handling missing data, partial completion, optimistic updates, rollback behavior, and practical user-facing edge cases.",
    projectSlugs: ["liferecompiled", "training-app"],
  },
  {
    title: "Responsive interface work",
    description:
      "Building mobile-first and responsive interfaces around real application workflows rather than isolated visual components.",
    projectSlugs: ["liferecompiled", "training-app", "taskflow"],
  },
];
