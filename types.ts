
export interface Product {
  id: string;
  slug: string;
  title: string;
  headline: string;
  painPoint: string;
  description: string;
  image: string;
  features: string[];
  advantages: string[];
  targetAudience: string;
  workflow?: {
    step: string;
    description: string;
  }[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Produtos' | 'Automações' | 'Comercial' | 'Suporte';
}
