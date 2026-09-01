import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArtworkCard } from "@/components/ArtworkCard";
import { Lightbox } from "@/components/Lightbox";
import { artworks, series } from "@/data/artworks";
import type { Artwork } from "@/components/ArtworkCard";

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("Все");
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks =
    activeFilter === "Все"
      ? artworks
      : artworks.filter((a) => a.series === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Портфолио
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-foreground md:text-6xl">
              <span className="italic">Галерея</span>
            </h1>
          </FadeIn>

          {/* Filters */}
          <FadeIn delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-3">
              {series.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveFilter(s)}
                  className={`border px-5 py-2 font-sans text-[11px] uppercase tracking-[0.12em] transition-all duration-300 ${
                    activeFilter === s
                      ? "border-foreground bg-foreground text-background"
                      : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {filteredArtworks.map((work, i) => (
                <ArtworkCard
                  key={work.id}
                  artwork={work}
                  index={i}
                  onClick={() => setSelectedArtwork(work)}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredArtworks.length === 0 && (
            <div className="py-32 text-center">
              <p className="font-sans text-sm text-muted-foreground">
                Работы в этой серии пока не добавлены.
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
