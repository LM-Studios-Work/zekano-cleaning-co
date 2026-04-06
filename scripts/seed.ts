import { readFileSync } from 'fs'
import { resolve } from 'path'

// Load .env.local before Payload initializes (avoids @next/env ESM interop issues)
try {
  const envPath = resolve(process.cwd(), '.env.local')
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const match = line.match(/^([^#\s][^=]*)=(.*)$/)
    if (match) process.env[match[1].trim()] = match[2].trim()
  }
} catch {
  // .env.local not found — rely on existing env vars
}

const faqs = [
  {
    question: 'How much does a clean cost?',
    answer:
      'Pricing depends on the size of your property, the type of service, and frequency. Request a quote and we will provide a clear, itemised figure within hours. There is no obligation to proceed.',
    order: 1,
  },
  {
    question: 'Do you provide your own supplies and equipment?',
    answer:
      'Yes. We bring all cleaning products and equipment to every job. Our products are eco-friendly and safe for children and pets. You do not need to provide anything.',
    order: 2,
  },
  {
    question: 'Which areas do you service?',
    answer:
      'We service Sandton, Randburg, Fourways, Midrand, Bryanston, Johannesburg North, and surrounding areas. If you are unsure whether we cover your area, contact us directly and we will confirm.',
    order: 3,
  },
  {
    question: 'Can I arrange a regular cleaning schedule?',
    answer:
      'Yes. We offer weekly, fortnightly, and monthly plans. Clients on recurring schedules receive priority booking and loyalty pricing. The same professionals are assigned to your property wherever possible.',
    order: 4,
  },
  {
    question: 'What is your cancellation policy?',
    answer:
      "We ask for 24 hours' notice for cancellations. There is no penalty and no cancellation fee. We do not hold clients to rigid commitments.",
    order: 5,
  },
  {
    question: 'What happens if something is damaged during a clean?',
    answer:
      'We take full responsibility for our work. If something is damaged, you contact us directly, not a call centre. Issues are handled personally by our management, promptly and fairly.',
    order: 6,
  },
]

async function seed() {
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('../payload.config')

  const payload = await getPayload({ config: configPromise })

  const existing = await payload.find({ collection: 'faqs', limit: 1 })
  if (existing.totalDocs > 0) {
    console.log(`FAQs already seeded (${existing.totalDocs} found). Skipping.`)
    process.exit(0)
  }

  console.log('Seeding FAQs...')
  for (const faq of faqs) {
    await payload.create({ collection: 'faqs', data: faq })
    console.log(`  ✓ ${faq.question}`)
  }
  console.log('Done.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
