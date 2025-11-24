export type Language = 'HU' | 'EN';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

export interface CaseStudy {
  client: string;
  result: string;
  growth: number;
  data: { name: string; value: number }[];
}

export interface Translation {
  nav: {
    home: string;
    services: string;
    cases: string;
    pricing: string;
    contact: string;
    book: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  services: {
    title: string;
    items: ServiceItem[];
  };
  stats: {
    title: string;
    items: CaseStudy[];
  };
  pricing: {
    title: string;
    description: string;
    cta: string;
  };
  about: {
    title: string;
    content: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    alertSuccess: string;
    alertError: string;
  };
  footer: {
    rights: string;
    privacy: string;
    terms: string;
  };
}