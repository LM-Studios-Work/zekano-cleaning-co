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
  // .env.local not found - rely on existing env vars
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

const serviceAreas = [
  { name: 'Sandton', order: 1 },
  { name: 'Randburg', order: 2 },
  { name: 'Fourways', order: 3 },
  { name: 'Midrand', order: 4 },
  { name: 'Bryanston', order: 5 },
  { name: 'Johannesburg North', order: 6 },
]

const companyValues = [
  // About page - What Drives Us
  {
    title: 'Our Mission',
    description: 'To deliver consistently excellent cleaning across Johannesburg, covering homes, offices, and commercial spaces.',
    icon: 'ShieldCheckIcon',
    section: 'about',
    order: 1,
  },
  {
    title: 'Our Standards',
    description: 'Honest work, consistent teams, and eco-friendly products. We do not cut corners or make exceptions.',
    icon: 'LeafIcon',
    section: 'about',
    order: 2,
  },
  {
    title: 'Our Professionals',
    description: 'Every professional we work with is background-checked, trained, and equipped to meet our standard.',
    icon: 'GearIcon',
    section: 'about',
    order: 3,
  },
  {
    title: 'Our Guarantee',
    description: 'If you are not satisfied, we return and re-clean at no additional cost. No forms, no delays.',
    icon: 'TrophyIcon',
    section: 'about',
    order: 4,
  },
  // Why Choose Us section
  {
    title: 'Satisfaction Guarantee',
    description: 'If our work does not meet your standards, we return and re-clean at no additional cost, promptly and without dispute.',
    icon: 'AwardStarIcon',
    section: 'why-choose-us',
    order: 1,
  },
  {
    title: 'Transparent Pricing',
    description: 'We provide a clear quote before any work begins. The figure you agree to is the figure you pay.',
    icon: 'MoneyBagIcon',
    section: 'why-choose-us',
    order: 2,
  },
  {
    title: 'Eco-Friendly Products',
    description: 'We use effective, non-toxic cleaning solutions that are safe for your family, pets, and the environment.',
    icon: 'RecycleIcon',
    section: 'why-choose-us',
    order: 3,
  },
  {
    title: 'Professional Equipment',
    description: 'We bring commercial-grade equipment to every job, ensuring a thorough and consistent result each visit.',
    icon: 'GearIcon',
    section: 'why-choose-us',
    order: 4,
  },
]

async function seed() {
  const { getPayload } = await import('payload')
  const { default: configPromise } = await import('../payload.config')
  const { allServices } = await import('../lib/services-data')

  const payload = await getPayload({ config: configPromise })

  // FAQs
  const existingFaqs = await payload.find({ collection: 'faqs', limit: 1 })
  if (existingFaqs.totalDocs > 0) {
    console.log(`FAQs already seeded (${existingFaqs.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding FAQs...')
    for (const faq of faqs) {
      await payload.create({ collection: 'faqs', data: faq })
      console.log(`  ✓ ${faq.question}`)
    }
  }

  // Service Areas
  const existingAreas = await payload.find({ collection: 'service-areas', limit: 1 })
  if (existingAreas.totalDocs > 0) {
    console.log(`Service areas already seeded (${existingAreas.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding service areas...')
    for (const area of serviceAreas) {
      await payload.create({ collection: 'service-areas', data: area })
      console.log(`  ✓ ${area.name}`)
    }
  }

  // Company Values
  const existingValues = await payload.find({ collection: 'company-values', limit: 1 })
  if (existingValues.totalDocs > 0) {
    console.log(`Company values already seeded (${existingValues.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding company values...')
    for (const value of companyValues) {
      await payload.create({ collection: 'company-values', data: value })
      console.log(`  ✓ [${value.section}] ${value.title}`)
    }
  }

  // Services
  const existingServices = await payload.find({ collection: 'services', limit: 1 })
  if (existingServices.totalDocs > 0) {
    console.log(`Services already seeded (${existingServices.totalDocs} found). Skipping.`)
  } else {
    console.log('Seeding services...')
    for (const service of allServices) {
      await payload.create({
        collection: 'services',
        data: {
          title: service.title,
          slug: service.slug,
          category: service.category,
          categorySlug: service.categorySlug,
          description: service.description,
          longDescription: service.longDescription,
          image: service.image,
          icon: service.icon,
          features: service.features.map((item) => ({ item })),
          benefits: service.benefits.map((item) => ({ item })),
          process: service.process.map((item) => ({ item })),
        },
      })
      console.log(`  ✓ ${service.title}`)
    }
  }

  console.log('Done.')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
