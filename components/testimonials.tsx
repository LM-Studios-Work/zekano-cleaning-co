import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    content: "Zekano Cleaning Co has been cleaning our home for over two years now. They're always on time, thorough, and our house smells amazing after every visit. Highly recommend!",
    author: "Sarah Johnson",
    role: "Homeowner",
    rating: 5,
  },
  {
    content: "We hired them for our office cleaning and couldn't be happier. The team is professional, discrete, and our workspace has never looked better. Our employees love coming to work now!",
    author: "Michael Chen",
    role: "Business Owner",
    rating: 5,
  },
  {
    content: "Used their move-out cleaning service and got my full deposit back! They cleaned every corner, including areas I didn't even know existed. Worth every penny.",
    author: "Emily Rodriguez",
    role: "Apartment Renter",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl text-balance">What Our <span style={{ color: "#6fbf00" }}>Customers</span> Say</h2>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-6 text-sm">
                  "{testimonial.content}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full flex items-center justify-center font-bold text-white" style={{ backgroundColor: "#1A9AD2" }}>
                    <span className="text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">{testimonial.author}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
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
