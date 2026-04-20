import { Zap, Shield, Layers, Award, Users, Target } from "lucide-react";

const diferenciais = [
  { icon: Shield, title: "Qualidade certificada", desc: "Apenas chapas premium com selo de procedência." },
  { icon: Layers, title: "+40 acabamentos", desc: "Maior variedade de cores e texturas do mercado." },
  { icon: Zap, title: "Beneficiamento CNC", desc: "Precisão milimétrica em fábrica própria." },
  { icon: Award, title: "Garantia estendida", desc: "Até 10 anos para projetos arquitetônicos." },
  { icon: Users, title: "Suporte técnico", desc: "Engenheiros à disposição em todas as fases." },
  { icon: Target, title: "Prazo cumprido", desc: "Estoque robusto para atender urgências." },
];

export function DiferenciaisSection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--steel-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel)]">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand)" }} />
            Diferenciais
          </div>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-5xl font-bold leading-[1.05] text-foreground sm:text-6xl">
            O que nos torna <span className="italic">únicos.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-[color:var(--steel-light)] bg-[color:var(--steel-light)] sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => {
            const Icon = d.icon;
            return (
              <div key={d.title} className="bg-background p-8 transition-colors hover:bg-[color:var(--steel-light)]/40">
                <Icon className="h-8 w-8" style={{ color: "var(--brand)" }} strokeWidth={1.75} />
                <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{d.title}</h3>
                <p className="mt-2 text-sm text-[color:var(--steel)]">{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}