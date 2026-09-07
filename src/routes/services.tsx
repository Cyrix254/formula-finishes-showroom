import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { GlassCard } from "@/components/ui-kit/GlassCard";
import { PageHero } from "@/components/ui-kit/PageHero";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { serviceDetails, services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Wallpaper, Panelling, Blinds & Flooring Installation" },
      {
        name: "description",
        content:
          "Installation services: wallpaper and mural hanging, wall panelling, blinds and window films, carpets and flooring, contact-paper refinishing and commercial fit-outs.",
      },
      {
        property: "og:title",
        content: "Services | Wallpaper, Panelling, Blinds & Flooring Installation",
      },
      {
        property: "og:description",
        content: "Supply and installation of wall, window and floor finishes across Kenya.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Supply and installation, start to finish"
        description="Pick a finish and we handle the rest — survey, samples, ordering, fitting and aftercare."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <GlassCard hover className="h-full">
                <p className="font-display text-lg font-bold text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-ink/70">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <Check className="size-4 shrink-0 text-brand" />
                      {p}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Our process" title="What working with us looks like" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.step} delay={i * 70}>
              <GlassCard className="h-full">
                <span className="font-display text-3xl font-extrabold text-brand">{s.step}</span>
                <p className="mt-3 font-display text-base font-bold text-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{s.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
