import { Metadata } from 'next';
import Link from 'next/link';
import whitepaperContent from '@/content/whitepaper.json';

export const metadata: Metadata = {
  title: 'White Paper | Thrifts',
  description: whitepaperContent.meta.description,
  openGraph: {
    title: whitepaperContent.meta.title,
    description: whitepaperContent.meta.description,
    type: 'article',
    publishedTime: '2025-08-21',
  },
};

export default function Whitepaper() {
  return (
    <main className="min-h-screen bg-bg py-16 px-4 sm:px-6 lg:px-8">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <h1>{whitepaperContent.meta.title}</h1>

        <div className="text-textMuted mb-8">
          <p>Last updated: {whitepaperContent.meta.lastUpdated}</p>
          <p>
            <Link
              href="/whitepaper.pdf"
              className="text-brand hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {whitepaperContent.downloadCta} (PDF)
            </Link>
          </p>
        </div>

        {whitepaperContent.sections.map((section) => (
          <section key={section.h2}>
            <h2>{section.h2}</h2>
            <p>{section.p}</p>
          </section>
        ))}
      </article>
    </main>
  );
}
