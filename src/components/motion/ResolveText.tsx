import { useEffect, useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";

type ResolveTextProps = {
  text: string;
  className?: string;
  duration?: number;
};

const fragmentPool = "01[]{}<>/\\+-=*#";

function getFragmentFrame(text: string, resolvedCount: number, tick: number) {
  let visibleCharacterIndex = 0;

  return Array.from(text)
    .map((character, index) => {
      if (character === " ") {
        return " ";
      }

      const shouldResolve = visibleCharacterIndex < resolvedCount;
      visibleCharacterIndex += 1;

      if (shouldResolve) {
        return character;
      }

      return fragmentPool[(index + tick) % fragmentPool.length];
    })
    .join("");
}

export function ResolveText({
  text,
  className = "",
  duration = 820,
}: ResolveTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const [displayText, setDisplayText] = useState(text);

  const visibleCharacterCount = useMemo(
    () => Array.from(text).filter((character) => character !== " ").length,
    [text],
  );

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    let animationFrameId = 0;
    const startTime = performance.now();

    const updateText = (time: number) => {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const resolvedCount = Math.floor(progress * visibleCharacterCount);
      const tick = Math.floor(elapsed / 42);

      setDisplayText(
        progress === 1
          ? text
          : getFragmentFrame(text, resolvedCount, tick),
      );

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(updateText);
      }
    };

    animationFrameId = window.requestAnimationFrame(updateText);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [duration, shouldReduceMotion, text, visibleCharacterCount]);

  const visibleText = shouldReduceMotion ? text : displayText;

  return (
    <span className={`relative inline-grid ${className}`}>
      <span className="invisible col-start-1 row-start-1" aria-hidden="true">
        {text}
      </span>

      <span
        className="col-start-1 row-start-1 whitespace-pre"
        aria-hidden="true"
      >
        {visibleText}
      </span>

      <span className="sr-only">{text}</span>
    </span>
  );
}
