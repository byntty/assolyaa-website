import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const exhibitions = [
  { year: "2024", title: "Carpet Art — Томирис", venue: "Париж, Франция" },
  { year: "2024", title: "#KilemArt — Царицы Степи", venue: "Берлин, Германия" },
  { year: "2023", title: "Картины на ковре", venue: "Баку, Азербайджан" },
  { year: "2023", title: "Выставка KilemArt", venue: "Астана, Казахстан" },
  { year: "2022", title: "Портреты на ковре", venue: "Алматы, Казахстан" },
  { year: "2021", title: "Современная портретная живопись", venue: "Алматы, Казахстан" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Обо мне
                </p>
                <h1 className="mt-4 font-serif text-4xl font-light leading-snug text-foreground md:text-6xl">
                  Асель
                  <br />
                  <span className="italic">Сабыржанқызы</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Профессиональный художник, блогер и автор креативного контента
                  из Казахстана. Под ником @assolyaa собрала аудиторию более
                  465 000 подписчиков в TikTok и более 280 000 в Instagram.
                  Видео с её творчеством набирают от 5 до 96 миллионов просмотров.
                </p>
                <p className="mt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                  Её работы неоднократно отмечены Президентом Республики
                  Казахстан — почётной грамотой, личным благодарственным
                  письмом, нагрудным знаком «Алтын барыс» и государственной
                  наградой «Ерен еңбегі үшін».
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Portrait */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="aspect-[16/9] w-full overflow-hidden bg-parchment lg:aspect-[21/9]">
              <img
                src="./images/card-about.jpg"
                alt="Ассоль — художник"
                className="h-full w-full object-cover object-top grayscale"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Biography */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Биография
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light text-foreground">
                Путь
                <br />
                <span className="italic">художника</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="font-serif text-2xl font-light leading-relaxed text-foreground md:text-3xl">
                  «Я выросла, окружённая коврами, орнаментами и историями, глубоко
                  укоренёнными в традиции. Со временем я поняла, что эти традиционные
                  символы не должны оставаться в прошлом — им нужен новый подход.
                  Сейчас я перевожу их на язык современного искусства.»
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Родилась 7 марта 1994 года в городе Алматы. Основная тема
                  творчества — образы выдающихся исторических и современных
                  личностей тюркских народов. Ассоль создала 14 образов женщин
                  из казахской истории — портреты цариц Великой Степи и амазонок,
                  написанные на коврах.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Это не просто живопись. Восточные орнаменты вплетены в ткань
                  видения художницы. Мудрость, сила и красота её героинь выходит
                  за рамки формата и переходит в объём, который обволакивает,
                  гипнотизирует и погружает в другую реальность.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Все работы направлены на просвещение молодёжи и вызывают
                  интерес к истории и искусству Казахстана. Выставки картин
                  на ковре прошли в Астане, Баку, Берлине и Париже.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Образование
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Учёба и развитие
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {[
              { year: "2021", title: "Магистратура", venue: "Казахская Национальная Академия Искусств имени Т. Жургенова, Алматы. Диссертация: «Образ исторической личности в современной портретной живописи Казахстана»" },
              { year: "2019", title: "Бакалавриат", venue: "КазНУИ, Астана. Специальность: «станковая живопись»" },
              { year: "2013", title: "Колледж", venue: "Колледж при КазНУИ, Астана. Специальность: «станковая живопись»" },
              { year: "2009", title: "Детская художественная школа", venue: "г. Астана" },
            ].map((edu, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-16 shrink-0 font-sans text-sm text-muted-foreground">
                    {edu.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                      {edu.title}
                    </h3>
                    <p className="mt-1 font-sans text-sm text-muted-foreground">
                      {edu.venue}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Награды и достижения
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Признание
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {[
              { year: "2026", title: "Discover List 2026 — Топ-50 выдающихся креаторов мира", venue: "TikTok" },
              { year: "2024", title: "Победитель премии TikTok — номинация «Ұлттық мәдениет»", venue: "TikTok Awards Kazakhstan" },
              { year: "2023", title: "Государственная награда «Ерен еңбегі үшін»", venue: "Самая молодая художница, удостоенная такой награды" },
              { year: "2023", title: "Нагрудный знак «Алтын барыс»", venue: "За вклад в развитие и популяризацию искусства" },
              { year: "2023", title: "Почётная грамота и личное благодарственное письмо Президента РК", venue: "Республика Казахстан" },
              { year: "2023", title: "Выставка в Баку, Берлине и Париже", venue: "Международные показы карпет-арта" },
            ].map((award, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-16 shrink-0 font-sans text-sm text-muted-foreground">
                    {award.year}
                  </span>
                  <h3 className="flex-1 font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                    {award.title}
                  </h3>
                  <span className="hidden text-right font-sans text-sm text-muted-foreground md:block">
                    {award.venue}
                  </span>
                  <span className="text-left font-sans text-xs text-muted-foreground md:hidden">
                    {award.venue}
                  </span>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Exhibitions */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Выставки
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Избранные выставки
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {exhibitions.map((exhibition, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-16 shrink-0 font-sans text-sm text-muted-foreground">
                    {exhibition.year}
                  </span>
                  <h3 className="flex-1 font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                    {exhibition.title}
                  </h3>
                  <span className="hidden text-right font-sans text-sm text-muted-foreground md:block">
                    {exhibition.venue}
                  </span>
                  <span className="text-left font-sans text-xs text-muted-foreground md:hidden">
                    {exhibition.venue}
                  </span>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
