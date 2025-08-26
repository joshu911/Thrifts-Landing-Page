import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "StreamLine transformed our operations completely. We've seen a 40% increase in productivity and our team loves how intuitive it is.",
    rating: 5,
    avatar: "/professional-woman-ceo.png",
  },
  {
    name: "Michael Chen",
    role: "Operations Director, GrowthCorp",
    content:
      "The automation features saved us countless hours every week. The ROI was evident within the first month of implementation.",
    rating: 5,
    avatar: "/professional-operations-director.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, InnovateLab",
    content:
      "Best investment we've made for our business. The analytics dashboard gives us insights we never had before.",
    rating: 5,
    avatar: "/professional-woman-founder-headshot.png",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Trusted by Industry Leaders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our customers are saying about their experience with StreamLine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>
                <blockquote className="text-card-foreground mb-6 leading-relaxed">"{testimonial.content}"</blockquote>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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
