import Link from "next/link";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="bg-ink border-t border-cream/10 py-16">
      <div className="container-wide flex flex-col sm:flex-row justify-between gap-10 sm:gap-16">
        <div>
          <h3 className="font-display text-2xl text-cream mb-2">
            Wedding Documentary Events
          </h3>
          <p className="text-stone text-sm max-w-xs">
            Décor and event styling for weddings and every celebration in
            between, built around the details that make a day unforgettable.
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <p className="text-xs tracking-widest2 uppercase text-rose mb-4">
              Navigate
            </p>
            <ul className="space-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-cream/70 text-sm hover:text-cream transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-widest2 uppercase text-rose mb-4">
              Contact
            </p>
            <ul className="space-y-2 text-sm text-cream/70">
              <li>hello@weddingdocumentaryevents.com</li>
              <li>+91 90000 00000</li>
              <li>Bengaluru, Karnataka</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container-wide mt-12 pt-6 border-t border-cream/10 text-xs text-stone flex justify-between">
        <span>© {new Date().getFullYear()} Wedding Documentary Events</span>
        <span>Every celebration, styled with intention.</span>
      </div>
    </footer>
  );
}