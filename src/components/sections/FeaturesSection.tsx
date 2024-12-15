import React from "react";
import { motion } from "framer-motion";

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
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut"
              }
            }}
          >
            <motion.div 
              className="aspect-video rounded-xl overflow-hidden bg-oxford-navy/30 backdrop-blur-sm border border-oxford-white/10 p-6"
              animate={{ 
                boxShadow: ["0px 0px 0px rgba(30,174,219,0)", "0px 0px 20px rgba(30,174,219,0.3)", "0px 0px 0px rgba(30,174,219,0)"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <motion.img
                src="/lovable-uploads/a7c075d2-cb38-4638-b77c-d654211ffbf7.png"
                alt="AI Chat Interface"
                className="w-full h-full object-contain rounded-lg"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;