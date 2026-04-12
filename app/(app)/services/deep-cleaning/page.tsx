import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Professional Deep Cleaning Services in Johannesburg | Zenako",
  description:
    "Detail-focused deep cleaning for a fresh, hygienic home. Owner-supervised teams serving Sandton, Randburg, Fourways, Midrand, Bryanston, and Johannesburg. 100% Satisfaction Guarantee.",
}

const includedSections = [
  {
    title: "Kitchen",
    image: "/deep cleaning/cleaning-kitchen-sink-drain.webp",
    points: [
      "Outside of all appliances wiped down",
      "Wet-wipe fridge and oven exterior",
      "Cupboards and drawers cleaned outside",
      "Stove surfaces cleaned and degreased",
      "Sink scrubbed and sanitised",
      "Microwave cleaned inside and out",
    ],
  },
  {
    title: "Bathrooms",
    image: "/deep cleaning/bathroom.webp",
    points: [
      "Toilets scrubbed and sanitised",
      "Bathtub and shower thoroughly cleaned",
      "Taps and chrome fittings polished",
      "Mirrors cleaned streak-free",
      "Lint removal from exhaust fans",
      "Detailed floor cleaning and mopping",
    ],
  },
  {
    title: "Common Areas & Bedrooms",
    image: "/deep cleaning/bedrooms.webp",
    points: [
      "Window frames and ledges wiped",
      "Skirting boards cleaned throughout",
      "Door frames dusted and wiped",
      "Light switches sanitised",
      "Ceiling fans and vents cleaned",
      "Cobweb removal from all areas",
    ],
  },
]

const addOns = [
  "Inside Oven",
  "Inside Fridge",
  "Carpet Steam Cleaning",
  "Inside Cupboards",
  "Wall Spot Cleaning",
]

const exclusions = [
  {
    id: "limitations",
    title: "Important Service Limitations",
    items: [
      "Chandeliers and decorative light fittings",
      "Light bulbs (removal or replacement)",
      "Biohazard or hazardous material clean-up",
      "Lifting or moving heavy furniture",
      "Deep stain removal requiring third-party specialists",
      "Rubbish bin cleaning",
    ],
  },
]

const whyUsPoints = [
  {
    title: "Owner-Supervised Service",
    description:
      "Every deep clean is overseen by our management. You deal directly with the owner with no call centres, no middlemen.",
  },
  {
    title: "Professional Trained Team",
    description:
      "Our vetted, background-checked professionals are trained specifically for detailed deep cleaning to the highest standard.",
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "If any checklist item is missed, we return within 24 hours at no cost. Your satisfaction is backed by our written guarantee.",
  },
  {
    title: "All Equipment Provided",
    description:
      "We arrive fully equipped with professional-grade, eco-conscious products. You don't need to supply a thing.",
  },
]

