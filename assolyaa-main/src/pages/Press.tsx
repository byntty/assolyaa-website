import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";

const reachStats = [
  { value: "113+", label: "верифицированных упоминаний в прессе" },
  { value: "6+", label: "языков мира" },
  { value: "2013–2026", label: "годы непрерывного освещения" },
];

const socialStats = [
  { platform: "TikTok", value: "465 000+", label: "подписчиков" },
  { platform: "Instagram", value: "280 000+", label: "подписчиков" },
  { platform: "Просмотры", value: "5–96 млн", label: "на одно видео" },
];

const globalMedia = [
  {
    outlet: "The Independent",
    country: "Великобритания",
    date: "май 2026",
    text: "Материал главного редактора Джорди Грейга (Geordie Greig) о Международном фестивале ковра в Баку: творчество Assolyaa выделено как одно из ключевых событий форума.",
  },
  {
    outlet: "TikTok Newsroom",
    country: "Global / UK / France / LATAM",
    date: "февраль 2026",
    text: "Официальное включение художницы в международный список The Discover List 2026 — как единственного представителя Казахстана.",
  },
  {
    outlet: "The Astana Times",
    country: "Казахстан / английский язык",
    date: "ноябрь 2025 · июль 2026",
    text: "Большие англоязычные аналитические статьи и интервью о феномене Carpet Art и его международном резонансе.",
  },
  {
    outlet: "Euronews",
    country: "Европейский телеканал",
    date: "февраль 2025",
    text: "Документальный выпуск проекта «Modern Nomads» — «Как казахские художники возрождают традиции в современном искусстве».",
  },
  {
    outlet: "Edgü Bilig",
    country: "Англоязычное издание",
    date: "2023",
    text: "Профиль о синтезе традиций и диджитал-культуры в творчестве художницы.",
  },
];

const starCases = [
  {
    name: "Энрике Иглесиас",
    date: "июль 2026",
    text: "Официальный аккаунт мирового певца опубликовал репост видео с его портретом на ковре от Assolyaa — с обращением к казахстанцам.",
  },
  {
    name: "Дженнифер Лопес",
    date: "август 2025",
    text: "Создание авторского портрета на ковре и его личная передача певице во время её визита.",
  },
  {
    name: "Джеки Чан",
    date: "сентябрь 2025",
    text: "Личное вручение коврового портрета легендарному актёру в Алматы.",
  },
  {
    name: "Николь Шерзингер и Keri Hilson",
    date: "май 2026",
    text: "Создание и вручение авторских арт-объектов мировым исполнительницам.",
  },
  {
    name: "Михаил Шайдоров",
    date: "февраль 2026",
    text: "Инновационный арт-перформанс: ковровый портрет фигуриста, созданный с использованием коньков.",
  },
  {
    name: "Салтанат Нукенова",
    date: "май 2024",
    text: "Ковровый портрет, вызвавший масштабный социальный резонанс в медиапространстве.",
  },
];

const keyMoments = [
  {
    date: "февраль 2026",
    title: "The Discover List 2026",
    text: "TikTok Newsroom включил Assolyaa в топ-50 мировых новаторов и креаторов (категория Innovators) — единственный представитель Казахстана.",
  },
  {
    date: "май 2026",
    title: "The Independent о Баку",
    text: "Международный фестиваль ковра в Ичеришехер (Баку, Азербайджан) в обзоре The Independent: Assolyaa — одно из ключевых событий форума.",
  },
  {
    date: "июль 2026",
    title: "Репост Энрике Иглесиаса",
    text: "Мировая поп-сцена замечает KilemArt: официальный аккаунт певца делится портретом на ковре с обращением к казахстанцам.",
  },
  {
    date: "2025",
    title: "Год мировых звёзд",
    text: "Дженнифер Лопес (август) и Джеки Чан (сентябрь) получают авторские ковровые портреты из рук художницы.",
  },
  {
    date: "февраль 2025",
    title: "Euronews «Modern Nomads»",
    text: "Документальный выпуск о возрождении традиций в современном искусстве Казахстана.",
  },
  {
    date: "май 2024",
    title: "Портрет Салтанат Нукеновой",
    text: "Ковровое произведение вызывает масштабный резонанс в медиапространстве страны.",
  },
  {
    date: "январь 2024",
    title: "Le Salon d'Automne, Париж",
    text: "Персональный стенд и перформанс с портретом Симоны Вейль в рамках одного из старейших салонов мира.",
  },
];

