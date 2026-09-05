import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { Lightbox } from "@/components/ui-kit/Lightbox";
import { PageHero } from "@/components/ui-kit/PageHero";
import { galleryImages } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | Finishes, Textures & Installations" },
      {
        name: "description",
        content:
          "A visual gallery of our wallpapers, contact papers, murals, wall panels, blinds, films, carpets and grass turf.",
      },
      { property: "og:title", content: "Gallery | Finishes, Textures & Installations" },
      {
        property: "og:description",
        content: "Browse textures and finishes from our full interior catalogue.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Textures, patterns and finished rooms"
        description="A mixed look through our ranges — tap any image to open it full size and arrow through the set."
      />

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {galleryImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-3xl glass p-1.5 shadow-glass transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Interior finish sample ${i + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={galleryImages}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />

      <CtaBanner />
    </>
  );
}
