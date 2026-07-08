"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink flex flex-col"
        >
          <div className="container-wide flex justify-end h-20 items-center">
            <button onClick={onClose} className="text-cream" aria-label="Close menu">
              <X size={28} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-start justify-center gap-6 container-wide">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.08 * i }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="font-display text-4xl text-cream hover:text-rose transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}