export function About() {
  return (
    <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <span
          data-scroll-slide
          className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted"
        >
          About Me
        </span>
        <div className="max-w-5xl">
          <h2
            data-scroll-slide
            className="font-display text-[2.6rem] font-semibold uppercase leading-[0.84] sm:text-[4.25rem] lg:text-[5rem] xl:text-[6rem]"
          >
            From pixel to production
          </h2>
          <p
            data-scroll-slide
            className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-muted"
          >
            I build digital products that are seamless and functional in equal measure. My background in graphic and UI/UX design, paired with full-stack development skills, gives me a rare blend of creative and technical thinking on every project.<br></br><br></br>
My journey started in graphic design, where I built a strong eye for visual aesthetics and user-centered thinking. That foundation carried me into UI/UX design, and from there into web development, a natural progression driven by wanting to bring my own designs to life.<br></br><br></br>
As a self-taught developer, I work with modern tools and technologies including Next.js, React.js, Tailwind CSS, Git, WordPress, PHP, Python, Django, Node.js, SQL, and the Adobe Creative Suite. This mix of design and technical ability lets me deliver polished, user-centric solutions while collaborating effectively across teams.
          </p>
        </div>
      </div>
    </section>
  );
}
