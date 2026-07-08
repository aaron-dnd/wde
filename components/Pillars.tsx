"use client";

import { motion } from "framer-motion";
import { pillars } from "@/lib/data";

export default function Pillars() {
  return (
    <section id="pillars" className="bg-ink py-28 md:py-36">
      <div className="container-wide">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Our Philosophy
        </p>
        <h2 className="font-display text-3xl md:text-5xl text-cream max-w-2xl mb-16">
          Four principles that shape how we film every wedding
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-cream/10">
          {pillars.map((p, i) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-ink p-10 md:p-14"
            >
              <span className="font-display text-rose text-sm">{p.number}</span>
              <h3 className="font-display text-2xl md:text-3xl text-cream mt-3 mb-4">
                {p.title}
              </h3>
              <p className="text-stone leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}