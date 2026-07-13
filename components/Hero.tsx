"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[92vh] min-h-[520px] sm:h-screen sm:min-h-[640px] w-full flex items-end overflow-hidden bg-ink">
     
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      >
        <source src="/portfolio/hero-reel.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

    <div className="container-wide relative z-10 pb-16 sm:pb-24 md:pb-32">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-label mb-4 sm:mb-6"
        >
          <span className="eyebrow-line" />
          Truth: The Unscripted Wedding Story
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.02] sm:leading-[0.95] text-cream max-w-4xl"
        >
          The Art of <em className="text-rose not-italic">Witnessing</em> Love
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 sm:mt-8 max-w-xl text-stone text-sm sm:text-base md:text-lg leading-relaxed"
        >
           Wedding Documentary Events is a full-service décor and event
          styling studio - designing spaces for weddings, birthdays,
          corporate events, concerts, and every celebration in between,
          each one built to feel as memorable as the moment itself.
        </motion.p>
      </div>
    </section>
  );
}