"use client";

import { useState } from "react";

const menuItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Brands", href: "#brands" },
  { label: "Experience", href: "#experience" },
  { label: "Technologies", href: "#technologies" },
  { label: "Contact", href: "#contact" },
];

const contactLinks = [
  { label: "Email", href: "mailto:moeketsi@blackdotstudios.co.za" },
  { label: "GitHub", href: "https://github.com/Moeketsi17" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/moeketsi-l-2032a222a/" },
];

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8">
      <nav
        aria-label="Main navigation"
        className={`relative z-10 grid grid-cols-[1fr_auto] items-start gap-4 text-[0.68rem] font-semibold uppercase tracking-[0.18em] sm:grid-cols-3 ${
          isMenuOpen
            ? "text-foreground"
            : "text-[var(--nav-difference-source)] mix-blend-difference"
        }`}
      >
        <a href="#" className="leading-[0.95] hover:text-accent">
          Moeketsi
          <br />
          L.
        </a>
        <p className="hidden justify-self-center text-center sm:block">
          Front-End / Web
          <br />
          Developer
        </p>
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="flex h-10 w-10 items-center justify-center justify-self-end border border-current hover:border-accent hover:text-accent"
        >
          <span className="relative h-3.5 w-4" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-px w-full bg-current transition-transform ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-full bg-current transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-full bg-current transition-transform ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      <div
        id="site-menu"
        className={`fixed inset-0 bg-background px-4 pb-8 pt-28 text-foreground transition-all duration-300 sm:px-6 lg:px-8 ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`flex h-full flex-col items-start justify-between gap-8 text-left transition-transform duration-300 ${
            isMenuOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <ul className="w-full max-w-[min(100%,72rem)] space-y-3 font-display text-[clamp(1.85rem,6vw,4.5rem)] font-bold uppercase leading-[0.95] tracking-normal sm:space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="grid w-full justify-items-start gap-5 border-t border-line pt-6 text-left text-[0.7rem] font-bold uppercase tracking-[0.2em] text-muted">
            <p className="max-w-md">
              Contact
              <br />
              Available for selected web and front-end projects.
            </p>
            <div className="flex flex-wrap justify-start gap-3">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="border border-current px-4 py-2 hover:border-accent hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
