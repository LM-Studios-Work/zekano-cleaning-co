import Image from "next/image"
import Link from "next/link"
import { ArrowRightIcon } from "@/components/icons"

const services = [
  {
    title: "Deep Cleaning",
    href: "/services/deep-cleaning",
    image: "/home_page services_block images/deep clean.webp",
    description: "A comprehensive clean covering every surface, appliance interior, and hard-to-reach area throughout your property.",
  },
  {
    title: "Standard House Cleaning",
    href: "/services/standard-house-cleaning",
    image: "/home_page services_block images/house cleaning.webp",
    description: "Scheduled weekly, fortnightly, or monthly maintenance to keep your home consistently clean and comfortable.",
  },
  {
    title: "Move-in / Move-out",
    href: "/services/move-in-move-out-cleaning",
    image: "/home_page services_block images/move in move out.webp",
    description: "Thorough end-of-tenancy or pre-occupancy cleaning to ensure the property is in excellent condition.",
  },
  {
    title: "Pest Control",
    href: "/services/pest-control",
    image: "/home_page services_block images/pest control.webp",
    description: "Targeted pest treatments that address the source of the problem using eco-friendly, low-toxicity products.",
  },
]

export function ServicesPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Services</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground">
            Our Core Services
          </h2>
        </div>

        {/* 4-Card Grid - Restored to 4-cols inline, expanded container to prevent squishing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex flex-col bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-[#1A9AD2]/30 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col">
                <h3 className="font-bold text-foreground text-lg lg:text-xl group-hover:text-[#1A9AD2] transition-colors">{service.title}</h3>
                <p className="mt-2 text-sm lg:text-base leading-relaxed text-muted-foreground">{service.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-colors duration-200 group-hover:text-[#1A9AD2]" style={{ color: "#6fbf00" }}>
                  Learn more <ArrowRightIcon className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
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
