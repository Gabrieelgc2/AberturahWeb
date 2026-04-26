interface Props {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  eyebrowClassName?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  eyebrowClassName,
  align = "center",
}: Props) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow && (
        <div
          className={`${eyebrowClassName || "RevealText"} mb-5 inline-flex items-center gap-2 rounded-full border border-[color:var(--steel-light)] bg-background px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[color:var(--steel)]`}
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "var(--brand)" }}
          />
          {eyebrow}
        </div>
      )}
      <h2 className="RevealText font-serif text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p
          className={`RevealText mt-5 text-lg leading-relaxed text-[color:var(--steel)] ${
            align === "center" ? "mx-auto max-w-2xl" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
