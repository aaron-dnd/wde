import Portfolio from "@/components/Portfolio";
import CTASection from "@/components/CTASection";

export default function PortfolioPage() {
  return (
    <div>
      <div className="pt-24 bg-ink text-cream">
        <section className="container-wide py-16">
          <p className="section-label mb-4 text-rose">
            <span className="eyebrow-line bg-rose" />
               Our Work
          </p>
          <h1 className="font-display text-3xl md:text-5xl text-cream max-w-none">
               Every celebration is different. Here&apos;s a few we&apos;ve transformed.
          </h1>
        </section>
      </div>
      <Portfolio theme="light" />
      <CTASection />
    </div>
  );
}