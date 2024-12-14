import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-sofia font-semibold text-oxford-white text-center max-w-5xl mx-auto leading-tight"
        >
          We empower brands to{" "}
          <span className="block mt-2">
            <span className="text-[#FEF7CD] text-[120%]">
              improve brand presence
            </span>
          </span>
          <span className="block mt-2">
            in AI search
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHero;