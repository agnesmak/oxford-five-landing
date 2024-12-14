import React from "react";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-dark">
      <Navbar />
      
      {/* Tagline Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-sofia font-semibold text-oxford-white text-center max-w-5xl mx-auto leading-tight"
          >
            We empower brands to improve their brand presence in the era of AI search
          </motion.h1>
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
              className="col-span-1 md:col-span-2 aspect-video rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/21e4cc36-1aa1-4563-a90e-69d49e0b359d.png"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small image 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-1 aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/f63d6220-fcb7-4f4d-9574-f297fa999b37.png"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Small image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-1 aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/49fc3c01-f31f-4974-8a88-c90a6de1a09b.png"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Large image 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-1 md:col-span-2 aspect-video rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/fa1170b5-3037-4d0e-af63-1d9ad5b2b24e.png"
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-oxford-navy to-oxford-dark p-8 md:p-12 rounded-2xl hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="max-w-4xl mx-auto space-y-6 text-center">
              <h2 className="text-3xl md:text-4xl font-sofia font-semibold text-oxford-white mb-6">
                Born from Oxford University's Excellence
              </h2>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                Oxford Five emerged from the world's Top 10 AL/ML Exec Programmes, brining together deep expertise in AI Search technology. Our founders are industry experts in their respective domains, creating a unique blend of knowledge and innovation.
              </p>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                At Oxford Five, we semalessly blend cutting-edge analytics with our expertise in marketing and customer search behaviour, empowering businesses with the tools and recommendations they need to improve their brand presence and successfully navigate through evolving AI landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-oxford-navy py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com/company/oxford-v" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-oxford-white/60 hover:text-oxford-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link 
                    to="/consultation" 
                    className="text-oxford-white/60 hover:text-oxford-white transition-colors"
                  >
                    Book a Free Consultation
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="text-oxford-white text-lg font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-oxford-white/60 hover:text-oxford-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-oxford-white/10 mt-12 pt-8 text-center">
            <p className="text-oxford-white/60">&copy; 2024 Oxford V. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;