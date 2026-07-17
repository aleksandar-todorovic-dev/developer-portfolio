type ProjectHeroProps = {
  proofLabel: string;
  title: string;
  shortDescription: string;
};

export function ProjectHero({
  proofLabel,
  title,
  shortDescription,
}: ProjectHeroProps) {
  return (
    <header>
      <p className="mt-8 text-sm font-medium uppercase tracking-[0.3em] text-[#C4B5FD]">
        {proofLabel}
      </p>

      <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
        {title}
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-[#A9A1BA]">
        {shortDescription}
      </p>
    </header>
  );
}
