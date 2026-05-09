import React from "react";

// All copy taken VERBATIM from the changes document under
// "CPG Analytics Solutions That Accelerate Brand Growth"
const cpgServices = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="10" r="2" fill="currentColor" />
        <rect x="2" y="2" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
    title: "Trade Promotion Optimisation",
    description:
      "End-to-end TPO that models uplift, cannibalisation, and retailer pass-through — enabling smarter investment decisions and improved net revenue realisation.",
    tags: ["Uplift Modelling", "Cannibalisation", "Pass-Through", "ROI"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 22 L8 16 L14 19 L20 10 L26 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="10" r="2.5" fill="currentColor" opacity="0.7" />
        <path d="M2 26 L26 26" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
    title: "Demand Forecasting",
    description:
      "Deep-learning forecasts at SKU, channel, and customer level — improving service levels, reducing write-offs, and stabilising supply chains across modern and general trade.",
    tags: ["SKU-Level", "Channel ML", "Forecast S&OP"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="4" width="22" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 10H25" stroke="currentColor" strokeWidth="2" />
        <rect x="6" y="13" width="4" height="8" fill="currentColor" opacity="0.6" />
        <rect x="12" y="13" width="4" height="8" fill="currentColor" opacity="0.85" />
        <rect x="18" y="13" width="4" height="8" fill="currentColor" opacity="0.4" />
      </svg>
    ),
    title: "Assortment & Category Analytics",
    description:
      "Data-driven assortment, pack architecture, and shelf strategy that maximise category growth, improve retailer collaboration, and strengthen brand presence.",
    tags: ["Assortment", "Pack Mix", "Planogram", "Category Growth"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="22" cy="6" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    title: "Consumer & Shopper Intelligence",
    description:
      "Unified consumer understanding through segmentation, loyalty analytics, media attribution, and next-best-action models that power precision marketing.",
    tags: ["Segmentation", "Attribution", "Churn", "Personalisation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 18L8 18L8 12L14 12L14 8L20 8L20 18L26 18L26 22L2 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="6" cy="22" r="2" fill="currentColor" />
        <circle cx="22" cy="22" r="2" fill="currentColor" />
        <path d="M14 4L18 4M16 2L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Supply Chain & Inventory Analytics",
    description:
      "Predictive analytics for production planning, safety stock, and distribution — reducing out-of-stocks, optimising logistics, and improving working capital.",
    tags: ["Safety Stock", "Fill Rate", "Logistics", "Inventory Health"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <ellipse cx="14" cy="6" rx="10" ry="3" stroke="currentColor" strokeWidth="2" />
        <path d="M4 6V14C4 15.6 8.5 17 14 17C19.5 17 24 15.6 24 14V6" stroke="currentColor" strokeWidth="2" />
        <path d="M4 14V22C4 23.6 8.5 25 14 25C19.5 25 24 23.6 24 22V14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "CPG Data & Analytics Platform",
    description:
      "Enterprise-grade data platforms for CPG — from ingestion and harmonisation to self-service insights — built to integrate retailer data, syndicated data, and internal systems.",
    tags: ["Cloud", "Dashboards", "Data Lakehouse", "Self-Service BI"],
  },
];

const CPGServicesSection: React.FC = () => (
  <section id="cpg-services" className="py-24 lg:py-28 bg-brand-cloud relative overflow-hidden">
    {/* Soft brand-mix backdrop */}
    <div
      className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(circle, #FF6B00 0%, transparent 70%)" }}
    />
    <div
      className="absolute -bottom-32 -right-32 w-[500px] h-[500px] opacity-10 pointer-events-none"
      style={{ background: "radial-gradient(circle, #007BFF 0%, transparent 70%)" }}
    />

    <div className="relative z-10 max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="section-divider" />
          <span className="text-brand-orange font-body font-semibold text-sm tracking-[0.2em] uppercase">
            For CPG Brands
          </span>
        </div>
        <h2 className="font-display text-display-lg text-charcoal mb-5 font-black">
          CPG Analytics Solutions That{" "}
          <span className="text-gradient-orange">Accelerate Brand Growth</span>
        </h2>
        <p className="font-body text-charcoal-soft text-lg leading-relaxed">
          From trade promotion to shopper intelligence — we help CPG leaders win across modern
          trade, general trade, and direct-to-consumer channels.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cpgServices.map((svc, i) => (
          <div key={i} className="service-card bg-white rounded-xl p-8 group cursor-pointer">
            <div className="text-brand-orange mb-5 group-hover:scale-110 group-hover:text-brand-blue transition-all duration-300">
              {svc.icon}
            </div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-brand-orange transition-colors duration-300">
              {svc.title}
            </h3>
            <p className="font-body text-charcoal-soft text-sm leading-relaxed mb-5">
              {svc.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs font-body font-medium px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange-dark border border-brand-orange/30"
                  style={{ color: "#CC5500" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CPGServicesSection;
