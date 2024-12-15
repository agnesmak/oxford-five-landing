import React from "react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-oxford-white text-left">
              You need <span className="line-through text-oxford-white/50">SEO</span>{" "}
              <span className="font-inter text-oxford-blue no-underline">AI-SEO</span> to maintain 
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
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden bg-oxford-navy/30 backdrop-blur-sm p-6">
              <img
                src="/lovable-uploads/bb5dfdc2-e1da-453f-82c5-97b14109351b.png"
                alt="Modern Search Interface"
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