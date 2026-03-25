import Link from "next/link"
import { GearIcon, RepeatIcon, TrophyIcon } from "@/components/icons"

const benefits = [
  {
    icon: GearIcon,
    title: "Built Around You",
    description: "Tell us what matters. We build a package that fits your space, your schedule, your budget. Not ours.",
  },
  {
    icon: RepeatIcon,
    title: "Regular Plans",
    description: "Weekly, fortnightly, monthly. Same team, same standard. No re-explaining what you need each time.",
  },
  {
    icon: TrophyIcon,
    title: "Loyalty Pays",
    description: "Ongoing clients get priority bookings and better rates. We reward people who stick around.",
  },
]

export function CustomPackages() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Tight header */}
        <div className="mb-10 max-w-lg">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Packages</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            No one-size-fits-all.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Every space is different. We build cleaning plans that actually match what you need — not what's easiest for us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {benefits.map((b, idx) => (
            <div key={b.title} className={`p-6 bg-white ${idx < benefits.length - 1 ? "md:border-r border-border" : ""} ${idx < 2 ? "border-b md:border-b-0 border-border" : ""}`}>
              <div className="mb-3" style={{ color: "#6fbf00" }}>
                <b.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-foreground text-base">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6fbf00" }}
          >
            Request a Custom Package
          </Link>
        </div>
      </div>
    </section>
  )
}
