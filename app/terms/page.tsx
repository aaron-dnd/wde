export default function TermsPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-wide max-w-4xl animate-fade-in">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Legal Agreements
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-cream mb-2">
          Terms of Service
        </h1>
        <p className="text-stone/60 text-xs tracking-wider uppercase mb-12">
          Last Updated: July 2026
        </p>

        <div className="space-y-10 text-stone/90 leading-relaxed text-sm">
          <p>
            These Terms of Service govern the relationship between you and <strong>Wedding Documentary Events (WDE)</strong>. By booking our services or engaging with our event services, you agree to follow and be bound by the terms outlined below.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">1. Services Offered</h2>
            <p>
              WDE provides comprehensive event planning and management services including wedding planning, photography & videography, décor & styling, catering coordination, entertainment booking, and corporate event management in Hyderabad and surrounding areas.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">2. Booking and Payment</h2>
            <p>
              To secure and confirm your event services, payments are structured according to the following milestones:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>A non-refundable booking fee of <strong>25%</strong> is required to confirm your event date.</li>
              <li><strong>50%</strong> of the total amount is due 30 days before the event.</li>
              <li>Final payment is due <strong>7 days</strong> before the event.</li>
              <li>We accept payments via bank transfer, UPI, credit/debit cards, and cash.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">3. Cancellation Policy</h2>
            <p>
              Should you need to cancel your booking, refund distributions are governed as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>Cancellation more than 60 days before event: <strong>75% refund</strong> (excluding the initial non-refundable booking fee).</li>
              <li>Cancellation 30-60 days before event: <strong>50% refund</strong>.</li>
              <li>Cancellation less than 30 days before event: <strong>No refund</strong>.</li>
              <li>Date changes are subject to team and vendor availability and may incur additional planning/coordination charges.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">4. Client Responsibilities</h2>
            <p>
              As our client, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>Provide accurate, detailed information regarding your event requirements and layout wishes.</li>
              <li>Make timely decisions on vendor selections, structure approvals, and design choices.</li>
              <li>Ensure all necessary permissions and government permits are secured for the venue.</li>
              <li>Communicate any event changes, additions, or concerns promptly in writing.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">5. Intellectual Property</h2>
            <p>
              All photographs, videos, design concepts, layouts, and creative content produced by WDE remain our sole intellectual property. We reserve the right to use event photos and videos for marketing, portfolio displays, and promotional distribution unless otherwise explicitly agreed upon in writing beforehand.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">6. Liability</h2>
            <p>
              While we strive for styling and execution excellence, WDE is not liable for circumstances beyond our control, including but not limited to adverse weather conditions, vendor no-shows, venue-restricted access issues, power grid disruptions, or force majeure events. Our total liability for any dispute or error is strictly limited to the amount paid for our services.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">7. Third-Party Vendors</h2>
            <p>
              We coordinate with various third-party vendors on your behalf. However, individual vendor contracts, deposits, and performance terms are strictly between you and the vendor. We highly recommend reviewing all individual vendor agreements carefully.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">8. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes arising from our services or agreements shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-6 border-t border-cream/10">
            <h2 className="font-display text-xl text-cream">9. Contact Information</h2>
            <p>
              For any questions regarding these Terms of Service or to arrange details for your event, please reach out to us:
            </p>
            <ul className="space-y-1 text-cream">
              <li>
                Email:{" "}
                <a href="mailto:weddingdocumentaryevents@gmail.com" className="underline hover:text-rose transition-colors">
                  weddingdocumentaryevents@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+919573824261" className="underline hover:text-rose transition-colors">
                  +91 95738 24261
                </a>
              </li>
              <li className="text-stone">Location: Hyderabad & Vijayawada</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
