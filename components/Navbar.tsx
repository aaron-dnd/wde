"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";
import Magnetic from "./Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ${scrolled ? "bg-ink/70 backdrop-blur-xl border-b border-cream/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-gradient-to-b from-ink/90 via-ink/40 to-transparent pt-2 pb-6"
          }`}
      >
        <div className="container-wide flex items-center justify-between h-24 md:h-28 py-2">
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
            aria-label="Wedding Documentary Events Home"
          >
            <div className="relative h-20 w-40 sm:h-24 sm:w-48 md:h-28 md:w-56 lg:h-32 lg:w-64">
              <Image
                src="/wde-logo-2.png"
                alt="WDE Logo"
                fill
                sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                className="object-contain"
                priority
              />
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Magnetic key={link.href} strength={20}>
                <Link
                  href={link.href}
                  className="block text-xs tracking-widest2 uppercase text-cream/80 hover:text-rose transition-colors py-2 px-1"
                >
                  {link.label}
                </Link>
              </Magnetic>
            ))}
          </nav>

          <Magnetic strength={40}>
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-cream p-2 -mr-2"
              aria-label="Open menu"
            >
              <Menu size={26} />
            </button>
          </Magnetic>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}