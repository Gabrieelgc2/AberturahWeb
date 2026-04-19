import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/sobre", label: "Sobre" },
  { to: "/produtos", label: "Produtos" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[color:var(--steel-light)] bg-background/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2.5">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-lg font-serif text-lg font-bold text-[color:var(--brand-foreground)] transition-transform group-hover:rotate-12"
            style={{ background: "var(--gradient-brand)" }}
          >
            A
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-foreground">
            ABERTURAH
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className:
                  "text-foreground after:scale-x-100 bg-[color:var(--steel-light)]/60",
              }}
              inactiveProps={{ className: "text-[color:var(--steel)]" }}
              className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-[color:var(--brand)] after:transition-transform hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-foreground)] shadow-[var(--shadow-brand)] transition-transform hover:scale-105 sm:inline-flex"
            style={{ background: "var(--gradient-brand)" }}
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2.25} />
            Orçamento
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--steel-light)] text-foreground lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[color:var(--steel-light)] bg-background lg:hidden">
          <nav className="container mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{
                  className: "bg-[color:var(--steel-light)] text-foreground",
                }}
                inactiveProps={{ className: "text-[color:var(--steel)]" }}
                className="rounded-lg px-4 py-3 text-base font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
