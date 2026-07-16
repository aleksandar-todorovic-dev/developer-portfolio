import type { CaseStudySection as CaseStudySectionData } from "../../types/project";

type CaseStudySectionProps = {
  section: CaseStudySectionData;
};

export function CaseStudySection({ section }: CaseStudySectionProps) {
  return (
    <section id={section.id} className="border-t border-[#2B2340] py-10">
      <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8B849A]">
        {section.type.replace("-", " ")}
      </p>

      <h2 className="mt-3 text-2xl font-semibold text-[#F5F2FF]">
        {section.title}
      </h2>

      <div className="mt-5 space-y-4">
        {section.paragraphs.map((paragraph) => (
          <p key={paragraph} className="max-w-3xl leading-7 text-[#A9A1BA]">
            {paragraph}
          </p>
        ))}
      </div>

      {section.bullets && (
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {section.bullets.map((bullet) => (
            <li
              key={bullet}
              className="border-l border-[#8B5CF6] pl-4 leading-7 text-[#D8D2E8]"
            >
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
