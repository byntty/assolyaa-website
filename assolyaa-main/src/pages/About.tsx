import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";

const education = [
  {
    year: "2019–2021",
    title: "Магистратура (научно-педагогический профиль)",
    venue:
      "Казахская национальная академия искусств имени Т. Жургенова, Алматы. Магистерское исследование: «Образ исторической личности в современной портретной живописи Казахстана»",
  },
  {
    year: "2014–2019",
    title: "Бакалавриат — «Станковая живопись» (диплом с отличием)",
    venue: "Казахский национальный университет искусств (КазНУИ), Астана",
  },
  {
    year: "2009–2013",
    title: "Колледж — «Станковая живопись» (диплом с отличием)",
    venue: "Колледж при КазНУИ, Астана",
  },
  {
    year: "2006–2009",
    title: "Детская художественная школа",
    venue: "г. Астана",
  },
];

const awards = [
  {
    year: "2026",
    title:
      "TikTok The Discover List 2026 — топ-50 мировых новаторов и креаторов, категория Innovators",
    venue: "Единственный представитель Казахстана в глобальном рейтинге",
  },
  {
    year: "2024",
    title: "Победитель TikTok Awards Kazakhstan — номинация «Ұлттық мәдениет / Национальная культура»",
    venue: "TikTok Awards Kazakhstan",
  },
  {
    year: "2024",
    title: "Благодарственная грамота Министра культуры и информации РК Аиды Балаевой",
    venue: "Министерство культуры и информации Республики Казахстан",
  },
  {
    year: "2023",
    title:
      "Государственная медаль Республики Казахстан «Ерен еңбегі үшін» — за вклад в культуру и искусство",
    venue: "Одна из самых молодых художниц, удостоенных государственной награды",
  },
  {
    year: "—",
    title: "Почётный нагрудный знак «Алтын Барыс»",
    venue: "Республика Казахстан",
  },
  {
    year: "2022",
    title:
      "Благодарственное письмо (июль 2022) и благодарственная грамота (апрель 2022) Президента РК К.-Ж. Токаева",
    venue: "Республика Казахстан",
  },
  {
    year: "2012",
    title:
      "Гран-при конкурса Ernst & Young Kazakhstan — работы в корпоративной коллекции в Лондоне",
    venue: "Ernst & Young",
  },
];

