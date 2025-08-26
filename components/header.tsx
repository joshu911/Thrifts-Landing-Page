'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

type HeaderProps = {
  brandName?: string;
  logoLetter?: string;
  /** If provided, clicking the CTA will call this handler instead of navigating */
  onPrimaryCta?: () => void;
  /** Fallback href if onPrimaryCta is not provided */
  ctaHref?: string;
  ctaText?: string;
  /** Show bottom border (default: true) */
  showBorder?: boolean;
};

const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/how', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function Header({
  brandName = 'Thrifts',
  onPrimaryCta,
  ctaHref = '/signup?role=seller',
  ctaText = 'Get started free',
  showBorder = true,
}: HeaderProps) {
  return (
    <header
      className={[
        'sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60',
        showBorder ? 'border-b border-slate-200' : '',
      ].join(' ')}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label={brandName}
        >
          <img src="/logo.png" alt="Logo" className="h-12 w-28 object-cover" />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-6 text-sm"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-slate-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA only (no Sign in) */}
        {onPrimaryCta ? (
          <Button size="sm" className="rounded-xl border border-orange-500" onClick={onPrimaryCta}>
            {ctaText}
          </Button>
        ) : (
          <Link href={ctaHref}>
            <Button size="sm" className="rounded-xl border border-orange-500 text-orange-500">
              {ctaText}
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}
