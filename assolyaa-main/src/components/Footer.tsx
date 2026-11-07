import { socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-black text-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 lg:flex-row">
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
