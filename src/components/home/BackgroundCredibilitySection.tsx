import { backgroundCredibilityItems } from "../../data/backgroundCredibility";

export function BackgroundCredibilitySection() {
  return (
    <section className="full-bleed bg-[var(--paper-deep)] py-20 text-[var(--ink)] sm:py-28">
      <div className="content-frame">
        <div className="grid gap-9 lg:grid-cols-[13rem_minmax(0,1fr)]">
          <p className="font-mono text-[0.68rem] uppercase tracking-[0.15em] text-[var(--violet-dark)]">
            Background
          </p>

          <div>
            <h2 className="display-balance max-w-5xl font-display text-[clamp(2.8rem,6vw,6rem)] font-semibold leading-[0.9] tracking-[-0.055em]">
              The way I work
              <span className="block text-[var(--violet-dark)]">
                started before code.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-black/65">
              Responsibility, troubleshooting and independent project work now
              meet in the same practical engineering approach.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-black/40">
          {backgroundCredibilityItems.map((item, index) => (
            <article
              key={item.label}
              className="grid gap-5 border-b border-black/25 py-7 sm:py-9 lg:grid-cols-[3rem_minmax(15rem,0.8fr)_minmax(0,1.25fr)] lg:gap-10"
            >
              <p className="font-mono text-xs font-semibold text-[var(--violet-dark)]">
                {String(index + 1).padStart(2, "0")}
              </p>

              <div>
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[var(--ink)]/60">
                  {item.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight tracking-[-0.035em] sm:text-3xl">
                  {item.title}
                </h3>
              </div>

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
