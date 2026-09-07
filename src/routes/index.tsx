import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { GlassCard } from "@/components/ui-kit/GlassCard";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { projectImages } from "@/data/gallery";
import { featuredProducts, productCategories } from "@/data/products";
import { services, site, stats, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Formula Finishes and Interiors | Premium Wall & Floor Finishes Kenya" },
      {
        name: "description",
        content:
          "Wallpapers, custom murals, wall panels, blinds, window films and carpets — supplied and installed across Kenya by our own fitting crew.",
      },
      {
        property: "og:title",
        content: "Formula Finishes and Interiors | Premium Wall & Floor Finishes Kenya",
      },
      {
        property: "og:description",
        content:
          "Premium interior finishes supplied and installed across Kenya — wallpapers, murals, panels, blinds, films and carpets.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative mt-16 flex min-h-[80vh] items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <img
            src="/images/hero-interior.jpg"
            alt=""
            className="size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/60 to-ink/45" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 py-20 lg:py-28">
          <span className="inline-flex items-center rounded-full glass-dark px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-white">
            {site.tagline}
          </span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[1.03] text-brand-foreground lg:text-7xl">
            Formula Finishes
            <span className="block">and Interiors</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            We supply and install wallpapers, custom murals, wall panels, blinds, window films and
            carpets — measured, fitted and cleaned up by our own team across Kenya.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/products"
              search={{ category: undefined }}
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              Browse products <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="rounded-full glass-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-ink"
            >
              Book a site visit
            </Link>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass-strong p-4">
                <dt className="font-display text-2xl font-extrabold text-ink">{s.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-ink/70">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading
          eyebrow="What we supply"
          title="Seven collections, one fitting crew"
          description="Every range below is stocked or printed to order, then installed by the same team that measured your space."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {productCategories.map((c, i) => (
            <Reveal key={c.id} delay={i * 60}>
              <GlassCard hover className="h-full">
                <p className="font-display text-lg font-bold text-ink">{c.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{c.description}</p>
                <Link
                  to="/products"
                  search={{ category: c.id }}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                >
                  See the range <ArrowRight className="size-4" />
                </Link>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Featured" title="A taste of the catalogue" />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {featuredProducts.map((p, i) => (
            <Reveal key={p.id} delay={i * 50}>
              <div className="overflow-hidden rounded-3xl glass shadow-glass">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand">
                    {p.collection}
                  </p>
                  <p className="mt-1 font-display text-sm font-bold text-ink">{p.name}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="How it works" title="From first visit to final wipe-down" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.step} delay={i * 70}>
              <GlassCard hover className="h-full">
                <span className="font-display text-3xl font-extrabold text-brand">{s.step}</span>
                <p className="mt-3 font-display text-base font-bold text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Recent work" title="Installations we're proud of" />
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {projectImages.slice(1, 7).map((src, i) => (
            <Reveal key={src} delay={i * 60}>
              <img
                src={src}
                alt={`Completed interior installation ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full rounded-3xl object-cover shadow-glass"
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-8">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand"
          >
            View all projects <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Clients" title="What people say" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 70}>
              <GlassCard className="h-full">
                <Check className="size-5 text-brand" />
                <p className="mt-4 text-sm leading-relaxed text-ink/70">“{t.quote}”</p>
                <p className="mt-5 font-display text-sm font-bold text-ink">{t.author}</p>
                <p className="text-xs text-ink/70">{t.role}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
