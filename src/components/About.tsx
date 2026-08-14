export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <span
        data-scroll-slide
        className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted"
      >
        About Me
      </span>
      <h2
        data-scroll-slide
        className="mt-4 font-display text-[2.6rem] font-semibold uppercase leading-[0.84] sm:text-[4.25rem] lg:text-[5rem] xl:text-[6rem]"
      >
        From pixel to production
      </h2>
      <div className="mt-10 grid gap-6 lg:grid-cols-12">
        <p
          data-scroll-slide
          className="text-lg font-normal leading-relaxed text-muted lg:col-span-6"
        >
          I build digital products that are consistent and functional in
          equal measure. My background in graphic and UI/UX design, paired
          with full-stack development skills, gives me a rare blend of
          creative and technical thinking on every project.
        </p>
        <div className="space-y-6 text-lg font-normal leading-relaxed text-muted lg:col-span-5 lg:col-start-8">
          <p data-scroll-slide>
            My journey started in graphic design, where I built a strong eye
            for visual aesthetics and user-centered thinking. That foundation
            carried me into UI/UX design, and from there into web
            development, a natural progression driven by wanting to bring my
            own designs to life.
          </p>
          <p data-scroll-slide>
            As a self-taught developer, I work with modern tools and
            technologies including Next.js, React.js, Tailwind CSS, Git,
            WordPress, PHP, Python, Django, Node.js, SQL, and the Adobe
            Creative Suite. This mix of design and technical ability lets me
            deliver polished, user-centric solutions while collaborating
            effectively across teams.
          </p>
        </div>
      </div>
    </section>
  );
}
