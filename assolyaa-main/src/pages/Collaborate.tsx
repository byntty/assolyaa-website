import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router";

const processSteps = [
  {
    number: "01",
    title: "Заявка",
    description:
      "Свяжитесь с нами по телефону, WhatsApp или электронной почте. Расскажите о вашем проекте, пожеланиях по размеру и стилю.",
  },
  {
    number: "02",
    title: "Очередь",
    description:
      "Лист ожидания на заказную картину составляет 5–6 месяцев. Это связано с ручным процессом создания каждой работы.",
  },
  {
    number: "03",
    title: "Создание",
    description:
      "Каждая картина создаётся вручную — от выбора шерсти и натуральных красителей до финального ткачества. Работа ведётся в мастерской в Алматы.",
  },
  {
    number: "04",
    title: "Доставка",
    description:
      "Готовые картины отправляются в любую точку мира курьерской службой. Стоимость доставки рассчитывается по тарифам.",
  },
];

const pastPartners = [
  {
    name: "Международная выставка в Париже",
    type: "Выставка",
    year: "2024",
  },
  {
    name: "Выставка в Берлине",
    type: "Выставка",
    year: "2024",
  },
  {
    name: "Выставка в Баку",
    type: "Выставка",
    year: "2023",
  },
  {
    name: "Выставка в Астане (#KilemArt)",
    type: "Выставка",
    year: "2023",
  },
  {
    name: "Телеканалы и шоу Казахстана",
    type: "СМИ и медиа",
    year: "2022–2024",
  },
];

export default function Collaborate() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Сотрудничество
                </p>
                <h1 className="mt-4 font-serif text-4xl font-light leading-snug text-foreground md:text-6xl">
                  Картина
                  <br />
                  <span className="italic">на заказ</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Вы можете заказать у Ассоль картину на ковре по
                  индивидуальному заказу. Стандартные размеры: 150×100 см и
                  230×150 см. Стоимость: 3 000 000 тенге (6 000 $).
                </p>
                <p className="mt-4 font-sans text-sm leading-[1.9] text-muted-foreground">
                  Лист ожидания составляет 5–6 месяцев. Отправка в любую точку
                  мира.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex w-fit items-center gap-2 border-b border-foreground/30 pb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground"
                >
                  Оставить заявку
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Как это работает
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Процесс
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.1}>
                <div className="group">
                  <span className="font-serif text-5xl font-light text-border/60 transition-colors group-hover:text-muted-foreground/40">
                    {step.number}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-light text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Past Partnerships */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Проекты
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Избранные выставки и партнёрства
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {pastPartners.map((partner, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group flex items-baseline gap-6 border-t border-border/40 py-6 transition-colors hover:border-foreground/20 md:gap-10">
                  <span className="w-16 shrink-0 font-sans text-sm text-muted-foreground">
                    {partner.year}
                  </span>
                  <h3 className="flex-1 font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70">
                    {partner.name}
                  </h3>
                  <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {partner.type}
                  </span>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-ivory md:text-5xl">
              Хотите заказать картину
              <br />
              <span className="italic">или сотрудничать?</span>
            </h2>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 border-b border-ivory/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:border-ivory"
            >
              Связаться с нами
            </Link>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
