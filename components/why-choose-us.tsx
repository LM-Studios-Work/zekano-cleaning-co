import Image from "next/image"
import { AwardStarIcon, MoneyBagIcon, RecycleIcon, GearIcon, CheckIcon } from "@/components/icons"

const features = [
  {
    icon: AwardStarIcon,
    title: "Quality Guarantee",
    description: "Not satisfied? We re-clean. Free. No forms, no hoops.",
  },
  {
    icon: MoneyBagIcon,
    title: "No Surprise Bills",
    description: "We quote upfront. The number you see is the number you pay.",
  },
  {
    icon: RecycleIcon,
    title: "Eco-Friendly",
    description: "Products that kill grime, not the environment.",
  },
  {
    icon: GearIcon,
    title: "Proper Equipment",
    description: "Commercial-grade gear. Not a mop and bucket from the garage.",
  },
]

const stats = [
  { value: "10+", label: "Years" },
  { value: "5,000+", label: "Clients" },
  { value: "15,000+", label: "Jobs Done" },
  { value: "100%", label: "Satisfaction" },
]

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric grid — image takes 5/12, content takes 7/12 */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Image Side — hidden on mobile to reduce clutter, shown on desktop */}
          <div className="relative lg:col-span-5 order-2 lg:order-1 hidden lg:block">
            <div className="aspect-[3/4] relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80"
                alt="Zenako team at work"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Stats bar — bleeds over image */}
            <div className="bg-foreground text-background p-4 -mt-4 mx-4 relative z-10">
              <div className="grid grid-cols-4 gap-2 text-center">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-lg lg:text-xl font-black">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-60">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Stats Bar */}
          <div className="lg:hidden order-3 bg-foreground text-background p-5">
            <div className="grid grid-cols-4 gap-3 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl font-black">{stat.value}</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Why Us</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              We refuse to cut corners.<br />
              <span className="text-muted-foreground">That&apos;s the whole pitch.</span>
            </h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-11 h-11 lg:w-auto lg:h-auto rounded-full bg-[#1A9AD2]/10 lg:bg-transparent mt-0.5" style={{ color: "#1A9AD2" }}>
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground text-base lg:text-sm">{feature.title}</h3>
                    <p className="mt-1 text-sm lg:text-xs text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Negative benefits — what we refuse to be */}
            <div className="mt-8 p-5 lg:p-4 border-l-4 bg-white" style={{ borderColor: "#6fbf00" }}>
              <p className="font-bold text-foreground text-base lg:text-sm mb-3 lg:mb-2">What you won&apos;t get from us:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1">
                {[
                  "No contracts or lock-ins",
                  "No bait-and-switch pricing",
                  "No sending random strangers",
                  "No rescheduling without notice",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckIcon className="w-5 h-5 lg:w-4 lg:h-4 shrink-0" style={{ color: "#6fbf00" }} />
                    <span className="text-sm lg:text-xs text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
