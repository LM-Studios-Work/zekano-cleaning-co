import { ShieldCheckIcon, CoinStackIcon, ThumbsUpIcon, LeafIcon } from "@/components/icons"

const indicators = [
  {
    icon: ShieldCheckIcon,
    title: "Vetted Team",
    description: "Background-checked. Trained. Shows up on time.",
  },
  {
    icon: CoinStackIcon,
    title: "Honest Pricing",
    description: "No hidden fees. No surprise charges. Ever.",
  },
  {
    icon: ThumbsUpIcon,
    title: "We Fix It Free",
    description: "Not happy? We come back. No arguments.",
  },
  {
    icon: LeafIcon,
    title: "Eco Products",
    description: "Tough on grime. Safe for kids, pets, planet.",
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
                <h3 className="font-bold text-foreground text-base lg:text-sm">{item.title}</h3>
                <p className="text-sm lg:text-xs text-muted-foreground mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
