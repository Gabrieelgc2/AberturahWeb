import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "../ui/Section";
import { SITE_CONTACT } from "@/config/site";

const informacoes = [
  { icon: MapPin, title: "Endereço", linhas: [SITE_CONTACT.addressLine1, SITE_CONTACT.addressLine2] },
  { icon: Phone, title: "Telefone", linhas: [SITE_CONTACT.phoneDisplay] },
  { icon: Mail, title: "E-mail", linhas: [SITE_CONTACT.email] },
  { icon: Clock, title: "Horário", linhas: [SITE_CONTACT.businessHours] },
];

export function InformacoesContato() {
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {informacoes.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.title} className="rounded-3xl border border-[color:#D9D9D9] bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ background: "#D9D9D9" }}
              >
                <Icon className="h-6 w-6 text-[color:#404142]" strokeWidth={1.75} />
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