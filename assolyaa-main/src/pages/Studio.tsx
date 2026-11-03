import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";

const IMG = (file: string) => assetUrl(`images/${file}`);

/** Creative classes: kids, teens, adults and portfolio preparation. */
const educationPrograms: {
  id: string;
  audience: string;
  title?: string;
  age?: string;
  price: string;
  details: string[];
  image: string;
  imageAlt: string;
  intro?: string;
  bullets?: string[];
  groups?: { title: string; items: string[] }[];
  trial: string;
  trialNote?: string;
}[] = [
  {
    id: "kids",
    audience: "Дети",
    title: "Творческая мастерская",
    age: "6–11 лет",
    price: "45 000 ₸ / мес.",
    details: ["6–11 лет", "8 занятий в месяц", "материалы включены"],
    image: "fillers/kids.jpg",
    imageAlt: "Творческий процесс в студии Assolyaa",
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
    audience: "Подростки",
    age: "10–17 лет",
    price: "45 000 ₸ / мес.",
    details: ["10–17 лет", "8 занятий в месяц", "материалы включены"],
    image: "fillers/teens.jpg",
    imageAlt: "Ученица на занятии",
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
    age: "Для начинающих и практикующих",
    price: "45 000 ₸ / мес.",
    details: [
      "8 занятий в месяц",
      "занятия по субботам и воскресеньям",
      "материалы включены",
    ],
    image: "fillers/adults.jpg",
    imageAlt: "Ассоль за работой над картиной",
    intro:
      "Подходит как для начинающих, так и для тех, кто уже имеет опыт в рисовании. На занятиях можно освоить:",
    bullets: [
      "рисунок;",
      "живопись;",
      "композицию;",
      "различные художественные техники.",
    ],
    trial: "Пробное занятие — 7 000 ₸",
  },
  {
    id: "portfolio",
    audience: "Подготовка в художественный вуз",
    title: "Профессиональный курс для абитуриентов",
    age: "Подготовка к поступлению",
    price: "55 000 ₸ / мес.",
    details: ["8 занятий в месяц", "материалы включены"],
    image: "fillers/sketch.jpg",
    imageAlt: "Академический рисунок",
    intro:
      "Курс направлен на системную подготовку и создание портфолио для поступления. В программе:",
    groups: [
      {
        title: "Академический рисунок",
        items: ["гипс;", "натюрморт;", "фигура."],
      },
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
    trial: "Пробный урок — 7 000 ₸",
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
  {
    question: "Когда проходят занятия?",
    answer: "По субботам и воскресеньям.",
  },
];

const atmosphere = [
  { file: "fillers/studio-int.jpg", alt: "Краски и материалы в мастерской" },
  { file: "fillers/palette.jpg", alt: "Палитра художницы" },
  { file: "fillers/studio-plant.jpg", alt: "Мольберт у окна мастерской" },
  { file: "artwork-13.jpg", alt: "Картина на ковре «Барыс-қыз»" },
  { file: "fillers/artist.jpg", alt: "Художница с палитрой" },
];

export default function Studio() {
  const [activeProgram, setActiveProgram] = useState<
    (typeof educationPrograms)[number] | null
  >(null);

  const close = useCallback(() => setActiveProgram(null), []);

  useEffect(() => {
    if (!activeProgram) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeProgram, close]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative min-h-[78vh] overflow-hidden">
        <img
          src={IMG("card-studio.jpg")}
          alt="Художественная студия Assolyaa"
          className="absolute inset-0 h-full w-full object-cover object-[center_35%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/25" />
        <div className="relative flex min-h-[78vh] flex-col justify-end px-6 pb-16 pt-32 lg:px-12 lg:pb-20">
          <FadeIn>
            <h1 className="max-w-2xl font-serif text-[40px] font-light leading-[1.08] text-white md:text-6xl">
              Пространство <span className="italic">для творчества</span>
            </h1>
            <p className="mt-5 max-w-xl font-sans text-sm leading-[1.9] text-white/80">
              Художественная студия Ассоль: занятия для детей, подростков и
              взрослых в Assolyaa Arts Center в Алматы — академическая база,
              живой творческий процесс и поддержка преподавателя на каждом
              этапе.
            </p>
            <a
              href={whatsappLink(
                "Здравствуйте! Хочу записаться на пробный урок в студии Assolyaa.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-xl border border-white/70 px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-white transition-colors duration-300 hover:bg-white hover:text-foreground"
            >
              Записаться на пробный урок
              <ArrowRight className="size-3.5" strokeWidth={1.25} />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ─── Facts bar ─── */}
      <section className="px-6 lg:px-12">
        <FadeIn>
          <div className="mx-auto -mt-8 flex max-w-[1400px] flex-wrap items-center gap-x-12 gap-y-6 rounded-2xl border border-border/60 bg-card p-8">
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-5xl font-light leading-none text-foreground">
                8
              </span>
              <p className="font-sans text-sm leading-[1.6] text-muted-foreground">
                занятий
                <br />в месяц
              </p>
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <p className="font-sans text-sm text-muted-foreground">
              Материалы включены
            </p>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <p className="font-sans text-sm text-muted-foreground">
              Занятия в выходные дни
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ─── Направления ─── */}
      <section id="education" className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
              Выберите <span className="italic">своё направление</span>
            </h2>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Нажмите на направление — откроется подробная программа и условия
              занятий.
            </p>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-10">
            {educationPrograms.map((program, i) => (
              <FadeIn key={program.id} delay={i * 0.06}>
                <button
                  onClick={() => setActiveProgram(program)}
                  className="group block w-full text-left"
                >
                  <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-parchment">
                    <img
                      src={IMG(program.image)}
                      alt={program.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-4">
                    <div>
                      <p className="font-serif text-xl font-light text-foreground">
                        {program.audience}
                      </p>
                      {program.age && (
                        <p className="mt-1 font-sans text-sm text-muted-foreground">
                          {program.age}
                        </p>
                      )}
                    </div>
                    <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 group-hover:border-foreground group-hover:text-foreground">
                      <ArrowRight className="size-3.5" strokeWidth={1.25} />
                    </span>
                  </div>
                  <p className="mt-3 font-serif text-lg font-light text-foreground">
                    {program.price}
                  </p>
                </button>
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
                  <span className="flex size-11 items-center justify-center rounded-xl bg-secondary font-serif text-lg font-light text-foreground">
                    {step.number}
                  </span>
                  <p className="mt-4 font-serif text-lg font-light text-foreground">
                    {step.title}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Атмосфера студии */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-2xl font-light text-foreground md:text-3xl">
              Атмосфера студии
            </h3>
          </FadeIn>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {atmosphere.map((item, i) => (
              <FadeIn key={item.file} delay={i * 0.06}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-parchment">
                  <img
                    src={IMG(item.file)}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
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

          {/* Trial lesson */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-3xl font-light text-foreground md:text-4xl">
              Запишитесь на пробный урок
            </h3>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="mt-8 grid items-center gap-8 rounded-3xl border border-border/60 bg-card p-8 md:grid-cols-[auto_1fr] md:p-10">
              <div className="size-28 overflow-hidden rounded-2xl bg-parchment md:size-36">
                <img
                  src={IMG("card-gallery.jpg")}
                  alt="Процесс создания картины на ковре"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Пробный урок
                </p>
                <p className="mt-2 font-serif text-4xl font-light text-foreground">
                  7 000 ₸
                </p>
                <div className="mt-4 border-t border-border/50 pt-4">
                  <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                    Занятия в выходные дни — суббота и воскресенье.
                  </p>
                </div>
                <a
                  href={whatsappLink(
                    "Здравствуйте! Хочу записаться на пробный урок в студии Assolyaa.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-foreground px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-foreground/90"
                >
                  Записаться на пробный урок
                  <ArrowRight className="size-3.5" strokeWidth={1.25} />
                </a>
                <p className="mt-4 font-sans text-xs text-muted-foreground">
                  WhatsApp · +7 777 001 1686
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Wordmark */}
          <div className="pb-16 pt-16 text-center">
            <p className="font-serif text-sm uppercase tracking-[0.3em] text-foreground">
              Assolyaa
            </p>
            <p className="mt-1 font-sans text-[9px] uppercase tracking-[0.4em] text-muted-foreground">
              Art Studio
            </p>
          </div>
        </div>
      </section>

      {/* Program modal */}
      <AnimatePresence>
        {activeProgram && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-background/95 p-6 backdrop-blur-sm md:items-center"
            onClick={close}
          >
            <button
              onClick={close}
              className="fixed right-6 top-6 z-[110] flex size-12 items-center justify-center text-foreground/70 transition-colors hover:text-foreground"
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
              className="my-10 w-full max-w-2xl rounded-3xl bg-background p-8 md:p-12"
            >
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {activeProgram.audience}
              </p>
              {activeProgram.title && (
                <h3 className="mt-3 font-serif text-2xl font-light text-foreground md:text-3xl">
                  {activeProgram.title}
                </h3>
              )}

              <p className="mt-6 font-serif text-2xl font-light text-foreground">
                {activeProgram.price}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {activeProgram.details.map((detail) => (
                  <span
                    key={detail}
                    className="rounded-full border border-border/60 px-4 py-1 font-sans text-[10px] uppercase tracking-[0.1em] text-muted-foreground"
                  >
                    {detail}
                  </span>
                ))}
              </div>

              {activeProgram.intro && (
                <p className="mt-8 font-sans text-sm leading-[1.9] text-muted-foreground">
                  {activeProgram.intro}
                </p>
              )}

              {activeProgram.bullets && (
                <ul className="mt-3 space-y-1.5">
                  {activeProgram.bullets.map((bullet) => (
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

              {activeProgram.groups && (
                <div className="mt-6 space-y-5">
                  {activeProgram.groups.map((group) => (
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

              <div className="mt-10 border-t border-border/50 pt-6">
                <p className="font-sans text-sm text-foreground">
                  {activeProgram.trial}
                </p>
                {activeProgram.trialNote && (
                  <p className="mt-1 font-sans text-[13px] leading-relaxed text-muted-foreground">
                    {activeProgram.trialNote}
                  </p>
                )}
                <a
                  href={whatsappLink(
                    `Здравствуйте! Хочу записаться на занятия — ${activeProgram.audience}.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-3 rounded-xl bg-foreground px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-foreground/90"
                >
                  Записаться
                  <ArrowRight className="size-3.5" strokeWidth={1.25} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
