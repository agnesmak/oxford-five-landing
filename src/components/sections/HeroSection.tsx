import React from "react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-sofia font-semibold text-oxford-white mb-6 animate-fade-up">
          Improve Your Brand Presence Through
          <span className="block mt-2 text-[#0065FF]">
            Actionable Insights
          </span>
        </h1>
        <p className="text-base text-oxford-white/80 mb-8 max-w-2xl mx-auto animate-fade-up">
          As consumers embrace AI tools like ChatGPT and Google Gemini, there are challenges for traditional SEO to keep up. Our AI-SEO solutions leverage advanced benchmarks to optimize your brand's presence in the AI-driven search landscape.
        </p>
        <button className="bg-gradient-to-r from-[#045EEC] to-[#0F2D6E] text-oxford-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity animate-fade-up">
          Book a free consultation
        </button>
      </div>
    </section>
  );
};

export default HeroSection;