import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { MapPinIcon } from "@/components/icons"

export async function ServiceAreas() {
  const payload = await getPayload({ config: configPromise })
  const { docs: areas } = await payload.find({
    collection: 'service-areas',
    sort: 'order',
    limit: 50,
  })

  return (
    <section className="py-16 lg:py-20 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Coverage</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
            Service Areas
          </h2>
          <p className="mt-2 text-base leading-relaxed text-muted-foreground max-w-2xl">
            We provide cleaning services across Johannesburg and the surrounding areas.
          </p>
        </div>

        {/* Responsive Grid — 2 cols mobile, auto-fill on larger screens */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {areas.map((area) => (
            <div
              key={area.id}
              className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg border border-border hover:shadow-md hover:border-[#1A9AD2]/30 transition-all duration-200"
            >
              <MapPinIcon className="h-4 w-4 shrink-0" style={{ color: "#1A9AD2" }} />
              <span className="font-medium text-foreground text-sm leading-tight">{area.name as string}</span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Not listed? <a href="/contact" className="font-bold underline transition-colors hover:text-foreground" style={{ color: "#6fbf00" }}>Contact us</a>. We are continually expanding our coverage.
        </p>
      </div>
    </section>
  )
}
