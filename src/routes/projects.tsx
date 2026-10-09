import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Completed installations"
        description="Real rooms, finished by our crew. Watch our installation showcase video below and tap any photo to view in full size."
      />

      <section className="mx-auto max-w-7xl px-6 pt-10 pb-4">
        <Reveal>
          <div className="overflow-hidden rounded-3xl glass p-3 sm:p-5 shadow-glass border border-white/60 dark:border-white/10">
            {/* Header Callout Badge */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
              <div className="flex items-center gap-2.5 rounded-full bg-brand/10 border border-brand/20 px-4 py-1.5 text-xs sm:text-sm font-semibold text-brand">
                <Play className="size-4 fill-brand text-brand shrink-0" />
                <span>Video Tour & Installation Showcase</span>
              </div>
              <span className="text-xs font-medium text-ink/60 sm:text-sm">
                {isPlaying
                  ? isVideoLoaded
                    ? "Playing video tour"
                    : "Connecting video stream..."
                  : "Click play button to load & watch"}
              </span>
            </div>

            <div className="relative w-full overflow-hidden rounded-2xl bg-black aspect-16/9 shadow-inner group">
              {isPlaying ? (
                <div className="relative h-full w-full">
                  {!isVideoLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-950 text-white z-10">
                      <div className="size-10 rounded-full border-4 border-brand border-t-transparent animate-spin" />
                      <span className="text-xs font-medium text-neutral-300">
                        Initializing video showcase...
                      </span>
                    </div>
                  )}
                  <iframe
                    src="https://drive.google.com/file/d/17Uww1NOYdJ1fZy17SuXaAbxrWz30RqbU/preview"
                    title="Formula Finishes Project Showcase Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    onLoad={() => setIsVideoLoaded(true)}
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsPlaying(true);
                    setIsVideoLoaded(false);
                  }}
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:scale-[1.01]"
                >
                  <img
                    src={projectImages[2] ?? "/images/hero-interior.jpg"}
                    alt="Formula Finishes installation preview"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity duration-300 group-hover:opacity-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/40 to-neutral-950/60" />
                  
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="flex size-16 sm:size-20 items-center justify-center rounded-full bg-brand text-brand-foreground shadow-lift transition-transform duration-300 group-hover:scale-110">
                      <Play className="size-8 sm:size-10 fill-brand-foreground translate-x-0.5" />
                    </div>
                    <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                      Watch Installation Video Showcase
                    </span>
                    <span className="rounded-full bg-white/20 px-4 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Tap to Play • Fast HD Stream
                    </span>
                  </div>
                </button>
              )}
            </div>

            <div className="px-2 py-4 sm:px-4 sm:py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h2 className="font-display text-xl font-bold text-ink sm:text-2xl flex items-center gap-2">
                  <Play className="size-5 text-brand fill-brand shrink-0" />
                  On-Site Craftsmanship & Installation Video
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base max-w-3xl">
                  Take a look at how our expert installation team measures, prepares, and fits premium feature walls, wall panels, custom murals, and interior finishes across Kenya.
                </p>
              </div>
              <a
                href="https://drive.google.com/file/d/17Uww1NOYdJ1fZy17SuXaAbxrWz30RqbU/view"
                target="_blank"
                rel="noreferrer"
                className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/10 glass px-4 py-2 text-xs font-semibold text-ink hover:text-brand transition-colors"
              >
                Open in Google Drive
              </a>
            </div>
          </div>
        </Reveal>
      </section>

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
