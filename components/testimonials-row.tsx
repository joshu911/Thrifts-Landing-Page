import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import landingContent from "@/content/landing.json"

export function TestimonialsRow() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by merchants and shoppers
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">See what our community is saying</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {landingContent.testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-800 border-0 rounded-2xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
