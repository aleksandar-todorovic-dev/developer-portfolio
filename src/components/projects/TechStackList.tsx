type TechStackListProps = {
  technologies: string[];
};

export function TechStackList({ technologies }: TechStackListProps) {
  return (
    <section
      aria-labelledby="technology-heading"
      className="grid gap-8 border-t border-[var(--line-strong)] pt-8 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12"
    >
      <div>
        <p className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-[var(--paper-muted)]">
          Technology
        </p>

        <h2
          id="technology-heading"
          className="font-display mt-4 text-3xl leading-none font-semibold tracking-[-0.045em] text-[var(--paper)]"
        >
          Technologies used
        </h2>
      </div>

      <ul className="grid border-l border-t border-[var(--line)] sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="group flex min-h-24 items-end border-b border-r border-[var(--line)] p-5 transition-colors duration-200 hover:bg-[var(--ink-2)]"
          >
            <span className="font-display text-xl font-semibold tracking-[-0.035em] text-[var(--paper)]">
              {technology}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
