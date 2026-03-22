import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Custom SVG icons for services
const CarpetCleaningIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16H52C54.2091 16 56 17.7909 56 20V44C56 46.2091 54.2091 48 52 48H12C9.79086 48 8 46.2091 8 44V20C8 17.7909 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 24L32 36L44 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 32L32 44L44 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const WindowCleaningIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="12" y="12" width="40" height="40" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="12" x2="32" y2="52" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="22" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="42" cy="22" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="22" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="42" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const DryCleaningIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M28 12H36C37.1046 12 38 12.8954 38 14V40C38 42.2091 36.2091 44 34 44H30C27.7909 44 26 42.2091 26 40V14C26 12.8954 26.8954 12 28 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 44H44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 48H40" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const HousekeepingIcon = () => (
  <svg className="w-10 h-10" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 32L32 16L52 32V48C52 50.2091 50.2091 52 48 52H16C13.7909 52 12 50.2091 12 48V32Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="24" y="32" width="16" height="20" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="32" x2="32" y2="52" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
)

const services = [
  {
    icon: CarpetCleaningIcon,
    title: "Carpet Cleaning",
    description: "Deep clean your carpets with our professional steam cleaning technology.",
  },
  {
    icon: WindowCleaningIcon,
    title: "Window Cleaning",
    description: "Crystal clear windows that sparkle. We handle both interior and exterior.",
  },
  {
    icon: DryCleaningIcon,
    title: "Dry Cleaning Clothes",
    description: "Professional dry cleaning for your delicate garments and special items.",
  },
  {
    icon: HousekeepingIcon,
    title: "Housekeeping",
    description: "Complete housekeeping services for busy professionals and families.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-background relative">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Our <span style={{ color: "#6fbf00" }}>Services</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-2xl">
            Our 24-Hour professional team offers services with meticulous attention to every detail.
          </p>
        </div>

        {/* Content Grid - Services + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Services Grid (2x2) */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="bg-white rounded-lg p-6 hover:shadow-md transition-shadow duration-300">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center" style={{ color: "#1f9fd9" }}>
                      <Icon />
                    </div>
                    <h3 className="font-bold text-foreground text-sm mb-2">{service.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Green Button Below Grid */}
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center rounded px-6 py-2 text-sm font-medium text-white transition-colors duration-200 mt-8"
              style={{ backgroundColor: "#6fbf00" }}
            >
              All Services
            </Link>
          </div>

          {/* Professional Image */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Professional cleaning service"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
