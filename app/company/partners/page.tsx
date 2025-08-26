// app/company/partners/page.tsx
import type { Metadata } from "next";
import partnersContent from "@/content/partners.json";
import PartnersTabs from "@/components/PartnersTabs";

export const metadata: Metadata = {
  title: "Partners at Thrifts | Become an Investor",
  description:
    "Join us in building Africa's leading AI-powered secondhand marketplace. For top merchants and external investors.",
  robots: { index: false, follow: false },
};

export default function Partners() {
  return (
    <main className="min-h-screen bg-bg py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {partnersContent.hero.title}
          </h1>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            {partnersContent.hero.subtitle}
          </p>
        </div>

        {/* Tabs */}
        <PartnersTabs
          tabs={partnersContent.tabs}
          complianceNote={partnersContent.complianceNote}
        />
      </div>
    </main>
  );
}
