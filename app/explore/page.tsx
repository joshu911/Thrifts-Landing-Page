'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import exploreContent from '@/content/explore.json';

export const metadata: Metadata = {
  title: 'Explore Featured Shops | Thrifts',
  description:
    'Browse curated products across categories from trusted sellers on Thrifts.',
};

export default function Explore() {
  return (
    <main className="min-h-screen bg-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {exploreContent.header.title}
          </h1>
          <p className="text-lg text-textMuted">
            {exploreContent.header.subtitle}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          {exploreContent.filters.map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-lg bg-bgSecondary border border-gray-200 text-textMuted hover:border-brand transition-colors"
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <motion.div
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            {exploreContent.emptyState.title}
          </h2>
          <p className="text-textMuted mb-8">
            {exploreContent.emptyState.body}
          </p>
          <Link href="/" className="btn-brand">
            {exploreContent.emptyState.cta}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
