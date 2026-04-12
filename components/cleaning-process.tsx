import { ClipboardIcon, CalendarIcon, SparkleIcon, SmileFaceIcon } from "@/components/icons"

const steps = [
  {
    icon: ClipboardIcon,
    step: "01",
    title: "Set Your Priorities",
    description: "Tell us which rooms need the most attention and any specific preferences or areas to focus on.",
  },
  {
    icon: CalendarIcon,
    step: "02",
    title: "Choose Your Schedule",
    description: "Select weekly or fortnightly visits at a time that suits your household routine.",
  },
  {
    icon: SparkleIcon,
    step: "03",
    title: "Maintenance Rotation",
    description: "We follow a consistent checklist and rotate deeper tasks like skirting boards or inside windows each visit.",
  },
  {
    icon: SmileFaceIcon,
    step: "04",
    title: "Manage Easily",
    description: "Pause or reschedule with simple notice as your life changes. No lock-in contracts, ever.",
  },
]

export function CleaningProcess() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header - two-column editorial */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6 mb-16 pb-10 border-b border-border">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "#6fbf00" }}>Process</span>
            <h2 className="mt-3 text-4xl lg:text-5xl font-black text-foreground leading-tight text-balance">
              Simple to start.<br />
              <span style={{ color: "#1A9AD2" }}>Easy to keep.</span>
            </h2>
          </div>
          <p className="lg:max-w-xs text-base text-muted-foreground leading-relaxed">
            Getting started with a regular clean is straightforward and stays that way with no paperwork, no lock-ins.
          </p>
        </div>

        {/* Steps - horizontal timeline on desktop */}
        <div className="relative">
          {/* Connecting line - desktop only */}
          <div
            className="hidden lg:block absolute top-[2.75rem] left-0 right-0 h-px"
            style={{ backgroundColor: "#e0e0e0" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
            {steps.map((s, idx) => (
              <div
                key={s.title}
                className={`relative flex flex-col gap-5 py-8 pr-8 ${
                  idx < steps.length - 1
                    ? "lg:pr-10 border-b lg:border-b-0 border-border"
                    : ""
                } ${idx > 0 ? "lg:pl-10" : ""}`}
              >
                {/* Step indicator with circle on the line */}
                <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                  {/* Circle dot on desktop timeline */}
                  <div
                    className="hidden lg:flex items-center justify-center w-10 h-10 shrink-0 mb-8 border-2 bg-white z-10 relative"
                    style={{ borderColor: "#1A9AD2" }}
                  >
                    <s.icon className="w-5 h-5" style={{ color: "#1A9AD2" }} />
                  </div>

                  {/* Mobile: icon + step number inline */}
                  <div
                    className="lg:hidden flex items-center justify-center w-12 h-12 shrink-0"
                    style={{ backgroundColor: "rgba(26,154,210,0.1)", color: "#1A9AD2" }}
                  >
                    <s.icon className="w-6 h-6" />
                  </div>

                  {/* Step number - large muted */}
                  <span
                    className="text-5xl lg:text-6xl font-black leading-none select-none lg:hidden"
                    style={{ color: "rgba(26,154,210,0.12)" }}
                  >
                    {s.step}
                  </span>
                </div>

                {/* Step number above title on desktop */}
                <div className="hidden lg:block">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.2em]"
                    style={{ color: "#6fbf00" }}
                  >
                    Step {s.step}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-foreground text-lg lg:text-xl leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Accent bottom bar on desktop - highlights current step progression */}
                <div
                  className="hidden lg:block absolute bottom-0 left-0 h-[3px]"
                  style={{
                    width: `${((idx + 1) / steps.length) * 100}%`,
                    backgroundColor: idx === 0 ? "#6fbf00" : "transparent",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-t border-border pt-8">
          <p className="text-base font-medium text-foreground">
            Ready to get started?
          </p>
          <a
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#6fbf00" }}
          >
            Book a Regular Clean
          </a>
          <span className="text-sm text-muted-foreground">
            No commitment. Cancel anytime.
          </span>
        </div>

      </div>
    </section>
  )
}
