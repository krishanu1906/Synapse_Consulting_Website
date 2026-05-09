import React, { useState } from "react";

// All case studies are taken VERBATIM from the changes document.
// Five replacements as specified:
// 1. Grocery Retail → 2-3% Revenue Uplift Through AI-Driven Price & Assortment Optimization
// 2. Luxury Fashion Retail → Elevating Customer Loyalty Through AI-Driven Segmentation
// 3. Fashion Retail → Boosting In-Store Conversions with AI-Driven Clienteling
// 4. CPG Food & Beverages → Transforming Go-To-Market Strategy
// 5. CPG Beverages → Improving Salesforce Productivity with AI-Driven Must-Sell SKU Dashboards

interface DeliverableSection {
  heading: string;
  body?: string;
  bullets?: string[];
  trailing?: string;
}

interface ImpactItem {
  emoji: string;
  title: string;
  body?: string;
  bullets?: string[];
}

interface CaseStudy {
  industry: string;
  tab: string;
  tag: string;
  title: string;
  client: string;
  challenge: string;
  challengeBullets?: string[];
  challengeTrailing?: string;
  delivered: DeliverableSection[];
  impact: ImpactItem[];
  metrics: { label: string; value: string }[];
}

const cases: CaseStudy[] = [
  // ───────────────── 1. GROCERY RETAIL ─────────────────
  {
    industry: "Grocery Retail",
    tab: "Grocery Retail",
    tag: "Price & Assortment Optimization",
    title: "2–3% Revenue Uplift Through AI-Driven Price & Assortment Optimization",
    client: "A leading international supermarket chain with 600+ stores across the US.",
    challenge:
      "The retailer faced slowing category growth, inconsistent pricing across regions, and low-productivity SKUs cluttering shelves. Leadership needed a scalable, data-driven way to improve revenue and margins in key FMCG categories.",
    delivered: [
      {
        heading: "AI-Driven Price Optimization",
        bullets: [
          "Built SKU-level elasticity models across 6 store clusters",
          "Identified over-discounted items and margin-accretive price opportunities",
          "Simulated revenue and margin impact under multiple pricing scenarios",
        ],
      },
      {
        heading: "Store-Level Assortment Optimization",
        bullets: [
          "Ranked SKUs using productivity, cannibalization, and local preference signals",
          "Recommended rationalization of low-velocity items",
          "Optimized pack-size mix and shelf allocation for top performers",
        ],
      },
      {
        heading: "Fast Pilot → Scaled Rollout",
        body: "A 12-week pilot across 80 stores validated impact, followed by rollout to all 600+ stores.",
      },
    ],
    impact: [
      {
        emoji: "📈",
        title: "Revenue Uplift: 2.4% Across Target Categories",
        bullets: [
          "+1.6% from optimized pricing",
          "+0.8% from improved assortment and shelf productivity",
        ],
      },
      {
        emoji: "💰",
        title: "Margin Improvement: 0.5%",
        bullets: [
          "Reduced over-discounting",
          "Better pack-price architecture",
          "Higher sell-through on top SKUs",
        ],
      },
      {
        emoji: "🛒",
        title: "Operational Wins",
        bullets: [
          "22% reduction in assortment complexity",
          "14% improvement in shelf productivity",
          "Automated weekly recommendations for category teams",
        ],
      },
    ],
    metrics: [
      { label: "Revenue Uplift", value: "2.4%" },
      { label: "Stores Rolled Out", value: "600+" },
      { label: "Margin Improvement", value: "+0.5pp" },
    ],
  },

  // ───────────────── 2. LUXURY FASHION ─────────────────
  {
    industry: "Luxury Fashion",
    tab: "Luxury Fashion",
    tag: "AI-Driven Segmentation",
    title: "Elevating Customer Loyalty Through AI-Driven Segmentation for a Global Luxury Fashion Retailer",
    client:
      "A leading international luxury fashion house with boutiques across Europe, the Middle East, and Asia, known for high-end apparel, leather goods, and accessories.",
    challenge: "Despite strong brand equity, the retailer faced:",
    challengeBullets: [
      "Fragmented understanding of its global customer base",
      "Declining repeat purchase rates among mid-tier loyalists",
      "Limited personalization across channels",
      "Underutilized loyalty program data",
    ],
    challengeTrailing:
      "The leadership team sought a data-driven loyalty strategy that could deepen customer relationships and increase lifetime value.",
    delivered: [
      {
        heading: "AI-Powered Customer Segmentation",
        body: "Synapse built a unified customer graph combining purchase history, browsing behavior, CRM interactions, boutique visit patterns, and regional preferences. Machine-learning clustering identified six actionable customer segments, including:",
        bullets: [
          "High-value collectors",
          "Occasion-driven shoppers",
          "Emerging luxury buyers",
          "Digital-first explorers",
          "Regional trend adopters",
          "Lapsed loyalists",
        ],
        trailing:
          "Each segment received tailored engagement, product recommendations, and loyalty triggers.",
      },
      {
        heading: "Personalized Loyalty & Retention Engine",
        body: "Synapse deployed an AI-driven loyalty model that:",
        bullets: [
          "Predicted churn risk at customer level",
          "Recommended personalized offers, early access, and curated product capsules",
          "Triggered boutique-level outreach for high-value clients",
          "Optimized communication frequency to reduce fatigue",
        ],
      },
      {
        heading: "Omnichannel Activation",
        body: "Insights were integrated into:",
        bullets: [
          "Email and app personalization",
          "Boutique clienteling tools",
          "VIP event invitations",
          "Product drop notifications",
          "Regional merchandising decisions",
        ],
        trailing:
          "Boutique stylists received AI-generated client profiles with predicted preferences and recommended looks.",
      },
    ],
    impact: [
      {
        emoji: "📈",
        title: "Higher Customer Retention",
        body: "A 7% improvement in retention among mid-tier loyalists within 90 days of rollout.",
      },
      {
        emoji: "👜",
        title: "Larger Basket Size",
        body: "A 4–6% increase in average basket size among high-value and emerging luxury segments, driven by curated recommendations and capsule-based merchandising.",
      },
      {
        emoji: "💎",
        title: "Stronger Loyalty Engagement",
        bullets: [
          "18% uplift in loyalty program participation",
          "22% increase in repeat purchases from reactivated lapsed customers",
          "Higher conversion from personalized product drops",
        ],
      },
      {
        emoji: "🛍️",
        title: "Boutique Productivity Gains",
        body: "Clienteling teams reported more targeted outreach and higher appointment conversion rates.",
      },
    ],
    metrics: [
      { label: "Retention Lift", value: "+7%" },
      { label: "Basket Size", value: "+4–6%" },
      { label: "Loyalty Participation", value: "+18%" },
    ],
  },

  // ───────────────── 3. FASHION RETAIL ─────────────────
  {
    industry: "Fashion Retail",
    tab: "Fashion Retail",
    tag: "AI-Driven Clienteling",
    title: "Boosting In-Store Conversions with AI-Driven Clienteling for a Global Fashion Retailer",
    client:
      "A global fashion retailer with 300+ boutiques across Europe, Asia, and North America, offering contemporary apparel, footwear, and accessories.",
    challenge: "Although stores saw strong footfall, sales associates lacked:",
    challengeBullets: [
      "A unified view of customer preferences",
      "Real-time product recommendations",
      "Insight into past purchases and style affinities",
      "Tools to personalize conversations at scale",
    ],
    challengeTrailing:
      "This led to inconsistent clienteling quality and missed conversion opportunities, especially with high-intent shoppers.",
    delivered: [
      {
        heading: "AI-Enhanced Client Profiles",
        body: "Synapse built a 360° customer profile by integrating POS data, browsing behavior, loyalty interactions, and boutique visit history. Each profile included:",
        bullets: [
          "Style preferences",
          "Size and fit history",
          "Purchase patterns",
          "Predicted next-best products",
          "Likelihood to convert during visit",
        ],
        trailing:
          "Sales associates accessed these insights through a lightweight mobile interface.",
      },
      {
        heading: "Real-Time Product Recommendations",
        body: "A machine-learning engine generated:",
        bullets: [
          "Personalized outfit suggestions",
          "Complementary product recommendations",
          "Occasion-based styling ideas",
          "Inventory-aware alternatives when items were unavailable",
        ],
        trailing: "This enabled associates to guide customers with confidence and relevance.",
      },
      {
        heading: "Clienteling Playbooks for Associates",
        body: "Synapse created AI-driven playbooks that helped associates:",
        bullets: [
          "Identify high-intent customers entering the store",
          "Tailor conversations based on predicted preferences",
          "Trigger follow-ups for recent browsers and near-purchasers",
          "Offer curated looks aligned with local trends",
        ],
      },
    ],
    impact: [
      {
        emoji: "📈",
        title: "Higher In-Store Conversions",
        body: "A 9–12% improvement in conversion rates among customers engaged through AI-powered clienteling.",
      },
      {
        emoji: "👜",
        title: "Larger Transaction Value",
        body: "A 5% increase in average basket size, driven by better cross-sell and styling recommendations.",
      },
      {
        emoji: "🤝",
        title: "Stronger Associate Productivity",
        bullets: [
          "Associates spent less time searching for products",
          "More consistent clienteling across stores",
          "Higher confidence in styling and recommendation quality",
        ],
      },
      {
        emoji: "💬",
        title: "Better Customer Experience",
      },
    ],
    metrics: [
      { label: "Conversion Lift", value: "9–12%" },
      { label: "Basket Size", value: "+5%" },
      { label: "Boutiques Activated", value: "300+" },
    ],
  },

  // ───────────────── 4. CPG FOOD & BEVERAGES ─────────────────
  {
    industry: "CPG Food & Beverages",
    tab: "CPG Food & Beverages",
    tag: "Go-To-Market Transformation",
    title: "Transforming Go-To-Market Strategy for a Leading CPG Food & Beverages Brand",
    client:
      "A top-five national Food & Beverages company with a portfolio spanning snacks, beverages, and ready-to-eat products, distributed across modern trade, general trade, and e-commerce.",
    challenge:
      "Despite strong brand equity, the client's GTM execution lagged behind market shifts:",
    challengeBullets: [
      "Uneven distribution coverage across high-growth micro-markets",
      "Limited visibility into outlet-level performance",
      "Inefficient route planning and salesforce deployment",
      "One-size-fits-all trade promotions",
      "Slow response to regional consumption trends",
    ],
    challengeTrailing:
      "The leadership team needed a data-driven GTM model to improve distribution quality, drive incremental sales, and strengthen retailer relationships.",
    delivered: [
      {
        heading: "AI-Driven Market & Outlet Segmentation",
        body: "Synapse built a granular segmentation model using:",
        bullets: [
          "Outlet sales velocity",
          "Category affinity",
          "Demographics & catchment characteristics",
          "Competitive presence",
          "Price sensitivity",
        ],
        trailing:
          "This created six actionable outlet segments, enabling differentiated assortment, pricing, and activation strategies.",
      },
      {
        heading: "Optimized Distribution & Route Planning",
        body: "Using machine-learning and geospatial analytics, Synapse:",
        bullets: [
          'Identified high-potential "whitespace" outlets',
          "Redesigned sales routes to maximize productive calls",
          "Prioritized outlets with highest incremental revenue potential",
        ],
        trailing: "This improved both coverage and call productivity.",
      },
      {
        heading: "Assortment & Activation Playbooks",
        body: "For each outlet segment, Synapse recommended:",
        bullets: [
          "Ideal SKU mix",
          "Pack-size strategy",
          "Regional flavor prioritization",
          "Tailored trade promotions",
        ],
        trailing: "These playbooks were deployed across general trade and modern trade formats.",
      },
      {
        heading: "Performance Tracking & GTM Control Tower",
        body: "Synapse implemented a lightweight GTM control tower that provided:",
        bullets: [
          "Weekly distribution KPIs",
          "Outlet-level opportunity flags",
          "Salesforce productivity insights",
          "Promotion performance tracking",
        ],
        trailing: "This enabled faster decision-making and more agile execution.",
      },
    ],
    impact: [
      {
        emoji: "📈",
        title: "Revenue Growth in Priority Markets",
        body: "A 2–3% uplift in revenue across high-potential micro-markets targeted through the new GTM model.",
      },
      {
        emoji: "🛒",
        title: "Improved Distribution Quality",
        bullets: [
          "12% increase in numeric distribution",
          "18% increase in weighted distribution for focus SKUs",
          "Better availability in top-velocity outlets",
        ],
      },
      {
        emoji: "🚚",
        title: "Higher Salesforce Productivity",
        bullets: [
          "15% improvement in productive calls",
          "More balanced territories and reduced route duplication",
        ],
      },
      {
        emoji: "🎯",
        title: "Stronger Retailer Engagement",
        body: "Segment-specific activation and tailored promotions improved retailer satisfaction and repeat orders.",
      },
    ],
    metrics: [
      { label: "Revenue Uplift", value: "2–3%" },
      { label: "Numeric Distribution", value: "+12%" },
      { label: "Productive Calls", value: "+15%" },
    ],
  },

  // ───────────────── 5. CPG BEVERAGES ─────────────────
  {
    industry: "CPG Beverages",
    tab: "CPG Beverages",
    tag: "Salesforce Productivity",
    title: "Improving Salesforce Productivity with AI-Driven Must-Sell SKU Dashboards",
    client:
      "A leading national beverages company with a portfolio spanning carbonated drinks, juices, energy beverages, and bottled water, distributed across 1M+ retail outlets through a large field salesforce.",
    challenge: "Despite strong brand presence, the client struggled with:",
    challengeBullets: [
      "Inconsistent execution of must-sell SKUs across regions",
      "Low visibility into outlet-level gaps and missed opportunities",
      "Sales reps spending too much time on manual reporting",
      "Limited ability to prioritize high-potential outlets during daily routes",
      "Fragmented data across SFA, distributor systems, and trade promotions",
    ],
    challengeTrailing:
      "The leadership team needed a real-time, AI-enabled salesforce automation layer to improve execution discipline and drive incremental sales.",
    delivered: [
      {
        heading: "AI-Powered Must-Sell SKU Engine",
        body: "Synapse built a machine-learning model that identified:",
        bullets: [
          "Outlet-specific must-sell SKUs based on velocity, seasonality, and local preferences",
          "Cross-sell and upsell opportunities for each outlet",
          "SKU gaps vs. ideal assortment",
          "Probability of conversion for each recommended SKU",
        ],
        trailing:
          "These insights were refreshed daily and integrated directly into the SFA app.",
      },
      {
        heading: "Salesforce Productivity Dashboards",
        body: "Synapse designed intuitive dashboards for sales reps, supervisors, and regional managers:",
        bullets: [
          "Daily outlet-level must-sell SKU list",
          "Gap-to-target and opportunity value",
          "Route-wise execution scorecards",
          "Real-time visibility into order capture and SKU penetration",
          "Leaderboards to drive healthy competition",
        ],
        trailing: "The dashboards were optimized for mobile use during store visits.",
      },
    ],
    impact: [
      {
        emoji: "📈",
        title: "Higher SKU Penetration",
        body: "A 6–8% increase in must-sell SKU penetration across priority outlets within 8 weeks.",
      },
      {
        emoji: "🚀",
        title: "Improved Salesforce Productivity",
        bullets: [
          "15% improvement in productive calls",
          "20% reduction in time spent on manual reporting",
          "More consistent execution across territories",
        ],
      },
      {
        emoji: "🛒",
        title: "Incremental Sales Growth",
        body: "A 2–3% uplift in sales for focus SKUs driven by better outlet-level targeting and execution.",
      },
      {
        emoji: "📊",
        title: "Stronger Managerial Control",
        body: "Supervisors gained real-time visibility into:",
        bullets: ["Route compliance", "Outlet coverage", "Execution gaps", "Rep-wise performance"],
      },
    ],
    metrics: [
      { label: "SKU Penetration", value: "+6–8%" },
      { label: "Sales Uplift", value: "+2–3%" },
      { label: "Reporting Time", value: "−20%" },
    ],
  },
];

