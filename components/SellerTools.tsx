'use client';

import { motion } from 'framer-motion';
import { BarChart2, Box, Briefcase, RotateCw } from 'lucide-react';

interface SellerToolsProps {
  tools: string[];
}

const TOOL_ICONS = {
  'Real-time inventory': Box,
  'Light analytics (top sellers, views)': BarChart2,
  'Shop pages & branding': Briefcase,
  'Easy refunds & order updates': RotateCw,
};

export default function SellerTools({ tools }: SellerToolsProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Seller Tools
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => {
            const Icon = TOOL_ICONS[tool as keyof typeof TOOL_ICONS] || Box;

            return (
              <motion.div
                key={tool}
                className="card group hover:shadow-lg transition-shadow duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{tool}</h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
