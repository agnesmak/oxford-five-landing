import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImageGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-oxford-navy/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-6 max-w-6xl mx-auto">
          {/* First Row - Single Photo */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[21/9] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/21e4cc36-1aa1-4563-a90e-69d49e0b359d.png"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Second Row - 4 Equal Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[3/4] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/f63d6220-fcb7-4f4d-9574-f297fa999b37.png"
                alt="Team meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="aspect-[3/4] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/10730d96-91d6-4c49-8785-c36e5fe9873e.png"
                alt="Team planning session"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="aspect-[3/4] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/49fc3c01-f31f-4974-8a88-c90a6de1a09b.png"
                alt="Team discussion"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="aspect-[3/4] rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
              <img
                src="/lovable-uploads/128e48fe-2bcf-4328-865d-9867e4801f01.png"
                alt="Team members"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;