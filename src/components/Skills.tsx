const skills = [
  "TypeScript",
  "Next.js",
  "React",
  "Tailwind CSS",
  "GSAP",
  "Design Systems",
  "Accessibility",
  "Performance",
];

export function Skills() {
  return (
    <section className="border-t border-line py-10">
      <h2 className="sr-only">Skills and stack</h2>
      <div className="flex overflow-hidden border-y border-line text-[1.25rem] font-black uppercase leading-none sm:text-[2rem] lg:text-[3rem]">
        <div className="flex min-w-full shrink-0 animate-none flex-wrap justify-center gap-x-8 gap-y-4 px-4 py-8 sm:gap-x-12">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
