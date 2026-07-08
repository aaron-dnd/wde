"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="container-wide">
        <p className="section-label mb-16 text-center">
          <span className="eyebrow-line" />
          In Their Words
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-xl md:text-2xl text-cream leading-snug mb-6">
                “{t.quote}”
              </p>
              <footer className="text-rose text-xs tracking-widest2 uppercase">
                {t.name}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}