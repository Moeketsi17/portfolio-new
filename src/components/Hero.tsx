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
  const developerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      gsap.set([developerRef.current, aboutRef.current], {
        autoAlpha: reduceMotion ? 1 : 0,
        y: reduceMotion ? 0 : 24,
      });

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
          .to(
            frontRef.current,
            { x: -distance, ease: "none" },
            0,
          )
          .to(endRef.current, { x: distance, ease: "none" }, 0)
          .to(
            dashRef.current,
            {
              scaleX: scale,
              ease: "none",
            },
            0,
          )
          .to(
            developerRef.current,
            { autoAlpha: 1, y: 0, duration: 0.32, ease: "power2.out" },
            0.22,
          )
          .to(
            aboutRef.current,
            { autoAlpha: 1, y: 0, duration: 0.32, ease: "power2.out" },
            0.34,
          );

        return () => timeline.kill();
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(dashRef.current, { scaleX: 1.8 });
        gsap.to([developerRef.current, aboutRef.current], {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 70%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: heroRef },
  );

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen overflow-hidden px-4 pb-8 pt-28 sm:px-6 lg:px-8"
    >
      <div className="flex w-full flex-col justify-end gap-8">
        <div className="text-center font-display uppercase leading-[0.76] tracking-normal">
          <div className="flex flex-col items-center justify-center gap-2 text-[4rem] sm:text-[6rem] md:flex-row md:gap-5 md:text-[8rem] lg:text-[11rem] xl:text-[14rem] 2xl:text-[15.5rem]">
            <span ref={frontRef} className="will-change-transform">
              Front
            </span>
            <span
              ref={dashRef}
              aria-hidden="true"
              className="h-[0.08em] w-12 origin-center bg-foreground will-change-transform md:w-16"
            />
            <span ref={endRef} className="will-change-transform">
              End
            </span>
          </div>
          <div
            ref={developerRef}
            className="text-[2.85rem] will-change-transform sm:text-[5.4rem] md:text-[7.6rem] lg:text-[10.5rem] xl:text-[13.4rem] 2xl:text-[15rem]"
          >
            Developer
          </div>
        </div>

        <div
          ref={aboutRef}
          className="ml-auto grid max-w-xl grid-cols-[4.5rem_1fr] gap-5 pb-2 text-sm leading-relaxed text-muted will-change-transform sm:text-base"
        >
          <p className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-foreground">
            About
          </p>
          <p>
            I craft precise, fast interfaces for teams that care about strong
            systems and sharp details. My work sits between visual direction,
            front-end architecture, and the small interactions that make software
            feel considered.
          </p>
        </div>
      </div>
    </section>
  );
}
