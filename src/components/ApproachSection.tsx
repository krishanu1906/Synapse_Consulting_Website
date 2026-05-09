import React from "react";

// "Retain the above as it is, just remove the word Retail in Diagnose"
// Original: "deeply understanding your retail business, data landscape..."
// Updated: "deeply understanding your business, data landscape..."
const steps = [
  {
    num: "01",
    title: "Diagnose",
    description:
      "We start by deeply understanding your business, data landscape, and the specific commercial decisions you need to make faster and smarter.",
  },
  {
    num: "02",
    title: "Design",
    description:
      "Together, we architect the right solution — whether that's a pricing engine, a forecasting model, or an end-to-end analytics platform.",
  },
  {
    num: "03",
    title: "Deliver",
    description:
      "Our teams embed with yours to build, test, and deploy solutions in production with a relentless focus on adoption, speed to value, and trust in the outputs.",
  },
  {
    num: "04",
    title: "Scale",
    description:
      "We help you scale impact — expanding successful pilots, upskilling internal teams, and continuously measuring ROI against your business objectives.",
  },
];

const ApproachSection: React.FC = () => (
  <section className="py-24 lg:py-28 bg-gradient-section noise-overlay relative overflow-hidden">
    <div
      className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(circle, #007BFF 0%, transparent 70%)" }}
    />
    <div
      className="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
    />
    <div className="absolute inset-0 synapse-grid opacity-50 pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="section-divider" />
          <span className="text-brand-cyan font-body font-semibold text-sm tracking-[0.2em] uppercase">
            How We Work
          </span>
        </div>
        <h2 className="font-display text-display-lg text-white mb-5 font-black">
          Our Delivery Approach
        </h2>
        <p className="font-body text-white/75 text-lg leading-relaxed">
          A structured, outcome-focused methodology that consistently delivers measurable
          commercial value — not just presentations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div
            key={i}
            className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 hover:border-brand-blue/50 transition-all duration-300 group"
          >
            <div className="font-display text-6xl font-black mb-6 leading-none text-gradient-blue">
              {step.num}
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
              {step.title}
            </h3>
            <p className="font-body text-white/70 text-sm leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
