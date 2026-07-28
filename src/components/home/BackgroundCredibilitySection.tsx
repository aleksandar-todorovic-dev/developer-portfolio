import { backgroundCredibilityItems } from "../../data/backgroundCredibility";

export function BackgroundCredibilitySection() {
  return (
    <section className="full-bleed relative overflow-hidden bg-[var(--paper)] py-20 text-[var(--ink)] sm:py-28">
      <p
        aria-hidden="true"
        className="absolute -right-[0.06em] top-2 font-display text-[clamp(8rem,26vw,24rem)] font-extrabold leading-none tracking-[-0.09em] text-black/[0.045]"
      >
        BEFORE
      </p>

      <div className="content-frame relative">
        <div className="grid gap-9 lg:grid-cols-[11rem_minmax(0,1fr)]">
          <p className="signal-label text-[var(--violet-dark)]">
            06 / Background
          </p>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(3.2rem,7vw,7.2rem)] font-semibold leading-[0.86] tracking-[-0.065em]">
              THE WAY I WORK
              <span className="block text-[var(--violet)]">
                STARTED BEFORE CODE.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Responsibility, troubleshooting and independent project work now
              meet in the same practical engineering approach.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t-2 border-black">
          {backgroundCredibilityItems.map((item, index) => (
            <article
              key={item.label}
              className="grid gap-5 border-b border-black/30 py-7 sm:py-9 lg:grid-cols-[8rem_minmax(15rem,0.8fr)_minmax(0,1.25fr)] lg:gap-10"
            >
              <p className="font-mono text-xs font-semibold">
                {String(index + 1).padStart(2, "0")} / {item.label}
              </p>

              <h3 className="font-display text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                {item.title}
              </h3>

              <p className="max-w-3xl leading-7 text-black/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
