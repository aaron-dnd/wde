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
          We started this studio to film weddings the way documentaries
          film life
        </h1>
        <p className="text-stone text-lg leading-relaxed max-w-2xl">
          Wedding Documentary Events was founded on a simple frustration:
          most wedding films look identical — the same poses, the same
          slow-motion confetti, the same music drop. We wanted something
          closer to the truth. So we borrowed from cinéma vérité — the
          belief that the camera should be a witness, not a director — and
          applied it to the most human day most people will ever have.
          Every film we make is built from what actually happened, not what
          we staged to happen.
        </p>
      </section>
      <Pillars />
      <CTASection />
    </div>
  );
}