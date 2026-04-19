import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { CTA } from "@/components/home/CTA";
import { Target, Eye, Heart, Zap, Shield, Layers, Award, Users } from "lucide-react";

export const Route = createFileRoute("/sobre")({
  component: SobrePage,
  head: () => ({
    meta: [
      { title: "Sobre Nós — ABERTURAH" },
      {
        name: "description",
        content:
          "Conheça a história, missão e diferenciais da ABERTURAH, indústria brasileira de chapas ACM e beneficiamento.",
      },
      { property: "og:title", content: "Sobre a ABERTURAH" },
      {
        property: "og:description",
        content: "Indústria brasileira referência em ACM. História, missão e diferenciais.",
      },
    ],
  }),
});

const timeline = [
  { year: "2009", title: "Fundação", desc: "Nasce a ABERTURAH em São Paulo, focada em revenda de ACM importado." },
  { year: "2014", title: "Beneficiamento próprio", desc: "Inauguração da primeira linha CNC para corte e dobra." },
  { year: "2018", title: "Expansão nacional", desc: "Logística estruturada para atender obras em todas as regiões." },
  { year: "2024", title: "Nova fábrica", desc: "Ampliação da planta com tecnologia de última geração." },
];

const valores = [
  { icon: Target, title: "Missão", desc: "Elevar o padrão de revestimentos arquitetônicos do Brasil entregando ACM de excelência e atendimento técnico próximo." },
  { icon: Eye, title: "Visão", desc: "Ser a indústria mais respeitada do segmento de ACM até 2030, reconhecida por qualidade e inovação." },
  { icon: Heart, title: "Valores", desc: "Compromisso, transparência, precisão técnica e parceria de longo prazo com cada cliente." },
];

const diferenciais = [
  { icon: Shield, title: "Qualidade certificada", desc: "Apenas chapas premium com selo de procedência." },
  { icon: Layers, title: "+40 acabamentos", desc: "Maior variedade de cores e texturas do mercado." },
  { icon: Zap, title: "Beneficiamento CNC", desc: "Precisão milimétrica em fábrica própria." },
  { icon: Award, title: "Garantia estendida", desc: "Até 10 anos para projetos arquitetônicos." },
  { icon: Users, title: "Suporte técnico", desc: "Engenheiros à disposição em todas as fases." },
  { icon: Target, title: "Prazo cumprido", desc: "Estoque robusto para atender urgências." },
];

function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Nós"
        title={
          <>
            Indústria,<br />
            <span className="italic">precisão e arte.</span>
          </>
        }
        description="Há mais de 15 anos transformando a forma como o Brasil reveste seus edifícios."
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--steel-light)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel)]">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--brand)" }} />
                Nossa história
              </div>
              <h2 className="mt-6 font-serif text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl">
                Uma trajetória feita de <span className="italic">obras icônicas.</span>
              </h2>
            </div>
            <div className="space-y-8">
              <p className="text-lg leading-relaxed text-[color:var(--steel)]">
                A ABERTURAH começou pequena, em um galpão modesto em São Paulo. Movidos pela paixão por arquitetura e pela frustração com a baixa qualidade do mercado, decidimos importar apenas chapas premium e oferecer um atendimento que faltava ao setor.
              </p>
              <p className="text-lg leading-relaxed text-[color:var(--steel)]">
                Em pouco tempo, fachadas projetadas pelos maiores escritórios do país passaram a sair da nossa linha. Investimos em CNC, ampliamos o portfólio de acabamentos e construímos uma logística que entrega para qualquer canto do Brasil.
              </p>

              <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--steel-light)] bg-[color:var(--steel-light)] sm:grid-cols-2">
                {timeline.map((t) => (
                  <div key={t.year} className="bg-background p-6">
                    <div
                      className="font-serif text-3xl font-bold"
                      style={{
                        background: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      {t.year}
                    </div>
                    <h4 className="mt-2 font-serif text-lg font-semibold text-foreground">{t.title}</h4>
                    <p className="mt-1 text-sm text-[color:var(--steel)]">{t.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <CTA />
    </>
  );
}
