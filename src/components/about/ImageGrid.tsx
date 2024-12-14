import { motion } from "framer-motion";

const ImageGrid = () => {
  return (
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
  );
};

export default ImageGrid;