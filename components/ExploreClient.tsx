// components/ExploreClient.tsx  (CLIENT COMPONENT)
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

type ExploreContent = {
  header: { title: string; subtitle: string };
  filters: string[];
  emptyState: { title: string; body: string; cta: string };
};

export default function ExploreClient({
  content,
}: {
  content: ExploreContent;
}) {
  return (
    <main className="min-h-screen bg-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {content.header.title}
          </h1>
          <p className="text-lg text-textMuted">{content.header.subtitle}</p>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap gap-4 mb-8"
          role="tablist"
          aria-label="Explore filters"
        >
          {content.filters.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
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
            {content.emptyState.title}
          </h2>
          <p className="text-textMuted mb-8">{content.emptyState.body}</p>
          <Link href="/" className="btn-brand">
            {content.emptyState.cta}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
