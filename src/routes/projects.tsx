import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { GlassCard } from "@/components/ui-kit/GlassCard";
import { Lightbox } from "@/components/ui-kit/Lightbox";
import { PageHero } from "@/components/ui-kit/PageHero";
import { Reveal } from "@/components/ui-kit/Reveal";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { projectImages } from "@/data/gallery";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects | Completed Interior Installations" },
      {
        name: "description",
        content:
          "See completed installations: feature walls, murals, wall panelling, blinds, window films and flooring fitted in homes and offices across Kenya.",
      },
      { property: "og:title", content: "Projects | Completed Interior Installations" },
      {
        property: "og:description",
        content: "A look at feature walls, panelling, blinds and flooring we have installed.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

const highlights = [
  {
    title: "Residential feature walls",
    body: "Living rooms, bedrooms and stairwells finished in 3D embossed papers, fluted panels and printed murals.",
  },
  {
    title: "Office and retail fit-outs",
    body: "Branded reception walls, frosted privacy films and hard-wearing carpet tiles fitted out of hours.",
  },
  {
    title: "Outdoor and play spaces",
    body: "Artificial grass turf, vinyl and SPC flooring for balconies, terraces and kids' areas.",
  },
];

function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed installations"
        description="Real rooms, finished by our crew. Tap any photo to see it full size."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projectImages.map((src, i) => (
            <Reveal key={src} delay={(i % 6) * 60}>
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                className="group block w-full overflow-hidden rounded-3xl glass p-2 shadow-glass transition-transform duration-300 hover:-translate-y-1.5"
              >
                <img
                  src={src}
                  alt={`Completed interior installation ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="aspect-4/3 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <SectionHeading eyebrow="Where we work" title="The spaces we finish most" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {highlights.map((h, i) => (
            <Reveal key={h.title} delay={i * 70}>
              <GlassCard hover className="h-full">
                <p className="font-display text-base font-bold text-ink">{h.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{h.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox
        images={projectImages}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
        caption="Completed installation"
      />

      <CtaBanner />
    </>
  );
}
