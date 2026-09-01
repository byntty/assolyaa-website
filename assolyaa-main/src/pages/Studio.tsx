import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const studioImages = [
  {
    url: "./images/artwork-01.jpg",
    caption: "Царица Сакская — смешанная техника на ковре",
    span: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    url: "./images/card-studio.jpg",
    caption: "Мастерская — процесс создания картин на ковре",
    span: "col-span-1 sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    url: "./images/artwork-05.jpg",
    caption: "Айтолкын-батыр — орнамент и детали ткачества",
    span: "col-span-1 sm:col-span-2",
    aspect: "aspect-[16/9]",
  },
  {
    url: "./images/artwork-08.jpg",
    caption: "Жер-Ана — работа с натуральными красителями",
    span: "col-span-1",
    aspect: "aspect-[4/5]",
  },
  {
    url: "./images/card-about.jpg",
    caption: "Готовая работа — при естественном освещении",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    url: "./images/artwork-12.jpg",
    caption: "Аңшы — цветовая палитра и текстура",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    url: "./images/artwork-13.jpg",
    caption: "Барыс-қыз — завершающий этап работы",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
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

      {/* Visual Essay Grid */}
      <section className="px-6 pb-24 lg:px-12">
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
