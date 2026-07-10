import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-rose py-24 md:py-32">
      <div className="container-wide text-center">
        <h2 className="font-display text-3xl md:text-5xl text-ink mb-8 max-w-2xl mx-auto">
          Let&apos;s design your celebration the way it deserves to be seen
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-ink text-cream px-10 py-4 text-xs tracking-widest2 uppercase hover:bg-black transition-colors"
        >
          Start Your Enquiry
        </Link>
      </div>
    </section>
  );
}