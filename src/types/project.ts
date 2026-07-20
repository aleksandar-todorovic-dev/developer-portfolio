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

export type ProjectEvidence = {
  label: string;
  detail: string;
};

export type CaseStudySectionType =
  | "overview"
  | "role-scope"
  | "decision"
  | "implementation"
  | "architecture"
  | "product-flow"
  | "tradeoff"
  | "validation"
  | "learning"
  | "future";

export type CaseStudySection = {
  id: string;
  type: CaseStudySectionType;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ProjectScreenshotFormat = "desktop" | "mobile";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
  caption: string;
  format: ProjectScreenshotFormat;
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
  evidence: ProjectEvidence[];
  screenshots: ProjectScreenshot[];
  links: ProjectLink[];
  caseStudySections: CaseStudySection[];
};
