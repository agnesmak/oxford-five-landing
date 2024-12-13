import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-white text-left">
              You need <span className="line-through text-oxford-white/50">SEO</span>{" "}
              <span className="font-garamond text-oxford-blue no-underline">AI-SEO</span> to maintain 
              your brand presence in AI-Powered Search
            </h2>
            <p className="text-oxford-white/80 text-base leading-relaxed text-left">
              Navigate the AI revolution with our advanced metrics. We measure your brand's presence 
              and performance in AI-powered searches, from ChatGPT to Google's smart results. 
              Become the go-to answer for both humans and algorithms.
              <br /><br />
              Engage Oxford Five to not just see where you stand, but also get the roadmap to dominate.
            </p>
          </div>
          <div className="relative animate-fade-in">
            <div className="aspect-video rounded-xl overflow-hidden bg-oxford-navy/30 backdrop-blur-sm border border-oxford-white/10 p-6">
              <img
                src="/placeholder.svg"
                alt="Analytics Dashboard Mockup"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;