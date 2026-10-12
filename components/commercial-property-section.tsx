import Link from "next/link"
import Image from "next/image"
import { ArrowRightIcon, CheckIcon, PhoneIcon } from "@/components/icons"

const TARGET_SECTORS = [
  {
    name: "Office Parks & Business Campuses",
    description: "Impeccable corporate presentation, pristine common areas, parking lot hygiene, and manicured landscaping.",
    badge: "Corporate",
    image: "/office/office hero.webp",
  },
  {
    name: "Residential Estates & Gated Communities",
    description: "Perimeter-to-gatehouse maintenance, clubhouse care, communal park mowing, and ongoing grounds upkeep.",
    badge: "Estates",
    image: "/new services/Garden Maintenance.webp",
  },
  {
    name: "Body Corporates & Sectional Titles",
    description: "Hassle-free vendor consolidation, scheduled maintenance, and transparent reporting for trustees and managing agents.",
    badge: "Sectional Title",
    image: "/property improvement/maintenance.jpeg",
  },
  {
    name: "Retail Properties & Shopping Centres",
    description: "High-traffic floor cleaning, retail facade glass, entrance cleanliness, paving, and customer restroom hygiene.",
    badge: "Retail",
    image: "/commercial and specialist services/Professional Window Cleaner on Glass Facade.webp",
  },
  {
    name: "Schools & Educational Facilities",
    description: "Safe, hygienic learning spaces, sporting ground care, playground safety, and holiday maintenance projects.",
    badge: "Education",
    image: "/property improvement/sportsfield.jpeg",
  },
  {
    name: "Sports Facilities & Padel Clubs",
    description: "Specialist turf care, line marking, deep aeration, padel and tennis court sweeping, and clubhouse sanitation.",
    badge: "Recreation",
    image: "/commercial and specialist services/easy_to_use_squeegee_for_tennis_courts_with_hook_for_storage.jpg",
  },
  {
    name: "Commercial Buildings & Logistics Hubs",
    description: "High-access window washing, exterior pressure washing, roof and gutter maintenance, and structural upkeep.",
    badge: "Commercial",
    image: "/cleaning images/zenako-window-cleaning-johannesburg.webp",
  },
]

const CONSOLIDATED_PILLARS = [
  {
    title: "Contract & Deep Cleaning",
    description: "Daily office cleaning, communal lobbies, high-access glass, restroom sanitisation, and deep floor care.",
    icon: "fa-solid fa-broom",
    color: "#1A9AD2",
  },
  {
    title: "Gardens & Grounds Care",
    description: "Scheduled lawn mowing, weed control, edging, hedge sculpting, flowerbed care, and green waste disposal.",
    icon: "fa-solid fa-leaf",
    color: "#6fbf00",
  },
  {
    title: "Landscaping & Turf Management",
    description: "Commercial landscaping, paving, automated irrigation, tree felling, sports turf care, and padel courts.",
    icon: "fa-solid fa-seedling",
    color: "#1A9AD2",
  },
  {
    title: "Property & Facility Maintenance",
    description: "Handyman repairs, interior/exterior painting, waterproofing, tiling, ceiling repairs, and drywalling.",
    icon: "fa-solid fa-wrench",
    color: "#6fbf00",
  },
]

const ADVANTAGES = [
  {
    title: "One Point of Contact",
    desc: "A single dedicated account manager coordinates all cleaners, gardeners, landscapers, and repair technicians.",
  },
  {
    title: "Vetted Specialist Network",
    desc: "Rigorous vetting and direct owner supervision ensure consistent high quality across every trade.",
  },
  {
    title: "Consolidated Invoicing",
    desc: "Itemised, transparent billing for simplified estate audits, body corporate reporting, and property accounting.",
  },
  {
    title: "Customised Facility SLAs",
    desc: "Tailored schedules and rapid-response guarantees that fit your tenant routines without operational downtime.",
  },
]

