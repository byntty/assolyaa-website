import { ArrowRight, Frame, Layers, PenTool } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { assetUrl } from "@/lib/assets";
import { whatsappLink } from "@/lib/site";

const IMG = (file: string) => assetUrl(`images/${file}`);

const directions = [
  {
    icon: PenTool,
    title: "Муралы",
    text: "Крупноформатная живопись на стенах: авторские образы KilemArt в архитектурном контексте — от фасадов до интерьеров общественных пространств.",
  },
  {
    icon: Layers,
    title: "Инсталляции",
    text: "Пространственные объекты на основе ковра, орнамента и дерева — работы, которые становятся частью интерьера и одновременно самостоятельным высказыванием.",
  },
  {
    icon: Frame,
    title: "Перформансы-инсталляции",
    text: "Создание работы как события: синхронное рисование несколькими инструментами руками и ногами одновременно — вирусная техника Ассоль.",
  },
];

const projects = [
  {
    title: "«Төрт батыр»",
    text: "Деревянная инсталляция — четыре батыра, собранные в объёмной скульптурной форме.",
  },
  {
    title: "Портреты из тысяч силуэтов",
    text: "Крупноформатные полотна, собранные из множества силуэтов людей: Керей и Жанибек ханы, Кенесары хан, Динмухамед Кунаев.",
  },
  {
    title: "Синхронный перформанс",
    text: "Одновременное создание нескольких портретов шестью инструментами руками и ногами — международный резонанс в СМИ.",
  },
  {
    title: "Каллиграфические портреты",
    text: "Образы, сотканные из текста: портрет Абая из слов песни «Көзімнің қарасы», портрет Кенесары хана из силуэтов.",
  },
];

export default function Installations() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[52vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={IMG("fillers/mural.jpg")}
            alt="Мурал на стене здания"
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-20 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/60">
              Арт-инсталляции и муралы
            </p>
            <h1 className="mt-4 max-w-3xl font-serif text-4xl font-light leading-[1.1] text-white md:text-6xl">
              Искусство, которое становится{" "}
              <span className="italic">частью пространства</span>
            </h1>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-white/80">
              Ковёр, стена или объём — Ассоль переносит культурный код великой
              степи в архитектуру, интерьер и общественное пространство.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Directions */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Направления
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-5xl">
              Что мы <span className="italic">создаём</span>
            </h2>
          </FadeIn>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {directions.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex h-full flex-col border-t border-border/50 pt-6">
                  <item.icon
                    className="size-5 text-foreground"
                    strokeWidth={1.25}
                  />
                  <h3 className="mt-5 font-serif text-xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm leading-[1.9] text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border/50 px-6 py-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Избранные проекты
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-foreground md:text-5xl">
              Известные <span className="italic">работы</span>
            </h2>
          </FadeIn>

          <div className="mt-4">
            {projects.map((project, i) => (
              <FadeIn key={project.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-2 border-b border-border/40 py-6 md:grid-cols-12 md:gap-10">
                  <h3 className="font-serif text-lg font-light text-foreground md:col-span-4 md:text-xl">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm leading-[1.9] text-muted-foreground md:col-span-8">
                    {project.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-ivory md:text-5xl">
              Обсудим проект для{" "}
              <span className="italic">вашего пространства</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl font-sans text-sm leading-[1.9] text-ivory/70">
              Расскажите о площадке, задаче и сроках — Ассоль предложит
              концепцию мурала или инсталляции.
            </p>
            <a
              href={whatsappLink(
                "Здравствуйте! Хочу обсудить арт-инсталляцию или мурал для пространства.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 border-b border-ivory/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-ivory transition-all duration-300 hover:border-ivory"
            >
              Обсудить проект
              <ArrowRight className="size-3" />
            </a>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
