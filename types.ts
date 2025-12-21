export type Language = 'zh' | 'en';

export interface BlogPost {
  id: string;
  title: {
    zh: string;
    en: string;
  };
  date: string;
  excerpt: {
    zh: string;
    en: string;
  };
  content: {
    zh: string;
    en: string;
  }; // Markdown-like string or HTML string
  tags: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
}

export interface LocalizedContent {
  nav: {
    home: string;
    services: string;
    ipDecisionLab: string;
    ptaxial: string;
    about: string;
    blog: string;
    contact: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroDesc: string;
    ctaButton: string;
    sections: {
      services: string;
      ptaxial: string;
      decisionLab: string;
      insights: string;
    }
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  about: {
    title: string;
    content: string[];
  };
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    }
  };
  ptaxial: {
    title: string;
    subtitle: string;
    desc: string[];
    features: { title: string; description: string }[];
  };
  decisionLab: {
    title: string;
    subtitle: string;
    desc: string[];
    button: string;
    features: { title: string; description: string }[];
  }
}