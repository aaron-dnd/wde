import Services from "@/components/Services";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <section className="container-wide pb-16">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          What We Do
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-cream max-w-3xl">
           Décor and production for every celebration you&apos;re planning
        </h1>
      </section>
      <Services />
      <Process />
      <CTASection />
    </div>
  );
}