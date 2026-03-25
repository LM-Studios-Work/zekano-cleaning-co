import Link from "next/link"
import Image from "next/image"
import { SparkleIcon, HouseIcon, TruckIcon, BugIcon } from "@/components/icons"

const services = [
  {
    icon: SparkleIcon,
    title: "Deep Cleaning",
    href: "/services/deep-cleaning",
    description: "Top to bottom. Behind furniture. Inside appliances. The works.",
  },
  {
    icon: HouseIcon,
    title: "Standard House Cleaning",
    href: "/services/standard-house-cleaning",
    description: "Weekly, fortnightly, monthly. Your home stays fresh without your effort.",
  },
  {
    icon: TruckIcon,
    title: "Move-in / Move-out",
    href: "/services/move-in-move-out-cleaning",
    description: "Get your deposit back. Or start fresh. We make properties handover-ready.",
  },
  {
    icon: BugIcon,
    title: "Pest Control",
    href: "/services/pest-control",
    description: "Ants, cockroaches, rodents. We deal with the source, not just the symptoms.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric header */}
        <div className="mb-14 max-w-md">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Services</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-foreground">
            What we actually do.
          </h2>
          <div className="mt-3 h-1 w-16 bg-foreground"></div>
        </div>

        {/* Content Grid — services left, image right (wider) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {services.map((service) => (
                <Link key={service.title} href={service.href} className="flex gap-4 group">
                  <div className="shrink-0 mt-1" style={{ color: "#1A9AD2" }}>
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-sm group-hover:text-[#1A9AD2] transition-colors">{service.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-colors duration-200 mt-10 hover:opacity-90"
              style={{ backgroundColor: "#6fbf00" }}
            >
              All 15+ Services
            </Link>
          </div>

          {/* Professional Image — larger, bleeds */}
          <div className="lg:col-span-7 relative h-96 lg:h-[500px] overflow-hidden -mr-4 lg:-mr-8">
            <Image
              src="/cheerful-black-professional-cleaner-woman-600nw-2411115957-removebg-preview.png"
              alt="Zenako cleaning professional"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
