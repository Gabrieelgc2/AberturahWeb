import { Quote } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";

const testimonials = [
  {
    quote:
      "A ABERTURAH entregou nossa fachada com precisão milimétrica e prazo cumprido à risca. Recomendo para qualquer obra de alto padrão.",
    name: "Rafael Monteiro",
    role: "Arquiteto, MR Studio",
  },
  {
    quote:
      "O suporte técnico fez toda a diferença. Tivemos acompanhamento desde o dimensionamento até a instalação. Parceria de verdade.",
    name: "Camila Duarte",
    role: "Engenheira, Construtora Vértice",
  },
  {
    quote:
      "Variedade de acabamentos impressionante e qualidade impecável. As chapas chegaram embaladas como obra-prima.",
    name: "Lucas Andrade",
    role: "Diretor, Andrade Fachadas",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Quem confia"
          title={
            <>
              Vozes de quem
              <br />
              <span className="italic">construiu com a gente.</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-3xl border border-[color:var(--steel-light)] bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              style={{
                background:
                  i === 1
                    ? "var(--gradient-dark)"
                    : "var(--background)",
              }}
            >
              <Quote
                className="h-10 w-10"
                style={{ color: i === 1 ? "var(--brand)" : "var(--brand)" }}
              />
              <p
                className={`mt-6 flex-1 font-serif text-xl leading-relaxed ${
                  i === 1 ? "text-white" : "text-foreground"
                }`}
              >
                "{t.quote}"
              </p>
              <div
                className={`mt-8 border-t pt-6 ${
                  i === 1 ? "border-white/10" : "border-[color:var(--steel-light)]"
                }`}
              >
                <div
                  className={`font-semibold ${
                    i === 1 ? "text-white" : "text-foreground"
                  }`}
                >
                  {t.name}
                </div>
                <div
                  className={`mt-1 text-sm ${
                    i === 1
                      ? "text-[color:var(--steel-light)]"
                      : "text-[color:var(--steel)]"
                  }`}
                >
                  {t.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
