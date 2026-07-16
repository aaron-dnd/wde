"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const directors = [
  {
    name: "MR. J. ADITYA RATHOD",
    role: "Founder & Creative Director",
    image: "/team/director-one.jpg",
    bio: "Leads the design vision across every celebration - from first concept sketch to final walkthrough. Believes décor should feel personal, never templated.",
  },
  {
    name: "MR. AARON AMIT BIRRU",
    role: "Partner, Technology & Execution",
    image: "/team/director-two.jpg",
    bio: "Co-built the studio from the ground up - the systems, the process, the standard every event is held to.",
  },
   {
    name: "MR. KARTHIK BULLA",
    role: "Technical & Production Partner",
    image: "/team/director-three.png",
    bio: "The studio's technical backbone - from brand identity to what runs behind the scenes, and hands-on wherever precision matters most on event day.",
  },
];

export default function Directors() {
  return (
    <section className="bg-cream text-ink py-20 sm:py-28 md:py-36">
      <div className="container-wide">
        <p className="text-xs tracking-widest2 uppercase text-rose mb-4">
          <span className="inline-block h-px w-10 bg-gold align-middle mr-3" />
          Who We Are
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl max-w-2xl mb-16">
          The people behind every celebration we build
        </h2>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-10">
          {directors.map((d, i) => (
            <motion.div
              key={d.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col"
            >
              <div className="relative w-full aspect-[4/5] mb-6 overflow-hidden bg-ink/5">
                <Image
                  src={d.image}
                  alt={d.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="font-display text-2xl mb-1">{d.name}</h3>
              <p className="text-rose text-xs tracking-widest2 uppercase mb-4">
                {d.role}
              </p>
              <p className="text-ink/70 text-sm leading-relaxed max-w-md">
                {d.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}