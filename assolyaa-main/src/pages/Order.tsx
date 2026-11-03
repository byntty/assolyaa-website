import { useRef, type MouseEvent } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";
import {
  ArrowRight,
  CalendarClock,
  ChevronLeft,
  ChevronRight,
  FileBadge,
  Globe,
  Play,
  ShieldCheck,
  Truck,
  Zap,
} from "lucide-react";

const IMG = (file: string) => assetUrl(`images/${file}`);

const orderSteps = [
  {
    number: "01",
    title: "Обсуждаем ваши пожелания",
    text: "Знакомимся, определяем сюжет, настроение и назначение будущей работы.",
  },
  {
    number: "02",
    title: "Ассоль разрабатывает концепцию и эскиз",
    text: "Формируется авторская идея: образ, орнамент, палитра и композиция на ковре.",
  },
  {
    number: "03",
    title: "Согласовываем детали",
    text: "Утверждаем размер, цветовую гамму и сроки — только после вашего «да» начинается работа.",
  },
  {
    number: "04",
    title: "Создаём картину специально для вас",
    text: "Ассоль вручную пишет портрет на ковре в своей студии в Алматы.",
  },
];

const sizes = [
  {
    dimensions: "230 × 150 см",
    price: "3 250 000 ₸",
    usd: "~ 6 000 $",
    image: "artwork-02.jpg",
  },
  {
    dimensions: "150 × 100 см",
    price: "2 150 000 ₸",
    usd: "~ 4 000 $",
    image: "artwork-01.jpg",
  },
];

const included = [
  {
    icon: Play,
    title: "Авторское видео",
    text: "Видеосъёмка создания работы — от эскиза до готовой картины.",
  },
  {
    icon: ShieldCheck,
    title: "Защитный чехол",
    text: "Фирменный чехол в национальном стиле с казахским орнаментом.",
  },
  {
    icon: FileBadge,
    title: "Сертификат подлинности",
    text: "Документ, подтверждающий авторство и уникальность работы.",
  },
];

const previewWorks = [
  "artwork-10.jpg",
  "artwork-11.jpg",
  "artwork-14.jpg",
  "artwork-09.jpg",
];

