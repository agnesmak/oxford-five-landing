import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-sofia font-semibold text-oxford-white text-left max-w-5xl leading-tight"
        >
          We empower brands to{" "}
          <span className="text-[#FFD046] text-[120%] inline">
            improve brand presence
          </span>
          {" "}in AI search
        </motion.h1>
      </div>
    </section>
  );
};

export default AboutHero;