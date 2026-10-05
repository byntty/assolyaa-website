import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { Link } from "react-router";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { mailtoLink } from "@/lib/site";

/** Media kit 2026 — advertising & brand collaborations.
 *  Editorial, couture-style layout: hairline rules, wide-tracked micro-labels,
 *  full-bleed imagery and a sticky chapter index for quick navigation. */

const IMG = (file: string) => assetUrl(`images/${file}`);

const eyebrow =
  "font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground";
const eyebrowLight =
  "font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/45";

const chapters = [
  { id: "profile", label: "Профиль" },
  { id: "portfolio", label: "Портфолио" },
  { id: "cases", label: "Кейсы" },
  { id: "auto", label: "Авто" },
  { id: "posts", label: "Посты" },
  { id: "brands", label: "Бренды" },
  { id: "numbers", label: "Статистика" },
  { id: "press", label: "Пресса" },
  { id: "contact", label: "Контакты" },
];

const heroStats = [
  { value: "299K", label: "подписчиков Instagram" },
  { value: "462K", label: "подписчиков TikTok" },
  { value: "Top 50", label: "креаторов мира · Discover List 2026" },
];

const recognition = [
  {
    title: "The Discover List 2026",
    text: "Топ-50 креаторов мира по версии TikTok — единственная представительница Казахстана.",
  },
  {
    title: "TikTok Awards 2024",
    text: "Победа в номинации «Национальное искусство» по итогам года.",
  },
  {
    title: "Salon d’Automne, Париж",
    text: "Дебют в Париже с серией из пяти ковров; выставки в Астане, Баку, Берлине.",
  },
];

type CaseItem = {
  name: string;
  type: string;
  stats: string[];
  note?: string;
};

const cases: CaseItem[] = [
  {
    name: "Jennifer Lopez",
    type: "Special Art Project",
    stats: ["31,1 млн · Instagram", "32,5 млн · TikTok", "50+ публикаций СМИ"],
    note: "Арт-проект к концерту Astana Concert — Jennifer Lopez. Форматы: Reels и stories.",
  },
  {
    name: "Nicole Scherzinger",
    type: "Art-integration · Solana Fest",
    stats: ["3,5 млн · Instagram", "3,5 млн · TikTok", "20+ сюжетов СМИ"],
    note: "Творческий концепт и PR-сопровождение Nicole Scherzinger, PR-кейс Solana Fest.",
  },
  {
    name: "UEFA Champions League",
    type: "PR-матч «Кайрат» — «Реал Мадрид»",
    stats: ["614K+ · Instagram", "3,4 млн · TikTok", "150K · вовлечённость"],
    note: "ASSOLYAA создала нативный контент в рамках продвижения одного из самых ожидаемых матчей Лиги Чемпионов, интегрировав спортивное событие в собственный контент и привлекая внимание аудитории к матчу.",
  },
  {
    name: "Salem Entertainment",
    type: "PR-кейс",
    stats: ["4,5 млн · Instagram", "13,4 млн · TikTok"],
  },
  {
    name: "Samsung.kz",
    type: "Бренд-интеграция",
    stats: ["ER 6–10%", "уровень вовлечённости (ER) в публикациях"],
  },
  {
    name: "Джеки Чан",
    type: "Арт-подарок",
    stats: ["4,6 млн просмотров поста", "2,6 млн · TikTok"],
  },
];

const celebrities =
  "Джеки Чан · Дженнифер Лопес · Николь Шерзингер · Кэрри Хилсон · Тимбэлэнд · Энрике Иглесиас · Димаш · М. Шайдоров";

const artworks = [
  {
    file: "collab-art-01.png",
    alt: "Портрет на ковре — авторская работа Ассоль",
    caption: "Портрет на ковре",
  },
  {
    file: "collab-art-03.png",
    alt: "Портрет женщины, написанный на ковре вручную",
    caption: "Женский портрет",
  },
  {
    file: "collab-art-02.png",
    alt: "Портрет мужчины на ковре с фирменным орнаментом",
    caption: "Мужской портрет с орнаментом",
  },
  {
    file: "collab-art-05.png",
    alt: "Картина на ковре: барс",
    caption: "Барс",
  },
  {
    file: "collab-art-04.png",
    alt: "Картина на ковре: самец оленя",
    caption: "Олень",
  },
  {
    file: "collab-art-07.png",
    alt: "Портрет Елены Рыбакиной на ковре",
    caption: "Портрет - Елена Рыбакина",
  },
  {
    file: "collab-art-06.png",
    alt: "Пейзаж, написанный на ковре",
    caption: "Пейзаж",
  },
  {
    file: "collab-art-08.jpg",
    alt: "Портрет Михаила Шайдарова на ковре в раме",
    caption: "Портрет - Михаил Шайдаров",
  },
];

