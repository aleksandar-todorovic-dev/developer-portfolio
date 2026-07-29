type TechStackListProps = {
  technologies: string[];
};

export function TechStackList({ technologies }: TechStackListProps) {
  return (
    <div aria-labelledby="technology-heading">
      <h3
        id="technology-heading"
        className="font-mono text-[0.62rem] uppercase tracking-[0.11em] text-[var(--ink)]/65"
      >
        Technology scope
      </h3>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
        {technologies.map((technology) => (
          <li key={technology} className="text-sm font-semibold">
            {technology}
          </li>
        ))}
      </ul>
    </div>
  );
}
