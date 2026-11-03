import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

/** The main screen keeps only the five original section cards. */
const navCards = [
  {
    label: "Обо мне",
    path: "/about",
    image: assetUrl("images/card-about.jpeg"),
  },
  {
    label: "Мои картины",
    path: "/gallery",
    image: assetUrl("images/card-gallery.jpg"),
  },
  {
    label: "Реклама и коллаборации",
    path: "/advertising",
    image: assetUrl("images/fillers/adv.jpg"),
  },
  {
    label: "Обучение",
    path: "/studio",
    image: assetUrl("images/card-studio.jpg"),
  },
  {
    label: "СМИ",
    path: "/press",
    image: assetUrl("images/card-press.jpg"),
  },
];

export default function Landing() {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Arrows stay in sync with the rail: disabled when there is nothing to
  // reveal in that direction (e.g. all cards fit on a very wide screen).
  const syncArrows = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    syncArrows();
    rail.addEventListener("scroll", syncArrows, { passive: true });
    const observer = new ResizeObserver(syncArrows);
    observer.observe(rail);
    window.addEventListener("resize", syncArrows);
    return () => {
      rail.removeEventListener("scroll", syncArrows);
      observer.disconnect();
      window.removeEventListener("resize", syncArrows);
    };
  }, [syncArrows]);

  /** Scroll the rail by exactly one card, so the cards stay aligned to the grid. */
  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>("[data-card]");
    const gap = parseFloat(getComputedStyle(rail).columnGap) || 24;
    const step = card ? card.getBoundingClientRect().width + gap : rail.clientWidth * 0.8;
    rail.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Section cards ─── */}
      <section className="px-6 pt-28 pb-20 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="relative">
            <button
              type="button"
              onClick={() => scrollRail(-1)}
              disabled={atStart}
              aria-label="Предыдущие разделы"
              className="absolute -left-5 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-25 lg:flex"
            >
              <ChevronLeft className="size-4" strokeWidth={1.25} />
            </button>

            {/* One row of cards — the side arrows replace the extra row. The
                rail spans the full container width, so the cards keep the size
                they had in the old four-column grid. */}
            <div
              ref={railRef}
              className="no-scrollbar flex snap-x snap-proximity gap-6 overflow-x-auto scroll-smooth xl:gap-8"
            >
              {navCards.map((card, i) => (
                <FadeIn
                  key={card.path}
                  delay={i * 0.06}
                  className="w-[82%] shrink-0 snap-start sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-6rem)/4)]"
                >
                  <Link to={card.path} data-card className="group block">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-parchment">
                      <img
                        src={card.image}
                        alt={card.label}
                        loading={i < 4 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                      />
                      {/* Shadow gradient at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
                      {/* Label and arrow */}
                      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                        <h3 className="font-serif text-2xl font-light leading-tight text-ivory">
                          {card.label}
                        </h3>
                        <span className="mb-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-ivory/50 text-ivory transition-colors duration-300 group-hover:border-ivory group-hover:bg-ivory group-hover:text-foreground">
                          <ArrowRight className="size-3.5" strokeWidth={1.25} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollRail(1)}
              disabled={atEnd}
              aria-label="Следующие разделы"
              className="absolute -right-5 top-1/2 z-10 hidden size-11 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-25 lg:flex"
            >
              <ChevronRight className="size-4" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── Contacts Block ─── */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Контакты
            </p>
            <h2 className="mt-6 font-serif text-3xl font-light text-foreground md:text-5xl">
              Свяжитесь с нами
            </h2>
            <div className="mt-12 space-y-6">
              <a
                href="tel:+77770011686"
                className="block font-serif text-xl font-light text-foreground transition-opacity hover:opacity-60"
              >
                +7 777 001 1686
              </a>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                WhatsApp / Telegram
              </p>
              <a
                href="mailto:nurdaulet.bekzhan@gmail.com"
                className="block font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                nurdaulet.bekzhan@gmail.com
              </a>
              <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                050000, Казахстан, г. Алматы, пр. Аль-Фараби 21
                <br />
                Блок 9, офис 1256 — «Assolyaa Arts Center»
                <br />
                Ежедневно, 10:00–20:00
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground"
            >
              Форма обратной связи
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
