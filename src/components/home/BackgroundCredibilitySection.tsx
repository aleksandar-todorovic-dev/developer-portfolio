import { SectionHeader } from "../ui/SectionHeader";
import { backgroundCredibilityItems } from "../../data/backgroundCredibility";

export function BackgroundCredibilitySection() {
  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="Professional background"
        title="The way I work did not start with code."
        description="Previous responsibility, troubleshooting experience, and independent project work shape how I approach technical problems today."
      />

      <div className="mt-10 border-y border-[#2B2340]">
        {backgroundCredibilityItems.map((item, index) => (
          <article
            key={item.label}
            className="grid gap-4 border-b border-[#2B2340] py-7 last:border-b-0 md:grid-cols-[120px_1fr_1.5fr] md:gap-8"
          >
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#8B849A]">
              {String(index + 1).padStart(2, "0")} / {item.label}
            </p>

            <h3 className="text-lg font-semibold text-[#F5F2FF]">
              {item.title}
            </h3>

            <p className="leading-7 text-[#A9A1BA]">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
