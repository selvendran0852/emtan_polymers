import { MetadataRoute } from 'next';
import { PRODUCTS } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://emtanpolymers.com';

  // Core pages
  const coreRoutes = ['', '/products', '/gallery', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic product detail routes
  const productRoutes = PRODUCTS.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.64,
  }));

  return [...coreRoutes, ...productRoutes];
}
