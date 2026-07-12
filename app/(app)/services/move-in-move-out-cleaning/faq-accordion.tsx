'use client'

import { useState } from "react"

interface Faq {
  id: string
  question: string
  answer: string
}

export function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <button
          key={faq.id}
          onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
          className="w-full text-left p-6 bg-background border border-border transition-all hover:border-[#1A9AD2]/30"
        >
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-bold text-foreground text-lg">{faq.question}</h3>
            <span
              className="text-2xl font-light mt-0.5 shrink-0 transition-transform"
              style={{ color: "#1A9AD2" }}
            >
              {expandedFaq === faq.id ? '−' : '+'}
            </span>
          </div>
          {expandedFaq === faq.id && (
            <p className="mt-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
          )}
        </button>
      ))}
    </div>
  )
}
