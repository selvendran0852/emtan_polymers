'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-card-border bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 transition-colors duration-300 shadow-sm shrink-0">
              <Image
                src="/images/logo.jpg"
                alt="EMTAN Polymers Logo"
                fill
                className="object-cover scale-105"
              />
            </div>
            <div>
              <span className="font-display text-2xl font-bold tracking-tight text-foreground">
                EMTAN<span className="text-accent-orange"> Polymers</span>
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase text-muted-text -mt-1 font-semibold">
                polyurethane Manufacturer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-sans text-sm font-semibold transition-colors duration-200 hover:text-accent-orange py-2 ${
                    isActive ? 'text-accent-orange' : 'text-foreground'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavBorder"
                      className="absolute bottom-0 left-0 h-0.5 w-full bg-accent-orange"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Theme Toggle & RFQ CTA */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center rounded-lg bg-accent-orange px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover transition-all duration-300 shadow-md shadow-accent-orange/10 hover:shadow-accent-orange/20 hover:-translate-y-0.5"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-foreground hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-card-border bg-background/95 backdrop-blur-md"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    pathname === link.href
                      ? 'bg-orange-50 text-accent-orange dark:bg-accent-muted'
                      : 'text-foreground hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-card-border">
                <Link
                  href="/contact?rfq=true"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center rounded-lg bg-accent-orange py-3 text-center text-base font-semibold text-white hover:bg-accent-hover transition-colors"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
