"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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

    gsap.set(innerElements, { yPercent: 110 });

    const setupId = window.setTimeout(() => {
      innerElements.forEach((innerElement) => {
        gsap.to(innerElement, {
          yPercent: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: innerElement.parentElement,
            start: "top 85%",
            toggleActions: "play none none reverse",
            invalidateOnRefresh: true,
          },
        });
      });

      ScrollTrigger.refresh();
    }, 150);

    return () => {
      window.clearTimeout(setupId);
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger?.hasAttribute("data-scroll-slide")) {
          trigger.kill();
        }
      });

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