export default function Order() {
  const examplesRef = useRef<HTMLDivElement>(null);

  const scrollExamples = (direction: number) => {
    const el = examplesRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" });
  };

  // HashRouter reads a plain `#contact` as the /contact route, so the anchor
  // must scroll programmatically instead of navigating away (see Advertising).
  const jumpToContact = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ─── Hero ─── */}
      <section className="relative">
        <div className="relative mx-auto max-w-[1400px] px-6 pb-16 pt-32 lg:px-12 lg:pb-20">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Индивидуальный заказ
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-[40px] font-light leading-[1.08] text-foreground md:text-6xl lg:text-7xl">
              Картина,
              <br />
              созданная <span className="italic">специально для вас</span>
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* ─── 12 картин в год ─── */}
      <section className="relative z-10 px-6 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-[1400px]">
            <div className="-mt-10 max-w-xl rounded-2xl border border-border/60 bg-card p-8 md:p-10">
              <p className="font-serif text-3xl font-light text-foreground md:text-4xl">
                Всего 12 картин в год
              </p>
              <p className="mt-4 font-sans text-sm leading-[1.9] text-muted-foreground">
                Каждая работа — для одного коллекционера. Мы берёмся за заказ,
                только когда можем уделить ему максимум внимания.
              </p>
              <a
                href="#contact"
                onClick={jumpToContact}
                className="mt-8 inline-flex items-center gap-3 rounded-xl bg-foreground px-8 py-4 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-foreground/90"
              >
                Обсудить заказ
                <ArrowRight className="size-3.5" strokeWidth={1.25} />
              </a>
              <p className="mt-4 font-sans text-xs text-muted-foreground">
                Ответим в течение 24 часов
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ─── Waiting list ─── */}
      <section className="px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="max-w-xl">
                <h2 className="font-serif text-3xl font-light leading-snug text-foreground md:text-5xl">
                  Закрытый лист ожидания
                </h2>
                <p className="mt-4 font-sans text-base leading-relaxed text-muted-foreground">
                  Заказы принимаются на 6 месяцев вперёд.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <span className="font-serif text-7xl font-light leading-none text-foreground md:text-8xl">
                  6
                </span>
                <p className="font-sans text-[11px] uppercase leading-[1.8] tracking-[0.2em] text-muted-foreground">
                  месяцев
                  <br />
                  вперёд
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-16">
              <p className="max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                Такой срок связан с ручным процессом создания каждой работы: от
                выбора ковра до финальных штрихов аэрозольной краской. Каждый
                слот в листе ожидания закреплён за одним коллекционером — вторая
                такая же картина не создаётся.
              </p>
              <div className="flex items-start gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
                <Zap
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Иногда у Ассоль есть возможность выполнить срочный заказ за
                  7–10 дней. Уточняйте у менеджера.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Examples ─── */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
                Примеры работ <span className="italic">под заказ</span>
              </h2>
              <div className="flex shrink-0 gap-3">
                <button
                  onClick={() => scrollExamples(-1)}
                  aria-label="Предыдущие работы"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
                >
                  <ChevronLeft className="size-4" strokeWidth={1.25} />
                </button>
                <button
                  onClick={() => scrollExamples(1)}
                  aria-label="Следующие работы"
                  className="flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-300 hover:border-foreground hover:text-foreground"
                >
                  <ChevronRight className="size-4" strokeWidth={1.25} />
                </button>
              </div>
            </div>
          </FadeIn>

          <div
            ref={examplesRef}
            className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
          >
            {previewWorks.map((file, i) => (
              <div
                key={file}
                className="w-[75%] shrink-0 snap-start sm:w-[46%] lg:w-[calc(30%-12px)]"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-parchment">
                  <img
                    src={IMG(file)}
                    alt={`Картина на ковре — пример работы под заказ ${i + 1}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Process ─── */}
      <section
        id="process"
        className="border-t border-border/50 px-6 py-20 lg:px-12"
      >
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
              Как это происходит
            </h2>
          </FadeIn>

          <div className="mt-10 max-w-3xl">
            {orderSteps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.05}>
                <div className="flex items-start gap-6 border-b border-border/40 py-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary font-serif text-lg font-light text-foreground">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-light text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 font-sans text-sm leading-[1.9] text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Pricing ─── */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
              Стоимость
            </h2>
          </FadeIn>

          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {sizes.map((size, i) => (
              <FadeIn key={size.dimensions} delay={i * 0.1}>
                <div className="flex items-center gap-6 border-t border-border/60 pt-8">
                  <div className="size-24 shrink-0 overflow-hidden rounded-2xl bg-parchment md:size-28">
                    <img
                      src={IMG(size.image)}
                      alt={`Картина на ковре ${size.dimensions}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {size.dimensions}
                    </p>
                    <p className="mt-2 font-serif text-3xl font-light text-foreground md:text-4xl">
                      {size.price}
                    </p>
                    <p className="mt-1 font-serif text-lg font-light italic text-muted-foreground">
                      ({size.usd})
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <FadeIn>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
                <CalendarClock
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Сроки исполнения уточняются у менеджера.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="flex h-full items-start gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
                <Zap
                  className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  Иногда возможен срочный заказ за 7–10 дней. Уточняйте у
                  менеджера.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* What you get */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-2xl font-light text-foreground md:text-3xl">
              Что вы получаете
            </h3>
          </FadeIn>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {included.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-border/60">
                    <item.icon
                      className="size-5 text-foreground"
                      strokeWidth={1.25}
                    />
                  </span>
                  <h4 className="mt-5 font-serif text-lg font-light text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-xs font-sans text-sm leading-[1.9] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Delivery */}
          <FadeIn>
            <h3 className="mt-20 font-serif text-2xl font-light text-foreground md:text-3xl">
              Доставка
            </h3>
          </FadeIn>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <FadeIn>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
                <Truck
                  className="size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <p className="font-sans text-sm leading-[1.9] text-foreground">
                  По Казахстану — бесплатно
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="flex h-full items-center gap-4 rounded-2xl border border-border/60 bg-secondary/60 p-6">
                <Globe
                  className="size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <p className="font-sans text-sm leading-[1.9] text-foreground">
                  По миру — рассчитывается индивидуально
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="contact" className="scroll-mt-24 px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn delay={0.08}>
            <div className="mx-auto mt-16 max-w-3xl text-center">
              <h2 className="font-serif text-3xl font-light text-foreground md:text-5xl">
                Обсудим вашу <span className="italic">будущую картину</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
                Расскажите, какой образ вы хотите видеть у себя дома, — Ассоль и
                менеджер ответят на все вопросы.
              </p>
              <a
                href={whatsappLink(
                  "Здравствуйте! Хочу обсудить индивидуальный заказ картины на ковре.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-foreground px-10 py-5 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-colors duration-300 hover:bg-foreground/90 sm:w-auto"
              >
                Обсудить заказ
                <ArrowRight className="size-3.5" strokeWidth={1.25} />
              </a>
              <p className="mt-5 font-sans text-sm text-muted-foreground">
                Ответим в течение 24 часов
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
