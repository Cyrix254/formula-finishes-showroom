import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { ExternalLink, Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { CtaBanner } from "@/components/ui-kit/CtaBanner";
import { Lightbox } from "@/components/ui-kit/Lightbox";
import { PageHero } from "@/components/ui-kit/PageHero";
import { ProductCard } from "@/components/ui-kit/ProductCard";
import { SectionHeading } from "@/components/ui-kit/SectionHeading";
import { catalogues } from "@/data/catalogues";
import { collections, productCategories, products, type ProductCategoryId } from "@/data/products";
import { cn } from "@/lib/utils";

const categoryIds = productCategories.map((c) => c.id);

export const Route = createFileRoute("/products")({
  validateSearch: (search: Record<string, unknown>) => ({
    category: categoryIds.includes(search["category"] as ProductCategoryId)
      ? (search["category"] as ProductCategoryId)
      : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Products | Wallpapers, Murals, Panels, Blinds & Carpets" },
      {
        name: "description",
        content:
          "Browse our full catalogue: wallpapers, contact papers, custom murals, wall panels, roller and vertical blinds, window films, carpets and flooring.",
      },
      { property: "og:title", content: "Products | Wallpapers, Murals, Panels, Blinds & Carpets" },
      {
        property: "og:description",
        content: "Filter our interior finishes catalogue by category and collection.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const { category } = Route.useSearch();
  const navigate = useNavigate({ from: "/products" });
  const [collection, setCollection] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const activeCategory = category ?? null;

  const visibleCollections = useMemo(
    () => collections.filter((c) => !activeCategory || c.category === activeCategory),
    [activeCategory],
  );

  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return products.filter((p) => {
      const matchCategory = !activeCategory || p.category === activeCategory;
      const matchCollection = !collection || p.collection === collection;
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.collection.toLowerCase().includes(q);
      return matchCategory && matchCollection && matchQuery;
    });
  }, [activeCategory, collection, searchQuery]);

  const setCategory = (next: ProductCategoryId | null) => {
    setCollection(null);
    navigate({ search: { category: next ?? undefined } });
  };

  const relevantCatalogues = catalogues.filter(
    (c) => !activeCategory || c.category === activeCategory,
  );

  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Our Collection"
        description={`Our collection brings together ${products.length} designs across wallpapers, murals, wall panels, contact papers, blinds, films and flooring. Take a closer look and see what fits your vision. `}
      />

      <section className="mx-auto max-w-7xl px-6 pb-6">
        <div className="mb-6 relative max-w-md">
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-ink/70" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search wallpapers, panels, codes (e.g. WPN-001, marble)..."
            className="w-full rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-card/70 py-3 pl-11 pr-10 text-sm text-ink outline-none transition-colors placeholder:text-ink/70 focus:border-brand shadow-sm"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-ink/70 hover:bg-neutral-200 dark:hover:bg-neutral-800"
            >
              <X className="size-4" />
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={!activeCategory} onClick={() => setCategory(null)}>
            All products
          </FilterChip>
          {productCategories.map((c) => (
            <FilterChip
              key={c.id}
              active={activeCategory === c.id}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </FilterChip>
          ))}
        </div>

        {visibleCollections.length > 1 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            <FilterChip small active={!collection} onClick={() => setCollection(null)}>
              All collections
            </FilterChip>
            {visibleCollections.map((c) => (
              <FilterChip
                key={`${c.category}-${c.label}`}
                small
                active={collection === c.label}
                onClick={() => setCollection(c.label)}
              >
                {c.label}
              </FilterChip>
            ))}
          </div>
        ) : null}

        <p className="mt-5 text-sm text-ink/70">
          Showing {filtered.length} {filtered.length === 1 ? "design" : "designs"}
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} priority={i < 6} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
        {filtered.length === 0 ? (
          <p className="rounded-3xl glass p-8 text-center text-sm text-ink/75">
            Nothing in this combination yet — try another collection.
          </p>
        ) : null}
      </section>

      {relevantCatalogues.length > 0 ? (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <SectionHeading
            eyebrow="Catalogues"
            title="Download the full PDF catalogues"
            description="Every design in a range, page by page — handy for sharing with a client or contractor."
          />
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {relevantCatalogues.map((c) => (
              <a
                key={c.url}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between gap-3 rounded-2xl glass px-5 py-4 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
              >
                {c.title}
                <ExternalLink className="size-4 shrink-0 text-brand" />
              </a>
            ))}
          </div>
        </section>
      ) : null}

      <Lightbox
        images={filtered.map((p) => p.image)}
        index={openIndex}
        onIndexChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
        caption={openIndex !== null ? filtered[openIndex]?.name : undefined}
      />

      <CtaBanner />
    </>
  );
}

function FilterChip({
  active,
  small,
  onClick,
  children,
}: {
  active: boolean;
  small?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-4 py-2 font-semibold transition-colors",
        small ? "text-xs" : "text-sm",
        active ? "bg-brand text-brand-foreground shadow-glass" : "glass text-ink/70 hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
