import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import DashboardPreview from "@/components/sections/DashboardPreview";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutSection from "@/components/sections/AboutSection";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <DashboardPreview />
      <VisionSection />
      <FeaturesSection />
      <SolutionsSection />
      <AboutSection />
      
      <footer className="bg-oxford-navy py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <button onClick={handleAboutClick} className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <span className="text-oxford-white/60 cursor-not-allowed">
                    Blog (coming soon)
                  </span>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/company/oxford-five-ai/?viewAsMember=true"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-oxford-white/60 hover:text-oxford-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://c10lyxv6rnw.typeform.com/to/V9ZDsHul" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-oxford-white/60 hover:text-oxford-white transition-colors"
                  >
                    Book a Free Consultation
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-oxford-white/10 mt-12 pt-8 text-center">
            <p className="text-oxford-white/60">&copy; 2024 Oxford Five All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;