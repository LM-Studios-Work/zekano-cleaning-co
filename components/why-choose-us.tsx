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
            <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-t from-[#1A9AD2]/20 to-[#6fbf00]/10">
              <Image
                src="/cleaning images/zenako-cleaning-team-walking.webp"
                alt="Professional cleaner team"
                fill
                className="object-cover transition-transform hover:scale-105 duration-500"
              />
            </div>
            {/* Trust Badges bar — bleeds over image */}
            <div className="bg-foreground text-background p-4 -mt-4 mx-4 relative z-10">
              <div className="grid grid-cols-3 gap-2 text-center">
                {trustBadges.map((badge) => (
                  <div key={badge.label}>
                    <div className="text-xl lg:text-2xl font-black">{badge.value}</div>
                    <div className="text-xs uppercase tracking-wider opacity-60">{badge.label}</div>
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

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-6 hover:bg-gray-50/50 rounded-lg transition-colors p-2 -m-2">
                  <div className="shrink-0 flex items-center justify-center w-11 h-11 lg:w-auto lg:h-auto rounded-full bg-[#1A9AD2]/10 lg:bg-transparent mt-0.5" style={{ color: "#1A9AD2" }}>
                    <feature.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground text-base lg:text-lg">{feature.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Owner-Backed Accountability */}
            <div className="mt-8 p-5 lg:p-6 border-l-4 bg-white" style={{ borderColor: "#6fbf00" }}>
              <p className="font-medium text-foreground text-base lg:text-lg mb-2">Direct Owner Supervision</p>
              <p className="text-base leading-relaxed text-muted-foreground mb-4">Accidents happen. Unlike large app-based services where disputes are routed through a call centre, at Zenako you have direct access to our management. If something goes wrong, we handle it personally, fairly, and without delay. We treat your home as our own.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                {[
                  "No lock-in contracts",
                  "No price changes after quoting",
                  "Familiar professionals each visit",
                  "No changes to schedule without notice",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckIcon className="w-5 h-5 lg:w-5 lg:h-5 shrink-0" style={{ color: "#6fbf00" }} />
                    <span className="text-base text-foreground">{item}</span>
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
