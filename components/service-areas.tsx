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
    <section className="py-20 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Tight, left-aligned header */}
        <div className="mb-8 max-w-md">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Coverage</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Service Areas
          </h2>
          <p className="mt-2 text-base lg:text-sm text-muted-foreground">
            We provide cleaning services across Johannesburg and the surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 border border-border">
          {areas.map((area, idx) => (
            <div
              key={area}
              className={`flex items-center gap-3 p-5 lg:p-4 bg-white ${idx < areas.length - 1 ? "sm:border-r lg:border-r border-border border-b lg:border-b-0" : ""}`}
            >
              <MapPinIcon className="h-5 w-5 lg:h-4 lg:w-4 shrink-0" style={{ color: "#1A9AD2" }} />
              <span className="font-bold text-foreground text-base lg:text-sm">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm lg:text-xs text-muted-foreground">
          Not listed? <a href="/contact" className="font-bold underline" style={{ color: "#6fbf00" }}>Contact us</a>. We are continually expanding our coverage.
        </p>
      </div>
    </section>
  )
}
