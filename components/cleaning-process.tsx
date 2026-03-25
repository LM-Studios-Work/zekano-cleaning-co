import { ClipboardIcon, CalendarIcon, SparkleIcon, SmileFaceIcon } from "@/components/icons"

const steps = [
  {
    icon: ClipboardIcon,
    step: "01",
    title: "Tell Us What You Need",
    description: "WhatsApp, call, or fill out the form. We quote within hours, not days.",
  },
  {
    icon: CalendarIcon,
    step: "02",
    title: "Pick a Date",
    description: "Weekday, weekend, after hours. You choose. We show up.",
  },
  {
    icon: SparkleIcon,
    step: "03",
    title: "We Clean",
    description: "Our team arrives with everything. You provide access. That's it.",
  },
  {
    icon: SmileFaceIcon,
    step: "04",
    title: "Walk Into Clean",
    description: "If something's off, say the word. We come back and fix it.",
  },
]

export function CleaningProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Asymmetric header — left-aligned, not centered */}
        <div className="mb-12 max-w-lg">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>How It Works</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Four steps. No runaround.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {steps.map((s, idx) => (
            <div key={s.title} className={`relative p-6 ${idx < steps.length - 1 ? "lg:border-r border-border" : ""} ${idx < 2 ? "sm:border-b lg:border-b-0 border-border" : ""}`}>
              <span className="text-5xl font-black text-gray-100 absolute top-4 right-6 select-none">{s.step}</span>
              <div className="relative z-10">
                <div className="mb-4" style={{ color: "#1A9AD2" }}>
                  <s.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-foreground text-base">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
