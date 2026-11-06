const links = [
  { label: "Email", href: "mailto:moeketsi@blackdotstudios.co.za" },
  { label: "GitHub", href: "https://github.com/Moeketsi17" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moeketsi-l-2032a222a/" },
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
            Hiring? Let&apos;s talk.
          </h2>
          <p
            data-scroll-slide
            className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-muted"
          >
            I&apos;m open to full-time opportunities where I can contribute to a
            product team from day one. If you&apos;re hiring, or want to talk
            about a role, I&apos;d be glad to share my CV and hear more about
            your team.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="border border-foreground px-5 py-3 text-xs font-bold uppercase tracking-[0.18em] hover:border-accent hover:bg-accent hover:text-white"
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
