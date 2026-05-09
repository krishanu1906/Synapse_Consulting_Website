import React from "react";
import SynapseLogo from "./SynapseLogo";

// Doc-specified footer changes:
// 1. CTA banner: "Ready to Unlock the Value in Your Business Data?" (was "Retail Data")
// 2. Description: "retail and cpg analytics data and analytics consultancy helping
//    organizations turn data into..." (was "India's specialist retail analytics consultancy...")
// 3. "Solutions we can suppress for the time being" → suppressed
// 4. "Under company we can suppress careers and our team. Just keep partners and
//    should redirect to our profiles" → only Partners (links to #about which is the founders)
// 5. "Insights and research should redirect to the research articles" → links to #insights
// 6. "Events and newsletters can be supressed for the moment" → suppressed
// 7. "year should be 2026 (make it dynamic, should show current year)" → new Date().getFullYear()
// 8. "Privacy policy and terms of service can be removed" → removed

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-ink border-t border-white/8">
      {/* Top CTA banner */}
      <div className="bg-gradient-blue py-14 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 80% 50%, #FFD43B 0%, transparent 50%), radial-gradient(circle at 20% 50%, #FF6B00 0%, transparent 50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-black text-white mb-4">
            Ready to Unlock the Value in Your Business Data?
          </h2>
          <p className="font-body text-white/85 text-lg mb-8 max-w-2xl mx-auto">
            No pitch decks, no obligation — just an honest discussion about where you are and
            where you want to get to.
          </p>
          <button onClick={() => handleNav("#contact")} className="btn-outline-white">
            Book a Discovery Call
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 inline-block rounded-lg p-3 mb-5">
              <SynapseLogo variant="light" size="md" />
            </div>
            <p className="font-body text-white/60 text-sm leading-relaxed mt-2 max-w-md">
              A boutique retail and CPG data and analytics consultancy helping organizations turn
              data into profitable decisions that drive growth.
            </p>
            <div className="mt-6 space-y-2">
              <p className="font-body text-white/55 text-sm flex items-center gap-2">
                <span className="text-brand-cyan">📍</span>
                Bangalore, Karnataka, India
              </p>
              <p className="font-body text-white/55 text-sm flex items-center gap-2">
                <span className="text-brand-cyan">✉️</span>
                contact@synapseconsulting.in
              </p>
            </div>
          </div>

          {/* Per doc: only Company (Partners only) and Resources (Insights & Research, Case Studies) */}
          <div className="lg:col-span-3">
            <p className="font-body text-white text-xs uppercase tracking-[0.2em] font-bold mb-5">
              Company
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNav("#about")}
                  className="font-body text-white/55 text-sm hover:text-brand-cyan transition-colors text-left"
                >
                  Partners
                </button>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="font-body text-white text-xs uppercase tracking-[0.2em] font-bold mb-5">
              Resources
            </p>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => handleNav("#insights")}
                  className="font-body text-white/55 text-sm hover:text-brand-cyan transition-colors text-left"
                >
                  Insights & Research
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("#cases")}
                  className="font-body text-white/55 text-sm hover:text-brand-cyan transition-colors text-left"
                >
                  Case Studies
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/40 text-xs">
            © {currentYear} Synapse Consulting. All rights reserved. Bengaluru, India.
          </p>
          <p className="font-body text-white/40 text-xs">
            Founded by Jayanta Banerjee & Krishanu Banerjee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
