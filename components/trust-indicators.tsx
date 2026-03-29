import { ShieldCheckIcon, CoinStackIcon, ThumbsUpIcon, LeafIcon } from "@/components/icons"

const indicators = [
  {
    icon: ShieldCheckIcon,
    title: "100% Vetted Professionals",
    description: "Every professional we dispatch is background-checked, trained, and held to a consistent standard.",
  },
  {
    icon: CoinStackIcon,
    title: "Transparent Pricing",
    description: "All quotes are provided upfront. The price you receive is the price you pay. No hidden charges.",
  },
  {
    icon: ThumbsUpIcon,
    title: "Satisfaction Guaranteed",
    description: "If the result does not meet your expectations, we return and re-clean at no additional cost.",
  },
  {
    icon: LeafIcon,
    title: "Eco-Friendly Products",
    description: "We use effective, non-toxic cleaning solutions that are safe for children, pets, and the environment.",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-10 lg:py-12 bg-white border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {indicators.map((item) => (
            <div key={item.title} className="flex items-center gap-4">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-[#1A9AD2]/10" style={{ color: "#1A9AD2" }}>
                <item.icon className="w-6 h-6 lg:w-5 lg:h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground text-base">{item.title}</h3>
                <p className="text-base leading-relaxed text-muted-foreground mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
