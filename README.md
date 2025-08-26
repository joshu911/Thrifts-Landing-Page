# Thrifts Landing Page

Production-ready landing site for Thrifts — a multi-category secondhand marketplace.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Framer Motion
- Lucide Icons

## Features

- Merchant-focused landing with AI features
- Dark mode support
- WCAG 2.2 AA compliant
- Mobile-first, responsive design
- Analytics-ready
- SEO optimized

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
.
├── app/                 # Next.js app router pages
├── components/         # React components
├── content/           # JSON content files
├── lib/              # Utilities (analytics, flags)
└── public/           # Static assets
```

## Environment Variables

None required for basic setup.

## Performance

- Optimized images (AVIF/WebP)
- Minimal JS bundle
- Critical CSS inlined
- Lighthouse score ≥90

## Accessibility

- WCAG 2.2 AA compliant
- Semantic HTML
- ARIA attributes
- Keyboard navigation
- Focus management

## Analytics

Helper functions in `lib/analytics.ts` ready to wire up to your analytics provider.

## License

Private - All rights reserved
