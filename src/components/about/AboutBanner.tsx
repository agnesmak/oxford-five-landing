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
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-[2.16rem] font-sofia font-semibold text-oxford-white mb-6">
                Born from Oxford University's Excellence
              </h2>
              <p className="text-lg text-oxford-white/90 leading-relaxed">
                Born from a top-tier AI/ML executive program, Oxford Five combines advanced AI search technology with deep industry expertise. We help businesses elevate their brand presence through data-driven insights and AI-powered solutions, turning complex market dynamics into actionable growth strategies.
              </p>
            </div>
            <div className="flex items-center">
              <img 
                src="https://globalnetwork.io/sites/default/files/styles/member_school_logo_main_page/public/2019-09/SBS_LOGO_RGB_KEYLINE.png?itok=hmsskXBw" 
                alt="Saïd Business School" 
                className="h-28 md:h-32 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;