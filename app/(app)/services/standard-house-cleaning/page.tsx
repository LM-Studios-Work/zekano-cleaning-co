import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { CheckIcon, PhoneIcon, ShieldCheckIcon } from "@/components/icons"

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
      "Build trust and familiarity with a cleaner who knows your home and priorities — no strangers each time.",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Choose weekly or fortnightly visits that fit your routine. No lock-in contracts — pause or reschedule as life changes.",
  },
  {
    title: "Tailored Priorities",
    description:
      "Focus on specific areas like pet zones or guest bathrooms, and rotate deeper tasks each visit based on your needs.",
  },
  {
    title: "Owner-Backed Accountability",
    description:
      "Direct access to management for any issue. No call centres, no middlemen — just honest, personal service.",
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
      "We follow a consistent checklist and rotate deeper tasks — like skirting boards or inside windows — each visit.",
  },
  {
    number: "04",
    title: "Manage Easily",
    description:
      "Pause or reschedule with simple notice as your life changes. No lock-in contracts, ever.",
  },
]

export default function StandardHouseCleaningPage() {
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
                  consistently clean with vetted professionals you can trust — serving Sandton,
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

        {/* Why Choose Zenako */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6fbf00" }}
              >
                Why Zenako
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                Why Choose Zenako for{" "}
                <span style={{ color: "#1A9AD2" }}>Regular Cleaning</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Consistent home upkeep with the accountability and familiarity that makes the
                difference.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="p-6 lg:p-8 bg-background border border-border"
                >
                  <div
                    className="flex items-center justify-center w-12 h-12 mb-4"
                    style={{ backgroundColor: "#6fbf00" }}
                  >
                    <CheckIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-foreground text-lg mb-2">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <span
                className="text-sm font-bold uppercase tracking-widest"
                style={{ color: "#6fbf00" }}
              >
                Process
              </span>
              <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl text-balance">
                How It Works
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                Getting started with a regular clean is simple and straightforward.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div
                    className="text-5xl font-black mb-4 leading-none"
                    style={{ color: "#6fbf00", opacity: 0.18 }}
                  >
                    {step.number}
                  </div>
                  <div className="border-t-2 pt-5" style={{ borderColor: "#6fbf00" }}>
                    <h3 className="font-bold text-foreground text-lg mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Standard Checklist — 3-Column with images on top */}
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
                overlooked — and we rotate deeper tasks each session.
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
                  contracts. No call centres. Just honest, accountable service — every single visit.
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
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
