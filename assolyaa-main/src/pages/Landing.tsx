import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { artworks } from "@/data/artworks";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

const navCards = [
  {
    label: "Ассоль",
    path: "/about",
    image: assetUrl("images/card-about.jpg"),
  },
  {
    label: "Галерея",
    path: "/gallery",
    image: assetUrl("images/card-gallery.jpg"),
  },
  {
    label: "Мастерская",
    path: "/studio",
    image: assetUrl("images/card-studio.jpg"),
  },
  {
    label: "СМИ и Достижения",
    path: "/press",
    image: assetUrl("images/card-press.jpg"),
  },
];

const sampleWorks = artworks.slice(0, 3);

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Header / Hero ─── */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ scale: heroScale }} className="absolute inset-0">
          <img
            src={assetUrl("images/hero.jpg")}
            alt="Ассоль — картины на ковре"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative flex h-full flex-col items-center justify-end px-6 pb-24 text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-4 font-sans text-[11px] uppercase tracking-[0.25em] text-foreground/60"
          >
            Картины на ковре &middot; #KilemArt
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-serif text-5xl font-light leading-[1.1] tracking-tight text-foreground md:text-7xl lg:text-8xl"
          >
            Ассоль
            <br />
            <span className="italic">Assolyaa</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-10 flex flex-col items-center gap-4"
          >
            <Link
              to="/gallery"
              className="group flex items-center gap-3 border-b border-foreground/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] transition-all duration-300 hover:border-foreground"
            >
              Смотреть работы
              <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="h-12 w-px animate-pulse bg-foreground/20" />
          </div>
        </motion.div>
      </section>

      {/* ─── 4 Navigation Cards ─── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {navCards.map((card, i) => (
              <FadeIn key={card.path} delay={i * 0.1}>
                <Link to={card.path} className="group block">
                  {/* Image with shadow overlay */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-parchment">
                    <img
                      src={card.image}
                      alt={card.label}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                    {/* Shadow gradient at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />
                    {/* Title overlaid on shadow */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-serif text-2xl font-light text-ivory transition-all duration-500 group-hover:tracking-wider">
                        {card.label}
                      </h3>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Sample Works ─── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="mb-16 flex items-end justify-between">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Избранные работы
                </p>
                <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
                  Картины на ковре
                </h2>
              </div>
              <Link
                to="/gallery"
                className="group hidden items-center gap-2 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground md:flex"
              >
                Все работы
                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sampleWorks.map((work, i) => (
              <FadeIn key={work.id} delay={i * 0.1}>
                <Link to="/gallery" className="group block">
                  <div className="aspect-[3/4] overflow-hidden bg-parchment">
                    <img
                      src={work.imageUrl}
                      alt={work.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <h3 className="font-serif text-lg font-light text-foreground transition-opacity duration-300 group-hover:opacity-60">
                      {work.title}
                    </h3>
                    <span
                      className={`font-sans text-[10px] uppercase tracking-[0.12em] ${
                        work.status === "available"
                          ? "text-muted-foreground"
                          : "text-foreground"
                      }`}
                    >
                      {work.status === "available" ? "Available" : "Sold out"}
                    </span>
                  </div>
                  <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {work.dimensions} &mdash; {work.year}
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <div className="mt-12 flex justify-center lg:hidden">
              <Link
                to="/gallery"
                className="group flex items-center gap-2 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground"
              >
                Смотреть все работы
                <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Commission Info Block ─── */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              Картина на ковре под заказ
            </p>
            <h2 className="mt-6 font-serif text-3xl font-light leading-snug text-ivory md:text-5xl">
              Закажите картину на ковре
              <br />
              <span className="italic">по индивидуальному заказу</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-8 text-left sm:grid-cols-3">
              <div className="border-t border-ivory/20 pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                  Стандартные размеры
                </p>
                <p className="mt-2 font-serif text-lg font-light text-ivory">
                  150 × 100 см
                  <br />
                  230 × 150 см
                </p>
              </div>
              <div className="border-t border-ivory/20 pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                  Стоимость
                </p>
                <p className="mt-2 font-serif text-lg font-light text-ivory">
                  3 000 000 ₸
                  <br />
                  (~6 000 $)
                </p>
              </div>
              <div className="border-t border-ivory/20 pt-6">
                <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                  Лист ожидания
                </p>
                <p className="mt-2 font-serif text-lg font-light text-ivory">
                  5–6 месяцев
                </p>
              </div>
            </div>
            <p className="mt-10 font-sans text-sm leading-relaxed text-ivory/60">
              Отправляем картины в любую точку мира по тарифам курьерской службы.
            </p>
            <Link
              to="/collaborate"
              className="mt-10 inline-flex items-center gap-3 border-b border-ivory/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:border-ivory"
            >
              Подробнее о заказе
              <ArrowRight className="size-3" />
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* ─── Contacts Block ─── */}
      <section className="px-6 py-24 lg:px-12">
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
                href="tel:+77777014666"
                className="block font-serif text-xl font-light text-foreground transition-opacity hover:opacity-60"
              >
                +7 777 701 46 66
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
