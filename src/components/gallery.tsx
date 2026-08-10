import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

import gym1 from "@/assets/gallery/gym-1.jpg";
import gym2 from "@/assets/gallery/gym-2.webp";
import gym3 from "@/assets/gallery/gym-3.webp";
import gym4 from "@/assets/gallery/gym-4.webp";
import gym5 from "@/assets/gallery/gym-5.webp";
import gym6 from "@/assets/gallery/gym-6.webp";
import gym7 from "@/assets/gallery/gym-7.webp";
import gym8 from "@/assets/gallery/gym-8.webp";
import gym9 from "@/assets/gallery/gym-9.jpg";

export type GalleryItem = { src: string; alt: string; tall?: boolean };

const items: GalleryItem[] = [
  { src: gym1, alt: "Spin bikes lined up by the windows at CK Gym Nalbari" },
  { src: gym2, alt: "Dumbbell rack with rubber dumbbells at CK Gym", tall: true },
  { src: gym3, alt: "T-Rex 2.0 treadmills in the cardio area at CK Gym" },
  { src: gym4, alt: "Main training floor with benches and machines at CK Gym", tall: true },
  { src: gym5, alt: "Plate-loaded chest press machines at CK Gym" },
  { src: gym6, alt: "Leg press and squat racks at CK Gym" },
  { src: gym7, alt: "Cable crossover and functional trainer at CK Gym" },
  { src: gym8, alt: "Smith machine and power rack at CK Gym", tall: true },
  { src: gym9, alt: "Punching bag and cardio machines at CK Gym" },
];

function RevealTile({ item, index, onOpen }: { item: GalleryItem; index: number; onOpen: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      style={{ transitionDelay: `${(index % 3) * 90}ms` }}
      className={`group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-700 ease-out hover:border-primary/60 ${
        item.tall ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[4/3]"
      } ${visible ? "translate-y-0 opacity-100 blur-0" : "translate-y-8 opacity-0 blur-[2px]"}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </button>
  );
}

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
            <RevealTile key={item.src} item={item} index={i} onOpen={() => setActive(item)} />
          ))}
        </div>
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] grid animate-fade-in place-items-center bg-background/95 p-5"
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
