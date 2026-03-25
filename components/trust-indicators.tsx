import { Shield, DollarSign, ThumbsUp, Leaf } from "lucide-react"

const indicators = [
  {
    icon: Shield,
    title: "Reliable Team",
    description: "Vetted, trained, and trusted professionals every time.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates with transparent quotes and no hidden fees.",
  },
  {
    icon: ThumbsUp,
    title: "Satisfaction Guaranteed",
    description: "Not happy? We'll come back and make it right — no questions asked.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Products",
    description: "Safe for your family, pets, and the environment.",
  },
]

export function TrustIndicators() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {indicators.map((item) => (
            <div key={item.title} className="text-center">
              <div
                className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}
              >
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="font-bold text-foreground text-sm lg:text-base">{item.title}</h3>
              <p className="mt-1 text-xs lg:text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
