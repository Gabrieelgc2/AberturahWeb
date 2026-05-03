interface Props {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  image: string;
}

export function PageLayout({ eyebrow, title, description, image }: Props) {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48 w-full background"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[.20]"
      >
        <img src={image} alt="Background" className="h-full w-full object-cover" />
      </div>
      <div className="container relative mx-auto max-w-5xl px-6 text-center">
        <div className="RevealText inline-flex items-center gap-2 rounded-full border border-[#white]/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[white]">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ background: "white" }}
          />
          {eyebrow}
        </div>
        <h1 className="RevealText mt-6 font-serif text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="RevealText mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[white]">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
