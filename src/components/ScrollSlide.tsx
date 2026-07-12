"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function ScrollSlide() {
  useGSAP(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const elements = gsap.utils.toArray<HTMLElement>("[data-scroll-slide]");

    if (reduceMotion || elements.length === 0) {
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

    gsap.set(innerElements, {
      y: 80,
      force3D: true,
    });

    const triggers = innerElements.map((innerElement) =>
      gsap.to(innerElement, {
        y: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: innerElement.parentElement,
          start: "top 88%",
          toggleActions: "play none none reverse",
          invalidateOnRefresh: true,
        },
      }),
    );

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 100);

    return () => {
      window.clearTimeout(refresh);
      triggers.forEach((trigger) => {
        trigger.scrollTrigger?.kill();
        trigger.kill();
      });
    };
  });

  return null;
}
