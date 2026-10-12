import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, ArrowRightIcon, ArrowLeftIcon, PhoneIcon } from "@/components/icons"
import { getRelatedServices } from "@/lib/services-data"
import { getServiceDetailImageMap } from "@/lib/cms-images"
import { FaqAccordion } from "./faq-accordion"
import { GoogleReviewsCTA } from "@/components/google-reviews-cta"

export const metadata: Metadata = {
  title: "Commercial Property Maintenance & Facility Services Johannesburg | Zenako",
  description: "Comprehensive commercial property maintenance for office parks, estates, body corporates, retail properties, schools, sports facilities, and commercial buildings. Zenako is your one point of contact for cleaning, gardens, landscaping, and property maintenance across Johannesburg.",
  alternates: {
    canonical: "/services/commercial-property",
  },
}

const targetSectors = [
  {
    title: "Office Parks & Business Campuses",
    image: "/office/office hero.webp",
    badge: "Corporate",
    highlights: [
      "Spotless lobbies, meeting rooms and shared restrooms",
      "Pristine exterior glass and architectural facades",
      "Manicured lawns, perimeter hedges and visitor parking areas",
      "Flexible after-hours schedules that never disrupt tenants",
      "Dedicated account manager for all facility requests",
    ],
  },
  {
    title: "Residential Estates & Gated Communities",
    image: "/new services/Garden Maintenance.webp",
    badge: "Estates",
    highlights: [
      "Perimeter-to-gatehouse grounds and garden maintenance",
      "Clubhouse, gym and communal facility deep cleaning",
      "Lawn mowing, tree trimming and green waste removal",
      "Paving repairs, irrigation maintenance and turf care",
      "Consistent, vetted personnel trusted by residents",
    ],
  },
  {
    title: "Body Corporates & Sectional Titles",
    image: "/property improvement/maintenance.jpeg",
    badge: "Sectional Title",
    highlights: [
      "Hassle-free vendor consolidation for managing agents and trustees",
      "Scheduled communal corridor, stairwell and window cleaning",
      "Routine grounds upkeep and garden rejuvenation",
      "Painting, waterproofing and exterior repairs",
      "Itemised billing and transparent maintenance reporting",
    ],
  },
  {
    title: "Retail Properties & Shopping Centres",
    image: "/commercial and specialist services/Professional Window Cleaner on Glass Facade.webp",
    badge: "Retail",
    highlights: [
      "High-traffic floor scrubbing, buffing and hygiene care",
      "Streak-free storefront glass and canopy cleaning",
      "Public restroom sanitisation and consumables restocking",
      "Walkway pressure washing, litter clearing and paving care",
      "Rapid response for urgent spillages and maintenance issues",
    ],
  },
  {
    title: "Schools & Educational Campuses",
    image: "/property improvement/sportsfield.jpeg",
    badge: "Education",
    highlights: [
      "Hygienic classroom, laboratory and ablution block cleaning",
      "Professional sports field maintenance and line marking",
      "Playground groundskeeping and tree safety trimming",
      "Holiday deep-clean and structural renovation projects",
      "Strictly vetted, background-checked on-site staff",
    ],
  },
  {
    title: "Sports Facilities & Padel Clubs",
    image: "/commercial and specialist services/easy_to_use_squeegee_for_tennis_courts_with_hook_for_storage.jpg",
    badge: "Recreation",
    highlights: [
      "Specialised Padel and tennis court sweeping and sand distribution",
      "Glass panel deep cleaning and safety inspections",
      "Sports turf aeration, fertilisation, top dressing and repair",
      "Net tensioning, perimeter maintenance and moss prevention",
      "Player-ready clubhouse and change room sanitisation",
    ],
  },
  {
    title: "Commercial Buildings & Logistics Hubs",
    image: "/cleaning images/zenako-window-cleaning-johannesburg.webp",
    badge: "Commercial",
    highlights: [
      "High-access water-fed pole exterior window washing",
      "Warehouse and industrial floor scrubbing and degreasing",
      "Roof cleaning, gutter clearing and waterproofing",
      "Loading bay, yard and driveway pressure washing",
      "General building handyman, drywalling and painting repairs",
    ],
  },
]

