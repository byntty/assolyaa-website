import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";
import { ArrowRight } from "lucide-react";

const studioImages = [
  {
    url: assetUrl("images/artwork-01.jpg"),
    caption: "Царица Сакская — смешанная техника на ковре",
    span: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    url: assetUrl("images/card-studio.jpg"),
    caption: "Мастерская — процесс создания картин на ковре",
    span: "col-span-1 sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    url: assetUrl("images/artwork-05.jpg"),
    caption: "Айтолкын-батыр — орнамент и детали ткачества",
    span: "col-span-1 sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    url: assetUrl("images/artwork-08.jpg"),
    caption: "Жер-Ана — работа с натуральными красителями",
    span: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    url: assetUrl("images/card-about.jpeg"),
    caption: "Готовая работа — при естественном освещении",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    url: assetUrl("images/artwork-12.jpg"),
    caption: "Аңшы — цветовая палитра и текстура",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    url: assetUrl("images/artwork-13.jpg"),
    caption: "Барыс-қыз — завершающий этап работы",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
];

/** Creative classes: kids, teens, adults and portfolio preparation. */
const educationPrograms: {
  id: string;
  audience: string;
  title?: string;
  price: string;
  details: string[];
  intro?: string;
  bullets?: string[];
  groups?: { title: string; items: string[] }[];
  trial: string;
  trialNote?: string;
}[] = [
  {
    id: "kids",
    audience: "Дети · 6–11 лет",
    title: "Творческая мастерская",
    price: "Абонемент — 45 000 ₸ / месяц",
    details: ["8 занятий в месяц", "2 раза в неделю", "материалы включены"],
    intro: "На занятиях дети:",
    bullets: [
      "знакомятся с разными художественными техниками;",
      "развивают воображение и творческое мышление;",
      "учатся работать с цветом, формой и композицией;",
      "создают собственные работы под руководством педагога.",
    ],
    trial: "Пробный урок — 7 000 ₸",
    trialNote: "Первое знакомство со студией, педагогом и форматом занятий.",
  },
  {
    id: "teens",
    audience: "Подростки · 10–17 лет",
    price: "Абонемент — 45 000 ₸ / месяц",
    details: ["8 занятий в месяц", "2 раза в неделю", "материалы включены"],
    intro:
      "Программа адаптирована под возраст и уровень подготовки ученика. На занятиях:",
    bullets: [
      "рисунок и живопись;",
      "композиция;",
      "работа с различными художественными материалами;",
      "развитие собственного стиля;",
      "практические творческие задания.",
    ],
    trial: "Пробный урок — 7 000 ₸",
  },
  {
    id: "adults",
    audience: "Взрослые",
    price: "Абонемент — 45 000 ₸ / месяц",
    details: [
      "8 занятий в месяц",
      "занятия по субботам и воскресеньям",
      "материалы включены",
    ],
    intro:
      "Подходит как для начинающих, так и для тех, кто уже имеет опыт в рисовании. На занятиях можно освоить:",
    bullets: ["рисунок;", "живопись;", "композицию;", "различные художественные техники."],
    trial: "Первое занятие — 7 000 ₸",
  },
  {
    id: "portfolio",
    audience: "Подготовка к поступлению в художественный вуз",
    title: "Профессиональный курс для абитуриентов",
    price: "Абонемент — 55 000 ₸ / месяц",
    details: ["8 занятий в месяц"],
    intro:
      "Курс направлен на системную подготовку и создание портфолио для поступления. В программе:",
    groups: [
      { title: "Академический рисунок", items: ["гипс;", "натюрморт;", "фигура."] },
      {
        title: "Композиция",
        items: ["пространство;", "форма;", "построение композиции."],
      },
      { title: "Живопись", items: ["акварель;", "масло;", "гуашь."] },
      {
        title: "Портфолио",
        items: [
          "подбор и создание работ;",
          "развитие художественного уровня;",
          "подготовка к поступлению.",
        ],
      },
    ],
    trial: "Первый урок — 7 000 ₸",
    trialNote:
      "Вводное занятие • консультация • арт-разбор • определение уровня и целей ученика.",
  },
];

const educationSteps = [
  { number: "01", title: "Знакомство" },
  { number: "02", title: "Выбираем направление" },
  { number: "03", title: "Пробный урок" },
  { number: "04", title: "Абонемент и регулярные занятия" },
];

const educationFaq = [
  {
    question: "Можно ли прийти без опыта?",
    answer: "Да, программа подходит для начинающих.",
  },
  {
    question: "Материалы входят в стоимость?",
    answer: "Да, все необходимые материалы предоставляются студией.",
  },
  {
    question: "Можно ли сначала прийти на пробный урок?",
    answer:
      "Да, для детских, подростковых и взрослых занятий доступно первое занятие за 7 000 ₸.",
  },
  { question: "Когда проходят занятия?", answer: "По субботам и воскресеньям." },
];

export default function Studio() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Закулисье
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-foreground md:text-6xl">
              <span className="italic">Мастерская</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Визуальное эссе о творческом процессе — от сырья и натуральных
              красителей до медитативного ритма ткачества и тихой радости
              завершённой работы.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── Обучение ─── */}
      <section
        id="education"
        className="border-t border-border/50 px-6 py-20 lg:px-12"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Обучение
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-5xl">
              Мастерская
            </h2>
            <p className="mt-6 max-w-2xl font-serif text-xl font-light leading-snug text-foreground md:text-2xl">
              Творческие занятия для детей, подростков и взрослых
            </p>
            <p className="mt-5 max-w-2xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Занятия проходят по субботам и воскресеньям.
              <br />
              Все необходимые художественные материалы входят в стоимость
              обучения.
            </p>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {educationPrograms.map((program, i) => (
              <FadeIn key={program.id} delay={i * 0.06}>
                <article className="flex h-full flex-col border border-border/60 bg-card p-8">
                  <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {program.audience}
                  </p>
                  {program.title && (
                    <h3 className="mt-3 font-serif text-2xl font-light text-foreground">
                      {program.title}
                    </h3>
                  )}

                  <p className="mt-5 font-serif text-xl font-light text-foreground">
                    {program.price}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {program.details.map((detail) => (
                      <span
                        key={detail}
                        className="border border-border/60 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>

                  {program.intro && (
                    <p className="mt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                      {program.intro}
                    </p>
                  )}

                  {program.bullets && (
                    <ul className="mt-3 space-y-1.5">
                      {program.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-3 font-sans text-sm leading-[1.9] text-muted-foreground"
                        >
                          <span className="text-border">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {program.groups && (
                    <div className="mt-5 space-y-5">
                      {program.groups.map((group) => (
                        <div key={group.title}>
                          <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-foreground">
                            {group.title}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {group.items.map((item) => (
                              <li
                                key={item}
                                className="flex gap-3 font-sans text-sm leading-[1.9] text-muted-foreground"
                              >
                                <span className="text-border">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-8">
                    <p className="font-sans text-sm text-foreground">
                      {program.trial}
                    </p>
                    {program.trialNote && (
                      <p className="mt-1 font-sans text-[13px] leading-relaxed text-muted-foreground">
                        {program.trialNote}
                      </p>
                    )}
                    <a
                      href={whatsappLink(
                        `Здравствуйте! Хочу записаться на занятия — ${program.audience}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 border-b border-foreground/30 pb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground"
                    >
                      Записаться
                      <ArrowRight className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>

          {/* Как проходят занятия */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-2xl font-light text-foreground md:text-3xl">
              Как проходят занятия?
            </h3>
          </FadeIn>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {educationSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="border-t border-border/50 pt-6">
                  <span className="font-serif text-4xl font-light text-border/70">
                    {step.number}
                  </span>
                  <p className="mt-3 font-serif text-lg font-light text-foreground">
                    {step.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* FAQ */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-2xl font-light text-foreground md:text-3xl">
              Частые вопросы
            </h3>
          </FadeIn>

          <div className="mt-8 grid grid-cols-1 gap-x-16 gap-y-0 lg:grid-cols-2">
            {educationFaq.map((item, i) => (
              <FadeIn key={item.question} delay={i * 0.05}>
                <div className="border-t border-border/40 py-6">
                  <p className="font-serif text-lg font-light text-foreground">
                    {item.question}
                  </p>
                  <p className="mt-2 font-sans text-sm leading-[1.9] text-muted-foreground">
                    {item.answer}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA */}
          <FadeIn>
            <div className="mt-16 border-t border-border/50 pt-12 text-center">
              <h3 className="font-serif text-3xl font-light text-foreground md:text-4xl">
                Запишитесь на занятие
              </h3>
              <p className="mx-auto mt-5 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                Выберите подходящее направление и запишитесь на пробный или
                первый урок.
              </p>
              <a
                href={whatsappLink(
                  "Здравствуйте! Хочу записаться на занятие в мастерской.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-3 border-b border-foreground/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground"
              >
                Записаться на урок
                <ArrowRight className="size-3" />
              </a>
              <p className="mt-6 font-sans text-sm text-muted-foreground">
                WhatsApp · +7 770 011 68 86
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Visual Essay Grid */}
      <section className="border-t border-border/50 px-6 pb-24 pt-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {studioImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.08} className={img.span}>
                <div className="group overflow-hidden">
                  <div className={`${img.aspect} overflow-hidden bg-parchment`}>
                    <img
                      src={img.url}
                      alt={img.caption}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-3 font-sans text-[11px] leading-relaxed text-muted-foreground/70">
                    {img.caption}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process text */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12">
          <FadeIn className="lg:col-span-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Процесс
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-foreground">
              От нити
              <br />
              <span className="italic">к полотну</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.1} className="lg:col-span-8">
            <div className="space-y-8">
              <div className="border-l-2 border-border/40 pl-8">
                <h3 className="font-serif text-lg font-light text-foreground">
                  01 — Сырьё
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  Каждый проект начинается с выбора материалов — шерсть для
                  ткачества, натуральные красители из ореха, граната, марены и
                  оксида железа. Сырьё закупается у местных производителей.
                </p>
              </div>
              <div className="border-l-2 border-border/40 pl-8">
                <h3 className="font-serif text-lg font-light text-foreground">
                  02 — Красители
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  Цвета извлекаются из грецкого ореха, кожуры граната, корня
                  марены и оксида железа. Процесс окрашивания медленный и
                  медитативный — натуральные красители дают глубину, недоступную
                  синтетическим.
                </p>
              </div>
              <div className="border-l-2 border-border/40 pl-8">
                <h3 className="font-serif text-lg font-light text-foreground">
                  03 — Создание
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  Будь то ткачество, вышивка или живопись на ковре — каждая
                  работа занимает недели или месяцы. Процесс определяется самими
                  материалами — их весом, текстурой и природными свойствами.
                </p>
              </div>
              <div className="border-l-2 border-border/40 pl-8">
                <h3 className="font-serif text-lg font-light text-foreground">
                  04 — Завершение
                </h3>
                <p className="mt-2 font-sans text-sm leading-relaxed text-muted-foreground">
                  Готовая работа остаётся в мастерской на несколько дней перед
                  отправкой — период тихого наблюдения и финальной доводки.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
