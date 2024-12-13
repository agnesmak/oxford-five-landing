import React from "react";

const VisionSection = () => {
  return (
    <section className="py-20 px-4 bg-oxford-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-navy">
              Our Vision
            </h2>
            <p className="text-oxford-navy/80 text-lg leading-relaxed">
              To empower your brand to thrive in the age of AI by maximizing your brand presence and business impact in Large Language Model interactions.
            </p>
          </div>
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-oxford-blue/5 to-oxford-navy/5 p-8">
              <img
                src="/placeholder.svg"
                alt="AI Vision Illustration"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;