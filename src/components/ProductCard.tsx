'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Tag } from 'lucide-react';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-card-border bg-card-bg shadow-md hover:shadow-xl dark:shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1"
    >
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

      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-display text-xl font-bold tracking-tight text-foreground mb-2 group-hover:text-accent-orange transition-colors">
          {product.name}
        </h3>
        
        <p className="text-muted-text text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
          {product.description}
        </p>

        {/* Key Applications */}
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

        {/* Action Button */}
        <div className="pt-4 border-t border-card-border">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-bold text-primary-navy dark:text-white group-hover:text-accent-orange transition-colors"
          >
            <span>Learn Specifications</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
