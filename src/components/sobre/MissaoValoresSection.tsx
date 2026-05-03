import MissionPhoto from "../../assets/goalmission.webp"
import Visao from "../../assets/vision1.webp";
import teste from "../../assets/diamond.webp";
import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";

export function MissaoValoresSection() {
  return (

    <Section background="bg-[#404142]/25" size="default">

        {/* HEADER */}
        <div className="max-w-xl mb-16">

          <Text variant="Title" className="RevealText mt-4 font-serif font-bold leading-tight">
            Base sólida para
            <span className="italic block RevealText">crescimento consistente.</span>
          </Text>
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
              <img src={MissionPhoto} alt="Missão" className=" w-8 h-8 mb-6 text-[#404142] sm:w-10 sm:h-10" />

              <Text variant="cardTitle" className="RevealText font-serif font-semibold text-[#404142]">
                Missão
              </Text>

              <Text variant="cardDescription" className="RevealText mt-2 text-[#404142]/90 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec vel sapien eget nunc efficitur efficitur.
              </Text>
            </div>

            {/* VISÃO */}
            <div className="rounded-3xl bg-[#D9D9D9] p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <img src={Visao} alt="Visao" className="w-8 h-8 mb-6 text-[#404142] sm:w-10 sm:h-10" />

              <Text variant="cardTitle" className="RevealText font-serif font-semibold text-[#404142]">
                Visão
              </Text>

              <Text variant="cardDescription" className="RevealText mt-2 text-[#404142]/90 leading-relaxed">
                Ser a indústria mais respeitada do segmento de ACM até 2030,
                reconhecida por qualidade e inovação.
              </Text>
            </div>

            {/* VALORES */}
            <div className="rounded-3xl bg-[#D9D9D9] p-8 transition hover:-translate-y-2 hover:shadow-xl">
              <img src={teste} alt="Valores" className="w-8 h-8 mb-6 text-[#404142] lg:relative top-1.5 sm:w-10 sm:h-10" />

              <Text variant="cardTitle" className="RevealText font-serif font-semibold text-[#404142]">
                Valores
              </Text>

              <Text variant="cardDescription" className="RevealText mt-2 text-[#404142]/90 leading-relaxed">
                Compromisso, transparência, precisão técnica e parceria de longo prazo com cada cliente.
              </Text>
            </div>

        </div>
    </Section>
  );
}