'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ArrowLeft, ArrowRight } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: 'manufacturing' | 'products' | 'factory' | 'installations';
  imageUrl: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: 'Custom Cast Polyurethane Seals',
    category: 'products',
    imageUrl: '/images/pu_seal.jpg',
    description: 'Finished high-durometer polyurethane seals and rods ready for shipment.'
  },
  {
    id: 2,
    title: 'Precision Rollers Manufacturing',
    category: 'manufacturing',
    imageUrl: '/images/pu_roller.jpg',
    description: 'Post-casting precision grinding of industrial polyurethane rollers.'
  },
  {
    id: 3,
    title: 'Heavy Duty Caster Wheels',
    category: 'products',
    imageUrl: '/images/pu_castor_wheel.jpg',
    description: 'Polyurethane wheels designed for high load capacity and minimal rolling resistance.'
  },
  {
    id: 4,
    title: 'Modern CNC Machining Center',
    category: 'factory',
    imageUrl: '/images/manufacturing_factory.png',
    description: 'CNC lathe machining polyurethane cores to precise technical tolerances in our Chennai factory.'
  },
  {
    id: 5,
    title: 'Pipeline Foam Pig Solutions',
    category: 'products',
    imageUrl: '/images/pipeline_pigs.png',
    description: 'Low and medium density polyurethane cleaning foam pigs for drying and scraping.'
  },
  {
    id: 6,
    title: 'Track Pads and Shock Isolation Dampers',
    category: 'products',
    imageUrl: '/images/pu_track_pads.jpg',
    description: 'Custom cast engineering components designed to absorb heavy impacts.'
  },
  {
    id: 7,
    title: 'Assembly & Curing Oven Area',
    category: 'factory',
    imageUrl: '/images/hero_polyurethane.png',
    description: 'Pre-heating steel cores and preparing chemical bonds in a clean manufacturing workshop.'
  },
  {
    id: 8,
    title: 'Polyurethane Rollers Installation',
    category: 'installations',
    imageUrl: '/images/pu_roller.jpg',
    description: 'Laminator roller successfully installed on-site at a packaging plant.'
  }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'manufacturing', name: 'Manufacturing' },
    { id: 'products', name: 'Products' },
    { id: 'factory', name: 'Factory Floor' },
    { id: 'installations', name: 'Installations' }
  ];

  const filteredItems = React.useMemo(() => {
    if (activeCategory === 'all') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  const handlePrev = React.useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? filteredItems.length - 1 : lightboxIndex - 1);
    }
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = React.useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === filteredItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  }, [lightboxIndex, filteredItems.length]);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext]);

  return (
    <div className="min-h-screen bg-background font-sans transition-colors duration-300">
      {/* Gallery Header */}
      <section className="bg-slate-900 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">
            Visual Portfolio
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            EMTAN Polymers Photo Gallery
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Take a visual tour of our custom manufacturing workflows, high-durability products, CNC factory floor, and successful B2B client installations.
          </p>
        </div>
      </section>

      {/* Gallery Layout */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 border-b border-card-border pb-4 overflow-x-auto whitespace-nowrap scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`rounded-lg px-4 py-2 text-xs sm:text-sm font-bold transition-all uppercase border ${
                activeCategory === cat.id
                  ? 'bg-accent-orange border-accent-orange text-white'
                  : 'bg-card-bg border-card-border text-muted-text hover:text-foreground'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Masonry Layout Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden border border-card-border bg-card-bg shadow-md hover:shadow-xl dark:shadow-slate-950/40 transition-all duration-300 group cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Image */}
              <div className="relative w-full h-auto min-h-[200px]">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay details */}
                <div className="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] font-bold text-accent-orange uppercase tracking-widest mb-1.5">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-lg text-white mb-1 flex items-center justify-between gap-2">
                    <span>{item.title}</span>
                    <ZoomIn className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
              {/* Backdrop Click Close */}
              <div className="absolute inset-0 cursor-zoom-out" onClick={() => setLightboxIndex(null)} />

              {/* Close Button */}
              <button
                onClick={() => setLightboxIndex(null)}
                className="absolute top-4 right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-800 transition-colors z-10"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-800 transition-colors z-10"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-6 h-6" />
              </button>

              {/* Center Panel (Image + Info) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative max-w-4xl w-full flex flex-col items-center gap-4 z-10"
              >
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800 shadow-2xl bg-black">
                  <Image
                    src={filteredItems[lightboxIndex].imageUrl}
                    alt={filteredItems[lightboxIndex].title}
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="text-center text-white max-w-2xl px-4 space-y-1">
                  <span className="text-[10px] font-bold text-accent-orange uppercase tracking-wider">
                    {filteredItems[lightboxIndex].category}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl">
                    {filteredItems[lightboxIndex].title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {filteredItems[lightboxIndex].description}
                  </p>
                </div>
              </motion.div>

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-4 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-800 transition-colors z-10"
                aria-label="Next image"
              >
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
