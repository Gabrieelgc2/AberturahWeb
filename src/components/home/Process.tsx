import { useTranslation } from "react-i18next";

export function Process() {
  const { t } = useTranslation();
  const stepsRaw = t("process.steps", { returnObjects: true, defaultValue: [], })
  const steps = Array.isArray(stepsRaw) ? stepsRaw : []
  return (
    <section
      className="relative py-24 sm:py-32"
      style={{ background: "#D9D9D9" }}
    >

      <div className="container relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="RevealText inline-flex items-center gap-2 rounded-full border border-[#404142] px-4 py-1.5 text-xs uppercase tracking-widest text-[#404142]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            {t("process.badge")}
          </div>
          <h2 className="RevealText mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-[#404142] sm:text-6xl">
            {t("process.title.line1")}
            <br />
            <span
              className="font-serif"
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "#404142",
              }}
            >
              {t("process.title.line2")}
            </span>
          </h2>
        </div>

        {/* Timeline Estrutura */}
        <div className="relative">
          {/* Linha Central Vertical (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-16 md:gap-24">
            {steps.map((s, i) => (
              <div
                key={s.number}
                className={`RevealText flex flex-col md:flex-row items-center w-full ${i % 2 !== 0 ? "md:flex-row-reverse" : ""
                  }`}
              >
                {/* LADO DO CONTEÚDO (CARD) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end in-even:md:justify-start px-4 md:px-8">
                  <div
                    className={`relative bg-[#404142] p-8 md:p-10 rounded-[1.0rem] border border-[#D9D9D9]/65 transition-colors hover:bg-[oklch(0.18_0.015_55)] shadow-2xl w-full max-w-[480px]
          ${i % 2 === 0 ? "md:text-right" : "md:text-left text-left"}`}
                  >
                    <div
                      className="font-serif text-6xl  leading-none opacity-100"
                      style={{
                        background: "var(--gradient-brand)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "#D9D9D9",
                      }}
                    >
                      {s.number}
                    </div>
                    <h3 className="mt-4 font-sans text-3xl text-white tracking-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#D9D9D9] font-sans">
                      {s.description}
                    </p>
                  </div>
                </div>

                {/* MARCADOR CENTRAL */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white/40 rounded-full border-2 border-[#414042] hidden md:block z-10" />

                {/* ESPAÇO VAZIO (OPCIONAL) */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}