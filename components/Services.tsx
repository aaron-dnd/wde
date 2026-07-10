"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="bg-cream text-ink py-28 md:py-36">
      <div className="container-wide">
        <p className="section-label mb-4">
          <span className="eyebrow-line bg-rose" />
           What We Do
        </p>
        <h2 className="font-display text-3xl md:text-5xl max-w-2xl mb-16">
          Decor and event production for every celebration
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="border-t border-ink/15 pt-6"
            >
              <span className="font-display text-sm text-rose">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl mt-2 mb-3">{s.title}</h3>
              <p className="text-ink/70 text-sm leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}