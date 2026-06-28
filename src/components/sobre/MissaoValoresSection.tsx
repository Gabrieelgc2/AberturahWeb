import MissionPhoto from "../../assets/goalmission.webp"
import Visao from "../../assets/vision1.webp";
import teste from "../../assets/diamond.webp";
import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";
import { useTranslation } from "react-i18next";

export function MissaoValoresSection() {
  const { t } = useTranslation("about");
  return (

    <Section background="bg-[#404142]/25" size="default">

        {/* HEADER */}
        <div className="max-w-xl mb-16">

          <div className="RevealText mt-4 font-sans leading-tight text-4xl">
            {t("missionValues.title")}
            <span className="block RevealText">{t("missionValues.titleItalic")}</span>
          </div>
        </div>

          {/* GRID RESPONSIVO */}
          <div className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-3 
            gap-8
          ">

            {/* MISSÃO */}
            <div className="rounded-3xl bg-[#D9D9D9] p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <img src={MissionPhoto} alt={t("missionValues.mission.title")} className=" w-8 h-8 mb-6 text-[#404142] sm:w-10 sm:h-10" />

              <div className="RevealText font-sans text-[#404142] text-2xl">
                {t("missionValues.mission.title")}
              </div>

              <Text variant="cardDescription" className="RevealText mt-2 font-sans text-[#404142]/90 leading-relaxed">
              {t("missionValues.mission.description")}
              </Text>
            </div>

            {/* VISÃO */}
            <div className="rounded-3xl bg-[#D9D9D9] p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <img src={Visao} alt={t("missionValues.vision.title")} className="w-8 h-8 mb-6 text-[#404142] sm:w-10 sm:h-10" />

              <div className="RevealText font-sans text-[#404142] text-2xl">
                {t("missionValues.vision.title")}
              </div>

              <Text variant="cardDescription" className="RevealText mt-2 font-sans text-[#404142]/90 leading-relaxed">
                {t("missionValues.vision.description")}
              </Text>
            </div>

            {/* VALORES */}
            <div className="rounded-3xl bg-[#D9D9D9] p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <img src={teste} alt={t("missionValues.values.title")} className="w-8 h-8 mb-6 text-[#404142] lg:relative top-1.5 sm:w-10 sm:h-10" />

              <div className="RevealText font-sans text-[#404142] text-2xl">
                {t("missionValues.values.title")}
              </div>

              <Text variant="cardDescription" className="RevealText mt-2 font-sans text-[#404142]/90 leading-relaxed">
                {t("missionValues.values.description")}
              </Text>
            </div>

        </div>
    </Section>
  );
}