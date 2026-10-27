import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon } from "@/components/icons"
import { allServices } from "@/lib/services-data"
import { getServiceDetailImageMap } from "@/lib/cms-images"

export const metadata: Metadata = {
  title: "Top-Rated Property Services in Johannesburg | Zenako",
  description: "Comprehensive property care including landscaping, garden maintenance, and specialist commercial services.",
  alternates: {
    canonical: "/services/property-services",
  },
}

const categorySlug = "property-services"
const categoryName = "Property Services"
const categoryDesc = "Complete property solutions for residential and commercial clients across Johannesburg. Zenako is your one point of contact for cleaning, gardens, landscaping, and building maintenance."
const categoryImage = "/new services/Zenako Garden Care Team.webp"

export default async function PropertyServicesHub() {
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = categoryImage

  const categoryServices = allServices.filter((s) => s.categorySlug === categorySlug)
  const otherServices = allServices.filter((s) => s.categorySlug !== categorySlug).slice(0, 3)

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

        {/* SEO Optimized Hero */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Johannesburg Premier Property Care
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  {categoryName} &amp; <span style={{ color: "#1A9AD2" }}>Facility Care</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {categoryDesc} Proudly serving homes, estates, office parks, and commercial facilities in Sandton, Randburg, Fourways, Midrand, Bryanston, and greater Johannesburg.
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
                    href="tel:+27657018482"
                    className="btn-lift inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-sm font-bold text-foreground border-2 border-foreground hover:bg-foreground hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-xl">
                <Image src={heroImage} alt={`Professional ${categoryName} in Johannesburg`} fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Explore Our <span style={{ color: "#1A9AD2" }}>{categoryName}</span> Options
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Select a specific service below to learn more about our process, what's included, and the benefits of choosing Zenako.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group">
                  <Card className="border-border h-full transition-shadow duration-200 group-hover:shadow-lg">
                    <div className="aspect-[3/2] relative overflow-hidden">
                      <Image
                        src={detailImageMap[service.slug] ?? service.image}
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
                <h3 className="text-lg font-bold text-foreground mb-2">Do I need to be home during the cleaning?</h3>
                <p className="text-muted-foreground text-sm">No, you do not. Many of our clients provide us with a spare key or access instructions so we can clean while they are at work or out.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">Do you provide your own cleaning supplies?</h3>
                <p className="text-muted-foreground text-sm">Yes, we bring all of our own professional-grade, eco-friendly cleaning supplies and equipment. You don't need to provide anything.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-border">
                <h3 className="text-lg font-bold text-foreground mb-2">Are your cleaners background-checked?</h3>
                <p className="text-muted-foreground text-sm">Yes. Every professional we deploy is background-checked and completes thorough training before working in any client property.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 lg:py-16" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Improve Your Property?
            </h2>
            <p className="text-white mb-8 max-w-2xl mx-auto">
              Tell us what you need and we&apos;ll help you find the right service for your home or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#ffffff", color: "#1A9AD2" }}
              >
                GET A FREE QUOTE TODAY
              </Link>
              <a
                href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20a%20quote%20for%20your%20property%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-[#1A9AD2] transition-colors duration-200"
              >
                <i className="fa-brands fa-whatsapp mr-2 text-lg"></i>
                CHAT ON WHATSAPP
              </a>
            </div>
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
