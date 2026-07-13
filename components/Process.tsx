"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="bg-cream text-ink py-28 md:py-36 border-t border-ink/5">
      <div className="container-wide">
        <p className="section-label mb-4">
          <span className="eyebrow-line bg-rose" />
          How It Works
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-ink max-w-2xl mb-16">
          From first enquiry to final delivery
        </h2>

        <div className="space-y-0 divide-y divide-ink/10">
          {process.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8"
            >
              <span className="font-display text-4xl text-rose/70 md:w-20 shrink-0">
                {step.step}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-ink md:w-72 shrink-0">
                {step.title}
              </h3>
              <p className="text-ink/70 leading-relaxed max-w-xl">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}