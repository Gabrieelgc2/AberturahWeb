import { ShieldCheck, Layers, Zap, Award, Truck, Hammer, Home, BadgeCheck } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

export function WhyChooseUs() {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: ShieldCheck,
      key: "quality",
    },
    {
      icon: Layers,
      key: "finishes",
    },
    {
      icon: Home,
      key: "installation",
    },
    {
      icon: Hammer,
      key: "manufacturing",
    },
    {
      icon: Zap,
      key: "deadline",
    },
    {
      icon: Truck,
      key: "logistics",
    },
    {
      icon: Award,
      key: "support",
    },
    {
      icon: BadgeCheck,
      key: "warranty",
    }
  ];
  return (
    <section 
    className="relative bg-white py-24 sm:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--white) 1px, transparent 1px), linear-gradient(90deg, var(--white) 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-125 w-125 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--white)" }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="RevealText mb-6 inline-flex items-center gap-2 
          rounded-full border border-(--steel-light)
          bg-background px-4 py-1.5 text-xs
          tracking-widest text-(--steel)"
          style={{"--delay": "0ms"} as React.CSSProperties}>
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--brand)" }}
            />
            {t("whyChooseUs.badge")}
          </div>
          <h2 className="RevealText font-serif text-5xl leading-[1.05] tracking-tight text-[foreground] sm:text-6xl lg:text-7xl"
            style={{"--delay": "150ms"} as React.CSSProperties}>
            {t("whyChooseUs.title.line1")}
            <br />
            <span
              style={{
                WebkitTextFillColor: "#404142",
              }}
            >
              {t("whyChooseUs.title.line2")}
            </span>
          </h2>
          <p className="RevealText font-sans mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#404142]">
            {t("whyChooseUs.description")}
          </p>
        </div>

        <div 
        className="RevealText mt-20 grid gap-px rounded-3xl border border-steel-light bg-(--steel-light) sm:grid-cols-2"
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.key}
                className="group relative bg-background p-8 transition-colors duration-300 hover:bg-(--brand-deep)"
              >
                <div
                  className="RevealText mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ background: "#5DADEC" }}
                >
                  <Icon className="h-7 w-7 text-shadow-black" strokeWidth={1.75} />
                </div>
                <h3 className="RevealText font-serif text-2xl text-foreground transition-colors group-hover:text-[color:var(--brand-foreground)]">
                  {t(`whyChooseUs.items.${reason.key}.title`)}
                </h3>
                <p className="RevealText font-sans mt-3 text-[15px] leading-relaxed text-[color:var(--steel)] transition-colors group-hover:text-[color:var(--steel-light)]">
                  {t(`whyChooseUs.items.${reason.key}.description`)}
                </p>
                <div
                  className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: "var(--gradient-brand)" }}
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}