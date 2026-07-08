import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";

export default function PortfolioPage() {
  return (
    <div className="pt-32">
      <section className="container-wide pb-16">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Films
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-cream max-w-3xl">
          Every wedding is a different story. Here are a few of ours.
        </h1>
      </section>
      <Portfolio />
      <CTASection />
    </div>
  );
}