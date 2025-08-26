// app/company/partners/page.tsx
import type { Metadata } from "next";
import partnersContent from "@/content/partners.json";
import PartnersTabs from "@/components/PartnersTabs";
import type { ComponentProps } from "react";

export const metadata: Metadata = {
  title: "Partners at Thrifts | Become an Investor",
  description:
    "Join us in building Africa's leading AI-powered secondhand marketplace. For top merchants and external investors.",
  robots: { index: false, follow: false },
};

// Infer the props type from the component (no need to export it)
type PartnersTabsProps = ComponentProps<typeof PartnersTabs>;

// Runtime-safe coercion from JSON -> the literal union "merchant" | "external"
function coerceTabId(id: unknown): "merchant" | "external" {
  return id === "external" ? "external" : "merchant";
}

export default function Partners() {
  // Pull tabs from JSON without using `any`
  const maybeTabs: unknown = (partnersContent as Record<string, unknown>)?.tabs;
  const rawTabs: unknown[] = Array.isArray(maybeTabs) ? maybeTabs : [];

  // Adapt JSON to the exact shape PartnersTabs expects
  const tabs = rawTabs.map((raw) => {
    const t = raw as {
      id?: unknown;
      form?: { fields?: unknown[] } & Record<string, unknown>;
    } & Record<string, unknown>;

    return {
      ...t,
      id: coerceTabId(t.id),
      form: {
        ...(t.form ?? {}),
        fields: Array.isArray(t.form?.fields) ? t.form!.fields : [],
      },
    };
  }) as PartnersTabsProps["tabs"];

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
          tabs={tabs}
          complianceNote={partnersContent.complianceNote}
        />
      </div>
    </main>
  );
}
