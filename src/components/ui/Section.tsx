import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  withOverlay?: boolean;
  background?: string;
  size?: "default";
}

const sizes = {
  default: "py-[var(--space-section-y)] md:py-[var(--space-section-y-md)] lg:py-[var(--space-section-y-lg)]",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  withOverlay = false,
  background,
  size = "default",
}: SectionProps) {
  return (
    <section
      className={`
        relative
        ${background ?? "bg-background"}
        ${sizes[size]}
        ${className}
      `}
    >
      {withOverlay && (
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, black, transparent 40%), radial-gradient(circle at 80% 60%, black, transparent 40%)",
          }}
        />
      )}

      <div
        className={`
          container mx-auto max-w-7xl px-6 sm:px-8 relative
          ${containerClassName}
        `}
      >
        {children}
      </div>
    </section>
  );
}