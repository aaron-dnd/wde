export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20">
      <div className="container-wide max-w-4xl animate-fade-in">
        <p className="section-label mb-4">
          <span className="eyebrow-line" />
          Legal Agreements
        </p>
        <h1 className="font-display text-4xl md:text-6xl text-cream mb-2">
          Privacy Policy
        </h1>
        <p className="text-stone/60 text-xs tracking-wider uppercase mb-12">
          Last Updated: July 2026
        </p>

        <div className="space-y-10 text-stone/90 leading-relaxed text-sm">
          <p>
            This Privacy Policy explains how <strong>Wedding Documentary Events (WDE)</strong> collects, uses, and protects your personal information when you visit our website or submit an enquiry. By using our site, you agree to the practices described below.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">1. Information We Collect</h2>
            <p>
              We collect personal information only when you voluntarily submit it through our Contact page or Free Quote form, including:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>Your name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Event date, venue/city, and event type</li>
              <li>Any additional details you choose to share in your message</li>
            </ul>
            <p>
              We do not collect any personal information automatically through cookies, analytics, or tracking technologies. We do not use Google Analytics, advertising pixels, or any similar tools on this website.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">2. How We Use Your Information</h2>
            <p>
              The information you submit is used solely to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>Respond to your enquiry and discuss your event requirements.</li>
              <li>Prepare and share quotations and proposals with you.</li>
              <li>Contact you regarding your booking, if you choose to proceed.</li>
            </ul>
            <p>
              We do not use your information for marketing unrelated to your enquiry, and we do not sell or rent your personal information to any third party.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">3. How Your Information Is Shared</h2>
            <p>
              When you submit a form on our website, your details are sent securely to our email inbox via <strong>Resend</strong>, a third-party email delivery service, so our team can respond to you. Resend processes this information only to deliver the email and does not use it for any other purpose.
            </p>
            <p>
              We do not share your information with any other third party, except where required by law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">4. Data Retention</h2>
            <p>
              We retain enquiry information for as long as necessary to respond to you and, if you book with us, for the duration of our engagement and a reasonable period afterward for record-keeping. You may request deletion of your information at any time, as described in Section 6 below.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">5. Data Security</h2>
            <p>
              We take reasonable technical measures to protect the information you share with us. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">6. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-stone/80">
              <li>Ask us what personal information we hold about you.</li>
              <li>Request that we correct inaccurate information.</li>
              <li>Request that we delete your personal information, subject to any legal or contractual obligations that require us to retain it.</li>
              <li>Withdraw consent for us to contact you regarding your enquiry.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the details in Section 8 below.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">7. Children&apos;s Privacy</h2>
            <p>
              Our website and services are not directed at children, and we do not knowingly collect personal information from anyone under the age of 18.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="font-display text-xl text-cream">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The &quot;Last Updated&quot; date above will reflect the most recent revision.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-4 pt-6 border-t border-cream/10">
            <h2 className="font-display text-xl text-cream">9. Contact Us</h2>
            <p>
              For any questions about this Privacy Policy, or to request access to, correction of, or deletion of your personal information, please contact us:
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
              <li className="text-stone">Location: Vijayawada, Andhra Pradesh</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}