"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const frontRef = useRef<HTMLSpanElement>(null);
  const endRef = useRef<HTMLSpanElement>(null);
  const dashRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const distance = Math.min(window.innerWidth * 0.17, 220);
        const scale = Math.min(window.innerWidth / 96, 9);

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=100%",
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        timeline
          .to(frontRef.current, { x: -distance, ease: "none" }, 0)
          .to(endRef.current, { x: distance, ease: "none" }, 0)
          .to(dashRef.current, { scaleX: scale, ease: "none" }, 0);

        return () => timeline.kill();
      });

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <div className="font-display text-[4rem] font-bold uppercase leading-[0.76] tracking-normal sm:text-[6rem] md:text-[8rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[15.5rem]">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:gap-5">
            <span ref={frontRef} data-hero-word="front" className="will-change-transform">
              Front
            </span>
            <span
              ref={dashRef}
              aria-hidden="true"
              data-hero-dash
              className="h-[0.08em] w-12 origin-center bg-foreground will-change-transform md:w-16"
            />
            <span ref={endRef} data-hero-word="end" className="will-change-transform">
              End
            </span>
          </div>
          <div>Developer</div>
        </div>
      </div>
    </section>
  );
}
