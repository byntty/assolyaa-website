import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import {
  STUDIO_EMAIL,
  STUDIO_WHATSAPP,
  socialLinks,
  whatsappLink,
} from "@/lib/site";

const TELEGRAM_URL = "https://t.me/nurda_project";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Контакты
                </p>
                <h1 className="mt-4 font-serif text-4xl font-light leading-snug text-foreground md:text-6xl">
                  Свяжитесь
                  <br />
                  <span className="italic">с нами</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  По вопросам покупки картин, заказов, выставок и сотрудничества
                  — свяжитесь с нами любым удобным способом.
                </p>
                <a
                  href={`mailto:${STUDIO_EMAIL}`}
                  className="mt-6 font-serif text-xl font-light text-foreground transition-opacity hover:opacity-60"
                >
                  {STUDIO_EMAIL}
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Messengers */}
          <FadeIn className="lg:col-span-7">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Мессенджеры
              </p>
              <div className="mt-6 space-y-2">
                <a
                  href={whatsappLink(
                    "Здравствуйте! Хочу узнать о заказе картины.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border/40 py-5 transition-colors hover:border-foreground/20"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-green-500/10 font-sans text-[11px] uppercase tracking-[0.1em] text-green-600">
                      WA
                    </span>
                    <span>
                      <span className="block font-sans text-sm text-foreground transition-opacity group-hover:opacity-60">
                        WhatsApp
                      </span>
                      <span className="block font-sans text-xs text-muted-foreground">
                        +7 777 001 1686
                      </span>
                    </span>
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-foreground">
                    Написать
                  </span>
                </a>

                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-6 border-b border-border/40 py-5 transition-colors hover:border-foreground/20"
                >
                  <span className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-sky-500/10 font-sans text-[11px] uppercase tracking-[0.1em] text-sky-600">
                      TG
                    </span>
                    <span>
                      <span className="block font-sans text-sm text-foreground transition-opacity group-hover:opacity-60">
                        Telegram
                      </span>
                      <span className="block font-sans text-xs text-muted-foreground">
                        @nurda_project
                      </span>
                    </span>
                  </span>
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:text-foreground">
                    Написать
                  </span>
                </a>

                <a
                  href={`tel:+${STUDIO_WHATSAPP}`}
                  className="group flex items-center justify-between gap-6 border-b border-border/40 py-5 transition-colors hover:border-foreground/20"
                >
                  <span className="font-sans text-sm text-foreground transition-opacity group-hover:opacity-60">
                    Телефон
                  </span>
                  <span className="font-sans text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                    +7 777 001 1686
                  </span>
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.15} className="lg:col-span-5">
            <div className="space-y-12">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Соцсети
                </p>
                <div className="mt-6 space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-border/40 py-4 transition-colors hover:border-foreground/20"
                    >
                      <span className="font-sans text-sm text-foreground transition-opacity group-hover:opacity-60">
                        {social.label}
                      </span>
                      <span className="font-sans text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Адрес
                </p>
                <div className="mt-6">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    050000, Казахстан
                    <br />
                    г. Алматы, пр. Аль-Фараби 21
                    <br />
                    Блок 9, офис 1256
                    <br />
                    «Assolyaa Arts Center»
                  </p>
                </div>
              </div>

              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Время работы
                </p>
                <div className="mt-6">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    Ежедневно, 10:00–20:00
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
