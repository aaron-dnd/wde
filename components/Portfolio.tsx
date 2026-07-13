"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/data";

export default function Portfolio({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";
  return (
    <section
      id="films"
      className={`py-28 md:py-36 border-t ${
        isDark
          ? "bg-ink text-cream border-cream/5"
          : "bg-cream text-ink border-ink/5"
      }`}
    >
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">
              <span className={`eyebrow-line ${isDark ? "bg-rose" : "bg-gold"}`} />
              Recent Celebrations
            </p>
            <h2 className="font-display text-3xl md:text-5xl max-w-xl">
              Real weddings, real families, real moments
            </h2>
          </div>
          <Link
            href="/portfolio"
            className={`text-xs tracking-widest2 uppercase border-b pb-1 transition-colors ${
              isDark
                ? "border-cream/30 text-cream hover:text-rose hover:border-rose"
                : "border-ink/30 text-ink hover:text-rose hover:border-rose"
            }`}
          >
            View all work
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-ink"
            >
              <Image
                src={item.cover}
                alt={`${item.couple} wedding film`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-xs tracking-widest2 uppercase text-rose">
                  {item.type}
                </span>
                <h3 className="font-display text-2xl text-cream mt-2">
                  {item.couple}
                </h3>
                <p className="text-cream/70 text-sm">{item.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}