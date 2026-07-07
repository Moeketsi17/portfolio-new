type Experience = {
  role: string;
  company: string;
  period: string;
};

const experiences: Experience[] = [
  {
    role: "Front-End Developer",
    company: "Stylistic",
    period: "2025 - Present",
  },
  {
    role: "Web Developer",
    company: "Wetpaint Advertising",
    period: "2024 - 2025",
  },
  {
    role: "Front-End Developer",
    company: "CloudCo",
    period: "2023 - 2024",
  },
  {
    role: "Junior Front-End Developer",
    company: "Worvic",
    period: "2020 - 2022",
  },
];

export function WorkExperience() {
  return (
    <section id="experience" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
          Work Experience
        </span>

        <div>
          <h2 className="font-display text-[2.7rem] font-semibold uppercase leading-[0.82] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem]">
            Experience
          </h2>

          <div className="mt-10 border-t border-line">
            {experiences.map((experience) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="grid gap-3 border-b border-line py-6 sm:grid-cols-[1.2fr_1fr_auto] sm:items-center"
              >
                <h3 className="text-xl font-semibold uppercase leading-tight tracking-tight sm:text-2xl">
                  {experience.role}
                </h3>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-muted">
                  {experience.company}
                </p>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-foreground sm:text-right">
                  {experience.period}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
