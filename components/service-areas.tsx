import { MapPinIcon } from "@/components/icons"

const areas = [
  "Sandton",
  "Randburg",
  "Fourways",
  "Midrand",
  "Bryanston",
  "Johannesburg North",
]

export function ServiceAreas() {
  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Tight, left-aligned header */}
        <div className="mb-8 max-w-md">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Coverage</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Where we work
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cleaning services across Johannesburg. If you're nearby, we're there.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-0 border border-border">
          {areas.map((area, idx) => (
            <div
              key={area}
              className={`flex items-center gap-2 p-4 bg-white ${idx < areas.length - 1 ? "border-r border-border" : ""} ${idx < 4 ? "border-b sm:border-b lg:border-b-0 border-border" : ""}`}
            >
              <MapPinIcon className="h-4 w-4 shrink-0" style={{ color: "#1A9AD2" }} />
              <span className="font-bold text-foreground text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Not listed? <a href="/contact" className="font-bold underline" style={{ color: "#6fbf00" }}>Ask us</a> — we're expanding.
        </p>
      </div>
    </section>
  )
}
