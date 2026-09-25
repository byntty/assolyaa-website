import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";

const education = [
  {
    year: "2019–2021",
    title:
      "Магистратура — «Изобразительное искусство» (научно-педагогический профиль)",
    venue:
      "Казахская национальная академия искусств имени Т. Жургенова, Алматы. Магистерское исследование: «Образ исторической личности в современной портретной живописи Казахстана»",
  },
  {
    year: "2014–2019",
    title: "Бакалавриат — «Станковая живопись» (диплом с отличием)",
    venue:
      "Казахский национальный университет искусств (КазНУИ), факультет живописи, Астана",
  },
  {
    year: "2009–2013",
    title: "Колледж — «Станковая живопись» (диплом с отличием)",
    venue:
      "Колледж при Казахском национальном университете искусств (КазНУИ), Астана",
  },
  {
    year: "2006–2009",
    title: "Детская художественная школа",
    venue: "г. Астана",
  },
];

const timeline = [
  {
    years: "2006–2010",
    title: "Начало пути",
    items: [
      "2006 — диплом II степени республиканского конкурса «Дарын».",
      "2007 — участие в городском детском конкурсе «Туған жерім 2007».",
      "2008 — лауреат конкурса плакатов «Молодёжь против компьютерного пиратства».",
      "2010 — участие в выставке-конкурсе «Самал».",
    ],
  },
  {
    years: "2011–2016",
    title: "Академические выставки и первые крупные победы",
    items: [
      "2011 — молодёжный фестиваль визуальных искусств (Дворец мира и согласия, Астана); выставка «Здесь и сейчас» к 20-летию Независимости РК; первый зарубежный показ — проект «Дни культуры Астаны» в Пекине (КНР).",
      "2012 — гран-при и диплом I степени конкурса к 20-летию Ernst & Young в Казахстане (две работы отправлены в Лондон, в корпоративную коллекцию компании); диплом I степени конкурса «Самал»; фестиваль «Шабыт»; выставка «Здесь и сейчас».",
      "2013 — персональная выставка в отеле Rixos (Астана); диплом «Лучший дизайнер» (Fashion House International); два диплома I степени Казахстанской недели искусств («Классическая жанровая живопись» и «Классический портрет») и приз зрительских симпатий; выставка «Бата — не теряя истоков».",
      "2015 — диплом I степени выставки-конкурса к 70-летию Победы (Военно-исторический музей РК, Астана).",
      "2016 — призёр выставки-конкурса к 25-летию Национального олимпийского комитета РК (Астана).",
    ],
  },
  {
    years: "2020–2022",
    title: "Выход в медиаполе, гиперреализм и вирусные проекты",
    items: [
      "2020 — выставка «Тан Шолпан» в Государственном музее искусств им. А. Кастеева (Алматы); конкурс «Өркен» (Военно-исторический музей РК).",
      "2021 — участие в проекте «100 новых лиц Казахстана»; активное развитие художественного storytelling в соцсетях; вирусная популярность гиперреалистичных портретов казахстанских звёзд (Жанар Дугалова, Димаш Кудайберген, Геннадий Головкин); сюжеты на телеканалах (Almaty TV, Jibek Joly, Первый канал «Евразия») и публикации в прессе (NUR.KZ, Tengrinews, Sports.kz).",
      "Март 2022 — экспозиция «ДНК капитал Казахстана» в рамках Central Asia Fashion.",
      "Апрель и июль 2022 — благодарственная грамота и личное благодарственное письмо от Президента РК Касым-Жомарта Токаева.",
      "Лето–осень 2022 — вирусный резонанс авторских техник: портрет Кенесары хана из множества силуэтов людей; портрет Абая из слов песни «Көзімнің қарасы»; символический портрет Президента РК; перформанс с синхронным рисованием шести портретов одновременно руками и ногами (Tengrinews, Мир24 и зарубежные СМИ).",
    ],
  },
  {
    years: "2023",
    title: "Формирование авторского стиля KilemArt",
    items: [
      "Февраль 2023 — персональная выставка «Когда кумиры вдохновляют» в Музее Алматы (итог периода экспериментов и гиперреализма).",
      "2023 — системный переход к коврам как основе для живописи с применением аэрозольных красок; создание серии «Женщины Великой степи» (14 образов).",
      "Сентябрь 2023 — выставка Carpet Art «Qazaq Content» в Forte Kulanshi Art Space (Астана, 14 ковровых полотен).",
      "25 октября 2023 — награждена государственной медалью Республики Казахстан «Ерен еңбегі үшін».",
      "Ноябрь–декабрь 2023 — большое интервью The Village Казахстан; выставка Ethno Aul в Астане во время государственного визита Эмманюэля Макрона; участие в Berlin Bazaar 2023 (Берлин); Дни культуры Казахстана в Баку (Центр Гейдара Алиева — ковровые образы и портрет поэтессы Натаван).",
    ],
  },
  {
    years: "2024",
    title: "Парижский салон и институциональный успех",
    items: [
      "18–21 января 2024 — участие в юбилейном Le Salon d'Automne (Париж, Франция): публичный арт-перформанс — за несколько часов написан на ковре портрет Симоны Вейль.",
      "Май 2024 — резонансный ковровый портрет Салтанат Нукеновой.",
      "Июнь–сентябрь 2024 — выставка на New Vision Forum (Алматы); экспозиция на площади Абая в рамках Family Almaty Day; спецпроект с компанией «Яндекс Поиск».",
      "25 октября 2024 — благодарственная грамота Министра культуры и информации РК Аиды Балаевой.",
      "Декабрь 2024 — победа в конкурсе TikTok Awards Kazakhstan 2024 в категории «Ұлттық мәдениет / Национальная культура».",
    ],
  },
  {
    years: "2025",
    title: "Международные звёзды и мировой телеэфир",
    items: [
      "02.02.2025 — выпуск проекта Modern Nomads на телеканале Euronews о возрождении казахских традиций с участием Ассоль.",
      "Май–июль 2025 — интервью для QazaqCulture; материал журнала ELLE Kazakhstan о соединении национальной идентичности и TikTok.",
      "Август–сентябрь 2025 — создание и личное вручение ковровых портретов мировым звёздам: Дженнифер Лопес (во время её приезда в РК) и Джеки Чану (в Алматы).",
      "02.11.2025 — англоязычное интервью изданию The Astana Times об эволюции Carpet Art и женских образах Степи.",
    ],
  },
  {
    years: "2026",
    title: "Глобальный Discover List и международное признание",
    items: [
      "25–26 февраля 2026 — включение в глобальный список TikTok The Discover List 2026 (топ-50 мировых креаторов, категория Innovators — единственная представительница Казахстана).",
      "Февраль 2026 — создание портрета фигуриста Михаила Шайдорова на ковре с использованием коньков в технике исполнения и последующее вручение спортсмену.",
      "Март–апрель 2026 — большое профессиональное интервью изданию WE Project; участие в креативно-образовательных сессиях университета AlmaU.",
      "1–3 мая 2026 — участие в III Международном фестивале ковра в Баку (Ичеришехер); персональная экспозиция во Дворце бакинских ханов.",
      "07.05.2026 — британское издание The Independent публикует материал о фестивале в Баку, выделив творчество Асель Сабыржанқызы как одно из ярчайших явлений события.",
      "Май 2026 — личная встреча с певицей Николь Шерзингер в Алматы и вручение ей авторского портрета; создание работ для Кери Хилсон (Keri Hilson) и др.",
      "10.07.2026 — репост видео Ассоль официальным аккаунтом Энрике Иглесиаса накануне его концерта в РК.",
    ],
  },
];

