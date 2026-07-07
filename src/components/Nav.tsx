const navMeta = "AVAILABLE / 2026-2028";

export function Nav() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className="grid grid-cols-[1fr_auto] items-start gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--nav-difference-source)] mix-blend-difference sm:grid-cols-3"
      >
        <a href="#" className="leading-[0.95] hover:opacity-70">
          Moeketsi
          <br />
          L.
        </a>
        <p className="hidden justify-self-center text-center sm:block">
          Front-End / Web
          <br />
          Developer
        </p>
        <a
          href="mailto:hello@example.com"
          className="justify-self-end rounded-full border border-current px-4 py-2 text-[0.65rem] hover:opacity-70"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