export function CommercialPropertySection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle decorative background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(#1A9AD2_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1A9AD2]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6fbf00]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "#6fbf00" }}>
            <span className="w-2 h-2 rounded-full bg-[#6fbf00] animate-pulse" />
            COMMERCIAL PROPERTY SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            One Point of Contact for <span className="text-[#1A9AD2]">Total Facility Care</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Eliminate vendor juggling. Zenako coordinates contract cleaning, garden maintenance, landscaping, and property repairs under a single, accountable partnership across Johannesburg.
          </p>
        </div>

        {/* 4 Pillars - One Point of Contact Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CONSOLIDATED_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 lg:p-7 hover:border-slate-500 hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: `${pillar.color}20`, color: pillar.color }}
              >
                <i className={pillar.icon}></i>
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Pillar 0{idx + 1}
              </div>
              <h3 className="text-lg lg:text-xl font-bold text-white mb-3 group-hover:text-[#1A9AD2] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed flex-grow">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Sectors Showcase */}
        <div className="bg-slate-800/50 border border-slate-700/70 rounded-3xl p-8 lg:p-12 mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6fbf00]">
                Tailored Commercial Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Specialised for High-Value Properties
              </h3>
            </div>
            <p className="text-sm text-slate-300 max-w-md">
              From corporate headquarters to large residential estates, we structure tailored Service Level Agreements that protect property value and elevate occupant satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {TARGET_SECTORS.map((sector) => (
              <div
                key={sector.name}
                className="bg-slate-900/90 border border-slate-800 rounded-xl overflow-hidden hover:border-[#1A9AD2]/50 hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-sm text-white border border-white/20">
                    {sector.badge}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h4 className="font-bold text-white text-base group-hover:text-[#1A9AD2] transition-colors mb-2">
                    {sector.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed flex-grow">
                    {sector.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Final Highlight Card */}
            <div className="bg-gradient-to-br from-[#1A9AD2]/20 to-[#6fbf00]/20 border border-[#1A9AD2]/40 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#6fbf00]">
                  Consolidated Service
                </span>
                <h4 className="font-bold text-white text-lg mt-2 mb-2">
                  Need a Custom Facility SLA?
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  We conduct thorough site walkthroughs to draft bespoke maintenance schedules for multi-tenanted facilities.
                </p>
              </div>
              <div className="mt-5">
                <Link
                  href="/services/commercial-property"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#6fbf00] transition-colors"
                >
                  View Commercial Services <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Property Managers Choose Zenako Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ADVANTAGES.map((adv, idx) => (
            <div key={adv.title} className="flex gap-4 items-start">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#6fbf00]/15 text-[#6fbf00] font-bold text-sm">
                <CheckIcon className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm mb-1">{adv.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* High-Converting CTA Box */}
        <div className="bg-gradient-to-r from-[#1A9AD2] to-[#1581b3] rounded-3xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-black uppercase tracking-widest text-white/80">
              Corporate & Facility Management
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mt-2">
              Ready to Consolidate Your Property Maintenance?
            </h3>
            <p className="text-white/90 text-sm sm:text-base mt-3 leading-relaxed">
              Contact our commercial division for a site assessment and customized corporate proposal for your office park, estate, or facility.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/27657018482?text=Hi%20Zenako%2C%20I%27d%20like%20to%20request%20a%20B2B%20Commercial%20Property%20Maintenance%20proposal%20for%20our%20property."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#1A9AD2] bg-white hover:bg-slate-100 shadow-lg transition-all w-full sm:w-auto text-sm"
            >
              <i className="fa-brands fa-whatsapp text-lg text-[#25D366]"></i>
              Request Proposal
            </a>
            <a
              href="tel:+27657018482"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white border-2 border-white/60 hover:bg-white/10 transition-all w-full sm:w-auto text-sm"
            >
              <PhoneIcon className="w-4 h-4" />
              065 701 8482
            </a>
            <Link
              href="/services/commercial-property"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-white hover:text-slate-200 transition-colors"
            >
              Explore Services
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
