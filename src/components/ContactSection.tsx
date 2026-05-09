import React, { useState } from "react";

type FormState = {
  name: string;
  company: string;
  email: string;
  challenge: string;
  industryType: string;
};

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    company: "",
    email: "",
    challenge: "",
    industryType: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async () => {
    // Client-side validation
    if (!form.name.trim() || !form.company.trim() || !form.email.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    if (!isValidEmail(form.email)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || `Request failed (${response.status})`);
      }

      setStatus("success");
    } catch (err: any) {
      setErrorMsg(
        err?.message ||
          "Something went wrong sending your message. Please email us directly at contact@synapseconsulting.in"
      );
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-28 bg-brand-ink relative overflow-hidden noise-overlay"
    >
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 100%, #007BFF 0%, transparent 55%)" }}
      />
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 0%, #FF6B00 0%, transparent 55%)" }}
      />
      <div className="absolute inset-0 synapse-grid opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="section-divider" />
              <span className="text-brand-cyan font-body font-semibold text-sm tracking-[0.2em] uppercase">
                Get in Touch
              </span>
            </div>
            <h2 className="font-display text-display-lg text-white mb-6 font-black">
              Let's Talk About Your{" "}
              <span className="text-gradient-mix">Data Challenge</span>
            </h2>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-10">
              Whether you're exploring a new analytics initiative or looking to deploy AI in
              production — we'd love to hear from you.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path
                        d="M9 1C5.13 1 2 4.13 2 8C2 13.25 9 17 9 17C9 17 16 13.25 16 8C16 4.13 12.87 1 9 1Z"
                        stroke="#33CCFF"
                        strokeWidth="1.5"
                      />
                      <circle cx="9" cy="8" r="2.5" stroke="#33CCFF" strokeWidth="1.5" />
                    </svg>
                  ),
                  label: "Headquarters",
                  value: "Bangalore, Karnataka, India",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="#33CCFF" strokeWidth="1.5" />
                      <path d="M2 5L9 10L16 5" stroke="#33CCFF" strokeWidth="1.5" />
                    </svg>
                  ),
                  label: "Email",
                  value: "contact@synapseconsulting.in",
                },
                {
                  icon: (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="9" r="7" stroke="#33CCFF" strokeWidth="1.5" />
                      <path d="M9 5V9L11.5 11" stroke="#33CCFF" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                  ),
                  label: "Response time",
                  value: "Within one business day",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-body text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gradient-blue mx-auto mb-6 flex items-center justify-center animate-pulse-blue">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M5 14L11 20L23 8"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-3">Thank you!</h3>
                <p className="font-body text-white/70 mb-2">
                  We've received your details and a confirmation email is on its way to{" "}
                  <span className="text-brand-cyan">{form.email}</span>.
                </p>
                <p className="font-body text-white/60 text-sm">
                  One of our partners will be in touch within one business day.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Full Name *"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(v) => setForm({ ...form, name: v })}
                    disabled={status === "submitting"}
                  />
                  <Field
                    label="Company *"
                    placeholder="Your company"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                    disabled={status === "submitting"}
                  />
                </div>
                <Field
                  label="Work Email *"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  disabled={status === "submitting"}
                />

                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">
                    Industry Type
                  </label>
                  <select
                    value={form.industryType}
                    onChange={(e) => setForm({ ...form, industryType: e.target.value })}
                    disabled={status === "submitting"}
                    className="w-full border border-white/15 rounded-lg px-4 py-3 font-body text-white/85 text-sm focus:outline-none focus:border-brand-cyan transition-colors disabled:opacity-50"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <option value="" style={{ color: "#0A1628" }}>Select your industry...</option>
                    <option value="Retail" style={{ color: "#0A1628" }}>Retail</option>
                    <option value="CPG" style={{ color: "#0A1628" }}>CPG</option>
                    <option value="Others" style={{ color: "#0A1628" }}>Others</option>
                  </select>
                </div>

                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">
                    Describe Your Challenge
                  </label>
                  <textarea
                    rows={4}
                    value={form.challenge}
                    onChange={(e) => setForm({ ...form, challenge: e.target.value })}
                    disabled={status === "submitting"}
                    className="w-full bg-white/8 border border-white/15 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-cyan transition-colors resize-none disabled:opacity-50"
                    placeholder="Tell us about your data challenge..."
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  />
                </div>

                {status === "error" && errorMsg && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm font-body text-red-200"
                  >
                    {errorMsg}
                  </div>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === "submitting"}
                  className="btn-primary w-full text-center text-sm font-semibold py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message →"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Field: React.FC<{
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  disabled?: boolean;
}> = ({ label, placeholder, value, onChange, type = "text", disabled = false }) => (
  <div>
    <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">
      {label}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="w-full border border-white/15 rounded-lg px-4 py-3 font-body text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-cyan transition-colors disabled:opacity-50"
      placeholder={placeholder}
      style={{ background: "rgba(255,255,255,0.06)" }}
    />
  </div>
);

export default ContactSection;
