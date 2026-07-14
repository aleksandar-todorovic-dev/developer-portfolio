import { SectionHeader } from "../ui";
import { buildSteps } from "../../data/buildSteps";

export function BuildProcessSection() {
  return (
    <section className="mt-24">
      <SectionHeader
        eyebrow="How I build"
        title="A practical path from project idea to verifiable result."
        description="The projects are different, but the decision process behind them follows the same core pattern."
      />

      <ol className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-[#2B2340] bg-[#2B2340] md:grid-cols-2">
        {buildSteps.map((step) => (
          <li key={step.number} className="bg-[#11101A] p-6 sm:p-8">
            <p className="text-sm font-medium text-[#C4B5FD]">{step.number}</p>

            <h3 className="mt-5 text-xl font-semibold text-[#F5F2FF]">
              {step.title}
            </h3>

            <p className="mt-3 leading-7 text-[#A9A1BA]">{step.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
