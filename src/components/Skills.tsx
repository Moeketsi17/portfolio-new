"use client";

import Image, { type StaticImageData } from "next/image";
import avroyLogo from "@/images/logos/avroy.png";
import cloudLogo from "@/images/logos/cloud.png";
import frampolLogo from "@/images/logos/frampol-2.png";
import glxLogo from "@/images/logos/glx.png";
import kfcLogo from "@/images/logos/kfc.png";
import leakbotLogo from "@/images/logos/Leakbot-logo-40 (1).png";
import tarsusLogo from "@/images/logos/tarsus.png";
import vumaLogo from "@/images/logos/Vuma-Logo.png";
import wetpaintLogo from "@/images/logos/wetpaint-logo-40 (1).webp";
import generation from "@/images/logos/generation.png";


type Logo = {
  src?: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
};

const logos: Logo[] = [
  { src: leakbotLogo, alt: "LeakBot" },
  { src: vumaLogo, alt: "Vuma" },
  { src: kfcLogo, alt: "KFC" },
  { src: frampolLogo, alt: "Frampol" },
  { src: tarsusLogo, alt: "Tarsus" },
  { src: glxLogo, alt: "GLX" },
  { src: avroyLogo, alt: "Avroy Shlain" },
  { src: cloudLogo, alt: "CloudCo" },
  { src: wetpaintLogo, alt: "Wetpaint" },
  { src: generation, alt: "generation schools" },
  
];

function LogoItem({ logo }: { logo: Logo }) {
  return (
    <div className="marquee__item">
      {logo.src ? (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width ?? 140}
          height={logo.height ?? 48}
          className="marquee__logo"
        />
      ) : (
        <span className="marquee__fallback">{logo.alt}</span>
      )}
    </div>
  );
}

export function Skills() {
  const track = [...logos, ...logos];

  return (
    <section className="border-t border-line px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between gap-6">
        <h2 className="font-display text-[2.7rem] font-semibold uppercase leading-[0.86] sm:text-[4.5rem] lg:text-[6.5rem]">
          Brands I’ve worked on
        </h2>
      </div>

      <div className="marquee border-y border-line">
        <div className="marquee__fade marquee__fade--left" />
        <div className="marquee__fade marquee__fade--right" />

        <div className="marquee__track">
          {track.map((logo, index) => (
            <LogoItem logo={logo} key={`${logo.alt}-${index}`} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .marquee {
          position: relative;
          width: 100%;
          overflow: hidden;
          padding: 1.5rem 0;
        }

        .marquee__track {
          display: flex;
          align-items: center;
          width: max-content;
          gap: 4rem;
          animation: scroll 28s linear infinite;
        }

        .marquee:hover .marquee__track {
          animation-play-state: paused;
        }

        .marquee__item {
          flex: 0 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 140px;
        }

        .marquee__logo {
          height: 72px;
          width: auto;
          object-fit: contain;
          
          opacity: 0.72;
          transition:
            filter 0.25s ease,
            opacity 0.25s ease;
        }

        .marquee__item:hover .marquee__logo {
          filter: grayscale(100%) invert(1) brightness(1.35);
          opacity: 1;
        }

        .marquee__fallback {
          color: var(--foreground);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1;
          opacity: 0.72;
          text-transform: uppercase;
          transition: opacity 0.25s ease;
          white-space: nowrap;
        }

        .marquee__item:hover .marquee__fallback {
          opacity: 1;
        }

        .marquee__fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          z-index: 2;
          pointer-events: none;
        }

        .marquee__fade--left {
          left: 0;
          background: linear-gradient(to right, var(--background), transparent);
        }

        .marquee__fade--right {
          right: 0;
          background: linear-gradient(to left, var(--background), transparent);
        }

        @keyframes scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee__track {
            animation: none;
            flex-wrap: wrap;
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