export default function DeepCleaningPage() {
  const otherServices = getRelatedServices("deep-cleaning", 3)
  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Breadcrumb */}
        <section className="py-4 bg-background border-b border-border">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-foreground transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Deep Cleaning</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="text-sm font-medium uppercase tracking-wider"
                  style={{ color: "#6fbf00" }}
                >
                  Johannesburg Deep Cleaning Specialists
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Professional Deep Cleaning{" "}
                  <span style={{ color: "#1A9AD2" }}>Services in Johannesburg</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Detail-focused cleaning for a fresh, hygienic home. Tailored for homeowners,
                  landlords, and estate agents in Sandton, Randburg, Fourways, Midrand, Bryanston,
                  and beyond.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book Your Deep Clean
                  </Link>
                  <a
                    href="tel:+27844020733"
                    className="inline-flex items-center justify-center gap-2 rounded-none px-8 py-3 text-sm font-bold text-foreground border border-input transition-colors duration-200"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Call Us Today
                  </a>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/deep cleaning/deep clean.webp"
                  alt="Professional deep cleaning service in Johannesburg by Zenako"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* REDESIGNED: Why Choose Us */}
        <section className="py-20 lg:py-28 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>
                Why Zenako
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                A Deep Clean You Can <span style={{ color: "#1A9AD2" }}>Trust</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Owner-supervised, professional teams delivering a guaranteed result every time. We bring the expertise, tools, and accountability so you can relax and enjoy a genuinely clean home.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="relative p-8 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 group overflow-hidden flex flex-col"
                >
                  {/* Subtle animated top border on hover */}
                  <div
                    className="absolute top-0 left-0 w-full h-1 transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ backgroundColor: idx % 2 === 0 ? "#1A9AD2" : "#6fbf00" }}
                  />
                  
                  {/* Clean Number Badge */}
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

        {/* What's Included - 3-Column with images on top */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6fbf00" }}
              >
                Checklist
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                {"What's"} Included in Your Deep Clean
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Our comprehensive room-by-room checklist ensures nothing is overlooked in your home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {includedSections.map((section, idx) => (
                <div key={idx} className="border border-border overflow-hidden bg-white">
                  {/* Image at top */}
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={section.image}
                      alt={`Deep cleaning ${section.title} in Johannesburg`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Content below image */}
                  <div className="p-6">
                    <h3 className="font-bold text-foreground text-xl mb-4 border-b border-border pb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.points.map((point, pointIdx) => (
                        <li key={pointIdx} className="flex gap-3 items-start">
                          <CheckIcon
                            className="h-4 w-4 shrink-0 mt-0.5"
                            style={{ color: "#6fbf00" }}
                          />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional Add-ons */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span
                  className="text-sm font-bold uppercase tracking-widest"
                  style={{ color: "#6fbf00" }}
                >
                  Optional Extras
                </span>
                <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                  Enhance Your Clean with Add-ons
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Customise your deep clean by adding any of the following extras to your booking.
                  Simply let us know when you book online or call us to discuss.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addOns.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 border border-border bg-background"
                    >
                      <span
                        className="text-xl font-bold shrink-0"
                        style={{ color: "#1A9AD2" }}
                      >
                        +
                      </span>
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                   src="/deep cleaning/deep clean.webp"
                  alt="Deep cleaning add-on services in Johannesburg"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* What's NOT Included - Accordion */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-10">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6fbf00" }}
              >
                Transparency
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                {"What's"} NOT Included
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                We believe in full transparency. The following are outside the scope of our standard
                deep clean service.
              </p>
            </div>
            <div className="border border-border bg-white px-6">
              <Accordion type="single" collapsible>
                {exclusions.map((item) => (
                  <AccordionItem key={item.id} value={item.id}>
                    <AccordionTrigger className="text-base font-bold text-foreground hover:no-underline py-5">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-3 pb-2">
                        {item.items.map((exclusion, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span
                              className="text-base font-bold shrink-0 mt-0.5"
                              style={{ color: "#1A9AD2" }}
                            >
                              -
                            </span>
                            <span className="text-sm text-muted-foreground leading-relaxed">
                              {exclusion}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-4 text-sm text-muted-foreground border-t border-border pt-4">
                        If you require any of the above, please contact us and we can advise on
                        specialist referrals or applicable add-on solutions.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 100% Satisfaction Guarantee Banner */}
        <section className="py-14 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-8 text-center lg:text-left">
              <div className="shrink-0 flex items-center justify-center w-20 h-20 bg-white/10">
                <ShieldCheckIcon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-white text-balance">
                  100% Satisfaction Guarantee
                </h2>
                <p className="mt-3 text-white/90 leading-relaxed text-base lg:text-lg max-w-3xl">
                  If any item on our deep cleaning checklist is missed or not completed to your
                  satisfaction, we will return to your property within{" "}
                  <strong className="text-white">24 hours</strong> at absolutely no extra cost. We
                  stand behind our work - every single clean, every single time.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white hover:opacity-90 whitespace-nowrap"
                  style={{ backgroundColor: "#6fbf00" }}
                >
                  Book Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 text-balance">
              Serving Johannesburg and Surrounding Areas
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our deep cleaning teams are available across the greater Johannesburg region, including:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Sandton",
                "Randburg",
                "Fourways",
                "Midrand",
                "Bryanston",
                "Johannesburg CBD",
                "Roodepoort",
                "Northcliff",
              ].map((area) => (
                <span
                  key={area}
                  className="px-5 py-2 border border-border text-sm font-medium text-foreground bg-background"
                >
                  {area}
                </span>
              ))}
            </div>
            <div className="mt-10">
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white hover:opacity-90"
                style={{ backgroundColor: "#6fbf00" }}
              >
                Book Your Deep Clean Today
              </Link>
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
