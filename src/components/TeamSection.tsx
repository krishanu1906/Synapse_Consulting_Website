import React from "react";

// Founders — bios per the changes document.
// JB: full bio reproduced VERBATIM from the doc.
// KB: tailored to highlight technology competencies (AI/ML, Cloud, architecture)
//     instead of years of experience, as the doc instructs.
const team = [
  {
    name: "Jayanta Banerjee",
    role: "Co-Founder & Managing Partner",
    designation: "Business Transformation · Retail & CPG",
    bio: "Jayanta Banerjee is a seasoned business transformation leader with 28+ years of experience driving digital, supply chain, and analytics-led transformations across Retail and CPG. He has advised CXOs on IT vision, operating models, automation, and value-realization strategies, backed by deep domain expertise in omni-channel, ERP, and supply chain optimization. Having served as a consulting lead with Infosys, he managed multimillion-dollar portfolios and built high-impact industry solutions. His career spans leadership roles across hypermarkets, e-commerce, telecom, and market research, consistently delivering scalable business value and operational excellence.",
    initials: "JB",
    accent: "blue",
  },
  {
    name: "Krishanu Banerjee",
    role: "Co-Founder & Technology Partner",
    designation: "AI/ML · Cloud Architecture · Data Engineering",
    bio: "Krishanu Banerjee leads the technology practice at Synapse, bringing hands-on competencies across AI/ML system design, cloud-native architecture, and modern data engineering. His expertise spans large language model integration, anomaly detection pipelines, distributed data platforms, and production-grade machine learning — translating cutting-edge technology into deployable analytics solutions for Retail and CPG clients. He partners closely with engineering and data science teams to ensure every Synapse engagement is built on robust, scalable, and future-ready foundations.",
    initials: "KB",
    accent: "orange",
  },
];

// "Why Synapse" tile — values updated per doc:
//   "100% Domain-Focused" (was Retail-Focused)
//   "10 Wks Avg. Time to First Value" (kept)
//   "working with 6+ international clients" (was 40+ Projects Delivered)
//   "Bengaluru — Headquartered in India"
// Plus copy update: "boutique Bengaluru-based consultancy that works exclusively in
// Retail and Consumer Goods (CPG) analytics" (per "Instead of retail, we can say
// Retail and Consumer Goods (CPG) analytics" instruction)
const whyStats = [
  { value: "100%", label: "Domain-Focused" },
  { value: "10 Wks", label: "Avg. Time to First Value" },
  { value: "6+", label: "International Clients" },
  { value: "Bengaluru", label: "Headquartered in India" },
];

const TeamSection: React.FC = () => (
  <section id="about" className="py-24 lg:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <div className="inline-flex items-center gap-2 mb-5">
          <span className="section-divider-blue" />
          <span className="text-brand-blue font-body font-semibold text-sm tracking-[0.2em] uppercase">
            Our Founders
          </span>
        </div>
        <h2 className="font-display text-display-lg text-charcoal mb-5 font-black">
          Senior Experts.{" "}
          <span className="text-gradient-blue">Hands-On Partners.</span>
        </h2>
        <p className="font-body text-charcoal-soft text-lg leading-relaxed">
          Every Synapse engagement is led directly by our founding partners — combining deep
          technical expertise with commercial acumen and decades of industry experience.
        </p>
      </div>

      {/* Founder cards */}
      <div className="grid md:grid-cols-2 gap-7 mb-16 lg:mb-20">
        {team.map((member, i) => {
          const isOrange = member.accent === "orange";
          return (
            <div
              key={i}
              className="service-card rounded-2xl overflow-hidden bg-white group flex flex-col"
            >
              {/* Header tile with brand network pattern + initials + name/role inside the colored box per doc instruction */}
              <div
                className={`relative h-56 flex flex-col justify-between p-7 ${
                  isOrange ? "bg-gradient-orange" : "bg-gradient-blue"
                }`}
              >
                <div className="absolute inset-0 synapse-grid opacity-30" />
                <div className="absolute -right-10 -bottom-10 opacity-20">
                  <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                    <g stroke="white" strokeWidth="1" fill="none">
                      <line x1="100" y1="20" x2="170" y2="60" />
                      <line x1="170" y1="60" x2="170" y2="140" />
                      <line x1="170" y1="140" x2="100" y2="180" />
                      <line x1="100" y1="180" x2="30" y2="140" />
                      <line x1="30" y1="140" x2="30" y2="60" />
                      <line x1="30" y1="60" x2="100" y2="20" />
                      <line x1="100" y1="20" x2="100" y2="100" />
                      <line x1="170" y1="60" x2="100" y2="100" />
                      <line x1="170" y1="140" x2="100" y2="100" />
                      <line x1="100" y1="180" x2="100" y2="100" />
                      <line x1="30" y1="140" x2="100" y2="100" />
                      <line x1="30" y1="60" x2="100" y2="100" />
                    </g>
                    <circle cx="100" cy="20" r="6" fill="#FFD43B" />
                    <circle cx="170" cy="60" r="6" fill="white" />
                    <circle cx="170" cy="140" r="6" fill="#FFD43B" />
                    <circle cx="100" cy="180" r="6" fill="white" />
                    <circle cx="30" cy="140" r="6" fill="#FFD43B" />
                    <circle cx="30" cy="60" r="6" fill="white" />
                    <circle cx="100" cy="100" r="9" fill="white" />
                  </svg>
                </div>

                {/* "In the blue box you can put the name and designations" — as per doc */}
                <div className="relative z-10">
                  <span className="font-display text-7xl font-black text-white/30 select-none">
                    {member.initials}
                  </span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-black text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="font-body text-white text-sm font-semibold mb-1">{member.role}</p>
                  <p className="font-body text-white/85 text-xs uppercase tracking-[0.15em] font-medium">
                    {member.designation}
                  </p>
                </div>
              </div>
              <div className="p-7 flex-1">
                <p className="font-body text-charcoal-soft text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Why Synapse box — copy and stats updated per doc instructions */}
      <div className="bg-brand-cloud rounded-2xl border border-border p-8 lg:p-12 grid lg:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-3xl lg:text-4xl font-black text-charcoal mb-5">
            Why Synapse?
          </h3>
          <p className="font-body text-charcoal-soft text-base leading-relaxed mb-4">
            We are a boutique Bengaluru-based consultancy that works exclusively in Retail and
            Consumer Goods (CPG) analytics. Unlike large generalist firms, every project benefits
            from the full attention of our founders and a lean team of specialists who have solved
            exactly these problems before.
          </p>
          <p className="font-body text-charcoal-soft text-base leading-relaxed">
            We don't pitch decks. We build tools, models, and platforms that become part of your
            commercial operating system.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {whyStats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-border p-6 text-center hover-lift"
            >
              <div className="font-display text-3xl lg:text-4xl font-black text-gradient-blue mb-1.5 leading-none">
                {s.value}
              </div>
              <div className="font-body text-xs text-charcoal-soft uppercase tracking-wider font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default TeamSection;
