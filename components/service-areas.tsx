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

        {/* Horizontal Scrolling Banner */}
        <div className="relative -mx-6 lg:-mx-8 px-6 lg:px-8 overflow-x-auto">
          <div className="flex gap-4 lg:gap-6 min-w-min pb-4">
            {areas.map((area) => (
              <div
                key={area.id}
                className="flex items-center gap-3 px-5 py-3 lg:px-6 lg:py-4 bg-white rounded-lg border border-border shrink-0 hover:shadow-md hover:border-[#1A9AD2]/30 transition-all duration-200"
              >
                <MapPinIcon className="h-5 w-5 shrink-0" style={{ color: "#1A9AD2" }} />
                <span className="font-medium text-foreground text-base whitespace-nowrap">{area.name as string}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Not listed? <a href="/contact" className="font-bold underline transition-colors hover:text-foreground" style={{ color: "#6fbf00" }}>Contact us</a>. We are continually expanding our coverage.
        </p>
      </div>
    </section>
  )
}
