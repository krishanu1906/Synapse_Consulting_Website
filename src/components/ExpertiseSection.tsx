import React, { useState } from "react";

// Retail-focused industries (existing expertise — kept and refined for retail focus)
const industries = [
  {
    name: "Grocery & Supermarkets",
    icon: "🛒",
    description:
      "Demand forecasting, fresh-food waste reduction, dynamic pricing, and shelf productivity science for high-volume grocery operators.",
    usecases: ["Demand Forecasting", "Fresh Food Waste", "Dynamic Pricing", "Shelf Productivity"],
  },
  {
    name: "Fashion & Apparel",
    icon: "👗",
    description:
      "Size-curve optimisation, allocation analytics, AI-powered clienteling, and personalised recommendations for premium and value fashion retailers.",
    usecases: ["Allocation", "Clienteling", "Personalisation", "Markdown"],
  },
  {
    name: "Luxury Retail",
    icon: "💎",
    description:
      "Customer lifetime value, segmentation, VIP loyalty intelligence, and boutique-level analytics for luxury houses competing on experience.",
    usecases: ["CLV Modelling", "VIP Loyalty", "Segmentation", "Clienteling"],
  },
  {
    name: "Quick Commerce",
    icon: "⚡",
    description:
      "Hyperlocal demand sensing, dark-store assortment, real-time pricing, and rider productivity analytics for sub-30-minute delivery models.",
    usecases: ["Hyperlocal Demand", "Dark Stores", "Real-Time Pricing", "Rider Productivity"],
  },
  {
    name: "Specialty & Home",
    icon: "🛋️",
    description:
      "Category management, regional assortment localisation, attachment-rate analytics, and project-basket modelling for specialty and home formats.",
    usecases: ["Category Mgmt", "Localisation", "Attachment Rate", "Project Baskets"],
  },
  {
    name: "Marketplaces & D2C",
    icon: "💻",
    description:
      "Search relevance, pricing intelligence, marketing-mix modelling, and cohort analytics for marketplace operators and digital-native brands.",
    usecases: ["Search Relevance", "Pricing Intel", "MMM", "Cohorts"],
  },
];

const ExpertiseSection: React.FC = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="expertise" className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="section-divider-blue" />
            <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.2em] uppercase">
              Industry Expertise
            </span>
          </div>
          <h2 className="font-display text-display-lg text-charcoal mb-5 font-black">
            Deep Domain & Analytics Expertise{" "}
            <span className="text-gradient-blue">Across Retail</span>
          </h2>
          <p className="font-body text-charcoal-soft text-lg leading-relaxed">
            Our consultants combine data science excellence with genuine retail domain expertise.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-dramatic border border-border bg-white">
          <div className="lg:col-span-2 border-r border-border">
            {industries.map((ind, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 flex items-center gap-4 border-b border-border last:border-b-0 transition-all duration-250 group ${
                  active === i
                    ? "bg-brand-ink text-white"
                    : "bg-white hover:bg-brand-cloud text-charcoal"
                }`}
              >
                <span className="text-2xl">{ind.icon}</span>
                <span
                  className={`font-display font-semibold text-base ${
                    active === i ? "text-white" : "text-charcoal group-hover:text-brand-blue"
                  } transition-colors`}
                >
                  {ind.name}
                </span>
                {active === i && (
                  <span className="ml-auto">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M3 8H13M9 4L13 8L9 12"
                        stroke="#33CCFF"
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

          <div className="lg:col-span-3 p-10 flex flex-col justify-center bg-gradient-to-br from-white to-brand-cloud">
            <div key={active} className="animate-fade-up">
              <div className="text-5xl mb-4">{industries[active].icon}</div>
              <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                {industries[active].name}
              </h3>
              <p className="font-body text-charcoal-soft text-base leading-relaxed mb-8">
                {industries[active].description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industries[active].usecases.map((uc, j) => (
                  <div
                    key={j}
                    className="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 border border-border"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue flex-shrink-0" />
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

export default ExpertiseSection;