const awards = [
  {
    year: "2026",
    title:
      "TikTok The Discover List 2026 — топ-50 мировых авторов, номинация Innovators",
    venue: "Единственная представительница Казахстана в глобальном рейтинге",
  },
  {
    year: "2024",
    title:
      "Победитель TikTok Awards Kazakhstan — категория «Ұлттық мәдениет / Национальная культура»",
    venue: "Декабрь 2024",
  },
  {
    year: "2024",
    title:
      "Благодарственная грамота Министра культуры и информации РК Аиды Балаевой",
    venue: "25 октября 2024",
  },
  {
    year: "2023",
    title:
      "Государственная медаль Республики Казахстан «Ерен еңбегі үшін» — за вклад в культуру и искусство",
    venue: "25 октября 2023",
  },
  {
    year: "—",
    title: "Нагрудный знак «Алтын Барыс»",
    venue: "За вклад в популяризацию искусства",
  },
  {
    year: "2022",
    title:
      "Благодарственное письмо Президента РК (17.07.2022) и благодарственная грамота Президента РК (апрель 2022)",
    venue: "Касым-Жомарт Токаев",
  },
  {
    year: "2013",
    title:
      "Дипломы I степени Казахстанской недели искусств — «Классическая жанровая живопись» и «Классический портрет», приз зрительских симпатий",
    venue: "Также диплом «Лучший дизайнер» Fashion House International",
  },
  {
    year: "2012",
    title:
      "Гран-при и диплом I степени конкурса Ernst & Young Kazakhstan — работы переданы в Лондон",
    venue: "К 20-летию Ernst & Young в Казахстане",
  },
  {
    year: "2006–2016",
    title:
      "Республиканские конкурсы: диплом II степени «Дарын» (2006), диплом I степени «Самал» (2012), диплом I степени к 70-летию Победы (2015), призёр к 25-летию НОК РК (2016)",
    venue: "Астана",
  },
];

