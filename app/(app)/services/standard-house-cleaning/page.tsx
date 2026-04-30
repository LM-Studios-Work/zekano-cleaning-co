import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"

export const metadata: Metadata = {
  title: "Regular House Cleaning in Johannesburg | Zenako",
  description:
    "Reliable, owner-supervised regular house cleaning for Johannesburg households. No lock-in contracts. Same cleaner every visit. Serving Sandton, Randburg, Fourways, Midrand, and Bryanston.",
}

const checklistSections = [
  {
    title: "Kitchen & Living",
    image: "/house cleaning/kitchen.jpg",
    points: [
      "Dusting all surfaces and shelving",
      "Wiping appliance exteriors",
      "Sink scrubbed and sanitised",
      "Vacuuming floors and rugs",
      "Mopping hard-surface floors",
      "Tidying and spot-cleaning countertops",
    ],
  },
  {
    title: "Bathrooms",
    image: "/house cleaning/bathroom.webp",
    points: [
      "Sanitising toilets thoroughly",
      "Cleaning showers and bathtubs",
      "Polishing taps and chrome fittings",
      "Mirror cleaned streak-free",
      "Basins scrubbed and wiped",
      "Floor mopped and disinfected",
    ],
  },
  {
    title: "Bedrooms",
    image: "/house cleaning/bedroom.webp",
    points: [
      "Dusting all furniture surfaces",
      "Making beds (upon request)",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Emptying bins",
      "Spot-cleaning reachable surfaces",
    ],
  },
]

const addOns = [
  "Inside Oven",
  "Inside Fridge",
  "Window Cleaning",
  "Inside Cupboards",
  "Carpet Steam Cleaning",
]

const whyUsPoints = [
  {
    title: "Same Professional Each Visit",
    description:
      "Build trust and familiarity with a cleaner who knows your home and priorities. We send no strangers each time.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose weekly or fortnightly visits that fit your routine. No lock-in contracts so you can pause or reschedule as life changes.",
  },
  {
    title: "Tailored Priorities",
    description:
      "Focus on specific areas like pet zones or guest bathrooms, and rotate deeper tasks each visit based on your needs.",
  },
  {
    title: "Owner-Backed Accountability",
    description:
      "Direct access to management for any issue. No call centres, no middlemen, giving you honest, personal service.",
  },
]

const steps = [
  {
    number: "01",
    title: "Set Your Priorities",
    description:
      "Tell us which rooms need the most attention and any specific preferences or areas to focus on.",
  },
  {
    number: "02",
    title: "Choose Your Schedule",
    description:
      "Select weekly or fortnightly visits at a time that suits your household routine.",
  },
  {
    number: "03",
    title: "Maintenance Rotation",
    description:
      "We follow a consistent checklist and rotate deeper tasks like skirting boards or inside windows each visit.",
  },
  {
    number: "04",
    title: "Manage Easily",
    description:
      "Pause or reschedule with simple notice as your life changes. No lock-in contracts, ever.",
  },
]

export default function StandardHouseCleaningPage() {
  const otherServices = getRelatedServices("standard-house-cleaning", 3)
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
              <Link
                href="/services/residential-cleaning"
                className="hover:text-foreground transition-colors"
              >
                Residential Cleaning
              </Link>
              <span>/</span>
              <span className="text-foreground font-medium">Regular House Cleaning</span>
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
                  Regular House Cleaning Johannesburg
                </span>
                <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl text-balance">
                  Regular House Cleaning{" "}
                  <span style={{ color: "#1A9AD2" }}>in Johannesburg</span>
                </h1>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Reliable, owner-supervised home upkeep for busy households. Keep your home
                  consistently clean with vetted professionals you can trust, serving Sandton,
                  Randburg, Fourways, Midrand, and Bryanston.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:opacity-90"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    Book Your Regular Clean
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
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/house cleaning/house hero.webp"
                  alt="Regular house cleaning service in Johannesburg by Zenako"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* REDESIGNED: Why Choose Zenako */}
        <section className="py-20 lg:py-28 bg-gray-50/40">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>
                Why Zenako
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Why Choose Zenako for <span style={{ color: "#1A9AD2" }}>Regular Cleaning</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Consistent home upkeep with the accountability and familiarity that makes the difference. Get the same trusted professional every visit, with direct access to management.
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

        {/* REDESIGNED: How It Works */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#1A9AD2" }}>
                Process
              </span>
              <h2 className="mt-4 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                Getting started with a regular clean is simple and straightforward. From your first conversation to ongoing maintenance, we keep the process transparent and stress-free.
              </p>
            </div>

            <div className="relative">
              {/* Connecting line for desktop timeline */}
              <div className="hidden lg:block absolute top-[1.5rem] left-[12%] right-[12%] h-[2px] bg-gray-100" />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {steps.map((step, idx) => (
                  <div key={idx} className="relative flex flex-col items-center text-center group">
                    
                    {/* Centered Step Node */}
                    <div
                      className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white border-4 shadow-sm transition-transform duration-300 group-hover:scale-110 mb-6"
                      style={{ borderColor: "#6fbf00" }}
                    >
                      <span className="font-bold text-sm" style={{ color: "#6fbf00" }}>
                        {idx + 1}
                      </span>
                    </div>

                    <h3 className="font-bold text-foreground text-lg mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed px-2">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Standard Checklist - 3-Column with images on top */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6fbf00" }}
              >
                Checklist
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                The Standard Cleaning Checklist
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Every regular visit follows a consistent room-by-room checklist so nothing is
                overlooked, and we rotate deeper tasks each session.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {checklistSections.map((section, idx) => (
                <div key={idx} className="border border-border overflow-hidden bg-background">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={section.image}
                      alt={`Regular cleaning ${section.title} in Johannesburg`}
                      fill
                      className="object-cover"
                    />
                  </div>
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

        {/* Add-ons & Reset Note */}
        <section className="py-16 lg:py-24 bg-background">
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
                  Add-ons &amp; Resets
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  Customise your regular clean with optional extras. Simply let us know when booking
                  and we will include them in your scheduled visit.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {addOns.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-4 border border-border bg-white"
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
                <div className="mt-8 p-6 border-l-4 bg-white" style={{ borderColor: "#1A9AD2" }}>
                  <p className="text-sm font-bold text-foreground mb-2">
                    Need a Top-to-Bottom Reset First?
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    If your home needs a thorough once-over before starting a regular routine, we
                    recommend beginning with our{" "}
                    <Link
                      href="/services/deep-cleaning"
                      className="font-semibold underline underline-offset-2"
                      style={{ color: "#1A9AD2" }}
                    >
                      Deep Cleaning service
                    </Link>
                    . It gives your home a proper baseline so every regular visit maintains a
                    consistently high standard.
                  </p>
                </div>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src="/house cleaning/oven add on.webp"
                  alt="Zenako cleaning team ready for a regular house clean in Johannesburg"
                  fill
                  className="object-cover"
                />
              </div>
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
                  If any item on our cleaning checklist is missed or not completed to your
                  satisfaction, we return within{" "}
                  <strong className="text-white">24 hours</strong> at no extra cost. No lock-in
                  contracts. No call centres. Just honest, accountable service every single visit.
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
              Our regular cleaning teams operate across the greater Johannesburg region, including:
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
                Book Your Regular Clean Today
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
