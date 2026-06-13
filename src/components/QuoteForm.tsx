'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { CheckCircle2, Loader2, Send } from 'lucide-react';
import { CATEGORIES } from '@/data/products';
import { submitQuoteToSheet } from '@/app/actions';

const quoteSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().min(2, 'Company name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number (minimum 10 digits)'),
  email: z.string().email('Please enter a valid email address'),
  productRequirement: z.string().min(1, 'Please select a product requirement'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

interface QuoteFormProps {
  defaultProduct?: string;
}

export default function QuoteForm({ defaultProduct = '' }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      productRequirement: defaultProduct,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const response = await submitQuoteToSheet(data);
      if (response.success) {
        setIsSuccess(true);
        reset();
      } else {
        console.error("Quote submission error:", response.error);
        alert(`Failed to submit: ${response.error}\n\nMake sure GOOGLE_SHEETS_URL is configured correctly in .env.local.`);
      }
    } catch (err) {
      console.error("Unexpected submission error:", err);
      alert("An unexpected error occurred while submitting. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-card-border bg-card-bg p-6 sm:p-8 shadow-xl relative overflow-hidden transition-colors duration-300">
      {isSuccess ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center text-center py-12"
        >
          <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-950/50 rounded-full flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-2">
            Quote Request Received
          </h3>
          <p className="text-muted-text text-sm max-w-sm mb-8">
            Thank you for contacting EMTAN Polymers. Our engineering team will review your requirements and get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSuccess(false)}
            className="rounded-lg bg-primary-navy dark:bg-accent-orange text-white dark:text-primary-navy font-semibold px-6 py-2.5 text-sm hover:opacity-90 transition-opacity"
          >
            Submit Another Inquiry
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                {...register('name')}
                placeholder="John Doe"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
              />
              {errors.name && (
                <p className="text-xs text-rose-500 mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
                Company Name *
              </label>
              <input
                id="company"
                type="text"
                {...register('company')}
                placeholder="Engineering Ltd"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
              />
              {errors.company && (
                <p className="text-xs text-rose-500 mt-1">{errors.company.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
                Phone Number *
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="+91 91762 39027"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
              />
              {errors.phone && (
                <p className="text-xs text-rose-500 mt-1">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
                Email Address *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                placeholder="purchasing@company.com"
                className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
              />
              {errors.email && (
                <p className="text-xs text-rose-500 mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Product Category dropdown */}
          <div>
            <label htmlFor="productRequirement" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
              Product Requirement *
            </label>
            <select
              id="productRequirement"
              {...register('productRequirement')}
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all appearance-none"
            >
              <option value="">Select a Category...</option>
              {CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
              <option value="Custom Urethane Parts">Custom Urethane Parts / Drawings</option>
              <option value="Other">Other Industrial Solutions</option>
            </select>
            {errors.productRequirement && (
              <p className="text-xs text-rose-500 mt-1">{errors.productRequirement.message}</p>
            )}
          </div>

          {/* Message / Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-muted-text mb-1.5">
              Detailed Specifications / Message *
            </label>
            <textarea
              id="message"
              rows={4}
              {...register('message')}
              placeholder="Include details like dimensions, drawing references, operating temperatures, hardness requirements, and quantities needed..."
              className="w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 text-foreground px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent-orange focus:border-transparent transition-all"
            />
            {errors.message && (
              <p className="text-xs text-rose-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent-orange hover:bg-accent-hover text-white font-semibold py-3.5 text-sm transition-all focus:outline-none focus:ring-4 focus:ring-accent-orange/20 disabled:opacity-75 shadow-lg shadow-accent-orange/15 hover:shadow-accent-orange/25"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Processing RFQ...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit RFQ / Request Quote</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
