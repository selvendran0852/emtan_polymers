'use client';

import * as React from 'react';
import { useSearchParams } from 'next/navigation';
import { MapPin, Phone, Mail, Clock, MessageSquareCode, ShieldCheck, Settings } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';

function ContactPageContent() {
  const searchParams = useSearchParams();
  const isRfq = searchParams.get('rfq') === 'true';

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Contact Info & Map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-orange">
              Corporate Headquarters
            </span>
            <h2 className="font-display text-3xl font-extrabold text-foreground">
              EMTAN Polymers Chennai
            </h2>
            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              Have technical questions about polyurethane compounds, hardness mapping, or pricing? Contact our engineering team or visit our facility in Korukkupet, Chennai.
            </p>
          </div>

          {/* Quick Contact Info Cards */}
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl border border-card-border bg-card-bg shadow-sm">
              <MapPin className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-sm text-foreground">Factory & Office Address</h3>
                <p className="text-muted-text text-xs sm:text-sm mt-1 leading-relaxed">
                  189, EH Road, Korukkupet,<br />
                  Chennai - 600021, Tamil Nadu, India.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-card-border bg-card-bg shadow-sm">
              <Phone className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-sm text-foreground">Direct Telephones</h3>
                <p className="text-muted-text text-xs sm:text-sm mt-1 flex flex-col gap-1">
                  <a href="tel:+919176239027" className="hover:text-accent-orange transition-colors">
                    +91 91762 39027
                  </a>
                  <a href="tel:+918925609027" className="hover:text-accent-orange transition-colors">
                    +91 89256 09027
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-card-border bg-card-bg shadow-sm">
              <Mail className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-sm text-foreground">Email Channels</h3>
                <p className="text-muted-text text-xs sm:text-sm mt-1 flex flex-col gap-1">
                  <a href="mailto:emtanpolymers@gmail.com" className="hover:text-accent-orange transition-colors">
                    emtanpolymers@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 rounded-xl border border-card-border bg-card-bg shadow-sm">
              <Clock className="w-6 h-6 text-accent-orange shrink-0 mt-0.5" />
              <div>
                <h3 className="font-display font-bold text-sm text-foreground">Working Hours</h3>
                <p className="text-muted-text text-xs sm:text-sm mt-1">
                  Open 24 Hours / 7 Days a Week<br />
                  (24/7 Continuous Operations)
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Mock Map Section */}
          <div className="rounded-2xl border border-card-border overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-md">
            <div className="bg-slate-50 dark:bg-slate-900/50 p-4 border-b border-card-border flex items-center justify-between">
              <span className="text-xs font-bold text-foreground">Factory Location (Korukkupet)</span>
              <span className="inline-flex items-center gap-1 rounded bg-accent-orange/10 px-2 py-0.5 text-[10px] font-bold text-accent-orange">
                Live Directions
              </span>
            </div>
            {/* Google Maps Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.501569429415!2d80.2687121!3d13.1303867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f00135c37db%3A0xc13977e25193e5b6!2sEMTAN%20POLYMERS!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="EMTAN Polymers Google Map Location"
              className="w-full"
            />
          </div>
        </div>

        {/* Right: Contact Form Panel */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/30 border border-card-border space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-accent-orange/15 text-accent-orange flex items-center justify-center shrink-0">
                {isRfq ? <ShieldCheck className="w-5 h-5" /> : <MessageSquareCode className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-foreground">
                  {isRfq ? 'Submit a Request for Quote (RFQ)' : 'Send Us an Online Message'}
                </h3>
                <p className="text-muted-text text-xs">
                  {isRfq 
                    ? 'Provide target specifications and dimensions for accurate pricing.' 
                    : 'Our engineering representatives will respond to your queries shortly.'}
                </p>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Contact Banner */}
      <section className="bg-slate-900/70 text-white py-16 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-25" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-4">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Contact Our Engineering Center
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
            Get technical assistance, check project timelines, submit design drawings, or request custom-formulated polyurethane wear tests.
          </p>
        </div>
      </section>

      {/* Main Content inside Suspense */}
      <React.Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-24">
            <Settings className="w-10 h-10 text-accent-orange animate-spin mb-4" />
            <span className="text-sm text-muted-text font-bold">Loading contact channels...</span>
          </div>
        }
      >
        <ContactPageContent />
      </React.Suspense>
    </div>
  );
}
