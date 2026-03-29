import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, PhoneIcon } from "@/components/icons"
import { allServices } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Upholstery & Fabric Cleaning Services in Johannesburg | Zenako",
  description: "Professional upholstery and fabric cleaning in Johannesburg. Sofa, mattress, curtain, and carpet deep cleaning. Safe, effective, and reliable.",
}

const categorySlug = "upholstery-and-fabric"
const categoryName = "Upholstery & Fabric Cleaning"
const categoryDesc = "Refresh your soft furnishings and fabrics with our professional cleaning service. We remove stains, allergens, and odours to extend the life of your furniture."
const categoryImage = "/cleaning images/Deep Carpet cleaning image 1.webp"

export default function UpholsteryFabricHub() {
  const categoryServices = allServices.filter((s) => s.categorySlug === categorySlug)

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
              <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">{categoryName}</span>
            </nav>
          </div>
        </section>

        {/* Hero */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Professional Fabric Care
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  {categoryName} <span style={{ color: "#1A9AD2" }}>Services</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {categoryDesc} Johannesburg's preferred premium upholstery cleaners.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book Online Now
                  </Link>
                  <a
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-bold text-foreground border border-input transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={categoryImage} alt={`Professional ${categoryName} in Johannesburg`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Our <span style={{ color: "#1A9AD2" }}>{categoryName}</span> Range
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="border-border h-full transition-shadow duration-200 group-hover:shadow-lg">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-foreground text-lg group-hover:text-[#1A9AD2] transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                        {service.description}
                      </p>
                      <span className="mt-3 inline-flex items-center text-sm font-medium" style={{ color: "#6fbf00" }}>
                        View Details <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Frequently Asked Questions About <span style={{ color: "#6fbf00" }}>{categoryName}</span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">How long does my sofa take to dry?</h3>
                <p className="text-muted-foreground text-sm">Thanks to our high-powered extraction machines, most upholstery and carpets typically dry within 3 to 6 hours depending on the room's ventilation.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">Are your cleaning chemicals safe for pets and babies?</h3>
                <p className="text-muted-foreground text-sm">Yes. We use eco-friendly, non-toxic cleaning solutions that are safe for children, pets, and all members of your household.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Book an Upholstery or Fabric Clean
            </h2>
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              Book an Appointment
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