const consolidatedPillars = [
  {
    title: "Contract & Deep Cleaning",
    icon: "fa-solid fa-broom",
    color: "#1A9AD2",
    description: "Daily and scheduled cleaning programs for commercial interiors and exteriors.",
    services: [
      "Daily office and workstation sanitisation",
      "Communal lobbies, lifts and corridors",
      "Restroom hygiene care and consumables",
      "High-access facade and window cleaning",
      "Carpet extraction and hard floor scrubbing",
    ],
  },
  {
    title: "Gardens & Grounds Care",
    icon: "fa-solid fa-leaf",
    color: "#6fbf00",
    description: "Year-round groundskeeping keeping commercial properties healthy and pristine.",
    services: [
      "Scheduled lawn mowing and edge trimming",
      "Weed control, fertilisation and moss removal",
      "Hedge pruning, shrub shaping and mulching",
      "Seasonal flowerbed maintenance",
      "Prompt green waste removal and disposal",
    ],
  },
  {
    title: "Landscaping & Turf Management",
    icon: "fa-solid fa-seedling",
    color: "#1A9AD2",
    description: "Enhancing property curb appeal, outdoor installations and sporting surfaces.",
    services: [
      "Commercial landscaping design and upkeep",
      "Automated irrigation installation and repair",
      "Instant lawn supply (Kikuyu, LM, Bermuda)",
      "Sports field maintenance and line marking",
      "Specialised Padel court surface care",
    ],
  },
  {
    title: "Property & Facility Maintenance",
    icon: "fa-solid fa-wrench",
    color: "#6fbf00",
    description: "Reliable building repair trades managed through our trusted specialist network.",
    services: [
      "Interior and exterior painting",
      "Roof, parapet and balcony waterproofing",
      "Paving repairs and power washing",
      "Tiling, drywalling and ceiling repairs",
      "General handyman repairs and minor alterations",
    ],
  },
]

const whyUsPoints = [
  {
    title: "One Point of Contact",
    description: "Stop juggling multiple contractors. Zenako provides a single dedicated account manager for cleaning, gardening, landscaping, and building repairs.",
  },
  {
    title: "Vetted Specialist Network",
    description: "We work closely with experienced, vetted specialist contractors for each trade, backed by direct Zenako quality oversight.",
  },
  {
    title: "Tailored Commercial SLAs",
    description: "Customized Service Level Agreements structured around your property schedule to ensure zero disruption to tenants and visitors.",
  },
  {
    title: "Consolidated Billing",
    description: "Transparent, itemised invoicing that simplifies budgeting, audits, and financial reporting for property managers and trustees.",
  },
]

const faqs = [
  {
    id: "single-contact",
    question: "How does the 'one point of contact' model work for commercial clients?",
    answer: "Instead of dealing separately with cleaning crews, garden services, landscapers, painters, and maintenance contractors, Zenako coordinates and oversees every aspect under one agreement. You have one dedicated account manager, one unified communication channel, and one consolidated monthly invoice.",
  },
  {
    id: "sectors",
    question: "What types of commercial properties do you maintain across Johannesburg?",
    answer: "We service office parks, residential gated estates, body corporate sectional titles, retail shopping centres, schools and tertiary campuses, sports facilities (including padel courts and sports fields), and commercial office buildings throughout Sandton, Randburg, Fourways, Midrand, Bryanston, and greater Johannesburg.",
  },
  {
    id: "sla-flexibility",
    question: "Can we customize our service schedule to avoid business disruption?",
    answer: "Yes, absolutely. We tailor all schedules to your facility's operational hours. Cleaning and noisy maintenance can be executed before office hours, after-hours, or over weekends to ensure seamless daily business operations.",
  },
  {
    id: "sports-padel",
    question: "Do you offer specialised sports field and padel court maintenance?",
    answer: "Yes. Our team has specialised experience in padel court care (sand distribution, glass cleaning, net maintenance) as well as sports field aeration, fertilisation, line marking, and turf repair for schools and recreational clubs.",
  },
  {
    id: "proposal-process",
    question: "How do we request a corporate proposal or on-site facility assessment?",
    answer: "Simply get in touch via WhatsApp (065 701 8482) or phone call. We will arrange a comprehensive on-site walkthrough of your premises, review your specific requirements, and deliver a clear, itemised corporate maintenance proposal.",
  },
]

