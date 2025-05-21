export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export interface FAQItemType {
  id: number;
  question: string;
  answer: string;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProblemType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface NavbarProps {
  logo: string;
  menuItems: Array<{
    label: string;
    href: string;
  }>;
  ctaText: string;
  ctaHref: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA: {
    text: string;
    href: string;
  };
  image: string;
  imageAlt: string;
  trustedBy: Array<string>;
}

export interface ProblemSectionProps {
  title: string;
  subtitle: string;
  problems: ProblemType[];
  ctaText: string;
  ctaHref: string;
  statsText: string;
}

export interface SolutionSectionProps {
  title: string;
  subtitle: string;
  features: FeatureType[];
  image: string;
  imageAlt: string;
  stats: {
    value: string;
    label: string;
  };
}

export interface CTASectionProps {
  variant: 'primary' | 'secondary' | 'final';
  title: string;
  subtitle?: string;
  ctaText: string;
  ctaHref: string;
  benefits?: string[];
}

export interface SocialProofSectionProps {
  title: string;
  subtitle: string;
  testimonials: TestimonialType[];
  trustedCompanies: string[];
  satisfactionRate: {
    value: string;
    label: string;
  };
}

export interface FAQSectionProps {
  title: string;
  subtitle: string;
  faqs: FAQItemType[];
  ctaTitle: string;
  ctaText: string;
  ctaHref: string;
}

export interface CalendlySectionProps {
  title: string;
  subtitle: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  statsBox: {
    title: string;
    description: string;
  };
}

export interface FooterProps {
  logo: string;
  description: string;
  socialLinks: Array<{
    icon: string;
    href: string;
  }>;
  sections: Array<{
    title: string;
    links: Array<{
      label: string;
      href: string;
    }>;
  }>;
  copyright: string;
  policies: Array<{
    label: string;
    href: string;
  }>;
}