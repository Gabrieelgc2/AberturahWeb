import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Aberturah from "@/assets/Aberturah.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/produtos", label: "Produtos" },
  { to: "/sobre", label: "Sobre nós" },
  { to: "/noticias", label: "Notícias" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/90  border-b border-white/10 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex max-w-7xl items-center px-6 py-5">

        {/* 1. LOGO (Esquerda) */}
        <div className="flex flex-1 justify-start">
          <img src={Aberturah} alt="Aberturah" className="h-11 w-auto md:h-13 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]"  />
        </div>

        {/* 2. MENU CENTRAL */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{
                className: "text-white bg-[length:100%_2px]"
              }}
              className="group relative text-white/90 text-[12px] uppercase tracking-[0.2em] font-semibold transition-all hover:text-white py-1
                 bg-gradient-to-r from-white to-white 
                 bg-[length:0%_2px] bg-left-bottom bg-no-repeat 
                 hover:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 3. IDIOMAS E MENU MOBILE*/}
        <div className="flex flex-1 justify-end items-center gap-6">
          
          {/* Seletor de Idiomas (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <button className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">EN</span>
              <img src="https://flagcdn.com/w20/us.png" alt="USA" className="w-4 h-3 object-cover" />
            </button>
            <button className="flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity border-l border-white/20 pl-3">
              <img src="https://flagcdn.com/w20/br.png" alt="Brasil" className="w-4 h-3 object-cover" />
              <span className="text-[10px] font-bold text-white uppercase tracking-tighter">PT</span>
            </button>
          </div>

          {/* Botão Hamburger */}
          <button onClick={() => setOpen(!open)} className="text-white lg:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="fixed inset-0 top-[70px] flex flex-col bg-black/95 h-screen p-8 gap-6 lg:hidden animate-in slide-in-from-top duration-300">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white text-xl uppercase tracking-widest font-light border-b border-white/10 pb-4"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-6 mt-4">
             <span className="text-white text-sm">PT</span>
             <span className="text-white/50 text-sm">EN</span>
          </div>
        </nav>
      )}
    </header>
  );
}