import { Link } from "react-router";
import { FadeIn } from "./FadeIn";

const footerLinks = [
  { label: "Картины", path: "/gallery" },
  { label: "Обо мне", path: "/about" },
  { label: "Мастерская", path: "/studio" },
  { label: "СМИ и Достижения", path: "/press" },
  { label: "Контакты", path: "/contact" },
];

const socialLinks = [
  { label: "Instagram", url: "#" },
  { label: "TikTok", url: "#" },
  { label: "YouTube", url: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Newsletter */}
        <FadeIn>
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white/50">
              Будьте в курсе
            </p>
            <p className="font-serif text-2xl text-white md:text-3xl">
              Получайте новости о новых работах и выставках
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 flex w-full max-w-md items-center gap-0 border-b border-white/20 pb-2"
            >
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 bg-transparent font-sans text-sm text-white placeholder:text-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-60"
              >
                Подписаться
              </button>
            </form>
          </div>
        </FadeIn>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
          <div className="flex items-center gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors hover:text-white"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="font-sans text-[10px] tracking-wider text-white/30">
            &copy; {new Date().getFullYear()} Assolyaa. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
