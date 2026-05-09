import React, { useEffect, useState } from "react";

// "Retain this section as it is.. I'll give you some articles that can be published.
//  The articles are not opening up on clicking. This has to be addressed. Some issue"
//
// Fix: clicking an article card now opens a full-screen reader modal with placeholder copy.
// When real articles are supplied later, just drop the long-form HTML into the `body` field.

interface Insight {
  category: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  body: string; // full article body — placeholder until real content is supplied
  gradient: string;
}

const insights: Insight[] = [
  {
    category: "Point of View",
    date: "November 2026",
    title: "The Data Mesh Paradox: Why Distributed Ownership Demands Centralised Governance",
    excerpt:
      "As organisations embrace data mesh architectures, many discover a counterintuitive truth: decentralisation at the data layer requires stronger central coordination.",
    readTime: "8 min read",
    gradient: "linear-gradient(135deg, #007BFF, #33CCFF)",
    body: `<p>Over the last three years, "data mesh" has gone from a thought-leadership talking point to an architectural commitment that boards now ask about by name. Domain ownership of data products, federated governance, and treating data as a product all sound intuitively right — and in many enterprises they are. But the rollouts that succeed at scale share a counterintuitive trait: they are paired with <strong>stronger</strong> central governance, not weaker.</p>
<p>The paradox shows up most clearly in three places — discovery, semantics, and lifecycle. When every domain ships its own data products on its own cadence, the central catalog, the central business glossary, and the central change-management process become the connective tissue without which the mesh quickly devolves into a swamp of siloed datasets.</p>
<p>This article unpacks the operating-model patterns we have seen work — and the ones that look great on a slide but break under load.</p>
<p><em>(Full article content will be populated here once the editorial draft is finalised.)</em></p>`,
  },
  {
    category: "Research",
    date: "October 2026",
    title: "Generative AI in the Enterprise: Moving from Pilot to Production",
    excerpt:
      "After 18 months of working alongside enterprise GenAI programmes, we identify the five critical factors that separate successful productionisation from perpetual proof-of-concept.",
    readTime: "12 min read",
    gradient: "linear-gradient(135deg, #FF6B00, #FFD43B)",
    body: `<p>Most enterprise GenAI programmes do not fail at the modelling step. They fail at the productionisation step — where pilots stall against the realities of evaluation, governance, integration, and unit economics.</p>
<p>Across the engagements we ran in 2025–26, five factors recur in the programmes that crossed from pilot to production:</p>
<ol>
  <li><strong>Honest evaluation harnesses</strong> — not vibe-checks, not eyeballed outputs. Production-grade evals that catch regressions before users do.</li>
  <li><strong>Workflow embedding</strong>, not chat surfaces — the value is in where the model meets the existing system of record.</li>
  <li><strong>Latency and cost as first-class design constraints</strong> from week one.</li>
  <li><strong>Clear escalation paths</strong> for low-confidence outputs.</li>
  <li><strong>Domain-specific scaffolding</strong> — retrieval, tools, and guardrails owned by people who actually know the business.</li>
</ol>
<p><em>(Full article content will be populated here once the editorial draft is finalised.)</em></p>`,
  },
  {
    category: "Case Insight",
    date: "September 2026",
    title: "Pricing in the Age of AI: Real-Time Dynamic Pricing for Retail",
    excerpt:
      "How a leading retailer moved from weekly pricing reviews to real-time algorithmic pricing — and what it means for margin, volume, and customer trust.",
    readTime: "6 min read",
    gradient: "linear-gradient(135deg, #0A1628, #007BFF)",
    body: `<p>Real-time pricing is not the same as dynamic pricing, and dynamic pricing is not the same as algorithmic markdown. Conflating them is the single most common reason pricing programmes fail to land.</p>
<p>This case insight walks through the operating-model decisions a major retailer made when moving from weekly pricing committees to a real-time engine that re-prices on signal — and how they protected margin <em>and</em> customer trust at the same time.</p>
<p><em>(Full article content will be populated here once the editorial draft is finalised.)</em></p>`,
  },
];