const carCase = [
  { file: "collab-cars-03.jpg", alt: "Коллаборация с автомобильным брендом" },
  { file: "collab-cars-04.jpg", alt: "Процесс росписи автомобиля" },
];

const carActivation = [
  { file: "collab-cars-01.jpg", alt: "Арт-перформанс: расписанный автомобиль на улице" },
  { file: "collab-cars-02.jpg", alt: "Расписанный вручную автомобиль в городе" },
];

/** Wall of real posts: art gifts to stars, brand integrations, virals. */
const viralPosts = [
  "collab-jlo-01.jpg",
  "collab-jlo-02.jpg",
  "collab-jlo-03.jpg",
  "collab-jlo-04.jpg",
  "collab-jlo-05.jpg",
  "collab-nicole-01.jpg",
  "collab-nicole-02.jpg",
  "collab-nicole-03.jpg",
  "collab-nicole-05.jpg",
  "collab-jackie-01.jpg",
  "collab-jackie-02.jpg",
  "collab-jackie-03.jpg",
  "collab-jackie-04.jpg",
  "collab-jackie-05.png",
  "collab-uefa.png",
  "collab-uefa-02.png",
  "collab-post-01.png",
  "collab-post-02.jpg",
  "collab-post-03.jpg",
  "collab-post-04.jpg",
  "collab-post-05.jpg",
  "collab-post-06.jpg",
  "collab-post-07.jpg",
  "collab-post-08.jpg",
  "collab-post-10.jpg",
  "collab-post-11.jpg",
  "collab-post-12.jpg",
];

const instagramMetrics = [
  { value: "5,07 млн", label: "просмотров контента" },
  { value: "4,2 млн", label: "просмотров историй" },
  { value: "1,42 млн", label: "просмотров Video Reels" },
  { value: "+6 792", label: "чистый прирост подписчиков" },
  { value: "40K", label: "охваченных аккаунтов" },
  { value: "7,5K", label: "публикаций" },
];

const tiktokGrowth = [
  "+1302,4%",
  "+371%",
  "+132,5%",
  "+130,9%",
  "+85,5%",
  "+50%",
  "80,1%",
  "−29,8%",
];

const tiktokMetrics = ["579,3K", "371,3K", "167,5K", "4,9K", "3,4K"];

const statsShots = [
  "collab-stats-01.jpg",
  "collab-stats-02.jpg",
  "collab-stats-03.jpg",
  "collab-stats-04.png",
  "collab-stats-05.png",
  "collab-stats-06.png",
  "collab-stats-07.png",
  "collab-stats-08.png",
  "collab-stats-09.png",
];

const brands = [
  "Samsung",
  "Huawei",
  "Kazakhfilm",
  "inDrive",
  "SenSulu",
  "Maybelline",
  "KIA",
  "HAVAL",
  "MyCar",
  "Chery",
  "Yandex",
  "Evrika",
  "Золотое Яблоко",
  "ASUS",
  "Pureon",
  "Once Astana",
  "Volna Energy",
  "Nutella",
  "Salem Entertainment",
  "Karbat",
  "Dream Kazakhstan",
];

/* ------------------------------------------------------------------ utils */

