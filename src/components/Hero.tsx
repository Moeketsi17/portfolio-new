"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const frontEndRef = useRef<HTMLSpanElement>(null);
  const slashRef = useRef<HTMLSpanElement>(null);
  const webRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        return;
      }

      const getWordDistance = () => Math.min(window.innerWidth * 0.16, 220);
      const getPipeScale = () => {
        if (!frontEndRef.current || !slashRef.current || !webRef.current) {
          return 1;
        }

        const wordDistance = getWordDistance();
        const frontEndBounds = frontEndRef.current.getBoundingClientRect();
        const slashBounds = slashRef.current.getBoundingClientRect();
        const webBounds = webRef.current.getBoundingClientRect();
        const finalGap =
          webBounds.left + wordDistance - (frontEndBounds.right - wordDistance);

        return Math.max(1, finalGap / slashBounds.height);
      };

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=100%",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      timeline.fromTo(
        slashRef.current,
        { rotation: 0, scaleY: 1, transformOrigin: "50% 50%" },
        { rotation: 90, scaleY: getPipeScale, ease: "none" },
        0,
      );
      timeline
        .to(frontEndRef.current, { x: () => -getWordDistance(), ease: "none" }, 0)
        .to(webRef.current, { x: getWordDistance, ease: "none" }, 0);

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
            <span ref={frontEndRef} className="will-change-transform">
              Front-End
            </span>
            <span
              ref={slashRef}
              aria-hidden="true"
              data-hero-slash
              className="block h-[0.92em] w-[0.055em] shrink-0 origin-center bg-foreground will-change-transform"
            />
            <span ref={webRef} className="will-change-transform">
              Web
            </span>
          </span>
          <span className="block pt-4 sm:pt-6 lg:pt-8">Developer</span>
        </h1>
      </div>
    </section>
  );
}
