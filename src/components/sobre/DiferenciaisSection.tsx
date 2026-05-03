import { Zap, Layers, Award, Users, Target, ShieldCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";

const diferenciais = [
  { icon: ShieldCheck, title: "Qualidade certificada", desc: "Apenas chapas premium com selo de procedência." },
  { icon: Layers, title: "+40 acabamentos", desc: "Maior variedade de cores e texturas do mercado." },
  { icon: Zap, title: "Beneficiamento CNC", desc: "Precisão milimétrica em fábrica própria." },
  { icon: Award, title: "Garantia estendida", desc: "Até 10 anos para projetos arquitetônicos." },
  { icon: Users, title: "Suporte técnico", desc: "Equipe técnica à disposição em todas as fases." },
  { icon: Target, title: "Prazo cumprido", desc: "Estoque robusto para atender urgências." },
];

export function DiferenciaisSection() {
  return (

    <Section size="default">

        <div className="text-center max-w-2xl mx-auto">
          <Text variant="Title" className="RevealText uppercase tracking-widest text-[#404142]">
            Diferenciais
          </Text>

          <Text variant="Subtitle" className="RevealText mt-4 font-serif font-bold">
            O que nos torna <span className="italic">referência.</span>
          </Text>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d) => {
            const Icon = d.icon;

            return (
              <div
                key={d.title}
                className="group relative rounded-3xl border p-8 bg-[#D9D9D9]/15 transition-all hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* GLOW */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition"
                  style={{
                    background:
                      "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 60%)",
                  }}
                />

                <Icon
                  className="sm:h-8 sm:w-8 mb-6 h-7 w-7"
                  style={{ color: "var(--brand)" }}
                />

                <Text variant="cardTitle" className="RevealText font-serif font-semibold">
                  {d.title}
                </Text>

                <Text variant="cardDescription" className="RevealText mt-2 text-[color:var(--steel)] leading-relaxed">
                  {d.desc}
                </Text>
              </div>
            );
          })}
        </div>
    
</Section>
  );
}