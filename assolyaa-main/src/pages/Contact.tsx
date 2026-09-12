import { FadeIn } from "@/components/FadeIn";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const socialLinks = [
  { label: "Instagram", url: "#", handle: "@assolyaa" },
  { label: "TikTok", url: "#", handle: "@assolyaa" },
  { label: "YouTube", url: "#", handle: "Assolyaa" },
];

const STUDIO_EMAIL = "nurdaulet.bekzhan@gmail.com";

export default function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (sending) return;
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const topic = String(data.get("topic") || "");
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) return;
    // No form backend yet: hand the message to the studio inbox.
    setSending(true);
    window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(
      `[${topic || "Без темы"}] ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;
    toast.success("Откроется почтовый клиент для отправки сообщения.");
    setTimeout(() => setSending(false), 1500);
  };

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
                  Контакты
                </p>
                <h1 className="mt-4 font-serif text-4xl font-light leading-snug text-foreground md:text-6xl">
                  Свяжитесь
                  <br />
                  <span className="italic">с нами</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex flex-col justify-end">
                <p className="font-sans text-sm leading-[1.9] text-muted-foreground">
                  По вопросам покупки картин, заказов, выставок и сотрудничества
                  — свяжитесь с нами любым удобным способом.
                </p>
                <a
                  href="mailto:nurdaulet.bekzhan@gmail.com"
                  className="mt-6 font-serif text-xl font-light text-foreground transition-opacity hover:opacity-60"
                >
                  nurdaulet.bekzhan@gmail.com
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="px-6 py-20 lg:px-12">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <FadeIn className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <div>
                  <label className="mb-3 block font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Ваше имя"
                    className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-3 block font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="ваш@email.com"
                    className="w-full border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Тема
                </label>
                <select
                  name="topic"
                  defaultValue=""
                  className="w-full cursor-pointer appearance-none border-b border-border bg-transparent py-3 font-sans text-sm text-foreground transition-colors focus:border-foreground focus:outline-none"
                >
                  <option value="">Выберите тему</option>
                  <option value="commission">Заказ картины</option>
                  <option value="exhibition">Выставка</option>
                  <option value="press">Пресса и СМИ</option>
                  <option value="purchase">Покупка готовой работы</option>
                  <option value="collaboration">Сотрудничество</option>
                  <option value="other">Другое</option>
                </select>
              </div>

              <div>
                <label className="mb-3 block font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Расскажите о вашем проекте или вопросе..."
                  className="w-full resize-none border-b border-border bg-transparent py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-foreground focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="group flex items-center gap-3 border-b border-foreground/30 pb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground disabled:opacity-50"
              >
                Отправить
                <Send className="size-3 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </FadeIn>

          {/* Info sidebar */}
          <FadeIn delay={0.15} className="lg:col-span-5">
            <div className="space-y-12">
              {/* Social */}
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Соцсети
                </p>
                <div className="mt-6 space-y-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between border-b border-border/40 py-4 transition-colors hover:border-foreground/20"
                    >
                      <span className="font-sans text-sm text-foreground transition-opacity group-hover:opacity-60">
                        {social.label}
                      </span>
                      <span className="font-sans text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                        {social.handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Телефон / WhatsApp / Telegram
                </p>
                <div className="mt-6 space-y-2">
                  <a
                    href="tel:+77777014666"
                    className="block font-serif text-lg font-light text-foreground transition-opacity hover:opacity-60"
                  >
                    +7 777 701 46 66
                  </a>
                </div>
              </div>

              {/* Email */}
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </p>
                <div className="mt-6 space-y-2">
                  <a
                    href="mailto:nurdaulet.bekzhan@gmail.com"
                    className="block font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    nurdaulet.bekzhan@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Адрес
                </p>
                <div className="mt-6">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    050000, Казахстан
                    <br />
                    г. Алматы, пр. Аль-Фараби 21
                    <br />
                    Блок 9, офис 1256
                    <br />
                    «Assolyaa Arts Center»
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Время работы
                </p>
                <div className="mt-6">
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    Ежедневно, 10:00–20:00
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Footer />
    </div>
  );
}
