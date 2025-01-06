import React from "react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-oxford-navy/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-sofia font-semibold mb-6 text-oxford-white">About Us</h2>
          <p className="text-lg text-oxford-white/80 mb-8">
            Born from the professional AI program of Oxford University, Oxford Five brings together world-class expertise in AI and search technology.
            
            Our deep understanding of artificial intelligence and its applications in business transformation sets us apart. We're passionate about leveraging cutting-edge AI technologies to revolutionize how brands interact with their audiences in the new digital age.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="secondary" size="lg">
              <a href="/aboutus">Learn more</a>
            </Button>
            <Button asChild className="bg-gradient-to-r from-[#045EEC] to-[#0F2D6E] hover:opacity-90" size="lg">
              <a href="https://c10lyxv6rnw.typeform.com/to/V9ZDsHul" target="_blank" rel="noopener noreferrer">
                Book a free consultation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;