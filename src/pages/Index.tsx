import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import AboutSection from "@/components/sections/AboutSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      <HeroSection />
      <VisionSection />
      <FeaturesSection />
      <SolutionsSection />
      <AboutSection />
      
      {/* Footer */}
      <footer className="bg-oxford-navy py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-oxford-white/60">&copy; 2024 Oxford V. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;