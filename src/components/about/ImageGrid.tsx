import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const ImageGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-16 bg-oxford-navy/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large image 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="col-span-1 aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/f63d6220-fcb7-4f4d-9574-f297fa999b37.png"
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Middle row with two equal-sized images */}
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="col-span-1 aspect-video rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/10730d96-91d6-4c49-8785-c36e5fe9873e.png"
              alt="Team planning session"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-span-1 aspect-video rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/49fc3c01-f31f-4974-8a88-c90a6de1a09b.png"
              alt="Team discussion"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* New fifth image */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="col-span-1 md:col-span-1 aspect-square rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
          >
            <img
              src="/lovable-uploads/128e48fe-2bcf-4328-865d-9867e4801f01.png"
              alt="Team members"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;