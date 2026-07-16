import type { ProjectSlug } from "./project";

export type CapabilityProof = {
  title: string;
  description: string;
  projectSlugs: ProjectSlug[];
};
