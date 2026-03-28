import Link from "next/link"
import { GearIcon, RepeatIcon, TrophyIcon } from "@/components/icons"

const benefits = [
  {
    icon: GearIcon,
    title: "Built Around You",
    description: "We take the time to understand your requirements and put together a service plan that fits your property, schedule, and budget.",
  },
  {
    icon: RepeatIcon,
    title: "Consistent Regular Plans",
    description: "Weekly, fortnightly, or monthly. The same professionals are assigned each visit, maintaining a consistent standard without you needing to re-brief anyone.",
  },
  {
    icon: TrophyIcon,
    title: "Loyalty Benefits",
    description: "Clients on recurring plans receive priority scheduling and preferential rates. We value long-term relationships and reflect that in how we work.",
  },
]

export function CustomPackages() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Tight header */}
        <div className="mb-10 max-w-lg">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Packages</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Tailored to Your Needs
          </h2>
          <p className="mt-3 text-base lg:text-sm text-muted-foreground">
            Every property is different. We build cleaning plans that match your space, schedule, and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {benefits.map((b, idx) => (
            <div key={b.title} className={`p-6 lg:p-6 bg-white ${idx < benefits.length - 1 ? "md:border-r border-border" : ""} ${idx < 2 ? "border-b md:border-b-0 border-border" : ""}`}>
              <div className="mb-4 lg:mb-3 flex items-center justify-center w-12 h-12 lg:w-auto lg:h-auto rounded-full bg-[#6fbf00]/10 lg:bg-transparent" style={{ color: "#6fbf00" }}>
                <b.icon className="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 className="font-bold text-foreground text-lg lg:text-base">{b.title}</h3>
              <p className="mt-2 text-base lg:text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 sm:py-3 text-base sm:text-sm font-bold text-white transition-colors duration-200 hover:opacity-90"
            style={{ backgroundColor: "#6fbf00" }}
          >
            Request a Custom Package
          </Link>
        </div>
      </div>
    </section>
  )
}
