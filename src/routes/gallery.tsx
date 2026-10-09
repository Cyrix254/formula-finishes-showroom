import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { Lightbox } from "@/components/ui-kit/Lightbox";
import { PageHero } from "@/components/ui-kit/PageHero";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

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

const categories = [
  { id: "all", label: "All textures" },
  { id: "wallpapers", label: "Wallpapers" },
  { id: "murals", label: "Murals" },
  { id: "contact-papers", label: "Contact Papers" },
  { id: "window-blinds", label: "Window Blinds" },
  { id: "window-films", label: "Window Films" },
  { id: "carpets", label: "Carpets & Grass" },
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") return galleryImages;
    return galleryImages.filter((src) => {
      if (activeCategory === "wallpapers") return src.includes("/wallpapers/");
      if (activeCategory === "murals") return src.includes("/murals-");
      if (activeCategory === "contact-papers") return src.includes("/contact-papers/");
      if (activeCategory === "window-blinds") return src.includes("/window-blinds/");
      if (activeCategory === "window-films") return src.includes("/window-films/");
      if (activeCategory === "carpets") return src.includes("/carpets/") || src.includes("/grass-carpets/");
      return true;
    });
  }, [activeCategory]);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Textures, patterns and finished rooms"
        description="A mixed look through our ranges — tap any image to open it full size and arrow through the set."
      />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => {
                setActiveCategory(c.id);
                setOpenIndex(null);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                activeCategory === c.id
                  ? "bg-brand text-brand-foreground shadow-glass"
                  : "glass text-ink/70 hover:text-ink"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
          {filteredImages.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group block w-full overflow-hidden rounded-3xl glass p-1.5 shadow-glass transition-transform duration-300 hover:-translate-y-1"
            >
              <img
                src={src}
                alt={`Interior finish sample ${i + 1}`}
                loading={i < 8 ? "eager" : "lazy"}
                fetchPriority={i < 4 ? "high" : "auto"}
                decoding="async"
                className="w-full min-h-[160px] rounded-2xl bg-neutral-200/20 dark:bg-neutral-800/20 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        images={filteredImages}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />

      <CtaBanner />
    </>
  );
}
