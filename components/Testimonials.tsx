"use client";

import { testimonials } from "@/lib/data";

export default function Testimonials() {
  // Duplicate the list so the CSS animation can loop seamlessly at -50%
  const looped = [...testimonials, ...testimonials];

  return (
    <section className="bg-ink py-20 sm:py-28 md:py-36 overflow-hidden">
      <div className="container-wide mb-12 md:mb-16">
        <p className="section-label">
          <span className="eyebrow-line" />
          In Their Words
        </p>
      </div>

      <div className="relative">
        {/* fade edges so cards don't hard-cut at the screen bounds */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ink to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ink to-transparent z-10" />

        <div className="marquee-track flex gap-8 md:gap-10 w-max">
          {looped.map((t, i) => (
            <blockquote
              key={`${t.name}-${i}`}
              className="
                shrink-0
                w-[80vw] xs:w-[65vw] sm:w-[380px] lg:w-[400px]
                border-l border-gold/40 pl-6
              "
            >
              <p className="font-display text-xl md:text-2xl text-cream leading-snug mb-6">
                &quot;{t.quote}&quot;
              </p>
              <footer className="text-rose text-xs tracking-widest2 uppercase">
                {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}