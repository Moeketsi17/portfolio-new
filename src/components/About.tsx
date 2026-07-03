export function About() {
  return (
    <section id="about" className="border-t border-line px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <span className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted">
          About
        </span>
        <div className="max-w-5xl">
          <h2 className="font-display text-[2.6rem] font-semibold uppercase leading-[0.84] sm:text-[4.25rem] lg:text-[6rem] xl:text-[7rem]">
            Interfaces with editorial weight and production discipline.
          </h2>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-muted">
            Replace this with your real story: what you build, the kinds of
            teams you help, and the principles that guide your work. Keep it
            direct, specific, and easy to scan.
          </p>
        </div>
      </div>
    </section>
  );
}
