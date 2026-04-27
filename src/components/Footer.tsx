import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import AberturahLogo from "@/assets/Aberturah.png";

export function Footer() {
  return (
    <footer
      className="RevealText relative text-[color:black)]"
      style={{ background: "#D9D9D9" }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative container mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
               <img src={AberturahLogo} alt="Aberturah" className="RevealText h-13 w-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" />
              </span>
            </div>
            <p className="RevealText mt-5 text-sm leading-relaxed">
              Fabricação e beneficiamento de chapas ACM para fachadas,
              revestimentos e projetos arquitetônicos em todo o Nordeste.
            </p>
          </div>

          <div>
            <h4 className="RevealText font-serif text-sm font-bold uppercase tracking-widest text-[black]">
              Navegação
            </h4>
            <ul className="RevealText mt-5 space-y-3 text-md">
              {[
                { to: "/", label: "Home" },
                { to: "/sobre", label: "Sobre Nós" },
                { to: "/produtos", label: "Produtos" },
                { to: "/noticias", label: "Notícias" },
                { to: "/contato", label: "Contato" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="transition-colors hover:text-[color:black)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="RevealText font-serif text-sm font-bold uppercase tracking-widest text-black">
              Contato
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="RevealText mt-0.5 h-4 w-4 shrink-0 text-[--brand]" />
                <span>Rua Desembargador João Paes, 414 - Boa Viagem - Recife/PE</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="RevealText mt-0.5 h-4 w-4 shrink-0 text-[--brand]" />
                <span>(81) 99984.0131</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="RevealText mt-0.5 h-4 w-4 shrink-0 text-[--brand]" />
                <span>contato@aberturah.com.br</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="RevealText font-serif text-sm font-bold uppercase tracking-widest text-black">
              Siga-nos
            </h4>
            <div className="RevealTextmt-5 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:scale-110 hover:border-[(--brand)] hover:text-[(--brand)]"
              >
                <Instagram className="RevealText h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 transition-all hover:scale-110 hover:border-[(--brand)] hover:text-[(--brand)]"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="RevealText mt-6 text-xs uppercase tracking-widest text-[(--steel)]">
              Segunda a Sexta · 8h–18h
            </p>
          </div>
        </div>

        <div className="RevealText mt-16 flex flex-col items-center justify-between gap-4 border-t border-black pt-8 text-xs text-[black] sm:flex-row">
          <span>
            © {new Date().getFullYear()} ABERTURAH. Todos os direitos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
}
