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
import { FaqAccordion } from "../garden-lawn/faq-accordion"
import { GoogleReviewsCTA } from "@/components/google-reviews-cta"

const inspectionItems = [
  {
    title: "Artificial Grass Supply & Installation",
    image: "/garden/Artifical grass installation.webp",
    items: [
      "Professional artificial grass supply and fitting",
      "Site preparation, levelling and base work",
      "Seam joining and edge finishing",
      "Infill and brushing for a natural look",
      "Advice on the right product for your space",
    ],
  },
  {
    title: "Artificial Grass Cleaning",
    image: "/garden/Artificial Grass Cleaning_ Before & After.webp",
    items: [
      "Deep cleaning of synthetic turf fibres",
      "Removal of dust, debris and organic build-up",
      "Deodorising and freshening treatments",
      "Restoring pile and colour vibrancy",
      "Regular maintenance plans available",
    ],
  },
  {
    title: "Moss & Algae Removal",
    image: "/garden/Artificial Grass Cleaning_ Before & After.webp",
    items: [
      "Safe removal of moss and algae growth",
      "Treatment to prevent future build-up",
      "Specialised products for synthetic surfaces",
      "Restoring drainage and water flow",
      "Keeping your lawn green and clean",
    ],
  },
  {
    title: "Stain Removal",
    image: "/garden/Artifical grass installation.webp",
    items: [
      "Targeted stain treatment for artificial turf",
      "Removal of food, drink and pet stains",
      "Oil and grease stain treatment",
      "Colour-safe cleaning solutions",
      "Spot cleaning and full-surface treatment",
    ],
  },
  {
    title: "Refresh & Sanitise",
    image: "/garden/Artificial Grass Cleaning_ Before & After.webp",
    items: [
      "Full sanitisation of artificial grass surfaces",
      "Anti-bacterial treatment for pet areas",
      "UV-safe deodorising application",
      "Pile lifting and grooming",
      "Leaving your lawn looking and smelling fresh",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Specialist Knowledge",
    description: "Our team understands artificial grass products and the best methods for installation, cleaning and long-term maintenance.",
    icon: "CheckIcon",
  },
  {
    title: "Quality Products",
    description: "We supply and install high-quality artificial grass suited to the Johannesburg climate and your specific requirements.",
    icon: "CheckIcon",
  },
  {
    title: "Thorough Cleaning",
    description: "Our cleaning process removes embedded dirt, moss and bacteria without damaging the turf fibres or backing.",
    icon: "CheckIcon",
  },
  {
    title: "Reliable Service",
    description: "From installation to ongoing maintenance, we deliver consistent, professional results every time.",
    icon: "CheckIcon",
  },
]

const faqs = [
  {
    id: "lifespan",
    question: "How long does artificial grass last?",
    answer: "High-quality artificial grass typically lasts 10 to 15 years with proper care. Regular cleaning and maintenance can extend its lifespan even further.",
  },
  {
    id: "cleaning-frequency",
    question: "How often should artificial grass be cleaned?",
    answer: "We recommend a professional deep clean every 6 to 12 months, depending on usage and whether you have pets. Light maintenance such as brushing and rinsing can be done more frequently.",
  },
  {
    id: "pets",
    question: "Is artificial grass safe for pets?",
    answer: "Yes, artificial grass is pet-friendly. Our sanitisation treatments neutralise odours and bacteria, keeping the surface hygienic for pets and children.",
  },
]

export default async function ArtificialGrassService() {
  const payload = await getPayload({ config: configPromise })
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = "/garden/Artifical grass installation.webp"

  const otherServices = getRelatedServices("artificial-grass", 3)

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
              <span className="text-foreground font-medium">Artificial Grass Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Artificial Grass Services
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Artificial Grass Installation & Cleaning
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  From professional artificial grass installation to cleaning, stain removal and maintenance, Zenako helps keep synthetic lawns looking fresh, clean and well maintained.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Artificial%20Grass%20Installation%20or%20Cleaning."
target="_blank"
rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
<i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
Chat on WhatsApp
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
                  alt="Artificial Grass Installation and Cleaning"
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
                Why Trust Us With <span style={{ color: "#1A9AD2" }}>Your Artificial Grass</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We combine specialist knowledge with reliable service to keep your synthetic lawn looking its best.
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
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Services</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Our Artificial Grass Services
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
            <p className="text-lg text-muted-foreground text-center mb-12">
              Common questions about artificial grass installation and maintenance.
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready for Fresh Artificial Grass?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Get in touch today for a quote on artificial grass installation, cleaning or maintenance.
            </p>
            <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20Artificial%20Grass%20Installation%20or%20Cleaning."
target="_blank"
rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
<i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
Chat on WhatsApp
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
