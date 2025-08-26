'use client';

import Link from 'next/link';
import { trackPartnersLinkFooterClicked } from '@/lib/analytics';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bgSecondary py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-bold text-lg mb-4">Thrifts</h3>
            <p className="text-textMuted max-w-xs">
              Africa&apos;s AI-powered  marketplace. List faster, sell
              smarter.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/404"
                  className="text-textMuted hover:text-text transition-colors"
                >
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  href="/apply/merchant"
                  className="text-textMuted hover:text-text transition-colors"
                >
                  Become a Merchant
                </Link>
              </li>
              <li>
                <Link
                  href="/company/partners"
                  className="text-textMuted hover:text-text transition-colors"
                  onClick={trackPartnersLinkFooterClicked}
                >
                  Press & Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-textMuted hover:text-text transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-textMuted hover:text-text transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-textMuted">
            © {currentYear} Thrifts. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
