"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Magnetic from "./Magnetic";

interface WhatsAppWidgetProps {
  phoneNumber?: string; // Set this to your actual WhatsApp phone number (with country code, e.g., "91XXXXXXXXXX")
}

export default function WhatsAppWidget({
  phoneNumber = "919573824261", // Replace with your actual number.
}: WhatsAppWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to generate WhatsApp links with specific pre-filled messages
  const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-[99999] flex flex-col items-end gap-4">
      {/* Interactive Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="w-[320px] sm:w-[360px] bg-ink/90 border border-cream/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-xl overflow-hidden text-cream pointer-events-auto"
          >
            {/* Header: Brand Styling */}
            <div className="bg-gradient-to-r from-ink/95 to-ink-light/80 p-5 flex items-center gap-3 border-b border-cream/5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-cream/20 bg-ink-light flex items-center justify-center p-1">
                <Image
                  src="/wde-logo-3.png"
                  alt="WDE Avatar"
                  fill
                  sizes="48px"
                  className="object-contain p-1"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-ink animate-pulse" />
              </div>
              <div>
                <h3 className="font-display font-medium text-cream text-lg leading-tight">
                  WDE Studio
                </h3>
                <span className="text-xs text-cream/60 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
                  Online now
                </span>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-5 flex flex-col gap-4">
              {/* Animated Welcome Message */}
              <div className="bg-cream/5 border border-cream/5 rounded-xl rounded-tl-none p-3.5 max-w-[90%]">
                <p className="text-sm leading-relaxed text-cream/90">
                  👋 Hi! Welcome to **Wedding Documentary Events**!
                  <br />
                  How can we help you capture your perfect wedding story?
                </p>
              </div>



              {/* Fallback Direct Continue Button */}
              <a
                href={getWhatsAppLink("Hi, I want to book an inquiry with Wedding Documentary Events.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#25D366] text-white rounded-xl shadow-[0_4px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-all duration-300 text-sm font-medium hover:scale-[1.02]"
              >
                <span>Continue on WhatsApp</span>
              </a>
            </div>

            {/* Footer Statistics */}
            <div className="px-5 py-3.5 bg-ink-light/20 border-t border-cream/5 flex justify-around text-[10px] tracking-wider uppercase text-cream/40">
              <span>100+ Stories</span>
              <span>•</span>
              <span>Fast Response</span>
              <span>•</span>
              <span>24/7 Inquiry</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sticky Toggle Button */}
      <Magnetic strength={25}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white shadow-[0_8px_30px_rgba(0,0,0,0.3)] transition-all duration-300 pointer-events-auto select-none ${isOpen
            ? "bg-ink border border-cream/20 hover:bg-ink-light"
            : "bg-[#25D366] shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_35px_rgb(37,211,102,0.6)]"
            }`}
          aria-label={isOpen ? "Close WhatsApp Chat" : "Open WhatsApp Chat"}
        >
          {isOpen ? (
            /* Close SVG Icon */
            <svg
              className="w-6 h-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            /* Custom WhatsApp SVG Icon */
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.725 1.45h.007c5.584 0 10.122-4.516 10.126-10.064.002-2.687-1.037-5.211-2.93-7.105C16.634 1.541 14.12 1.5 12.01 1.5c-5.59 0-10.13 4.517-10.134 10.065a9.903 9.903 0 0 0 1.54 5.372L2.37 20.89l4.277-1.12.001-.001-.001.001-.002.001L6.647 19.154zm12.333-5.26c-.328-.164-1.94-.956-2.24-1.066-.3-.11-.518-.165-.736.164-.218.33-.846 1.066-1.037 1.285-.19.22-.382.247-.71.082-1.156-.579-2.062-1.018-2.884-1.782-.7-.652-1.173-1.411-1.31-1.644-.136-.233-.014-.36.11-.482.112-.11.247-.288.37-.432.12-.144.162-.24.243-.4.08-.165.04-.31-.02-.473-.06-.164-.518-1.25-.71-1.706-.186-.45-.37-.389-.517-.396l-.44-.008c-.152 0-.4.057-.61.286-.21.23-.8.78-.8 1.9s.816 2.2 1.026 2.48c.21.28 1.606 2.45 3.89 3.435.544.234 1.05.39 1.41.504.55.174 1.05.15 1.444.09.44-.067 1.94-.793 2.21-1.52.275-.726.275-1.348.193-1.48-.083-.13-.306-.213-.635-.377z" />
            </svg>
          )}
        </button>
      </Magnetic>
    </div>
  );
}
