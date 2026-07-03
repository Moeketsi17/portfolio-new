import type { CSSProperties } from "react";

const projects = [
  {
    title: "Studio Ops Dashboard",
    tags: ["Next.js", "Design Systems", "Analytics"],
    color: "#2f3a33",
  },
  {
    title: "Editorial Commerce",
    tags: ["React", "Motion", "Headless CMS"],
    color: "#704a3b",
  },
  {
    title: "AI Review Workspace",
    tags: ["TypeScript", "Streaming UI", "UX"],
    color: "#3d4055",
  },
  {
    title: "Portfolio System",
    tags: ["App Router", "GSAP", "Performance"],
    color: "#5d5542",
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
            <a href="#" className="block p-3">
              <div
                className="project-media relative aspect-[1.35] overflow-hidden"
                style={{ "--project-bg": project.color } as CSSProperties}
              >
                <div className="absolute inset-0 flex items-end justify-between p-5 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <h3 className="max-w-[12rem] text-2xl font-semibold uppercase leading-none">
                    {project.title}
                  </h3>
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
