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
    <section className="py-20 lg:py-28 bg-card overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header — editorial left-right split */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16 lg:mb-20 border-b border-border pb-10">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>Why Zenako</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
              Not just clean.<br />
              <span style={{ color: "#1A9AD2" }}>Done right.</span>
            </h2>
          </div>
          <p className="lg:max-w-sm text-base lg:text-lg leading-relaxed text-muted-foreground lg:text-right">
            Every visit, without exception — we prioritise your satisfaction and build lasting relationships with our clients.
          </p>
        </div>

        {/* Feature cards — asymmetric two-column stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mb-px">
          {features.map((feature: any, idx: number) => {
            const Icon = iconMap[feature.icon] || GearIcon
            const isHighlighted = idx === 0
            return (
              <div
                key={feature.id}
                className={`group relative flex flex-col gap-6 p-8 lg:p-10 transition-colors duration-200 ${
                  isHighlighted
                    ? "bg-[#1A9AD2] text-white"
                    : "bg-white hover:bg-[#f7fbfe]"
                }`}
              >
                {/* Step number watermark */}
                <span
                  className={`absolute top-6 right-8 text-7xl font-black select-none leading-none tabular-nums ${
                    isHighlighted ? "text-white/10" : "text-[#1A9AD2]/06"
                  }`}
                  style={{ color: isHighlighted ? "rgba(255,255,255,0.08)" : "rgba(26,154,210,0.06)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-12 h-12 shrink-0 ${
                    isHighlighted
                      ? "bg-white/15 text-white"
                      : "bg-[#1A9AD2]/10 text-[#1A9AD2]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className={`font-bold text-xl lg:text-2xl ${isHighlighted ? "text-white" : "text-foreground"}`}>
                    {feature.title}
                  </h3>
                  <p className={`mt-3 text-base leading-relaxed ${isHighlighted ? "text-white/80" : "text-muted-foreground"}`}>
                    {feature.description}
                  </p>
                </div>

                {/* Bottom accent line on hover */}
                {!isHighlighted && (
                  <div
                    className="absolute bottom-0 left-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#6fbf00" }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Owner-Backed Guarantee — full-width dark band */}
        <div className="mt-px bg-foreground text-background p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
            <div className="lg:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>Our Guarantee</span>
              <h3 className="mt-3 text-2xl lg:text-3xl font-black leading-tight text-balance">
                Owner-Backed Accountability.<br />
                <span style={{ color: "#1A9AD2" }}>No call centres. No runarounds.</span>
              </h3>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "rgba(229,229,229,0.75)" }}>
                Accidents happen. Unlike large app-based services where disputes are routed through a call centre, at Zenako you have direct access to our management. If something goes wrong, we handle it personally, fairly, and without delay.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {ownerBackedPoints.map((item) => (
                <div key={item} className="flex items-center gap-3 border border-white/10 px-4 py-3">
                  <CheckIcon className="w-4 h-4 shrink-0" style={{ color: "#6fbf00" }} />
                  <span className="text-sm font-medium text-background">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
