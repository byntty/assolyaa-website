import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { Link } from "react-router";

/** Media kit 2026 — advertising & brand collaborations (photo-first section). */

const heroStats = [
  { value: "299K", label: "подписчиков Instagram" },
  { value: "462K", label: "подписчиков TikTok" },
  { value: "Top 50", label: "креаторов мира · Discover List 2026 (TikTok)" },
];

const cases: {
  name: string;
  type: string;
  stats: string[];
  note?: string;
}[] = [
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
  { file: "collab-art-03.png", alt: "Портрет женщины, написанный на ковре вручную" },
  { file: "collab-art-01.png", alt: "Портрет на ковре — авторская работа Ассоль" },
  { file: "collab-art-02.png", alt: "Портрет мужчины на ковре с фирменным орнаментом" },
  { file: "collab-art-05.png", alt: "Картина на ковре: барс" },
  { file: "collab-art-04.png", alt: "Картина на ковре: самец оленя" },
  { file: "collab-art-07.png", alt: "Портрет блондинки на ковре" },
  { file: "collab-art-06.png", alt: "Пейзаж, написанный на ковре" },
  { file: "collab-art-08.jpg", alt: "Картина на ковре в раме" },
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

const tiktokMetrics = ["5,8 млн", "2,4 млн", "579,3K", "371,3K", "167,5K", "4,9K", "3,4K"];

const statsShots = [
  "collab-stats-01.jpg",
  "collab-stats-02.jpg",
  "collab-stats-03.jpg",
  "collab-stats-04.png",
  "collab-stats-05.png",
  "collab-stats-06.png",
];

const brands = [
  "Samsung",
  "Huawei",
  "Kazakhfilm",
  "inDrive",
  "Sensui",
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

export default function Advertising() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-7">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    Реклама и коллаборации
                  </p>
                  <h1 className="mt-4 font-serif text-4xl font-light leading-snug text-foreground md:text-6xl">
                    Медиа-кит
                    <br />
                    <span className="italic">2026</span>
                  </h1>
                  <p className="mt-6 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                    Художница — автор техники «Kilemart». Пишет портреты на
                    коврах вручную и превращает их в вирусные инфоповоды
                    мирового масштаба.
                  </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl font-light text-foreground">
                        {stat.value}
                      </p>
                      <p className="mt-1 font-sans text-[11px] leading-relaxed text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-5">
              <div className="aspect-[3/4] overflow-hidden bg-charcoal">
                <img
                  src={assetUrl("images/collab-hero.png")}
                  alt="Ассоль в мастерской перед картиной на ковре"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Обо мне
              </p>
              <p className="mt-5 font-serif text-2xl font-light leading-snug text-foreground md:text-3xl">
                Известная казахстанская художница. Пишет картины на коврах в
                уникальной технике{" "}
                <span className="italic">«Kilemart»</span>.
              </p>
              <p className="mt-5 font-sans text-sm leading-[1.9] text-muted-foreground">
                Единственная из Казахстана, кто вошёл в топ-50 креаторов мира —
                Discover List 2026 (TikTok). Победитель премии TikTok 2024 в
                номинации «Национальное искусство».
              </p>
            </FadeIn>

            <FadeIn delay={0.12} className="lg:col-span-7">
              <div className="aspect-[16/9] overflow-hidden bg-charcoal">
                <img
                  src={assetUrl("images/collab-cover.jpg")}
                  alt="Ассоль у картины на ковре"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <p className="mt-10 border-t border-border/50 pt-6 font-sans text-sm leading-relaxed text-muted-foreground">
              Дарит картины мировым звёздам: {celebrities} и др.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Portfolio */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Портфолио · часть 1 и 2
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
              Примеры работ, написанных на ковре вручную
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {artworks.map((art, i) => (
              <FadeIn key={art.file} delay={i * 0.05}>
                <div className="group aspect-[9/16] overflow-hidden bg-parchment">
                  <img
                    src={assetUrl(`images/${art.file}`)}
                    alt={art.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="mt-8 font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Авторские картины на коврах на заказ для компаний, брендов и
              частных клиентов
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Cases */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Мировое признание · ещё коллаборации
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
              Мастер ситуативного контента — публикации на все праздники,
              крупные события, концерты и фильмы
            </h2>
            <p className="mt-5 max-w-3xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Делает вирусный контент и инфоповоды для СМИ с охватом на десятки
              миллионов.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-0 sm:grid-cols-2">
            {cases.map((item, i) => (
              <FadeIn key={item.name} delay={i * 0.05}>
                <div className="border-t border-border/40 py-7">
                  <div className="flex items-baseline justify-between gap-6">
                    <h3 className="font-serif text-xl font-light text-foreground">
                      {item.name}
                    </h3>
                    <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
                      {item.type}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
                    {item.stats.map((stat) => (
                      <span
                        key={stat}
                        className="font-sans text-sm text-muted-foreground"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                  {item.note && (
                    <p className="mt-4 font-sans text-[13px] leading-relaxed text-muted-foreground/80">
                      {item.note}
                    </p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Car brands */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Кейс HAVAL
              </p>
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
                Коллаборации
                <br />
                <span className="italic">с автомобильными брендами</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                Арт на капоте автомобиля. Коллаборация с автоблогером Тимуром.
                Розыгрыш нового KIA Sportage. Футбольный арт: Месси и Роналду.
                Нативная интеграция в контексте ЧМ-2026.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-3">
                <span className="font-serif text-2xl font-light text-foreground">
                  1,23 млн{" "}
                  <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    Instagram
                  </span>
                </span>
                <span className="font-serif text-2xl font-light text-foreground">
                  2 млн{" "}
                  <span className="font-sans text-xs uppercase tracking-[0.12em] text-muted-foreground">
                    суммарный охват
                  </span>
                </span>
              </div>
            </FadeIn>

            <div className="grid grid-cols-2 gap-4 lg:col-span-7">
              {carCase.map((car, i) => (
                <FadeIn key={car.file} delay={i * 0.06}>
                  <div className="group aspect-[4/3] overflow-hidden bg-parchment">
                    <img
                      src={assetUrl(`images/${car.file}`)}
                      alt={car.alt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand activation */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Бренд-активации
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
              Виральная бренд-активация: арт-перформанс на автомобиле
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {carActivation.map((car, i) => (
              <FadeIn key={car.file} delay={i * 0.08}>
                <div className="group aspect-[16/9] overflow-hidden bg-parchment">
                  <img
                    src={assetUrl(`images/${car.file}`)}
                    alt={car.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Viral posts wall */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Посты и сюжеты
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
              Каждая картина превращается в инфоповод
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-6">
            {viralPosts.map((file, i) => (
              <FadeIn key={file} delay={(i % 6) * 0.04}>
                <div className="overflow-hidden bg-charcoal">
                  <img
                    src={assetUrl(`images/${file}`)}
                    alt="Пост о коллаборации Ассоль"
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Selected brand collaborations
              </p>
              <h2 className="mt-4 font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
                Бренды, с которыми
                <br />
                <span className="italic">мы работали</span>
              </h2>
              <div className="mt-8 flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <span
                    key={brand}
                    className="border border-border/60 px-3 py-1 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.12} className="lg:col-span-7">
              <div className="overflow-hidden bg-charcoal">
                <img
                  src={assetUrl("images/collab-brands.png")}
                  alt="Логотипы брендов-партнёров Ассоль"
                  loading="lazy"
                  className="w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-charcoal px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              Актуальная статистика · Instagram
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-ivory md:text-4xl">
              Общий охват и вовлечённость за 30 дней
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
            {instagramMetrics.map((metric, i) => (
              <FadeIn key={metric.label} delay={i * 0.05}>
                <p className="font-serif text-2xl font-light text-ivory md:text-3xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-sans text-[11px] leading-relaxed text-ivory/50">
                  {metric.label}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-14 grid grid-cols-1 gap-10 border-t border-ivory/15 pt-10 lg:grid-cols-3">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                  Аудитория Instagram — пол, возраст, география
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ivory/80">
                  68,5% женщины · 31,5% мужчины
                </p>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-ivory/50">
                  13–17 — 0,7% · 18–24 — 3,8% · 25–34 — 31,8% · 35–44 —
                  43,5% · 45–54 — 14,3% · 55–64 — 4,3%
                </p>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-ivory/50">
                  Казахстан 51,8% · Россия 15,5% · Кыргызстан 4,6% · Узбекистан
                  3,3% · США 2,2%
                </p>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-ivory/50">
                  Алма-Ата 9,1% · Астана 7,9% · Шымкент 3,6%
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                  Аудитория TikTok — пол, возраст, география
                </p>
                <p className="mt-3 font-sans text-sm leading-relaxed text-ivory/80">
                  62% женщины · 38% мужчины
                </p>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-ivory/50">
                  18–24 — 22,6% · 25–34 — 43,4% · 35–44 — 26,2% · 45–54 —
                  5,5% · 55+ — 2,3%
                </p>
                <p className="mt-2 font-sans text-[12px] leading-relaxed text-ivory/50">
                  Казахстан 77,5% · Швеция 5,4% · Россия 4,1% · Азербайджан
                  1,8% · Беларусь 1,5%
                </p>
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                  Основные метрики TikTok
                </p>
                <p className="mt-3 font-serif text-2xl font-light text-ivory">
                  5,8 млн{" "}
                  <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                    просмотров
                  </span>
                </p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {tiktokGrowth.map((g) => (
                    <span
                      key={g}
                      className="font-sans text-[11px] tracking-[0.08em] text-ivory/70"
                    >
                      {g}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {tiktokMetrics.slice(1).map((m) => (
                    <span key={m} className="font-sans text-xs text-ivory/50">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>

          <div className="mt-14 grid grid-cols-3 gap-3 sm:grid-cols-6">
            {statsShots.map((file, i) => (
              <FadeIn key={file} delay={(i % 6) * 0.04}>
                <div className="overflow-hidden bg-black/40">
                  <img
                    src={assetUrl(`images/${file}`)}
                    alt="Скриншот статистики аккаунта"
                    loading="lazy"
                    className="aspect-[9/16] w-full object-cover"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Press */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              СМИ
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-2xl font-light leading-snug text-foreground md:text-4xl">
              Казахстан в мировых трендах TikTok
            </h2>
            <p className="mt-5 max-w-3xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Художница Assolya представила страну в списке The Discover List
              2026.
            </p>
          </FadeIn>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <FadeIn>
              <div className="overflow-hidden bg-parchment">
                <img
                  src={assetUrl("images/collab-press-01.jpg")}
                  alt="Публикация в СМИ о The Discover List 2026"
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="overflow-hidden bg-parchment">
                <img
                  src={assetUrl("images/collab-press-02.jpg")}
                  alt="Статья о казахстанской художнице"
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                Что мы можем сделать вместе?
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light leading-snug text-ivory md:text-5xl">
                Готовы
                <br />
                <span className="italic">к сотрудничеству</span>
              </h2>
              <p className="mt-6 max-w-xl font-sans text-sm leading-[1.9] text-ivory/70">
                Ассоль — необычная, привлекательная и запоминающаяся личность.
                Мы всегда открыты к новым предложениям, идеям и коллаборациям.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-8">
                <div>
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                    Елизавета
                  </p>
                  <a
                    href="tel:+77478936842"
                    className="font-serif text-2xl font-light text-ivory transition-opacity hover:opacity-70"
                  >
                    +7 747 893 6842
                  </a>
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border-b border-ivory/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:border-ivory"
                >
                  Обсудить проект
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:col-span-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={assetUrl("images/collab-portrait.png")}
                alt="Ассоль у своей работы"
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
