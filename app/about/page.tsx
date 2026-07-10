import Pillars from "@/components/Pillars";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="pt-32">
      <section className="container-wide pb-20">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Our Story
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-cream max-w-3xl mb-8">
          We started this studio to make every celebration feel
          unmistakably yours
        </h1>
        <p className="text-stone text-lg leading-relaxed max-w-2xl">
          Wedding Documentary Events was founded on a simple belief: décor
          shouldn&apos;t look borrowed from someone else&apos;s wedding. We build every
          concept from scratch — palette, florals, structures, and lighting —
          around your families, your venue, and the story you&apos;re
          celebrating. From haldi to reception, birthdays to corporate
          stages, we treat every function as its own design problem worth
          solving properly. The result isn&apos;t a template dressed up — it&apos;s a
          space built for exactly one celebration: yours.
        </p>
      </section>
      <Pillars />
      <CTASection />
    </div>
  );
}