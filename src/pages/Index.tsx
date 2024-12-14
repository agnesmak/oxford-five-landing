import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutSection from "@/components/sections/AboutSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
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
                  <Link to="/about" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/oxford-v" 
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
                  <Link 
                    to="/consultation" 
                    target="_blank"
                    className="text-oxford-white/60 hover:text-oxford-white transition-colors"
                  >
                    Book a Free Consultation
                  </Link>
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
            <p className="text-oxford-white/60">&copy; 2024 Oxford V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;