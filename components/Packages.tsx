"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { packages } from "@/lib/data";
import { Check } from "lucide-react";

export default function Packages() {
  return (
    <section id="packages" className="bg-ink py-20 sm:py-28 md:py-36">
      <div className="container-wide">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Packages
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream max-w-2xl mb-4">
          Coverage built around your events, not a fixed template
        </h2>
        <p className="text-stone max-w-xl mb-12 md:mb-16 text-sm sm:text-base">
          Every wedding is different — these are starting points. Tell us
          your functions and guest count and we&apos;ll tailor a proposal.
        </p>

        {/* Mobile: horizontal snap scroll. lg+: full grid */}
        <div
          className="
            flex lg:grid lg:grid-cols-5
            gap-5 md:gap-6
            overflow-x-auto lg:overflow-visible
            snap-x snap-mandatory
            -mx-6 px-6 lg:mx-0 lg:px-0
            pb-4 lg:pb-0
          "
        >
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.tier}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`
                relative shrink-0 snap-center
                w-[78vw] xs:w-[70vw] sm:w-[340px] lg:w-auto
                flex flex-col
                border ${pkg.popular ? "border-rose" : "border-cream/15"}
                bg-cream/[0.03] p-6 sm:p-7
              `}
            >
              {pkg.popular && (
                <span className="absolute -top-3 left-6 bg-rose text-ink text-[10px] tracking-widest2 uppercase px-3 py-1">
                  Most Booked
                </span>
              )}

              <span
                className="h-1 w-10 mb-5"
                style={{ backgroundColor: pkg.accent }}
              />
              <h3 className="font-display text-2xl text-cream mb-1">
                {pkg.tier}
              </h3>
              <p className="text-stone text-xs mb-4">{pkg.tagline}</p>
              <p className="font-display text-3xl text-cream mb-6">
                {pkg.price}
                <span className="text-stone text-sm font-body">
                  {" "}
                  onwards
                </span>
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-cream/80 leading-snug"
                  >
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: pkg.accent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="text-center text-xs tracking-widest2 uppercase border border-cream/30 py-3 hover:border-rose hover:text-rose transition-colors"
              >
                Enquire
              </Link>
            </motion.div>
          ))}
        </div>

        <p className="text-stone text-xs mt-6 lg:hidden">
          Swipe to see all packages →
        </p>
      </div>
    </section>
  );
}