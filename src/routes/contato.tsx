import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Youtube } from "lucide-react";

export const Route = createFileRoute("/contato")({
  component: ContatoPage,
  head: () => ({
    meta: [
      { title: "Contato — ABERTURAH" },
      {
        name: "description",
        content:
          "Fale com a ABERTURAH via WhatsApp, telefone ou e-mail. Atendimento técnico para projetos em todo o Brasil.",
      },
      { property: "og:title", content: "Contato — ABERTURAH" },
      {
        property: "og:description",
        content: "WhatsApp, telefone, e-mail e endereço da ABERTURAH.",
      },
    ],
  }),
});

const informacoes = [
  { icon: MapPin, title: "Endereço", linhas: ["Av. Industrial, 1000", "São Paulo / SP — CEP 04000-000"] },
  { icon: Phone, title: "Telefone", linhas: ["(11) 4000-0000", "(11) 4000-0001"] },
  { icon: Mail, title: "E-mail", linhas: ["contato@aberturah.com.br", "comercial@aberturah.com.br"] },
  { icon: Clock, title: "Horário", linhas: ["Segunda a Sexta", "8h às 18h"] },
];

function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title={
          <>
            Fale com a<br />
            <span className="italic">ABERTURAH.</span>
          </>
        }
        description="Estamos prontos para entender seu projeto e enviar uma proposta em até 24 horas."
      />

      <section className="bg-background py-24 sm:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {informacoes.map((info) => {
              const Icon = info.icon;
              return (
                <div key={info.title} className="rounded-3xl border border-[color:var(--steel-light)] bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <Icon className="h-6 w-6 text-[color:var(--brand-foreground)]" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-foreground">{info.title}</h3>
                  <div className="mt-3 space-y-1 text-sm text-[color:var(--steel)]">
                    {info.linhas.map((l) => (
                      <p key={l}>{l}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="container mx-auto max-w-7xl px-6">
          <div
            className="relative overflow-hidden rounded-3xl p-10 sm:p-16"
            style={{ background: "var(--gradient-dark)" }}
          >
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
            <div
              className="pointer-events-none absolute -bottom-40 -right-20 h-[400px] w-[400px] rounded-full opacity-30 blur-3xl"
              style={{ background: "var(--gradient-brand)" }}
            />

            <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel-light)]">
                  <MessageCircle className="h-3.5 w-3.5 text-[color:var(--brand)]" />
                  Atendimento direto
                </div>
                <h2 className="mt-6 font-serif text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
                  Resposta em<br />
                  <span
                    className="italic"
                    style={{
                      background: "var(--gradient-brand)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    minutos.
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-[color:var(--steel-light)]">
                  Nosso time comercial atende pelo WhatsApp em horário comercial. Envie o briefing do seu projeto e receba orçamento personalizado.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-semibold text-[color:var(--brand-foreground)] shadow-[var(--shadow-brand)] transition-transform hover:scale-105"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <MessageCircle className="h-5 w-5" />
                    Conversar no WhatsApp
                  </a>
                </div>

                <div className="mt-8 flex gap-3">
                  <a href="#" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="YouTube" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-[color:var(--brand)] hover:text-[color:var(--brand)]">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div
                className="relative aspect-square rounded-3xl border border-white/10 p-12"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.62 0.18 35 / 0.25), transparent 60%), oklch(0.14 0.012 55)",
                }}
              >
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-3xl"
                    style={{ background: "var(--gradient-brand)" }}
                  >
                    <MessageCircle className="h-12 w-12 text-[color:var(--brand-foreground)]" strokeWidth={1.75} />
                  </div>
                  <p className="mt-8 font-serif text-3xl font-bold text-white">
                    +55 11 4000-0000
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-widest text-[color:var(--steel-light)]">
                    WhatsApp comercial
                  </p>
                  <p className="mt-8 max-w-xs text-sm text-[color:var(--steel-light)]">
                    Envie fotos, plantas ou descrições. Quanto mais detalhes, mais precisa será nossa proposta.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
