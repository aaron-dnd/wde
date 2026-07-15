"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { concepts } from "@/lib/data";

export default function Concepts() {
  return (
    <section className="bg-ink py-20 sm:py-28 md:py-36">
      <div className="container-wide">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Design Studio
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream max-w-2xl mb-4">
          Concepts we design, ready to be built for you
        </h2>
        <p className="text-stone max-w-xl mb-16 text-sm sm:text-base">
          These are design directions, not completed events - a starting
          point for you or your vendors to see how a theme could come
          together before we build it for real.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {concepts.map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group relative aspect-[4/5] overflow-hidden bg-cream/5 border border-cream/10"
            >
              <Image
                src={c.cover}
                alt={c.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-[10px] tracking-widest2 uppercase text-gold">
                  {c.tag}
                </span>
                <h3 className="font-display text-xl text-cream mt-2 mb-3">
                  {c.title}
                </h3>
                <p className="text-cream/70 text-xs leading-relaxed mb-4 max-w-xs">
                  {c.description}
                </p>
                <div className="flex gap-2">
                  {c.palette.map((color) => (
                    <span
                      key={color}
                      className="h-4 w-4 rounded-full border border-cream/30"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}