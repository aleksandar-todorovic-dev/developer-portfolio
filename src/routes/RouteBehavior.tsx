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

export function RouteBehavior() {
  const location = useLocation();
  const navigationType = useNavigationType();

  const initialLocationKeyRef = useRef(location.key);
  const hasLeftInitialLocationRef = useRef(false);
  const hasHandledInitialLocationRef = useRef(false);

  const { pathname, hash, key } = location;

  useEffect(() => {
    document.title = getDocumentTitle(pathname);
  }, [pathname]);

  useEffect(() => {
    if (key !== initialLocationKeyRef.current) {
      hasLeftInitialLocationRef.current = true;
    }

    const isFirstRenderedLocation =
      key === initialLocationKeyRef.current &&
      !hasLeftInitialLocationRef.current &&
      !hasHandledInitialLocationRef.current;

    if (isFirstRenderedLocation) {
      if (!hash) {
        hasHandledInitialLocationRef.current = true;
        return;
      }

      let animationFrameId: number | undefined;

      const alignInitialHashTarget = () => {
        animationFrameId = window.requestAnimationFrame(() => {
          scrollToHashTarget(hash);
          hasHandledInitialLocationRef.current = true;
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

        if (animationFrameId !== undefined) {
          window.cancelAnimationFrame(animationFrameId);
        }
      };
    }

    if (navigationType === "POP") {
      return;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      if (scrollToHashTarget(hash)) {
        return;
      }

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });

      const pageHeading = document.getElementById(PAGE_HEADING_ID);

      if (pageHeading instanceof HTMLElement) {
        focusElement(pageHeading);
      }
    });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [hash, key, navigationType, pathname]);

  return null;
}
