import Link from "next/link"
import { SparkleIcon, HouseIcon, TruckIcon, BugIcon } from "@/components/icons"

const services = [
  {
    icon: SparkleIcon,
    title: "Deep Cleaning",
    href: "/services/deep-cleaning",
    description: "A comprehensive clean covering every surface, appliance interior, and hard-to-reach area throughout your property.",
  },
  {
    icon: HouseIcon,
    title: "Standard House Cleaning",
    href: "/services/standard-house-cleaning",
    description: "Scheduled weekly, fortnightly, or monthly maintenance to keep your home consistently clean and comfortable.",
  },
  {
    icon: TruckIcon,
    title: "Move-in / Move-out",
    href: "/services/move-in-move-out-cleaning",
    description: "Thorough end-of-tenancy or pre-occupancy cleaning to ensure the property is in excellent condition.",
  },
  {
    icon: BugIcon,
    title: "Pest Control",
    href: "/services/pest-control",
    description: "Targeted pest treatments that address the source of the problem using eco-friendly, low-toxicity products.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Services</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground">
            Our Core Services
          </h2>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex flex-col gap-4 p-6 lg:p-8 bg-white border border-border rounded-lg hover:shadow-lg hover:border-[#1A9AD2]/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#1A9AD2]/10 group-hover:bg-[#1A9AD2]/20 transition-colors" style={{ color: "#1A9AD2" }}>
                <service.icon className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h3 className="font-bold text-foreground text-lg lg:text-xl group-hover:text-[#1A9AD2] transition-colors">{service.title}</h3>
                <p className="mt-2 text-sm lg:text-base leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-12 lg:mt-16">
          <Link
            href="https://www.zenakocleaning.co.za/services"
            className="inline-flex items-center justify-center px-8 py-3 lg:py-4 text-base lg:text-lg font-bold text-white rounded-lg transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6fbf00" }}
          >
            See All 15+ Services
          </Link>
        </div>
      </div>
    </section>
  )
}
