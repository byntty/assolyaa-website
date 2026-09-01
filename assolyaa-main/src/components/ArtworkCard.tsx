import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export type ArtworkStatus = "available" | "sold";

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  price: string;
  status: ArtworkStatus;
  series: string;
  imageUrl: string;
  description?: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
  index?: number;
  onClick?: () => void;
}

export function ArtworkCard({ artwork, index = 0, onClick }: ArtworkCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-parchment">
        <img
          src={artwork.imageUrl}
          alt={artwork.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/5" />
        {/* Status badge */}
        <div className="absolute left-4 top-4">
          <span
            className={`inline-flex items-center px-3 py-1 font-sans text-[10px] uppercase tracking-[0.12em] backdrop-blur-sm ${
              artwork.status === "available"
                ? "bg-background/80 text-foreground"
                : "bg-foreground/80 text-background"
            }`}
          >
            {artwork.status === "available" ? "Available" : "Sold out"}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="mt-5 flex flex-col gap-2">
        <h3 className="font-serif text-lg font-light tracking-wide text-foreground transition-colors duration-300 group-hover:opacity-70">
          {artwork.title}
        </h3>
        <div className="flex items-center justify-between gap-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
            {artwork.dimensions}
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-foreground">
            {artwork.price}
          </p>
        </div>
        {/* Description button */}
        <button
          onClick={onClick}
          className="mt-3 flex items-center gap-2 border-b border-foreground/20 pb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-all duration-300 hover:border-foreground hover:text-foreground w-fit"
        >
          <FileText className="size-3" />
          Описание
        </button>
      </div>
    </motion.article>
  );
}
