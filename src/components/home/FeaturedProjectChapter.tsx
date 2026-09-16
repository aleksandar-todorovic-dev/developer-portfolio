import { useReducedMotion } from "motion/react";

import type { Project } from "../../types/project";
import { LifeRecompiledScene } from "./LifeRecompiledScene";
import { TrainingAppScene } from "./TrainingAppScene";
import { TaskFlowScene } from "./TaskFlowScene";

type FeaturedProjectChapterProps = {
  project: Project;
  index: number;
};

export function FeaturedProjectChapter({
  project,
  index,
}: FeaturedProjectChapterProps) {
  const shouldReduceMotion = useReducedMotion();

  if (project.slug === "liferecompiled") {
    return (
      <LifeRecompiledScene
        project={project}
        index={index}
        shouldReduceMotion={Boolean(shouldReduceMotion)}
      />
    );
  }

  if (project.slug === "training-app") {
    return (
      <TrainingAppScene
        project={project}
        index={index}
        shouldReduceMotion={Boolean(shouldReduceMotion)}
      />
    );
  }

  return <TaskFlowScene project={project} />;
}
