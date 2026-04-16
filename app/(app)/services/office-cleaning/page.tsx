import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Professional Office Cleaning Services in Johannesburg | Zenako",
  description:
    "Your workplace says a lot about your business. A clean, well-maintained office creates a positive first impression. Serving Sandton, Randburg, Fourways, Midrand, and Bryanston.",
}

const whyUsPoints = [
  {
    title: "Direct Owner Supervision",
    description: "Unlike large app-based services, you have direct access to our management. We handle accountability personally and fairly, treating your workspace with the same care we would our own.",
  },
  {
    title: "Vetted & Familiar Professionals",
    description: "We provide 100% vetted professionals and, for consistency and trust, we ensure you have familiar professionals for each visit.",
  },
  {
    title: "No Lock-in Contracts",
    description: "We believe our quality should keep you coming back, not a contract. Pause or adjust your service as your routine changes.",
  },
  {
    title: "Promote a Healthier Workplace",
    description: "Reduce illness-related absences and support a safer office environment with our eco-friendly, nature-friendly cleaning methods.",
  },
]

const servicesList = [
  "General office cleaning (desks, floors, surfaces)",
  "Restroom cleaning and sanitation",
  "Kitchen and breakroom cleaning",
  "Carpet and upholstery cleaning",
  "Window and glass cleaning",
  "Waste removal and recycling",
]

const faqs = [
  {
    id: "include",
    question: "What do office cleaning services include?",
    answer: "Our services typically cover dusting, vacuuming, sanitising surfaces, restroom cleaning, and rubbish removal. We customise each package to suit your specific needs.",
  },
  {
    id: "often",
    question: "How often should I book?",
    answer: "We offer daily, weekly, and periodic deep cleans based on your business traffic and requirements.",
  },
  {
    id: "eco",
    question: "Do you use eco-friendly products?",
    answer: "Yes, we use nature-friendly cleaning products to deliver effective results while minimising environmental impact.",
  },
]

export default function OfficeCleaningPage() {
  const otherServices = getRelatedServices("office-cleaning", 3)

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
              <span className="text-foreground font-medium">Office Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#6fbf00" }}>
                  Office Cleaning
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Office Cleaning Services{" "}
                  <span style={{ color: "#1A9AD2" }}>in Johannesburg</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Your workplace says a lot about your business. A clean, well-maintained office not
                  only creates a positive first impression for clients but also boosts team morale
                  and supports a healthier work environment. At Zenako Cleaning Co., we deliver
                  professional office cleaning services designed to keep your workplace spotless,
                  safe, and welcoming.
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
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src="/office/office hero.webp" 
                  alt="Professional office cleaning in Johannesburg by Zenako" 
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
                Why Choose Zenako’s <span style={{ color: "#1A9AD2" }}>Office Cleaning?</span>
              </h2>
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

        {/* Customised Office Cleaning Solutions */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
                  Services
                </span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Customised Office Cleaning Solutions
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  No two workplaces are the same. We provide tailored cleaning plans that match your
                  schedule, budget, and priorities. Our services cover:
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {servicesList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 border border-border bg-background"
                    >
                      <CheckIcon className="h-5 w-5 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image 
                  src="/office/office 2.jpg" 
                  alt="Customised Office Cleaning Solutions" 
                  fill 
                  className="object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Coverage & Local Expertise */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                  <div className="p-8 lg:p-10 bg-white border border-border shadow-sm flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Service Coverage</h3>
                      <p className="text-muted-foreground leading-relaxed">
                          Serving businesses across Johannesburg, Sandton, Randburg, Fourways, Midrand, and Bryanston, our tailored solutions ensure your office looks its best every day. Whether you manage a corporate office, a small business, or a multi-site organisation, we have the expertise and team to support your needs.
                      </p>
                  </div>
                  <div className="relative min-h-[300px] overflow-hidden shadow-lg">
                      <Image 
                        src="/office/office 3.jpg" 
                        alt="Zenako Office Cleaning Expertise" 
                        fill 
                        className="object-cover" 
                      />
                  </div>
                  <div className="p-8 lg:p-10 bg-white border border-border shadow-sm flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-foreground mb-4">Local Expertise</h3>
                      <p className="text-muted-foreground leading-relaxed">
                          If you&apos;re searching for &quot;office cleaning services near me&quot; in Johannesburg, Zenako Cleaning Co. has you covered. We are locally based, fully insured, and dedicated to long-term partnerships built on trust and transparency.
                      </p>
                  </div>
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
              Have questions about your office clean? We&apos;ve answered the most common ones below.
            </p>
            <div className="border border-border bg-background px-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id}>
                    <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5 text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed pb-4">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact info Banner */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-balance">
                  Partner with Zenako Cleaning Co.
                </h2>
                <div className="mt-4 flex flex-col gap-2 text-white/90">
                    <div><strong>Email:</strong> info@zenakocleaning.co.za</div>
                    <div><strong>Phone:</strong> +27 84 402 0733</div>
                    <div><strong>Address:</strong> Johannesburg, Gauteng, ZA</div>
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
