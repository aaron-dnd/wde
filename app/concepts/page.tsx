import Concepts from "@/components/Concepts";
import CTASection from "@/components/CTASection";

export default function ConceptsPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="container-wide pb-12 sm:pb-16">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Concepts
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-cream max-w-none">
          How we&apos;d design it, before we build it
        </h1>
      </section>
      <Concepts />
      <CTASection />
    </div>
  );
}