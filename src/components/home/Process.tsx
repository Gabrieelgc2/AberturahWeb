import { useTranslation } from "react-i18next";

export function Process() {
const { t } = useTranslation("process");
const steps = [

  {
    n: "01",
    title: t("steps.0.title"),
    desc: t("steps.0.description"),
  },
  {
    n: "02",
    title: t("steps.1.title"),
    desc: t("steps.1.description"),
  },
  {
    n: "03",
    title: t("steps.2.title"),
    desc: t("steps.2.description"),
  },
  {
    n: "04",
    title: t("steps.3.title"),
    desc: t("steps.3.description"),
  },
  
];

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "#D9D9D91D" }}
    >

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#404142] px-4 py-1.5 text-xs uppercase tracking-widest text-[#404142]">
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            {t("badge")}
          </div>
          <h2 className="mx-auto mt-6 max-w-3xl font-sans text-5xl leading-[1.05] tracking-tight text-[#404142]">
            {t("title.line1")}
            <br />
            <span
              style={{
                background: "var(--gradient-brand)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t("title.line2")}
            </span>
          </h2>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="relative bg-black p-8 transition-colors hover:bg-[oklch(0.18_0.015_55)]"
            >
              <h3 className="mt-6 font-sans text-2xl text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#D9D9D9]">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}