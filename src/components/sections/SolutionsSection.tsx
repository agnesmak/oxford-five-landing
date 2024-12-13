import React from "react";
import { Database, Brain, Globe } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 bg-oxford-navy/30">
      <div className="container mx-auto">
        <p className="text-[#FFD046] text-lg font-semibold mb-2">IMPROVE YOUR BRAND PRESENCE IN AI WITH US</p>
        <h2 className="text-3xl md:text-4xl font-bold text-oxford-white mb-12">
          Why choose <span className="text-[#FFD046]">Oxford Five</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="LLM Analytics Tool"
            description="Cutting-edge application providing data and insights regarding brand presence across various LLMs, including competitive benchmarking and trend analysis"
            Icon={Database}
          />
          <FeatureCard
            title="AI Optimization Consultancy"
            description="Provide expert guidance and strategies to enhance LLM presence, encompassing content optimization, knowledge graph integration, and LLM output management"
            Icon={Brain}
          />
          <FeatureCard
            title="Empowerment"
            description="Empower brands and companies to improve their LLM results page presence, enabling them to take control of their digital narrative in the age of artificial intelligence"
            Icon={Globe}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;