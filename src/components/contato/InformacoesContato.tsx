import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Section } from "../ui/Section";
import { SITE_CONTACT } from "@/config/site";
import { useTranslation } from "react-i18next";

export function InformacoesContato() {
  const { t } = useTranslation();

  const informacoes = [
    { icon: MapPin, key: "address", linhas: [SITE_CONTACT.addressLine1, SITE_CONTACT.addressLine2] },
    { icon: Phone, key: "phone", linhas: [SITE_CONTACT.phoneDisplay] },
    { icon: Mail, key: "email", linhas: [SITE_CONTACT.email] },
    { icon: Clock, key: "hours", linhas: [SITE_CONTACT.businessHours] },
  ];
  return (
    <Section>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {informacoes.map((info) => {
          const Icon = info.icon;
          return (
            <div key={info.key} className="RevealText rounded-3xl border border-[color:#D9D9D9] bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl RevealText"
                style={{ background: "#D9D9D9" }}
              >
                <Icon className="h-6 w-6 text-[color:#404142] RevealText" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-sans text-xl font-normal text-foreground RevealText">{t(`contactPage.info.${info.key}`)}</h3>
              <div className="mt-3 space-y-1 text-sm text-[#404142] font-sans RevealText">
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