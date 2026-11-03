import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Presentation,
  Zap,
  Users,
  PartyPopper,
  Store,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";

const IMG = (file: string) => assetUrl(`images/${file}`);

const formats = [
  {
    title: "Живая живопись",
    text: "Ассоль создаёт картину на глазах у гостей — зрители видят, как работа рождается в реальном времени.",
    image: "fillers/live.jpg",
    alt: "Арт-перформанс перед зрителями",
  },
  {
    title: "Совместная картина",
    text: "Гости мероприятия вместе с Ассоль добавляют штрихи к общей работе — уникальный памятный арт-объект события.",
    image: "fillers/joint.jpg",
    alt: "Совместная работа над картиной",
  },
  {
    title: "Экспресс-портреты",
    text: "Мини-портреты гостей за короткое время: персональный сувенир, который остаётся с каждым участником.",
    image: "fillers/express.jpg",
    alt: "Экспресс-портрет",
  },
];

const eventTypes = [
  { icon: Store, label: "Корпоративные события" },
  { icon: Presentation, label: "Презентации" },
  { icon: PartyPopper, label: "Фестивали" },
  { icon: Users, label: "Частные приёмы" },
];

const gallery = [
  { file: "fillers/exhib-opening.jpg", alt: "Гости на открытии выставки" },
  {
    file: "fillers/artist-work.jpg",
    alt: "Художница и готовая работа",
  },
  {
    file: "fillers/woman-artist.jpg",
    alt: "Художница с готовой работой",
  },
];

export default function Events() {
  const looksRef = useRef<HTMLDivElement>(null);

  const scrollLooks = (direction: number) => {
    const el = looksRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[82vh] overflow-hidden">
        <img
          src={IMG("fillers/gallery-open.jpg")}
          alt="Художница пишет картину на мольберте"
          className="absolute inset-0 h-full w-full object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25" />
        <div className="relative flex min-h-[82vh] flex-col justify-end px-6 pb-16 pt-32 lg:px-12 lg:pb-20">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-white/70">
              Ивенты и мероприятия
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-[40px] font-light leading-[1.08] text-white md:text-6xl lg:text-7xl">
              Искусство, которое происходит{" "}
              <span className="italic">здесь и сейчас</span>
            </h1>
            <p className="mt-5 max-w-xl font-sans text-sm leading-[1.9] text-white/80">
              Арт-перформансы для ваших событий: Ассоль создаёт картины на
              глазах у гостей и приглашает их участвовать в процессе.
            </p>
            <a
              href={whatsappLink(
                "Здравствуйте! Хочу обсудить арт-перформанс для мероприятия.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-ivory px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:bg-white"
            >
              Пригласить Ассоль
              <ArrowRight className="size-3.5" strokeWidth={1.25} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── Formats ─── */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
              Не просто наблюдать.
              <br />
              <span className="italic">Стать частью искусства.</span>
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {formats.map((format, i) => (
              <FadeIn key={format.title} delay={i * 0.08}>
                <div className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-parchment">
                  <img
                    src={IMG(format.image)}
                    alt={format.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <p className="font-serif text-xl font-light text-white">
                        {format.title}
                      </p>
                      <p className="mt-2 max-w-[26ch] font-sans text-xs leading-[1.8] text-white/75">
                        {format.text}
                      </p>
                    </div>
                    <span className="mb-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/50 text-white">
                      <ArrowRight className="size-3.5" strokeWidth={1.25} />
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it looks ─── */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  Фото и видео прошлых перформансов
                </p>
                <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-5xl">
                  Как это <span className="italic">выглядит</span>
                </h2>
              </div>
              <div className="flex shrink-0 gap-3">
                <button
                  onClick={() => scrollLooks(-1)}
                  aria-label="Предыдущие кадры"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
                >
                  <ChevronLeft className="size-4" strokeWidth={1.25} />
                </button>
                <button
                  onClick={() => scrollLooks(1)}
                  aria-label="Следующие кадры"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
                >
                  <ChevronRight className="size-4" strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </FadeIn>

          <div
            ref={looksRef}
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
          >
            {gallery.map((item) => (
              <div
                key={item.file}
                className="w-[80%] shrink-0 snap-start sm:w-[52%] lg:w-[calc(40%-16px)]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-parchment">
                  <img
                    src={IMG(item.file)}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Event types ─── */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-center gap-6">
              <p className="shrink-0 font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Для мероприятий
              </p>
              <span className="h-px flex-1 bg-border" />
            </div>
          </FadeIn>

          <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-4">
            {eventTypes.map((type, i) => (
              <FadeIn key={type.label} delay={i * 0.06}>
                <div className="flex flex-col items-start gap-4">
                  <type.icon
                    className="size-6 text-foreground"
                    strokeWidth={1.25}
                  />
                  <p className="font-serif text-lg font-light text-foreground">
                    {type.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing and gift ─── */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-center gap-6">
              <p className="shrink-0 font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                Стоимость
              </p>
              <span className="h-px flex-1 bg-border" />
            </div>
            <p className="mt-8 font-serif text-5xl font-light text-foreground md:text-7xl">
              от 1 500 000 ₸
            </p>
            <p className="mt-5 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Формат и смета обсуждаются индивидуально.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="mt-8 flex max-w-2xl items-start gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
              <Zap
                className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                strokeWidth={1.25}
              />
              <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                Возможны выездные перформансы в разные города и срочные проекты.
                Уточняйте у менеджера.
              </p>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <FadeIn>
              <div className="overflow-hidden rounded-3xl bg-parchment">
                <img
                  src={IMG("fillers/smartphone.jpg")}
                  alt="Съёмка перформанса для Stories"
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  В подарок
                </p>
                <p className="mt-5 font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
                  Освещение перформанса и вашего мероприятия в Stories{" "}
                  <a
                    href="https://www.instagram.com/assolyaa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                  >
                    @assolyaa
                  </a>
                </p>
                <p className="mt-5 font-sans text-sm leading-[1.9] text-muted-foreground">
                  Кадры с события попадают в ленту сотен тысяч подписчиков:
                  гости делятся перформансом, а работа остаётся заметной задолго
                  после мероприятия.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* CTA */}
          <FadeIn delay={0.1}>
            <div className="mt-16 text-center">
              <h2 className="font-serif text-3xl font-light text-foreground md:text-4xl">
                Обсудим ваше мероприятие
              </h2>
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                Расскажите о событии — дата, город, формат и количество гостей.
                Мы предложим подходящий сценарий перформанса.
              </p>
              <a
                href={whatsappLink(
                  "Здравствуйте! Хочу обсудить арт-перформанс для мероприятия.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-foreground/90 sm:w-auto"
              >
                Обсудить мероприятие
                <ArrowRight className="size-3.5" strokeWidth={1.25} />
              </a>
              <p className="mt-5 font-sans text-sm text-muted-foreground">
                Свяжитесь с арт-менеджером
              </p>
            </div>
          </FadeIn>

          {/* Wordmark */}
          <div className="mt-16 border-t border-border/50 pt-10 text-center">
            <p className="font-sans text-[11px] uppercase tracking-[0.4em] text-muted-foreground">
              Assolyaa &middot; Art Experiences
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
