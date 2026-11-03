import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, MapPin, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";

const IMG = (file: string) => assetUrl(`images/${file}`);

interface Exhibition {
  id: string;
  year: string;
  title: string;
  city: string;
  dates: string;
  venue: string;
  address?: string;
  description: string;
  images: string[];
}

const upcoming: Exhibition = {
  id: "kilemart-2026",
  year: "2026",
  title: "Выставка картин на коврах",
  city: "Астана, Казахстан",
  dates: "7.11.2026 — 22.11.2026",
  venue: "Qazaq Creative Hub",
  address: "г. Астана, р-н Есил, ул. Жошы хана, 16/2",
  description:
    "Новая серия работ Ассоль — это диалог традиций и современности, где древний ковёр становится холстом для новых историй. Персональная экспозиция объединяет ковровые портреты серии «Женщины Великой степи» и новые работы, созданные в 2026 году.",
  images: [
    "fillers/exhib-room.jpg",
    "artwork-01.jpg",
    "artwork-05.jpg",
    "artwork-12.jpg",
  ],
};

const pastExhibitions: Exhibition[] = [
  {
    id: "baku-festival-2026",
    year: "2026",
    title: "III Международный фестиваль ковра",
    city: "Баку, Азербайджан",
    dates: "1–3 мая 2026",
    venue: "Ичеришехер — комплекс Дворца бакинских ханов",
    description:
      "Персональная экспозиция в рамках крупнейшего международного форума ковроделия. Британское издание The Independent включило творчество Ассоль в обзор фестиваля как одно из ярчайших явлений события.",
    images: ["fillers/exhib-textiles.jpg", "artwork-01.jpg", "artwork-13.jpg"],
  },
  {
    id: "salon-automne-2024",
    year: "2024",
    title: "Le Salon d'Automne",
    city: "Париж, Франция",
    dates: "18–21 января 2024",
    venue: "Юбилейный салон",
    description:
      "Участие в одном из старейших художественных салонов мира. В рамках программы — публичный арт-перформанс: за несколько часов портрет Симоны Вейль написан на ковре при зрителях.",
    images: ["fillers/exhib-wine.jpg", "fillers/gallery-vis.jpg"],
  },
  {
    id: "heydar-aliyev-2023",
    year: "2023",
    title: "Дни культуры Казахстана",
    city: "Баку, Азербайджан",
    dates: "Ноябрь–декабрь 2023",
    venue: "Центр Гейдара Алиева",
    description:
      "Ковровые образы и портрет поэтессы Натаван в рамках официальной программы Дней культуры Казахстана.",
    images: ["artwork-02.jpg", "artwork-03.jpg"],
  },
  {
    id: "ethno-aul-2023",
    year: "2023",
    title: "Ethno Aul",
    city: "Астана, Казахстан",
    dates: "Ноябрь 2023",
    venue: "Выставка в период государственного визита Президента Франции",
    description:
      "Экспозиция традиционного и современного казахского искусства во время государственного визита Эмманюэля Макрона.",
    images: ["fillers/festival.jpg", "artwork-04.jpg"],
  },
  {
    id: "berlin-bazaar-2023",
    year: "2023",
    title: "Berlin Bazaar",
    city: "Берлин, Германия",
    dates: "2023",
    venue: "Международная ярмарка современного искусства",
    description:
      "Показ ковровых портретов европейской аудитории в рамках международной ярмарки искусства.",
    images: ["artwork-05.jpg", "artwork-06.jpg"],
  },
  {
    id: "qazaq-content-2023",
    year: "2023",
    title: "Carpet Art «Qazaq Content»",
    city: "Астана, Казахстан",
    dates: "Сентябрь 2023",
    venue: "Forte Kulanshi Art Space",
    description:
      "Первая системная выставка авторского направления: 14 ковровых полотен серии «Женщины Великой степи».",
    images: ["artwork-01.jpg", "artwork-07.jpg", "artwork-08.jpg"],
  },
  {
    id: "caf-2022",
    year: "2022",
    title: "Central Asia Fashion — «ДНК капитала Казахстана»",
    city: "Астана, Казахстан",
    dates: "Март 2022",
    venue: "Персональная экспозиция",
    description:
      "Экспозиция в рамках Central Asia Fashion: соединение традиционного казахского кода и современного fashion-контекста.",
    images: ["fillers/carpet.jpg", "artwork-09.jpg"],
  },
];

