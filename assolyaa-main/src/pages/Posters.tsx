import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { Link } from "react-router";
import { ArrowRight, X } from "lucide-react";

const IMG = (file: string) => assetUrl(`images/${file}`);

type Poster = {
  title: string;
  versions: [string, string, string];
};

const posters: Poster[] = [
  {
    title: "Постер «Умай»",
    versions: [
      "posters/umay/version-1.jpg",
      "posters/umay/version-2.jpg",
      "posters/umay/version-3.jpg",
    ],
  },
  {
    title: "Постер «Steppe Freedom»",
    versions: [
      "posters/steppe-freedom/version-1.jpg",
      "posters/steppe-freedom/version-2.jpg",
      "posters/steppe-freedom/version-3.jpg",
    ],
  },
  {
    title: "Постер «На встречу ветру»",
    versions: [
      "posters/wind/version-1.jpg",
      "posters/wind/version-2.jpg",
      "posters/wind/version-3.jpg",
    ],
  },
  {
    title: "Постер «В цвета́х»",
    versions: [
      "posters/flowers/version-1.jpg",
      "posters/flowers/version-2.jpg",
      "posters/flowers/version-3.jpg",
    ],
  },
];

const PRICE = "59 000 ₸";

const specs = [
  { label: "Размер", value: "А2 (420 × 594 мм)" },
  { label: "Материал", value: "дизайнерский лён, высококачественная печать" },
  { label: "Автор", value: "Assolyaa, Асель Сабыржанқызы" },
];

const included = [
  "постер с ограниченным тиражом",
  "стильная рамка с паспарту",
  "дорогая подарочная коробка",
  "живой автограф от Ассоль и печать подлинности",
];

export default function Posters() {
  const [active, setActive] = useState<Poster | null>(null);
  const [version, setVersion] = useState(0);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const openPoster = (poster: Poster) => {
    setVersion(0);
    setActive(poster);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="px-6 pt-32 pb-12 lg:px-12 lg:pb-16">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              Каталог
            </p>
            <h1 className="mt-5 max-w-3xl font-serif text-[40px] font-light leading-[1.08] text-foreground md:text-6xl">
              Постеры <span className="italic">и мерч</span>
            </h1>
            <p className="mt-6 max-w-xl font-sans text-sm leading-[1.9] text-muted-foreground">
              Печатные работы Ассоль на дизайнерском льне — с рамкой, паспарту и
              автографом. Нажмите на постер, чтобы рассмотреть все варианты.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Catalogue */}
      <section className="px-6 pb-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
            {posters.map((poster, i) => (
              <FadeIn key={poster.title} delay={i * 0.06}>
                <div className="group relative">
                  <button
                    type="button"
                    onClick={() => openPoster(poster)}
                    className="block w-full text-left transition-transform duration-500 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-parchment shadow-sm transition-shadow duration-500 group-hover:shadow-xl group-focus-visible:shadow-xl">
                      <img
                        src={IMG(poster.versions[0])}
                        alt={poster.title}
                        loading={i < 3 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-focus-visible:scale-105"
                      />

                      <span className="absolute left-3 top-3 rounded-full bg-background/90 px-3 py-1 font-sans text-[10px] uppercase tracking-[0.12em] text-foreground shadow-sm backdrop-blur-sm">
                        {PRICE}
                      </span>

                      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-3 items-center justify-between gap-3 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                        <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-ivory">
                          Варианты
                        </span>
                        <ArrowRight
                          className="size-3.5 text-ivory"
                          strokeWidth={1.25}
                        />
                      </span>
                    </div>

                    <h2 className="mt-4 font-serif text-lg font-light leading-tight text-foreground md:text-xl">
                      {poster.title}
                    </h2>
                  </button>

                  <Link
                    to="/contact"
                    className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/85 px-3 py-1.5 font-sans text-[10px] uppercase tracking-[0.12em] text-foreground/70 backdrop-blur-sm transition-all duration-300 hover:border-foreground hover:bg-background hover:text-foreground"
                  >
                    <span className="hidden sm:inline">Заказать такую же работу</span>
                    <span className="sm:hidden">Заказать</span>
                    <svg
                      className="size-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Poster overlay */}
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 backdrop-blur-sm duration-300 animate-in fade-in"
        >
          <div className="flex min-h-full flex-col px-6 py-4">
            <div className="flex shrink-0 justify-end">
              <button
                onClick={() => setActive(null)}
                className="flex size-12 items-center justify-center text-foreground/70 transition-colors duration-300 hover:text-foreground hover:rotate-90"
                aria-label="Закрыть"
              >
                <X className="size-6" />
              </button>
            </div>

            <div className="flex flex-1 items-center justify-center py-4">
              <div
                onClick={(event) => event.stopPropagation()}
                className="flex w-full max-w-[1200px] flex-col items-center gap-10 duration-400 animate-in fade-in-0 zoom-in-95 slide-in-from-bottom-2 lg:flex-row lg:items-start lg:gap-16"
              >
                {/* Variants */}
                <div className="flex w-full flex-1 flex-col items-center">
                  <img
                    key={active.versions[version]}
                    src={IMG(active.versions[version])}
                    alt={`${active.title} — вариант ${version + 1}`}
                    className="max-h-[58vh] w-auto max-w-full object-contain duration-300 animate-in fade-in lg:max-h-[70vh]"
                  />

                  <div className="mt-6 flex items-center gap-3">
                    {active.versions.map((file, index) => (
                      <button
                        key={file}
                        type="button"
                        onClick={() => setVersion(index)}
                        aria-label={`Вариант ${index + 1}`}
                        aria-pressed={version === index}
                        className={`size-16 overflow-hidden rounded-lg border transition-all duration-300 hover:scale-105 active:scale-95 ${
                          version === index
                            ? "border-foreground opacity-100"
                            : "border-border/60 opacity-60 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={IMG(file)}
                          alt=""
                          className="h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="w-full max-w-sm shrink-0">
                  <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Постер
                  </p>
                  <h2 className="mt-3 font-serif text-3xl font-light leading-tight text-foreground lg:text-4xl">
                    {active.title}
                  </h2>
                  <span className="mt-4 inline-flex items-center rounded-full border border-foreground/20 bg-secondary px-4 py-1.5 font-sans text-sm text-foreground">
                    {PRICE}
                  </span>

                  <dl className="mt-6 space-y-3 border-t border-border/50 pt-6">
                    {specs.map((spec) => (
                      <div key={spec.label} className="flex justify-between gap-6">
                        <dt className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                          {spec.label}
                        </dt>
                        <dd className="text-right font-sans text-sm text-foreground">
                          {spec.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-8">
                    <h3 className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      Что входит в стоимость
                    </h3>
                    <ul className="mt-4 space-y-2">
                      {included.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 font-sans text-sm leading-relaxed text-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/50" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="mt-8 border-t border-border/50 pt-6 font-sans text-sm leading-[1.9] text-muted-foreground">
                    Доставка по Казахстану и по всему миру оплачивается по
                    тарифам почтовой службы
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 font-sans text-[11px] uppercase tracking-[0.15em] text-background transition-opacity duration-300 hover:opacity-85"
                  >
                    Заказать такую же работу
                    <ArrowRight className="size-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
