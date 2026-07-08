"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="films" className="bg-cream text-ink py-28 md:py-36">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">
              <span className="eyebrow-line bg-rose" />
              Recent Films
            </p>
            <h2 className="font-display text-3xl md:text-5xl max-w-xl">
              Real weddings, real families, real moments
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-xs tracking-widest2 uppercase border-b border-ink pb-1 hover:text-rose hover:border-rose transition-colors"
          >
            View all films
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