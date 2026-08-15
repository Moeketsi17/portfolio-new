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
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
        <h2
          data-scroll-slide
          className="font-display text-[2.7rem] font-semibold uppercase leading-[0.82] sm:text-[4.5rem] lg:text-[6.5rem] xl:text-[8rem]"
        >
          Experience
        </h2>
        <span
          data-scroll-slide
          className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted"
        >
          Roles since 2020
        </span>
      </div>

      <div className="mt-10 border-t border-line">
        {experiences.map((experience) => (
          <article
            key={`${experience.company}-${experience.period}`}
            className="grid min-w-0 gap-2 border-b border-line py-5 sm:grid-cols-3 sm:items-center sm:gap-3 sm:py-6"
          >
            <h3
              data-scroll-slide
              className="min-w-0 font-sans text-base font-semibold capitalize leading-tight tracking-tight"
            >
              {experience.role}
            </h3>
            <p
              data-scroll-slide
              className="min-w-0 font-sans text-base font-bold capitalize tracking-[0.12em] text-muted sm:text-center sm:tracking-[0.18em]"
            >
              {experience.company}
            </p>
            <p
              data-scroll-slide
              className="min-w-0 font-sans text-base font-semibold capitalize tracking-[0.12em] text-foreground sm:text-right sm:tracking-[0.16em]"
            >
              {experience.period}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
