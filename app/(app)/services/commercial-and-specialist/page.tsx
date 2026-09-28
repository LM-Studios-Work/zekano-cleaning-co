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

const inspectionItems = [
  {
    title: "Commercial Property Services",
    image: "/office/office hero.webp",
    items: [
      "Tailored maintenance plans for business parks",
      "Hardscape and softscape management",
      "Regular aesthetic upkeep for a professional look",
      "Flexible scheduling to minimize business disruption",
      "Dedicated account management and reporting",
    ],
  },
  {
    title: "Sports Field Maintenance",
    image: "/commercial and specialist services/sports field.jpg",
    items: [
      "Deep aeration and professional top dressing",
      "Accurate line marking and turf repair",
      "Specialised fertilisation and weed management",
      "Comprehensive match day preparation",
      "Drainage management to prevent waterlogging",
    ],
  },
  {
    title: "Padel Court Maintenance",
    image: "/commercial and specialist services/easy_to_use_squeegee_for_tennis_courts_with_hook_for_storage.jpg",
    items: [
      "Even sand distribution and regular sweeping",
      "Thorough glass cleaning and safety inspection",
      "Net tensioning and minor surface repairs",
      "Preventing moss and algae build up",
      "Ensuring optimal playability and bounce",
    ],
  },
  {
    title: "Garden & Landscaping Products",
    image: "/commercial and specialist services/garden products.jpg",
    items: [
      "Supply of premium bulk compost and topsoil",
      "High quality commercial grade fertilisers",
      "Effective and safe pest control solutions",
      "Gardening tools and heavy duty equipment supply",
      "Bulk delivery directly to large commercial sites",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Commercial Reliability",
    description: "We understand that your facilities must always be ready for clients or players. We deliver consistent, reliable service every time.",
    icon: "CheckIcon",
  },
  {
    title: "Specialist Knowledge",
    description: "Sports fields and padel courts require technical expertise. Our team is trained in the specific maintenance protocols for these surfaces.",
    icon: "CheckIcon",
  },
  {
    title: "Flexible Scheduling",
    description: "We work around your operating hours or fixture lists to ensure maintenance never interferes with your business.",
    icon: "CheckIcon",
  },
  {
    title: "Premium Supplies",
    description: "We have established supply chains for the highest quality soil, sand, and turf products needed for commercial applications.",
    icon: "CheckIcon",
  },
]

const faqs = [
  {
    id: "padel",
    question: "How often should a padel court be maintained?",
    answer: "For busy commercial courts, we recommend a professional sweep and sand redistribution every two weeks, with a deep clean of the glass and turf inspection once a month.",
  },
  {
    id: "sports",
    question: "Do you handle line marking for soccer and rugby fields?",
    answer: "Yes, we provide professional line marking services using high quality, durable paint that is safe for the turf and players.",
  },
  {
    id: "products",
    question: "Can you supply compost in bulk for large estates?",
    answer: "Absolutely. We supply and deliver premium compost, topsoil, and fertilisers in bulk quantities for estates, business parks, and golf courses.",
  },
]

export default async function CommercialAndSpecialistService() {
  const payload = await getPayload({ config: configPromise })
  const [{ docs: detailImgs }, detailImageMap] = await Promise.all([
    payload.find({
      collection: 'service-detail-images',
      where: { service: { equals: 'commercial-and-specialist' } },
      limit: 1,
    }),
    getServiceDetailImageMap(),
  ])
  const heroImage = (detailImgs[0] as any)?.url ?? "/commercial and specialist services/sports field.jpg"

  const otherServices = getRelatedServices("commercial-and-specialist", 3)

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
              <span className="text-foreground font-medium">Commercial & Specialist Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Commercial & Specialist Services
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Expert Maintenance for Business & Sports Facilities
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Dedicated maintenance for sports fields, padel courts, and commercial properties. We supply the expertise and products your business needs to stay at the top of its game.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Discuss Your Requirements
                  </Link>
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
                  alt="Sports Field and Commercial Maintenance"
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
                Specialist Solutions for <span style={{ color: "#1A9AD2" }}>Commercial Clients</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We understand the high standards required for commercial properties and professional sports facilities.
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
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Our Focus</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Specialist Services Delivered
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
              Keep Your Facilities in Peak Condition
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Partner with Zenako for reliable, professional maintenance of your commercial property or sports facilities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Contact Our Commercial Team
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
