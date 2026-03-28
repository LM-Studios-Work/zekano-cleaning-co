import { StarIcon } from "@/components/icons"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content: "Two years running. Always on time. Our house smells like it should after every visit. No notes.",
    author: "Thandi Dlamini",
    role: "Sandton homeowner",
    rating: 5,
  },
  {
    content: "Hired them for the office. Staff actually want to come in on Mondays now. That says enough.",
    author: "James van der Merwe",
    role: "Business owner, Randburg",
    rating: 5,
  },
  {
    content: "Move-out clean. Full deposit back. They cleaned spots I didn't know existed. Worth every cent.",
    author: "Nomsa Khumalo",
    role: "Tenant, Fourways",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Asymmetric header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
          <div className="max-w-md">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Client Feedback</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              What Our Clients Say
            </h2>
          </div>
          <p className="text-sm lg:text-xs text-muted-foreground lg:max-w-xs lg:text-right">
            Verified Google Reviews coming soon. These testimonials are from real Zenako clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4 lg:mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 lg:h-4 lg:w-4 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed text-base lg:text-sm font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="mt-5 lg:mt-4 flex items-center gap-3">
                  <div className="h-11 w-11 lg:h-10 lg:w-10 rounded-full flex items-center justify-center font-bold text-white text-sm lg:text-xs" style={{ backgroundColor: "#1A9AD2" }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm lg:text-xs">{testimonial.author}</div>
                    <div className="text-xs lg:text-[10px] text-muted-foreground uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
