// Content types for JSON files

export interface LandingContent {
  hero: {
    headline: string;
    subhead: string;
    primaryCta: string;
  };
  aiIntro: {
    heading: string;
    subtext: string;
    inlinePartnersLinkLabel: string;
  };
  howItWorksMerchants: Array<{
    title: string;
    desc: string;
  }>;
  sellerTools: string[];
  testimonials: Array<{
    quote: string;
    name: string;
    role: string;
  }>;
  featuredCarousel: {
    sectionTitle: string;
    items: Array<{
      title: string;
      category: string;
      price: string;
      condition: string;
    }>;
  };
  faq: Array<{
    q: string;
    a: string;
  }>;
}

export interface MerchantContent {
  hero: {
    title: string;
    subtitle: string;
  };
  eligibility: string[];
  form: {
    fields: Array<{
      id: string;
      label: string;
      placeholder?: string;
      help?: string;
      type?: string;
      options?: string[];
    }>;
    submitLabel: string;
    privacyNote: string;
  };
  success: {
    title: string;
    body: string;
  };
}

export interface PartnersContent {
  hero: {
    title: string;
    subtitle: string;
  };
  tabs: Array<{
    id: 'merchant' | 'external';
    label: string;
    intro: string;
    kpiBullets?: string[];
    thesisBullets?: string[];
    form: {
      title: string;
      fields: Array<{
        id: string;
        label: string;
        placeholder?: string;
        type?: string;
        options?: string[];
      }>;
      submitLabel: string;
    };
  }>;
  complianceNote: string;
}

export interface WhitepaperContent {
  meta: {
    title: string;
    description: string;
    lastUpdated: string;
  };
  sections: Array<{
    h2: string;
    p: string;
  }>;
  downloadCta: string;
}

export interface ExploreContent {
  header: {
    title: string;
    subtitle: string;
  };
  filters: string[];
  emptyState: {
    title: string;
    body: string;
    cta: string;
  };
}

export interface NotFoundContent {
  title: string;
  body: string;
  ctaPrimary: string;
  ctaSecondary: string;
}
