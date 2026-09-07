import { Link } from "@tanstack/react-router";

import { site } from "@/data/site";

export function CtaBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-brand px-8 py-14 text-center shadow-lift">
        <h2 className="font-display text-3xl font-extrabold text-brand-foreground lg:text-4xl">
          Ready to transform your space?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-brand-foreground/85">
          Send us your room photos or measurements and we&apos;ll come back with finish options and a
          fitted quote.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-brand-foreground px-6 py-3 text-sm font-semibold text-brand shadow-lift transition-transform hover:-translate-y-0.5"
          >
            Request a quote
          </Link>
          <a
            href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
