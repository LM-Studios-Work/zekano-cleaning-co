import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { ServicesPreview } from "@/components/services-preview"
import { BeforeAfter } from "@/components/before-after"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ServiceAreas } from "@/components/service-areas"
import { FirstTimeOffer } from "@/components/first-time-offer"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { allServices } from "@/lib/services-data"

export const revalidate = 60

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zenakocleaning.co.za'

export const metadata: Metadata = {
  title: 'Professional Cleaning Services in Johannesburg',
  description: 'Zenako Cleaning Co. provides professional residential, commercial, upholstery, and specialised cleaning services across Johannesburg, Sandton, Randburg, Fourways, Midrand, and Bryanston.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Professional Cleaning Services in Johannesburg',
    description: 'Professional residential, commercial, upholstery, and specialised cleaning services across Johannesburg and surrounding areas.',
    url: '/',
    images: [
      {
        url: '/cleaning images/zenako-house-cleaning-johannesburg.webp',
        alt: 'Zenako Cleaning Co. professional house cleaning, Johannesburg',
      },
    ],
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Zenako Cleaning Co.',
  description: 'Professional cleaning services in Johannesburg for homes, offices, and commercial properties.',
  url: SITE_URL,
  telephone: '+27844020733',
  email: 'info@zenakocleaning.co.za',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Johannesburg',
    addressRegion: 'Gauteng',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.2041,
    longitude: 28.0473,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '17:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '14:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Johannesburg' },
    { '@type': 'City', name: 'Sandton' },
    { '@type': 'City', name: 'Randburg' },
    { '@type': 'City', name: 'Fourways' },
    { '@type': 'City', name: 'Midrand' },
    { '@type': 'City', name: 'Bryanston' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: allServices.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
        url: `${SITE_URL}/services/${service.slug}`,
      },
    })),
  },
  image: `${SITE_URL}/cleaning images/zenako-cleaning-team.webp`,
  priceRange: '$$',
}

export const revalidate = 60

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Header />
      <main className="relative">
        <HeroSlideshow />
        <ServicesPreview />
        <BeforeAfter />
        <WhyChooseUs />
        <ServiceAreas />
        <FirstTimeOffer />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
