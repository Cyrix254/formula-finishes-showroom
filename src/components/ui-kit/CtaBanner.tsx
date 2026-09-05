import { Link } from "@tanstack/react-router";

import { site } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-brand px-8 py-14 text-center shadow-lift">
        <h2 className="font-display text-3xl font-extrabold text-ink lg:text-4xl">
          Ready to transform your space?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/70">
          Send us your room photos or measurements and we&apos;ll come back with finish options and a
          fitted quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            Request a quote
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass-strong px-6 py-3 text-sm font-semibold text-ink"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
