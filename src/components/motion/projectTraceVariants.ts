import type { ProjectSlug } from "../../types/project";

import type { ProjectTraceVariant } from "./TracePath";

export const projectTraceVariants = {
  liferecompiled: "branch",
  "training-app": "cycle",
  taskflow: "transition",
} satisfies Record<ProjectSlug, ProjectTraceVariant>;