export default async function CommercialPropertyPage() {
  const detailImageMap = await getServiceDetailImageMap()
  const heroImage = "/commercial and specialist services/Professional Window Cleaner on Glass Facade.webp"
  const otherServices = getRelatedServices("commercial-property", 3)

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
              <Link href="/services/property-services" className="hover:text-foreground transition-colors">Property Services</Link>
              <span>/</span>
              <span className="text-foreground font-medium">Commercial Property Services</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 bg-background relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A9AD2]/10 border border-[#1A9AD2]/20 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#1A9AD2" }}>
                  <span className="w-2 h-2 rounded-full bg-[#6fbf00] animate-pulse" />
                  COMMERCIAL PROPERTY SERVICES
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-[1.1]">
                  One Point of Contact for <span style={{ color: "#1A9AD2" }}>Commercial Property</span> Care
                </h1>
                <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                  Tailored facility maintenance for <strong className="text-foreground font-semibold">office parks, residential estates, body corporates, retail centres, schools, sports facilities</strong>, and commercial buildings across Johannesburg.
                </p>

                {/* Key value pills */}
                <div className="mt-6 grid grid-cols-2 gap-3 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#6fbf00] shrink-0" />
                    <span>Contract Cleaning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#6fbf00] shrink-0" />
                    <span>Gardens & Grounds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#6fbf00] shrink-0" />
                    <span>Landscaping & Turf</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckIcon className="w-4 h-4 text-[#6fbf00] shrink-0" />
                    <span>Property Maintenance</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20request%20a%20B2B%20Commercial%20Property%20Maintenance%20proposal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shadow-xl inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-white transition-opacity hover:opacity-95 rounded-lg"
                    style={{ backgroundColor: "#1A9AD2" }}
                  >
                    <i className="fa-brands fa-whatsapp text-xl"></i>
                    Request Corporate Proposal
                  </a>
                  <a
                    href="tel:+27657018482"
                    className="btn-lift inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold text-foreground border-2 border-foreground hover:bg-foreground hover:text-white transition-colors duration-200 rounded-lg"
                  >
                    <PhoneIcon className="h-5 w-5" />
                    065 701 8482
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl border border-border">
                  <Image
                    src={heroImage}
                    alt="Commercial Property Maintenance Johannesburg"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#6fbf00]">
                      Johannesburg Facility Solutions
                    </p>
                    <p className="text-sm font-semibold mt-1">
                      Consolidated maintenance for high-value commercial and residential properties.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <GoogleReviewsCTA />

        {/* The One Point of Contact Banner */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-[#6fbf00]">
                The Zenako Advantage
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mt-2">
                Why Deal with 5 Vendors When You Can Have <span className="text-[#1A9AD2]">One</span>?
              </h2>
              <p className="text-slate-300 mt-3 text-base leading-relaxed">
                Property managers spend hours coordinating different service providers. Zenako acts as your single point of contact, ensuring every trade delivers to the highest standard with unified accountability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUsPoints.map((point, idx) => (
                <div
                  key={point.title}
                  className="bg-slate-800/90 border border-slate-700 rounded-xl p-6 relative overflow-hidden flex flex-col"
                >
                  <div
                    className="absolute top-0 left-0 w-full h-1"
                    style={{ backgroundColor: idx % 2 === 0 ? "#1A9AD2" : "#6fbf00" }}
                  />
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-700/60 mb-4 font-black text-lg" style={{ color: idx % 2 === 0 ? "#1A9AD2" : "#6fbf00" }}>
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{point.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed flex-grow">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 4 Consolidated Pillars */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>
                Comprehensive Scope
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Our 4 Core Facility Service Pillars
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                Everything required to maintain your property's aesthetics, hygiene, functionality, and long-term asset value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {consolidatedPillars.map((pillar) => (
                <Card key={pillar.title} className="border-border hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
                  <div className="p-6 bg-slate-50 border-b border-border">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                      style={{ backgroundColor: `${pillar.color}15`, color: pillar.color }}
                    >
                      <i className={pillar.icon}></i>
                    </div>
                    <h3 className="font-bold text-foreground text-lg">{pillar.title}</h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{pillar.description}</p>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col justify-between">
                    <ul className="space-y-3">
                      {pillar.services.map((svc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                          <CheckIcon className="w-3.5 h-3.5 text-[#6fbf00] shrink-0 mt-0.5" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Target Sectors Showcase */}
        <section className="py-20 lg:py-28 bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#1A9AD2" }}>
                Target Sectors
              </span>
              <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-foreground">
                Specialised Solutions for Every Property Type
              </h2>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                We understand the unique challenges faced by commercial managers, corporate tenants, schools, and sectional title trustees.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {targetSectors.map((sector) => (
                <Card key={sector.title} className="border-border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image
                      src={sector.image}
                      alt={sector.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-sm text-white">
                      {sector.badge}
                    </div>
                  </div>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h3 className="font-bold text-foreground text-base mb-4 group-hover:text-[#1A9AD2] transition-colors">
                      {sector.title}
                    </h3>
                    <ul className="space-y-2.5 flex-grow">
                      {sector.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                          <CheckIcon className="w-3.5 h-3.5 text-[#6fbf00] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}

              {/* Callout Card */}
              <div className="p-6 rounded-xl bg-gradient-to-br from-[#1A9AD2] to-[#1581b3] text-white flex flex-col justify-between shadow-lg">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-white/80">
                    Bespoke Agreement
                  </span>
                  <h3 className="text-xl font-black mt-2 mb-3">
                    Multi-Property Portfolios
                  </h3>
                  <p className="text-xs text-white/90 leading-relaxed">
                    Managing multiple properties across Johannesburg? We offer consolidated portfolio contracts with volume pricing, dedicated site supervisors, and synchronized monthly reporting.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20">
                  <a
                    href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%20manage%20a%20commercial%20property%20portfolio%20and%20would%20like%20to%20discuss%20a%20proposal."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold text-white hover:underline"
                  >
                    Discuss Portfolio Rates <ArrowRightIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Got Questions?</span>
              <h2 className="text-3xl font-bold text-foreground mt-2">
                Commercial Maintenance FAQs
              </h2>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* Corporate CTA Banner */}
        <section className="py-16 lg:py-20" style={{ backgroundColor: "#1A9AD2" }}>
          <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
            <span className="text-xs font-black uppercase tracking-widest text-white/80">
              Johannesburg Commercial Property Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white mt-2 mb-4">
              Keep Your Facilities in Peak Condition
            </h2>
            <p className="text-white/90 text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Partner with Zenako for reliable, owner-supervised maintenance of your office park, estate, school, retail centre, or commercial facility.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20request%20a%20B2B%20Commercial%20Property%20Maintenance%20proposal."
                target="_blank"
                rel="noopener noreferrer"
                className="shadow-xl text-base px-8 py-4 rounded-lg font-bold transition-all hover:bg-slate-100 flex items-center justify-center gap-2"
                style={{ backgroundColor: "#ffffff", color: "#1A9AD2" }}
              >
                <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
                Request Corporate Proposal
              </a>
              <a
                href="tel:+27657018482"
                className="text-base px-8 py-4 rounded-lg font-bold border-2 border-white text-white hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <PhoneIcon className="w-5 h-5" />
                Call 065 701 8482
              </a>
            </div>
          </div>
        </section>

        {/* Other Services You May Need */}
        {otherServices.length > 0 && (
          <section className="py-16 lg:py-24 bg-white border-t border-border">
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
                  href="/services/property-services"
                  className="inline-flex items-center gap-2 text-sm font-medium hover:underline"
                  style={{ color: "#1A9AD2" }}
                >
                  <ArrowLeftIcon className="h-4 w-4" />
                  View All Property Services
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
