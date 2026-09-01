import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Artwork } from "./ArtworkCard";

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export function Lightbox({ artwork, onClose }: LightboxProps) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (artwork) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [artwork, handleEscape]);

  return (
    <AnimatePresence>
      {artwork && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm overflow-y-auto"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-[110] flex size-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
            aria-label="Закрыть"
          >
            <X className="size-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="mx-6 my-12 flex max-h-[90vh] max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-16"
          >
            {/* Image */}
            <div className="relative flex-1 overflow-hidden">
              <img
                src={artwork.imageUrl}
                alt={artwork.title}
                className="max-h-[65vh] w-full object-contain"
              />
            </div>

            {/* Details */}
            <div className="w-full max-w-sm shrink-0 lg:max-w-xs overflow-y-auto">
              <div className="flex items-center gap-3">
                <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {artwork.series}
                </p>
                <span
                  className={`inline-flex items-center px-2 py-0.5 font-sans text-[9px] uppercase tracking-[0.12em] ${
                    artwork.status === "available"
                      ? "bg-foreground/10 text-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {artwork.status === "available" ? "Available" : "Sold out"}
                </span>
              </div>
              <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
                {artwork.title}
              </h2>
              <div className="mt-6 space-y-3 border-t border-border/50 pt-6">
                <div className="flex justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    Год
                  </span>
                  <span className="font-sans text-sm text-foreground">{artwork.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    Техника
                  </span>
                  <span className="font-sans text-sm text-foreground">{artwork.medium}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    Размер
                  </span>
                  <span className="font-sans text-sm text-foreground">{artwork.dimensions}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    Цена
                  </span>
                  <span className="font-sans text-sm text-foreground">{artwork.price}</span>
                </div>
              </div>

              {/* Description */}
              {artwork.description && (
                <div className="mt-8">
                  <h3 className="mb-3 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Описание
                  </h3>
                  <p className="font-serif text-base font-light leading-relaxed text-foreground">
                    {artwork.description}
                  </p>
                </div>
              )}

              {artwork.status === "available" && (
                <a
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground hover:opacity-70"
                >
                  Заказать такую же работу
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
