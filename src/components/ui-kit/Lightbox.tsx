import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onIndexChange,
  caption,
}: {
  images: string[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  caption?: string | undefined;
}) {
  const indexRef = useRef(index);
  indexRef.current = index;
  const imagesRef = useRef(images);
  imagesRef.current = images;
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const onIndexChangeRef = useRef(onIndexChange);
  onIndexChangeRef.current = onIndexChange;

  const step = useCallback((dir: number) => {
    const curIdx = indexRef.current;
    const imgs = imagesRef.current;
    if (curIdx === null || imgs.length === 0) return;
    onIndexChangeRef.current((curIdx + dir + imgs.length) % imgs.length);
  }, []);

  // Prefetch next and previous images for instant lightbox transitions
  useEffect(() => {
    if (index === null || images.length <= 1) return;
    const nextIdx = (index + 1) % images.length;
    const prevIdx = (index - 1 + images.length) % images.length;
    if (images[nextIdx]) {
      const imgNext = new Image();
      imgNext.src = images[nextIdx];
    }
    if (images[prevIdx]) {
      const imgPrev = new Image();
      imgPrev.src = images[prevIdx];
    }
  }, [index, images]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index !== null, step]);

  if (index === null) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
      className="fixed inset-0 z-100 flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-md"
    >
      <button
        type="button"
        aria-label="Close preview"
        onClick={onClose}
        className="absolute right-5 top-5 grid size-11 place-items-center rounded-full glass-strong text-ink"
      >
        <X className="size-5" />
      </button>
      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          step(-1);
        }}
        className="absolute left-3 grid size-11 place-items-center rounded-full glass-strong text-ink sm:left-8"
      >
        <ChevronLeft className="size-5" />
      </button>
      <figure className="max-h-full" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          alt={caption ?? "Preview"}
          decoding="async"
          className="max-h-[80vh] w-auto rounded-3xl object-contain shadow-lift"
        />
        {caption ? (
          <figcaption className="mt-3 text-center text-sm text-white/85">{caption}</figcaption>
        ) : null}
      </figure>
      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          step(1);
        }}
        className="absolute right-3 grid size-11 place-items-center rounded-full glass-strong text-ink sm:right-8"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
}
