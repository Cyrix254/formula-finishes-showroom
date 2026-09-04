import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks, site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid size-9 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-extrabold text-brand-foreground">
            FF
          </span>
          <span className="font-display text-sm font-bold tracking-tight text-ink sm:text-base">
            {site.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "bg-white/70 text-ink" }}
              className="rounded-full px-3.5 py-2 transition-colors hover:bg-white/70 hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Get a quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full glass-strong text-ink md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div className="glass-strong border-t border-white/60 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "text-ink" }}
                className="rounded-xl px-2 py-3 text-sm font-medium text-ink/70 transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
