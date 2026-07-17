type TechStackListProps = {
  technologies: string[];
};

export function TechStackList({ technologies }: TechStackListProps) {
  return (
    <article className="rounded-2xl border border-[#2B2340] bg-[#11101A] p-6">
      <h2 className="text-lg font-semibold">Technology</h2>

      <ul className="mt-3 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="rounded-full border border-[#2B2340] px-3 py-1 text-sm text-[#C4B5FD]"
          >
            {technology}
          </li>
        ))}
      </ul>
    </article>
  );
}
