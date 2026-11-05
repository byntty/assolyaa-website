import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

/** Main menu — order and labels are part of the site contract. */
export const navLinks = [
  { label: "Главная", path: "/" },
  { label: "Обо мне", path: "/about" },
  { label: "Заказать картину", path: "/order" },
  { label: "Мои картины", path: "/gallery" },
  { label: "Постеры и мерч", path: "/posters" },
  { label: "Реклама и коллаборации", path: "/advertising" },
  { label: "Выставки", path: "/exhibitions" },
  { label: "Обучение", path: "/studio" },
  { label: "Ивенты и мероприятия", path: "/events" },
  { label: "Арт-инсталляции и муралы", path: "/installations" },
  { label: "СМИ", path: "/press" },
  { label: "Контакты", path: "/contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Reset the mobile overlay when the route changes (adjust-state-during-render
  // pattern — avoids a setState call inside an effect).
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setMobileOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled || !isHome
            ? "bg-background/90 backdrop-blur-md border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 py-5 lg:px-12">
          <Link
            to="/"
            className="font-serif text-xl tracking-[0.08em] uppercase transition-opacity hover:opacity-60"
          >
            Assolyaa
          </Link>

          {/* Every section lives in the menu, on desktop as well. */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex size-10 shrink-0 items-center justify-center"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-background"
          >
            <nav className="flex max-h-[85vh] flex-col items-center gap-6 overflow-y-auto py-10 lg:gap-7">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    // Close on every click, including links to the page already
                    // open — otherwise the overlay just stays there.
                    onClick={() => setMobileOpen(false)}
                    className={`font-serif text-2xl tracking-wide transition-opacity hover:opacity-60 lg:text-3xl ${
                      location.pathname === link.path
                        ? "opacity-100"
                        : "opacity-70"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
