import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";
import foto1 from "../../assets/Foto1.jpeg";
import foto2 from "../../assets/Foto2.jpeg";
import foto3 from "../../assets/Foto3.jpeg";
import foto4 from "../../assets/Foto4.jpeg";


const categories = [
  {
    name: "ACM Brilhante",
    desc: "Cores sólidas com brilho intenso. Ideal para fachadas com identidade marcante.",
    grad: foto1,
  },
  {
    name: "ACM Escovado",
    desc: "Acabamento metálico contemporâneo. Reflexos suaves e visual sofisticado.",
    grad: foto2,
  },
  {
    name: "ACM Madeirado",
    desc: "Texturas que reproduzem madeiras nobres com a durabilidade do alumínio.",
    grad: foto3,
  },
  {
    name: "ACM Especial",
    desc: "Espelhado, perfurado e efeitos exclusivos para projetos autorais.",
    grad: foto4,
  },
];
export function ProductsPreview() {
  return (
    <section className="bg-[#D9D9D9]/30 py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-10">
        <div
          className="RevealText flex flex-col items-center gap-8 sm:flex-row justify-between sm:items-end" >
          <SectionHeading
            align="left"
            eyebrow="Linha de produtos"
            title={
              <>
                Material ACM<br />
                <span className="italic font-normal text-(--steel)">
                  para cada visão.
                </span>
              </>
            }
          />
          <Link
            to="/produtos"
            className="RevealText -ml-10 active:scale-95 active:bg-foreground active:text-background group inline-flex items-center gap-2 rounded-full border border-foreground px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Ver linha completa
            <ArrowUpRight className="RevealText h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

    <div
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 RevealImage">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/produtos"
              className="group relative aspect-[3/4] overflow-hidden rounded-3xl"
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${c.grad})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              
              <div
                className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent, transparent 8px, oklch(1 0 0 / 0.15) 8px, oklch(1 0 0 / 0.15) 9px)",
                }}
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-serif text-2xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-white/80">{c.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--brand)]">
                  Explorar
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>

            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
