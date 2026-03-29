import Image from "next/image"
import { AwardStarIcon, MoneyBagIcon, RecycleIcon, GearIcon, CheckIcon } from "@/components/icons"

const features = [
  {
    icon: AwardStarIcon,
    title: "Satisfaction Guarantee",
    description: "If our work does not meet your standards, we return and re-clean at no additional cost, promptly and without dispute.",
  },
  {
    icon: MoneyBagIcon,
    title: "Transparent Pricing",
    description: "We provide a clear quote before any work begins. The figure you agree to is the figure you pay.",
  },
  {
    icon: RecycleIcon,
    title: "Eco-Friendly Products",
    description: "We use effective, non-toxic cleaning solutions that are safe for your family, pets, and the environment.",
  },
  {
    icon: GearIcon,
    title: "Professional Equipment",
    description: "We bring commercial-grade equipment to every job, ensuring a thorough and consistent result each visit.",
  },
]

const trustBadges = [
  { value: "100%", label: "Vetted Professionals" },
  { value: "Direct", label: "Owner Supervision" },
  { value: "Full", label: "Accountability" },
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
            {/* Trust Badges bar — bleeds over image */}
            <div className="bg-foreground text-background p-4 -mt-4 mx-4 relative z-10">
              <div className="grid grid-cols-3 gap-2 text-center">
                {trustBadges.map((badge) => (
                  <div key={badge.label}>
                    <div className="text-lg lg:text-xl font-black">{badge.value}</div>
                    <div className="text-[10px] uppercase tracking-wider opacity-60">{badge.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Trust Badges Bar */}
          <div className="lg:hidden order-3 bg-foreground text-background p-5">
            <div className="grid grid-cols-3 gap-3 text-center">
              {trustBadges.map((badge) => (
                <div key={badge.label}>
                  <div className="text-xl font-black">{badge.value}</div>
                  <div className="text-xs uppercase tracking-wider opacity-60">{badge.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 lg:col-span-7 lg:pl-8">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Why Us</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Our commitment to quality.<br />
              <span className="text-muted-foreground">Every visit, without exception.</span>
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

            {/* Owner-Backed Accountability */}
            <div className="mt-8 p-5 lg:p-4 border-l-4 bg-white" style={{ borderColor: "#6fbf00" }}>
              <p className="font-bold text-foreground text-base lg:text-sm mb-2">Direct Owner Supervision</p>
              <p className="text-sm lg:text-xs text-muted-foreground mb-3">Accidents happen. Unlike large app-based services where disputes are routed through a call centre, at Zenako you have direct access to our management. If something goes wrong, we handle it personally, fairly, and without delay. We treat your home as our own.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-1">
                {[
                  "No lock-in contracts",
                  "No price changes after quoting",
                  "Familiar professionals each visit",
                  "No changes to schedule without notice",
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
