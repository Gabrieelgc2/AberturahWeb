import { FAQSection } from "./FaqSection";

export function Faq() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="space-y-24">
          <FAQSection
            namespace="acm"
            showBadge
          />

          <FAQSection
            namespace="pvc"
          />
        </div>
      </div>
    </section>
  );
}