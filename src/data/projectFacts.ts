import type { ProjectSlug } from "../types/project";

export type ProjectFacts = {
  role: string;
  scope: string;
  decision: string;
  constraint: string;
  status: string;
};

export const projectFacts: Record<ProjectSlug, ProjectFacts> = {
  liferecompiled: {
    role: "Engineering depth",
    scope: "React frontend + Firebase implementation",
    decision: "Cloud Functions own higher-risk operations.",
    constraint:
      "Some lower-risk MVP policies still rely partly on client-side enforcement and would need stricter backend rules for a production release.",
    status: "Deployed engineering case study",
  },
  "training-app": {
    role: "Product thinking",
    scope: "Product, mobile UX + React implementation",
    decision: "Training order continues independently of the calendar week.",
    constraint: "Progress belongs to one browser, without cloud sync.",
    status: "Deployed local-first MVP",
  },
  taskflow: {
    role: "TypeScript UI",
    scope: "Course-based project, completed and independently refined",
    decision: "Typed nested state with immutable reorder helpers.",
    constraint: "Single-user local persistence; no shared boards.",
    status: "Deployed portfolio project",
  },
};
