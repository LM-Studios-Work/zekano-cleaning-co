"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does a clean cost?",
    answer: "Pricing depends on the size of your property, the type of service, and frequency. Request a quote and we will provide a clear, itemised figure within hours — no vague estimates and no obligation to proceed.",
  },
  {
    question: "Do you provide your own supplies and equipment?",
    answer: "Yes. We bring all cleaning products and equipment to every job. Our products are eco-friendly and safe for children and pets. You do not need to provide anything.",
  },
  {
    question: "Which areas do you service?",
    answer: "We service Sandton, Randburg, Fourways, Midrand, Bryanston, Johannesburg North, and surrounding areas. If you are unsure whether we cover your area, contact us directly and we will confirm.",
  },
  {
    question: "Can I arrange a regular cleaning schedule?",
    answer: "Yes. We offer weekly, fortnightly, and monthly plans. Clients on recurring schedules receive priority booking and loyalty pricing. The same professionals are assigned to your property wherever possible.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We ask for 24 hours' notice for cancellations. There is no penalty and no cancellation fee. We do not hold clients to rigid commitments.",
  },
  {
    question: "What happens if something is damaged during a clean?",
    answer: "We take full responsibility for our work. If something is damaged, you contact us directly — not a call centre. Issues are handled personally by our management, promptly and fairly.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric — question on left, accordion on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>FAQ</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-base lg:text-sm text-muted-foreground">
              If your question is not listed here, contact us directly and we will respond promptly.
            </p>
          </div>
          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-bold text-foreground text-base lg:text-sm py-5 lg:py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base lg:text-sm leading-relaxed pb-5 lg:pb-4">
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
