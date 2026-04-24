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
      "Mais de 40 cores e texturas disponíveis — do escovado ao brilhante, passando pelo acabamento amadeirado e efeitos metálicos. Sua fachada com a identidade que ela merece.",
  },
  {
    icon: Hammer,
    title: "Beneficiamento Próprio",
    description:
      "Corte CNC, dobra e usinagem realizados em nossa fábrica. Precisão milimétrica para fachadas ventiladas, portas, brises, pergolados e revestimentos sob medida.",
  },
  {
    icon: Zap,
    title: "Prazo Cumprido",
    description:
      "Linha de produção otimizada para entrega e instalação de acordo com os cronogramas estabelecidos. ",
  },
  {
    icon: Truck,
    title: "Logística Eficiente",
    description:
      "Logística estruturada para atender todo Nordeste. Suas chapas e portas chegam devidamente protegidas, prontas para inicio das etapas de instalação. ",
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
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--white)" }}
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
                WebkitTextFillColor: "#404142",
              }}
            >
              escolher?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--steel)]">
            A ABERTURAh! Chega ao mercado para propor soluções integradas e transformar fachadas, revestimentos e projetos arquitetônicos em todo Nordeste. Combinamos matéria-prima premium, tecnologia de beneficiamento e atendimento próximo para entregar resultados que valorizam cada obra.
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
                  style={{ background: "#5DADEC" }}
                >
                  <Icon className="h-7 w-7 text-shadow-black" strokeWidth={1.75} />
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
      </div>
    </section>
  );
}
