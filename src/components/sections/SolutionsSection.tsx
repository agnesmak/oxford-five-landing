import React from "react";
import { Database, BarChart3, Globe } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const SolutionsSection = () => {
  return (
    <section className="py-20 px-4 bg-oxford-navy/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-oxford-white mb-12 text-center">
          How Oxford Five can help
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Data Analytics"
            description="Transform raw data into meaningful insights with our advanced analytics solutions"
            Icon={Database}
          />
          <FeatureCard
            title="Marketing Intelligence"
            description="Make data-driven marketing decisions with our comprehensive analytics tools"
            Icon={BarChart3}
          />
          <FeatureCard
            title="Global Reach"
            description="Connect with markets worldwide through our international network and expertise"
            Icon={Globe}
          />
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;