import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { FAQAccordion } from './faq-accordion'

export async function FAQSection() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'faqs',
    sort: 'order',
    limit: 100,
  })

  const faqSchema = docs.length > 0
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: docs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null

  return (
    <>
    {faqSchema && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    )}
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            <FAQAccordion faqs={docs} />
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