const tvMedia = [
  "24KZ",
  "Almaty TV",
  "Первый канал «Евразия»",
  "Jibek Joly / Next Generation",
  "Turkistan TV",
];

const printMedia = [
  "ELLE Kazakhstan",
  "The Village Казахстан",
  "Kazinform",
  "Tengrinews",
  "Kursiv",
  "Informburo.kz",
  "Time.kz",
  "QazaqCulture",
  "BAQ.kz",
  "Stan.kz",
  "Официальные ресурсы МИД РК (gov.kz)",
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={assetUrl("images/card-press.jpg")}
            alt="СМИ и Достижения"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-16 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/60">
              СМИ и Пресса
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
              Медиа и <span className="italic">признание</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-white/80">
              Творчество Assolyaa освещают ведущие мировые и национальные медиа:
              свыше 113 верифицированных упоминаний в прессе на более чем 6 языках
              мира — от The Independent и Euronews до TikTok Newsroom.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Reach Stats */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
            {reachStats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08}>
                <div className="bg-background p-10 text-center">
                  <p className="font-serif text-4xl font-light text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-3 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Global Media */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Мировые СМИ
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Цитаты и обзоры <span className="italic">мировой прессы</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {globalMedia.map((m, i) => (
              <FadeIn key={m.outlet + m.date} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-4 border-t border-border/40 py-8 transition-colors hover:border-foreground/20 md:grid-cols-12 md:gap-10">
                  <div className="md:col-span-3">
                    <h3 className="font-serif text-xl font-light text-foreground transition-opacity group-hover:opacity-70">
                      {m.outlet}
                    </h3>
                    <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {m.country}
                    </p>
                    <p className="mt-1 font-sans text-xs text-muted-foreground/60">
                      {m.date}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                      {m.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Star Cases */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              Арт-дипломатия
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-ivory">
              Кейсы <span className="italic">мировых звёзд</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-px bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
            {starCases.map((c, i) => (
              <FadeIn key={c.name + c.date} delay={i * 0.06}>
                <div className="h-full bg-charcoal p-10">
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                    {c.date}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-light text-ivory">
                    {c.name}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-[1.9] text-ivory/70">
                    {c.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* National Media */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Национальная пресса
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Ведущие <span className="italic">СМИ Казахстана</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <FadeIn delay={0.05}>
              <div>
                <h3 className="font-serif text-xl font-light text-foreground">
                  Телевидение
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Регулярные сюжеты и эксклюзивные интервью.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {tvMedia.map((t) => (
                    <span
                      key={t}
                      className="border border-border/60 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div>
                <h3 className="font-serif text-xl font-light text-foreground">
                  Издания и порталы
                </h3>
                <p className="mt-2 font-sans text-sm text-muted-foreground">
                  Крупные публикации и официальные ресурсы.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {printMedia.map((p) => (
                    <span
                      key={p}
                      className="border border-border/60 px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Social stats */}
          <div className="mt-24">
            <div className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
              {socialStats.map((stat, i) => (
                <FadeIn key={stat.platform} delay={i * 0.08}>
                  <div className="bg-background p-10 text-center">
                    <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {stat.platform}
                    </p>
                    <p className="mt-4 font-serif text-4xl font-light text-foreground">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Moments Timeline */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Хроника
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Ключевые <span className="italic">инфоповоды</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {keyMoments.map((k, i) => (
              <FadeIn key={k.title} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-32 shrink-0 font-sans text-xs uppercase tracking-[0.1em] text-muted-foreground">
                    {k.date}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                      {k.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-muted-foreground">
                      {k.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-light italic leading-relaxed text-ivory md:text-5xl">
              «Все работы направлены на просвещение молодёжи и вызывают интерес
              к истории и искусству Казахстана.»
            </h2>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              — Асель Сабыржанқызы (Assolyaa)
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
