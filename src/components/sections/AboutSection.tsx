import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-oxford-navy/50">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-oxford-white">About Us</h2>
          <p className="text-lg text-oxford-white/80 mb-8">
            Oxford V is a leading marketing technology and data analytics consulting firm. 
            We help businesses harness the power of data to drive growth and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;