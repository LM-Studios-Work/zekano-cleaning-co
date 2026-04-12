import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckIcon, PhoneIcon, ShieldCheckIcon, ChatIcon } from "@/components/icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Professional Office Cleaning Services in Johannesburg | Zenako",
  description:
    "Tailored office cleaning for businesses in Sandton, Randburg, Fourways, Midrand, and Bryanston. Owner-supervised, vetted professionals, and no lock-in contracts.",
}

const solutions = [
  {
    title: "Workspaces & Surfaces",
    image: "/office/office.webp",
    points: [
      "Dusting and sanitising desks and workstations",
      "Cleaning monitors and equipment surfaces",
      "Emptying bins and recycling management",
      "Vacuuming and mopping common areas",
      "Cleaning meeting and boardrooms",
    ],
  },
  {
    title: "Restrooms & Hygiene",
    image: "/office/restroom.webp",
    points: [
      "Thorough sanitisation of all toilets and basins",
      "Polishing mirrors and chrome fixtures",
      "Refilling soap and paper dispensers",
      "Deep cleaning of floors and tiles",
      "Odour control and freshening",
    ],
  },
  {
    title: "Kitchens & Reception",
    image: "/office/reception.webp",
    points: [
      "Sanitising kitchen counters and sinks",
      "Cleaning appliance exteriors",
      "Wiping down breakroom tables",
      "Polishing reception desks and glass",
      "Dusting waiting area furniture",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Direct Owner Supervision",
    description: "Unlike large app-based services, you have direct access to our management. We handle accountability personally and fairly.",
  },
  {
    title: "Vetted & Familiar Professionals",
    description: "We provide 100% vetted professionals and ensure you have the same familiar faces for each visit to build trust.",
  },
  {
    title: "No Lock-in Contracts",
    description: "We believe our quality should keep you coming back, not a contract. Pause or adjust your service as your routine changes.",
  },
  {
    title: "Healthier Workplace",
    description: "Reduce illness-related absences and support a safer office environment with our eco-friendly cleaning methods.",
  },
]

const faqs = [
  {
    question: "What do office cleaning services include?",
    answer: "Our services typically cover dusting, vacuuming, sanitising surfaces, restroom cleaning, and rubbish removal. We customise each package to suit your specific priorities, such as carpet cleaning or window washing.",
  },
  {
    question: "How often should I book?",
    answer: "We offer daily, weekly, and periodic deep cleans based on your business traffic and requirements. Most small to medium offices find 2-3 times per week maintains a perfect balance.",
  },
  {
    question: "Do you use eco-friendly products?",
    answer: "Yes, we use nature-friendly cleaning products to deliver effective results while minimising environmental impact and ensuring a chemical-free scent for your employees.",
  },
]

export default function OfficeCleaningPage() {
  return (
    <>
      <Header />
      <main className="pt-24 text-foreground">
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
                  Commercial Cleaning Johannesburg
                </span>
                <h1 className="mt-2 text-4xl font-bold sm:text-5xl text-balance">
                  Professional <span style={{ color: "#1A9AD2" }}>Office Cleaning</span> Services in Johannesburg
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Your workplace says a lot about your business. A clean, well-maintained office not only creates a positive first impression for clients but also boosts team morale and supports a healthier work environment.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Request a Quote
                  </Link>
                  <Link
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold border border-input transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call 084 402 0733
                  </Link>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src="/office/office cleaning hero.webp"
                  alt="Professional office cleaning in Johannesburg by Zenako"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Section */}
        <section className="py-12 bg-white border-y border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Service Coverage</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Serving businesses across Johannesburg, Sandton, Randburg, Fourways, Midrand, and Bryanston, our tailored solutions ensure your office looks its best every day. Whether you manage a corporate office, a small business, or a multi-site organisation, we have the expertise and team to support your needs.
            </p>
          </div>
        </section>

        {/* Why Choose Zenako */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Why Zenako</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-balance">
                Why Choose Zenako’s <span style={{ color: "#1A9AD2" }}>Office Cleaning?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div key={idx} className="p-8 bg-white border border-border transition-shadow hover:shadow-md">
                  <div className="flex items-center justify-center w-12 h-12 mb-6" style={{ backgroundColor: "#6fbf00" }}>
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Solutions Checklist */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Checklist</span>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl text-balance">
                Customised Office Cleaning Solutions
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                No two workplaces are the same. We provide tailored cleaning plans that match your schedule, budget, and priorities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solutions.map((section, idx) => (
                <div key={idx} className="border border-border overflow-hidden bg-background">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={section.image}
                      alt={`Office cleaning ${section.title}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-4 border-b border-border pb-3">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex gap-3 items-start">
                          <CheckIcon className="h-4 w-4 shrink-0 mt-0.5" style={{ color: "#6fbf00" }} />
                          <span className="text-sm text-muted-foreground leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-16 bg-background border-y border-border">
          <div className="mx-auto max-w-3xl px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Local Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              If you’re searching for "office cleaning services near me" in Johannesburg, Zenako Cleaning Co. has you covered. We are locally based, fully insured, and dedicated to long-term partnerships built on trust and transparency.
            </p>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left font-bold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white/10">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl lg:text-3xl font-bold text-white">Partner with Zenako Cleaning Co.</h2>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/90 text-sm lg:text-base">
                  <p><strong>Email:</strong> info@zenakocleaning.co.za</p>
                  <p><strong>Phone:</strong> +27 84 402 0733</p>
                  <p><strong>Address:</strong> Johannesburg, Gauteng, ZA</p>
                </div>
              </div>
              <div className="shrink-0">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
