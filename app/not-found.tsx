'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import notFoundContent from '@/content/404.json';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          {notFoundContent.title}
        </h1>
        <p className="text-lg text-textMuted mb-8">
          {notFoundContent.body}
        </p>
        <div className="space-x-4">
          <Link href="/" className="btn-brand">
            {notFoundContent.ctaPrimary}
          </Link>
          <Link href="/explore" className="btn-outline">
            {notFoundContent.ctaSecondary}
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
