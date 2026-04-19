interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}

export function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48"
      style={{ background: "var(--gradient-dark)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(oklch(1 0 0) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div className="container relative mx-auto max-w-5xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel-light)]">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--brand)" }}
          />
          {eyebrow}
        </div>
        <h1 className="mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[color:var(--steel-light)]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
