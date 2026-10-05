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
import { FaqAccordion } from "./faq-accordion"
import { GoogleReviewsCTA } from "@/components/google-reviews-cta"

const inspectionItems = [
  {
    title: "Landscaping",
    image: "/landscaping/landscaping.jpg",
    items: [
      "Custom garden design and layout planning",
      "Soil preparation and expert planting",
      "Retaining walls and decorative stone work",
      "Seasonal plant selection for year round colour",
      "Transforming unused spaces into garden features",
    ],
  },
  {
    title: "Paving",
    image: "/landscaping/paving.jpg",
    items: [
      "Driveway and walkway paving installation",
      "Patio and outdoor living area construction",
      "Wide selection of bricks, stones, and cobbles",
      "Professional leveling and robust base preparation",
      "Edge restraints and grouting for durability",
    ],
  },
  {
    title: "Irrigation & Sprinklers",
    image: "/landscaping/sprinkler-with-rotary.jpg",
    items: [
      "Automated sprinkler system design and installation",
      "Drip irrigation setup for maximum water efficiency",
      "Maintenance and repair of existing systems",
      "Smart controller programming",
      "Seasonal adjustments to watering schedules",
    ],
  },
  {
    title: "Tree Felling & Clearance",
    image: "/property improvement/maintenance.jpeg",
    items: [
      "Safe tree felling and complete removal",
      "Professional tree trimming and canopy shaping",
      "Stump removal and deep root clearing",
      "Comprehensive site clearance and rubble removal",
      "Responsible disposal of all green waste and rubble",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Comprehensive Solutions",
    description: "From design to installation and maintenance, we handle all aspects of landscaping so you only deal with one contractor.",
    icon: "CheckIcon",
  },
  {
    title: "Quality Craftsmanship",
    description: "Our paving and hardscaping is built to last, using proper base preparation and premium materials.",
    icon: "CheckIcon",
  },
  {
    title: "Safety First Approach",
    description: "Tree felling and heavy clearance work is conducted under strict safety protocols to protect your property.",
    icon: "CheckIcon",
  },
  {
    title: "Sustainable Practices",
    description: "We design irrigation systems that save water and select plants that thrive naturally in your specific environment.",
    icon: "CheckIcon",
  },
]


const faqs = [
  {
    id: "trees",
    question: "Is tree felling safe for surrounding structures?",
    answer: "Yes, our team is highly trained in directional felling and section removal. We use the correct rigging equipment to safely dismantle trees piece by piece if they are close to walls or roofs.",
  },
  {
    id: "paving",
    question: "Do you supply the paving materials?",
    answer: "Absolutely. We supply a wide range of paving bricks and stones, and we handle all the logistics including sand, cement, and rubble removal.",
  },
  {
    id: "irrigation",
    question: "Can you fix my existing sprinkler system?",
    answer: "Yes, we provide full maintenance and repair services for existing irrigation systems, including fixing leaks, replacing broken sprinkler heads, and upgrading controllers.",
  },
]

export default async function LandscapingAndPropertyService() {
  const payload = await getPayload({ config: configPromise })
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = "/landscaping/landscaping.jpg"

  const otherServices = getRelatedServices("landscaping-property", 3)

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
              <span className="text-foreground font-medium">Landscaping & Property Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Zenako Specialised Contractors
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Transform Your Property with Expert Landscaping
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We provide complete outdoor solutions. From beautiful garden redesigns and durable paving to complex tree felling and irrigation systems, we manage it all.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Landscaping%2C%20Paving%20or%20Artificial%20Grass."
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
                  alt="Expert Landscaping and Paving Services"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-20 lg:py-28 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>
                Why Zenako
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Your Trusted Specialised <span style={{ color: "#1A9AD2" }}>Contractor</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We deliver major outdoor projects safely, professionally, and exactly to your specifications.
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
                Our Property & Landscaping Expertise
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
              Contact us today to discuss your landscaping, paving, or tree felling requirements.
            </p>
            <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Landscaping%2C%20Paving%20or%20Artificial%20Grass."
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
