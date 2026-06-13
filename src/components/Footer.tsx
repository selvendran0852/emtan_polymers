import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-slate-950 text-slate-300 border-t border-slate-900 font-sans">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative h-12 w-12 rounded-full overflow-hidden border border-slate-800 bg-slate-950 transition-colors duration-300 shadow-sm shrink-0">
                <Image
                  src="/images/logo.jpg"
                  alt="EMTAN Polymers Logo"
                  fill
                  className="object-cover scale-105"
                />
              </div>
              <div>
                <span className="font-display text-2xl font-bold tracking-tight text-white">
                  EMTAN<span className="text-accent-orange"> Polymers</span>
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase text-slate-400 -mt-1 font-semibold">
                  polyurethane Manufacturer
                </span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Chennai&apos;s leading manufacturer of high-performance custom-cast Polyurethane (PU) rollers, wheels, seals, pipeline pigs, and industrial wear solutions. Engineered for durability.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-display text-lg font-bold tracking-tight mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm">
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/#about' },
                { name: 'Products Catalog', href: '/products' },
                { name: 'Photo Gallery', href: '/gallery' },
                { name: 'Request Quote', href: '/contact?rfq=true' },
                { name: 'Contact Info', href: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-accent-orange flex items-center gap-1 group transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-display text-lg font-bold tracking-tight mb-6">
              Product Catalog
            </h3>
            <ul className="space-y-4 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-accent-orange flex items-center gap-1 group transition-colors"
                  >
                    <span>{cat.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-display text-lg font-bold tracking-tight mb-6">
              Contact Details
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <span className="text-slate-400">
                  <strong>EMTAN Polymers</strong><br />
                  189, EH Road, Korukkupet,<br />
                  Chennai - 600021, Tamil Nadu, India.
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-accent-orange shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919176239027" className="hover:text-accent-orange transition-colors">
                    +91 91762 39027
                  </a>
                  <a href="tel:+918925609027" className="hover:text-accent-orange transition-colors">
                    +91 89256 09027
                  </a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-5 h-5 text-accent-orange shrink-0" />
                <a href="mailto:emtanpolymers@gmail.com" className="hover:text-accent-orange transition-colors">
                  emtanpolymers@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full bg-slate-980 border-t border-slate-900 text-xs text-slate-500">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-1 text-center md:text-left">
            <p>© {currentYear} EMTAN Polymers. All Rights Reserved. Manufactured in Chennai, India.</p>
            <p className="text-[11px] text-slate-600">
              Website Creator: selvendran | <a href="mailto:selvendranworks@gmail.com" className="hover:text-slate-400 transition-colors">selvendranworks@gmail.com</a> | <a href="tel:+918072588622" className="hover:text-slate-400 transition-colors">8072588622</a>
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
