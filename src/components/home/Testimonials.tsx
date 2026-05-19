import { Quote } from "lucide-react";
import { SectionHeading } from "../../components/SectionHeading";
import { useTranslation } from "react-i18next";

export function Testimonials() {
const { t } = useTranslation();
const testimonialsRaw = t("testimonials.items", { returnObjects: true, defaultValue: [], }); 
const testimonials = Array.isArray(testimonialsRaw) ? testimonialsRaw : [];
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={t("testimonials.badge")}
          eyebrowClassName="RevealText"
          title={
            <>
              <span className="font-sans">{t("testimonials.title.line1")}</span>
              <br />
              <span className="font-sans">{t("testimonials.title.line2")}</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <article
              key={testimonial.name}
              className="RevealText group relative flex flex-col rounded-3xl border border-[color:var(--steel-light)] bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card)]"
              style={{
                background:
                  i === 1
                    ? "var(--gradient-dark)"
                    : "var(--background)",
              }}
            >
              <Quote
                className="RevealText h-10 w-10"
                style={{ color: i === 1 ? "var(--brand)" : "var(--brand)" }}
              />
              <p
                className={`RevealText mt-6 flex-1 font-sans text-xl leading-relaxed ${
                  i === 1 ? "text-white" : "text-foreground"
                }`}
              >
                "{testimonial.quote}"
              </p>
              <div
                className={`mt-8 border-t pt-6 ${
                  i === 1 ? "border-white/10" : "border-[color:var(--steel-light)]"
                }`}
              >
                <div
                  className={`RevealText font-semibold font-sans ${
                    i === 1 ? "text-white" : "text-foreground"
                  }`}
                >
                  {testimonial.name}
                </div>
                <div
                  className={`RevealText mt-1 text-sm font-sans ${
                    i === 1
                      ? "text-[color:var(--steel-light)]"
                      : "text-[color:var(--steel)]"
                  }`}
                >
                  {testimonial.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
