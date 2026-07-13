"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/data";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Dimmed Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs"
          />

          {/* Right Drawer Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 240 }}
            className="fixed top-0 right-0 bottom-0 w-1/2 z-[60] bg-ink/70 backdrop-blur-xl border-l border-cream/10 flex flex-col shadow-2xl overflow-y-auto"
          >
            {/* Header */}
            <div className="flex justify-between h-20 items-center px-6 border-b border-cream/5">
              <Link href="/" onClick={onClose} className="block">
                <div className="relative w-[110px] h-12 sm:w-[130px] sm:h-14">
                  <Image
                    src="/wde-logo-2.png"
                    alt="WDE Logo"
                    fill
                    sizes="(max-width: 640px) 110px, 130px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>

              {/* Close Icon Button */}
              <button
                onClick={onClose}
                className="p-1 text-cream/70 hover:text-rose transition-colors"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Body Links */}
            <nav className="flex-1 flex flex-col py-10 px-8 gap-6">
              <span className="text-[10px] tracking-[0.25em] uppercase text-gold font-bold mb-4 opacity-50">
                Menu
              </span>
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`text-sm sm:text-base tracking-widest uppercase font-medium transition-colors duration-300 block py-1 ${
                          isActive
                            ? "text-rose"
                            : "text-cream/80 hover:text-rose"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}