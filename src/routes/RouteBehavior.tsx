import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

import { getDocumentTitle } from "./getDocumentTitle";

const PAGE_HEADING_ID = "page-heading";

function getHashTarget(hash: string): HTMLElement | null {
  if (!hash) {
    return null;
  }

  try {
    const targetId = decodeURIComponent(hash.slice(1));

    return document.getElementById(targetId);
  } catch {
    return null;
  }
}

function focusElement(element: HTMLElement) {
  element.focus({
    preventScroll: true,
  });
}

function scrollToHashTarget(hash: string): boolean {
  const hashTarget = getHashTarget(hash);

  if (!hashTarget) {
    return false;
  }

  hashTarget.scrollIntoView({
    block: "start",
  });

  focusElement(hashTarget);

  return true;
}

function focusPageStart(): boolean {
  const pageHeading = document.getElementById(PAGE_HEADING_ID);

  if (!(pageHeading instanceof HTMLElement)) {
    return false;
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
  focusElement(pageHeading);

  return true;
}

export function RouteBehavior() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const initialLocationRef = useRef(location);
  const { pathname } = location;

  useEffect(() => {
    document.title = getDocumentTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    const { hash } = location;
    const isFirstRenderedLocation = location === initialLocationRef.current;

    if (isFirstRenderedLocation) {
      if (!hash) {
        return;
      }

      let animationFrameId: number | undefined;
      let observer: MutationObserver | undefined;
      let observerTimeoutId: number | undefined;

      const stopWatchingForTarget = () => {
        observer?.disconnect();

        if (observerTimeoutId !== undefined) {
          window.clearTimeout(observerTimeoutId);
        }
      };

      const alignInitialHashTarget = () => {
        animationFrameId = window.requestAnimationFrame(() => {
          if (scrollToHashTarget(hash)) {
            return;
          }

          if (focusPageStart()) {
            return;
          }

          const routeContent =
            document.getElementById("main-content") ?? document.body;

          observer = new MutationObserver(() => {
            if (scrollToHashTarget(hash)) {
              stopWatchingForTarget();
              return;
            }

            if (focusPageStart()) {
              stopWatchingForTarget();
            }
          });
          observer.observe(routeContent, {
            childList: true,
            subtree: true,
          });

          observerTimeoutId = window.setTimeout(
            stopWatchingForTarget,
            15_000,
          );
        });
      };

      if (document.readyState === "complete") {
        alignInitialHashTarget();
      } else {
        window.addEventListener("load", alignInitialHashTarget, {
          once: true,
        });
      }

      return () => {
        window.removeEventListener("load", alignInitialHashTarget);
        stopWatchingForTarget();

        if (animationFrameId !== undefined) {
          window.cancelAnimationFrame(animationFrameId);
        }
      };
    }

    if (navigationType === "POP") {
      if (!hash) {
        return;
      }

      const animationFrameId = window.requestAnimationFrame(() => {
        if (scrollToHashTarget(hash)) {
          return;
        }

        focusPageStart();
      });

      return () => {
        window.cancelAnimationFrame(animationFrameId);
      };
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      if (scrollToHashTarget(hash)) {
        return;
      }

      focusPageStart();
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [location, navigationType]);

  return null;
}
