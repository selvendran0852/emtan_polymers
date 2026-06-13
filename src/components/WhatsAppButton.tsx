'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = React.useState(false);

  React.useEffect(() => {
    // Show tooltip after 3 seconds, then hide after 8 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);

    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const phoneNumber = '+918925609027';
  const message = encodeURIComponent(
    'Hi EMTAN Polymers, I would like to inquire about your custom cast polyurethane products.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="hidden sm:block bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-xs font-semibold px-3 py-2 rounded-lg shadow-xl border border-card-border pointer-events-none whitespace-nowrap"
          >
            Chat with our Sales Team
            <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 rotate-45 bg-white dark:bg-slate-900 border-r border-t border-card-border" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-emerald-500/30 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/20"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          y: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.488 1.451 5.42 1.453 5.489 0 9.957-4.469 9.96-9.96.002-2.66-1.033-5.161-2.91-7.04C17.24 1.767 14.74 .73 12.08 .73c-5.485 0-9.95 4.467-9.953 9.957-.001 1.942.5 3.823 1.455 5.424l-.998 3.645 3.738-.981zm12.338-5.32c-.318-.159-1.885-.93-2.171-1.033-.286-.103-.495-.159-.704.159-.208.318-.806.103-1.229.479-.104.103-.208.103-.526-.057-2.317-1.157-3.83-2.884-4.38-3.83-.159-.286-.017-.439.125-.58l.417-.479c.125-.159.166-.258.25-.417.083-.159.042-.318-.02-.479-.063-.159-.495-1.209-.679-1.66-.179-.43-.377-.37-.52-.37h-.443c-.159 0-.417.059-.636.298-.218.239-.834.816-.834 1.99s.854 2.308.973 2.468c.119.159 1.681 2.567 4.071 3.593.57.244 1.014.39 1.361.5.572.182 1.092.156 1.503.095.459-.068 1.885-.77 2.151-1.517.266-.747.266-1.387.187-1.517-.079-.13-.286-.208-.604-.367z" />
        </svg>
      </motion.a>
    </div>
  );
}
