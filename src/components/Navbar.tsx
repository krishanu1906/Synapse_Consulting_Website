import React, { useState, useEffect } from "react";
import SynapseLogo from "./SynapseLogo";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#expertise" },
  { label: "Case Studies", href: "#cases" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border shadow-card py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Synapse Consulting — back to top"
        >
          <SynapseLogo variant={scrolled ? "dark" : "light"} size="md" />
        </button>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`nav-link font-body font-medium text-sm tracking-wide ${
                scrolled
                  ? "text-charcoal-soft hover:text-brand-blue"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <button onClick={() => handleNav("#contact")} className="btn-primary text-sm py-2.5 px-6">
            Contact Us
          </button>
        </div>

        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 ${scrolled ? "bg-charcoal" : "bg-white"} transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 ${scrolled ? "bg-charcoal" : "bg-white"} transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 ${scrolled ? "bg-charcoal" : "bg-white"} transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-border shadow-dramatic animate-fade-in">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="text-charcoal font-body font-medium text-base text-left hover:text-brand-blue transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav("#contact")} className="btn-primary text-sm mt-2">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
