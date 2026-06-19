'use client';

import * as React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ArrowLeft, ArrowRight, ClipboardCheck, Settings, Tag } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import QuoteForm from '@/components/QuoteForm';

const ITEMS_PER_PAGE = 12;

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state
  const categoryParam = searchParams.get('category') || 'all';
  const initialSearch = searchParams.get('q') || '';

  // Local state
  const [search, setSearch] = React.useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = React.useState(categoryParam);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [activeModalProduct, setActiveModalProduct] = React.useState<Product | null>(null);

  // Sync category param change
  React.useEffect(() => {
    setSelectedCategory(categoryParam);
    setCurrentPage(1);
  }, [categoryParam]);

  // Handle URL updates
  const updateParams = (cat: string, q: string) => {
    const params = new URLSearchParams();
    if (cat !== 'all') params.set('category', cat);
    if (q) params.set('q', q);
    router.push(`/products?${params.toString()}`, { scroll: false });
  };

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
    updateParams(cat, search);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setCurrentPage(1);
    updateParams(selectedCategory, value);
  };

  // Filter products
  const filteredProducts = React.useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase()) ||
        product.applications.some((app) => app.toLowerCase().includes(search.toLowerCase())) ||
        product.industries.some((ind) => ind.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, search]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = React.useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Search and Filters Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-slate-50/50 dark:bg-slate-900/20 p-6 rounded-2xl border border-card-border">
        {/* Search */}
        <div className="relative flex-grow max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-text" />
          <input
            type="text"
            value={search}
            onChange={handleSearchChange}
            placeholder="Search products by name, description, application, or industry..."
            className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
          />
          {search && (
            <button
              onClick={() => {
                setSearch('');
                updateParams(selectedCategory, '');
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-muted-text"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Tabs Dropdown (Mobile) / list (Desktop) */}
        <div className="flex items-center gap-3 shrink-0">
          <SlidersHorizontal className="w-5 h-5 text-muted-text" />
          <span className="text-sm font-bold text-foreground">Category:</span>
          <select
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange transition-all font-semibold"
          >
            <option value="all" className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">All Categories</option>
            {CATEGORIES.map((cat) => (
              <option key={cat.id} value={cat.id} className="bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100">
                {cat.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {paginatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProducts.map((product) => (
            <div key={product.slug} className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card-bg shadow-md hover:shadow-xl dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1">
              {/* Product Image */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-100 dark:bg-slate-900 border-b border-card-border">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={false}
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 rounded-full bg-slate-900/80 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-orange border border-slate-700">
                  {product.category.replace('-', ' & ')}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-accent-orange transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {product.description}
                </p>

                {/* Applications */}
                <div className="mb-6">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">
                    Key Applications
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.slice(0, 2).map((app, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 rounded bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300 font-medium"
                      >
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span className="line-clamp-1">{app}</span>
                      </span>
                    ))}
                    {product.applications.length > 2 && (
                      <span className="inline-flex items-center rounded bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs text-slate-400 font-bold">
                        +{product.applications.length - 2} More
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-card-border flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="inline-flex items-center justify-center rounded-lg bg-slate-900 hover:bg-slate-800 text-white dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-100 font-bold px-4 py-2.5 text-xs transition-colors shrink-0"
                  >
                    Quick RFQ
                  </button>
                  <a
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-orange hover:text-accent-hover transition-colors"
                  >
                    <span>Full Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-slate-50 dark:bg-slate-900/10 rounded-2xl border border-card-border">
          <Settings className="w-12 h-12 text-slate-300 mx-auto mb-4 animate-spin" />
          <h3 className="font-display text-xl font-bold text-foreground">No Products Found</h3>
          <p className="text-muted-text text-sm max-w-sm mx-auto mt-2">
            Try adjusting your search query, clearing search, or selecting another category filter.
          </p>
          <button
            onClick={() => {
              setSearch('');
              setSelectedCategory('all');
              updateParams('all', '');
            }}
            className="mt-6 rounded-lg bg-accent-orange text-white font-semibold px-5 py-2.5 text-xs hover:bg-accent-hover transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-lg border border-card-border bg-card-bg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
            aria-label="Previous Page"
          >
            <ArrowLeft className="w-4 h-4 text-foreground" />
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-lg text-sm font-bold transition-all border ${
                currentPage === page
                  ? 'bg-accent-orange border-accent-orange text-white shadow-md'
                  : 'bg-card-bg border-card-border text-foreground hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-lg border border-card-border bg-card-bg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors"
            aria-label="Next Page"
          >
            <ArrowRight className="w-4 h-4 text-foreground" />
          </button>
        </div>
      )}

      {/* Product Details Modal (Quick View & RFQ support) */}
      <AnimatePresence>
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalProduct(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card-bg border border-card-border p-6 sm:p-8 shadow-2xl z-10 scrollbar-none"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-muted-text transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
                {/* Left side: Product Info */}
                <div className="lg:col-span-6 space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">
                      {activeModalProduct.category.replace('-', ' & ')}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mt-1">
                      {activeModalProduct.name}
                    </h3>
                  </div>

                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-card-border">
                    <Image
                      src={activeModalProduct.imageUrl}
                      alt={activeModalProduct.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Description
                    </h4>
                    <p className="text-muted-text text-sm leading-relaxed">
                      {activeModalProduct.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technical Specifications
                    </h4>
                    <div className="rounded-xl border border-card-border overflow-hidden">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-slate-900/50 border-b border-card-border text-foreground font-bold">
                            <th className="px-4 py-2.5">Parameter</th>
                            <th className="px-4 py-2.5">Specification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-card-border text-muted-text">
                          {Object.entries(activeModalProduct.specifications).map(([key, val]) => (
                            <tr key={key}>
                              <td className="px-4 py-2.5 font-semibold text-foreground">{key}</td>
                              <td className="px-4 py-2.5">{val}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Right side: Contact / RFQ Form */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="bg-slate-50 dark:bg-slate-900/30 p-4 rounded-xl border border-card-border flex items-center gap-3">
                    <ClipboardCheck className="w-6 h-6 text-accent-orange shrink-0" />
                    <div>
                      <span className="block text-xs font-bold text-foreground">
                        Quick Quote Request
                      </span>
                      <span className="block text-[11px] text-muted-text">
                        Specify details, hardness, and dimensions for {activeModalProduct.name}.
                      </span>
                    </div>
                  </div>

                  <QuoteForm defaultProduct={activeModalProduct.name} />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProductsCatalogPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Catalog Hero */}
      <section className="bg-slate-900/70 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Industrial Polyurethane Catalog
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            High wear-resistance rollers, wheels, custom molded seals, cleaning pigs, and shock isolation pads engineered for Chennai and global industrial deployments.
          </p>
        </div>
      </section>

      {/* Main Catalog Section */}
      <React.Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-24">
            <Settings className="w-10 h-10 text-accent-orange animate-spin mb-4" />
            <span className="text-sm text-muted-text font-bold">Loading product catalog...</span>
          </div>
        }
      >
        <ProductsCatalogContent />
      </React.Suspense>
    </div>
  );
}
