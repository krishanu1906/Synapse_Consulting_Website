import React, { useState } from "react";

// All copy taken VERBATIM from the changes document table under
// "Deep domain and analytics expertise Across Consumer products (CPG) Domain"
const cpgIndustries = [
  {
    name: "Food & Beverages",
    icon: "🍿🥤",
    promise:
      "Category and SKU level analytics to optimize inventory and drive revenue growth",
    usecases: [
      "Demand forecasting",
      "Price & Promo optimization",
      "Distributor stock planning",
      "Outlet level assortment optimization",
      "Must-sell SKUs and sales order optimization",
    ],
  },
  {
    name: "Beauty & Personal Care",
    icon: "💄",
    promise:
      "Customer sentiment analytics that help identify product opportunities and right-fit channel",
    usecases: [
      "Price elasticity",
      "Promotion incrementality",
      "Digital shelf analytics",
      "Customer segmentation and loyalty analytics",
    ],
  },
  {
    name: "Home Care",
    icon: "🧴",
    promise:
      "Stay competitive with analytics that drive optimal product price mix and Go-To-Market strategy",
    usecases: [
      "Pack-price architecture",
      "Trade promotion ROI",
      "Route-to-market optimization",
      "Retail execution analytics (availability, visibility, share of shelf)",
    ],
  },
  {
    name: "Packaged Dairy & Fresh Foods",
    icon: "🥛",
    promise:
      "Reduce waste through analytics that drive improved forecasts and optimization of supply chain",
    usecases: [
      "Short-term demand sensing",
      "Waste reduction modelling",
      "Dynamic replenishment",
      "Cold-chain optimization",
    ],
  },
  {
    name: "Beverages (Alcoholic & Non-Alcoholic)",
    icon: "🥤",
    promise:
      "Optimize distribution strategy using analytics to gain market share",
    usecases: [
      "Outlet segmentation",
      "Promo ROI",
      "Distributor performance analytics",
      "Market mix modelling",
    ],
  },
];

const CPGExpertiseSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="cpg-expertise" className="py-24 lg:py-28 bg-brand-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="section-divider" />
            <span className="text-brand-orange font-body font-semibold text-sm tracking-[0.2em] uppercase">
              CPG Expertise
            </span>
          </div>
          <h2 className="font-display text-display-lg text-charcoal mb-5 font-black">
            Deep Domain & Analytics Expertise{" "}
            <span className="text-gradient-orange">Across Consumer Products</span>
          </h2>
          <p className="font-body text-charcoal-soft text-lg leading-relaxed">
            Specialist analytics frameworks tuned to each CPG sub-category — from pack-price
            architecture to cold-chain optimisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-dramatic border border-border bg-white">
          <div className="lg:col-span-2 border-r border-border">
            {cpgIndustries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center gap-4 border-b border-border last:border-b-0 transition-all duration-250 group ${
                  active === i
                    ? "bg-brand-orange text-white"
                    : "bg-white hover:bg-brand-cloud text-charcoal"
                }`}
              >
                <span
                  className={`font-display font-semibold text-base ${
                    active === i ? "text-white" : "text-charcoal group-hover:text-brand-orange"
                  } transition-colors`}
                >
                  {ind.name}
                </span>
                {active === i && (
                  <span className="ml-auto">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-3 p-10 flex flex-col justify-center bg-gradient-to-br from-white to-brand-mist">
            <div key={active} className="animate-fade-up">
              <h3 className="font-display text-2xl font-bold text-charcoal mb-3">
                {cpgIndustries[active].name}
              </h3>
              <p className="font-body text-brand-orange-dark font-medium text-base leading-relaxed mb-7" style={{ color: "#CC5500" }}>
                {cpgIndustries[active].promise}
              </p>
              <p className="font-body text-charcoal-soft text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                Key Use Cases
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {cpgIndustries[active].usecases.map((uc, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-border"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange flex-shrink-0" />
                    <span className="font-body text-sm font-medium text-charcoal">{uc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CPGExpertiseSection;
