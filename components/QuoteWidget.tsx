"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ChevronRight } from "lucide-react";

export default function QuoteWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  const eventTypes = [
    "Wedding",
    "Reception",
    "Engagement",
    "Haldi / Mehendi",
    "Sangeeth / Sangeet",
    "Birthday Party",
    "Corporate Event",
    "Baby Shower",
    "Half Saree Function",
    "Anniversary",
    "Other",
  ];

  // Reset status to idle when drawer is closed (after transition completes)
  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setStatus("idle");
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      eventType: formData.get("eventType"),
      message: formData.get("message"),
      source: "Free Quote Widget",
    };

    try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("Quote request submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <motion.div
      initial={false}
      animate={{ x: isOpen ? 0 : 300 }}
      transition={{ type: "spring", damping: 30, stiffness: 220 }}
      className="fixed right-0 top-1/2 z-[100] -translate-y-1/2 flex items-stretch pointer-events-none select-none"
    >
      {/* Interactive Trigger Button Tab (Always visible, aligned with the form edge) */}
      <div className="flex items-center pointer-events-auto">
        <button
          onClick={() => {
            setIsOpen(!isOpen);
            if (status !== "submitting") setStatus("idle");
          }}
          className="flex items-center justify-center bg-gradient-to-br from-[#D8B061] via-[#B88C4A] to-[#906925] text-ink hover:scale-105 rounded-l-2xl shadow-xl transition-all duration-300 border border-cream/20 border-r-0 h-32 w-10 focus:outline-none"
          aria-label="Toggle quote form"
        >
          <span
            className="text-[10px] font-bold tracking-[0.25em] uppercase text-ink select-none font-sans"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Free&nbsp;Quote
          </span>
        </button>
      </div>

      {/* Sliding Form Drawer Panel (Always mounted, slides with parent container) */}
      <div
        className="w-[300px] bg-ink-light/95 backdrop-blur-md border border-cream/15 rounded-l-none shadow-2xl flex flex-col overflow-hidden pointer-events-auto border-r-0"
      >
        {/* Drawer Header */}
        <div className="bg-gradient-to-r from-ink-light to-ink px-5 py-4 border-b border-cream/10 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-cream font-display font-semibold text-lg leading-tight">
              Get a Free Quote
            </h3>
            <p className="text-stone text-[11px] mt-1">
              We call back in under 30 minutes
            </p>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-stone hover:text-rose transition-colors mt-0.5"
            aria-label="Close quote drawer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 p-5 overflow-y-auto max-h-[70vh]">
          {status === "success" ? (
            <div className="space-y-4 py-8 text-center animate-fade-in">
              <p className="font-display text-xl text-cream">
                Thank You!
              </p>
              <p className="text-stone text-xs leading-relaxed">
                We have received your request and will call you back within 30 minutes.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setIsOpen(false);
                }}
                className="bg-gradient-to-br from-[#D8B061] via-[#B88C4A] to-[#906925] text-ink px-6 py-2.5 text-[10px] tracking-widest2 uppercase font-semibold hover:scale-[1.02] transition-transform duration-300"
              >
                Close
              </button>
            </div>
          ) : status === "error" ? (
            <div className="space-y-4 py-6 text-center animate-fade-in">
              <p className="font-display text-lg text-rose">
                Submission Failed
              </p>
              <p className="text-stone text-xs leading-relaxed">
                Something went wrong. Please call us directly or click retry below.
              </p>
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => setStatus("idle")}
                  className="bg-rose text-ink px-6 py-2 text-[10px] tracking-widest2 uppercase font-semibold hover:bg-cream transition-colors"
                >
                  Try Again
                </button>
                <a
                  href="tel:+919573824261"
                  className="text-cream text-xs font-semibold hover:text-rose transition-colors mt-2"
                >
                  Call: +91 95738 24261
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Name field */}
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase text-stone/80 mb-1.5">
                  Your Name <span className="text-rose">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full bg-ink/50 border border-cream/15 rounded-md px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-[#D8B061] placeholder-stone/40"
                />
              </div>

              {/* Phone field */}
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase text-stone/80 mb-1.5">
                  Phone Number <span className="text-rose">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  className="w-full bg-ink/50 border border-cream/15 rounded-md px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-[#D8B061] placeholder-stone/40"
                />
              </div>

              {/* Email field */}
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase text-stone/80 mb-1.5">
                  Email <span className="text-rose">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full bg-ink/50 border border-cream/15 rounded-md px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-[#D8B061] placeholder-stone/40"
                />
              </div>

              {/* Event Type Select */}
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase text-stone/80 mb-1.5">
                  Event Type <span className="text-stone/40 font-sans lowercase">(optional)</span>
                </label>
                <select
                  name="eventType"
                  className="w-full bg-ink/50 border border-cream/15 rounded-md px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-[#D8B061] appearance-none"
                >
                  <option value="" className="bg-ink">Select Event Type</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type} className="bg-ink">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message field */}
              <div className="flex flex-col">
                <label className="text-[10px] tracking-widest uppercase text-stone/80 mb-1.5">
                  Event Description <span className="text-stone/40 font-sans lowercase">(optional)</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Briefly describe your event details..."
                  rows={3}
                  className="w-full bg-ink/50 border border-cream/15 rounded-md px-3.5 py-2.5 text-xs text-cream focus:outline-none focus:border-[#D8B061] resize-none placeholder-stone/40"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-gradient-to-br from-[#D8B061] via-[#B88C4A] to-[#906925] text-ink font-semibold py-3 rounded-md text-xs tracking-widest uppercase hover:scale-[1.02] transition-transform duration-300 flex items-center justify-center gap-1.5 shadow-[0_4px_15px_rgba(184,140,74,0.2)] disabled:opacity-60"
              >
                {status === "submitting" ? "Submitting..." : "Get Free Quote"}
                <ChevronRight size={14} />
              </button>

              <p className="text-center text-[10px] text-stone/50 mt-1">
                Or call us:{" "}
                <a
                  href="tel:+919573824261"
                  className="text-[#D8B061] font-semibold hover:underline"
                >
                  +91 95738 24261
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </motion.div>
  );
}