function useActiveChapter(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const key = ids.join("|");

  useEffect(() => {
    const els = key
      .split("|")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (first?.target.id) setActive(first.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}

/* The fixed navbar is 69px tall from `lg` up (28px logo line + 2x20px padding
 * + 1px rule) and 81px below it (40px menu button instead of the logo). The
 * sticky chapter index overlaps it by 1px, so no seam can ever show through. */
const STICKY_TOP = "top-[80px] lg:top-[68px]";
const SCROLL_MARGIN = "scroll-mt-[152px] lg:scroll-mt-[140px]";

/** Horizontal snap row with arrow controls and a hairline progress rule. */
function SnapStrip({
  label,
  headerLeft,
  light = false,
  children,
}: {
  label: string;
  headerLeft: string;
  light?: boolean;
  children: ReactNode;
}) {
  const [scroller, setScroller] = useState<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    if (!scroller) return;
    const onScroll = () => {
      const max = scroller.scrollWidth - scroller.clientWidth;
      setAtStart(scroller.scrollLeft <= 4);
      setAtEnd(max > 0 && scroller.scrollLeft >= max - 4);
      setProgress(max > 0 ? scroller.scrollLeft / max : 0);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [scroller]);

  const nudge = (dir: 1 | -1) => {
    if (!scroller) return;
    scroller.scrollBy({
      left: dir * Math.max(scroller.clientWidth * 0.85, 280),
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <p
          className={`font-sans text-[10px] uppercase tracking-[0.22em] ${
            light ? "text-ivory/45" : "text-muted-foreground"
          }`}
        >
          {headerLeft}
        </p>
        <StripControls
          atStart={atStart}
          atEnd={atEnd}
          onPrev={() => nudge(-1)}
          onNext={() => nudge(1)}
          label={label}
          light={light}
        />
      </div>

      <div
        ref={setScroller}
        className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <div className="mt-5">
        <ProgressRule progress={progress} light={light} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ components */

function StripControls({
  atStart,
  atEnd,
  onPrev,
  onNext,
  label,
  light = false,
}: {
  atStart: boolean;
  atEnd: boolean;
  onPrev: () => void;
  onNext: () => void;
  label: string;
  light?: boolean;
}) {
  const base =
    "flex size-10 items-center justify-center border transition-all duration-500";
  const enabled = light
    ? "border-ivory/30 text-ivory hover:bg-ivory hover:text-charcoal"
    : "border-border/70 text-foreground hover:bg-charcoal hover:text-ivory";
  const disabled = light
    ? "border-ivory/15 text-ivory/25"
    : "border-border/40 text-muted-foreground/30";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onPrev}
        disabled={atStart}
        aria-label={`${label}: назад`}
        className={`${base} ${atStart ? disabled : enabled}`}
      >
        <ArrowLeft className="size-4" strokeWidth={1} />
      </button>
      <button
        type="button"
        onClick={onNext}
        disabled={atEnd}
        aria-label={`${label}: вперёд`}
        className={`${base} ${atEnd ? disabled : enabled}`}
      >
        <ArrowRight className="size-4" strokeWidth={1} />
      </button>
    </div>
  );
}

function ProgressRule({
  progress,
  light = false,
}: {
  progress: number;
  light?: boolean;
}) {
  return (
    <div className={`h-px w-full ${light ? "bg-ivory/15" : "bg-border/60"}`}>
      <div
        className={`h-px ${light ? "bg-ivory/70" : "bg-foreground/60"}`}
        style={{
          width: `${Math.max(progress * 100, 4)}%`,
          transition: "width 300ms cubic-bezier(0.25,0.1,0.25,1)",
        }}
      />
    </div>
  );
}

function Chapter({
  id,
  index,
  label,
  title,
  intro,
  children,
  tone = "light",
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <section
      id={id}
      className={`${SCROLL_MARGIN} border-t px-6 py-20 md:px-10 md:py-28 lg:px-16 ${
        dark
          ? "border-ivory/15 bg-charcoal text-ivory"
          : "border-border/70 bg-background"
      }`}
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <FadeIn>
          <div className="grid gap-6 md:grid-cols-12 md:gap-10">
            <p className={`${dark ? eyebrowLight : eyebrow} md:col-span-3`}>
              {index} · {label}
            </p>
            <div className="md:col-span-9 lg:col-span-7">
              <h2
                className={`font-serif text-3xl font-light leading-[1.12] md:text-5xl ${
                  dark ? "text-ivory" : "text-foreground"
                }`}
              >
                {title}
              </h2>
              {intro && (
                <p
                  className={`mt-6 max-w-2xl font-sans text-sm leading-[1.95] ${
                    dark ? "text-ivory/65" : "text-muted-foreground"
                  }`}
                >
                  {intro}
                </p>
              )}
            </div>
          </div>
        </FadeIn>
        <div className="mt-14 md:mt-20">{children}</div>
      </div>
    </section>
  );
}

function Figure({
  src,
  alt,
  caption,
  index,
  aspect = "aspect-[2/3]",
  className = "",
}: {
  src: string;
  alt: string;
  caption?: string;
  index?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <figure className={className}>
      <div className={`group relative overflow-hidden bg-parchment ${aspect}`}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-baseline gap-3">
          {index && (
            <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground/60">
              {index}
            </span>
          )}
          <span className="font-sans text-[11px] leading-relaxed tracking-[0.04em] text-muted-foreground">
            {caption}
          </span>
        </figcaption>
      )}
    </figure>
  );
}

/* ------------------------------------------------------------------- page */

export default function Advertising() {
  const active = useActiveChapter(chapters.map((c) => c.id));

  // The app uses a HashRouter, so plain `#section` anchors would be read as
  // routes. Scroll programmatically instead (scroll-mt on sections keeps the
  // sticky header clear).
  const jumpTo = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const jumpTop = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="min-h-screen bg-background">
      <Navbar />

      {/* Hero — split editorial cover */}
      <section className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="order-2 flex flex-col justify-between px-6 pb-16 pt-14 md:px-10 lg:order-1 lg:col-span-6 lg:px-16 lg:pb-24 lg:pt-40">
            <FadeIn>
              <p className={eyebrow}>Реклама и коллаборации · Media Kit</p>
              <h1 className="mt-7 font-serif text-[42px] font-light leading-[1.03] text-foreground md:text-[68px]">
                Медиа-кит
                <br />
                <span className="italic">2026</span>
              </h1>
              <p className="mt-8 max-w-md font-sans text-sm leading-[2] text-muted-foreground">
                Художница — автор техники «Kilemart». Пишет портреты на коврах
                вручную и превращает их в вирусные инфоповоды мирового масштаба.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
                <a
                  href="#cases"
                  onClick={jumpTo("cases")}
                  className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-foreground"
                >
                  <span className="border-b border-foreground/30 pb-1 transition-colors duration-500 group-hover:border-foreground">
                    Смотреть кейсы
                  </span>
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    strokeWidth={1.25}
                  />
                </a>
                <a
                  href={mailtoLink(
                    "Медиа-кит Assolyaa 2026",
                    "Здравствуйте! Хочу получить медиа-кит и обсудить сотрудничество.",
                  )}
                  className="group inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  <span className="border-b border-border pb-1 transition-colors duration-500 group-hover:border-muted-foreground">
                    Запросить медиа-кит
                  </span>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <dl className="mt-16 grid grid-cols-1 gap-8 border-t border-border/70 pt-8 sm:grid-cols-3 sm:gap-6">
                {heroStats.map((stat) => (
                  <div key={stat.label}>
                    <dt className="font-serif text-3xl font-light text-foreground md:text-4xl">
                      {stat.value}
                    </dt>
                    <dd className={`mt-2 ${eyebrow}`}>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            </FadeIn>
          </div>

          <div className="relative order-1 lg:order-2 lg:col-span-6">
            <img
              src={IMG("collab-hero.png")}
              alt="Ассоль в мастерской перед картиной на ковре"
              className="h-[58vh] w-full object-cover object-top lg:h-full lg:min-h-[94vh]"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/35 to-transparent p-8 lg:block">
              <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-white/70">
                Ассоль · Kilemart · Алматы
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky chapter index */}
      <nav
        aria-label="Разделы медиа-кита"
        className={`sticky z-30 border-y border-border/70 bg-background/95 backdrop-blur-md ${STICKY_TOP}`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center gap-6 px-6 md:px-10 lg:px-16">
          <div className="flex flex-1 items-center gap-7 overflow-x-auto py-4 [scrollbar-width:none] md:gap-10 [&::-webkit-scrollbar]:hidden">
            {chapters.map((chapter, i) => {
              const isActive = active === chapter.id;
              return (
                <a
                  key={chapter.id}
                  href={`#${chapter.id}`}
                  onClick={jumpTo(chapter.id)}
                  className={`whitespace-nowrap font-sans text-[10px] uppercase tracking-[0.22em] transition-colors duration-500 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground/70 hover:text-foreground"
                  }`}
                >
                  <span className="mr-2 text-muted-foreground/40">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`pb-1 ${
                      isActive ? "border-b border-foreground" : ""
                    }`}
                  >
                    {chapter.label}
                  </span>
                </a>
              );
            })}
          </div>
          <a
            href="#top"
            onClick={jumpTop}
            className="hidden shrink-0 items-center gap-2 py-4 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground md:inline-flex"
          >
            Наверх ↑
          </a>
        </div>
      </nav>

      {/* 01 — Profile */}
      <Chapter
        id="profile"
        index="01"
        label="Профиль"
        title="Известная казахстанская художница, автор техники «Kilemart»"
        intro="Единственная из Казахстана, кто вошёл в топ-50 креаторов мира — The Discover List 2026 (TikTok). Пишет портреты на коврах вручную и создаёт инфоповоды с мировым охватом."
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <div className="group overflow-hidden bg-parchment">
              <img
                src={IMG("collab-cover.jpg")}
                alt="Ассоль у картины на ковре"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.03]"
              />
            </div>
            <p className="mt-6 border-t border-border/70 pt-6 font-sans text-[12px] leading-relaxed tracking-[0.02em] text-muted-foreground">
              Дарит картины мировым звёздам: {celebrities} и др.
            </p>
          </FadeIn>

          <div className="lg:col-span-5">
            <FadeIn delay={0.1}>
              <p className={eyebrow}>Признание</p>
            </FadeIn>
            <div className="mt-6">
              {recognition.map((item, i) => (
                <FadeIn key={item.title} delay={0.12 + i * 0.06}>
                  <div className="border-t border-border/70 py-7">
                    <p className="font-serif text-xl font-light text-foreground md:text-2xl">
                      {item.title}
                    </p>
                    <p className="mt-3 font-sans text-[12px] leading-[1.9] text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </FadeIn>
              ))}
              <div className="border-t border-border/70" />
            </div>
          </div>
        </div>
      </Chapter>

      {/* 02 — Portfolio */}
      <Chapter
        id="portfolio"
        index="02"
        label="Портфолио"
        title="Примеры работ, написанных на ковре вручную"
        intro="Серии «Женщины Великой степи», Qazaq Content и Modern Nomads; авторские картины на заказ для компаний, брендов и частных клиентов."
      >
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-6">
          {artworks.map((art, i) => (
            <FadeIn
              key={art.file}
              delay={(i % 4) * 0.06}
              className={i === 0 ? "col-span-2 md:row-span-2" : ""}
            >
              <Figure
                src={IMG(art.file)}
                alt={art.alt}
                caption={art.caption}
                index={String(i + 1).padStart(2, "0")}
                aspect={i === 0 ? "aspect-[2/3] md:aspect-[3/4]" : "aspect-[2/3]"}
                className={i === 0 ? "md:flex md:h-full md:flex-col" : ""}
              />
            </FadeIn>
          ))}
        </div>
      </Chapter>

      {/* 03 — Cases (accordion) */}
      <Chapter
        id="cases"
        index="03"
        label="Кейсы"
        title="Мировое признание и вирусные инфоповоды"
        intro="Мастер ситуативного контента: публикации на праздники, крупные события, концерты и фильмы. Откройте кейс, чтобы увидеть детали и охваты."
      >
        <AccordionPrimitive.Root
          type="single"
          collapsible
          defaultValue="case-0"
          className="border-t border-border/70"
        >
          {cases.map((item, i) => (
            <AccordionPrimitive.Item
              key={item.name}
              value={`case-${i}`}
              className="group/item border-b border-border/70"
            >
              <AccordionPrimitive.Header>
                <AccordionPrimitive.Trigger className="group grid w-full grid-cols-12 items-baseline gap-4 py-7 text-left transition-opacity duration-500 hover:opacity-70 md:py-8">
                  <span className="col-span-2 font-sans text-[10px] tracking-[0.2em] text-muted-foreground/60 md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="col-span-9 font-serif text-2xl font-light leading-tight text-foreground md:col-span-5 md:text-3xl">
                    {item.name}
                  </span>
                  <span className="col-span-11 col-start-3 hidden font-sans text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:col-span-5 md:col-start-auto md:block">
                    {item.type}
                  </span>
                  <span className="col-span-1 flex items-start justify-end">
                    <span className="relative mt-1 flex size-4 items-center justify-center">
                      <span className="absolute h-px w-3 bg-foreground/70" />
                      <span className="absolute h-3 w-px bg-foreground/70 transition-transform duration-500 group-data-[state=open]:scale-y-0" />
                    </span>
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>

              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="grid grid-cols-12 gap-4 pb-10">
                  <div className="col-span-12 md:col-span-6 md:col-start-2">
                    {item.note && (
                      <p className="max-w-2xl font-sans text-[13px] leading-[2] text-muted-foreground">
                        {item.note}
                      </p>
                    )}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <dl className="border-t border-border/70">
                      {item.stats.map((stat) => (
                        <div
                          key={stat}
                          className="border-b border-border/70 py-3 font-sans text-[11px] tracking-[0.06em] text-foreground/80"
                        >
                          {stat}
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>

        <FadeIn>
          <p className="mt-10 font-sans text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Хотите такой же кейс?{" "}
            <Link
              to="/contact"
              className="border-b border-border pb-1 text-foreground transition-colors hover:border-foreground"
            >
              Обсудить проект
            </Link>
          </p>
        </FadeIn>
      </Chapter>

      {/* 04 — Automotive */}
      <Chapter
        id="auto"
        index="04"
        label="Авто"
        title="Коллаборации с автомобильными брендами"
        intro="Арт на капоте автомобиля, коллаборация с автоблогером Тимуром, розыгрыш нового KIA Sportage, футбольный арт Месси и Роналду — нативная интеграция в контексте ЧМ-2026."
      >
        <div className="grid gap-x-6 gap-y-12 md:grid-cols-2">
          {carActivation.map((car, i) => (
            <FadeIn key={car.file} delay={i * 0.08}>
              <Figure
                src={IMG(car.file)}
                alt={car.alt}
                aspect="aspect-[16/9]"
                caption={i === 0 ? "Арт-перформанс" : "Бренд-активация"}
              />
            </FadeIn>
          ))}
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {carCase.map((car, i) => (
            <FadeIn key={car.file} delay={i * 0.08}>
              <Figure
                src={IMG(car.file)}
                alt={car.alt}
                aspect={i === 0 ? "aspect-[4/3]" : "aspect-[4/3]"}
                caption={i === 0 ? "Кейс HAVAL" : "Роспись автомобиля"}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-14 grid grid-cols-1 gap-10 border-t border-border/70 pt-10 sm:grid-cols-3">
            <div>
              <p className="font-serif text-3xl font-light text-foreground md:text-4xl">
                1,23 млн
              </p>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                охват · Instagram
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-foreground md:text-4xl">
                2 млн
              </p>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                суммарный охват
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl font-light text-foreground md:text-4xl">
                ЧМ-2026
              </p>
              <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                нативная интеграция
              </p>
            </div>
          </div>
        </FadeIn>
      </Chapter>

      {/* 05 — Posts wall */}
      <Chapter
        id="posts"
        index="05"
        label="Посты"
        title="Каждая картина превращается в инфоповод"
        intro="Публикации и сюжеты: подарки звёздам, бренд-интеграции, вирусные запуски. Прокрутите подборку, чтобы увидеть все."
      >
        <SnapStrip
          label="Подборка публикаций"
          headerLeft={`${viralPosts.length} публикаций`}
        >
          {viralPosts.map((file, i) => (
            <figure
              key={file}
              className="w-[190px] shrink-0 snap-start sm:w-[230px] lg:w-[250px]"
            >
              <div className="group overflow-hidden bg-charcoal">
                <img
                  src={IMG(file)}
                  alt="Пост о коллаборации Ассоль"
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.2em] text-muted-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </SnapStrip>
      </Chapter>

      {/* 06 — Brands */}
      <Chapter
        id="brands"
        index="06"
        label="Бренды"
        title="Selected brand collaborations"
        intro="Проекты с международными и казахстанскими брендами: интеграции, арт-объекты, активации и кампании."
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-12">
            <ul className="grid grid-cols-1 border-t border-border/70 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand, i) => (
                <li
                  key={brand}
                  className="flex items-baseline gap-4 border-b border-border/70 py-4 pr-6"
                >
                  <span className="font-sans text-[10px] tracking-[0.2em] text-muted-foreground/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-lg font-light text-foreground md:text-xl">
                    {brand}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-sans text-[11px] tracking-[0.04em] text-muted-foreground">
              {brands.length} брендов · 2013—2026
            </p>
          </div>
        </div>
      </Chapter>

      {/* 07 — Numbers */}
      <Chapter
        id="numbers"
        index="07"
        label="Статистика"
        title="Общий охват и вовлечённость за 30 дней"
        intro="Instagram и TikTok: просмотры, прирост и портрет аудитории по полу, возрасту и географии."
        tone="dark"
      >
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 border-t border-ivory/15 pt-10 sm:grid-cols-3 lg:grid-cols-6">
          {instagramMetrics.map((metric, i) => (
            <FadeIn key={metric.label} delay={i * 0.05}>
              <p className="font-serif text-2xl font-light text-ivory md:text-3xl">
                {metric.value}
              </p>
              <p className={`mt-2 ${eyebrowLight}`}>{metric.label}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-ivory/15 pt-10 lg:grid-cols-3">
            <div>
              <p className={eyebrowLight}>Instagram · аудитория</p>
              <p className="mt-4 font-sans text-sm leading-[2] text-ivory/85">
                68,5% женщины · 31,5% мужчины
              </p>
              <p className="mt-3 font-sans text-[12px] leading-[2] text-ivory/50">
                13–17 — 0,7% · 18–24 — 3,8% · 25–34 — 31,8% · 35–44 — 43,5% ·
                45–54 — 14,3% · 55–64 — 4,3%
              </p>
              <p className="mt-3 font-sans text-[12px] leading-[2] text-ivory/50">
                Казахстан 51,8% · Россия 15,5% · Кыргызстан 4,6% · Узбекистан
                3,3% · США 2,2%
              </p>
              <p className="mt-3 font-sans text-[12px] leading-[2] text-ivory/50">
                Алма-Ата 9,1% · Астана 7,9% · Шымкент 3,6%
              </p>
            </div>

            <div>
              <p className={eyebrowLight}>TikTok · аудитория</p>
              <p className="mt-4 font-sans text-sm leading-[2] text-ivory/85">
                62% женщины · 38% мужчины
              </p>
              <p className="mt-3 font-sans text-[12px] leading-[2] text-ivory/50">
                18–24 — 22,6% · 25–34 — 43,4% · 35–44 — 26,2% · 45–54 — 5,5% ·
                55+ — 2,3%
              </p>
              <p className="mt-3 font-sans text-[12px] leading-[2] text-ivory/50">
                Казахстан 77,5% · Швеция 5,4% · Россия 4,1% · Азербайджан 1,8% ·
                Беларусь 1,5%
              </p>
            </div>

            <div>
              <p className={eyebrowLight}>TikTok · динамика</p>
              <p className="mt-4 font-serif text-3xl font-light text-ivory md:text-4xl">
                5,8 млн{" "}
                <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-ivory/50">
                  просмотров
                </span>
              </p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {tiktokGrowth.map((growth) => (
                  <span
                    key={growth}
                    className="font-sans text-[11px] tracking-[0.08em] text-ivory/70"
                  >
                    {growth}
                  </span>
                ))}
              </div>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {tiktokMetrics.map((metric) => (
                  <span
                    key={metric}
                    className="font-sans text-xs text-ivory/50"
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="mt-16 border-t border-ivory/15 pt-10">
          <SnapStrip
            label="Скриншоты статистики"
            headerLeft="Скриншоты статистики"
            light
          >
          {statsShots.map((file, i) => (
            <figure
              key={file}
              className="w-[170px] shrink-0 snap-start sm:w-[200px]"
            >
              <div className="overflow-hidden bg-black/40">
                <img
                  src={IMG(file)}
                  alt="Скриншот статистики аккаунта"
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-sans text-[10px] tracking-[0.2em] text-ivory/40">
                {String(i + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
          </SnapStrip>
        </div>
      </Chapter>

      {/* 08 — Press */}
      <Chapter
        id="press"
        index="08"
        label="Пресса"
        title="Казахстан в мировых трендах TikTok"
        intro="Художница Assolya представила страну в списке The Discover List 2026 — публикации в международной и национальной прессе."
      >
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="grid grid-cols-2 gap-5 lg:col-span-7 lg:gap-6">
            <FadeIn>
              <Figure
                src={IMG("collab-press-01.jpg")}
                alt="Публикация в СМИ о The Discover List 2026"
                caption="The Discover List 2026"
                index="01"
              />
            </FadeIn>
            <FadeIn delay={0.08}>
              <Figure
                src={IMG("collab-press-02.jpg")}
                alt="Статья о казахстанской художнице"
                caption="Международная пресса"
                index="02"
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.12} className="lg:col-span-5">
            <p className={eyebrow}>Пресс-архив</p>
            <p className="mt-6 max-w-md font-serif text-xl font-light leading-snug text-foreground md:text-2xl">
              113 публичных упоминаний в прессе на шести языках — с 2013 по 2026
              год.
            </p>
            <p className="mt-5 max-w-md font-sans text-[12px] leading-[2] text-muted-foreground">
              The Independent, Euronews, The Astana Times, TikTok Newsroom,
              Kazinform, 24KZ, Kursiv, ELLE Kazakhstan и другие.
            </p>
            <Link
              to="/press"
              className="group mt-8 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-foreground"
            >
              <span className="border-b border-foreground/30 pb-1 transition-colors duration-500 group-hover:border-foreground">
                Весь архив прессы
              </span>
              <ArrowRight
                className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                strokeWidth={1.25}
              />
            </Link>
          </FadeIn>
        </div>
      </Chapter>

      {/* 09 — Contact */}
      <section
        id="contact"
        className={`${SCROLL_MARGIN} border-t border-ivory/15 bg-charcoal px-6 py-20 text-ivory md:px-10 md:py-28 lg:px-16`}
      >
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <p className={eyebrowLight}>Сотрудничество</p>
            <h2 className="mt-6 font-serif text-4xl font-light leading-[1.08] text-ivory md:text-6xl">
              Готовы
              <br />
              <span className="italic">к сотрудничеству</span>
            </h2>
            <p className="mt-8 max-w-lg font-sans text-sm leading-[2] text-ivory/60">
              Ассоль — необычная, привлекательная и запоминающаяся личность. Мы
              всегда открыты к новым предложениям, идеям и коллаборациям.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-10 border-t border-ivory/15 pt-10 sm:grid-cols-2">
              <div>
                <p className={eyebrowLight}>Сотрудничество и реклама</p>
                <p className="mt-3 font-serif text-xl font-light text-ivory">
                  Елизавета
                </p>
                <a
                  href="tel:+77770011686"
                  className="mt-2 block font-serif text-2xl font-light text-ivory transition-opacity hover:opacity-70"
                >
                  +7 777 001 1686
                </a>
              </div>
              <div>
                <p className={eyebrowLight}>Почта</p>
                <a
                  href={mailtoLink(
                    "Медиа-кит Assolyaa 2026",
                    "Здравствуйте! Хочу обсудить сотрудничество.",
                  )}
                  className="mt-3 block break-all font-sans text-sm text-ivory/80 transition-opacity hover:opacity-70"
                >
                  nurdaulet.bekzhan@gmail.com
                </a>
                <Link
                  to="/contact"
                  className="group mt-6 inline-flex items-center gap-3 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory"
                >
                  <span className="border-b border-ivory/30 pb-1 transition-colors duration-500 group-hover:border-ivory">
                    Обсудить проект
                  </span>
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 group-hover:translate-x-1"
                    strokeWidth={1.25}
                  />
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <div className="overflow-hidden bg-charcoal">
              <img
                src={IMG("collab-portrait.png")}
                alt="Ассоль у своей работы"
                loading="lazy"
                className="h-[62vh] w-full object-cover object-top lg:h-[78vh]"
              />
            </div>
            <p className="mt-4 font-sans text-[10px] uppercase tracking-[0.32em] text-ivory/40">
              Assolyaa · Kilemart · Алматы
            </p>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
