import Link from "next/link"
import Image from "next/image"
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
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric header */}
        <div className="mb-10 lg:mb-14 max-w-md">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Services</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">
            Our Core Services
          </h2>
          <div className="mt-3 h-1 w-16 bg-foreground"></div>
        </div>

        {/* Content Grid — services left, image right (wider) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 sm:gap-8">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="flex gap-6 group hover:bg-gray-50/50 rounded-lg transition-colors p-2 -m-2">
                  <div className="shrink-0 mt-0.5 flex items-center justify-center w-12 h-12 lg:w-auto lg:h-auto rounded-full bg-[#1A9AD2]/10 lg:bg-transparent" style={{ color: "#1A9AD2" }}>
                    <service.icon className="w-6 h-6 lg:w-7 lg:h-7" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-base lg:text-lg group-hover:text-[#1A9AD2] transition-colors">{service.title}</h3>
                    <p className="text-base leading-relaxed text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 text-base font-bold text-white transition-colors duration-200 mt-8 lg:mt-10 hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              All 15+ Services
            </Link>
          </div>

          {/* Professional Image — larger, bleeds */}
          <div className="hidden lg:block lg:col-span-7 relative h-96 lg:h-[500px] overflow-hidden -mr-4 lg:-mr-8">
            <Image
              src="/cleaning images/zenako-house-cleaning-johannesburg.webp"
              alt="Zenako cleaning professional"
              fill
              className="object-cover transition-transform hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
