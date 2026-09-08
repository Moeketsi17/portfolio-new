"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export function ScrollSlide() {
  useGSAP(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-slide]"),
    );

    if (elements.length === 0) {
      return;
    }

    const hasIntersectionObserver = "IntersectionObserver" in window;
    const revealed = new WeakSet<HTMLElement>();
    const splitByElement = new Map<HTMLElement, SplitText>();

    let observer: IntersectionObserver | undefined;
    let animationFrameId = 0;
    let cancelled = false;

    const revealElement = (element: HTMLElement, animate: boolean) => {
      revealed.add(element);

      const lines = splitByElement.get(element)?.lines ?? [];

      if (lines.length === 0) {
        return;
      }

      gsap.killTweensOf(lines);

      if (animate) {
        gsap.to(lines, {
          yPercent: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.08,
        });
      } else {
        gsap.set(lines, { yPercent: 0 });
      }
    };

    const revealVisibleElements = () => {
      elements.forEach((element) => {
        if (revealed.has(element)) {
          return;
        }

        const bounds = element.getBoundingClientRect();

        if (bounds.top < window.innerHeight * 0.85 && bounds.bottom > 0) {
          revealElement(element, true);
          observer?.unobserve(element);
        }
      });
    };

    const scheduleRevealCheck = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(revealVisibleElements);
    };

    const buildSplit = (element: HTMLElement) => {
      const split = SplitText.create(element, {
        type: "lines",
        mask: "lines",
        linesClass: "scroll-slide__line",
        autoSplit: true,
        onSplit: (self) => {
          // Runs on the initial split and again whenever a resize or font swap
          // reflows the copy, so keep hidden lines hidden and revealed lines shown.
          const shouldShow = !hasIntersectionObserver || revealed.has(element);

          gsap.set(self.lines, { yPercent: shouldShow ? 0 : 110 });
        },
      });

      splitByElement.set(element, split);
      return split;
    };

    const setup = () => {
      if (cancelled) {
        return;
      }

      elements.forEach(buildSplit);

      if (!hasIntersectionObserver) {
        elements.forEach((element) => revealElement(element, false));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            revealElement(entry.target as HTMLElement, true);
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -15% 0px" },
      );

      elements.forEach((element) => {
        const isAboveRevealLine =
          element.getBoundingClientRect().top <= window.innerHeight * 0.85;

        if (isAboveRevealLine) {
          revealElement(element, false);
        } else {
          observer?.observe(element);
        }
      });

      revealVisibleElements();
      window.addEventListener("resize", scheduleRevealCheck);
    };

    const fontsReady =
      "fonts" in document ? document.fonts.ready : Promise.resolve();

    fontsReady.then(() => {
      window.setTimeout(setup, 0);
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", scheduleRevealCheck);
      observer?.disconnect();

      splitByElement.forEach((split) => {
        gsap.killTweensOf(split.lines);
        split.revert();
      });
      splitByElement.clear();
    };
  });

  return null;
}