export default function Exhibitions() {
  const [selected, setSelected] = useState<Exhibition | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected, close]);

  return (
    <div className="min-h-screen bg-[#141110] text-ivory">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[64vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG("hero.jpg")}
            alt="Гости смотрят ковровые работы на выставке"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-[#141110]" />
        </div>
        <div className="relative mx-auto flex min-h-[64vh] max-w-[1400px] flex-col justify-end px-6 pb-14 pt-32 lg:px-12">
          <FadeIn>
            <h1 className="font-serif text-5xl font-light text-white md:text-7xl">
              Выставки
            </h1>
            <p className="mt-5 max-w-xl font-sans text-[11px] uppercase leading-[2] tracking-[0.25em] text-white/70">
              Искусство, которое
              <br />
              объединяет культуры
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Upcoming ─── */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-baseline justify-between gap-4 pb-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/60">
                Предстоящая выставка
              </p>
              <span className="font-serif text-lg font-light italic text-ivory/40">
                01
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl bg-[#F5EEE4] p-8 text-foreground md:p-12">
              <p className="font-sans text-sm text-muted-foreground">
                {upcoming.dates}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light leading-snug text-foreground md:text-5xl">
                {upcoming.title}
              </h2>
              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E2D6C4] bg-[#EFE6D8] p-5">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <div>
                  <p className="font-serif text-lg font-light text-foreground">
                    {upcoming.venue}
                  </p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    {upcoming.address}
                  </p>
                </div>
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl bg-parchment">
                <img
                  src={IMG(upcoming.images[0])}
                  alt="Экспозиция ковровых работ"
                  className="aspect-[16/10] w-full object-cover"
                />
              </div>

              <p className="mt-8 max-w-2xl font-sans text-sm leading-[1.9] text-muted-foreground">
                {upcoming.description}
              </p>

              <button
                onClick={() => setSelected(upcoming)}
                className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-foreground/30 px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
              >
                Подробнее о выставке
                <ArrowRight
                  className="size-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  strokeWidth={1.25}
                />
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Past ─── */}
      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-baseline justify-between gap-4 border-b border-ivory/15 pb-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-ivory/60">
                Прошедшие выставки
              </p>
              <span className="font-serif text-lg font-light italic text-ivory/40">
                02
              </span>
            </div>
          </FadeIn>

          <div>
            {pastExhibitions.map((exhibition, i) => (
              <FadeIn key={exhibition.id} delay={i * 0.05}>
                <button
                  onClick={() => setSelected(exhibition)}
                  className="group flex w-full items-center gap-5 border-b border-ivory/10 py-5 text-left transition-colors hover:border-ivory/30 md:gap-10"
                >
                  <span className="w-14 shrink-0 font-serif text-xl font-light italic text-ivory/40 md:text-2xl">
                    {exhibition.year}
                  </span>
                  <span className="hidden size-16 shrink-0 overflow-hidden rounded-xl bg-parchment sm:block md:size-20">
                    <img
                      src={IMG(exhibition.images[0])}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex-1">
                    <span className="block font-serif text-lg font-light text-ivory transition-opacity group-hover:opacity-70 md:text-xl">
                      {exhibition.title}
                    </span>
                    <span className="mt-1 block font-sans text-sm text-ivory/50">
                      {exhibition.city}
                    </span>
                  </span>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors duration-300 group-hover:border-ivory group-hover:bg-ivory group-hover:text-[#141110]">
                    <ArrowRight className="size-3.5" strokeWidth={1.25} />
                  </span>
                </button>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="px-6 pb-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-ivory md:text-5xl">
              Приглашаем на <span className="italic">выставки</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-[1.9] text-ivory/60">
              Расскажем о ближайших экспозициях, открытиях и гостевых показах в
              Казахстане и за его пределами.
            </p>
            <a
              href={whatsappLink(
                "Здравствуйте! Хочу узнать о ближайших выставках Assolyaa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-xl bg-ivory px-10 py-5 font-sans text-[11px] uppercase tracking-[0.15em] text-[#141110] transition-colors duration-300 hover:bg-white"
            >
              Узнать о выставках
              <ArrowRight className="size-3.5" strokeWidth={1.25} />
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ─── Detail modal ─── */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/70 p-6 backdrop-blur-sm md:items-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="fixed right-6 top-6 z-[110] flex size-12 items-center justify-center text-white/80 transition-colors hover:text-white"
              aria-label="Закрыть"
            >
              <X className="size-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="my-10 w-full max-w-3xl rounded-3xl bg-[#F5EEE4] p-8 text-foreground md:p-12"
            >
              <p className="font-sans text-sm text-muted-foreground">
                {selected.dates}
              </p>
              <h3 className="mt-3 font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                {selected.title}
              </h3>

              <div className="mt-6 flex items-start gap-3 rounded-2xl border border-[#E2D6C4] bg-[#EFE6D8] p-5">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <div>
                  <p className="font-serif text-lg font-light text-foreground">
                    {selected.venue}
                  </p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    {selected.address ?? selected.city}
                  </p>
                </div>
              </div>

              <p className="mt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                {selected.description}
              </p>

              <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Превью работ и экспозиция
              </p>
              <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                {selected.images.map((file) => (
                  <div
                    key={file}
                    className="aspect-[4/5] overflow-hidden rounded-xl bg-parchment"
                  >
                    <img
                      src={IMG(file)}
                      alt={`${selected.title} — работа с экспозиции`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
