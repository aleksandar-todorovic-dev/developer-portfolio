import type { ProjectScreenshot } from "../../types/project";

type ProjectVisualEvidenceProps = {
  screenshots: ProjectScreenshot[];
};

export function ProjectVisualEvidence({
  screenshots,
}: ProjectVisualEvidenceProps) {
  if (screenshots.length === 0) {
    return null;
  }

  const [featuredScreenshot, ...supportingScreenshots] = screenshots;

  return (
    <section
      aria-labelledby="visual-evidence-heading"
      className="mt-14 border-t border-[#2B2340] pt-10"
    >
      <div className="grid gap-8 lg:grid-cols-[180px_minmax(0,1fr)]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#8B849A]">
            Visual evidence
          </p>

          <h2
            id="visual-evidence-heading"
            className="mt-3 text-xl font-semibold text-[#F5F2FF]"
          >
            Product surfaces
          </h2>

          <p className="mt-4 text-sm leading-6 text-[#A9A1BA]">
            Real interface evidence selected to support the project’s main
            proof.
          </p>
        </div>

        <div className="space-y-8">
          <figure className="overflow-hidden border border-[#2B2340] bg-[#11101A]">
            <div className="mx-auto max-w-md overflow-hidden border-x border-[#2B2340]">
              <img
                src={featuredScreenshot.src}
                alt={featuredScreenshot.alt}
                className="aspect-9/14 w-full object-cover object-top"
              />
            </div>

            <figcaption className="border-t border-[#2B2340] px-6 py-5 text-sm leading-6 text-[#A9A1BA]">
              {featuredScreenshot.caption}
            </figcaption>
          </figure>

          {supportingScreenshots.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">
              {supportingScreenshots.map((screenshot) => (
                <figure
                  key={screenshot.src}
                  className="overflow-hidden border border-[#2B2340] bg-[#11101A]"
                >
                  <div className="overflow-hidden">
                    <img
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="aspect-9/12 w-full object-cover object-top"
                    />
                  </div>

                  <figcaption className="border-t border-[#2B2340] px-5 py-4 text-sm leading-6 text-[#A9A1BA]">
                    {screenshot.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
