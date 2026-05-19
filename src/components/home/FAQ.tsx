import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { SectionHeading } from "../../components/SectionHeading";
import { useTranslation } from "react-i18next";

export function FAQ() {
  const { t } = useTranslation();
  const faqItemsRaw = t("faq.items", { returnObjects: true, defaultValue: [], })
  const faqItems = Array.isArray(faqItemsRaw) ? faqItemsRaw : []

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow={t("faq.badge")}
          eyebrowClassName="RevealText"
          title={
            <>
              <span className="font-serif">{t("faq.title.line1")}</span>
              <br />
              <span className="font-serif">{t("faq.title.line2")}</span>
            </>
          }
        />

        <Accordion type="single" collapsible className="mt-16 space-y-3">
          {faqItems.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="RevealText rounded-2xl border border-[color:var(--steel-light)] bg-background px-6 transition-colors data-[state=open]:bg-[color:var(--steel-light)]/40"
            >
              <AccordionTrigger className="py-6 text-left font-sans text-lg font-medium text-foreground hover:no-underline sm:text-xl">
                {f.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base leading-relaxed text-[#404142] font-sans">
                {f.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
