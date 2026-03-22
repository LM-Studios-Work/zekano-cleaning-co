import Link from "next/link"
import Image from "next/image"

// Custom SVG icons for each service - hand-drawn style, no AI slop

const DeepCleaningIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Spray bottle */}
    <rect x="24" y="8" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 14H44V18C44 20.2091 42.2091 22 40 22H24C21.7909 22 20 20.2091 20 18V14Z" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="26" y="22" width="12" height="28" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M30 28V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
    <path d="M34 28V44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 3"/>
    {/* Sparkle marks */}
    <path d="M48 12L50 10M52 16L54 14M48 20L50 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="14" cy="36" r="2" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="50" cy="40" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 54H42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const StandardCleaningIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* House outline with broom */}
    <path d="M12 30L32 14L52 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 28V50C16 51.1046 16.8954 52 18 52H46C47.1046 52 48 51.1046 48 50V28" stroke="currentColor" strokeWidth="1.5"/>
    {/* Window */}
    <rect x="24" y="34" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="28" y1="34" x2="28" y2="42" stroke="currentColor" strokeWidth="1"/>
    <line x1="24" y1="38" x2="32" y2="38" stroke="currentColor" strokeWidth="1"/>
    {/* Door */}
    <rect x="36" y="38" width="6" height="14" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="40" cy="46" r="1" fill="currentColor"/>
    {/* Sparkle */}
    <path d="M52 10L54 8M56 12H54M52 14L54 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const MoveCleaningIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Moving box */}
    <rect x="14" y="24" width="28" height="24" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14 32H42" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 32V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 32V28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Arrow pointing right (move) */}
    <path d="M44 36H56M56 36L50 30M56 36L50 42" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Sparkles on top */}
    <path d="M24 18V14M28 16V12M32 18V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Small key */}
    <circle cx="12" cy="16" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M14.5 18L18 21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M17 20.5L18.5 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PestControlIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Shield outline */}
    <path d="M32 8L14 18V34C14 44.4934 22.0589 53.2727 32 56C41.9411 53.2727 50 44.4934 50 34V18L32 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    {/* Bug/pest crossed out */}
    <ellipse cx="32" cy="34" rx="6" ry="8" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="32" y1="26" x2="32" y2="42" stroke="currentColor" strokeWidth="1"/>
    {/* Bug legs */}
    <path d="M26 30L22 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 34L22 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M26 38L22 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M38 30L42 27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M38 34L42 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M38 38L42 41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Bug antennae */}
    <path d="M30 26L28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M34 26L36 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Cross-out line */}
    <line x1="20" y1="46" x2="44" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const services = [
  {
    icon: DeepCleaningIcon,
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning covering every surface, corner, and hidden spot in your home.",
  },
  {
    icon: StandardCleaningIcon,
    title: "Standard House Cleaning",
    description: "Regular maintenance cleaning to keep your home fresh, tidy, and comfortable every week.",
  },
  {
    icon: MoveCleaningIcon,
    title: "Move-in / Move-out Cleaning",
    description: "Complete property cleaning for seamless transitions when moving in or out of your space.",
  },
  {
    icon: PestControlIcon,
    title: "Pest Control",
    description: "Safe, eco-friendly pest management solutions to protect your home and family.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-32 bg-white relative">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Our <span style={{ color: "#6fbf00" }}>Services</span>
          </h2>
          <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl">
            Our 24-Hour professional team offers services with meticulous attention to every detail.
          </p>
          <div className="mt-4 h-1 w-24 bg-gray-300"></div>
        </div>

        {/* Content Grid - Services + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Services Grid (2x2) - No Cards */}
          <div>
            <div className="grid grid-cols-2 gap-12 lg:gap-16">
              {services.map((service) => {
                const Icon = service.icon
                return (
                  <div key={service.title} className="flex flex-col">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center" style={{ color: "#1A9AD2" }}>
                      <Icon />
                    </div>
                    <h3 className="font-bold text-foreground text-base mb-3">{service.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                )
              })}
            </div>

            {/* Green Button Below Grid */}
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 mt-12 hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              All Services
            </Link>
          </div>

          {/* Professional Image */}
          <div className="relative h-96 lg:h-full min-h-96 rounded-lg overflow-hidden">
            <Image
              src="/cheerful-black-professional-cleaner-woman-600nw-2411115957-removebg-preview.png"
              alt="Professional cleaning service provider"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
