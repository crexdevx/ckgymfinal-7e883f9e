import { useEffect, useState } from "react";
import { X, ImageIcon } from "lucide-react";

/**
 * Gallery — drop real gym photos into this array.
 * Each entry: { src: "<image url or import>", alt: "..." }
 * Leave `src` empty to render a placeholder tile.
 */
export type GalleryItem = { src?: string; alt: string; tall?: boolean };

const items: GalleryItem[] = [
  { alt: "CK Gym training floor", tall: true },
  { alt: "Free weights area at CK Gym" },
  { alt: "Cardio area at CK Gym" },
  { alt: "Members training at CK Gym" },
  { alt: "Machines at CK Gym", tall: true },
  { alt: "CK Gym interior" },
];

export function Gallery() {
  const [active, setActive] = useState<GalleryItem | null>(null);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="border-y border-border bg-background">
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="eyebrow">Gallery</p>
        <h2 className="mt-4 font-display text-4xl sm:text-5xl">
          Inside <span className="text-gradient-gold">CK Gym</span>
        </h2>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          A look at the floor, the iron and the people who train here.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {items.map((item, i) => (
            <button
              key={i}
              type="button"
              onClick={() => item.src && setActive(item)}
              className={`group relative overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary/60 ${
                item.tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[4/3]"
              }`}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <span className="absolute inset-0 grid place-items-center gap-2 text-muted-foreground">
                  <ImageIcon className="mx-auto size-6 text-primary/60" />
                </span>
              )}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {active?.src ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-5"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close image"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-sm border border-border text-foreground hover:border-primary hover:text-primary"
          >
            <X className="size-5" />
          </button>
          <img
            src={active.src}
            alt={active.alt}
            className="max-h-[85svh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>
      ) : null}
    </section>
  );
}
