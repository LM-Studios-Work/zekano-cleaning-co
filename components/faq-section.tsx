"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does it cost?",
    answer: "Depends on size, service type, and how often. We don't do vague estimates — request a quote and we'll give you a real number within hours. No obligation.",
  },
  {
    question: "Do you bring supplies?",
    answer: "Everything. Products, equipment, the lot. You open the door, we handle the rest. All our products are eco-friendly and safe for kids and pets.",
  },
  {
    question: "What areas do you cover?",
    answer: "Sandton, Randburg, Fourways, Midrand, Bryanston, Johannesburg North, and surrounding areas. Not sure? Ask — we'll tell you straight.",
  },
  {
    question: "Can I book a regular schedule?",
    answer: "Weekly, fortnightly, or monthly. Same team each time. Clients on regular plans get priority scheduling and loyalty discounts.",
  },
  {
    question: "What if I need to cancel?",
    answer: "24 hours notice. No penalty, no fee. We're not here to trap anyone into bookings.",
  },
  {
    question: "Are you insured?",
    answer: "Yes. Licensed, insured, and every team member is background-checked. We don't cut corners on trust.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Asymmetric — question on left, accordion on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>FAQ</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Straight answers.
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              No corporate waffle. If your question isn't here, WhatsApp us.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
