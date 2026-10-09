import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { navLinks, site } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/60 dark:border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link 
          to="/" 
          className="flex items-center gap-2" 
          onClick={() => {
            setOpen(false);
            if (window.location.pathname === "/") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <img 
            src="/logo.jpg" 
            alt={site.name} 
            className="h-10 w-auto object-contain rounded-md"
          />
          <span className="font-display text-sm font-bold tracking-tight text-ink sm:text-base">
            {site.shortName}
          </span>
        </Link>

        <div className="hidden items-center gap-1 text-sm font-medium text-ink/70 md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.to + link.label}
                to={link.to}
                hash={(link as any).hash}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{ className: "bg-brand text-brand-foreground shadow-sm" }}
                onClick={() => {
                  if (window.location.pathname === link.to) {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className="flex items-center gap-2 rounded-full px-3.5 py-2 transition-colors hover:bg-brand hover:text-brand-foreground hover:shadow-sm"
              >
                {Icon && <Icon className="size-4" />}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/"
            hash="contact"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:inline-flex"
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
        <div className="glass-strong border-t border-white/60 dark:border-white/10 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.to + link.label}
                  to={link.to}
                  hash={(link as any).hash}
                  onClick={() => {
                    setOpen(false);
                    if (window.location.pathname === link.to) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "bg-brand text-brand-foreground shadow-sm" }}
                  className="flex items-center gap-3 rounded-xl px-2 py-3 text-sm font-medium text-ink/70 transition-colors hover:bg-brand hover:text-brand-foreground hover:shadow-sm"
                >
                  {Icon && <Icon className="size-5" />}
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-4 flex items-center justify-start px-2 py-3">
              <ThemeToggle className="w-full justify-center py-5 shadow-sm" />
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
