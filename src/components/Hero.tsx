"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const slashRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const slashScale = Math.min(window.innerHeight / 120, 7);

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
        .to(slashRef.current, { rotate: 0, ease: "none", duration: 0.35 }, 0)
        .to(slashRef.current, { scaleY: slashScale, ease: "none", duration: 0.65 }, 0.35);

      return () => timeline.kill();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-28 sm:px-6 lg:px-8"
    >
      <div className="flex w-full flex-col items-center justify-center text-center">
        <h1 className="font-display text-[3.6rem] font-bold uppercase leading-[0.76] tracking-normal sm:text-[5.5rem] md:text-[7.5rem] lg:text-[clamp(6.5rem,10vw,11rem)]">
          <span className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 md:gap-x-8 lg:flex-nowrap lg:whitespace-nowrap">
            <span>Front-End</span>
            <span
              ref={slashRef}
              aria-hidden="true"
              data-hero-slash
              className="h-[0.92em] w-[0.055em] origin-center rotate-[18deg] bg-foreground will-change-transform"
            />
            <span>Web</span>
          </span>
          <span className="block">Developer</span>
        </h1>
      </div>
    </section>
  );
}
