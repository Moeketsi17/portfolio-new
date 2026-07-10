"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import eazyBizPhone from "@/images/eazy-biz-phone.png";
import byteHire from "@/images/ByteHire (2).png";
import leakBot from "@/images/Leakbot.png";
import gigi from "@/images/Gigi Bottega.png";
import gritSpace from "@/images/grit space (2).png";
import brain from "@/images/brain wave.png"
import tom from "@/images/tomjachu.png";
import eliashib from "@/images/eliashib lap.png";
import zentry from "@/images/zentry.png";
import skd from "@/images/skd.png";

type Project = {
  title: string;
  tags: string[];
  color: string;
  href: string;
  category?: string;
  description?: string;
  image?: StaticImageData;
};

const projects: Project[] = [
  {
    title: "Eazy-Biz",
    tags: ["Wordpress", "Javascript", "PHP"],
    color: "#fff",
    href: "https://leakbot.io/",
    category: "Website",
    description:
      "A high-performance digital platform built to communicate innovation, trust, and practical value. Developed with WordPress, Salient, and custom functionality, the site combines clear design, seamless navigation, and conversion-focused experiences to support product education, bookings, and eligibility checks while showcasing LeakBot’s smart leak-detection technology.",
    image: leakBot,
  },
  {
    title: "Gigi Bottega",
    tags: ["Wordpress", "PHP", "Woo Commerce"],
    color: "#704a3b",
    href: "https://gigibottega.co.uk/",
    category: "eCommerce",
    description:
      "A refined digital experience crafted to capture the charm, elegance, and personality of a boutique dining destination. Built with WordPress, the site blends sophisticated design, seamless navigation, and responsive performance to showcase Bar Gigi’s unique atmosphere, curated menu, and memorable hospitality while creating an inviting experience for every guest",
    image: gigi,
  },
  {
    title: "Eazy-Biz",
    tags: ["React", "Supabase", "Business Ops"],
    color: "#fff",
    href: "https://eazybiz.blackdotstudios.co.za/",
    category: "Custom Web App",
    description:
      "A custom business management platform built to simplify operations, improve efficiency, and support smarter decision-making. Developed with React on the frontend and Supabase powering the backend.",
    image: eazyBizPhone,
  },
  {
    title: "ByteHire",
    tags: ["PHP", "HTML", "CSS"],
    color: "#3c4654",
    href: "https://bytehire.io/",
    category: "Custom Web App",
    description:
      "A custom-built hiring platform designed to streamline recruitment, simplify candidate management, and create efficient hiring workflows. Developed with custom PHP, HTML, and CSS.",
    image: byteHire,
  },
  {
    title: "Grit Space",
    tags: ["Wordpress", "Javascript"],
    color: "#3c4654",
    href: "https://gritspace.co.za/",
    category: "Website",
    description:
      "Built on the Salient framework, the site delivers a clean, responsive experience for exploring available offices, submitting enquiries, and managing leasing interactions. Focused on speed, clarity, and ease of use, it helps tenants and businesses connect with the right workspace quickly while supporting smooth backend management for listings and enquiries.",
    image: gritSpace,
  },
  {
    title: "Brain Wave",
    tags: ["React", "Javascript", "Tailwind"],
    color: "#3c4654",
    href: "https://brainwave-a1.netlify.app/",
    category: "Website",
    description:
      "A modern AI-focused landing page built to showcase innovation, speed, and interactive design. Developed with React and Tailwind CSS, the site combines sleek visuals, responsive performance, and custom micro-animations to create a seamless user experience that brings cutting-edge digital ideas to life.",
    image: brain,
  },
  {
    title: "Tomjachu",
    tags: ["Wordpress", "Elementor", "PHP"],
    color: "#3c4654",
    href: "https://tomjachu.co.za/",
    category: "Website",
    description:
      "An immersive digital experience designed to reflect the beauty, comfort, and escape of a luxury bush retreat. Built with WordPress and Elementor, the site combines clean design, intuitive navigation, and responsive functionality to showcase accommodation, experiences, and essential information while making trip planning effortless for every guest.",
    image: tom,
  },
  {
    title: "Eliashi Group",
    tags: ["Wordpress", "Elementor", "PHP"],
    color: "#3c4654",
    href: "https://eliashibgroup.com/",
    category: "Website",
    description:
      "A complete brand and digital identity built to establish credibility, professionalism, and lasting impact. From crafting the brand identity to designing and developing the website, this project combines strategic branding, modern design, and seamless functionality to position Eliashib Group with confidence, clarity, and a strong market presence.",
    image: eliashib,
  },
  {
    title: "Zentry",
    tags: ["Javacsript", "GSAP", "Tailwind"],
    color: "#3c4654",
    href: "https://zentrylandingpage.netlify.app/",
    category: "Website",
    description:
      "An immersive landing page inspired by modern awwward website. Built with React, GSAP, and Tailwind CSS, it combines scroll-driven animations, seamless transitions, and cinematic storytelling to create a refined, high-impact user experience that blends technical precision with bold creative execution.",
    image: zentry,
  },
  {
    title: "SKD Tapes",
    tags: ["Wordpress", "Salient", "PHP"],
    color: "#3c4654",
    href: "https://skdtapes.com/",
    category: "Website",
    description:
      "A precision-focused digital platform built to reflect industrial expertise, technical innovation, and reliability. Developed with WordPress and Salient, the site combines bold design, streamlined navigation, and responsive performance to showcase SKD Tapes’ specialist adhesive, security, and conversion solutions while delivering a seamless experience for clients across diverse industries.",
    image: skd,
  },
];

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 4);

  return (
    <section id="work" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-end justify-between gap-6">
        <h2 className="font-display text-[2.7rem] font-semibold uppercase leading-[0.82] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem]">
          Selected
          <br />
          Work
        </h2>
        <p className="hidden max-w-xs text-sm font-normal leading-relaxed text-muted sm:block">
          Placeholder studies with editable titles, tags, and thumbnail colors.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <article key={`${project.title}-${index}`} className="group bg-background">
            <a
              href={project.href}
              target={project.href.startsWith("http") ? "_blank" : undefined}
              rel={project.href.startsWith("http") ? "noreferrer" : undefined}
              className="block p-3"
            >
              <div
                className="project-media relative aspect-[1.35] overflow-hidden"
                style={{ "--project-bg": project.color } as CSSProperties}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : null}
                <div className="absolute inset-0 flex items-end justify-between gap-5 bg-background/95 p-5 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="max-w-md">
                    {project.category ? (
                      <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-muted">
                        {project.category}
                      </p>
                    ) : null}
                    <h3 className="max-w-[12rem] text-2xl font-semibold uppercase leading-none">
                      {project.title}
                    </h3>
                    {project.description ? (
                      <p className="mt-4 max-w-sm text-sm font-normal normal-case leading-relaxed tracking-normal text-muted">
                        {project.description}
                      </p>
                    ) : null}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">
                    0{index + 1}
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 py-5">
                <h3 className="text-xl font-semibold uppercase tracking-tight">
                  {project.title}
                </h3>
                <ul className="flex flex-wrap gap-2 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted">
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
            </a>
          </article>
        ))}
      </div>

      {!showAllProjects && projects.length > visibleProjects.length ? (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAllProjects(true)}
            className="border border-foreground px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-foreground hover:border-accent hover:bg-accent hover:text-background"
          >
            View all
          </button>
        </div>
      ) : null}
    </section>
  );
}
