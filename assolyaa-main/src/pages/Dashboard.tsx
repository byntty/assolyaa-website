import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { LogOut, Palette, Image, FileText, Settings } from "lucide-react";
import { useNavigate, Link } from "react-router";

const stats = [
  { label: "Картины", value: "14", icon: Palette },
  { label: "Выставки", value: "6", icon: FileText },
  { label: "Упоминания в СМИ", value: "50+", icon: Image },
];

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-background/90 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <Link
            to="/"
            className="font-serif text-lg tracking-[0.08em] uppercase transition-opacity hover:opacity-60"
          >
            Assolyaa
          </Link>
          <div className="flex items-center gap-4">
            <span className="font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
              Панель управления
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="cursor-pointer gap-2 text-muted-foreground hover:text-foreground"
              onClick={handleSignOut}
            >
              <LogOut className="size-4" />
              <span className="hidden font-sans text-[11px] uppercase tracking-[0.1em] sm:inline">
                Выйти
              </span>
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="font-serif text-3xl font-light text-foreground md:text-4xl">
          Добро пожаловать{user?.name ? `, ${user.name}` : ""}
        </h1>
        <p className="mt-2 font-sans text-sm text-muted-foreground">
          Управляйте портфолио, выставками и заказами.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-1 gap-px bg-border/40 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-8">
              <stat.icon className="size-5 text-muted-foreground/50" />
              <p className="mt-4 font-serif text-3xl font-light text-foreground">
                {stat.value}
              </p>
              <p className="mt-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { label: "Управление работами", desc: "Добавить или изменить картины", icon: Palette, path: "/gallery" },
            { label: "Пресс-кит", desc: "Биография и материалы для СМИ", icon: FileText, path: "/about" },
            { label: "Настройки сайта", desc: "Обновить портфолио", icon: Settings, path: "/contact" },
          ].map((action) => (
            <Link
              key={action.label}
              to={action.path}
              className="group border border-border/50 p-8 transition-colors hover:border-foreground/20"
            >
              <action.icon className="size-5 text-muted-foreground/50 transition-colors group-hover:text-foreground" />
              <h3 className="mt-4 font-serif text-lg font-light text-foreground transition-opacity group-hover:opacity-70">
                {action.label}
              </h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">
                {action.desc}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
