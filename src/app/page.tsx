'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ShieldAlert,
  Settings,
  Truck,
  Award,
  Users,
  BadgeDollarSign,
  ChevronRight,
  TrendingUp,
  Cpu,
  Workflow,
  Factory,
  CheckCircle,
  HelpCircle,
  FileCheck,
  Phone,
  Mail
} from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';

interface CustomerLogo {
  src: string;
  name: string;
  bg: 'bg-black' | 'bg-white';
}

const CUSTOMER_LOGOS: CustomerLogo[] = [
  { src: 'logo.9b4a5a8a.svg', name: 'ANAGHA STONES LUP', bg: 'bg-black' },
  { src: 'photo_1_2026-06-11_22-20-34.jpg', name: 'LAVINA STONES', bg: 'bg-black' },
  { src: 'photo_2_2026-06-11_22-20-34.jpg', name: 'DACSS UGRAMITES PVT LTD', bg: 'bg-black' },
  { src: 'photo_3_2026-06-11_22-20-34.jpg', name: 'R.S ENGINEERING WORS', bg: 'bg-black' },
  { src: 'photo_4_2026-06-11_22-20-34.jpg', name: 'PSI STONES PVT LTD', bg: 'bg-black' },
  { src: 'photo_5_2026-06-11_22-20-34.jpg', name: 'PSG STONES LUP', bg: 'bg-white' },
  { src: 'photo_6_2026-06-11_22-20-34.jpg', name: 'MARUDHAR STONES.', bg: 'bg-white' },
  { src: 'photo_7_2026-06-11_22-20-34.jpg', name: 'PACIFIL GRANITES (INDIA) PVT LTD', bg: 'bg-white' },
  { src: 'photo_8_2026-06-11_22-20-34.jpg', name: 'MIS PANINI GRANITES PVT LTD', bg: 'bg-black' },
  { src: 'photo_9_2026-06-11_22-20-34.jpg', name: 'OMEAGA GRANITES PVT LTD MANI', bg: 'bg-white' },
  { src: 'photo_10_2026-06-11_22-20-34.jpg', name: 'MEGA STRUCTURE SHREE PAM', bg: 'bg-black' },
  { src: 'photo_11_2026-06-11_22-20-34.jpg', name: 'JYOTI ROCKS & EXPORTS PVT LTD', bg: 'bg-black' },
  { src: 'photo_12_2026-06-11_22-20-34.jpg', name: 'RECEIVED ENTER PART', bg: 'bg-black' },
  { src: 'photo_13_2026-06-11_22-20-34.jpg', name: 'ARYAN GRANITES AND MONUMENTS (P) LTD', bg: 'bg-white' },
  { src: 'photo_14_2026-06-11_22-20-34.jpg', name: 'BASANT NATURAL STONES PVT LTD', bg: 'bg-black' }
];

