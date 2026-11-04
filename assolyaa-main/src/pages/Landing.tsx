import { Link } from "react-router";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar, navLinks } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { socialLinks } from "@/lib/site";

/** One card per menu section — same list as the burger menu, nothing missing. */
const cardImages: Record<string, string> = {
  "/about": assetUrl("images/card-about.jpeg"),
  "/order": assetUrl("images/fillers/artist-work.jpg"),
  "/gallery": assetUrl("images/card-gallery.jpg"),
  "/advertising": assetUrl("images/fillers/adv.jpg"),
  "/exhibitions": assetUrl("images/fillers/exhib-room.jpg"),
  "/studio": assetUrl("images/card-studio.jpg"),
  "/events": assetUrl("images/fillers/live.jpg"),
  "/installations": assetUrl("images/fillers/mural.jpg"),
  "/posters": assetUrl("images/posters/umay-1.jpg"),
  "/press": assetUrl("images/card-press.jpg"),
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* The page title for search engines and screen readers; the visual
          hierarchy starts with the section cards below. */}
      <h1 className="sr-only">
        Assolyaa — картины на ковре ручной работы, Асель Сабыржанқызы
      </h1>

      {/* ─── Section cards ─── */}
      <section className="px-6 pt-28 pb-20 lg:px-12 lg:pt-32">
        <div className="mx-auto max-w-[1400px]">
          {/* Profiles sit right above the cards */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-border/50 pb-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 xl:gap-8 lg:grid-cols-3 xl:grid-cols-4">
            {navLinks
              // Contacts sit in the menu, and «Главное» is this very page, so
              // neither gets its own card.
              .filter((card) => card.path !== "/contact" && card.path !== "/")
              .map((card, i) => (
              <FadeIn key={card.path} delay={i * 0.06}>
                <Link to={card.path} className="group block">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-parchment">
                    <img
                      src={cardImages[card.path]}
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
