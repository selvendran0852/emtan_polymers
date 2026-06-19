import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, Tag, ShieldCheck } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import QuoteForm from '@/components/QuoteForm';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    };
  }

  return {
    title: `${product.name} | EMTAN Polymers Chennai`,
    description: `${product.name} polyurethane specifications, applications, and features. Manufactured for B2B industrial engineering in Chennai, India.`,
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | polyurethane Manufacturer`,
      description: product.description,
      url: `https://emtanpolymers.com/products/${product.slug}`,
      images: [
        {
          url: product.imageUrl,
          alt: product.name,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      {/* Breadcrumbs & Navigation */}
      <div className="bg-slate-50/50 dark:bg-slate-900/20 border-b border-card-border py-4 transition-colors">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-text">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-accent-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/products" className="hover:text-accent-orange transition-colors">
              Products
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 hover:text-accent-orange transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Catalog</span>
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Product Images & Technical Info */}
          <div className="lg:col-span-7 space-y-10">
            {/* Gallery/Main Image */}
            <div className="space-y-4">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-card-border shadow-md">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover animate-fade-in"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {/* Thumbnails (for mockup purposes they reference the main image) */}
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className={`relative aspect-video rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900 border cursor-pointer hover:border-accent-orange transition-all ${
                      index === 0 ? 'border-accent-orange ring-2 ring-accent-orange/10' : 'border-card-border'
                    }`}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      sizes="10vw"
                      className="object-cover opacity-80 hover:opacity-100"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product description and details */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Product Overview
                </h2>
                <p className="text-muted-text text-sm sm:text-base leading-relaxed mt-3">
                  {product.description}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Key Features & Advantages
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex gap-2.5 items-start text-xs sm:text-sm text-muted-text">
                      <CheckCircle2 className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Industrial Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-card-border px-3.5 py-2 text-xs text-foreground font-semibold"
                    >
                      <Tag className="w-3.5 h-3.5 text-accent-orange" />
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Target Industries */}
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Recommended Industries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.industries.map((ind, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-orange-50 dark:bg-accent-muted/50 border border-orange-100 dark:border-accent-muted px-3 py-1.5 text-xs text-accent-orange font-bold uppercase tracking-wider"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications Table */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent-orange" />
                <h3 className="font-display text-xl font-bold text-foreground">
                  Technical Specifications
                </h3>
              </div>
              <div className="rounded-2xl border border-card-border overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-card-border text-foreground font-bold">
                      <th className="px-6 py-4">Parameter</th>
                      <th className="px-6 py-4">Specification Details</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-card-border text-muted-text">
                    {Object.entries(product.specifications).map(([key, val]) => (
                      <tr key={key} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/10 transition-colors">
                        <td className="px-6 py-4 font-bold text-foreground">{key}</td>
                        <td className="px-6 py-4">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Quote / RFQ form sticky sidebar */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 space-y-6">
              <div className="p-6 bg-slate-900/70 text-white rounded-2xl border border-slate-800 space-y-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#f97316,#000_70%)] opacity-25" />
                <span className="relative z-10 text-xs font-bold uppercase tracking-widest text-accent-orange">
                  B2B Sourcing
                </span>
                <h3 className="relative z-10 font-display text-xl font-bold tracking-tight">
                  Request Custom Quote
                </h3>
                <p className="relative z-10 text-slate-300 text-xs leading-relaxed">
                  We custom cast polyurethane components based on your precise dimensions, sample measurements, drawings, and operating conditions. Submit a request to get our engineering assessment.
                </p>
              </div>

              <QuoteForm defaultProduct={product.name} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
