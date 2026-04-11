import { getPayload } from 'payload'
import configPromise from '@payload-config'
import {
  AwardStarIcon, MoneyBagIcon, RecycleIcon, GearIcon, CheckIcon,
  ShieldCheckIcon, LeafIcon, TrophyIcon,
} from "@/components/icons"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheckIcon,
  LeafIcon,
  GearIcon,
  TrophyIcon,
  AwardStarIcon,
  MoneyBagIcon,
  RecycleIcon,
}

const ownerBackedPoints = [
  "Direct Owner Supervision",
  "No lock-in contracts",
  "No price changes after quoting",
  "Familiar professionals each visit",
  "No changes to schedule without notice",
]

export async function WhyChooseUs() {
  const payload = await getPayload({ config: configPromise })
  const { docs: features } = await payload.find({
    collection: 'company-values',
    where: { section: { equals: 'why-choose-us' } },
    sort: 'order',
    limit: 20,
  })

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Why Us</span>
          <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-foreground">
            Our Commitment to Quality
          </h2>
          <p className="mt-4 text-base lg:text-lg leading-relaxed text-muted-foreground">
            Every visit, without exception. We prioritize your satisfaction and build lasting relationships with our clients.
          </p>
        </div>

        {/* Main Features Grid - 4 columns, scrollable on mobile */}
        <div className="flex overflow-x-auto pb-4 lg:pb-0 lg:grid lg:grid-cols-4 gap-6 lg:gap-8 mb-12 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory">
          {features.map((feature: any) => {
            const Icon = iconMap[feature.icon] || GearIcon
            return (
              <div
                key={feature.id}
                className="flex-none w-[280px] sm:w-[320px] lg:w-auto flex flex-col gap-4 p-6 lg:p-8 bg-white rounded-lg border border-border hover:shadow-xl hover:border-[#1A9AD2]/30 transition-all duration-300 snap-start"
              >
                <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#1A9AD2]/10 hover:bg-[#1A9AD2]/20 transition-colors" style={{ color: "#1A9AD2" }}>
                  <Icon className="w-7 h-7 lg:w-8 lg:h-8" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg lg:text-xl">{feature.title}</h3>
                  <p className="mt-2 text-sm lg:text-base leading-relaxed text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Owner-Backed Section */}
        <div className="p-8 lg:p-10 bg-white rounded-lg border-l-4 border-[#6fbf00]">
          <h3 className="text-2xl font-bold text-foreground mb-4">Owner-Backed Guarantee</h3>
          <p className="text-base lg:text-lg leading-relaxed text-muted-foreground mb-6">
            Accidents happen. Unlike large app-based services where disputes are routed through a call centre, at Zenako you have direct access to our management. If something goes wrong, we handle it personally, fairly, and without delay. We treat your home as our own.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
            {ownerBackedPoints.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckIcon className="w-5 h-5 shrink-0 flex-none" style={{ color: "#6fbf00" }} />
                <span className="text-base lg:text-lg text-foreground font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
