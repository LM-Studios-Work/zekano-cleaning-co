import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { getServiceDetailImageMap } from "@/lib/cms-images"
import { FaqAccordion } from "../landscaping-property/faq-accordion"
import { GoogleReviewsCTA } from "@/components/google-reviews-cta"

const inspectionItems = [
  {
    title: "Flooring & Tiling",
    image: "/property improvement/laminate flooring.webp",
    items: [
      "Professional laminate flooring installation",
      "Bathroom and kitchen tiling",
      "Floor and wall tile application",
      "Surface preparation and levelling",
      "Grouting and sealing",
    ],
  },
  {
    title: "Drywalling & Ceilings",
    image: "/property improvement/ceiling installation.webp",
    items: [
      "Drywall installation and partitioning",
      "Ceiling installation and repairs",
      "Skimming and plastering",
      "Bulkheads and decorative ceilings",
      "Soundproofing and insulation",
    ],
  },
  {
    title: "Painting & Waterproofing",
    image: "/property improvement/drywalling.jpg",
    items: [
      "Interior and exterior painting",
      "Roof and balcony waterproofing",
      "Damp proofing solutions",
      "Surface preparation and crack repair",
      "Protective coatings for walls and floors",
    ],
  },
  {
    title: "Outdoor Improvements",
    image: "/property improvement/outdoor improvement.png",
    items: [
      "Driveway and walkway paving",
      "Irrigation system installation",
      "Landscaping and garden design",
      "Tree felling and care",
      "General property maintenance",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Specialised Network",
    description: "We work with a trusted network of experienced and specialised contractors ensuring the right expert is matched to your specific project.",
    icon: "CheckIcon",
  },
  {
    title: "Single Point of Contact",
    description: "Zenako remains your dedicated point of contact throughout the entire process, managing the contractors so you don't have to.",
    icon: "CheckIcon",
  },
  {
    title: "Quality Assurance",
    description: "All work is overseen and vetted to meet Zenako's high standards of quality and professionalism.",
    icon: "CheckIcon",
  },
  {
    title: "Comprehensive Solutions",
    description: "From indoor renovations to outdoor landscaping, we cover all aspects of property improvement.",
    icon: "CheckIcon",
  },
]

const faqs = [
  {
    id: "contractors",
    question: "Do you employ these specialists directly?",
    answer: "Zenako Cleaning & Property Services works with a trusted network of experienced and specialised contractors. We match each project with the appropriate specialist, while Zenako remains your dedicated point of contact and project manager throughout the entire process.",
  },
  {
    id: "quotes",
    question: "How do quotes work for property improvement?",
    answer: "We assess your specific requirements and coordinate with our specialist network to provide you with a single, comprehensive quote for the entire project.",
  },
  {
    id: "management",
    question: "Who manages the project?",
    answer: "Zenako manages the project end-to-end. You deal directly with us, and we ensure the specialist contractors deliver to our exacting standards.",
  },
]

export default async function PropertyImprovementServices() {
  const payload = await getPayload({ config: configPromise })
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = "/property improvement/outdoor improvement.png"

  const otherServices = getRelatedServices("property-improvement", 3)

  return (
    <>
      <Header />
      <main className="pt-24">
        
        {/* Breadcrumb */}
        <section className="py-4 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services/property-services" className="hover:text-foreground transition-colors">Property Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Property Improvement Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Zenako Cleaning & Property Services
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Property Improvement Services
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Zenako Cleaning & Property Services works with a trusted network of experienced and specialised contractors to assist with property improvement, maintenance and upgrade projects. Each project is matched with the appropriate specialist, while Zenako remains your point of contact throughout the process.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Painting%2C%20Renovations%20or%20Property%20Maintenance."
target="_blank"
rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
<i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
Get a Quote via WhatsApp
</a>
                  <a
                    href="tel:+27657018482"
                    className="btn-lift inline-flex items-center justify-center gap-2 px-8 py-3 text-sm font-bold text-foreground border-2 border-foreground hover:bg-foreground hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Property Improvement Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <GoogleReviewsCTA />

        {/* Why Us Section */}
        <section className="py-20 lg:py-28 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>
                Why Zenako
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Your Trusted Contractor <span style={{ color: "#1A9AD2" }}>Network</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We deliver major property improvement projects safely and professionally through our network of vetted specialists.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="relative p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: idx % 2 === 0 ? "#1A9AD2" : "#6fbf00" }}
                  />
                  <div className="mb-6 flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 group-hover:bg-blue-50/50 transition-colors">
                    <span className="text-xl font-black" style={{ color: idx % 2 === 0 ? "#1A9AD2" : "#6fbf00" }}>
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Checklist */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Capabilities</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Our Property Improvement Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inspectionItems.map((section, idx) => (
                <Card key={idx} className="border-border overflow-hidden">
                  <div className="aspect-[3/2] relative">
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground text-lg mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex gap-3">
                          <CheckIcon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-4">
              Frequently Asked Questions
            </h2>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Upgrade Your Property?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your property improvement projects and connect with our network of specialists.
            </p>
            <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Painting%2C%20Renovations%20or%20Property%20Maintenance."
target="_blank"
rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
<i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
Get a Quote via WhatsApp
</a>
          </div>
        </section>

        {/* Other Services You May Need */}
        {otherServices.length > 0 && (
          <section className="py-16 lg:py-24 bg-white">
            <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Other <span style={{ color: "#6fbf00" }}>Services</span> You May Need
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {otherServices.map((related) => (
                  <Link key={related.slug} href={`/services/${related.slug}`} className="group">
                    <Card className="border-border h-full transition-shadow duration-200 group-hover:shadow-lg">
                      <div className="aspect-[3/2] relative overflow-hidden">
                        <Image
                          src={detailImageMap[related.slug] ?? related.image}
                          alt={related.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <CardContent className="p-6">
                        <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{related.category}</span>
                        <h3 className="mt-1 font-bold text-foreground text-lg group-hover:text-[#1A9AD2] transition-colors">{related.title}</h3>
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
                  href="/services/property-services"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  style={{ color: "#1A9AD2" }}
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  View All Property Services
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
