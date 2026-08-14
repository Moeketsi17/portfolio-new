"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export function ScrollSlide() {
  useGSAP(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-scroll-slide]"),
    );

    if (elements.length === 0) {
      return;
    }

    const innerElements = elements.map((element) => {
      const existingInner = element.firstElementChild;

      if (existingInner?.classList.contains("scroll-slide__inner")) {
        return existingInner as HTMLElement;
      }

      const inner = document.createElement("span");
      inner.className = "scroll-slide__inner";

      while (element.firstChild) {
        inner.appendChild(element.firstChild);
      }

      element.appendChild(inner);
      return inner;
    });

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(innerElements, { yPercent: 0 });
      return;
    }

    let observer: IntersectionObserver | undefined;
    let animationFrameId = 0;

    const revealElement = (innerElement: Element) => {
      gsap.to(innerElement, {
        yPercent: 0,
        duration: 0.9,
        ease: "power3.out",
      });
    };

    const revealVisibleElements = () => {
      innerElements.forEach((innerElement) => {
        const parentElement = innerElement.parentElement;

        if (!parentElement) {
          return;
        }

        const bounds = parentElement.getBoundingClientRect();

        if (bounds.top < window.innerHeight * 0.85 && bounds.bottom > 0) {
          revealElement(innerElement);
          observer?.unobserve(parentElement);
        }
      });
    };

    const scheduleRevealCheck = () => {
      window.cancelAnimationFrame(animationFrameId);
      animationFrameId = window.requestAnimationFrame(revealVisibleElements);
    };

    const setupId = window.setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const innerElement = entry.target.firstElementChild;

            if (!innerElement?.classList.contains("scroll-slide__inner")) {
              return;
            }

            revealElement(innerElement);
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -15% 0px" },
      );

      innerElements.forEach((innerElement) => {
        const parentElement = innerElement.parentElement;

        if (!parentElement) {
          return;
        }

        const isBelowRevealLine =
          parentElement.getBoundingClientRect().top > window.innerHeight * 0.85;

        gsap.set(innerElement, { yPercent: isBelowRevealLine ? 110 : 0 });
        observer?.observe(parentElement);
      });

      revealVisibleElements();
      window.addEventListener("resize", scheduleRevealCheck);
    }, 150);

    return () => {
      window.clearTimeout(setupId);
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", scheduleRevealCheck);
      observer?.disconnect();

      innerElements.forEach((innerElement) => {
        const parent = innerElement.parentElement;

        if (!parent) {
          return;
        }

        while (innerElement.firstChild) {
          parent.insertBefore(innerElement.firstChild, innerElement);
        }

        innerElement.remove();
      });
    };
  });

  return null;
}
