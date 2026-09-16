import type { CaseStudySection, Project } from "../../types/project";
import { ProjectEvidenceFigure } from "./ProjectEvidenceFigure";
import { TaskFlowReorder } from "./TaskFlowReorder";

type SceneProps = { project: Project; section: CaseStudySection };

function SceneNarrative({ section }: { section: CaseStudySection }) {
  return (
    <div className="case-narrative mt-6 max-w-[65ch] space-y-5 text-base leading-8 opacity-85">
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}

function SceneNotes({ section }: { section: CaseStudySection }) {
  if (!section.bullets?.length) return null;
  return (
    <ul className="mt-8 grid gap-x-10 gap-y-3 border-t border-current/25 pt-6 text-sm leading-6 opacity-85 sm:grid-cols-2">
      {section.bullets.map((bullet) => (
        <li key={bullet} className="flex gap-3">
          <span aria-hidden="true">—</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function LifeScenes({ project, section }: SceneProps) {
  const saved = section.id === "resilient-saved-posts";
  const shot = project.screenshots.find((s) =>
    s.src.endsWith(saved ? "/saved-posts.png" : "/post-detail.png"),
  );
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-heading`}
      className={`case-scene full-bleed ${saved ? "bg-[var(--ink-2)]" : "bg-[var(--ink)]"} text-[var(--paper)]`}
    >
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <p className="eyebrow text-[var(--violet-text)]">
          {saved
            ? "The reading list / resilient state"
            : "Behind the interface / backend authority"}
        </p>
        <h2
          id={`${section.id}-heading`}
          className="scene-heading mt-5 max-w-[20ch]"
        >
          {section.title}
        </h2>
        <div
          className={`mt-9 grid gap-8 lg:gap-12 ${saved ? "lg:grid-cols-[0.65fr_1.35fr]" : "lg:grid-cols-[1.5fr_0.5fr]"}`}
        >
          <ProjectEvidenceFigure
            screenshot={shot}
            className={saved ? "lg:order-2" : ""}
          />
          <div className={saved ? "lg:order-1" : "lg:pt-8"}>
            <p className="border-l-2 border-[var(--violet)] pl-5 font-display text-[clamp(1.7rem,2.7vw,2.8rem)] font-medium leading-[1.1] tracking-[-0.025em]">
              {saved
                ? "A missing post does not have to erase the context."
                : "The client records intent. The backend owns the count."}
            </p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[var(--paper-muted)]">
              {saved
                ? "Snapshot metadata preserves the reference. Optimistic removal can be undone, and ghost cards make unavailable source content explicit."
                : "Cloud Functions maintain reaction aggregates across retries. Privileged deletion and scheduled cleanup also run beyond the client."}
            </p>
          </div>
        </div>
        <div className="mt-4 lg:ml-[14%]">
          <SceneNarrative section={section} />
          <SceneNotes section={section} />
        </div>
      </div>
    </section>
  );
}

function TrainingScenes({ project, section }: SceneProps) {
  const continuity = section.id === "core-product-decision";
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-heading`}
      className={`case-scene full-bleed ${continuity ? "bg-[var(--ink-2)]" : "bg-[#10272a]"} text-[var(--paper)]`}
    >
      <div className="content-frame py-14 sm:py-20 lg:py-24">
        <div
          className={`grid gap-10 lg:gap-16 ${continuity ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.2fr_0.8fr]"}`}
        >
          <div className="lg:pt-8">
            <p className="eyebrow text-[#79d7df]">
              {continuity
                ? "Cycle order / actual progress"
                : "In the workout / focused execution"}
            </p>
            <h2
              id={`${section.id}-heading`}
              className="scene-heading mt-5 max-w-[18ch]"
            >
              {section.title}
            </h2>
            <SceneNarrative section={section} />
            <p className="mt-8 max-w-[26ch] border-l-2 border-[#79d7df] pl-5 font-display text-2xl font-medium leading-tight">
              {continuity
                ? "The week can change. A partial day stays partial."
                : "Targets, previous values and the current action, together."}
            </p>
          </div>
          {continuity ? (
            <div className="grid grid-cols-2 items-start gap-4 sm:gap-6">
              <ProjectEvidenceFigure
                screenshot={project.screenshots.find((s) =>
                  s.src.endsWith("/cycle.png"),
                )}
              />
              <ProjectEvidenceFigure
                screenshot={project.screenshots.find((s) =>
                  s.src.endsWith("/partial-day.png"),
                )}
                className="mt-16"
              />
            </div>
          ) : (
            <ProjectEvidenceFigure
              screenshot={project.screenshots.find((s) =>
                s.src.endsWith("/exercise.png"),
              )}
              className="mx-auto max-w-80"
            />
          )}
        </div>
        <SceneNotes section={section} />
      </div>
    </section>
  );
}

function TaskFlowScenes({ project, section }: SceneProps) {
  const architecture = section.id === "typed-board-architecture";
  return (
    <section
      id={section.id}
      tabIndex={-1}
      aria-labelledby={`${section.id}-heading`}
      className="case-scene full-bleed border-y border-[var(--ink)]/25 bg-[var(--paper-deep)] text-[var(--ink)]"
    >
      <div className="content-frame py-12 sm:py-16 lg:py-20">
        <p className="eyebrow text-[var(--violet-dark)]">
          {architecture
            ? "Small architecture / explicit contracts"
            : "One drop / a nested state change"}
        </p>
        <h2
          id={`${section.id}-heading`}
          className="scene-heading mt-5 max-w-[22ch]"
        >
          {section.title}
        </h2>
        {architecture ? (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <SceneNarrative section={section} />
            <dl className="border-t border-[var(--ink)]/25">
              {[
                [
                  "Component props",
                  "The component knows the data and actions it receives.",
                ],
                [
                  "Context shape",
                  "Shared board state and named actions have explicit types.",
                ],
                [
                  "useLocalStorage<T>",
                  "The generic hook preserves the stored value’s type.",
                ],
                ["Reorder helpers", "Column and card moves return new arrays."],
              ].map(([label, description]) => (
                <div
                  key={label}
                  className="border-b border-[var(--ink)]/25 py-4"
                >
                  <dt className="font-mono text-sm font-semibold">{label}</dt>
                  <dd className="mt-2 text-sm leading-6 text-[var(--ink)]/75">
                    {description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ) : (
          <>
            <ProjectEvidenceFigure
              screenshot={project.screenshots.find((s) =>
                s.src.endsWith("/card-drag.png"),
              )}
              cropBoard
              className="mt-8"
            />
            <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <SceneNarrative section={section} />
              <TaskFlowReorder />
            </div>
          </>
        )}
        <SceneNotes section={section} />
      </div>
    </section>
  );
}

export function ProjectCaseScene(props: SceneProps) {
  switch (props.project.slug) {
    case "liferecompiled":
      return <LifeScenes {...props} />;
    case "training-app":
      return <TrainingScenes {...props} />;
    case "taskflow":
      return <TaskFlowScenes {...props} />;
  }
}
