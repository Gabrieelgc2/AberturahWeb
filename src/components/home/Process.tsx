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

<div className="mt-20 grid gap-6 rounded-3xl sm:grid-cols-2 lg:grid-cols-4 RevealText">
            {steps.map((s) => (
              <div
                key={s.number}
                className={`relative bg-[#5DADEC] p-8 md:p-10 rounded-[1.0rem] transition-colors transition-all hover:bg-[oklch(0.18_0.015_55)] hover:-translate-y-2 shadow-2xl hover:shadow-[var(--shadow-card)] w-full max-w-[480px]`}
              >
                    <h3 className="mt-4 font-sans text-3xl text-white tracking-tight RevealText">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-[#404142] font-sans RevealText">
                      {s.description}
                    </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}