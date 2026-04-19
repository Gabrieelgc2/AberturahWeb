import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function AboutPreview() {
  return (
    <section
      className="relative overflow-hidden py-24 sm:py-32"
      style={{ background: "var(--steel-light)" }}
    >
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Quem somos"
              title={
                <>
                  Indústria,<br />
                  <span className="italic">precisão e arte.</span>
                </>
              }
            />
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--steel)]">
              Fundada com a missão de elevar o padrão de revestimentos
              arquitetônicos no Brasil, a ABERTURAH integra fabricação,
              beneficiamento e logística sob um único teto. Cada chapa que sai
              da nossa linha carrega o compromisso de durar décadas.
            </p>
            <Link
              to="/sobre"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground underline-offset-4 hover:underline"
            >
              Conheça nossa história
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div
              className="aspect-square rounded-3xl"
              style={{ background: "var(--gradient-dark)" }}
            >
              <div
                className="h-full w-full rounded-3xl opacity-30"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, transparent, transparent 30px, oklch(1 0 0 / 0.08) 30px, oklch(1 0 0 / 0.08) 31px)",
                }}
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 max-w-[260px] rounded-2xl bg-background p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="font-serif text-5xl font-bold leading-none"
                style={{
                  background: "var(--gradient-brand)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                100%
              </div>
              <p className="mt-2 text-sm text-[color:var(--steel)]">
                Beneficiamento próprio com tecnologia CNC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
