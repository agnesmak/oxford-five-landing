import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      {/* Tagline Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-6xl font-sofia font-semibold text-oxford-white text-center max-w-5xl mx-auto leading-tight animate-fade-up">
            We empower brands to improve their brand presence in the era of AI search
          </h1>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 bg-oxford-navy/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {/* Large image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-1 md:col-span-2 aspect-video rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/91f5b138-d62e-4906-8c58-3ee7492e9edf.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 aspect-square rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/040afd7e-a35a-4a77-93a3-cea20b0b3570.png"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 aspect-square rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/ae717bbf-8ff5-4700-afc3-af0f0537d64e.png"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Large image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1 md:col-span-2 aspect-video rounded-xl overflow-hidden"
            >
              <img
                src="/lovable-uploads/e9dd752d-eb96-4f94-8bae-0357c3f40bef.png"
                alt="Oxford gathering"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-oxford-navy to-oxford-dark p-8 md:p-12 rounded-2xl">
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-sofia font-semibold text-oxford-white mb-6">
                Born from Oxford University's Excellence
              </h2>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                Oxford Five emerged from the prestigious halls of Oxford University, bringing together deep expertise in AI Search technology. Our founders are industry experts in their respective domains, creating a unique blend of knowledge and innovation.
              </p>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                At Oxford Five, we seamlessly blend cutting-edge analytics with our expertise in marketing and search, empowering businesses with the tools and recommendations they need to improve their brand presence and successfully navigate through evolving customer search behaviors.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;