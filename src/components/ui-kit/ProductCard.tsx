import { useState } from "react";
import { ImageOff } from "lucide-react";
import type { Product } from "@/data/products";
import { site } from "@/data/site";

export function ProductCard({
  product,
  onOpen,
  priority = false,
}: {
  product: Product;
  onOpen?: () => void;
  priority?: boolean;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen?.();
        }
      }}
      className="group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-3xl glass text-left shadow-glass transition-transform duration-300 hover:-translate-y-1.5 cv-auto"
    >
      <div className="shrink-0 aspect-4/5 overflow-hidden bg-neutral-200/30 dark:bg-neutral-800/30 relative">
        {hasError ? (
          <div className="flex size-full flex-col items-center justify-center gap-2 p-4 text-center text-ink/50 bg-neutral-100 dark:bg-neutral-900">
            <ImageOff className="size-8 text-brand/60" />
            <span className="text-xs font-medium">{product.name}</span>
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setHasError(true)}
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-brand">
          {product.collection}
        </p>
        <p className="mt-1 font-display text-sm font-bold text-ink">{product.name}</p>
        <p className="mt-1 text-xs leading-relaxed text-ink/70">
          {product.description}
        </p>
        <a
          href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in ordering the ${product.name} (${product.collection}).`)}`}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const phone = site.whatsapp.replace(/\D/g, "");
            const text = encodeURIComponent(`Hi, I'm interested in ordering the ${product.name} (${product.collection}).`);
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            const url = isMobile 
              ? `https://wa.me/${phone}?text=${text}`
              : `whatsapp://send?phone=${phone}&text=${text}`;
            window.location.href = url;
          }}
          className="mt-auto mt-4 block w-full rounded-full bg-black px-4 py-2 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-600"
        >
          Order Now
        </a>
      </div>
    </div>
  );
}
