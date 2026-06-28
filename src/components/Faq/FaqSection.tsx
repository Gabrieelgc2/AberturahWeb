import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

import { SectionHeading } from "../SectionHeading";
import { useTranslation } from "react-i18next";

interface FAQSectionProps {
  namespace: string;
  showBadge?: boolean;
}

export function FAQSection({
  namespace,
  showBadge = false,
}: FAQSectionProps) {
  const { t } = useTranslation("faq");

  const items = t(`${namespace}.items`, {
    returnObjects: true,
  }) as {
    question: string;
    answer: string;
  }[];

  return (
    <div>
      <SectionHeading
        eyebrow={showBadge ? t("badge") : undefined}
        eyebrowClassName="RevealText"
        title={
          <>
            <span className="font-sans">
              {t(`${namespace}.title.line1`)}
            </span>

            <br />

            <span className="font-sans">
              {t(`${namespace}.title.line2`)}
            </span>
          </>
        }
      />

      <Accordion
        type="single"
        collapsible
        className="mt-16 space-y-3"
      >
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`${namespace}-${index}`}
            className="
              RevealText
              rounded-2xl
              border
              border-[color:var(--steel-light)]
              bg-background
              px-6
              transition-colors
              data-[state=open]:bg-[color:var(--steel-light)]/40
            "
          >
            <AccordionTrigger
              className="
                py-6
                text-left
                font-sans
                text-lg
                font-medium
                text-foreground
                hover:no-underline
                sm:text-xl
              "
            >
              {item.question}
            </AccordionTrigger>

            <AccordionContent
              className="
                pb-6
                whitespace-pre-line
                font-sans
                text-base
                leading-relaxed
                text-[#404142]
              "
            >
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}