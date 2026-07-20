type TechStackListProps = {
  technologies: string[];
};

export function TechStackList({ technologies }: TechStackListProps) {
  return (
    <section
      aria-labelledby="technology-heading"
      className="border-t border-[#2B2340] pt-8"
    >
      <div className="grid gap-6 md:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Stack
          </p>

          <h2
            id="technology-heading"
            className="mt-3 text-xl font-semibold text-[#F5F2FF]"
          >
            Technology used
          </h2>
        </div>

        <ul className="flex flex-wrap content-start gap-3">
          {technologies.map((technology, index) => (
            <li
              key={technology}
              className="flex items-center gap-3 border-b border-[#2B2340] px-1 py-3 text-[#D8D2E8]"
            >
              <span className="font-mono text-xs text-[#5F5870]">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="font-medium">{technology}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
