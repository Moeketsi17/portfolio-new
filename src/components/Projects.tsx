import type { CSSProperties } from "react";
import Image, { type StaticImageData } from "next/image";
import eazyBizPhone from "@/images/eazy-biz-phone.png";
import byteHire from "@/images/ByteHire (2).png";

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
    title: "Studio Ops Dashboard",
    tags: ["Next.js", "Design Systems", "Analytics"],
    color: "#2f3a33",
    href: "#",
  },
  {
    title: "Editorial Commerce",
    tags: ["React", "Motion", "Headless CMS"],
    color: "#704a3b",
    href: "#",
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
];

export function Projects() {
  return (
    <section id="work" className="border-t border-line px-4 py-24 sm:px-6 lg:px-8">
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

      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {projects.map((project, index) => (
          <article key={project.title} className="group bg-background">
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
    </section>
  );
}
