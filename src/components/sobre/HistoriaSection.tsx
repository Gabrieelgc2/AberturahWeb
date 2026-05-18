import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";
import { useTranslation } from "react-i18next";

export function HistoriaSection() {
  const { t } = useTranslation();
  return (
    <Section size="default">
      <div className="flex flex-col items-center align-center max-w-6xl mx-auto text-center tracking-tight">
        {/* HEADER */}
        <div className="max-w-xl">
          <Text variant="Title" className="RevealText font-serif">
            {t("about.history.title")}
          </Text>
        </div>
        <Text variant="Subtitle" className="mt-3 text-[#404142] leading-relaxed RevealText font-serif">
          {t("about.history.subtitle")}
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans">
          {t("about.history.paragraph1")}
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans">
          {t("about.history.paragraph2")}
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl font-sans">
          {t("about.history.paragraph3")}
        </Text>
      </div>
    </Section>
  );
}