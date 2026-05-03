type TextVariant =
  | "Title"
  | "Subtitle"
  | "cardTitle"
  | "cardSubtitle"
  | "normalDescription"
  | "cardDescription";

const styles: Record<TextVariant, string> = {
  Title: "text-2xl md:text-[3.0rem] sm:text-3xl font-bold",
  Subtitle: "text-xl md:text-3xl sm:text-2xl font-semibold",
  cardTitle: "text-lg md:text-2xl sm:text-xl font-semibold",
  cardSubtitle: "text-base md:text-xl sm:text-lg font-medium",
  normalDescription: "text-base md:text-lg sm:text-base leading-relaxed",
  cardDescription: "text-sm md:text-base sm:text-sm",
};

export function Text({
  variant = "normalDescription",
  className = "",
  children,
}: {
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`${styles[variant]} ${className}`}>{children}</p>;
}