const exhibitions = [
  {
    year: "2026",
    title: "III Международный фестиваль ковра",
    venue: "Ичеришехер, Баку, Азербайджан",
  },
  {
    year: "2024",
    title: "Le Salon d'Automne — персональный стенд и перформанс с портретом Симоны Вейль",
    venue: "Париж, Франция",
  },
  {
    year: "2023",
    title: "Berlin Bazaar",
    venue: "Берлин, Германия",
  },
  {
    year: "2023",
    title: "Дни культуры Казахстана — Центр Гейдара Алиева",
    venue: "Баку, Азербайджан",
  },
  {
    year: "2023",
    title: "Qazaq Content",
    venue: "Forte Kulanshi Art Space, Астана, Казахстан",
  },
  {
    year: "2023",
    title: "Персональная выставка «Когда кумиры вдохновляют»",
    venue: "Музей Алматы",
  },
  {
    year: "2022",
    title: "Проект «ДНК капитал Казахстана»",
    venue: "Central Asia Fashion",
  },
  {
    year: "2011",
    title: "Дни культуры Астаны",
    venue: "Пекин, Китай",
  },
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
                <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Assel Sabyrzhankyzy &middot; Assolyaa &middot; род. 1994, Алматы
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Профессиональный художник и портретист, магистр искусствоведческих
                  наук, автор авторского направления KilemArt. Родилась 7 марта 1994
                  года в Алматы — городе, с которым связана её студия и арт-пространство
                  Assolyaa Arts Center.
                </p>
                <p className="mt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                  Творчество художницы отмечено на государственном уровне: медалью
                  «Ерен еңбегі үшін», нагрудным знаком «Алтын Барыс» и благодарностями
                  Президента Республики Казахстан, — а также признано международными
                  платформами: в 2026 году Асель вошла в топ-50 мировых новаторов
                  TikTok The Discover List (категория Innovators) как единственный
                  представитель Казахстана.
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
                src={assetUrl("images/card-about.jpg")}
                alt="Асель Сабыржанқызы (Assolyaa) — художник"
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
                  Асель Сабыржанқызы — казахстанская художница, работающая на стыке
                  классической портретной живописи и современного искусства. Профессиональное
                  образование получила в Казахском национальном университете искусств
                  (КазНУИ) и Казахской национальной академии искусств имени Т. Жургенова;
                  тема её научного исследования — образ исторической личности в современной
                  портретной живописи Казахстана.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Центральная тема творчества — образы выдающихся исторических личностей
                  тюркского мира. Асель — автор серии «Женщины Великой степи», цикла из
                  14 знаковых женских образов — от царицы саков до батыров и правительниц
                  тюркских государств, — а также портретов Кенесары хана, Абая Кунанбайулы,
                  лидеров Алаш, Динмухамеда Кунаева, Жошы хана и Умай.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Её перформансы — одновременное создание нескольких портретов, в том
                  числе рисование шестью инструментами руками и ногами одновременно —
                  стали вирусным культурным феноменом и сделали художницу одной из самых
                  узнаваемых фигур современного казахстанского искусства.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  В Алматы Асель основала собственное арт-пространство — студию
                  Assolyaa Arts Center, где ведёт образовательные программы для нового
                  поколения художников. Работы представлены на международных выставках
                  в Париже, Баку и Берлине.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* KilemArt */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                Авторское направление
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light text-ivory">
                Kilem<span className="italic">Art</span>
              </h2>
              <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.15em] text-ivory/50">
                Ковёр как полотно современного искусства
              </p>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="font-serif text-2xl font-light leading-relaxed text-ivory md:text-3xl">
                  KilemArt превращает традиционный восточный ковёр из декоративно-бытового
                  предмета в полноценное концептуальное полотно современного искусства.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Портреты наносятся аэрозольной живописью непосредственно на готовые
                  ковры — с сохранением аутентичных узоров. Национальный орнамент
                  гармонично интегрируется в черты лица, силуэты и одежду персонажей:
                  рисунок ковра и живопись образуют единое художественное высказывание.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Философия направления — диалог культурного кода, исторической памяти и
                  тюркских корней с эстетикой street-art и цифрового сторителлинга.
                  KilemArt делает историю визуально осязаемой для нового поколения —
                  и возвращает ковру статус носителя памяти, а не только уюта.
                </p>
                <div className="grid grid-cols-1 gap-8 pt-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Концепция",
                      text: "Ковёр — не фон, а полноправный соавтор: орнамент становится частью образа.",
                    },
                    {
                      title: "Техника",
                      text: "Аэрозольная живопись по готовому ковру с сохранением аутентичного узора.",
                    },
                    {
                      title: "Философия",
                      text: "Культурный код, память и тюркские корни в языке contemporary art.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="border-t border-ivory/20 pt-6">
                      <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-ivory/50">
                        {item.title}
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-ivory/70">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Signature series */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Ключевые серии
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Знаковые <span className="italic">серии и проекты</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-px bg-border/40 lg:grid-cols-2">
            {[
              {
                title: "«Женщины Великой степи»",
                text: "Цикл из 14 знаковых женских образов тюркской истории: Saqtar Patshaiymy (Царица саков), Bopai, Kurmanjan, Aiganym, Kókbóri, Gayhar Batyr, Súúmbike и другие. Портреты цариц и амазонок степи, написанные на коврах.",
              },
              {
                title: "Историко-символические портреты",
                text: "Портрет Кенесары хана, созданный из множества микро-силуэтов людей; портрет Абая Кунанбайулы, построенный из текста песни «Көзімнің қарасы»; портреты лидеров Алаш — Бокейхана, Байтурсынова и Дулатова, нарисованные тремя карандашами одновременно; портреты Динмухамеда Кунаева, Жошы хана и Умай.",
              },
              {
                title: "Творческие перформансы",
                text: "Вирусная техника одновременного создания нескольких портретов — вплоть до рисования шестью инструментами руками и ногами одновременно. Мастер-классы и перформансы стали визитной карточкой художницы.",
              },
              {
                title: "Assolyaa Arts Center",
                text: "Собственное арт-пространство и студия в Алматы: авторские образовательные программы для нового поколения художников и открытая творческая среда.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="h-full bg-background p-10">
                  <h3 className="font-serif text-2xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-sans text-sm leading-[1.9] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
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
              Академическая <span className="italic">база</span>
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {education.map((edu, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-24 shrink-0 font-sans text-sm text-muted-foreground">
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
            {awards.map((award, i) => (
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
              Избранные <span className="italic">выставки</span>
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
