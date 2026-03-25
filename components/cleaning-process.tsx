import { FileText, CalendarDays, Sparkles, Smile } from "lucide-react"

const steps = [
  {
    icon: FileText,
    step: "01",
    title: "Request a Quote",
    description: "Tell us about your space and cleaning needs. We'll provide a transparent, no-obligation quote.",
  },
  {
    icon: CalendarDays,
    step: "02",
    title: "Schedule Your Cleaning",
    description: "Pick a date and time that works for you. We offer flexible scheduling including weekends.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Professional Cleaning Service",
    description: "Our trained team arrives on time with all supplies and equipment to get the job done right.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Enjoy Your Clean Space",
    description: "Walk into a fresh, spotless space. Satisfaction guaranteed or we'll re-clean for free.",
  },
]

export function CleaningProcess() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">How It Works</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Our <span style={{ color: "#6fbf00" }}>Cleaning</span> Process
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Getting your space professionally cleaned is simple. Here's how it works from start to finish.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, idx) => (
            <div key={s.title} className="relative text-center">
              {/* Connector line (hidden on last item and mobile) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-px bg-gray-200" />
              )}
              <div
                className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full relative z-10"
                style={{ backgroundColor: "rgba(26, 154, 210, 0.1)", color: "#1A9AD2" }}
              >
                <s.icon className="h-8 w-8" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Step {s.step}</span>
              <h3 className="mt-2 font-bold text-foreground text-lg">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
