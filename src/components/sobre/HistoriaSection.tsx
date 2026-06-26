import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";
import { useTranslation } from "react-i18next";

export function HistoriaSection() {
  const { t } = useTranslation();
  return (
    <Section size="default">
      <div className="flex flex-col items-center align-center max-w-6xl mx-auto text-center tracking-tight">
        {/* HEADER */}
        <div className="max-w-xl text-4xl">
            {t("about.history.title")}
        </div>
        <div className="mt-3 text-[#404142] leading-relaxed RevealText font-sans text-3xl">
          {t("about.history.subtitle")}
        </div>
        <div className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans text-lg">
          {t("about.history.paragraph1")}
        </div>
        <div className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans text-lg">
          {t("about.history.paragraph2")}
        </div>
        <div className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans text-lg">
          {t("about.history.paragraph3")}
        </div>
      </div>
    </Section>
  );
}