const InsightsSection: React.FC = () => {
  const [active, setActive] = useState<Insight | null>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (active) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [active]);

  // Close on ESC
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="insights" className="py-24 lg:py-28 bg-brand-cloud">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-5">
              <span className="section-divider-blue" />
              <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.2em] uppercase">
                Insights & Research
              </span>
            </div>
            <h2 className="font-display text-display-lg text-charcoal font-black">
              Thinking That{" "}
              <span className="text-gradient-blue">Shapes the Industry</span>
            </h2>
          </div>
          <button className="btn-outline-dark text-sm self-start lg:self-auto">
            View All Insights
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {insights.map((ins, i) => (
            <article
              key={i}
              onClick={() => setActive(ins)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(ins)}
              role="button"
              tabIndex={0}
              className="service-card bg-white rounded-xl overflow-hidden group cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
              aria-label={`Read article: ${ins.title}`}
            >
              <div
                className="overflow-hidden h-48 relative"
                style={{ background: ins.gradient }}
              >
                <div className="absolute inset-0 synapse-grid opacity-40" />
                <div className="absolute bottom-4 left-5 right-5 z-10">
                  <span className="font-display text-white/90 text-xs uppercase tracking-[0.2em] font-bold">
                    {ins.category}
                  </span>
                </div>
                <svg
                  className="absolute top-4 right-4 opacity-30"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle cx="24" cy="24" r="3" fill="white" />
                  <circle cx="10" cy="10" r="2" fill="white" />
                  <circle cx="38" cy="10" r="2" fill="white" />
                  <circle cx="38" cy="38" r="2" fill="white" />
                  <circle cx="10" cy="38" r="2" fill="white" />
                  <line x1="24" y1="24" x2="10" y2="10" stroke="white" strokeWidth="1" />
                  <line x1="24" y1="24" x2="38" y2="10" stroke="white" strokeWidth="1" />
                  <line x1="24" y1="24" x2="38" y2="38" stroke="white" strokeWidth="1" />
                  <line x1="24" y1="24" x2="10" y2="38" stroke="white" strokeWidth="1" />
                </svg>
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-body font-semibold px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue-dark border border-brand-blue/20">
                    {ins.category}
                  </span>
                  <span className="text-xs font-body text-charcoal-soft">{ins.date}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-3 leading-snug group-hover:text-brand-blue transition-colors duration-300">
                  {ins.title}
                </h3>
                <p className="font-body text-charcoal-soft text-sm leading-relaxed mb-5">
                  {ins.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-body text-charcoal-soft">{ins.readTime}</span>
                  <span className="text-xs font-body font-semibold text-brand-blue group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                    Read article
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6H10M7 3L10 6L7 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reader modal */}
      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-title"
          onClick={() => setActive(null)}
        >
          <div className="absolute inset-0 bg-brand-ink/85 backdrop-blur-sm" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-dramatic flex flex-col"
          >
            <div
              className="h-32 relative flex items-end p-7"
              style={{ background: active.gradient }}
            >
              <button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                aria-label="Close article"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M3 3L15 15M15 3L3 15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
              <div>
                <span className="text-white/80 text-xs uppercase tracking-[0.2em] font-bold">
                  {active.category} · {active.date}
                </span>
              </div>
            </div>
            <div className="overflow-y-auto p-7 lg:p-10">
              <h2
                id="article-title"
                className="font-display text-2xl lg:text-3xl font-black text-charcoal mb-5 leading-tight"
              >
                {active.title}
              </h2>
              <p className="text-charcoal-soft text-sm mb-8">
                {active.readTime} · By Synapse Consulting
              </p>
              <div
                className="prose prose-slate max-w-none font-body text-charcoal text-base leading-relaxed [&_p]:mb-4 [&_strong]:text-brand-blue [&_ol]:my-4 [&_ol]:pl-6 [&_li]:mb-2 [&_li]:list-decimal"
                dangerouslySetInnerHTML={{ __html: active.body }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InsightsSection;
