import { Target, Eye, Heart } from "lucide-react";

const valores = [
  { icon: Target, title: "Missão", desc: "Elevar o padrão de revestimentos arquitetônicos do Brasil entregando ACM de excelência e atendimento técnico próximo." },
  { icon: Eye, title: "Visão", desc: "Ser a indústria mais respeitada do segmento de ACM até 2030, reconhecida por qualidade e inovação." },
  { icon: Heart, title: "Valores", desc: "Compromisso, transparência, precisão técnica e parceria de longo prazo com cada cliente." },
];

export function MissaoValoresSection() {
  return (
    <section style={{ background: "var(--steel-light)" }} className="py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {valores.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="group rounded-3xl bg-background p-10 transition-transform hover:-translate-y-1">
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-2xl"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <Icon className="h-7 w-7 text-[color:var(--brand-foreground)]" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-serif text-3xl font-bold text-foreground">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-[color:var(--steel)]">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}