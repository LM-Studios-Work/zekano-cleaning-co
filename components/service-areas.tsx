import { MapPin } from "lucide-react"

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
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Where We Work</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Service <span style={{ color: "#6fbf00" }}>Areas</span>
          </h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We provide professional cleaning services across Johannesburg and surrounding areas. Serving residential and commercial clients throughout these locations.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area) => (
            <div
              key={area}
              className="flex flex-col items-center gap-2 p-4 bg-white shadow-sm"
            >
              <MapPin className="h-6 w-6" style={{ color: "#1A9AD2" }} />
              <span className="font-semibold text-foreground text-sm text-center">{area}</span>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Don't see your area? <a href="/contact" className="font-medium hover:underline" style={{ color: "#6fbf00" }}>Contact us</a> — we may still be able to help. We're expanding our cleaning services across Johannesburg and surrounding areas regularly.
        </p>
      </div>
    </section>
  )
}
