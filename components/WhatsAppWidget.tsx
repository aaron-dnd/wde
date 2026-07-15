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
            className="w-[300px] sm:w-[320px] bg-ink-light/95 border border-cream/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md overflow-hidden text-cream pointer-events-auto"
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
              <div className="bg-ink/80 border border-cream/10 rounded-xl rounded-tl-none p-3.5 max-w-[95%] shadow-lg">
                <p className="text-xs sm:text-sm leading-relaxed text-cream/90">
                  Welcome to
                  <span className="block text-[#D8B061] font-display font-semibold text-sm sm:text-base my-1.5 tracking-wide">
                    Wedding Documentary Events
                  </span>
                  Let us help you curate, style, and document your celebration. How can we help you capture your story?
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
              <span>Fast Response</span>
              <span>•</span>
              <span>24/7 Inquiry</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Sticky Phone Button */}
      <Magnetic strength={25}>
        <a
          href="tel:+919573824261"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#D8B061] via-[#B88C4A] to-[#906925] border border-cream/20 hover:scale-105 hover:shadow-[0_8px_35px_rgba(216,176,97,0.5)] transition-all duration-300 pointer-events-auto select-none"
          aria-label="Call WDE Studio"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 sm:w-7 sm:h-7 text-ink"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </a>
      </Magnetic>

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
            /* Custom WhatsApp SVG Icon - Official Outline */
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current text-white"
              viewBox="0 0 448 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 512l145.4-38.2c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-86.2 22.7 23.1-84-4.4-7c-18.4-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          )}
        </button>
      </Magnetic>
    </div>
  );
}
