const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <span
          data-scroll-slide
          className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-muted"
        >
          Contact
        </span>
        <div>
          <h2
            data-scroll-slide
            className="max-w-5xl font-display text-[3rem] font-semibold uppercase leading-[0.82] sm:text-[5rem] lg:text-[7.5rem] xl:text-[9.5rem]"
          >
            Let&apos;s build the next useful thing.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:border-accent hover:bg-accent hover:text-background"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
