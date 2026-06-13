export interface Product {
  slug: string;
  name: string;
  category: 'rollers' | 'wheels' | 'seals-components' | 'pipeline-products' | 'industrial-solutions';
  description: string;
  applications: string[];
  features: string[];
  specifications: Record<string, string>;
  industries: string[];
  imageUrl: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  productRequirement: string;
  message: string;
}
