import Packages from "@/components/Packages";
import CTASection from "@/components/CTASection";

export default function PackagesPage() {
  return (
    <div className="pt-28 sm:pt-32">
      <section className="container-wide pb-12 sm:pb-16">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Investment
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl text-cream max-w-3xl">
          Five ways to have your wedding documented
        </h1>
      </section>
      <Packages />
      <CTASection />
    </div>
  );
}