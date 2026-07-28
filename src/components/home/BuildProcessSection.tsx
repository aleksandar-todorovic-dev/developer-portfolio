import { buildSteps } from "../../data/buildSteps";
import { SignalLine } from "../motion/SignalLine";

export function BuildProcessSection() {
  return (
    <section className="full-bleed bg-[var(--violet)] py-20 text-white sm:py-28">
      <div className="content-frame">
        <div className="grid gap-9 lg:grid-cols-[11rem_minmax(0,1fr)]">
          <div>
            <p className="signal-label text-[var(--signal)]">
              05 / Execution path
            </p>
            <p className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.11em] text-white">
              Input → state → tradeoff → result
            </p>
          </div>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              THE WORK MOVES
              <span className="block text-[var(--signal)]">
                THROUGH DECISIONS.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
              The projects are different, but the decision process behind them
              follows the same controlled sequence.
            </p>
          </div>
        </div>

        <SignalLine className="mt-12 bg-white" />

        <ol className="grid border-l border-white/35 md:grid-cols-2 xl:grid-cols-4">
          {buildSteps.map((step, index) => (
            <li
              key={step.number}
              className="group relative min-h-80 border-b border-r border-white/35 p-6 sm:p-8 xl:border-b-0"
            >
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 size-4 translate-x-1/2 -translate-y-1/2 bg-[var(--signal)]"
              />

              <p
                aria-hidden="true"
                className="font-display text-7xl font-extrabold leading-none text-white/20 transition-colors group-hover:text-[var(--signal)] sm:text-8xl"
              >
                {step.number}
              </p>

              <p className="signal-label mt-8 text-white">
                State {String(index + 1).padStart(2, "0")} / 04
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold leading-tight tracking-[-0.035em]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