const CaseStudiesSection: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const c = cases[activeIdx];

  return (
    <section id="cases" className="py-24 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="section-divider" />
              <span className="text-brand-orange font-body font-semibold text-sm tracking-[0.2em] uppercase">
                Client Impact
              </span>
            </div>
            <h2 className="font-display text-display-lg text-charcoal font-black">
              Real Results.{" "}
              <span className="text-gradient-blue">Measurable Impact.</span>
            </h2>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10">
          {cases.map((cs, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className={`px-5 py-2.5 rounded-full font-body font-medium text-sm border transition-all duration-250 ${
                activeIdx === i
                  ? "bg-brand-blue text-white border-brand-blue shadow-blue"
                  : "bg-white text-charcoal-soft border-border hover:border-brand-blue hover:text-brand-blue"
              }`}
            >
              {cs.tab}
            </button>
          ))}
        </div>

        {/* Case detail */}
        <div key={activeIdx} className="animate-fade-up">
          <div className="grid lg:grid-cols-5 gap-0 rounded-2xl overflow-hidden shadow-dramatic border border-border">
            {/* Left: narrative */}
            <div className="lg:col-span-3 p-8 lg:p-10 bg-white">
              <div className="flex items-center gap-3 mb-6 flex-wrap">
                <span className="text-xs font-body font-semibold px-3 py-1.5 rounded-full bg-brand-orange text-white">
                  {c.tag}
                </span>
                <span className="text-xs font-body text-charcoal-soft uppercase tracking-wider">
                  {c.industry}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-[1.75rem] font-bold text-charcoal mb-6 leading-tight">
                {c.title}
              </h3>

              <SubBlock label="Client">
                <p className="font-body text-charcoal-soft text-base leading-relaxed">{c.client}</p>
              </SubBlock>

              <SubBlock label="Challenge">
                <p className="font-body text-charcoal-soft text-base leading-relaxed mb-3">
                  {c.challenge}
                </p>
                {c.challengeBullets && (
                  <ul className="space-y-2 mb-3">
                    {c.challengeBullets.map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-charcoal-soft text-base leading-relaxed">
                        <span className="text-brand-orange mt-2 flex-shrink-0 w-1 h-1 rounded-full bg-brand-orange" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {c.challengeTrailing && (
                  <p className="font-body text-charcoal-soft text-base leading-relaxed italic">
                    {c.challengeTrailing}
                  </p>
                )}
              </SubBlock>

              <SubBlock label="What Synapse Delivered">
                <div className="space-y-6 mt-2">
                  {c.delivered.map((d, i) => (
                    <div key={i}>
                      <h5 className="font-display font-bold text-brand-blue text-base mb-2">
                        {d.heading}
                      </h5>
                      {d.body && (
                        <p className="font-body text-charcoal-soft text-sm leading-relaxed mb-2">
                          {d.body}
                        </p>
                      )}
                      {d.bullets && (
                        <ul className="space-y-1.5 mb-2">
                          {d.bullets.map((b, j) => (
                            <li
                              key={j}
                              className="flex gap-2.5 text-charcoal-soft text-sm leading-relaxed"
                            >
                              <span className="text-brand-blue mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-brand-blue" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {d.trailing && (
                        <p className="font-body text-charcoal-soft text-sm leading-relaxed">
                          {d.trailing}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </SubBlock>

              <SubBlock label="Impact" last>
                <div className="space-y-5 mt-2">
                  {c.impact.map((im, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-4 bg-brand-cloud rounded-lg border-l-4 border-brand-orange"
                    >
                      <span className="text-2xl flex-shrink-0" aria-hidden>
                        {im.emoji}
                      </span>
                      <div>
                        <p className="font-display font-bold text-charcoal text-base mb-1.5">
                          {im.title}
                        </p>
                        {im.body && (
                          <p className="font-body text-charcoal-soft text-sm leading-relaxed mb-1.5">
                            {im.body}
                          </p>
                        )}
                        {im.bullets && (
                          <ul className="space-y-1">
                            {im.bullets.map((b, j) => (
                              <li
                                key={j}
                                className="flex gap-2 text-charcoal-soft text-sm leading-relaxed"
                              >
                                <span className="text-brand-orange flex-shrink-0">›</span>
                                <span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </SubBlock>
            </div>

            {/* Right: metric panel */}
            <div className="lg:col-span-2 bg-gradient-section p-10 flex flex-col justify-center gap-8">
              <p className="font-body text-white/60 text-xs uppercase tracking-[0.25em] font-semibold">
                Key Results
              </p>
              {c.metrics.map((m, j) => (
                <div key={j}>
                  <div className="font-display text-5xl font-black mb-1 text-gradient-mix">
                    {m.value}
                  </div>
                  <div className="font-body text-white/75 text-sm tracking-wide">{m.label}</div>
                  {j < c.metrics.length - 1 && <div className="w-10 h-px bg-white/15 mt-5" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SubBlock: React.FC<{ label: string; children: React.ReactNode; last?: boolean }> = ({
  label,
  children,
  last,
}) => (
  <div className={last ? "mt-7" : "mt-7 pb-1"}>
    <p className="font-body text-brand-blue text-xs uppercase tracking-[0.2em] font-bold mb-3">
      {label}
    </p>
    {children}
  </div>
);

export default CaseStudiesSection;
