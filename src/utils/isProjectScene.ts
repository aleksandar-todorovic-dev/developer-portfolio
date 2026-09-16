import type { CaseStudySection, Project } from "../types/project";

export function isProjectScene(project: Project, section: CaseStudySection) {
  const scenes = {
    liferecompiled: ["reaction-correctness", "resilient-saved-posts"],
    "training-app": ["guided-workout-flow", "core-product-decision"],
    taskflow: ["drag-and-drop-state-updates", "typed-board-architecture"],
  };
  return scenes[project.slug].includes(section.id);
}