const exhibitionGeography = [
  {
    country: "Казахстан",
    items: [
      "Отель Rixos, Астана — персональная выставка (2013)",
      "Central Asia Fashion — проект «ДНК капитал Казахстана» (2022)",
      "Музей Алматы — «Когда кумиры вдохновляют» (2023)",
      "Forte Kulanshi Art Space, Астана — «Qazaq Content» (2023)",
      "Ethno Aul, Астана — в рамках визита Президента Франции (2023)",
      "New Vision Forum, Алматы (2024)",
      "Family Almaty Day, площадь Абая, Алматы (2024)",
    ],
  },
  {
    country: "Франция",
    items: ["Юбилейный Le Salon d'Automne, Париж (2024)"],
  },
  {
    country: "Азербайджан",
    items: [
      "Центр Гейдара Алиева, Баку — Дни культуры Казахстана (2023)",
      "III Международный фестиваль ковра, комплекс Дворца бакинских ханов, Ичеришехер, Баку (2026)",
    ],
  },
  {
    country: "Германия",
    items: ["Выставка Berlin Bazaar, Берлин (2023)"],
  },
  {
    country: "Китай",
    items: ["«Дни культуры Астаны», Пекин (2011)"],
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
                  Assel Sabyrzhankyzy &middot; Ассоль / Assolyaa &middot; Асель
                  Бекжан
                </p>
                <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Род. 7 марта 1994, Алматы &middot; Instagram / TikTok —
                  @assolyaa
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Профессиональный художник и портретист, магистр
                  искусствоведческих наук, автор креативного цифрового контента
                  и создатель авторского направления KilemArt. Работает в жанрах
                  современной и портретной живописи, гиперреализма — и в
                  собственном направлении картин на коврах, основанном на
                  казахском и тюркском культурном коде.
                </p>
                <p className="mt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                  Творчество отмечено на государственном уровне: медалью «Ерен
                  еңбегі үшін», нагрудным знаком «Алтын Барыс» и благодарностями
                  Президента Республики Казахстан, — а также признано
                  международными платформами: в 2026 году Асель вошла в топ-50
                  мировых новаторов TikTok The Discover List (категория
                  Innovators) как единственная представительница Казахстана.
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
                src={assetUrl("images/card-about-2.jpeg")}
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
                  «Я выросла, окружённая коврами, орнаментами и историями,
                  глубоко укоренёнными в традиции. Со временем я поняла, что эти
                  традиционные символы не должны оставаться в прошлом — им нужен
                  новый подход. Сейчас я перевожу их на язык современного
                  искусства.»
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Асель Сабыржанқызы — казахстанская художница, работающая на
                  стыке классической портретной живописи и современного
                  искусства. Профессиональное образование получила в Казахском
                  национальном университете искусств (КазНУИ) и Казахской
                  национальной академии искусств имени Т. Жургенова; тема её
                  научного исследования — образ исторической личности в
                  современной портретной живописи Казахстана.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Центральная тема творчества — образы выдающихся исторических
                  личностей тюркского мира. Асель — автор серии «Женщины Великой
                  степи», цикла из 14 знаковых женских образов — от царицы саков
                  до батыров и правительниц тюркских государств, — а также
                  портретов Кенесары хана, Абая Кунанбайулы, лидеров Алаш,
                  Бауыржана Момышулы, Динмухамеда Кунаева, Жошы хана и Умай.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Её перформансы — одновременное создание нескольких портретов,
                  в том числе рисование шестью инструментами руками и ногами
                  одновременно — стали вирусным культурным феноменом и сделали
                  художницу одной из самых узнаваемых фигур современного
                  казахстанского искусства.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  С 2025 года Ассоль передаёт авторские ковровые портреты
                  мировым звёздам — Дженнифер Лопес, Джеки Чану, Николь
                  Шерзингер, Кери Хилсон; видео с портретом Энрике Иглесиаса
                  артист опубликовал в своём официальном аккаунте. В 2026 году
                  творчество художницы отмечено в The Independent и включено в
                  глобальный список новаторов TikTok The Discover List 2026.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  В Алматы Асель основала собственное арт-пространство — студию
                  Assolyaa Arts Center, где ведёт образовательные программы для
                  нового поколения художников. Работы представлены на
                  международных выставках в Париже, Баку, Берлине и Пекине.
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
                  KilemArt превращает традиционный восточный ковёр из
                  декоративно-бытового предмета в полноценное концептуальное
                  полотно современного искусства.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Готовый тканый ковёр берётся в качестве основного холста.
                  Портрет наносится поверх ворса — в том числе аэрозольными
                  красками, — при этом часть аутентичного орнамента остаётся
                  видимой и интегрируется в черты лица, одежду или силуэт
                  персонажа: рисунок ковра и живопись образуют единое
                  художественное высказывание.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Идеология направления — синтез исторической памяти, тюркского
                  традиционного орнамента, уличного искусства (street-art),
                  портретной живописи и digital-культуры. Символический манифест
                  KilemArt — образ Көкбөрі, мифической волчицы-прародительницы
                  тюрков: после этой работы ковёр утвердился как главный
                  художественный носитель художницы.
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
                    <div
                      key={item.title}
                      className="border-t border-ivory/20 pt-6"
                    >
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
              Реестр <span className="italic">серий и произведений</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-px bg-border/40 lg:grid-cols-2">
            {[
              {
                title: "«Женщины Великой степи» — 14 образов",
                text: "Saqtar Patshaiymy (Царица саков / Томирис), Bopai, Aiganym, Kurmanjan, Kókbóri, Jer-Ana, Ańshy, Barys Qyz, Rabia Sultan, Gayhar Batyr, Fatima, Aitolqyn Batyr, Aibike Batyr, Súúmbike — портреты цариц, амазонок и правительниц тюркской истории, написанные на коврах.",
              },
              {
                title: "Историко-символические работы",
                text: "KilemArt «Жошы хан» и «Умай»; портрет Бауыржана Момышулы; символический портрет Касым-Жомарта Токаева; портрет Абая Кунанбайулы, каллиграфически сотканный из текста песни «Көзімнің қарасы»; деревянная инсталляция «Төрт батыр»; портреты из тысяч силуэтов людей — ханы Керей и Жанибек, Кенесары хан, Динмухамед Кунаев.",
              },
              {
                title: "Лидеры «Алаш» и три бия",
                text: "Портреты Алихана Бокейхана, Ахмета Байтурсынова и Мыржакыпа Дулатова, выполненные синхронно тремя карандашами; Толе би, Казыбек би и Айтеке би, созданные одновременно тремя карандашами — фирменная техника одновременного письма.",
              },
              {
                title: "Современные персоны и поп-культура",
                text: "Димаш Кудайберген (гиперреализм, видеосъёмка в Алмарасанском ущелье); Жанар Дугалова (100 часов работы, презентация в Чарынском каньоне); Jah Khalib (в декорациях «Города кочевников»); Батырхан Шукенов; Геннадий Головкин (видеопроект в боксёрском ринге); Скриптонит (экспериментальное видео с VFX).",
              },
              {
                title: "Международные персоналии",
                text: "Jennifer Lopez, Jackie Chan, Nicole Scherzinger, Enrique Iglesias, Михаил Шайдоров — авторские ковровые портреты и арт-объекты, созданные и переданные лично мировым звёздам.",
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

      {/* Career timeline */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Хронология
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Профессиональный путь <span className="italic">по годам</span>
            </h2>
          </FadeIn>

          <div className="space-y-16">
            {timeline.map((period) => (
              <div
                key={period.years}
                className="grid grid-cols-1 gap-8 border-t border-border/40 pt-10 lg:grid-cols-12"
              >
                <FadeIn className="lg:col-span-3">
                  <p className="font-sans text-sm text-muted-foreground">
                    {period.years}
                  </p>
                  <h3 className="mt-2 font-serif text-xl font-light text-foreground">
                    {period.title}
                  </h3>
                </FadeIn>
                <FadeIn delay={0.08} className="lg:col-span-9">
                  <ul className="space-y-4">
                    {period.items.map((item) => (
                      <li
                        key={item}
                        className="border-l border-border/60 pl-6 font-sans text-sm leading-[1.9] text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </FadeIn>
              </div>
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
              Награды и звания
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Признание
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {awards.map((award, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-24 shrink-0 font-sans text-sm text-muted-foreground">
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

      {/* Exhibitions geography */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Выставки
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              География <span className="italic">международных выставок</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-px bg-border/40 md:grid-cols-2 lg:grid-cols-3">
            {exhibitionGeography.map((geo, i) => (
              <FadeIn key={geo.country} delay={i * 0.06}>
                <div className="h-full bg-background p-10">
                  <h3 className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    {geo.country}
                  </h3>
                  <ul className="mt-6 space-y-3">
                    {geo.items.map((item) => (
                      <li
                        key={item}
                        className="font-serif text-base font-light leading-relaxed text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
                Творческая миссия
              </p>
              <h2 className="mt-4 font-serif text-3xl font-light text-ivory">
                Экосистема и <span className="italic">наставничество</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} className="lg:col-span-8">
              <div className="space-y-8">
                <p className="font-serif text-2xl font-light leading-relaxed text-ivory md:text-3xl">
                  Переосмысление традиций и репрезентация культурного кода
                  Казахстана через актуальный язык современного искусства.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Ковёр трактуется как символ дома, рода, предков и культурной
                  преемственности, а цифровой контент — как полноценное
                  самостоятельное медиаискусство, вовлекающее молодёжь.
                </p>
                <p className="font-sans text-sm leading-[1.9] text-ivory/70">
                  Основанная Асель инфраструктура — Assolyaa Arts Center в
                  Алматы: собственное арт-пространство и образовательная студия.
                  Ведёт образовательные программы для молодых художников,
                  продвигая модель арт-предпринимателя нового типа, гармонично
                  сочетающего академическую школу, собственный почерк,
                  медийность и сотрудничество с брендами.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
