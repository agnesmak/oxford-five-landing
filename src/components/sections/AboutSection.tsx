import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-oxford-navy/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-oxford-white">About Us</h2>
          <p className="text-lg text-oxford-white/80 mb-8">
            Born from the professional AI program of Oxford University, Oxford Five brings together world-class expertise in AI and search technology.
            
            Our deep understanding of artificial intelligence and its applications in business transformation sets us apart. We're passionate about leveraging cutting-edge AI technologies to revolutionize how brands interact with their audiences in the new digital age.
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/about">Learn more</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;