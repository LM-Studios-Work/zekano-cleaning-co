"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

type FAQ = {
  id: string | number
  question: string
  answer: string
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, idx) => (
        <AccordionItem key={faq.id} value={`item-${idx}`}>
          <AccordionTrigger className="text-left font-bold text-foreground text-base lg:text-sm py-5 lg:py-4">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-base lg:text-sm leading-relaxed pb-5 lg:pb-4">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
