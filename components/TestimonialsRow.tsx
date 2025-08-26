'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

interface TestimonialsRowProps {
  testimonials: Testimonial[];
}

export default function TestimonialsRow({
  testimonials,
}: TestimonialsRowProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bgSecondary">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          What Our Community Says
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-brand mb-4" />
              <blockquote className="mb-6">
                <p className="text-lg font-medium italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>
              <footer>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-textMuted">{testimonial.role}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
