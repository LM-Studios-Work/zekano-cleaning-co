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
    title: "Garden Maintenance",
    image: "/new services/Garden Maintenance.webp",
    items: [
      "Thorough weeding and soil turning",
      "Pruning and deadheading of flowers",
      "Leaf clearing and overall garden tidy up",
      "Mulching and compost application",
      "Pest identification and organic remedies",
    ],
  },
  {
    title: "Lawn Care & Maintenance",
    image: "/new services/Lawn mowing (1).webp",
    items: [
      "Regular lawn mowing and crisp edge trimming",
      "Targeted fertilising and weed control treatments",
      "Lime treatment for optimal pH balance",
      "Organic fertilisation options for healthy soil",
      "Aeration to improve water and nutrient flow",
    ],
  },
  {
    title: "Moss Control",
    image: "/new services/Garden Clean Up.webp",
    items: [
      "Identifying and safely removing moss build up",
      "Treating the root cause of moss growth",
      "Specialised seasonal care for shaded lawn areas",
      "Improving drainage to prevent future growth",
      "Ensuring a vibrant green lawn all year",
    ],
  },
  {
    title: "Turf Supply & Installation",
    image: "/new services/Garden Makeover.webp",
    items: [
      "Instant lawn supply and professional installation",
      "Premium artificial grass and turf fitting",
      "Comprehensive site preparation and leveling",
      "Base compacting for synthetic options",
      "Long term maintenance and care advice",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Expert Horticulturists",
    description: "Our team understands the local climate and soil conditions in Johannesburg, ensuring your plants and lawns thrive.",
    icon: "CheckIcon",
  },
  {
    title: "Tailored Care Plans",
    description: "We do not believe in one size fits all. We assess your garden and create a maintenance plan specifically for your property.",
    icon: "CheckIcon",
  },
  {
    title: "Premium Products",
    description: "We use high quality organic fertilisers and safe weed control products to protect your family and the environment.",
    icon: "CheckIcon",
  },
  {
    title: "Reliable Scheduling",
    description: "Whether you need weekly mowing or seasonal overhauls, our teams arrive on time and fully equipped for the job.",
    icon: "CheckIcon",
  },
]


const faqs = [
  {
    id: "frequency",
    question: "How often should I have my lawn mowed?",
    answer: "During the growing season, weekly mowing is recommended for optimal health. In cooler months, fortnightly or monthly mowing is usually sufficient. We adjust our schedule based on your lawn's specific needs.",
  },
  {
    id: "artificial",
    question: "Do you install artificial grass?",
    answer: "Yes, we supply and install high quality artificial grass. Our team handles the full process from site clearing and leveling to the final installation.",
  },
  {
    id: "organic",
    question: "Are your fertilisers safe for pets?",
    answer: "We offer organic fertilisation options that are completely safe for pets and children once applied. We will always advise you on safety protocols for any treatments used.",
  },
]

export default async function GardenAndLawnService() {
  const payload = await getPayload({ config: configPromise })
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = "/new services/Garden Makeover.webp"

  const otherServices = getRelatedServices("garden-lawn", 3)

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
              <span className="text-foreground font-medium">Garden & Lawn Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Garden & Lawn Services
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Garden Care in Johannesburg
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Keep your outdoor spaces vibrant and healthy all year. From routine lawn mowing to specialised weed control and instant turf installation, our expert teams deliver outstanding results.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20chat%20about%20Regular%20Garden%20Maintenance%20%2F%20a%20Once-off%20Clean-up."
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
                  alt="Professional garden and lawn maintenance"
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
                Why Trust Us With <span style={{ color: "#1A9AD2" }}>Your Garden</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We combine horticultural knowledge with reliable service to ensure your property always looks its best.
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
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Features</span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Our Comprehensive Lawn & Garden Services
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
            <p className="text-lg text-muted-foreground text-center mb-12">
              Learn more about our gardening approaches.
            </p>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Transform Your Garden?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Get in touch today for a tailored quote and bring life back to your outdoor spaces.
            </p>
            <a
href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20chat%20about%20Regular%20Garden%20Maintenance%20%2F%20a%20Once-off%20Clean-up."
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
