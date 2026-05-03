import { Section } from "../ui/Section";
import { Text } from "../ui/TextVariant";

export function HistoriaSection() {
  return (
    <Section size="default">
      <div className="flex flex-col items-center align-center max-w-6xl mx-auto text-center tracking-tight">
        {/* HEADER */}
        <div className="max-w-xl">
          <Text variant="Title" className="RevealText">
            NOSSA MARCA
          </Text>
        </div>
        <Text variant="Subtitle" className="mt-3 text-[#404142] leading-relaxed RevealText">
          Trazendo ACM de qualidade
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl">
          Desde o início, nossa missão sempre foi elevar o padrão dos revestimentos arquitetônicos, oferecendo soluções em ACM que unem durabilidade, estética e inovação. Atuamos com foco na excelência, desde a escolha dos materiais até a entrega final, garantindo resultados que valorizam cada projeto.
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl">
          Com uma trajetória construída sobre confiança e compromisso, buscamos constantemente evoluir nossos processos e acompanhar as tendências do mercado. Nosso objetivo é proporcionar aos clientes não apenas um produto, mas uma experiência completa, com suporte técnico especializado e atenção em cada detalhe.
        </Text>
        <Text variant="normalDescription" className="RevealText mt-6 text-[#404142] leading-relaxed max-w-2xl">
          Ao longo dos anos, consolidamos nossa presença no setor através de parcerias sólidas e projetos bem-sucedidos. Seguimos trabalhando com dedicação para transformar ideias em realidade, entregando qualidade que se destaca e agrega valor em cada aplicação.
        </Text>
      </div>
    </Section>
  );
}