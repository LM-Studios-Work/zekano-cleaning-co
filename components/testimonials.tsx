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
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Asymmetric header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-10 gap-4">
          <div className="max-w-md">
            <span className="text-sm font-bold uppercase tracking-widest" style={{ color: "#6fbf00" }}>Reviews</span>
            <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Don't take our word for it.
            </h2>
          </div>
          <p className="text-xs text-muted-foreground lg:max-w-xs lg:text-right">
            Google Reviews coming soon once our profile is verified. These are real clients.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-border">
              <CardContent className="p-6">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-500" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed text-sm font-medium">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full flex items-center justify-center font-bold text-white text-xs" style={{ backgroundColor: "#1A9AD2" }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-xs">{testimonial.author}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{testimonial.role}</div>
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
