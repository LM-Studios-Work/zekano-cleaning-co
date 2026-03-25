"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How much does cleaning cost?",
    answer: "Pricing depends on the size of your space, the type of cleaning service, and the frequency. We offer free, no-obligation quotes — get in touch via WhatsApp, phone, or our contact form and we'll provide a transparent estimate tailored to your needs.",
  },
  {
    question: "Do you bring your own cleaning supplies?",
    answer: "Yes! Our team arrives fully equipped with professional-grade, eco-friendly cleaning products and all necessary equipment. You don't need to provide anything — just let us in and we'll handle the rest.",
  },
  {
    question: "Which areas do you serve?",
    answer: "We serve Sandton, Randburg, Fourways, Midrand, Bryanston, Johannesburg North, and surrounding areas. If you're not sure whether we cover your location, please contact us and we'll let you know.",
  },
  {
    question: "How do I book a cleaning service?",
    answer: "You can book online through our website, send us a WhatsApp message, call us at 084 402 0733, or fill out our contact form. We'll confirm your booking within 24 hours.",
  },
  {
    question: "Can I reschedule or cancel a booking?",
    answer: "Yes, we understand plans change. Please let us know at least 24 hours in advance and we'll happily reschedule your appointment at no extra charge.",
  },
  {
    question: "Do you offer regular cleaning plans?",
    answer: "Absolutely! We offer weekly, fortnightly, and monthly cleaning plans. Clients who book ongoing services enjoy loyalty rewards and special offers for repeat bookings.",
  },
]

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">FAQ</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Frequently Asked <span style={{ color: "#6fbf00" }}>Questions</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Got questions about our cleaning services in Johannesburg? Here are answers to the most common ones.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left font-semibold text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
