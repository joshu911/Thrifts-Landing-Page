import { Metadata } from 'next';
import landingContent from '@/content/landing.json';
import HeroMerchant from '@/components/HeroMerchant';
import TrustRow from '@/components/TrustRow';
import HowItWorks from '@/components/how-it-works';
import AiAgents from '@/components/AiAgents';
import SellerTools from '@/components/SellerTools';
import TestimonialsRow from '@/components/TestimonialsRow';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import AnalyticsTracker from '@/components/AnalyticsTracker';

export const metadata: Metadata = {
  title: 'Thrifts – Become a Merchant | Partner | Thrifter',
  description:
    "Join Africa's smartest secondhand marketplace. Use AI-powered tools to list faster, sell smarter, and grow your business with automated pricing and local pickup options.",
  openGraph: {
    title: 'Thrifts – Become a Merchant | Partner | Thrifter',
    description:
      "Join Africa's smartest  marketplace. Use AI-powered tools to list faster, sell smarter, and grow your business with automated pricing and local pickup options.",
    type: 'website',
  },
  alternates: {
    canonical: 'https://thrifts.ai',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Thrifts',
  description: 'AI-powered secondhand marketplace',
  url: 'https://thrifts.ai',

};

export default function Home() {
  return (
    <main>
      <AnalyticsTracker />
      <HeroMerchant
        headline={landingContent.hero.headline}
        subhead={landingContent.hero.subhead}
        primaryCta={landingContent.hero.primaryCta}
      />

      <TrustRow />

      <HowItWorks steps={landingContent.howItWorksMerchants} />

      <AiAgents
        heading={landingContent.aiIntro.heading}
        subtext={landingContent.aiIntro.subtext}
        inlinePartnersLinkLabel={landingContent.aiIntro.inlinePartnersLinkLabel}
      />

      <SellerTools tools={landingContent.sellerTools} />

      <TestimonialsRow testimonials={landingContent.testimonials} />

      <FAQ items={landingContent.faq} />

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...jsonLd,
            '@graph': [
              jsonLd,
              {
                '@type': 'WebSite',
                name: 'Thrifts',
                url: 'https://thrifts.africa',
                potentialAction: {
                  '@type': 'SearchAction',
                  target:
                    'https://thrifts.africa/search?q={search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
              {
                '@type': 'FAQPage',
                mainEntity: landingContent.faq.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: item.a,
                  },
                })),
              },
            ],
          }),
        }}
      />
    </main>
  );
}
