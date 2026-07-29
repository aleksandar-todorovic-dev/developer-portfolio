import { motion, useReducedMotion } from "motion/react";

export type ProjectTraceVariant = "branch" | "cycle" | "transition";

type TraceVariant =
  | "clarity"
  | "process"
  | "complete"
  | ProjectTraceVariant;

type TracePathProps = {
  variant: TraceVariant;
  className?: string;
};

type TraceDefinition = {
  paths: string[];
  nodes: Array<{
    cx: number;
    cy: number;
    resolved?: boolean;
  }>;
};

const traceDefinitions: Record<TraceVariant, TraceDefinition> = {
  clarity: {
    paths: [
      "M18 116H154",
      "M154 116C190 116 194 50 236 50H382C424 50 428 116 466 116",
      "M154 116C190 116 194 148 236 148H382C424 148 428 116 466 116",
      "M466 116H582",
    ],
    nodes: [
      { cx: 18, cy: 116 },
      { cx: 154, cy: 116 },
      { cx: 466, cy: 116 },
      { cx: 582, cy: 116, resolved: true },
    ],
  },
  branch: {
    paths: [
      "M18 82H144V30H300",
      "M144 82V134H300",
      "M300 30H430V82H582",
      "M300 134H430V82",
    ],
    nodes: [
      { cx: 18, cy: 82 },
      { cx: 144, cy: 82 },
      { cx: 300, cy: 30 },
      { cx: 300, cy: 134 },
      { cx: 430, cy: 82 },
      { cx: 582, cy: 82, resolved: true },
    ],
  },
  cycle: {
    paths: [
      "M116 82C116 30 158 18 208 18H366C416 18 458 48 458 82C458 116 416 146 366 146H208C158 146 116 134 116 82Z",
      "M18 82H116",
      "M458 82H582",
    ],
    nodes: [
      { cx: 18, cy: 82 },
      { cx: 116, cy: 82 },
      { cx: 286, cy: 18 },
      { cx: 458, cy: 82 },
      { cx: 286, cy: 146 },
      { cx: 582, cy: 82, resolved: true },
    ],
  },
  transition: {
    paths: [
      "M18 126H130V38H264V126H398V38H536V82H582",
      "M130 38H194",
      "M398 126H470",
    ],
    nodes: [
      { cx: 18, cy: 126 },
      { cx: 130, cy: 38 },
      { cx: 264, cy: 126 },
      { cx: 398, cy: 38 },
      { cx: 536, cy: 82 },
      { cx: 582, cy: 82, resolved: true },
    ],
  },
  process: {
    paths: ["M18 82H160H304H448H582"],
    nodes: [
      { cx: 18, cy: 82 },
      { cx: 160, cy: 82 },
      { cx: 304, cy: 82 },
      { cx: 448, cy: 82 },
      { cx: 582, cy: 82, resolved: true },
    ],
  },
  complete: {
    paths: ["M18 82H504C548 82 548 38 582 38"],
    nodes: [
      { cx: 18, cy: 82 },
      { cx: 504, cy: 82 },
      { cx: 582, cy: 38, resolved: true },
    ],
  },
};

export function TracePath({
  variant,
  className = "",
}: TracePathProps) {
  const shouldReduceMotion = useReducedMotion();
  const definition = traceDefinitions[variant];

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 164"
      preserveAspectRatio="none"
      className={`block w-full overflow-visible ${className}`}
    >
      {definition.paths.map((path) => (
        <path
          key={`guide-${path}`}
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
          opacity="0.18"
        />
      ))}

      {definition.paths.map((path, index) => (
        <motion.path
          key={path}
          d={path}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          initial={shouldReduceMotion ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.72,
            delay: shouldReduceMotion ? 0 : index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {definition.nodes.map((node, index) => (
        <motion.path
          key={`${node.cx}-${node.cy}`}
          d={`M${node.cx} ${node.cy - (node.resolved ? 7 : 5)}V${
            node.cy + (node.resolved ? 7 : 5)
          }`}
          fill="none"
          stroke={node.resolved ? "var(--signal)" : "currentColor"}
          strokeWidth={node.resolved ? 4 : 2}
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                }
          }
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.22,
            delay: shouldReduceMotion ? 0 : 0.2 + index * 0.09,
          }}
        />
      ))}
    </svg>
  );
}
