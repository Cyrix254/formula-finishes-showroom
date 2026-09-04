import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";

import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="glass border-t border-white/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-2xl bg-gradient-brand font-display text-sm font-extrabold text-brand-foreground">
              FF
            </span>
            <span className="font-display font-bold tracking-tight text-ink">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink/60">
            Wallpapers, murals, wall panels, blinds, films and carpets — supplied and installed
            across Kenya by our own crew.
          </p>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-ink">Explore</p>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink/60">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="transition-colors hover:text-ink"
                activeOptions={{ exact: link.to === "/" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="font-display text-sm font-bold text-ink">Get in touch</p>
          <ul className="mt-4 space-y-3 text-sm text-ink/60">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-brand" />
              <a href={`mailto:${site.email}`} className="hover:text-ink">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="size-4 text-brand" />
              {site.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-ink/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>{site.hours}</p>
        </div>
      </div>
    </footer>
  );
}
