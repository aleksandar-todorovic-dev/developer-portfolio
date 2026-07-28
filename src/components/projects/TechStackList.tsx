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
          Trace / stack
        </p>

        <h2
          id="technology-heading"
          className="font-display mt-4 text-3xl leading-none font-semibold tracking-[-0.045em] text-[var(--paper)]"
        >
          Technologies used
        </h2>
      </div>

      <ul className="grid border-l border-t border-[var(--line)] sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology, index) => (
          <li
            key={technology}
            className="group relative min-h-28 border-b border-r border-[var(--line)] p-5 transition-colors duration-200 hover:bg-[var(--violet)]"
          >
            <span className="font-mono text-[0.64rem] text-[var(--paper-muted)] transition-colors group-hover:text-[var(--paper)]">
              NODE—{String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-display mt-6 block text-xl font-semibold tracking-[-0.035em] text-[var(--paper)]">
              {technology}
            </span>

            <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 size-2 bg-[var(--violet)] transition-colors group-hover:bg-[var(--signal)]"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
