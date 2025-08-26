"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  brandName?: string;
  logoLetter?: string;
  onPrimaryCta?: () => void;
  ctaHref?: string;
  ctaText?: string;
  showBorder?: boolean;
};

const NAV_LINKS = [
  { href: "/features", label: "Features" },
  { href: "/how", label: "How it works" },
  { href: "/whitepaper", label: "Whitepaper" },
  { href: "#faq", label: "FAQ" },
];

export default function Header({
  brandName = "Thrifts",
  onPrimaryCta,
  ctaHref = "/signup?role=seller",
  ctaText = "Get started free",
  showBorder = true,
}: HeaderProps) {
  return (
    <header
      className={[
        "sticky top-0 z-40 w-full bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60",
        showBorder ? "border-b border-slate-200" : "",
      ].join(" ")}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2" aria-label={brandName}>
          <Image
            src="/logo.png"              // put your logo in /public/logo.png
            alt={`${brandName} logo`}
            width={112}                  // matches w-28 (7rem)
            height={48}                  // matches h-12 (3rem)
            priority                     // helps LCP for above-the-fold logo
            className="h-12 w-28 object-cover"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm" aria-label="Main navigation">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-slate-600">
              {item.label}
            </Link>
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
