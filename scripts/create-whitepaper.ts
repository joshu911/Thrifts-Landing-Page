// scripts/create-whitepaper.ts

// Use CommonJS requires so ts-node (in CJS mode) won’t error
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Load whitepaper JSON
const whitepaper = fs.readFileSync("content/whitepaper.json", "utf-8");
const { meta, sections } = JSON.parse(whitepaper);

// Build the whitepaper page content
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
}
`;

// Ensure the route directory exists
const routePath = path.join("app", "whitepaper");
if (!fs.existsSync(routePath)) {
  fs.mkdirSync(routePath, { recursive: true });
}

// Write the generated page
fs.writeFileSync(path.join(routePath, "page.tsx"), whitepaperPage);

// Format with Prettier
try {
  execSync('npx prettier --write "app/whitepaper/page.tsx"', { stdio: "inherit" });
  console.log("✅ Whitepaper page generated and formatted.");
} catch (err) {
  console.error("⚠️ Prettier formatting failed:", err);
}
