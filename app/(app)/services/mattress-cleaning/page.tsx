import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Professional Mattress Cleaning in Johannesburg | Zenako",
  description:
    "Zenako Cleaning Co. provides specialized deep cleaning for all mattress sizes and types to restore a healthy sleeping environment in Johannesburg.",
}

const whyUsPoints = [
  {
    title: "Owner-Backed Accountability",
    description: "We do not route disputes through call centres. You have direct access to our management, ensuring your home is treated with personal care and accountability.",
  },
  {
    title: "Vetted Professionals",
    description: "All services are performed by 100% vetted and trained professionals with years of experience in fabric care and sanitization.",
  },
  {
    title: "Safety First",
    description: "We use non-toxic, nature-friendly cleaning solutions that are safe for children, pets, and individuals with respiratory sensitivities.",
  },
  {
    title: "Transparent Service",
    description: "We offer upfront pricing with no hidden fees and no lock-in contracts.",
  },
]

const healthBenefits = [
  {
    title: "Allergen Removal",
    description: "Effectively eliminates common triggers for allergic reactions and asthma, such as dust mites and dead skin cells.",
  },
  {
    title: "Odour Neutralization",
    description: "Potent, safe detergents dissolve stains from perspiration and spills, while deodorizing agents remove unwanted odours.",
  },
  {
    title: "Air Quality",
    description: "Deep cleaning removes accumulated pollutants, improving the indoor air quality of your bedroom.",
  },
  {
    title: "Prolonged Lifespan",
    description: "Regular professional maintenance helps preserve the structural integrity and comfort of your mattress over time.",
  },
]

const cleaningMethods = [
  {
    title: "Hot Water Extraction",
    description: "High-pressure steam and detergents are used to flush out deep-seated soil and sweat layers. A specialized attachment prevents overwetting, and powerful extraction removes most moisture for faster drying.",
  },
  {
    title: "Dry Cleaning",
    description: "For moisture-sensitive materials like memory foam, we use specialized solvents and professional machines with rotating brushes to dislodge debris without the risk of mould or foam damage.",
  },
]

const processSteps = [
  {
    title: "Inspection & pH Testing",
    description: "We inspect the fabric and test stain pH levels to determine the most effective, fiber-appropriate cleaning solution.",
  },
  {
    title: "Pre-treatment",
    description: "Targeted solutions are applied to heavy stains to break down oils and grime before deep cleaning.",
  },
  {
    title: "Deep Clean & Extraction",
    description: "We perform the chosen cleaning method, ensuring the removal of dislodged debris and cleaning agents.",
  },
  {
    title: "Final Check",
    description: "A thorough vacuuming and inspection ensure the mattress is fresh and revitalized.",
  },
]

export default function MattressCleaningPage() {
  const otherServices = getRelatedServices("mattress-cleaning", 3)

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
              <span className="text-foreground font-medium">Mattress Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Mattress Cleaning
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Mattress Cleaning{" "}
                  <span style={{ color: "#1A9AD2" }}>in Johannesburg</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  While bedding is washed regularly, mattresses often accumulate sweat, skin cells, and allergens that affect sleep quality and hygiene. Zenako Cleaning Co. provides specialized deep cleaning for all mattress sizes and types, including memory foam and spring, to restore a healthy sleeping environment.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Request a Quote
                  </Link>
                  <a
                    href="tel:+27657018482"
                    className="btn-lift inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold text-foreground border-2 border-foreground hover:bg-foreground hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden shadow-lg">
                <Image 
                  src="/matress/mattress-cleaning-services.webp" 
                  alt="Professional mattress cleaning in Johannesburg" 
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
                Why Choose Our <span style={{ color: "#1A9AD2" }}>Mattress Cleaning Service?</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="relative p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)]"
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

        {/* The Cleaning Process */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[600px] overflow-hidden shadow-xl border border-border">
                  <Image 
                    src="/matress/matress.jpg" 
                    alt="The Mattress Cleaning Process" 
                    fill 
                    className="object-cover" 
                  />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
                  How It Works
                </span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance mb-8">
                  The Service <span style={{ color: "#1A9AD2" }}>Process</span>
                </h2>
                <div className="space-y-8">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-5 group">
                      <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full font-bold text-white transition-opacity duration-300" style={{ backgroundColor: "#1A9AD2" }}>
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-xl">{step.title}</h4>
                        <p className="text-base text-muted-foreground mt-2 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits & Methods */}
        <section className="py-16 lg:py-24 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
                  Advantages
                </span>
                <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance mb-8">
                  Health & Hygiene <span style={{ color: "#6fbf00" }}>Benefits</span>
                </h2>
                <div className="space-y-6">
                  {healthBenefits.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 bg-white border border-border shadow-sm rounded-lg hover:shadow-md transition-shadow">
                      <CheckIcon className="h-6 w-6 flex-shrink-0 mt-1" style={{ color: "#6fbf00" }} />
                      <div>
                        <span className="font-bold text-foreground text-lg">{item.title}</span>
                        <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-8">
                <div className="aspect-[4/3] relative overflow-hidden shadow-lg border border-border rounded-xl">
                  <Image 
                    src="/matress/How-to-clean-your-mattress-feature-759x500.png" 
                    alt="Clean and comfortable mattress" 
                    fill 
                    className="object-cover" 
                  />
                </div>
                
                <div className="p-8 bg-white border border-border shadow-sm rounded-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Cleaning Methods</h3>
                  <div className="space-y-6">
                    {cleaningMethods.map((method, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-foreground flex items-center gap-2">
                           <ArrowRightIcon className="h-4 w-4" style={{ color: "#1A9AD2" }} />
                           {method.title}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-2 leading-relaxed pl-6">{method.description}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm italic text-muted-foreground mt-6 pt-4 border-t border-border">
                    We utilize two primary methods based on the specific type and condition of your mattress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact info Banner */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-balance">
                  Ready to Restore Your Healthy Sleep Environment?
                </h2>
                <div className="mt-4 flex flex-col gap-2 text-white/90">
                    <div><strong>Phone:</strong> +27 65 701 8482</div>
                    <div><strong>Email:</strong> info@zenakocleaning.co.za</div>
                    <div><strong>Service Areas:</strong> Johannesburg, Sandton, Randburg, Fourways, Midrand, and Bryanston</div>
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Contact Us Now
                </Link>
              </div>
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
                          src={related.image}
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
