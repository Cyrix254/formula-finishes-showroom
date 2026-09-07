import type { Product } from "@/data/products";

export function ProductCard({ product, onOpen }: { product: Product; onOpen?: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group block w-full overflow-hidden rounded-3xl glass text-left shadow-glass transition-transform duration-300 hover:-translate-y-1.5"
    >
      <div className="aspect-4/5 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {product.collection}
        </p>
        <p className="mt-1 font-display text-sm font-bold text-ink">{product.name}</p>
        <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink/70">
          {product.description}
        </p>
      </div>
    </button>
  );
}
