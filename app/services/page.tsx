import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, HouseIcon, OfficeIcon, CouchIcon, WrenchIcon, ArrowRightIcon } from "@/components/icons"
import { allServices } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Our Services | Zenako Cleaning Co.",
  description: "Professional cleaning services in Johannesburg — residential cleaning, commercial cleaning, upholstery & fabric cleaning, and specialised cleaning services. Serving Sandton, Randburg, Fourways, Midrand, Bryanston, and Johannesburg North.",
}

const categoryIcons: Record<string, typeof HouseIcon> = {
  "residential-cleaning": HouseIcon,
  "commercial-cleaning": OfficeIcon,
  "upholstery-and-fabric": CouchIcon,
  "specialised-cleaning": WrenchIcon,
}

const categories = [
  {
    slug: "residential-cleaning",
    name: "Residential Cleaning",
    description: "Keep your home spotless with our trusted residential cleaning services. From routine maintenance to thorough deep cleans, we take care of it all.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    description: "A clean workspace keeps your team healthy and your clients impressed. We offer reliable commercial cleaning tailored to your business schedule.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    slug: "upholstery-and-fabric",
    name: "Upholstery & Fabric Cleaning",
    description: "Refresh your soft furnishings and fabrics with our professional cleaning service. We remove stains, allergens, and odours to extend the life of your furniture.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
  },
  {
    slug: "specialised-cleaning",
    name: "Specialised Cleaning Services",
    description: "Beyond standard cleaning, we offer a range of specialised services to keep your property in top condition inside and out.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80",
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

        {/* Services by Category */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="space-y-24">
              {categories.map((category, catIdx) => {
                const Icon = categoryIcons[category.slug]
                return (
                  <div key={category.slug}>
                    {/* Category Header */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
                      <div className={catIdx % 2 === 1 ? "lg:order-2" : ""}>
                        <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                          <Image
                            src={category.image}
                            alt={category.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className={catIdx % 2 === 1 ? "lg:order-1" : ""}>
                        <div className="flex items-center gap-3 mb-4 transition-colors hover:text-[#1A9AD2]">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}>
                            <Icon className="h-6 w-6" />
                          </div>
                          <Link href={`/services/${category.slug}`}>
                            <h2 className="text-2xl font-bold text-foreground sm:text-3xl hover:text-[#1A9AD2] transition-colors">{category.name}</h2>
                          </Link>
                        </div>
                        <p className="text-lg text-muted-foreground mb-6">{category.description}</p>
                        <Link href={`/services/${category.slug}`} className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors h-11 px-8 py-2 bg-[#6fbf00] text-white hover:bg-[#5da200] mt-2 shadow-sm">
                          Explore {category.name} <ArrowRightIcon className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
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
