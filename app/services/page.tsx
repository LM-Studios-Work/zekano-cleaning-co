import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Home, Building2, Sofa, Wrench, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Zenako Cleaning Co.",
  description: "Professional cleaning services in Johannesburg — residential cleaning, commercial cleaning, upholstery & fabric cleaning, and specialised cleaning services. Serving Sandton, Randburg, Fourways, Midrand, Bryanston, and Johannesburg North.",
}

const serviceCategories = [
  {
    id: "residential-cleaning",
    icon: Home,
    category: "Residential Cleaning",
    description: "Keep your home spotless with our trusted residential cleaning services. From routine maintenance to thorough deep cleans, we take care of it all.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    services: [
      {
        title: "Standard House Cleaning",
        description: "Regular weekly, fortnightly, or monthly cleaning to keep your home fresh and tidy. Dusting, vacuuming, mopping, bathroom and kitchen cleaning included.",
      },
      {
        title: "Deep Cleaning",
        description: "A full top-to-bottom clean that reaches every surface, appliance interior, and hidden corner. We strip away built-up grime so the space feels brand new.",
      },
      {
        title: "Move-in / Move-out Cleaning",
        description: "Whether you're handing back keys or settling into a new place, we make sure the property is spotless from floor to ceiling for a seamless transition.",
      },
    ],
  },
  {
    id: "commercial-cleaning",
    icon: Building2,
    category: "Commercial Cleaning",
    description: "A clean workspace keeps your team healthy and your clients impressed. We offer reliable commercial cleaning tailored to your business schedule.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    services: [
      {
        title: "Office Cleaning",
        description: "Daily or weekly cleaning for offices of all sizes. Desks, workstations, reception areas, restrooms, and common spaces fully maintained.",
      },
      {
        title: "Small Business Cleaning",
        description: "Affordable cleaning solutions for small businesses, retail shops, and commercial spaces. Flexible scheduling including after-hours service.",
      },
    ],
  },
  {
    id: "upholstery-cleaning",
    icon: Sofa,
    category: "Upholstery & Fabric Cleaning",
    description: "Refresh your soft furnishings and fabrics with our professional cleaning service. We remove stains, allergens, and odours to extend the life of your furniture.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    services: [
      {
        title: "Sofa Cleaning",
        description: "Deep cleaning for all types of sofas and couches. We remove stains, dust mites, and odours, leaving your sofa fresh and hygienic.",
      },
      {
        title: "Mattress Cleaning",
        description: "Professional mattress sanitisation to remove allergens, dust mites, and bacteria. Improve your sleep quality with a deep-cleaned mattress.",
      },
      {
        title: "Curtain Cleaning",
        description: "On-site or off-site curtain cleaning that removes dust, allergens, and stains without damaging delicate fabrics.",
      },
      {
        title: "Carpet Cleaning",
        description: "Expert carpet cleaning that removes deep stains, allergens, and odours. Your carpets will look and feel brand new.",
      },
      {
        title: "Upholstery Cleaning",
        description: "Comprehensive cleaning for chairs, ottomans, cushions, and other upholstered furniture. Safe for all fabric types.",
      },
    ],
  },
  {
    id: "specialised-cleaning",
    icon: Wrench,
    category: "Specialised Cleaning Services",
    description: "Beyond standard cleaning, we offer a range of specialised services to keep your property in top condition inside and out.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
    services: [
      {
        title: "Roof Cleaning",
        description: "Professional roof cleaning to remove moss, algae, and built-up dirt. Extend the life of your roof and improve your property's appearance.",
      },
      {
        title: "Drain Cleaning",
        description: "Clear blocked drains and prevent future clogs. We use professional equipment to restore proper drainage throughout your property.",
      },
      {
        title: "Garden Clean-ups",
        description: "Tidy up your outdoor spaces with our garden clean-up service. Clearing, trimming, and general maintenance to make your garden presentable.",
      },
      {
        title: "Pest Control",
        description: "Targeted pest treatments using eco-friendly products safe for your family and pets. Ants, cockroaches, rodents, bed bugs, and more.",
      },
      {
        title: "Disinfection Services",
        description: "Thorough disinfection and sanitisation for homes and businesses. Eliminate bacteria, viruses, and germs from all surfaces.",
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Page Title */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>What We Do</span>
            <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
              Our <span style={{ color: "#1A9AD2" }}>Services</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              From regular house cleans to specialised services, Zenako Cleaning Co. handles the hard work so you don't have to. Professional cleaning services across Johannesburg and surrounding areas.
            </p>
            <div className="mt-4 h-1 w-24 bg-gray-300"></div>
          </div>
        </section>

        {/* Services List by Category */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-24">
              {serviceCategories.map((category, catIdx) => (
                <div key={category.id} id={category.id}>
                  {/* Category Header */}
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12`}>
                    <div className={catIdx % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src={category.image}
                          alt={category.category}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className={catIdx % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{category.category}</h2>
                      </div>
                      <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                    </div>
                  </div>

                  {/* Individual Services */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <Card key={service.title} className="border-border">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-3 mb-3">
                            <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                            <h3 className="font-bold text-foreground">{service.title}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed pl-8">{service.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Book CTA per category */}
                  <div className="mt-8">
                    <Link
                      href="/book"
                      className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                      style={{ backgroundColor: "#6fbf00" }}
                    >
                      Book {category.category}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <Card className="border-0" style={{ backgroundColor: "#1A9AD2" }}>
              <CardContent className="p-8 lg:p-12 text-center">
                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                  Not Sure Which Service You Need?
                </h2>
                <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
                  Send us a message or give us a call. We'll walk through your requirements and recommend the right option — or create a custom cleaning package tailored to your needs.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center rounded px-8 py-3.5 text-sm font-semibold text-white border-2 border-white/70 hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    Call 084 402 0733
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
