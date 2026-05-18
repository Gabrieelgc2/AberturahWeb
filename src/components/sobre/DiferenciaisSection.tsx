import { Zap, Layers, Award, Users, Target, ShieldCheck } from "lucide-react";
import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";
import { useTranslation } from "react-i18next";

export function DiferenciaisSection() {
  const { t } = useTranslation();

  const diferenciais = [
    { icon: ShieldCheck },
    { icon: Layers },
    { icon: Zap },
    { icon: Award },
    { icon: Users },
    { icon: Target },
  ];
  return (

    <Section size="default">

        <div className="text-center max-w-2xl mx-auto">
          <Text variant="Title" className="RevealText uppercase tracking-widest text-[#404142] font-serif">
            {t("about.differentials.title")}
          </Text>

          <Text variant="Subtitle" className="RevealText mt-4 font-sans font-bold">
            {t("about.differentials.subtitle")} <span className="italic">{t("about.differentials.subtitleItalic")}</span>
          </Text>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((d, i) => {
            const Icon = d.icon;
            const item = t("about.differentials.items", { returnObjects: true }) as Array<{ title: string; description: string }>;

            return (
              <div
                key={i}
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

                <Text variant="cardTitle" className="RevealText font-sans font-normal">
                  {item[i].title}
                </Text>

                <Text variant="cardDescription" className="RevealText mt-2 text-[#404142] leading-relaxed font-sans">
                  {item[i].description}
                </Text>
              </div>
            );
          })}
        </div>
    
</Section>
  );
}