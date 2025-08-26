"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role?: string;
}

interface TestimonialsRowProps {
  testimonials: Testimonial[];
}

export default function TestimonialsRow({ testimonials }: TestimonialsRowProps) {
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
          {testimonials.map((t, index) => (
            <motion.figure
              key={`${t.name}-${index}`}
              className="card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote className="w-8 h-8 text-brand mb-4" aria-hidden="true" />
              <blockquote className="mb-6">
                {/* Use <q> to render typographic quotes without raw " characters in JSX */}
                <p className="text-lg font-medium italic">
                  <q>{t.quote}</q>
                </p>
              </blockquote>
              <figcaption>
                <p className="font-semibold">{t.name}</p>
                {t.role && <p className="text-sm text-textMuted">{t.role}</p>}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