const ALL_CUSTOMER_NAMES = [
  'ANAGHA STONES LUP',
  'LAVINA STONES',
  'DACSS UGRAMITES PVT LTD',
  'R.S ENGINEERING WORS',
  'PSI STONES PVT LTD',
  'PSG STONES LUP',
  'MARUDHAR STONES.',
  'PACIFIL GRANITES (INDIA) PVT LTD',
  'MIS PANINI GRANITES PVT LTD',
  'OMEAGA GRANITES PVT LTD MANI',
  'MEGA STRUCTURE SHREE PAM',
  'JYOTI ROCKS & EXPORTS PVT LTD',
  'RECEIVED ENTER PART',
  'ARYAN GRANITES AND MONUMENTS (P) LTD',
  'BASANT NATURAL STONES PVT LTD',
  'MIRACLE GRANITO PVT LTD',
  'A RSG STONES',
  'ARI HANT TILES and MARBLES (P) Ltd.',
  'RAVI LEELA GRANITES LTD',
  'HILLTOP STONES PVT LTD',
  'VENKATA SRI BALAJI EXPORTS',
  'MIS EQUITY EXPORTS PVT LTD',
  'HELINOVA INDUSTRIES'
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = React.useState<string>('rollers');
  const [shuffledLogos, setShuffledLogos] = React.useState<CustomerLogo[]>([]);

  React.useEffect(() => {
    const shuffled = [...CUSTOMER_LOGOS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledLogos(shuffled);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring' as const, stiffness: 100 } }
  };

  const whyChooseUsData = [
    {
      icon: <ShieldAlert className="w-8 h-8 text-accent-orange" />,
      title: 'High Wear Resistance',
      description: 'Our proprietary polyurethane formulations offer up to 4x better abrasion resistance than high-grade rubber and steel, lowering replacement costs.'
    },
    {
      icon: <Settings className="w-8 h-8 text-accent-orange" />,
      title: 'Custom Manufacturing',
      description: 'Engineered precisely to client drawings, physical samples, specific durometer hardness (10 Shore A to 85 Shore D), and environment loads.'
    },
    {
      icon: <Truck className="w-8 h-8 text-accent-orange" />,
      title: 'Fast Delivery',
      description: 'Streamlined casting, curing, and CNC post-machining workflows ensure responsive turnaround times and minimal operational downtime.'
    },
    {
      icon: <Award className="w-8 h-8 text-accent-orange" />,
      title: 'Quality Assurance',
      description: 'Rigorous inspection protocols at every phase: raw prep, prepolymer mixing, curing temperature cycles, and post-machining tolerances.'
    },
    {
      icon: <Users className="w-8 h-8 text-accent-orange" />,
      title: 'Industry Expertise',
      description: 'Decades of combined engineering experience catering to steel mills, packaging units, mining silos, and oil pipeline operators.'
    },
    {
      icon: <BadgeDollarSign className="w-8 h-8 text-accent-orange" />,
      title: 'Competitive Pricing',
      description: 'Direct-from-manufacturer pricing providing premium polyurethane solutions without distributor markups, maximizing value.'
    }
  ];

  const industries = [
    { name: 'Cement Industry', icon: <Workflow className="w-6 h-6" /> },
    { name: 'Printing Industry', icon: <Cpu className="w-6 h-6" /> },
    { name: 'Textile Industry', icon: <TrendingUp className="w-6 h-6" /> },
    { name: 'Engineering Industry', icon: <Factory className="w-6 h-6" /> },
    { name: 'Mining Industry', icon: <ShieldAlert className="w-6 h-6" /> },
    { name: 'Material Handling', icon: <Truck className="w-6 h-6" /> },
    { name: 'Pipeline Industry', icon: <Settings className="w-6 h-6" /> },
    { name: 'Steel Industry', icon: <Award className="w-6 h-6" /> }
  ];

  const processTimeline = [
    {
      step: '01',
      title: 'Requirement Analysis',
      description: 'Reviewing operational stress, temperature, chemicals, and dimensions to determine the ideal polyurethane compound and hardness.',
      icon: <HelpCircle className="w-6 h-6" />
    },
    {
      step: '02',
      title: 'Design Review',
      description: 'Detailed analysis of drawings or physical samples, creating molds and checking cores to guarantee precision bonding.',
      icon: <FileCheck className="w-6 h-6" />
    },
    {
      step: '03',
      title: 'Manufacturing',
      description: 'Liquid elastomer casting, precise oven curing control, and post-casting CNC machining to exact target tolerances.',
      icon: <Factory className="w-6 h-6" />
    },
    {
      step: '04',
      title: 'Quality Inspection',
      description: 'Testing of hardness (durometer), dimensional checks, bonding integrity inspection, and surface finish compliance.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: '05',
      title: 'Delivery',
      description: 'Secure heavy-duty packaging to prevent flat spotting during transit, followed by prompt delivery to your facility.',
      icon: <Truck className="w-6 h-6" />
    }
  ];

  const filteredProducts = PRODUCTS.filter(p => p.category === activeCategory).slice(0, 3);

  return (
    <div className="relative overflow-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold tracking-wider text-accent-orange uppercase"
            >
              <span className="w-2 h-2 rounded-full bg-accent-orange animate-ping" />
              ISO 9001:2015 Quality Standards
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
            >
              High Performance <span className="text-accent-orange">Polyurethane Solutions</span> Built For Industry
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl"
            >
              Custom Polyurethane Components, Rollers, Wheels, Seals, Pipeline Pigs and Industrial Wear Parts Manufactured For Maximum Durability And Performance.
            </motion.p>
            
            {/* Quick Contact Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-col sm:flex-row sm:items-center gap-6 py-2 text-sm text-slate-300"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-orange/15 text-accent-orange flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-orange">Direct Phone</span>
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <a href="tel:+919176239027" className="hover:text-accent-orange transition-colors">
                      +91 91762 39027
                    </a>
                    <span className="text-slate-700">|</span>
                    <a href="tel:+918925609027" className="hover:text-accent-orange transition-colors">
                      89256 09027
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-8 bg-slate-800 self-stretch" />

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-accent-orange/15 text-accent-orange flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent-orange">Engineering Email</span>
                  <a href="mailto:emtanpolymers@gmail.com" className="text-white font-semibold hover:text-accent-orange transition-colors">
                    emtanpolymers@gmail.com
                  </a>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Link
                href="/contact?rfq=true"
                className="inline-flex items-center justify-center rounded-lg bg-accent-orange hover:bg-accent-hover text-white font-bold px-8 py-4 text-base shadow-lg shadow-accent-orange/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Request a Quote
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-lg bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-bold px-8 py-4 text-base transition-all duration-300 hover:-translate-y-0.5"
              >
                View Products
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative w-full aspect-square max-w-[450px] lg:max-w-none mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-orange/20 to-transparent rounded-2xl blur-2xl" />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="/images/hero_polyurethane.png"
                alt="EMTAN Polymers Polyurethane Manufacturing Products"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="py-20 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-card-border shadow-lg">
              <Image
                src="/images/manufacturing_factory.png"
                alt="EMTAN Polymers Chennai Factory"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            
            <div className="lg:col-span-7 space-y-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-accent-orange">
                About The Company
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Chennai-Based Manufacturer & Polyurethane Experts
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                EMTAN Polymers is a state-of-the-art polyurethane custom casting facility based in Chennai. We design, formulate, and manufacture custom-cast polyurethane solutions that outperform rubber, plastics, and metals under demanding operational conditions.
              </p>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Whether you need precision-ground print rollers, wear-resistant sheets for heavy mining chutes, load wheels for automated warehouse machinery, or specialized pipeline cleaning pigs, our engineering experts create components designed for maximum performance, minimum friction, and superior durability.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-card-border">
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-foreground font-display">
                    15+
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-text mt-1">
                    Years of Experience
                  </span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-foreground font-display">
                    99.8%
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-text mt-1">
                    Product Quality Rating
                  </span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-foreground font-display">
                    100%
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-text mt-1">
                    Custom Manufacturing
                  </span>
                </div>
                <div>
                  <span className="block text-3xl sm:text-4xl font-extrabold text-foreground font-display">
                    24/7
                  </span>
                  <span className="block text-xs font-bold uppercase tracking-wider text-muted-text mt-1">
                    Technical Support
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-card-border transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-accent-orange">
              Value Proposition
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Why Engineers Choose EMTAN Polymers
            </h2>
            <p className="text-muted-text text-sm sm:text-base">
              We focus on delivering premium, high-wear-resistant solutions designed to reduce downtime and lower overall lifecycle costs for industrial operations.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {whyChooseUsData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-2xl border border-card-border bg-card-bg shadow-sm hover:shadow-md hover-lift transition-all"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PRODUCTS SECTION */}
      <section className="py-20 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="block text-xs font-bold uppercase tracking-wider text-accent-orange">
                Product Catalog
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Featured Polyurethane Products
              </h2>
              <p className="text-muted-text text-sm sm:text-base max-w-2xl">
                Browse our core industrial segments. Each product category is optimized for specific mechanical properties, resistance parameters, and workloads.
              </p>
            </div>
            
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 font-bold text-sm text-accent-orange hover:text-accent-hover transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore All Products</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Tabs Nav */}
          <div className="flex flex-wrap gap-2 border-b border-card-border pb-px overflow-x-auto whitespace-nowrap scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 border-b-2 text-sm font-bold tracking-tight transition-all uppercase ${
                  activeCategory === cat.id
                    ? 'border-accent-orange text-accent-orange font-extrabold'
                    : 'border-transparent text-muted-text hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Description */}
          <div className="bg-slate-50 dark:bg-slate-900/20 rounded-xl p-4 sm:p-6 border border-card-border flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-muted-text text-sm leading-relaxed max-w-3xl">
              {CATEGORIES.find(c => c.id === activeCategory)?.description}
            </p>
            <Link
              href={`/products?category=${activeCategory}`}
              className="inline-flex items-center justify-center rounded-lg bg-primary-navy dark:bg-slate-800 hover:bg-primary-light text-white font-semibold px-5 py-2.5 text-xs transition-colors whitespace-nowrap"
            >
              Filter in Catalog
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-20 bg-slate-950 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="block text-xs font-bold uppercase tracking-wider text-accent-orange">
              Markets & Operations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              EMTAN Polymers supplies critical polyurethane wear parts to key sectors across India and global markets, helping maximize efficiency in harsh environments.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {industries.map((ind, index) => (
              <div
                key={index}
                className="group relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-accent-orange/5"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 text-accent-orange flex items-center justify-center mb-6 group-hover:bg-accent-orange group-hover:text-white transition-colors duration-300">
                  {ind.icon}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  {ind.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOM MANUFACTURING SECTION */}
      <section className="py-20 bg-background transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="block text-xs font-bold uppercase tracking-wider text-accent-orange">
                Manufacturing Capability
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Custom Polyurethane Solutions
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                We manufacture polyurethane products according to customer drawings, physical samples, detailed technical specifications, hardness requirements, and industrial applications. Our in-house chemical blending, mold preparation, and secondary tooling ensure precise consistency.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {['Metal Degreasing', 'Chemical Bonding Agent Prep', 'Oven Curing Cycle Control', 'CNC Turning & Milling', 'Hardness Mapping'].map((cap, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center rounded-lg bg-slate-50 dark:bg-slate-900 border border-card-border px-3.5 py-1.5 text-xs font-semibold text-foreground"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-orange mr-1.5 shrink-0" />
                    {cap}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-card-border shadow-lg">
              <Image
                src="/images/pu_seal.jpg"
                alt="Custom molded polyurethane products"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Process Timeline */}
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold tracking-tight text-foreground">
                Our Engineering & Casting Workflow
              </h3>
              <p className="text-muted-text text-sm mt-2">
                A structured process from engineering analysis to final delivery to ensure zero-defect parts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
              {/* Connector Line for desktop */}
              <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-card-border z-0" />

              {processTimeline.map((step, idx) => (
                <div key={idx} className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                  {/* Step bubble */}
                  <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-900 border-2 border-accent-orange text-accent-orange font-display font-extrabold text-sm flex items-center justify-center shadow-md">
                    {step.step}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-display font-bold text-base text-foreground">
                      {step.title}
                    </h4>
                    <p className="text-muted-text text-xs leading-relaxed max-w-[220px] mx-auto lg:mx-0">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER LOGOS SECTION */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/10 border-b border-card-border transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="block text-[10px] font-bold uppercase tracking-widest text-accent-orange mb-1">
              Trusted Partners
            </span>
            <h2 className="font-display text-xs font-bold uppercase tracking-wider text-muted-text">
              Trusted by Leading Granite Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8 items-center justify-items-center">
            {shuffledLogos.map((logo) => (
              <div
                key={logo.src}
                className={`w-full h-16 relative flex items-center justify-center p-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 ${
                  logo.bg === 'bg-white' ? 'bg-white border border-slate-200/60' : 'bg-black border border-slate-900/60'
                }`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/images/customer_logos/${logo.src}`}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 768px) 25vw, 15vw"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Remaining Customers List */}
          <div className="mt-12 pt-8 border-t border-card-border/50 text-center">
            <h3 className="font-display text-[10px] font-bold uppercase tracking-widest text-muted-text/60 mb-6">
              Our Valued Clients
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {ALL_CUSTOMER_NAMES.map((name) => (
                <span
                  key={name}
                  className="px-3.5 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:border-accent-orange/30 dark:hover:border-accent-orange/30 transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-950 py-16 text-center text-white border-t border-slate-900">
        <div className="mx-auto max-w-4xl px-4 space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Optimize Your Industrial Components?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Get in touch with our engineering team today. Send us your dimensions, drawings, or specify your environmental parameters, and we will formulate a quote.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact?rfq=true"
              className="inline-flex items-center justify-center rounded-lg bg-accent-orange hover:bg-accent-hover text-white font-bold px-8 py-3.5 text-sm transition-colors shadow-lg"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-3.5 text-sm transition-colors"
            >
              Speak to an Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
