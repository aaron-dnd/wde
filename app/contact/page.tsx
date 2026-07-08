import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-28 container-wide">
      <p className="section-label mb-4">
        <span className="eyebrow-line" />
        Enquire
      </p>
      <h1 className="font-display text-4xl md:text-6xl text-cream max-w-2xl mb-4">
        Tell us about your wedding
      </h1>
      <p className="text-stone max-w-xl mb-16">
        Share a few details below and we'll get back to you within 48 hours
        with availability and a tailored proposal.
      </p>
      <ContactForm />
    </div>
  );
}