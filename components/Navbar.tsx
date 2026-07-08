"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/data";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

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
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-wide flex items-center justify-between h-20">
       <Link
            href="/"
            className="font-display text-sm xs:text-base md:text-xl tracking-wide uppercase text-cream whitespace-nowrap truncate max-w-[70vw] sm:max-w-none"
          >
            Wedding Documentary <span className="text-rose">Events</span>
          </Link>
<nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-widest2 uppercase text-cream/80 hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-cream"
            aria-label="Open menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}