import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { MapPin } from "lucide-react";

const exhibitions = [
  {
    dates: "21 сентября — 6 ноября",
    year: "2024",
    city: "Астана, Казахстан",
    title: "QAZAQ CONTENT",
    venue: "Галерея «Forte Kulanshi Art Space», Астана",
    address: "Казахстан, г. Астана, ул. Достык 8/1",
    description:
      "Выставка картин на ковре «QAZAQ CONTENT». Прошло торжественное открытие с участием СМИ, публичных личностей, спортивных звёзд, блогеров, представителей государственных структур и организаций, а также поклонников искусства. За 1 месяц выставку посетило более 20 000 человек.",
  },
  {
    dates: "8 — 13 ноября",
    year: "2024",
    city: "Берлин, Германия",
    title: "Berlin Bazaar",
    venue: "Казахстанский павильон, Берлин",
    address: "Berlin Bazaar, Германия",
    description:
      "Картины на ковре были выставлены в Казахстанском павильоне на выставке Berlin Bazaar. Этой выставке в Германии уже 60 лет — на неё прилетают художники, ремесленники и дизайнеры со всего мира.",
  },
  {
    dates: "2 — 5 декабря",
    year: "2024",
    city: "Баку, Азербайджан",
    title: "Дни культуры Республики Казахстан",
    venue: "Центр Гейдара Алиева, Баку",
    address: "Баку, Азербайджан",
    description:
      "Со 2 по 5 декабря в Баку прошли Дни культуры Республики Казахстан. При поддержке Министерства культуры и информации РК, Ассоль в числе других казахстанских художников выставила свои работы на ковре в Центре Гейдара Алиева. В конце выставки портрет был вручён Председателю Милли Меджлиса Сахибе Гафаровой.",
  },
  {
    dates: "18 — 21 января",
    year: "2024",
    city: "Париж, Франция",
    title: "Le Salon d'Automne",
    venue: "La Grande halle de la Villette, Париж",
    address: "211 Av. Jean Jaurès, 75019 Paris",
    description:
      "На выставке «Le Salon d'Automne» был представлен персональный павильон Ассоль с её картинами на ковре. Также она показала арт-перформанс — за 4 часа на выставке написала портрет Симоны Вейль на ковре.",
  },
];

const achievements = [
  {
    year: "2026",
    title: "Discover List 2026 — Топ-50 выдающихся креаторов мира",
    venue: "TikTok",
  },
  {
    year: "2024",
    title: "Победитель премии TikTok — номинация «Ұлттық мәдениет»",
    venue: "TikTok Awards Kazakhstan",
  },
  {
    year: "2023",
    title: "Государственная награда «Ерен еңбегі үшін»",
    venue: "Самая молодая художница, удостоенная такой награды",
  },
  {
    year: "2023",
    title: "Нагрудный знак «Алтын барыс»",
    venue: "За вклад в развитие и популяризацию искусства",
  },
  {
    year: "2023",
    title: "Почётная грамота и личное благодарственное письмо Президента РК",
    venue: "Республика Казахстан",
  },
];

const socialStats = [
  { platform: "TikTok", value: "465 000+", label: "подписчиков" },
  { platform: "Instagram", value: "280 000+", label: "подписчиков" },
  { platform: "Просмотры", value: "5–96 млн", label: "на одно видео" },
];

export default function Press() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[50vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="./images/card-press.jpg"
            alt="СМИ и Достижения"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6 pt-32 pb-16 lg:px-12">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-white/60">
              СМИ и Достижения
            </p>
            <h1 className="mt-4 font-serif text-4xl font-light text-white md:text-6xl">
              Выставки и <span className="italic">признание</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="mt-6 max-w-2xl font-sans text-sm leading-[1.9] text-white/80">
              Выставки картин на ковре прошли в Астане, Баку, Берлине и Париже.
              Работы отмечены Президентом Республики Казахстан, государственными
              наградами и международными платформами.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Social Stats */}
      <section className="px-6 pb-20 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
            {socialStats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-background p-10 text-center">
                  <p className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                    {stat.platform}
                  </p>
                  <p className="mt-4 font-serif text-4xl font-light text-foreground">
                    {stat.value}
                  </p>
                  <p className="mt-2 font-sans text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
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
              Международные показы
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {exhibitions.map((ex, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="group grid grid-cols-1 gap-4 border-t border-border/40 py-8 transition-colors hover:border-foreground/20 md:grid-cols-12 md:gap-10">
                  {/* Date + City */}
                  <div className="md:col-span-3">
                    <p className="font-serif text-lg font-light text-foreground">
                      {ex.dates}
                    </p>
                    <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                      {ex.year} &middot; {ex.city}
                    </p>
                  </div>

                  {/* Title + Venue */}
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl font-light text-foreground transition-opacity group-hover:opacity-70">
                      {ex.title}
                    </h3>
                    <p className="mt-2 flex items-start gap-1.5 font-sans text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 size-3 shrink-0" />
                      {ex.venue}
                    </p>
                    <p className="mt-1 font-sans text-xs text-muted-foreground/60">
                      {ex.address}
                    </p>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                      {ex.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
            <div className="border-t border-border/40" />
          </div>
        </div>
      </section>

      {/* Awards & Achievements */}
      <section className="border-t border-border/50 px-6 py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <FadeIn>
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Награды
            </p>
            <h2 className="mb-16 mt-4 font-serif text-3xl font-light text-foreground">
              Достижения и признание
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {achievements.map((award, i) => (
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

      {/* Quote */}
      <section className="bg-charcoal px-6 py-24 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-serif text-3xl font-light italic leading-relaxed text-ivory md:text-5xl">
              «Все работы направлены на просвещение молодёжи и вызывают интерес к истории и искусству Казахстана.»
            </h2>
            <p className="mt-6 font-sans text-[11px] uppercase tracking-[0.2em] text-ivory/50">
              — Ассоль (Assolyaa)
            </p>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </div>
  );
}
