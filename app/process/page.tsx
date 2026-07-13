import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function ProcessPage() {
  return (
    <div className="pt-32">
      <section className="container-wide pb-16">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          How It Works
        </p>
        <h1 className="font-display text-3xl md:text-5xl text-cream max-w-none">
          Simple, transparent, and built around your timeline
        </h1>
      </section>
      <Process />
      <Testimonials />
      <CTASection />
    </div>
  );
}