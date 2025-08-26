# Local Development Instructions

## Setup

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Running Locally

1. Start the development server:

```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format with Prettier

## Environment Variables

None required for basic development.

## Testing for Investors

1. Append `?utm=investor` to any URL to see investor-specific content
2. OR manually set `thrifts_investor=1` cookie

## Developer Notes

- Uses Next.js 14 App Router
- Dark mode via `next-themes`
- TypeScript for type safety
- Tailwind CSS for styling
- shadcn/ui for components
