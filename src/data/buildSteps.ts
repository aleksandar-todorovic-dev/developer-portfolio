export type BuildStep = {
  number: string;
  title: string;
  description: string;
};

export const buildSteps: BuildStep[] = [
  {
    number: "01",
    title: "Define the real goal",
    description:
      "I first clarify what the project needs to achieve, who it serves, and what belongs inside the first version.",
  },
  {
    number: "02",
    title: "Model the important state",
    description:
      "I separate static content from changing user data and define clear types, state shapes, and update rules.",
  },
  {
    number: "03",
    title: "Choose honest tradeoffs",
    description:
      "I keep the first version focused, document limitations, and avoid adding backend or architectural complexity without a clear reason.",
  },
  {
    number: "04",
    title: "Test, refine and deliver",
    description:
      "I check responsive behavior, lint, build, routes, edge cases, deployment, and the clarity of the final presentation.",
  },
];
