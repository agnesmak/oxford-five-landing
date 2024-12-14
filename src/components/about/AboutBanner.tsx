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
              Oxford Five emerged from the world's Top 10 AL/ML Exec Programmes, brining together deep expertise in AI Search technology. Our founders are industry experts in their respective domains, creating a unique blend of knowledge and innovation.
            </p>
            <p className="text-lg text-oxford-white/90 leading-relaxed">
              At Oxford Five, we semalessly blend cutting-edge analytics with our expertise in marketing and customer search behaviour, empowering businesses with the tools and recommendations they need to improve their brand presence and successfully navigate through evolving AI landscape.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutBanner;