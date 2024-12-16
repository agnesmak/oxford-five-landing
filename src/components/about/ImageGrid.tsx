import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImageGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-oxford-navy/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/a3fca8f5-783e-4c1b-8506-2a2aacf14b01.png"
              alt="Oxford V Team and Activities"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;