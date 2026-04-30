import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon, ChatIcon } from "@/components/icons"

import { allServices, getServiceBySlug } from "@/lib/services-data"

export const revalidate = 60

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const { docs } = await payload.find({
    collection: 'services',
    limit: 100,
  })
  
  const payloadParams = docs.map((service: any) => ({ slug: service.slug as string }))
  const staticParams = allServices.map((service) => ({ slug: service.slug }))
  
  // Merge and deduplicate
  const allSlugs = Array.from(new Set([...payloadParams.map(p => p.slug), ...staticParams.map(p => p.slug)]))
  return allSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  
  let service: any = null
  
  const staticService = getServiceBySlug(slug)
  if (staticService) {
    service = {
      title: staticService.title,
      description: staticService.description,
      longDescription: staticService.longDescription,
      image: staticService.image,
      category: staticService.category,
    }
  } else {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    service = docs[0] as any
  }

  if (!service) return { title: "Service Not Found" }

  return {
    title: `${service.title} | Zenako Cleaning Co. | Johannesburg`,
    description: `${service.description} Professional ${(service.title as string).toLowerCase()} in Johannesburg, including Sandton, Randburg, Fourways, Midrand, and Bryanston. Book with Zenako Cleaning Co. today.`,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} in Johannesburg | Zenako Cleaning Co.`,
      description: service.description,
      url: `/services/${slug}`,
      images: [
        {
          url: service.image,
          alt: `${service.title} in Johannesburg by Zenako Cleaning Co.`,
        },
      ],
    },
    twitter: {
      title: `${service.title} in Johannesburg | Zenako Cleaning Co.`,
      description: service.description,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let service: any = null
  let isStatic = false

  const staticService = getServiceBySlug(slug)
  
  if (staticService) {
    // Map static service to the expected format
    service = {
      ...staticService,
      features: staticService.features.map((f, i) => ({ id: `f-${i}`, item: f })),
      benefits: staticService.benefits.map((b, i) => ({ id: `b-${i}`, item: b })),
      process: staticService.process.map((p, i) => ({ id: `p-${i}`, item: p })),
    }
    isStatic = true
  } else {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
      collection: 'services',
      where: { slug: { equals: slug } },
      limit: 1,
    })
    service = docs[0] as any
  }

  if (!service) notFound()

  const payload = await getPayload({ config: configPromise })
  const { docs: relatedDocs } = await payload.find({
    collection: 'services',
    where: {
      and: [
        { categorySlug: { equals: service.categorySlug } },
        { slug: { not_equals: slug } },
      ],
    },
    limit: 3,
  })
  
  let relatedServices = relatedDocs as any[]
  
  if (relatedServices.length < 3) {
    const existingSlugs = new Set(relatedServices.map((d: any) => d.slug))
    const staticRelated = allServices
      .filter(s => s.categorySlug === service.categorySlug && s.slug !== slug && !existingSlugs.has(s.slug))
      .slice(0, 3 - relatedServices.length)
    relatedServices = [...relatedServices, ...staticRelated]
  }

  const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.zenakocleaning.co.za'
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Zenako Cleaning Co.',
      telephone: '+27657018482',
      url: SITE_URL,
    },
    areaServed: [
      { '@type': 'City', name: 'Johannesburg' },
      { '@type': 'City', name: 'Sandton' },
      { '@type': 'City', name: 'Randburg' },
      { '@type': 'City', name: 'Fourways' },
      { '@type': 'City', name: 'Midrand' },
      { '@type': 'City', name: 'Bryanston' },
    ],
    serviceType: service.category,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header />
      <main className="pt-24">
        {/* Breadcrumb */}
        <section className="py-4 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{service.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  {service.category}
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  {service.title}
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book This Service
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#1A9AD2" }}
                  >
                    <ChatIcon className="h-4 w-4" />
                    Get a Free Quote
                  </Link>
                </div>
              </div>
              {service.image && (
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image as string}
                    alt={service.title as string}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">What's Included</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Everything Covered in This <span style={{ color: "#6fbf00" }}>Service</span>
                </h2>
                <ul className="mt-8 space-y-4">
                  {(service.features ?? []).map((feature: any) => (
                    <li key={feature.id} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                      <span className="text-foreground">{feature.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Benefits</span>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Why Choose This <span style={{ color: "#1A9AD2" }}>Service</span>
                </h2>
                <ul className="mt-8 space-y-4">
                  {(service.benefits ?? []).map((benefit: any) => (
                    <li key={benefit.id} className="flex items-start gap-3">
                      <CheckIcon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#1A9AD2" }} />
                      <span className="text-foreground">{benefit.item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Our Process</span>
              <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                How We Deliver This <span style={{ color: "#6fbf00" }}>Service</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {(service.process ?? []).map((step: any, idx: number) => (
                <Card key={step.id} className="border-border">
                  <CardContent className="p-6">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-full text-white text-sm font-bold mb-4"
                      style={{ backgroundColor: "#1A9AD2" }}
                    >
                      {idx + 1}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed">{step.item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white">
                  Ready to Book {service.title}?
                </h2>
                <p className="mt-2 text-white/85 text-sm lg:text-base">
                  Get a free, no-obligation quote or book online now. First-time customers get 10% off!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Book Now
                </Link>
                <a
                  href="tel:+27657018482"
                  className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call 065 701 8482
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        {relatedServices.length > 0 && (
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Other <span style={{ color: "#6fbf00" }}>Services</span> You May Need
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((related: any) => (
                <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                  <Card className="border-border h-full transition-shadow duration-200 group-hover:shadow-lg">
                    {related.image && (
                      <div className="aspect-[3/2] relative overflow-hidden">
                        <Image
                          src={related.image as string}
                          alt={related.title as string}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardContent className="p-6">
                      <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{related.category}</span>
                      <h3 className="mt-1 font-bold text-foreground text-lg group-hover:text-[#1A9AD2] transition-colors">
                        {related.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{related.description}</p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium" style={{ color: "#6fbf00" }}>
                        Learn more <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                style={{ color: "#1A9AD2" }}
              >
                <ArrowLeftIcon className="h-4 w-4" />
                View All Services
              </Link>
            </div>
          </div>
        </section>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
