import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Lightbox } from "@/components/Lightbox";
import { artworks } from "@/data/artworks";
import type { Artwork } from "@/components/ArtworkCard";

/** How many works the page shows before the visitor picks a sort. */
const FEATURED_COUNT = 6;

type SortMode = "all" | "available" | "sold" | "latest";

const sorts: { key: SortMode; label: string }[] = [
  { key: "all", label: "Все" },
  { key: "available", label: "В наличии" },
  { key: "sold", label: "Распродано" },
  { key: "latest", label: "Последние" },
];

/** Release order used by «Последние». The carpet series is dated only by year
 *  (the studio publishes no per-work dates), so the newest catalogue entry
 *  comes first once the years tie. */
const byRelease = [...artworks].sort(
  (a, b) => Number(b.year) - Number(a.year) || Number(b.id) - Number(a.id),
);

export default function Gallery() {
  const [sort, setSort] = useState<SortMode | null>(null);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const shownArtworks =
    sort === null
      ? artworks.slice(0, FEATURED_COUNT)
      : sort === "all"
        ? artworks
        : sort === "latest"
          ? byRelease
          : artworks.filter((a) => a.status === sort);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-10 lg:pb-14">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Портфолио
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-foreground md:text-6xl">
              <span className="italic">Картины</span>
            </h1>
          </FadeIn>

          {/* Sort row — it is also the way to the rest of the catalogue */}
          <FadeIn delay={0.1}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              {sorts.map((option) => (
                <button
                  key={option.key}
                  onClick={() => setSort(sort === option.key ? null : option.key)}
                  aria-pressed={sort === option.key}
                  className={`border px-5 py-2 font-sans text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
                    sort === option.key
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="mt-5 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              {sort === null
                ? `Показаны ${shownArtworks.length} из ${artworks.length} работ — выберите сортировку, чтобы увидеть остальные`
                : `Показаны ${shownArtworks.length} из ${artworks.length} работ`}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Grid — two columns on phones, three from lg */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          {/* Re-keyed on the sort so each set fades in without waiting on an
              exit animation that a backgrounded tab would never finish. */}
          <div
            key={sort ?? "featured"}
            className="grid animate-in fade-in grid-cols-2 gap-x-4 gap-y-10 duration-300 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16"
          >
            {shownArtworks.map((work, i) => (
              <ArtworkCard
                key={work.id}
                artwork={work}
                index={i}
                onClick={() => setSelectedArtwork(work)}
              />
            ))}
          </div>

          {shownArtworks.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-sans text-sm text-muted-foreground">
                Работ в этой категории пока нет.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />

      <Footer />
    </div>
  );
}
