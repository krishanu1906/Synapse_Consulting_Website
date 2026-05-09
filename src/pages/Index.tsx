import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import CPGServicesSection from "../components/CPGServicesSection";
import ExpertiseSection from "../components/ExpertiseSection";
import CPGExpertiseSection from "../components/CPGExpertiseSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ApproachSection from "../components/ApproachSection";
import InsightsSection from "../components/InsightsSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const Index: React.FC = () => (
  <div className="min-h-screen bg-white">
    <Navbar />
    <HeroSection />
    <ServicesSection />
    <CPGServicesSection />
    <ExpertiseSection />
    <CPGExpertiseSection />
    <CaseStudiesSection />
    <ApproachSection />
    <InsightsSection />
    <TeamSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
