import React from "react";

// Services aligned to the screenshot in the changes doc:
// Heading: "Retail Analytics Solutions That Drive Growth"
// Cards visible: Price Optimisation, Promotion Optimisation, Demand Forecasting
// Plus the additional retail-domain services from the existing baseline.
const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L4 6M4 6L8 10M4 6L0 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" transform="translate(2 0)" />
        <rect x="8" y="14" width="3" height="8" rx="1" fill="currentColor" opacity="0.5" />
        <rect x="13" y="9" width="3" height="13" rx="1" fill="currentColor" opacity="0.7" />
        <rect x="18" y="4" width="3" height="18" rx="1" fill="currentColor" />
        <text x="22" y="11" fontSize="6" fontWeight="bold" fill="currentColor">£</text>
      </svg>
    ),
    title: "Price Optimisation",
    description:
      "AI-driven pricing engines that balance margin, volume, and competitive positioning — from everyday pricing to promotional depth and markdown cadences.",
    tags: ["Dynamic Pricing", "Markdown", "Elasticity"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 14L14 18L20 10L24 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="20" cy="10" r="2" fill="currentColor" />
        <circle cx="10" cy="14" r="2" fill="currentColor" />
        <rect x="2" y="2" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="2" opacity="0.4" />
      </svg>
    ),
    title: "Promotion Optimisation",
    description:
      "Maximise ROI on trade and consumer promotions through uplift modelling, cannibalisation analysis, and forward-buy detection across your entire portfolio.",
    tags: ["Uplift Modelling", "Trade Promo", "ROI"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M2 22 L8 16 L14 19 L20 10 L26 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 26 L26 26" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
        <circle cx="20" cy="10" r="2.5" fill="currentColor" opacity="0.7" />
      </svg>
    ),
    title: "Demand Forecasting",
    description:
      "Deep-learning demand signals at SKU, store, and cluster level — reducing stockouts and overstock simultaneously, across fresh, ambient, and seasonal categories.",
    tags: ["SKU-Level", "Seasonal", "ML Forecast"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="6" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12H20M8 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="21" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Assortment Analytics",
    description:
      "Range optimisation and shelf productivity science — identifying which SKUs to keep, cut, or expand based on cannibalisation, profitability, and shopper behaviour.",
    tags: ["Range", "Shelf", "SKU Mix"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="18" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M14 10H20M10 18H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2" />
      </svg>
    ),
    title: "Customer Intelligence",
    description:
      "Customer 360, segmentation, churn prediction, and personalisation engines that turn first-party data into measurable lifetime value uplift.",
    tags: ["Customer 360", "Loyalty", "Personalisation"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 8V20L14 26L2 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="14" cy="14" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="14" cy="14" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Retail Analytics Platform",
    description:
      "Cloud-native data platforms purpose-built for retail — from ingestion and harmonisation to self-service insights — designed to scale with your data complexity.",
    tags: ["Cloud", "Data Lakehouse", "Self-Service BI"],
  },
];

const ServicesSection: React.FC = () => (
  <section id="services" className="py-24 lg:py-28 bg-white relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="section-divider-blue" />
          <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.2em] uppercase">
            What We Do
          </span>
        </div>
        <h2 className="font-display text-display-lg text-charcoal mb-5 font-black">
          Retail Analytics Solutions That{" "}
          <span className="text-gradient-blue">Drive Growth</span>
        </h2>
        <p className="font-body text-charcoal-soft text-lg leading-relaxed">
          From pricing science to shopper intelligence — we build the analytical tools and
          platforms that let retailers compete on data.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((svc, i) => (
          <div
            key={i}
            className="service-card bg-white rounded-xl p-8 group cursor-pointer"
          >
            <div className="text-brand-blue mb-5 group-hover:scale-110 group-hover:text-brand-orange transition-all duration-300">
              {svc.icon}
            </div>
            <h3 className="font-display text-xl font-bold text-charcoal mb-3 group-hover:text-brand-blue transition-colors duration-300">
              {svc.title}
            </h3>
            <p className="font-body text-charcoal-soft text-sm leading-relaxed mb-5">
              {svc.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {svc.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs font-body font-medium px-3 py-1 rounded-full bg-brand-cloud text-brand-blue-dark border border-brand-blue/20"
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

export default ServicesSection;
