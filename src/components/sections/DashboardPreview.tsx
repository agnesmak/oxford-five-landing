import { motion } from "framer-motion";

const DashboardPreview = () => {
  return (
    <div className="relative -mt-20 mb-[-100px] z-10 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300"
        >
          <img
            src="/lovable-uploads/4f3a8ef1-dad1-465b-b50d-edf87c8da41f.png"
            alt="AI Marketing Intelligence Dashboard"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DashboardPreview;