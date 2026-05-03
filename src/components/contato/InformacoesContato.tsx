import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "../ui/Section";

const informacoes = [
  { icon: MapPin, title: "Endereço", linhas: ["Av. Industrial, 1000", "São Paulo / SP — CEP 04000-000"] },
  { icon: Phone, title: "Telefone", linhas: ["(11) 4000-0000", "(11) 4000-0001"] },
  { icon: Mail, title: "E-mail", linhas: ["contato@aberturah.com.br", "comercial@aberturah.com.br"] },
  { icon: Clock, title: "Horário", linhas: ["Segunda a Sexta", "8h às 18h"] },
];

export function InformacoesContato() {
  return (
    <Section>
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
    </Section>
  );
}