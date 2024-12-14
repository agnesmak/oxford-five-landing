import { motion } from "framer-motion";

const AboutBanner = () => {
  return (
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
              Born from a top-tier AI/ML executive program, Oxford Five combines advanced AI search technology with deep industry expertise. We help businesses elevate their brand presence through data-driven insights and AI-powered solutions, turning complex market dynamics into actionable growth strategies.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;