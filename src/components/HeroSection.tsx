import React from "react";

// Stats taken VERBATIM from the changes document:
// "Improved forecast accuracy (achieve up to 98%+ accuracy) AI-driven demand models that enhance planning"
// "Higher Availability (Core SKUs – 99%+) Reduced stock-outs and better shelf performance"
// "Promotion ROI Lifted (~ 10% to 20% uplift) Data-backed offer design delivering double-digit gains"
// "6–8 Weeks to First Insight - Rapid value delivery through modular analytics assets"
const stats = [
  {
    value: "98%+",
    title: "Forecast Accuracy",
    subtitle: "AI-driven demand models that enhance planning",
  },
  {
    value: "99%+",
    title: "Higher Availability",
    subtitle: "Reduced stock-outs and better shelf performance on core SKUs",
  },
  {
    value: "10–20%",
    title: "Promotion ROI Uplift",
    subtitle: "Data-backed offer design delivering double-digit gains",
  },
  {
    value: "6–8 Wks",
    title: "Time to First Insight",
    subtitle: "Rapid value delivery through modular analytics assets",
  },
];

const HeroSection: React.FC = () => {
  const handleNav = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-hero noise-overlay">
      {/* Decorative blue radial */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle at 80% 20%, #007BFF 0%, transparent 60%)" }}
      />
      {/* Decorative orange radial (accent) */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle at 20% 80%, #FF6B00 0%, transparent 60%)" }}
      />
      {/* Subtle synapse network grid */}
      <div className="absolute inset-0 pointer-events-none synapse-grid opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* LEFT: Copy */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-7 animate-fade-in">
              <span className="w-10 h-0.5 bg-brand-orange" />
              <span className="text-brand-cyan font-body font-semibold text-sm tracking-[0.2em] uppercase">
                Your Boutique Consulting Partner for AI-Powered Analytics Excellence
              </span>
            </div>

            <h1 className="font-display text-display-xl text-white mb-6 animate-fade-up font-black">
              Turn Your Data Into{" "}
              <span className="text-gradient-orange">Profitable</span>
              <br />
              Decisions
            </h1>

            <p className="font-body text-lg lg:text-xl text-white/85 leading-relaxed mb-10 animate-fade-up delay-200 max-w-2xl">
              We bring together strategy, analytics, and AI to help Retail and CPG organizations
              make faster, smarter, and more profitable decisions. With deep domain expertise and
              purpose-built intelligence, we reduce waste, improve availability, and maximize ROI
              across the value chain. Our boutique approach delivers outcomes that scale — always
              with profitability at the core and speed in execution.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
              <button
                onClick={() => handleNav("#services")}
                className="btn-primary animate-pulse-blue"
              >
                Explore Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={() => handleNav("#cases")}
                className="btn-outline-white"
              >
                View Case Studies
              </button>
            </div>
          </div>

          {/* RIGHT: Hero visual — synapse-network illustration in brand colors */}
          <div className="lg:col-span-5 hidden lg:flex justify-center items-center animate-fade-up delay-400">
            <HeroNetworkGraphic />
          </div>
        </div>

        {/* Stats strip — values from changes doc */}
        <div className="mt-16 lg:mt-20 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-up delay-500">
          {stats.map((stat, i) => (
            <div key={i} className="text-center lg:text-left">
              <div className="font-display text-4xl lg:text-5xl font-black mb-1 text-gradient-mix">
                {stat.value}
              </div>
              <div className="font-body text-base font-semibold text-white tracking-wide mb-1">
                {stat.title}
              </div>
              <div className="font-body text-xs text-white/60 leading-relaxed">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/** Brand-aligned hero illustration: hexagonal synapse network with pulsing nodes */
const HeroNetworkGraphic: React.FC = () => (
  <div className="relative w-full max-w-[460px] aspect-square">
    <div
      className="absolute inset-0 rounded-full blur-3xl opacity-30"
      style={{ background: "radial-gradient(circle, #007BFF 0%, transparent 65%)" }}
    />
    <svg viewBox="0 0 400 400" className="relative z-10 w-full h-full drop-shadow-2xl">
      {/* connections */}
      <g stroke="#33CCFF" strokeWidth="1.2" opacity="0.7" fill="none">
        <line x1="200" y1="60" x2="320" y2="130" />
        <line x1="320" y1="130" x2="320" y2="270" />
        <line x1="320" y1="270" x2="200" y2="340" />
        <line x1="200" y1="340" x2="80" y2="270" />
        <line x1="80" y1="270" x2="80" y2="130" />
        <line x1="80" y1="130" x2="200" y2="60" />
        <line x1="200" y1="60" x2="200" y2="200" />
        <line x1="320" y1="130" x2="200" y2="200" />
        <line x1="320" y1="270" x2="200" y2="200" />
        <line x1="200" y1="340" x2="200" y2="200" />
        <line x1="80" y1="270" x2="200" y2="200" />
        <line x1="80" y1="130" x2="200" y2="200" />
        <line x1="140" y1="95" x2="260" y2="95" />
        <line x1="260" y1="305" x2="140" y2="305" />
      </g>
      {/* center pulsing core */}
      <circle cx="200" cy="200" r="22" fill="#FF6B00" className="animate-pulse-soft" />
      <circle cx="200" cy="200" r="36" fill="none" stroke="#FF6B00" strokeWidth="1.5" opacity="0.4" />
      <circle cx="200" cy="200" r="60" fill="none" stroke="#007BFF" strokeWidth="1" opacity="0.3" strokeDasharray="3 5" />

      {/* outer nodes */}
      <circle cx="200" cy="60" r="11" fill="#FFD43B" />
      <circle cx="320" cy="130" r="11" fill="#FF6B00" />
      <circle cx="320" cy="270" r="10" fill="#FF6B00" />
      <circle cx="200" cy="340" r="9" fill="#FFD43B" />
      <circle cx="80" cy="270" r="11" fill="#007BFF" />
      <circle cx="80" cy="130" r="10" fill="#FFD43B" />

      {/* mid nodes */}
      <circle cx="140" cy="95" r="7" fill="#FFD43B" />
      <circle cx="260" cy="95" r="7" fill="#FF6B00" />
      <circle cx="260" cy="305" r="7" fill="#FFD43B" />
      <circle cx="140" cy="305" r="7" fill="#33CCFF" />

      {/* small accent dots */}
      <circle cx="160" cy="240" r="4" fill="#33CCFF" />
      <circle cx="240" cy="160" r="4" fill="#007BFF" />
      <circle cx="105" cy="200" r="4" fill="#33CCFF" />
      <circle cx="295" cy="200" r="4" fill="#007BFF" />
    </svg>
  </div>
);

export default HeroSection;
