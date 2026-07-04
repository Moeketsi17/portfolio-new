"use client";

import { useState } from "react";
import Image from "next/image";

type Logo = {
  src?: string;
  alt: string;
  width?: number;
  height?: number;
};

const logos: Logo[] = [
  { src: "/logos/leakbot.png", alt: "LeakBot" },
  { alt: "Vuma" },
  { alt: "KFC" },
  { alt: "Frampol" },
  { alt: "Tarsus" },
  { alt: "GLX" },
  { alt: "Avroy Shlain" },
  { alt: "CloudCo" },
  { alt: "Wetpaint" },
  { alt: "Generations Schools" },
  { alt: "Iron Forest Packaging" },
];

function LogoItem({ logo }: { logo: Logo }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="marquee__item">
      {imageFailed || !logo.src ? (
        <span className="marquee__fallback">{logo.alt}</span>
      ) : (
        <Image
          src={logo.src}
          alt={logo.alt}
          width={logo.width ?? 140}
          height={logo.height ?? 48}
          className="marquee__logo"
          unoptimized
          onError={() => setImageFailed(true)}
        />
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
          height: 32px;
          width: auto;
          object-fit: contain;
          filter: grayscale(100%);
          opacity: 0.62;
          transition:
            filter 0.25s ease,
            opacity 0.25s ease;
        }

        .marquee__item:hover .marquee__logo {
          filter: grayscale(0%);
          opacity: 1;
        }

        .marquee__fallback {
          color: var(--foreground);
          font-size: 0.74rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          line-height: 1;
          opacity: 0.62;
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
