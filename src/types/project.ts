export type ProjectSlug = "liferecompiled" | "training-app" | "taskflow";

export type ProjectCategory =
  | "firebase-engineering"
  | "product-mvp"
  | "typescript-ui";

export type ProjectLinkType = "live" | "github";

export type ProjectLink = {
  type: ProjectLinkType;
  label: string;
  href: string;
};

export type Project = {
  slug: ProjectSlug;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  proofLabel: string;
  proofSummary: string;
  keyDecision: string;
  tradeoff: string;
  techStack: string[];
  links: ProjectLink[];
};
