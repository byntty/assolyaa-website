import { motion } from "framer-motion";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center"
    >
      <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Страница не найдена
      </p>
      <h1 className="mt-6 font-serif text-7xl font-light text-foreground">
        404
      </h1>
      <p className="mt-4 font-sans text-sm text-muted-foreground">
        Возможно, эта страница была перемещена или удалена.
      </p>
      <Link
        to="/"
        className="mt-8 border-b border-foreground/30 pb-1 font-sans text-[11px] uppercase tracking-[0.15em] text-foreground transition-all duration-300 hover:border-foreground"
      >
        Вернуться на главную
      </Link>
    </motion.div>
  );
}
