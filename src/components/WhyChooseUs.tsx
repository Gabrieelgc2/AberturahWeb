import { ShieldCheck, Layers, Zap, Award, Truck, Hammer } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Qualidade Certificada",
    description:
      "Trabalhamos exclusivamente com chapas de ACM de primeira linha, garantindo durabilidade superior, resistência a intempéries e acabamento impecável em cada projeto.",
  },
  {
    icon: Layers,
    title: "Variedade de Acabamentos",
    description:
      "Mais de 40 cores e texturas disponíveis — do escovado ao brilhante, passando por madeira e efeitos metálicos. Sua fachada com a identidade que ela merece.",
  },
  {
    icon: Hammer,
    title: "Beneficiamento Próprio",
    description:
      "Corte CNC, dobra e usinagem realizados em nossa fábrica. Precisão milimétrica para fachadas ventiladas, totens e revestimentos sob medida.",
  },
  {
    icon: Zap,
    title: "Prazo Cumprido",
    description:
      "Estoque robusto e linha de produção otimizada. Entregamos pedidos urgentes sem comprometer a qualidade do beneficiamento.",
  },
  {
    icon: Truck,
    title: "Logística Nacional",
    description:
      "Embalagem técnica e frete especializado para todo o Brasil. Suas chapas chegam intactas, prontas para instalação imediata.",
  },
  {
    icon: Award,
    title: "Suporte Técnico Completo",
    description:
      "Equipe de engenheiros à disposição para dimensionamento, especificação de subestrutura e acompanhamento de obra do início ao fim.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--steel-light)] bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel)]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            ABERTURAH · Material ACM
          </div>
          <h2 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Por que nos
            <br />
            <span
              className="italic"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              escolher?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--steel)]">
            Há anos a ABERTURAH transforma fachadas, revestimentos e projetos
            arquitetônicos em todo o país. Combinamos matéria-prima premium,
            tecnologia de beneficiamento e atendimento próximo para entregar
            resultados que valorizam cada obra.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--steel-light)] bg-[color:var(--steel-light)] sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-[color:var(--brand-deep)]"
              >
                <div
                  className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-7 w-7 text-[color:var(--brand-foreground)]" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground transition-colors group-hover:text-[color:var(--brand-foreground)]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[color:var(--steel)] transition-colors group-hover:text-[color:var(--steel-light)]">
                  {reason.description}
                </p>
                <div
                  className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-brand)" }}
                />
              </article>
            );
          })}
        </div>

        <div
          className="relative mt-16 overflow-hidden rounded-3xl p-10 sm:p-14"
          style={{ background: "var(--gradient-dark)", boxShadow: "var(--shadow-brand)" }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 20px, oklch(1 0 0 / 0.1) 20px, oklch(1 0 0 / 0.1) 21px)",
            }}
          />
          <div className="relative grid gap-8 sm:grid-cols-3">
            <div>
              <div
                className="font-serif text-5xl font-bold sm:text-6xl"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                +15
              </div>
              <p className="mt-2 text-sm uppercase tracking-widest text-[color:var(--steel-light)]">
                Anos no mercado de ACM
              </p>
            </div>
            <div>
              <div
                className="font-serif text-5xl font-bold sm:text-6xl"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                2.500+
              </div>
              <p className="mt-2 text-sm uppercase tracking-widest text-[color:var(--steel-light)]">
                Obras entregues no Brasil
              </p>
            </div>
            <div>
              <div
                className="font-serif text-5xl font-bold sm:text-6xl"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                40+
              </div>
              <p className="mt-2 text-sm uppercase tracking-widest text-[color:var(--steel-light)]">
                Cores e acabamentos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
