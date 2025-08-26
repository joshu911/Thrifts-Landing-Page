import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const whitepaper = fs.readFileSync('content/whitepaper.json', 'utf-8');
const { meta, sections } = JSON.parse(whitepaper);

// Create whitepaper page
const whitepaperPage = `import { Metadata } from 'next';
import Link from 'next/link';
import whitepaperContent from '@/content/whitepaper.json';

export const metadata: Metadata = {
  title: 'White Paper | Thrifts',
  description: whitepaperContent.meta.description,
  openGraph: {
    title: whitepaperContent.meta.title,
    description: whitepaperContent.meta.description,
    type: 'article',
    publishedTime: '${meta.lastUpdated}',
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
}`;

// Create whitepaper route directory
const routePath = path.join('app', 'whitepaper');
if (!fs.existsSync(routePath)) {
  fs.mkdirSync(routePath, { recursive: true });
}

// Write page component
fs.writeFileSync(path.join(routePath, 'page.tsx'), whitepaperPage);

// Format with Prettier
execSync('npx prettier --write "app/whitepaper/page.tsx"');
