"use client";

import { useState } from "react";
import Magnetic from "./Magnetic";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // TODO: replace with your own API route (e.g. /api/enquiry) or a service
    // like Formspree / Resend to actually receive these enquiries by email.
    console.log("Wedding enquiry:", data);

    await new Promise((res) => setTimeout(res, 800));
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <p className="font-display text-2xl text-cream">
        Thank you — we've received your enquiry and will reply by email
        within 48 hours.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-xl">
      <div className="grid sm:grid-cols-2 gap-8">
        <Field name="name" label="Your Names" placeholder="Amara & Rohan" required />
        <Field name="email" label="Email" type="email" placeholder="you@email.com" required />
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        <Field name="phone" label="Phone" placeholder="+91 90000 00000" />
        <Field name="date" label="Wedding Date" type="date" />
      </div>
      <Field name="location" label="Venue / City" placeholder="Bengaluru, Karnataka" />

      <div>
        <label className="text-xs tracking-widest2 uppercase text-stone">
          Events to Cover
        </label>
        <div className="flex flex-wrap gap-4 mt-3">
          {["Haldi", "Mehendi", "Sangeet", "Wedding", "Reception"].map((ev) => (
            <label key={ev} className="flex items-center gap-2 text-cream text-sm">
              <input type="checkbox" name="events" value={ev} className="accent-rose" />
              {ev}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs tracking-widest2 uppercase text-stone">
          Tell us about your wedding
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Number of guests, functions, and anything that matters to you..."
          className="w-full mt-3 bg-transparent border-b border-cream/30 py-3 text-cream placeholder:text-stone focus:outline-none focus:border-rose transition-colors resize-none"
        />
      </div>

      <Magnetic strength={20}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className="bg-rose text-ink px-10 py-4 text-xs tracking-widest2 uppercase hover:bg-cream transition-colors disabled:opacity-50"
        >
          {status === "submitting" ? "Sending..." : "Submit Enquiry"}
        </button>
      </Magnetic>
    </form>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs tracking-widest2 uppercase text-stone">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full mt-3 bg-transparent border-b border-cream/30 py-3 text-cream placeholder:text-stone focus:outline-none focus:border-rose transition-colors"
      />
    </div>
  );
}