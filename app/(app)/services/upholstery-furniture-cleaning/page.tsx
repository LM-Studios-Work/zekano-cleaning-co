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
  title: "Professional Upholstery Cleaning Services in Johannesburg | Zenako",
  description:
    "Zenako Cleaning Co. provides safe and gentle professional cleaning services for all upholstered lounge suites and leather furnishings in Johannesburg.",
}

const importancePoints = [
  {
    title: "Long-Term Savings",
    description: "Regular maintenance of sofas and armchairs extends their lifespan, reducing the need for expensive reupholstering or replacement.",
  },
  {
    title: "Maintain Function & Comfort",
    description: "Proper care prevents high-end fabrics from becoming deformed or showing early signs of neglect.",
  },
  {
    title: "Aesthetic & Hygiene",
    description: "Professional cleaning keeps upholstery colours bright and textures intact while eliminating stains and grime that can degrade the furniture.",
  },
  {
    title: "Healthier Environment",
    description: "Regular professional cleaning eradicates mould, mildew, and dust that can build up in padding, improving indoor air quality for your family or staff.",
  },
]

const whyChooseUsPoints = [
  {
    title: "Direct Owner Supervision",
    description: "You have direct access to management, ensuring personal accountability and high standards for every job. We do not route disputes through call centres.",
  },
  {
    title: "100% Vetted Professionals",
    description: "All work is carried out by trained, background-checked experts who are familiar with complex fabric care.",
  },
  {
    title: "No Hidden Costs",
    description: "We offer upfront pricing with no price changes after quoting. You know exactly what you'll pay.",
  },
]

export default function UpholsteryCleaningPage() {
  const otherServices = getRelatedServices("upholstery-furniture-cleaning", 3)

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
              <span className="text-foreground font-medium">Upholstery Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Upholstery Cleaning
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Upholstery Cleaning{" "}
                  <span style={{ color: "#1A9AD2" }}>in Johannesburg</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Zenako Cleaning Co. provides safe and gentle professional cleaning services for all upholstered lounge suites and leather furnishings. Our process is designed to rejuvenate your furniture while ensuring it remains nourished and fresh.
                </p>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We utilize environmentally-friendly cleaning solutions to eradicate germs, bacteria, dust mites, and common allergens. Unlike standard services, our methods ensure that your upholstered furniture is left clean and able to dry quickly, minimizing disruption to your home or office.
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
                    href="tel:+27844020733"
                    className="btn-lift inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold text-foreground border-2 border-foreground hover:bg-foreground hover:text-white transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden shadow-lg">
                <Image 
                  src="/couch/couch hero.png" 
                  alt="Professional upholstery cleaning in Johannesburg" 
                  fill 
                  className="object-cover" 
                  priority 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="py-20 lg:py-28 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>
                Furniture Care
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Why Upholstery Cleaning is <span style={{ color: "#1A9AD2" }}>Important</span>
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {importancePoints.map((point, idx) => (
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

        {/* Pet Care & Setup */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative aspect-[3/4] lg:aspect-auto lg:h-[600px] overflow-hidden shadow-xl border border-border">
                  <Image 
                    src="/couch/couch.webp" 
                    alt="Pet friendly and protected upholstery" 
                    fill 
                    className="object-cover" 
                  />
              </div>
              <div className="order-1 lg:order-2">
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
                  Specialised Treatments
                </span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance mb-8">
                  Specialist Pet Care & <span style={{ color: "#1A9AD2" }}>Protection</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                  If your pets use your furniture, our upholstery cleaning service effectively removes odours and loose pet hair. We also offer specialised fabric protection and leather revitalisers to help maintain the condition of your furniture over the long term.
                </p>

                <div className="p-8 bg-gray-50/50 border border-border rounded-xl">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose a Professional Service?</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    DIY cleaning attempts often lead to unintended damage, such as fabric discolouration or texture ruin caused by unsuitable shop-bought products. At Zenako Cleaning Co., we provide:
                  </p>
                  
                  <div className="space-y-6">
                    {whyChooseUsPoints.map((point, idx) => (
                      <div key={idx} className="flex gap-4">
                        <CheckIcon className="h-6 w-6 flex-shrink-0" style={{ color: "#6fbf00" }} />
                        <div>
                          <h4 className="font-bold text-foreground text-lg">{point.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                  Ready to Rejuvenate Your Upholstery?
                </h2>
                <div className="mt-4 flex flex-col gap-2 text-white/90">
                    <div><strong>Phone:</strong> +27 84 402 0733</div>
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
