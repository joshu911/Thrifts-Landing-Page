import './globals.css';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: 'Thrifts',
  description: 'Merchant-first, AI-powered resale.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#EFEFEF] text-black">{children}</body>
    </html>
  );
}
